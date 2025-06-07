# ⚙️ Backend API Development Example

This example demonstrates setting up a robust backend API with the Cursor Rule Framework for Node.js/Python development.

## 🚀 Quick Start

### **Install User Rules Template** ⚠️ **CRITICAL FIRST STEP**
```bash
# REQUIRED: Install framework's user rules template in Cursor IDE
# 1. Open .cursor/rules/user-rules-template.mdc
# 2. Copy entire content (Ctrl+A, Ctrl+C)
# 3. Cursor IDE → Settings → Features → Rules for AI → User Rules  
# 4. Paste content and restart Cursor IDE
# 5. Test: Ask "Help me plan an API endpoint" - should use Blueprint phase
# Without this step, the three-phase workflow will not function!
```

### **Project Initialization**
```bash
# Node.js with Express
mkdir my-backend-api
cd my-backend-api
npm init -y
npm install express typescript @types/node @types/express

# Or Python with FastAPI
mkdir my-backend-api
cd my-backend-api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn sqlalchemy alembic

# Initialize framework
git clone https://github.com/your-org/cursor-rule-framework.git .cursor-framework
cp -r .cursor-framework/.cursor .
rm -rf .cursor-framework
```

### **Framework Configuration**
```yaml
# .cursor/rules/project-config.mdc
---
description: Backend API project configuration
globs: "**/*.*"
alwaysApply: true
---

# Backend API Configuration

## Project Goal
Build a scalable, secure REST API with comprehensive documentation and testing

## Tech Stack
- **Language**: TypeScript/Python
- **Framework**: Express.js/FastAPI
- **Database**: PostgreSQL with Prisma/SQLAlchemy
- **Authentication**: JWT with refresh tokens
- **Validation**: Zod/Pydantic
- **Testing**: Jest/Pytest + Supertest/httpx
- **Documentation**: OpenAPI/Swagger

## API Architecture
- **Pattern**: Clean Architecture with dependency injection
- **Structure**: Controllers → Services → Repositories → Database
- **Error Handling**: Centralized error middleware
- **Logging**: Structured logging with correlation IDs
- **Security**: Input validation, rate limiting, CORS
```

## 🏗️ Project Structure

```
backend-api/
├── .cursor/
│   └── rules/
│       ├── project-config.mdc
│       ├── api-endpoints.mdc
│       ├── database-schema.mdc
│       └── security-patterns.mdc
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   ├── types/
│   └── config/
├── tests/
├── docs/
└── migrations/
```

## 📋 Backend-Specific Rules

### **API Endpoint Standards**
```yaml
# .cursor/rules/api-endpoints.mdc
---
description: REST API endpoint development standards
globs: "src/{controllers,routes}/**/*.{ts,py}"
alwaysApply: false
---

# API Endpoint Standards

## Purpose
Ensure consistent, secure, and well-documented API endpoints following REST conventions.

## REST Conventions
- **Resources**: Use plural nouns (`/users`, `/orders`)
- **HTTP Methods**: GET (read), POST (create), PUT (update), DELETE (remove)
- **Status Codes**: Use appropriate HTTP status codes
- **Versioning**: Include version in URL (`/api/v1/users`)

## Endpoint Structure (TypeScript)
```typescript
// ✅ Standard endpoint structure
import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(8)
})

export class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      // Input validation
      const userData = createUserSchema.parse(req.body)
      
      // Business logic
      const user = await this.userService.createUser(userData)
      
      // Response
      res.status(201).json({
        success: true,
        data: user,
        message: 'User created successfully'
      })
    } catch (error) {
      next(error)
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const user = await this.userService.getUserById(id)
      
      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        })
      }

      res.json({
        success: true,
        data: user
      })
    } catch (error) {
      next(error)
    }
  }
}
```

## Response Format Standards
```typescript
// ✅ Consistent response format
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Success response
{
  "success": true,
  "data": { "id": 1, "name": "John Doe" },
  "message": "User retrieved successfully"
}

// Error response
{
  "success": false,
  "error": "User not found"
}

