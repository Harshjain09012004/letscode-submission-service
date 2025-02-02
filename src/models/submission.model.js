const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : [true, 'UserId is Missing']
    },
    code : {
        type : String,
        required : [true, 'Code is Missing']
    },
    language : {
        type : String,
        required : [true, 'Language is Missing']
    },
    problemId : {
        type : String,
        required : [true, 'ProblemId is Missing']
    },
    status : {
        type : String,
        enum : ['Pending', 'Accepted', 'TLE', 'MLE', 'RE', 'WA'],
        default : 'Pending'
    },
    timeStamp : {
        type : String,
        default : Date()
    }
});

const submissionModel = new mongoose.model('Submissions', submissionSchema);

module.exports = submissionModel;