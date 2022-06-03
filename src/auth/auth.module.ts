import { Module } from '@nestjs/common';
import { SupabaseStrategy } from './supabase.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [SupabaseStrategy],
  exports: [SupabaseStrategy],
})
export class AuthModule {}