// Paginated response
{
  "success": true,
  "data": [/* users */],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

## Error Handling
```typescript
// ✅ Centralized error handling
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = 500
  let message = 'Internal server error'
  let code = 'INTERNAL_ERROR'

  if (error instanceof ApiError) {
    statusCode = error.statusCode
    message = error.message
    code = error.code || 'API_ERROR'
  } else if (error instanceof z.ZodError) {
    statusCode = 400
    message = 'Validation error'
    code = 'VALIDATION_ERROR'
  }

  logger.error('API Error', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    correlationId: req.correlationId
  })

  res.status(statusCode).json({
    success: false,
    error: message,
    code,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  })
}
```
```

### **Database Schema Standards**
```yaml
# .cursor/rules/database-schema.mdc
---
description: Database schema and migration patterns
globs: "{prisma,migrations}/**/*.{sql,prisma,py}"
alwaysApply: false
---

# Database Schema Standards

## Purpose
Ensure consistent, scalable database schemas with proper relationships and constraints.

## Schema Design Principles
```sql
-- ✅ Standard table structure
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  status user_status DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  version INTEGER DEFAULT 1,
  
  -- Constraints
  CONSTRAINT users_email_format 
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT users_name_length 
    CHECK (char_length(name) >= 1)
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_created_at ON users(created_at);
```

## Prisma Schema Example
```prisma
// ✅ Prisma schema standards
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String
  status    UserStatus @default(ACTIVE)
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")
  version   Int      @default(1)

  // Relations
  profile   UserProfile?
  orders    Order[]
  sessions  Session[]

  @@map("users")
}

model UserProfile {
  id     String @id @default(cuid())
  userId String @unique @map("user_id")
  bio    String?
  avatar String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("user_profiles")
}

enum UserStatus {
  ACTIVE
  INACTIVE
  BANNED
}
```

## Migration Best Practices
```typescript
// ✅ Safe migration example
export async function up(prisma: PrismaClient) {
  // 1. Add new column as nullable first
  await prisma.$executeRaw`
    ALTER TABLE users 
    ADD COLUMN phone VARCHAR(20)
  `

  // 2. Populate data if needed
  await prisma.$executeRaw`
    UPDATE users 
    SET phone = '+1-000-000-0000' 
    WHERE phone IS NULL
  `

  // 3. Add constraints after data is populated
  await prisma.$executeRaw`
    ALTER TABLE users 
    ALTER COLUMN phone SET NOT NULL
  `

  // 4. Add indexes
  await prisma.$executeRaw`
    CREATE INDEX idx_users_phone ON users(phone)
  `
}

export async function down(prisma: PrismaClient) {
  await prisma.$executeRaw`
    DROP INDEX IF EXISTS idx_users_phone
  `
  
  await prisma.$executeRaw`
    ALTER TABLE users DROP COLUMN phone
  `
}
```
```

### **Security Implementation**
```yaml
# .cursor/rules/security-patterns.mdc
---
description: Security patterns for authentication and authorization
globs: "src/{auth,security,middleware}/**/*.{ts,py}"
alwaysApply: true
---

# Security Implementation Standards

## Purpose
Implement comprehensive security measures for authentication, authorization, and data protection.

## JWT Authentication
```typescript
// ✅ Secure JWT implementation
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class AuthService {
  private readonly ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!
  private readonly REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!
  private readonly ACCESS_TOKEN_EXPIRY = '15m'
  private readonly REFRESH_TOKEN_EXPIRY = '7d'

  async authenticate(email: string, password: string): Promise<AuthResult> {
    // Find user
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      throw new ApiError(401, 'Invalid credentials')
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.passwordHash)
    if (!isValidPassword) {
      throw new ApiError(401, 'Invalid credentials')
    }

    // Generate tokens
    const accessToken = this.generateAccessToken(user)
    const refreshToken = this.generateRefreshToken(user)

    // Store refresh token
    await this.sessionRepository.create({
      userId: user.id,
      refreshToken: await bcrypt.hash(refreshToken, 10),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })

    return {
      accessToken,
      refreshToken,
      user: this.sanitizeUser(user)
    }
  }

  private generateAccessToken(user: User): string {
    return jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        role: user.role 
      },
      this.ACCESS_TOKEN_SECRET,
      { expiresIn: this.ACCESS_TOKEN_EXPIRY }
    )
  }

  async verifyAccessToken(token: string): Promise<TokenPayload> {
    try {
      return jwt.verify(token, this.ACCESS_TOKEN_SECRET) as TokenPayload
    } catch (error) {
      throw new ApiError(401, 'Invalid or expired token')
    }
  }
}
```

## Rate Limiting
```typescript
// ✅ Redis-based rate limiting
import Redis from 'ioredis'

export class RateLimiter {
  constructor(private redis: Redis) {}

  async checkLimit(
    key: string, 
    windowMs: number, 
    maxRequests: number
  ): Promise<RateLimitResult> {
    const now = Date.now()
    const window = Math.floor(now / windowMs)
    const redisKey = `rate_limit:${key}:${window}`

    const pipeline = this.redis.pipeline()
    pipeline.incr(redisKey)
    pipeline.expire(redisKey, Math.ceil(windowMs / 1000))
    
    const results = await pipeline.exec()
    const currentCount = results[0][1] as number

    return {
      allowed: currentCount <= maxRequests,
      remaining: Math.max(0, maxRequests - currentCount),
      resetTime: (window + 1) * windowMs
    }
  }
}

// Middleware
export function createRateLimitMiddleware(options: RateLimitOptions) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const key = options.keyGenerator(req)
    const result = await rateLimiter.checkLimit(
      key,
      options.windowMs,
      options.maxRequests
    )

    res.set({
      'X-RateLimit-Limit': options.maxRequests.toString(),
      'X-RateLimit-Remaining': result.remaining.toString(),
      'X-RateLimit-Reset': new Date(result.resetTime).toISOString()
    })

    if (!result.allowed) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests'
      })
    }

    next()
  }
}
```

## Input Validation & Sanitization
```typescript
// ✅ Comprehensive input validation
import { z } from 'zod'
import DOMPurify from 'isomorphic-dompurify'

// Validation schemas
export const createUserSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid name format'),
  email: z.string()
    .email('Invalid email format')
    .max(255, 'Email too long')
    .transform(email => email.toLowerCase()),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number, and special character'
    )
})

// Sanitization middleware
export function sanitizeInput(req: Request, res: Response, next: NextFunction) {
  if (req.body) {
    req.body = sanitizeObject(req.body)
  }
  if (req.query) {
    req.query = sanitizeObject(req.query)
  }
  next()
}

function sanitizeObject(obj: any): any {
  if (typeof obj === 'string') {
    return DOMPurify.sanitize(obj)
  }
  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject)
  }
  if (obj && typeof obj === 'object') {
    const sanitized: any = {}
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeObject(value)
    }
    return sanitized
  }
  return obj
}
```
```

## 🛠️ Development Workflow

### **API Development Process**
```bash
# 1. Blueprint Phase - Plan API endpoint
"Plan a user registration endpoint with email validation and password hashing"

# AI analyzes requirements and creates plan:
# - Input validation schema
# - Security considerations
# - Database operations
# - Error handling
# - Testing strategy

# 2. Construct Phase - Implement endpoint
"Implement the user registration endpoint according to our plan"

# AI creates:
# - Controller with proper error handling
# - Service layer with business logic
# - Repository for data access
# - Validation middleware
# - Unit and integration tests

# 3. Validate Phase - Test and verify
"Validate the user registration endpoint implementation"

# AI runs tests, checks security, validates API documentation
```

### **Common Development Patterns**

#### **Service Layer Pattern**
```typescript
// ✅ Service layer with dependency injection
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private emailService: EmailService,
    private logger: Logger
  ) {}

  async createUser(userData: CreateUserData): Promise<User> {
    // Check if user exists
    const existingUser = await this.userRepository.findByEmail(userData.email)
    if (existingUser) {
      throw new ApiError(409, 'User already exists')
    }

    // Hash password
    const passwordHash = await bcrypt.hash(userData.password, 12)

    // Create user
    const user = await this.userRepository.create({
      ...userData,
      passwordHash
    })

    // Send welcome email
    await this.emailService.sendWelcomeEmail(user.email)

    // Log user creation
    this.logger.info('User created', { userId: user.id, email: user.email })

    return this.sanitizeUser(user)
  }

  async updateUser(id: string, updates: UpdateUserData): Promise<User> {
    const user = await this.userRepository.findById(id)
    if (!user) {
      throw new ApiError(404, 'User not found')
    }

    const updatedUser = await this.userRepository.update(id, updates)
    
    this.logger.info('User updated', { userId: id, updates })

    return this.sanitizeUser(updatedUser)
  }

  private sanitizeUser(user: User): PublicUser {
    const { passwordHash, ...publicUser } = user
    return publicUser
  }
}
```

#### **Repository Pattern**
```typescript
// ✅ Repository with clean interface
export interface UserRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(userData: CreateUserData): Promise<User>
  update(id: string, updates: UpdateUserData): Promise<User>
  delete(id: string): Promise<void>
  findMany(filters: UserFilters): Promise<PaginatedResult<User>>
}

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { profile: true }
    })
  }

  async create(userData: CreateUserData): Promise<User> {
    return this.prisma.user.create({
      data: userData,
      include: { profile: true }
    })
  }

  async findMany(filters: UserFilters): Promise<PaginatedResult<User>> {
    const { page = 1, limit = 10, search, status } = filters
    const skip = (page - 1) * limit

    const where: Prisma.UserWhereInput = {}
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ]
    }
    
    if (status) {
      where.status = status
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        include: { profile: true },
        orderBy: { createdAt: 'desc' }
      }),
      this.prisma.user.count({ where })
    ])

    return {
      data: users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    }
  }
}
```

## 🧪 Testing Examples

### **Unit Testing**
```typescript
// UserService.test.ts
import { UserService } from './UserService'
import { MockUserRepository } from './mocks/MockUserRepository'
import { MockEmailService } from './mocks/MockEmailService'

