import mongoose from "mongoose";

export const connection = async()=>{
    
    try{
        

            const currentConnection = await mongoose.connect("mongodb+srv://admin:himanshu@cluster0.thkmk.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser : true,
                useUnifiedTopology:true,
            })
        
    }
    catch(err){
        console.log(err);
    }
}

///-------------------------------Schema -----------------------------------///

const customerSchema = new mongoose.Schema({
    name:String,
})

export const model = mongoose.model("customers",customerSchema);