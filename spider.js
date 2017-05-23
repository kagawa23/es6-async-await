const request = require('request')
const cheerio = require('cheerio')


const url = "https://bbs.hupu.com/all-soccer"

function getPageHtml(url){
	return new Promise(function(resolve,reject){
		request(url,function(error,response , body){
			resolve(body)
		})
	})
}

let data = [];

async function main(){

	// getHtml
	const html = await getPageHtml(url);
	//console.log(html);
	const $ = cheerio.load(html);

	let h1 = $('.l_w_re a').each(function(i,elm){
		//console.log(i)
		//console.log(elm.val());
		let title = $(this).text()
		let href = $(this).prop("href")
		data.push({"title":title, "href":href})
	})
	console.log(data)


}

main();
console.log('Loading....')