# 🚨 Troubleshooting Guide

This guide helps you diagnose and resolve common issues when using the Cursor Rule Framework for AI-assisted development.

## 🎯 Quick Diagnosis

### **Framework Not Working?**
```bash
# Quick health check
1. ✅ Cursor IDE recognizing .cursor/rules/ directory?
2. ✅ Rules files have .mdc extension?
3. ✅ Proper YAML frontmatter in rules?
4. ✅ workflow-state.mdc exists and is accessible?
5. ✅ No syntax errors in rule files?

# If any fail, see detailed sections below
```

### **AI Not Following Rules?**
```bash
# Common causes and fixes
1. 🔍 Check rule scope with `globs` patterns
2. 🔍 Verify `alwaysApply` settings
3. 🔍 Ensure rule content is clear and specific
4. 🔍 Check for conflicting rules
5. 🔍 Verify file extensions match rule patterns
```

## 🔧 Framework Setup Issues

### **User Rules Template Not Installed** ⚠️ **CRITICAL**

#### **Symptoms**
- AI doesn't follow workflow system (Blueprint → Construct → Validate with epic integration)
- No workflow state management
- AI doesn't ask for plan approval
- Framework seems completely non-functional

#### **Root Cause**
The `user-rules-template.mdc` contains the core workflow instructions that must be installed in Cursor IDE's User Rules settings. Without this, the framework cannot function.

#### **Solution**
```bash
# 1. Open the template file
code .cursor/rules/user-rules-template.mdc

# 2. Copy ALL content (Ctrl+A, Ctrl+C)

# 3. In Cursor IDE:
#    Settings → Features → Rules for AI → User Rules
#    Paste the entire content there

# 4. Restart Cursor IDE to ensure rules are loaded

# 5. Test the setup
# Ask AI: "Help me plan a new feature following our workflow"
# AI should respond with Blueprint phase planning
```

#### **Verification**
```bash
# The AI should now:
✅ Ask for plan approval before implementing
✅ Follow Blueprint → Construct → Validate phases with epic context  
✅ Update workflow-state.mdc automatically
✅ Reference epics and architecture rules
✅ Maintain detailed logs of progress

# If these behaviors are missing, the user rules are not properly installed
```

### **Cursor IDE Not Recognizing Rules**

#### **Symptoms**
- AI doesn't seem to follow any rules
- No context awareness of project patterns
- Cursor IDE doesn't show rule indicators

#### **Diagnosis Steps**
```bash
# 1. Check directory structure
ls -la .cursor/rules/

# Should show:
# - cursor-rules-management.mdc
# - project-config.mdc
# - workflow-state.mdc
# - epics.mdc
# - rules.mdc

# 2. Verify file extensions
find .cursor/rules/ -name "*.mdc" | head -5

# 3. Check YAML frontmatter
head -10 .cursor/rules/project-config.mdc
# Should start with ---
# description: ...
# globs: ...
# ---
```

#### **Solutions**
```bash
# Fix 1: Ensure proper file extensions
mv .cursor/rules/project-config.md .cursor/rules/project-config.mdc

# Fix 2: Add missing YAML frontmatter
cat > .cursor/rules/example.mdc << 'EOF'
---
description: Example rule description
globs: "**/*.*"
alwaysApply: false
---

# Your rule content here
EOF

# Fix 3: Restart Cursor IDE
# Close and reopen Cursor to refresh rule detection
```

### **Rule Validation Errors**

#### **Symptoms**
- Cursor shows rule parsing errors
- Rules appear to be ignored
- Inconsistent AI behavior

#### **Common YAML Issues**
```yaml
# ❌ Invalid YAML
---
description: Missing quotes for complex strings
globs: src/**/*.{ts,tsx} # Invalid glob syntax
alwaysApply: yes # Should be boolean true/false
---

# ✅ Valid YAML
---
description: "Proper string quoting when needed"
globs: "src/**/*.{ts,tsx}"
alwaysApply: true
---
```

