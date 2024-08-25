const Joi = require('joi');
const mongoose = require('mongoose');

const spotifyApi = require('@/api/spotify.api');
const countriesUtils = require('@/utils/countryList');

const updateBoardingData = async (userModel, req, res) => {
  const User = mongoose.model(userModel);

  const reqUserName = userModel.toLowerCase();
  const userProfile = req[reqUserName];

  const { spotifyArtistId, country, hasPro, ipiNumber } = req.body;

  const objectSchema = Joi.object({
    spotifyArtistId: Joi.string().alphanum().min(22).max(22).required(),
    country: Joi.string().required(),
    hasPro: Joi.string().required().valid('yes', 'no'),
  });

  const { error, value } = objectSchema.validate({ spotifyArtistId, country, hasPro });

  if (error) {
    return res.status(400).json({
      success: false,
      result: null,
      error: error,
      message: 'error.',
      errorMessage: error.message,
    });
  }

  if (!spotifyApi.checkArtistIdAvailability(spotifyArtistId)) {
    return res.status(400).json({
      success: false,
      result: null,
      message: 'This artist is already in use.',
    });
  }

  if (!countriesUtils.isCountryExist(country)) {
    return res.status(400).json({
      success: false,
      result: null,
      message: country + ' country code not exist',
    });
  }

  const updates = {
    spotifyArtistId: spotifyArtistId,
    country: country,
    hasPro: hasPro == 'yes',
    ipiNumber: ipiNumber,
    boarded: true,
  };

  const result = await User.findOneAndUpdate(
    { _id: userProfile._id, removed: false },
    { $set: updates },
    {
      new: true,
    }
  ).exec();

  res.status(200).json({
    success: true,
    result: result,
  });
};

module.exports = updateBoardingData;
