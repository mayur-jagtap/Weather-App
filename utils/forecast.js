var request = require('request');

const foreCast = (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoibmltcGEiLCJhIjoiY2toOTBnNTYyMGlucDJ5bWl2OGdrNGxkdSJ9.7By1pu_zwQS0TXjhvxjGCg';
    request({url : url , json :true},(error,response)=>{
        if(error){
            callback('Something went terribaly worong',undefined);
        }else if(response.body.features.length===0){
            callback('Enter correct city',undefined);
        }else{
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1]
            });
        }
    })
}
module.exports = foreCast ;

