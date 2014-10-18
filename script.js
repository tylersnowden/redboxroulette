$(document).ready(function(){

    $.ajaxSetup({
        headers: { Accept: "application/json" },
        cache: false
    });

    var getMovie = function(){

        //var film = $('#term').val();  THIS WILL BE USED FOR THE FILTER

        $('#movie').html("<h1>Your Movie is Being Retrieved</h1>");
        $('#loading').show(); 
            
        $.getJSON("https://api.redbox.com/v3/products/movies/default","apiKey=bdbfffed41b373fcf42a1e97effdc8b2",
            function(json){

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
                
                $('#movie').append('<button onclick="getMovie" id="spin">Spin Again!</button><br />');
                $('#spin').click(getMovie);
                
            });
             
        return false;
   }
   
   $(document).ready(getMovie);
});

