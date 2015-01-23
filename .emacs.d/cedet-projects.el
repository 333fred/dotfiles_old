;; Load the cedet version from the repository. Download from http://www.randomsample.de/cedet-snapshots/
(load-file "~/.emacs.d/site-lisp/cedet/cedet-devel-load.el")

;; CEDET
(use-package cc-mode)
(use-package semantic
  :config
  (progn
    (global-semanticdb-minor-mode 1)
    (global-semantic-highlight-func-mode 1)
    (global-semantic-stickyfunc-mode 1)
    (global-semantic-decoration-mode 1)
    (global-semantic-idle-scheduler-mode 1)
    (global-semantic-idle-summary-mode 1)
    (global-semantic-show-parser-state-mode 1)
    (add-to-list 'semantic-default-submodes 'global-semanticdb-minor-mode)
    (use-package semantic/ia)
    (use-package semantic/db-javap)
    (when (cedet-gnu-global-version-check t)
      (semanticdb-enable-gnu-global-databases 'c-mode)
      (semanticdb-enable-gnu-global-databases 'c++-mode)
      (semanticdb-enable-gnu-global-databases 'java-mode))
    (semantic-mode 1)
    ))

;; EDE
;; This needs to have the cedet-projects.el file in ~/.emacs.d/ set up and
;; loaded.
(use-package ede
  :config
  (progn
    (use-package ede/java-root)
    (global-ede-mode 1)))

(defvar wpilib-dir "/home/fred/first/allwpilib/")
(defvar frc-toolchain-include-dir "/usr/arm-frc-linux-gnueabi/include/c++/4.9.1/")

;; Maven default directories
(defvar jm "src/main/java")
(defvar jt "src/test/java")

;; Function for prepending a string to a list of strings and returning the new list
(defun prepend (pre l)
  (if l
      (cons (concat pre (car l)) (prepend pre (cdr l)))
    nil))

;; Include directories for the HAL
(defvar hal-includes (list "/include"
                           "/lib/Athena"
                           "/lib/Athena/FRC_FPGA_ChipObject"
                           "/lib/Athena/NetworkCommunication"
                           "/lib/Athena/ctre"
                           "/lib/Athena/i2clib"
                           "/lib/Athena/spilib"))

(defvar global-hal-includes (prepend "/hal" hal-includes))

;; Include directories for the networktables projects
(defvar nettables-includes (list "/networktables/cpp/include"))
(defvar nettables-java-root "/networktables/java/src/main/java")

;; Include Directories for the wpilibc projects
(defvar wpilibc-includes (list "/wpilibc/wpilibC++/include"))
(defvar wpilibcdevices-includes (list "/wpilibc/wpilibC++Devices/include"))

;; Root Directories for the WPILibJ projects
(defvar wpilibj-root "/wpilibj/wpilibJava/src/main/java")
(defvar wpilibjdev-root (list "/wpilibj/wpilibJavaDevices/src/main/java"
                              "/wpilibj/wpilibJavaDevices/src/test/java"))
;; TODO: When we move to gradle, this hack won't be necessary. This is because the JNI
;; headers are generated in the target/include directory. This unfortunately means that
;; maven has to have run before the completion can execute
(defvar wpilibjni-includes (list "/wpilibj/wpilibJavaJNI/target/include"))
(defvar wpilibjavait-root (list "/wpilibj/wpilibJavaIntegrationTests/src/main/java"
                            "/wpilibj/wpilibJavaIntegrationTests/src/test/java"))

(if (file-exists-p wpilib-dir)
    (progn
      (print "Enabling wpilib projects")
      (ede-cpp-root-project "HAL"
                            :file (concat wpilib-dir "hal/CMakeLists.txt")
                            :include-path hal-includes
                            :system-include-path (list frc-toolchain-include-dir))
      (ede-cpp-root-project "NetworkTablesCpp"
                            :file (concat wpilib-dir "networktables/cpp/CMakeLists.txt")
                            :include-path (cons "include" (prepend "/../.." global-hal-includes))
                            :system-include-path (list frc-toolchain-include-dir))
      (ede-java-root-project "NetworkTablesJava"
                             :file (concat wpilib-dir "networktables/java/pom.xml")
                             :srcroot (list jm jt))
      (ede-cpp-root-project "WPILibC"
                            :file (concat wpilib-dir "wpilibc/wpilibC++/CMakeLists.txt")
                            :include-path (cons "/include" (append (prepend "/../.." global-hal-includes) (prepend "/../.." nettables-includes)))
                            :system-include-path (list frc-toolchain-include-dir))
      (ede-cpp-root-project "WPILibCDevices"
                            :file (concat wpilib-dir "wpilibc/wpilibC++Devices/CMakeLists.txt")
                            :include-path (cons "/include" (append (prepend "/../.." global-hal-includes)
                                                                   (prepend "/../.." nettables-includes)
                                                                   (prepend "/../.." wpilibc-includes)))
                            :system-include-path (list frc-toolchain-include-dir))
      (ede-java-root-project "WPILibJ"
                             :file (concat wpilib-dir "wpilibj/wpilibJava/pom.xml")
                             :srcroot (list jm (concat "/../.." nettables-java-root)))
      (ede-java-root-project "WPILibJDevices"
                             :file (concat wpilib-dir "wpilibj/wpilibJavaDevices/pom.xml")
                             :srcroot (list jm jt (concat "/../.." wpilibj-root) (concat "/../.." nettables-java-root)))
      (ede-cpp-root-project "WPILibJavaJNI"
                            :file (concat wpilib-dir "wpilibj/wpilibJavaJNI/CMakeLists.txt")
                            :include-path (list "/target/include") ;; TODO: When we move to gradle
                            :system-include-path (list frc-toolchain-include-dir))
      (ede-java-root-project "WPILibJavaIntegrationTests"
                             :file (concat wpilib-dir "wpilibj/wpilibJavaIntegrationTests/pom.xml")
                             :srcroot (append (list jm jt
                                                    (concat "/../.." nettables-java-root)
                                                    (concat "/../.." wpilibj-root))
                                              (prepend "/../.." wpilibjdev-root)))
      )
  (print "No wpilib found"))

(defvar choreo-root "/home/fred/choreographer/")
(if (file-exists-p choreo-root)
    (progn
      (print "Enabling chorographer project")
      (ede-cpp-root-project "Choreo"
                            :file (concat choreo-root "code/Makefile")
                            :include-path (list "."))
      (ede-cpp-root-project "Rosmarus"
                            :file (concat choreo-root "rosmarus/Makefile")
                            :include-path (list "."))
      )
  (print "No Choreographer found"))
