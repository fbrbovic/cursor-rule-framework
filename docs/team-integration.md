# 👥 Team Integration Guide

This guide explains how to share and coordinate cursor rules across development teams for consistent AI-assisted development.

## 🎯 Overview

Team integration with the Cursor Rule Framework is fundamentally about sharing rule files and establishing team conventions. Since cursor rules are just `.mdc` files that Cursor AI reads, team integration focuses on version control, rule coordination, and establishing shared conventions.

## 🚀 Getting Started with Team Rules

### **Repository Setup**

#### **Basic Team Structure**
```bash
# Standard team setup
.cursor/rules/
├── project-config.mdc          # Team project settings
├── workflow-state.mdc          # Individual workflow state  
├── epics.mdc                   # Shared epic planning
├── architecture.mdc            # Team architecture decisions
├── rules.mdc                   # Team-accumulated rules
├── frontend-rules.mdc          # Frontend team standards
├── backend-rules.mdc           # Backend team standards
└── team-conventions.mdc        # Team-specific conventions
```

#### **Version Control Strategy**
```bash
# What to track in Git
✅ Track: All .mdc rule files
✅ Track: Team conventions and standards
✅ Track: Epic planning and architecture
❌ Don't track: Individual workflow-state.mdc (optional)
❌ Don't track: Personal rule experiments

# .gitignore recommendations
echo ".cursor/rules/personal-*.mdc" >> .gitignore
echo ".cursor/rules/.tmp*" >> .gitignore
```

### **Team Rule Coordination**

#### **Creating Team Standards**
```yaml
# .cursor/rules/team-conventions.mdc
---
description: Team-specific conventions and standards
globs: "**/*.*"
alwaysApply: true
---

# Team Development Conventions

## Team Information
**Team**: Frontend Development Team
**Members**: Alice, Bob, Carol, David
**Primary Stack**: React, TypeScript, Node.js
**Code Review**: Required for all changes

## Shared Rule Development
### Rule Creation Process
1. Discuss pattern in team meeting
2. One person drafts the rule
3. Team reviews in next meeting
4. Merge after team approval

### Rule Maintenance
- Monthly rule review sessions
- Update rules when technologies change
- Remove obsolete rules promptly
- Document rule changes in Git commits

## Communication Standards
### Workflow Updates
- Update your workflow-state.mdc for complex work
- Share your epic progress in standups
- Ask for help when blocked on patterns
- Document architectural decisions

### Knowledge Sharing
- Add useful patterns to rules.mdc
- Share learnings in team Slack/Discord
- Help onboard new team members
- Review and improve team rules
```

## 🔄 Team Workflow Coordination

### **Sharing Epic Planning**

#### **Collaborative Epic Management**
```yaml
# .cursor/rules/epics.mdc - Shared across team
---
description: Team epic planning and progress tracking
globs: "**/*.*"
alwaysApply: false
---

# Team Epic Planning

## Active Epics

### EPIC-001: User Authentication System
**Assigned**: Alice (Lead), Bob (Support)
**Status**: IN_PROGRESS
**Timeline**: Jan 15 - Feb 1

#### Completed Steps
- ✅ Authentication context setup (Alice)
- ✅ Login form component (Bob)

#### In Progress
- 🔄 Password reset flow (Alice)
- ⏳ Testing setup (Bob - starting tomorrow)

### EPIC-002: Dashboard Redesign  
**Assigned**: Carol (Lead), David (Support)
**Status**: BLUEPRINT
**Timeline**: Feb 1 - Feb 15

#### Planning Status
- 🔄 Requirements gathering (Carol)
- ⏳ Design system review (David - next week)
```

#### **Individual Workflow States**
Each team member maintains their own `workflow-state.mdc`:

```markdown
# Alice's workflow-state.mdc
## State
**Phase**: CONSTRUCT
**Status**: IN_PROGRESS
**CurrentItem**: Password Reset Flow (EPIC-001)

## Plan
1. Create password reset email template
2. Implement reset token validation
3. Build new password form
4. Add integration tests

## Log
- 2025-01-16 09:00: Started password reset implementation
- 2025-01-16 11:30: Email template completed
- 2025-01-16 14:00: Working on token validation
```

### **Rule Development Collaboration**

#### **Shared Rule Evolution**
```bash
# Team process for rule development
1. Developer notices recurring pattern
2. Proposes rule in team Slack/meeting
3. Team discusses and refines approach
4. One person creates draft rule
5. Team reviews via Git PR/meeting
6. Merge and announce to team
```

#### **Example Team Rule Creation**
```bash
# Alice in team Slack:
"I've noticed we're inconsistent with error handling in our React components. 
Should we create a rule for this?"

# Team discussion leads to:
# Bob creates error-handling-rules.mdc

# Carol reviews and suggests improvements
# David tests with current codebase

# Team approves and merges rule
```

