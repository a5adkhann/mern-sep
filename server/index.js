const express = require("express");
const connectDB = require("./config/db_connection");
const User = require("./models/users");
const cors = require("cors");
const multer = require("multer");
const Workout = require("./models/workout");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

connectDB();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/register", upload.single("image"), async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const imagePath = req.file ? req.file.filename : null;

    await User.create({
      name,
      email,
      password,
      image: imagePath,
    });

    res.status(200).send({ message: "User Added Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(400).send({ message: "Wrong password" });
  }

  res.send({
    message: "Login successful",
    user,
  });
});


app.post("/api/addworkout", async (req, res) => {
  try {
    await Workout.insertOne(req.body);
    res.status(200).send({message: "Workout added succcessfully"});
  } catch (error) {
    res.status(200).send({ error: error.message });
  }
});

app.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 });
    res.status(200).send({workouts});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(process.env.PORT || 1000, () => {
  console.log("Server Started!!!");
});
