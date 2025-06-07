# 📖 MDC Format Specification

Complete reference for the MDC (Markdown with Cursor) format used in the Cursor Rule Framework.

## 🎯 Overview

MDC files are enhanced Markdown files with YAML frontmatter that provide structured rules for AI assistants. They combine the readability of Markdown with the structured metadata of YAML.

### **Basic Structure**
```mdc
---
description: Brief description of the rule's purpose
globs: "file/path/patterns/**/*.{ext}"
alwaysApply: false
priority: 1
tags: ["tag1", "tag2"]
---

# Rule Title

Rule content written in standard Markdown format.
```

## 📋 YAML Frontmatter Specification

### **Required Fields**

#### **`description`** (string, required)
Brief description of what the rule accomplishes.

```yaml
description: "React component development standards with TypeScript"
```

**Best Practices:**
- Keep under 80 characters
- Be specific about the rule's purpose
- Use present tense
- Avoid redundant words

**Examples:**
```yaml
# Good
description: "API endpoint validation with Zod schemas"

# Bad  
description: "This rule is for validating API endpoints using Zod schemas for validation"
```

### **Core Configuration Fields**

#### **`globs`** (string | array, required)
Defines when the rule applies based on file paths and patterns.

```yaml
# Single pattern
globs: "src/components/**/*.tsx"

# Multiple patterns
globs: 
  - "src/components/**/*.{tsx,ts}"
  - "src/pages/**/*.tsx"
  - "!src/**/*.test.tsx"
```

**Glob Pattern Syntax:**
- `*` - Matches any characters except path separator
- `**` - Matches any characters including path separators
- `?` - Matches a single character
- `{}` - Matches any of the comma-separated patterns
- `!` - Negates the pattern (exclusion)

**Examples:**
```yaml
# React components only
globs: "src/components/**/*.{tsx,jsx}"

# All TypeScript files except tests
globs: 
  - "src/**/*.{ts,tsx}"
  - "!src/**/*.{test,spec}.{ts,tsx}"

# API routes in Next.js
globs: "pages/api/**/*.{ts,js}"

# Backend routes
globs: "src/routes/**/*.ts"

# Configuration files
globs: "*.config.{js,ts,json}"
```

#### **`alwaysApply`** (boolean, optional, default: false)
Determines if the rule applies globally or only to matching file patterns.

```yaml
# Only applies to files matching globs pattern
alwaysApply: false

# Applies globally, regardless of current file
alwaysApply: true
```

**When to use `alwaysApply: true`:**
- Global coding standards
- Project-wide architectural rules
- Universal security requirements
- Team collaboration guidelines

**When to use `alwaysApply: false`:**
- Technology-specific patterns
- File-type specific rules
- Context-dependent guidelines

### **Organizational Fields**

#### **`priority`** (number, optional, default: 1)
Determines rule precedence when multiple rules apply.

```yaml
# Higher numbers = higher priority
priority: 5  # High priority
priority: 1  # Default priority
priority: 0  # Low priority
```

**Priority Guidelines:**
- `10`: Critical security rules
- `5`: Architectural constraints
- `3`: Technology-specific patterns
- `1`: General coding standards (default)
- `0`: Suggestions and preferences

#### **`tags`** (array, optional)
Categorizes rules for better organization and filtering.

```yaml
tags: ["frontend", "react", "typescript", "testing"]
```

**Common Tag Categories:**
```yaml
# Technology
tags: ["react", "vue", "angular", "node", "python"]

# Domain
tags: ["frontend", "backend", "database", "auth", "api"]

# Type
tags: ["security", "performance", "testing", "documentation"]

# Complexity
tags: ["beginner", "intermediate", "advanced"]
```

### **Advanced Configuration Fields**

#### **`author`** (string, optional)
Identifies the rule creator for maintenance purposes.

```yaml
author: "development-team"
# or
author: "john.doe@company.com"
```

#### **`version`** (string, optional)
Tracks rule evolution using semantic versioning.

```yaml
version: "1.2.0"
```

#### **`lastModified`** (string, optional)
ISO date string of last modification.

```yaml
lastModified: "2025-01-20T10:30:00Z"
```

#### **`dependencies`** (array, optional)
Lists other rules that this rule depends on.

```yaml
dependencies: 
  - "project-config.mdc"
  - "typescript-standards.mdc"
```

#### **`deprecated`** (boolean, optional)
Marks rule as deprecated for future removal.

