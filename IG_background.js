
//Store Amazon product data crawled from Amazon pages
let products = [];

let output = {
  title: "",
  content: "",
  designs: []
};

//Recognize which Woo website to get data from
function automateIGimgCrawlingBack(){
  chrome.tabs.query({active: true}, function(tabs) {
    let tab = tabs[0];

    chrome.tabs.sendMessage(tab.id, {method: "automateIGimgCrawling"}, function(response) {
      console.log(response.result);
      if (response) {
        products.push(response.result);
        console.log("Product imported!");
      } else {
        console.log("Something went wrong!");
      }
    });
  });
}


function generateDesigns(){
  products.forEach(function(product){
    let design = {};

    design.company = product.title;
    design.img = product.image;

    output.designs.push(design);
  });
}

function downloadJSONFile(exportObj, exportName){
  let jsonData = JSON.stringify(exportObj);
  let filename = exportName + ".json";

  chrome.downloads.download({
    url: "data:application/json," + encodeURIComponent(jsonData),
    filename: filename
  });
}

function reset(){
  products = [];
  output.title = "";
  output.content = "";
  output.designs = [];
}
