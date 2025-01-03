<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
    <link rel="stylesheet" href="styles.css">
    <style>
    background{
    color: blue;
    }
     button{
         background-color: lightblue;
         color: white;
         border: darkblue;
         border-radius: 5px;
         padding: 10px 20px;
         font-size: 16px;        
         cursor: pointer;
         display: inline-block; 
         text-align: center;
         transition: background-color 0.3s ease, transform 0.2s ease;
    }
    button:hover {
        background-color: #FA86C5;
        transform: scale(1.05);
    }
        .experience-item {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }

        .logo {
            width: 60px; /* Adjust the size of the logos */
            height: auto;
            margin-right: 15px; /* Space between logo and text */
        }

        .text {
            flex: 1;
        }
</style>
</head>

<body>
<h1>Education</h1>
<div class="section" id="exp">
    <h2>Experience</h2>
    <ul class="experience">
        <!-- Accenture Experience -->
        <li class="experience-item">
            <img src="accenture_logo.png" alt="Accenture Logo" class="logo">
            <div class="text">
                <span class="title">Packaged App Development Analyst</span> at <span class="institution">Accenture</span><br>
                <span class="date">May 2024 - September 2024</span><br>
                <p>Developed and maintained buyer-supplier application using Node.js and Express.js, wrote unit tests for CRUD operations, and provided bug support.</p>
            </div>
        </li>

        <!-- Persistent Systems Experience -->
        <li class="experience-item">
            <img src="persistent_logo.png" alt="Persistent Logo" class="logo">
            <div class="text">
                <span class="title">Software Engineer</span> at <span class="institution">Persistent Systems</span><br>
                <span class="date">June 2022 - March 2024</span><br>
                <p>Worked on internal ReactJS projects and IBM AppConnect using Node.js and Express.js, along with performing API testing using Jenkins and Postman.</p>
            </div>
        </li>

        <!-- Persistent Internship Experience -->
        <li class="experience-item">
            <img src="persistent_logo.png" alt="Persistent Logo" class="logo">
            <div class="text">
                <span class="title">Intern</span> at <span class="institution">Persistent Systems</span><br>
                <span class="date">January 2022 - June 2022</span><br>
                <p>Contributed to a ReactJS internal project and worked on backend services using Node.js.</p>
            </div>
        </li>
    </ul>
</div>
</body>
</html>
<a href="index.html" class="button">Back to Home</a>
