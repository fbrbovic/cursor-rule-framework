# 📋 Rule Templates

Copy-paste rule templates for common development scenarios. These templates provide starting points for creating your own project-specific rules.

## 🚀 Getting Started with Templates

### **How to Use These Templates**
1. **Copy the template** that matches your technology/scenario
2. **Customize** the specifics for your project
3. **Save** as `.mdc` file in your `.cursor/rules/` directory
4. **Test** the rule with AI interactions

### **Template Structure**
```yaml
---
description: Brief description of what this rule accomplishes
globs: "file/path/patterns/**/*.{ext}"  # When this rule applies
alwaysApply: false  # true = always active, false = only for matching files
---

# Rule Content
Write your rule content here in markdown format.
```

## 🎨 Frontend Development Templates

### **React Component Standards**
```yaml
---
description: React component development standards with TypeScript
globs: "src/components/**/*.{tsx,ts}"
alwaysApply: false
---

# React Component Standards

## Component Structure
- Use functional components with TypeScript
- Define props interface above the component
- Use descriptive prop names with TypeScript types
- Include default values for optional props

## Naming Conventions
- Component files: PascalCase (e.g., `UserProfile.tsx`)
- Component names: PascalCase matching file name
- Props interface: `[ComponentName]Props`
- CSS modules: kebab-case (e.g., `user-profile.module.css`)

## Required Elements
- TypeScript interface for props
- Proper import/export structure
- JSDoc comments for complex components
- Error boundaries for components that fetch data

## Example Structure
```typescript
interface UserProfileProps {
  user: User;
  onEdit?: () => void;
  showAvatar?: boolean;
}

/**
 * Displays user profile information with optional edit functionality
 */
export const UserProfile: React.FC<UserProfileProps> = ({
  user,
  onEdit,
  showAvatar = true
}) => {
  // Component implementation
};
```

## Testing Requirements
- Create corresponding test file: `ComponentName.test.tsx`
- Test rendering with required props
- Test user interactions and callbacks
- Test error states if applicable
```

### **Vue.js Composition API Standards**
```yaml
---
description: Vue.js component standards using Composition API and TypeScript
globs: "src/components/**/*.vue"
alwaysApply: false
---

# Vue.js Component Standards

## Component Structure
- Use Composition API with `<script setup lang="ts">`
- Define props using `defineProps` with TypeScript
- Use `defineEmits` for event handling
- Organize imports, composables, reactive data, methods, lifecycle

## Naming Conventions
- Component files: PascalCase (e.g., `UserProfile.vue`)
- Props: camelCase with descriptive names
- Events: kebab-case (e.g., `user-updated`)
- Composables: camelCase starting with "use" (e.g., `useUserData`)

## Required Elements
- TypeScript interfaces for props and emits
- Proper script setup structure
- Scoped styles when component-specific
- JSDoc for complex components

## Example Structure
```vue
<template>
  <div class="user-profile">
    <!-- Template content -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  user: User;
  showAvatar?: boolean;
}

interface Emits {
  (e: 'user-updated', user: User): void;
}

const props = withDefaults(defineProps<Props>(), {
  showAvatar: true
});

const emit = defineEmits<Emits>();

// Composables, reactive data, methods
</script>

<style scoped>
.user-profile {
  /* Component styles */
}
</style>
```

### **CSS/Styling Standards**
```yaml
---
description: CSS and styling conventions with Tailwind CSS
globs: "src/**/*.{css,scss,vue,tsx}"
alwaysApply: false
---

# Styling Standards

## Framework Usage
- Primary: Tailwind CSS utility classes
- Custom CSS: CSS modules for component-specific styles
- Global styles: Only for resets and base typography

## Naming Conventions
- CSS Modules: kebab-case (e.g., `.user-card`, `.primary-button`)
- Custom CSS variables: `--color-primary`, `--spacing-lg`
- Avoid inline styles except for dynamic values

## Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Use `sm:`, `md:`, `lg:`, `xl:` prefixes
- Test on mobile, tablet, and desktop

## Component Styling Patterns
```typescript
// CSS Modules approach
import styles from './UserCard.module.css';

const UserCard = () => (
  <div className={styles['user-card']}>
    <div className={styles['user-avatar']}>
      {/* Avatar content */}
    </div>
  </div>
);

// Tailwind approach
const UserCard = () => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
      {/* Avatar content */}
    </div>
  </div>
);
```

