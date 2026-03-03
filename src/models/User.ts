import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Interface representing the User document in MongoDB
 */
export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    role: "user" | "admin" | string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * User Schema definition
 */
const UserSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
            select: false, // Security: Ensure password is not returned in queries by default
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"], // Expandable as needed
        },
    },
    {
        // Automatically manage createdAt and updatedAt fields
        timestamps: true,
    }
);

// Prevent model overwrite during Next.js Hot Module Replacement (HMR)
const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
