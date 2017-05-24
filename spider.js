const request = require('request')
const cheerio = require('cheerio')
const iconv = require('iconv-lite');


const url = "https://bbs.hupu.com/all-soccer"

function getPageHtml(url){
	return new Promise(function(resolve,reject){
		request(url,function(error,response,body){
			if(error){
				return reject(error)
			}
				console.log(response.statusCode)
				resolve(body)
		})
	})
}


function getHeader(url){
	return new Promise(function(resolve,reject){
		request(url,function(error,response,body){
			if(error){
				return reject(error);
			}
			// if( response.statusCode == 302 ){
				return resolve(response);
			// }
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
		let buf = iconv.encode(title, 'GBK');
		console.log(buf)
		let bdUrl = `http://www.baidu.com/s?wd=${buf}`
		//let bdUrl = `http://www.baidu.com/s?wd=时光穿越的老生常谈`
		
		data.push({"title":title, "href":href, "bdUrl" :bdUrl });

	})
	console.log(data)


	//for (let i = 0; i < data.length ; i++) {
	//	let elem = data[i];
	let elem = data[0];
		try{
			console.log(elem.bdUrl)
			const dbHtml = await getPageHtml(elem.bdUrl);
			console.log(elem.title)
			const $ = cheerio.load(dbHtml);
			//console.log(dbHtml)
			let firstResult = $('#1 h3 a').prop("href")
			
			console.log(firstResult)
			//console.log(`Baidu result: ${firstUrl}`)
			// const response = await getHeader(elem.bdUrl);
			// //console.log(response.headers);
			// console.log(response.statusCode);
			// if(response.statusCode == 302){
			// 	console.log(response.headers)
			// }	
		}catch(err){
			//console.log(err)
		}
		
		//
	//}
	// data.forEach(function(elem){
	// 	let url = elem.bdUrl;
	// 	const header = await getHeader(url)
	// 	console.log(header);
	// })

}

main();
console.log('Loading....')