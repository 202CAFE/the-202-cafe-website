# Landing page for 202 Café

This is a code bundle for Landing page for 202 Café. The original project is available at https://www.figma.com/design/NzeQNftayWVosd1qeLMDwb/Landing-page-for-202-Caf%C3%A9.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment Instructions

### Vercel Deployment
1. Push code to GitHub repository
2. Connect Vercel account to GitHub
3. Import the repository in Vercel
4. Vercel will automatically detect it's a Vite project
5. Deploy - site will be live at `your-site-name.vercel.app`

### GitHub Setup
1. Create new repository on GitHub
2. Initialize git in project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

### GoDaddy Domain Setup
1. Purchase domain on GoDaddy
2. In GoDaddy DNS settings, add CNAME record:
   - Type: CNAME
   - Name: @ (or www)
   - Value: cname.vercel-dns.com
3. In Vercel dashboard, go to Settings → Domains
4. Add your custom domain
5. Verify DNS propagation

### Production Build
Run `npm run build` to create optimized production files in `dist/` folder.