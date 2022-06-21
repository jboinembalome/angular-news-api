import { ArticleDto } from './articleDto';

export interface ArticlesDto {
    status?: string;
    totalResults?: string;
    articles?: ArticleDto[];
}
