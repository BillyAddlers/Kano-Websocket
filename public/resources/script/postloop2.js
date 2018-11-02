function getArticle() {
    loadJSON(function(response) {
        
       var article = JSON.parse(response);
       article.reverse();
       var l = article.length;
       var objList = document.getElementById('list');
   
           for (var i = 0; i < l; i++) {
               objList.innerHTML +=
               "<a href=\""+article[i].path+"\">"
                   +"<div class=\"card\">"
                       +"<p>"+article[i].title+"</p>"
                       +"<small><time>"+article[i].date+"</time></small>"
                   +"</div>"
               +"</a>";

           }

    });
   }
   
   function loadJSON(callback) {
       var xobj = new XMLHttpRequest();
               xobj.overrideMimeType("application/json");

       xobj.open('GET', '/articles/articles.json', true);
       xobj.onreadystatechange = function () {

                   if (xobj.readyState == 4 && xobj.status == "200") {
                       callback(xobj.responseText);

                   }

       };

       xobj.send(null);
   }
   