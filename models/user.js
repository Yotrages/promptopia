import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        match: [
            /^[a-zA-Z0-9]{8,20}$/, 
            'Username is invalid. It must contain 8-20 alphanumeric characters and be unique.',
        ],
    },
    image: {
        type: String,
        default: '', // Optional: you can set a default value
    },
});

const User = models.User || model('User', userSchema);

export default User;
