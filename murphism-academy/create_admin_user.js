const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.xpibspa.mongodb.net/murphism-db?appName=Cluster0';

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');
  
  const UserSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      password: String, // bcrypt password
      isAdmin: Boolean,
    },
    { collection: 'users' }
  );
  
  const User = mongoose.models.User || mongoose.model('User', UserSchema);
  
  const admins = await User.find({ isAdmin: true });
  console.log('Admins found:', admins.map(a => ({ name: a.name, email: a.email })));
  
  if (admins.length === 0) {
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const newAdmin = new User({
      name: 'Super Admin',
      email: 'admin@murphism.com',
      password: hashedPassword,
      isAdmin: true
    });
    await newAdmin.save();
    console.log('Created admin account: admin@murphism.com / admin123');
  }
  
  await mongoose.disconnect();
}

run().catch(console.error);
