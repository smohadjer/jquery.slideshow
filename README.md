jquery.slideshow
================

A responsive touch-friendly slideshow based on jQuery

<h2>Features</h2>
<ol>
	<li>Supports any type of content (HTML, images, videos, etc.)</li>
	<li>Ability to easily modify look and feel via HTML and CSS adjustments</li>
	<li>Navigational tabs can be auto-generated (<a href="slideshow_tabs_bullet.php">demo</a>) or manually put in markup (<a href="slideshow_tabs_text.php">demo</a>)</li>
	<li>Ability to display of multiple slides simultaneously (<a href="slideshow_multiple_responsive.php">demo</a>)</li>
	<li>Ability to read content from XML (data-type: "xml") (<a href="slideshow_xml_category.php">demo</a>)</li>
	<li>Supports responsive layouts (variableWidth: true, variableHeight: true)</li>
	<li>Supports touch devices (touch_drag: true) (<a href="slideshow.php">demo</a>)</li>
	<li>Supports endless looping (loop: true)</li>
	<li>bookmarking support for each slide via hash tag in URL (<a href="slideshow_xml_category.php">demo</a>)</li>
	<li>Supports custom easing</li>
	<li>Ability to start automatically (autoplay: true) after specified time (autoplay_start_delay: time in millisecond)</li>
	<li>Support for custom behavior via callbacks</li>
	<li>Supports dynamic changes such adding, removing, and moving of slides via public methods</li>
</ol>

<h2>API</h2>
<table class="api">
	<tr><th>Properties</th><th>Values: default [optional]</th><th>Description</th></tr>
	<tr><td>autoplay</td><td>false [true]</td><td></td></tr>
	<tr><td>autoplay_start_delay</td><td>0</td><td>time in miliseconds that it takes for autoplay to start</td></tr>
	<tr><td>callback</td><td></td><td>a function that runs when slide buttons are clicked.</td></tr>
	<tr><td>data</td><td>null</td><td>if dataType is set to xml data should be URL to xml</td></tr>							
	<tr><td>dataType</td><td>"html" ["xml"]</td><td></td></tr>							
	<tr><td>displayTime</td><td>3000</td><td>is used only when autoplay is set to true and indicates the amount of time a slide stays on screen</td></tr>
	<tr><td>easing</td><td>"easeOutCubic" ["lineaer", "easeOutQuart", "easeOutQuad", ...]</td><td>using jquery.easing.1.3.js</td></tr>
	<tr><td>id</td><td></td><td>is required this is the only required property</td></tr>
	<tr><td>loader_image</td><td>"img/loader.gif"</td><td>path to image to be used for loader animation</td></tr>
	<tr><td>loop</td><td>false [true]</td><td></td></tr>
	<tr><td>preload_images</td><td>true [false]</td><td>Set this to false if you have specified a width for div.slide in CSS as then there is no need to wait for all images to load first which otherwise is required in order to calculate the width of each slide. This parameter relies on jquery.imagesloaded.js plugin which is included in slideshow.min.js.</td></tr>
	<tr><td>slide_is_as_wide_as_slideshow</td><td>true [false]</td><td> by default slides inherit their width from their slideshow. If you want to have slides that are narrower than slideshow such as showing multiple slides simultanously then set this to false and use css to specify a width for your slides.</td></tr>
	<tr><td>slideTab_has_value</td><td>false [true]</td><td> by default slideshow generated tabs have no value, if set to true they would have integers as value.</td></tr>
	<tr><td>startingSlideId</td><td>null</td><td>id of slide that should be used as starting slide</td></tr>
	<tr><td>startingSlideNumber</td><td>1</td><td>number of slide that should be used as starting slide</td></tr>
	<tr><td>touch_drag</td><td>true [false]</td><td>when set to false slides can NOT be dragged by mouse or swipped by touch.</td></tr>
	<tr><td>transition_delay</td><td>500</td><td>is in miliseconds and is the amount of time it takes for a slide to move to view, so the higher the value, the slower the animation would be.</td></tr>				
	<tr><td>variableHeight</td><td>false [true]</td><td>if true, slideshow's height is calculated dynamically</td></tr>
	<tr><td>variableWidth</td><td>false [true]</td><td>if true, slideshow's width is calculated dynamically</td></tr>
	<tr><td>visibleSlidesCount</td><td>1 [integer]</td><td>If slideshow shows multiple slides simultanously, use this parameter to indicate how many slides are displayed at a time</td></tr>
	<tr><td>slide_margin_right</td><td>0 [integer]</td><td>//indicates the amount of right margin in percentage relative to width of div.wrapper when multiple slides are displayed and slideshow has variable width. This helps javascript to calculate the width of each slide.</td></tr>
	<tr><td>&nbsp;</td><td></td><td></td></tr>
	<tr><td colspan="2"><strong>Methods</strong></td><td><strong>Description</strong></td></tr>
	<tr><td colspan="2">slideNumber()</td><td>retruns or sets current slide's number</td></tr>							
	<tr><td colspan="2">resize()</td><td></td></tr>
	<tr><td colspan="2">getSlideCount()</td><td></td></tr>
	<tr><td colspan="2">remove_slide_by_id()</td><td></td></tr>
	<tr><td colspan="2">remove_slide_by_ordinal()</td><td></td></tr>
	<tr><td colspan="2">add_slide()</td><td></td></tr>
	<tr><td colspan="2">set_caption()</td><td></td></tr>
	<tr><td colspan="2">move_slide()</td><td></td></tr>							
</table>
