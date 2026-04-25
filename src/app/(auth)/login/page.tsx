// src/app/(auth)/login/page.tsx

"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function LoginPage() {
    return (
        <Card className="w-full max-w-md rounded-lg border bg-primary-foreground shadow-sm">
            <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-semibold text-foreground">
                    Welcome Back
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                    Sign in with Google to continue to your dashboard.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Button
                    type="button"
                    className="w-full"
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                    Continue with Google
                </Button>
            </CardContent>
        </Card>
    )
}