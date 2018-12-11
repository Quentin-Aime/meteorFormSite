import user from '../Imports/db/user';
Template.userList.helpers({
    user: function(){
        return user.find();
    }
})
