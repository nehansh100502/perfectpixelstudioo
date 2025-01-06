/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
      // Toggle function for responsive menu
      function toggleNav() {
        var nav = document.getElementById("myTopnav");
        if (nav.className === "topnav") {
          nav.className += " responsive";
        } else {
          nav.className = "topnav";
        }
      }
  
    
  
