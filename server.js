const express = require("express");
const app = express();
port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Wod = require('./wod');

app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'));
// In the index route, create a form which will make a DELETE request to the server. Commit.
// Create a DELETE route handler that will remove the specified object from the array and redirect to the index page. Commit.


app.get('/workout', (req, res) => {
    console.log('hi there')
    res.render('index.ejs', {workout: Wod})
});

app.get('/workout/:id', (req, res) => {
    res.render('show.ejs', {
        workout: Wod[req.params.id]
    })
})

app.delete('/workout/:id', (req, res) => {
    Wod.splice(req.params.index, 1);
    res.redirect('/workout')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
});

module.exports = app;

{/* <form action="/workout method="POST">
<li>Name: <input type="text" name="name"></li> 
<li>Weight: <input type="text" name="weight"></li>
<li>Type: <input type="text" name="type"></li>
<li><input type="submit" name="" value="Delete"/></li>
</form> */}