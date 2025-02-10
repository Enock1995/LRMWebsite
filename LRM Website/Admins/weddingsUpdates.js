// fetch JSON data from PHP file
fetch('Admins/weddingsFetch.php')
.then(response => response.json())
.then(data => {

    console.log(data);
    // update HTML section with JSON data


     // image
    const eventElement = document.getElementById('invitation-card');
    eventElement.innerHTML = ` <p id="names" class="container bride-groom-main-hd">${data.bgnames}</p><br><br><br><br>
    <img src="Admins/pictures/${data.file_name}" alt="event image"> <br><br><br><br> <p id="dates" class="container wed-dates">${data.date}</p> `;

   
//nestnames 
const nestNamesElement = document.getElementById('nestnames');
nestNamesElement.textContent = data.bgnames;

//nest dates 
const nestDatesElement = document.getElementById('nestdates');
nestDatesElement.textContent = data.date;

//nest venue 1
const nestVenue1Element = document.getElementById('nestvenue1');
nestVenue1Element.textContent = data.venue_first;

//nest venue 2
const nestVenue2Element = document.getElementById('nestvenue2');
nestVenue2Element.textContent = data.venue_second;

/* Calculating Number of days left to the next event*/
   

    // Get today's date
    const today = new Date();
    
    // Define the series of events
    const events =
      new Date(data.date);  // get next event date

      const remainingDays = Math.floor((events - today)/(1000 * 60 * 60 * 24));

      const remainingDaysElement = document.getElementById('eventsDays');
      remainingDaysElement.textContent = `${remainingDays}`;

}
)



 
