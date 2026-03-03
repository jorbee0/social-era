import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICaseStudy extends Document {
    title: string;
    industryCategory: string;
    challenge: {
        title: string;
        points: string[];
    };
    strategy: {
        title: string;
        points: string[];
    };
    after: {
        title: string;
        metrics: string[];
    };
    image: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const CaseStudySchema: Schema<ICaseStudy> = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        industryCategory: {
            type: String,
            required: [true, "Industry Category is required"],
            trim: true,
        },
        challenge: {
            title: { type: String, default: "Business Challenge (Before)" },
            points: [{ type: String }],
        },
        strategy: {
            title: { type: String, default: "Strategy Implemented" },
            points: [{ type: String }],
        },
        after: {
            title: { type: String, default: "After (Measurable Outcomes)" },
            metrics: [{ type: String }],
        },
        image: {
            type: String,
            required: [true, "Image URL is required"],
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const CaseStudy: Model<ICaseStudy> =
    mongoose.models.CaseStudy || mongoose.model<ICaseStudy>("CaseStudy", CaseStudySchema);

export default CaseStudy;
