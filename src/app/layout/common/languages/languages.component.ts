import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'languages',
    templateUrl: './languages.component.html',
})
export class LanguagesComponent implements OnInit {
    constructor(public translate: TranslateService) {
    }

    ngOnInit(): void {
        // Add the available languages
        this.translate.addLangs(['en', 'fr']);

        // This language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

        // The lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
    }

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void {
        this.translate.use(lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item || index;
    }
}
