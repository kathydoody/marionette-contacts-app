/**
 * Created with JetBrains PhpStorm.
 * User: kathydoody
 * Date: 9/5/13
 * Time: 3:15 PM
 * To change this template use File | Settings | File Templates.
 */

ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){

    Entities.Contact = Backbone.Model.extend({});

    Entities.ContactsCollection = Backbone.Collection.extend({
        model: Entities.Contact,
        comparator: "firstName"
    });

    var contacts;

    var initializeContacts = function(){
        contacts = new Entities.ContactsCollection ([
            {
                id: 1,
                firstName: "Elizabeth",
                lastName: "Hasselbeck",
                phoneNumber: "999-9999"
            },
            {
                id: 2,
                firstName: "Joy",
                lastName: "Behar",
                phoneNumber: "999-9999"
            },
            {
                id: 3,
                firstName: "Star",
                lastName: "Jones",
                phoneNumber: "123-0000"
            },
            {
                id: 4,
                firstName: "Whoopie",
                lastName: "Goldberg",
                phoneNumber: "555-2345"
            },
            {
                id: 5,
                firstName: "Barbara",
                lastName: "Walters",
                phoneNumber: "456-0987"
            }
        ])
    };

    var API = {
        getContactEntities: function(){
            if(contacts === undefined){
                initializeContacts();
            }
            return contacts;
        }

    };

    // expose a specific API method
    ContactManager.reqres.setHandler("contact:entities", function(){
        return API.getContactEntities();
    });
})
