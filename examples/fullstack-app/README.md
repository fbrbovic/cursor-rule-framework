# 🌐 Full-Stack Application Example

This example demonstrates building a complete full-stack application using the Cursor Rule Framework with coordinated frontend and backend development.

## ⚠️ **CRITICAL SETUP STEP**

### **Install User Rules Template FIRST**
```bash
# ESSENTIAL: Install framework's user rules template in Cursor IDE
# 1. Open .cursor/rules/user-rules-template.mdc
# 2. Copy ALL content (Ctrl+A, Ctrl+C)
# 3. Cursor IDE → Settings → Features → Rules for AI → User Rules  
# 4. Paste content and restart Cursor IDE
# This enables Blueprint → Construct → Validate workflow for fullstack development
```

## 🚀 Project Overview

### **Application: Task Management System**
A modern task management application with real-time collaboration, user authentication, and responsive design.

**Features:**
- User registration and authentication
- Real-time task updates
- Team collaboration
- File attachments
- Activity notifications
- Mobile-responsive design

## 🏗️ Architecture Overview

```
fullstack-app/
├── .cursor/
│   └── rules/
│       ├── project-config.mdc
│       ├── fullstack-patterns.mdc
│       ├── api-integration.mdc
│       └── deployment.mdc
├── frontend/          # React TypeScript app
├── backend/           # Node.js Express API
├── shared/           # Shared types and utilities
├── docs/             # API and project documentation
├── docker-compose.yml
└── README.md
```

## 🔧 Framework Configuration

```yaml
# .cursor/rules/project-config.mdc
---
description: Full-stack application configuration and standards
globs: "**/*.*"
alwaysApply: true
---

# Full-Stack Project Configuration

## Project Goal
Build a production-ready task management application with real-time collaboration

## Tech Stack
### Frontend
- **Framework**: React 18 with TypeScript
- **State Management**: Zustand + React Query
- **UI Library**: Tailwind CSS + Headless UI
- **Real-time**: Socket.io Client
- **Testing**: Vitest + React Testing Library

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with CORS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with refresh tokens
- **Real-time**: Socket.io
- **Testing**: Jest + Supertest

### Shared
- **Types**: Shared TypeScript definitions
- **Validation**: Zod schemas for API contracts
- **Utilities**: Common helper functions

### DevOps
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: Railway/Heroku + Vercel
- **Monitoring**: Sentry + LogRocket

## Development Principles
- **API-First**: Design APIs before implementation
- **Type Safety**: End-to-end TypeScript coverage
- **Real-time**: WebSocket integration for live updates
- **Testing**: Comprehensive test coverage
- **Security**: Authentication, authorization, input validation
```

## 📋 Full-Stack Specific Rules

### **API Integration Patterns**
```yaml
# .cursor/rules/api-integration.mdc
---
description: Frontend-backend API integration patterns
globs: "{frontend/src,backend/src}/**/*.{ts,tsx}"
alwaysApply: false
---

# API Integration Standards

## Purpose
Ensure consistent, type-safe communication between frontend and backend.

## Shared Type Definitions
```typescript
// shared/types/api.ts
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Task-related types
export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  assigneeId?: string
  projectId: string
  dueDate?: string
  createdAt: string
  updatedAt: string
}

