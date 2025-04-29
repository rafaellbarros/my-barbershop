import { inject } from '@angular/core';
import { SupabaseService } from '@shared/services/supabase/supabase.service';

export const injectSupabase = () => {
  const supabase = inject(SupabaseService);
  return supabase.supabase;
};
