# GitHub Actions workflows (staged)

These workflows are kept here, outside `.github/workflows/`, until the publishing token has GitHub's `workflow` scope.
Until then the site is published from the prebuilt `docs/` folder on `main` (GitHub Pages "Deploy from a branch": `main` / `docs`).

To switch to build-on-push with Actions:
1. `gh auth refresh -h github.com -s workflow` (approve the device code in the browser).
2. `git mv ops/github-actions/deploy.yml .github/workflows/deploy.yml` (and `check.yml`), remove `docs/`, commit, push.
3. `gh api -X PUT repos/dankenney/salt-labs-playbook/pages -f build_type=workflow -f cname=playbook.besaltlabs.ai`
