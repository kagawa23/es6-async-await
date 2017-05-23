#!/bin/node

var fs = require('fs')
var co = require('co')


var readFile = function(filename){
  return new Promise(function(resolve,reject){
  	fs.readFile(filename,function(error,data){
      console.log(data)
       	if(error)
		      reject(error)
	     resolve(data) 
       })
  })
}

var asyncReadFile = async function(){
  var f1 = await readFile('/Users/zhaochen/Workspace/logs/me.log');
  var f2 = await readFile('/etc/shells');

  console.log(f1.toString());
  console.log(f2.toString());
}


function timeout(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function asyncPrint(value,ms){
  await timeout(ms);
  console.log(value);
}

asyncPrint("Hello wolrd",50);



// async function f() {
//   throw new Error('出错了');
// }


// f().then(
//   v=> console(v),
//   e => console.log(e)
//   )

// var gen = function* (){
//   var f1 = yield readfile('/Users/zhaochen/Workspace/logs/me.log');
//   var f2 = yield readfile('/etc/shells');
//   console.log(f1.toString());

//   console.log(f2.toString());
// }





// var co = require('co');
// co(gen).then(function(){
//   console.log('Generator 函数执行完成')
// },function(err){
//   console.log(err);
// })

//var result = asyncReadFile()


// var g = gen()

// var result = g.next()

// result.value.then(function(data){
//   console.log(`${data}`)
// })


// function* helloWorldGenerator(){
//   yield 'hello';
//   yield 'world';
//  yield 123+456
// }

// var hw = helloWorldGenerator()

// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())


var fetch = require('node-fetch');




async function getTitle(url){
  let response = await fetch(url);
  let html = await response.text()
  return html.match(/<title>([\s\S]+)<\/title>/i)[1]
}

getTitle('https://tc39.github.io/ecma262/').then(console.log)


async function f() {
  await Promise.reject("出错了");
 // await Promise.reject("Error");
  return await Promise.resolve("hello world")
}

f()
.then(v=>console.log(v))
.catch(e=> console.log(e))


// function* gen(){
//   var url = 'http://api.github.com/user/github'
//   var result = yield fetch(url);
//   console.log(result.bio);
// }

// var g = gen()

// var result = g.next()

// result.value.then(function(data){
//   // return data.json();
//   console.log(`${data}`);
// }).then(function(data){
//   g.next(`${data}`);
// });


