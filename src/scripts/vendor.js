


/*!
 * modernizr.min.js
 */
// =require vendor/modernizr.min.js
// =require vendor/jquery-3.3.1.min.js


// Attempts to preserve comments that likely contain licensing information,
// even if the comment does not have directives such as `@license` or `/*!`.
//
// Implemented via the [`uglify-save-license`](https://github.com/shinnn/uglify-save-license)
// module, this option preserves a comment if one of the following is true:
//
// 1. The comment is in the *first* line of a file
// 2. A regular expression matches the string of the comment.
//    For example: `MIT`, `@license`, or `Copyright`.
// 3. There is a comment at the *previous* line, and it matches 1, 2, or 3.


window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js

// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js
//= require turbolinks
// =require vendor/sticky-sidebar.js



$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});


// $(".site-nav--has-submenu").click(function(){$(this).find(".site-nav__submenu").slideDown(500)},function(){$(this).find(".site-nav__submenu").slideUp(100)})

// $(".site-nav--has-submenu").click( function() {
//   e.preventDefault();
//     $(".site-nav__submenu").toggleClass("active");
//     /* Check panel overlay */

//   }); 


//// slide out search
var sliBtn = '.search-btn',
    sliCont = '.search-slide',
    sliTxt = '.search-slide input[type=text]',
    sliDis = '.search-close',
    sliSpd = 300;

$(sliBtn).click(function(){
  $(sliCont).animate(
    {'width':'15.5625em'}, sliSpd
  );
  $(sliTxt).focus();
});
$(sliDis).click(function(){
  $(sliCont).animate(
    {'width':0}, sliSpd
  );
});


$('.site-nav--has-submenu > a').click(function() {
    $(".modal-box, .active").toggleClass("active", 5000);

    // $(this).siblings('.site-nav__submenu').toggleClass('active');
    return false;     
});


  $(document).ready(function() {
  $('.field').hide();
  $('.search').click(function(){
    $('.field').addClass('expanded');
    $('.field').toggle('slide', 2500);
  });


$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $(".search-form").submit();
    }
});
  
  $(document).keypress(function(e) {
    if(e.which == 13) {
        var item = $('input[name=searchItem]').val();
       $('.result').append('<p>You searched for ' + item + '!</p>');
      return false;
    };
  }); 
});


$(window).load( function() {

  $(".mobile-nav--button, .close").click( function() {
    $(".modal-box, .active").toggleClass("active");
    /* Check panel overlay */

  }); 
  
});
 
$(".dropdown-menu a").click(function() {
  $('.dropdown-item').toggle(200);

})  
  

$(document).keypress(delegateKeypress);




// jQuery('.cart').val('Sold Out').addClass('sold-out').attr('disabled', 'disabled');

    
 
     jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    }); 





    



