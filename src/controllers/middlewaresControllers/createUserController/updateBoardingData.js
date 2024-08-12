const mongoose = require('mongoose');

const updateBoardingData = async (userModel, req, res) => {
  const User = mongoose.model(userModel);

  const { spotifyArtistId, country, hasPro, ipiNumber } = req.body;
  console.log(spotifyArtistId, country, hasPro, ipiNumber);
  return res.status(200).json({
    success: true,
    result: { spotifyArtistId, country, hasPro, ipiNumber },
    message: 'we update the password by this id: ',
  });
};

module.exports = updateBoardingData;
