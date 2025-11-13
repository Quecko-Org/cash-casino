const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
    },
   
  },
    { timestamps: true }
);

module.exports = mongoose.model("users", usersSchema);
