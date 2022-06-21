import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticlesDto } from '../models/articlesDto';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=c01a01eea0ad4579b46c4530ea5ee61d';
  private techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c01a01eea0ad4579b46c4530ea5ee61d';

  constructor(private _httpClient: HttpClient) {
   }

  topHeadlines(): Observable<ArticlesDto>{
    return this._httpClient.get<ArticlesDto>(this.topNews);
  }

  techHeadlines(): Observable<ArticlesDto>{
    return this._httpClient.get<ArticlesDto>(this.techNews);
  }
}