export interface CreateTaskRequest {
  title: string
  description?: string
  priority: TaskPriority
  assigneeId?: string
  projectId: string
  dueDate?: string
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE'
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}
```

## API Client (Frontend)
```typescript
// frontend/src/services/api.ts
import axios, { AxiosResponse } from 'axios'
import { ApiResponse, PaginatedResponse } from '@shared/types/api'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api/v1'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired, try to refresh
      const refreshed = await refreshToken()
      if (refreshed) {
        // Retry original request
        return apiClient.request(error.config)
      } else {
        // Redirect to login
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export class TaskService {
  static async getTasks(projectId: string, page = 1): Promise<PaginatedResponse<Task>> {
    const response = await apiClient.get<PaginatedResponse<Task>>(
      `/projects/${projectId}/tasks?page=${page}`
    )
    return response.data
  }

  static async createTask(task: CreateTaskRequest): Promise<ApiResponse<Task>> {
    const response = await apiClient.post<ApiResponse<Task>>('/tasks', task)
    return response.data
  }

  static async updateTask(id: string, updates: Partial<Task>): Promise<ApiResponse<Task>> {
    const response = await apiClient.put<ApiResponse<Task>>(`/tasks/${id}`, updates)
    return response.data
  }

  static async deleteTask(id: string): Promise<ApiResponse<void>> {
    const response = await apiClient.delete<ApiResponse<void>>(`/tasks/${id}`)
    return response.data
  }
}
```

## React Query Integration
```typescript
// frontend/src/hooks/useTasks.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { TaskService } from '../services/api'
import { Task, CreateTaskRequest } from '@shared/types/api'

export function useTasks(projectId: string, page = 1) {
  return useQuery({
    queryKey: ['tasks', projectId, page],
    queryFn: () => TaskService.getTasks(projectId, page),
    staleTime: 30000, // 30 seconds
    cacheTime: 300000, // 5 minutes
  })
}

export function useCreateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: TaskService.createTask,
    onSuccess: (data, variables) => {
      // Optimistic update
      queryClient.setQueryData(
        ['tasks', variables.projectId],
        (old: any) => ({
          ...old,
          data: [data.data, ...(old?.data || [])]
        })
      )

      // Invalidate and refetch
      queryClient.invalidateQueries(['tasks', variables.projectId])
    }
  })
}

export function useUpdateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Task> }) =>
      TaskService.updateTask(id, updates),
    onSuccess: (data, variables) => {
      // Update specific task in cache
      queryClient.setQueryData(
        ['tasks'],
        (old: any) => {
          if (!old?.data) return old
          return {
            ...old,
            data: old.data.map((task: Task) =>
              task.id === variables.id ? { ...task, ...data.data } : task
            )
          }
        }
      )
    }
  })
}
```

## Backend API Implementation
```typescript
// backend/src/controllers/TaskController.ts
import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { TaskService } from '../services/TaskService'
import { CreateTaskRequest, TaskStatus, TaskPriority } from '@shared/types/api'

const createTaskSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  priority: z.nativeEnum(TaskPriority),
  assigneeId: z.string().uuid().optional(),
  projectId: z.string().uuid(),
  dueDate: z.string().datetime().optional()
})

const updateTaskSchema = createTaskSchema.partial()

export class TaskController {
  constructor(private taskService: TaskService) {}

  async getTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const { projectId } = req.params
      const page = parseInt(req.query.page as string) || 1
      const limit = parseInt(req.query.limit as string) || 10

      const result = await this.taskService.getTasks(projectId, { page, limit })

      res.json({
        success: true,
        data: result.data,
        pagination: result.pagination
      })
    } catch (error) {
      next(error)
    }
  }

  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const taskData = createTaskSchema.parse(req.body)
      const userId = req.user!.id

      const task = await this.taskService.createTask(taskData, userId)

      // Emit real-time update
      req.io.to(`project:${taskData.projectId}`).emit('taskCreated', task)

      res.status(201).json({
        success: true,
        data: task,
        message: 'Task created successfully'
      })
    } catch (error) {
      next(error)
    }
  }

  async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const updates = updateTaskSchema.parse(req.body)
      const userId = req.user!.id

      const task = await this.taskService.updateTask(id, updates, userId)

      // Emit real-time update
      req.io.to(`project:${task.projectId}`).emit('taskUpdated', task)

      res.json({
        success: true,
        data: task,
        message: 'Task updated successfully'
      })
    } catch (error) {
      next(error)
    }
  }
}
```
```