```yaml
deprecated: true
deprecationReason: "Replaced by new authentication pattern"
replacedBy: "auth-v2.mdc"
```

### **Complete Example**
```yaml
---
description: "React component development with TypeScript and testing"
globs: 
  - "src/components/**/*.{tsx,ts}"
  - "src/pages/**/*.tsx"
  - "!src/**/*.{test,spec}.{ts,tsx}"
alwaysApply: false
priority: 3
tags: ["frontend", "react", "typescript", "components"]
author: "frontend-team"
version: "2.1.0"
lastModified: "2025-01-20T10:30:00Z"
dependencies: 
  - "project-config.mdc"
  - "typescript-standards.mdc"
---
```

## 📝 Markdown Content Specification

### **Content Structure**
The markdown content follows standard Markdown syntax with framework-specific conventions.

#### **Recommended Section Structure**
```markdown
# Rule Title

Brief overview of the rule's purpose.

## Core Requirements
Essential requirements that must be followed.

## Patterns and Examples
Code examples showing correct implementation.

## Best Practices
Additional guidelines for optimal results.

## Common Mistakes
What to avoid and why.

## References
Links to external documentation or standards.
```

### **Code Block Conventions**

#### **Example Code Blocks**
Use language-specific syntax highlighting:

```markdown
## TypeScript Interface Example
```typescript
interface UserProps {
  id: string;
  name: string;
  email: string;
  isActive?: boolean;
}
```

## React Component Example
```tsx
export const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  email, 
  isActive = true 
}) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      {isActive && <span className="active-badge">Active</span>}
    </div>
  );
};
```

#### **Command Examples**
Use `bash` for terminal commands:

```markdown
## Installation Commands
```bash
npm install @types/react @types/node
yarn add react-router-dom
pnpm install zod
```
```

#### **Configuration Examples**
Use appropriate language for config files:

```markdown
## ESLint Configuration
```json
{
  "extends": ["@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```
