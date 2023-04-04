import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    image:String,
    handle: String,
    time: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;

