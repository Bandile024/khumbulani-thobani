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
   RESEND_FROM="Mzansi Planners Connect <onboarding@resend.dev>"
   ```

3. Start both processes with `npm run dev`, which runs the API server and the
   Vite dev server together. The dev server proxies `/api` to port 3001.

Enquiries are delivered to **Mzansiplannersconnect@gmail.com**.

Notes on the sender address: `onboarding@resend.dev` works immediately but can
only deliver to the email address on the Resend account. Once a domain is
verified in Resend, set `RESEND_FROM` to that domain (for example
`Mzansi Planners Connect <enquiries@yourdomain.co.za>`) so mail can be sent to
any address.

For production, run `npm run build` and then `npm start` — the server serves
`dist/` and the API from a single port.
