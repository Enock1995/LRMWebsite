/* FINANCE */

// fetch JSON data from PHP file
fetch('Admins/Weddings/wedsFetch.php')
.then(response => response.json())
.then(data => {

    console.log(data);
    // update HTML section with JSON data
    
    
    //update the html section 
const devElement = document.getElementById('weddings');
devElement.textContent = data.weddings;
}
)