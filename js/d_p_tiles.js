(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.droopler_subtheme = {
    attach: function (context, settings) {

      $('.d-tiles').masonry({
        itemSelector: '.d-tiles-item',
        columnWidth: '.d-tiles-sizer',
        percentPosition: true,
      });
      /*$('.d-tiles').justifiedGallery({
        rowHeight : 250,
        lastRow : 'justify',
        margins : 3
      });*/
    }
  };

})(jQuery, Drupal);
