

function openNav() {
    //make sidebar visible by giving width of 30% of viewport width
    document.getElementById("mySidenav").style.width = "30vw";
    document.getElementById("myImage").style.paddingLeft = "30vw";
}
  
function closeNav() {
    // hide sidebar
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myImage").style.paddingLeft = "0";
   
}


// Function to render image from google drive
function getImage(){

  // cors is disabled using an extention called "CORS Unblock"
  // the fetched image file is downlaoded under 'sources'

  const image_id = '1HaMRlJO1Zt_kg_2ZkwXfHb7GIbBM-62n';
  const URL =  'https://drive.google.com/uc?id='+ image_id;
  fetch(URL).then(res => {
    let image = document.getElementById('myImage');
    image.src = res.url;
    console.log(res.url);
  });


}
