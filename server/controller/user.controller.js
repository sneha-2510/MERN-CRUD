import { User } from "../model/user.model.js";

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email })
    if (userExist) {
      return res.status(400).json({ message: "user already exists." });
    }
    const saveData = await newUser.save();
    res.status(200).json(saveData);
  }
  catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
}