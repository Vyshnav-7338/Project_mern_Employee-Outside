const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    phone: String,
    Address: String,
    AlternativeNumber: String,
    Aadhaar: String,
    Photo: Object,
    IdProof: Object,
    policeClearCertificate: Object,
    Status: {
      type: String,
      enum: ["pending", "Approved", "Rejected"],
      default: "pending",
    },
    approvalDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Approved" },
    rejectedDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Rejected" },
  },

  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
