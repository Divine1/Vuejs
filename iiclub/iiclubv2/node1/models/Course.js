const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    "subId" : {
        type : String,
        required : true
    },
    "location" : {
        type : String,
        required : true
    },
    "title" : {
        type : String,
        required : true
    },
    "description" : {
        type : String,
        required : true
    },
    "shortDescription" : {
        type : String,
        required : true
    },
    "duration" : {
        type : String,
        required : true
    },
    "topic" : {
        type : String,
        required : true
    },
    "subTopic" : {
        type : String,
        required : true
    },
    "enrolled" : [{
        type  : Schema.Types.ObjectId,
        ref : "CourseEnrolled"
    }]
});

const Course = mongoose.model("course",CourseSchema);
module.exports=Course;