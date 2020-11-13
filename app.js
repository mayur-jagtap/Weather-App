var request = require("request");
var geoCode = require('./utils/geocode');
var foreCast = require('./utils/forecast');

const address = process.argv[2];
if(address){
      foreCast(address,(error,data)=>{
            if(error){
                  return console.log(error);
            }    
            geoCode(data.longitude,data.latitude,(error,geoData)=>{
                  if(error){
                       return console.log(error);
                  }
                  console.log(data);
                  console.log(geoData);
            })
      })
      
}else{
      console.log('Provide City');
}





