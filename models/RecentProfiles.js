import mongoose from 'mongoose';

const RecentProfilesSchema = new mongoose.Schema(
    {
        name: { type: String },
        username: { type: String, required: true, unique: true, lowercase: true, trim: true },
        following: { type: String, required: true },
        followers: { type: String, required: true },
        avatarUrl: { type: String, required: true },
    },
    { timestamps: true },
);

export default mongoose.models.RecentProfiles || mongoose.model('RecentProfiles', RecentProfilesSchema);
