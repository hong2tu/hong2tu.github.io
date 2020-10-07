function testFunction() {
    fetch("/api")
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
  
        const fruits = ["apple", "orange", "tangerines"];
  
        const myTitle = document.querySelector("title");
        myTitle.textContent = response;
  
        const myHeading = document.querySelector("h1");
        myHeading.textContent = response;
  
        const newCol = "rgb(123,121,88)";
        document.body.style.backgroundColor = newCol;
  
        const t1 = document.querySelector(".checkbox-list-label");
        t1.textContent = "Fruits";
  
        const cent = document.querySelector(".flex-outer");
        cent.style = "margin: 0 auto;";
  
        const labels = document
          .querySelector(".flex-inner")
          .querySelectorAll("label");
  
        for (i = 0; i < labels.length; i++) {
          labels[i].textContent = fruits[i];
        }
      });
  }
