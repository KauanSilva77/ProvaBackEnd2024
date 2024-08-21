import mongoose from "mongoose";
import sequelize from './sequelize'; 


const mongoUri = process.env.MONGO_URI!;


export const connectDatabases = () => {
  return mongoose.connect(mongoUri)
    .then(() => {
      console.log('Connected to MongoDB');
      return sequelize.sync({ force: true });
    })
    .then(() => {
      console.log('Database & tables created!');
    })
    .catch(err => {
      console.error('Failed to connect to databases:', err);
    });
};
