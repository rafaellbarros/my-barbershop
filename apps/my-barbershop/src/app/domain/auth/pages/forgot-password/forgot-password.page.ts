import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { injectSupabase } from '@shared/functions/inject-supabase.funcitons';
import { LoadingService } from '@shared/services/loading/loading.service';

@Component({
  selector: 'mb-forgot-password',
  imports: [RouterLink, NzButtonComponent, NzFlexModule, NzFormModule, NzInputModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.page.html',
  styleUrl: './forgot-password.page.css',
})
export class ForgotPasswordPage {
  private supabase = injectSupabase();
  private notficationService = inject(NzNotificationService);
  protected loadingService = inject(LoadingService);

  email = model('');

  async submit() {
    this.loadingService.start();
    await this.supabase.auth.resetPasswordForEmail(this.email());
    this.notficationService.success('Sucesso', 'Verifique sua caixa de entrada');
    this.email.set('');
    this.loadingService.stop();
  }
}
