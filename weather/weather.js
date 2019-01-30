const request = require('request');


var getWeather = (lat,lng,callback)=> {   

request({
    
    url:`https://api.darksky.net/forecast/6f4b13b123dcdf1313efdf81ce6f6e2f/${lng},${lat}`,
    json:true
    
},(error, response, body)=>{
    
    if(error){
        callback('unable to connect to forecastt');
    
    }else if(response.statusCode === 400){
        callback('wrong address');
    
    }else if(response.statusCode === 200){
    
    callback(undefined,{
        
    object: JSON.stringify(body,undefined,2), 
    temperature: body.currently.temperature,
    ApparentTemperature: body.currently.apparentTemperature
        
    });
    
   
    }
});
}

module.exports={
    getWeather
};