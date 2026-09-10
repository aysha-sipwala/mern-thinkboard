import mongoose from 'mongoose';

const note_schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    {timestamps: true} //cretaed at, updated at
);

const Note = mongoose.model("Note", note_schema)

export default Note