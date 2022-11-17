const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;

const app = express();

const HomeStarters =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id cumque esse voluptas blanditiis iure quia ullam ipsa soluta in magnam nostrum a totam eos quidem, eum saepe dolores maiores.';
const aboutStarters =
	'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.';
const contactStarters =
	'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.';

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('home', { HomeStarters: HomeStarters });
});

app.get('/about', function (req, res) {
	res.render('about', { aboutStarters: aboutStarters });
});

app.get('/contact', function (req, res) {
	res.render('contact', { contactStarters: contactStarters });
});

app.get('/compose', function (req, res) {
	res.render('compose');
});

app.post('/compose', function (req, res) {
	const blog = {
		title: req.body.title,
		content: req.body.someweirdstuff,
	};
});

app.get('/posts', function (req, res) {
	res.render('posts');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
