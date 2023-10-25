chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("request: ", request);
    console.log("sender: ", sender);
    console.log("sendResponse: ", sendResponse);

    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    let response = {result: ""};
    
    if (request.method === "automateIGimgCrawling") {
        response.result = automateIGimgCrawling();
    }

    console.log("response: ", response);
    sendResponse(response);
});


function automateIGimgCrawling(){
    let draft = {};
    draft.title = getIgTitle();
    draft.image = getIgImage();
    console.log("draft: ", draft);
    return draft
}


function getIgTitle(){
    let title = ""
    let aTag = document.querySelector("._aaqw ._aaqt");
    title = aTag.textContent;
    return title
}


function getIgImage() {
    let image = "";
    
    const imgElement = document.querySelector('._aatk div img');

    if (imgElement) {
        image = imgElement.src;
        console.log('Image URL:', image);
    } else {
        console.log('Image not found');
    }
    return image
}


