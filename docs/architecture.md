# 🏗️ Architecture Guide v2

This guide explains how to use the **modular architecture framework** in Cursor Rule Framework v2 for managing project architecture with AI assistance.

## 🆕 What's New in v2 Architecture System

### **Modular Architecture Framework**
The v2 framework includes a comprehensive architecture management system:

- **`architecture/index.mdc`** - Master architecture navigation and domain organization
- **`architecture/core/patterns.mdc`** - Universal architectural patterns (technology-agnostic)
- **`architecture/core/maintenance.mdc`** - Architecture maintenance and quality gates
- **`architecture/decisions/`** - ADR management system with templates and examples
- **`architecture/workflows/`** - Workflow integration patterns
- **`project-specific/`** - Technology-specific architecture patterns (project-customizable)

### **Enhanced Features**
- **Technology-Agnostic Core Patterns**: Universal patterns that work with any technology stack
- **ADR Management**: Built-in Architectural Decision Record templates and workflows
- **Domain-Specific Organization**: Separate architecture files for different technology domains
- **Epic Integration**: Automatic coordination with epic management system
- **Workflow Integration**: Seamless integration with enhanced workflow lifecycle
- **Architecture Lifecycle**: Automated maintenance and validation rules

## 🎯 Overview

The v2 architecture framework provides a structured, technology-agnostic approach to documenting and managing project architecture. It integrates seamlessly with the epic management system and workflow lifecycle to ensure architectural consistency throughout development.

## 🏗️ v2 Architecture Framework Structure

### **Core Architecture Files**
```
.cursor/rules/rule-framework-v2/architecture/
├── index.mdc                    # Master architecture navigation
├── core/
│   ├── patterns.mdc             # Universal patterns (technology-agnostic)
│   └── maintenance.mdc          # Architecture maintenance rules
├── decisions/
│   ├── index.mdc                # Decision navigation
│   ├── adr-template.mdc         # ADR template
│   └── sample-decisions.mdc     # Example ADRs
├── workflows/
│   └── index.mdc                # Workflow patterns
└── domains/                     # Project-specific technology domains
    ├── frontend-react.mdc       # React-specific patterns (example)
    ├── backend-node.mdc         # Node.js-specific patterns (example)
    ├── database-postgres.mdc    # PostgreSQL-specific patterns (example)
    └── mobile-react-native.mdc  # React Native patterns (example)
```

### **Architecture Hierarchy**

#### **1. Core Patterns (Universal)**
Technology-agnostic patterns that apply to any project:

- **Consistent Data Modeling**: Universal data structure patterns
- **Access Control and Data Isolation**: Security patterns across technologies
- **Service Architecture**: Modular service design principles
- **Data Architecture**: Data flow and management patterns
- **Integration Architecture**: System integration patterns

#### **2. Technology Domains (Specific)**
Technology-specific patterns organized by domain:

- **Frontend Domains**: React, Vue.js, Angular, etc.
- **Backend Domains**: Node.js, Python, Java, etc.
- **Database Domains**: PostgreSQL, MongoDB, etc.
- **Mobile Domains**: React Native, Flutter, etc.
- **Integration Domains**: API design, message queues, etc.

#### **3. Architecture Decisions (ADRs)**
Documented architectural decisions with context:

- **Technology Selection**: Framework and library choices
- **Design Patterns**: Architectural pattern decisions
- **Integration Strategies**: System integration approaches
- **Performance Decisions**: Optimization and scaling choices

## 📋 Using the v2 Architecture Framework

### **1. Architecture Navigation**

#### **User Prompt:**
```bash
"Show me our current architecture overview"
```

