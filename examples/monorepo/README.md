# 📦 Monorepo Setup Example

This example demonstrates setting up a modern monorepo with the Cursor Rule Framework for managing multiple packages and applications.

## ⚠️ **CRITICAL SETUP STEP**

### **Install User Rules Template FIRST**
```bash
# MANDATORY: Install framework's user rules template in Cursor IDE
# 1. Open .cursor/rules/user-rules-template.mdc
# 2. Copy ALL content (Ctrl+A, Ctrl+C)
# 3. Cursor IDE → Settings → Features → Rules for AI → User Rules  
# 4. Paste content and restart Cursor IDE
# This enables AI-driven monorepo development with epic integration
```

## 🚀 Project Overview

### **Monorepo Structure: SaaS Platform**
A multi-package repository for a SaaS platform with shared components, utilities, and multiple applications.

**Packages:**
- **apps/web** - Main web application (Next.js)
- **apps/mobile** - Mobile app (React Native)
- **apps/admin** - Admin dashboard (React)
- **packages/ui** - Shared UI component library
- **packages/api-client** - API client SDK
- **packages/shared-types** - TypeScript type definitions
- **packages/config** - Shared configuration (ESLint, Tailwind, etc.)
- **packages/utils** - Shared utility functions

## 🏗️ Monorepo Architecture

```
monorepo-example/
├── .cursor/
│   └── rules/
│       ├── project-config.mdc
│       ├── monorepo-patterns.mdc
│       ├── package-management.mdc
│       └── workspace-coordination.mdc
├── apps/
│   ├── web/              # Next.js web app
│   ├── mobile/           # React Native app
│   └── admin/            # React admin dashboard
├── packages/
│   ├── ui/               # Component library
│   ├── api-client/       # API SDK
│   ├── shared-types/     # TypeScript types
│   ├── config/           # Shared configs
│   └── utils/            # Utility functions
├── tools/
│   ├── build-scripts/    # Custom build tools
│   └── generators/       # Code generators
├── docs/                 # Documentation
├── package.json          # Root package.json
├── turbo.json           # Turborepo configuration
├── nx.json              # Nx configuration (alternative)
└── pnpm-workspace.yaml  # pnpm workspace config
```

## 🔧 Framework Configuration

```yaml
# .cursor/rules/project-config.mdc
---
description: Monorepo project configuration and standards
globs: "**/*.*"
alwaysApply: true
---

# Monorepo Project Configuration

## Project Goal
Build a scalable SaaS platform with shared components and consistent development practices across multiple applications.

## Tech Stack
### Package Management
- **Tool**: pnpm with workspaces
- **Build System**: Turborepo for task orchestration
- **Version Management**: Changesets for versioning and publishing

### Applications
- **Web App**: Next.js 14 with TypeScript
- **Mobile App**: React Native with Expo
- **Admin Dashboard**: React with Vite

### Shared Packages
- **UI Components**: React + Tailwind CSS + Storybook
- **API Client**: Axios-based SDK with React Query integration
- **Types**: Shared TypeScript definitions
- **Config**: ESLint, Prettier, Tailwind configurations
- **Utils**: Common utility functions and helpers

### Development Tools
- **Linting**: ESLint with shared configs
- **Formatting**: Prettier with consistent settings
- **Testing**: Jest + React Testing Library
- **Documentation**: Storybook + Typedoc
- **CI/CD**: GitHub Actions with matrix builds

## Monorepo Principles
- **Shared Dependencies**: Common packages installed at root
- **Consistent Tooling**: Shared configurations across packages
- **Incremental Builds**: Only rebuild changed packages
- **Atomic Changes**: Cross-package changes in single commits
- **Isolated Testing**: Each package has its own test suite
```

## 📋 Monorepo-Specific Rules

