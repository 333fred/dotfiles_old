;; Set up helm
(use-package helm
             :bind 
             (("M-x" . helm-M-x)
              ("C-x C-f" . helm-find-files)
              ("C-x b" . helm-mini))
             :config
             (progn
               (setq
                helm-gtags-ignore-case t
                helm-gtags-auto-update t
                helm-gtags-use-input-at-cursor t
                helm-gtags-pulse-at-cursor t
                helm-gtags-prefix-key "\C-cg"
                helm-gtags-suggested-key-mapping t
                helm-gtags-fuzzy-match t
                )
               (use-package helm-config)
               (use-package helm-files)
               (use-package helm-grep)
               (use-package helm-man)
               (use-package helm-misc)
               (use-package helm-aliases)
               (use-package helm-elisp)
               (use-package helm-imenu)
               (use-package helm-semantic)
               (use-package helm-ring)
               (use-package helm-bookmark)
               (use-package helm-projectile)
               (use-package helm-gtags)
               (add-hook 'dired-mode-hook 'helm-gtags-mode)
               (add-hook 'eshell-mode-hook 'helm-gtags-mode)
               (add-hook 'c-mode-hook 'helm-gtags-mode)
               (add-hook 'c++-mode-hook 'helm-gtags-mode)
               (add-hook 'asm-mode-hook 'helm-gtags-mode)
               (projectile-global-mode)
               (setq projectile-enable-caching t)
               (helm-projectile-on)
               (use-package helm-ag)
               (setq helm-buffers-fuzzy-matching t
                     helm-recentf-fuzzy-match    t)))
