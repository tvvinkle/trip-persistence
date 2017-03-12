var hotels=[] , restaurants=[], activities=[];

$.get('/api/restaurants')
.then(function (_restaurants) {
 
  restaurants = _restaurants
  restaurants.forEach(makeOption, $restaurantSelect);

})
.catch( console.error.bind(console) );

$.get('/api/hotels')
.then(function (_hotels) {
	hotels = _hotels
	hotels.forEach(makeOption, $hotelSelect);
})
.catch( console.error.bind(console) );


$.get('/api/activities')
.then(function (_activities) {

	activities = _activities;
  	activities.forEach(makeOption, $activitySelect);
  
})
.catch( console.error.bind(console) );

var $optionsPanel = $('#options-panel');
    var $hotelSelect = $optionsPanel.find('#hotel-choices');
    var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
    var $activitySelect = $optionsPanel.find('#activity-choices');

    // make all the option tags (second arg of `forEach` is a `this` binding)

 
    // Once you've made AJAX calls to retrieve this information,
    // call attractions.loadEnhancedAttractions in the fashion
    // exampled below in order to integrate it.
    attractionsModule.loadEnhancedAttractions('hotels', hotels);
    attractionsModule.loadEnhancedAttractions('restaurants', restaurants);
    attractionsModule.loadEnhancedAttractions('activities', activities);

    function makeOption(databaseAttraction) {
        var $option = $('<option></option>') // makes a new option tag
          .text(databaseAttraction.name)
          .val(databaseAttraction.id);
        this.append($option); // add the option to the specific select
    }