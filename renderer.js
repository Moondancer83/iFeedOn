/**
 * Render functions
 */

function renderChanels(urls) {
    for (var i = 0; i < urls.length; i++) {
        processFeed(urls[i]);
    }
}

function renderChanel(data) {
    var dock = $("<div>")
        .addClass("col-xs-12 col-md-6")
        .append(renderPanel(data));
    $("#chanels").append(dock);
}

function renderPanel(data) {
    return $("<div>")
        .addClass("panel panel-default")
        .append(renderChanelTitle(data))
        .append(renderChanelBody(data));
}

function renderChanelTitle (data) {
    return $("<div>")
        .addClass("panel-heading")
        .append(renderTitle(data.title, data.link).addClass("panel-title"));
}

function renderTitle(text, link) {
    return $("<h3>")
        .append(renderLink(text, link));
}

function renderLink(text, link) {
    return $("<a>")
        .attr("href", link)
        .attr("target", "blank")
        .append(text);
}

function renderChanelBody(data) {
    return $("<div>")
        .addClass("panel-body")
        .append(renderItems(data.items));
}

function renderItems(items) {
    var list = $("<div>").addClass("items");
    for (var i = 0; i < items.length; i++) {
        list.append(renderItem(items[i]));
    }
    return list
}

function renderItem (item) {
    return $("<div>")
        .addClass("item")
        .append(renderTitle(item.title, item.link))
        .append(renderParagraph(item.desc));
}

function renderParagraph(text) {
    return $("<p>")
        .append(text);
}
