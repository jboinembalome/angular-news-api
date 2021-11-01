import { NgModule } from '@angular/core';
import { LanguagesComponent } from './languages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
    declarations: [
        LanguagesComponent
    ],
    imports     : [
        SharedModule,
        MaterialModule
    ],
    exports     : [
        LanguagesComponent
    ]
})
export class LanguagesModule
{
}
