# 🏗️ Architecture Documentation Guide

This guide explains how to use the `.cursor/rules/architecture.mdc` rule for managing project architecture information and architectural decision-making with AI assistance.

## 🎯 Overview

The `architecture.mdc` rule serves as your project's architectural knowledge base. It's designed to be a living document where AI assistants can both reference and contribute architectural information, ensuring architectural decisions are consistent and well-documented.

## 📋 Rule Purpose

The `architecture.mdc` rule:

- **Centralizes Architecture Knowledge**: Single source of truth for all architectural information
- **Guides AI Decision Making**: AI refers to this file for architectural context
- **Evolves with Project**: AI continuously updates and expands architectural documentation
- **Maintains Consistency**: Ensures all architectural decisions align with established patterns

## 🔧 How It Works

### **AI Behavior with Architecture Rule**

When the `architecture.mdc` rule is active, AI assistants will:

1. **Reference Before Decisions**: Check existing architecture before making any architectural recommendations
2. **Document New Decisions**: Add new architectural information to the file
3. **Maintain Consistency**: Ensure all suggestions align with documented architecture
4. **Expand Documentation**: Continuously improve and detail the architectural documentation

### **Rule Configuration**

```yaml
---
description: Contains comprehensive high, mid and low level information about our project software and cloud architecture.
globs: "**/*.*"
alwaysApply: true
---
```

- **Always Applied**: This rule is active for all files in your project
- **Global Scope**: Affects all architectural decisions across your codebase
- **Comprehensive Coverage**: Includes high, mid, and low-level architectural information

## 📐 Architecture Documentation Structure

### **Recommended Sections**

When AI populates your `architecture.mdc`, it should include:

#### **High-Level Architecture**
```markdown
## System Architecture Overview
- **Architecture Style**: [Microservices/Monolith/Serverless/etc.]
- **Primary Patterns**: [Domain-Driven Design/Clean Architecture/etc.]
- **Technology Stack**: [Languages, frameworks, databases]
- **Deployment Strategy**: [Cloud platform, containerization]

## System Components
### Frontend
- Framework and libraries
- State management approach
- UI/UX patterns

### Backend  
- API design patterns
- Data access patterns
- Business logic organization

### Data Layer
- Database selection and design
- Caching strategy
- Data flow patterns
```

#### **Mid-Level Architecture**
```markdown
## Service Boundaries
- Service responsibilities
- Communication patterns
- Data ownership

## Integration Patterns
- API contracts
- Message queues
- Event-driven patterns

## Security Architecture
- Authentication/authorization
- Data protection
- Security boundaries
```

#### **Low-Level Architecture**
```markdown
## Code Organization
- Project structure
- Naming conventions
- Module boundaries

## Technical Patterns
- Error handling strategies
- Logging and monitoring
- Performance considerations

## Development Practices
- Testing strategies
- Code review process
- Documentation standards
```

## 🚀 Usage Examples

### **Starting a New Project**

When beginning a new project, AI will help establish your architecture:

```bash
# Example conversation with AI
"Help me design the architecture for a task management SaaS application"

# AI will:
1. Ask clarifying questions about requirements
2. Propose architectural approaches
3. Document the chosen architecture in architecture.mdc
4. Reference this documentation in future decisions
```

### **Making Architectural Changes**

When modifying existing architecture:

```bash
# Example conversation
"I want to add real-time notifications to our app"

# AI will:
1. Review current architecture from architecture.mdc
2. Propose integration approaches that fit existing patterns
3. Update architecture documentation with new components
4. Ensure consistency with established patterns
```

### **Architecture Reviews**

For reviewing and validating architecture:

```bash
# Example conversation
"Review our current architecture for scalability concerns"

# AI will:
1. Analyze documented architecture
2. Identify potential bottlenecks
3. Suggest improvements
4. Update documentation with recommendations
```

## 📚 Best Practices

### **Keep It Current**
- Regularly review and update architectural documentation
- Ensure changes are reflected promptly
- Remove outdated patterns and decisions

### **Reference External Documents**
```markdown
## External Architecture Documents
- [System Design Document](docs/system-design.md)
- [API Specification](docs/api-spec.md)
- [Database Schema](docs/database-schema.md)
- [Deployment Guide](docs/deployment.md)
```

