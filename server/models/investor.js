const mongoose=require("mongoose");

const Schema=mongoose.Schema({
    investorId:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true,
    },
    fullName:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    phoneNumber:{
      type:String,
      required:true,
    },
    professionalTitle:{
      type:String,
      required:true
    },
    companyOrganization:{
      type:String,
      required:true
    },
    location:{
      type:String,
      required:true
    },
    investmentPreferences:[
      {
        type:String
      }
    ],
   
    professionalBio:{
      type:String,
      required:true
    },
    linkedInProfile:{
      type:String,
      required:true
    },
    pastInvestments:[{
      type:String,
    }],
    // expectedROI:{
    //   type:Number,
    // },
    // involvementLevel:{
    //   type:String,
    //   required:true
    // },
    accreditedInvestorStatus:{
      type:Boolean,
      required:true
    },
    //doc Of Accreditation,proof of funds
    createdAt:{
      type:Date,
      required:true
    },
    /*updatedAt:{
      type:Date,
      required:true
    },*/
    
});

module.exports=mongoose.model('Investor',Schema);