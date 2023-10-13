# Git tutorial for dummies

## Initialize and push a local repository to a remote repository

- create a folder for your project
- open the folder in your terminal
- run `git init` to initialize git in the folder
- run `git status` to see the status of the git repository
- create a file in the folder
- run `git add <file-name>` to add the file to the staging area
- run `git add .` to add all the files in the folder to the staging area
- run `git commit -m "commit message"` to commit the changes in the staging area to the repository with a message describing the changes made
- In order to create the remote repository you need to create a repository on github or gitlab or bitbucket.
- After you created the online repository, run `git remote add origin <url-of-repository>` to add the remote repository to the local repository.
- Run `git remote -v` to see the remote repositories linked to the local repository.
- Run `git push -u origin master` to push the changes in the local repository to the remote repository. The `-u` flag is used to set the upstream branch. After setting the upstream branch, fot the next pushes you can just run `git push`.

## Clone a remote repository

- create a folder for your project
- open the folder in your terminal
- run `git clone <url-of-repository>` to clone the remote repository to the local repository

## Pull changes from a remote repository

- run `git pull origin master` to pull the changes from the remote repository to the local repository
- run `git pull` to pull the changes from the remote repository to the local repository
- run `git pull --rebase origin master` to pull the changes from the remote repository to the local repository and rebase the commits
- run `git pull --rebase` to pull the changes from the remote repository to the local repository and rebase the commits
- run `git pull --rebase=preserve origin master` to pull the changes from the remote repository to the local repository and rebase the commits preserving the merge commits

## Create and use a branch

- run `git branch <branch-name>` to create a branch
- run `git checkout <branch-name>` to switch to the branch
- run `git push origin <branch-name>` to push the branch to the remote repository
- run `git branch` to see the branches
- run `git checkout master` to switch to the master branch
- run `git merge <branch-name>` to merge the branch with the master branch
- run `git branch -d <branch-name>` to delete the branch
- run `git push origin --delete <branch-name>` to delete the branch from the remote repository
