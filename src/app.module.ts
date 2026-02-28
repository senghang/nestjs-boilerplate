import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/provider/database.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
