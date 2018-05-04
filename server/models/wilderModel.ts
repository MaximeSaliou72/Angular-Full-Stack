import * as mongoose from 'mongoose';

const wilderSchema = new mongoose.Schema({
  _id: String,
  name: String,
  groupName: String,
  states: String,
  resume: String,
  url: String,
});

const wilderModel = mongoose.model('wilder', wilderSchema);

export default wilderModel;
