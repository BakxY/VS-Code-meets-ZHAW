# VS Code meets ZHAW

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

This repository aims to provide pre-configured VS Code profiles (code-profile files) and setup instructions tailored for students at ZHAW (Zürcher Hochschule für Angewandte Wissenschaften). By using these profiles, you can quickly set up your VS Code environment with relevant extensions for various courses and projects.

## Purpose

* **Streamline VS Code Setup:** Eliminate the hassle of manually installing and configuring extensions and settings.
* **Consistency:** Ensure a consistent development environment across students.
* **Course-Specific Profiles:** Provide profiles optimized for specific ZHAW courses and programming languages.
* **Collaboration:** Facilitate easier collaboration by using standardized configurations.

## Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/BakxY/VS-Code-meets-ZHAW
    cd VS-Code-meets-ZHAW
    ```

2.  **Choose a Profile:**
    * Navigate to the `profiles/` directory to find available profiles.
    * Each profile will be a `.code-profile` file.
    * Each profile directory will also contain a `README.md` file with specific instructions.

3.  **Import the Profile:**
    * Open VS Code.
    * Click on the gear icon in the bottom-left corner and select "Profiles" -> "Import Profiles...".
    * Navigate to the location of the `.code-profile` file you wish to import and select it.
    * VS Code will then import the profile, including extensions and settings.

4.  **Follow Profile-Specific Instructions:**
    * Refer to the `README.md` file within the chosen profile directory for any additional setup instructions or configurations.

## Profile Structure

```
VS-Code-meets-ZHAW/
├── profiles/
│   ├── default/
│   │   ├── default.code-profile
│   │   └── README.md
│   └── latex/
│       ├── template/
│       ├── latex.code-profile
│       ├── INSTALLATION.md
│       └── README.md
└── README.md
```

## Disclaimer

These profiles are provided as a convenience and may not cover all possible use cases. Use them at your own discretion.