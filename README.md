# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/b972cd4b-2b00-44d8-9059-62ee4cfc2afb

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Contact form email (Resend)

The contact form posts to `POST /api/contact`, which is handled by
[server.js](server.js). The Resend API key stays on the server and is never
exposed to the browser.

1. Create a free API key at https://resend.com/api-keys
2. Add it to [.env.local](.env.local) (copy [.env.example](.env.example)):

   ```
   RESEND_API_KEY="re_..."
   CONTACT_TO_EMAIL="mzansiplannersconnect@gmail.com"
   ```

3. Start both processes with `npm run dev`, which runs the API server and the
   Vite dev server together. The dev server proxies `/api` to port 3001.

Enquiries are delivered to **Mzansiplannersconnect@gmail.com**.
Set `CONTACT_TO_EMAIL` to change the destination inbox. The server uses
Resend's `onboarding@resend.dev` test sender, which can only deliver to the
email address associated with the Resend account. To send to a different
recipient, verify a domain in Resend and configure a sender address on that
domain in `server.js`.

For production, run `npm run build` and then `npm start` — the server serves
`dist/` and the API from a single port.

For Vercel, `vercel.json` sets the Vite build output to `dist/` and rewrites
deep links to the SPA entry point. The `api/contact.js` function exports the
same Express contact handler used locally. Set `RESEND_API_KEY` and
`CONTACT_TO_EMAIL` in Vercel's server-side environment variables, then redeploy.