```

### **Link Conventions**

#### **Internal References**
Link to other rules and framework documents:

```markdown
See also: [Project Configuration](project-config.mdc)
Related: [Workflow System](../docs/workflow-system.md)
```

#### **External References**
Link to external documentation and standards:

```markdown
Reference: [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
Documentation: [Zod Validation](https://zod.dev/)
```

### **List Conventions**

#### **Requirements Lists**
Use checkboxes for requirements that can be verified:

```markdown
## Component Requirements
- [ ] Use functional components
- [ ] Include TypeScript interfaces
- [ ] Add proper error handling
- [ ] Include accessibility attributes
```

#### **Guidelines Lists**
Use bullet points for best practices:

```markdown
## Best Practices
- Prefer composition over inheritance
- Keep components small and focused
- Use descriptive prop names
- Include JSDoc comments for complex props
```

### **Emphasis and Formatting**

#### **Important Information**
Use alerts and emphasis for critical information:

```markdown
⚠️ **IMPORTANT**: Always validate user input before processing.

💡 **TIP**: Use React.memo for performance optimization.

🔒 **SECURITY**: Never expose API keys in client-side code.
```

#### **Code Inline**
Use backticks for inline code references:

```markdown
Use `useState` for local state and `useEffect` for side effects.
The `onClick` handler should be memoized with `useCallback`.
```

## 🔧 Validation and Linting

### **YAML Frontmatter Validation**
The frontmatter must be valid YAML:

```yaml
# Valid
description: "API development patterns"
globs: "src/api/**/*.ts"
tags: ["backend", "api"]

# Invalid - missing quotes for strings with special chars
description: API development: patterns & practices
globs: src/api/**/*.ts
```

### **Required Field Validation**
Every MDC file must include:

```yaml
---
description: "Some description"  # Required
globs: "some/pattern/**/*.ext"   # Required, unless alwaysApply: true
---
```

### **Glob Pattern Validation**
Glob patterns should be valid and meaningful:

```yaml
# Valid patterns
globs: "src/**/*.ts"
globs: ["src/**/*.{ts,tsx}", "!src/**/*.test.ts"]

# Invalid patterns
globs: "src/**/**.ts"  # Extra asterisk
globs: "src/**/*.{ts,tsx"  # Missing closing brace
```

### **Common Validation Errors**

#### **YAML Syntax Errors**
```yaml
# Error: Missing quotes around string with colon
description: Error: This will break YAML parsing

# Fixed: Properly quoted
description: "Error: This will work correctly"
```

#### **Invalid Frontmatter**
```markdown
<!-- Error: Missing closing frontmatter marker -->
---
description: "Some rule"
globs: "src/**/*.ts"

# Rule content starts here

<!-- Fixed: Proper frontmatter structure -->
---
description: "Some rule"
globs: "src/**/*.ts"
---

# Rule content starts here
```

## 📚 Best Practices

### **File Naming Conventions**
```bash
# Good naming
react-components.mdc
api-validation.mdc
database-patterns.mdc
authentication-security.mdc

# Avoid
ReactComponents.mdc  # PascalCase
react_components.mdc # snake_case
api.mdc             # Too generic
```

### **Rule Organization**
```bash
# Organize by domain/technology
.cursor/rules/
├── project-config.mdc       # Project-wide configuration
├── workflow-state.mdc       # Workflow management
├── architecture.mdc         # Architecture decisions
├── epics.mdc               # Epic planning
├── frontend/
│   ├── react-components.mdc
│   ├── styling.mdc
│   └── testing.mdc
├── backend/
│   ├── api-patterns.mdc
│   ├── database.mdc
│   └── security.mdc
└── shared/
    ├── typescript.mdc
    └── git-workflow.mdc
```

### **Content Guidelines**

#### **Be Specific and Actionable**
```markdown
# Good: Specific and actionable
## Component Naming
- Use PascalCase for component names
- Match file name to component name
- Add descriptive suffixes: `UserCard`, `LoginForm`, `DataTable`

# Bad: Vague and general  
## Naming
- Use good names
- Be consistent
```

#### **Include Context and Rationale**
```markdown
# Good: Explains why
## State Management
Use `useState` for simple local state. For complex state with multiple 
related values, use `useReducer` to prevent inconsistent updates and 
improve debugging.

# Bad: Just tells what
## State Management
Use `useState` for state.
```

#### **Provide Complete Examples**
```markdown
# Good: Complete, runnable example
```typescript
// UserCard.tsx
interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  showActions?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onEdit,
  showActions = true
}) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {showActions && (
        <button onClick={() => onEdit(user)}>
          Edit
        </button>
      )}
    </div>
  );
};
```

# Bad: Incomplete snippet
```typescript
const UserCard = ({ user }) => {
  // component implementation
};
```
```

### **Maintenance Guidelines**

#### **Version Control Best Practices**
- Commit rule changes with descriptive messages
- Review rule changes in pull requests
- Tag major rule restructuring with version numbers
- Document breaking changes in commit messages

#### **Rule Evolution**
```yaml
# When updating rules, update metadata
---
description: "Updated React component standards for React 18"
version: "2.0.0"
lastModified: "2025-01-20T10:30:00Z"
---

# Document changes in the rule content
## Changelog
### Version 2.0.0 (2025-01-20)
- Added React 18 concurrent features support
- Updated hook usage patterns
- Added new testing requirements

### Version 1.5.0 (2024-12-15)
- Added accessibility requirements
- Enhanced TypeScript interface patterns
```

## 🚀 Advanced Features

### **Conditional Rule Application**
Use comments to provide conditional guidance:

```markdown
## Database Queries

### For Small Applications (< 1000 users)
Use direct Prisma queries in route handlers.

### For Large Applications (> 1000 users)  
Implement repository pattern with caching layer.

<!-- The AI will choose appropriate guidance based on project context -->
```

### **Template Variables**
Reference project configuration dynamically:

```markdown
## API Endpoint Template

Create endpoints following this pattern:
```typescript
// For {{PROJECT_NAME}} API
router.{{HTTP_METHOD}}('{{ENDPOINT_PATH}}', async (req, res) => {
  // Implementation using {{DATABASE_ORM}}
});
```

<!-- AI replaces variables based on project-config.mdc -->
```

### **Multi-Technology Rules**
Handle multiple technologies in one rule:

```markdown
# Frontend Component Standards

## React Implementation
```tsx
export const Component: React.FC<Props> = ({ prop }) => {
  return <div>{prop}</div>;
};
```

## Vue Implementation  
```vue
<template>
  <div>{{ prop }}</div>
</template>

<script setup lang="ts">
interface Props {
  prop: string;
}

const props = defineProps<Props>();
</script>
```

<!-- AI uses appropriate implementation based on current file context -->
```

---

**This MDC format specification ensures consistent, maintainable, and effective rules for AI-driven development workflows.** 