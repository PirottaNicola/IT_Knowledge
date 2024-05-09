import pandas as pd

# Read the CSV file
df = pd.read_csv('Articoli-miei.csv')

# preprocess the columns: remove the leading and trailing whitespaces, and convert to lowercase, and remove the accents from the strings
df['colonna1'] = df['colonna1'].str.strip().str.lower().str.normalize('NFKD').str.encode('ascii', errors='ignore').str.decode('utf-8')
df['colonna2'] = df['colonna2'].str.strip().str.lower().str.normalize('NFKD').str.encode('ascii', errors='ignore').str.decode('utf-8')

# scan the columns and find the articles that are present in the second column but not in the first column
diff = df[~df['colonna2'].isin(df['colonna1'])][['colonna2']]

# scan the columns and find the articles that are present in the first column but not in the second column
diff2 = df[~df['colonna1'].isin(df['colonna2'])][['colonna1']]

# rename the columns
diff.columns = ['Articolo presente in colonna 2 ma non in colonna 1']
diff2.columns = ['Articolo presente in colonna 1 ma non in colonna 2']

# merge the two dataframes
diff = pd.concat([diff, diff2], ignore_index=True)

# Save the missing articles to a xlsx file
diff.to_excel('Articoli-mancanti.xlsx', index=False)
# and in a csv file
diff.to_csv('Articoli-mancanti.csv', index=False)

# Print the missing articles
print(diff)