## Accessibility Requirements
- Include proper ARIA labels and roles
- Ensure sufficient color contrast
- Support keyboard navigation
- Use semantic HTML elements
```

## 🔧 Backend Development Templates

### **Express.js API Standards**
```yaml
---
description: Express.js API endpoint development with TypeScript and validation
globs: "src/routes/**/*.ts"
alwaysApply: false
---

# Express.js API Standards

## Endpoint Structure
- Use Express Router for route grouping
- Include request validation with Zod schemas
- Implement proper error handling with try-catch
- Return consistent JSON response format
- Include basic OpenAPI/Swagger comments

## Response Format
```typescript
// Success Response
{
  success: true,
  data: T,
  message?: string
}

// Error Response
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: any
  }
}
```

## Example Endpoint
```typescript
import { Router, Request, Response } from 'express';
import { z } from 'zod';

const router = Router();

const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional()
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 */
router.post('/users', async (req: Request, res: Response) => {
  try {
    const validatedData = CreateUserSchema.parse(req.body);
    
    // Business logic here
    const user = await userService.create(validatedData);
    
    res.status(201).json({
      success: true,
      data: user,
      message: 'User created successfully'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid request data',
          details: error.errors
        }
      });
    }
    
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Internal server error'
      }
    });
  }
});

export default router;
```

## Error Handling
- Always use try-catch blocks
- Validate input with Zod schemas
- Return appropriate HTTP status codes
- Log errors for debugging
- Never expose internal error details to clients
```

### **Database Access Patterns**
```yaml
---
description: Database access patterns using Prisma ORM with TypeScript
globs: "src/db/**/*.ts"
alwaysApply: false
---

# Database Access Patterns

## Repository Pattern
- Create repository classes for each entity
- Use dependency injection for repositories
- Include error handling for all database operations
- Implement pagination for list queries

## Query Patterns
- Use Prisma client for all database operations
- Include relations using `include` or `select`
- Implement proper filtering and sorting
- Use transactions for multi-table operations

## Example Repository
```typescript
import { PrismaClient, User, Prisma } from '@prisma/client';

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: { id },
        include: {
          profile: true,
          posts: {
            take: 5,
            orderBy: { createdAt: 'desc' }
          }
        }
      });
    } catch (error) {
      console.error('Error finding user by ID:', error);
      throw new Error('Failed to find user');
    }
  }

  async findMany(options: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<{ users: User[]; total: number }> {
    try {
      const { page = 1, limit = 10, search } = options;
      const skip = (page - 1) * limit;

      const where: Prisma.UserWhereInput = search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { email: { contains: search, mode: 'insensitive' } }
            ]
          }
        : {};

      const [users, total] = await Promise.all([
        this.prisma.user.findMany({
          where,
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' }
        }),
        this.prisma.user.count({ where })
      ]);

      return { users, total };
    } catch (error) {
      console.error('Error finding users:', error);
      throw new Error('Failed to find users');
    }
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    try {
      return await this.prisma.user.create({
        data,
        include: {
          profile: true
        }
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
        include: {
          profile: true
        }
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({
        where: { id }
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  }

  async executeTransaction<T>(
    operation: (prisma: Prisma.TransactionClient) => Promise<T>
  ): Promise<T> {
    try {
      return await this.prisma.$transaction(operation);
    } catch (error) {
      console.error('Transaction failed:', error);
      throw new Error('Database transaction failed');
    }
  }
}
```

## Best Practices
- Always handle database errors appropriately
- Use transactions for related operations
- Implement proper pagination for large datasets
- Include relevant relations to avoid N+1 queries
- Use prepared statements (Prisma handles this automatically)
```

## 🧪 Testing Templates

### **React Component Testing**
```yaml
---
description: React component testing standards with Jest and React Testing Library
globs: "src/**/*.{test,spec}.{ts,tsx}"
alwaysApply: false
---

# React Component Testing Standards

## Testing Framework
- Use Jest + React Testing Library
- Focus on user behavior, not implementation details
- Test accessibility and user interactions
- Mock external dependencies appropriately

## Test Structure
- Arrange → Act → Assert pattern
- Descriptive test names that explain user scenarios
- Group related tests with `describe` blocks
- Use `beforeEach` for common setup

