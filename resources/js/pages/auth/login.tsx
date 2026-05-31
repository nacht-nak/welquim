import { Form, Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import InputError from '@/components/input-error';
import PasskeyVerify from '@/components/passkey-verify';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { toForm } from '@/lib/utils';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Log in" />

            <PasskeyVerify />

            <Form
                {...toForm(store())}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            {/* Email address field */}
                            <motion.div
                                className="grid gap-2"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                            >
                                <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Email address or username</Label>
                                <div className="relative group">
                                    <Input
                                        id="email"
                                        type="text"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="username"
                                        placeholder="email or username"
                                        className="border-white/10 dark:border-white/10 bg-neutral-950/40 text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-[var(--neon-blue)] focus:ring-[var(--neon-blue)]/20 rounded-xl py-5 shadow-inner"
                                    />
                                    {/* Focus interactive neon leak glow */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-0 group-focus-within:opacity-15 blur-md transition-opacity duration-300 pointer-events-none" />
                                </div>
                                <InputError message={errors.email} />
                            </motion.div>

                            {/* Password field */}
                            <motion.div
                                className="grid gap-2"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                            >
                                <div className="flex items-center">
                                    <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="ml-auto text-xs text-muted-foreground hover:text-[var(--neon-purple)] transition-colors"
                                            tabIndex={5}
                                        >
                                            Forgot your password?
                                        </TextLink>
                                    )}
                                </div>
                                <div className="relative group">
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Password"
                                        className="border-white/10 dark:border-white/10 bg-neutral-950/40 text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-[var(--neon-purple)] focus:ring-[var(--neon-purple)]/20 rounded-xl py-5 shadow-inner"
                                    />
                                    {/* Focus interactive neon leak glow */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] opacity-0 group-focus-within:opacity-15 blur-md transition-opacity duration-300 pointer-events-none" />
                                </div>
                                <InputError message={errors.password} />
                            </motion.div>

                            {/* Remember me option */}
                            <motion.div
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                            >
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="border-white/20 dark:border-white/20 data-[state=checked]:bg-[var(--neon-blue)] data-[state=checked]:border-[var(--neon-blue)] rounded cursor-pointer"
                                />
                                <Label htmlFor="remember" className="text-sm font-medium text-foreground/80 cursor-pointer select-none">Remember me</Label>
                            </motion.div>

                            {/* Submit button */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                            >
                                <Button
                                    type="submit"
                                    className="relative mt-2 w-full cursor-pointer rounded-xl font-bold bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] hover:from-[var(--neon-blue)] hover:to-[var(--neon-pink)] text-white shadow-lg shadow-[var(--neon-purple)]/10 hover:shadow-[var(--neon-purple)]/30 border-0 overflow-hidden transition-all duration-300 py-6"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {processing && <Spinner className="h-4 w-4" />}
                                        Log in
                                    </span>
                                    {/* Shimmer light overlay on hover */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </Button>
                            </motion.div>
                        </div>


                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-500">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Welcome Master',
    description: 'Enter your credentials to access your administrative workspace',
};
