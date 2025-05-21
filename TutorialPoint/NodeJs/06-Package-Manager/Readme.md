Installing a Package Locally
The packages which are installed locally are placed inside the node_modules directory of the project and recorded in the package.json. This approach ensures that the every project maintains its own set of dependencies, avoiding conflicts between the different projects that may require different versions of the same package.

Let's look at the simple example, where we are going to install a package:
npm install express
This installs the package inside the node_modules directory and adds it to the package.json under dependencies. If we need to install the specific version of the package, use the following command:

Specific versions
```
npm install <package-name>@<version>
```
Example
```
npm install express@4.17.1
```
Benefits of Local Installation
Version Control − The local installations allows for the specific versioning of dependencies, ensuring the stability across the environments.
Security − Using the locally installed packages prevents the unexpected changes that can happen with the globally installed ones.

--save-dev − It installs the package as a development dependency (for testing, linting, etc). For example,
npm install jest --save-dev
--save-exact − It installs the package and locks the exact version in the package.json.
--no-save − It installs the package without adding it to the package.json.

Installing a Package Globally
Global installation allows to access the package from anywhere on your system, making it particularly useful for the command-line tools.

Unlike the local installations, which are project-specific, global installations enable tools to be used across multiple projects without requiring repeated installations. For installing the package globally use the following command.

npm install -g <package-name>
Example
npm install -g nodemon


Benefits of Global Installation
It is useful for CLI tools like nodemon, typescript or eslint.
It enables access to the command system-wide without needing project-level installation.
It helps to streamline development workflows.
Managing Global Packages
For checking the outdated global packages and ensuring we are using the latest versions of globally installed tools, use the following command.

```
npm outdated -g
```
For Updating the global package and ensuring we are using the latest features and security patches, use the following command.

```
npm update -g <package-name>
```
Listing Installed Packages
NPM has the list command that allows to view the installed packages in the project. This can be useful for debugging, ensuring that the correct packages are installed or verifying their versions. To view all the installed packages (Locally) use the following command.
```
npm list
```
For globally installed packages.

npm list -g --depth=0

Checking Package Versions
It is the crucial part of managing dependencies in a Node.js project. By knowing the version of installed packages, we can ensure that the project uses the correct and compatible versions, avoiding issues that arises from versions mismatches.

NPM provides the commands that allows to check the current version of a package and explore available versions. For checking the latest available version of a package use the following command.
```
npm show <package-name> version
```


For checking all available versions:
```
npm show <package-name> versions
```
Removing a Package

```
npm uninstall <package-name>
```
For removing globally
```
npm uninstall -g <package-name>
```