import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule  } from 'src/app/shared/components/component.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';
import { HighlightModule } from 'ngx-highlightjs';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { InstallationComponent } from './installation/installation.component';
import { TechnologyComponent } from './technology/technology.component';
import { ApiComponent } from './api/api.component';
import { ProjectStructureComponent } from './project-structure/project-structure.component';
import { TailwindcssComponent } from './tailwindcss/tailwindcss.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';


@NgModule({
    declarations: [
        AngularMaterialComponent,
        ApiComponent,
        HomeComponent,
        InstallationComponent,
        IntroductionComponent,
        ProjectStructureComponent,
        TailwindcssComponent,
        TechnologyComponent
    ],
    imports     : [
        RouterModule.forChild(homeRoutes),
        ComponentModule,
        MaterialModule,
        SharedModule,

        // Highlight module to display code snippets
        HighlightModule
    ]
})
export class HomeModule
{
}
