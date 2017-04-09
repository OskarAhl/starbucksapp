const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema ({
  userIdentifier: String,
  name: String,
  brand: String,
  phoneNumber: String,
  ownershipType: String,
  streetCombined: String,
  streetOne: String,
  streetTwo: String,
  city: String,
  countrySubdivision: Number,
  country: String,
  postalCode: Number,
  coordinates: String,
  latitude: String,
  longitude: String,
  timezone: String,
  currentTimezoneOffset: Number,
  olsonTimezone: String,
  firstSeen: String
});

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;
