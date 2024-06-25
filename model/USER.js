const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    
    role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

let User = mongoose.model('User', UserSchema);
module.exports = User