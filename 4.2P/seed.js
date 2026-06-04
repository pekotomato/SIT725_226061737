const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/dogPageDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

const DogPhotoSchema = new mongoose.Schema({
  title: String,
  image: String,
  location: String,
  description: String,
});

const DogPhoto = mongoose.model('DogPhoto', DogPhotoSchema);

app.get('/api/dogphotos', async (req, res) => {
  try {
    const dogphotos = await DogPhoto.find({});
    res.json({
      statusCode: 200,
      data: dogphotos,
      message: "Success"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Error fetching data"
    });
  }
});

app.post('/api/dogphotos', async (req, res) => {
  try {
    const newDogPhoto = new DogPhoto(req.body);
    await newDogPhoto.save();

    res.json({
      statusCode: 200,
      message: "Dog photo added successfully"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Error saving dog photo"
    });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
});