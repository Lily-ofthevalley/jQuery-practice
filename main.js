//Function to only read this script when the entire html file has been loaded
$(document).ready(function(){

    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);

    //Function the show and hide the navbar thingy
    $("#menu_button").click(function(){
        $(".menu_container").slideToggle(1000);
    });

  });