#### **AI v2 Response:**
```bash
"I'll provide an overview of your current architecture using the v2 framework structure.

## Architecture Overview

### Core Patterns (Universal)
- **Data Modeling**: Consistent entity relationships and validation patterns
- **Access Control**: Role-based permission system across all domains
- **Service Design**: Modular service architecture with clear boundaries
- **Integration**: API-first design with standardized contracts

### Technology Domains
- **Frontend (React)**: Component architecture, state management, routing
- **Backend (Node.js)**: API design, middleware patterns, database integration
- **Database (PostgreSQL)**: Schema design, query patterns, migration strategies
- **Mobile (React Native)**: Cross-platform patterns, native integration

### Recent Decisions
- ADR-001: Authentication Strategy Selection (JWT-based)
- ADR-002: Database Design Patterns (Entity-based)
- ADR-003: API Design Standards (RESTful with GraphQL future)

### Current Epic Integration
- **Active Epic**: MULTI_PLATFORM_USER_SYSTEM
- **Architecture Impact**: Authentication patterns, API design evolution
- **Domain Updates**: Backend security, frontend state management
```

### **2. Creating Architecture Decision Records (ADRs)**

#### **User Prompt:**
```bash
"Create an ADR for choosing between REST and GraphQL for our API design"
```

#### **AI v2 Response:**
```markdown
# ADR-004: API Design Strategy - REST vs GraphQL

**Status**: Proposed
**Date**: 2025-01-27
**Epic Context**: MULTI_PLATFORM_USER_SYSTEM

## Context
We need to decide on the API design strategy for our multi-platform user management system. The decision affects frontend development, mobile app integration, and future scalability.

## Decision
We will use RESTful APIs as the primary API design pattern, with GraphQL as a future migration path for complex data fetching scenarios.

## Rationale
- **Current Team Expertise**: Team has strong REST API experience
- **Ecosystem Maturity**: REST tooling and documentation is mature
- **Simple Use Cases**: Current user management use cases are straightforward
- **Migration Path**: GraphQL can be added incrementally for complex queries

## Consequences
- **Positive**: Faster initial development, well-understood patterns
- **Negative**: Potential over-fetching, multiple API calls for complex data
- **Mitigation**: Design APIs with efficient data structure, plan GraphQL migration

## Implementation
- Use OpenAPI specification for documentation
- Implement standard HTTP status codes
- Design resource-based URLs
- Plan for GraphQL gateway in Phase 3

## Architecture Impact
- **Backend Domain**: API endpoint design patterns
- **Frontend Domain**: API client patterns
- **Mobile Domain**: Cross-platform API integration
```

### **3. Documenting Universal Patterns**

#### **User Prompt:**
```bash
"Document our authentication pattern as a universal pattern that works across technologies"
```

#### **AI v2 Response:**
```markdown
## Universal Pattern: Token-Based Authentication

### Pattern Overview
A technology-agnostic authentication pattern using JWT tokens that works across any frontend/backend combination.

### Core Principles
1. **Stateless Authentication**: No server-side session storage required
2. **Cross-Platform Compatibility**: Same token works for web, mobile, API clients
3. **Secure Token Handling**: Proper token storage and refresh patterns
4. **Role-Based Authorization**: Token includes user permissions

### Technology Implementation Examples

#### Backend (Universal Concepts)
- **Token Generation**: Create JWT with user claims and expiration
- **Token Validation**: Verify token signature and expiration
- **Refresh Strategy**: Implement token refresh without re-authentication

**Node.js Example**:
```javascript
// JWT generation with role-based claims
const token = jwt.sign(
  { userId, email, roles: userRoles },
  secret,
  { expiresIn: '15m' }
);
```

**Python Example**:
```python
# Same pattern in Python with PyJWT
token = jwt.encode(
    {"user_id": user_id, "email": email, "roles": user_roles},
    secret,
    algorithm="HS256"
)
```

#### Frontend (Universal Concepts)
- **Token Storage**: Secure storage (httpOnly cookies preferred, localStorage fallback)
- **Request Interceptors**: Automatic token attachment to API requests
- **Token Refresh**: Automatic refresh before expiration

**React Example**:
```javascript
// Universal token management hook
const useAuth = () => {
  const [token, setToken] = useState(getStoredToken());
  // Token refresh logic, request interceptors
};
```

**Vue.js Example**:
```javascript
// Same pattern in Vue composition API
const useAuth = () => {
  const token = ref(getStoredToken());
  // Same token management logic
};
```

### Architecture Benefits
- **Technology Migration Ready**: Pattern works when switching frameworks
- **Consistent Security**: Same security model across all platforms
- **Scalable**: No server-side session storage requirements
- **Testable**: Clear boundaries for authentication logic
```

