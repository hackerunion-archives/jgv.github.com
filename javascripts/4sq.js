$.ajax({
    url: 'http://feeds.foursquare.com/history/3e9b44fda6e6e56e0e1f2f1a96e3b1bd.rss?count=1',
    type: 'GET',
    success: function(res) {
        alert(res);
	var headline = $(res.responseText).find('a.tsh').text();
        alert(headline);
    }
});
