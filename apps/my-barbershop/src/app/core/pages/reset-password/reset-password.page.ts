import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { injectSupabase } from '@shared/functions/inject-supabase.funcitons';

@Component({
  selector: 'mb-reset-password',
  imports: [RouterLink, NzButtonComponent, NzFlexModule, NzFormModule, NzInputModule, FormsModule],
  templateUrl: './reset-password.page.html',
  styleUrl: './reset-password.page.scss',
})
export class ResetPasswordPage {
  private supabase = injectSupabase();
  private notficationService = inject(NzNotificationService);

  password = model('');

  async submit() {
    await this.supabase.auth.updateUser({ password: this.password() });
    this.notficationService.success('Senha alterada', 'Sua senha foi alterada com sucesso');
    this.password.set('');
  }
}
