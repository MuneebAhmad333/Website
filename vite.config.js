import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Website/', // Replace "Website" with your repository name
  plugins: [react()],
});
