# Varios Dotfiles
## Programs:
* [Emacs](#emacs)
* [i3](#i3)
  * [DMenu](#dmenu)
  * [Conky is Available](#conky)
* [Synaptics Configs](#synaptics-configs)

## Emacs
Emacs config list located in .emacs and .emacs.d/. Additional files that should be created or linked are .ido.last and .smex-items. There a quite a few plugins enabled, but the highlights are:
* EVIL Mode
* Flycheck, with plugins for several languages
* CSharp Mode
* auto-complete-mode, with plugins for several languages
* naquadah theme
* ido-mode
* smex-mode
* org-mode

## i3 
i3 config is located .i3/config. 

## DMenu
Using dmenu-recent-aliases from: https://github.com/orschiro/dmenu-scripts-collection
This is in .i3/dmenu_recent_alias

## Conky
A conky i3bar configuration is available in .i3/conkyrc. It uses dbus to communicate with a running instance of spotify and display information in the status bar. To use the conky version, replace the:
	status_command i3status
line with:
	status_command conky -c ~/.i3/conkyrc

## Synaptics Configs
This goes in the 50-synaptics.conf file.
Locations:
* Linux Mint 17/Ubuntu: /usr/share/X11/xorg.conf.d/
* Arch Linux: /etc/X11/xorg.conf.d/
These go in an inputclass section for the touchpad:
	Option "VertTwoFingerScroll" "on"
	Option "HorizTwoFingerScroll" "on"
	Option "VertEdgeScroll" "off"
	Option "HorizEdgeScroll" "off"
	Option "VertScrollDelta" "-111"
	Option "HorizScrollDelta" "-111"
