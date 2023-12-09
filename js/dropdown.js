let isShown = false;
function showNav() {
    const logo = document.getElementById("logo");
    const title = document.getElementById("title");
    const dropdown = document.getElementById("dropdown");
    const dropdownContainer = document.getElementById("dropdown-container");
    const dropdownContent = document.getElementById("dropdown-content");
    const dropdownButton = document.getElementById("dropdown-button");
    const bars = document.getElementsByClassName("bar");

    const colorMix = "colormix 1s ease-in-out 0s 1 normal";
    const colorMixBackwards = "colormix-backwards 1s ease-in-out 0s 1 normal";

    if (isShown) {
        dropdownButton.disabled = true;

        dropdownContent.style.opacity = "0";
        logo.style.animation = colorMixBackwards;
        title.style.animation = colorMixBackwards;
        dropdown.style.animation = colorMixBackwards;

        setTimeout(() => {
            logo.style.backgroundColor = "#0e0191";
            title.style.backgroundColor = "#0e0191";
            dropdown.style.backgroundColor = "#0e0191";
            dropdownContainer.style.zIndex = "0";
        }, 950);


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
            dropdownContent.style.display = "none";
            document.getElementById("dropdown-button").disabled = false;
        }, 950);
        isShown = false;
    } else {
        dropdownContainer.style.zIndex = "1";
        document.getElementById("dropdown-button").disabled = true;
        dropdownContent.style.display = "flex";
        setTimeout(() => {
            dropdownContent.style.opacity = "1";
        }, 1); //goofy workaround, for some reason it ain't working without the timeout

        logo.style.animation = colorMix;
        title.style.animation = colorMix;
        dropdown.style.animation = colorMix;

        setTimeout(() => {
            logo.style.backgroundColor = "#000";
            title.style.backgroundColor = "#000";
            dropdown.style.backgroundColor = "#000";
        }, 950);

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