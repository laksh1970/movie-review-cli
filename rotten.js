
const express = require('express');
const app = express();

const inquirer = require('inquirer');

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



function getRatingBySource(inputData, searchTxt) {

   var iData = JSON.parse(inputData);
  var ratings = iData.Ratings;

  if (Array.isArray(ratings) && ratings.length) {
    const matchRecord = ratings.find(r => {
      //make sure to normalize the case
      const regex = new RegExp(searchTxt.toLowerCase());
      //console.log("Source matched = " + r.Source.toLowerCase());
      if (regex.test(r.Source.toLowerCase())){
        //console.log("value matched = " + r.Value);
        return r.Value;
      }
    })
    if (typeof matchRecord === 'object'){
       var retVal = matchRecord.Value;
       return retVal;
    }
  }
  return "No rating";
};

//gets data from the URL link
function Get(yourUrl){
	//create a http request
    var Httpreq = new XMLHttpRequest(); // a new request

    //making a GET request to the url
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);

    //return responseText in JSON format
    return Httpreq.responseText;
}


 /*var questions = [
   {
     type: 'input',
     name: 'title',
     message: "Enter the movie title to search for."
   },
   {
     type: 'confirm',
     name: 'askAgain',
     message: 'Want to enter another TV show favorite (just hit enter for YES)?',
     default: true
   }
 ]; */


function rotten(){

   inquirer
     .prompt([
       /* Pass your questions in here */

       {
         type: 'input',
         name: 'title',
         message: 'Enter the movie title to search for. or type exit',
       }
     ])
     .then(answers => {
       // Use user feedback for... whatever!!


     if (answers.title && (answers.title !== "exit")) {//title mandatory, enter

       //construct url

       var url = 'http://www.omdbapi.com/?apikey=b3e2dbbd' + '&t=' + answers.title;

      console.log("entered movie URL is:" + url)

       var jsondata = Get(url);

         if (!jsondata) {

           //print error, go back for another command
           console.log("negative or no response from IMDB = ")
         }
         else
         {
            //display the results
            var rat = getRatingBySource(jsondata, "rotten tomatoes");
            console.log("Movie "+ answers.title + " ===>  Rotten tomatoes rating is " + rat)

          }
          rotten();
        }

    });//then
}

rotten();

app.listen(9000, () => console.log('Listening on port 9000...')); 
