# 🧪 Rule Testing Guide

This guide explains how to validate and test your cursor rules to ensure they work effectively with AI assistants and improve development productivity.

## 🎯 Testing Philosophy

Rule testing in the Cursor Rule Framework focuses on:
- **Behavioral Validation**: Does the AI follow the rule correctly?
- **Productivity Impact**: Does the rule improve development efficiency?
- **Integration Testing**: Do rules work well together?
- **Real-World Validation**: Testing with actual development scenarios

## 🔬 Types of Rule Testing

### **1. Behavioral Testing**
Verify that AI assistants correctly interpret and follow your rules.

#### **Test Structure**
```bash
# Test: AI follows component naming rules
# Rule: React components must use PascalCase
# Expected: AI suggests "UserProfile.tsx" not "userProfile.tsx"

# Prompt for testing
"Create a new React component for displaying user profile information"

# Expected AI Response Indicators:
✅ Suggests "UserProfile.tsx" filename
✅ Uses PascalCase for component name
✅ Follows established component structure
✅ References the naming rule in explanation

# Failure Indicators:
❌ Suggests camelCase or kebab-case naming
❌ Doesn't mention naming conventions
❌ Ignores component structure rules
```

### **2. Workflow Integration Testing**
Test rules within the three-phase workflow system.

#### **Blueprint Phase Testing**
```bash
# Test: Architecture rule integration in planning
# Rule: All API endpoints must follow REST conventions

# Test Prompt:
"Plan a user management API endpoint for creating users"

# Expected AI Behavior:
✅ Reviews architecture.mdc for existing API patterns
✅ Plans RESTful endpoint (POST /api/users)
✅ Includes proper HTTP status codes
✅ Plans validation and error handling
✅ References architectural constraints

# Test Command:
"Follow the blueprint → construct → validate workflow for this API endpoint"
```

#### **Construct Phase Testing**
```bash
# Test: Rule adherence during implementation
# Expected AI Behavior:
✅ Implements exactly what was planned
✅ Follows coding standards from rules
✅ Updates architecture.mdc if new patterns emerge
✅ Maintains epic progress if applicable
```

#### **Validate Phase Testing**
```bash
# Test: Quality gate enforcement
# Expected AI Behavior:
✅ Runs tests specified in project-config.mdc
✅ Validates against architectural rules
✅ Checks coding standards compliance
✅ Updates documentation if required
```

### **3. Epic Integration Testing**
Test rules work correctly with epic planning and tracking.

#### **Epic Context Testing**
```bash
# Test: Rules consider epic context
# Setup: Active epic for user authentication

# Test Prompt:
"Work on the login component from the user authentication epic"

# Expected AI Behavior:
✅ References epic requirements and acceptance criteria
✅ Applies relevant rules based on epic context
✅ Updates epic progress upon completion
✅ Maintains consistency with epic architecture decisions
```

### **4. Rule Interaction Testing**
Test how multiple rules work together.

#### **Rule Precedence Testing**
```bash
# Test: Global vs domain-specific rule interaction
# Global rule: "Use TypeScript for all code"
# Frontend rule: "React components must have .tsx extension"

# Test Prompt:
"Create a React component"

# Expected AI Behavior:
✅ Uses .tsx extension (domain-specific rule)
✅ Implements in TypeScript (global rule)
✅ No conflicting behavior
✅ Mentions both rules when relevant
```

## 🛠️ Testing Methodology

### **1. Create Test Scenarios**

#### **Scenario-Based Testing**
```markdown
## Test Scenario: Database Rule Compliance

### Context
- Project uses Prisma ORM
- Rule: All database queries must use repository pattern
- Rule: Include error handling for all database operations

### Test Cases

#### Test Case 1: Basic CRUD Operation
**Prompt**: "Create a function to fetch user by ID"
**Expected**: Repository pattern, error handling, TypeScript types

#### Test Case 2: Complex Query
**Prompt**: "Create a function to search users with filters"
**Expected**: Repository pattern, pagination, validation, error handling

#### Test Case 3: Transaction Handling
**Prompt**: "Create a function to transfer points between users"
**Expected**: Repository pattern, transaction handling, rollback logic
```

