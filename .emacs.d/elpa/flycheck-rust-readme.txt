Improve Rust support in Flycheck by configuring Flycheck automatically in
Cargo projects.

Setup

(add-hook 'flycheck-mode-hook #'flycheck-rust-setup)
