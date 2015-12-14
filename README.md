#jquery.slideshow 1.0.1
##Responsive Touch-friendly jQuery Slideshow

##Examples
<ul>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow.html">Slideshow with bullet tabs (default)</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_tabs_text.html">Slideshow with text tabs</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_thumbs.html">Slideshow as sliding thumb nails</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_multiple_responsive.html">with multiple visible slides</a></li>
</ul>

##How to Use

###Step 1: Link required files

```html
<!-- jQuery library from CDN  -->
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>

<link href="css/slideshow.css" rel="stylesheet" />
<script src="js/slideshow.js"></script>
```

###Step 2: Create HTML markup

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

###Step 3: initialize the slideshow

```javascript
$(document).ready(function(){
	var slideshow = new Slideshow({
		id: 'mySlideshow'
	});
});
```

<h3>Features</h3>
<ul>
	<li>Supports responsive layouts and touch devices</li>
	<li>Supports any type of content (HTML, images, videos, etc.)</li>
	<li>Ability to easily modify look and feel via HTML and CSS changes</li>
	<li>Navigational text tabs can be added in markup</li>
	<li>Ability to display multiple slides</li>
	<li>Options to enable/disable endless looping and/or autoplay</li>
	<li>Supports custom easing via jquery easing plugin</li>
</ul>

<h3>API</h3>
<ul>
	<li><strong>autoplay</strong>: false [true]</li>

	<li><strong>autoplay_start_delay</strong>: 0, time in miliseconds that it takes for autoplay to start</li>

	<li><strong>callback</strong>: a function that runs when slide buttons are clicked.</li>

	<li><strong>displayTime</strong>: 3000, is used only when autoplay is set to true and indicates the amount of time a slide stays on screen</li>

	<li><strong>easing</strong>: "swing" ["easeOutCubic", "easeOutQuart", "easeOutQuad", ...], using jquery.easing.1.3.js</li>

	<li><strong>id</strong>: id of slideshow container (a required parameter)</li>

	<li><strong>isInitialized</strong>: false [becomes true after slideshow has initialized]</li>

	<li><strong>loader_image</strong>: "img/loader.gif", path to image to be used as loader</li>

	<li><strong>loop</strong>: true [false]</li>

	<li><strong>multiple_slides</strong>: Set to true when more than one slide should be visible. Default: false</li>

	<li><strong>preload_images</strong>: false [true], Set this to true if you have not specified a width for div.slide in CSS. This parameter relies on jquery.imagesloaded.js plugin.</li>

	<li><strong>startingSlideId</strong>: null, id of slide that should be used as starting slide</li>

	<li><strong>startingSlideNumber</strong>: 1, number of slide that should be used as starting slide</li>

	<li><strong>slide_margin_right</strong>: 0 [integer], indicates the amount of right margin in percentage relative to width of div.wrapper when multiple slides are displayed and slideshow has variable width. This helps javascript to calculate the width of each slide.</li>

	<li><strong>transition_delay</strong>: 500, is in miliseconds and is the amount of time it takes for a slide to move to view, so the higher the value, the slower the animation would be.</li>

	<li><strong>variableHeight</strong>: false [true], if true, slideshow's height is calculated dynamically</li>

	<li><strong>variableWidth</strong>: false [true], if true, slideshow's width is calculated dynamically</li>

	<li><strong>visibleSlidesCount</strong>: 1 [integer], if slideshow shows multiple slides simultanously, use this parameter to indicate how many slides are displayed at a time</li>
</ul>
