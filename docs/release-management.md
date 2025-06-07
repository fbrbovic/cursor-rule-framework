# 🚀 Release Management Guide

This guide covers the complete release management system for the Cursor Rule Framework, including automated workflows, versioning strategy, and best practices.

## 📋 Overview

Our release system follows open source best practices with:

- **Semantic Versioning (SemVer)**: Clear version numbering strategy
- **Automated Releases**: GitHub Actions workflows for consistent releases  
- **Changelog Generation**: Automatic release notes from commits
- **Quality Gates**: Validation before releases
- **Multiple Release Types**: Patch, minor, major, and prerelease support
- **Release Assets**: Downloadable bundles for users

## 🏷️ Versioning Strategy

We follow [Semantic Versioning](https://semver.org/) with the format `MAJOR.MINOR.PATCH`:

### Version Types

| Type | Format | When to Use | Examples |
|------|--------|-------------|----------|
| **Major** | `X.0.0` | Breaking changes, new core architecture | `1.0.0` → `2.0.0` |
| **Minor** | `0.X.0` | New features, backward compatible | `1.1.0` → `1.2.0` |
| **Patch** | `0.0.X` | Bug fixes, documentation updates | `1.1.1` → `1.1.2` |
| **Prerelease** | `0.0.0-alpha.X` | Testing, beta features | `1.2.0-beta.1` |

### Conventional Commits

Our automated release system triggers based on conventional commit messages:

```bash
# Triggers PATCH release
fix: resolve issue with rule validation
docs: update installation guide

# Triggers MINOR release  
feat: add new architecture validation rules
feat: implement epic progress tracking

# Triggers MAJOR release
feat!: restructure rule organization system
BREAKING CHANGE: rule format has changed

# Prerelease (manual only)
feat: experimental AI suggestions feature
```

## 🤖 Automated Release Workflow

### Trigger Conditions

**Automatic Releases** (on push to `main`):
- Commits with `feat:`, `fix:`, `perf:`, or `BREAKING CHANGE:` 
- Creates releases automatically based on commit type

**Manual Releases** (workflow dispatch):
- Triggered manually from GitHub Actions tab
- Choose release type: patch, minor, major, prerelease
- Specify prerelease identifier: alpha, beta, rc

### Workflow Steps

1. **🔍 Validation Phase**
   - Validate cursor rules (`.mdc` format, YAML frontmatter)
   - Validate documentation (broken links, formatting)
   - Run quality checks

2. **📝 Version Calculation**
   - Determine new version based on commit messages or manual input
   - Update `package.json` version
   - Generate changelog from commits

3. **🏷️ Tagging & Assets**
   - Create Git tag with new version
   - Generate release assets:
     - Complete framework bundle
     - Quick-start bundle (essential rules only)
     - SHA256 checksums

4. **🚀 GitHub Release**
   - Create GitHub release with generated changelog
   - Upload release assets
   - Update CHANGELOG.md

5. **📊 Post-Release**
   - Commit changelog updates
   - Generate release summary
   - Notify about release completion

## 📦 Release Assets

Each release includes these downloadable assets:

### Complete Framework Bundle
```bash
cursor-rule-framework-v{VERSION}.tar.gz
```
- All documentation and examples
- Complete `.cursor/rules/` directory
- README, LICENSE, CHANGELOG

### Quick-Start Bundle  
```bash
quick-start-v{VERSION}.tar.gz
```
- Essential `.cursor/rules/` only
- README and LICENSE
- Minimal setup for immediate use

### Checksums
```bash
checksums.txt
```
- SHA256 hashes for all assets
- Verify download integrity

## 🔧 Manual Release Process

### For Maintainers

**Option 1: GitHub Actions UI**
1. Go to **Actions** tab → **Release** workflow
2. Click **Run workflow**
3. Select release type and prerelease identifier (if applicable)
4. Click **Run workflow**

**Option 2: Command Line**
```bash
# Patch release
npm run release:patch

# Minor release  
npm run release:minor

# Major release
npm run release:major

# Prerelease
npm run release:prerelease
```

**Option 3: Using Git Tags**
```bash
# Create and push tag
git tag v1.2.3
git push origin v1.2.3

# The release workflow will trigger automatically
```

### For Contributors

Contributors cannot directly create releases, but can:

1. **Use Conventional Commits** for automatic releases:
   ```bash
   git commit -m "feat: add new rule validation system"
   ```

2. **Request a Release** by creating an issue:
   ```markdown
   **Release Request**
   
   - Type: Minor
   - Reason: New features ready for release
   - Changes: List key changes since last release
   ```

## 📋 Pre-Release Checklist

Before any release, ensure:

### Code Quality
- [ ] All tests pass
- [ ] No linting errors
- [ ] Rule validation passes (`npm run validate:rules`)
- [ ] Documentation validation passes (`npm run validate:docs`)

### Documentation
- [ ] CHANGELOG.md is up to date
- [ ] README.md reflects current features
- [ ] All links work correctly
- [ ] Examples are current and functional

### Testing
- [ ] Manual testing of key features
- [ ] Example projects work correctly
- [ ] New rules validate properly
- [ ] Installation instructions are accurate

### Release Notes
- [ ] Changelog includes all significant changes
- [ ] Breaking changes are clearly documented
- [ ] Migration guides provided (if needed)
- [ ] Known issues documented

## 🐛 Troubleshooting Releases

### Common Issues

**Release workflow fails**
```bash
# Check workflow logs in GitHub Actions
# Common causes:
# - Validation failures
# - Permission issues
# - Invalid version format
```

**Missing release assets**
```bash
# Re-run the release workflow
# Or upload assets manually:
gh release upload v1.2.3 assets/*.tar.gz
```

**Changelog not updated**
```bash
# Manually update and commit:
npm run changelog
git add CHANGELOG.md
git commit -m "docs: update changelog for v1.2.3"
git push origin main
```

### Recovery Procedures

**Fix a failed release**:
1. Delete the problematic tag and release
2. Fix the underlying issue
3. Re-run the release workflow

**Emergency hotfix**:
1. Create hotfix branch from latest release tag
2. Apply minimal fix
3. Create patch release directly from hotfix branch

## 📈 Release Analytics

### GitHub Insights
- **Releases**: Track download metrics
- **Traffic**: Monitor documentation views
- **Issues**: Correlate releases with bug reports

### Monitoring
```bash
# Check release assets downloads
gh api repos/fbrbovic/cursor-rule-framework/releases

# Monitor release frequency
git tag --list | grep -E '^v[0-9]' | sort -V

# Track changelog growth
wc -l CHANGELOG.md
```

## 🎯 Best Practices

### For Maintainers

1. **Regular Releases**: 
   - Aim for releases every 2-4 weeks
   - Don't let changes accumulate too long

2. **Quality First**:
   - Never skip validation steps
   - Test thoroughly before releasing

3. **Clear Communication**:
   - Write descriptive release notes
   - Highlight breaking changes prominently

4. **Version Planning**:
   - Plan major releases carefully
   - Communicate breaking changes in advance

### For Contributors

1. **Conventional Commits**:
   - Use clear, descriptive commit messages
   - Follow the conventional format for automatic releases

2. **Documentation**:
   - Update docs with your changes
   - Include examples where helpful

3. **Testing**:
   - Test your changes thoroughly
   - Include validation scripts if needed

## 🔮 Future Enhancements

Planned improvements to the release system:

- **Automated Testing**: Integration tests before releases
- **Release Scheduling**: Automated periodic releases
- **Notification System**: Slack/Discord notifications
- **Metrics Dashboard**: Release analytics and insights
- **Release Candidates**: Automatic RC creation before major releases

## 🔗 Related Documentation

- **[Contributing Guide](../CONTRIBUTING.md)** - How to contribute to the project
- **[Changelog](../CHANGELOG.md)** - Complete project history
- **[GitHub Releases](https://github.com/fbrbovic/cursor-rule-framework/releases)** - All releases
- **[Semantic Versioning](https://semver.org/)** - Versioning specification
- **[Keep a Changelog](https://keepachangelog.com/)** - Changelog format

---

**Questions about releases?** Create an [issue](https://github.com/fbrbovic/cursor-rule-framework/issues) or start a [discussion](https://github.com/fbrbovic/cursor-rule-framework/discussions)! 