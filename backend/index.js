const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Dhruv-Devtown:Devtown1234@mern-movie-booking.ufokbjt.mongodb.net/").listen(()=>app.listen(3000, () => {
    console.log("conected to the server + port")
})
).catch(e=>console.log(e))

