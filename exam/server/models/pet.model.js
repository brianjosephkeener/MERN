const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { type: String,
    required: [
        true,
        "Pet name is required"
    ],
    minlength: [3, "Pet name must be at least 3 characters"]
        },
    type: {
        type: String,
        required: [true, "Please insert a pet type"],
        minlength: [3, "Pet type must be at least 3 characters"],
        },
    description: {
        type: String,
        required: [true, "Please insert a description"],
        minlength: [3, "Description must be at least 3 characters"],
        },
    skill_one: {
        type: String,
        required: [false],
        },
    skill_two: {
        type: String,
        required: [false],
        },
    skill_three: {
        type: String,
        required: [false],
        },
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);

