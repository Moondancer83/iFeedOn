import { Injectable } from '@angular/core';
import {FEEDS} from './mock-feed';
import {Feed} from './feed';

@Injectable()
export class FeedService {

  constructor() { }

  getFeed(chanel: string): [Feed] {
    return this.getMock(chanel);
  }

  private getMock(url: string): [Feed] {
    // logger.info('Feed from: ' + url);
    return FEEDS;
  }

  private getFromServer(url: string) {
    const upData = {url: url};

    // Some real server calls
    return [];
  }

}
