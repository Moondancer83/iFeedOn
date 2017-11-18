import { Injectable } from '@angular/core';
import {FEEDS} from './mock-feed';
import {Feed} from './feed';

@Injectable()
export class FeedService {

  constructor() { }

  getFeed(): [Feed] {
    return this.getMock();
  }

  private getMock(): [Feed] {
    return FEEDS;
  }

  private getFromServer(url) {
    const upData = {url: url};

    // Some real server calls
    return [];
  }

}
