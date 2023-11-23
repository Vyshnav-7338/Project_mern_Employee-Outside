const mongoose = require("mongoose");

const ApprovedSchema = new mongoose.Schema(
  {
    approvalDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const ApprovedModel = mongoose.model("Approved", ApprovedSchema);

module.exports = ApprovedModel;
