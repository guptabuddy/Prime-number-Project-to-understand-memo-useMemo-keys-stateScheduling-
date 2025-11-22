// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// After using the Million.js (L-217)
import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// // https://vite.dev/config/
export default defineConfig({
	plugins: [million.vite({ auto: true }), react()],
});
