'use strict'

const hamburger = document.querySelector(".burger");
const mode1 = document.querySelector(".fa-sun")
const mode2 = document.querySelector(".fa-moon")
const bar1 = document.querySelector(".fa-bars")
const bar2 = document.querySelector(".fa-xmark")
const navMenu = document.querySelector(".menu");
const header = document.querySelector(".hero-nav")
const body = document.querySelector("#body");
const section = document.querySelector("section");
const h1 = document.querySelectorAll("h1");
const span = document.querySelector(".span");
const ul = document.querySelector(".other-places");
const li = document.querySelector(".other-places li");
const logo = document.querySelector(".logo")
const bk = document.querySelector(".wonderful");
const footer = document.querySelector("footer")


const boxes = document.querySelectorAll(".box")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");
});

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight ;
    // / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop <= triggerBottom) {
            box.classList.add("show")
        }
        else {
            box.classList.remove("show")
        }
    });
}

mode1.addEventListener("click", () => {
    // mode1.classList.toggle("active")
    if (mode1.classList.contains("active")) {
        mode1.classList.remove("active")  
    }
    else {
        header.style.backgroundColor = "white"
        bar1.style.color = "black"
        bar2.style.color = "black"
        mode1.classList.add("active")
        logo.classList.add("dark")
        mode1.style.top = "150px"
        mode2.style.top = "30px"
        body.style.backgroundColor = "white";
        body.style.color = "black";
        mode2.classList.remove("active")
        mode2.style.fontSize = "2rem"
        mode1.style.fontSize = "1rem"
        span.style.color = "black"
        bk.style.backgroundColor = "gainsboro"
        h1.forEach(h1 => {
            h1.style.color = "black"
        });
        ul.style.color = "black"
        footer.style.backgroundColor = "gainsboro"
        footer.style.color = "black"
        // li.forEach(li => {
        //     li.style.color = "black"
        //     li.addEventListener("mouseover", ()=> {
        //         li.style.borderColor = "black"
        //     })
        // });
    };
});

mode2.addEventListener("click", () => {
    // mode2.classList.toggle("active")
    if (mode2.classList.contains("active")) {
        mode2.classList.remove("active")
    }
    else {
        header.style.backgroundColor = "black"
        bar1.style.color = "white"
        bar2.style.color = "white"
        mode2.classList.add("active")
        logo.classList.remove("dark")
        hamburger.style.color = "white"
        mode1.style.fontSize = "2rem"
        mode2.style.fontSize = "1rem"
        mode2.style.top = "150px"
        mode1.style.top = "30px"
        body.style.backgroundColor = "black";
        mode1.classList.remove("active")
        section.style.color = "black"
        span.style.color = "white"
        bk.style.backgroundColor = "black"
        h1.forEach(h1 => {
            h1.style.color = "white"
        });
        ul.style.color = "white"
        footer.style.backgroundColor = "black"
        footer.style.color = "white"
        // li.forEach(li => {
        //     li.style.color = "white"
        //     li.addEventListener("mouseover", ()=> {
        //         li.style.borderColor = "white"
        //     })
        // });
        
    }
});