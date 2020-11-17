import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITweetPrettyDto } from './tweet-pretty/tweet-pretty-dto';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private tweetPrettyUrl = environment.baseUrl + '/api/tweetpretty';

  constructor(private http: HttpClient) { }

  getTweetFromWebApi(twitterUrl: string) {
    if (twitterUrl) {
      return this.http.get<ITweetPrettyDto>(this.tweetPrettyUrl + '?searchValue=' + twitterUrl);
    }

  }

}
