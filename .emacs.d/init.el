;; -*- lexical-binding: t -*-

(require 'package)
(add-to-list 'package-archives '("melpa" . "http://melpa.org/packages/"))
(add-to-list 'package-archives '("melpa-stable" . "http://stable.melpa.org/packages/"))

(when (boundp 'package-pinned-packages)
  (setq package-pinned-packages
        '((malabar-mode . "melpa-stable"))))

;; Stops automatic package initialization so I can use use-package instead, which does
;; intelligent enabling and times the startup
(package-initialize)
(setq package-enable-at-startup nil)

;; My list of packages
(defvar my/install-packages
  '(;; Simplifies .emacs and package loading
    use-package
    
    ;; Theming
    naquadah-theme smart-mode-line smart-mode-line-powerline-theme diminish
    
    ;; Evil
    evil evil-leader evil-surround undo-tree

    ;; Autocomplete
    popup company company-c-headers
    
    ;; Flycheck
    flycheck flycheck-color-mode-line

    ;; Helm
    async helm projectile helm-projectile helm-projectile-all helm-flyspell
    helm-company helm-flycheck helm-ag
    
    ;; Editing tools
    neotree smartparens goto-last-change undo-tree iedit smart-tab anzu
    simple-call-tree simple-call-tree+ volatile-highlights golden-ratio
    anaphora 
    
    ;; Go
    go-mode company-go go-eldoc
    
    ;; Rust
    rust-mode flycheck-rust
    
    ;; Git
    magit git-gutter gitignore-mode
    
    ;; Latex
    auctex
    
    ;; Java
    malabar-mode groovy-mode javap-mode gradle-mode 
    
    ;; Racket
    racket-mode
    
    ;; Markdown
    markdown-mode yaml-mode
    ))

;; Enable debugging while running startup
(setq debug-on-error t)

;; Set up and install all non-installed packages
(package-initialize)
(dolist (pack my/install-packages)
  (unless (package-installed-p pack)
    (package-install pack)))

(custom-set-variables
 '(indent-tabs-mode nil)
 '(inhibit-startup-screen t)
 '(initial-frame-alist (quote ((fullscreen . maximized))))
 '(initial-scratch-message nil)
 '(magit-set-upstream-on-push (quote dontask))
 '(magit-use-overlays nil)
 '(visible-bell t)
 '(x-select-enable-clipboard t))

;; Set up use-package for all other files
(require 'use-package)

;; General emacs config
(load "~/.emacs.d/general-init.el")

;; Load helm config
(load "~/.emacs.d/helm-init.el")

;; Load evil config
(load "~/.emacs.d/evil-init.el")

;; Load programming config
(load "~/.emacs.d/programming-init.el")

;; Turn off debugging now that startup is finished
(setq debug-on-error nil)
