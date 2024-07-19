require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });
const { globSync } = require('glob');
const fs = require('fs');
const { generate: uniqueId } = require('shortid');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

async function setupApp() {
  try {
    const Artist = require('../models/coreModels/Artist');
    const ArtistPassword = require('../models/coreModels/ArtistPassword');
    const newArtistPassword = new ArtistPassword();

    const salt = uniqueId();

    const passwordHash = newArtistPassword.generateHash(salt, 'artist123');

    const demoArtist = {
      email: 'artist@demo.com',
      name: 'IDURAR',
      surname: 'Artist',
      enabled: true,
      role: 'owner',
    };
    const result = await new Artist(demoArtist).save();

    const ArtistPasswordData = {
      password: passwordHash,
      emailVerified: true,
      salt: salt,
      user: result._id,
    };
    await new ArtistPassword(ArtistPasswordData).save();

    console.log('👍 Artist created : Done!');

    const Setting = require('../models/coreModels/Setting');

    const settingFiles = [];

    const settingsFiles = globSync('./src/setup/defaultSettings/**/*.json');

    for (const filePath of settingsFiles) {
      const file = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      settingFiles.push(...file);
    }

    await Setting.insertMany(settingFiles);

    console.log('👍 Settings created : Done!');

    const PaymentMode = require('../models/appModels/PaymentMode');
    const Taxes = require('../models/appModels/Taxes');

    await Taxes.insertMany([{ taxName: 'Tax 0%', taxValue: '0', isDefault: true }]);
    console.log('👍 Taxes created : Done!');

    await PaymentMode.insertMany([
      {
        name: 'Default Payment',
        description: 'Default Payment Mode (Cash , Wire Transfert)',
        isDefault: true,
      },
    ]);
    console.log('👍 PaymentMode created : Done!');

    console.log('🥳 Setup completed :Success!');
    process.exit();
  } catch (e) {
    console.log('\n🚫 Error! The Error info is below');
    console.log(e);
    process.exit();
  }
}

setupApp();
