# Various Dotfiles
This is a set of various configuration changes that I've made to my system which encompasses my dotfiles, in addition to a few system settings such as touchpad configs and thinkpad-specific modifications.

## Programs:
* [Emacs](#emacs)
  * [OmniSharp](#omnisharp)
  * [gocode](#gocode)
* [i3](#i3)
  * [Mutate](#mutate)
  * ~~[DMenu](#dmenu)~~
  * [i3status](#i3status)
  * [Wallpapers](#wallpaper)
  * [Media](#media)
* [Redshift](#redshift)
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
* omnisharp

## Omnisharp
company-mode and flycheck use omnisharp to do C# completion, checking, and basically all other IDE features. Omnisharp server can be found here: https://github.com/OmniSharp/. On Ubuntu, Omnisharp needs the PPA specified in the omnisharp-server project, and the packages: monodevelop-current, mono-xbuild, and mono-devel.

## gocode
For go autocompletion, gocode needs to be installed. It can be found here: https://github.com/nsf/gocode

## i3 
i3 config is located .i3/config. My i3 is themed to go with the Numix Theme, found here: https://numixproject.org/. I'm enabling the cinnamon-settings-daemon on startup to ensure my gtk theme settings are appropriately applied across all applications.

## Mutate
Mutate is a Spotlight-like launcher for Linux. I like it for being much more feature filled than DMenu. It has its own github, which can be found here: https://github.com/qdore/Mutate. This is easily installed in Ubuntu via the ppa, but it will compile the source to install it, which has dependencies on qt. If dmenu is preferred, you can comment out the exec of mutate and uncomment the dmenu binding. Mutate has been bound to win+d, just like dmenu was.

## ~~DMenu~~
**DMenu has been deprecated in favor of Mutate, which is much more feature filled and useful**
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

## Wallpaper
Wallpapers are set randomly every 10 minutes from the ~/.wallpapers folder. This is done with a shell script run at i3 start by the i3 config. Configuration is done with a program called feh.

## Media
Media control is done via the playerctl library. This can be found here: https://github.com/acrisci/playerctl. It is available as a package in the AUR if on Arch.

## Redshift
I'm using redshift gtk in the manual location mode. Geoclue doesn't seem to work all the time, it has trouble finding my location. Redshift-gtk is exec'd by i3 on login.

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

## Other Programs
I'm using tlp to manage laptop power, with all of the thinkpad extenstions installed. tlp can be found here: http://linrunner.de/en/tlp/tlp.html. My tlp config can be found below. It's mostly the standard config, but wifi is disabled on ethernet connect and reenabled on disconnect
