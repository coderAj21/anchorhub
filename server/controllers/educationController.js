const Education=require("../modals/Education");
const User=require("../modals/User");






exports.updateEducation=async(req,res)=>{
    try{
        const {email,type,startDate,endDate}=req.body;
        // const {email}=req.body.user;
        if (!college || !type || !startDate || !endDate){
            return res.status(401).json({
                success:false,
                message:"All Fields Required..."
            });
        };
        const newEducation = await Education.create({
            college,type,startDate,endDate,email
        });
        await User.findOneAndUpdate(
            {email:email},
            {education:newEducation._id},
        );
        return res.status(200).json({
            success:true,
            message:"Education is Update...",
        });
    }catch(error){
        return res.status(401).json({
            success:false,
            error:error.message
        });
    };
};
