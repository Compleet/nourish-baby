#!/bin/bash
# Deploy Nourish Baby to Cloudflare Pages

set -e

# Build
echo "Building..."
npm run build

# Deploy
echo "Deploying to Cloudflare Pages..."
CLOUDFLARE_API_TOKEN="eP9b9ZcVQ_WnU5Ud1MAnVyH6XEbD460RQWKSp5-v" \
CLOUDFLARE_ACCOUNT_ID="05c1c14b179be989445db9f5c2e26763" \
wrangler pages deploy dist --project-name nourish-baby --branch main

echo "Done! Live at https://nourish-baby.pages.dev"
