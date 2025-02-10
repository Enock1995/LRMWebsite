/* CONFERENCES */

// fetch JSON data from PHP file
fetch('Admins/Conferences/confFetch.php')
.then(response => response.json())
.then(data => {

    console.log(data);
    // update HTML section with JSON data
    
//update the html development section 
const devElement = document.getElementById('conferences');
devElement.textContent = data.conferences;
}
)