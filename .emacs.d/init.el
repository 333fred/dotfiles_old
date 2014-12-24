;; -*- lexical-binding: t -*-
(require 'package)
(add-to-list 'package-archives
             '("marmalade" . "https://marmalade-repo.org/packages/"))
(add-to-list 'package-archives
             '("melpa" . "http://melpa.org/packages/"))

;; My list of packages
(defvar my-packages '(magit naquadah-theme goto-last-change git-gutter smart-mode-line smart-mode-line-powerline-theme neotree ;; General packages
			    async helm projectile helm-projectile helm-projectile-all helm-flyspell ;; Anything to do with helm 
			    evil evil-leader evil-surround undo-tree ;; Anything to do with evil
			    go-mode racket-mode gitignore-mode markdown-mode smartparens ;; General programming packages
                            company company-go company-c-headers helm-company ;; Company mode plugins
                            flycheck flycheck-color-mode-line helm-flycheck flycheck-rust ;; Flycheck plugins
			    ))

;; Set up and install all non-installed packages
(package-initialize)
(dolist (p my-packages)
  (when (not (package-installed-p p))
    (package-install p)))
(custom-set-variables
 '(indent-tabs-mode nil)
 '(inhibit-startup-screen t)
 '(initial-frame-alist (quote ((fullscreen . maximized))))
 '(initial-scratch-message nil)
 '(visible-bell t)
 '(x-select-enable-clipboard t))

;; General emacs config
(load "~/.emacs.d/general-init.el")

;; Load helm config
(load "~/.emacs.d/helm-init.el")

;; Load evil config
(load "~/.emacs.d/evil-init.el")

;; Load programming config
(load "~/.emacs.d/programming-init.el")