#### **Validation Script**
```bash
# Create rule validator
cat > scripts/validate-rules.js << 'EOF'
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

function validateRule(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const parts = content.split('---')
    
    if (parts.length < 3) {
      throw new Error('Missing YAML frontmatter')
    }
    
    const yamlContent = parts[1]
    const parsed = yaml.load(yamlContent)
    
    // Validate required fields
    if (!parsed.description) {
      throw new Error('Missing description field')
    }
    
    if (!parsed.globs) {
      throw new Error('Missing globs field')
    }
    
    if (typeof parsed.alwaysApply !== 'boolean') {
      throw new Error('alwaysApply must be boolean')
    }
    
    console.log(`✅ ${filePath} is valid`)
    return true
  } catch (error) {
    console.log(`❌ ${filePath}: ${error.message}`)
    return false
  }
}

// Validate all rule files
const rulesDir = '.cursor/rules'
const files = fs.readdirSync(rulesDir)
  .filter(file => file.endsWith('.mdc'))
  .map(file => path.join(rulesDir, file))

const results = files.map(validateRule)
const valid = results.filter(Boolean).length
const total = results.length

console.log(`\nValidation complete: ${valid}/${total} rules valid`)
EOF

node scripts/validate-rules.js
```

## 📋 Workflow System Issues

### **Workflow State Problems**

#### **Symptoms**
- AI doesn't follow workflow system
- State transitions seem broken
- Progress tracking inconsistent

#### **Debug Workflow State**
```bash
# Check current workflow state
cat .cursor/rules/workflow-state.mdc

# Look for these sections:
# ## State
# ## Plan  
# ## Rules
# ## Items
# ## Log
# ## ArchiveLog
```

#### **Common State Issues**
```markdown
# ❌ Invalid state format
## State
Phase: BLUEPRINT  
Status: IN_PROGRESS
CurrentItem: User Authentication

# ✅ Correct state format
## State
**Phase**: BLUEPRINT  
**Status**: IN_PROGRESS  
**CurrentItem**: User Authentication
```

#### **Fix Workflow State**
```bash
# Reset workflow state to clean template
cat > .cursor/rules/workflow-state.mdc << 'EOF'
---
description: Development workflow state and progress tracking
globs: "**/*.*"
alwaysApply: true
---

# Workflow State

## State
**Phase**: READY
**Status**: READY
**CurrentItem**: None

## Plan
[No active plan]

## Rules
[No additional rules]

## Items
[No active items]

## Log
[No activity]

## ArchiveLog
[No archived items]
EOF
```

### **Phase Transition Problems**

#### **Symptoms**
- AI skips Blueprint phase
- Moves to Validate without completing Construct
- Doesn't ask for plan approval

#### **Diagnosis**
```bash
# Check for phase transition rules
grep -n "BLUEPRINT\|CONSTRUCT\|VALIDATE" .cursor/rules/*.mdc

# Look for workflow rules in project-config.mdc
grep -A 10 -B 5 "workflow" .cursor/rules/project-config.mdc
```

#### **Solution**
```bash
# Explicitly set workflow phase
# In conversation with AI:
"Please switch to BLUEPRINT phase and plan the user authentication feature before implementing anything."

# Or update workflow-state.mdc manually:
sed -i 's/Phase**: .*/Phase**: BLUEPRINT/' .cursor/rules/workflow-state.mdc
```

## 🎭 Rule Conflicts and Precedence

### **Conflicting Rules**

#### **Symptoms**
- AI behavior is inconsistent
- Rules seem to contradict each other
- Some rules are ignored

#### **Identify Conflicts**
```bash
# Find overlapping rule patterns
grep -h "globs:" .cursor/rules/*.mdc | sort | uniq -c | sort -nr

# Check for conflicting always-apply rules
grep -l "alwaysApply: true" .cursor/rules/*.mdc

# Look for duplicate rule content
for rule in .cursor/rules/*.mdc; do
  echo "=== $rule ==="
  grep -A 5 -B 5 "## Requirements\|## Standards" "$rule"
done
```

