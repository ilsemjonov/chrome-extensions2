console.log('wall`es of the world, Unite')

let files = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]
let imgs = document.getElementsByTagName('img')

for (el of imgs) {
    let r = Math.floor(Math.random() * files.length)
    let file = 'images/' + files[r]
    el.src = chrome.extension.getURL(file)
    console.log(el.src)
}