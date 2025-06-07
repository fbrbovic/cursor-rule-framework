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

#### **User Prompt:**
```bash
"Plan an epic for implementing user management in our React application"
```

#### **AI Response:**
```bash
"I'll help you create a comprehensive epic plan for user management. Let me break this down systematically into phases and steps that align with your React application architecture."
```

#### **AI Creates Epic Structure:**
```markdown
### EPIC: User Management System
**Status**: PLANNED
**Priority**: High
**Started**: [Not started]
**Target Completion**: [To be determined]

#### Goal
Create comprehensive user management system with authentication, profiles, and admin capabilities

#### Success Criteria
- [ ] Users can register and authenticate securely
- [ ] User profile management with real-time updates  
- [ ] Admin dashboard for user administration
- [ ] Role-based access control system

#### Dependencies & Blockers
- Database schema needs to be designed
- Authentication service selection required
- UI component library should be available
```

### **2. Epic Structure Definition**

#### **User Prompt:**
```bash
"Break down the user management epic into detailed phases and steps"
```

#### **AI Response:**
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

#### **User Prompt:**
```bash
"Detail the phases for the user management epic with specific steps"
```

#### **AI Creates Phases:**
```markdown
### PHASE 1: Core Authentication (Week 1-2)
**Goal**: Basic user registration and login functionality

#### STEPS:
1. **User Registration Component**
   - Registration form with validation
   - Email verification workflow
   - Password requirements enforcement
   - Integration with backend API

2. **User Login System**
   - Login form component
   - Authentication token handling
   - Session management
   - Error handling and feedback

3. **Password Management**
   - Password reset request flow
   - Email-based reset tokens
   - New password validation
   - Security audit logging

### PHASE 2: User Profiles (Week 3-4)
**Goal**: User profile management and personalization

#### STEPS:
1. **Profile Display Component**
   - User profile information display
   - Avatar upload and management
   - Profile data fetching
   - Loading and error states

2. **Profile Editing Interface**
   - Editable profile form
   - Real-time validation
   - Update persistence
   - Change confirmation notifications
```

### **4. Step Detailing**

#### **User Prompt:**
```bash
"Give me detailed requirements for the user registration component step"
```

#### **AI Response:**
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

### **Starting Epic Work**

#### **User Prompt:**
```bash
"Start working on the user registration component from the user management epic"
```

#### **AI Response:**
```bash
"I'll begin work on the user registration component. I found this step in the User Management Epic, Phase 1: Core Authentication. Let me start with the Blueprint phase to plan the implementation."

# AI automatically:
1. Sets workflow context with epic reference
2. Includes step requirements from epic
3. Begins Blueprint phase with epic constraints
```

### **Architecture Integration**

#### **User Prompt:**
```bash
"How will this epic impact our current architecture?"
```

#### **AI Response:**
```bash
# During epic creation, AI considers:
1. Existing architectural patterns from architecture.mdc
2. Alignment with current technology stack
3. Impact on system design and boundaries
4. New architectural decisions needed

# Each epic step includes:
- Architecture impact assessment
- New patterns being introduced
- Consistency with existing decisions
- Updates needed to architecture.mdc
```

### **Integration with Workflow System**

#### **User Prompt:**
```bash
"Continue working on the login component from phase 1"
```

#### **AI Workflow Integration:**
```bash
# Step execution follows workflow
STEP: User Login System
├── BLUEPRINT: Plan component architecture and integration
├── CONSTRUCT: Implement login functionality
└── VALIDATE: Test authentication flow and security

# Multiple steps per phase
PHASE: Core Authentication
├── STEP 1: Registration (Blueprint → Construct → Validate)
├── STEP 2: Login (Blueprint → Construct → Validate)  
└── STEP 3: Password Reset (Blueprint → Construct → Validate)
```

### **Progress Tracking**

#### **User Prompt:**
```bash
"Update the login component progress to 75%, core functionality is working but need to add error handling"
```

