# 📈 Epic Planning Guide v2

This guide explains how to use the **comprehensive v2 epic management system** for managing large initiatives with AI assistance in the Cursor Rule Framework v2.

## 🆕 What's New in v2 Epic System

### **7 Specialized Components**
The v2 framework includes a complete epic lifecycle management system:

1. **`epic-lifecycle-rules.mdc`** - Epic lifecycle automation and state management
2. **`epic-active.mdc`** - Active epics workspace with current initiatives
3. **`epic-planned.mdc`** - Planned epics pipeline for future work
4. **`epic-completed.mdc`** - Completed epics archive for reference
5. **`epic-registry.mdc`** - Master epic registry with comprehensive tracking
6. **`epic-validation-automation.mdc`** - Automated validation and consistency checks
7. **`epic-architecture-integration.mdc`** - Epic-architecture coordination

### **Enhanced Features**
- **Technology-Agnostic Planning**: Works with any programming language or framework
- **Architecture Integration**: Automatic coordination with modular architecture system
- **Workflow Coordination**: Seamless integration with enhanced workflow lifecycle
- **Validation Automation**: Automated consistency checking and validation
- **Epic Lifecycle Management**: Comprehensive state tracking and automation

## 🎯 Overview

Epic planning provides a structured, technology-agnostic approach to breaking down large projects into manageable pieces that can be systematically executed using the v2 workflow system. It bridges the gap between high-level project goals and day-to-day development tasks while maintaining architectural consistency.

### **Key v2 Principles**
- **Maximum 3 Active Epics**: To maintain AI context effectiveness and prevent information overload
- **Technology Agnostic**: Epic patterns work with any programming language or framework
- **Architecture Coordination**: Automatic integration with architecture framework
- **Lifecycle Automation**: Automated state transitions and validation
- **AI Memory Focus**: Epic plans serve as long-term AI memory for project context and requirements

## 🏗️ v2 Epic Hierarchy

### **Enhanced Four-Level Structure**

```
EPIC GROUP (Optional)
├── EPIC (Large Initiative)
    ├── PHASE (Milestone)
        ├── STEP (Feature)
            └── TASK (Implementation)
                └── ARCHITECTURE_IMPACT (Auto-tracked)
```

#### **Epic Group** (Optional)
- **Purpose**: Groups related epics for very large projects
- **Scope**: Multiple months to years
- **Technology**: Framework-agnostic
- **Example**: "Platform Modernization", "User Experience Overhaul", "API Integration Platform"

#### **Epic** (Required)
- **Purpose**: Large collection of work with clear business value
- **Scope**: 1-3 months of development
- **Architecture Integration**: Automatic architecture domain coordination
- **Example**: "User Authentication System", "Payment Processing", "Multi-Platform Mobile App"

#### **Phase** (Required)
- **Purpose**: Milestone that groups related features
- **Scope**: 1-4 weeks of development
- **Workflow Integration**: Aligned with Blueprint → Construct → Validate phases
- **Example**: "Core Authentication Logic", "Frontend Integration", "Testing & Validation"

#### **Step** (Required)
- **Purpose**: Single feature or component
- **Scope**: 1-5 days of development
- **Architecture Impact**: Automatically tracked and validated
- **Example**: "Login Component", "Password Reset Flow", "API Gateway Integration"

## 📋 v2 Epic Planning Process

### **1. Epic Creation with Architecture Integration**

#### **User Prompt:**
```bash
"Plan an epic for implementing user management that works with React frontend and Node.js backend"
```

#### **AI v2 Response:**
```bash
"I'll help you create a comprehensive epic plan for user management. Let me break this down systematically into phases and steps that align with your multi-technology architecture, coordinating with our architecture framework and ensuring technology-agnostic patterns where possible."
```

#### **AI Creates Epic Structure with Architecture Coordination:**
```markdown
### EPIC: User Management System (MULTI_PLATFORM_USER_SYSTEM)
**Status**: PLANNED
**Priority**: High
**Technology Stack**: React, Node.js, PostgreSQL
**Architecture Domains**: Frontend, Backend, Database
**Started**: [Not started]
**Target Completion**: [To be determined]

#### Goal
Create comprehensive user management system with authentication, profiles, and admin capabilities that demonstrates technology-agnostic patterns while leveraging specific technology strengths

#### Success Criteria
- [ ] Users can register and authenticate securely across platforms
- [ ] User profile management with real-time updates
- [ ] Admin dashboard for user administration
- [ ] Role-based access control system
- [ ] Architecture patterns documented for reuse across technologies

#### Architecture Impact Assessment
- **Frontend Domain**: New authentication components, state management patterns
- **Backend Domain**: Authentication middleware, user API endpoints
- **Database Domain**: User schema design, security constraints
- **Integration**: Authentication token flow, API contract definitions

#### Dependencies & Blockers
- Database schema design coordination
- Authentication service technology selection
- UI component library compatibility
- Backend framework integration patterns
```

