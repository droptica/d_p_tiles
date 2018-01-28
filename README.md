# Masonry gallery paragraph for Droopler #
[![N|Solid](https://www.droopler.pl/profiles/contrib/droopler/themes/custom/droopler_theme/logo.svg)](http://droopler.pl)

*The module is not supported at this time. Currently it works only with **dev-new-paragraphs** branch of Droopler.* 

## Installation ##

1. Update **composer.json**

Put this module in the "require" section of your composer.json. Remember to install required [Colorbox module](https://www.drupal.org/project/colorbox) and [jQuery Colorbox](https://github.com/jackmoore/colorbox) library! I assume you have configured asset-packagist.org and "composer-installers-extender" extension.

```json
"require": {
  "droptica/d_p_tiles.js":  "^1.0",
  "drupal/colorbox": "^1.4",
  "npm-asset/jquery-colorbox": "^1.6",
  "npm-asset/masonry-layout": "^4.2.1"
}
```

In the "repositories" section put:

```json
"repositories": {
  "droopler-tiles": {
    "type": "git",
    "url":  "git@github.com:droptica/d_p_tiles.js.git"
  }
}
```

Finally add this to "extra" section as first item in "installer-paths":

```json
"extra": {
  "installer-paths": {
    "web/libraries/colorbox": ["npm-asset/jquery-colorbox"]
  }
}
```

2. Run **composer update**.
3. Include module's scss in droopler_subtheme style.scss file

```scss
@import "../../../../modules/contrib/d_p_tiles.js/scss/d_p_tiles.js";
```

**Note**: Any changes made in this file won't be caught by **gulp watch**.

4. Run **gulp compile** in droopler_subtheme directory
5. Enable module in Drupal.
6. Enjoy the new paragraph :-). Remember - if you want a tile to be 2x bigger than others - append "2x2" string to image's ALT text.
