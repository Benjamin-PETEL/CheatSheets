# LINUX

## SHELL

### ZSH

check the version of ZSH (and if it is install)

    `zsh --version`

Install ZSH for debian or arch:

    `sudo apt install zsh`
    `sudo paman -Syu zsh`

Change the shell for the current user:

    `chsh -s$(which zsh)`

Change the shell for all consoles:

    `chsh -s /bin/zsh`

Exit the shell and restart the console  
Check which shell is used:

    `echo $SHELL`