const Project=require("../modals/Project");
const User=require("../modals/Project");



exports.updateProject=async(req,res)=>{
    try{ 
        const {email,name,description,type,link}=req.body;
        const newProject=await Project.create({
            email,name,description,type,link
        });
        await User.findOneAndUpdate(
            {email:email},
            {project:newProject._id},
            {new:true}
        );
        return res.status(200).json({
            success:true,
            messgae:"Project Update Sucessfully..",
        });
    }catch(error){
        return res.status(401).json({
            success:false,
            error:error.message
        });
    }
}