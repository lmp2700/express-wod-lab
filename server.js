const express = require("express");
const app = express();
port = 3000;

const Wod = require('./wod');


// Come up with a CRUDable model (fruit, human, robot, etc)

// Create an index route that displays all your objects. Commit.
// In the index route, create a form which will make a DELETE request to the server. Commit.
// Create a DELETE route handler that will remove the specified object from the array and redirect to the index page. Commit.


app.get('/workout', (req, res) => {
    console.log('hi there')
    res.render('index.ejs', {workout: Wod})
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});

module.exports = app;