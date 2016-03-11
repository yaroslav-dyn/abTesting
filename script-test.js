// ==UserScript==
// @name Help Scout intake form Testing.Agency assessment
// @namespace http://helpscout.net
// @version 0.1
// @description Testing.Agency assessment
// @author Yaroslav Kyrilin
// @match http://www.helpscout.net
// @grant none

$("head").append("<style> .modal_form {width: 300px;height: 300px;border-radius: 5px;border: 3px #000 solid;background: #fff;position: fixed;top: 45%;left: 50%;margin-top: -150px;margin-left: -150px;display: none;opacity: 0;z-index: 5;padding: 20px 10px;overflow: auto} .modal_close {width: 21px;height: 21px;position: absolute;top: 10px;right: 10px;cursor: pointer;display: block} .overlay {z-index:3; position:fixed; background-color:#000; opacity:0.4;width:100%; height:100%; top:0; left:0;cursor:pointer;display:none;}</style>");

//fills a company name textfield validation
$("input[type=text]").blur(function () {
    if ($(this).val() != "") {
        $(this).css({background: "#c1dcbd"});
    }
    else {
        if ($(this).val() == "") {
            $(this).css({background: "#f1d9d9"});
        }
    }
});
//field password
var inEl = $("<ul style='display: none'><li><span>One lowercase character</span></li><li><span>One uppercase character</span></li><li><span>One number</span></ul><ul></li><li><span>One special character</span></li><li><span>Eight characters minimum</span></li></ul>");
//on focus
$("#password").focus(function () {
    $(this).after(inEl.slideDown(400));
    $(".password-meter ul").css({"float": "left", "margin-right": "25px"});
    $(".password-meter ul li").css({"color": "#eac366", "font-size": "22px"});
    $(".password-meter ul li span").css({"color": "#2b2b2b", "font-size": "15px", "margin-left": "-8px"});
});
//on blur
$("#password").blur(function () {
    $(this).after(inEl.hide(400));
});
//validation field First name only key press(a-z)
$('#fname').on('keypress', function () {
    var that = this;
    setTimeout(function () {
        var res = /[^a-zA-Z]/.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
});
//validate field Email
$('#email').blur(function () {
    if ($(this).val() != '') {
        var validEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (validEmail.exec($(this).val())) {
            $(this).css({background: "#c1dcbd"});
        }
    }
    else {
        $(this).css({background: "#f1d9d9"});
    }
});
//Modal
$("body").append("<div id='modal_form' class='modal_form'><span id='modal_close' class='modal_close'>X</span></div><div id='overlay' class='overlay'></div>"
    + "<div id='modal_form_privacy' class='modal_form'><span id='modal_close_privacy' class='modal_close'>X</span></div><div id='overlay_privacy' class='overlay'></div>");
var privacyText = $("<div class='container-fluid'><h1>Privacy Policy</h1> <h2>Our commitment to protecting your personal information</h2> </div><!--container--> </section><!--hero--><div class='container-fluid'> <div id='fine-print' class='row'><div class='col-md-10 col-md-offset-1 col-sm-12'><p><em>Last revised and effective as of: January 12, 2016</em></p> <p>Your privacy is extremely important to us. To better protect you, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on every page of this website.</p> <p>This Privacy Policy relates to information collected by Help Scout Inc. (referred to in this Privacy Policy as 'Help Scout' 'we' or 'us' or 'our') through your use of the Help Scout website and the Help Scout Services, features, and information available on the Help Scout website (which are collectively referred to in this Privacy Policy as the 'Help Scout Service'). This Privacy Policy is incorporated into, a part of, and governed by our <a href=''>Terms of Service</a>.</p><p>By using the Help Scout Service, you are accepting the terms of this Privacy Policy. If you do not agree to this Privacy Policy, you may not use the Help Scout Service.</p> <p>As used in this Privacy Policy, the terms 'using' and 'processing' information include using cookies on a computer, subjecting the information to statistical or other analysis and using or handling information in any way, including, but not limited to collecting, storing, evaluating, modifying, deleting, using, combining, disclosing and transferring information within our organization.</p> <ul id='toc'><li><a>What information does Help Scout collect?</a></li> <li><a href=''>Where and when is information collected?</a></li> <li><a href=''>When does Help Scout use information from third parties?</a></li> <li><a href=''>Does Help Scout collect information from children under 13 years of age?</a></li> <li><a>What does Help Scout do with the information it collects?</a></li><li><a href=''>When does Help Scout disclose information to third parties?</a></li><li><a href=''>Does this Privacy Policy apply when I link to other websites or services?</a></li><li><a href=''>Is the information collected through the Help Scout Service secure?</a></li><li><a href=''>Could my information be transferred to other countries?</a></li><li><a href=''>Is Help Scout Safe Harbor Compliant?</a></li><li><a href=''>What choices do I have regarding the collection, disclosure and distribution of personally identifiable information?</a></li><li><a href=''>Can I update or correct my personally identifiable information?</a></li><li><a>How will I know if there are any changes to this Privacy Policy?</a></li><li><a href=''>Whom do I contact if I have any privacy questions?</a></li>");
var terms = $("<div class='container-fluid'> <h1>Security</h1> <h2>What we're doing to keep your data and our infrastructure safe</h2> </div><!--container--> </section><!--hero--> <div class='container-fluid'> <div id='fine-print' class='row'> <div class='col-md-10 col-md-offset-1 col-sm-12'><p>Keeping your company's data secure is a top priority at Help Scout. Our goal is to provide a secure environment, while also being mindful of application performance and the overall user experience.</p> <p>With the exception of off-site backup and redundancy infrastructure, Help Scout is hosted on Amazon Web Services (AWS), a highly scalable cloud computing platform with end-to-end security and privacy features built in. Our team takes additional pro-active measures to maintain a secure infrastructure and application environment.</p> <p>For additional, more specific details regarding AWS security, please refer to <a href=''>https://aws.amazon.com/security/</a>. We don't publicize exactly what features, services and data center regions/zones are used at Help Scout for security reasons, but we are able to provide a brief overview of our approach to securing your company's data.</p>  <h3>Data Center Security</h3> <p>AWS maintains an impressive list of reports, certifications and independent assessments to ensure complete and ongoing state-of-the-art data center security. They have many years of experience in designing, constructing, and operating large-scale data centers.</p>  <p>AWS infrastructure is housed in Amazon-controlled data centers throughout the world. Only those within Amazon who have a legitimate business need to have such information know the actual location of these data centers, and the data centers themselves are secured with a variety of physical controls to prevent unauthorized access. It is safe to say Amazon is much better at physical security than we are capable of being, so we leave it to them.</p>  <h3>Infrastructure Security</h3> <p>Help Scout infrastructure is hosted in a fully redundant, secured VPN environment, with access restricted to operations support staff only. This allows us to leverage complete firewall protection, private IP addresses and other security features.</p>  <h3>Application Security</h3> <p>All Help Scout web application communications are encrypted over 256 bit SSL, which cannot be viewed by a third party and is the same level of encryption used by banks and financial institutions.</p>  <p>In some cases, when viewing a conversation with a non-HTTPS embedded image, your browser may popup a security error. Please know that the <em>image</em> is the only insecure asset on the page, everything else remains securely encrypted. For this reason, embedded images are opt-in (must click to enable) in Help Scout.</p>  <p>Help Scout maintains ongoing Level 1 PCI compliance, adhering to stringent industry standards for storing, processing and transmitting credit card information online. In addition to encrypting customer payment information, the following types of information are also encrypted:</p>");

//first link in modal
$("#agree a:first-child").click(function (event) {
    event.preventDefault(event);
    $("#modal_form").append(privacyText);

    $('#overlay').fadeIn(400,
        function () {
            $('#modal_form').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
        });
    return false;
});
//close modal
$('#modal_close, #overlay').click(function () {
    $('#modal_form').animate({opacity: 0, top: '45%'}, 200,
        function () {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        }
    );
});

//second link in modal
$("#agree a:nth-of-type(2)").click(function (event) {
    event.preventDefault(event);
    $("#modal_form_privacy").append(terms);

    $('#overlay_privacy').fadeIn(400,
        function () {
            $('#modal_form_privacy')
                .css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 200);
        });
    return false;
});
$('#modal_close_privacy, #overlay_privacy').click(function () {
    $('#modal_form_privacy').animate({opacity: 0, top: '45%'}, 200,
        function () {
            $(this).css('display', 'none');
            $('#overlay_privacy').fadeOut(400);
        }
    );
});
// ==/UserScript==