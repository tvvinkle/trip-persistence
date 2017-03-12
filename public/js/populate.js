$.get('/api/restaurants')
.then(function (restaurants) {
  restaurants.forEach(function(restaurant){
    console.log(restaurant.name);
  });
})
.catch( console.error.bind(console) );

$.get('/api/hotels')
.then(function (hotels) {
  hotels.forEach(function(hotel){
    console.log(hotel.name);
  });
})
.catch( console.error.bind(console) );


$.get('/api/activities')
.then(function (activities) {
  restaurants.forEach(function(activity){
    console.log(activity.name);
  });
})
.catch( console.error.bind(console) );

