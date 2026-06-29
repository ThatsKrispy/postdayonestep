# Post Day One Step — Static Rebuild

Fast, mobile-first static rebuild of postdayonestep.com for Cloudflare Pages.

## Stripe setup (no backend required)
This site uses Stripe's hosted **Buy Button** + a **Payment Link** fallback. No server code needed.

1. In Stripe Dashboard, create a Product → Price ($24.99) for "Post Day One Step".
2. **Buy Button:** Dashboard → Payment Links → Buy Button → create one for that price.
   - Copy the `buy-button-id` and your `pk_live_...` publishable key.
   - In `index.html`, replace `REPLACE_WITH_BUY_BUTTON_ID` and `pk_live_REPLACE_WITH_PUBLISHABLE_KEY`.
3. **Payment Link fallback:** Dashboard → Payment Links → create a link for the same price.
   - Replace `https://buy.stripe.com/REPLACE_WITH_PAYMENT_LINK` in the `.btn buy-fallback` href.
   - (Optional) Once the Buy Button is live, you can delete the fallback `<a>`.

> The publishable key (`pk_live_`) is safe to ship in client-side code. Never put a secret key (`sk_`) in this static site.

## Deploy (Cloudflare Pages)
- Push to GitHub → connect repo in Cloudflare Pages.
- Build command: *(none)* · Output directory: `/` (root).
- Drag-and-drop deploy also works.

## To do for client
- Confirm Amazon link URL (currently `#` placeholder in the buy card).
- Provide/confirm Privacy Policy page (`privacy-policy.html` not yet created).
- Wire newsletter form to a provider (currently inert).
