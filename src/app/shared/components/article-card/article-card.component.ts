import { Component, Input } from '@angular/core';

@Component({
    selector     : 'tw-article-card',
    templateUrl  : './article-card.component.html',
})
export class ArticleCardComponent {
    @Input() sourceName?: string = '';
    @Input() url?: string = '';
    @Input() urlToImage?: string = '';
    @Input() title?: string = '';
    @Input() description?: string = '';
    @Input() author?: string = '';
    @Input() publishedAt?: Date | null = null;

    constructor() {
    }
}
