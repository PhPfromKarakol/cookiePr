const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));


app.get('/greet', (req, res) => {
    res.send('assalyamu aleikum');
    // console.log(req.cookies)
    const { name = 'No-Name' } = req.cookies;

});

app.get('/signedcookies', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('you signed a cookie');
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    // res.send(req.cookies);
    res.send(req.signedCookies);

});

app.get('/getname', (req, res) => {
    res.cookie('name', "nurbek");
    res.cookie('surname', "abdykerimov");
    res.send('saving your data');
});


app.listen(3000, () => {
    console.log('listeting port 3000');
})