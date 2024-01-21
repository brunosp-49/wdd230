window.onload = function() {
    // Get the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);

    // Format the date
    var formattedDate = lastModifiedDate.toLocaleDateString() + ' ' + lastModifiedDate.toLocaleTimeString();

    // Get the element with id 'lastModified'
    var lastModifiedElement = document.getElementById('lastModified');

    // Check if the element exists and log the formatted date
    if (lastModifiedElement) {
        console.log('Last Modified Date:', formattedDate);
        // Set the text content of the 'lastModified' element to the formatted date
        lastModifiedElement.textContent = formattedDate;
    } else {
        console.error('Element with id "lastModified" not found.');
    }
};