#### **AI Updates Epic:**
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

#### PHASE 1: Core Authentication - 🔄 IN_PROGRESS
**Goal**: Implement secure user registration and login system

**Steps:**
1. **User Registration Component**: Complete user signup flow - ✅ 100%
   - Status: COMPLETED (100%)
   - Completed: 2025-01-12
   - Notes: Successfully implemented with validation and API integration

2. **User Login System**: Secure authentication with session management - 🔄 75%
   - Status: IN_PROGRESS (75%)
   - Started: 2025-01-13
   - Last Updated: 2025-01-15
   - Notes: Core functionality working, adding error handling

3. **Password Management**: Password reset and security features - ⏳ 0%
   - Status: PLANNED (0%)
   - Notes: Waiting for login completion

#### PHASE 2: User Profiles - ⏳ PLANNED
**Goal**: User profile management and personalization
```

## 🎛️ Epic Management Commands

### **Creating New Epics**

#### **User Prompt:**
```bash
"Plan an epic for implementing a notification system"
```

#### **AI Response:**
```bash
"I'll create a comprehensive notification system epic. This will include real-time notifications, email alerts, and user preferences management."

# AI automatically creates structured epic in epics.mdc
```

### **Epic Status Updates**

#### **User Prompt:**
```bash
"Mark the user registration step as complete and move to the next phase"
```

#### **AI Response:**
```bash
"I've marked the user registration component as completed (100%) and updated the epic progress. The next step in Phase 1 is the User Login System. Would you like to start working on that?"
```

### **Epic Progress Review**

#### **User Prompt:**
```bash
"Show me the current status of all active epics"
```

#### **AI Response:**
```bash
"Here's your current epic portfolio:

## Active Epics (2/3)

1. **User Management System** - 45% complete
   - Phase 1 (Authentication): 75% complete
   - Phase 2 (Profiles): Not started

2. **Payment Integration** - 20% complete  
   - Phase 1 (Setup): 60% complete
   - Phase 2 (Processing): Not started

You have capacity for 1 more active epic."
```

### **Epic Scope Changes**

#### **User Prompt:**
```bash
"Add social media login to the user management epic"
```

#### **AI Response:**
```bash
"I'll add social media authentication to Phase 1 of the User Management Epic as a new step. This aligns well with the existing authentication work."

# AI adds new step to existing phase
```

## 📊 Epic Portfolio Management

### **Portfolio Overview**

#### **User Prompt:**
```bash
"What's my current epic portfolio status?"
```

#### **AI Response:**
```markdown
### Current Portfolio Summary
- **Total Active Epics**: 2 (Max: 3)
- **Completed Epics**: 1 
- **Blocked Epics**: 0
- **Last Updated**: 2025-01-15

### Active Epics Performance
1. **User Management System**: On track, 45% complete
2. **Payment Integration**: Slightly behind, 20% complete

### Recommendations
- Focus on completing User Management Phase 1 before starting new epic
- Consider breaking Payment Integration into smaller phases
```

### **Epic Sequencing**

#### **User Prompt:**
```bash
"Plan the sequence for completing my epics"
```

#### **AI Response:**
```bash
"Based on your active epics and dependencies, I recommend:

1. **Complete User Management Phase 1** (1 week)
   - Finish authentication components
   - Provides foundation for other features

2. **Start Payment Integration Phase 2** (2 weeks)
   - User authentication is now available
   - Can focus on payment flow

3. **Complete User Management Phase 2** (1 week)  
   - User profiles complement payment system
   - Full user experience available"
```

## 🎯 Epic Planning Best Practices

### **Epic Scoping**

#### **User Prompt:**
```bash
"Is my e-commerce platform epic too large? It includes user management, product catalog, shopping cart, payment processing, and admin dashboard"
```

#### **AI Response:**
```bash
"This epic is too large for effective management. I recommend breaking it into focused epics:

## Recommended Epic Structure:

