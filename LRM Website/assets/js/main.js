
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
        
        
        
        
        
  /* JS FOR NEXT IMAGE */   
  const events = [
    {
    image: 'Images/Chomunanga/29_March.jpg',
    date: '2025-03-29'
  },
  
  {
    image: 'Images/Chomunanga/20_April.jpg',
    date: '2025-04-20'
  },
  
  {
    image: 'Images/Chomunanga/24_May.jpg',
    date: '2025-05-24'
  },
  
    {
    image: 'Images/header.jpg',
    date: '2025-12-31'
  },
  
  // Add more events here...
];


function getNextEvent() {
  const today = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) > today);
  return upcomingEvents[0]; 
}

function updateNextEvent() {
  const nextEvent = getNextEvent();
  const invitationCardImage = document.createElement('img');
  invitationCardImage.src = nextEvent.image;
  document.getElementById('invitation-card').appendChild(invitationCardImage);
}

window.addEventListener('load', updateNextEvent);



   
        
  /* JS FOR WEDDING DATES UPDATE*/      
       
      var date = new Date();
      
      var march_29 = new Date(2025, 02, 29);
     var april_20 = new Date(2025, 03, 20);
     var may_24 = new Date(2025, 04, 24);
     
     
     if(date.getTime() < march_29.getTime()){
 document.getElementById('dates').innerHTML =   "29 March 2025";
     
     }
     
    else if(date.getTime() < april_20.getTime()){
 document.getElementById('dates').innerHTML =   "20 & 21 April 2025";
     
     }
     else if(date.getTime() < may_24.getTime()){
     
     document.getElementById('dates').innerHTML = "24 May 2025";

     }
     else
     {
     
     document.getElementById('dates').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   

 /* JS FOR WEDDING NAMES UPDATE*/      
       
      var date = new Date();
      
     var march_29 = new Date(2025, 02, 29);    
     var april_20 = new Date(2025, 03, 20);
     var may_24 = new Date(2025, 04, 24);
     
     
     if(date.getTime() < march_29.getTime()){
 document.getElementById('names').innerHTML =   "Cephas Coronat & Privilege Shoko";
     
     }
     
    else if(date.getTime() < april_20.getTime()){
 document.getElementById('names').innerHTML =   "Robson Singende & Thelma Ngwenya";
     
     }
     else if(date.getTime() < may_24.getTime()){
     
     document.getElementById('names').innerHTML = "Tavonga Marima & Sununguko Magwisa";

     }
     else
     {
     
     document.getElementById('names').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   
   
   /* JS FOR WEDDING NAMES UPDATE ON NESTED ELEMENTS*/      
       
    var date = new Date();
      
     var march_29 = new Date(2025, 02, 29);
     var april_20 = new Date(2025, 03, 20);
     var may_24 = new Date(2025, 04, 24);
     
     
      if(date.getTime() < march_29.getTime()){
 document.getElementById('nestnames').innerHTML = "Cephas Coronat & Privilege Shoko";
     
     }   
     
     else if(date.getTime() < april_20.getTime()){
 document.getElementById('nestnames').innerHTML = "Robson Singende & Thelma Ngwenya";
     
     }
     else if(date.getTime() < may_24.getTime()){
     
     document.getElementById('nestnames').innerHTML = "Tavonga & Sununguko";

     }
     else
     {
     
     document.getElementById('nestnames').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
     
      
     
     /* JS FOR WEDDING DATES UPDATE*/      
       
      var date = new Date();
      
     var march_29 = new Date(2025, 02, 29);
     var april_20 = new Date(2025, 03, 20);
     var may_24 = new Date(2025, 04, 24);
     
    
    if(date.getTime() < april_20.getTime()){
 document.getElementById('nestdates').innerHTML =   "29 March 2025";
     
     }
     
     else if(date.getTime() < april_20.getTime()){
 document.getElementById('nestdates').innerHTML =   "20 & 21 April 2025";
     
     }
     else if(date.getTime() < may_24.getTime()){
     
     document.getElementById('nestdates').innerHTML = "24 May 2025";

     }
     else
     {
     
     document.getElementById('nestdates').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   
   
     
     
     
     
     /* JS FOR WEDDING VENUE1 UPDATE*/      
       
      var date = new Date();
      
     var march_29 = new Date(2025, 02, 29);
     var april_20 = new Date(2025, 03, 20);
     var may_24 = new Date(2025, 04, 24);
     
     
      if(date.getTime() < march_29.getTime()){
 document.getElementById('nestvenue1').innerHTML =   "Mr and Mrs Maphosa homestead, 301 Shasha block of farms, Zvamahande.";
     
     }
     
    else if(date.getTime() < april_20.getTime()){
 document.getElementById('nestvenue1').innerHTML =   "Manongore homestead, Mavangwa, Runde.";
     
     }
     else if(date.getTime() < may_24.getTime()){
     
     document.getElementById('nestvenue1').innerHTML = "Marima Homestead, Chomunanga HQ, Runde";

     }
     else
     {
     
     document.getElementById('nestvenue1').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   
   
     
    /* JS FOR WEDDING VENUE2 UPDATE*/      
       
      var date = new Date();
      
     var march_29 = new Date(2025, 02, 29);
     var april_20 = new Date(2025, 03, 20);
     var may_24 = new Date(2025, 04, 24);
     
     
        if(date.getTime() < march_29.getTime()){
 document.getElementById('nestvenue2').innerHTML =   "Only One Reception.";
     
     }
     
    else if(date.getTime() < april_20.getTime()){
 document.getElementById('nestvenue2').innerHTML =   "Singende Homestead, Chishavakadzi Secondary school, Chibi";
     
     }
     else if(date.getTime() < may_24.getTime()){
     
     document.getElementById('nestvenue2').innerHTML = "Only One Reception.";

     }
     else
     {
     
     document.getElementById('nestvenue1').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
     
     
   /* Calculating Number of days left to the next event*/
   
   function getDaysUntilNextEvent() {
  // Get today's date
  const today = new Date();
  
  // Define the series of events
  const events = [
  
  new Date(today.getFullYear(), 2, 29), // March 29
  
    new Date(today.getFullYear(), 3, 20),   // April 20(0-indexed)
    
   new Date(today.getFullYear(), 4, 24), // May 24
    
  ];
  
  // Loop through the events to find the next upcoming event
  for (let i = 0; i < events.length; i++) {
    if (events[i] > today) {
      // Calculate the difference in milliseconds
      const timeDifference = events[i] - today;
      // Convert to days
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      
      
    return `${daysDifference}`;
    
    }
  }

  // If no future events found
  return "#";
}


// Example usage: Insert result into an HTML element with ID 'eventDays'
function displayDaysUntilNextEvent() {
  const result = getDaysUntilNextEvent();
  document.getElementById("eventsDays").innerHTML = result;
}

// Call the function on page load or when needed
window.onload = displayDaysUntilNextEvent;
