# ❓ Frequently Asked Questions (v2)

Common questions about the **Cursor Rule Framework v2** and their answers.

## 🆕 v2 Framework Questions

### **Q: What's the difference between v1 and v2?**
**A:** v2 is a complete evolution with several major improvements:
- **Technology-Agnostic**: Works with any programming language or framework (v1 was ResellWolf-specific)
- **7-Component Epic System**: Comprehensive epic management (v1 had single epics.mdc)
- **Modular Architecture Framework**: Organized architecture with domains, decisions, workflows
- **Enhanced Workflow Integration**: Better coordination between workflow, epics, and architecture
- **Universal Patterns**: Patterns that work across technology stacks
- **Complete Migration Guide**: [v1 → v2 Migration Guide](v1-to-v2-migration.md)

### **Q: Can I use v2 with my existing technology stack?**
**A:** Yes! v2 is designed to be technology-agnostic. It works with:
- **Frontend**: React, Vue.js, Angular, Svelte, vanilla JavaScript, etc.
- **Backend**: Node.js, Python, Java, C#, Go, PHP, Ruby, etc.
- **Mobile**: React Native, Flutter, native iOS/Android
- **Database**: PostgreSQL, MySQL, MongoDB, Redis, any database
- **Languages**: Any programming language

### **Q: How do I migrate from v1 to v2?**
**A:** Follow our comprehensive [v1 → v2 Migration Guide](v1-to-v2-migration.md). The process involves:
1. Directory restructuring to `rule-framework-v2/`
2. Separating technology-specific from universal patterns
3. Epic system upgrade (1 file → 7 component system)
4. Architecture framework migration
5. Technology-agnostic pattern transformation

### **Q: What are the 7 epic management components in v2?**
**A:** The v2 epic system includes:
1. `epic-lifecycle-rules.mdc` - Epic lifecycle automation
2. `epic-active.mdc` - Active epics workspace
3. `epic-planned.mdc` - Planned epics pipeline
4. `epic-completed.mdc` - Completed epics archive
5. `epic-registry.mdc` - Master epic registry
6. `epic-validation-automation.mdc` - Validation automation
7. `epic-architecture-integration.mdc` - Architecture coordination

### **Q: How does the v2 architecture framework work?**
**A:** The v2 architecture framework is modular:
- `architecture/core/patterns.mdc` - Universal patterns (technology-agnostic)
- Custom `.mdc` files in root directory - Technology-specific patterns (React, Node.js, etc.)
- `architecture/decisions/` - ADR management system
- `architecture/workflows/` - Workflow integration patterns
- Automatic coordination with epic system and workflow lifecycle

---

## 🎯 General Framework Questions

Common questions and answers about the Cursor Rule Framework.

## 🚀 Getting Started

### **Q: What is the Cursor Rule Framework?**
**A:** The Cursor Rule Framework is a system for creating structured AI development workflows using cursor rules. It provides a methodology for consistent, AI-driven development with three core components:
- **Rules**: Structured guidelines that AI assistants follow
- **Workflow**: Blueprint → Construct → Validate development phases
- **Epic Planning**: Managing large initiatives with AI assistance

### **Q: Do I need Cursor IDE to use this framework?**
**A:** Yes, the framework is specifically designed for Cursor IDE's rule system. While the concepts could be adapted to other AI assistants, the full functionality requires Cursor IDE and its MDC rule format.

### **Q: What's the difference between this and regular AI coding assistants?**
**A:** Regular AI assistants provide general help without context about your specific project patterns. The Cursor Rule Framework provides:
- **Project-specific context** through rules
- **Consistent patterns** across your team
- **Structured workflow** for complex development
- **Living documentation** that evolves with your code
- **Epic-level planning** for large initiatives

### **Q: How long does it take to set up?**
**A:** Basic setup takes 5-10 minutes. Full team adoption typically takes 2-4 weeks:
- **Day 1**: Install Cursor IDE and copy user rules template
- **Week 1**: Create project-specific rules and architecture documentation
- **Week 2-4**: Team adoption and workflow integration

## 🛠️ Setup and Configuration

### **Q: I copied the user rules template but AI doesn't seem to follow my project rules. Why?**
**A:** Check these common issues:
1. **Rule location**: Ensure rules are in `.cursor/rules/` directory (not root level)
2. **File extension**: Rules must use `.mdc` extension, not `.md`
3. **YAML frontmatter**: Each rule file needs proper metadata header
4. **Cursor restart**: Restart Cursor IDE after adding new rules

### **Q: What's the difference between user rules and project rules?**
**A:** 
- **User rules** (in Cursor settings): Apply to all your projects, contain the framework methodology
- **Project rules** (in `.cursor/rules/`): Specific to one project, contain project patterns and architecture