1. **User Management Epic** (3-4 weeks)
   - Authentication, profiles, account management

2. **Product Catalog Epic** (2-3 weeks)  
   - Product display, search, categories

3. **Shopping Experience Epic** (3-4 weeks)
   - Cart, checkout, order management

4. **Payment Processing Epic** (2-3 weeks)
   - Payment integration, processing, receipts

5. **Admin Dashboard Epic** (4-5 weeks)
   - Admin tools, analytics, management

This gives you 5 focused epics instead of 1 overwhelming epic."
```

### **Epic Success Criteria**

#### **User Prompt:**
```bash
"Help me define clear success criteria for my user management epic"
```

#### **AI Response:**
```markdown
## Success Criteria for User Management Epic

### Functional Criteria
- [ ] New users can register with email verification
- [ ] Users can login/logout with session persistence  
- [ ] Password reset works via email workflow
- [ ] User profiles can be viewed and edited
- [ ] Basic role-based access control functions

### Technical Criteria  
- [ ] Authentication API handles 1000+ concurrent users
- [ ] All components have 90%+ test coverage
- [ ] Security audit passes with no critical issues
- [ ] API response times under 200ms

### User Experience Criteria
- [ ] Registration completes in under 2 minutes
- [ ] Login process has clear error messaging
- [ ] Profile editing saves changes immediately
- [ ] Mobile responsive across all components
```

### **Epic Dependencies**

#### **User Prompt:**
```bash
"What are the dependencies for starting the payment processing epic?"
```

#### **AI Response:**
```bash
"Here are the dependencies for the Payment Processing Epic:

## Hard Dependencies (Must be complete)
- ✅ User Management Epic: Authentication system required
- ❌ Product Catalog Epic: Need products to purchase
- ❌ Shopping Cart Epic: Need cart functionality

## Soft Dependencies (Helpful but not required)
- Admin Dashboard: For payment management
- Email System: For payment confirmations

## External Dependencies
- Payment provider selection (Stripe, PayPal, etc.)
- SSL certificate for secure transactions
- Legal compliance review for payment handling

**Recommendation**: Complete User Management and Product Catalog epics before starting Payment Processing."
```

## 🔄 Epic State Management

### **Epic Status Transitions**

#### **User Prompt:**
```bash
"Move the user management epic from planned to active status"
```

#### **AI Response:**
```bash
"I've updated the User Management Epic status:

**Status Change**: PLANNED → IN_PROGRESS
**Started**: 2025-01-15
**Active Phase**: Phase 1 - Core Authentication
**Next Step**: User Registration Component

The epic is now active in your portfolio (2/3 active epics)."
```

### **Epic Completion**

#### **User Prompt:**
```bash
"Mark the user management epic as completed"
```

#### **AI Response:**
```bash
"I've completed the User Management Epic:

## Epic Completion Summary
- **Epic**: User Management System
- **Status**: COMPLETED ✅
- **Duration**: 6 weeks (planned 8 weeks)
- **Phases Completed**: 3/3
- **Steps Completed**: 8/8

## Success Criteria Review
- ✅ User registration and authentication
- ✅ Profile management system
- ✅ Role-based access control
- ✅ Admin user management tools

The epic has been moved to completion history and you now have capacity for a new epic (1/3 active)."
```

### **Epic Archiving**

#### **User Prompt:**
```bash
"Archive completed epics older than 6 months"
```

#### **AI Response:**
```bash
"Archiving old completed epics:

## Archived Epics
- **Legacy System Migration** (completed 8 months ago)
- **Initial MVP Development** (completed 7 months ago)

## Retained Epics  
- **User Management System** (completed 2 months ago) - kept for reference
- **Payment Integration** (completed 1 month ago) - kept for reference

Archived epics have been removed from epics.mdc to maintain file size and AI context effectiveness."
```

## 💡 Advanced Epic Patterns

### **Epic Templates by Domain**

#### **User Prompt:**
```bash
"Create an epic template for API development projects"
```

#### **AI Response:**
```markdown
### API Development Epic Template

