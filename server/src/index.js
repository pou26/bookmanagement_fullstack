const express = require('express');
const route = require('./routes/route');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")
app.use(express.json());
require("dotenv").config()

// const URL=process.env.MONGODB_URI ||
 mongoose.connect("mongodb+srv://Sushant_Bhaiswar_30:WBYUu1bCYmxmZUmg@cluster0.jui41on.mongodb.net/group17Database", {
    useNewUrlParser: true
})

    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(cors())
app.use('/', route)


//vercel 

if (process.env.NODE_ENV == 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", function (_, res) {
        res.sendFile(
            path.join(__dirname, "../client/build/index.html"),
            function (err) {
                if (err) {
                    res.status(500).send(err)
                }
            }
        )
    })
}

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + 3001)
});