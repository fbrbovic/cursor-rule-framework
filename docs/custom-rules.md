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

#### **User Request:**
```bash
"Create a rule for our React components that enforces our design system patterns and accessibility requirements"
```

#### **AI Creates Rule:**
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

#### **User Request:**
```bash
"Create a rule for our Node.js API endpoints that enforces our REST conventions, security standards, and error handling patterns"
```

#### **AI Creates Rule:**
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

// ✅ Standard error response
interface ErrorResponse {
  success: false
  error: {
    code: 'VALIDATION_ERROR' | 'AUTHENTICATION_ERROR' | 'AUTHORIZATION_ERROR' | 'NOT_FOUND' | 'INTERNAL_ERROR'
    message: string
    details?: ValidationError[] | string
  }
}
```

## Input Validation
```typescript
// ✅ Required validation pattern
import { z } from 'zod'

const createUserSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().min(1).max(100),
  role: z.enum(['user', 'admin', 'moderator']).optional().default('user')
})

/**
 * POST /api/v1/users
 * Create a new user account
 */
router.post('/users', async (req: Request, res: Response) => {
  try {
    const validatedData = createUserSchema.parse(req.body)
    const user = await userService.create(validatedData)
    
    res.status(201).json({
      success: true,
      data: user
    })
  } catch (error) {
    return handleApiError(error, res)
  }
})
```

## Security Requirements
- All endpoints must validate input using schemas
- Authentication required for non-public endpoints
- Rate limiting for all public endpoints
- SQL injection prevention through parameterized queries
- XSS prevention through output encoding

## Error Handling
```typescript
// ✅ Centralized error handling
function handleApiError(error: unknown, res: Response) {
  if (error instanceof z.ZodError) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid request data',
        details: error.errors
      }
    })
  }
  
  if (error instanceof AuthenticationError) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'AUTHENTICATION_ERROR',
        message: 'Authentication required'
      }
    })
  }
  
  // Log internal errors, don't expose details
  console.error('Internal API error:', error)
  return res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_ERROR', 
      message: 'An internal error occurred'
    }
  })
}
```

## Documentation Requirements
- OpenAPI/Swagger documentation for all endpoints
- Request/response examples
- Error code documentation
- Authentication requirements clearly specified

## Testing Requirements
- Unit tests for all business logic
- Integration tests for API endpoints
- Authentication/authorization testing
- Error scenario coverage
```

### **Database Rules**

#### **User Request:**
```bash
"Create a rule for our database access layer that enforces our repository pattern, error handling, and performance standards"
```

#### **AI Creates Rule:**
```yaml
---
description: Database access patterns and repository implementation standards
globs: "src/repositories/**/*.ts,src/database/**/*.ts"
alwaysApply: false
---

# Database Access Standards

## Purpose
Ensure consistent, performant, and secure database operations through standardized repository patterns.

## Repository Pattern Requirements
```typescript
// ✅ Required repository interface
interface BaseRepository<T, CreateInput, UpdateInput> {
  findById(id: string): Promise<T | null>
  findMany(options: QueryOptions): Promise<PaginatedResult<T>>
  create(data: CreateInput): Promise<T>
  update(id: string, data: UpdateInput): Promise<T>
  delete(id: string): Promise<void>
  count(filters?: FilterOptions): Promise<number>
}

// ✅ Standard query options
interface QueryOptions {
  page?: number
  limit?: number
  sort?: SortOption[]
  filters?: FilterOptions
  include?: string[]
}

interface PaginatedResult<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
```

## Error Handling Standards
```typescript
// ✅ Repository error handling
export class UserRepository implements BaseRepository<User, CreateUserInput, UpdateUserInput> {
  async findById(id: string): Promise<User | null> {
    try {
      const user = await this.db.user.findUnique({
        where: { id },
        include: this.defaultIncludes
      })
      return user
    } catch (error) {
      this.logger.error('Failed to find user by ID', { userId: id, error })
      throw new DatabaseError('Failed to retrieve user', { cause: error })
    }
  }

  async create(data: CreateUserInput): Promise<User> {
    try {
      return await this.db.user.create({
        data,
        include: this.defaultIncludes
      })
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictError('User with this email already exists')
        }
      }
      this.logger.error('Failed to create user', { data, error })
      throw new DatabaseError('Failed to create user', { cause: error })
    }
  }
}
```

## Performance Standards
- Always use proper indexes for query filters
- Implement pagination for list operations (max 100 items)
- Use database transactions for multi-table operations
- Implement connection pooling
- Cache frequently accessed, static data

## Security Requirements
- Use parameterized queries (Prisma handles this automatically)
- Validate all input data before database operations
- Implement proper access control at repository level
- Log all data modification operations for audit trail
- Never expose internal database errors to API responses
```

## 🧪 Testing and Validation Rules

### **Testing Pattern Rules**

#### **User Request:**
```bash
"Create comprehensive testing rules that cover our unit testing, integration testing, and end-to-end testing standards"
```

#### **AI Creates Rule:**
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

## Coverage Requirements
- **Unit Tests**: 90%+ coverage for business logic
- **Integration Tests**: All API endpoints and database operations
- **E2E Tests**: Critical user workflows and payment flows
- **Accessibility Tests**: All interactive components

