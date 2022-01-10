function tooltipValue(value) {
    return new Intl.NumberFormat("en-IN", {
        currency: "INR",
    }).format(value);
}
//Rupee conversion and vice versa with slider
function formatRangeToInputBox(arg1, arg2) {
    //debugger;
    var monetary_value = $("#" + arg1).val();
    var i = new Intl.NumberFormat("en-IN", {
        currency: "INR",
    }).format(monetary_value);
    $("#" + arg2).val(i);
    //alert(i);
}
function formatInputBoxToRange(arg1, arg2) {
    //debugger;
    var monetary_value = $("#" + arg1).val();

    monetary_value = monetary_value.split(",").join("");
    var i = new Intl.NumberFormat("en-IN", {
        currency: "INR",
    }).format(monetary_value);
    //alert(monetary_value);
    $("#" + arg1).val(i);
    // $('#'+arg2).val(monetary_value);
    //alert(i);
    var slider = $("#" + arg2).data("ionRangeSlider");
    slider.update({
        from: monetary_value,
    });
}
function convertIntoMoneyFormat(arg)
{
    debugger;
    var monetary_value = $("#" + arg).val();
    
    monetary_value = monetary_value.split(",").join("");
    if(isNaN(monetary_value)){
        $("#" + arg).val('')
        return;
    }
    var i = new Intl.NumberFormat("en-IN", {
        currency: "INR",
    }).format(monetary_value);
    //alert(monetary_value);
    $("#" + arg).val(i);
}
function hideLeftMenu() {
    if(screen.availWidth < 600)
        $('.leftMenu').toggleClass('expand-nav');
}

// $(document).ready(function(){
        
// 		var uri_arr = document.location.pathname.split('/');
// 		var file_name = uri_arr[uri_arr.length-1];
// 		$('a.nav-link').each(function(){
// 			if($(this).attr('href') == file_name){
//                 $(this).siblings().removeClass('active');
// 				$(this).addClass('active');
				
// 			}
// 		});
		
// 	});

!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '355833938473241');
    fbq('track', 'PageView');


!function(_window, _document) {
    var OB_ADV_ID='007d8ca97d207beb9efe464faaf6e577cd';
    if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}
    var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.1';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);
obApi('track', 'PAGE_VIEW');


window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'AW-625009046');


window._tfa = window._tfa || [];
window._tfa.push({notify: 'event', name: 'page_view', id: 1318026});
!function (t, f, a, x) {
        if (!document.getElementById(x)) {
            t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
        }
}(document.createElement('script'),
document.getElementsByTagName('script')[0],
'//cdn.taboola.com/libtrc/unip/1318026/tfa.js',
'tb_tfa_script');


jQuery(document).ready(function() {
// click on next button
jQuery('.form-wizard-next-btn').click(function() {
var parentFieldset = jQuery(this).parents('.wizard-fieldset');
var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
var next = jQuery(this);
var nextWizardStep = true;
parentFieldset.find('.wizard-required').each(function(){
    var thisValue = jQuery(this).val();

    if( thisValue == "") {
        jQuery(this).siblings(".wizard-form-error").slideDown();
        nextWizardStep = false;
    }
    else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
    }
});
if( nextWizardStep) {
    next.parents('.wizard-fieldset').removeClass("show","400");
    currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
    next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
    jQuery(document).find('.wizard-fieldset').each(function(){
        if(jQuery(this).hasClass('show')){
            var formAtrr = jQuery(this).attr('data-tab-content');
            jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
                if(jQuery(this).attr('data-attr') == formAtrr){
                    jQuery(this).addClass('active');
                    var innerWidth = jQuery(this).innerWidth();
                    var position = jQuery(this).position();
                    jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
                }else{
                    jQuery(this).removeClass('active');
                }
            });
        }
    });
}
});
//click on previous button
jQuery('.form-wizard-previous-btn').click(function() {
var counter = parseInt(jQuery(".wizard-counter").text());;
var prev =jQuery(this);
var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
prev.parents('.wizard-fieldset').removeClass("show","400");
prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
jQuery(document).find('.wizard-fieldset').each(function(){
    if(jQuery(this).hasClass('show')){
        var formAtrr = jQuery(this).attr('data-tab-content');
        jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
            if(jQuery(this).attr('data-attr') == formAtrr){
                jQuery(this).addClass('active');
                var innerWidth = jQuery(this).innerWidth();
                var position = jQuery(this).position();
                jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
            }else{
                jQuery(this).removeClass('active');
            }
        });
    }
});
});
//click on form submit button
jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
var parentFieldset = jQuery(this).parents('.wizard-fieldset');
var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
parentFieldset.find('.wizard-required').each(function() {
    var thisValue = jQuery(this).val();
    if( thisValue == "" ) {
        jQuery(this).siblings(".wizard-form-error").slideDown();
    }
    else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
    }
});
});
// focus on input field check empty or not
jQuery(".form-control").on('focus', function(){
var tmpThis = jQuery(this).val();
if(tmpThis == '' ) {
    jQuery(this).parent().addClass("focus-input");
}
else if(tmpThis !='' ){
    jQuery(this).parent().addClass("focus-input");
}
}).on('blur', function(){
var tmpThis = jQuery(this).val();
if(tmpThis == '' ) {
    jQuery(this).parent().removeClass("focus-input");
    jQuery(this).siblings('.wizard-form-error').slideDown("3000");
}
else if(tmpThis !='' ){
    jQuery(this).parent().addClass("focus-input");
    jQuery(this).siblings('.wizard-form-error').slideUp("3000");
}
});
});

