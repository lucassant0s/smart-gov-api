import mongoose from 'mongoose';

/**
 * Connect to MongoDB.
 */
mongoose.Promise = Promise;
const db = mongoose.connect(process.env.MONGODB_URI);
db.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

export default db;
