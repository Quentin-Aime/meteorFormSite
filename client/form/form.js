import { Template } from 'meteor/templating';
import user from '../Imports/db/user';

Template.form.events (
    {
        'click #submit' : function( event, template ) {
            user.insert (
                {
                    firstName : template.find( '#firstName' ).value,
                    lastName : template.find( '#lastName' ).value,
                    githubAccount : template.find( '#githubAccount' ).value
                }
            );
        }
    }
);
