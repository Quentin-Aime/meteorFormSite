import { Template } from 'meteor/templating';
import './userList.scss';
import user from './../../Imports/db/user.js';

Template.userList.helpers (
    {
        user : function()
        {
            return user.find();
        }
    }
);