### **2. Systematic Testing Process**

#### **Testing Workflow**
```bash
# Step 1: Prepare Test Environment
# - Clean cursor session
# - Load specific rule set
# - Prepare test project context

# Step 2: Execute Test Scenarios
# - Run standardized prompts
# - Document AI responses
# - Note adherence to rules

# Step 3: Evaluate Results
# - Compare against expected behavior
# - Identify rule gaps or conflicts
# - Document improvement areas

# Step 4: Iterate and Improve
# - Update rules based on findings
# - Re-test improved rules
# - Document changes and rationale
```

### **3. Rule Effectiveness Metrics**

#### **Quantitative Metrics**
```markdown
## Rule Effectiveness Scorecard

### Adherence Rate
- Rule followed correctly: X/Y test cases
- Partial adherence: X/Y test cases  
- Rule ignored: X/Y test cases

### Productivity Impact
- Time saved per development task
- Consistency improvement (subjective 1-10)
- Reduction in code review feedback

### Integration Success
- Works with workflow system: ✅/❌
- Works with epic planning: ✅/❌
- No conflicts with other rules: ✅/❌
```

## 🧪 Testing Tools and Techniques

### **1. Rule Test Templates**

#### **Basic Rule Test Template**
```markdown
## Rule Test: [RULE_NAME]

### Rule Description
[Brief description of what the rule should accomplish]

### Test Environment
- Project type: [frontend/backend/fullstack]
- Technology stack: [specific technologies]
- Other active rules: [list relevant rules]

### Test Cases

#### Test Case 1: [SCENARIO_NAME]
**Prompt**: "[Exact prompt used for testing]"
**Expected Behavior**:
- [ ] Specific behavior 1
- [ ] Specific behavior 2
- [ ] Specific behavior 3

**Actual Result**: [Document what actually happened]
**Status**: ✅ Pass / ⚠️ Partial / ❌ Fail
**Notes**: [Any observations or improvements needed]

#### Test Case 2: [SCENARIO_NAME]
[Repeat pattern...]

### Overall Assessment
**Rule Effectiveness**: [1-10 score]
**Recommended Actions**: [Improvements needed]
**Test Date**: [Date]
**Tester**: [Name]
```

### **2. Automated Testing Approaches**

#### **Rule Validation Script**
```bash
# Create a simple test runner for rule validation
# This tests if rules are properly formatted and loaded

# Test script example:
cat > test-rules.sh << 'EOF'
#!/bin/bash

echo "Testing Cursor Rule Framework rules..."

# Test 1: Check rule files exist
echo "✅ Checking rule files..."
if [ ! -f ".cursor/rules/project-config.mdc" ]; then
    echo "❌ project-config.mdc missing"
    exit 1
fi

# Test 2: Validate YAML frontmatter
echo "✅ Validating YAML frontmatter..."
for file in .cursor/rules/*.mdc; do
    if ! head -n 10 "$file" | grep -q "^---$"; then
        echo "❌ Invalid frontmatter in $file"
        exit 1
    fi
done

# Test 3: Check for required fields
echo "✅ Checking required fields..."
for file in .cursor/rules/*.mdc; do
    if ! grep -q "description:" "$file"; then
        echo "❌ Missing description in $file"
        exit 1
    fi
done

echo "✅ All rule validation tests passed!"
EOF

chmod +x test-rules.sh
./test-rules.sh
```

### **3. Real-World Testing**

#### **Production Testing Protocol**
```bash
# Test rules in real development scenarios

# 1. Use rules for actual feature development
"Implement user authentication using our established patterns"

# 2. Track AI behavior over multiple interactions
# - Does consistency improve over time?
# - Are patterns correctly reused?
# - Do rules prevent common mistakes?

# 3. Measure team adoption
# - Do team members report improved AI interactions?
# - Are code reviews finding fewer pattern violations?
# - Is development velocity improving?
```

