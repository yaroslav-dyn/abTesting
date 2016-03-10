// ==UserScript==
// @name Help Scout intake form Testing.Agency assessment
// @namespace http://helpscout.net
// @version 0.1
// @description Testing.Agency assessment
// @author Yaroslav Kyrilin
// @match http://www.helpscout.net
// @grant none

$("head").append("<style>body{background: blue}</style>");

//fills a company name textfield validation
$("input[type=text]").blur(function(){
   if($(this).val()!=""){
       $(this).css({background: "#c1dcbd"});
   }
    else{
        if($(this).val()==""){
            $(this).css({background: "#f1d9d9"});
        }
   }
});
//field password
var inEl = $("<ul style='display: none'><li><span>One lowercase character</span></li><li><span>One uppercase character</span></li><li><span>One number</span></li><li><span>One special character</span></li><li><span>Eight characters minimum</span></li></ul>");
   //on focus
    $("#password").focus(function(){
            $(this).after(inEl.slideDown(400));
            $(".password-meter ul li").css({"color":"#eac366", "font-size": "22px"});
            $(".password-meter ul li span").css({"color":"#2b2b2b","font-size":"15px","margin-left":"-8px"});
    });
    //on blur
    $("#password").blur(function(){
        $(this).after(inEl.hide(400));
    });
//validation field First name only(a-z)
$('#fname').on('keypress', function() {
    var that = this;
    setTimeout(function() {
        var res = /[^a-zA-Z]/.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
});
//validate field Email
$('#email').blur(function() {
    if($(this).val() != '') {
        var validEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(validEmail.exec($(this).val())){
            $(this).css({background: "#c1dcbd"});
        }
    }
    else {
        $(this).css({background: "#f1d9d9"});
    }
});
//Modal

$("#agree a:first-child").attr("href","https://www.helpscout.net/company/terms-of-service?iframe").attr("target","_parent");

// ==/UserScript==