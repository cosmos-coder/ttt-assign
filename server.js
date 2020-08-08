const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 3015;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());
app.get('/get-occurence', (req, res)=>{
  console.log('get occurence');
  let n = req.query.n || 10;
  let occurenceMap = {};
  axios.get('http://terriblytinytales.com/test.txt')
    .then(result=>{
      result = result.data;
      /* trim /n and /t */
      result = result.replace(/\n\t/g, " ");
      /* split the string by " " to get an array of words */
      result = result.split(' ');
      /* iterate over each word and save the no of occurance
      ** in the occurenceMap object with count as value */
      result.forEach(item=>{
        if(occurenceMap.hasOwnProperty(item)){
          occurenceMap[item]++;
        }else{
          occurenceMap[item]=1;
        }
      });
      /* sort the occurenceMap object by the no of occurance value */
      occurenceMap = sortObjByOccurance(occurenceMap);
      /* slice the first top N most frequesntly occuring words */
      occurenceMap = occurenceMap.slice(0,n);
      /* send as the array of N words */
      res.json({Status: 1, data: occurenceMap, msg: 'success'});
    })
    .catch(error=>{
      console.log('error in axios get test.txt as ',error);
      res.json({Status: 0, msg: 'Oops something went wrong. Please try again.'})
    })
});

/* function to sort the occurenceArray by the value i.e no of occurence*/
function sortObjByOccurance(item){
  var occurenceArray = [];
  for(key in item){
    occurenceArray.push([key, item[key]]);
  }
  occurenceArray.sort((a,b)=>{
    return b[1]-a[1];
  })
  return occurenceArray;
}

app.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen( PORT,
  console.log('listening on port '+PORT)
);
