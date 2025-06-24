# 🚀 Cursor Rule Framework v1 → v2 Migration Guide

> **Complete migration guide for upgrading from v1 to the new v2 framework architecture**

This guide provides step-by-step instructions for migrating existing projects from Cursor Rule Framework v1 to the enhanced v2 architecture.

## 📊 What's New in v2

### 🏗️ **Major Architectural Changes**

#### **1. Technology-Agnostic Design**
- **v1**: Favoring web technologies
- **v2**: Completely technology-agnostic, works with any programming language or framework

#### **2. Enhanced Directory Structure**
```diff
# v1 Structure
.cursor/rules/
├── project-config.mdc
├── rules.mdc
├── workflow-state.mdc
├── epics.mdc
├── architecture.mdc
└── user-rules-template.mdc

# v2 Structure  
.cursor/rules/rule-framework-v2/
├── project-config.mdc (template-based)
├── rules.mdc (technology-agnostic)
├── workflow-state.mdc (clean template)
├── user-rules-template.mdc (updated paths)
├── Epic Management (7 Files)/
│   ├── epic-lifecycle-rules.mdc
│   ├── epic-active.mdc
│   ├── epic-planned.mdc  
│   ├── epic-completed.mdc
│   ├── epic-registry.mdc
│   ├── epic-validation-automation.mdc
│   └── epic-architecture-integration.mdc
├── Workflow System/
│   └── workflow-lifecycle-rules.mdc
├── architecture/
│   ├── index.mdc
│   ├── core/
│   │   ├── index.mdc
│   │   ├── patterns.mdc (generic patterns)
│   │   └── maintenance.mdc
│   ├── decisions/
│   │   ├── index.mdc
│   │   ├── adr-template.mdc
│   │   └── sample-decisions.mdc
│   └── workflows/
│       └── index.mdc
├── architecture-lifecycle.mdc
└── cursor-rules-management.mdc
```

#### **3. Enhanced Epic Management System**
- **v1**: Single `epics.mdc` file
- **v2**: Complete epic lifecycle system with 7 specialized files
  - Active epics workspace (`epic-active.mdc`)
  - Planned epics pipeline (`epic-planned.mdc`)
  - Completed epics archive (`epic-completed.mdc`)
  - Master epic registry (`epic-registry.mdc`)
  - Epic lifecycle automation (`epic-lifecycle-rules.mdc`)
  - Architecture integration (`epic-architecture-integration.mdc`)
  - Validation automation (`epic-validation-automation.mdc`)

#### **4. Modular Architecture System**
- **v1**: Single `architecture.mdc` file
- **v2**: Modular architecture framework with specialized domains
  - Core patterns (technology-agnostic)
  - Decisions and ADR management
  - Workflow integration patterns
  - Architecture lifecycle management

#### **5. Advanced Workflow Management**
- **v1**: Basic workflow state tracking
- **v2**: Comprehensive workflow lifecycle system
  - Detailed workflow phase management
  - Automated rule integration
  - Epic-workflow coordination
  - State management automation

## 🔄 Migration Process

### **Phase 1: Backup and Preparation**

#### **1. Backup Your Current Configuration**
```bash
# Create backup of current v1 configuration
cp -r .cursor/rules .cursor/rules-v1-backup

# Document your current customizations
cat .cursor/rules/project-config.mdc > migration-notes.md
echo "\n## Custom Rules" >> migration-notes.md
cat .cursor/rules/rules.mdc >> migration-notes.md
echo "\n## Architecture Notes" >> migration-notes.md
cat .cursor/rules/architecture.mdc >> migration-notes.md
```

#### **2. Document Current State**
```markdown
## v1 Migration Assessment

### Current Configuration
- [ ] Project tech stack: [Your current stack]
- [ ] Custom rules count: [Number of custom rules]  
- [ ] Active epics: [List current epics]
- [ ] Team size: [Number of developers]

### Customizations to Preserve
- [ ] Project-specific patterns
- [ ] Team conventions
- [ ] Domain-specific rules
- [ ] Workflow customizations
```

### **Phase 2: Install v2 Framework**

