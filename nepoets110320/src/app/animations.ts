import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from '@angular/animations';

export const simpleAnimation = 
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('0.2s', style({ opacity: 1 }))
    ]),
  ]);

