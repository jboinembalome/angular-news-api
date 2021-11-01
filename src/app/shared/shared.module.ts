import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './services/utils';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UtilsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UtilsModule,
        TranslateModule
    ]
})
export class SharedModule
{
}
