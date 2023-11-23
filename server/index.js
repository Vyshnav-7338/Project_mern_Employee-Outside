const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const User = require("./model/User");
const Approved = require("./model/Approve");
const Rejected = require("./model/Rejected");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Project");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "uploads/"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
app.post(
  "/upload",
  upload.fields([
    { name: "Photo" },
    { name: "IdProof" },
    { name: "policeClearCertificate" },
  ]),
  async (req, res) => {
    try {
      const Photo = req.files["Photo"][0];
      const IdProof = req.files["IdProof"][0];
      const policeClearCertificate = req.files["policeClearCertificate"][0];
      const {
        FirstName,
        LastName,
        phone,
        Address,
        AlternativeNumber,
        Aadhaar,
      } = req.body;

      // Save file information to MongoDB
      await User.create({
        Photo: Photo,
        IdProof: IdProof,
        policeClearCertificate: policeClearCertificate,
        FirstName: FirstName,
        LastName: LastName,
        phone: phone,
        Address: Address,
        AlternativeNumber: AlternativeNumber,
        Aadhaar: Aadhaar,
      });
      res.status(200).json({ message: "Files uploaded successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
// Search AadharNumber
app.get("/search", async (req, res) => {
  try {
    const { Aadhaar } = req.query;

    // Search for Aadhaar in the database
    const result = await User.findOne({ Aadhaar });

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Aadhaar not found" });
    }
  } catch (error) {
    console.error("Error searching Aadhaar:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//admin pending status
app.get("/api/pendingStatus", async (req, res) => {
  try {
    const pendingData = await User.find({ Status: "pending" });
    res.json(pendingData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
//admin Approved status
app.get("/api/ApprovedStatus", async (req, res) => {
  try {
    const pendingData = await User.find({ Status: "Approved" });
    res.json(pendingData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
//admin Rejected status
app.get("/api/RejectedStatus", async (req, res) => {
  try {
    const pendingData = await User.find({ Status: "Rejected" });
    res.json(pendingData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
//admin Approved api

app.put("/approve/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.Status !== "pending") {
      return res
        .status(400)
        .json({ success: false, message: "User status is not pending" });
    }

    // Update user status to "approved"
    user.Status = "Approved";
    await user.save();

    // Create an entry in the ApprovedModel
    const approvalDetails = new Approved();
    await approvalDetails.save();

    // Link the user to the approval details
    user.approvalDetails = approvalDetails._id;
    await user.save();

    res.json({ success: true, message: "User approved successfully" });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//admin Reject api

app.put("/Reject/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.Status !== "pending") {
      return res
        .status(400)
        .json({ success: false, message: "User status is not pending" });
    }

    // Update user status to "Rejected"
    user.Status = "Rejected";
    await user.save();

    // Create an entry in the Rejectedmodel
    const rejectedDetails = new Rejected();
    await rejectedDetails.save();

    // Link the user to the Rejected details
    user.rejectedDetails = rejectedDetails._id;
    await user.save();

    res.json({ success: true, message: "User rejected successfully" });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
