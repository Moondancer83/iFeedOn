import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chanels',
  templateUrl: './chanels.component.html',
  styleUrls: ['./chanels.component.css']
})
export class ChanelsComponent implements OnInit {

  chanelURLs = [
    'http://origo.hu/contentpartner/rss/itthon/origo.xml',
    'http://feeds.feedburner.com/lfghu/'
  ];

  constructor() { }

  ngOnInit() {
  }

}