### **4. Domain-Specific Architecture Documentation**

#### **User Prompt:**
```bash
"Document React-specific patterns for our frontend architecture"
```

#### **AI v2 Response:**
```markdown
# Frontend Architecture - React Domain

## React-Specific Patterns

### Component Architecture
- **Functional Components**: Use React hooks for all new components
- **Component Composition**: Prefer composition over inheritance
- **Props Interface**: TypeScript interfaces for all component props
- **Custom Hooks**: Extract reusable logic into custom hooks

### State Management Patterns
- **Local State**: useState for component-level state
- **Shared State**: Context API for cross-component state
- **Server State**: React Query for API data management
- **Form State**: React Hook Form for form handling

### Code Organization
```
src/
├── components/           # Reusable UI components
│   ├── common/          # Universal components
│   ├── forms/           # Form-specific components
│   └── layout/          # Layout components
├── hooks/               # Custom React hooks
├── contexts/            # React contexts
├── services/            # API service layer
└── types/               # TypeScript type definitions
```

### Integration with Universal Patterns
- **Authentication**: Implements universal token-based auth pattern
- **Error Handling**: Follows universal error handling principles
- **API Integration**: Uses universal API contract patterns

### Epic Integration
- **Current Epic**: MULTI_PLATFORM_USER_SYSTEM
- **React Components**: Authentication components, user profile components
- **Pattern Evolution**: Component patterns being documented for cross-platform reuse
```

## 🔧 v2 Architecture Workflow Integration

### **Epic-Architecture Coordination**
The v2 architecture framework automatically coordinates with the epic management system:

```markdown
## Epic Architecture Impact Tracking
- **Epic**: MULTI_PLATFORM_USER_SYSTEM
- **Architecture Domains Affected**: Backend Security, Frontend State Management, Database Schema
- **New Patterns Created**: JWT Authentication Flow, User Profile Management
- **ADRs Generated**: Authentication Strategy, API Design Standards
- **Domain Files Updated**: frontend-react.mdc, backend-node.mdc
```

### **Workflow-Architecture Integration**
Architecture updates are seamlessly integrated with the workflow system:

```markdown
## Workflow Phase Integration
- **Blueprint Phase**: Architecture impact assessment and planning
- **Construct Phase**: Architecture pattern implementation and documentation
- **Validate Phase**: Architecture consistency validation and compliance checking
```

## 🎯 v2 Architecture Best Practices

### **Universal Pattern Development**
1. **Technology Agnostic First**: Design patterns that work across technologies
2. **Specific When Needed**: Add technology-specific details only when necessary
3. **Migration Ready**: Document patterns for technology transition scenarios
4. **Epic Coordination**: Align patterns with epic architecture impact

### **Domain-Specific Documentation**
1. **Clear Boundaries**: Separate technology-specific patterns by domain
2. **Cross-Reference**: Link related patterns across different domains
3. **Implementation Examples**: Provide concrete examples for each technology
4. **Evolution Tracking**: Document how patterns evolve with technology changes

### **ADR Management**
1. **Decision Context**: Capture epic and business context in decisions
2. **Technology Impact**: Document how decisions affect different technology domains
3. **Migration Planning**: Consider technology migration implications
4. **Review Process**: Regular ADR review and updates

---

**v2 Architecture Advantage**: The modular architecture framework provides comprehensive technology-agnostic patterns with domain-specific implementations, enabling consistent architecture across complex multi-technology projects while maintaining flexibility for technology evolution. 