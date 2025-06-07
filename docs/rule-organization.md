# 📐 Rule Organization Guide

This guide explains how to structure, organize, and manage cursor rules effectively within the framework.

## 🎯 Overview

Rule organization is fundamental to maintaining a clean, scalable, and maintainable cursor rule system. This framework provides a structured approach to organizing rules by scope, domain, and functionality.

## 📂 Directory Structure

### Standard Layout
```
.cursor/
└── rules/
    ├── cursor-rules-management.mdc     # Framework management
    ├── project-config.mdc              # Project configuration
    ├── workflow-state.mdc              # Development workflow
    ├── epics.mdc                       # Epic planning
    ├── architecture.mdc                # Architecture guidelines
    ├── frontend-rules.mdc              # Frontend-specific rules
    ├── backend-rules.mdc               # Backend-specific rules
    ├── testing-rules.mdc               # Testing guidelines
    └── deployment-rules.mdc            # Deployment procedures
```

### Rule Categories

#### **Core Framework Rules** (Always Required)
- `cursor-rules-management.mdc` - Rule system management
- `project-config.mdc` - Project configuration
- `workflow-state.mdc` - Development workflow
- `epics.mdc` - Epic planning
- `rules.mdc` - **Master rule registry** (dynamic rule accumulation)

#### **Domain-Specific Rules** (Project Dependent)
- `frontend-rules.mdc` - UI/UX development
- `backend-rules.mdc` - Server-side development
- `database-rules.mdc` - Database design and queries
- `api-rules.mdc` - API design and implementation

#### **Process Rules** (Team/Project Dependent)
- `testing-rules.mdc` - Testing strategies
- `security-rules.mdc` - Security guidelines
- `performance-rules.mdc` - Performance optimization
- `deployment-rules.mdc` - Deployment procedures

## 🏗️ Rule Hierarchy

### Scope Levels

#### 1. **Global Rules** (`alwaysApply: true`)
Apply to the entire project regardless of file type or location.

```yaml
---
description: Global development standards and practices
globs: "**/*.*"
alwaysApply: true
---
```

**Use Cases:**
- Project-wide coding standards
- General development principles
- Universal quality requirements
- Team collaboration guidelines

#### 2. **Domain Rules** (`alwaysApply: false`)
Apply to specific technology domains or file patterns.

```yaml
---
description: Frontend development guidelines for React components
globs: "src/components/**/*.{tsx,jsx}"
alwaysApply: false
---
```

**Use Cases:**
- Technology-specific guidelines
- Framework conventions
- Language-specific patterns
- File type specific rules

#### 3. **Feature Rules** (`alwaysApply: false`)
Apply to specific features or modules within the project.

```yaml
---
description: Authentication module development guidelines  
globs: "src/auth/**/*.*"
alwaysApply: false
---
```

**Use Cases:**
- Feature-specific implementations
- Module-specific patterns
- Component-specific guidelines
- Business logic rules

## 📋 MDC Metadata Standards

### Required Fields
Every rule must include proper metadata:

```yaml
---
description: Clear, concise description of the rule's purpose
globs: "pattern/to/match/**/*.ext"
alwaysApply: true/false
---
```

### Metadata Best Practices

#### **Description Field**
- **Be Specific**: Clearly state what the rule does
- **Keep Concise**: One sentence explaining the purpose
- **Use Action Words**: Start with verbs like "Defines", "Enforces", "Guides"

```yaml
# ✅ Good
description: "Enforces React component naming conventions and structure"

# ❌ Bad  
description: "React stuff"
```

#### **Globs Field**
- **Be Precise**: Match only the files you intend
- **Use Patterns**: Leverage glob patterns effectively
- **Test Patterns**: Verify patterns match expected files

```yaml
# ✅ Good - Specific to React components
globs: "src/components/**/*.{tsx,jsx}"

# ✅ Good - TypeScript files only
globs: "**/*.{ts,tsx}"

# ❌ Bad - Too broad
globs: "**/*.*"
```

