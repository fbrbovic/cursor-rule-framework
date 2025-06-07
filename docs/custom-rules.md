# 🔧 Custom Rules Guide

This guide explains how to create domain-specific rules that extend the Cursor Rule Framework for your project's unique needs.

## 🎯 Overview

Custom rules allow you to encode your project's specific patterns, conventions, and requirements into the framework. They work alongside the core framework rules to provide tailored AI assistance for your domain and technology stack.

## 📐 Rule Structure and Format

### **Basic Rule Anatomy**
```yaml
---
description: Clear description of what this rule covers
globs: "**/*.{ts,tsx,js,jsx}"  # Files this rule applies to
alwaysApply: false  # Whether rule is always active
---

# Rule Title

## Rule Content
[Your rule content here]
```

### **Metadata Fields**
- **description**: Brief, clear explanation of the rule's purpose
- **globs**: File patterns where this rule applies (uses glob syntax)
- **alwaysApply**: `true` for always-active rules, `false` for contextual rules

### **Content Sections**
```markdown
# Rule Name

## Purpose
Why this rule exists and what problem it solves

## Scope
What files, components, or scenarios this rule covers

## Requirements
Specific requirements and standards to follow

## Examples
✅ Good examples that follow the rule
❌ Bad examples that violate the rule

## Exceptions
When and why deviations might be acceptable

## Related Rules
References to other rules that complement this one
```

## 🚀 Creating Domain-Specific Rules

### **Frontend Component Rules**
```yaml
---
description: React component development standards for our design system
globs: "src/components/**/*.{tsx,jsx}"
alwaysApply: false
---

# Component Development Standards

## Purpose
Ensure consistent, accessible, and maintainable React components that align with our design system.

## Naming Conventions
- **Files**: PascalCase matching component name (`UserProfile.tsx`)
- **Components**: PascalCase, descriptive names (`UserProfileCard`)
- **Props**: Interface name matches component + "Props" (`UserProfileCardProps`)
- **Test files**: Component name + ".test.tsx" (`UserProfile.test.tsx`)

## Component Structure
```typescript
// ✅ Required structure
interface UserProfileProps {
  userId: string
  onUpdate?: (user: User) => void
  className?: string
}

export function UserProfile({ 
  userId, 
  onUpdate, 
  className 
}: UserProfileProps) {
  // Component implementation
}

export default UserProfile
```

## Accessibility Requirements
- All interactive elements must have proper ARIA labels
- Color contrast must meet WCAG AA standards  
- Keyboard navigation must be fully functional
- Screen reader compatibility required

## Testing Standards
- Unit tests for all component logic
- Accessibility tests with @testing-library/jest-dom
- Visual regression tests for UI components
- Integration tests for complex interactions

## Performance Guidelines
- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Lazy load non-critical components

## Examples

### ✅ Good Component
```typescript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
  'aria-label'?: string
}

export const Button = React.memo(function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        disabled && 'btn--disabled'
      )}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  )
})
```

### ❌ Poor Component
```typescript
// Missing TypeScript interface
// No accessibility considerations
// Inconsistent naming
export function button({ text, clickHandler }) {
  return <div onClick={clickHandler}>{text}</div>
}
```
```

### **API Development Rules**
```yaml
---
description: Node.js API development standards and conventions
globs: "src/api/**/*.{ts,js}"
alwaysApply: false
---

# API Development Standards

## Purpose
Ensure consistent, secure, and well-documented API endpoints that follow REST conventions.

## Endpoint Conventions
- **URLs**: Use kebab-case (`/api/user-profiles`)
- **Methods**: Follow REST conventions (GET, POST, PUT, DELETE)
- **Versioning**: Include version in URL (`/api/v1/users`)
- **Resources**: Use plural nouns (`/users`, not `/user`)

## Request/Response Format
```typescript
// ✅ Standard response format
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: unknown
  }
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// ✅ Error response format
interface ApiError {
  success: false
  error: {
    code: 'VALIDATION_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED' | 'SERVER_ERROR'
    message: string
    details?: ValidationError[]
  }
}
```

## Security Requirements
- All endpoints must validate input using Joi or Zod
- Authentication required for protected routes
- Rate limiting implemented for public endpoints
- SQL injection prevention with parameterized queries
- XSS protection with input sanitization

## Documentation Standards
- OpenAPI/Swagger documentation for all endpoints
- Request/response examples included
- Error codes and messages documented
- Authentication requirements specified

## Examples

### ✅ Good Endpoint
```typescript
/**
 * GET /api/v1/users/:id
 * Retrieves user profile by ID
 */
