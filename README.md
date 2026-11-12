# Code Call

Chat, voice and video calls, screen sharing and voice messages with your friends.

**Get it at https://perolanegra.github.io/code-call/.** The page picks the right install for your device.

| Device | How |
|---|---|
| Windows | [CodeCall-Windows-Setup.exe](https://github.com/Perolanegra/code-call/releases/latest/download/CodeCall-Windows-Setup.exe) (or the [.msi](https://github.com/Perolanegra/code-call/releases/latest/download/CodeCall-Windows.msi)) |
| macOS | [CodeCall-macOS.dmg](https://github.com/Perolanegra/code-call/releases/latest/download/CodeCall-macOS.dmg) (universal: Apple Silicon and Intel) |
| iPhone / iPad | Open the site in Safari → Share → **Add to Home Screen** |
| Android | Open the site in Chrome → **Install app** |

Builds are unsigned (study project).
- **Windows:** SmartScreen asks; choose "More info" → "Run anyway".
- **macOS:** right-click the app → Open the first time.

## What this repo is

The app's source code lives in a private repository. This public repo holds what users get:

- `gh-pages`: the website / web app (GitHub Pages);
- **Releases**: the desktop installers;
- `.github/workflows`: the CI/CD. It runs here because Actions minutes are free on public repos.
  - `pipeline.yml` checks the source repo every 10 minutes:
    - it builds the installers of each pull request and reports the result on the PR;
    - for every merge to `main`, it releases (reusing the PR build when possible) and deploys the site.
  - `build.yml` is the reusable Windows and macOS build.

  The source is checked out only inside the build jobs, with the `SOURCE_TOKEN` secret.
