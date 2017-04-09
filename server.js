const express           = require('express'),
      app               = express(),
      mongoose          = require('mongoose'),
      Store             = require('./store.js');

// MongoDB setup
mongoose.connect('mongodb://localhost/starbucks_stores');
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

//render html
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/src'));


app.get('/', function(req,res) {
  res.render("index.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server launch detected");
})
