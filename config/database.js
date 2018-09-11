if(process.env.NODE_ENV === 'production'){
  module.exports = {
    mongoURI: 'mongodb://<user>:<password>@ds251332.mlab.com:51332/vidjot-prod'
  }
} else {
module.exports = {
  mongoURI: 'mongodb://localhost/vidjot-dev'
}
}