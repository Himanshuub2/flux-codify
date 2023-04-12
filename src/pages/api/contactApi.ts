import { connection,model } from "@/lib/mongodb"


export const contactApi = async(req,res)=>{
    try{

        await connection();
        
        const contactData = req.body
        const finalData = contactData.save()
        res.status(201).json({finalData})


    }
    catch(err){
        console.log(err)
    }
}