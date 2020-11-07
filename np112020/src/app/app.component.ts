import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { useAnimation, transition, trigger, style, animate } from '@angular/animations';
import { simpleAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ simpleAnimation ]
})

export class AppComponent {
  title = 'Nepoets!';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