$(".dropdown-list").click(function(){
    $("this").slow();
});





 

$('input[type="file"]').change(function(){
    $(this).siblings('.js-value').text($(this).val());
});




var row=1;
$(document).on("click", "#add-row", function () {
    if(row < 5){
        row = row + 1;
var new_row = '<div class="form-wizard1"><div class="applicant-fileds"><i class="far fa-times-circle delete-row mobile-delete-row" aria-hidden="true"></i><div class="form-row section-padding"><div class="col-lg-1 col-md-2 col-sm-6 mobile-padding"><label for="title">Title </label><select class="form-control wizard-required" name="" id="title" style="display: block;"><option value="">&nbsp;</option><option value="mr">Mr.</option><option value="ms">Ms.</option><option value="mrs">Mrs.</option></select></div>' + '<div class="col-lg-3 col-md-5 col-sm-6 mobile-padding"><label for="firstname">First Name</label><input type="text" class="form-control wizard-required" id="firstname"></div>' + '<div class="col-lg-3 col-md-5 col-sm-6 mobile-padding"><label for="lastname">Last Name</label><input type="text" class="form-control wizard-required" id="lastname"></div>' + '<div class="col-lg-2 col-md-4 col-sm-6 mobile-padding"><label for="gender">Gender <sup>*</sup></label><select class="form-control wizard-required" name="" id="gender" style="display: block;"><option value="">&nbsp;</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select></div>' + '<div class="col-lg-2 col-md-5 col-sm-6 mobile-padding"><label for="dob">Date Of Birth</label><i class="fas fa-calendar-alt"></i><input type="date" class="form-control wizard-required" id="dob"></div>' + '<div class="col-md-1 col-sm-6"><i class="far fa-times-circle delete-row desktop-delete-row"></i></div></div></div></div>'
$('#root').append(new_row);
    }
    else{
        return false;
    }

});

// Remove criterion
$("#root").on('click', '.delete-row', function () {
    $(this).closest('.applicant-fileds').remove();
});



var row = 1;
var slider_no = 0;
$('body').on("click", "#add-plus-row", function () {
    if (row < 5) {
        row = row + 1;
        slider_no = slider_no + 1;
        var new_row = '<div class="applicant-fileds"><i class="far fa-times-circle delete-row mobile-delete-row" aria-hidden="true"></i><hr/><div class="row"><div class="col-lg-3 col-md-6 col-sm-12 mobile-padding"<label for="source">Source</label><select class="form-control" name="" id="source" style="display: block;"><option value="">&nbsp;</option><option value="salary">Salary</option><option value="self-employed">Self - Employed</option><option value="rental">Rental</option><option value="pension">Pension</option></select></div>'
            + '<div class="col-lg-3 col-md-6 col-sm-12 mobile-padding"><label for="mode ">Payment Mode</label><select class="form-control" name="" id="mode " style="display: block;"><option value="">&nbsp;</option><option value="cash">Cash</option><option value="bank-credit">Bank Credit</option><option value="cheque">Cheque</option></select></div>'
            + '<div class="col-lg-3 col-md-6 col-sm-12 mobile-padding"><label for="monthly-income">Monthly Income (In Rs.)</label><input type="text" class="form-control"  id="monthly-income'+row+'" onkeyup="convertIntoMoneyFormat(\'monthly-income'+row+'\')"/></div>' ;
        $('#income-details').append(new_row);
        addSliderDynamically(slider_no);

    }
    else {
        return false;
    }

});


