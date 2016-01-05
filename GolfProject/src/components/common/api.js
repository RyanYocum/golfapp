//var rootUrl = "http://10.0.1.26:3000/";
var rootUrl = 'https://limitless-scrubland-7440.herokuapp.com/';
//var rootUrl = 'http://localhost:3000/';

module.exports = function(serverRoute){
  var url  = `${rootUrl}${serverRoute}`;
//  console.log(url);
  return fetch(url)
    .then(function(response){
    //  console.log('response successful');
    //  console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.warn(error);
    });
};
