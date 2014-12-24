;; Set up helm
(require 'helm-config)

;; Set up helm shortcuts for M-x and C-x-C-f
(global-set-key (kbd "M-x") 'helm-M-x)
(global-set-key (kbd "C-x C-f") 'helm-find-files)
(global-set-key (kbd "C-x b") 'helm-mini)
(setq helm-buffers-fuzzy-matching t
      helm-recentf-fuzzy-match    t)

;; Set up projectile mode
(projectile-global-mode)
(setq projectile-enable-caching t)
(require 'helm-projectile)
(helm-projectile-on)
