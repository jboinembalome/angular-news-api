import { SourceDto } from './sourceDto';

export interface ArticleDto {
    source?: SourceDto;
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: Date;
    content?: string;
}
