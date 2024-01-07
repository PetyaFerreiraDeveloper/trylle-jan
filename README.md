This is a [Next.js](https://nextjs.org/), tailwind and typescript project.
This project is a website for Magic Jan, and it contains library with pictures and information pages.

## Getting Started

First, run the development server:

```npm run dev```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The project is deployed on Vercel. It can be accessed via this link: [trylle-jan-new](https://trylle-jan.vercel.app/)

## Backend

For backend we are using wordpress API to get images and text from the current web site: [trylle-jan-current](https://tryllejan.dk/)

All images from the Galleri page are in this endpoint:
[galery-end-point](https://tryllejan.dk/wp-json/wp/v2/media?parent=62)