const express = require('express') // will use this later to send requests 
const http = require('https') // import env variables 
require('dotenv').config() 

//initializing and defining port
const app = express() 
const port = process.env.PORT || 3000 
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.get('/', (req, res) => { res.status(200).send('Server is working.') }) 
app.listen(port, () => { console.log(`🌏 Server is running at http://localhost:${port}`) })

/*app.post('/getmovie', (req, res) => { const movieToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.movie ? req.body.result.parameters.movie : '' 
const reqUrl = encodeURI( `http://www.omdbapi.com/?t=${movieToSearch}&apikey=f33093ca`) 
http.get( reqUrl, responseFromAPI => { let completeResponse = '' 
responseFromAPI.on('data', chunk => { completeResponse += chunk }) 
responseFromAPI.on('end', () => { const movie = JSON.parse(completeResponse) 
	let dataToSend = movieToSearch 
	dataToSend = `${movie.Title} was released in the year ${movie.Year}. It is directed by ${ movie.Director } and stars ${movie.Actors}.\n Here some glimpse of the plot: ${movie.Plot}. }` 
	return res.json({ fulfillmentText: dataToSend, source: 'getmovie' }) }) }, error => { return res.json({ fulfillmentText: 'Could not get results at this time', source: 'getmovie' }) } ) })
*/

//configuring the  API
const Documenu = require('documenu')
Documenu.configure('2975e490cfef2e10800031dbdc1f5a19')

/*app.post('/getrestaurant', (req, res) => { const restaurantToSearch = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.restaurants && req.body.queryResult.parameters.restaurants.zip_code ? req.body.result.parameters.restaurants.zip_code : '' 

const reqUrl = encodeURI( `https://api.documenu.com/v2/restaurants/zip_code/${postal_code}?key=2975e490cfef2e10800031dbdc1f5a19` )
http.get( 
	reqUrl, 
	responseFromAPI => { 
		let completeResponse = '' 
		responseFromAPI.on('data', chunk => { 
			completeResponse += chunk 
		}) 
		responseFromAPI.on('end', () => { 
			const postal_code = JSON.parse(completeResponse) 
	
			let dataToSend = restaurantToSearch 
			dataToSend = `${postal_code.restaurant_name} . 
		}` 
		
		return res.json({ 
			fulfillmentText: dataToSend, 
			source: 'getrestaurant' }) 
		}) 
	}, 
	error => { 
		return res.json({ 
			fulfillmentText: 'Could not get results at this time', source: 'getrestaurant' 
		}) 
	} ) 
})
*/

const options = {
	"method": "GET",
	"hostname": "documenu.p.rapidapi.com",
	"port": null,
	"path": "/restaurants/zip_code/90210",
	"headers": {
		"x-api-key": "2975e490cfef2e10800031dbdc1f5a19",
		"x-rapidapi-key": "9d45c63954mshb9aa4c257df46e8p1c537ajsn59907e2beace",
		"x-rapidapi-host": "documenu.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();






