import { Component } from '@angular/core';
import { uDateUtil } from '@shared/utils/date.util';

@Component({
  selector: 'mb-login',
  imports: [],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  constructor() {
    const date = uDateUtil.getFormatDate(new Date());
    console.log(date);
  }
}
