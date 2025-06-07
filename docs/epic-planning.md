# 📈 Epic Planning Guide

This guide explains how to use the epic planning system for managing large initiatives with AI assistance in the Cursor Rule Framework.

## 🎯 Overview

Epic planning provides a structured approach to breaking down large projects into manageable pieces that can be systematically executed using the workflow system. It bridges the gap between high-level project goals and day-to-day development tasks.

### **Key Constraints**
- **Maximum 3 Active Epics**: To maintain AI context effectiveness and prevent information overload
- **6-Month Auto-Archive**: Completed epics older than 6 months are removed to keep files manageable  
- **AI Memory Focus**: Epic plans serve as long-term AI memory for project context and requirements
- **Simplified Tracking**: Focus on epic/phase progress rather than granular project management

## 🏗️ Epic Hierarchy

### **Four-Level Structure**

```
EPIC GROUP (Optional)
├── EPIC (Large Initiative)
    ├── PHASE (Milestone)
        ├── STEP (Feature)
            └── TASK (Implementation)
```

#### **Epic Group** (Optional)
- **Purpose**: Groups related epics for very large projects
- **Scope**: Multiple months to years
- **Example**: "Platform Modernization", "User Experience Overhaul"

#### **Epic** (Required)
- **Purpose**: Large collection of work with clear business value
- **Scope**: 1-3 months of development
- **Example**: "User Authentication System", "Payment Processing"

#### **Phase** (Required)
- **Purpose**: Milestone that groups related features
- **Scope**: 1-4 weeks of development
- **Example**: "Basic Authentication", "Advanced Security Features"

#### **Step** (Required)
- **Purpose**: Single feature or component
- **Scope**: 1-5 days of development
- **Example**: "Login Component", "Password Reset Flow"

## 📋 Epic Planning Process

### **1. Epic Creation**
```bash
# User initiates epic planning
"I need to plan a user management system for our application"

# AI responds with epic planning
"I'll help you create a comprehensive epic plan for user management. Let me break this down systematically."
```

### **2. Epic Structure Definition**
```markdown
## EPIC: User Management System

### Epic Goals
- Implement comprehensive user authentication
- Enable user profile management
- Add role-based access control
- Provide admin user management tools

### Success Criteria
- Users can register, login, and manage profiles
- Admins can manage user accounts and permissions
- Security standards are met (authentication, authorization)
- System scales to 10,000+ users

### Dependencies
- Database design completed
- UI component library available
- Authentication service selected
```

### **3. Phase Breakdown**
```markdown
### PHASE 1: Core Authentication (Week 1-2)
**Goal**: Basic user registration and login functionality

#### STEPS:
1. **User Registration**
   - Registration form component
   - Email validation
   - Password requirements
   - Database user creation

2. **User Login**
   - Login form component
   - Authentication logic
   - Session management
   - Error handling

3. **Password Management**
   - Password reset flow
   - Email notifications
   - Security validations

### PHASE 2: User Profiles (Week 3-4)
**Goal**: User profile management and personalization

#### STEPS:
1. **Profile Display**
   - User profile component
   - Avatar upload functionality
   - Profile information display

2. **Profile Editing**
   - Edit profile form
   - Data validation
   - Update persistence
   - Change notifications
```

### **4. Step Detailing**
```markdown
#### STEP: User Registration Component

**Acceptance Criteria:**
- Form includes email, password, confirm password fields
- Validates email format and uniqueness
- Enforces password complexity requirements
- Shows appropriate error messages
- Redirects to dashboard on successful registration

**Technical Requirements:**
- React functional component with TypeScript
- Form validation using react-hook-form
- Integration with authentication API
- Error handling and loading states
- Unit and integration tests

**Estimated Effort:** 2 days
**Dependencies:** API endpoints, validation rules
**Assigned To:** Frontend Team
```

## 🔄 Epic Execution

### **Integration with Workflow System**
Each step follows the AI-driven workflow system:

```bash
# Step execution follows workflow
STEP: User Registration Component
├── BLUEPRINT: Plan component architecture
├── CONSTRUCT: Implement component
└── VALIDATE: Test and verify functionality

# Multiple steps per phase
PHASE: Core Authentication
├── STEP 1: Registration (Blueprint → Construct → Validate)
├── STEP 2: Login (Blueprint → Construct → Validate)
└── STEP 3: Password Reset (Blueprint → Construct → Validate)
```

