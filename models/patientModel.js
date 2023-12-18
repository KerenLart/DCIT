const mongoose = require("mongoose")

const patientSchema = mongoose.Schema(
    {
        ID:{
            type: Number,
            required: [true, "Please input patient ID"]

        },

        surname:{
            type: String,
            reqired: [true, "Please input patients surname"]
        },
        otherNames:{
            type: String,
            required: [true,"Please input patients othernames"]
        },

        gender:{
            type:String,
            required: true
        },

        phoneNumber:{
            type: Number,
            required: true
        },
        
        residentialAddress:{
            type: String,
            required: true,
        },

        emergencyName:{
            type: String,
            required:true,
        },

        emergencyContact:{
            type: Number,
        },

        relationshipWithPatient:{
            type: String,
        }
        


    }
    

)

