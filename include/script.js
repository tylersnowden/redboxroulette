$(document).ready(function(){

    $.ajaxSetup({
        headers: { Accept: "application/json" },
        cache: false,
        dataType: "jsonp",
        crossDomain: true
    });

    var getMovie = function(){

        $('#movie').html("<h1>Your Movie is Being Retrieved</h1>");
        $('#loading').show(); 
        
        var query = "";
        $('input:checked').each(function(index) {
            query = query + $(this).val() +",";
        });

        if (query != ""){
        
        $.getJSON("https://api.redbox.com/v3/products?apiKey=bdbfffed41b373fcf42a1e97effdc8b2&searchField=Genre&productTypes=Movies&q="+query,
            function(json){ outputMovie(json); });
        
        } else {
        
        $.getJSON("https://api.redbox.com/v3/products/movies/default?apiKey=bdbfffed41b373fcf42a1e97effdc8b2",
            function(json){ outputMovie(json); });
        } 
             
        return false;
   }
   
   function outputMovie(json)
   {
                $('#loading').fadeOut(); 
                
                var lengthArr = json['Products'].Movie.length;
                var numRand = Math.floor(Math.random()*lengthArr);
                
                var link = json['Products'].Movie[numRand]['@websiteUrl'];
                link.replace('/','%2F');
                link.replace(':','%3A');
                link ="http://Redbox.ojrq.net/c/40732/24918/936?u="+link;
                
                var title = json['Products'].Movie[numRand].Title;
                var image = json['Products'].Movie[numRand].BoxArtImages.link[1]['@href'];
                var genre = json['Products'].Movie[numRand].Genres.Genre;
                var rating = json['Products'].Movie[numRand].MPAARating;
                var synop = json['Products'].Movie[numRand].SynopsisLong;
                
                
                $('#movie').html('<h1>Your Movie is: ' + title + '</h1><br />');
                $('#movie').append('<a href="'+link+'" target="_blank" alt="redbox"><img class="border" src="'+image+'" alt="Redbox Movie" style="float:left;" /></a>');
                $('#movie').append('<p>Genre: ' + genre + '</p>');
                $('#movie').append('<p>MPAA Rating: ' + rating + '</p>');
                $('#movie').append('<p>Synopsis: ' + synop + '</p>');
                $('#movie').append('<p><a class="click" href="'+link+'" target="_blank" alt="redbox">Click Here to Rent from Redbox</a></p>');
                
                $('#movie').append('<button id="spin">Spin Again!</button><br />');
                $('#spin').click(getMovie);
   
   
   }
   
   
    if ($.browser.msie && window.XDomainRequest) {
            /*
            var xdr = new XDomainRequest();
            xdr.open("get", "http://api.redbox.com/v3/products/movies/default?apiKey=bdbfffed41b373fcf42a1e97effdc8b2");
            xdr.onload = function () {
            var JSON = $.parseJSON(xdr.responseText);
            if (JSON == null || typeof (JSON) == 'undefined')
            {
                JSON = $.parseJSON(data.firstChild.textContent);
            }
            outputMovie(JSON);
            };
            xdr.send();*/
            $('#loading').hide(); 
            $('#movie').html("<h1>Redbox Roulette currently does not fully support Internet Explorer</h1>");
            $('#movie').append("<a href='spin_ie.php' alt='Never use IE'>Click Here to use Internext Explorer Compatible version</a>");
    } else $(document).ready(getMovie);
});

