# Contributing to Cursor Rule Framework

First off, thank you for considering contributing to the Cursor Rule Framework! 🎉

This framework helps developers worldwide build better software with AI assistance, and your contributions make that possible.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Development Guidelines](#-development-guidelines)
- [Rule Development Standards](#-rule-development-standards)
- [Pull Request Process](#-pull-request-process)
- [Community](#-community)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- **Cursor IDE** - [Download here](https://cursor.com/)
- **Git** - Version control
- **Basic knowledge** of Cursor AI features and MDC file format

### Local Development Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/cursor-rule-framework.git
   cd cursor-rule-framework
   ```

2. **Set up upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/cursor-rule-framework.git
   ```

3. **Open in Cursor IDE**
   ```bash
   cursor .
   ```

4. **Test the framework**
   - Try the example workflows
   - Verify rules load correctly in Cursor
   - Test with a sample project

## 🤝 How Can I Contribute?

### 🐛 **Bug Reports**

Found a bug? Help us fix it!

**Before submitting:**
- Check existing [issues](https://github.com/your-username/cursor-rule-framework/issues)
- Test with the latest version
- Gather relevant information

**Bug Report Template:**
```markdown
**Description:** Clear description of the bug
**Steps to Reproduce:** 
1. Step one
2. Step two
3. Bug occurs

**Expected Behavior:** What should happen
**Actual Behavior:** What actually happens
**Environment:**
- Cursor IDE Version: 
- OS: 
- Framework Version: 
**Additional Context:** Screenshots, logs, etc.
```

### 💡 **Feature Requests**

Have an idea? We'd love to hear it!

**Feature Request Template:**
```markdown
**Problem:** What problem does this solve?
**Solution:** Describe your proposed solution
**Alternatives:** Any alternative approaches considered?
**Implementation:** Technical approach (if known)
**Impact:** Who benefits and how?
```

### 📝 **Documentation Improvements**

Documentation is crucial for adoption:
- Fix typos or unclear explanations
- Add missing examples
- Improve existing guides
- Create new tutorials
- Translate documentation

### 🔧 **Code Contributions**

#### Rule Contributions
- New cursor rules for specific domains
- Improvements to existing rules
- Better rule organization patterns
- Enhanced metadata structures

#### Framework Improvements
- Workflow enhancements
- Better validation tools
- Performance optimizations
- New example projects

## 🛠️ Development Guidelines

### Branch Naming Convention

```bash
feature/description-of-feature    # New features
bugfix/description-of-fix         # Bug fixes
docs/description-of-change        # Documentation
refactor/description-of-change    # Code refactoring
```

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(rules): add TypeScript validation rule
fix(workflow): correct blueprint phase validation
docs(readme): improve quick start guide
```

## 📐 Rule Development Standards

### MDC File Requirements

All cursor rules must follow these standards:

#### 1. **Proper Metadata**
```yaml
---
description: Clear, concise description of the rule's purpose
globs: pattern/to/match/**/*.ext
alwaysApply: true/false
---
```

#### 2. **Clear Structure**
```markdown
# Rule Title

Brief description of what this rule does.

## When This Applies
- Specific conditions
- File types or patterns
- Development phases

## Guidelines
1. Numbered guidelines
2. Clear and actionable
3. Include examples

## Examples
Concrete examples of correct usage.

## Common Mistakes
What to avoid and why.
```

#### 3. **File Naming**
- Use kebab-case: `my-rule-name.mdc`
- Be descriptive but concise
- Include domain if applicable: `frontend-styling.mdc`

#### 4. **Scope Appropriateness**
- **Global rules** (`alwaysApply: true`): Apply to entire project
- **Domain rules** (`alwaysApply: false`): Apply to specific file patterns
- **Feature rules**: Apply to specific features or components

### Rule Quality Checklist

Before submitting a rule, ensure:

- [ ] **Clear Purpose**: Rule has a specific, well-defined purpose
- [ ] **Proper Metadata**: All required metadata fields present
- [ ] **Correct Globs**: File patterns match intended scope
- [ ] **Actionable Guidelines**: Instructions are clear and specific
- [ ] **Examples Included**: Concrete examples of usage
- [ ] **Tested**: Rule works correctly in Cursor IDE
- [ ] **Documented**: Purpose and usage are explained

### Testing Your Rules

1. **Functional Testing**
   ```bash
   # Open test project in Cursor
   cursor examples/test-project/
   
   # Verify rule appears in Cursor's rule picker
   # Test rule application on relevant files
   # Confirm expected behavior
   ```

2. **Integration Testing**
   ```bash
   # Test with different project types
   # Verify no conflicts with existing rules
   # Check performance impact
   ```

## 🔄 Pull Request Process

### Before Submitting

1. **Update your fork**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/my-awesome-rule
   ```

3. **Make your changes**
   - Follow development guidelines
   - Add/update tests if applicable
   - Update documentation

4. **Test thoroughly**
   - Test in multiple scenarios
   - Verify no breaking changes
   - Check rule validation

### PR Requirements

- [ ] **Clear Description**: What does this PR do and why?
- [ ] **Testing**: All changes tested locally
- [ ] **Documentation**: Updated relevant docs
- [ ] **No Breaking Changes**: Or clearly documented
- [ ] **Rule Validation**: New rules follow standards
- [ ] **Examples**: Include usage examples if applicable

### PR Template

```markdown
## Summary
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Rule improvement
- [ ] Breaking change

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Verified in Cursor IDE

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

### Review Process

1. **Automated Checks**: Must pass all CI checks
2. **Maintainer Review**: Core team reviews code and design
3. **Community Feedback**: Open for community input
4. **Testing**: Validated in various environments
5. **Merge**: Approved PRs are merged to main

## 📖 Documentation Standards

### Writing Guidelines

- **Clear and Concise**: Easy to understand for all skill levels
- **Action-Oriented**: Focus on what users should do
- **Examples**: Include practical examples
- **Structured**: Use consistent formatting and organization
- **Tested**: Verify all instructions work

### Documentation Types

1. **API Documentation**: Technical specifications
2. **Tutorials**: Step-by-step guides
3. **Examples**: Real-world usage patterns
4. **Reference**: Quick lookup information

## 🌟 Recognition

Contributors are recognized in several ways:

- **Contributors List**: Added to README.md
- **Release Notes**: Major contributions highlighted
- **Hall of Fame**: Special recognition for significant impact
- **Maintainer Invitation**: Outstanding contributors may be invited as maintainers

## 💬 Community

### Getting Help

- **Discussions**: [GitHub Discussions](https://github.com/your-username/cursor-rule-framework/discussions)
- **Issues**: [Bug reports and feature requests](https://github.com/your-username/cursor-rule-framework/issues)
- **Wiki**: [Community knowledge base](https://github.com/your-username/cursor-rule-framework/wiki)

### Communication Guidelines

- **Be Respectful**: Treat everyone with kindness and respect
- **Be Constructive**: Provide helpful, actionable feedback
- **Be Patient**: Remember that volunteers maintain this project
- **Be Clear**: Communicate clearly and provide context

## 🎯 Next Steps

Ready to contribute? Here's how to get started:

1. **Choose an Issue**: Look for "good first issue" labels
2. **Ask Questions**: Don't hesitate to ask for clarification
3. **Start Small**: Begin with documentation or small improvements
4. **Share Ideas**: Discuss your ideas before implementing large changes

## 📞 Need Help?

- **General Questions**: [GitHub Discussions](https://github.com/your-username/cursor-rule-framework/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/your-username/cursor-rule-framework/issues)
- **Security Issues**: Email security@your-domain.com

---

**Thank you for contributing to the Cursor Rule Framework! 🙏**

*Together, we're making AI-assisted development better for everyone.* 