### **Package Management Patterns**
```yaml
# .cursor/rules/package-management.mdc
---
description: Package management and dependency patterns for monorepo
globs: "{apps,packages}/**/package.json"
alwaysApply: false
---

# Package Management Standards

## Purpose
Ensure consistent package management practices across the monorepo with proper dependency handling.

## Package.json Structure
```json
{
  "name": "@company/package-name",
  "version": "0.1.0",
  "private": true,
  "description": "Brief package description",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  },
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "test": "jest",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    // Runtime dependencies only
  },
  "devDependencies": {
    // Development dependencies
  },
  "peerDependencies": {
    // Packages provided by consumer
  }
}
```

## Dependency Guidelines
### Shared Dependencies (Install at root)
- **React ecosystem**: react, react-dom, @types/react
- **Build tools**: typescript, eslint, prettier
- **Testing**: jest, @testing-library/react
- **Development**: rimraf, concurrently

### Package-specific Dependencies
- **App dependencies**: Next.js, routing libraries
- **Package dependencies**: Specific utilities or libraries

### Workspace References
```json
{
  "dependencies": {
    "@company/ui": "workspace:*",
    "@company/utils": "workspace:*",
    "@company/api-client": "workspace:*"
  }
}
```

## Version Management
```bash
# Use changesets for versioning
pnpm changeset add
pnpm changeset version
pnpm changeset publish
```
```

### **Workspace Coordination**
```yaml
# .cursor/rules/workspace-coordination.mdc
---
description: Cross-package coordination and shared development patterns
globs: "{apps,packages}/**/*.{ts,tsx,js,jsx}"
alwaysApply: false
---

# Workspace Coordination Standards

## Purpose
Coordinate development across packages with consistent patterns and shared utilities.

## Package Imports
```typescript
// ✅ Correct workspace imports
import { Button } from '@company/ui'
import { formatDate } from '@company/utils'
import { UserService } from '@company/api-client'
import type { User, ApiResponse } from '@company/shared-types'

// ❌ Avoid relative imports across packages
import { Button } from '../../../packages/ui/src/Button'
```

## Shared Component Development
```typescript
// packages/ui/src/Button/Button.tsx
import { forwardRef } from 'react'
import { clsx } from 'clsx'
import type { ButtonProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Variant styles
          {
            'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500': 
              variant === 'primary',
            'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500': 
              variant === 'secondary',
            'bg-transparent text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500': 
              variant === 'ghost'
          },
          
          // Size styles
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-base': size === 'md',
            'h-12 px-6 text-lg': size === 'lg'
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

## API Client Package
```typescript
// packages/api-client/src/services/UserService.ts
import { BaseService } from './BaseService'
import type { User, CreateUserRequest, UpdateUserRequest } from '@company/shared-types'

export class UserService extends BaseService {
  async getUsers(): Promise<User[]> {
    const response = await this.client.get<User[]>('/users')
    return response.data
  }

  async createUser(data: CreateUserRequest): Promise<User> {
    const response = await this.client.post<User>('/users', data)
    return response.data
  }

  async updateUser(id: string, data: UpdateUserRequest): Promise<User> {
    const response = await this.client.put<User>(`/users/${id}`, data)
    return response.data
  }

  async deleteUser(id: string): Promise<void> {
    await this.client.delete(`/users/${id}`)
  }
}

// Export singleton instance
export const userService = new UserService()
```

## Cross-Package Type Sharing
```typescript
// packages/shared-types/src/api.ts
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// packages/shared-types/src/user.ts
export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  createdAt: string
  updatedAt: string
}

export interface CreateUserRequest {
  email: string
  name: string
  password: string
  role?: UserRole
}

export interface UpdateUserRequest {
  email?: string
  name?: string
  role?: UserRole
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  VIEWER = 'viewer'
}
```
```

## 🛠️ Build System Configuration

### **Turborepo Setup**
```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "build/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": []
    },
    "type-check": {
      "dependsOn": ["^build"],
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "clean": {
      "cache": false
    }
  }
}
```

### **PNPM Workspace Configuration**
```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'tools/*'
```

### **Root Package.json**
```json
{
  "name": "@company/monorepo",
  "private": true,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --parallel",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "type-check": "turbo run type-check",
    "clean": "turbo run clean && rimraf node_modules",
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "pnpm build && changeset publish"
  },
  "devDependencies": {
    "@changesets/cli": "^2.26.0",
    "turbo": "^1.10.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "rimraf": "^5.0.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
```

## 📦 Package Examples

### **UI Component Library**
```typescript
// packages/ui/src/index.ts
export { Button } from './Button'
export { Input } from './Input'
export { Modal } from './Modal'
export { Card } from './Card'

export type { ButtonProps } from './Button'
export type { InputProps } from './Input'
export type { ModalProps } from './Modal'
export type { CardProps } from './Card'

// packages/ui/package.json
{
  "name": "@company/ui",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  },
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "dev": "tsup src/index.ts --format cjs,esm --dts --watch",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "@storybook/react": "^7.0.0",
    "tsup": "^7.0.0"
  }
}
```

### **Shared Configuration Package**
```javascript
// packages/config/eslint/index.js
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error'
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      settings: {
        react: {
          version: 'detect'
        }
      }
    }
  ]
}

