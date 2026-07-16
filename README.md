# Engineering Portfolio Starter

A static, GitHub Pages-ready portfolio inspired by the interaction pattern of Oliver Chang's public portfolio, but rebuilt with original code and original SVG illustrations.

## Customize

Search and replace:

- `Your Name`
- `YN`
- `San Diego, CA`
- Social/project links
- Project descriptions
- Resume content

Edit the rotating titles in `script.js`.

Place your real resume at:

```text
assets/resume.pdf
```

## Run locally

You can open `index.html` directly, or use VS Code Live Server.

With Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save. GitHub will publish the site at:
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

For `https://YOUR-USERNAME.github.io/`, name the repository:
`YOUR-USERNAME.github.io`

## Structure

```text
.
├── index.html
├── about.html
├── projects.html
├── resume.html
├── styles.css
├── script.js
└── assets/
    └── resume.pdf
```

No build tools, Node.js, framework, or server is required.
