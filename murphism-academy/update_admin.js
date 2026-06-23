const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.xpibspa.mongodb.net/murphism-db?appName=Cluster0';

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');
  
  const UserSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      isAdmin: Boolean,
    },
    { collection: 'users' }
  );
  
  const User = mongoose.models.User || mongoose.model('User', UserSchema);
  
  const users = await User.find({ email: /admin/i });
  for (const user of users) {
    user.isAdmin = true;
    await user.save();
    console.log(`Updated user ${user.email} to isAdmin: true`);
  }
  
  await mongoose.disconnect();
}

run().catch(console.error);
