-e or --eval
It executes the JavaScript code directly from the command line without creating a separate file. It is useful for testing small snippets of code, performing calculations or debugging simple logic without writing a full script file.

```
node -e "console.log('Welcome to, Tutorialspoint.!');"
```

We can also use this option to execute the multi-line JavaScript by wrapping the code in the quotes and separating the lines with semicolons.

node -e "let x=112; let a=234; console.log(x+a);

-p or --print
It evaluates and prints the result of the given JavaScript expression. This option used for quick calculations, debugging and testing expressions without the need of separate script file.

It works similarly to the -e, but automatically prints the output without the need of explicit console.log.
```
node -p "112 - 321";
```

We can also use this option to print the result of the function calls or object properties.

```
node -p "Math.sqrt(121)";
```

--check or -c
It is used to check the syntax of the JavaScript file without executing it. This option is used for verifying if a script has a valid syntax before running it, helps in find the errors in the early stage.

Let's look at the simple example, where we are going to consider the JavaScript file saved as 'test.js' contains the script as shown below:

test.js

node --check test.js