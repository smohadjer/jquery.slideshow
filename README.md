# jQuery Slideshow

## Table of contents
* [Examples](#examples)
* [Features](#features)
* [Usage](#usage)
* [API](#api)

## <a name="examples" />Examples</a>
* <a href="http://smohadjer.github.io/jquery.slideshow/demo/slideshow.html">Slideshow (minimal)</a>
* <a href="http://smohadjer.github.io/jquery.slideshow/demo/slideshow_json.html">Slideshow with data from json</a>
* <a href="http://smohadjer.github.io/jquery.slideshow/demo/slideshow_preload.html">Slideshow with preloading of image</a>
* <a href="http://smohadjer.github.io/jquery.slideshow/demo/slideshow_tabs_text.html">Slideshow with text tabs</a>
* <a href="http://smohadjer.github.io/jquery.slideshow/demo/slideshow_thumbs.html">Slideshow as sliding thumb nails</a>
* <a href="http://smohadjer.github.io/jquery.slideshow/demo/slideshow_multiple_responsive.html">with multiple visible slides</a>
* <a href="http://smohadjer.github.io/jquery.slideshow/demo/slideshow_hidden.html">Hidden slideshow (debug)</a>


## <a name="features" />Features</a>
* Supports responsive layouts and touch devices
* Supports any type of content (HTML, images, videos, etc.)
* Ability to easily modify look and feel via HTML and CSS changes
* Navigational text tabs can be added in markup
* Ability to display multiple slides
* Options to enable/disable endless looping and/or autoplay
* Supports custom easing via jquery easing plugin
* Support for json

## <a name="usage" />Usage</a>
### Step 1: Link required files
```html
<!-- jQuery library from CDN  -->
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>

<link href="css/slideshow.css" rel="stylesheet" />
<script src="js/slideshow.js"></script>
```

### Step 2: Create HTML markup
```html
<div id="mySlideshow" class="slideshow">
	<div class="wrapper">
		<div class="slides">
			<div class="slide">
				<img src="http://lorempixel.com/640/360/abstract/1/" />
			</div>
			<div class="slide">
				<img src="http://lorempixel.com/640/360/abstract/2/" />
			</div>
			<div class="slide">
				<img src="http://lorempixel.com/640/360/abstract/3/" />
			</div>
		</div>
		<span class="next"><img src="../img/next4.png" alt="Next" /></span>
		<span class="prev"><img src="../img/prev4.png" alt="Previous" /></span>
	</div>
	<div class="slideTabs"></div>
</div>
```

### Step 3: initialize the slideshow
```javascript
$(document).ready(function(){
	var slideshow = new Slideshow({
		id: 'mySlideshow'
	});
});
```

## <a name="api" />API</a>
### Options
- **autoplay: false [true]**
- **autoplay_start_delay: 0** time in miliseconds that it takes for autoplay to start
- **callback: function() {}** a function that runs when slide buttons are clicked.
- **displayTime: ms** is used only when autoplay is set to true and indicates the amount of time a slide stays on screen
- **easing: "swing" ["easeOutCubic", "easeOutQuart", "easeOutQuad", ...]**, using jquery.easing.1.3.js
- **id: id of slideshow container** (a required parameter)
- **isInitialized: false** becomes true after slideshow has initialized
- **json: URL** URL for json can also be set using data-json attribute on div.slideshow in markup
- **loader_image: "img/loader.gif"** path to image to be used as loader
- **loop: true [false]**
- **multiple_slides: true [false]** set to true when more than one slide should be visible
- **preload_images: false [true]** Set this to true if you have not specified a width for div.slide in CSS. This parameter relies on jquery.imagesloaded.js plugin.
- **startingSlideId: null** id of slide that should be used as starting slide
- **startingSlideNumber: 1**, number of slide that should be used as starting slide
- **slide_margin_right: 0 [integer]** indicates the amount of right margin in percentage relative to width of div.wrapper when multiple slides are displayed and slideshow has variable width. This helps javascript to calculate the width of each slide.
- **transition_delay: 500** is in miliseconds and is the amount of time it takes for a slide to move to view, so the higher the value, the slower the animation would be.
- **variableHeight: false [true]**, if true, slideshow's height is calculated dynamically</li>
- **visibleSlidesCount: 1 [integer]**, if slideshow shows multiple slides simultanously, use this parameter to indicate how many slides are displayed at a time

### Methods
**slideNumber(num)**: If this method is called without argument it returns current slide number, otherwise it moves to slide corresponding to argument.
