$(document).ready(function(){
    c1();
    c3();
    c4();
    c5();
    c6();
    c7();
    c8();
    c9();
    c10();
})

let height = 550;
let height7 = 558;
let width = 1266;

//circle 1
function c1(){

 
    var div = $(".circle ,.color1");
     div.animate({
         left: '1265px'
 
     })
     .animate({top:'557px'},1000)
     .animate({left:'0'},2000)
     .animate({top:'0'},2000,function(){
         c1()
     })
 }
 //circle 2
 function c3(){

     var div = $("#circle3");

     div.animate({
        // right: '1258px'
        right: '1258px'
 
     },2000)
     .animate({top:'557px'},1000)
     .animate({right:'0'},2000)
     
     .animate({top:'0'},2000,function(){
         c3()
     })
   
 }
 //circle 3
 function c4(){

    var div = $("#circle4");
     div.animate({
         left: '1265px'
 
     },2000)
    // .animate({top:'557px'},1000)
    .animate({right:'0'})
      .animate({left:'0'},2000)
    
     .animate({top:'9'},function(){
         c4()
     })
 }
 //circle 4
 function c5(){
    var div = $("#circle5");
     div.animate({
         top: '0'
 
     })
     .animate({top:'557px'},1000)
     .animate({left:'0'},2000)
     .animate({top:'0'},2000,function(){
         c5()
     })
 }
 //circle 5
 function c6(){
    var div = $("#circle6");
    top1(div)
 }
 //function from top
 function top1(div) {
    
    div.animate({
        top: height + 'px',
        left : width + 'px'
    }, 1000, function() {
        b(div);
    })
 }

  //function from bottom
 function b(div) {
    div.animate({
        top:'0',
        left:'0'
    },1000,function(){
        top1(div);
    })

 }


 function c8(){
    var div = $("#circle8");
     div.animate({
         right  : '0'
 
     })
     .animate({left:'1265px'})
     .animate({right:'0'})
     .animate({left:'0'},function(){
         c8()
     })
 }


 
//function circle 7

function c7(){
    var div = $("#circle7");
    
    top7(div)
 }
 //function from top
 function top7(div) {
    
    div.animate({
        top: height + 'px',
        right : width + 'px'
    }, 1000, function() {
        b7(div);
    })
 }

  //function from bottom
 function b7(div) {
    div.animate({
        top:'0',
        right:'0'
     
    },1000,function(){
        top7(div);
    })

 }

 //circle 9


 function c9(){
    var div = $("#circle9");
    div.css('top', '550px');
    top9(div)
 }
 //function from top
 function top9(div) {
    
    div.animate({
        top: '0',
        right : '0'
        
    }, 1000, function() {
        b9(div);
    })
 }

  //function from bottom
 function b9(div) {
    div.animate({
        top:'550px',  
        right:'1270px'
    },1000,function(){
        top9(div);
    })

 }


 //circle 10
 
 function c10(){
    var div = $("#circle10");
    div.css('top', '550px');
    top10(div)
 }
 //function from top
 function top10(div) {
    
    div.animate({
        top: '200px',
        right : '1000px',

        
    }, 1000, function() {
        b10(div);
    })
 }

  //function from bottom
 function b10(div) {
    div.animate({
        bottom:'0',
         
        // right:'1000px'
    },1000,function(){
        top10(div);
    })

 }