function addSliderDynamically(args){
    $('#slider' + args).ionRangeSlider({
        min: 7000,
        max: 1000000,
        type: 'single',
        step: 1000,
        postfix: '',
        prettify: tooltipValue,
        hasGrid: true,
        onChange: function (data) {
            formatRangeToInputBox("slider" + args, "slider_input" + args);
        }
    })
}

// Remove criterion
$("#income-details").on('click', '.delete-row', function () {
    $(this).closest('.applicant-fileds').remove();
});


var id_proofs = 1;
$(document).on("click", "#add-row", function () {
    console.log($('#identification-proofs .applicant-fileds').length);
    if ($('#identification-proofs .applicant-fileds').length < 5) {
        var new_row = '<div class="applicant-fileds"><i class="far fa-times-circle delete-row mobile-delete-row"></i><div class="form-row"><div class="col-lg-4 col-md-12 col-sm-12 mobile-padding"><div class="row"><div class="col-lg-12"><label for="type">Type </label><select class="form-control wizard-required documents-file-label"><option value="0">&nbsp;</option><option value="1">Aadhar Card</option><option value="2">PAN Card</option><option value="3">Driving Licens</option><option value="4">Voter Id Card</option><option value="5">Passport</option><option value="6">Form-60</option></select></div><div class="col-lg-12 doc-number mobile-padding" style="display:none;"><label for="number">Number</label><input type="text" class="form-control wizard-required" /></div></div></div>' + '<div class="col-lg-3 col-md-6 col-sm-6 mobile-padding img-section"><div class="d-flex justify-content-center"><div class="image-upload-section"><label for="pan-card-file2" class="filupp"><img src="assets/img/aadhar-card-front.png" /><input type="file" class="form-control" name="attachment-file" value="1" id="pan-card-file1" /><i class="fas fa-edit delete-img"></i></label><label>Front View</label></div></div></div>' + '<div class="col-lg-3 col-md-6 col-sm-6 mobile-padding  img-section"><div class="d-flex justify-content-center"><div class="image-upload-section"><label for="pan-card-file2" class="filupp"><img src="assets/img/aadhar-card-back.png" /><input type="file" class="form-control" name="attachment-file" value="1" id="pan-card-file2" /><i class="fas fa-edit delete-img"></i></label><label>Back View</label></div></div></div>' + '<div class="col-lg-3 col-md-12 col-sm-12 mobile-padding doc-section"><div class="photograph"><div style="width: 100%;"><label for="file-address">File </label><label for="file-address" class="filupp"><i class="fas fa-paperclip"></i> <span class="filupp-file-name js-value"></span><input type="file" class="form-control" name="attachment-file" value="1" id="file-address" multiple="multiple" /><label for="file-address" class="wizard-form-text-label"></label></label></div></div></div></div></div>' + '</div></div>'
$('#identification-proofs').append(new_row);
    }
    else{
        return false;
    }

});

// Remove criterion
$("#identification-proofs").on('click', '.delete-row', function () {
    $(this).closest('.applicant-fileds').remove();
});



$(document).on("click", "#add-row1", function () {
    if($('#address-proofs .applicant-fileds').length < 5){
        var new_row = '<div class="applicant-fileds"><i class="far fa-times-circle delete-row mobile-delete-row"></i><div class="form-row"><div class="col-lg-4 col-md-12 col-sm-12 mobile-padding"><div class="row"><div class="col-lg-12"><label for="type">Type </label><select class="form-control wizard-required documents-file-label"><option value="0">&nbsp;</option><option value="1">Aadhar Card</option><option value="2">PAN Card</option><option value="3">Driving Licens</option><option value="4">Voter Id Card</option><option value="5">Passport</option><option value="6">Form-60</option></select></div><div class="col-lg-12 doc-number mobile-padding" style="display:none;"><label for="number">Number</label><input type="text" class="form-control wizard-required" /></div></div></div>' + '<div class="col-lg-3 col-md-6 col-sm-6 mobile-padding img-section"><div class="d-flex justify-content-center"><div class="image-upload-section"><label for="pan-card-file2" class="filupp"><img src="assets/img/aadhar-card-front.png" /><input type="file" class="form-control" name="attachment-file" value="1" id="pan-card-file1" /><i class="fas fa-edit delete-img"></i></label><label>Front View</label></div></div></div>' + '<div class="col-lg-3 col-md-6 col-sm-6 mobile-padding  img-section"><div class="d-flex justify-content-center"><div class="image-upload-section"><label for="pan-card-file2" class="filupp"><img src="assets/img/aadhar-card-back.png" /><input type="file" class="form-control" name="attachment-file" value="1" id="pan-card-file2" /><i class="fas fa-edit delete-img"></i></label><label>Back View</label></div></div></div>' + '<div class="col-lg-3 col-md-12 col-sm-12 mobile-padding doc-section"><div class="photograph"><div style="width: 100%;"><label for="file-address">File </label><label for="file-address" class="filupp"><i class="fas fa-paperclip"></i> <span class="filupp-file-name js-value"></span><input type="file" class="form-control" name="attachment-file" value="1" id="file-address" multiple="multiple" /><label for="file-address" class="wizard-form-text-label"></label></label></div></div></div></div></div>' + '</div></div>'

$('#address-proofs').append(new_row);
    }
    else{
        return false;
    }

});

