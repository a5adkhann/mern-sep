const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  exerciseName: String,
  sets: Number,
  reps: Number,
  weight: Number,
  notes: String,
  category: String,
  tags: String,
  date: Date,
});

module.exports = mongoose.model("Workout", workoutSchema);
