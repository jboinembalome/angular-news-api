import { Component, Input } from '@angular/core';

@Component({
    selector     : 'tw-toggle',
    templateUrl  : './toggle.component.html',
})
export class ToggleComponent {
    @Input() checked: boolean = false;

    constructor() {
    }

    updateChecked(): void {
        this.checked = !this.checked;
    }
}
