// createAdmin.js
// STEPS:
// 1. Change email & password
// 2. Run: node createAdmin.js
// 3. Delete this file

require('dotenv').config(); // <-- MUST be at the top

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("./models/user.models"); // adjust path if needed

const adminEmail = "admin@admin.com";      // your admin email
const adminPassword = "admin123";          // your admin password

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("Admin user already exists");
    } else {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await User.create({
        email: adminEmail,
        password: hashedPassword,
        role: "admin"
      });
      console.log("Admin user created!");
    }

    // Close connection
    await mongoose.connection.close();
    process.exit(0);

  } catch (err) {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  }
}

// Run the function
createAdmin();
