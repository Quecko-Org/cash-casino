
const User = require("./users.model");


exports.getUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
  
};

exports.storeUser = async (req, res, next) => {
  try {
    const { email } = req.body;
console.log("body",email)
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const user = new User({ email });
    await user.save();

    res.status(201).json({
      success: true,
      message: 'Email stored successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
