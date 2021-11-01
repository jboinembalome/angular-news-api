import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentModule  } from 'src/app/shared/components/component.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        UserProfileComponent,
    ],
    imports     : [
        RouterModule,
        ComponentModule,
        SharedModule,
        MaterialModule
    ],
    exports     : [
        UserProfileComponent,
    ]
})
export class UserProfileModule
{
}
