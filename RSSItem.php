<?php
namespace RSS;

/**
 * Created by IntelliJ IDEA.
 * User: mkalinovits
 * Date: 2017. 06. 16.
 * Time: 23:13
 */
class RSSItem
{
    public $title;
    public $link;
    public $desc;

    /**
     * @return String
     */
    public function serialize()
    {
        return json_encode($this);
    }
}