This is project is for nodejs async/await feature

It seems this is the final solution to deal with asynchronouse code in Javascript.

Isnt this approach much more readable and easy to understand?

Unfortunately, this proposal is not yet final, and even if it will be approved we will need to wait for the next version of the ECMAScript specification to come out and be integrated in Node.js to be able to use this new syntax natively.

You can use babel to convert Js code to other Js code. 


```
npm install --save-dev babel-cli babel-preset-es2017

echo '{ "presets": ["es2017"] }' > .babelrc

./node_modules/.bin/babel-node async-await.js
```


await命令只能用在async函数

await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。