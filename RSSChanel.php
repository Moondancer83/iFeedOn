<?php
namespace RSS;

/**
 * Created by IntelliJ IDEA.
 * User: mkalinovits
 * Date: 2017. 06. 16.
 * Time: 23:07
 */
class RSSChanel extends RSSItem
{
    public $items = array();

    /**
     * @return String
     */
    public function serialize()
    {
        return json_encode($this);
    }
}