const apiURL = `https://project-1-api.herokuapp.com/`;
const apiKey = `?api_key=<91802317-77c5-4235-82ec-eb3f41f37238>`;
const shows = `showdates`;

getShows = () => {

  axios.get(apiURL + shows + apiKey)
  .then(response => {
    console.log(response.data);
    let show = response.data;
    show.forEach(item => {
      // let date = moment(item.date).format('ddd MMM do');
      makeShowNode(item.date, item.place, item.location);
    })
  })
  .catch(error => {
    console.log(error);
  })
}

function makeShowNode(date, place, location) {

  let show = document.createElement('div');
  show.setAttribute('class', 'shows__show');

  let showDate = document.createElement('h4');
  showDate.setAttribute('class', 'shows__date');
  showDate.textContent = 'DATE';

  let currentDate = document.createElement('p');
  currentDate.setAttribute('class', 'shows__current-date');
  currentDate.textContent = date;

  let showVenue = document.createElement('h4');
  showVenue.setAttribute('class', 'shows__venue');
  showVenue.textContent = 'VENUE';

  let currentVenue = document.createElement('p');
  currentVenue.setAttribute('class', 'shows__current-venue');
  currentVenue.textContent = place;

  let showLocation = document.createElement('h4');
  showLocation.setAttribute('class', 'shows__location');
  showLocation.textContent = 'LOCATION';

  let currentLocation = document.createElement('p');
  currentLocation.setAttribute('class', 'shows__current-location');
  currentLocation.textContent = location;

  let button = document.createElement('button');
  button.setAttribute('class', 'shows__buy-button');
  button.textContent = 'BUY TICKETS';

  show.appendChild(showDate);
  show.appendChild(currentDate);
  show.appendChild(showVenue);
  show.appendChild(currentVenue);
  show.appendChild(showLocation);
  show.appendChild(currentLocation);
  show.appendChild(button);

  let showsWrap = document.querySelector('.shows__shows-wrap');

  showsWrap.appendChild(show);
}

getShows();