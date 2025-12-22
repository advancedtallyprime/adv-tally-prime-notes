    // Load Header
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Load Footer Company Name
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    // Load Footer Name
    fetch("footerN.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footerN").innerHTML = data;
        });