## 🎭 Role-Based Usage Patterns

### **Team Lead Responsibilities**

#### **Rule Governance**
- Facilitate monthly rule review meetings
- Resolve conflicts between rules or team preferences
- Ensure new team members understand the rule system
- Coordinate with other teams on shared standards

#### **Team Coordination**
```bash
# Weekly team check-ins
"Let's review our epic progress and any rule issues:
- Alice: How's the auth epic going? Any rule gaps?
- Bob: Any patterns from testing work to capture?
- Carol: Dashboard design rules ready for team review?
- David: Any blockers or rule conflicts?"
```

### **Senior Developer Contributions**

#### **Pattern Recognition and Rule Creation**
- Identify recurring patterns that should become rules
- Draft complex rules that require architectural understanding
- Mentor junior developers on rule usage
- Lead rule review sessions

#### **Quality Standards**
```bash
# Senior developer creating architecture rule
"I notice we're making inconsistent API integration decisions. 
Let me draft a rule for our API client patterns that covers:
- Error handling strategies
- Retry logic
- Loading state management
- Cache invalidation"
```

### **Junior Developer Learning**

#### **Rule-Guided Development**
- Use existing rules to understand team patterns
- Ask questions about rule interpretation
- Contribute simple rules for patterns they discover
- Practice workflow discipline with team support

#### **Learning Process**
```bash
# Junior developer workflow
1. Check relevant rules before starting work
2. Follow team patterns from rules.mdc
3. Ask for help interpreting complex rules
4. Document new patterns they discover
5. Get rule contributions reviewed by seniors
```

## 📋 Team Rule Organization

### **Multi-Team Rule Structure**

#### **Large Organization Pattern**
```bash
# Organization with multiple teams
.cursor/rules/
├── org-standards.mdc           # Organization-wide standards
├── frontend-team/
│   ├── react-patterns.mdc      # React-specific rules
│   ├── ui-standards.mdc        # UI/UX guidelines
│   └── testing-patterns.mdc    # Frontend testing
├── backend-team/
│   ├── api-standards.mdc       # API design rules
│   ├── database-patterns.mdc   # Database conventions
│   └── security-rules.mdc      # Security guidelines
└── shared/
    ├── architecture.mdc        # Shared architecture
    └── deployment.mdc          # Deployment standards
```

#### **Cross-Team Coordination**
```bash
# Monthly cross-team rule sync
1. Share new patterns across teams
2. Identify conflicting rules between teams
3. Coordinate on shared infrastructure rules
4. Plan organization-wide rule updates
```

### **Team Rule Specialization**

#### **Frontend Team Focus**
```yaml
# frontend-patterns.mdc
---
description: Frontend team React and TypeScript patterns
globs: "src/**/*.{tsx,jsx,ts}"
alwaysApply: false
---

# Frontend Development Patterns

## Component Standards
- All components use TypeScript interfaces
- Props interfaces named ComponentNameProps
- Use functional components with hooks
- Include loading and error states

## State Management
- Use React Context for app-wide state
- Use useState for component-local state
- Use React Query for server state
- Avoid prop drilling beyond 2 levels

## Testing Strategy
- Unit tests for component logic
- Integration tests for user workflows
- Mock external dependencies consistently
- Test accessibility with testing-library
```

#### **Backend Team Focus**
```yaml
# backend-patterns.mdc
---
description: Backend team API and service patterns
globs: "src/api/**/*.{ts,js}"
alwaysApply: false
---

# Backend Development Patterns

## API Design
- Use RESTful conventions consistently
- Include proper HTTP status codes
- Implement request validation with Zod
- Return consistent error response format

## Database Patterns
- Use Prisma for database operations
- Implement proper transaction handling
- Include database migrations for schema changes
- Use connection pooling for performance

## Security Standards
- Validate all inputs at API boundaries
- Use JWT for authentication
- Implement rate limiting on public endpoints
- Log security-relevant events
```

## 🔧 Practical Team Workflows

### **New Team Member Onboarding**

#### **Onboarding Checklist**
```markdown
# New Developer Onboarding

## Day 1: Framework Introduction
- [ ] Clone team repository
- [ ] **CRITICAL**: Install user-rules-template.mdc in Cursor IDE User Rules
- [ ] Read .cursor/rules/project-config.mdc
- [ ] Review .cursor/rules/team-conventions.mdc
- [ ] Understand AI-driven workflow system with epic integration

## Week 1: Hands-On Learning
- [ ] Pair program with team member on small feature
- [ ] Follow team rules for first contribution
- [ ] Ask questions about rule interpretations
- [ ] Attend team rule review meeting

## Week 2: Independent Contribution
- [ ] Take on small epic independently
- [ ] Use team rules to guide development
- [ ] Contribute to rules.mdc when discovering patterns
- [ ] Help onboard next new team member
```

