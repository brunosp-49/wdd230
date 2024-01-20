window.onload = function() {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Get the element with id 'year'
    var yearElement = document.getElementById('year');

    // Set the text content of the 'year' element to the current year
    yearElement.textContent = currentYear;

    // Get the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);

    // Format the date
    var formattedDate = lastModifiedDate.toLocaleDateString() + ' ' + lastModifiedDate.toLocaleTimeString();

    // Get the element with id 'lastModified'
    var lastModifiedElement = document.getElementById('lastModified');

    // Set the text content of the 'lastModified' element to the formatted date
    lastModifiedElement.textContent = formattedDate;
};
