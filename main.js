'use script'


{
  function loading(){
    document.getElementById("loading").style.display = "none";
  }

  setTimeout(loading,3000);

  const pics = ["photo/friend.jpg","photo/sunset.jpeg","photo/hakone.mont.jpeg","photo/isigaki_hotel.JPG","photo/isigaki_sea.JPG","photo/karaokescore.jpeg","photo/masaru.JPG","photo/snowboard.JPG"];
  let num = 0;

  function slideshow(){
      num = Math.floor(Math.random()*pics.length);
      document.querySelector("body").style.backgroundImage = "url(" + pics[num] + ")";
  }

  setInterval(slideshow, 5000);    
}
   
    