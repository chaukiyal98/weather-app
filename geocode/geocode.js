const request = require('request');

var geocodeAddress = (address,callback)=>{
    
    var encodedAddress = encodeURIComponent(address);


request({
    
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=8BxlR3zDDBsy8o0UlV517ihnSzxGLmNp&location=${encodedAddress}`,
    json: true
    
    
    
},(error, response, body)=>{
    
    
    if(error){
        callback('unable to fetch data');
    
    }else if(body.info.statuscode === 400){
        callback('wrong address');
    
    }else if(body.info.statuscode === 0){
    
        callback(undefined,{
           // console.log(JSON.stringify (body,undefined,2));
    latitude: body.results[0].locations[0].latLng.lat,
    longitude: body.results[0].locations[0].latLng.lng
    
            
        })
    
    }
});
    
};

module.exports={
    
    geocodeAddress
};















































/*
const request = require('request');

var geocodeAddress = (address,callback)=>{
    
    
    
var encodedAddress = encodeURIComponent(address);


request({
    
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=8BxlR3zDDBsy8o0UlV517ihnSzxGLmNp&location=${encodedAddress}`,
    json: true
    
},(error, response, body)=>{
    
    //console.log(JSON.stringify (body,undefined,2));
    if(error){
        callback(`unable to connect to server`)
    
    }else if(body.info.statuscode === 400){
        callback('invalid address')
    
    }else if(body.info.statuscode === 0){
        callback(undefined,{
            
    latitude: body.results[0].locations[0].latLng.lat,
    longitude: body.results[0].locations[0].latLng.lng
    
            
        })
        
    
        
    }
    
})
    
}


module.exports={
    
    geocodeAddress
};

*/


/*
const request = require('request');

var geocodeAddress =(address,callback)=>{


var encodedAddress = encodeURIComponent(address);


request({
    
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=8BxlR3zDDBsy8o0UlV517ihnSzxGLmNp&location=${encodedAddress}`,
    json:true
    
},(error,response,body)=>{
    
    if(error){
        callback('unable to fetch weather');
        
    }else if(body.info.statuscode === 400){
        callback('wrong address');
             

    }else if(body.info.statuscode === 0){
        
        callback(undefined,{
                 
                 
    //console.log(JSON.stringify(body, undefined, 2));
    
    latitude: body.results[0].locations[0].latLng.lat,
    longitude: body.results[0].locations[0].latLng.lng
                 
                 })
    
    
}
})


}


module.exports={
    geocodeAddress
    
};

*/
































/*
const request = require('request');


var geocodeAddress = (address,callback)=>{
    
    
var encodedAddress = encodeURIComponent(address);



request({
    
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=8BxlR3zDDBsy8o0UlV517ihnSzxGLmNp&location=${encodedAddress}`,
    json:true
    
},(error, response, body)=>{
    
    
    
    if(error){
        callback('unable to fetch data');
    
    }else if(body.info.statuscode === 400){
        callback('plz check adress');
    
    }else if(body.info.statuscode === 0){

    callback(undefined, {
        
    //console.log(JSON.stringify (body,undefined,2));
    
    latitude: body.results[0].locations[0].latLng.lat,
    longitude: body.results[0].locations[0].latLng.lng

    })
   
    }
    
});

    
}

module.exports={
    geocodeAddress
    
};




*/




















/*
const request = require('request');


var geocodeAddress = (address,callback)=>{
    
    
var encodedAddress = encodeURIComponent(address);


request({
    
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=8BxlR3zDDBsy8o0UlV517ihnSzxGLmNp&location=${encodedAddress}`,
    json: true
    
    
},(error, response, body)=>{
    
    if(error){
        callback('unable to fetch address');
    }else if(body.info.statuscode === 400){
        callback('wrong address');
    
    
    }else if(body.info.statuscode === 0){
    callback(undefined, {
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
    });    
    //console.log(JSON.stringify (body,undefined,2)); 
    }
    
});
};


module.exports={
    geocodeAddress
};


*/


































/*
const request = require('request');

var geocodeAddress = (address,callback)=>{
    
    var encodedAddress = encodeURIComponent(address);
    
request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=8BxlR3zDDBsy8o0UlV517ihnSzxGLmNp&location=${encodedAddress}`,
    json: true
    
},(error, response, body)=>{
    
    
    if(error){
        callback('error in something');
        
    }else if(body.info.stauscode === 404){
        callback('unvalid address');
    }else if(body.info.statuscode === 0){
        
    callback(undefined, { 
    
    latitude: body.results[0].locations[0].latLng.lng,
    lonfitude: body.results[0].locations[0].latLng.lat
    });    
    //console.log(JSON.stringify (body,undefined,2));   
    }
});
}
module.exports={
    geocodeAddress
};

*/

/*
const request = require('request');

var geocodeAddress =(address, callback)=>{
    
    var encodedAddress = encodeURIComponent(address);
    
    request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=8BxlR3zDDBsy8o0UlV517ihnSzxGLmNp&location=${encodedAddress}`,
    json: true
    
}, (error, response, body) =>{
    
    if(error){
        callback('unable to connect');
    
    }else if(body.info.statuscode === 400){
        callback('invaliad address');
    
    }else if(body.info.statuscode === 0){
    
    callback(undefined, {
    latitude: body.results[0].locations[0].latLng.lat,
    
    longitude:
    body.results[0].locations[0].latLng.lng
        
    });
    
    //console.log(JSON.stringify (body,undefined,2));
    }
}); 
    
};


module.exports={
    geocodeAddress
};

*/