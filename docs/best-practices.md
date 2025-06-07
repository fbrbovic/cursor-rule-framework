# 🔧 Cursor Rule Framework Best Practices

This guide covers proven patterns and best practices for maximizing effectiveness with the Cursor Rule Framework.

## 🎯 Core Framework Principles

### **1. Rule-Driven Development**
Structure your development process around well-defined, AI-readable rules rather than relying on implicit knowledge.

#### **Effective Rule Creation**
```yaml
# ✅ Good Rule Structure
---
description: Specific, actionable rule description
globs: "src/components/**/*.tsx"
alwaysApply: false
---

# Clear, focused rule content with examples
# Specific patterns and constraints
# When and how to apply the rule
```

```yaml
# ❌ Poor Rule Structure  
---
description: General stuff
globs: "**/*"
alwaysApply: true
---

# Do good things and avoid bad things
```

#### **Rule Scope Management**
- **Start Narrow**: Begin with specific file patterns, expand as needed
- **Single Responsibility**: Each rule should address one clear concern
- **Context Awareness**: Rules should understand when they apply vs when they don't

### **2. Three-Phase Workflow Discipline**
The Blueprint → Construct → Validate cycle is the framework's backbone.

#### **Blueprint Phase Excellence**
```bash
# ✅ Effective Blueprint Interaction
"Plan user authentication using our current architecture rules. 
Check @architecture.mdc for existing patterns and 
@epics.mdc for related work. Provide detailed plan with:
- Integration points with existing systems
- Rule compliance verification 
- Step-by-step implementation sequence"

# ❌ Ineffective Blueprint Interaction
"Make login work"
```

#### **Construct Phase Adherence**
- **Follow the Plan**: Stick to approved blueprint unless blocked
- **Update Workflow State**: Keep `workflow-state.mdc` current
- **Document Decisions**: Log rule additions and modifications
- **Incremental Progress**: Make atomic changes with clear validation

#### **Validate Phase Rigor**
- **Rule Compliance Check**: Verify all applicable rules were followed
- **Epic Progress Update**: Mark completed steps in `epics.mdc`
- **Documentation Sync**: Update rules and docs with new patterns
- **State Cleanup**: Archive completed work in workflow state

## 📐 Rule Organization Best Practices

### **File Structure Patterns**

#### **Small Projects (< 10 rules)**
```
.cursor/rules/
├── project-config.mdc
├── workflow-state.mdc  
├── epics.mdc
├── rules.mdc
└── architecture.mdc
```

#### **Medium Projects (10-25 rules)**
```
.cursor/rules/
├── [core files as above]
├── frontend-rules.mdc
├── backend-rules.mdc
├── database-rules.mdc
└── security-rules.mdc
```

#### **Large Projects (25+ rules)**
```
.cursor/rules/
├── [core files as above]
├── domains/
│   ├── user-management.mdc
│   ├── billing-system.mdc
│   └── reporting-engine.mdc
├── technologies/
│   ├── react-patterns.mdc
│   ├── api-standards.mdc
│   └── database-conventions.mdc
└── processes/
    ├── code-review.mdc
    ├── deployment.mdc
    └── testing-standards.mdc
```

### **Rule Quality Standards**

#### **Clear Rule Descriptions**
```yaml
# ✅ Specific and Actionable
---
description: React component naming conventions and file organization patterns for the components directory
globs: "src/components/**/*.{tsx,jsx}"
alwaysApply: false
---

# ❌ Vague and Generic
---
description: Component stuff
globs: "**/*"
alwaysApply: true
---
```

#### **Appropriate Glob Patterns**
```yaml
# ✅ Targeted Patterns
"src/components/**/*.tsx"     # React components only
"src/api/**/*.ts"            # API layer only  
"*.test.{ts,tsx}"            # Test files only

# ❌ Overly Broad Patterns
"**/*"                       # Everything (usually wrong)
"src/**/*"                   # Too broad for specific rules
```

#### **Smart Always-Apply Usage**
```yaml
# ✅ Always Apply For:
- project-config.mdc         # Project-wide settings
- workflow-state.mdc         # State management
- architecture.mdc           # Architectural decisions

# ✅ Conditional Apply For:
- Technology-specific rules  # Only when working with that tech
- Domain-specific rules      # Only in relevant domains
- Process-specific rules     # Only during certain activities
```

## 🔄 Workflow State Management

### **Effective State Tracking**
Keep `workflow-state.mdc` as your single source of truth for current progress.

