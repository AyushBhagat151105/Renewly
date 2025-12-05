import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { ClerkClientProvider } from "src/providers/clerk-client.provider";
import { AuthController } from "./auth.controller";
import { ClerkStrategy } from "./clerk.strategy";
import { ClerkAuthGuard } from "./guards/clerkGuard";

@Module({
    imports: [PassportModule],
    controllers: [AuthController],
    providers: [ClerkClientProvider, ClerkStrategy, ClerkAuthGuard],
    exports: [PassportModule, ClerkAuthGuard, ClerkStrategy]

})
export class AuthModule { }