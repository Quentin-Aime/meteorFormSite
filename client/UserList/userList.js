import { Template } from 'meteor/templating';
import './userList.scss';
import userList from "./../../Imports/db/user.js";

Template.userList.helpers (
    {
        users : function()
        {
            return user.find();
        }
    }
);