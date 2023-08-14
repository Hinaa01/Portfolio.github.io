


$(document).ready(function(){

    $(".navlogoNm, .navlogosq").click(function(){

        $('html,body').animate({
            scrollTop:$('#page1div').offset().top},'slow');
    
    });

    $("#navlinkabout").click(function(){

        $('html,body').animate({
            scrollTop:$('#page2div').offset().top},'slow');
    
    });

    $("#navlinkskills").click(function(){

        $('html,body').animate({
            scrollTop:$('#page4div').offset().top},'slow');
    
    });

    $("#navlinkproject").click(function(){

        $('html,body').animate({
            scrollTop:$('#page5div').offset().top},'slow');
    
    });

    $(".navcontactlink").click(function(){

        $('html,body').animate({
            scrollTop:$('#page6div').offset().top},'slow');
    
    });


    $("#navlinkqualification").click(function(){

        $('html,body').animate({
            scrollTop:$('#page3div').offset().top},'slow');
    
    });


    $("#navlinkservice").click(function(){

        $('html,body').animate({
            scrollTop:$('#page5-2Div').offset().top},'slow');
    
    });

});