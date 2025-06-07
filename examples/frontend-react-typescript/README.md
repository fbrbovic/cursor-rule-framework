# 🎯 React TypeScript Example

This example demonstrates how to use the Cursor Rule Framework with a React TypeScript application. It showcases modern React development patterns, component architecture, and testing strategies.

## 🚀 Quick Start

### 1. **Copy Rules to Your Project**
```bash
# Copy cursor rules from this example
cp -r .cursor/ /path/to/your/react-project/

# Or start a new project with this structure
npx create-react-app my-app --template typescript
cd my-app
cp -r /path/to/cursor-rule-framework/examples/frontend-react-typescript/.cursor/ .
```

### 2. **Install User Rules Template** ⚠️ **CRITICAL**
```bash
# MUST DO: Install the framework's user rules template
# This enables AI-driven workflow with epic integration

# 1. Copy template content
code .cursor/rules/user-rules-template.mdc

# 2. Cursor IDE: Settings → Features → Rules for AI → User Rules
# 3. Paste entire template content and save
# 4. Restart Cursor IDE
```

### 3. **Open in Cursor IDE**
```bash
cursor .

# Verify rules are loaded
# CMD/Ctrl + Shift + P → "Cursor: Rules"
```

### 4. **Customize Project Configuration**
Edit `.cursor/rules/project-config.mdc`:
```yaml
## Project Goal
Build a scalable React TypeScript application with modern development practices

## Tech Stack
- **Language(s):** TypeScript
- **Framework(s):** React 18, Vite
- **Build / Tooling:** Vite, Vitest, ESLint, Prettier
- **Monorepo Structure:** Single package React application
```

## 📋 What's Included

### **Cursor Rules**
- **`cursor-rules-management.mdc`** - Framework management and metadata preservation
- **`project-config.mdc`** - React TypeScript specific configuration
- **`frontend-react-rules.mdc`** - React component development guidelines
- **`testing-rules.mdc`** - Testing strategies for React components
- **`workflow-state.mdc`** - Development workflow management
- **`epics.mdc`** - Feature planning and tracking

### **Development Patterns**
- **Component Architecture**: Functional components with hooks
- **State Management**: Context API and custom hooks
- **Styling**: CSS Modules with TypeScript support
- **Testing**: Vitest with React Testing Library
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── forms/              # Form components
│   └── layout/             # Layout components
├── hooks/                  # Custom React hooks
├── contexts/               # React contexts
├── utils/                  # Utility functions
├── types/                  # TypeScript type definitions
├── __tests__/              # Test files
└── App.tsx                 # Main application component
```

## 📖 Rule Highlights

### **Component Development Rules**

#### **Naming Conventions**
```typescript
// ✅ Good - PascalCase for components
export default function UserProfile({ userId }: Props) {
  return <div>User profile</div>
}

// ✅ Good - File name matches component
// File: UserProfile.tsx

// ❌ Bad - camelCase for components
export function userProfile() {
  return <div>content</div>
}
```

#### **Props Interface Pattern**
```typescript
// ✅ Good - Explicit props interface
interface UserProfileProps {
  userId: string
  onUpdate?: (user: User) => void
}

export default function UserProfile({ userId, onUpdate }: UserProfileProps) {
  // Component implementation
}
```

#### **Custom Hooks Pattern**
```typescript
// ✅ Good - Custom hook with proper naming
function useUserProfile(userId: string) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  // Hook implementation
  
  return { user, loading, updateUser }
}
```

### **Testing Rules**

#### **Component Testing Pattern**
```typescript
// ✅ Good - Comprehensive component test
import { render, screen, fireEvent } from '@testing-library/react'
import UserProfile from '../UserProfile'

describe('UserProfile', () => {
  it('displays user information correctly', () => {
    render(<UserProfile userId="123" />)
    
    expect(screen.getByText('User Profile')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
  })
  
  it('calls onUpdate when form is submitted', () => {
    const mockUpdate = vi.fn()
    render(<UserProfile userId="123" onUpdate={mockUpdate} />)
    
    fireEvent.click(screen.getByRole('button', { name: 'Save' }))
    expect(mockUpdate).toHaveBeenCalledWith(expect.any(Object))
  })
})
```

### **State Management Rules**

#### **Context Pattern**
```typescript
// ✅ Good - Context with provider pattern
interface UserContextValue {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  // Context implementation
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
  }
  return context
}
```

## 🛠️ Development Workflow

### **AI-Driven Epic Integration**
```bash
# Start epic work with natural language
"Plan an epic for user authentication with login, registration, and password reset"

