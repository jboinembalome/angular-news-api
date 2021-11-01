import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfigModule } from './core/config';
import { appConfig } from './app.config';
import { LayoutModule } from './layout/layout.module';
import { ApiModule } from './api/api.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';


const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig),

    // Core module of the application
    ConfigModule.forRoot(appConfig),
    CoreModule,

    // Layout module of the application
    LayoutModule,

    // Api module to request the API News
    ApiModule,

    HttpClientModule,

    // Highlight module to display code snippets
    //HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
