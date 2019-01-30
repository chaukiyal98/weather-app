const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

const argv = yargs
    .options({   
        a:{
            describe:'to fetch address',
            json:true,
            alias:'address',
            string:true            
        }
    })
.help()
.argv;

geocode.geocodeAddress(argv.address, (errormsg, results)=>{
    
    if(errormsg){
        console.log(errormsg);
     }else{
     
         
         weather.getWeather(results.latitude, results.longitude, (errormsg, weatherresults)=>{
    
    if(errormsg){
        console.log(errormsg);
    }else{
        console.log(`Its currently: ${weatherresults.temperature}. It feels like: ${weatherresults.ApparentTemperature}`);
    }
    
});

         

    }
});
