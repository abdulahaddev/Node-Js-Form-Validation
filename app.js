
const express = require('express');
const app = express();
const formidable = require('formidable');
const port = 3000;

app.use(express.static(__dirname + '/www'));

app.post('/process', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields) => {
		res.json(fields);
		res.end();
	});
});

app.listen(port, () => {
	console.log('Server running on port : ' + port);
});