## Test Data Management
```typescript
// ✅ Centralized test fixtures
export const testFixtures = {
  users: {
    basicUser: {
      id: '1',
      email: 'user@example.com',
      name: 'Basic User',
      role: 'user'
    },
    adminUser: {
      id: '2', 
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin'
    }
  },
  
  createUser: (overrides: Partial<User> = {}) => ({
    ...testFixtures.users.basicUser,
    ...overrides
  })
}
```
```

## 🔐 Security Pattern Rules

### **Authentication & Authorization Rules**

#### **User Request:**
```bash
"Create security rules that enforce our authentication patterns, authorization checks, and data protection standards"
```

#### **AI Creates Rule:**
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

## 🎯 Rule Management and Evolution

### **Creating Your First Rule**

#### **User Request:**
```bash
"I want to create a rule for our specific styling patterns. We use Tailwind CSS with specific naming conventions and component structures"
```

#### **AI Guides Rule Creation:**
```bash
"I'll help you create a styling rule for your Tailwind CSS patterns. Let me create a comprehensive rule that covers naming conventions, component structure, and best practices for your team."

# AI creates rule template and saves to .cursor/rules/styling-standards.mdc
```

#### **Resulting Rule:**
```yaml
---
description: Tailwind CSS styling standards and component patterns
globs: "src/**/*.{tsx,jsx,ts,js,css}"
alwaysApply: false
---

# Styling Standards

## Purpose
Enforce consistent Tailwind CSS usage and styling patterns across components.

## Utility Class Organization
```typescript
// ✅ Logical grouping of classes
<div className={cn(
  // Layout
  'flex items-center justify-between',
  // Spacing  
  'p-4 mb-6',
  // Appearance
  'bg-white rounded-lg shadow-md',
  // Interactive states
  'hover:shadow-lg transition-shadow',
  // Responsive
  'md:p-6 lg:p-8'
)}>
```

## Component Styling Patterns
- Use `cn()` utility for conditional classes
- Group classes logically (layout, spacing, appearance, states)
- Use design system tokens (`bg-primary-500`, not arbitrary values)
- Implement proper responsive design patterns
- Include focus and hover states for interactive elements

## Custom CSS Guidelines
- Use CSS modules for component-specific styles
- Prefix custom properties with component name
- Avoid `!important` declarations
- Use Tailwind `@apply` for repeated utility combinations

## Dark Mode Support
```typescript
// ✅ Proper dark mode implementation
<div className={cn(
  'bg-white dark:bg-gray-800',
  'text-gray-900 dark:text-gray-100',
  'border border-gray-200 dark:border-gray-700'
)}>
```
```

### **Rule Testing and Iteration**

#### **User Request:**
```bash
"Test the new styling rule I just created and see if it's working with AI interactions"
```

#### **AI Tests Rule:**
```bash
"I'll test your styling rule by creating a component that should follow these patterns:

# Testing the styling rule effectiveness..."

# AI creates test component following the rule
# Validates that the rule guidance is being followed
# Provides feedback on rule clarity and completeness
```

### **Rule Refinement**

#### **User Request:**
```bash
"The styling rule is too strict about class ordering. Update it to be more flexible while still maintaining consistency"
```

#### **AI Updates Rule:**
```bash
"I'll update your styling rule to be more flexible about class ordering while keeping the logical grouping guidance. The updated rule will focus on consistency rather than strict ordering."

# AI modifies the existing rule file
# Preserves the core standards while adding flexibility
# Updates examples to reflect the new approach
```

## 📊 Rule Effectiveness and Monitoring

### **Rule Performance Analysis**

#### **User Request:**
```bash
"Analyze how well our custom rules are working and suggest improvements"
```

#### **AI Analyzes Rule Effectiveness:**
```bash
"Based on recent development sessions, here's how your custom rules are performing:

## Rule Effectiveness Analysis

### Frontend Component Rules
- **Adherence Rate**: 95% (AI successfully applied patterns)
- **Issues Found**: Some accessibility requirements need clarification
- **Suggestion**: Add more specific ARIA label examples

### API Development Rules
- **Adherence Rate**: 88% (consistently applied validation patterns)
- **Issues Found**: Error handling examples could be more comprehensive
- **Suggestion**: Add examples for specific database errors

### Styling Standards
- **Adherence Rate**: 92% (good adoption of class organization)
- **Issues Found**: Dark mode patterns need refinement
- **Suggestion**: Create more comprehensive color token examples

## Recommendations
1. Clarify accessibility requirements with specific examples
2. Expand error handling scenarios in API rules
3. Create interactive examples for styling patterns
4. Add rule effectiveness metrics tracking"
```

### **Rule Evolution Process**

#### **User Request:**
```bash
"Our team has learned new patterns over the last month. Update our rules to reflect current best practices"
```

#### **AI Evolves Rules:**
```bash
"I'll review recent development patterns and update your rules to reflect current best practices:

## Identified Pattern Evolution
- New authentication patterns using NextAuth.js
- Improved error boundaries with better user experience
- Enhanced accessibility patterns with screen reader support
- Performance optimizations with React.memo usage

## Updating Rules
1. Adding NextAuth.js patterns to authentication rules
2. Enhancing error boundary examples in component rules  
3. Expanding accessibility requirements with concrete examples
4. Including performance optimization patterns

Updated rules will be saved and ready for immediate use."
```

---

**Ready to create your first custom rule?** Start with a specific problem your team faces repeatedly, and let the AI help you encode the solution into a reusable rule!