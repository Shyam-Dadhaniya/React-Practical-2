# React-Practical-2

## Output:![Screenshot from 2022-02-23 13-39-36](https://user-images.githubusercontent.com/97106864/155281681-1c631c48-7149-4e2a-8bfa-d32e5ea74966.png)

#### What is Webpack?
=>Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser.When Webpack processes your application, it builds a dependency graph which maps out the modules that your project needs and generates one or more bundles.

#### What is babel?
=>Babel is a transpiler.Transpiler is a program that converts 1 type of source code to another type of source code. In our case, it takes all the fancy javascript (react, newer ECMAScript features, typescript etc) and converts it to old school browser understandable javascript.

#### What is webpack-dev-server?
=>Webpack-dev-server Is a package that offers a server to process the website files. It also builds a single . js file ( bundle. js ) from client components but serves it in memory.

#### What is HtmlWebpackPlugin?
=> Simplifies creation of HTML files to serve your webpack bundles.

#### Babel-loader
=> Exposes a loader-builder utility that allows users to add custom handling of Babel's configuration for each file that it processes.

#### 1. Install dependency

```sh
$ npm install
```
#### 2. Install Webpack And Webpacl-cli:

```sh
$ npm install webpack webpack-cli --save-dev
```

#### 3. Install React And React-DOM:

```sh
$ npm install react react-dom
```

#### 4. Install Babel:

```sh
$ npm install @babel/core babel-loader --save-dev
```

#### 5. Install HtmlWebpackPlugin:

```sh
$ npm install --save-dev html-webpack-plugin
```

#### 6. Install webpack-dev-server:

```sh
$ npm install webpack-dev-server --save-dev
```

#### 7. Install css-loader:

```sh
$ npm install --save-dev css-loader
```
#### 8. Install style-loader:

```sh
$ npm install --save-dev style-loader
```

##### Reference : https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9