#### **Resolution Strategy**
```markdown
# Rule precedence (highest to lowest):
1. **alwaysApply: true** rules
2. **Specific glob patterns** (e.g., "src/components/**/*.tsx")
3. **General glob patterns** (e.g., "**/*.ts")
4. **File-specific rules** (based on current file)

# Conflict resolution:
1. Make rules more specific
2. Use different glob patterns
3. Consolidate similar rules
4. Remove duplicate requirements
```

### **Rule Scope Issues**

#### **Symptoms**
- Rules applied to wrong files
- Some files not getting expected rules
- Inconsistent rule application

#### **Debug Glob Patterns**
```bash
# Test glob patterns
npm install -g glob

# Test your glob pattern
glob "src/components/**/*.{tsx,jsx}" --cwd .

# Common glob issues:
# ❌ "src/components/**/*.tsx,jsx"     # Missing braces
# ❌ "**/*.{ts, tsx}"                  # Space in braces
# ✅ "src/components/**/*.{tsx,jsx}"   # Correct format
```

#### **Fix Glob Patterns**
```yaml
# ✅ Common useful patterns
globs: "**/*.*"                    # All files
globs: "src/**/*.{ts,tsx}"         # TypeScript/React files
globs: "src/components/**/*.tsx"   # React components only
globs: "**/*.{test,spec}.{ts,js}"  # Test files
globs: "docs/**/*.md"              # Documentation files
```

## 🤖 AI Behavior Issues

### **AI Not Following Instructions**

#### **Symptoms**
- AI ignores project patterns
- Doesn't follow coding standards
- Skips required steps

#### **Debugging Steps**
```bash
# 1. Check rule clarity
# Review rule content for:
# - Vague language
# - Missing examples
# - Unclear requirements

# 2. Verify rule context
# Ensure AI has access to relevant rules:
grep -n "description:" .cursor/rules/*.mdc

# 3. Test rule isolation
# Temporarily disable other rules to test specific rule
```

#### **Improve Rule Effectiveness**
```markdown
# ❌ Vague rule
Use good coding practices and follow the patterns.

# ✅ Specific rule
## Requirements
- All React components must include TypeScript interfaces
- Component names must be PascalCase
- Props interface must be named ComponentNameProps
- Default export the main component

## Examples
```typescript
// ✅ Correct
interface UserProfileProps {
  userId: string
  onUpdate?: (user: User) => void
}

export function UserProfile({ userId, onUpdate }: UserProfileProps) {
  // Implementation
}

export default UserProfile
```
```

### **AI Generating Low-Quality Code**

#### **Symptoms**
- Code doesn't follow team standards
- Missing error handling
- Poor test coverage
- Inconsistent patterns

#### **Quality Improvement Strategy**
```bash
# 1. Add quality gates to rules
# Update rules.mdc with quality requirements:

## Code Quality Standards
- **Error Handling**: All functions must handle errors gracefully
- **Testing**: Unit tests required for business logic
- **TypeScript**: Strict mode compliance required
- **Performance**: No obvious performance anti-patterns

# 2. Include examples in rules
# Show good and bad examples for each pattern

# 3. Request specific validation
# Ask AI to validate code against specific criteria
```

## 📊 Performance Issues

### **Slow AI Responses**

#### **Symptoms**
- Long delays before AI responds
- Timeouts during code generation
- Incomplete responses

#### **Optimization Strategies**
```bash
# 1. Reduce rule complexity
# Simplify rule content and remove unnecessary details

# 2. Optimize glob patterns
# Use more specific patterns to reduce file scanning:
# ❌ "**/*.*" (scans everything)
# ✅ "src/**/*.{ts,tsx}" (scans only relevant files)

# 3. Split large rules
# Break complex rules into smaller, focused rules

# 4. Use conditional rules
# Set alwaysApply: false for context-specific rules
```

### **Memory Usage Issues**

#### **Symptoms**
- Cursor IDE becomes sluggish
- High memory usage
- Occasional crashes

