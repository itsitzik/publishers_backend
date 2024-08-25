const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  boarded: {
    type: Boolean,
    default: false,
  },
  spotifyArtistId: {
    type: String,
    required: false,
  },
  hasPro: {
    type: Boolean,
    required: false,
    default: false,
  },
  ipiNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  stageName: { type: String, required: true },
  name: { type: String },
  surname: { type: String },
  country: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'owner',
    enum: ['owner'],
  },
});

artistSchema.methods.resetBoarding = async function () {
  this.spotifyArtistId = null;
  this.hasPro = null;
  this.ipiNumber = null;
  this.boarded = false;
  await this.save();
};

artistSchema.methods.userInfo = function () {
  return {
    _id: this._id,
    name: this.name,
    surname: this.surname,
    role: this.role,
    email: this.email,
    photo: this.photo,
    country: this.country,
    spotifyArtistId: this.spotifyArtistId,
    hasPro: this.hasPro,
    ipiNumber: this.ipiNumber,
    boarded: this.boarded,
  };
};

module.exports = mongoose.model('Artist', artistSchema);
