# Express Dataz Context

Adds an instance of [Dataz](https://github.com/wesleytodd/dataz) onto `res.locals` in an express app.  This is for exposing data to the front-end of a web app.

## Install

```
$ npm install --save express-dataz-context
```

## Basic Usage

```javascript
var express = require('express'),
	context = require('express-dataz-context');

var app = express();
app.use(context);

app.get('/', function(req, res) {
	// Get and add some data to the context
	res.locals.context.set('someData', {
		title: 'Data that needs escaping<script>alert('injection');</script>'
	});
	res.render('index.html');
});

/* Index Template:

<html>
	<head>
		<title><%= context.get('someData:title') %></title>
		<script>
			var pageData = <%- context.escape(true) %>;
			// {"someData":{"title":"Data that needs escaping&lt;script&gt;alert('injection');&lt;/script&gt;"}}
		</script>
	</head>
	<body></body>
</html>
*/

```
