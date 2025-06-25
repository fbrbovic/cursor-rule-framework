# 🔄 Migration Guide

This guide helps you adopt the **Cursor Rule Framework v2** in existing projects, transforming your current development workflow into an AI-driven, rule-based approach.

> **Upgrading from v1?** See our dedicated **[v1 → v2 Migration Guide](v1-to-v2-migration.md)** for complete upgrade instructions.

## 🎯 Migration Overview

Migrating to the **Cursor Rule Framework v2** involves:
- **Assessment**: Evaluating your current project structure and patterns
- **Planning**: Creating a migration strategy that works for your team
- **Implementation**: Gradually introducing v2 framework components
- **Adoption**: Training your team and establishing new workflows

## 📋 Pre-Migration Assessment

### **1. Project Analysis**

#### **Codebase Assessment**
```bash
# Analyze your current project structure
find . -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | wc -l
find . -type f -name "*.py" | wc -l
find . -type f -name "*.java" | wc -l

# Identify existing patterns
ls -la src/                 # Frontend structure
ls -la api/ || ls -la backend/  # Backend structure
ls -la tests/ || ls -la __tests__/  # Testing structure

# Check existing documentation
ls -la docs/
find . -name "README*" -o -name "*.md"
```

#### **Team Workflow Assessment**
```markdown
## Current State Analysis

### Development Process
- [ ] How are features currently planned?
- [ ] What coding standards exist?
- [ ] How is code review conducted?
- [ ] What testing practices are in place?
- [ ] How is documentation maintained?

### Tool Usage
- [ ] Current IDE/editor setup
- [ ] Existing AI assistant usage
- [ ] Build and deployment tools
- [ ] Version control practices

### Pain Points
- [ ] Inconsistent coding patterns
- [ ] Knowledge silos
- [ ] Documentation drift
- [ ] Code quality issues
- [ ] Onboarding difficulties
```

### **2. Technology Stack Compatibility Check**

#### **v2 Framework Universal Compatibility**
```bash
# v2 Framework works with ANY technology stack
✅ Frontend Technologies: React, Vue.js, Angular, Svelte, vanilla JavaScript
✅ Backend Technologies: Node.js, Python, Java, C#, Go, PHP, Ruby
✅ Mobile: React Native, Flutter, native iOS/Android
✅ Database: PostgreSQL, MySQL, MongoDB, Redis, any database
✅ Deployment: Vercel, Netlify, AWS, GCP, Azure, Docker, Kubernetes
✅ Languages: TypeScript, JavaScript, Python, Java, C#, Go, Rust, PHP, etc.
```

## 🚀 Migration Strategies

### **Strategy 1: Gradual Integration (Recommended)**

#### **Phase 1: Foundation Setup (Week 1)**
```bash
# Step 1: Install Cursor IDE and basic setup
# Download and install Cursor IDE
# Copy user rules template to Cursor settings

# Step 2: Create v2 rule structure
mkdir -p .cursor/rules/rule-framework-v2

# Download complete v2 framework
curl -L https://github.com/fbrbovic/cursor-rule-framework/archive/refs/heads/main.tar.gz | \
  tar -xz --strip-components=3 -C .cursor/rules/rule-framework-v2 \
  cursor-rule-framework-main/.cursor/rules/rule-framework-v2/
```

#### **Phase 2: Project Configuration (Week 1-2)**
```bash
# Step 3: Customize project-config.mdc for your technology stack
# Update with your project's actual tech stack and goals

# Step 4: Document current architecture using v2 framework
# Use AI to help analyze and document existing patterns:
"Analyze our current project structure and document the architecture patterns using v2 framework"

# Step 5: Create technology-specific rules
# Add technology-specific patterns to root directory
# Example for React + Node.js project:
touch .cursor/rules/rule-framework-v2/frontend-react.mdc
touch .cursor/rules/rule-framework-v2/backend-node.mdc
```

#### **Phase 3: Workflow Introduction (Week 2-3)**
```bash
# Step 6: Start using v2 workflow for new features
# Begin with small, non-critical features

# Example first v2 workflow usage:
"Plan a small UI component update using the v2 framework workflow"

# Step 7: Epic planning for current work
# Document current major initiatives as epics in v2 system
"Convert our current feature roadmap into v2 epic format"
```

