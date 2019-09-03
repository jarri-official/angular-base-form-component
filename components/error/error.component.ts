import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
    selector: 'ev-error',
    templateUrl: './error.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
    @ViewChild('content', {static: true}) public content: ElementRef;
    @Input() public errorName: string;
}