describe('UserService', () => {
  let userService: UserService
  let mockUserRepository: MockUserRepository
  let mockEmailService: MockEmailService

  beforeEach(() => {
    mockUserRepository = new MockUserRepository()
    mockEmailService = new MockEmailService()
    userService = new UserService(mockUserRepository, mockEmailService, mockLogger)
  })

  describe('createUser', () => {
    it('creates user successfully', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'StrongPassword123!'
      }

      mockUserRepository.findByEmail.mockResolvedValue(null)
      mockUserRepository.create.mockResolvedValue(mockUser)

      const result = await userService.createUser(userData)

      expect(result).toEqual(expect.objectContaining({
        name: userData.name,
        email: userData.email
      }))
      expect(result).not.toHaveProperty('passwordHash')
      expect(mockEmailService.sendWelcomeEmail).toHaveBeenCalledWith(userData.email)
    })

    it('throws error if user already exists', async () => {
      const userData = {
        name: 'John Doe',
        email: 'existing@example.com',
        password: 'StrongPassword123!'
      }

      mockUserRepository.findByEmail.mockResolvedValue(mockUser)

      await expect(userService.createUser(userData)).rejects.toThrow('User already exists')
    })
  })
})
```

### **Integration Testing**
```typescript
// users.integration.test.ts
import request from 'supertest'
import { app } from '../app'
import { prisma } from '../config/database'

