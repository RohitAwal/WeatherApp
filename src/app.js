const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const hbs = require('hbs');

//public static path
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templetes/views");
const partials_path = path.join(__dirname, "../templetes/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/weather", (req, res) => {
    res.render("weather")
});

app.get("*", (req, res) => {
    res.render("404", {
        errorMsg: "Opps page not exist, clicks to go back"
    })
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})