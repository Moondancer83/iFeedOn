/**
 * proxy.
 *
 * @author mkalinovits
 * @since 2017. 06. 18.
 */
var PROXY = "proxy.php";
function processFeed (url) {
    var upData = {url: url};

    $.get( PROXY, upData, function(raw) {
        var data = $.parseJSON(raw);
        renderChanel(data);
    });
}