// packages/config/tailwind/index.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      }
    }
  },
  plugins: []
}
```

## 🧪 Testing Strategy

### **Cross-Package Testing**
```typescript
// apps/web/src/__tests__/integration.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@company/ui'
import { formatDate } from '@company/utils'
import { userService } from '@company/api-client'

// Test integration between packages
describe('Package Integration', () => {
  test('UI components render correctly', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Test Button')
  })

  test('utils work correctly', () => {
    const date = new Date('2023-01-01')
    expect(formatDate(date)).toBe('January 1, 2023')
  })

  test('API client methods exist', () => {
    expect(typeof userService.getUsers).toBe('function')
    expect(typeof userService.createUser).toBe('function')
  })
})
```

### **Package-Specific Testing**
```typescript
// packages/ui/src/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('applies variant classes correctly', () => {
    render(<Button variant="secondary">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200')
  })
})
```

## 🚀 Development Workflow

### **Common Commands**
```bash
# Install dependencies for all packages
pnpm install

# Run development servers for all apps
pnpm dev

# Build all packages and apps
pnpm build

# Run tests for all packages
pnpm test

# Lint all packages
pnpm lint

# Type check all packages
pnpm type-check

# Work on specific package
pnpm --filter @company/ui dev
pnpm --filter web build

# Add dependency to specific package
pnpm --filter @company/ui add react-icons
pnpm --filter web add @company/ui

# Run command in all packages
pnpm -r build
pnpm -r test
```

### **AI-Driven Package Development**
```bash
# Epic planning for cross-package features
"Plan an epic for design system integration across web and mobile apps"

# Work on specific epic components
"Start working on the Button component from the design system epic"

# Standalone package development
"Create a new utility package for date formatting functions"

# AI automatically:
# - Manages epic context across package boundaries
# - Ensures consistency between related packages
# - Updates epic progress for multi-package work
```

### **Package Development Workflow**
```bash
# Blueprint Phase - AI includes epic requirements for cross-package work
# - Analyzes package dependencies and relationships
# - Plans consistent APIs across packages
# - Considers version compatibility

# Construct Phase - AI implements with package context
# - Creates package structure following monorepo patterns
# - Implements with proper internal dependencies
# - Updates dependent packages when needed

# Validate Phase - AI verifies across package boundaries
# - Tests package integration
# - Validates version compatibility
# - Updates epic progress for multi-package features
```

## 📈 Performance Optimization

### **Build Optimization**
```bash
# Only build changed packages
turbo run build --filter="[HEAD^]"

# Parallel execution with dependency respect
turbo run build --parallel

# Cache optimization
turbo run build --cache-dir=.turbo-cache
```

### **Development Performance**
```json
// turbo.json - Optimized for development
{
  "pipeline": {
    "dev": {
      "cache": false,
      "persistent": true,
      "dependsOn": ["^build"]
    }
  }
}
```

This monorepo example demonstrates how to effectively manage multiple packages and applications with shared dependencies, consistent tooling, and efficient build processes using the Cursor Rule Framework. 