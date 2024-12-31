const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); // Middleware to parse request body


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors({
    origin:['http://localhost:5173'],//your frontend url
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//testing the route
app.get('/',(req,res) => {
    res.json({ message: "Welcome to the CI/CD Integration" });
});

app.post("/hello", (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    res.status(200).json({ message: `Hello, ${name}! How are you ?` });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
