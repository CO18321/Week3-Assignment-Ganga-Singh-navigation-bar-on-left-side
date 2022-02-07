

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("myImage").style.paddingLeft = "350px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myImage").style.paddingLeft = "0";
   
}

function getImage(){
  // cors is disabled using an extention (CORS Unblock)
  const image_id = '1cXHh0iabxLEWV4a4R61IZiTOANDE02g7';
  const url =  'https://drive.google.com/uc?id='+ image_id;
  fetch(url).then(res => {
    let image = document.getElementById('myImage');
    image.src = res.url;
  });

}
