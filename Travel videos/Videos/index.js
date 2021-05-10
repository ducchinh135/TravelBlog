let kichthuoc = document.getElementsByClassName("chuyen_slide")[0].clientWidth;
let chuyenslide = document.getElementsByClassName("chuyen_slide")[0];
let icon = document.getElementById("icon");
let item1 = document.getElementById("return");
let Timkiem = document.getElementsByClassName("short");
let Select = document.getElementById("Select");

let listvideo = [
    {

        title: "Beach",
        name: "Extreme",
        url: `
            <div>
            <iframe iframe style="box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;" width="306" height="172"
            src="https://www.youtube.com/embed/DIgv-e18OzA" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>        
            </div>`,

    },
    {
        title: "California",
        url: `
        <div>
        <iframe style="opacity: 1; margin-left: 10px;box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;"
        width="306" height="172" src="https://www.youtube.com/embed/Qmi-Xwq-MEc"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        </div> `,
    },
    {
        title: "Camp",
        url: `
        <div>
        <iframe style="margin-left: 10px;box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;" width="306"
        height="172" src="https://www.youtube.com/embed/aztbvh4W8y0" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        </div>`,
    },
    {
        title: "Car",
        url: `
        <div>
        <iframe style="box-shadow: rgba(28, 28, 29, 0.2) 3px 3px 3px 3px;" width="306" height="172"
        src="https://www.youtube.com/embed/m9VPUF9YzQ4" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        </div>`,

    }

];

function render(listvideo) {
    let strVideoHTML = "";
    for (let i = 0; i < listvideo.length; i++) {
        let videoHTML = listvideo[i].url;
        strVideoHTML += videoHTML;

    }
    // console.log(strVideoHTML);
    document.getElementsByClassName("chuyen_slide")[0].innerHTML = strVideoHTML;
}
render(listvideo)

let img = chuyenslide.getElementsByTagName("imgiframe");
let max = kichthuoc * img.length;
max -= kichthuoc;
let chuyen = 0;
let page = 1;

function changePage() {
    if (page === 1) {
        page++;
        chuyenslide.style.marginLeft = "-950px";
        icon.style.transform = 'rotate(180deg)';
        icon.style.transition = '0.2s';
    } else {
        page--;
        chuyenslide.style.marginLeft = "0px";
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = '0.2s';
    }
}
function not_search() {
    chuyenslide.style.opacity = 1;
    Select.style.opacity = 1;
    document.getElementById("list_search").style.display = "none";

}
function change() {
    let text_search = document.getElementById("ser").value;
    console.log(text_search);
    let import_videos = [];
    for (let i = 0; i < listvideo.length; i++) {
        if (listvideo[i].title.toLowerCase().trim().includes(text_search.toLowerCase().trim())) {
            import_videos.push(listvideo[i]);
            render(import_videos);
        }

    }
}
function Extreme() {
    let a = [];
    console.log(a);
    for (let i = 0; i < listvideo.length; i++) {
        if (listvideo[i].title == "Car") {
            a.push(listvideo[i]);
            render(a);
        }
    }
}


