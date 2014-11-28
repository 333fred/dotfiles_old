;; -*- lexical-binding: t -*-
(setq user-full-name "Fredric Silberberg")
(setq user-mail-address "fredric@fsilberberg.com")

;; ido mode setup
(require 'ido)
(setq ido-enable-flex-matching t
      ido-use-virtual-buffers t
      ido-everywhere t)
(ido-mode)

(set-frame-font "Source Code Pro 10")

;; Initialize the packages repos
(require 'package)
(add-to-list 'package-archives 
	     '("marmalade" .
	       "http://marmalade-repo.org/packages/"))
(add-to-list 'package-archives
	     '("melpa" . "http://melpa.milkbox.net/packages/") t)
(package-initialize)

;; Flycheck mode
(add-hook 'after-init-hook #'global-flycheck-mode)
(eval-after-load 'flycheck
  '(custom-set-variables
    '(flycheck-display-errors-function #'flycheck-pos-tip-error-messages)))
(add-hook 'flycheck-mode-hook 'flycheck-color-mode-line-mode)
(add-hook 'flycheck-mode-hook #'flycheck-rust-setup)

;; CSharp Mode
(autoload 'csharp-mode "csharp-mode" "Major mode for editing C# code." t)
(add-hook 'csharp-mode-hook 'omnisharp-mode)

;; Auto-complete-mode
;; (require 'auto-complete-config)
;; (require 'auto-complete-c-headers)
;; (add-to-list 'ac-sources 'ac-source-c-headers)
;; (require 'go-autocomplete)
;; (define-key ac-mode-map (kbd "M-TAB") 'auto-complete)
;; (eval-after-load "auto-complete"
;;   '(add-to-list 'ac-modes 'racket-mode))
;; (eval-after-load "auto-complete"
;;   '(add-to-list 'ac-modes 'nusmv-mode))
;; (ac-config-default)
;; cpputils-cmake

;; Company Mode
(require 'company)                                   ; load company mode
(require 'company-go)                                ; load company mode go backend
(add-to-list 'company-backends 'company-c-headers)
(add-hook 'c-mode-common-hook
          (lambda ()
            (if (derived-mode-p 'c-mode 'c++-mode)
                (cppcm-reload-all)
              )))
;; OPTIONAL, somebody reported that they can use this package with Fortran
(add-hook 'c90-mode-hook (lambda () (cppcm-reload-all)))
;; OPTIONAL, avoid typing full path when starting gdb
(global-set-key (kbd "C-c C-g")
 '(lambda ()(interactive) (gud-gdb (concat "gdb --fullname " (cppcm-get-exe-path-current-buffer)))))

;; Load the naquadah theme
(require 'naquadah-theme)

;; El-Doc
(require 'go-eldoc)
(add-hook 'go-mode-hook 'go-eldoc-setup)
(add-hook 'c-mode-hook 'c-turn-on-eldoc-mode)

;; Flyspell
(setq flyspell-issue-welcome-flag nil)
(setq-default ispell-program-name "/usr/bin/aspell")
(setq-default ispell-list-command "list")

;; Smex
(smex-initialize)
(global-set-key (kbd "M-x") 'smex)
(global-set-key (kbd "M-X") 'smex-major-mode-commands)
(global-set-key (kbd "C-c C-c M-x") 'execute-extended-command)

;; NuSMV
(load-file "~/NuSMV/share/nusmv/contrib/nusmv-mode.el")
(autoload 'nusmv-mode "nusmv-mode" "Major mode for NuSMV specification files." t)
(setq auto-mode-alist
      (append  (list '("\\.smv$" . nusmv-mode))
	       auto-mode-alist))
(icy-mode 1)

;; Emacs default settings
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(inhibit-startup-screen t)
 '(initial-scratch-message nil)
 '(x-select-enable-clipboard t)
 '(initial-frame-alist (quote ((fullscreen . maximized))))
 '(visible-bell t))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
(tool-bar-mode -1)
(menu-bar-mode -1)
(delete-selection-mode t)
(defalias 'yes-or-no-p 'y-or-n-p)
(show-paren-mode t)


;; EVIL
(require 'goto-last-change)
(require 'evil)
(evil-mode 1)
(require 'undo-tree)
(global-undo-tree-mode)
(global-evil-leader-mode)
(evil-leader/set-key "e" 'find-file)
;; Note: lexical-binding must be t in order for this to work correctly.
(defun make-conditional-key-translation (key-from key-to)
  "Make a Key Translation such that if the translate-keys-p function returns true,
   key-from translates to key-to, else key-from translates to itself.  translate-keys-p
   takes key-from as an argument. "
  (define-key key-translation-map key-from
    (lambda (prompt)
      (if (and
	   ;; only allow a non identity translation if we're beginning a key sequence.
	   (equal key-from (this-command-keys))
	   (or (evil-motion-state-p) (evil-normal-state-p) (evil-visual-state-p))) key-to key-from))))
(defun my-translate-keys-p (key-from)
  "Returns whether conditional key translations should be active.  See make-conditional-key-translation function. "
  (and
   ;; only allow a non identity translation if we're beginning a key sequence.
   (equal key-from (this-command-keys))
   (or (evil-motion-state-p) (evil-normal-state-p) (evil-visual-state-p))))
(define-key evil-normal-state-map "c" nil)
(define-key evil-motion-state-map "cu" 'universal-argument)
(make-conditional-key-translation (kbd "ch") (kbd "C-h"))
(make-conditional-key-translation (kbd "g") (kbd "C-x"))
(make-conditional-key-translation (kbd "cv") (kbd "C-f"))
(make-conditional-key-translation (kbd "cd") (kbd "C-b"))
(make-conditional-key-translation (kbd "q") (kbd "M-x"))

(require 'org)
(define-key global-map "\C-cl" 'org-store-link)
(define-key global-map "\C-ca" 'org-agenda)
(setq org-log-done t)

;; Omnisharp keybindings
(evil-define-key 'insert omnisharp-mode-map (kbd "M-.") 'omnisharp-auto-complete)
(evil-define-key 'normal omnisharp-mode-map (kbd "<f12>") 'omnisharp-go-to-definition)
(evil-define-key 'normal omnisharp-mode-map (kbd "K u") 'omnisharp-find-usages)
(evil-define-key 'normal omnisharp-mode-map (kbd "K I") 'omnisharp-find-implementations) ; g i is taken
(evil-define-key 'normal omnisharp-mode-map (kbd "K o") 'omnisharp-go-to-definition)
(evil-define-key 'normal omnisharp-mode-map (kbd "K r") 'omnisharp-run-code-action-refactoring)
(evil-define-key 'normal omnisharp-mode-map (kbd "K f") 'omnisharp-fix-code-issue-at-point)
(evil-define-key 'normal omnisharp-mode-map (kbd "K F") 'omnisharp-fix-usings)
(evil-define-key 'normal omnisharp-mode-map (kbd "K R") 'omnisharp-rename)
(evil-define-key 'normal omnisharp-mode-map (kbd ", i") 'omnisharp-current-type-information)
(evil-define-key 'normal omnisharp-mode-map (kbd ", I") 'omnisharp-current-type-documentation)
(evil-define-key 'insert omnisharp-mode-map (kbd ".") 'omnisharp-add-dot-and-auto-complete)
(evil-define-key 'normal omnisharp-mode-map (kbd ", n t") 'omnisharp-navigate-to-current-file-member)
(evil-define-key 'normal omnisharp-mode-map (kbd ", n s") 'omnisharp-navigate-to-solution-member)
(evil-define-key 'normal omnisharp-mode-map (kbd ", n f") 'omnisharp-navigate-to-solution-file-then-file-member)
(evil-define-key 'normal omnisharp-mode-map (kbd ", n F") 'omnisharp-navigate-to-solution-file)
(evil-define-key 'normal omnisharp-mode-map (kbd ", n r") 'omnisharp-navigate-to-region)
(evil-define-key 'normal omnisharp-mode-map (kbd "<f12>") 'omnisharp-show-last-auto-complete-result)
(evil-define-key 'insert omnisharp-mode-map (kbd "<f12>") 'omnisharp-show-last-auto-complete-result)
(evil-define-key 'normal omnisharp-mode-map (kbd ",.") 'omnisharp-show-overloads-at-point)
(evil-define-key 'normal omnisharp-mode-map (kbd ",rl") 'recompile)

(evil-define-key 'normal omnisharp-mode-map (kbd ",rt")
  (lambda() (interactive) (omnisharp-unit-test "single")))

(evil-define-key 'normal omnisharp-mode-map
  (kbd ",rf")
  (lambda() (interactive) (omnisharp-unit-test "fixture")))

(evil-define-key 'normal omnisharp-mode-map
  (kbd ",ra")
  (lambda() (interactive) (omnisharp-unit-test "all")))














