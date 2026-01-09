const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        
    },
    rating: {
        type: Number
    },
    bio: {
        type: String
    },
    nationality: {
        type: String
    },
    dob: {
        type: Date
    },
    photo: {
        type: String//image url
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
   
},

{
    timestamps: true
}

);

module.exports = mongoose.model('Author',authorSchema);
