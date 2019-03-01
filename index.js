var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/computer', function(req, res){
   res.render('computer', {computers: ['window', 'osx', 'Android', 'ios'] })
})
app.listen(8000)
app.use(express.static(__dirname + '/image'))