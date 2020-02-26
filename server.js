const express = require('express');
const app = express();
const skillsRouter = require('./routes/skills');
const indexRouter = require('./routes/index');
const methodOverride = require('method-override');
const port = 3000;


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


//app.use is MOUNTING middleware...Order matters

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

app.listen(port, function() {
    console.log(`Express is listening on port ${port}`);
});