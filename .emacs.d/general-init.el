(setq user-full-name "Fredric Silberberg"
      user-mail-address "fredric@fsilberberg.com")

;; Always use utf8
(set-terminal-coding-system 'utf-8)
(set-keyboard-coding-system 'utf-8)
(set-language-environment "UTF-8")
(prefer-coding-system 'utf-8)

(set-frame-font "Source Code Pro 10")
(use-package naquadah-theme)

;; Remove the extra ui
(tool-bar-mode -1)
(menu-bar-mode -1)
(when (functionp 'set-scroll-bar-mode)
  (set-scroll-bar-mode 'nil))

;; Convenience enables
(transient-mark-mode t)
(delete-selection-mode t)
(defalias 'yes-or-no-p 'y-or-n-p)
(show-paren-mode t)
(global-linum-mode t)

;; Allow moving around wrapped lines as they appear, not as a single line
(setq line-move-visual t)

;; Make mouse invisible while typing
(setq make-pointer-invisible t)

;; Just follow the symlink
(setq-default find-file-visit-truename nil)

;; Unified diffs by default 
(setq diff-switches "-u")

;; Auto-revert files
(global-auto-revert-mode 1)
(use-package diminish
  :init
  (progn
    (diminish 'auto-fill-function "AF")))

;; Make buffer names unique
(use-package uniquify)
(setq uniquify-buffer-name-style 'post-forward)  ;; buffernames that are foo<1>, foo<2> are hard to read. This makes them foo|dir  foo|otherdir
(desktop-save-mode 1) ;; auto-save buffer state on close for a later time.
(setq abbrev-file-name "~/.emacs.d/abbrev_defs") ;; where to save auto-replace maps

;; Prettify symbols in 24.4
(when (boundp 'global-prettify-symbols-mode)
  (add-hook 'emacs-lisp-mode-hook
            (lambda ()
              (push '("lambda" . ?λ) prettify-symbols-alist)))
  (add-hook 'clojure-mode-hook
            (lambda ()
              (push '("fn" . ?ƒ) prettify-symbols-alist)))
  (global-prettify-symbols-mode +1))

;; Allow shift-arrow to move between windows
(use-package windmove)
(windmove-default-keybindings 'meta)

;; Save my place in a buffer, and keep the saveplace file out of ~/
(setq save-place-file "~/.emacs.d/saveplace")
(setq-default save-place t)
(use-package saveplace)

;; Enable finding of the last change made
(use-package goto-last-change)

;; Tramp mode allows for editing files via ssh
(use-package tramp) 

;; Flyspell config
(use-package flyspell
             :init
             (progn (flyspell-mode 1)))
(use-package diminish
  :init
  (progn
    (diminish 'flyspell-mode "FS")))

;; Smart Mode Line Config
(use-package smart-mode-line
:init (progn
        (setq sml/no-confirm-load-theme t)
        (sml/setup)
        (sml/apply-theme 'powerline)))

;; Neotree config
(use-package neotree
             :init (global-set-key [f8] 'neotree-toggle))

;; Golden Ratio
(use-package golden-ratio
  :diminish golden-ratio-mode
  :defer t
  :config
  (setq golden-ratio-exclude-modes
        '(erc-mode mu4e-headers-mode mu4e-view-mode)))

;; Undo-tree
(use-package undo-tree
  :idle (global-undo-tree-mode t)
  :diminish ""
  :config
  (progn
    (define-key undo-tree-map (kbd "C-x u") 'undo-tree-visualize)
    (define-key undo-tree-map (kbd "C-/") 'undo-tree-undo)))

;; Setup popup
(use-package popup)

;; Simple call tree
(use-package anaphora)
(use-package simple-call-tree)
(use-package simple-call-tree+)

;; Volatile highlights 
(use-package volatile-highlights)