### **Real-time Integration**
```yaml
# .cursor/rules/realtime-patterns.mdc
---
description: Socket.io real-time communication patterns
globs: "{frontend/src,backend/src}/**/*.{ts,tsx}"
alwaysApply: false
---

# Real-time Communication Standards

## Purpose
Implement consistent real-time features using Socket.io for live collaboration.

## Backend Socket Setup
```typescript
// backend/src/socket/socketHandler.ts
import { Server } from 'socket.io'
import { verifyToken } from '../middleware/auth'
import { TaskService } from '../services/TaskService'

export function setupSocketHandlers(io: Server, taskService: TaskService) {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token
      const payload = await verifyToken(token)
      socket.userId = payload.userId
      socket.userEmail = payload.email
      next()
    } catch (error) {
      next(new Error('Authentication failed'))
    }
  })

  io.on('connection', (socket) => {
    console.log(`User ${socket.userEmail} connected`)

    // Join project rooms
    socket.on('joinProject', (projectId: string) => {
      socket.join(`project:${projectId}`)
      socket.to(`project:${projectId}`).emit('userJoined', {
        userId: socket.userId,
        email: socket.userEmail
      })
    })

    // Leave project rooms
    socket.on('leaveProject', (projectId: string) => {
      socket.leave(`project:${projectId}`)
      socket.to(`project:${projectId}`).emit('userLeft', {
        userId: socket.userId,
        email: socket.userEmail
      })
    })

    // Task status updates
    socket.on('taskStatusUpdate', async (data: { taskId: string; status: TaskStatus }) => {
      try {
        const task = await taskService.updateTaskStatus(data.taskId, data.status, socket.userId)
        socket.to(`project:${task.projectId}`).emit('taskUpdated', task)
      } catch (error) {
        socket.emit('error', { message: error.message })
      }
    })

    // Typing indicators
    socket.on('typing', (data: { taskId: string; isTyping: boolean }) => {
      socket.to(`task:${data.taskId}`).emit('userTyping', {
        userId: socket.userId,
        email: socket.userEmail,
        isTyping: data.isTyping
      })
    })

    socket.on('disconnect', () => {
      console.log(`User ${socket.userEmail} disconnected`)
    })
  })
}
```

## Frontend Socket Integration
```typescript
// frontend/src/hooks/useSocket.ts
import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '../store/authStore'
import { useQueryClient } from '@tanstack/react-query'

export function useSocket() {
  const socketRef = useRef<Socket | null>(null)
  const { accessToken, user } = useAuthStore()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!accessToken) return

    // Initialize socket connection
    socketRef.current = io(import.meta.env.VITE_API_BASE_URL, {
      auth: { token: accessToken }
    })

    const socket = socketRef.current

    // Connection handlers
    socket.on('connect', () => {
      console.log('Connected to server')
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })

    // Task update handlers
    socket.on('taskCreated', (task) => {
      queryClient.setQueryData(
        ['tasks', task.projectId],
        (old: any) => ({
          ...old,
          data: [task, ...(old?.data || [])]
        })
      )
    })

    socket.on('taskUpdated', (task) => {
      queryClient.setQueryData(
        ['tasks', task.projectId],
        (old: any) => {
          if (!old?.data) return old
          return {
            ...old,
            data: old.data.map((t: Task) => 
              t.id === task.id ? task : t
            )
          }
        }
      )
    })

    socket.on('taskDeleted', (taskId) => {
      queryClient.setQueryData(
        ['tasks'],
        (old: any) => {
          if (!old?.data) return old
          return {
            ...old,
            data: old.data.filter((t: Task) => t.id !== taskId)
          }
        }
      )
    })

    return () => {
      socket.disconnect()
    }
  }, [accessToken, queryClient])

  return socketRef.current
}

