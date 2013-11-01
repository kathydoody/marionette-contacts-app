ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){

   List.Contact = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#contact-list-item",

        events:{
            "click" : "highlightName"
        },

        displayName: function(model){
            alert("clicked on "+ model.firstName);
        },

       highlightName: function(e){
           this.$el.toggleClass('warning');
           this. displayName(this.model);
       }
    });

    List.Contacts = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        itemView: List.Contact,
        itemViewContainer: "tbody"
    });

   /* List.Contact = Marionette.ItemView.extend({
        tagName: "li",
        template: "#contact-list-item2"
    });

    List.Contacts = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list2",
        itemView: List.Contact,
        itemViewContainer: "ul"
    });*/


})
