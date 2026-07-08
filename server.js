const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Hello from Azure Container Registry! Have a great day!",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});