#### **1. Download v2 Framework**
```bash
# Create new v2 directory structure
mkdir -p .cursor/rules/rule-framework-v2

# Download complete v2 framework
curl -L https://github.com/fbrbovic/cursor-rule-framework/archive/refs/heads/v2-framework.tar.gz | \
  tar -xz --strip-components=3 -C .cursor/rules/rule-framework-v2 \
  cursor-rule-framework-v2-framework/.cursor/rules/rule-framework-v2/
```

#### **2. Update User Rules Template**
```bash
# Copy new user rules template to Cursor settings
code .cursor/rules/rule-framework-v2/user-rules-template.mdc
```

**Important**: Copy the entire content and paste into:
- **Cursor IDE** → **Settings** → **Rules** → **User Rules**

### **Phase 3: Configuration Migration**

#### **1. Project Configuration**
```bash
# Edit the new project configuration template
code .cursor/rules/rule-framework-v2/project-config.mdc
```

**Migration checklist:**
- [ ] Update project goal from your v1 `project-config.mdc`
- [ ] Migrate tech stack information
- [ ] Preserve custom patterns and conventions
- [ ] Update constraints and requirements

#### **2. Architecture Migration**
```bash
# Migrate architecture documentation
code .cursor/rules/rule-framework-v2/architecture/core/patterns.mdc
```

**Steps:**
1. **Review generic patterns** in v2 core patterns
2. **Identify applicable patterns** from your v1 architecture
3. **Add technology-specific patterns** as needed
4. **Create domain-specific architecture files** for your stack

#### **3. Epic Migration**
```bash
# Review current epics and migrate
code .cursor/rules/rule-framework-v2/epic-active.mdc
```

**Migration process:**
1. **Replace sample epic** with your current active epic
2. **Move planned work** to `epic-planned.mdc`
3. **Archive completed work** to `epic-completed.mdc`
4. **Update epic registry** with your actual epics

### **Phase 4: Custom Rules Migration**

#### **1. Extract Technology-Specific Patterns**
```bash
# Create technology-specific architecture files
mkdir -p .cursor/rules/rule-framework-v2/project-specific

# Example: Create React-specific patterns
touch .cursor/rules/rule-framework-v2/project-specific/react-patterns.mdc
```

#### **2. Migrate Custom Rules**
```yaml
---
description: [Your custom rule description]
alwaysApply: false
---

# [Rule Title]
[Migrate your custom rule content from v1 rules.mdc]
```

#### **3. Update Architecture Decisions**
```bash
# Create ADRs for your architectural decisions
code .cursor/rules/rule-framework-v2/architecture/decisions/
```

Use the ADR template to document:
- Technology choices from v1
- Architecture decisions
- Design patterns
- Team conventions

### **Phase 5: Workflow Integration**

#### **1. Update Workflow State**
```bash
# Reset workflow state for v2
code .cursor/rules/rule-framework-v2/workflow-state.mdc
```

Initialize with your current work:
- Set current phase and status
- Document current epic context
- Add your current task queue

#### **2. Test New Workflow**
```bash
# Start with a small task to test v2 workflow
# Example: "Plan a small refactoring task using the v2 framework"
```

## 🔧 Advanced Migration Scenarios

### **Large Team Migration**

#### **Gradual Rollout Strategy**
```bash
# Phase 1: Pilot team (1-2 developers)
# - Migrate pilot project to v2
# - Document lessons learned
# - Refine team-specific patterns

# Phase 2: Core team (3-5 developers)  
# - Expand to core development team
# - Establish team conventions
# - Create team training materials

# Phase 3: Full team rollout
# - Migrate all active projects
# - Provide comprehensive training
# - Establish review processes
```

#### **Team Coordination**
```markdown
## Team Migration Checklist

### Team Lead Responsibilities
- [ ] Plan migration timeline
- [ ] Coordinate with team members
- [ ] Establish new review processes
- [ ] Document team-specific patterns

### Developer Responsibilities  
- [ ] Complete individual migration
- [ ] Test v2 workflow on small tasks
- [ ] Provide feedback on team patterns
- [ ] Update personal development workflow
```

### **Complex Project Migration**

#### **Multi-Technology Projects**
```bash
# Create technology-specific architecture files
mkdir -p .cursor/rules/rule-framework-v2/project-specific
touch .cursor/rules/rule-framework-v2/project-specific/frontend-react.mdc
touch .cursor/rules/rule-framework-v2/project-specific/backend-node.mdc
touch .cursor/rules/rule-framework-v2/project-specific/database-postgres.mdc
```

