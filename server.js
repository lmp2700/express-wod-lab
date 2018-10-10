const express = require('express')
port = 3000

const Wod = require('./wod.js')


// Come up with a CRUDable model (fruit, human, robot, etc)

// Set up a repo.
// Create an express app. .gitignore your node_modules. Commit.
// Create an array of your CRUDable objects. Commit.
// Create an index route that displays all your objects. Commit.
// In the index route, create a form which will make a DELETE request to the server. Commit.
// Create a DELETE route handler that will remove the specified object from the array and redirect to the index page. Commit.


app.get('/workout', (req, res) => {
    res.render('wod.js')
});


app.listen(3000, () => {
    console.log('listening on port 3000')
});