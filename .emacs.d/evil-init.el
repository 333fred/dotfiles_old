;; -*- lexical-binding: t -*-
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
(make-conditional-key-translation (kbd "g") (kbd "C-x"))
(eval-after-load "helm"
  (progn
    (require 'helm-projectile)
    (evil-leader/set-key
      "f" 'helm-for-files
      "l" 'helm-locate
      "c" 'helm-flycheck
      "y" 'helm-show-kill-ring
      "t" 'helm-top
      "m" 'helm-man-woman
      "o" 'helm-occur
      "j" 'helm-M-x
      "e" 'helm-find-files
      "b" 'helm-buffers-list
      "h" 'helm-projectile-find-file
      "H" 'helm-projectile
      "a" 'helm-flyspell-correct
      "d" 'helm-company)))
(eval-after-load "magit"
  (evil-leader/set-key "g" 'magit-status))
(eval-after-load "git-gutter-mode"
  (evil-leader/set-key
    "s" 'git-gutter:stage-hunk
    "n" 'git-gutter:next-hunk
    "p" 'git-gutter:previous-hunk))
(evil-leader/set-key
  "x" (kbd "C-x")
  "k" 'kill-buffer
  "z" 'repeat)