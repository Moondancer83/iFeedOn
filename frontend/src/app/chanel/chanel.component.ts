import {Component, Input, OnInit} from '@angular/core';
import { FeedService } from '../feed.service';
import {Feed} from '../feed';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.css']
})
export class ChanelComponent implements OnInit {

  items: [Feed];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.items = this.feedService.getFeed(this.chanel);
  }

  @Input() chanel: string;
}