### **2. Epic Structure Definition with Architecture Coordination**

#### **User Prompt:**
```bash
"Break down the user management epic into detailed phases with architecture consideration"
```

#### **AI v2 Response:**
```markdown
## EPIC: User Management System (MULTI_PLATFORM_USER_SYSTEM)

### Epic Goals
- Implement comprehensive user authentication (technology-agnostic patterns)
- Enable user profile management (frontend-backend coordination)
- Add role-based access control (security architecture integration)
- Provide admin user management tools (full-stack coordination)

### Success Criteria
- Users can register, login, and manage profiles across platforms
- Admins can manage user accounts and permissions
- Security standards are met (authentication, authorization)
- System scales to 10,000+ users
- Architecture patterns documented for future technology migrations

### Technology Stack Coordination
- **Frontend**: React components with reusable patterns
- **Backend**: Node.js with technology-agnostic API design
- **Database**: PostgreSQL with portable schema patterns
- **Integration**: RESTful APIs with potential GraphQL upgrade path

### Architecture Dependencies
- Core authentication patterns (documented in architecture/core/patterns.mdc)
- API design decisions (tracked in architecture/decisions/)
- Security architecture integration
- Database design coordination
```

### **3. Enhanced Phase Breakdown with Architecture Integration**

#### **User Prompt:**
```bash
"Detail the phases for the user management epic with architecture impact analysis"
```

#### **AI Creates Phases with Architecture Coordination:**
```markdown
### PHASE 1: Core Authentication Foundation (Week 1-2)
**Goal**: Technology-agnostic authentication patterns with React/Node.js implementation
**Architecture Domains**: Backend (Primary), Frontend (Secondary), Security (Cross-cutting)

#### STEPS:
1. **Authentication Architecture Design**
   - Technology-agnostic authentication patterns
   - JWT token strategy documentation
   - Security architecture integration
   - API contract specification (compatible with multiple frontend frameworks)
   - **Architecture Impact**: New security patterns, API design decisions

2. **Backend Authentication Service**
   - Node.js authentication middleware (with portable patterns)
   - User registration and login endpoints
   - Password hashing and validation
   - JWT token generation and validation
   - **Architecture Impact**: Backend security patterns, database integration

3. **Frontend Authentication Components**
   - React authentication components (with reusable patterns)
   - Authentication state management
   - Token storage and refresh logic
   - Route protection implementation
   - **Architecture Impact**: Frontend security patterns, state management

### PHASE 2: User Profile System (Week 3-4)
**Goal**: Profile management with frontend-backend coordination
**Architecture Domains**: Frontend (Primary), Backend (Secondary), Database (Supporting)

#### STEPS:
1. **Profile Data Architecture**
   - User profile schema design (database-agnostic patterns)
   - API endpoints for profile operations
   - Data validation rules (technology-portable)
   - **Architecture Impact**: Database schema patterns, API design evolution

2. **Profile Management Interface**
   - React profile components (with design system integration)
   - Form validation and error handling
   - Real-time profile updates
   - File upload for avatars
   - **Architecture Impact**: Frontend data patterns, UI component evolution

### PHASE 3: Role-Based Access Control (Week 5-6)
**Goal**: Enterprise-grade permissions system with architecture documentation
**Architecture Domains**: Backend (Primary), Database (Primary), Frontend (Secondary)

#### STEPS:
1. **RBAC Architecture Design**
   - Technology-agnostic permission patterns
   - Role hierarchy design
   - Permission checking middleware
   - **Architecture Impact**: New authorization patterns, security architecture evolution

2. **Permission System Implementation**
   - Database tables for roles and permissions
   - Backend permission checking logic
   - Frontend permission-aware components
   - **Architecture Impact**: Database security patterns, backend authorization patterns
```

### **4. Step Detailing with Architecture Integration**

#### **User Prompt:**
```bash
"Give me detailed requirements for the authentication architecture design step with v2 framework integration"
```