### **Include Decision Rationale**
```markdown
## Architectural Decisions
### Decision: Microservices Architecture
**Rationale**: High team autonomy, independent deployments, technology diversity
**Trade-offs**: Increased complexity, network latency, distributed system challenges
**Alternatives Considered**: Monolith, Modular monolith
**Date**: 2024-01-15
```

### **Maintain Consistency**
- Use consistent terminology throughout
- Follow established naming conventions
- Align with team coding standards

## 🛠️ AI Integration Patterns

### **Architecture-First Development**

```bash
# When planning new features
"Plan a user authentication system for our app"

# AI process:
1. Reviews architecture.mdc for existing auth patterns
2. Ensures new system aligns with security architecture
3. Documents authentication architecture decisions
4. Provides implementation guidance consistent with patterns
```

### **Workflow Integration**

The architecture rule seamlessly integrates with the three-phase workflow:

#### **Blueprint Phase Integration**
```bash
# During Blueprint phase, AI automatically:
1. Reads architecture.mdc for existing patterns and constraints
2. Validates planned changes against current architecture
3. Identifies architectural impact of new features
4. Includes architecture updates in implementation plan
```

#### **Construct Phase Integration**
```bash
# During Construct phase, AI automatically:
1. Implements code following architectural patterns
2. Updates architecture.mdc with new decisions and patterns
3. Logs architectural changes with timestamps
4. Maintains consistency with established conventions
```

#### **Validate Phase Integration**
```bash
# During Validate phase, AI automatically:
1. Verifies implementation follows architectural guidelines
2. Checks architecture documentation is up to date
3. Validates consistency across architectural decisions
```

### **Epic Integration**

Architecture considerations are built into epic planning:

#### **Epic-Level Architecture Planning**
```bash
# When creating epics, AI considers:
1. Architectural impact of epic on system design
2. New patterns or technologies being introduced
3. Alignment with existing architectural decisions
4. Cross-epic architectural consistency
```

#### **Step-Level Architecture Tracking**
```bash
# Each epic step includes:
- Architecture impact assessment
- New patterns being introduced
- Dependencies on existing architecture
- Required updates to architecture.mdc
```

### **Pattern Enforcement**

```bash
# When implementing features
"Create a new API endpoint for user management"

# AI process:
1. References API design patterns from architecture.mdc
2. Follows established error handling patterns
3. Applies documented security patterns
4. Maintains consistency with existing endpoints
```

### **Architecture Evolution**

```bash
# When scaling systems
"Our user base is growing rapidly, help optimize our architecture"

# AI process:
1. Analyzes current architecture from documentation
2. Identifies scaling bottlenecks
3. Proposes evolution strategies
4. Updates architecture.mdc with scaling patterns
```

## 📈 Advanced Usage

### **Multi-Domain Architecture**

For complex projects with multiple domains:

```markdown
## Domain Architecture
### User Domain
- User management services
- Authentication components
- Profile management

### Order Domain  
- Order processing services
- Payment integration
- Inventory management

### Shared Infrastructure
- Common utilities
- Shared databases
- Cross-cutting concerns
```

### **Migration Planning**

For architecture migrations:

```markdown
## Migration Strategy
### Current State
- Legacy monolith architecture
- Coupled components
- Single database

### Target State
- Microservices architecture
- Domain-separated services
- Distributed data

### Migration Steps
1. Identify service boundaries
2. Extract shared libraries
3. Split database by domain
4. Implement service communication
```

## 🔍 Troubleshooting

### **AI Not Following Architecture**

If AI suggestions don't align with your architecture:

1. **Check Rule Activation**: Ensure `architecture.mdc` has `alwaysApply: true`
2. **Review Documentation**: Verify architecture is clearly documented
3. **Add Specific Patterns**: Include more detailed patterns and examples
4. **Explicit Instructions**: Add specific guidelines for AI behavior

### **Outdated Architecture Information**

If architecture documentation becomes stale:

1. **Regular Reviews**: Schedule quarterly architecture reviews
2. **Change Documentation**: Update immediately when making changes
3. **Version Control**: Track architecture changes in Git
4. **Team Alignment**: Ensure all team members update documentation

## 📞 Need Help?

- **Setup Issues**: See [Troubleshooting Guide](troubleshooting.md)
- **Rule Management**: Check [Custom Rules](custom-rules.md)
- **Workflow Integration**: Read [Workflow System](workflow-system.md)

---

*The architecture rule ensures your AI assistant becomes an expert in your specific system architecture, leading to more consistent and thoughtful architectural decisions.* 