export async function getUserProfile(
  req: AuthenticatedRequest,
  res: Response
): Promise<void> {
  try {
    // Input validation
    const { id } = await userParamsSchema.parseAsync(req.params)
    
    // Business logic
    const user = await userService.findById(id)
    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: 'User not found'
        }
      })
    }

    // Authorization check
    if (!canAccessUser(req.user, user)) {
      return res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Access denied'
        }
      })
    }

    // Success response
    res.json({
      success: true,
      data: user
    })
  } catch (error) {
    handleApiError(error, res)
  }
}
```

### ❌ Poor Endpoint
```typescript
// No input validation
// No error handling
// Inconsistent response format
app.get('/user/:id', (req, res) => {
  const user = db.query(`SELECT * FROM users WHERE id = ${req.params.id}`)
  res.json(user)
})
```
```

### **Database Schema Rules**
```yaml
---
description: Database schema and migration standards
globs: "migrations/**/*.sql"
alwaysApply: false
---

# Database Schema Standards

## Purpose
Ensure consistent, scalable, and maintainable database schemas with proper relationships and constraints.

## Naming Conventions
- **Tables**: snake_case, plural nouns (`user_profiles`)
- **Columns**: snake_case, descriptive names (`created_at`)
- **Indexes**: table_column_idx (`user_profiles_email_idx`)
- **Foreign Keys**: table_referenced_table_fkey (`orders_user_id_fkey`)

## Column Standards
```sql
-- ✅ Standard columns for all tables
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  version INTEGER DEFAULT 1,
  
  -- Table-specific columns
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  status user_status_enum DEFAULT 'active',
  
  -- Constraints
  CONSTRAINT user_profiles_email_format 
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);
```

## Migration Standards
- All migrations must be reversible
- Include meaningful comments
- Use transactions for complex operations
- Test migrations on staging data
- Include performance impact assessment

## Security Requirements
- Row-level security (RLS) for multi-tenant tables
- Sensitive data encryption at rest
- Audit logging for data changes
- Proper user permissions and roles
```

## 🎨 UI/UX Pattern Rules

### **Design System Rules**
```yaml
---
description: Design system implementation and usage guidelines
globs: "src/components/**/*.{tsx,jsx,css,scss}"
alwaysApply: false
---

# Design System Implementation

## Purpose
Ensure consistent implementation of our design system across all UI components.

## Color Usage
```typescript
// ✅ Use design tokens, not hardcoded values
const styles = {
  primary: 'var(--color-primary-500)',
  secondary: 'var(--color-secondary-500)',
  danger: 'var(--color-danger-500)',
  text: 'var(--color-text-primary)'
}

// ❌ Avoid hardcoded colors
const styles = {
  primary: '#3b82f6',
  text: '#1f2937'
}
```

## Typography Scale
```css
/* ✅ Use predefined typography classes */
.heading-1 { @apply text-4xl font-bold leading-tight; }
.heading-2 { @apply text-3xl font-semibold leading-snug; }
.body-large { @apply text-lg leading-relaxed; }
.body-regular { @apply text-base leading-normal; }

/* ❌ Avoid custom font sizes */
.custom-text { font-size: 18px; line-height: 1.4; }
```

## Spacing System
- Use 8px grid system (multiples of 8)
- Predefined spacing tokens (`space-1` = 8px, `space-2` = 16px)
- Consistent component padding and margins
- Responsive spacing adjustments

## Component Variants
```typescript
// ✅ Systematic variant implementation
const buttonVariants = {
  variant: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50'
  },
  size: {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }
}
```
```

## 🔐 Security Pattern Rules

### **Authentication & Authorization Rules**
```yaml
---
description: Security patterns for authentication and authorization
globs: "src/{auth,security}/**/*.{ts,tsx}"
alwaysApply: true
---

# Security Implementation Standards

## Purpose
Ensure secure implementation of authentication, authorization, and data protection.

## Authentication Patterns
```typescript
// ✅ Secure token handling
class AuthService {
  private readonly TOKEN_KEY = 'auth_token'
  private readonly REFRESH_KEY = 'refresh_token'

