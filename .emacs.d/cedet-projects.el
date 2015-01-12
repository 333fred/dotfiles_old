;; Load the cedet version from the repository. Download from http://www.randomsample.de/cedet-snapshots/
(load-file "~/.emacs.d/site-lisp/cedet/cedet-devel-load.el")

;; CEDET
(use-package cc-mode)
(use-package semantic
  :config
  (progn
    (global-semanticdb-minor-mode 1)
    (global-semantic-idle-scheduler-mode 1)
    ))
(semantic-mode 1)
(use-package semantic/canned-configs)
(use-package semantic/ia)
(use-package semantic/db-javap)
(semantic-load-enable-code-helpers)

;; EDE
;; This needs to have the cedet-projects.el file in ~/.emacs.d/ set up and
;; loaded.
(use-package ede
  :config
  (progn
    (global-ede-mode 1)))
(use-package ede/java-root)

(defvar wpilib-dir "/home/fred/first/allwpilib/")
(defvar frc-toolchain-include-dir "/usr/arm-frc-linux-gnueabi/include/c++/4.9.1/")
;; Include directories for the HAL
(defvar hal-includes '((concat wpilib-dir "hal/include")
                       (concat wpilib-dir "hal/lib/Athena")
                       (concat wpilib-dir "hal/lib/Athena/FRC_FPGA_ChipObject")
                       (concat wpilib-dir "hal/lib/Athena/NetworkCommunication")
                       (concat wpilib-dir "hal/lib/Athena/ctre")
                       (concat wpilib-dir "hal/lib/Athena/i2clib")
                       (concat wpilib-dir "hal/lib/Athena/spilib")))

;; Include directories for the networktables projects
(defvar nettables-includes '((concat wpilib-dir "networktables/cpp/include")))
(defvar nettables-java-root '((concat wpilib-dir "networktables/java/src/main/java")))

;; Include Directories for the wpilibc projects
(defvar wpilibc-includes '((concat wpilib-dir "wpilibc/wpilibC++/include")))
(defvar wpilibcdevices-includes '((concat wpilib-dir "wpilibc/wpilibC++Devices/include")))

;; Root Directories for the WPILibJ projects
(defvar wpilibj-root '((concat wpilib-dir "wpilibj/wpilibJava/src/main/java")))
(defvar wpilibjdev-root '((concat wpilib-dir "wpilibj/wpilibJavaDevices/src/main/java")
                          (concat wpilib-dir "wpilibj/wpilibJavaDevices/src/test/java")))
;; TODO: When we move to gradle, this hack won't be necessary. This is because the JNI
;; headers are generated in the target/include directory. This unfortunately means that
;; maven has to have run before the completion can execute
(defvar wpilibjni-includes '((concat wpilib-dir "wpilibj/wpilibJavaJNI/target/include")))
(defvar wpilibjavait-root '((concat wpilib-dir "wpilibj/wpilibJavaIntegrationTests/src/main/java")
                            (concat wpilib-dir "wpilibj/wpilibJavaIntegrationTests/src/test/java")))

(ede-cpp-root-project "HAL"
                      :file (concat wpilib-dir "hal/CMakeLists.txt")
                      :include-path hal-includes
                      :system-include-path '(frc-toolchain-include-dir))
(ede-cpp-root-project "NetworkTablesCpp"
                      :file (concat wpilib-dir "networktables/cpp/CMakeLists.txt")
                      :include-path (append hal-includes nettables-includes)
                      :system-include-path '(frc-toolchain-dir))
(ede-java-root-project "NetworkTablesJava"
                       :file (concat wpilib-dir "networktables/java/pom.xml")
                       :srcroot (cons (concat wpilib-dir "networktables/java/src/test/java") nettables-java-root))
(ede-cpp-root-project "WPILibC"
                      :file (concat wpilib-dir "wpilibc/wpilibC++/CMakeLists.txt")
                      :include-path (append hal-includes nettables-includes wpilibc-includes)
                      :system-include-path '(frc-toolchain-include-dir))
(ede-cpp-root-project "WPILibCDevices"
                      :file (concat wpilib-dir "wpilibc/wpilibC++Devices/CMakeLists.txt")
                      :include-path (append hal-includes nettables-includes wpilibc-includes wpilibcdevices-includes)
                      :system-include-path '(frc-toolchain-include-dir))
(ede-java-root-project "WPILibJ"
                       :file (concat wpilib-dir "wpilibj/wpilibJava/pom.xml")
                       :srcroot (append wpilibj-root nettables-java-root))
(ede-java-root-project "WPILibJDevices"
                       :file (concat wpilib-dir "wpilibj/wpilibJavaDevices/pom.xml")
                       :srcroot (append wpilibjdev-root wpilibj-root nettables-java-root))
(ede-cpp-root-project "WPILibJavaJNI"
                       :file (concat wpilib-dir "wpilibj/wpilibJavaJNI/CMakeLists.txt")
                       :include-path wpilibjni-includes ;; TODO: When we move to gradle
                       :system-include-path '(frc-toolchain-include-dir))
(ede-java-root-project "WPILibJavaIntegrationTests"
                       :file (concat wpilib-dir "wpilibj/wpilibJavaIntegrationTests/pom.xml")
                       :srcroot (append wpilibjavait-root wpilibjdev-root wpilibj-root nettables-java-root))
