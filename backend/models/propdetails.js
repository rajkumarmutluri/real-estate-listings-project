const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const objectId=Schema.objectId;

const propertydetailsSchema=new Schema({
    name:{type:String,required:true},
    age:Number
    
},{timestamps:true});

const propertydetailsModels=mongoose.model('propertydetails',propertydetailsSchema);
module.exports=propertydetailsModels;






// PPID:{type:String,required:true},
//     Image:{type:String,required:true},
//     Property:{type:String ,required: true},
//     Contact:{type:Number,required:true},
//     Area:{type:Number ,required:true},
//     Views:{type:Number,required:true},
//     Status:{type:String,required:true},
//     Daysleft:{type:Number,required:true},