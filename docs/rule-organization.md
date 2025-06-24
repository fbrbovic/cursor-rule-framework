# 📐 Rule Organization Guide v2

This guide explains how to structure, organize, and manage cursor rules effectively within the **v2 framework**.

## 🎯 Overview

Rule organization is fundamental to maintaining a clean, scalable, and maintainable cursor rule system. The **v2 framework** provides a comprehensive, technology-agnostic approach to organizing rules by scope, domain, and functionality with enhanced modularity and epic integration.

## 📂 v2 Directory Structure

### v2 Standard Layout
```
.cursor/
└── rules/
    └── rule-framework-v2/              # 🆕 v2 Framework Root
        ├── Core Framework Files/
        │   ├── project-config.mdc           # Project template
        │   ├── rules.mdc                    # Technology-agnostic global rules
        │   ├── workflow-state.mdc           # Workflow management
        │   └── user-rules-template.mdc      # ⚠️ INSTALL IN CURSOR SETTINGS
        ├── Epic Management (7 Files)/       # 🆕 7 Specialized Components
        │   ├── epic-lifecycle-rules.mdc     # Epic lifecycle automation
        │   ├── epic-active.mdc              # Active epics workspace
        │   ├── epic-planned.mdc             # Planned epics pipeline
        │   ├── epic-completed.mdc           # Completed epics archive
        │   ├── epic-registry.mdc            # Master epic registry
        │   ├── epic-validation-automation.mdc # Validation automation
        │   └── epic-architecture-integration.mdc # Architecture integration
        ├── Workflow System/                 # 🆕 Enhanced Workflow Management
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
        └── Framework Management/            # 🆕 Lifecycle Management
            ├── architecture-lifecycle.mdc   # Architecture automation
            └── cursor-rules-management.mdc  # Rule management
```

### Custom Project Extensions (Optional)
```
.cursor/rules/rule-framework-v2/
└── project-specific/                   # 🎯 Add Your Technology-Specific Rules
    ├── frontend-react.mdc              # React-specific patterns (create as needed)
    ├── backend-node.mdc                # Node.js-specific patterns (create as needed)
    ├── database-postgres.mdc           # PostgreSQL-specific patterns (create as needed)
    ├── mobile-react-native.mdc         # React Native patterns (create as needed)
    └── testing-jest.mdc                # Jest testing patterns (create as needed)
```

### v2 Rule Categories

#### **Core Framework Rules** (Always Required)
- `project-config.mdc` - Technology-agnostic project configuration template
- `rules.mdc` - Universal global rules applicable to any technology stack
- `workflow-state.mdc` - Enhanced development workflow management
- `user-rules-template.mdc` - Cursor IDE integration template

#### **Epic Management System** (7 Specialized Components)
- `epic-lifecycle-rules.mdc` - Epic lifecycle automation and state management
- `epic-active.mdc` - Active epics workspace with current initiatives
- `epic-planned.mdc` - Planned epics pipeline for future work
- `epic-completed.mdc` - Completed epics archive for reference
- `epic-registry.mdc` - Master epic registry with comprehensive tracking
- `epic-validation-automation.mdc` - Automated validation and consistency checks
- `epic-architecture-integration.mdc` - Epic-architecture coordination

#### **Architecture Framework** (Modular System)
- `architecture/index.mdc` - Master architecture navigation and domain organization
- `architecture/core/patterns.mdc` - Universal architectural patterns (technology-agnostic)
- `architecture/core/maintenance.mdc` - Architecture maintenance and quality gates
- `architecture/decisions/` - ADR management system with templates and examples
- `architecture/workflows/` - Workflow integration patterns

#### **Technology-Specific Extensions** (Project Created)
- `project-specific/frontend-*.mdc` - Frontend technology patterns (create as needed)
- `project-specific/backend-*.mdc` - Backend technology patterns (create as needed)
- `project-specific/database-*.mdc` - Database-specific patterns (create as needed)
- `project-specific/mobile-*.mdc` - Mobile development patterns (create as needed)
- `project-specific/testing-*.mdc` - Testing framework patterns (create as needed)

## 🏗️ v2 Rule Hierarchy

### v2 Scope Levels

#### 1. **Universal Rules** (`alwaysApply: true`)
Apply to entire project regardless of technology stack or file type.

```yaml
---
description: Universal development standards applicable to any technology
globs: "**/*.*"
alwaysApply: true
---
```

**Use Cases:**
- Technology-agnostic coding standards
- Universal development principles
- Cross-platform quality requirements
- Team collaboration guidelines that transcend technology choices

