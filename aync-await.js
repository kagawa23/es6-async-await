const request = require('request')

function getPageHtml(url){
	return new Promise(function(resolve,reject){
		request(url,function(error,response , body){
			resolve(body)
		})
	})
}

async function main(){
	const html = await getPageHtml('htt://google.com');
	console.log(html)
}

main();
console.log('Loading....')