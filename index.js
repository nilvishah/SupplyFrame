// Set express as Node.js web application 
// server framework. 
// To install express before using it as 
// an application server by using 
// "npm install express" command. 


const express = require('express'); 
const app = express(); 
const axios = require('axios');
let router = express();

router.get('/', (req,res) => {
    res.render('../views/home.ejs')
})

// Set EJS as templating engine 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/',async (req, res) => {
    

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
    tags: 'under_30_minutes'
  },
  headers: {
    'X-RapidAPI-Key': '6202324d62msh19baa95b62cbbb3p172668jsnee482b887dbd',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
  
    // The render method takes the name of the html 
    // page to be rendered as input. 
    // This page should be in views folder  
    // in the root directory. 
    let data = { 
        name: 'Akashdeep', 
        hobbies: ['playing football', 'playing chess', 'cycling'] 
    } 
  
    res.render('home', { data: data }); 
});
const server = app.listen(3000, function () { 
    console.log('listening to port 3000') 
});