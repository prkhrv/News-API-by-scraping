'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NewsSchema = new Schema({
    news_headline:{
        type:String
    },
    news_text:{
        type:String
    },
  timestamp:{
    type : Date, 
    default: Date.now
  }

});


module.exports = mongoose.model('News',UserSchema);
