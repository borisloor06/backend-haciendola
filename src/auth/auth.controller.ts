import { Controller, Post, UseGuards, Request, Res, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local/local-auth.guard';
import { JwtGuard } from './guards/jwt/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async create(@Request() req, @Res() res) {
    const result = await this.authService.login(req.user);
    return res.status(200).send(result);
  }

  @UseGuards(JwtGuard)
  @Get('/validate')
  async validate() {
    return { valid: true };
  }
}
