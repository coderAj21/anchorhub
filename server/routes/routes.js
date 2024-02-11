const express=require("express");
const router=express.Router();


const{login,signUp,sendOtp}=require("../controllers/userController");
const{updateProject}=require("../controllers/projectController");
const {updateProfile}=require("../controllers/userController");
const {updateExperience}=require("../controllers/experienceController");
const {updateEducation}=require("../controllers/educationController");


router.post("/sendOtp",sendOtp)
router.post("/login",login);
router.post("/signup",signUp);
router.post("/updateProject",updateProject);
router.post("/updateEducation",updateEducation);
router.post("/updateExperience",updateExperience);

module.exports=router;