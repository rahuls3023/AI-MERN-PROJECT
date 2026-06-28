import { generateResponse } from "../config/openRouter.js";
import extractJson from "../utils/extractJson.js";

export const getCurrentUser=async (req,res)=>{
    try {
        if(!req.user){
            //any problem in middleware or we do not have details of user
            return res.json({user:null});
        }
        return res.json(req.user)
    } catch (error) {
        return res.status(500).json({message:`get current user error ${error}`})
    }
}

