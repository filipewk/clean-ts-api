export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://root:filipe50@mongo:27017/clean-node-api?authSource=admin',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'Tkz(*&^%$sax$#$%^&^%==1'
}