#### 2. **Technology Domain Rules** (`alwaysApply: false`)
Apply to specific technology domains using flexible glob patterns.

```yaml
---
description: React component development guidelines
globs: "src/components/**/*.{tsx,jsx,ts,js}"
alwaysApply: false
---
```

**Use Cases:**
- Technology-specific guidelines (React, Vue, Angular, etc.)
- Framework conventions (Express, FastAPI, Spring Boot, etc.)
- Language-specific patterns (TypeScript, Python, Java, etc.)
- Platform-specific rules (Web, Mobile, Desktop)

#### 3. **Epic Context Rules** (`alwaysApply: false`)
Apply within specific epic contexts, integrating with the epic management system.

```yaml
---
description: Authentication epic development guidelines
globs: "src/auth/**/*.*"
alwaysApply: false
epicContext: "AUTHENTICATION_SYSTEM_EPIC"
---
```

**Use Cases:**
- Epic-specific implementations
- Feature module patterns
- Business domain rules
- Initiative-specific guidelines

## 📋 v2 MDC Metadata Standards

### Enhanced Required Fields
Every v2 rule must include comprehensive metadata:

```yaml
---
description: Clear, concise description of the rule's purpose
globs: "pattern/to/match/**/*.ext"
alwaysApply: true/false
technologyStack: ["React", "TypeScript", "Node.js"]  # Optional
epicContext: "EPIC_ID"                                # Optional
architectureDomain: "frontend" | "backend" | "core"  # Optional
---
```

### v2 Metadata Best Practices

#### **Description Field**
- **Be Technology-Agnostic**: When possible, describe universal patterns
- **Specify Technology When Needed**: Clarify technology-specific rules
- **Use Action Words**: Start with verbs like "Defines", "Enforces", "Guides"

```yaml
# ✅ Good - Technology-agnostic
description: "Enforces consistent naming conventions across all components"

# ✅ Good - Technology-specific when needed
description: "Enforces React Hook rules and component lifecycle patterns"

# ❌ Bad - Too vague
description: "Component stuff"
```

#### **Enhanced Globs Field**
- **Support Multiple Technologies**: Use flexible patterns for technology diversity
- **Epic-Aware Patterns**: Include epic context in glob patterns when relevant
- **Architecture Domain Alignment**: Match architecture domain boundaries

```yaml
# ✅ Good - Multi-technology support
globs: ["src/components/**/*.{tsx,jsx,vue,svelte}", "components/**/*.{ts,js}"]

# ✅ Good - Epic-specific
globs: "src/epics/authentication/**/*.*"

# ✅ Good - Architecture domain aligned
globs: "backend/api/**/*.{ts,js,py,java}"
```

#### **Technology Stack Field**
```yaml
# Optional field for technology-specific rules
technologyStack: ["React", "TypeScript", "Vite"]
```

#### **Epic Context Field**
```yaml
# Optional field linking rules to specific epics
epicContext: "USER_AUTHENTICATION_EPIC"
```

## 📝 v2 Global Rules System: `rules.mdc`

### Overview
The v2 `rules.mdc` file serves as the **technology-agnostic global rule registry** for your project. This enhanced system provides universal patterns while supporting technology-specific extensions.

### Purpose and Function
- **Universal Rule Collection**: Accumulates technology-agnostic rules applicable across any stack
- **Epic-Integrated Memory**: Provides AI with persistent memory linked to epic context
- **Architecture-Aware Organization**: Coordinates with architecture framework for consistency
- **Cross-Technology Learning**: Captures patterns that work across multiple technology stacks

### v2 How It Works

#### 1. **Technology-Agnostic Rule Accumulation**
```bash
# When you tell the AI to remember universal patterns:
"Remember this cursor rule: Always use descriptive variable names regardless of programming language"

# The AI automatically adds it to rules.mdc:
## Universal Development Rules
### Code Quality
- **Descriptive Naming**: Always use descriptive variable names regardless of programming language
- **Technology**: Universal (applies to JavaScript, Python, TypeScript, Java, etc.)
- **Epic Context**: Code Quality Improvement Initiative
- **Added**: 2025-01-27
```

#### 2. **Epic-Architecture Integration**
```bash
# When rules relate to specific epics:
"Remember this pattern for the Authentication Epic: Always validate user permissions at the API gateway level"

# The AI coordinates with epic system:
## Epic-Specific Rules
### Authentication Epic (AUTHENTICATION_SYSTEM_EPIC)
- **API Gateway Validation**: Always validate user permissions at the API gateway level
- **Architecture Domain**: Backend Security
- **Epic Phase**: Phase 2 - Core Implementation
- **Added**: 2025-01-27
```