# Work on specific epic steps
"Start working on the login component from the user authentication epic"

# Update progress naturally
"Update the login component progress to 75%, core functionality complete"

# AI automatically:
# - Creates and manages epics in epics.mdc
# - Integrates epic context into workflow
# - Updates progress as work completes
```

### **Blueprint Phase**
```bash
# AI automatically includes epic context when available
# For epic work: Requirements and acceptance criteria included
# For standalone work: Standard planning process

# Define interfaces and types first
# AI uses epic requirements to guide component design
```

### **Construct Phase**
```bash
# AI enforces naming conventions and patterns from rules
# Implements exactly what was planned in blueprint
# Updates epic progress automatically upon completion
```

### **Validate Phase**
```bash
# Automated validation
npm test && npm run type-check && npm run lint

# Epic progress automatically updated to 100% when complete
```

## 🧪 Testing Strategy

### **Component Testing**
- **Unit Tests**: Individual component behavior
- **Integration Tests**: Component interaction
- **Accessibility Tests**: Screen reader compatibility
- **Visual Tests**: Component appearance

### **Hook Testing**
```typescript
// ✅ Good - Custom hook testing
import { renderHook, act } from '@testing-library/react'
import { useUserProfile } from '../useUserProfile'

describe('useUserProfile', () => {
  it('loads user data on mount', async () => {
    const { result } = renderHook(() => useUserProfile('123'))
    
    expect(result.current.loading).toBe(true)
    
    await act(async () => {
      await waitFor(() => {
        expect(result.current.loading).toBe(false)
        expect(result.current.user).toBeDefined()
      })
    })
  })
})
```

## 📚 Learning Resources

### **React Patterns Covered**
1. **Functional Components** - Modern React development
2. **Custom Hooks** - Reusable state logic
3. **Context API** - Global state management
4. **Error Boundaries** - Error handling patterns
5. **Suspense** - Loading state management

### **TypeScript Integration**
1. **Component Props** - Type-safe props interfaces
2. **Event Handlers** - Typed event handling
3. **Refs** - Type-safe ref usage
4. **Generic Components** - Reusable typed components

### **Testing Best Practices**
1. **Testing Library** - User-centric testing
2. **Mock Strategies** - Effective mocking patterns
3. **Async Testing** - Testing asynchronous code
4. **Accessibility Testing** - Inclusive design validation

## 🚨 Common Issues & Solutions

### **Rules Not Appearing**
```bash
# Check file location
ls -la .cursor/rules/

# Verify metadata format
head -10 .cursor/rules/frontend-react-rules.mdc
```

### **TypeScript Errors**
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache

# Restart TypeScript server in Cursor
# CMD/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### **Testing Issues**
```bash
# Clear test cache
npm test -- --clearCache

# Run tests in watch mode
npm test -- --watch
```

## 🔧 Customization

### **Adding New Component Types**
1. Update `frontend-react-rules.mdc`
2. Add glob patterns for new file types
3. Define naming conventions
4. Add testing requirements

### **Integration with Design System**
1. Create design system rules
2. Add component validation
3. Define styling patterns
4. Include accessibility requirements

### **State Management Alternatives**
- **Redux Toolkit**: Add Redux-specific rules
- **Zustand**: Create Zustand pattern rules
- **Recoil**: Define Recoil atom patterns

## 📈 Next Steps

1. **Explore Advanced Patterns**: Check out the [Full-Stack SaaS](../fullstack-saas-starter/) example
2. **Add More Rules**: Create domain-specific rules for your business logic
3. **Team Integration**: Share rules with your development team
4. **Continuous Improvement**: Update rules based on code review feedback

## 📞 Need Help?

- **React Issues**: Check [React documentation](https://react.dev/)
- **TypeScript Issues**: See [TypeScript handbook](https://www.typescriptlang.org/docs/)
- **Testing Issues**: Visit [Testing Library docs](https://testing-library.com/)
- **Framework Issues**: See main [Documentation](../../docs/README.md)

---

**Ready to build?** Open this example in Cursor IDE and start developing with AI-powered assistance!

*This example demonstrates production-ready React TypeScript patterns. Customize the rules to match your team's preferences and project requirements.* 