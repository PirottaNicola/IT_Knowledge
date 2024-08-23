fn main() {
    println!("Hello, world!");

    // ask for input string
    println!("Please enter a date in this format: YYYY-MM-DD");
    let mut input = String::new();

    // read input string
    std::io::stdin().read_line(&mut input).unwrap();

    // remove trailing newline
    input = input.trim().to_string();

    // perform regex match
    let re = regex::Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap();

    if re.is_match(&input) {
        println!("The input string is a date in the format YYYY-MM-DD");
    } else {
        println!("The input string is not a date in the format YYYY-MM-DD");
    }
    
}
