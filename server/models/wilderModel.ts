import * as mongoose from 'mongoose';

const wilderSchema = new mongoose.Schema({
  name: String,
  groupName: String,
  states: String,
  resume: String,
});

const wilderModel = mongoose.model('wilder', wilderSchema);

export default wilderModel;
