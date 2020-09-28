console.log('ext running')



chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(req, res, sendRes) {
    console.log(req.txt)
    if (req.txt === 'hello') {
        let paragraphs = document.getElementsByTagName('section');
        for (let el of paragraphs) {
            el.style.backgroundColor = '#FF00FF'
        }
    }
}