#### 3. **Automatic Architecture Coordination**
When `rules.mdc` accumulates patterns, the AI automatically:
- Evaluates rules for architecture domain relevance
- Creates appropriate technology-specific files (`project-specific/`)
- Maintains cross-references in architecture navigation
- Updates epic-architecture integration

### v2 File Structure
```markdown
# Cursor Rule Organization and Codification v2

## Universal Development Standards
[Technology-agnostic rules applicable to any project]

## Epic-Integrated Rules
[Rules organized by epic context with architecture coordination]

## Technology-Specific Extensions
[Links to domain-specific rule files]

## Architecture Coordination
[Integration with modular architecture framework]
```

## 🔧 v2 Rule Management Workflows

### Creating Technology-Agnostic Rules
```bash
# 1. Identify universal patterns
"Create a rule for consistent error handling that works with any programming language"

# 2. AI creates technology-agnostic rule
# 3. Rule automatically added to rules.mdc
# 4. Architecture framework notified for consistency checking
```

### Creating Technology-Specific Rules
```bash
# 1. Identify technology-specific need
"Create a React-specific rule for component lifecycle management"

# 2. AI determines appropriate technology-specific location
# 3. Creates/updates project-specific/frontend-react.mdc
# 4. Updates architecture navigation
# 5. Links to relevant epic if applicable
```

### Epic-Driven Rule Creation
```bash
# 1. Epic context drives rule creation
"For the Authentication Epic, create rules for JWT token handling"

# 2. AI coordinates with epic system
# 3. Creates rules with epic context metadata
# 4. Updates epic-architecture integration
# 5. Tracks in epic progress
```

## 📈 v2 Advanced Organization Patterns

### Multi-Technology Projects
```
project-specific/
├── frontend-react.mdc       # React web frontend
├── frontend-vue.mdc         # Vue.js admin panel
├── mobile-react-native.mdc  # Mobile app
├── backend-node.mdc         # Node.js API server
├── backend-python.mdc       # Python ML services
├── database-postgres.mdc    # PostgreSQL patterns
└── database-redis.mdc       # Redis caching patterns
```

### Epic-Architecture Matrix
```
epic-active.mdc:
├── AUTHENTICATION_EPIC
│   ├── Architecture Impact: backend, frontend, database
│   ├── Technology Stack: Node.js, React, PostgreSQL
│   └── Rule Coordination: Automatic
├── MOBILE_APP_EPIC
│   ├── Architecture Impact: mobile, backend
│   ├── Technology Stack: React Native, GraphQL
│   └── Rule Coordination: Automatic
```

### Team Specialization Support
```
project-specific/
├── team-frontend/           # Frontend team patterns
│   ├── react-patterns.mdc
│   └── design-system.mdc
├── team-backend/            # Backend team patterns
│   ├── api-patterns.mdc
│   └── database-patterns.mdc
└── shared/                  # Cross-team patterns
    ├── testing-patterns.mdc
    └── ci-cd-patterns.mdc
```

## 🎯 v2 Migration from v1

### Rule Migration Process
1. **Backup existing rules**: Preserve v1 rule content
2. **Analyze technology dependencies**: Identify technology-specific vs universal patterns
3. **Create technology-specific files**: Extract technology patterns to project-specific directory
4. **Update epic integration**: Link existing rules to epic context where applicable
5. **Validate architecture alignment**: Ensure rules align with v2 architecture framework

### Migration Checklist
- [ ] Move rules to `rule-framework-v2/` directory structure
- [ ] Separate universal vs technology-specific patterns
- [ ] Create appropriate `project-specific/` files
- [ ] Update epic context metadata
- [ ] Validate with architecture framework
- [ ] Test cross-technology compatibility

## 🔍 v2 Best Practices

### Universal Pattern Development
1. **Think Cross-Technology**: Design patterns that work across programming languages
2. **Epic Integration**: Consider how rules support current epic initiatives
3. **Architecture Alignment**: Ensure rules align with architectural domains
4. **Team Coordination**: Design rules that support team collaboration across technologies

### Technology-Specific Rule Creation
1. **Technology Isolation**: Keep technology-specific rules in project-specific directory
2. **Cross-Reference**: Link related patterns across different technologies
3. **Epic Context**: Maintain epic context even in technology-specific rules
4. **Migration Readiness**: Design rules to survive technology changes

