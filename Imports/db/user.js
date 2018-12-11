import { Mongo } from 'meteor/mongo';

const user = new Mongo.Collection("user");
export default user;