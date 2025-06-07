# 🎯 Cursor Rule Framework Examples

This directory contains real-world examples demonstrating how to use the Cursor Rule Framework across different project types, technology stacks, and team sizes.

## 📚 Available Examples

### 🖥️ **Frontend Projects**

#### [React TypeScript App](./frontend-react-typescript/)
A complete React application with TypeScript, showcasing:
- Component development rules
- State management patterns
- Testing strategies
- Build optimization
- **Tech Stack**: React 18, TypeScript, Vite, Vitest, ESLint

#### [Vue.js Composition API](./frontend-vue-composition/)
Modern Vue.js application using Composition API:
- Vue 3 component patterns
- Composable development
- Pinia state management
- TypeScript integration
- **Tech Stack**: Vue 3, TypeScript, Vite, Pinia, Vitest

#### [Next.js Full-Stack](./frontend-nextjs-fullstack/)
Next.js application with API routes and database:
- App Router patterns
- Server Components
- API development
- Database integration
- **Tech Stack**: Next.js 14, TypeScript, Prisma, tRPC

### 🔧 **Backend Projects**

#### [Node.js Express API](./backend-nodejs-express/)
RESTful API with Express and TypeScript:
- REST API design patterns
- Middleware development
- Authentication & authorization
- Database integration
- **Tech Stack**: Node.js, Express, TypeScript, PostgreSQL, Prisma

#### [Python FastAPI](./backend-python-fastapi/)
Modern Python API with FastAPI:
- Async API development
- Pydantic models
- Database migrations
- Background tasks
- **Tech Stack**: Python, FastAPI, SQLAlchemy, PostgreSQL, Redis

#### [Encore.ts Microservices](./backend-encore-microservices/)
Microservices architecture with Encore.ts:
- Service design patterns
- Inter-service communication
- Database per service
- Event-driven architecture
- **Tech Stack**: Encore.ts, TypeScript, PostgreSQL, Redis

### 🚀 **Full-Stack Applications**

#### [E-Commerce Platform](./fullstack-ecommerce/)
Complete e-commerce solution:
- User authentication
- Product catalog
- Shopping cart
- Payment processing
- Admin dashboard
- **Tech Stack**: Next.js, Node.js, PostgreSQL, Stripe, Redis

#### [SaaS Starter Kit](./fullstack-saas-starter/)
Production-ready SaaS application template:
- Multi-tenant architecture
- Subscription management
- Role-based permissions
- Analytics dashboard
- **Tech Stack**: Next.js, tRPC, Prisma, Clerk, Stripe

### 📦 **Monorepo Examples**

#### [Turborepo Full-Stack](./monorepo-turborepo-fullstack/)
Turborepo-managed workspace:
- Shared packages
- Multiple applications
- Unified build pipeline
- Shared component library
- **Tech Stack**: Turborepo, Next.js, Express, TypeScript

#### [Nx Enterprise](./monorepo-nx-enterprise/)
Enterprise-scale monorepo with Nx:
- Domain-driven architecture
- Shared libraries
- Code generation
- Advanced caching
- **Tech Stack**: Nx, Angular, NestJS, TypeScript

### 📱 **Mobile Development**

#### [React Native Expo](./mobile-react-native-expo/)
Cross-platform mobile application:
- Native development patterns
- State management
- Navigation patterns
- Platform-specific code
- **Tech Stack**: React Native, Expo, TypeScript, Zustand

### 🔄 **DevOps & Infrastructure**

#### [Docker Compose Setup](./devops-docker-compose/)
Containerized development environment:
- Multi-service orchestration
- Development vs. production configs
- Health checks and monitoring
- **Tech Stack**: Docker, Docker Compose, PostgreSQL, Redis

#### [CI/CD Pipeline](./devops-github-actions/)
Complete CI/CD setup with GitHub Actions:
- Automated testing
- Code quality checks
- Deployment automation
- Environment management
- **Tech Stack**: GitHub Actions, Docker, AWS/Vercel

## 🎯 How to Use These Examples

### 1. **Choose Your Example**
Select the example that most closely matches your project type or technology stack.

### 2. **Copy the Structure**
```bash
# Clone the entire framework
git clone https://github.com/your-username/cursor-rule-framework.git

# Navigate to your chosen example
cd cursor-rule-framework/examples/frontend-react-typescript

# Copy to your project
cp -r .cursor/ /path/to/your/project/
```

### 3. **Customize Rules**
- Update `project-config.mdc` with your project details
- Modify technology-specific rules as needed
- Add domain-specific rules for your business logic

