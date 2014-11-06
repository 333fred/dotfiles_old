# Various Dotfiles
This is a set of various configuration changes that I've made to my system which encompasses my dotfiles, in addition to a few system settings such as touchpad configs and thinkpad-specific modifications.

## Programs:
* [Emacs](#emacs)
* [i3](#i3)
  * [DMenu](#dmenu)
  * [i3status](#i3status)
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
i3 config is located .i3/config. My i3 is themed to go with the Numix Theme, found here: https://numixproject.org/ 

## DMenu
Using dmenu-recent-aliases from: https://github.com/orschiro/dmenu-scripts-collection
This is in .i3/dmenu_recent_alias

## i3status 
My i3status uses a wrapper script to determine the currently playing spotify song and display it and the artist. If spotify isn't running, then the area will be empty. The python wrapper script was taken from here: http://code.stapelberg.de/git/i3status/tree/contrib/wrapper.py, and the spotify dbus scripts were taken from here: https://gist.github.com/red-noise/9789642
The other information on the bar is:
* Current System Volume
* Space on /
* Space on /home
* Wireless connection, signal quality, ssid, speed, and ip address
* Wired connection, ip, speed
* Battery/Charge, charge percent, time remaining (charge or decharge)
* CPU Usage (avg over all cores)
* Date/Time (year, month, day, hour, minute, sec (updates every 5 seconds)), military time

The .i3config file should go in ~/, and will be autodetected by i3status if there.

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
