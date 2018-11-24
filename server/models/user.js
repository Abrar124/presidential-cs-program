exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    
    var UserSchema = new Schema({
      name                    : String,
      firstname               : String,
      lastname                : String,
      created                 : { type : Date, default : Date.now }
    });
  
    app.db.model('User', UserSchema);
  
  }