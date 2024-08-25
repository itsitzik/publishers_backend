const mongoose = require('mongoose');

const userInfo = async (userModel, req, res) => {
  console.log(userModel);

  const reqUserName = userModel.toLowerCase();
  const user = req[reqUserName];

  if (!user) {
    return res.status(401).json({
      success: false,
      result: null,
      message: 'unauthorized.',
    });
  }

  res.status(200).json({
    success: true,
    result: user.userInfo(),
  });
};

module.exports = userInfo;