### Epic-Architecture Coordination
1. **Epic-First Thinking**: Consider epic context when creating rules
2. **Architecture Impact**: Evaluate how rules affect architectural consistency
3. **Cross-Epic Learning**: Share patterns across different epic contexts
4. **Lifecycle Management**: Plan rule evolution through epic phases

---

**v2 Advantage**: The enhanced rule organization system provides technology flexibility while maintaining consistency and epic coordination, supporting complex multi-technology projects with robust governance.

## 🎯 Rule Naming Conventions

### File Naming
```bash
# Domain-specific rules
frontend-rules.mdc
backend-rules.mdc
database-rules.mdc

# Process-specific rules
testing-rules.mdc
security-rules.mdc
deployment-rules.mdc

# Feature-specific rules
auth-rules.mdc
payment-rules.mdc
dashboard-rules.mdc
```

### Naming Guidelines
- **Use kebab-case**: `my-rule-name.mdc`
- **Be descriptive**: Name should indicate purpose
- **Include domain**: When applicable, include domain prefix
- **Avoid abbreviations**: Use full words for clarity

## 📖 Rule Content Structure

### Standard Template
```markdown
---
description: [Clear description of rule purpose]
globs: [File pattern to match]
alwaysApply: [true/false]
---

# Rule Title

Brief description of what this rule accomplishes.

## When This Applies
- Specific conditions when rule is relevant
- File types or patterns affected
- Development phases where it's used

## Guidelines
1. First guideline with clear action
2. Second guideline with examples
3. Third guideline with reasoning

## Examples
### ✅ Good Examples
[Code examples showing correct implementation]

### ❌ Bad Examples  
[Code examples showing what to avoid]

## Common Mistakes
- Mistake 1: Description and why to avoid
- Mistake 2: Description and how to fix
- Mistake 3: Alternative approaches

## Related Rules
- [Link to related rule 1]
- [Link to related rule 2]

## References
- [External documentation]
- [Team standards]
- [Technology documentation]
```

## 🔄 Rule Management Workflow

### Creating New Rules

1. **Identify Need**
   - Recurring patterns in code reviews
   - Team knowledge gaps
   - Technology-specific requirements

2. **Determine Scope**
   - Global vs. domain-specific
   - File patterns affected
   - Team members who benefit

3. **Write Rule**
   - Follow template structure
   - Include proper metadata
   - Add concrete examples

4. **Test Rule**
   - Verify in Cursor IDE
   - Test with real project files
   - Validate glob patterns

5. **Document Usage**
   - Update project documentation
   - Share with team members
   - Include in onboarding materials

### Updating Existing Rules

1. **Preserve Metadata**
   - Never modify metadata without careful consideration
   - Test changes thoroughly
   - Document breaking changes

2. **Version Control**
   - Use descriptive commit messages
   - Tag major rule changes
   - Maintain changelog

3. **Team Communication**
   - Announce significant changes
   - Provide migration guidance
   - Update related documentation

## 🧪 Testing and Validation

### Rule Testing Checklist
- [ ] **Metadata Valid**: All required fields present
- [ ] **Globs Correct**: Patterns match intended files
- [ ] **Content Clear**: Guidelines are actionable
- [ ] **Examples Work**: Code examples are functional
- [ ] **No Conflicts**: No conflicts with existing rules

### Validation Process
```bash
# 1. Open project in Cursor IDE
cursor .

# 2. Check rule appears in rule picker
# CMD/Ctrl + Shift + P → "Cursor: Rules"

# 3. Test on sample files
# Create test files matching glob patterns

# 4. Verify rule application
# Check that rule appears when editing matching files

# 5. Test edge cases
# Verify behavior with different file types
```

## 🚨 Common Pitfalls

### Anti-Patterns to Avoid

#### **Overly Broad Rules**
```yaml
# ❌ Bad - Too broad
globs: "**/*.*"
alwaysApply: true
```

#### **Conflicting Rules**
```yaml
# ❌ Bad - Same pattern, different guidelines
# Rule 1
globs: "src/**/*.ts"
# Rule 2 with conflicting advice
globs: "src/**/*.ts"
```

#### **Vague Guidelines**
```markdown
❌ Bad
## Guidelines
1. Write good code
2. Follow best practices
3. Be consistent
```

#### **Missing Examples**
```markdown
❌ Bad - No concrete examples
## Guidelines
1. Use proper naming conventions
```