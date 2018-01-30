import {AfterViewInit, Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    }

}
