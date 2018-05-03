const express=require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();


app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log + '\n');
	next();
});

app
app.get('/', (req, res) =>{
	// res.send('<h1>Hello Express!<h1>');
	res.send({
		name: 'Akshata',
		likes: [
			'Dance',
			'Cities'
		]
	});
});

app.get('/about',(req,res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Unable to handle request'
	});
});

app.listen(port, () => {
	console.log('Server is up on port ${port}');
});