  storeTokens(accessToken: string, refreshToken: string): void {
    // Store in httpOnly cookies, not localStorage
    document.cookie = `${this.TOKEN_KEY}=${accessToken}; HttpOnly; Secure; SameSite=Strict`
    document.cookie = `${this.REFRESH_KEY}=${refreshToken}; HttpOnly; Secure; SameSite=Strict`
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!)
      return this.isValidPayload(payload)
    } catch {
      return false
    }
  }
}

// ❌ Insecure token handling
localStorage.setItem('token', accessToken) // Vulnerable to XSS
```

## Authorization Patterns
```typescript
// ✅ Role-based access control
interface Permission {
  resource: string
  action: 'create' | 'read' | 'update' | 'delete'
  conditions?: Record<string, unknown>
}

class AuthorizationService {
  async hasPermission(
    user: User, 
    permission: Permission
  ): Promise<boolean> {
    const userRoles = await this.getUserRoles(user.id)
    const rolePermissions = await this.getRolePermissions(userRoles)
    
    return rolePermissions.some(p => 
      p.resource === permission.resource &&
      p.action === permission.action &&
      this.evaluateConditions(p.conditions, user, permission.conditions)
    )
  }
}
```

## Input Validation
```typescript
// ✅ Comprehensive input validation
import { z } from 'zod'

const userRegistrationSchema = z.object({
  email: z.string()
    .email('Invalid email format')
    .max(255, 'Email too long'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
           'Password must contain uppercase, lowercase, number, and special character'),
  name: z.string()
    .min(1, 'Name required')
    .max(100, 'Name too long')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
})

// ❌ No input validation
function registerUser(req: Request) {
  const { email, password, name } = req.body // No validation!
  return userService.create({ email, password, name })
}
```
```

## 🧪 Testing Pattern Rules

### **Testing Strategy Rules**
```yaml
---
description: Comprehensive testing patterns and requirements
globs: "**/*.{test,spec}.{ts,tsx,js,jsx}"
alwaysApply: false
---

# Testing Implementation Standards

## Purpose
Ensure comprehensive, maintainable, and reliable test coverage across all application layers.

## Test Organization
```typescript
// ✅ Well-organized test structure
describe('UserProfile Component', () => {
  // Setup and teardown
  beforeEach(() => {
    vi.clearAllMocks()
    setupTestEnvironment()
  })

  // Happy path tests
  describe('when user data is available', () => {
    it('displays user information correctly', () => {
      // Test implementation
    })

    it('allows profile editing when authorized', () => {
      // Test implementation  
    })
  })

  // Error scenarios
  describe('when user data is unavailable', () => {
    it('shows loading state while fetching', () => {
      // Test implementation
    })

    it('displays error message on fetch failure', () => {
      // Test implementation
    })
  })

  // Edge cases
  describe('edge cases', () => {
    it('handles malformed user data gracefully', () => {
      // Test implementation
    })
  })
})
```

## Mock Strategy
```typescript
// ✅ Proper mocking patterns
vi.mock('../services/userService', () => ({
  userService: {
    findById: vi.fn(),
    update: vi.fn(),
    delete: vi.fn()
  }
}))

// ✅ Mock setup with realistic data
const mockUser: User = {
  id: '123',
  email: 'test@example.com',
  name: 'Test User',
  createdAt: new Date('2025-01-01'),
  status: 'active'
}

beforeEach(() => {
  vi.mocked(userService.findById).mockResolvedValue(mockUser)
})
```

## Assertion Patterns
```typescript
// ✅ Specific, meaningful assertions
expect(screen.getByRole('heading', { name: 'User Profile' }))
  .toBeInTheDocument()

expect(screen.getByDisplayValue('test@example.com'))
  .toHaveAttribute('readonly')

expect(mockOnUpdate).toHaveBeenCalledWith({
  ...mockUser,
  name: 'Updated Name'
})