### **Progress Tracking**
```markdown
## Epic Progress Tracking

### EPIC: User Management System
**Status**: IN_PROGRESS
**Priority**: High
**Started**: 2025-01-10
**Target Completion**: 2025-02-15

#### Goal
Create secure user authentication and management system

#### Success Criteria
- [ ] Users can register, login, and manage profiles
- [ ] Admin dashboard for user management
- [ ] Security compliance and data protection

#### PHASE 1: Core Authentication - ✅ COMPLETED
**Goal**: Implement secure user registration and login system
**Steps**: Registration component, login system, password reset flow

#### PHASE 2: User Profiles - 🔄 IN_PROGRESS  
**Goal**: Build user profile management capabilities
**Steps**: Profile display, profile editing, avatar upload

#### PHASE 3: Admin Management - ⏳ PLANNED
**Goal**: Provide admin tools for user management
**Steps**: User list component, user actions, role management
```

## 🛠️ Epic Planning Tools

### **Epic Template**
*This matches the simplified template in `epics.mdc`*

```markdown
### EPIC: [Epic Name]
**Status**: [PLANNED/IN_PROGRESS/BLOCKED/COMPLETED]
**Priority**: [High/Medium/Low]
**Started**: [Start date]
**Target Completion**: [Target date]

#### Goal
[Clear business objective and user value]

#### Success Criteria
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
- [ ] [Measurable outcome 3]

#### Dependencies & Blockers
- [Current dependencies or blocking issues]

#### PHASE 1: [Phase Name] - [STATUS_ICON] [STATUS]
**Goal**: [Phase objective and deliverables]

**Steps:**
1. **[Step Name]**: [What needs to be built/implemented]
   - Key requirements: [2-3 critical requirements]
   - Acceptance criteria: [What defines "done"]
   - AI considerations: [Important context for AI execution]

2. **[Step Name]**: [What needs to be built/implemented]
   - Key requirements: [2-3 critical requirements]
   - Acceptance criteria: [What defines "done"]  
   - AI considerations: [Important context for AI execution]

#### PHASE 2: [Phase Name] - [STATUS_ICON] [STATUS]
[Continue pattern...]

#### Notes
- [Key decisions, scope changes, or important context]
```

### **AI Epic Planning Commands**
```bash
# Create new epic
"Plan an epic for implementing a notification system"

# Break down existing epic
"Break down the user management epic into more detailed steps"

# Update epic progress
"Mark the user registration step as completed and move to next step"

# Review epic status
"Show me the current status of all active epics"

# Estimate effort
"Estimate the development effort for the remaining epic phases"
```

## 📈 Advanced Epic Patterns

### **Cross-Team Epics**
```markdown
## EPIC: Mobile App Launch
**Teams**: Frontend, Backend, Mobile, QA, DevOps

### PHASE 1: Foundation (All Teams)
- Backend: API development
- Frontend: Admin dashboard
- Mobile: Core app structure
- DevOps: Infrastructure setup

### PHASE 2: Integration (Cross-Team)
- API integration testing
- End-to-end workflow validation
- Performance optimization
```

### **Dependent Epics**
```markdown
## Epic Dependencies
EPIC A: User Authentication
├── Blocks: EPIC B (User Profiles)
├── Blocks: EPIC C (Admin Dashboard)
└── Enables: EPIC D (Social Features)

## Dependency Management
- Track blocking relationships
- Plan epic sequencing
- Identify parallel work opportunities
```

### **Epic Refinement**
```bash
# Realistic epic review process
1. Update epic status during AI interactions
2. Review progress when working on epic tasks
3. Adjust scope based on learnings
4. Archive completed epics older than 6 months
5. Maintain 2-3 active epics maximum
```

## 🎯 Epic Planning Best Practices

### **Effective Epic Definition**
- **Clear Business Value**: Every epic should deliver measurable business value
- **User-Centric**: Frame epics in terms of user benefits
- **Time-Boxed**: Set realistic timelines with buffer
- **Testable**: Define clear acceptance criteria