### **Q: Can I use this framework with an existing project?**
**A:** Yes! See our [Migration Guide](migration-guide.md) for step-by-step instructions. The framework is designed to work with existing codebases and can be adopted gradually.

### **Q: Which files are required in `.cursor/rules/`?**
**A:** Core required files:
- `cursor-rules-management.mdc` - Rule management policies
- `project-config.mdc` - Project configuration and tech stack
- `workflow-state.mdc` - Development workflow state
- `epics.mdc` - Epic planning and tracking
- `architecture.mdc` - Architecture documentation and decisions

Optional but recommended:
- Technology-specific rule files (e.g., `react-patterns.mdc`)
- Domain-specific rules (e.g., `authentication.mdc`)

## 📋 Workflow System

### **Q: Do I have to use the Blueprint → Construct → Validate workflow for every small change?**
**A:** No. Use the full workflow for:
- **New features** (any size)
- **Architectural changes**
- **Complex bug fixes**
- **Epic-related work**

For simple bug fixes or typos, you can work directly without the formal workflow.

### **Q: What if I need to change the plan during the Construct phase?**
**A:** Minor adjustments are fine, but for major changes:
1. **Return to Blueprint phase**
2. **Update the plan** with the new approach
3. **Get approval** if working with a team
4. **Continue with Construct** using the updated plan

### **Q: The AI isn't following the workflow phases. What should I do?**
**A:** Ensure you have the user rules template installed correctly. The workflow behavior comes from the user rules, not project rules. If it's still not working:
1. Check Cursor IDE rule settings
2. Restart Cursor IDE
3. Try explicit phase commands: "Enter Blueprint phase for user authentication feature"

### **Q: How do I know when to move between workflow phases?**
**A:** 
- **Blueprint → Construct**: When you have a detailed, approved plan
- **Construct → Validate**: When implementation is complete according to the plan
- **Validate → Complete**: When all tests pass and quality gates are met
- **Any phase → Blueprint**: When you discover the current approach won't work

## 📈 Epic Planning

### **Q: What's the difference between epics, phases, and steps?**
**A:**
- **Epic**: Large initiative (e.g., "User Management System")
- **Phase**: Major milestone within an epic (e.g., "Authentication Implementation")
- **Step**: Individual feature within a phase (e.g., "Login Component")

### **Q: How many epics should I have active at once?**
**A:** Maximum 3 active epics. This keeps AI context manageable and ensures focused development. Archive completed epics older than 6 months.

### **Q: Can I work on something that's not part of an epic?**
**A:** Yes! Not all work needs to be epic-related. Use epics for:
- **Large features** that take weeks/months
- **Major architectural changes**
- **Cross-team initiatives**

Standalone work like bug fixes, small improvements, or experimental features doesn't need epic context.

### **Q: How does epic progress get updated?**
**A:** Epic progress updates happen automatically:
1. **During workflow completion**: AI updates epic step status when workflow finishes
2. **Manual updates**: You can manually update progress: "Update login component progress to 75%"
3. **Natural language**: Tell AI about progress and it updates the epic

### **Q: What if my epic scope changes significantly?**
**A:** Update the epic structure:
1. **Add new phases/steps** as needed
2. **Remove or modify** outdated steps
3. **Update epic goal** if the objective changed
4. **Document** the scope change in epic notes

## 🏗️ Architecture Integration

### **Q: What's architecture.mdc and why is it important?**
**A:** Architecture.mdc is your living architecture documentation. It:
- **Guides AI decisions** during development
- **Maintains consistency** across your codebase
- **Documents patterns** automatically as you build
- **Prevents architectural drift**
- **Helps onboard** new team members

### **Q: Do I need to manually update architecture.mdc?**
**A:** No! The AI updates it automatically during the Construct phase. You should:
- **Review changes** periodically
- **Approve major** architectural decisions
- **Resolve conflicts** if multiple people update simultaneously

