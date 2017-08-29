var mongoose = require('mongoose');

mongoose.promise = global.promise; //konfiguracja jednorazowa
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};