## Example Component Test
```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfile } from './UserProfile';
import { mockUser } from '@/test/fixtures';

describe('UserProfile Component', () => {
  const defaultProps = {
    user: mockUser,
    onEdit: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('displays user name and email', () => {
      render(<UserProfile {...defaultProps} />);
      
      expect(screen.getByText(mockUser.name)).toBeInTheDocument();
      expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    });

    it('shows avatar when showAvatar is true', () => {
      render(<UserProfile {...defaultProps} showAvatar={true} />);
      
      const avatar = screen.getByRole('img', { name: /avatar/i });
      expect(avatar).toBeInTheDocument();
    });

    it('hides avatar when showAvatar is false', () => {
      render(<UserProfile {...defaultProps} showAvatar={false} />);
      
      const avatar = screen.queryByRole('img', { name: /avatar/i });
      expect(avatar).not.toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('calls onEdit when edit button is clicked', async () => {
      const user = userEvent.setup();
      render(<UserProfile {...defaultProps} />);
      
      const editButton = screen.getByRole('button', { name: /edit/i });
      await user.click(editButton);
      
      expect(defaultProps.onEdit).toHaveBeenCalledTimes(1);
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<UserProfile {...defaultProps} />);
      
      const editButton = screen.getByRole('button', { name: /edit/i });
      
      await user.tab();
      expect(editButton).toHaveFocus();
      
      await user.keyboard('{Enter}');
      expect(defaultProps.onEdit).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<UserProfile {...defaultProps} />);
      
      expect(screen.getByRole('region', { name: /user profile/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /edit.*profile/i })).toBeInTheDocument();
    });

    it('supports screen readers', () => {
      render(<UserProfile {...defaultProps} />);
      
      const profileSection = screen.getByRole('region');
      expect(profileSection).toHaveAttribute('aria-label');
    });
  });

  describe('Error States', () => {
    it('handles missing user data gracefully', () => {
      render(<UserProfile {...defaultProps} user={null} />);
      
      expect(screen.getByText(/no user data/i)).toBeInTheDocument();
    });
  });
});
```

## Testing Best Practices
- Test user behavior, not implementation
- Use semantic queries (getByRole, getByText)
- Mock API calls and external dependencies
- Test error states and edge cases
- Ensure tests are independent and can run in any order
```

### **API Endpoint Testing**
```yaml
---
description: API endpoint testing with Jest and Supertest
globs: "src/**/*.{test,spec}.ts"
alwaysApply: false
---

# API Endpoint Testing Standards

## Testing Framework
- Use Jest + Supertest for HTTP testing
- Mock external services and databases
- Test all HTTP methods and status codes
- Include authentication and authorization tests

## Test Structure
- Group tests by endpoint/resource
- Test happy path and error cases
- Use proper test data setup/teardown
- Mock database operations with consistent data

## Example API Test
```typescript
import request from 'supertest';
import { app } from '@/app';
import { prismaMock } from '@/test/mocks/prisma';
import { mockUser, mockUsers } from '@/test/fixtures';

describe('POST /api/users', () => {
  describe('Success Cases', () => {
    it('creates a new user with valid data', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 25
      };

      prismaMock.user.create.mockResolvedValue({
        id: '1',
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);

      expect(response.body).toEqual({
        success: true,
        data: expect.objectContaining({
          id: expect.any(String),
          name: userData.name,
          email: userData.email,
          age: userData.age
        }),
        message: 'User created successfully'
      });

      expect(prismaMock.user.create).toHaveBeenCalledWith({
        data: userData,
        include: { profile: true }
      });
    });

    it('creates user without optional age field', async () => {
      const userData = {
        name: 'Jane Doe',
        email: 'jane@example.com'
      };

      prismaMock.user.create.mockResolvedValue({
        id: '2',
        ...userData,
        age: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.age).toBeNull();
    });
  });

  describe('Validation Errors', () => {
    it('returns 400 for missing required fields', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({})
        .expect(400);

      expect(response.body).toEqual({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid request data',
          details: expect.arrayContaining([
            expect.objectContaining({
              path: ['name'],
              message: expect.any(String)
            }),
            expect.objectContaining({
              path: ['email'],
              message: expect.any(String)
            })
          ])
        }
      });
    });

    it('returns 400 for invalid email format', async () => {
      const userData = {
        name: 'John Doe',
        email: 'invalid-email'
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(400);

      expect(response.body.error.details).toContainEqual(
        expect.objectContaining({
          path: ['email'],
          message: expect.stringContaining('email')
        })
      );
    });

    it('returns 400 for age under 18', async () => {
      const userData = {
        name: 'Young User',
        email: 'young@example.com',
        age: 16
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(400);

      expect(response.body.error.details).toContainEqual(
        expect.objectContaining({
          path: ['age'],
          message: expect.stringContaining('18')
        })
      );
    });
  });

  describe('Database Errors', () => {
    it('returns 500 for database connection error', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com'
      };

      prismaMock.user.create.mockRejectedValue(new Error('Database connection failed'));

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(500);

      expect(response.body).toEqual({
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Internal server error'
        }
      });
    });

    it('returns 409 for duplicate email', async () => {
      const userData = {
        name: 'John Doe',
        email: 'existing@example.com'
      };

      prismaMock.user.create.mockRejectedValue({
        code: 'P2002',
        meta: { target: ['email'] }
      });

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(409);

      expect(response.body.error.code).toBe('DUPLICATE_EMAIL');
    });
  });
});

describe('GET /api/users', () => {
  it('returns paginated list of users', async () => {
    prismaMock.user.findMany.mockResolvedValue(mockUsers);
    prismaMock.user.count.mockResolvedValue(50);

    const response = await request(app)
      .get('/api/users')
      .query({ page: 1, limit: 10 })
      .expect(200);

    expect(response.body).toEqual({
      success: true,
      data: {
        users: mockUsers,
        pagination: {
          page: 1,
          limit: 10,
          total: 50,
          pages: 5
        }
      }
    });
  });

  it('supports search functionality', async () => {
    const searchResults = [mockUsers[0]];
    prismaMock.user.findMany.mockResolvedValue(searchResults);
    prismaMock.user.count.mockResolvedValue(1);

    const response = await request(app)
      .get('/api/users')
      .query({ search: 'john' })
      .expect(200);

    expect(prismaMock.user.findMany).toHaveBeenCalledWith({
      where: {
        OR: [
          { name: { contains: 'john', mode: 'insensitive' } },
          { email: { contains: 'john', mode: 'insensitive' } }
        ]
      },
      skip: 0,
      take: 10,
      orderBy: { createdAt: 'desc' }
    });
  });
});
```

