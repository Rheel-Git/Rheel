# Rheel Group Corporate Website

A responsive corporate website for Rheel Group, built with React, Vite and React Router.

## Requirements
- Node.js 20 or newer
- npm

## Local development
```bash
npm install
cp .env.example .env
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
The static production output is written to `dist/`.

## Enquiry forms
Forms are wired to a configurable Formspree-compatible endpoint. Set `VITE_FORMSPREE_ENDPOINT` in the deployment environment to the endpoint for your approved form service. Without it, the site does **not** pretend to submit enquiries; it displays an error and offers `hello@rheeltech.ng` as an alternative. Before launch, configure the endpoint, submit test enquiries and confirm delivery to the intended mailbox. Do not put private API keys in `VITE_` variables; Vite exposes these values in the browser.

## Deployment
The project builds to static files and can be deployed to GitHub Pages, Netlify, Vercel or another static host. Configure SPA fallback/rewrite rules so direct visits to `/about`, `/businesses/rheel-estate`, `/partnerships` and other routes serve `index.html`.

For GitHub Pages, use a Pages workflow or compatible deployment action and configure the custom domain `rheelgroup.ng` only after DNS and domain ownership are ready. For Netlify, add a redirect rule `/* /index.html 200`. For Vercel, configure an SPA rewrite if required by the chosen deployment setup.

## Production checklist
- [ ] Configure `VITE_FORMSPREE_ENDPOINT` and test contact and partnership submissions.
- [ ] Confirm form processor privacy terms and update the Privacy Notice with the selected provider.
- [ ] Confirm whether the legal terms need review for the operating entity and applicable law.
- [ ] Configure canonical domain and redirects at the hosting provider.
- [ ] Test every route and external link on deployed preview.
- [ ] Check mobile layouts at 360, 390, 768, 1024 and 1440 px.
- [ ] Confirm no missing image assets and no browser console errors.

## Content and assets
Approved supplied copy is maintained in `src/main.jsx`. Images are stored in `public/assets/` with descriptive filenames. The subsidiaries without a confirmed external website are shown without invented links.
