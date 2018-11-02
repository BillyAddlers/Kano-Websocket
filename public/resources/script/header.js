function getHeader(){
    var title = ["Irasshai!", "Riiiiiiichiiiii!", "Mazure is gay!", "Welcome to Lolization!", "Moshi-moshi, keisatsu desu"];
    var selectedTitle = title[Math.floor(Math.random()*title.length)];
    var objHeader = document.getElementById('header')
  
    objHeader.innerHTML = selectedTitle;
}
  