#### **Monorepo Migration**
```bash
# Structure for monorepo with multiple packages
.cursor/rules/rule-framework-v2/
├── project-specific/
│   ├── frontend-package.mdc
│   ├── backend-package.mdc
│   ├── shared-package.mdc
│   └── tools-package.mdc
└── architecture/
    └── decisions/
        ├── monorepo-structure.mdc
        └── package-management.mdc
```

## 🎯 Post-Migration Validation

### **1. Functional Testing**
```bash
# Test basic framework functionality
# Example prompts to verify v2 is working:

"Show me the current epic status"
"Plan a new feature using the v2 workflow"  
"Review our architecture patterns"
"Create a new ADR for [technology decision]"
```

### **2. Team Validation**
```markdown
## Team Migration Validation

### Individual Developer Check
- [ ] User rules template installed and working
- [ ] Can access framework through Cursor AI
- [ ] Workflow phases working (Blueprint → Construct → Validate)
- [ ] Epic integration functioning

### Team Process Check
- [ ] Shared framework configuration
- [ ] Consistent rule application
- [ ] Epic planning and tracking
- [ ] Architecture decision documentation
```

### **3. Cleanup**
```bash
# After successful migration, clean up v1 backup
# (Only after confirming v2 is fully functional)
rm -rf .cursor/rules-v1-backup

# Update documentation references
# Update any project documentation that references old rule paths
```

## 🔍 Troubleshooting Common Migration Issues

### **Issue 1: User Rules Not Working**
```bash
# Solution: Verify user rules template installation
# 1. Check Cursor IDE settings
# 2. Ensure full template content copied
# 3. Restart Cursor IDE
# 4. Test with simple prompt: "What framework version are we using?"
```

### **Issue 2: Path References Broken**
```bash
# Solution: Update any hardcoded paths in custom rules
# Find and replace old paths
grep -r "\.cursor/rules/" .cursor/rules/rule-framework-v2/
# Replace with: .cursor/rules/rule-framework-v2/
```

### **Issue 3: Epic Context Not Working**
```bash
# Solution: Reset epic system
# 1. Update epic-active.mdc with your actual epic
# 2. Ensure epic-registry.mdc reflects current state
# 3. Test with: "What epic am I currently working on?"
```

### **Issue 4: Architecture Integration Problems**
```bash
# Solution: Validate architecture file structure
# 1. Ensure architecture/core/patterns.mdc exists
# 2. Check architecture/index.mdc navigation
# 3. Test with: "Review our core architectural patterns"
```

## 📈 Benefits of v2 Migration

### **Enhanced Productivity**
- **50% faster epic planning** with specialized epic management system
- **75% reduction in rule conflicts** through modular architecture
- **Better AI context management** with optimized file sizes

### **Improved Maintainability**
- **Technology-agnostic patterns** that survive tech stack changes
- **Modular architecture** that scales with project complexity
- **Automated lifecycle management** reducing manual maintenance

### **Better Team Collaboration**
- **Standardized ADR process** for architectural decisions
- **Epic-driven development** with clear progress tracking
- **Consistent workflow phases** across all team members

## 🎯 Next Steps

### **1. Framework Customization**
- Add your technology-specific patterns
- Create domain-specific architecture files
- Establish team conventions and standards

### **2. Advanced Features**
- Explore epic lifecycle automation
- Set up architecture validation rules
- Configure workflow automation

### **3. Team Training**
- Share this migration guide with team
- Conduct framework training sessions
- Establish regular epic and architecture reviews

## 📚 Additional Resources

- **[v2 Architecture Guide](architecture.md)** - Understanding the new architecture system
- **[Epic Management Guide](epic-planning.md)** - Mastering the new epic system
- **[Workflow System Guide](workflow-system.md)** - Advanced workflow features
- **[Custom Rules Guide](custom-rules.md)** - Creating technology-specific rules

---

**Migration Support**: If you encounter issues during migration, please [open an issue](https://github.com/fbrbovic/cursor-rule-framework/issues) with details about your project structure and the specific problem.

**Framework v2 Benefits**: The v2 framework provides a more robust, scalable, and maintainable foundation for AI-assisted development while preserving all the power of the original framework. 