function getPainting() {
    loadJSON(function(response) {
     // Parse JSON string into object
       var painting = JSON.parse(response);
       var l = painting.length;
       var objList = document.getElementById('list');
   
       //sort by name
       painting.sort(function(a, b) {
         var nameA = a.name.toUpperCase();
         var nameB = b.name.toUpperCase();
         if (nameA < nameB) {
           return -1;
         }
         if (nameA > nameB) {
           return 1;
         }
         return 0;
       });
   
           for (var i = 0; i < l; i++) {
               objList.innerHTML +=
                   "<div class=\"card\">"
             +"<p><a href=\""+painting[i].image+"\">"+painting[i].name+"</a></p>"
             +"<ul class=\"u-pull-right\">"
               +"<a href=\""+painting[i].apd+"\"><li>.apd</li></a>"
               +"<a href=\""+painting[i].psd+"\"><li>.psd</li></a>"
             +"</ul>"
           +"</div>";
           }
    });
   }
   
   function loadJSON(callback) {
       var xobj = new XMLHttpRequest();
               xobj.overrideMimeType("application/json");
       xobj.open('GET', 'resources/data/paintings.json', true); // Replace 'my_data' with the path to your file
       xobj.onreadystatechange = function () {
                   if (xobj.readyState == 4 && xobj.status == "200") {
                       // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                       callback(xobj.responseText);
                   }
       };
       xobj.send(null);
   }