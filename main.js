const content = document.getElementById("content");


function showContent(page) {
    if (page == "about") {
      content.innerHTML = "<h2>About Us</h2><p>Hi! I am Bachan Kubi, a Frontend Developer</p>";
    } else if (page == "contact") {
      content.innerHTML = "<h2>Contact Us</h2><p>You can reach us at Mobile: +8801919735497, Email: bachankubi@gmail.com.</p>";
    }
  }

  