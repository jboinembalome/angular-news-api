import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Event as NavigationEvent, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NavigationPaths } from './sidenav.constant';
import { Navigation } from './models/navigation.model';
import { ConfigService } from 'src/app/core/config';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Scheme, Theme } from 'src/app/app.config';
import { MediaWatcherService } from 'src/app/shared/services/media-watcher';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  scheme: Scheme = 'light';
  private theme: Theme = 'theme-orangeSofa';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  displayProgressBar = false;
  isScreenSmall: boolean = false;
  navigationPaths: Navigation[] = NavigationPaths;
  isDarkTheme: boolean = false;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _configService: ConfigService,
    private _mediaWatcherService: MediaWatcherService,
    private _router: Router) {
  }

  ngOnInit(): void {
    // Set the theme and scheme based on the configuration
    combineLatest([
      this._configService.config,
      this._mediaWatcherService.onMediaQueryChange$(['(prefers-color-scheme: dark)', '(prefers-color-scheme: light)'])
    ]).pipe(
      takeUntil(this._unsubscribeAll),
      map(([config, mql]) => {
        const options = {
          scheme: config.scheme,
          theme: config.theme
        };

        // If the scheme is set to 'auto'
        if (config.scheme === 'auto') {
          // Decide the scheme using the media query
          options.scheme = mql.breakpoints['(prefers-color-scheme: dark)'] ? 'dark' : 'light';
        }

        return options;
      })
    ).subscribe((options) => {

      // Store the options
      this.scheme = options.scheme;
      this.theme = options.theme;

      // Update the scheme and theme
      this.updateScheme();
      this.updateTheme();
    });


    // Subscribe to media changes
    this._mediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {

        // Check if the screen is small
        this.isScreenSmall = !matchingAliases.includes('md');
      });

    this._router.events
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((event: NavigationEvent) => {
        this.navigationObserver(event);

        if (this.isScreenSmall)
          {this.sidenav.close();}
      });


  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  private navigationObserver(event: NavigationEvent): void {
    if (event instanceof NavigationStart)
      {this.displayProgressBar = true;}

    if (event instanceof NavigationEnd)
      {this.displayProgressBar = false;}
  }

  toggleScheme(newScheme: Scheme) {
    this.scheme = newScheme;

    this.updateScheme();
  }


  private updateScheme(): void {
    // Remove class names for all schemes
    this._document.body.classList.remove('light', 'dark');

    // Add class name for the currently selected scheme
    this._document.body.classList.add(this.scheme);
  }


  private updateTheme(): void {
    // Find the class name for the previously selected theme and remove it
    this._document.body.classList.forEach((className: string) => {
      if (className.startsWith('theme-'))
        {this._document.body.classList.remove(className, className.split('-')[1]);}
    });

    // Add class name for the currently selected theme
    this._document.body.classList.add(this.theme);
  }
}
