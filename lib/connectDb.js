import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        const opts = {};

        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
            return mongoose;
        }).catch(error => {
            console.error('An error occurred while connecting to the database');
            return null;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDb;
