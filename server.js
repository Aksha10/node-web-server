const express=require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();


app.set('view engine', 'html');
app.engine('.html', require('ejs').renderFile);
app.set('views',__dirname+'/views');

app.get('/', (req, res) => {
	res.render('index',{
		pageTitle: 'My Pages',
		welcomeMessage: 'Welcome to my website'
	});
});

app.get('/about',(req,res) => {
	res.render('about', {
		pageTitle: 'About Page',
	});
});

app.get('/project', (req, res) => {
	res.render('project', {
		pageTitle: 'Project Page'
	});
});
// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Unable to handle request'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});