#### **Memory Optimization**
```bash
# 1. Rule file size audit
du -h .cursor/rules/*.mdc | sort -hr

# If any rule file > 100KB, consider splitting

# 2. Clean up archived logs
# Truncate large archive logs in workflow-state.mdc

# 3. Remove unused rules
# Archive or delete rules that are no longer needed

# 4. Optimize rule content
# Remove redundant examples and verbose descriptions
```

## 🔄 Integration Issues

### **Git Integration Problems**

#### **Symptoms**
- Rule changes not versioned properly
- Team members have different rules
- Merge conflicts in rule files

#### **Git Setup for Rules**
```bash
# 1. Ensure rules are tracked
git add .cursor/rules/*.mdc
git commit -m "Add cursor rules"

# 2. Set up .gitignore exclusions
echo '# Exclude temporary rule files' >> .gitignore
echo '.cursor/rules/.tmp*' >> .gitignore
echo '.cursor/rules/local-*' >> .gitignore

# 3. Handle workflow state carefully
# Consider whether to track workflow-state.mdc or not
# For teams: track structure, not current state
# For individuals: track everything
```

### **IDE Integration Issues**

#### **Symptoms**
- Rules not applying in specific scenarios
- IDE extensions conflicting
- Inconsistent behavior across team

#### **IDE Configuration**
```json
// .vscode/settings.json
{
  "cursor.rules.enabled": true,
  "cursor.rules.autoApply": true,
  "cursor.rules.directory": ".cursor/rules",
  "files.associations": {
    "*.mdc": "markdown"
  },
  "files.exclude": {
    ".cursor/rules/.tmp*": true
  }
}
```

## 🧪 Testing and Validation

### **Rule Testing Strategy**

#### **Create Test Scenarios**
```bash
# Create test cases for rules
mkdir tests/rule-validation

cat > tests/rule-validation/component-test.tsx << 'EOF'
// Test case for React component rules
// This should trigger component naming and structure rules

// ❌ This should be flagged by rules
export function badComponent(props) {
  return <div>{props.text}</div>
}

// ✅ This should pass rules
interface GoodComponentProps {
  text: string
}

export function GoodComponent({ text }: GoodComponentProps) {
  return <div>{text}</div>
}
EOF

# Test AI behavior with these files
# Ask AI to review and fix the bad examples
```

#### **Automated Rule Validation**
```bash
# Create validation script
cat > scripts/test-rules.sh << 'EOF'
#!/bin/bash

echo "Testing rule application..."

# Test each rule file exists and is valid
for rule in .cursor/rules/*.mdc; do
  if [[ -f "$rule" ]]; then
    echo "✅ Found $rule"
  else
    echo "❌ Missing $rule"
  fi
done

# Test AI recognition (requires manual verification)
echo "Test AI rule recognition by asking:"
echo "1. 'What coding standards should I follow?'"
echo "2. 'What is our workflow process?'"
echo "3. 'How should I structure React components?'"

EOF

chmod +x scripts/test-rules.sh
./scripts/test-rules.sh
```

## 📞 Getting Help

### **When to Seek Help**

#### **Community Support**
- Check [GitHub Issues](https://github.com/your-repo/cursor-rule-framework/issues)
- Search [Discussions](https://github.com/your-repo/cursor-rule-framework/discussions)
- Ask questions with detailed context

#### **Issue Reporting Template**
```markdown
**Issue Description**
Brief description of the problem

**Environment**
- Cursor IDE version: [version]
- Operating system: [OS]
- Framework version: [version]

**Current Behavior**
What's happening now

**Expected Behavior** 
What should happen

**Rule Configuration**
```yaml
# Include relevant rule content
```

**Steps to Reproduce**
1. Step one
2. Step two
3. Issue occurs

**Additional Context**
Any other relevant information
```

### **Escalation Path**
1. **Self-diagnosis**: Use this troubleshooting guide
2. **Documentation**: Check [docs/](../README.md) for guides
3. **Community**: Search and post in discussions
4. **Issues**: Create detailed issue report
5. **Team**: Consult with team leads or architects

---

*Most issues can be resolved by checking rule syntax, verifying file organization, and ensuring clear, specific rule content. When in doubt, start simple and add complexity gradually.* 