## Testing Best Practices
- Test all HTTP methods and status codes
- Mock external dependencies consistently
- Use descriptive test names
- Test authentication and authorization
- Include performance tests for critical endpoints
```

## 🔐 Security Templates

### **Authentication & Authorization**
```yaml
---
description: Authentication and authorization patterns with JWT
globs: "src/auth/**/*.ts"
alwaysApply: true
---

# Authentication & Authorization Standards

## JWT Implementation
- Use secure JWT signing with environment variables
- Include proper token expiration times
- Implement refresh token mechanism
- Validate tokens on protected routes

## Security Best Practices
- Hash passwords with bcrypt (minimum 12 rounds)
- Validate input to prevent injection attacks
- Implement rate limiting for auth endpoints
- Log security events for monitoring

## Example Auth Implementation
```typescript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET!;
  private readonly JWT_EXPIRES_IN = '15m';
  private readonly REFRESH_TOKEN_EXPIRES_IN = '7d';
  private readonly BCRYPT_ROUNDS = 12;

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.BCRYPT_ROUNDS);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  generateAccessToken(payload: JWTPayload): string {
    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRES_IN,
      issuer: 'your-app-name',
      audience: 'your-app-users'
    });
  }

  generateRefreshToken(userId: string): string {
    return jwt.sign(
      { userId, type: 'refresh' },
      this.JWT_SECRET,
      {
        expiresIn: this.REFRESH_TOKEN_EXPIRES_IN,
        issuer: 'your-app-name'
      }
    );
  }

  verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, this.JWT_SECRET) as JWTPayload;
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }
}

// Middleware for protecting routes
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'MISSING_TOKEN',
          message: 'Authorization token required'
        }
      });
    }

    const token = authHeader.substring(7);
    const authService = new AuthService();
    const payload = authService.verifyToken(token);

    // Add user info to request
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: {
        code: 'INVALID_TOKEN',
        message: 'Invalid or expired token'
      }
    });
  }
};

// Role-based authorization middleware
export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication required'
        }
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Insufficient permissions'
        }
      });
    }

    next();
  };
};
```

## Security Checklist
- [ ] JWT secret is stored securely in environment variables
- [ ] Passwords are hashed with sufficient rounds
- [ ] Tokens have appropriate expiration times
- [ ] Authentication endpoints have rate limiting
- [ ] Input validation prevents injection attacks
- [ ] Security events are logged
- [ ] HTTPS is enforced in production
```

## 📱 Environment & Configuration Templates

### **Environment Configuration**
```yaml
---
description: Environment configuration and secrets management
globs: "src/config/**/*.ts"
alwaysApply: true
---

# Environment Configuration Standards

## Environment Variables
- Use `.env` files for local development
- Never commit secrets to version control
- Validate required environment variables at startup
- Use different configs for different environments

