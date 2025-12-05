import { Controller, Get, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../decorators/current-user.decorator";
import { ClerkAuthGuard } from "./guards/clerkGuard";
import type { User } from "@clerk/backend";

@Controller("auth")
export class AuthController {
    @Get('me')
    @UseGuards(ClerkAuthGuard)
    async getProfile(@CurrentUser() user: User) {
        return user;
    }
}