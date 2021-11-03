# GIT

##  version: 
`git –version` 

##  init: 
`git init`: Initialise a git project

##  status:
`git status`: get the status of the project: author file track and untracks... 

##  log:
Get the history of commits  
`git log`: list all the commits of the current branch to the Root  
`git log --oneline`  
`git log --oneline specificFile.html`  
`git log --all --decorate --oneline --graph`: display all the branch graphicaly

## add:
Add a file to be commited  
`git add myFile.html mySecondFile.html`: to add 2 files  
`git add .`: add all the files
 
## rm:
Remove a file from tracking  
`git rm myFile.html`: remove the file and untrack it  
`git rm --cached myFile.html`: untrack the file but keep it in the folder

## commit:
Make a commit  
`git commit -m "my message"`  
`git commit -am "my message"`: stage all file that are tracked and commit

## config:
Configure user  
`git config --global user.name "myName"`  
`git config user.name "myName"`  
`git config --global user.email "myEmail"`  
`git config user.email "myEmail"`

## checkout:
Checkout a branch  
`git checkout 50563a5`: the id of the commit to go back to  
`git checkout master`: to go to the last commit of master  
`git checkout myBranchName`: to go to the last commit of the branch  
`git checkout myTagName`  
`git checkout -b myNewBranchName`: create and check out a new branch  
`git checkout nameOfTheRemoteRepositpry/branchName`

## tag:
`git tag -a v1.0 -m "myTagName"`  
`git tag`: get all the tags

## revert:
`git revert 56ebf7`: add a commit at the end which is a copy of the commit requested

## reset:
`git reset`: un-stage files that are not commited  
`git reset --hard`: reset all tracked files to the last commit

## clean:
`git clean -f`: remove untrack files

## branch: 
`git branch`: list all the branch  
`git branch myBranchName`: create a new branch  
`git branch -d myBranch`: delete the branch  
`git branch -r`: list the remote branch

## merge: 
`git merge myBranch`: merge with the current branch  
`git merge myRemoteRepository/branchName` 

## rebase: 
`git rebase master`  
`git rebase -i master`: rebase interactively: must be combine with pick & squash to clean the commits  
`pick 5cf316e my message`: to keep the commit  
`squash 964e013 another message`: to remove the commit from the rebase  
`edit db96c72 old message`: to edit the commit

## remote: 
`git remote`: to see the remote repository of the project  
`git remote -v`: verbose  
`git remote add nameOfTheRemoteRepository http://urloftheremoterepository` 

## fetch: 
`git fetch nameOfTheRemoteRepository` 

## push: 
`git push nameOfTheRemoteRepositpry nameOfTheBranch`

## clone: 
`git clone urlOfTheRemoteRepository`

## alias: 
`git config --global alias.view "log --all --decorate --oneline --graph"`

## stash: 
`git stash`: to put aside some code  
`git stash list`: to get all the stashes  
`git stash clear`: to remove all stashes  
`git stash pop 1`: to get the stash 1