// Remove criterion
$("#address-proofs").on('click', '.delete-row', function () {
    $(this).closest('.form-row').remove();
});





$(".ckecked-chechbox").click(function () {
    if ($(".ckecked-chechbox").is(":checked")) {
        $(".permanent-fields").addClass('focus-input');
    }
    else {
        $(".permanent-fields").removeClass('focus-input');
    }
});
$(".whatsapp-chechbox").click(function () {
    if ($(".whatsapp-chechbox").is(":checked")) {
        $(".permanent-field").addClass('focus-input');
    }
    else {
        $(".permanent-field").removeClass('focus-input');
    }
});



jQuery(document).ready(function() {
    // click on next button
    jQuery('.form-wizard-next-btn').click(function() {
    var parentFieldset = jQuery(this).parents('.wizard-fieldset');
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    var next = jQuery(this);
    var nextWizardStep = true;
    parentFieldset.find('.wizard-required').each(function(){
        var thisValue = jQuery(this).val();
    
        if( thisValue == "") {
            jQuery(this).siblings(".wizard-form-error").slideDown();
            nextWizardStep = false;
        }
        else {
            jQuery(this).siblings(".wizard-form-error").slideUp();
        }
    });
    if( nextWizardStep) {
        next.parents('.wizard-fieldset').removeClass("show","400");
        currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
        next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
        jQuery(document).find('.wizard-fieldset').each(function(){
            if(jQuery(this).hasClass('show')){
                var formAtrr = jQuery(this).attr('data-tab-content');
                jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
                    if(jQuery(this).attr('data-attr') == formAtrr){
                        jQuery(this).addClass('active');
                        var innerWidth = jQuery(this).innerWidth();
                        var position = jQuery(this).position();
                        jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
                    }else{
                        jQuery(this).removeClass('active');
                    }
                });
            }
        });
    }
    });
    //click on previous button
    jQuery('.form-wizard-previous-btn').click(function() {
    var counter = parseInt(jQuery(".wizard-counter").text());;
    var prev =jQuery(this);
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    prev.parents('.wizard-fieldset').removeClass("show","400");
    prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
    currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
    jQuery(document).find('.wizard-fieldset').each(function(){
        if(jQuery(this).hasClass('show')){
            var formAtrr = jQuery(this).attr('data-tab-content');
            jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
                if(jQuery(this).attr('data-attr') == formAtrr){
                    jQuery(this).addClass('active');
                    var innerWidth = jQuery(this).innerWidth();
                    var position = jQuery(this).position();
                    jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
                }else{
                    jQuery(this).removeClass('active');
                }
            });
        }
    });
    });
    //click on form submit button
    jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
    var parentFieldset = jQuery(this).parents('.wizard-fieldset');
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    parentFieldset.find('.wizard-required').each(function() {
        var thisValue = jQuery(this).val();
        if( thisValue == "" ) {
            jQuery(this).siblings(".wizard-form-error").slideDown();
        }
        else {
            jQuery(this).siblings(".wizard-form-error").slideUp();
        }
    });
    });


    $('body').on('focus', '.form-control', function() {
        var tmpThis = jQuery(this).val();
    if(tmpThis == '' ) {
        jQuery(this).parent().addClass("focus-input");
    }
    else if(tmpThis !='' ){
        jQuery(this).parent().addClass("focus-input");
    }
    }).on('blur', function(){
    var tmpThis = jQuery(this).val();
    if(tmpThis == '' ) {
        jQuery(this).parent().removeClass("focus-input");
        jQuery(this).siblings('.wizard-form-error').slideDown("3000");
    }
    else if(tmpThis !='' ){
        jQuery(this).parent().addClass("focus-input");
        jQuery(this).siblings('.wizard-form-error').slideUp("3000");
    }
    });

    });




 


    // $(document).ready(function(){
        
	// 	var uri_arr = document.location.pathname.split('/');
	// 	var file_name = uri_arr[uri_arr.length-1];
	// 	$('a.nav-link').each(function(){
    //          
	// 		if($(this).attr('href') == file_name){
    //             $(this).siblings().removeClass('active');
	// 			$(this).addClass('active');
				
	// 		}
	// 	});
		
	// });
    $( window ).on( "load", function() {
        var uri_arr = document.location.pathname.split('/');
		var file_name = uri_arr[uri_arr.length-1];
		$('a.nav-link').each(function(){
             
			if($(this).attr('href') == file_name){
                $(this).siblings().removeClass('active');
				$(this).addClass('active');
                $(this).parent().parent().parent('li.has-tree').addClass('show-child child-active');
                findParent(this);
			}
        });
        
        $('.has-tree div').click(function () {
            $(this).parent().siblings('.has-tree').children('div').children('span').children('i.fa-angle-left').removeClass('rotate-icon');
            $(this).parent().siblings('.has-tree').children('ul').hide();
            $(this).siblings('ul').toggle();
            $(this).children().children('.fa-angle-left').toggleClass('rotate-icon');
        });
    });