#### **Phase 4: Team Adoption (Week 3-4)**
```bash
# Step 8: Team training and onboarding on v2 framework
# Share v2 framework basics with team
# Create team-specific rules and patterns

# Step 9: Establish review process
# Include v2 rule compliance in code reviews
# Regular epic and architecture reviews using v2 system
```

### **Strategy 2: Pilot Project Approach**

#### **Option for Large Teams/Complex Projects**
```bash
# Step 1: Choose pilot project
# Select a new feature or module for v2 framework adoption
# Smaller scope, lower risk

# Step 2: Full v2 framework implementation on pilot
# Complete setup with all v2 framework components
# Document lessons learned

# Step 3: Gradual expansion
# Apply learnings to other projects/modules
# Scale successful patterns across organization
```

## 🛠️ Technical Migration Steps

### **1. Rule Creation from Existing Patterns (v2 Approach)**

#### **Extract Technology-Agnostic Patterns**
```bash
# Identify universal patterns in your codebase
"Analyze our existing components and create technology-agnostic rules for common patterns"

# Document API conventions (technology-portable)
"Review our existing API endpoints and document universal patterns in v2 architecture framework"

# Extract testing patterns (cross-technology)
"Analyze our test files and create universal testing conventions for v2 framework"
```

#### **Create v2 Domain-Specific Rules**
```yaml
# Example: Extract database patterns for v2 framework
---
description: Database access patterns using any ORM (technology-agnostic with specific examples)
alwaysApply: false
---

# Universal Database Access Patterns
Based on analysis of existing codebase, applicable to any technology stack:

## Pattern 1: Consistent Error Handling
- Always use try-catch blocks for database operations
- Return standardized error objects
- Log errors with appropriate context
- **Technology Examples**: Works with Prisma (Node.js), SQLAlchemy (Python), Hibernate (Java)

## Pattern 2: Transaction Management
- Use database transactions for multi-step operations
- Implement rollback strategies for failed operations
- **Technology Examples**: PostgreSQL transactions, MongoDB sessions, MySQL transactions
```

### **2. Architecture Documentation**

#### **Document Current Architecture**
```bash
# Use AI to help document existing architecture
"Analyze our current project and populate architecture.mdc with our existing patterns and decisions"

# Include current technology decisions
"Document our technology stack choices and architectural decisions in ADR format"

# Map out current system components
"Create a high-level architecture overview of our current system"
```

### **3. Epic Planning for Existing Work**

#### **Convert Current Roadmap**
```bash
# Transform current roadmap into epic format
"Convert our Q1 roadmap into epic format with phases and steps"

# Document ongoing work as epics
"Create epics for our current active development initiatives"

# Plan migrations as epics
"Create an epic for migrating our authentication system to use modern patterns"
```

## 👥 Team Adoption Strategies

### **1. Gradual Team Onboarding**

#### **Week 1: Core Team Introduction**
```markdown
## Team Training Plan

### Session 1: Framework Overview (1 hour)
- What is the Cursor Rule Framework?
- Benefits and objectives
- High-level concepts (rules, workflow, epics)

### Session 2: Hands-on Setup (1 hour)  
- Install Cursor IDE
- Set up user rules template
- Explore basic AI interactions with rules

### Session 3: Workflow Practice (1 hour)
- Practice Blueprint → Construct → Validate
- Simple feature implementation
- Epic planning exercise
```

#### **Week 2: Advanced Features**
```markdown
### Session 4: Architecture Integration (1 hour)
- Understanding architecture.mdc
- How AI uses architectural context
- Documenting architectural decisions

### Session 5: Epic Planning (1 hour)
- Creating and managing epics
- Epic-workflow integration
- Progress tracking

### Session 6: Team Collaboration (1 hour)
- Sharing rules and patterns
- Code review with framework
- Best practices discussion
```

### **2. Documentation and Support**

