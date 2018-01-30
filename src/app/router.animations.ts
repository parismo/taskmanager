import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({position: 'fixed', width: '1140px'}), {optional: true}),
        group([
            query(':enter', [
                style({transform: 'translateX(100%)', opacity: 1}),
                animate('0.3s ease-in-out', style({transform: 'translateX(0%)', opacity: 0.4}))
            ], {optional: true}),
            query(':leave', [
                style({transform: 'translateX(0%)', opacity: 1}),
                animate('0.3s ease-in-out', style({transform: 'translateX(-100%)', opacity: 0.4}))
            ], {optional: true})
        ])
    ])
]);