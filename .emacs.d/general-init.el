(set-frame-font "Source Code Pro 10")

;; Remove the extra ui
(tool-bar-mode -1)
(menu-bar-mode -1)

;; Convenience enables
(delete-selection-mode t)
(defalias 'yes-or-no-p 'y-or-n-p)
(show-paren-mode t)
(global-linum-mode t)

;; Make buffer names unique
(require 'uniquify)
(setq uniquify-buffer-name-style 'post-forward)  ;; buffernames that are foo<1>, foo<2> are hard to read. This makes them foo|dir  foo|otherdir
(desktop-save-mode 1) ;; auto-save buffer state on close for a later time.
(setq abbrev-file-name "~/.emacs.d/abbrev_defs") ;; where to save auto-replace maps

;; Allow shift-arrow to move between windows
(require 'windmove)
(windmove-default-keybindings 'meta)

;; Save my place in a buffer, and keep the saveplace file out of ~/
(setq save-place-file "~/.emacs.d/saveplace")
(setq-default save-place t)
(require 'saveplace)

;; Enable finding of the last change made
(require 'goto-last-change)

;; Tramp mode allows for editing files via ssh
(require 'tramp) 

;; Flyspell config
(require 'flyspell)
(flyspell-mode 1)

;; Smart Mode Line Config
(require 'smart-mode-line)
(setq sml/no-confirm-load-theme t)
(sml/setup)
(sml/apply-theme 'powerline)

;; Neotree config
(require 'neotree)
(global-set-key [f8] 'neotree-toggle)
