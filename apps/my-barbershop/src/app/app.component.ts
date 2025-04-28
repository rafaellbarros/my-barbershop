import { NzButtonModule } from 'ng-zorro-antd/button';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [NzButtonModule, RouterModule],
  selector: 'mb-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'my-barbershop';
}
