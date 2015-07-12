# Various Dotfiles
This is a set of various configuration changes that I've made to my system which encompasses my dotfiles, in addition to a few system settings such as touchpad configs and thinkpad-specific modifications. This branch is devoted to my configurations when using the Cinnamon DE. For my configurations when using i3, see the master branch.

## Programs:
* [zsh](#zsh)
  * [Tmux](#tmux)
* [Emacs](#emacs)
* [Thinkpad Modifications](#thinkpad-modifications)

## zsh
For my shell, I use zsh. My configuration relies on prezto, which can be found here: https://github.com/sorin-ionescu/prezto. I set it up for most of its nice features, including easy history search, git support, completion, syntax-highlighting, and built-in tmux support.

## Tmux
My prezto configuration automatically attaches to a tmux session. I bind my tmux key to C-a, and I use python-powerline for my tmux status. On Arch, powerline is easily installed from the AUR, with the python-powerline-git package.

## Emacs
I've switched to using Spacemacs, which can be found at https://github.com/syl20bnr/spacemacs. My spacemacs configuration enables several layers, switches the powerline to arrow separators, and uses Bash tp run all commands when in GUI mode. This works around and issue I have in GUI mode where the combination of zsh, tmux, and spacemacs don't get along. The following is a list of programs I use in as part of Spacemacs layers that should be available on the path. On Arch, they are usually a yaourt -S away:
* aspell-en
* auctex
* cargo
* clang
* go
* gocode
* global
* racer - Requires additional setup. See instructions at https://github.com/phildawes/racer. Notably, my config expects a copy of the rust source at ~/local/src/rust. The RUST_SRC_PATH variable must be set. A good place for this is .pam_environment, which can be seen in this repo.
* rust

## Other Programs
I'm using tlp to manage laptop power, with all of the thinkpad extenstions installed. tlp can be found here: http://linrunner.de/en/tlp/tlp.html. My tlp config can be found below. It's mostly the standard config, but wifi is disabled on ethernet connect and reenabled on disconnect
