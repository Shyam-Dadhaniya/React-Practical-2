# React-Practical-2
#### What is Webpack?
=>Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser.When Webpack processes your application, it builds a dependency graph which maps out the modules that your project needs and generates one or more bundles.
#### Install Webpack:<br/>
Create Folder.<br/>
Inside that folder create src folder.<br/>
Open that folder in Code Editor.<br/>
Open Terminal and give comand. <br/>
Step-1 : npm init -y to create package.json<br/>
Step-2 : npm install react react-dom<br/>
Step-3 : npm install webpack webpack-cli --save-dev<br/>
Step-4 : npm install react react-dom<br/>
Step-5 : Create webpack.config.js file in src and put code from webpack website and config as per needed.<br/>
Step-6 : Create index.html file in public folder.<br/>
Step-7 : Create index.js file in src folder.and configure that file.<br/>
Step-8 : add mode: 'developmnet' in webpack.config.js file<br/>
Step-9 : add  "start": "webpack" in pack package.json<br/>
Step-10 : now in terminal npm start.<br/>(But not understand AJX code for that we need babel)
#### What is babel?
=>Babel is a transpiler.Transpiler is a program that converts 1 type of source code to another type of source code. In our case, it takes all the fancy javascript (react, newer ECMAScript features, typescript etc) and converts it to old school browser understandable javascript.
#### Install Babel:<br/>
Step-1 : Remove mode: 'development' from webpack.config.js<br/>
Step-2 : Add "start": "webpack-dev-server --mode development --open --hot --history-api-fallback",<br/>
    	       "build": "webpack --mode=production"<br/>
Step-3 : Now install Babel: npm install @babel/core babel-loader --save-dev (link: https://www.npmjs.com/package/babel-loader)<br/>
Step-4 : Create .babelrc file in src and configure it.<br/>
Step-5 : Add module & rules in webpack.config.js<br/>
Step-6 : Install HtmlWebpackPlugin : npm install --save-dev html-webpack-plugin (link: https://webpack.js.org/plugins/html-webpack-plugin/)<br/>
Step-7 : Install webpack-dev-server(link: https://www.npmjs.com/package/webpack-dev-server)<br/>
Step-8 : npm start<br/>

##### Reference : https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9
