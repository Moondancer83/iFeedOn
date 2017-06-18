<?php
require_once('RSSItem.php');
require_once('RSSChanel.php');

/**
 * Created by IntelliJ IDEA.
 * User: mkalinovits
 * Date: 2017. 06. 16.
 * Time: 22:46
 */

use RSS\RSSChanel;
use RSS\RSSItem;

// Retrieve RSS feed
$xmlDoc = new DOMDocument();
$xml = $_GET["url"];
$xmlDoc->load($xml);

// Assembling data for export
$result = new RSSChanel();

$channel = $xmlDoc->getElementsByTagName('channel')->item(0);
$result->title = $channel->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
$result->link  = $channel->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;
$result->desc  = $channel->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;

$x=$xmlDoc->getElementsByTagName('item');
for ($i=0; $i<=2; $i++) {
    $current = new RSSItem();
    $current->title = $x->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
    $current->link = $x->item($i)->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;
    $current->desc = $x->item($i)->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;
    $result->items[] = $current;
}

// Generating output
echo $result->serialize();
