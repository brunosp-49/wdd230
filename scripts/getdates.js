window.onload = function() {
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById('year');

    yearElement.textContent = currentYear;

    var lastModifiedDate = new Date(document.lastModified);

    var formattedDate = lastModifiedDate.toLocaleDateString() + ' ' + lastModifiedDate.toLocaleTimeString();

    var lastModifiedElement = document.getElementById('lastModified');

    lastModifiedElement.textContent = formattedDate;
};