const mongoose =require('mongoose');
require ('dotenv').config();

// access the Mongodb URI from .env
const dburl =process.env.MONGODB_URL;

mongoose.connect(dburl,{
  //  useNewUrlParser:true,
  //  useUnifiedTopology: true
})

.then(() => console.log('✅ MongoDB connected successfully.'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

module.exports = mongoose;

// const MONGODB_URL.env
// const connectDB= async()=>{
//    await mongoose.connect(MONGODB_URL,{
    
//    });
//    console.log("db connected successfully.")

// };

// module.exports =connectDB;