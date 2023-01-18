import mongoose  from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 80,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 80,
    },
    picturePath: {
      type: String,
      required: true,
      default: ''
    },
    friends: {
      type: Array,
      default: []
    },

  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)
export default User