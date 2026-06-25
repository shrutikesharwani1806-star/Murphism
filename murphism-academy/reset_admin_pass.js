const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.xpibspa.mongodb.net/murphism-db?appName=Cluster0';

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');
  
  const UserSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      password: String,
      isAdmin: Boolean,
    },
    { collection: 'users' }
  );
  
  const User = mongoose.models.User || mongoose.model('User', UserSchema);
  
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await User.updateOne({ email: 'admin@murphism.com' }, { $set: { password: hashedPassword, isAdmin: true } }, { upsert: true });
  console.log('Successfully set password of admin@murphism.com to admin123');
  
  await mongoose.disconnect();
}

run().catch(console.error);
