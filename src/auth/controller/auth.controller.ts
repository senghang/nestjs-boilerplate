import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { LocalAuthGuard } from '../local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Req() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    return req.logout();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
    return req.user;
  }
}