### **Appropriate Scope**
```bash
# ✅ Good Epic Scope
EPIC: User Authentication System
- Clear boundaries and deliverables
- 1-3 months of work
- Single team ownership
- Measurable outcomes

# ❌ Poor Epic Scope  
EPIC: Improve the Application
- Vague and unbounded
- No clear deliverables
- Multiple teams affected
- Unmeasurable success
```

### **Step Sizing**
```bash
# ✅ Good Step Size
STEP: Login Component
- 1-3 days of work
- Single developer ownership
- Clear deliverable
- Testable outcome

# ❌ Poor Step Size
STEP: Implement Authentication
- Weeks of work
- Multiple developers needed
- Vague deliverable
- Hard to test completion
```

## 🔄 Epic Lifecycle Management

### **Epic States**
```bash
PLANNED     → ACTIVE → BLOCKED → ACTIVE → COMPLETED
               ↓         ↑         ↓
            PAUSED ←→ CANCELLED ←→ ARCHIVED
```

### **State Transitions**
- **PLANNED → ACTIVE**: Epic work begins
- **ACTIVE → BLOCKED**: Dependencies or issues prevent progress
- **BLOCKED → ACTIVE**: Blockers resolved, work resumes
- **ACTIVE → PAUSED**: Temporary suspension (resource reallocation)
- **ACTIVE → COMPLETED**: All phases and steps finished
- **ANY → CANCELLED**: Epic no longer needed
- **COMPLETED → ARCHIVED**: Epic archived for reference

### **Epic Review Guidelines**
```bash
# During Active Work: Update epic status when AI works on tasks
# Phase Completion: Mark phases as completed when major work is done
# Epic Completion: Move completed epics to history section
# Context Management: Archive epics older than 6 months to maintain AI context
```

## 🚨 Common Epic Challenges

### **Scope Creep**
```bash
# Problem: Epic grows beyond original scope
# Solution: Strict change management

"New requirements for the user management epic. 
Should we:
1. Add to current epic (extends timeline)
2. Create new epic for additional features
3. Move to backlog for future consideration"
```

### **Epic Stalling**
```bash
# Problem: Epic progress stops
# Root causes and solutions:

1. **Dependencies**: Resolve blocking issues
2. **Resources**: Reallocate team members
3. **Complexity**: Break down further
4. **Priorities**: Re-evaluate epic importance
```

### **Epic Coordination**
```bash
# Problem: Multiple teams working on related epics
# Solution: Cross-epic coordination

"Detected overlap between User Management and Admin Dashboard epics.
Recommend:
1. Shared component library
2. Coordinated API design
3. Joint testing strategy"
```

## 📊 Epic Tracking and Context Management

### **Portfolio Limits**
- **Maximum Active Epics**: 3 (to maintain AI context effectiveness)
- **Epic Archiving**: Remove completed epics older than 6 months
- **Context Focus**: Use workflow-state.mdc for detailed execution

### **Epic Status Summary**
*AI-driven tracking based on epic interactions and progress updates*

```markdown
## Epic Portfolio Status

### Current Active Epics (2/3)
1. **User Management** - IN_PROGRESS, Phase 2 active
2. **Payment Integration** - BLOCKED, waiting on API access

### Recently Completed Epics
- **Authentication System** - Completed 2024-12-15

### Epic Maintenance Checklist
- [ ] Review active epic statuses and update if needed
- [ ] Check for epics that should be completed or cancelled  
- [ ] Archive completed epics older than 6 months
- [ ] Ensure no more than 3 active epics
- [ ] Update portfolio summary counts
```

### **Realistic Expectations**
- Epic updates happen during AI interactions, not on schedule
- Focus on epic and phase progress, not granular step tracking
- Use external tools (Jira, GitHub Projects) for detailed project management
- Epic planning serves as AI memory and high-level guidance

## 📞 Need Help?

- **Epic Issues**: See [Troubleshooting Guide](troubleshooting.md)
- **Workflow Integration**: Check [Workflow System](workflow-system.md)
- **Team Coordination**: Read [Team Integration](team-integration.md)

---

*Epic planning transforms large projects into manageable, trackable initiatives that deliver consistent value through structured AI-assisted development.* 