#### **AI v2 Response:**
```markdown
#### STEP: Authentication Architecture Design (MULTI_PLATFORM_USER_SYSTEM.Phase1.Step1)

**Acceptance Criteria:**
- Technology-agnostic authentication patterns documented
- JWT token strategy defined with security considerations
- API contract specification (compatible with multiple frontend frameworks)
- Integration with v2 architecture framework completed
- Architecture Decision Records (ADRs) created

**Technical Requirements:**
- Document patterns in architecture/core/patterns.mdc
- Create ADRs in architecture/decisions/
- Define API contracts using OpenAPI specification
- Security architecture integration documentation
- Technology migration strategy documented

**Architecture Integration:**
- **Domain**: Backend Security, API Design
- **ADRs to Create**: 
  - Authentication Strategy Selection
  - JWT vs Session-Based Authentication
  - API Authentication Design Patterns
- **Pattern Documentation**: 
  - Token-based authentication flow
  - Password security requirements
  - API error handling patterns

**v2 Framework Integration:**
- Links to epic-architecture-integration.mdc
- Updates architecture/index.mdc navigation
- Coordinates with workflow-lifecycle-rules.mdc
- Validates against architecture/core/maintenance.mdc rules

**Estimated Effort:** 2 days
**Dependencies:** Security requirements, technology stack finalization
**Epic Context**: MULTI_PLATFORM_USER_SYSTEM
**Architecture Impact**: Medium (new security patterns, API evolution)
```

## 🔄 v2 Epic Execution with Enhanced Workflow Integration

### **Starting Epic Work with Architecture Coordination**

#### **User Prompt:**
```bash
"Start working on the authentication architecture design from the user management epic using v2 workflow"
```

#### **AI v2 Response:**
```bash
# Workflow Integration
Setting workflow context for MULTI_PLATFORM_USER_SYSTEM epic, Phase 1, Step 1.
Coordinating with architecture framework for authentication patterns.
Updating epic-active.mdc with current progress.

# Architecture Integration
Reviewing architecture/core/patterns.mdc for existing authentication patterns.
Preparing to create new ADRs in architecture/decisions/.
Validating against architecture maintenance rules.

# Epic Progress Tracking
Updating epic registry with step initiation.
Linking to architecture domains: Backend Security, API Design.
Preparing architecture impact assessment.

## BLUEPRINT Phase Initiated
Current Epic: MULTI_PLATFORM_USER_SYSTEM
Current Phase: Phase 1 - Core Authentication Foundation
Current Step: Authentication Architecture Design
Architecture Domains: Backend Security, API Design, Cross-cutting Security

I'll now plan the authentication architecture design following our v2 framework patterns:

### 1. Architecture Pattern Analysis
- Review existing authentication patterns in architecture/core/patterns.mdc
- Identify technology-agnostic authentication principles
- Plan JWT token strategy with security considerations

### 2. ADR Creation Planning
- Authentication Strategy Selection (JWT vs alternatives)
- Token Storage and Security Patterns
- API Authentication Design Patterns

### 3. Integration Coordination
- Backend authentication middleware patterns
- Frontend authentication state management
- Cross-platform authentication flow design

Ready to proceed with Blueprint planning. Should I continue with detailed architecture design?
```

## 📊 v2 Epic Management System Components

### **1. Epic Lifecycle Rules (`epic-lifecycle-rules.mdc`)**
Manages epic state transitions and automation:

```markdown
## Epic States
- PLANNED → ACTIVE → COMPLETED → ARCHIVED
- BLOCKED → ACTIVE (when unblocked)
- ACTIVE → PAUSED → ACTIVE (temporary suspension)

## Automation Rules
- Auto-archive epics after 6 months completion
- Auto-validate epic structure and dependencies
- Auto-update architecture integration
- Auto-coordinate with workflow phases
```

### **2. Active Epics Workspace (`epic-active.mdc`)**
Current epic workspace with real-time tracking:

```markdown
## Current Active Epics

### EPIC: User Management System (MULTI_PLATFORM_USER_SYSTEM)
**Status**: ACTIVE - Phase 1, Step 2
**Progress**: 35% (2 of 6 steps completed)
**Architecture Domains**: Backend, Frontend, Security
**Technology Stack**: React, Node.js, PostgreSQL
**Current Focus**: Backend Authentication Service Implementation
**Blockers**: None
**Next Milestone**: Phase 1 Completion (Authentication Foundation)
```

### **3. Planned Epics Pipeline (`epic-planned.mdc`)**
Future epic queue with priority and dependency tracking:

```markdown
## Planned Epic Pipeline

### EPIC: API Integration Platform
**Priority**: High
**Dependencies**: User Management System (authentication patterns)
**Technology**: Framework-agnostic API design
**Estimated Start**: After User Management Phase 2
**Architecture Impact**: New integration patterns, API design evolution

### EPIC: Mobile Application
**Priority**: Medium  
**Dependencies**: User Management System, API Integration Platform
**Technology**: React Native with shared authentication
**Estimated Start**: Q2 2025
**Architecture Impact**: Mobile-specific patterns, cross-platform coordination
```

### **4. Epic Registry (`epic-registry.mdc`)**
Master epic tracking with comprehensive metadata:

```markdown
## Epic Registry

| Epic ID | Name | Status | Priority | Progress | Architecture Domains | Technology Stack |
|---------|------|--------|----------|----------|---------------------|------------------|
| MULTI_PLATFORM_USER_SYSTEM | User Management System | ACTIVE | High | 35% | Backend, Frontend, Security | React, Node.js, PostgreSQL |
| API_INTEGRATION_PLATFORM | API Integration Platform | PLANNED | High | 0% | Backend, Integration | Framework-agnostic |
| MOBILE_APPLICATION | Mobile Application | PLANNED | Medium | 0% | Mobile, Backend | React Native, GraphQL |
```

### **5. Epic Validation Automation (`epic-validation-automation.mdc`)**
Automated consistency checking and validation:

```markdown
## Validation Rules
- Epic structure completeness validation
- Architecture domain consistency checking
- Technology stack compatibility validation
- Dependency resolution verification
- Progress tracking accuracy validation

## Automated Checks
- Daily epic structure validation
- Architecture integration consistency
- Cross-epic dependency validation
- Technology stack evolution tracking
```

### **6. Epic-Architecture Integration (`epic-architecture-integration.mdc`)**
Coordination between epics and architecture framework:

```markdown
## Epic-Architecture Coordination

### Architecture Impact Tracking
Each epic tracks its impact on architecture domains:
- **Core Patterns**: New universal patterns created
- **Technology Domains**: Domain-specific pattern evolution
- **Decisions**: ADRs created or updated
- **Workflow Integration**: Process pattern changes

### Automatic Updates
- Epic progress updates architecture documentation
- New patterns from epics update architecture/core/patterns.mdc
- Epic-driven ADRs update architecture/decisions/
- Technology-specific patterns → custom files in root directory
```

### **7. Completed Epics Archive (`epic-completed.mdc`)**
Historical epic tracking with lessons learned:

```markdown
## Completed Epics Archive

### EPIC: Foundation Setup (FOUNDATION_SETUP_EPIC)
**Completed**: 2025-01-15
**Duration**: 6 weeks
**Architecture Contributions**: 
- Core project patterns established
- Initial technology stack decisions
- Foundation architecture patterns documented
**Lessons Learned**: Early architecture planning crucial for multi-technology projects
**Technology Stack**: React, Node.js, PostgreSQL, Docker
```

## 🎯 v2 Epic Planning Best Practices

### **Technology-Agnostic Planning**
1. **Universal Patterns First**: Identify patterns that work across technologies
2. **Technology Specificity When Needed**: Use technology-specific patterns only when necessary
3. **Migration Readiness**: Plan epics to survive technology changes
4. **Cross-Platform Coordination**: Consider multiple platforms in epic design

### **Architecture Integration**
1. **Domain Awareness**: Consider architecture domain impact in all epic steps
2. **ADR Planning**: Plan Architecture Decision Records as part of epic execution
3. **Pattern Documentation**: Document reusable patterns during epic execution
4. **Cross-Epic Learning**: Share patterns across different epic contexts

### **Workflow Coordination**
1. **Phase Alignment**: Align epic phases with workflow phases
2. **Quality Gates**: Include architecture validation in epic steps
3. **Automation Integration**: Leverage validation automation for consistency
4. **Progress Tracking**: Use epic system for workflow context

### **Team Collaboration**
1. **Epic Ownership**: Clear epic ownership with architecture responsibility
2. **Cross-Team Coordination**: Epic-driven architecture coordination across teams
3. **Knowledge Sharing**: Epic-driven pattern sharing and documentation
4. **Review Processes**: Regular epic-architecture alignment reviews

## 📈 Advanced v2 Epic Patterns

### **Multi-Technology Epic Coordination**
```markdown
### EPIC: Cross-Platform Authentication
**Technology Matrix**:
- Web Frontend: React
- Mobile App: React Native  
- Backend API: Node.js
- Admin Panel: Vue.js
- Desktop App: Electron

**Architecture Coordination**:
- Shared authentication patterns across platforms
- Technology-specific implementation details
- Cross-platform state management coordination
- Universal API contract design
```

### **Epic-Driven Architecture Evolution**
```markdown
### Architecture Evolution Tracking
Epic execution drives architecture documentation:
- New patterns discovered → architecture/core/patterns.mdc
- Technology decisions → architecture/decisions/
- Technology-specific patterns → custom files in root directory
- Integration patterns → architecture/workflows/
```

### **Epic Dependency Management**
```markdown
### Dependency Coordination
- **Technology Dependencies**: Framework version compatibility
- **Architecture Dependencies**: Pattern evolution coordination
- **Epic Dependencies**: Cross-epic pattern sharing
- **Team Dependencies**: Cross-team architecture coordination
```

---

**v2 Epic System Advantage**: The comprehensive 7-component epic management system provides robust project coordination with automatic architecture integration, supporting complex multi-technology projects while maintaining consistency and enabling efficient AI-assisted development.