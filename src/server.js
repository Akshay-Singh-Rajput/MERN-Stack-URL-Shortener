const app = require('./index');

const connect = require('./configs/db');
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    try {
        connect() 
    } catch (error) {
        console.log(error);
    }
    console.log(`server started, listening on PORT ${PORT}`);
})