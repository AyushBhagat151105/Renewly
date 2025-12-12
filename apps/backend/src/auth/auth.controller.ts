import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Protected()
    @UseGuards(ClerkAuthGuard)
    @Get("/")
    getUserDetails(@CurrentUser() user: User) {
        return user
    }

}
