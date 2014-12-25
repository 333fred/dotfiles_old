;; Set up helm
(use-package helm
             :bind 
             (("M-x" . helm-M-x)
              ("C-x C-f" . helm-find-files)
              ("C-x b" . helm-mini))
             :config
             (progn
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
               (projectile-global-mode)
               (setq projectile-enable-caching t)
               (helm-projectile-on)
               (use-package helm-ag)
               (setq helm-buffers-fuzzy-matching t
                     helm-recentf-fuzzy-match    t)))
