# 📚 Cursor Rule Framework v2 Documentation

Welcome to the comprehensive documentation for the **Cursor Rule Framework v2**! This guide will help you master AI-assisted development with our enhanced, technology-agnostic cursor rule system.

## 🆕 New to v2?

**Existing v1 Users**: Start with our **[v1 → v2 Migration Guide](v1-to-v2-migration.md)** for a complete upgrade path.

**New Users**: Follow the quick start guide below to get started with v2.

## 🎯 Getting Started

New to the framework? Start here:

1. **[Quick Start Guide](../README.md#-quick-start)** - Get up and running with v2 in 5 minutes
   - ⚠️ **CRITICAL**: Install `user-rules-template.mdc` from `rule-framework-v2/` in Cursor IDE User Rules
2. **[Core Concepts](#-core-concepts)** - Understand the v2 fundamental principles
3. **[Your First Rule](custom-rules.md#creating-your-first-rule)** - Create a technology-agnostic custom rule
4. **[Workflow Basics](workflow-system.md#basic-workflow)** - Learn the enhanced three-phase development process

## 📖 Core Concepts

### Essential v2 Guides
- **[Rule Organization](rule-organization.md)** - How v2 rules are structured and managed
  - Modular rule hierarchy with technology-agnostic patterns
  - Enhanced MDC metadata format
  - **v2 Directory Structure** - `rule-framework-v2/` organization
  - Location policies and technology-agnostic best practices

- **[Workflow System](workflow-system.md)** - Enhanced AI-driven development with comprehensive epic and architecture integration  
  - Advanced phase-by-phase development with automatic architecture validation
  - Quality gates and validation with architectural consistency
  - State management and tracking with epic progress updates
  - **v2 Workflow Lifecycle Rules** - Comprehensive automation framework

- **[Epic Planning](epic-planning.md)** - Advanced large initiative management with AI (7 specialized components)
  - **Epic Management System**: Active, Planned, Completed, Registry, Lifecycle, Validation, Architecture Integration
  - Epic → Phase → Step hierarchy with comprehensive architecture impact assessment
  - AI-assisted planning techniques with automatic architecture integration
  - Advanced progress tracking and validation with workflow system integration

### New v2 Features
- **[Architecture System](architecture.md)** - Modular architecture framework with specialized domains
  - Core patterns (technology-agnostic)
  - Decisions and ADR management
  - Workflow integration patterns
  - Architecture lifecycle management

- **[v1 → v2 Migration](v1-to-v2-migration.md)** - Complete migration guide
  - Technology-agnostic transformation
  - Enhanced directory structure migration
  - Epic system upgrade
  - Architecture framework migration

## 🛠️ Development Guides

### Rule Development
- **[Custom Rules](custom-rules.md)** - Creating technology-agnostic and domain-specific rules
- **[Rule Testing](rule-testing.md)** - Validating rule effectiveness across technology stacks
- **[Rule Templates](rule-templates.md)** - Copy-paste v2 rule examples

### Team Workflows
- **[Team Integration](team-integration.md)** - Multi-developer workflows with v2 epic system
- **[Best Practices](best-practices.md)** - Proven patterns for technology-agnostic success

### Architecture & Design
- **[Architecture Patterns](architecture-patterns.md)** - Technology-agnostic scalable system design
- **[Migration Guide](migration-guide.md)** - Adopting v2 framework in existing projects

## 📋 Reference Documentation

### Technical Reference
- **[MDC Format Specification](mdc-format-specification.md)** - Complete v2 MDC format reference
- **[Troubleshooting Guide](troubleshooting.md)** - Common v2 issues and solutions
- **[FAQ](faq.md)** - Frequently asked questions about v2

### Examples & Templates
- **[Example Projects](../examples/README.md)** - Real-world v2 usage examples (technology-agnostic)
- **[Rule Templates](rule-templates.md)** - Copy-paste v2 rule examples

## 🎓 Learning Resources

### By Role
- **[For Developers](for-developers.md)** - Individual developer workflows with v2
- **[For Teams](for-teams.md)** - Team collaboration patterns with epic management system
- **[For Architects](for-architects.md)** - System design and architecture with modular framework

### Advanced Topics
- **[Smart Detection](smart-detection-examples.md)** - Advanced AI pattern recognition
- **[Release Management](release-management.md)** - Version control and deployment strategies

## 🆘 Support & Troubleshooting

### Getting Help
- **[Troubleshooting Guide](troubleshooting.md)** - Common v2 issues and solutions
- **[FAQ](faq.md)** - Frequently asked questions about v2
- **[v1 → v2 Migration Help](v1-to-v2-migration.md)** - Complete upgrade guidance

### Contributing
- **[Contributing Guide](../CONTRIBUTING.md)** - How to contribute to the v2 project

## 💡 Tips for v2 Success

1. **Start with Migration**: If upgrading from v1, follow the [migration guide](v1-to-v2-migration.md) carefully
2. **Embrace Technology Agnostic**: Use v2's universal patterns that work across any tech stack
3. **Leverage Epic System**: Take advantage of the 7-component epic management system for large initiatives
4. **Use Modular Architecture**: Organize your patterns using v2's specialized architecture domains
5. **Test Across Technologies**: Validate rules work with multiple programming languages/frameworks
6. **Share Universal Patterns**: Document technology-agnostic patterns for maximum team reuse

## 🔄 v2 Framework Structure Quick Reference

```
.cursor/rules/rule-framework-v2/
├── Core Framework Files/
│   ├── project-config.mdc           # Project template
│   ├── rules.mdc                    # Technology-agnostic global rules
│   ├── workflow-state.mdc           # Workflow management
│   └── user-rules-template.mdc      # ⚠️ INSTALL IN CURSOR SETTINGS
├── Epic Management System (7 Files)/
│   ├── epic-lifecycle-rules.mdc     # Epic lifecycle automation
│   ├── epic-active.mdc              # Active epics workspace
│   ├── epic-planned.mdc             # Planned epics pipeline
│   ├── epic-completed.mdc           # Completed epics archive
│   ├── epic-registry.mdc            # Master epic registry
│   ├── epic-validation-automation.mdc # Validation automation
│   └── epic-architecture-integration.mdc # Architecture integration
├── Workflow System/
│   └── workflow-lifecycle-rules.mdc # Workflow automation
├── Architecture Framework/          # 🆕 Modular Architecture System
│   ├── index.mdc                    # Master architecture navigation
│   ├── core/
│   │   ├── index.mdc                # Core patterns navigation
│   │   ├── patterns.mdc             # Universal patterns
│   │   └── maintenance.mdc          # Maintenance rules
│   ├── decisions/
│   │   ├── index.mdc                # Decision navigation
│   │   ├── adr-template.mdc         # ADR template
│   │   └── sample-decisions.mdc     # Example ADRs
│   └── workflows/
│       └── index.mdc                # Workflow patterns
└── Framework Management/
    ├── architecture-lifecycle.mdc   # Architecture automation
    └── cursor-rules-management.mdc  # Rule management
```

## 📞 Need Help?

- **🐛 Bug Reports**: [GitHub Issues](https://github.com/fbrbovic/cursor-rule-framework/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/fbrbovic/cursor-rule-framework/discussions)
- **📖 Wiki**: [Community Wiki](https://github.com/fbrbovic/cursor-rule-framework/wiki)
- **🔄 v2 Migration Help**: [v1 → v2 Migration Guide](v1-to-v2-migration.md)

---

**Ready to dive into v2?** Start with the [Quick Start Guide](../README.md#-quick-start) or [explore v2's enhanced features](#new-v2-features) above!

*This documentation reflects the v2 framework. Last updated: January 27, 2025* 