#### **Phase Transitions**
```markdown
# ✅ Clear Phase Management
## State
- **Phase**: BLUEPRINT
- **Status**: IN_PROGRESS  
- **Current Item**: User Authentication System
- **Epic Reference**: AUTH-EPIC-001

## Plan
[Detailed step-by-step plan goes here]

# When ready to proceed:
## State  
- **Phase**: CONSTRUCT
- **Status**: IN_PROGRESS
- **Current Item**: User Authentication System
- **Epic Reference**: AUTH-EPIC-001
```

#### **Progress Logging**
```markdown
# ✅ Meaningful Log Entries
## Log
- 2025-01-16 14:30: Started Blueprint phase for user authentication
- 2025-01-16 14:45: Reviewed architecture.mdc for existing auth patterns
- 2025-01-16 15:00: Plan approved, transitioning to CONSTRUCT
- 2025-01-16 15:15: Created AuthService component following established patterns

# ❌ Useless Log Entries
## Log
- Did stuff
- Made changes
- Fixed things
```

## 📋 Epic Planning Excellence

### **Epic Hierarchy Management**
Structure epics in manageable, trackable units.

#### **Epic Decomposition**
```markdown
# ✅ Well-Structured Epic
## EPIC: User Management System
### Phase 1: Authentication
- Step 1.1: Login/logout functionality
- Step 1.2: Password reset system  
- Step 1.3: Session management

### Phase 2: User Profiles
- Step 2.1: Profile creation and editing
- Step 2.2: Avatar upload system
- Step 2.3: Privacy settings

### Phase 3: User Administration  
- Step 3.1: Admin user interface
- Step 3.2: User role management
- Step 3.3: Audit logging
```

#### **Epic Progress Tracking**
```markdown
# ✅ Clear Progress Indicators
## Epic Status Tracking
- **Epic**: USER-MGMT-001
- **Status**: IN_PROGRESS
- **Completed**: 3/8 phases
- **Current Phase**: Authentication (Phase 1)
- **Blocked**: None
- **Next**: Profile system after auth completion
```

## 🤖 AI Interaction Patterns

### **Effective Prompting with Rules**

#### **Context-Rich Requests**
```bash
# ✅ Rule-Aware Prompting
"Following our established patterns in @rules.mdc and the current epic 
in @epics.mdc, implement the user profile component. Ensure it follows 
our React component conventions and integrates with the existing 
authentication system documented in @architecture.mdc."

# ❌ Context-Free Prompting
"Make a user profile component"
```

#### **Rule Reference Strategies**
```bash
# Reference specific rules when needed
"Check @frontend-rules.mdc for our component naming patterns"
"Follow the API standards defined in @backend-rules.mdc"  
"Use the security patterns from @security-rules.mdc"

# Reference epic context for larger work
"Continue work on epic AUTH-001 as defined in @epics.mdc"
"Move to next phase of the current epic"
```

### **Iterative Rule Development**

#### **Rule Evolution Process**
```bash
# 1. Identify Pattern Need
"I notice we're inconsistent with error handling. Let's create a rule."

# 2. Draft Initial Rule
"Create a draft rule for error handling patterns based on our recent implementations"

# 3. Refine and Test
"Apply this rule to the current codebase and refine based on what works"

# 4. Formalize and Document
"Add the finalized error handling rule to @rules.mdc with examples"
```

## 👥 Team Collaboration Patterns

### **Rule Governance**

#### **Rule Ownership Model**
```markdown
# Team Rule Responsibilities
## Architecture Team
- architecture.mdc
- System design rules
- Cross-cutting concerns

## Frontend Team  
- React/Vue component rules
- UI/UX pattern rules
- Client-side performance rules

## Backend Team
- API design rules
- Database pattern rules
- Server-side security rules

## DevOps Team
- Deployment rules
- Infrastructure rules
- Monitoring and logging rules
```

#### **Rule Review Process**
```bash
# Monthly Rule Review Agenda
1. Review rule effectiveness metrics
2. Identify conflicts or outdated rules
3. Propose new rules based on recurring issues
4. Update rules based on technology changes
5. Ensure team alignment on rule interpretations
```

### **Knowledge Sharing**