## 📊 Testing Examples

### **Example 1: Frontend Component Rule Testing**

#### **Rule Under Test**
```yaml
---
description: React component development standards with TypeScript and testing
globs: "src/components/**/*.{tsx,ts}"
alwaysApply: false
---

# React Component Standards
- Use functional components with TypeScript
- Include prop interface definitions
- Add unit tests for all components
- Follow naming convention: PascalCase
```

#### **Test Execution**
```bash
# Test Case: Component Creation
Prompt: "Create a UserCard component that displays user name and email"

# Expected AI Response Checklist:
✅ Creates UserCard.tsx (correct naming)
✅ Uses functional component pattern
✅ Defines props interface (UserCardProps)
✅ Includes TypeScript types
✅ Creates UserCard.test.tsx
✅ Includes basic rendering test
✅ Uses proper import/export structure

# Actual Result Documentation:
✅ All behaviors observed correctly
⚠️ AI didn't automatically create test file (needs rule enhancement)
✅ TypeScript interfaces properly defined
✅ Naming conventions followed
```

### **Example 2: API Development Rule Testing**

#### **Rule Under Test**
```yaml
---
description: API endpoint development with error handling and validation
globs: "src/api/**/*.ts"
alwaysApply: true
---

# API Development Standards
- Use Express.js patterns
- Include request validation with Zod
- Implement proper error handling
- Return consistent response format
- Include OpenAPI documentation
```

#### **Test Execution**
```bash
# Test Case: CRUD Endpoint Creation
Prompt: "Create an API endpoint for creating new blog posts"

# Expected AI Response Checklist:
✅ Uses Express.js router pattern
✅ Includes Zod validation schema
✅ Implements try-catch error handling
✅ Returns consistent JSON response format
✅ Includes basic OpenAPI comments
✅ Follows RESTful conventions (POST /api/posts)

# Actual Result Documentation:
✅ Express pattern correctly implemented
✅ Zod validation included
❌ Error handling was basic, needs improvement
✅ Response format consistent
⚠️ OpenAPI comments minimal (needs rule clarification)
```

## 🎯 Best Practices for Rule Testing

### **1. Test Early and Often**
- Test rules as you create them
- Include testing in rule development workflow
- Regular regression testing for existing rules

### **2. Use Real Development Scenarios**
- Test with actual project requirements
- Include edge cases and complex scenarios
- Test rule combinations, not just individual rules

### **3. Document Everything**
- Keep test results for rule improvement
- Share findings with team
- Track rule effectiveness over time

### **4. Iterate Based on Results**
- Update rules based on test findings
- Remove or modify ineffective rules
- Continuously improve rule clarity and specificity

### **5. Team-Based Testing**
- Have multiple team members test the same rules
- Compare results and experiences
- Ensure rules work across different development styles

## 🚀 Advanced Testing Techniques

### **A/B Testing for Rules**
```bash
# Compare rule variations to find most effective version

# Version A: Specific rule
"Use React.useState for component state management"

# Version B: General rule  
"Manage component state appropriately"

# Test both versions with same prompts
# Measure specificity and consistency of AI responses
# Choose version that produces better results
```

### **Integration Testing with Workflow**
```bash
# Test complete workflow with rules
# Blueprint → Construct → Validate cycle
# Ensure rules work at each phase
# Verify epic integration functions correctly
# Test architecture.mdc updates work properly
```

### **Performance Impact Testing**
```bash
# Measure rule impact on development velocity
# Time common development tasks with and without rules
# Measure code quality improvements
# Track reduction in debugging time
# Monitor team satisfaction with AI interactions
```

---

**Rule testing ensures your Cursor Rule Framework implementation provides consistent, high-quality AI assistance that truly improves development productivity.** 