#### **Create Team-Specific Resources**
```bash
# Team onboarding checklist
cat > docs/team-onboarding.md << 'EOF'
# Team Onboarding Checklist

## Setup
- [ ] Install Cursor IDE
- [ ] Copy user rules template
- [ ] Verify rule loading in Cursor
- [ ] Complete practice workflow exercise

## Project Integration
- [ ] Understand project-specific rules
- [ ] Review current epics and architecture
- [ ] Practice AI interactions with project context
- [ ] Shadow experienced team member

## Ongoing Usage
- [ ] Use workflow for all new features
- [ ] Update epic progress regularly
- [ ] Contribute to architecture documentation
- [ ] Participate in rule improvement discussions
EOF

# Team FAQ document
cat > docs/team-faq.md << 'EOF'
# Team FAQ

## Common Questions

### Q: Do I have to use the workflow for every change?
A: Start with new features and larger changes. Small bug fixes can be done directly.

### Q: What if AI doesn't follow the rules?
A: Check rule setup, provide more context, or update rules based on learnings.

### Q: How do I update architecture documentation?
A: AI updates architecture.mdc automatically during development. Review and approve changes.
EOF
```

## 📊 Migration Success Metrics

### **Technical Metrics**
```markdown
## Migration Success Indicators

### Rule Adoption
- [ ] All team members using Cursor IDE with rules
- [ ] Consistent rule application across team
- [ ] Regular rule updates and improvements

### Workflow Usage
- [ ] New features using Blueprint → Construct → Validate
- [ ] Epic planning for major initiatives
- [ ] Architecture documentation staying current

### Quality Improvements
- [ ] Reduced code review feedback on patterns
- [ ] Improved code consistency across team
- [ ] Faster onboarding for new team members
- [ ] Better documentation maintenance
```

### **Team Adoption Metrics**
```markdown
## Team Satisfaction Indicators

### Usage Statistics
- Percentage of features developed using framework
- Epic completion rates and timeline accuracy
- Architecture documentation updates frequency

### Qualitative Feedback
- Team satisfaction with AI assistance
- Perceived improvement in development velocity
- Reduction in context-switching and pattern lookup
- Improvement in cross-team knowledge sharing
```

## 🚨 Common Migration Challenges

### **Challenge 1: Team Resistance to Change**

#### **Solutions**
```bash
# Start with volunteers
# Begin with team members interested in AI tools
# Let early adopters demonstrate benefits

# Show immediate value
# Focus on pain points framework solves
# Demonstrate time savings and consistency improvements

# Gradual adoption
# Don't force immediate full adoption
# Allow parallel workflows during transition
```

### **Challenge 2: Existing Code Inconsistencies**

#### **Solutions**
```bash
# Don't try to fix everything at once
# Focus on new code following patterns
# Plan refactoring as separate initiatives

# Use framework for refactoring
# Create epics for code modernization
# Use architecture documentation to guide improvements

# Document current state honestly
# Include existing patterns in architecture.mdc
# Plan evolution rather than revolution
```

### **Challenge 3: Complex Existing Architecture**

#### **Solutions**
```bash
# Document incrementally
# Start with high-level architecture overview
# Add detail as you work in different areas

# Use AI assistance
# Let AI help analyze and document existing patterns
# Validate AI analysis with team knowledge

# Focus on most important patterns first
# Document patterns used in active development
# Address legacy patterns as they're encountered
```

## 🎯 Migration Best Practices

### **1. Start Small and Iterate**
- Begin with non-critical features
- Learn and adapt before full adoption
- Regular retrospectives and improvements

### **2. Documentation-First Approach**
- Document current state before changes
- Keep architecture.mdc current
- Use epics to plan migration work itself

### **3. Team-Centric Migration**
- Include entire team in planning
- Address concerns and resistance proactively
- Celebrate early wins and improvements

### **4. Continuous Improvement**
- Regular rule review and updates
- Epic retrospectives for lessons learned
- Architecture reviews for consistency

### **5. Measure and Validate**
- Track adoption metrics
- Gather team feedback regularly
- Adjust approach based on results

---

**Successful migration to the Cursor Rule Framework transforms your development process gradually, ensuring team adoption and sustainable improvement in code quality and development velocity.** 