## Configuration Structure
```typescript
import { z } from 'zod';

// Environment validation schema
const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  PORT: z.string().transform(Number).pipe(z.number().min(1024)),
  
  // Database
  DATABASE_URL: z.string().url(),
  DATABASE_POOL_SIZE: z.string().transform(Number).pipe(z.number().min(1)).default('10'),
  
  // JWT
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('15m'),
  
  // External Services
  REDIS_URL: z.string().url().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().transform(Number).pipe(z.number()).optional(),
  
  // Feature Flags
  ENABLE_RATE_LIMITING: z.string().transform(val => val === 'true').default('true'),
  ENABLE_LOGGING: z.string().transform(val => val === 'true').default('true'),
  
  // API Keys (mark as sensitive)
  STRIPE_SECRET_KEY: z.string().optional(),
  SENDGRID_API_KEY: z.string().optional(),
});

type Environment = z.infer<typeof EnvSchema>;

class Config {
  private static instance: Config;
  private env: Environment;

  private constructor() {
    try {
      this.env = EnvSchema.parse(process.env);
    } catch (error) {
      console.error('Environment validation failed:', error);
      process.exit(1);
    }
  }

  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  get database() {
    return {
      url: this.env.DATABASE_URL,
      poolSize: this.env.DATABASE_POOL_SIZE
    };
  }

  get jwt() {
    return {
      secret: this.env.JWT_SECRET,
      expiresIn: this.env.JWT_EXPIRES_IN
    };
  }

  get server() {
    return {
      port: this.env.PORT,
      nodeEnv: this.env.NODE_ENV,
      isDevelopment: this.env.NODE_ENV === 'development',
      isProduction: this.env.NODE_ENV === 'production'
    };
  }

  get features() {
    return {
      rateLimiting: this.env.ENABLE_RATE_LIMITING,
      logging: this.env.ENABLE_LOGGING
    };
  }

  get externalServices() {
    return {
      redis: this.env.REDIS_URL,
      stripe: this.env.STRIPE_SECRET_KEY,
      sendGrid: this.env.SENDGRID_API_KEY,
      smtp: {
        host: this.env.SMTP_HOST,
        port: this.env.SMTP_PORT
      }
    };
  }

  // Method to safely log config (without secrets)
  logSafeConfig() {
    const safeConfig = {
      nodeEnv: this.env.NODE_ENV,
      port: this.env.PORT,
      features: this.features,
      hasDatabase: !!this.env.DATABASE_URL,
      hasRedis: !!this.env.REDIS_URL,
      hasStripe: !!this.env.STRIPE_SECRET_KEY,
      hasEmailService: !!(this.env.SENDGRID_API_KEY || this.env.SMTP_HOST)
    };
    
    console.log('Application configuration:', safeConfig);
  }
}

export const config = Config.getInstance();

// Example .env file template
/*
# Environment
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/myapp
DATABASE_POOL_SIZE=10

# JWT
JWT_SECRET=your-super-secure-secret-key-minimum-32-characters
JWT_EXPIRES_IN=15m

# External Services (optional)
REDIS_URL=redis://localhost:6379
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# API Keys (optional)
STRIPE_SECRET_KEY=sk_test_...
SENDGRID_API_KEY=SG....

# Feature Flags
ENABLE_RATE_LIMITING=true
ENABLE_LOGGING=true
*/
```

## Configuration Best Practices
- Validate all environment variables at startup
- Use strong typing with validation schemas
- Never log or expose sensitive values
- Provide sensible defaults where appropriate
- Document all required and optional variables
- Use feature flags for optional functionality
```

---

## 🎯 Using These Templates

### **Customization Guidelines**
1. **Copy the template** that matches your needs
2. **Update the `globs` pattern** to match your file structure
3. **Customize the rules** for your specific requirements
4. **Test the rules** with AI interactions
5. **Iterate and improve** based on real usage

### **Combining Templates**
You can combine multiple templates in a single file or create separate files for each concern:

```yaml
---
description: Frontend React and API development standards
globs: "src/**/*.{ts,tsx}"
alwaysApply: false
---

# Full-Stack Development Standards

## Frontend Standards
[Include React component rules here]

## API Standards  
[Include API development rules here]

## Testing Standards
[Include testing rules here]
```

### **Template Maintenance**
- **Regular reviews**: Update templates based on team feedback
- **Version control**: Track template changes in your repository
- **Team alignment**: Ensure all team members use the same templates
- **Continuous improvement**: Evolve templates as your project grows

---

**These templates provide a solid foundation for consistent, AI-driven development. Customize them to match your project's specific needs and patterns!** 