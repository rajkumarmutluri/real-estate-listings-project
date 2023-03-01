const mongoose=require('mongoose');
mongoose.set('strictQuery', false)
async function getConnection() {
    await mongoose.connect('mongodb+srv://Abhinavkashyap:Abhinav@cluster0.laq2kad.mongodb.net/?retryWrites=true&w=majority');
}
module.exports= getConnection