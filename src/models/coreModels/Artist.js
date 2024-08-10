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

module.exports = mongoose.model('Artist', artistSchema);
