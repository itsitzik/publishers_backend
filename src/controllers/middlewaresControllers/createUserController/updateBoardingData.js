const mongoose = require('mongoose');

const updateProfile = async (userModel, req, res) => {
  const User = mongoose.model(userModel);

  const { spotifyArtistId, country } = req.body;
};

module.exports = updateProfile;
