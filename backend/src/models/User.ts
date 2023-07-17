import mongoose, { Document, Schema } from 'mongoose';

// IUser interface for TypeScript to understand the User document structure.
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const User = mongoose.model<IUser>('User', UserSchema);