#### **alwaysApply Field**
- **Global Rules**: `true` for project-wide rules
- **Contextual Rules**: `false` for specific contexts
- **Default Safe**: When in doubt, use `false`

## 📝 The Master Rule Registry: `rules.mdc`

### Overview
The `rules.mdc` file serves as the **master rule registry** for your project. This is where all custom, project-specific rules accumulate when you ask the AI to "remember a cursor rule" during development.

### Purpose and Function
- **Dynamic Rule Collection**: Automatically accumulates rules as they're created during development
- **AI Memory System**: Provides the AI with persistent memory of project-specific patterns and decisions
- **Rule Organization Hub**: Centralizes all custom rules before they're broken into domain-specific files
- **Learning Repository**: Captures team knowledge and coding standards over time

### How It Works

#### 1. **Rule Accumulation Process**
```bash
# When you tell the AI to remember something:
"Remember this cursor rule: Always use async/await instead of Promises for database operations"

# The AI automatically adds it to rules.mdc:
## Development Rules
### Database Operations
- **Use async/await pattern**: Always use async/await instead of Promises for database operations
- **Context**: Database interactions, API calls
- **Added**: 2025-01-16
```

#### 2. **Automatic Organization**
When `rules.mdc` grows beyond 500 lines, the AI automatically:
- Breaks rules into domain-specific files (`rules-frontend.mdc`, `rules-backend.mdc`, etc.)
- Maintains references in the master file
- Preserves rule context and relationships

#### 3. **Integration with Framework**
```yaml
---
description: Master rule registry for project-specific development guidelines
globs: "**/*.*"
alwaysApply: true
---
```

### File Structure
```markdown
# Cursor Rule Organization and Codification

## Rule Locations and Scope
[Framework documentation]

## Best Practices
[Rule management guidelines]

## Rule Addition Instructions
[How AI should add new rules]

## Development Rules
<-- This area stores all accumulated rules -->

### [Category 1: e.g., Component Development]
- Rule 1: Description and context
- Rule 2: Description and context

### [Category 2: e.g., Testing Patterns]
- Rule 1: Description and context
- Rule 2: Description and context
```

### Usage Patterns

#### **For Developers**
```bash
# Add a new coding standard
"Remember this rule: All React components must have TypeScript interfaces for props"

# Capture a design decision  
"Remember: We use Zustand for client state, React Query for server state"

# Document a pattern
"Remember this pattern: Error boundaries should wrap each major page component"
```

#### **For AI Assistant**
The AI uses `rules.mdc` to:
- **Apply Consistent Patterns**: Reference accumulated rules during code generation
- **Maintain Context**: Remember decisions across different development sessions  
- **Enforce Standards**: Automatically apply learned patterns to new code
- **Guide Decisions**: Use historical context to make consistent choices

### Rule Categories

#### **Common Rule Types**
1. **Coding Standards**: Naming conventions, code structure, formatting
2. **Architecture Decisions**: Technology choices, design patterns, integration approaches
3. **Testing Requirements**: Testing patterns, coverage requirements, mock strategies
4. **Performance Rules**: Optimization patterns, caching strategies, bundle size limits
5. **Security Guidelines**: Authentication patterns, data validation, API security
6. **Team Conventions**: Code review standards, documentation requirements, deployment processes

#### **Example Rule Entries**
```markdown
### Component Development
- **PascalCase Components**: All React components must use PascalCase naming
- **Props Interfaces**: Every component must have a TypeScript interface for props
- **Default Exports**: Components should use default exports, utilities use named exports
- **Added**: 2025-01-16

### API Integration  
- **Error Handling**: All API calls must use the custom `useApiError` hook
- **Loading States**: API calls must provide loading states using React Query
- **Retry Logic**: Failed requests should retry up to 3 times with exponential backoff
- **Added**: 2025-01-16
```

