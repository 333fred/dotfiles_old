# Various Dotfiles
This is a set of various configuration changes that I've made to my system which encompasses my dotfiles, in addition to a few system settings such as touchpad configs and thinkpad-specific modifications.

## Programs:
* [Emacs](#emacs)
* [i3](#i3)
  * [DMenu](#dmenu)
  * [Conky](#conky)
* [Synaptics Configs](#synaptics-configs)
* [Thinkpad Modifications](#thinkpad-modifications)

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
```bash
	status_command i3status
```
line with:
```bash
	status_command conky -c ~/.i3/conkyrc
```
The spotify dbus scripts were taken from here: https://gist.github.com/red-noise/9789642

## Synaptics Configs
This goes in the 50-synaptics.conf file.
Locations:
* Linux Mint 17/Ubuntu: /usr/share/X11/xorg.conf.d/
* Arch Linux: /etc/X11/xorg.conf.d/
These go in an inputclass section for the touchpad:
```bash
	Option "VertTwoFingerScroll" "on"
	Option "HorizTwoFingerScroll" "on"
	Option "VertEdgeScroll" "off"
	Option "HorizEdgeScroll" "off"
	Option "VertScrollDelta" "-111"
	Option "HorizScrollDelta" "-111"
```

## Thinkpad Modifications
On my T520, there are issues with iwlwifi and the 5GHz band. Disable the 5GHz band with a file located in /etc/modprode.d/iwlwifi-disable11n.conf:
```bash
	options iwlwifi 11n_disable=1
```
