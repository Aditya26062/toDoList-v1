module.exports.getDate= getDate;

function getDate(){
    
    let today = new Date();
    // let currentDay = today.getDay();
    options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
    
    let day =today.toLocaleDateString("hi-IN",options);
    return day;
}
module.exports.getDay=getDay;
function getDay(){
    
    let today = new Date();
    // let currentDay = today.getDay();
    options = {
        weekday : "long"
    }
    
    let day =today.toLocaleDateString("hi-IN",options);
    return day;
}