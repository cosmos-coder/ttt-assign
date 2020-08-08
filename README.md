# Teribly Tiny Tales Assignment
Impleted Using Create React Project as Front-end with bootstrap css and Node.js as Backend.

Live - [preview here](https://ttt-assignment.herokuapp.com/)


## Folder Structure
![Folder-Structure](https://user-images.githubusercontent.com/14115048/36096621-2f7ad44c-101d-11e8-861f-2429895c7fbf.PNG "Folder Structure")

## Frontend
Following packages are used:
* react
* react-router-dom
* axios - for making promise based api calls in react
* sweet alert - for showing alerts
* Bootstrap css

There are following 2 Components:
* Nav -
It is the Navigation components shown at the top of the page.

* Home -
The Home page shown when you run it. <br/>
It has an input field that takes an integer n and a submit button to send to the backend.<br/>
OnSubmit ```getOccurence()``` function is called that takes N from inout and makes an API call to ```/get-occurence?n=${n}```. It uses axios i.e promise based to make ajax requests.</br>
Upon Success the the response comes in ```then()``` block and in case of error it comes in ```catch()``` block.<br/>
In then we got the response and if response Status is 1 then i set the state ```data``` as the ```response.data``` using the ```setState()``` function.
In catch i show an alert showing error message.<br/>
```render method:```
In render function I iterate over the this.state.data array and create a row i.e. '<tr>' containing the word and no of occurence and then that row is shown in the table.

## Backend
Following packages are use:
* express
* body-parser - to parse the POST req body in node
* axios - to make call to fetch a file hosted at [http://terriblytinytales.com/test.txt](http://terriblytinytales.com/test.txt)
* cors - to enable cross origin resource sharing

The ```GET /get-occurence``` endpoint is called after submitting the value of N from front-end. The N is passed in the query string.

Let's undertand the code that fetches file test.txt and finds top N most frequent occurance words.

We use ```axios.get``` to fetch the ```test.txt``` file from terriblytinytales website.

I got the string in the ```result``` variable, then I replce the new line characters and tabs with spaces using ```result.replace(/\n\t/g, " ")```.

Then i split the string by delimeter ```" "``` which returns an array of words from the result string.

Then iterate over each word in the array and store the no of occurence of each words in the object ```occrenceMap```.

Then finally sort the ```OccurenceMap``` object by value i.e by count of occurence and return an array from it.

Then slice the top N most frequent words from the array and return it as response.

## Test Cases
