# Checklist

Put an `x` in between the `[ ]` to mark an item as complete, e.g. `[x]`.

## Build
- [x] Form notification emails - received by client (check each form on website)
- [x] Form submissions stored in database
- [x] Form - whitelist domain/IP in catcher
- [x] Browser testing
- [x] A 404 template has been created
- [x] SVG icons have been optimised

## Accessibility
By default we should adhere to WCAG AA standard
- [x] Contrast ratio checked
- [x] Check issues in Accessbility Tools (Firefox/Chrome) - are there any remaining issues that need to be documented?

## Development and Deployment
- [x] A DDEV config has been added to the project (see [instructions here](https://github.com/jamesforddesign/wiki/wiki/DDEV))
- [x] Netlify configured for staging
- [x] Netlify configured for production

## Licencing
- [-] Craft CMS licence purchased and registered
- [-] Craft Plugin licences purchased and registered (List all plugins here)
- [-] Image licencing - are all images correctly licenced?

## SEO and Analytics
- [x] `<title>` set correctly on each page
- [x] `<meta description="">` set correctly on each page
- [x] `<link rel="canonical" href="https://URL/" />` set correctly for each page
- [x] `<link rel="alternate" href="https://WEBSITE/" hreflang="en-gb" />` set correctly on all pages
- [x] Facebook Open Graph and Twitter Card tags set correctly on each page
- [x] Google Tag Manager - page tracking
- [x] Google Tag Manager - download tracking
- [x] XML sitemap
- [x] Google Search Console - domain property setup and XML sitemap submitted
- [x] robots.txt file configured for each environment (see [instructions here](https://github.com/jamesforddesign/wiki/wiki/robots.txt))

## Social
- [-] Twitter link (if present) linked to client account
- [-] Facebook link (if present) linked to client account

## Legal
- [x] The site has a (correct) cookie and/or privacy policy
- [x] The site has a cookie consent pop-up (check which type the site requires)
- [x] If using CookieFirst, the site does not set any cookies until the user has consented

## Monitoring
- [x] Setup Bugsnag
- [x] Add site to UptimeRobot

## Performance Benchmark
Select 3 pages including:
- Homepage
- 'Product' page (Enter URL)
- Other page (Enter URL)

### [WebPageTest](https://www.webpagetest.org/)

| Metric                 | Home Page    | Product Page | Other Page   |
|------------------------|--------------|--------------|--------------|
| First Byte Time        |              |              |              |
| Keep-alive Enabled     |              |              |              |
| Compress Transfer      |              |              |              |
| Compress Images        |              |              |              |
| Cache static content   |              |              |              |
| Effective use of CDN   |              |              |              |

### [Google Lighthouse](https://web.dev/)

| Metric                 | Home  |Contact| 
|------------------------|-------|-------|
| Performance            |  92   |  89   |       
| Accessibility          |  94   |  94   |       
| Best Practices         |  100  |  100  |       
| SEO                    |  100  |  95   |       

## DNS and Email
- [x] 301 redirects from old URLs to new URLs
- [x] Redirect non-www to www (or vice versa)
- [x] Email accounts setup and details saved in LastPass (if applicable)
- [x] Alias domains configured correctly (if applicable)
- [x] The system email address is configured to send emails from a client email address (not digital@jfd.co.uk)

## Grabber
- [-] Take Screenshots of Go Live if paid for Grabber License (Check Quote)

## General admin
- [x] Project readme (README.md) has been created in the project root and contains instructions for setting up the project from scratch
- [x] All details necessary to get the site running have been saved in Lastpass (Craft security key, AWS credentials, etc)
- [-] CMS credentials have been saved in LastPass for all environments (local, staging, production)
- [-] Database credentials have been saved in LastPass for all environments (local, staging, production)
- [-] FTP credentials have been saved in LastPass for all environments (local, staging, production)
- [-] Project added to maintenance spreadsheet

## Backups
- [-] Set up a backup configuration (if hosted on Digital Ocean/Forge)