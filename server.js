const express = require('express');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3000
const routes = require('./controllers/index');
const exhpbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');



const app = express();

const hbs = exhpbs.create({});

app.engine('handlebars', hbs.engine);

app.set('view engine','handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({force:true}).then(()=>{
app.listen(PORT, (err) => {
  if (err) {
      return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
})

