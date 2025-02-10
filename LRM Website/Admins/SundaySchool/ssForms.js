/* FINANCE */

// fetch JSON data from PHP file
fetch('Admins/SundaySchool/ssFetch.php')
.then(response => response.json())
.then(data => {

    console.log(data);
    // update HTML section with JSON data
    
    
    //update the html section 
const devElement = document.getElementById('sundayschool');
devElement.textContent = data.sundayschool;
}
)