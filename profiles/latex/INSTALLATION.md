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
    * If MiKTeX notifies you about available updates, install them using the MiKTeX executable that has been installed. If you having issues during updating google is you friend.

## Disclaimer

This profile is provided as a starting point. Customization is encouraged to fit specific needs.