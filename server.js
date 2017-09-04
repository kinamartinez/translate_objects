/**
 * Created by kinamartinez on 9/4/17.
 */
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(5050, function(){
    console.log("Server listening on port 5050")
});