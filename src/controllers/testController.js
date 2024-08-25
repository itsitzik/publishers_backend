const mongoose = require('mongoose');

exports.resetBoarding = async (req, res) => {
  const UserModel = mongoose.model('Artist');
  const user = await UserModel.findOne({ email: 'artist@demo.com' });
  // console.log(user);

  await user.resetBoarding();

  res.status(200).json({
    success: true,
    result: 'ok',
  });
};
