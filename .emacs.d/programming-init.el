;; colorize the output of the compilation mode.
(require 'ansi-color)
(defun colorize-compilation-buffer ()
  (toggle-read-only)
  (ansi-color-apply-on-region (point-min) (point-max))

  ;; mocha seems to output some non-standard control characters that
  ;; aren't recognized by ansi-color-apply-on-region, so we'll
  ;; manually convert these into the newlines they should be.
  (goto-char (point-min))
  (while (re-search-forward "\\[2K\\[0G" nil t)
    (progn
      (replace-match "
")))
  (toggle-read-only))
(add-hook 'compilation-filter-hook 'colorize-compilation-buffer)

;; Remove all trailing whitespace before save
(add-hook 'before-save-hook 'delete-trailing-whitespace)

;; Highlight fixme and other such words
(defun my/add-watchwords ()
  "Highlight FIXME, TODO, and NOCOMMIT in code"
  (font-lock-add-keywords
   nil '(("\\<\\(FIXME\\|TODO\\|NOCOMMIT\\)\\>"
          1 '((:foreground "#d7a3ad") (:weight bold)) t))))

(add-hook 'prog-mode-hook 'my/add-watchwords)

;; Go mode eldoc, for displaying go documentation
(add-hook 'go-mode-hook 'go-eldoc-setup)
(add-hook 'before-save-hook 'gofmt-before-save)

;; Git gutter allows for showing changes on the side of a file
(use-package git-gutter
             :diminish ""
             :init (global-git-gutter-mode +1))

;; Magit setup
(use-package magit)

;; anzu, shows the number of hits in the modeline
(use-package anzu)
(add-hook 'prog-mode-hook (lambda () (global-anzu-mode t)))

;; Smart parens
(use-package smartparens)
(add-hook 'prog-mode-hook
          (lambda ()
            (smartparens-global-mode t)
            (show-smartparens-global-mode t)))

;; IEdit mode
(use-package iedit)

;; Company Mode Setup
(use-package company
  :config
  (progn
    (use-package company-go)
    (define-key company-mode-map [(control tab)] 'helm-company)
    (define-key company-active-map [(control tab)] 'helm-company)
    (setq company-idle-delay 0.2
          ;; min prefix of 2 chars
          company-minimum-prefix-length 2
          company-selection-wrap-around t
          company-show-numbers t
          company-dabbrev-downcase nil
          company-echo-delay 0
          company-tooltip-limit 20
          company-transformers '(company-sort-by-occurrence)
          company-begin-commands '(self-insert-command)
          )))
(use-package company-c-headers)

(add-hook 'after-init-hook 'global-company-mode)
(add-to-list 'company-backends 'company-c-headers)
;; Semantic doesn't fail quietly, it prevents any completions from working
;; Remove it from the global list and only add it locally to c, c++, and java
(delete 'company-semantic company-backends)
(defun add-semantic-complete ()
  (setq-local company-backends (cons 'company-semantic company-backends)))
(add-hook 'c-mode (lambda () (add-semantic-complete)))
(add-hook 'c++-mode (lambda () (add-semantic-complete)))
(add-hook 'java-mode (lambda () (add-semantic-complete)))

;; Flycheck Setup
(use-package flycheck
             :diminish "fc"
             :idle (global-flycheck-mode))
(add-hook 'flycheck-mode-hook 'flycheck-color-mode-line-mode)
(eval-after-load 'flycheck
  '(define-key flycheck-mode-map (kbd "C-c ! h") 'helm-flycheck))
(use-package flycheck-rust)
(add-hook 'flycheck-mode-hook #'flycheck-rust-setup)

;; Racket mode
(use-package racket-mode)

;; Smart-tab setup
(use-package smart-tab)
(add-hook 'prog-mode-hook (lambda () (global-smart-tab-mode 1)))

;; All the java modes
(use-package javap-mode)
(use-package gradle-mode)
(use-package groovy-mode)
(add-to-list 'auto-mode-alist '("\.groovy$" . groovy-mode))
(add-to-list 'auto-mode-alist '("\.gradle$" . groovy-mode))
(add-hook 'groovy-mode-hook
          '(lambda ()
             (use-package 'groovy-electric)
             (groovy-electric-mode)))

(eval-after-load 'inf-groovy
  (add-hook 'inf-groovy-load-hook 'flycheck-mode))
(eval-after-load 'java-mode
  (add-hook 'java-mode-hook   'flycheck-mode))

;; Markdown/yaml mode
(use-package markdown-mode)
(use-package yaml-mode)

;; ggtags setup
(use-package ggtags)
(add-hook 'c-mode-common-hook
          (lambda ()
            (when (derived-mode-p 'c-mode 'c++-mode 'java-mode 'asm-mode)
              (progn
                (ggtags-mode 1)
                (setq-local eldoc-documentation-function #'ggtags-eldoc-function)))))

;; Eldoc
(use-package eldoc
  :config
  (progn
    (use-package diminish
      :init
      (progn (diminish 'eldoc-mode "ed")))
    (setq eldoc-idle-delay 0.2)
    (set-face-attribute 'eldoc-highlight-function-argument nil
                        :underline t :foreground "green"
                        :weight 'bold)))

;; Function args (completion with semantic)
(use-package function-args
  :config
  (progn
    (fa-config-default)))
