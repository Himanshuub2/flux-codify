import { connection,model } from "@/lib/mongodb"


export const contactApi = async(req,res)=>{
    try{

        await connection();
        
        const contactData = req.body
        res.status(201).json({contactData})


    }
}