import { Template } from "meteor/templating";
import './userList.scss';


Template.userList.events
(
    {
        "click #submit" : function( event, template )
        {
            playlist.insert
            (
                { 
                    song : template.find( "#song" ).value
                }
            )
        }

    }
)