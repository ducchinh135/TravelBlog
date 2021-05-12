const data = [
    "file:///E:/BTL_JS/img/Slide01.jpg",
    "file:///E:/BTL_JS/img/Slide02.jpg",
    "file:///E:/BTL_JS/img/Slide03.jpg",
    "file:///E:/BTL_JS/img/Slide04.jpg",
    "file:///E:/BTL_JS/img/Slide05.jpg",
    "file:///E:/BTL_JS/img/Slide06.jpg",
];
let num = 0;
let slide = document.getElementById("image");
for (i in data) {
    if (slide.src == data[i]) {
        num = i;
    }
}

function next() {
    num++;
    if (num >= data.length) {
        num = 0;
    }
    slide.src = data[num];
}

function previous() {

    num--;
    if (num < 0) {
        num = data.length - 1;
    }
    slide.src = data[num];
}