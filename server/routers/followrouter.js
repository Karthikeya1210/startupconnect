const express = require("express");
const Router = express.Router();
const FollowRequest = require("../models/follow");
const Investor = require("../models/investor");
const Startup = require("../models/startup");
const mongoose = require("mongoose");
Router.post("/followreq", async (req, res) => {
  const { investorId, startupId } = req.body;
  try {
    const user = await FollowRequest.find({
      investorId: investorId,
      startupId: startupId,
    });
    const startup=await Startup.find({
      followers:investorId
    })
    console.log(startup);
    console.log(user);
     if(startup.length>0){
      res.status(301).json("Already Follows");

    }else if (user.length > 0) {
      res.status(301).json("Already sent request");
    }else {
      const follow = new FollowRequest({
        investorId: new mongoose.Types.ObjectId(investorId),
        startupId: new mongoose.Types.ObjectId(startupId),
      });
      await follow.save();
      res.status(200).json("Follow request sent");
    }
  } catch (e) {
    res.status(404).json("Error Following");
  }
});

Router.post("/getfollowrequest", async (req, res) => {
  const { startupId } = req.body;
  try {
    const follow = await FollowRequest.find({ startupId: startupId });
    res.status(200).json(follow);
  } catch (e) {
    res.status(404).json("Error getting follow requests");
  }
});

Router.post("/acceptRequest", async (req, res) => {
  const { investorId, startupId } = req.body;
  try {
    const investor = await Investor.findById(investorId);
    const startup = await Startup.findById(startupId);
    if (!investor || !startup) {
      return res.status(404).json({ message: "Investor or Startup not found" });
    }
    investor.following.push(new mongoose.Types.ObjectId(startupId));
  
    startup.followers.push(new mongoose.Types.ObjectId(investorId));
    
    
    await investor.save();
    await startup.save();
    res.status(200).json("Followed Succesfully");
  } catch (e) {
    res.status(404).json("Error Following");
    console.log(e);
  }
});
module.exports = Router;