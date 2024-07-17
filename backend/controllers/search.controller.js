import User from "../models/user.model.js";

 export const UserDetails= async (req, res) => {
    const { id } = req.params;
    console.log(id , "<<<<<<<<<<<<<<<<<<")
    try {
      const user = await User.findById(id).select('-password -updatedAt ');
     console.log(user)
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };