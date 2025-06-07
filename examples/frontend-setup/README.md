# 🎨 Frontend Project Setup Example

This example demonstrates setting up a modern frontend project with the Cursor Rule Framework for React/Vue.js development.

## 🚀 Quick Start

### **Project Initialization**
```bash
# Create new React project with TypeScript
npx create-react-app my-frontend --template typescript
cd my-frontend

# Or create Vue.js project
npm create vue@latest my-frontend
cd my-frontend

# Initialize framework
git clone https://github.com/your-org/cursor-rule-framework.git .cursor-framework
cp -r .cursor-framework/.cursor .
rm -rf .cursor-framework
```

### **Install User Rules Template** ⚠️ **CRITICAL**
```bash
# FIRST: Install the framework's user rules template
# This enables the AI-driven workflow system with epic integration

# 1. Copy user rules template content
code .cursor/rules/user-rules-template.mdc

# 2. In Cursor IDE: Settings → Features → Rules for AI → User Rules
# 3. Paste the entire template content there
# 4. Restart Cursor IDE

# Test: Ask AI "Help me plan a component" 
# Should respond with Blueprint phase planning
```

### **Framework Configuration**
```yaml
# .cursor/rules/project-config.mdc
---
description: Frontend project configuration for React/TypeScript
globs: "**/*.*"
alwaysApply: true
---

# Frontend Project Configuration

## Project Goal
Build a modern, accessible React application with TypeScript

## Tech Stack
- **Language**: TypeScript
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Modules
- **State Management**: Zustand + React Query
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

## Frontend Architecture
- **Component Structure**: Atomic Design principles
- **State Management**: Local state for UI, Zustand for global state
- **Data Fetching**: React Query for server state
- **Routing**: React Router v6
- **Form Handling**: React Hook Form + Zod validation
```

## 🏗️ Project Structure

```
frontend-project/
├── .cursor/
│   └── rules/
│       ├── project-config.mdc
│       ├── frontend-components.mdc
│       ├── frontend-testing.mdc
│       └── frontend-styling.mdc
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── types/
│   └── utils/
├── public/
├── tests/
└── docs/
```

## 📋 Frontend-Specific Rules

### **Component Development Rules**
```yaml
# .cursor/rules/frontend-components.mdc
---
description: React component development standards and patterns
globs: "src/components/**/*.{tsx,jsx}"
alwaysApply: false
---

# React Component Standards

## Purpose
Ensure consistent, accessible, and maintainable React components.

## Component Structure
```typescript
// ✅ Standard component structure
interface ComponentProps {
  children?: React.ReactNode
  className?: string
  // Other props...
}

export function Component({ 
  children, 
  className,
  ...props 
}: ComponentProps) {
  return (
    <div className={cn('component-base', className)} {...props}>
      {children}
    </div>
  )
}

export default Component
```

## Naming Conventions
- **Files**: PascalCase (`UserProfile.tsx`)
- **Components**: PascalCase (`UserProfile`)
- **Props**: ComponentNameProps (`UserProfileProps`)
- **Hooks**: useFeatureName (`useUserProfile`)

## Accessibility Requirements
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader compatibility

## Performance Guidelines
- Use React.memo for expensive components
- Implement proper loading states
- Lazy load non-critical components
- Optimize images and assets
```

### **Testing Standards**
```yaml
# .cursor/rules/frontend-testing.mdc
---
description: Frontend testing patterns and requirements
globs: "**/*.{test,spec}.{ts,tsx}"
alwaysApply: false
---

# Frontend Testing Standards

## Purpose
Ensure comprehensive test coverage for frontend components and functionality.

## Test Structure
```typescript
// ✅ Component test example
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { UserProfile } from './UserProfile'

describe('UserProfile', () => {
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('displays user information correctly', () => {
      render(<UserProfile user={mockUser} />)
      
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('john@example.com')).toBeInTheDocument()
    })
  })

  describe('interactions', () => {
    it('calls onEdit when edit button is clicked', async () => {
      const mockOnEdit = vi.fn()
      render(<UserProfile user={mockUser} onEdit={mockOnEdit} />)
      
      fireEvent.click(screen.getByRole('button', { name: /edit/i }))
      
      await waitFor(() => {
        expect(mockOnEdit).toHaveBeenCalledWith(mockUser)
      })
    })
  })

  describe('accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<UserProfile user={mockUser} />)
      
      expect(screen.getByRole('article')).toHaveAttribute('aria-label', 'User profile')
    })
  })
})
```

## Testing Requirements
- **Unit Tests**: All component logic and utilities
- **Integration Tests**: Component interactions and data flow
- **Accessibility Tests**: ARIA labels, keyboard navigation
- **Visual Tests**: Snapshot testing for UI consistency
- **E2E Tests**: Critical user journeys

## Coverage Targets
- **Statements**: 90%+
- **Branches**: 85%+
- **Functions**: 90%+
- **Lines**: 90%+
```

### **Styling Standards**
```yaml
# .cursor/rules/frontend-styling.mdc
---
description: CSS and styling conventions for consistent UI
globs: "src/**/*.{css,scss,module.css}"
alwaysApply: false
---

# Frontend Styling Standards

## Purpose
Maintain consistent, scalable, and maintainable styling across the application.

## CSS Architecture
- **Utility-First**: Tailwind CSS for layout and spacing
- **Component Styles**: CSS Modules for component-specific styles
- **Design Tokens**: Centralized color, spacing, and typography scales
- **Responsive Design**: Mobile-first approach

## CSS Module Example
```css
/* UserProfile.module.css */
.container {
  @apply max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg;
}

.avatar {
  @apply w-16 h-16 rounded-full object-cover border-2 border-gray-200;
}

.name {
  @apply text-xl font-semibold text-gray-900 mt-4;
}

.email {
  @apply text-sm text-gray-600 mt-1;
}

.actions {
  @apply flex gap-2 mt-4;
}

.button {
  @apply px-4 py-2 rounded-md font-medium transition-colors;
  
  &.primary {
    @apply bg-blue-600 text-white hover:bg-blue-700;
  }
  
  &.secondary {
    @apply bg-gray-200 text-gray-900 hover:bg-gray-300;
  }
}
```

## Component Integration
```typescript
import styles from './UserProfile.module.css'
import { cn } from '@/utils/cn'

interface UserProfileProps {
  user: User
  className?: string
}

export function UserProfile({ user, className }: UserProfileProps) {
  return (
    <div className={cn(styles.container, className)}>
      <img src={user.avatar} alt="" className={styles.avatar} />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
      <div className={styles.actions}>
        <button className={cn(styles.button, styles.primary)}>
          Edit Profile
        </button>
        <button className={cn(styles.button, styles.secondary)}>
          View Details
        </button>
      </div>
    </div>
  )
}
```

## Design System Integration
- Use design tokens for colors, spacing, typography
- Follow component variant patterns
- Implement consistent spacing scale
- Maintain color contrast standards
```

## 🛠️ Development Workflow

### **AI-Driven Component Development with Architecture Integration**
```bash
# Epic planning for UI features
"Plan an epic for user profile management with view, edit, and preferences components"

# Work on specific epic components
"Start working on the UserProfile display component from the user management epic"

# Standalone component development
"Create a reusable Modal component with accessibility features"

# AI automatically:
# - Integrates epic requirements when available
# - Validates against existing frontend architecture patterns
# - Updates architecture.mdc with new component patterns and decisions
# - Follows component naming and structure rules
# - Updates epic progress upon completion
```

### **Three-Phase Component Development**
```bash
# Blueprint Phase - AI includes epic context and architecture validation
# - Reviews existing frontend patterns in architecture.mdc
# - Component structure and props from epic requirements
# - Styling approach following design system and architectural guidelines
# - Testing strategy for comprehensive coverage

# Construct Phase - AI implements with frontend patterns and architecture
# - TypeScript interfaces and component structure following documented patterns
# - CSS modules with responsive design per architectural guidelines
# - Unit tests and accessibility features
# - Integration with existing components
# - Updates architecture.mdc with new component patterns and decisions

# Validate Phase - AI verifies and updates progress and architecture
# - Runs tests and accessibility checks
# - Validates coding standards and architectural patterns
# - Verifies architectural consistency
# - Updates epic component progress if applicable
```

### **Common Development Patterns**

#### **Custom Hook Pattern**
```typescript
// ✅ Custom hook for data fetching
export function useUserProfile(userId: string) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchUserProfile(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [userId])

  const updateUser = useCallback(async (updates: Partial<User>) => {
    try {
      const updatedUser = await updateUserProfile(userId, updates)
      setUser(updatedUser)
      return updatedUser
    } catch (error) {
      setError(error as Error)
      throw error
    }
  }, [userId])

  return { user, loading, error, updateUser }
}
```

#### **Form Handling Pattern**
```typescript
// ✅ Form with validation using React Hook Form + Zod
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const userProfileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email format'),
  bio: z.string().max(500, 'Bio too long').optional()
})

type UserProfileFormData = z.infer<typeof userProfileSchema>

export function UserProfileForm({ user, onSubmit }: UserProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      bio: user.bio
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name">Name</label>
        <input
          {...register('name')}
          id="name"
          className="mt-1 block w-full rounded-md border-gray-300"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register('email')}
          id="email"
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  )
}
```

## 🧪 Testing Examples

### **Component Testing**
```typescript
// UserProfile.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { UserProfile } from './UserProfile'

const mockUser = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane@example.com',
  avatar: 'https://example.com/avatar.jpg'
}

test('renders user information correctly', () => {
  render(<UserProfile user={mockUser} />)
  
  expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  expect(screen.getByText('jane@example.com')).toBeInTheDocument()
  expect(screen.getByRole('img')).toHaveAttribute('src', mockUser.avatar)
})

test('calls onEdit when edit button is clicked', () => {
  const mockOnEdit = vi.fn()
  render(<UserProfile user={mockUser} onEdit={mockOnEdit} />)
  
  fireEvent.click(screen.getByRole('button', { name: /edit/i }))
  
  expect(mockOnEdit).toHaveBeenCalledWith(mockUser)
})
```

### **Hook Testing**
```typescript
// useUserProfile.test.ts
import { renderHook, waitFor } from '@testing-library/react'
import { useUserProfile } from './useUserProfile'

vi.mock('./userService', () => ({
  fetchUserProfile: vi.fn(),
  updateUserProfile: vi.fn()
}))

test('fetches user profile on mount', async () => {
  const mockUser = { id: '1', name: 'John' }
  vi.mocked(fetchUserProfile).mockResolvedValue(mockUser)
  
  const { result } = renderHook(() => useUserProfile('1'))
  
  expect(result.current.loading).toBe(true)
  
  await waitFor(() => {
    expect(result.current.loading).toBe(false)
    expect(result.current.user).toEqual(mockUser)
  })
})
```

## 📱 Responsive Design Example

```css
/* Responsive component styles */
.container {
  @apply p-4;
  
  @screen sm {
    @apply p-6;
  }
  
  @screen lg {
    @apply p-8 max-w-2xl mx-auto;
  }
}

.grid {
  @apply grid grid-cols-1 gap-4;
  
  @screen md {
    @apply grid-cols-2 gap-6;
  }
  
  @screen lg {
    @apply grid-cols-3 gap-8;
  }
}
```

## 🚀 Deployment Configuration

### **Build Optimization**
```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod']
        }
      }
    }
  }
})
```

### **Environment Configuration**
```typescript
// src/config/env.ts
const env = {
  NODE_ENV: import.meta.env.NODE_ENV,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  APP_VERSION: import.meta.env.VITE_APP_VERSION,
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
} as const

export default env
```

This frontend setup example provides a comprehensive foundation for building modern React applications with the Cursor Rule Framework, emphasizing code quality, testing, and maintainability. 