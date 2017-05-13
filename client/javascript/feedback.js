import {Meteor} from 'meteor/meteor';



Template.feedback.onCreated(function() {


});

Template.feedback.events({

})

Template.feedback.helpers({
    myTitle: function() {
        return "Feedback App";
    },

    checkType: function(type) {
        return type == "mcq";
    }
});
