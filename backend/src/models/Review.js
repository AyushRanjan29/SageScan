import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        language: {
        type: String,
        required: true,
        trim: true
    },

    code: {
        type: String,
        required: true
    },

    overallScore: {
        type: Number,
        min: 0,
        max: 100
    },

    analysis: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
    },
    {
    timestamps: true
    }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;