# md  : markdown 

# React setup 
- npm create vite@latest fileName
- select React, JavaScript
- cd fileName
- npm install (install all dependencies and devDependencies from package.json)
- npm run dev


# What is React?
- React is a js library which is used for building web applications.
- imporove not loading direct showing.


# Difference between library and framework.
framework = library + rules

library
----------
- You control the code.
- You have more independence.
- There is no fixed rules of using the funcs of library
- You call the library
- More code write
- less features have on library than framework
e.g : React JS (Only for frontend)


framework
-----------
- Framework control the code
- You have less independence
- There are more rules here
- Framework calls your code
- Less code write
- More features have on framework
e.g : Next Js (Both frontend and backend)


# Explain different folders present in React Applications.
- node_modules : Contains all the package which we download.
- public : Contains all static files like images, videos etc. That we cannot change after long time.
- src(Source code) : Contains all the code we have written.
- assets : Contains the assets or data. That is same at all.
- vite.config.js : configuration file for vite
- eslint.config.js : configuration file for exlint
(configuration -> setting file)



# Explain JSX.
- JSX : JavaScript Syntax.


# Diff js and react.
class -> className,

js
------
- provide less security compare to React
- More data loss

React
------
- Provide more security
- No data Loss


# Node js 
- Software which is used to run javaScript.
- Manage project.


# Package
- a collection of code which provides us the utility functions
- other name of package : dependency
e.g : I have used axios dependency in my project.
"react": "^19.2.5", // react -> fileName, ^19.2.5 -> version



# npm 
 - package manager for node js
 - npm install <pkg name>  -> for installing package (that is install inside node_modules)
 - npm uninstall <pkg name>  -> for uninstalling package (that is uninstall from node_modules)
 - npm run dev -> for running application
 - npm run build -> for bundling the project
 - npm install -> install the packages present in package.json
 - it has no official full form, but many people say its full form is node package manager.



 # why we don't push our node modules to gitHub?
 - Because we can regenerate node modules whenever we need. (so, that is already written in .gitignore file)


 # Do i need to push pkg.json in gitHub?
 - yes, because pkg.json contains information about dependencies.


 # what is package.json?
 - package.json is configuration file which keeps track of packages along with their version which we have used.


 # Why pkg-lock.json when we have pkg.json?
 -pkg.json keeps version ranges which may differ from the exact version.
 - pkg-lock.json tracks exact version of the package.


 # why have we so much packages in node modules when we have downloaded only few?
 - Because the packages we download also need some packages for working.
 e.g : A(x,y) -> A, x, y   Here x depends on x and y so need install much .


# How many package.json we have?
- All the packages which we install have their own pkg.json



# Transitive dependency
- Transitive dependency is the dependency of the dependency.
A pkg is needed for our project.
For running A pkg we need B and C pkg => B and C will be transitive dependency for me.


# Why 2 React pkg needed.
 - React is not limited to web development. It is also used in app development and others. React DOM is limites to web development.


# Can React be used for Backend?
- No
     React - Frontend
     Node - Backend
     Next - Both


# What is dependency?
- Dependency is the package on which our project depends on.


# What are the types of dependencies?
- There are two types of dependency - Normal dependency and devDependency(Development Dependency)


# Difference between normal and dev dependency.
- Normal dependency is used for in both development and production.
- Dev dependency is used for development only.

# Why we need dev dependency?
- Make development easy

# How install  dev dependency?
- npm install pkg-name Or, npm i pkg-name  -> for installing normal dependency(eg : axios)
- npm install -D pkg-name Or, npm i -D pkg-name  -> for installing dev dependency(eg : noremon)


# type of browser.
- 2 types of browser
- Modern browser -> new browser
- Legacy browser -> old browser  



# type of export-import
- 2 type of export - import present in React.
     - default export - import
     - named export - import