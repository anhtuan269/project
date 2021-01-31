var express = require('express');
var app = express();
var db = require('./db');
var axios = require('axios').default;
var axios = require('axios');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var shortid = require('shortid');

app.use(cookieParser('dadsadadda'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(express.static('./image'));


var port = 3000;

app.set('view engine', 'pug');
app.set('views', './client');

app.get('/', function (req, res) {
    res.render('Home/index');
});
app.get('/shop-list.html', function(req, res){
    res.render('shop-list.html/index')
});
app.get('/shop-grid-left-sidebar.html', function(req, res){
    res.render('shop-grid-left-sidebar.html/index')
});
app.get('/single.html', function (req, res) {
    res.render('single.html/index');
});
app.get('/variable-product.html', function (req, res) {
    res.render('variable-product.html/index');
});
app.get('/cart.html', function (req, res) {
    res.render('cart.html/index');
});
app.get('/checkout.html', function (req, res) {
    res.render('checkout.html/index');
});
app.get('/empty-cart.html', function (req, res) {
    res.render('empty-cart.html/index');
});
app.get('/banners', (req, res) => {
    const banners = db.get('banners').value();
    res.json(banners);
});
app.get('/banners', (req, res) => {
    const banners = db.get('banners').value();
    res.json(banners);
});
app.get('/products', (req, res) => {
    const products = db.get('products').value();
    res.json(products);
});
app.get('/slides', (req, res) => {
    const slides = db.get('slides').value();
    res.json(slides);
});
app.get('/blogs', (req, res) => {
    const blogs = db.get('blogs').value();
    res.json(blogs);
});
app.get('/logos', (req, res) => {
    const logos = db.get('logos').value();
    res.json(logos);
});
app.get('/singles', (req, res) => {
    const singles = db.get('singles').value();
    res.json(singles);
});


// ajax 

app.listen(port, function () {
    console.log('server listening on port' + ' ' + port)
});