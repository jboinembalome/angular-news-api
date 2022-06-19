import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Event as NavigationEvent, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NavigationPaths } from './sidenav.constant';
import { Navigation } from './models/navigation.model';
import { ConfigService } from 'src/app/core/config';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AppConfig, Scheme, Theme } from 'src/app/app.config';

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
    private _breakpointObserver: BreakpointObserver,
    private _router: Router) {
  }

  ngOnInit(): void {
    // Set the theme and scheme based on the configuration
    this._configService.config.pipe(
      takeUntil(this._unsubscribeAll),
      map((config: any) => {
        const options = {
          scheme: config.scheme,
          theme: config.theme
        };

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

    this._breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this._router.events.subscribe((event: NavigationEvent) => {
      this.navigationObserver(event);

      if (this.isScreenSmall)
        this.sidenav.close();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  private navigationObserver(event: NavigationEvent): void {

    if (event instanceof NavigationStart)
      this.displayProgressBar = true;

    if (event instanceof NavigationEnd)
      this.displayProgressBar = false;
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
      if (className.startsWith('theme-')) {
        this._document.body.classList.remove(className, className.split('-')[1]);
      }
    });

    // Add class name for the currently selected theme
    this._document.body.classList.add(this.theme);
  }
}
