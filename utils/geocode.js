var request = require("request");

const geoCode= (longitude,latitude,callback) =>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ longitude + ',' + latitude +'.json?access_token=pk.eyJ1IjoibmltcGEiLCJhIjoiY2toOTBnNTYyMGlucDJ5bWl2OGdrNGxkdSJ9.7By1pu_zwQS0TXjhvxjGCg';
    request({url : url ,json: true },(error,response)=>{
          if(error){
                callback('Unable to connect to weather app',undefined);
          }else{
                callback(undefined, {   
                      place :response.body.features[0].context[3].text
                })

          }
    })
}

module.exports = geoCode ;