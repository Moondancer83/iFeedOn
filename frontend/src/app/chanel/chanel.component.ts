import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import {Feed} from '../feed';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.css']
})
export class ChanelComponent implements OnInit {

  items: [Feed] = this.feedService.getFeed();

  constructor(private feedService: FeedService) { }

  ngOnInit() {
  }


}