describe('Users API', () => {
  beforeEach(async () => {
    await prisma.user.deleteMany()
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  describe('POST /api/v1/users', () => {
    it('creates user successfully', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'StrongPassword123!'
      }

      const response = await request(app)
        .post('/api/v1/users')
        .send(userData)
        .expect(201)

      expect(response.body).toEqual({
        success: true,
        data: expect.objectContaining({
          name: userData.name,
          email: userData.email,
          id: expect.any(String)
        }),
        message: 'User created successfully'
      })

      // Verify user was created in database
      const user = await prisma.user.findUnique({
        where: { email: userData.email }
      })
      expect(user).toBeTruthy()
    })

    it('returns validation error for invalid data', async () => {
      const invalidData = {
        name: '',
        email: 'invalid-email',
        password: '123'
      }

      const response = await request(app)
        .post('/api/v1/users')
        .send(invalidData)
        .expect(400)

      expect(response.body).toEqual({
        success: false,
        error: 'Validation error',
        code: 'VALIDATION_ERROR'
      })
    })
  })
})
```

## 📚 API Documentation

### **OpenAPI Specification**
```yaml
# docs/openapi.yaml
openapi: 3.0.0
info:
  title: User Management API
  version: 1.0.0
  description: REST API for user management with authentication

paths:
  /api/v1/users:
    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserResponse'
        '400':
          description: Validation error
        '409':
          description: User already exists

components:
  schemas:
    CreateUserRequest:
      type: object
      required:
        - name
        - email
        - password
      properties:
        name:
          type: string
          minLength: 1
          maxLength: 100
        email:
          type: string
          format: email
        password:
          type: string
          minLength: 8

    UserResponse:
      type: object
      properties:
        success:
          type: boolean
        data:
          $ref: '#/components/schemas/User'
        message:
          type: string

    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
        createdAt:
          type: string
          format: date-time
```

This backend API example provides a comprehensive foundation for building scalable, secure APIs with proper testing, documentation, and security measures. 