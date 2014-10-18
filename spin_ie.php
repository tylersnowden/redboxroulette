<?php

$movies = simplexml_load_file('include/products.xml'); 
$random = rand(0, count($movies));

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8" />
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<title>Redbox Roulette</title>
	<meta name="keywords" content="redbox, roulette, random, movie, rental" />
	<meta name="description" content="Adding Suspense to your Redbox Experience" />
	<link rel="stylesheet" href="style.css" type="text/css" media="screen, projection" />
	<script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-35389745-1']);
    _gaq.push(['_trackPageview']);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    </script>
</head>

<body>

<header id="header">
        <div id="headContainer">
	    <img src="logo.png" alt="Redbox Roulette" style="float:left; margin-top: -10px; margin-right:-10px;" />
	    <div style="float:right; padding-right:10px;"><a target="_blank" href="http://Redbox.ojrq.net/c/40732/24914/936">
	            <img src="redboxSmall.png" alt="Redbox"/></a></div>
		<a href="index.html" alt="Redbox Roulette" style="color:white;">Redbox Roulette&trade;</a><br />
		<div style="color: #eee; font-size: 16px;">Adding Suspense to Your Movie Night!</div></div>
	</header><!-- #header-->

<div id="wrapper">

	<section id="middle">

		<div id="container">
			<div id="content">
			    <div id="app">
			    <?php 
                $link = $movies->Movie[$random]['websiteUrl'];
                $linkUrl = parse_url($link);
                $link = str_replace('/','%2F',$linkUrl['path']);
                $link = "http://Redbox.ojrq.net/c/40732/24918/936?u=http%3A%2F%2Fwww.redbox.com".$link;
                
                echo "<h1>Your Movie is: ".$movies->Movie[$random]->Title."</h1>";
                $image = $movies->Movie[$random]->BoxArtImages->children("atom", true)->link[1]->attributes();
                echo "<div class='box' style='float:left;'><a target='_blank' href='".$link."'><img class='border' src='".$image['href']."' /></a></div><br />";
                echo "<div class='genre'>Genre: ".$movies->Movie[$random]->Genres->Genre."</div><br />";
                echo "<div class='rating'>MPAA Rating: ".$movies->Movie[$random]->MPAARating."</div><br />";
                echo "<div class='synop'>Synopsis: ".$movies->Movie[$random]->SynopsisShort."</div><br />";
                echo "<div class='click'><a target='_blank' href='".$link."' alt='Roulette'>Click here to Rent it from Redbox!</a></div><br />";
                echo "<div><a href='spin_ie.php' alt='Redbox Roulette'><button>Spin Again!</button></a></div>";
                ?>
                <div style="border: 1px dotted #aaa; clear:both;">Remember: Using Redbox Roulette, you can reserve your rental online using your redbox&reg; account. After the online transaction is completed, your rental will be ready for pickup at the location of your choice, saving time searching for your movie and waiting in line. Remember to bring the credit card you reserved the rental with, in order to retrieve your rental from the redbox kiosk.</div>
                </div>
			</div><!-- #content-->
		</div><!-- #container-->

		<aside id="sideLeft">
		    <div id="roundBox">
                No Filtering Available
			</div>
		</aside><!-- #sideLeft -->

	</section><!-- #middle-->


</div><!-- #wrapper -->

<footer id="footer">
	<strong> &copy; 2012 Redbox Roulette&trade;. All rights reserved.</strong><br/ >
	Redbox Roulette is an official affliate of Redbox Automated Retail, LLC.
</footer><!-- #footer -->

</body>
</html>
