const express = require("express");
const app = express();
port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Wod = require('./wod');

app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'));

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
    Wod.splice(req.params.id, 1);
    res.redirect('/workout');
});

app.get('/workout/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        workout: Wod[req.params.id],
        id: req.params.id
    });
});

app.put('/workout/:id', (req, res) => {
    Wod[req.params.id] = req.body;
    res.redirect('/workout')
});

// A link to the edit route on the index page. Commit.
// A PUT route that will change the element of your objects array, as specified by the index in the URL, to req.body
// this page should redirect back to the index route, once this is completed
// the form on the edit page should make a PUT request to this route



app.listen(3000, () => {
    console.log('listening on port 3000')
});

module.exports = app;

