function include(arr, obj) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i][0] === obj[0] && arr[i][1] === obj[1] || Math.floor(arr[i][0]) === obj[0] && Math.floor(arr[i][1]) === obj[1]) {
          return i;
        }
      }
}
function topE(arr,ele){
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i][0] == ele){
       num++;
    }
  }
  return num;
}
function leftE(arr,ele){
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i][1] == ele){
       num++;
    }
  }
  return num;
}
window.onload = function(){
  var child = Math.floor((Math.random() * 16));
  var child2 = Math.floor((Math.random() * 15));
  var i = 1;
  var h = 2;

  var positions2 = [["1.7%","4.5%"],["1.7%","29.5%"],["1.7%","54.9%"],["1.7%","79.9%"],["26.7%","4.5%"],["26.7%","29.5%"],["26.7%","54.9%"],["26.7%","79.9%"],["51.7%","4.5%"],["51.7%","29.5%"],["51.7%","54.9%"],["51.7%","79.9%"],["76.7%","4.5%"],["76.7%","29.5%"],["76.7%","54.9%"],["76.7%","79.9%"]];
  var positions = [["1.7%","4.5%"],["1.7%","29.5%"],["1.7%","54.9%"],["1.7%","79.9%"],["26.7%","4.5%"],["26.7%","29.5%"],["26.7%","54.9%"],["26.7%","79.9%"],["51.7%","4.5%"],["51.7%","29.5%"],["51.7%","54.9%"],["51.7%","79.9%"],["76.7%","4.5%"],["76.7%","29.5%"],["76.7%","54.9%"],["76.7%","79.9%"]];
  if(child==child2){
    child = 4;
    child2 = 2;
  }

  function searchCss(top,left){
    for (var s = 0; s <= i ; s++) {
     var numbertPx = $("#number"+s).css("top");
      if(numbertPx != null){
          var numbert =  numbertPx.substr(0 , numbertPx.length - 2) / 560;
          var numbertPo = Math.floor(numbert * 100);
          var numberlPx = $("#number"+s).css("left");
          var numberl =  numberlPx.substr(0 , numberlPx.length - 2) / 571.5;
          var numberlPo = Math.floor(numberl * 100);
          if(numbertPo == top && numberlPo == left){
            return "#number"+s;
         }
   }
  }
  }
  var square1 = document.body.childNodes[5];
   square1.innerHTML += "<div class='dives' id='number0'>2</div>";
   square1.innerHTML += "<div class='dives' id='number1'>2</div>";
   $("#number0").css("top",positions[child][0]);
   $("#number0").css("left",positions[child][1]);
   $("#number1").css("top",positions[child2][0]);
   $("#number1").css("left",positions[child2][1]);
   $("#number0").fadeIn(0);
   $("#number1").fadeIn(0);
   if(child2 > child){
     number2 = child2 - 1;
   }
   else{
     number2 = child2;
   }
   positions.splice(child, 1);
   positions.splice(number2, 1);
  // console.log(parseInt($("#number1").html()) + parseInt($("#number0").html()));
  addEventListener('keydown',function addSquare(event){
    if(positions.length >= 0){
    var asci = event.keyCode;
    var text = String.fromCharCode(asci);
    var child3 = Math.floor((Math.random() * positions.length));
    if(text == "%"){
       var arr = [];
      for (var g = 0; g <= i; g++) {
        var div = document.getElementById("number"+g);
        if(div != null){
        var topP = window.getComputedStyle(div).getPropertyValue('top');
        var topN =  topP.substr(0 , topP.length - 2) / 560;
        var topMn = Math.floor(topN * 100);
        var leftP = window.getComputedStyle(div).getPropertyValue('left');
        var leftN =  leftP.substr(0 , leftP.length - 2) / 571.5;
        var leftMn = Math.floor(leftN * 100);
          for (var u = 0; u <= 15; u++) {
           var posT = positions2[u][0].substr(0 , positions2[u][0].length - 1);
           var posTm = Math.floor(posT);
           var posL = positions2[u][1].substr(0 , positions2[u][1].length - 1);
           var posLm = Math.floor(posL);
             if(posLm == leftMn && posTm == topMn){
               if(include(positions,[posT+"%","4.5%"]) || include(positions,[posT+"%","4.5%"]) == 0){
                 if(topE(positions,posT+"%") == 3){
                   positions.push([posT+"%",posL+"%"]);
                   $(div).css("left","4.5%");
                   positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                 }
                 else if (topE(positions,posT+"%") == 2) {
                   if(include(positions,[posT+"%","29.5%"]) == undefined && include(positions,[posT+"%","54.9%"]) == undefined  ){
                     if(posLm == 29){
                       var egale = $(searchCss(posTm , 54)).text();
                       var egale2 = $(searchCss(posTm , 29)).text();
                       if(egale == egale2){
                         $(div).css("left","4.5%");
                         $(searchCss(posTm , 54)).remove();
                         var result = parseInt(egale) + parseInt(egale2);
                         $(div).text(result);
                         positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                         positions.push([posT+"%","29.5%"]);
                         positions.push([posT+"%","54.9%"]);
                       }
                       else{
                           $(div).css("left","4.5%");
                           $(searchCss(posTm , 54)).css("left","29.5%");
                           positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                           positions.push([posT+"%","54.9%"]);
                     }
                     }
                   }
                   if(include(positions,[posT+"%","29.5%"]) == undefined && include(positions,[posT+"%","79.9%"]) == undefined  ){
                     if(posLm == 29){
                       var egale = $(searchCss(posTm , 79)).text();
                       var egale2 = $(searchCss(posTm , 29)).text();
                       if(egale == egale2){
                         $(div).css("left","4.5%");
                         $(searchCss(posTm , 79)).remove();
                         var result = parseInt(egale) + parseInt(egale2);
                         $(div).text(result);
                         positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                         positions.push([posT+"%","29.5%"]);
                         positions.push([posT+"%","79.9%"]);
                       }
                       else{
                       $(div).css("left","4.5%");
                       $(searchCss(posTm , 79)).css("left","29.5%");
                       positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                       positions.push([posT+"%","79.9%"]);
                     }
                   }
                   }
                   if(include(positions,[posT+"%","54.9%"]) == undefined && include(positions,[posT+"%","79.9%"]) == undefined  ){
                     if(posLm == 54){
                       var egale = $(searchCss(posTm , 79)).text();
                       var egale2 = $(searchCss(posTm , 54)).text();
                       if(egale == egale2){
                         $(div).css("left","4.5%");
                         $(searchCss(posTm , 79)).remove();
                         var result = parseInt(egale) + parseInt(egale2);
                         $(div).text(result);
                         positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                         positions.push([posT+"%","54.5%"]);
                         positions.push([posT+"%","79.9%"]);
                       }
                       else{
                       $(div).css("left","4.5%");
                       $(searchCss(posTm , 79)).css("left","29.5%");
                       positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                       positions.splice(include(positions,[posT+"%","29.5%"]), 1);
                       positions.push([posT+"%","79.9%"]);
                       positions.push([posT+"%","54.9%"]);
                     }
                   }
                   }
                 }
                 else if (topE(positions,posT+"%") == 1) {
                   if(posLm == 29){
                     var egale = $(searchCss(posTm , 54)).text();
                     var egale2 = $(searchCss(posTm , 29)).text();
                     var egale3 = $(searchCss(posTm , 79)).text();
                     if(egale == egale2){
                       $(div).css("left","4.5%");
                       $(searchCss(posTm , 54)).css("left","29.5%");
                       $(searchCss(posTm , 79)).remove();
                       var result = parseInt(egale) + parseInt(egale2);
                       $(div).text(result);
                       positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                       positions.push([posT+"%","54.9%"]);
                       positions.push([posT+"%","79.9%"]);
                     }
                     else if(egale == egale3){
                       $(div).css("left","4.5%");
                       $(searchCss(posTm , 79)).css("left","29.5%");
                       $(searchCss(posTm , 54)).remove();
                       var result = parseInt(egale) + parseInt(egale3);
                       $(searchCss(posTm , 29)).text(result);
                       positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                       positions.push([posT+"%","54.9%"]);
                       positions.push([posT+"%","79.9%"]);
                     }
                     else{
                     $(div).css("left","4.5%");
                     $(searchCss(posTm , 54)).css("left","29.5%");
                     $(searchCss(posTm , 79)).css("left","54.9%");
                     positions.splice(include(positions,[posT+"%","4.5%"]), 1);
                     positions.push([posT+"%","79.9%"])
                   }
                 }
                 }
               }
               else if(include(positions,[posT+"%","29.5%"]) && posL != 4.5 ||  include(positions,[posT+"%","29.5%"]) == 0 && posL != 4.5){
                 if(topE(positions,posT+"%") == 2){
                   var egale = $(searchCss(posTm , 4)).text();
                   var egale2 = $(searchCss(posTm , posLm)).text();
                   if(egale == egale2){
                     $(searchCss(posTm , posLm)).remove();
                     var result = parseInt(egale) + parseInt(egale2);
                     $(searchCss(posTm , 4)).text(result);
                     positions.push([posT+"%", posL+"%"]);
                   }
                   else{
                   positions.push([posT+"%",posL+"%"]);
                   $(div).css("left","29.5%");
                   positions.splice(include(positions,[posT+"%","29.5%"]), 1);
                 }
                 }
                 else if (topE(positions,posT+"%") == 1) {
                   if(posLm == 54){
                     var egale = $(searchCss(posTm , 54)).text();
                     var egale2 = $(searchCss(posTm , 4)).text();
                     var egale3 = $(searchCss(posTm , 79)).text();
                     if(egale == egale2){
                       $(searchCss(posTm , 54)).remove();
                       $(searchCss(posTm , 79)).css("left","29.5%");
                       var result = parseInt(egale) + parseInt(egale2);
                       $(searchCss(posTm , 4)).text(result);
                       positions.splice(include(positions,[posT+"%","29.5%"]), 1);
                       positions.push([posT+"%","54.9%"]);
                       positions.push([posT+"%","79.9%"]);
                     }
                     else if(egale == egale3){
                       $(div).css("left","29.5%");
                       $(searchCss(posTm , 79)).remove();
                       var result = parseInt(egale) + parseInt(egale3);
                       $(searchCss(posTm , 29)).text(result);
                       positions.splice(include(positions,[posT+"%","29.5%"]), 1);
                       positions.push([posT+"%","54.9%"]);
                       positions.push([posT+"%","79.9%"]);
                     }
                     else{
                     $(div).css("left","29.5%");
                     $(searchCss(posTm , 79)).css("left","54.9%");
                     positions.splice(include(positions,[posT+"%","29.5%"]), 1);
                     positions.push([posT+"%","79.9%"])
                   }
                   }
                 }
               }
               else if(include(positions,[posT+"%","54.9%"]) && posL != 29.5 && posL != 4.5  || include(positions,[posT+"%","54.9%"]) == 0 && posL != 29.5 && posL != 4.5  ){
                 var egale = $(searchCss(posTm , 29)).text();
                 var egale2 = $(searchCss(posTm , 4)).text();
                 var egale3 = $(searchCss(posTm , 79)).text();
                  if(egale == egale2){
                   $(div).css("left","29.5%");
                   $(searchCss(posTm , 29)).remove();
                   var result = parseInt(egale) + parseInt(egale2);
                   $(searchCss(posTm , 4)).text(result);
                   positions.push([posT+"%","79.9%"]);
                 }
                 else if(egale == egale3){
                   $(searchCss(posTm , 79)).remove();
                   var result = parseInt(egale) + parseInt(egale3);
                   $(searchCss(posTm , 29)).text(result);
                   positions.push([posT+"%","79.9%"]);
                 }
                 else{
                  positions.push([posT+"%","79.9%"]);
                  $(div).css("left","54.9%");
                  positions.splice(include(positions,[posT+"%","54.9%"]), 1);
               }
              }
              else if (include(positions,[posT+"%","79.9%"]) && include(positions,[posT+"%","54.9%"]) == undefined || include(positions,[posT+"%","79.9%"]) == 0 && include(positions,[posT+"%","54.9%"]) == undefined ) {
              if(topE(positions,posT+"%") == 1){
                arr.push(posTm+1);
                var egale = $(searchCss(posTm , 29)).text();
                var egale2 = $(searchCss(posTm , 54)).text();
                var egale3 = $(searchCss(posTm , 4)).text();
                if(egale == egale3){
                  if(arr.includes(posTm+3) != true &&  arr.includes(posTm+4) != true){
                  $(searchCss(posTm , 29)).remove();
                  $(searchCss(posTm , 54)).css("left","29.5%");
                  var result = parseInt(egale) + parseInt(egale3);
                  $(searchCss(posTm , 4)).text(result);
                  positions.push([posT+"%","54.9%"]);
                }
              }
                else if (egale == egale2) {
                  if(arr.includes(posTm+4) != true && arr.includes(posTm+5) != true ){
                  $(searchCss(posTm , 54)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(posTm , 29)).text(result);
                  positions.push([posT+"%","54.9%"]);
                }
              }
              }
              }
              else if(include(positions,[posT+"%","54.9%"]) || include(positions,[posT+"%","54.9%"]) == 0){
                if(arr.includes(posTm+1) != true && arr.includes(posTm+2) != true){
                if(topE(positions,posT+"%") == 2){
                  var egale = $(searchCss(posTm , 4)).text();
                  var egale2 = $(searchCss(posTm , 29)).text();
                  if(egale == egale2){
                    $(searchCss(posTm , 29)).remove();
                    var result = parseInt(egale) + parseInt(egale2);
                    $(searchCss(posTm , 4)).text(result);
                    positions.push([posT+"%","29.5%"]);
                  }
                }
              }
              }
              else if (topE(positions,posT+"%") == 0) {
                var egale = $(searchCss(posTm , 4)).text();
                var egale2 = $(searchCss(posTm , 29)).text();
                var egale3 = $(searchCss(posTm , 54)).text();
                var egale4 = $(searchCss(posTm , 79)).text();
                if(egale == egale2 && egale3 == egale4){
                  $(searchCss(posTm , 29)).remove();
                  $(searchCss(posTm , 79)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  var result2 = parseInt(egale3) + parseInt(egale4);
                  $(searchCss(posTm , 54)).css("left","29.5%");
                  $(searchCss(posTm , 4)).text(result);
                  $(searchCss(posTm , 29)).text(result2);
                  positions.push([posT+"%","54.9%"]);
                  positions.push([posT+"%","79.9%"]);
                  arr.push(posTm+2);
                }
                else if(egale == egale2){
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(posTm , 29)).remove();
                  $(searchCss(posTm , 54)).css("left","29.5%");
                  $(searchCss(posTm , 79)).css("left","54.9%");
                  positions.push([posT+"%","79.9%"]);
                  $(searchCss(posTm , 4)).text(result);
                  arr.push(posTm+3);
                }
                else if (egale2 == egale3) {
                  var result = parseInt(egale2) + parseInt(egale3);
                  $(searchCss(posTm , 54)).remove();
                  $(searchCss(posTm , 79)).css("left","54.9%");
                  positions.push([posT+"%","79.9%"]);
                  $(searchCss(posTm , 29)).text(result);
                  arr.push(posTm+4);
                }
                else if (egale3 == egale4) {
                  var result = parseInt(egale3) + parseInt(egale4);
                  $(searchCss(posTm , 79)).remove();
                  positions.push([posT+"%","79.9%"]);
                  $(searchCss(posTm , 54)).text(result);
                  arr.push(posTm+5);
                }
              }
             }
           }
         }
         }
      square1.innerHTML += "<div class='dives' id=number"+ ++i +">2</div>";
        var classNumber = i;
      $("#number"+classNumber).css("font-size","40px");
      $("#number"+classNumber).css("border-radius","10px");
      $("#number"+classNumber).css("position","absolute");
      $("#number"+classNumber).css("padding","30px");
      $("#number"+classNumber).css("background-color","lightgrey");
      if(positions.length == 0){
        document.getElementsByClassName("squareM")[0].innerHTML = "<p class='text-center'>you lost</p>";
        $(".dives").hide();
        return false;
      }
      $("#number"+classNumber).css("top",positions[child3][0]);
      $("#number"+classNumber).css("left",positions[child3][1]);
      $("#number"+classNumber).fadeIn(0);
       positions.splice(child3, 1);
   }
   if(text == "'"){
     var arr = [];
     for (var g = 0; g <= i; g++) {
       var div = document.getElementById("number"+g);
       if(div != null){
       var topP = window.getComputedStyle(div).getPropertyValue('top');
       var topN =  topP.substr(0 , topP.length - 2) / 560;
       var topMn = Math.floor(topN * 100);
       var leftP = window.getComputedStyle(div).getPropertyValue('left');
       var leftN =  leftP.substr(0 , leftP.length - 2) / 571.5;
       var leftMn = Math.floor(leftN * 100);
         for (var u = 0; u <= 15; u++) {
          var posT = positions2[u][0].substr(0 , positions2[u][0].length - 1);
          var posTm = Math.floor(posT);
          var posL = positions2[u][1].substr(0 , positions2[u][1].length - 1);
          var posLm = Math.floor(posL);
            if(posLm == leftMn && posTm == topMn){
              if(include(positions,[posT+"%","79.9%"]) || include(positions,[posT+"%","79.9%"]) == 0){
                if(topE(positions,posT+"%") == 3){
                  positions.push([posT+"%",posL+"%"]);
                  $(div).css("left","79.9%");
                  positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                }
                else if (topE(positions,posT+"%") == 2) {
                  if(include(positions,[posT+"%","29.5%"]) == undefined && include(positions,[posT+"%","54.9%"]) == undefined  ){
                    if(posLm == 54){
                      var egale = $(searchCss(posTm , 54)).text();
                      var egale2 = $(searchCss(posTm , 29)).text();
                      if(egale == egale2){
                        $(div).css("left","79.9%");
                        $(searchCss(posTm , 29)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                        positions.push([posT+"%","29.5%"]);
                        positions.push([posT+"%","54.9%"]);
                      }
                      else{
                      $(div).css("left","79.9%");
                      $(searchCss(posTm , 29)).css("left","54.9%");
                      positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                      positions.push([posT+"%","29.5%"]);
                    }
                    }
                  }
                  if(include(positions,[posT+"%","54.9%"]) == undefined && include(positions,[posT+"%","4.5%"]) == undefined  ){
                    if(posLm == 54){
                      var egale = $(searchCss(posTm , 4)).text();
                      var egale2 = $(searchCss(posTm , 54)).text();
                      if(egale == egale2){
                        $(div).css("left","79.9%");
                        $(searchCss(posTm , 4)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                        positions.push([posT+"%","54.9%"]);
                        positions.push([posT+"%","4.5%"]);
                      }
                      else{
                      $(div).css("left","79.9%");
                      $(searchCss(posTm , 4)).css("left","54.5%");
                      positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                      positions.push([posT+"%","4.5%"]);
                    }
                   }
                  }
                  if(include(positions,[posT+"%","29.5%"]) == undefined && include(positions,[posT+"%","4.5%"]) == undefined  ){
                    if(posLm == 29){
                      var egale = $(searchCss(posTm , 4)).text();
                      var egale2 = $(searchCss(posTm , 29)).text();
                      if(egale == egale2){
                        $(div).css("left","79.9%");
                        $(searchCss(posTm , 4)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                        positions.push([posT+"%","29.5%"]);
                        positions.push([posT+"%","4.5%"]);
                      }
                      else{
                      $(div).css("left","79.9%");
                      $(searchCss(posTm , 4)).css("left","54.9%");
                      positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                      positions.splice(include(positions,[posT+"%","54.9%"]), 1);
                      positions.push([posT+"%","4.5%"]);
                      positions.push([posT+"%","29.5%"]);
                    }
                  }
                  }
                }
                else if (topE(positions,posT+"%") == 1) {
                  if(posLm == 54){
                    var egale = $(searchCss(posTm , 29)).text();
                    var egale2 = $(searchCss(posTm , 54)).text();
                    var egale3 = $(searchCss(posTm , 4)).text();
                    if(egale == egale2){
                      $(div).css("left","79.9%");
                      $(searchCss(posTm , 29)).css("left","54.9%");
                      $(searchCss(posTm , 4)).remove();
                      var result = parseInt(egale) + parseInt(egale2);
                      $(div).text(result);
                      positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                      positions.push([posT+"%","29.5%"]);
                      positions.push([posT+"%","4.5%"]);
                    }
                    else if(egale == egale3){
                      $(div).css("left","79.9%");
                      $(searchCss(posTm , 4)).css("left","54.9%");
                      $(searchCss(posTm , 29)).remove();
                      var result = parseInt(egale) + parseInt(egale3);
                      $(searchCss(posTm , 54)).text(result);
                      positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                      positions.push([posT+"%","29.5%"]);
                      positions.push([posT+"%","4.5%"]);
                    }
                    else{
                    $(div).css("left","79.9%");
                    $(searchCss(posTm , 29)).css("left","54.9%");
                    $(searchCss(posTm , 4)).css("left","29.5%");
                    positions.splice(include(positions,[posT+"%","79.9%"]), 1);
                    positions.push([posT+"%","4.5%"])
                  }
                }
                }
              }
              else if(include(positions,[posT+"%","54.9%"]) && posL != 79.9 ||  include(positions,[posT+"%","54.9%"]) == 0 && posL != 79.9){
                if(topE(positions,posT+"%") == 2){
                  var egale = $(searchCss(posTm , 79)).text();
                  var egale2 = $(searchCss(posTm , posLm)).text();
                  if(egale == egale2){
                    $(searchCss(posTm , posLm)).remove();
                    var result = parseInt(egale) + parseInt(egale2);
                    $(searchCss(posTm , 79)).text(result);
                    positions.push([posT+"%", posL+"%"]);
                  }
                  else{
                  positions.push([posT+"%",posL+"%"]);
                  $(div).css("left","54.9%");
                  positions.splice(include(positions,[posT+"%","54.9%"]), 1);
                }
                }
                else if (topE(positions,posT+"%") == 1) {
                  if(posLm == 29){
                    var egale = $(searchCss(posTm , 29)).text();
                    var egale2 = $(searchCss(posTm , 79)).text();
                    var egale3 = $(searchCss(posTm , 4)).text();
                    if(egale == egale2){
                      $(searchCss(posTm , 29)).remove();
                      $(searchCss(posTm , 4)).css("left","54.9%");
                      var result = parseInt(egale) + parseInt(egale2);
                      $(searchCss(posTm , 79)).text(result);
                      positions.splice(include(positions,[posT+"%","54.9%"]), 1);
                      positions.push([posT+"%","29.5%"]);
                      positions.push([posT+"%","4.5%"]);
                    }
                    else if(egale == egale3){
                      $(div).css("left","54.9%");
                      $(searchCss(posTm , 4)).remove();
                      var result = parseInt(egale) + parseInt(egale3);
                      $(searchCss(posTm , 54)).text(result);
                      positions.splice(include(positions,[posT+"%","54.9%"]), 1);
                      positions.push([posT+"%","29.5%"]);
                      positions.push([posT+"%","4.5%"]);
                    }
                    else{
                    $(div).css("left","54.9%");
                    $(searchCss(posTm , 4)).css("left","29.5%");
                    positions.splice(include(positions,[posT+"%","54.9%"]), 1);
                    positions.push([posT+"%","4.5%"])
                  }
                  }
                }
              }
              else if(include(positions,[posT+"%","29.5%"]) && posL != 54.9 && posL != 79.9 || include(positions,[posT+"%","29.5%"]) == 0 && posL != 54.9 && posL != 79.9 ){
                var egale = $(searchCss(posTm , 54)).text();
                var egale2 = $(searchCss(posTm , 79)).text();
                var egale3 = $(searchCss(posTm , 4)).text();
                 if(egale == egale2){
                  $(div).css("left","54.9%");
                  $(searchCss(posTm , 54)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(posTm , 79)).text(result);
                  positions.push([posT+"%","4.5%"]);
                }
                else if(egale == egale3){
                  $(searchCss(posTm , 4)).remove();
                  var result = parseInt(egale) + parseInt(egale3);
                  $(searchCss(posTm , 54)).text(result);
                  positions.push([posT+"%","4.5%"]);
                }
                else{
                positions.push([posT+"%","4.5%"]);
                $(div).css("left","29.5%");
                positions.splice(include(positions,[posT+"%","29.5%"]), 1);
              }
            }
            else if (include(positions,[posT+"%","4.5%"]) && include(positions,[posT+"%","29.5%"]) == undefined || include(positions,[posT+"%","4.5%"]) == 0 && include(positions,[posT+"%","29.5%"]) == undefined ) {
            if(topE(positions,posT+"%") == 1){
              arr.push(posTm+1);
              var egale = $(searchCss(posTm , 54)).text();
              var egale2 = $(searchCss(posTm , 29)).text();
              var egale3 = $(searchCss(posTm , 79)).text();
              if(egale == egale3){
                if(arr.includes(posTm+3) != true &&  arr.includes(posTm+4) != true){
                $(searchCss(posTm , 54)).remove();
                $(searchCss(posTm , 29)).css("left","54.9%");
                var result = parseInt(egale) + parseInt(egale3);
                $(searchCss(posTm , 79)).text(result);
                positions.push([posT+"%","29.5%"]);
              }
            }
              else if (egale == egale2) {
                if(arr.includes(posTm+4) != true && arr.includes(posTm+5) != true ){
                $(searchCss(posTm , 29)).remove();
                var result = parseInt(egale) + parseInt(egale2);
                $(searchCss(posTm , 54)).text(result);
                positions.push([posT+"%","29.5%"]);
              }
            }
            }
            }
            else if(include(positions,[posT+"%","29.5%"]) || include(positions,[posT+"%","29.5%"]) == 0){
              if(arr.includes(posTm+1) != true && arr.includes(posTm+2) != true){
              if(topE(positions,posT+"%") == 2){
                var egale = $(searchCss(posTm , 79)).text();
                var egale2 = $(searchCss(posTm , 54)).text();
                if(egale == egale2){
                  $(searchCss(posTm , 54)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(posTm , 79)).text(result);
                  positions.push([posT+"%","54.9%"]);
                }
              }
            }
            }
            else if (topE(positions,posT+"%") == 0) {
              var egale = $(searchCss(posTm , 79)).text();
              var egale2 = $(searchCss(posTm , 54)).text();
              var egale3 = $(searchCss(posTm , 29)).text();
              var egale4 = $(searchCss(posTm , 4)).text();
              if(egale == egale2 && egale3 == egale4){
                $(searchCss(posTm , 54)).remove();
                $(searchCss(posTm , 4)).remove();
                var result = parseInt(egale) + parseInt(egale2);
                var result2 = parseInt(egale3) + parseInt(egale4);
                $(searchCss(posTm , 29)).css("left","54.9%");
                $(searchCss(posTm , 79)).text(result);
                $(searchCss(posTm , 54)).text(result2);
                positions.push([posT+"%","29.5%"]);
                positions.push([posT+"%","4.5%"]);
                arr.push(posTm+2);
              }
              else if(egale == egale2){
                var result = parseInt(egale) + parseInt(egale2);
                $(searchCss(posTm , 54)).remove();
                $(searchCss(posTm , 29)).css("left","54.9%");
                $(searchCss(posTm , 4)).css("left","29.5%");
                positions.push([posT+"%","4.5%"]);
                $(searchCss(posTm , 79)).text(result);
                arr.push(posTm+3);
              }
              else if (egale2 == egale3) {
                var result = parseInt(egale2) + parseInt(egale3);
                $(searchCss(posTm , 29)).remove();
                $(searchCss(posTm , 4)).css("left","29.5%");
                positions.push([posT+"%","4.5%"]);
                $(searchCss(posTm , 54)).text(result);
                arr.push(posTm+4);
              }
              else if (egale3 == egale4) {
                var result = parseInt(egale3) + parseInt(egale4);
                $(searchCss(posTm , 4)).remove();
                positions.push([posT+"%","4.5%"]);
                $(searchCss(posTm , 29)).text(result);
                arr.push(posTm+5);
              }
            }
            }
          }
        }
        }
        square1.innerHTML += "<div class='dives' id=number"+ ++i +">2</div>";
          var classNumber = i;
        $("#number"+classNumber).css("font-size","40px");
        $("#number"+classNumber).css("border-radius","10px");
        $("#number"+classNumber).css("position","absolute");
        $("#number"+classNumber).css("padding","30px");
        $("#number"+classNumber).css("background-color","lightgrey");
        if(positions.length == 0){
          document.getElementsByClassName("squareM")[0].innerHTML = "<p class='text-center'>you lost</p>";
          $(".dives").hide();
          return false;
        }
        $("#number"+classNumber).css("top",positions[child3][0]);
        $("#number"+classNumber).css("left",positions[child3][1]);
        $("#number"+classNumber).fadeIn(0);
         positions.splice(child3, 1);
   }

   if(text == "&"){
     var arr = [];
     for (var g = 0; g <= i; g++) {
       var div = document.getElementById("number"+g);
       if(div != null){
       var topP = window.getComputedStyle(div).getPropertyValue('top');
       var topN =  topP.substr(0 , topP.length - 2) / 560;
       var topMn = Math.floor(topN * 100);
       var leftP = window.getComputedStyle(div).getPropertyValue('left');
       var leftN =  leftP.substr(0 , leftP.length - 2) / 571.5;
       var leftMn = Math.floor(leftN * 100);
         for (var u = 0; u <= 15; u++) {
          var posT = positions2[u][0].substr(0 , positions2[u][0].length - 1);
          var posTm = Math.floor(posT);
          var posL = positions2[u][1].substr(0 , positions2[u][1].length - 1);
          var posLm = Math.floor(posL);
            if(posLm == leftMn && posTm == topMn){
              if(include(positions,["1.7%", posL+"%"]) || include(positions,["1.7%", posL+"%"]) == 0){
                if(leftE(positions,posL+"%") == 3){
                  positions.push([posT+"%",posL+"%"]);
                  $(div).css("top","1.7%");
                  positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                }
                else if (leftE(positions,posL+"%") == 2) {
                  if(include(positions,["26.7%",posL+"%"]) == undefined && include(positions,["51.7%",posL+"%"]) == undefined  ){
                    if(posTm == 26){
                      var egale = $(searchCss(26,posLm)).text();
                      var egale2 = $(searchCss(51,posLm)).text();
                      if(egale == egale2){
                        $(div).css("top","1.7%");
                        $(searchCss(51,posLm)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                        positions.push(["51.7%",posL+"%"]);
                        positions.push(["26.7%",posL+"%"]);
                      }
                      else{
                      $(div).css("top","1.7%");
                      $(searchCss(51,posLm)).css("top","26.7%");
                      positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                      positions.push(["51.7%",posL+"%"]);
                    }
                  }
                  }
                  if(include(positions,["26.7%",posL+"%"]) == undefined && include(positions,["76.7%",posL+"%"]) == undefined  ){
                    if(posTm == 26){
                      var egale = $(searchCss(76 , posLm)).text();
                      var egale2 = $(searchCss(26 , posLm)).text();
                      if(egale == egale2){
                        $(div).css("top","1.7%");
                        $(searchCss(76,posLm)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                        positions.push(["26.7%",posL+"%"]);
                        positions.push(["76.7%",posL+"%"]);
                      }
                      else{
                      $(div).css("top","1.7%");
                      $(searchCss(76,posLm)).css("top","26.7%");
                      positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                      positions.push(["76.7%",posL+"%"]);
                    }
                  }
                  }
                  if(include(positions,["51.7%",posL+"%"]) == undefined && include(positions,["76.7%",posL+"%"]) == undefined  ){
                    if(posTm == 51){
                      var egale = $(searchCss(76 , posLm )).text();
                      var egale2 = $(searchCss(51 , posLm )).text();
                      if(egale == egale2){
                        $(div).css("top","1.7%");
                        $(searchCss(76,posLm)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                        positions.push(["51.7%",posL+"%"]);
                        positions.push(["76.7%",posL+"%"]);
                      }
                      else{
                      $(div).css("top","1.7%");
                      $(searchCss(76,posLm)).css("top","26.7%");
                      positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                      positions.splice(include(positions,["26.7%",posL+"%"]), 1);
                      positions.push(["76.7%",posL+"%"]);
                      positions.push(["51.7%",posL+"%"]);
                    }
                  }
                  }
                }
                else if (leftE(positions,posL+"%") == 1) {
                  if(posTm == 26){
                    var egale = $(searchCss(51 , posLm)).text();
                    var egale2 = $(searchCss(26, posLm)).text();
                    var egale3 = $(searchCss(76, posLm)).text();
                    if(egale == egale2){
                      $(div).css("top","1.7%");
                      $(searchCss(51,posLm)).css("top","26.7%");
                      $(searchCss(76,posLm)).remove();
                      var result = parseInt(egale) + parseInt(egale2);
                      $(div).text(result);
                      positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                      positions.push(["51.7%",posL+"%"]);
                      positions.push(["76.7%",posL+"%"]);
                    }
                    else if(egale == egale3){
                      $(div).css("top","1.7%");
                      $(searchCss(76 , posLm)).css("top","26.7%");
                      $(searchCss(51,posLm)).remove();
                      var result = parseInt(egale) + parseInt(egale3);
                      $(searchCss(26,posLm)).text(result);
                      positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                      positions.push(["51.7%",posL+"%"]);
                      positions.push(["76.7%",posL+"%"]);
                    }
                    else{
                    $(div).css("top","1.7%");
                    $(searchCss(51,posLm)).css("top","26.7%");
                    $(searchCss(76,posLm)).css("top","51.7%");
                    positions.splice(include(positions,["1.7%",posL+"%"]), 1);
                    positions.push(["76.7%",posL+"%"]);
                  }
                }
                }
              }
              else if(include(positions,["26.7%",posL+"%"]) && posT != 1.7 ||  include(positions,["26.7%",posL+"%"]) == 0 && posT != 1.7){
                if(leftE(positions,posL+"%") == 2){
                  var egale = $(searchCss(1,posLm )).text();
                  var egale2 = $(searchCss(posTm , posLm)).text();
                  if(egale == egale2){
                    $(searchCss(posTm , posLm)).remove();
                    var result = parseInt(egale) + parseInt(egale2);
                    $(searchCss(1,posLm)).text(result);
                    positions.push([posT+"%", posL+"%"]);
                  }
                  else{
                  positions.push([posT+"%",posL+"%"]);
                  $(div).css("top","26.7%");
                  positions.splice(include(positions,["26.7%",posL+"%"]), 1);
                }
              }
                else if (leftE(positions,posL+"%")== 1) {
                  if(posTm == 51){
                    var egale = $(searchCss(51,posLm)).text();
                    var egale2 = $(searchCss(1,posLm)).text();
                    var egale3 = $(searchCss(76,posLm)).text();
                    if(egale == egale2){
                      $(searchCss(51,posLm)).remove();
                      $(searchCss(76,posLm)).css("top","26.7%");
                      var result = parseInt(egale) + parseInt(egale2);
                      $(searchCss( 1 , posLm)).text(result);
                      positions.splice(include(positions,["26.7%",posL+"%"]), 1);
                      positions.push(["51.7%",posL+"%"]);
                      positions.push(["76.7%",posL+"%"]);
                    }
                    else if(egale == egale3){
                      $(div).css("top","26.7%");
                      $(searchCss(76,posLm )).remove();
                      var result = parseInt(egale) + parseInt(egale3);
                      $(searchCss(26,posLm)).text(result);
                      positions.splice(include(positions,["26.7%",posL+"%"]), 1);
                      positions.push(["51.7%",posL+"%"]);
                      positions.push(["76.7%",posL+"%"]);
                    }
                    else{
                    $(div).css("top","26.7%");
                    $(searchCss(76,posLm)).css("top","51.7%");
                    positions.splice(include(positions,["26.7%",posL+"%"]), 1);
                    positions.push(["76.7%",posL+"%"])
                  }
                }
                }
              }
              else if(include(positions,["51.7%",posL+"%"]) && posT != 26.7 && posT != 1.7 || include(positions,["51.7%",posL+"%"]) == 0 && posT != 26.7 && posT != 1.7 ){
                var egale = $(searchCss(26 ,posLm)).text();
                var egale2 = $(searchCss(1 ,posLm)).text();
                var egale3 = $(searchCss(76 , posLm)).text();
                 if(egale == egale2){
                  $(div).css("top","26.7%");
                  $(searchCss(26, posLm)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(1, posLm)).text(result);
                  positions.push(["76.7%",posL+"%"]);
                }
                else if(egale == egale3){
                  $(searchCss(76,posLm)).remove();
                  var result = parseInt(egale) + parseInt(egale3);
                  $(searchCss(26,posLm)).text(result);
                  positions.push(["76.7%",posL+"%"]);
                }
                else{
                 positions.push([posT+"%" , posL+"%"]);
                $(div).css("top", "51.7%");
                positions.splice(include(positions,["51.7%",posL+"%"]), 1);
              }
            }
            else if (include(positions,["76.7%",posL+"%"]) && include(positions,["51.7%",posL+"%"]) == undefined || include(positions,["76.7%",posL+"%"]) == 0 && include(positions,["51.7%",posL+"%"]) == undefined ) {
            if(leftE(positions,posL+"%") == 1){
              arr.push(posLm+1);
              var egale = $(searchCss(26,posLm)).text();
              var egale2 = $(searchCss(51,posLm)).text();
              var egale3 = $(searchCss(1,posLm)).text();
              if(egale == egale3){
                if(arr.includes(posLm+3) != true &&  arr.includes(posLm+4) != true){
                $(searchCss(26,posLm)).remove();
                $(searchCss(51,posLm)).css("top","26.7%");
                var result = parseInt(egale) + parseInt(egale3);
                $(searchCss(1,posLm)).text(result);
                positions.push(["51.7%",posL+"%"]);
              }
            }
              else if (egale == egale2) {
                if(arr.includes(posLm+4) != true && arr.includes(posLm+5) != true ){
                $(searchCss(51 , posLm)).remove();
                var result = parseInt(egale) + parseInt(egale2);
                $(searchCss(26,posLm)).text(result);
                positions.push(["51.7%" , posL+"%"]);
              }
            }
            }
            }
            else if(include(positions,["51.7%" , posL+"%"]) || include(positions,["51.7%" , posL+"%"]) == 0){
              if(arr.includes(posLm+1) != true && arr.includes(posLm+2) != true){
              if(leftE(positions,posL+"%") == 2){
                var egale = $(searchCss(1 , posLm)).text();
                var egale2 = $(searchCss(26, posLm)).text();
                if(egale == egale2){
                  $(searchCss(26 , posLm)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(1,posLm)).text(result);
                  positions.push(["26.7%" , posL+"%"]);
                }
              }
            }
            }
            else if (leftE(positions,posL+"%") == 0) {
              var egale = $(searchCss(1, posLm)).text();
              var egale2 = $(searchCss(26, posLm)).text();
              var egale3 = $(searchCss(51, posLm)).text();
              var egale4 = $(searchCss(76, posLm)).text();
              if(egale == egale2 && egale3 == egale4){
                $(searchCss(26,posLm)).remove();
                $(searchCss(76, posLm)).remove();
                var result = parseInt(egale) + parseInt(egale2);
                var result2 = parseInt(egale3) + parseInt(egale4);
                $(searchCss(51 , posLm)).css("top","26.7%");
                $(searchCss(1 , posLm)).text(result);
                $(searchCss(26 , posLm)).text(result2);
                positions.push(["51.7%" , posL+"%"]);
                positions.push(["76.7%" , posL+"%"]);
                arr.push(posLm+2);
              }
              else if(egale == egale2){
                var result = parseInt(egale) + parseInt(egale2);
                $(searchCss(26 , posLm)).remove();
                $(searchCss(51 , posLm)).css("top","26.7%");
                $(searchCss(76 , posLm)).css("top","51.7%");
                positions.push(["76.7%" , posL+"%"]);
                $(searchCss(1 , posLm)).text(result);
                arr.push(posLm+3);
              }
              else if (egale2 == egale3) {
                var result = parseInt(egale2) + parseInt(egale3);
                $(searchCss(51 , posLm)).remove();
                $(searchCss(76 , posLm)).css("top","51.7%");
                positions.push(["76.7%" , posL+"%"]);
                $(searchCss(26 , posLm)).text(result);
                arr.push(posLm+4);
              }
              else if (egale3 == egale4) {
                var result = parseInt(egale3) + parseInt(egale4);
                $(searchCss(76 , posLm)).remove();
                positions.push(["76.7%" , posL+"%"]);
                $(searchCss(51 , posLm)).text(result);
                arr.push(posLm+5);
              }
            }
            }
          }
        }
        }
        square1.innerHTML += "<div class='dives' id=number"+ ++i +">2</div>";
          var classNumber = i;
        $("#number"+classNumber).css("font-size","40px");
        $("#number"+classNumber).css("border-radius","10px");
        $("#number"+classNumber).css("position","absolute");
        $("#number"+classNumber).css("padding","30px");
        $("#number"+classNumber).css("background-color","lightgrey");
        if(positions.length == 0){
          document.getElementsByClassName("squareM")[0].innerHTML = "<p class='text-center'>you lost</p>";
          $(".dives").hide();
          return false;
        }
        $("#number"+classNumber).css("top",positions[child3][0]);
        $("#number"+classNumber).css("left",positions[child3][1]);
        $("#number"+classNumber).fadeIn(0);
         positions.splice(child3, 1);
   }

   if(text == "("){
      var arr = [];
     for (var g = 0; g <= i; g++) {
       var div = document.getElementById("number"+g);
       if(div != null){
       var topP = window.getComputedStyle(div).getPropertyValue('top');
       var topN =  topP.substr(0 , topP.length - 2) / 560;
       var topMn = Math.floor(topN * 100);
       var leftP = window.getComputedStyle(div).getPropertyValue('left');
       var leftN =  leftP.substr(0 , leftP.length - 2) / 571.5;
       var leftMn = Math.floor(leftN * 100);
         for (var u = 0; u <= 15; u++) {
          var posT = positions2[u][0].substr(0 , positions2[u][0].length - 1);
          var posTm = Math.floor(posT);
          var posL = positions2[u][1].substr(0 , positions2[u][1].length - 1);
          var posLm = Math.floor(posL);
            if(posLm == leftMn && posTm == topMn){
              if(include(positions,["76.7%", posL+"%"]) || include(positions,["76.7%", posL+"%"]) == 0){
                if(leftE(positions,posL+"%") == 3){
                  positions.push([posT+"%",posL+"%"]);
                  $(div).css("top","76.7%");
                  positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                }
                else if (leftE(positions,posL+"%") == 2) {
                  if(include(positions,["26.7%",posL+"%"]) == undefined && include(positions,["51.7%",posL+"%"]) == undefined  ){
                    if(posTm == 51){
                      var egale = $(searchCss(51,posLm)).text();
                      var egale2 = $(searchCss(26,posLm)).text();
                      if(egale == egale2){
                        $(div).css("top","76.7%");
                        $(searchCss(26,posLm)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                        positions.push(["51.7%",posL+"%"]);
                        positions.push(["26.7%",posL+"%"]);
                      }
                      else{
                      $(div).css("top","76.7%");
                      $(searchCss(26,posLm)).css("top","51.7%");
                      positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                      positions.push(["26.7%",posL+"%"]);
                    }
                  }
                  }
                  if(include(positions,["51.7%",posL+"%"]) == undefined && include(positions,["1.7%",posL+"%"]) == undefined  ){
                    if(posTm == 51){
                      var egale = $(searchCss(1 , posLm)).text();
                      var egale2 = $(searchCss(51 , posLm)).text();
                      if(egale == egale2){
                        $(div).css("top","76.7%");
                        $(searchCss(1,posLm)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                        positions.push(["51.7%",posL+"%"]);
                        positions.push(["1.7%",posL+"%"]);
                      }
                      else{
                      $(div).css("top","76.7%");
                      $(searchCss(1,posLm)).css("top","51.7%");
                      positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                      positions.push(["1.7%",posL+"%"]);
                    }
                  }
                  }
                  if(include(positions,["26.7%",posL+"%"]) == undefined && include(positions,["1.7%",posL+"%"]) == undefined  ){
                    if(posTm == 26){
                      var egale = $(searchCss(1 , posLm )).text();
                      var egale2 = $(searchCss(26 , posLm )).text();
                      if(egale == egale2){
                        $(div).css("top","76.7%");
                        $(searchCss(1,posLm)).remove();
                        var result = parseInt(egale) + parseInt(egale2);
                        $(div).text(result);
                        positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                        positions.push(["26.7%",posL+"%"]);
                        positions.push(["1.7%",posL+"%"]);
                      }
                      else{
                      $(div).css("top","76.7%");
                      $(searchCss(1,posLm)).css("top","51.7%");
                      positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                      positions.splice(include(positions,["51.7%",posL+"%"]), 1);
                      positions.push(["1.7%",posL+"%"]);
                      positions.push(["26.7%",posL+"%"]);
                    }
                  }
                  }
                }
                else if (leftE(positions,posL+"%") == 1) {
                  if(posTm == 51){
                    var egale = $(searchCss(26 , posLm)).text();
                    var egale2 = $(searchCss(51, posLm)).text();
                    var egale3 = $(searchCss(1, posLm)).text();
                    if(egale == egale2){
                      $(div).css("top","76.7%");
                      $(searchCss(26,posLm)).css("top","51.7%");
                      $(searchCss(1,posLm)).remove();
                      var result = parseInt(egale) + parseInt(egale2);
                      $(div).text(result);
                      positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                      positions.push(["26.7%",posL+"%"]);
                      positions.push(["1.7%",posL+"%"]);
                    }
                    else if(egale == egale3){
                      $(div).css("top","76.7%");
                      $(searchCss(1 , posLm)).css("top","51.7%");
                      $(searchCss(26,posLm)).remove();
                      var result = parseInt(egale) + parseInt(egale3);
                      $(searchCss(51,posLm)).text(result);
                      positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                      positions.push(["26.7%",posL+"%"]);
                      positions.push(["1.7%",posL+"%"]);
                    }
                    else{
                    $(div).css("top","76.7%");
                    $(searchCss(26,posLm)).css("top","51.7%");
                    $(searchCss(1,posLm)).css("top","26.7%");
                    positions.splice(include(positions,["76.7%",posL+"%"]), 1);
                    positions.push(["1.7%",posL+"%"]);
                  }
                }
                }
              }
              else if(include(positions,["51.7%",posL+"%"]) && posT != 76.7 ||  include(positions,["51.7%",posL+"%"]) == 0 && posT != 76.7){
                if(leftE(positions,posL+"%") == 2){
                  var egale = $(searchCss(76,posLm )).text();
                  var egale2 = $(searchCss(posTm , posLm)).text();
                  if(egale == egale2){
                    $(searchCss(posTm , posLm)).remove();
                    var result = parseInt(egale) + parseInt(egale2);
                    $(searchCss(76,posLm)).text(result);
                    positions.push([posT+"%", posL+"%"]);
                  }
                  else{
                  positions.push([posT+"%",posL+"%"]);
                  $(div).css("top","51.7%");
                  positions.splice(include(positions,["51.7%",posL+"%"]), 1);
                }
              }
                else if (leftE(positions,posL+"%")== 1) {
                  if(posTm == 26){
                    var egale = $(searchCss(26,posLm)).text();
                    var egale2 = $(searchCss(76,posLm)).text();
                    var egale3 = $(searchCss(1,posLm)).text();
                    if(egale == egale2){
                      $(searchCss(26,posLm)).remove();
                      $(searchCss(1,posLm)).css("top","51.7%");
                      var result = parseInt(egale) + parseInt(egale2);
                      $(searchCss( 76 , posLm)).text(result);
                      positions.splice(include(positions,["51.7%",posL+"%"]), 1);
                      positions.push(["26.7%",posL+"%"]);
                      positions.push(["1.7%",posL+"%"]);
                    }
                    else if(egale == egale3){
                      $(div).css("top","51.7%");
                      $(searchCss(1,posLm )).remove();
                      var result = parseInt(egale) + parseInt(egale3);
                      $(searchCss(1,posLm)).text(result);
                      positions.splice(include(positions,["51.7%",posL+"%"]), 1);
                      positions.push(["26.7%",posL+"%"]);
                      positions.push(["1.7%",posL+"%"]);
                    }
                    else{
                    $(div).css("top","51.7%");
                    $(searchCss(1,posLm)).css("top","26.7%");
                    positions.splice(include(positions,["51.7%",posL+"%"]), 1);
                    positions.push(["1.7%",posL+"%"])
                  }
                }
                }
              }
              else if(include(positions,["26.7%",posL+"%"]) && posT != 76.7 && posT != 51.7 || include(positions,["26.7%",posL+"%"]) == 0 && posT != 76.7 && posT != 51.7 ){
                var egale = $(searchCss(51 , posLm)).text();
                var egale2 = $(searchCss(76 , posLm)).text();
                var egale3 = $(searchCss(1 , posLm)).text();
                 if(egale == egale2){
                  $(div).css("top","51.7%");
                  $(searchCss(51, posLm)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(76, posLm)).text(result);
                  positions.push(["1.7%",posL+"%"]);
                }
                else if(egale == egale3){
                  $(searchCss(1,posLm)).remove();
                  var result = parseInt(egale) + parseInt(egale3);
                  $(searchCss(51,posLm)).text(result);
                  positions.push(["1.7%",posL+"%"]);
                }
                else{
                positions.push([posT+"%" , posL+"%"]);
               $(div).css("top", "26.7%");
               positions.splice(include(positions,["26.7%",posL+"%"]), 1);
              }
            }
            else if (include(positions,["1.7%",posL+"%"]) && include(positions,["26.7%",posL+"%"]) == undefined || include(positions,["1.7%",posL+"%"]) == 0 && include(positions,["26.7%",posL+"%"]) == undefined ) {
            if(leftE(positions,posL+"%") == 1){
              arr.push(posLm+1);
              var egale = $(searchCss(51,posLm)).text();
              var egale2 = $(searchCss(26,posLm)).text();
              var egale3 = $(searchCss(76,posLm)).text();
              if(egale == egale3){
                if(arr.includes(posLm+3) != true &&  arr.includes(posLm+4) != true){
                $(searchCss(51,posLm)).remove();
                $(searchCss(26,posLm)).css("top","51.7%");
                var result = parseInt(egale) + parseInt(egale3);
                $(searchCss(76,posLm)).text(result);
                positions.push(["26.7%",posL+"%"]);
              }
            }
              else if (egale == egale2) {
                if(arr.includes(posLm+4) != true && arr.includes(posLm+5) != true ){
                $(searchCss(26 , posLm)).remove();
                var result = parseInt(egale) + parseInt(egale2);
                $(searchCss(51,posLm)).text(result);
                positions.push(["26.7%" , posL+"%"]);
              }
            }
            }
            }
            else if(include(positions,["26.7%" , posL+"%"]) || include(positions,["26.7%" , posL+"%"]) == 0){
              if(arr.includes(posLm+1) != true && arr.includes(posLm+2) != true){
              if(leftE(positions,posL+"%") == 2){
                var egale = $(searchCss(76 , posLm)).text();
                var egale2 = $(searchCss(51, posLm)).text();
                if(egale == egale2){
                  $(searchCss(51 , posLm)).remove();
                  var result = parseInt(egale) + parseInt(egale2);
                  $(searchCss(76,posLm)).text(result);
                  positions.push(["51.7%" , posL+"%"]);
                }
              }
            }
            }
            else if (leftE(positions,posL+"%") == 0) {
              var egale = $(searchCss(76, posLm)).text();
              var egale2 = $(searchCss(51, posLm)).text();
              var egale3 = $(searchCss(26, posLm)).text();
              var egale4 = $(searchCss(1, posLm)).text();
              if(egale == egale2 && egale3 == egale4){
                $(searchCss(51,posLm)).remove();
                $(searchCss(1, posLm)).remove();
                var result = parseInt(egale) + parseInt(egale2);
                var result2 = parseInt(egale3) + parseInt(egale4);
                $(searchCss(26 , posLm)).css("top","51.7%");
                $(searchCss(76 , posLm)).text(result);
                $(searchCss(51 , posLm)).text(result2);
                positions.push(["26.7%" , posL+"%"]);
                positions.push(["1.7%" , posL+"%"]);
                arr.push(posLm+2);
              }
              else if(egale == egale2){
                var result = parseInt(egale) + parseInt(egale2);
                $(searchCss(51 , posLm)).remove();
                $(searchCss(26 , posLm)).css("top","51.7%");
                $(searchCss(1 , posLm)).css("top","26.7%");
                positions.push(["1.7%" , posL+"%"]);
                $(searchCss(76 , posLm)).text(result);
                arr.push(posLm+3);
              }
              else if (egale2 == egale3) {
                var result = parseInt(egale2) + parseInt(egale3);
                $(searchCss(26 , posLm)).remove();
                $(searchCss(1 , posLm)).css("top","26.7%");
                positions.push(["1.7%" , posL+"%"]);
                $(searchCss(51 , posLm)).text(result);
                arr.push(posLm+4);
              }
              else if (egale3 == egale4) {
                var result = parseInt(egale3) + parseInt(egale4);
                $(searchCss(1 , posLm)).remove();
                positions.push(["1.7%" , posL+"%"]);
                $(searchCss(26 , posLm)).text(result);
                arr.push(posLm+5);
              }
            }
            }
          }
        }
        }
        square1.innerHTML += "<div class='dives' id=number"+ ++i +">2</div>";
          var classNumber = i;
        $("#number"+classNumber).css("font-size","40px");
        $("#number"+classNumber).css("border-radius","10px");
        $("#number"+classNumber).css("position","absolute");
        $("#number"+classNumber).css("padding","30px");
        $("#number"+classNumber).css("background-color","lightgrey");
        if(positions.length == 0){
          document.getElementsByClassName("squareM")[0].innerHTML = "<p class='text-center'>you lost</p>";
          $(".dives").hide();
          return false;
        }
        $("#number"+classNumber).css("top",positions[child3][0]);
        $("#number"+classNumber).css("left",positions[child3][1]);
        $("#number"+classNumber).fadeIn(0);
         positions.splice(child3, 1);
   }

for (var t = 1; t <= 76   ; t += 25) {
  for (var l = 4; l <= 79; l += 25) {
    if($(searchCss(t , l)).html() != undefined){
    if($(searchCss(t , l)).html().length == 2) {
      $(searchCss(t , l)).css("padding", "30px 20px");
    }
    if($(searchCss(t , l)).html().length == 3) {
      $(searchCss(t , l)).css("padding", "30px 5px");
    }
    if($(searchCss(t , l)).html().length == 4) {
      $(searchCss(t , l)).css("padding", "42px 10px");
      $(searchCss(t , l)).css("font-size", "25px");
      }
    }
  }
}
var result = 0;
for (var t = 1; t <= 76   ; t += 25) {
  for (var l = 4; l <= 79; l += 25) {
    if($(searchCss(t , l)).html() != undefined){
      switch (parseInt($(searchCss(t , l)).html())) {
        case 4:
          result += 4;
          $(searchCss(t , l)).css("background-color","#FFEBCD");
          break;
        case 8:
          result += 16;
          $(searchCss(t , l)).css("background-color","#FF7F50");
          break;
        case 16:
          result += 32;
          $(searchCss(t , l)).css("background-color","#D2691E");
          break;
        case 32:
          result += 64;
         $(searchCss(t , l)).css("background-color","#A52A2A");
          break;
        case 64:
          result += 128;
          $(searchCss(t , l)).css("background-color","#DC143C");
          break;
        case 128:
          result += 256;
          $(searchCss(t , l)).css("background-color","#FF8C00");
          break;
        case 256:
          result += 512;
          $(searchCss(t , l)).css("background-color","#8B0000");
          break;
        case 512:
          result += 1024;
          $(searchCss(t , l)).css("background-color","#B22222");
          break;
        case 1024:
          result += 2048;
          $(searchCss(t , l)).css("background-color","#FFD700");
          break;
        case 2048:
        document.getElementsByClassName("squareM")[0].innerHTML = "<p class='text-center'>you lost</p>";
          $(".dives").hide();
          break;
        default:
      }
    }
  }
}
document.getElementById("score").innerHTML = "score: "+result;
    }
  });
}
