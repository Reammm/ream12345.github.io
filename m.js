$(document).ready(function() {
    var plinks = [{
		name: 'winters',
        plink: 'http://steamcommunity.com/id/analyse/'
    }, {
        name: 'eavv',
        plink: 'https://steamcommunity.com/id/-eav/"'
    }, {
		name: 'april',
		plink: 'http://steamcommunity.com/id/aprilbtw/'
	}, {
		name: 'hking',
		plink: 'https://steamcommunity.com/profiles/76561198329575788'
    }, {
		name: 'euan',
		plink: 'http://steamcommunity.com/id/euanbtw/'
		 }, ];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 15000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })
});
