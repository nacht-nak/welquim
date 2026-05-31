import inertia from '@inertiajs/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
    const plugins = [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),

        inertia(),

        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),

        tailwindcss(),
    ];

    // Skip Wayfinder on Vercel
    if (!process.env.VERCEL) {
        try {
            const { execSync } = await import('child_process');

            execSync('php --version', {
                stdio: 'ignore',
            });

            const { wayfinder } = await import(
                '@laravel/vite-plugin-wayfinder'
            );

            plugins.push(
                wayfinder({
                    formVariants: true,
                })
            );
        } catch {
            console.log('PHP unavailable — skipping Wayfinder');
        }
    }

    return { plugins };
});