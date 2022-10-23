const pageOneBtn = document.querySelector('#pg-one');
const pageTwoBtn = document.querySelector('#pg-two');
const pageThreeBtn = document.querySelector('#pg-three');
const pageFourBtn = document.querySelector('#pg-four');

const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page4');

const pagination = document.querySelector('#pagination-container');

pageOneBtn.onclick = () => {
    page1.classList.remove("current");
    page2.classList.remove("current");
    page3.classList.remove("current");
    page4.classList.remove("current");

    page1.classList.add("current");
}

pageTwoBtn.onclick = () => {
    page1.classList.remove("current");
    page2.classList.remove("current");
    page3.classList.remove("current");
    page4.classList.remove("current");

    page2.classList.add("current");
}

pageThreeBtn.onclick = () => {
    page1.classList.remove("current");
    page2.classList.remove("current");
    page3.classList.remove("current");
    page4.classList.remove("current");

    page3.classList.add("current");
}

pageFourBtn.onclick = () => {
    page1.classList.remove("current");
    page2.classList.remove("current");
    page3.classList.remove("current");
    page4.classList.remove("current");

    page4.classList.add("current");
}