#### **Rule Documentation Standards**
```yaml
# ✅ Well-Documented Rule
---
description: API endpoint naming and structure conventions
globs: "src/api/**/*.ts"
alwaysApply: false
author: backend-team
version: 2.1
lastUpdated: 2025-01-16
---

# API Endpoint Standards

## Naming Conventions
- Use kebab-case for endpoint paths: `/user-profiles`, not `/userProfiles`
- Use plural nouns for collections: `/users`, not `/user`
- Use HTTP verbs appropriately: GET, POST, PUT, DELETE

## Examples
```typescript
// ✅ Good
GET /api/v1/users
POST /api/v1/users  
PUT /api/v1/users/123
DELETE /api/v1/users/123

// ❌ Bad
GET /api/getUsers
POST /api/createUser
```

## Exceptions
- Health check endpoints can use `/health`, `/status`
- Authentication endpoints use `/auth/login`, `/auth/logout`

## Related Rules
- See @security-rules.mdc for authentication requirements
- See @database-rules.mdc for data modeling patterns
```

## 📊 Framework Effectiveness Measurement

### **Key Metrics to Track**

#### **Development Velocity**
```bash
# Framework Impact Indicators
- Time from idea to implementation
- Consistency across team member outputs  
- Reduction in code review cycles
- Decrease in bug reports and rework
```

#### **Rule Adoption Metrics**
```bash
# Rule Effectiveness Measures
- Number of rules actively referenced
- Team compliance with established patterns
- Frequency of rule updates and refinements
- New team member onboarding time
```

### **Continuous Improvement**

#### **Regular Framework Assessment**
```bash
# Quarterly Framework Review
1. Survey team satisfaction with rule framework
2. Analyze which rules are most/least useful
3. Identify gaps in current rule coverage  
4. Plan rule improvements and additions
5. Update framework based on lessons learned
```

## 🚨 Common Framework Pitfalls

### **Rule Overload**
```bash
# ❌ Problem: Too many rules become overwhelming
# ✅ Solution: Focus on high-impact, frequently-used patterns

"Start with 5-10 core rules, add new ones only when:
- Pattern appears repeatedly across team
- Lack of rule causes frequent inconsistencies  
- New technology or process requires guidance
- Team explicitly requests standardization"
```

### **Stale Rule Management**
```bash
# ❌ Problem: Rules become outdated and counterproductive
# ✅ Solution: Regular rule lifecycle management

"Review rules monthly:
- Remove rules for deprecated technologies
- Update rules for framework/library upgrades
- Consolidate similar or overlapping rules
- Archive rules that are no longer relevant"
```

### **Insufficient Context in Rules**
```bash
# ❌ Problem: Rules are too abstract to be useful
# ✅ Solution: Include concrete examples and rationale

"Every rule should include:
- Specific examples of correct application
- Common mistakes to avoid
- When the rule does and doesn't apply
- Rationale for why the rule exists"
```

### **Workflow State Neglect**
```bash
# ❌ Problem: workflow-state.mdc becomes stale and useless
# ✅ Solution: Treat workflow state as active project management

"Keep workflow state current:
- Update phase transitions immediately
- Log meaningful progress indicators
- Clean up completed items regularly
- Use state to resume work after interruptions"
```

## 🛠️ Advanced Framework Techniques

### **Dynamic Rule Loading**
```yaml
# Context-aware rule activation
---
description: Load different rules based on project context
globs: "**/*"
alwaysApply: true
---

# Smart Rule Loading
When working on:
- Frontend features → Load @frontend-rules.mdc
- API development → Load @backend-rules.mdc  
- Database changes → Load @database-rules.mdc
- Security features → Load @security-rules.mdc
```

### **Rule Composition Patterns**
```bash
# Build complex behaviors from simple rules
"Combine multiple focused rules rather than creating monolithic ones:
- Base component rule + React-specific patterns
- General API rule + Authentication-specific requirements
- Core testing rule + Domain-specific test patterns"
```

### **Framework Integration**
```bash
# Connect cursor rules with external tools
"Integrate framework with:
- CI/CD pipelines for rule compliance checking
- Code review tools for automatic rule verification
- Documentation systems for rule discovery
- Project management tools for epic tracking"
```

## 📞 Need Help?

- **Rule Creation**: See [Custom Rules Guide](custom-rules.md)
- **Workflow Issues**: Check [Workflow System](workflow-system.md)
- **Team Setup**: Read [Team Integration](team-integration.md)
- **Technical Problems**: Visit [Troubleshooting](troubleshooting.md)

---

*The Cursor Rule Framework is most effective when teams consistently apply these practices and continuously refine their approach based on experience.* 