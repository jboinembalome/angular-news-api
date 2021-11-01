import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule  } from 'src/app/shared/components/component.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TechNewsComponent } from './tech-news.component';
import { techNewsRoutes } from './tech-news.routing';

@NgModule({
    declarations: [
        TechNewsComponent
    ],
    imports     : [
        RouterModule.forChild(techNewsRoutes),
        ComponentModule,
        SharedModule
    ]
})
export class TechNewsModule
{
}
