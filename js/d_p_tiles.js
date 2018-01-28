(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.droopler_subtheme = {
    attach: function (context, settings) {
      // Enable Masonry.
      $('.d-tiles').masonry({
        itemSelector: '.d-tiles-item',
        columnWidth: '.d-tiles-sizer',
        percentPosition: true,
      });
    }
  };

})(jQuery, Drupal);
