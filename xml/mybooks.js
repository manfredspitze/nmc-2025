
// Function to load XML data using Fetch API
function loadXMLDoc(filename) {
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "text/xml");
            displayItems(xml);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to display items from XML
function displayItems(xml) {
    const items = xml.getElementsByTagName("item");
    let output = "";

    for (let i = 0; i < items.length; i++) {
        const name = items[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        const description = items[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        output += `<h2>${name}</h2><p>${description}</p>`;
    }

    document.getElementById("itemList").innerHTML = output;
}

// Load the XML file
loadXMLDoc("books.xml");

