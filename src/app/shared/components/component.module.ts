import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
    declarations: [
        AlertComponent,
        ArticleCardComponent,
        ToggleComponent,
    ],
    imports: [
        RouterModule,
        SharedModule,
        MaterialModule
    ],
    exports: [
        AlertComponent,
        ArticleCardComponent,
        ToggleComponent
    ]
})
export class ComponentModule
{
}
