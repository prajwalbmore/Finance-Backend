const memberModel = require('../model/memberModel');

const addMember = async(req,res) => {
    const {name,phone} = req.body;
    const userId = req.user._id
    console.log(req.body,userId);
    
    try {
        const existMember = await memberModel.findOne({name})
        if(existMember){
            return res.status(400).send({msg:'Member Already exist'})
            
        }else{ 
            const newMember = new memberModel({
            name,
            phone,
            createdBy:userId,
            createAt:Date.now(),
        }) 
        await newMember.save();
        return res.status(201).send({ msg: "Member created successfully", success: true });
    }
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}
const getAllMembers = async(req,res) => {
    try {
        const members = await memberModel.find();

        return res.status(200).send({task : members,success : true})
    } catch (error) {
        return res.status(500).send("Server Error");
    }
}
const getMemberByID = async(req,res) => {
    try {
        const member = await memberModel.findById(req.params.id)
        if(!member){
            return res.status(404).send({ error: "member not found", success: false });
        }
        return res.status(200).send(member)
    } catch (error) {
        return res.status(500).send("Server Error");
    }
}

module.exports = {
    addMember,
    getAllMembers,
    getMemberByID
}