// ❌ Vague or weak assertions
expect(container.firstChild).toBeTruthy()
expect(mockFunction).toHaveBeenCalled() // Too generic
```

## Test Coverage Requirements
- **Unit Tests**: 90%+ coverage for business logic
- **Integration Tests**: All API endpoints and user workflows
- **E2E Tests**: Critical user journeys and edge cases
- **Performance Tests**: Load testing for high-traffic features
- **Security Tests**: Authentication, authorization, input validation
```

## 🔄 Dynamic Rule Creation

### **AI-Assisted Rule Generation**
```bash
# Generate rules from existing code patterns
"Analyze our React components and create a rule that codifies our current patterns for:
- Component file structure and organization
- Props interface definitions and naming
- State management patterns
- Error handling approaches
- Testing strategies"

# Create rules from team decisions
"Create a rule that captures our decision to use React Query for server state management, including:
- Query key naming conventions
- Error handling patterns
- Cache configuration standards
- Mutation patterns"
```

### **Rule Templates**
```yaml
# Framework Component Rule Template
---
description: [Framework] component development standards
globs: "src/**/*.{component-extensions}"
alwaysApply: false
---

# [Framework] Component Standards

## Purpose
[Explain why this rule exists]

## Naming Conventions
- [Convention 1]: [Description and example]
- [Convention 2]: [Description and example]

## Structure Requirements
```[language]
// ✅ Required structure
[Code example showing correct pattern]
```

## [Specific Framework] Patterns
[Framework-specific requirements and patterns]

## Testing Standards
[Testing requirements for this component type]

## Examples

### ✅ Good Implementation
```[language]
[Example of following the rule]
```

### ❌ Poor Implementation  
```[language]
[Example of violating the rule]
```

## Exceptions
[When deviations might be acceptable]
```

## 📈 Rule Evolution and Maintenance

### **Rule Lifecycle**
```bash
# Rule Creation
1. Identify pattern or need
2. Create draft rule with examples
3. Team review and feedback
4. Implementation and testing
5. Documentation and training

# Rule Updates
1. Monitor rule effectiveness
2. Gather feedback from usage
3. Identify improvement opportunities
4. Update rule with new requirements
5. Communicate changes to team

# Rule Retirement
1. Identify obsolete or conflicting rules
2. Plan migration strategy
3. Update dependent rules
4. Archive deprecated rules
5. Clean up documentation
```

### **Rule Quality Metrics**
```bash
# Measure rule effectiveness
- Adoption rate across codebase
- Consistency improvements
- Reduction in code review comments
- Developer satisfaction scores
- Time to onboard new team members
```

### **Rule Documentation**
```markdown
## Rule Change Log

### [Rule Name] (Updated 2025-01-16)
**Change**: Added TypeScript interface requirements
**Reason**: Improving type safety and developer experience
**Migration**: Update existing components to include interfaces
**Impact**: All new components must follow new pattern
**Breaking**: No, existing code continues to work

### [Rule Name] (Created 2025-01-10)
**Purpose**: Standardize API error handling patterns
**Scope**: All API endpoint implementations
**Requirements**: Use standard error response format
**Examples**: See examples/api-error-handling.md
```

## 🚨 Common Custom Rule Patterns

### **Technology-Specific Rules**
```bash
# Database/ORM rules
- Schema naming conventions
- Migration patterns
- Query optimization guidelines
- Security requirements

# Frontend framework rules  
- Component patterns
- State management
- Routing conventions
- Performance optimizations

# API/Backend rules
- Endpoint conventions
- Authentication patterns
- Data validation
- Error handling

# DevOps/Infrastructure rules
- Deployment patterns
- Configuration management
- Monitoring requirements
- Security policies
```

### **Business Domain Rules**
```bash
# E-commerce domain
- Product catalog patterns
- Order processing workflows
- Payment handling security
- Inventory management

# Healthcare domain
- HIPAA compliance requirements
- Patient data protection
- Audit logging patterns
- Integration standards

# Financial domain
- PCI compliance requirements
- Transaction handling
- Risk management patterns
- Regulatory reporting
```

## 📞 Need Help?

- **Rule Creation Issues**: See [Troubleshooting Guide](troubleshooting.md)
- **Pattern Identification**: Check [Best Practices](best-practices.md)
- **Team Implementation**: Read [Team Integration](team-integration.md)

---

*Custom rules are the key to making the framework truly yours - they capture your team's unique knowledge and ensure consistent implementation across your projects.* 