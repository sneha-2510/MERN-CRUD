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
};

export const getAllUsers = async (req, res) => {
  try {
    //retrieve all the data from the database
    const userData = await User.find();

    if (!userData || userData.length === 0) {
      return res.status(404).json({
        message: "User data not found."
      })
    }

    res.status(200).json(userData);

  } catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
}

export const getUserById = async (req, res) => {
  try {

    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" })
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
}

export const update = async (req, res) => {
  try {

    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" })
    }

    const updatedData = await User.findByIdAndUpdate(userId, req.body, {
      new: true
    })

    res.status(200).json(updatedData);

  } catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" })
    }

    await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully"
    })
  } catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
}