// Project-specific socket hook
export function useProjectSocket(projectId: string) {
  const socket = useSocket()
  
  useEffect(() => {
    if (!socket || !projectId) return

    socket.emit('joinProject', projectId)

    return () => {
      socket.emit('leaveProject', projectId)
    }
  }, [socket, projectId])

  const updateTaskStatus = (taskId: string, status: TaskStatus) => {
    socket?.emit('taskStatusUpdate', { taskId, status })
  }

  const sendTypingIndicator = (taskId: string, isTyping: boolean) => {
    socket?.emit('typing', { taskId, isTyping })
  }

  return {
    updateTaskStatus,
    sendTypingIndicator
  }
}
```

## Real-time UI Components
```typescript
// frontend/src/components/TaskCard.tsx
import { useState, useEffect } from 'react'
import { useProjectSocket } from '../hooks/useSocket'
import { Task, TaskStatus } from '@shared/types/api'

interface TaskCardProps {
  task: Task
  onUpdate: (updates: Partial<Task>) => void
}

export function TaskCard({ task, onUpdate }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [typingUsers, setTypingUsers] = useState<string[]>([])
  const { updateTaskStatus, sendTypingIndicator } = useProjectSocket(task.projectId)

  const handleStatusChange = (status: TaskStatus) => {
    updateTaskStatus(task.id, status)
    onUpdate({ status })
  }

  const handleEditStart = () => {
    setIsEditing(true)
    sendTypingIndicator(task.id, true)
  }

  const handleEditEnd = () => {
    setIsEditing(false)
    sendTypingIndicator(task.id, false)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={task.title}
              onChange={(e) => onUpdate({ title: e.target.value })}
              onBlur={handleEditEnd}
              onKeyDown={(e) => e.key === 'Enter' && handleEditEnd()}
              className="text-lg font-medium w-full border-none outline-none"
              autoFocus
            />
          ) : (
            <h3 
              className="text-lg font-medium cursor-pointer hover:text-blue-600"
              onClick={handleEditStart}
            >
              {task.title}
            </h3>
          )}
          
          {task.description && (
            <p className="text-gray-600 mt-1">{task.description}</p>
          )}
        </div>

        <TaskStatusBadge 
          status={task.status} 
          onChange={handleStatusChange}
        />
      </div>

      {typingUsers.length > 0 && (
        <div className="mt-2 text-xs text-gray-500">
          {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}

      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</span>
        <TaskPriorityBadge priority={task.priority} />
      </div>
    </div>
  )
}
```
```

## 🧪 Full-Stack Testing Strategy

### **End-to-End Testing**
```typescript
// e2e/task-management.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Task Management', () => {
  test.beforeEach(async ({ page }) => {
    // Login as test user
    await page.goto('/login')
    await page.fill('[data-testid=email]', 'test@example.com')
    await page.fill('[data-testid=password]', 'password123')
    await page.click('[data-testid=login-button]')
    await page.waitForURL('/dashboard')
  })

  test('should create a new task', async ({ page }) => {
    // Navigate to project
    await page.click('[data-testid=project-1]')
    
    // Create new task
    await page.click('[data-testid=new-task-button]')
    await page.fill('[data-testid=task-title]', 'New Test Task')
    await page.fill('[data-testid=task-description]', 'This is a test task')
    await page.selectOption('[data-testid=task-priority]', 'HIGH')
    await page.click('[data-testid=save-task]')

    // Verify task appears
    await expect(page.locator('[data-testid=task-list]')).toContainText('New Test Task')
  })

  test('should update task status in real-time', async ({ page, context }) => {
    // Open second tab as different user
    const page2 = await context.newPage()
    await page2.goto('/login')
    await page2.fill('[data-testid=email]', 'user2@example.com')
    await page2.fill('[data-testid=password]', 'password123')
    await page2.click('[data-testid=login-button]')
    await page2.waitForURL('/dashboard')
    await page2.click('[data-testid=project-1]')

    // Update task status on first page
    await page.click('[data-testid=project-1]')
    await page.click('[data-testid=task-1] [data-testid=status-button]')
    await page.click('[data-testid=status-in-progress]')

    // Verify update appears on second page
    await expect(page2.locator('[data-testid=task-1]')).toContainText('In Progress')
  })
})
```

