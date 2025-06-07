# 🚀 Release System Quick Reference

> **Professional GitHub Release System for the Cursor Rule Framework**

## 🎯 What's Included

✅ **Automated Release Workflow** - GitHub Actions for seamless releases  
✅ **Semantic Versioning** - SemVer with conventional commits  
✅ **AI-Safe Releases** - Smart detection + prevents accidental major releases  
✅ **Quality Gates** - Validation before every release  
✅ **Release Assets** - Downloadable bundles for users  
✅ **Changelog Automation** - Auto-generated release notes  
✅ **Multiple Release Types** - Patch, minor, major, prerelease  
✅ **Validation Scripts** - Rule and documentation validation  
✅ **Release Templates** - Consistent release formatting  
✅ **Issue Templates** - Streamlined release requests

## 🚀 Quick Start for Maintainers

### Automatic Release (Recommended)
```bash
# Conventional commits (preferred)
git commit -m "feat: add new validation rules"  # → Minor release
git commit -m "fix: resolve parsing issue"      # → Patch release  

# Smart detection works even without conventional format!
git commit -m "Add new rule template"           # → Minor (smart detection)
git commit -m "Update documentation"            # → Patch (smart detection)
git commit -m "Fix validation bug"              # → Patch (smart detection)

# Note: Major releases require manual trigger for AI safety
git push origin main
```

### Manual Release
```bash
# GitHub Actions UI
Actions → Release → Run workflow → Select type → Run

# Command line
npm run release:patch   # Bug fixes
npm run release:minor   # New features
npm run release:major   # Breaking changes
```

## 🔍 Quality Checks

```bash
# Validate before releasing
npm run validate:rules  # Check cursor rule format
npm run validate:docs   # Check documentation quality
npm test               # Run test suite
npm run lint           # Check code style
```

## 📦 What Users Get

Each release automatically creates:
- **Complete Framework Bundle** (`cursor-rule-framework-v1.2.3.tar.gz`)
- **Quick-Start Bundle** (`quick-start-v1.2.3.tar.gz`)  
- **Checksums** (`checksums.txt`)
- **Release Notes** (auto-generated from commits)

## 🏷️ Version Strategy

| Commit Type | Version Bump | Example |
|-------------|--------------|---------|
| `fix:` | Patch | `1.0.0` → `1.0.1` |
| `feat:` | Minor | `1.0.0` → `1.1.0` |
| Manual trigger only | Major | `1.0.0` → `2.0.0` |

## 📋 Pre-Release Checklist

- [ ] All validation scripts pass
- [ ] Documentation is up to date  
- [ ] Examples work correctly
- [ ] CHANGELOG.md Unreleased section is populated
- [ ] No broken links in documentation
- [ ] Test installation from scratch

## 🛠️ Files Created

```
📁 .github/
├── workflows/release.yml          # Main release automation
├── release-template.md            # Release notes template
└── ISSUE_TEMPLATE/release-request.md  # Release request template

📁 scripts/
├── validate-rules.js              # Cursor rule validation
└── validate-docs.js               # Documentation validation

📄 package.json                    # Version management & scripts
📄 docs/release-management.md      # Complete documentation
📄 RELEASE_SYSTEM.md              # This quick reference
```

## 🎭 For Contributors

### Request a Release
1. Create issue using **Release Request** template
2. Fill out the comprehensive checklist
3. Tag maintainers for review

### Trigger Automatic Release
1. Use conventional commit messages
2. Push to `main` branch
3. Release triggers automatically

## 🔧 Troubleshooting

### Common Issues
- **Workflow fails**: Check validation scripts
- **Missing assets**: Re-run workflow 
- **Wrong version**: Delete tag and retry

### Recovery
```bash
# Fix failed release
git tag -d v1.2.3           # Delete local tag
git push origin :v1.2.3     # Delete remote tag
# Fix issue and re-run workflow
```

## 📚 Documentation

- **[Complete Guide](docs/release-management.md)** - Detailed release documentation
- **[AI-Safe Commits](docs/ai-safe-commits.md)** - Working safely with Cursor AI
- **[Contributing](CONTRIBUTING.md)** - How to contribute
- **[Changelog](CHANGELOG.md)** - Version history

## 🎉 Ready to Release?

The system is production-ready! Start using conventional commits or trigger a manual release to see it in action.

---

**Questions?** Check the [complete documentation](docs/release-management.md) or create an [issue](https://github.com/fbrbovic/cursor-rule-framework/issues)! 