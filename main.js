//Function to only read this script when the entire html file has been loaded
$(document).ready(function(){

    //variables for the if staments under these variables
    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("?") + 1);

    //scrolls to the part of the page you clicked in the menu
    if (page_id === "story") {
        $("html, body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        }, 1000);
    } else if (page_id === "mole") {
        $("html, body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        }, 1000);
    } else if (page_id === "faq") {
        $("html, body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        }, 1000);
    }

    //function to scroll back to the top
    $("#footer_text-top, #footer_text-bottom").click(function(){
        $("html, body").animate({
            scrollTop: $("html, body").offset().top
        }, 1000);
    });

    //Function the show and hide the navbar thingy
    $("#menu_button").click(function(){
        $(".menu_container").slideToggle(1000);
    });

    //Functions to show the answers
    $(".faq_title-1").click(function(){
        $(".faq_anwser-1").slideToggle(1000);
    });

    $(".faq_title-2").click(function(){
        $(".faq_anwser-2").slideToggle(1000);
    });

    $(".faq_title-3").click(function(){
        $(".faq_anwser-3").slideToggle(1000);
    });

    $(".faq_title-4").click(function(){
        $(".faq_anwser-4").slideToggle(1000);
    });

  });