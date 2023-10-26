const mongoose_sim = require('mongoose');
const YourModel = require('./yourModel'); // Import your Mongoose model here

// Connect to your MongoDB database (replace <DB_URI> with your actual MongoDB connection URI)
mongoose_sim.connect('<DB_URI>', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Initial GPS coordinates
let currentLatitude = 49.2243;
let currentLongitude = 4.5552;

// Function to save GPS data to MongoDB
const saveGPSDataToMongoDB = async () => {
  try {
    // Increment latitude and longitude by 0.001
    currentLatitude += 0.001;
    currentLongitude += 0.001;

    // Create a new GPS data document
    const newData = new YourModel({
      latitude: currentLatitude.toFixed(6),
      longitude: currentLongitude.toFixed(6),
      // You can add other GPS data fields here
    });

    // Save the data to MongoDB
    await newData.save();

    console.log('GPS data saved to MongoDB:', newData);
  } catch (error) {
    console.error('Error saving GPS data:', error);
  }
};

// Set the interval for saving GPS data (every 10 seconds)
const intervalInMilliseconds = 10 * 1000;
setInterval(saveGPSDataToMongoDB, intervalInMilliseconds);
