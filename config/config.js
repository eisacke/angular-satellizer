module.exports = {
  'databaseUrl': process.env.MONGOLAB_URI || 'mongodb://localhost:27017/satellizer',
  'port': process.env.PORT || 3000
};