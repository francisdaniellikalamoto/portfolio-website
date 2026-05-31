console.log("Portfolio website loaded successfully");
fetch('https://portfolio-backend.onrender.com')
.then(response => response.json())
.then(data => {
    console.log(data);
});