### 4. **Test Integration**
```bash
# Open your project in Cursor IDE
cursor /path/to/your/project

# Verify rules are loaded
# CMD/Ctrl + Shift + P → "Cursor: Rules"
```

## 📖 Example Structure

Each example follows this consistent structure:

```
example-name/
├── .cursor/
│   └── rules/
│       ├── cursor-rules-management.mdc
│       ├── project-config.mdc
│       ├── workflow-state.mdc
│       ├── epics.mdc
│       ├── architecture.mdc
│       └── [technology-specific rules]
├── src/                    # Example source code
├── docs/                   # Example-specific documentation
├── README.md              # Setup and usage instructions
└── package.json           # Dependencies and scripts
```

## 🎯 What You'll Learn

Each example demonstrates:

1. **Rule Organization**: How to structure cursor rules for different project types
2. **AI-Driven Workflow**: Blueprint → Construct → Validate methodology with epic and architecture integration
3. **Architecture Integration**: Automatic validation and documentation of architectural decisions
4. **Quality Gates**: Automated testing, linting, and validation
5. **Team Collaboration**: Shared standards and knowledge preservation
6. **Epic Management**: Long-term project planning with AI assistance and architectural alignment

## 🎓 Learning Path

### **Beginner Path**
1. Start with [React TypeScript App](./frontend-react-typescript/)
2. Learn basic rule structure and organization
3. Practice with workflow phases and architecture integration
4. Experiment with custom rules

### **Intermediate Path**
1. Explore [Full-Stack SaaS](./fullstack-saas-starter/)
2. Understand multi-domain rule organization
3. Learn epic planning for larger features with architecture considerations
4. Practice team collaboration patterns

### **Advanced Path**
1. Study [Monorepo Enterprise](./monorepo-nx-enterprise/)
2. Master complex rule hierarchies and architecture documentation
3. Design custom workflow patterns with architecture validation
4. Create reusable rule libraries

## 🛠️ Customization Guidelines

### **Project-Specific Customization**
1. **Update Project Configuration**
   ```yaml
   # In project-config.mdc
   Project Goal: Your specific objectives
   Tech Stack: Your chosen technologies
   Critical Patterns: Your team's conventions
   ```

2. **Add Domain Rules**
   ```bash
   # Create rules for your specific domains
   .cursor/rules/your-domain-rules.mdc
   ```

3. **Configure Workflow**
   ```yaml
   # Customize workflow phases for your process
   # Add project-specific quality gates
   # Define team-specific validation steps
   ```

### **Technology Stack Adaptation**

#### **Different Frontend Framework**
- Copy closest matching example
- Update glob patterns for your file types
- Modify component/module naming conventions
- Adapt build and testing patterns

#### **Different Backend Technology**
- Adapt API design patterns
- Update database integration rules
- Modify deployment procedures
- Adjust testing strategies

#### **Different Infrastructure**
- Update deployment targets
- Modify CI/CD patterns
- Adapt monitoring and logging
- Adjust security policies

## 🧪 Testing Your Setup

### **Verification Checklist**
- [ ] Rules appear in Cursor IDE rule picker
- [ ] Glob patterns match your file structure
- [ ] Workflow phases work with your process
- [ ] Team members can access and use rules
- [ ] Custom rules integrate properly

### **Common Issues**
- **Rules not appearing**: Check file location and metadata format
- **Wrong files matched**: Verify glob patterns
- **Workflow conflicts**: Review phase definitions
- **Team access issues**: Ensure proper rule sharing

## 🤝 Contributing Examples

We welcome new examples! To contribute:

1. **Create Example Structure**
   ```bash
   mkdir examples/your-example-name
   cd examples/your-example-name
   ```

2. **Follow Template Structure**
   - Include complete `.cursor/rules/` setup
   - Provide working source code example
   - Write comprehensive README
   - Add setup and usage instructions

3. **Document Your Example**
   - Explain technology choices
   - Highlight unique patterns
   - Include troubleshooting tips
   - Provide learning objectives

4. **Submit Pull Request**
   - Follow [Contributing Guidelines](../CONTRIBUTING.md)
   - Include example in this README
   - Provide comprehensive description

## 📞 Example-Specific Help

Each example includes:
- **README.md**: Setup and usage instructions
- **docs/**: Detailed implementation guides
- **troubleshooting.md**: Common issues and solutions

For general framework questions, see the main [Documentation](../docs/README.md).

---

**Ready to start?** Choose an example that matches your project and follow the setup instructions in its README!

*Examples are continuously updated with new patterns and technologies. Last updated: January 16, 2025* 