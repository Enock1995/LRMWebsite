/* FINANCE */

// fetch JSON data from PHP file
fetch('Admins/Development/devFetch.php')
.then(response => response.json())
.then(data => {

    console.log(data);
    // update HTML section with JSON data
    
//update the html development section 
const devElement = document.getElementById('development');
devElement.textContent = data.development;
}
)