const express = require("express");
require('./mongodb/connection')
const app = express();

app.listen(3000, () => {
    console.log('app is running on port 3000');
})