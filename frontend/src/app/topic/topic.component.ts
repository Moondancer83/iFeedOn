import {Component, Input, OnInit} from '@angular/core';
import {Feed} from '../feed';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data: Feed;

}
