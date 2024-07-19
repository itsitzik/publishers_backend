require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

async function deleteData() {
  const Artist = require('../models/coreModels/Artist');
  const ArtistPassword = require('../models/coreModels/ArtistPassword');
  const Setting = require('../models/coreModels/Setting');

  await Artist.deleteMany();
  await ArtistPassword.deleteMany();
  console.log('👍 Artist Deleted. To setup demo artist data, run\n\n\t npm run setup\n\n');
  await Setting.deleteMany();
  console.log('👍 Setting Deleted. To setup Setting data, run\n\n\t npm run setup\n\n');

  process.exit();
}

deleteData();
