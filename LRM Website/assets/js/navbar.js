/* JS FOR NAV BAR FUNCTIONALITY */

 // Elements
 const toggleBtn = document.getElementById('toggle-btn');
 const sidebar = document.getElementById('sidebar');
 const closeBtn = document.querySelector('#sidebar .close-btn');

 // Open sidebar
 toggleBtn.addEventListener('click', () => {
     sidebar.classList.add('active');
 });

 // Close sidebar
 closeBtn.addEventListener('click', () => {
     sidebar.classList.remove('active');
 });
 

 