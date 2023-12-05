let isShown = false;

function showNav() {
    if (isShown) {
        const content = document.getElementById("dropdown-content");
        document.getElementById("dropdown-button").disabled = true;
        content.style.animationDuration = "1s";
        content.style.animationTimingFunction = "linear";
        content.style.animationName = "hide";

        document.getElementById("logo").style.animation = "colormix-backwards 1s ease-in-out 0s 1 normal";
        document.getElementById("title").style.animation = "colormix-backwards 1s ease-in-out 0s 1 normal";
        document.getElementById("dropdown").style.animation = "colormix-backwards 1s ease-in-out 0s 1 normal";
        setTimeout(() => {
            document.getElementById("logo").style.backgroundColor = "#0e0191";
            document.getElementById("title").style.backgroundColor = "#0e0191";
            document.getElementById("dropdown").style.backgroundColor = "#0e0191";
        }, 950);

        const bars = document.getElementsByClassName("bar");
        for (let i = 0; i < bars.length; i++) {
            switch (i) {
                case 0:
                    bars[i].style.transitionDuration = "0.5s";
                    bars[i].style.transform = "rotate(0deg)";
                    setTimeout(() => {
                        bars[i].style.transform = "translate(0, 0.6em)";
                    }, 500);
                    break;
                case 1:
                    bars[i].style.transitionDuration = "0.5s";
                    bars[i].style.width = "2em";
                    break;
                case 2:
                    bars[i].style.transitionDuration = "0.5s";
                    bars[i].style.transform = "rotate(0deg)";
                    setTimeout(() => {
                        bars[i].style.transform = "translate(0, -0.6em)";
                    }, 500);
                    break;
            }
        }

        setTimeout(() => {
            content.style.display = "none";
            document.getElementById("dropdown-button").disabled = false;
        }, 950);
        isShown = false;
    } else {
        const content = document.getElementById("dropdown-content")
        document.getElementById("dropdown-button").disabled = true;

        document.getElementById("logo").style.animation = "colormix 1s ease-in-out 0s 1 normal";
        document.getElementById("title").style.animation = "colormix 1s ease-in-out 0s 1 normal";
        document.getElementById("dropdown").style.animation = "colormix 1s ease-in-out 0s 1 normal";
        setTimeout(() => {
            document.getElementById("logo").style.backgroundColor = "#000";
            document.getElementById("title").style.backgroundColor = "#000";
            document.getElementById("dropdown").style.backgroundColor = "#000";
        }, 950);

        content.style.display = "block";
        content.style.animationDuration = "1.05s";
        content.style.animationTimingFunction = "linear";
        content.style.animationDirection = "normal";
        content.style.animationName = "show";

        const bars = document.getElementsByClassName("bar");
        for (let i = 0; i < bars.length; i++) {
            switch (i) {
                case 0:
                    bars[i].style.transitionDuration = "0.5s";
                    bars[i].style.transform = "translate(0, 0.6em)";
                    setTimeout(() => {
                        bars[i].style.transform = "rotate(45deg)";
                    }, 550);
                    break;
                case 1:
                    bars[i].style.transitionDuration = "0.5s";
                    bars[i].style.width = "0em";
                    break;
                case 2:
                    bars[i].style.transitionDuration = "0.5s";
                    bars[i].style.transform = "translate(0, -0.6em)";
                    setTimeout(() => {
                        bars[i].style.transform = "rotate(-45deg)";
                    }, 550);
                    break;
            }
        }

        setTimeout(() => {
            document.getElementById("dropdown-button").disabled = false;
        }, 1000);
        isShown = true;
    }
}