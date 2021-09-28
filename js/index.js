function showSlides(n) {
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n-1].className += " active";

    if(n == 1){
        document.getElementById("title").innerHTML = "<h2><b>Parcheesi game (Java)</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/zd247/cocangua'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Jul, 2019 - Sep, 2019";
    }
    else if (n == 2){
        document.getElementById("title").innerHTML = "<h2><b>Embedded System Applications with Nuvoton board</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/s3740819/Embedded-Design'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Jul, 2019 - Aug, 2019";
    }
    else if (n == 3){
        document.getElementById("title").innerHTML = "<h2><b>QA Testing project</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/s3740819/QA-Testing'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Mar, 2020 - Apr, 2020";
    }
    else if (n == 4){
        document.getElementById("title").innerHTML = "<h2><b>My RMIT application (Android)</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/hoangdesu/myRMIT'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Jul, 2020 - Aug, 2020";
    }
    else if (n == 5){
        document.getElementById("title").innerHTML = "<h2><b>Autonomous car with Raspberry Pi</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/hoang-10n/EEET2610_Design_3'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Mar, 2020 - Apr, 2020";
    }
    else if (n == 6){
        document.getElementById("title").innerHTML = "<h2><b>Drug Store Online (Web)</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/javatalent115/Enterprise-Assignment'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Aug, 2021 - Sep, 2021";
    }
    else if (n == 7){
        document.getElementById("title").innerHTML = "<h2><b>Covid19 Behavior Management (Web)</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/javatalent115/cloud-assigment'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Aug, 2021 - Sep, 2021";
    }
    else if (n == 8){
        document.getElementById("title").innerHTML = "<h2><b>Bare Metal OS development (Crossy Road Game) with Raspberry Pi</b></h2> </br>";
        var content = document.getElementById("content");
        content.innerHTML = "<b style='color: burlywood;'>Github: </b> <a href='https://github.com/s3740819/Embedded-System-OS-and-Interfacing'>Click Here!</a></br></br>";
        content.innerHTML += "<b style='color: burlywood;'>Date:</b> Aug, 2021 - Sep, 2021";
    }

}

function view(){
    console.log("hello");
    document.getElementById("content").scrollIntoView();
}