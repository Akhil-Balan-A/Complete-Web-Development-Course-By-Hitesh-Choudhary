import mongoose from 'mongoose';

const connetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
        
    }
}

export default connetDB;