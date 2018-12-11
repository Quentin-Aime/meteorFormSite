import { Template } form "meteor/templating";
import user form "../Imports/db/user";

template.form.events
(
  {
    "click #submit" : function( event, template )
        {
            user.insert
            (
                {
                    firstName : template.find( "#firstName" ).value,
                    lastName : template.find( "#lastName" ).value,
                    githubAccount : template.find( "#githubAccount" ).value
                };
            );
        };
  };
);
