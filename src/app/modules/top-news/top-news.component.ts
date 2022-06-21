import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesDto } from 'src/app/api/models/articlesDto';
import { NewsService } from 'src/app/api/services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
})
export class TopNewsComponent implements OnInit {
  topArticles: Observable<ArticlesDto> | null = null;

  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    this.topArticles = this._newsService.topHeadlines();
  }

}
