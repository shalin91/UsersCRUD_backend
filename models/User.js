const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
    },
    email: {
      type: String,  
    },
    phone: {
      type: String,
    },
    birthDate:{
      type : Date
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);




const User = mongoose.model("User", userSchema);

module.exports = User;
