import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule  } from 'src/app/shared/components/component.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopNewsComponent } from './top-news.component';
import { topNewsRoutes } from './top-news.routing';

@NgModule({
    declarations: [
        TopNewsComponent
    ],
    imports     : [
        RouterModule.forChild(topNewsRoutes),
        ComponentModule,
        SharedModule
    ]
})
export class TopNewsModule
{
}
