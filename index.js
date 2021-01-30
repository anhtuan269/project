var express = require('express');
var app = express();

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


app.listen(port, function () {
    console.log('server listening on port' + ' ' + port)
});