function findParent(arg) {
    if ($(arg).parent().parent('ul').length && !$(arg).parent().parent('ul.sidebar-nav').length) {
        $(arg).parent().parent('ul').show();
        $(arg).parent().parent('ul').siblings('div').children().children('.fa-angle-left').addClass('rotate-icon');
        findParent($(arg).parent().parent('ul'));
    }
}
// function changeActive(){
//     var uri_arr = document.location.pathname.split('/');
// 		var file_name = uri_arr[uri_arr.length-1];
// 		$('a.nav-link').each(function(){
//              
// 			if($(this).attr('href') == file_name){
//                 $(this).siblings().removeClass('active');
// 				$(this).addClass('active');
				
// 			}
// 		});
// }

$(document).ready(function(){
    $("#occupation").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if (optionValue === 'salaried' || optionValue === 'self-emplyed') {
                if (optionValue === 'salaried') {
                    $("#bussiness-asset").hide();
                    $("#salaried-workplace-type").find('option').remove();
                    $("#salaried-workplace-type").append('<option value=""></option><option value="goverment">Goverment</option><option value = "large-company" > Large Company</option><option value="small-company">Small Company</option><option value="shop">Shop</option><option value="contractor">Contractor</option>');
                    $("#salaried-employees-number").find('option').remove();
                    $("#salaried-employees-number").append('<option value=""></option><option value="0-5">0-5</option><option value = "6-10" > 6-10</option><option value="11-100">11-100</option><option value="100+">100+</option>');
                }
                else {
                    $("#bussiness-asset").show();
                    $("#salaried-workplace-type").find('option').remove();
                    $("#salaried-workplace-type").append('<option value=""></option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="7+">7+</option>');
                    $("#salaried-employees-number").find('option').remove();
                    $("#salaried-employees-number").append('<option value=""></option><option value="goverment">Goverment</option><option value = "large-company" > Large Company</option><option value="small-company">Small Company</option><option value="shop">Shop</option><option value="contractor">Contractor</option>');
                }
                $(".occupation").show();
            } else{
                $(".occupation").hide();
            }
        });
    }).change();
});


//     jQuery('#showall').click(function(){
//           jQuery('.targetDiv').show();
//    });
   jQuery('.showSingle').click(function(){
         jQuery('.targetDiv').hide();
         jQuery('.targetDiv'+$(this).attr('target')).show();
   });

//File name
   $("input:file").change(function () {
    if($(this).val() != ''){
        var fileName=$(this).val().split('\\');
        fileName=fileName[fileName.length-1];
        fileName=fileName.split('.');
        if(fileName[0].length>20){
            fileName=fileName[0].substring(0,20)+'... .'+fileName[1];
        }
        else{
            fileName=fileName[0]+'.'+fileName[1];
        }
        console.log(fileName);
        $(this).siblings('.filupp-file-name').text(fileName);
    }
});


//$(document).ready(function() {
//    $('.js-example-basic-multiple').select2();
//});

  
$('.icheckbox_minimal-red').click(function () {
    $(this).toggleClass('checked');
});

$(document).on('click', '#sidenav-overlay', function () {
    $('.side-nav').removeClass('openNav');
    $(this).hide();
});
$(document).on('click', '.menu-button', function () {
    $('.side-nav').addClass('openNav');
    $('#sidenav-overlay').show();
});


$(document).on('click', '.menu-header', function () {
    $(this).parent('.menu').siblings().removeClass('menu-open');
    $(this).parent('.menu').toggleClass('menu-open');
})

/**Scroll */
$( ".uppar-section" ).scroll(function() {
    $( ".ui-autocomplete" ).hide();
  });