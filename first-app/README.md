This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# Install testing
## Testing Library
npm install --save-dev @testing-library/react @testing-library/jest-dom

## Jest + entorno jsdom
npm install --save-dev jest jest-environment-jsdom

## Babel + presets para transformar JSX y TypeScript
npm install --save-dev babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript

npm install --save-dev ts-jest @types/jest

npm test -> Run tests

# Reglas negocio:
## Login
- El sistema debe permitir iniciar sesión solo si el usuario y contraseña coinciden con un registro existente.
- Si las credenciales son incorrectas, se debe mostrar el mensaje: “Usuario o contraseña incorrectos”.
- Si el login es exitoso, se debe mostrar el mensaje: “Login exitoso”.

## Registro de usuarios
- El sistema debe permitir registrar un nuevo usuario con los siguientes campos obligatorios:

      Usuario
      Contraseña
      Nombre completo
      Correo
      Teléfono
      Dirección
- Si alguno de los campos está vacío, se debe mostrar el mensaje: “Por favor, completa todos los campos”.
- Si el nombre de usuario ya existe, se debe mostrar el mensaje: “Usuario ya existe”.
- Si el registro es exitoso, el usuario queda disponible para iniciar sesión inmediatamente.

## Flujo de aceptación completo
- Un usuario puede registrarse y luego iniciar sesión con las credenciales recién creadas.
- El sistema debe validar que el flujo completo (registro → login) termine mostrando “Login exitoso”.
