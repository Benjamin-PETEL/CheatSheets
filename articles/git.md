# GIT

##  version: 

    git –version

##  init: 

Initialise a git project:

    git init

##  status:

get the status of the project: author file track and untracks...

    git status 

##  log:
Get the history of commits  
list all the commits of the current branch to the Root

    git log
    git log --oneline
    git log --oneline specificFile.html

display all the branch graphicaly:

    git log --all --decorate --oneline --graph

## add:
Add a file to be commited  
to add 2 files:

    git add myFile.html mySecondFile.html

add all the files:

    git add .
 
## rm:
Remove a file from tracking  
remove the file and untrack it

    git rm myFile.html

untrack the file but keep it in the folder:

    git rm --cached myFile.html

## commit:
Make a commit  

    git commit -m "my message"

stage all file that are tracked and commit:

    git commit -am "my message"

## config:
Configure user:

    git config --global user.name "myName"
    git config user.name "myName"
    git config --global user.email "myEmail"
    git config user.email "myEmail"

## checkout:
Checkout a branch  
the id of the commit to go back to

    git checkout 50563a5`

to go to the last commit of master:

    git checkout master

to go to the last commit of the branch:

    git checkout myBranchName
    git checkout myTagName

create and check out a new branch:

    git checkout -b myNewBranchName
    git checkout nameOfTheRemoteRepositpry/branchName

## tag:

    git tag -a v1.0 -m "myTagName"

get all the tags:

    git tag

## revert:

add a commit at the end which is a copy of the commit requested

    git revert 56ebf7

## reset:

un-stage files that are not commited
    
    git reset

reset all tracked files to the last commit:

    git reset --hard

## clean:

remove untrack files:

    git clean -f

## branch: 

list all the branch:

    git branch

create a new branch:

    git branch myBranchName

delete the branch:

git branch -d myBranch

list the remote branch:

    git branch -r

## merge: 

merge with the current branch:

    git merge myBranch
    git merge myRemoteRepository/branchName

## rebase: 

    git rebase master

rebase interactively: must be combine with pick & squash to clean the commits:

    git rebase -i master

to keep the commit:

    pick 5cf316e my message

to remove the commit from the rebase:

    squash 964e013 another message

to edit the commit:

    edit db96c72 old message

## remote: 

to see the remote repository of the project:

    git remote

verbose:

    git remote -v
    git remote add nameOfTheRemoteRepository http://urloftheremoterepository

## fetch: 
    
    git fetch nameOfTheRemoteRepository

## push: 
    
    git push nameOfTheRemoteRepositpry nameOfTheBranch

## clone: 

    git clone urlOfTheRemoteRepository

## alias: 
    
    git config --global alias.view "log --all --decorate --oneline --graph"

## stash: 

to put aside some code:

    git stash

to get all the stashes:

    git stash list

to remove all stashes:

    git stash clear

to get the stash 1:

    git stash pop 1