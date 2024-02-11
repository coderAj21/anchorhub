const Experience=require("../modals/Experience");
const User=require("../modals/User");

exports.updateExperience=async(req,res)=>{
    try{
        const{email,type,name,website,role,startDate,endDate,coverLetter}=req.body;
        if(!type || !name || !website || !role || !startDate || !endDat){
            return res.status(401).json({
                success:false,
                message:"All field Required"
            });
        };
        const experience=new Experience ({
            type,name,website,role,startDate,endDat,coverLetter
        });
        const response=await experience.save();
        await User.findOneAndUpdate(
            {email:email},
            {experience:response._id},
            {new:true}
        )
        return res.status(200).json({
            success:true,
            message:"Experience is Update..."
        })
    }catch(error){
        return res.status(401).json({
            success:false,
            error:error.message
        });
    }
};

exports.getExperience=async(req,res)=>{
    try{
        const {email}=req.body.user;
        const getExperience=await Experience.findOne({email});
        if (!getExperience){
            return res.status(401).json({
                success:false,
                error:"experience not found..."
            });
        }
        return res.status(200).json({
            success:true,
            data:getExperience,
            message:"Expierience fetched...."
        })
    }catch(error){
        return res.status(401).json({
            success:false,
            error:error.message
        });
    }
}