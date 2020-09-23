const expressService = require ('express');
// express is a funciton so we need to create a new object 
const app = expressService();

app.get ('/');


app.get('/create-message');// listen to localhost::8080/create-message