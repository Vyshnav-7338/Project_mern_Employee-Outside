const mongoose = require("mongoose");

const RejectedSchema = new mongoose.Schema(
  {
    rejectedDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const RejectedModel = mongoose.model("Rejected", RejectedSchema);

module.exports = RejectedModel;