### **API Integration Testing**
```typescript
// tests/integration/task-api.test.ts
import request from 'supertest'
import { app } from '../../src/app'
import { setupTestDatabase, cleanupTestDatabase } from '../helpers/database'
import { createTestUser, getAuthToken } from '../helpers/auth'

describe('Task API Integration', () => {
  let authToken: string
  let userId: string
  let projectId: string

  beforeAll(async () => {
    await setupTestDatabase()
    const user = await createTestUser()
    userId = user.id
    authToken = await getAuthToken(user)
    
    // Create test project
    const projectResponse = await request(app)
      .post('/api/v1/projects')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ name: 'Test Project' })
    projectId = projectResponse.body.data.id
  })

  afterAll(async () => {
    await cleanupTestDatabase()
  })

  describe('POST /api/v1/tasks', () => {
    it('creates task successfully', async () => {
      const taskData = {
        title: 'Test Task',
        description: 'Test Description',
        priority: 'HIGH',
        projectId
      }

      const response = await request(app)
        .post('/api/v1/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .send(taskData)
        .expect(201)

      expect(response.body).toEqual({
        success: true,
        data: expect.objectContaining({
          title: taskData.title,
          description: taskData.description,
          priority: taskData.priority,
          projectId: taskData.projectId,
          status: 'TODO'
        }),
        message: 'Task created successfully'
      })
    })

    it('validates required fields', async () => {
      const invalidData = {
        description: 'Missing title'
      }

      const response = await request(app)
        .post('/api/v1/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData)
        .expect(400)

      expect(response.body.success).toBe(false)
      expect(response.body.error).toContain('validation')
    })
  })

  describe('GET /api/v1/projects/:projectId/tasks', () => {
    beforeEach(async () => {
      // Create test tasks
      await request(app)
        .post('/api/v1/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          title: 'Task 1',
          priority: 'LOW',
          projectId
        })
    })

    it('returns paginated tasks', async () => {
      const response = await request(app)
        .get(`/api/v1/projects/${projectId}/tasks?page=1&limit=10`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body).toEqual({
        success: true,
        data: expect.arrayContaining([
          expect.objectContaining({
            title: 'Task 1',
            projectId
          })
        ]),
        pagination: expect.objectContaining({
          page: 1,
          limit: 10,
          total: expect.any(Number),
          pages: expect.any(Number)
        })
      })
    })
  })
})
```

## 🚀 Deployment Configuration

### **Docker Setup**
```yaml
# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: taskapp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:password@postgres:5432/taskapp
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=your-secret-key
    depends_on:
      - postgres
      - redis
    volumes:
      - ./backend:/app
      - /app/node_modules

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - VITE_API_BASE_URL=http://localhost:3001
    volumes:
      - ./frontend:/app
      - /app/node_modules

volumes:
  postgres_data:
```

### **GitHub Actions CI/CD**
```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test-backend:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: backend/package-lock.json

      - name: Install backend dependencies
        working-directory: ./backend
        run: npm ci

      - name: Run backend tests
        working-directory: ./backend
        run: npm test
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb

  test-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: frontend/package-lock.json

      - name: Install frontend dependencies
        working-directory: ./frontend
        run: npm ci

      - name: Run frontend tests
        working-directory: ./frontend
        run: npm test

      - name: Build frontend
        working-directory: ./frontend
        run: npm run build

  e2e-tests:
    runs-on: ubuntu-latest
    needs: [test-backend, test-frontend]
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: |
          cd backend && npm ci
          cd ../frontend && npm ci
          cd ../e2e && npm ci

      - name: Start services
        run: |
          docker-compose up -d postgres redis
          cd backend && npm start &
          cd frontend && npm run build && npm run preview &
          sleep 30

      - name: Run E2E tests
        working-directory: ./e2e
        run: npx playwright test

  deploy:
    runs-on: ubuntu-latest
    needs: [test-backend, test-frontend, e2e-tests]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to production
        run: |
          echo "Deploying to production..."
          # Add deployment steps here
```

This full-stack example demonstrates how to build a complete application with coordinated frontend and backend development, real-time features, comprehensive testing, and production deployment configuration. 