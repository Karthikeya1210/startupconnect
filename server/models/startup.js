const mongoose=require("mongoose");

const Schema=mongoose.Schema({
    startupId:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true,
    },
    password:{
      type:String,
      required:true
    },
    companyName:{
      type:String,
      required:true
    },
    registrationNumber:{
      type:String,
      required:true
    },
    industry:{
      type:String,
      required:true
    },
    companySize:{
      type:Number,
      required:true
    },
    location:{
      type:String,
      required:true
    },
    // yearFounded:{
    //   type:Date,
    //   required:true
    // },
    contactPerson:{
      type:String,
      required:true
    },
    /*contactTitle:{
      type:String,
      required:true
    },*/
    companyDescription:{
      type:String,
      required:true
    },
    missionStatement:{
      type:String,
      required:true
    },
    /*visionStatement:{
      type:String,
      required:true
    },*/
    revenue:{
      type:Number,
      required:true
    },
    // revenueAnnual:{
    //   type:Number,
    //   required:true
    // },
    // fundingHistory:{
    //   type:String,
    //   required:true
    // },
    
    createdAt:{
      type:Date,
      required:true
    },
    /*updatedAt:{
      type:String,
      required:true
    },*/

});

module.exports=mongoose.model('Startup',Schema);