#### **Critical Setup Step**
```bash
# EVERY team member must install user rules template
1. Open .cursor/rules/user-rules-template.mdc
2. Copy entire file content 
3. Cursor IDE → Settings → Features → Rules for AI → User Rules
4. Paste content and save
5. Restart Cursor IDE
6. Test: Ask AI "Help me plan a feature" - should follow Blueprint phase

# Without this step, the framework will not work for that developer
```

#### **Onboarding Support**
```bash
# Team support for new members
1. Assign buddy for first two weeks
2. Verify user-rules-template installation on Day 1
3. Schedule daily 15-minute check-ins
4. Review their first few rule contributions
5. Encourage questions about patterns and decisions
6. Include in team rule discussions immediately
```

### **Rule Review and Evolution**

#### **Monthly Team Rule Review**
```bash
# Team meeting agenda for rule review
1. **Rule Effectiveness** (15 min)
   - Which rules are most helpful?
   - Which rules are ignored or unclear?
   - Any conflicts or contradictions?

2. **New Pattern Identification** (15 min)
   - What patterns emerged this month?
   - Should any become formal rules?
   - Any technology changes affecting rules?

3. **Rule Updates** (15 min)
   - Review proposed rule changes
   - Approve new rules for addition
   - Deprecate outdated rules

4. **Action Items** (5 min)
   - Who will update which rules?
   - When will changes be implemented?
   - Communication plan for rule changes
```

#### **Continuous Rule Improvement**
```bash
# Regular rule maintenance
- Update rules when frameworks change versions
- Remove rules for deprecated technologies
- Consolidate similar or overlapping rules
- Improve rule clarity based on team feedback
- Add examples when team members ask for clarification
```

### **Conflict Resolution**

#### **Handling Rule Disagreements**
```bash
# When team members disagree on rules
1. **Open Discussion**: Let team discuss different approaches
2. **Try Both**: Experiment with alternatives for a sprint
3. **Measure Impact**: Evaluate which approach works better
4. **Team Decision**: Vote or let team lead decide
5. **Document**: Record decision rationale in rule comments
```

#### **Managing Rule Evolution**
```bash
# When rules need significant changes
1. **Propose Changes**: Create draft with rationale
2. **Team Review**: Discuss impact and alternatives
3. **Pilot Period**: Test new rule for 2-3 weeks
4. **Feedback Collection**: Gather team experience
5. **Finalize**: Update rule based on learnings
```

## 🚨 Common Team Challenges

### **Rule Adoption Issues**

#### **Team Members Not Following Rules**
```bash
# Problem: Some developers ignore or forget rules
# Solutions:
1. **Make Rules Visible**: Regular reminders in standups
2. **Make Rules Helpful**: Ensure rules actually improve work
3. **Make Rules Clear**: Improve unclear or confusing rules
4. **Code Review Enforcement**: Include rule compliance in reviews
5. **Lead by Example**: Seniors consistently follow rules
```

#### **Rule Conflicts Between Team Members**
```bash
# Problem: Different preferences for coding patterns
# Solutions:
1. **Team Discussion**: Hash out differences openly
2. **Compromise Solutions**: Find middle ground that works
3. **Majority Rule**: Team votes on preferred approach
4. **Try Both**: Experiment to see what works better
5. **External Input**: Get perspective from other teams
```

### **Coordination Challenges**

#### **Keeping Rules Synchronized**
```bash
# Problem: Team members have different rule versions
# Solutions:
1. **Regular Git Pulls**: Encourage frequent updates
2. **Communication**: Announce rule changes in team chat
3. **Review Process**: Include rule updates in PR reviews
4. **Tool Reminders**: Use Git hooks or CI to catch issues
```

#### **Managing Large Rule Sets**
```bash
# Problem: Too many rules become overwhelming
# Solutions:
1. **Rule Prioritization**: Focus on most important rules
2. **Rule Organization**: Group related rules clearly
3. **Rule Pruning**: Remove unnecessary or outdated rules
4. **Gradual Introduction**: Add new rules slowly
5. **Documentation**: Maintain clear rule documentation
```

## 📞 Realistic Team Integration

### **What the Framework Actually Provides**
- Shared `.mdc` files with consistent rule format
- AI-driven workflow methodology teams can adopt
- Epic planning structure for larger initiatives
- Rule organization patterns that scale with teams

### **What Teams Need to Build**
- Communication processes around rule changes
- Code review practices that include rule compliance
- Meeting cadences for rule review and evolution
- Onboarding processes for new team members

### **Limitations to Acknowledge**
- No automated metric tracking or dashboards
- No built-in conflict resolution mechanisms
- No automatic rule synchronization across team
- No enforcement beyond what Cursor AI provides

---

*Effective team integration with cursor rules is about establishing good processes around shared files and consistent practices, not about sophisticated tooling or automation.* 