#### PHASE 1: API Design & Documentation
1. **API Specification**: OpenAPI/Swagger documentation
2. **Data Models**: Request/response schemas  
3. **Authentication Strategy**: API security design

#### PHASE 2: Core Implementation
1. **Endpoint Development**: CRUD operations
2. **Data Validation**: Input sanitization and validation
3. **Error Handling**: Standardized error responses

#### PHASE 3: Integration & Testing
1. **Integration Testing**: End-to-end API tests
2. **Performance Testing**: Load and stress testing
3. **Documentation**: API guides and examples

#### Success Criteria Template
- [ ] All endpoints documented in OpenAPI format
- [ ] 95%+ test coverage on business logic  
- [ ] API handles expected load (X requests/second)
- [ ] Security audit passes
- [ ] Developer documentation complete
```

### **Cross-Epic Dependencies**

#### **User Prompt:**
```bash
"How do I handle dependencies between the user management and payment processing epics?"
```

#### **AI Response:**
```bash
"I'll help you manage cross-epic dependencies:

## Dependency Mapping
**Payment Processing Epic** depends on **User Management Epic**:
- Authentication system (user login required)
- User profiles (billing information storage)
- Session management (payment security)

## Coordination Strategy
1. **Sequential Phases**: Complete User Management Phase 1 before starting Payment Processing
2. **Shared Components**: Design authentication to support payment flows
3. **Interface Contracts**: Define user data requirements for payment system
4. **Integration Testing**: Test combined user + payment workflows

## Epic Coordination Notes
- Both epics will update shared architecture.mdc
- Payment epic steps reference user management APIs
- Integration testing spans both epic domains"
```

## 📈 Epic Metrics and Reporting

### **Epic Performance Tracking**

#### **User Prompt:**
```bash
"Generate a report on our epic completion performance"
```

#### **AI Response:**
```markdown
## Epic Performance Report (Last 6 Months)

### Completion Metrics
- **Total Epics Completed**: 4
- **Average Epic Duration**: 5.2 weeks (target: 6 weeks)
- **On-Time Completion Rate**: 75% (3/4 epics)
- **Epic Success Rate**: 100% (all met success criteria)

### Phase Performance
- **Phase 1 Completion**: Average 95% of estimate
- **Phase 2 Completion**: Average 110% of estimate  
- **Phase 3 Completion**: Average 90% of estimate

### Insights
- Phase 2 consistently takes longer than estimated
- Epic scoping accuracy improving over time
- Team velocity stable at ~8 story points per week

### Recommendations
- Increase Phase 2 estimates by 15%
- Consider breaking large Phase 2 work into smaller steps
- Maintain current epic planning approach
```

### **Epic ROI Analysis**

#### **User Prompt:**
```bash
"Analyze the business value delivered by completed epics"
```

#### **AI Response:**
```markdown
## Epic ROI Analysis

### Completed Epic Value
1. **User Management System**
   - **User Engagement**: +45% (authentication reduced friction)
   - **Support Tickets**: -30% (self-service profiles)
   - **Development Velocity**: +20% (reusable auth components)

2. **Payment Processing Integration**
   - **Revenue**: +$50K/month (enabled online sales)
   - **Conversion Rate**: +15% (streamlined checkout)
   - **Payment Errors**: -80% (improved error handling)

3. **Admin Dashboard**
   - **Admin Efficiency**: +60% (centralized management)
   - **Data Accuracy**: +35% (real-time updates)
   - **Onboarding Time**: -50% (better admin tools)

### Investment vs Return
- **Development Investment**: 18 weeks total
- **Business Value Generated**: $200K+ annually
- **ROI**: 400%+ in first year
```

---

**Ready to start epic planning?** Use these realistic prompts to begin structuring your large initiatives with AI assistance!