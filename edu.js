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
    .section {
        margin-bottom: 10px;
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
</style>
</head>

<body>
<h1>Education</h1>

    <div class="education-item" id="edu">
        <ul class="education">
        <!-- University of Washington -->
            <li class="education-item">
                <img src="UW_logo.png" alt="UW Logo" class="logo">
                <div class="text">
                    <span class="institution">University of Washington, Seattle</span><br>
                    <span class="degree">Professional Master's in Electrical and Computer Engineering</span><br>
                    <span class="date">Expected Graduation: August 2026</span>
                </div>
            </li>

        <!-- Savitribai Phule Pune University -->
            <li class="education-item">
                <img src="sppu_logo.png" alt="SPPU Logo" class="logo">
                <div class="text">
                    <span class="institution">Savitribai Phule Pune University</span><br>
                    <span class="degree">Bachelor's in Computer Engineering</span><br>
                    <span class="date">Graduated: May 2022</span>
                </div>
            </li>
        </ul>
    </div> 
</body>
</html>
<a href="index.html" class="button">Back to Home</a>
