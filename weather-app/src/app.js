const temperature = require('./utils/location');
const express = require('express');
const path = require('path');
const hbs  = require('hbs');
const handlebars = require('handlebars');

const app = express();

const staticPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'./templates/views');
const partialsPath = path.join(__dirname,'./templates/partials');

app.use(express.static(staticPath));

app.set('views',viewsPath);

app.set('view engine','hbs');

hbs.registerPartials(partialsPath);



app.get('',(req,res) => {
    res.render('index',{
        title : 'Weather App',
        name : 'Chandan Gupta'
    })
});

app.get('/weather',(req,res) => {
    
    if(!req.query.address){
        return res.send({error: 'Please enter valid location'});
    }

    temperature(req.query.address,(error,data) => {
        if(error){
            return res.send({error : 'Please check your internet connection'});
        }
        if(!data){
            return res.send({error : 'Enter valid location'});
        }
        return res.send({data:data});
    });
    
});



app.get('*',(req,res) => {
    res.render('404',{
        title : 'page not found',
        name : 404
    })
    
});




app.listen(3000,() => {
    console.log('Listening port at 3000...');
});