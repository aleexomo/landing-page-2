<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1S4CV8ky85c9HDnhjZXSd5-PlAMNCMBYQ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Preview the static landing page

The repository now includes a standalone `index.html` landing page (no build step required). You can preview it in either of the following ways:

- **Open the file directly:** double-click `index.html` (or drag it into your browser). This is the fastest option and works because all assets are self-contained.
- **Serve with a lightweight local server (recommended):**
  1. From the repository root, run `python -m http.server 3000` (Python 3 is pre-installed on most systems).
  2. Open your browser to `http://localhost:3000/index.html`.

Using a local server closely matches how the page will behave when deployed, especially for testing relative paths and caching.
