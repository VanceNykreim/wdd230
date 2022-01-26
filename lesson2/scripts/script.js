window.onload=function update() {
    document.getElementById("modify").innerHTML = document.lastModified;
    let year= new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
}

