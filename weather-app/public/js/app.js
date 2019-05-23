//console.log(1);


const mssg = document.querySelector('#message');


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    //console.log(2);
    const location = search.value;

    mssg.textContent = 'Loading.....';


    fetch('http://localhost:3000/weather?address='+location).then((response) => {
     response.json().then((data) => {
         if(data.error){
             //console.log(2);
             mssg.textContent = 'data.error';
         }
         else{
             //console.log(1);
             mssg.textContent = 'It is '+data.data+' degress in '+location;
         }

     });
 });
});