### **Q: What if my current architecture is messy or inconsistent?**
**A:** Start by documenting the current state honestly:
1. **Document what exists** (even if it's inconsistent)
2. **Plan improvements** as separate epics
3. **Evolve gradually** rather than trying to fix everything at once
4. **Use the framework** to guide improvements over time

### **Q: How do I handle architecture conflicts between team members?**
**A:** Architecture.mdc includes a collaboration protocol:
1. **Timestamp-based conflict resolution** (latest wins)
2. **Clear change attribution** (AI vs User updates)
3. **Regular architecture reviews** to align the team
4. **Document disagreements** as ADRs (Architecture Decision Records)

## 👥 Team Collaboration

### **Q: How do multiple developers use the same rules?**
**A:** Rules are stored in your project repository (`.cursor/rules/`), so they're shared through version control:
- **Commit rule changes** to your repository
- **Pull updates** from teammates
- **Merge conflicts** are handled like any other file
- **Everyone gets the same** rule context

### **Q: What if team members have different rule preferences?**
**A:** Focus on team consistency over individual preferences:
- **Team rules** (in `.cursor/rules/`) apply to everyone
- **Individual preferences** can be in personal user rules
- **Discuss and agree** on team patterns
- **Update rules** based on team feedback

### **Q: How do we handle rule updates and improvements?**
**A:** Treat rules like code:
- **Propose changes** through pull requests
- **Test rule changes** before committing
- **Document rule evolution** in commit messages
- **Regular rule reviews** in team meetings

### **Q: What about onboarding new team members?**
**A:** The framework significantly improves onboarding:
1. **New team members** get instant context through rules
2. **Architecture documentation** provides system overview
3. **Epic tracking** shows current work and priorities
4. **Consistent patterns** reduce learning curve

## 🐛 Troubleshooting

### **Q: AI is not following my rules. What's wrong?**
**A:** Check in order:
1. **File location**: Rules in `.cursor/rules/` not root directory?
2. **File extension**: Using `.mdc` not `.md`?
3. **YAML frontmatter**: Proper metadata header?
4. **Cursor restart**: Restart IDE after rule changes
5. **Rule clarity**: Is the rule specific enough?

### **Q: Workflow state seems stuck or corrupted. How do I reset it?**
**A:** Reset workflow state:
```bash
# Clear current state
echo '## State
Phase: READY
Status: READY
CurrentItem: None

## Plan
[No active plan]

## Items
| id | description | status |
|----|-------|------|

## Log
[Workflow log will appear here]' > .cursor/rules/workflow-state.mdc
```

### **Q: Epic progress isn't updating automatically. Why?**
**A:** Check these conditions:
1. **Epic reference set**: Is `EpicReference` set in workflow state?
2. **Epic exists**: Does the referenced epic exist in epics.mdc?
3. **Step matches**: Does the workflow item match an epic step?
4. **Workflow completion**: Did you complete the Validate phase?

### **Q: Architecture.mdc is not being updated during development. What's missing?**
**A:** Ensure:
1. **User rules template** is correctly installed
2. **Workflow phases** are being used (not direct implementation)
3. **Architecture changes** are actually being made
4. **RULE_ARCHITECTURE_UPDATE_01** is active in workflow-state.mdc

## 🎯 Best Practices

### **Q: What's the most important thing for framework success?**
**A:** **Consistency**. The framework's value comes from:
- **Everyone using** the same patterns
- **Regular workflow usage** for all significant development
- **Keeping documentation current** (which happens automatically)
- **Team commitment** to the methodology

### **Q: How specific should rules be?**
**A:** Be as specific as helpful, but not overly restrictive:
- **Good**: "Use React functional components with TypeScript interfaces for props"
- **Too vague**: "Write good React code"
- **Too specific**: "All button components must have exactly 3 props named 'text', 'onClick', and 'variant'"

### **Q: Should we create rules for everything?**
**A:** No. Focus on rules that:
- **Solve real problems** your team faces
- **Improve consistency** across the codebase
- **Capture important patterns** unique to your project
- **Save time** on repetitive decisions

Avoid rules for things that are already well-established or obvious.

### **Q: How often should we review and update our rules?**
**A:** Suggested schedule:
- **Weekly**: Quick review of rule effectiveness
- **Monthly**: Detailed rule review and improvements
- **Quarterly**: Major rule restructuring if needed
- **As needed**: When new patterns emerge or problems arise

## 💡 Advanced Usage

### **Q: Can I use this framework for non-web development?**
**A:** Yes! The framework is technology-agnostic. Create rules for:
- **Mobile development** (React Native, Flutter)
- **Backend services** (any language/framework)
- **DevOps and infrastructure** (Docker, Kubernetes)
- **Data science** (Python, R, Jupyter)

### **Q: How do I customize the workflow for my team's needs?**
**A:** The three-phase workflow is core to the framework, but you can:
- **Add sub-phases** within each phase
- **Customize validation criteria** in the Validate phase
- **Add team-specific rules** for each phase
- **Create custom epic templates** for different work types

### **Q: Can I integrate this with external tools?**
**A:** The framework uses standard files (markdown, YAML) that can be integrated with:
- **Project management tools** (parse epics for roadmap tracking)
- **Documentation systems** (include architecture.mdc in docs)
- **CI/CD pipelines** (validate rule compliance)
- **Analytics tools** (track epic completion rates)

---

**Still have questions?** Check our [Troubleshooting Guide](troubleshooting.md) or join the community discussions! 