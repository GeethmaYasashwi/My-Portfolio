# How to Run and Deploy to Netlify

This document provides a clear, step-by-step guide on how to run your React portfolio locally and deploy it to Netlify.

---

## 1. Run the Portfolio Locally

First, run the development server to check the website on your local machine:

```bash
# Start the local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view your portfolio.

---

## 2. Build for Production

Before deploying to Netlify, compile your React code into optimization-friendly HTML, CSS, and JS:

```bash
# Build the production bundle
npm run build
```

This command generates a `dist` folder in your project's root directory. The contents of this folder will be uploaded to Netlify.

---

## 3. Deploy to Netlify (Two Easy Methods)

You can choose either of these two methods to deploy your website to Netlify.

### Method A: Direct Upload (Drag-and-Drop) — *Fastest for testing*

This method does not require Git or GitHub.

1. **Log in to Netlify**: Go to [Netlify App](https://app.netlify.com/) and log in (or sign up).
2. **Navigate to Deploys**: In your Netlify dashboard, go to the **Sites** tab.
3. **Upload the build**: Scroll down to the bottom of the page, where you'll see a dashed box saying:
   > *"Want to deploy a new site without connecting to Git? Drag and drop your site folder here."*
4. **Drag the `dist` folder**: Drag and drop the compiled **`dist`** folder (from your local workspace root directory) directly into this box.
5. **Done!** Your site will deploy instantly, and Netlify will provide you with a live URL (e.g., `https://random-name.netlify.app`).

---

### Method B: Continuous Deployment via GitHub — *Recommended*

This method links your Netlify site to your GitHub repository. Every time you commit and push code changes to GitHub, Netlify will automatically rebuild and deploy your site!

#### Step 1: Push your code to GitHub
1. Open your terminal in the project directory.
2. Initialize and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initialize React portfolio website"
   ```
3. Create a new repository on [GitHub](https://github.com/) named `My-Portfolio`.
4. Link your local project to GitHub and push your code (replace `YOUR_USERNAME` with your real GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/My-Portfolio.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Link Netlify to GitHub
1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Click the **Add new site** button and select **Import an existing project**.
3. Choose **GitHub** as your Git provider and authorize Netlify.
4. Select your `My-Portfolio` repository from the list.
5. In the Build settings, Netlify will automatically detect:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy My-Portfolio**.
7. **Done!** Netlify will start building your site. Once completed, your portfolio is live. Any future `git push` command will automatically trigger a new deployment.

---

## 4. Customize Your URL

By default, Netlify assigns a random site name. You can customize this:
1. In the Netlify dashboard, go to **Site configuration** -> **Domain management**.
2. Click **Options** next to the subdomain, then click **Edit site name**.
3. Change it to something personal (e.g. `geethma-yasashwi.netlify.app`) and save.
