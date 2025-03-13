# LaTeX - Installation Guide

This document provides instructions on how to install and configure the LaTeX VS Code profile for use in almost all courses.

## Prerequisites

* Visual Studio Code installed on your system.
* The "VS Code meets ZHAW" repository cloned to your local machine.

## Installation Steps

1.  **Import the Profile:**
    * Open Visual Studio Code.
    * Click on the gear icon in the bottom-left corner.
    * Select "Profiles" -> "Import Profiles...".
    * Navigate to the `profiles/latex/latex.code-profile` file within your cloned repository.
    * Select the `.code-profile` file and click "Import".

2.  **Verify Installed Extensions:**
    * After importing the profile, VS Code will automatically install the necessary extensions.
    * Ensure that you have the newly imported profile as the active profile.
    * You can verify that the extensions are installed by going to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X).

3.  **Install MiKTeX**
    To be able to compile LaTeX files you need a LaTeX compiler. I recommend using the MiKTeX for its easy installation.

    * Open your browser and navigate to the [MiKTeX download page](https://miktex.org/download) and download the installer for your operating system.
    * After downloading, execute the installer and follow its instructions to install MiKTeX.
        * In the settings step of the installation, change the setting "Install missing packages" to yes.
    * If MiKTeX notifies you about available updates, open the MiKTeX Console (search for it in your applications) and install them. If you are having issues during updating, Google is your friend.

4.  **Install perl**
    The LaTeX extension also requires a version of perl to be installed. The process of installing perl varies by operating system, so

    4.1 **Linux (apt as package manager)**

    * Open a terminal.
    * Update package repositories by running `sudo apt update`
    * Install perl by running `sudo apt install perl`
    * You should now be able to check your perl version by running `perl -v`

    4.2 **Windows**
    
    * Open your browser and navigate to the [Strawberry Perl download page](https://strawberryperl.com/) and download the msi installer.
    * After downloading, execute the installer and follow its instructions to install Strawberry Perl.
    * After the installer finishes, perl is now installed on your system. You can check that by opening a terminal and running `perl -v`.

## Disclaimer

This profile is provided as a starting point. Customization is encouraged to fit specific needs.