### Best Practices for `rules.mdc`

#### **Rule Quality**
- **Be Specific**: Vague rules are hard to apply consistently
- **Include Context**: Explain when and why the rule applies
- **Provide Examples**: Show correct and incorrect implementations
- **Date Entries**: Track when rules were added for historical context

#### **Organization**
- **Use Categories**: Group related rules under clear headings
- **Avoid Duplication**: Check existing rules before adding new ones
- **Regular Review**: Periodically review and update outdated rules
- **Cross-Reference**: Link to related rules in other files

#### **Maintenance**
```bash
# Review rules quarterly
"Review the rules.mdc file and identify any outdated or conflicting rules"

# Break up when too large
"The rules.mdc file is getting large. Please organize it into domain-specific files"

# Update based on team feedback
"Update the authentication rules based on our new security requirements"
```

### Integration with Development Workflow

#### **Blueprint Phase**
```bash
# AI references rules.mdc when planning
"Based on your accumulated rules, I'll design the component using your established patterns"
```

#### **Construct Phase**
```bash
# AI applies rules during implementation
"Following your rule about error handling, I'm adding the useApiError hook"
```

#### **Validate Phase**
```bash
# AI checks compliance with accumulated rules
"Reviewing code against your established rules in rules.mdc"
```

### Troubleshooting

#### **Rules Not Being Applied**
1. Check if `rules.mdc` has proper MDC metadata
2. Verify `alwaysApply: true` is set
3. Ensure rules are clear and actionable
4. Test rule specificity and scope

#### **Conflicting Rules**
1. Review rules for contradictions
2. Update or remove outdated rules
3. Add clarification for edge cases
4. Reorganize into clearer categories

#### **Performance Issues**
1. Break large files into domain-specific rules
2. Use more specific glob patterns
3. Archive historical rules that are no longer relevant
4. Optimize rule descriptions for clarity

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

### Best Practices

#### **Specific Scoping**
```yaml
# ✅ Good - Specific scope
globs: "src/components/**/*.{tsx,jsx}"
alwaysApply: false
```

#### **Clear Guidelines**
```markdown
✅ Good
## Guidelines
1. Component names must use PascalCase: `UserProfile`, `NavigationBar`
2. File names must match component name: `UserProfile.tsx`
3. Export default the main component from each file
```

#### **Concrete Examples**
```markdown
✅ Good
### Example: Component Structure
```typescript
// ✅ Good - UserProfile.tsx
export default function UserProfile({ userId }: Props) {
  return <div>User profile content</div>
}

// ❌ Bad - userProfile.tsx
export function userProfile() {
  return <div>content</div>
}
```

## 📈 Scaling Rule Organization

### Small Projects (1-5 developers)
- Keep rules in 3-5 files
- Focus on core patterns
- Minimal domain separation

### Medium Projects (5-20 developers)
- Organize by technology stack
- Create role-specific rules
- Implement review process

### Large Projects (20+ developers)
- Domain-driven rule organization
- Team-specific rule ownership
- Automated rule validation

### Enterprise Projects
- Centralized rule repository
- Cross-project rule sharing
- Governance and approval process

## 🔗 Integration with Development Workflow

### Code Review Integration
- Reference specific rules in PR comments
- Include rule compliance in review checklist
- Use rules to guide code review discussions

### CI/CD Integration
- Validate rule compliance in build process
- Generate rule compliance reports
- Block merges for rule violations

### Documentation Integration
- Link rules to architectural decisions
- Include rules in API documentation
- Reference rules in coding standards

---

## 📞 Need Help?

- **Rule Issues**: Check the [Troubleshooting Guide](troubleshooting.md)
- **Advanced Patterns**: See [Rule Patterns](rule-patterns.md)
- **Team Setup**: Read [Team Integration](team-integration.md)

*This guide covers the fundamentals of rule organization. For advanced topics, explore the [Advanced Rule Patterns](rule-patterns.md) guide.* 