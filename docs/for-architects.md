# 🏗️ For Architects: System Design and Architecture Guide

How software architects can leverage the Cursor Rule Framework for architecture decision-making, system design governance, and maintaining architectural integrity.

## 🎯 Architect Quick Start

### **Week 1: Architecture Foundation**
```bash
# Initialize comprehensive architecture documentation
# Set up architecture.mdc with current system state
# Create architectural decision record (ADR) templates
# Establish architecture validation rules

# Example initialization:
"Initialize architecture.mdc with our current microservices architecture including service boundaries, data flows, and key patterns"
```

### **Week 2: Architecture Integration**
```bash
# Integrate architecture into development workflow
# Set up automatic architecture updates during development
# Create architecture-aware epic planning templates
# Establish architecture review processes

# Example integration:
"Create epic templates that require architectural impact assessment for all major features"
```

### **Week 3: Team Architecture Alignment**
```bash
# Train development teams on architecture-driven development
# Set up architecture validation in code review process
# Create architecture-specific rules for different system components
# Establish cross-team architecture coordination

# Example alignment:
"Create service-specific rules for our payment, user management, and notification microservices"
```

### **Week 4: Architecture Governance**
```bash
# Implement architecture governance processes
# Set up regular architecture reviews and updates
# Create metrics for architectural integrity
# Establish evolution planning workflows

# Example governance:
"Set up monthly architecture reviews with automatic drift detection and team alignment sessions"
```

## 🏛️ Architecture-Centric Development

### **Living Architecture Documentation**

#### **Architecture.mdc as Single Source of Truth**
```bash
# Comprehensive architecture documentation that evolves with code
# AI automatically updates documentation during development
# Real-time architecture state reflecting actual implementation
# Immediate visibility into architecture changes and their impact

# Example architecture.mdc structure:
## System Overview
- High-level architecture diagram and description
- Key architectural principles and constraints
- Technology stack decisions and rationale

## Service Architecture
- Service boundaries and responsibilities
- Communication patterns and protocols
- Data flow and storage decisions

## Cross-Cutting Concerns
- Authentication and authorization patterns
- Logging, monitoring, and observability
- Error handling and resilience patterns
- Security and compliance requirements

## Evolution Plans
- Planned architectural changes
- Migration strategies and timelines
- Deprecated patterns and replacement plans
```

#### **AI-Driven Architecture Updates**
```bash
# During feature development:
"Implementing OAuth2 integration - this affects our authentication architecture"

# AI automatically:
# ✅ Updates authentication patterns in architecture.mdc
# ✅ Documents new service dependencies
# ✅ Records security implications
# ✅ Updates deployment requirements
# ✅ Identifies affected services and teams

# Architect review and approval:
"Review the authentication architecture changes and approve the OAuth2 integration approach"
```

### **Architecture-Driven Epic Planning**

#### **Epic Architecture Impact Assessment**
```bash
# Every epic requires architectural analysis
"Create an epic for implementing real-time notifications with architecture impact assessment"

# AI analyzes:
# ✅ Affected services and boundaries
# ✅ New infrastructure requirements
# ✅ Data flow changes
# ✅ Performance and scalability implications
# ✅ Security and compliance considerations
# ✅ Team coordination requirements

# Architecture validation:
"Validate the notification epic architecture approach against our event-driven architecture principles"
```

#### **Cross-Epic Architecture Coordination**
```bash
# Multiple epics affecting shared architectural components
"Coordinate architecture changes between the user management epic and the notification epic"

# AI identifies:
# ✅ Shared component dependencies
# ✅ Conflicting architectural decisions
# ✅ Optimal implementation sequencing
# ✅ Resource and timeline coordination needs
```

## 📐 Architecture Design Patterns

### **Microservices Architecture Management**

#### **Service Boundary Definition**
```yaml
---
description: "Microservices architecture patterns and service boundaries"
alwaysApply: true
priority: 8
tags: ["architecture", "microservices", "boundaries"]
---

# Microservices Architecture Guidelines

## Service Design Principles
- Single Responsibility: Each service owns one business capability
- Database per Service: No shared databases between services
- API-First: All service communication through well-defined APIs
- Autonomous Teams: Each service owned by a specific team

## Service Boundaries
### User Management Service
- Responsibilities: User authentication, profile management, permissions
- Data: User profiles, authentication credentials, roles
- API: RESTful with GraphQL federation endpoint
- Team: Identity Team

### Payment Processing Service
- Responsibilities: Payment processing, transaction history, billing
- Data: Payment methods, transactions, billing records
- API: RESTful with webhook callbacks
- Team: Payments Team

### Notification Service
- Responsibilities: Email, SMS, push notifications, templates
- Data: Notification templates, delivery status, preferences
- API: Event-driven with REST management interface
- Team: Platform Team

## Communication Patterns
- Synchronous: REST APIs for real-time queries
- Asynchronous: Event bus (Apache Kafka) for state changes
- Service Mesh: Istio for traffic management and security
- API Gateway: Kong for external API management
```

#### **Event-Driven Architecture Patterns**
```yaml
---
description: "Event-driven communication patterns between services"
globs: "src/events/**/*.ts"
alwaysApply: false
priority: 7
tags: ["architecture", "events", "messaging"]
---

# Event-Driven Architecture Patterns

## Event Design Standards
- Event Naming: domain.aggregate.action (e.g., user.profile.updated)
- Event Structure: CloudEvents specification compliance
- Event Versioning: Semantic versioning with backward compatibility
- Event Ordering: Partition by aggregate ID for ordering guarantees

## Event Categories
### Domain Events
- User lifecycle events (created, updated, deleted)
- Payment transaction events (started, completed, failed)
- Order state changes (placed, confirmed, shipped, delivered)

### Integration Events
- External system synchronization
- Cross-bounded context communication
- Third-party service webhooks

### System Events
- Infrastructure health and monitoring
- Security and audit events
- Performance and operational metrics

## Implementation Patterns
```typescript
// Event publishing pattern
export class UserService {
  async updateProfile(userId: string, updates: ProfileUpdates): Promise<User> {
    const user = await this.userRepository.update(userId, updates);
    
    await this.eventBus.publish({
      type: 'user.profile.updated',
      specVersion: '1.0',
      source: 'user-service',
      id: uuidv4(),
      time: new Date().toISOString(),
      data: {
        userId: user.id,
        changes: updates,
        version: user.version
      }
    });
    
    return user;
  }
}

// Event handling pattern
export class NotificationService {
  @EventHandler('user.profile.updated')
  async handleProfileUpdate(event: CloudEvent<ProfileUpdatedData>): Promise<void> {
    const { userId, changes } = event.data;
    
    if (changes.email) {
      await this.sendEmailVerification(userId, changes.email);
    }
    
    if (changes.preferences) {
      await this.updateNotificationPreferences(userId, changes.preferences);
    }
  }
}
```
```

### **Data Architecture Patterns**

#### **Database Design Guidelines**
```yaml
---
description: "Database architecture and data access patterns"
globs: "src/db/**/*.ts"
alwaysApply: false
priority: 7
tags: ["architecture", "database", "data"]
---

# Data Architecture Guidelines

## Database Strategy
- Service Database Isolation: Each microservice owns its data
- Polyglot Persistence: Choose appropriate database for each service
- Event Sourcing: For audit trails and complex business logic
- CQRS: Separate read and write models for complex queries

## Database Technology Decisions
### Transactional Data (PostgreSQL)
- User management service: User profiles, authentication
- Payment service: Transactions, billing, financial records
- Order service: Order lifecycle, inventory management

### Document Storage (MongoDB)
- Content management: CMS content, blog posts, documentation
- Catalog service: Product information, categories, metadata
- Analytics: User behavior, session data, metrics

### Cache Layer (Redis)
- Session storage: User sessions, temporary tokens
- Rate limiting: API throttling, security controls
- Real-time data: Live notifications, active user counts

### Search Engine (Elasticsearch)
- Product search: Full-text search, faceted navigation
- Log aggregation: Application logs, audit trails
- Analytics: Business intelligence, reporting queries

## Data Access Patterns
```typescript
// Repository pattern with database abstraction
export interface UserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: CreateUserRequest): Promise<User>;
  update(id: string, updates: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
}

// Event sourcing pattern for audit trails
export class PaymentEventStore {
  async appendEvent(aggregateId: string, event: PaymentEvent): Promise<void> {
    await this.eventStore.append({
      streamId: `payment-${aggregateId}`,
      events: [{
        eventType: event.type,
        data: event.data,
        metadata: {
          timestamp: new Date(),
          userId: event.userId,
          correlationId: event.correlationId
        }
      }]
    });
  }
  
  async getEvents(aggregateId: string): Promise<PaymentEvent[]> {
    const stream = await this.eventStore.readStream(`payment-${aggregateId}`);
    return stream.events.map(e => this.deserializeEvent(e));
  }
}

// CQRS pattern for complex queries
export class OrderQueryService {
  async getOrderHistory(userId: string, options: QueryOptions): Promise<OrderSummary[]> {
    // Read from optimized read model
    return this.orderReadModel.findByUser(userId, options);
  }
  
  async getOrderAnalytics(dateRange: DateRange): Promise<AnalyticsData> {
    // Read from analytics database
    return this.analyticsStore.getOrderMetrics(dateRange);
  }
}
```
```

## 🔍 Architecture Governance

### **Architecture Decision Records (ADRs)**

#### **ADR Integration with Framework**
```bash
# Automatic ADR creation during architecture changes
"Document the decision to adopt GraphQL federation for our API gateway"

# AI creates structured ADR:
# ✅ Decision context and problem statement
# ✅ Considered alternatives and trade-offs
# ✅ Final decision and rationale
# ✅ Consequences and implementation plan
# ✅ Review and approval workflow

# Example ADR workflow:
"Create ADR for migrating from REST to GraphQL federation"
"Review ADR with architecture team and stakeholders"
"Approve ADR and update architecture.mdc"
"Create epic for GraphQL federation implementation"
```

#### **ADR Template and Structure**
```markdown
# ADR-001: GraphQL Federation for API Gateway

## Status
PROPOSED | ACCEPTED | SUPERSEDED | DEPRECATED

## Context
We currently have multiple microservices exposing REST APIs directly to frontend clients. This creates several challenges:
- Frontend teams need to call multiple APIs for single user workflows
- API versioning becomes complex across multiple services
- Cross-service data aggregation happens in the frontend
- No unified API documentation or discoverability

## Decision
Implement GraphQL Federation using Apollo Gateway to provide a unified API layer over our microservices.

## Alternatives Considered
1. **REST API Gateway**: Use Kong or AWS API Gateway for REST endpoint aggregation
2. **Backend for Frontend (BFF)**: Create service-specific API aggregation layers
3. **Direct Service Calls**: Continue current approach with frontend orchestration

## Consequences

### Positive
- Unified API schema and documentation
- Frontend teams work with single GraphQL endpoint
- Type-safe API contracts with GraphQL schemas
- Incremental adoption possible (federate one service at a time)

### Negative
- Additional complexity in service development (GraphQL schemas)
- New tooling and deployment pipeline requirements
- Team training needed for GraphQL best practices
- Potential performance overhead from federation layer

## Implementation Plan
1. Phase 1: Set up Apollo Gateway and federate User Service
2. Phase 2: Federate Payment and Order Services
3. Phase 3: Migrate frontend applications to use federated schema
4. Phase 4: Deprecate direct REST API access from frontend

## Review
- Architecture Team: [Date]
- Security Team: [Date]  
- Frontend Teams: [Date]
- DevOps Team: [Date]
```

### **Architecture Validation and Compliance**

#### **Automatic Architecture Drift Detection**
```bash
# Continuous architecture validation during development
# AI monitors architecture.mdc against actual implementation
# Detects deviations and violations automatically
# Alerts architects to potential drift or inconsistencies

# Example drift detection:
"Alert: Payment service is making direct database calls to User service database, violating service boundary rules"

"Alert: New API endpoint created without OpenAPI documentation, violating API-first principle"

"Alert: Service communication bypassing the event bus, violating event-driven architecture pattern"
```

#### **Architecture Rule Enforcement**
```yaml
---
description: "Architecture compliance rules and validation"
alwaysApply: true
priority: 10
tags: ["architecture", "compliance", "governance"]
---

# Architecture Compliance Rules

## Service Boundary Enforcement
- No direct database access between services
- All inter-service communication through defined APIs
- No shared code libraries between service teams
- Service ownership clearly defined and maintained

## API Standards Compliance
- All public APIs documented with OpenAPI 3.0
- API versioning follows semantic versioning
- Breaking changes require deprecation notices
- Rate limiting implemented on all public endpoints

## Data Architecture Compliance
- No cross-service database transactions
- Event sourcing for critical business events
- Data encryption at rest and in transit
- Personal data handling follows GDPR requirements

## Security Architecture Compliance
- All services implement authentication middleware
- Authorization based on JWT tokens with service-specific scopes
- Security headers implemented on all HTTP responses
- Vulnerability scanning in CI/CD pipeline

## Monitoring and Observability
- Structured logging with correlation IDs
- Distributed tracing across service boundaries
- Health checks for all services and dependencies
- SLA monitoring and alerting configured
```

### **Cross-Team Architecture Coordination**

#### **Architecture Review Processes**
```bash
# Regular architecture review meetings
"Schedule monthly architecture review for all active epics with architectural impact"

# Cross-team impact assessment
"Assess how the new authentication service affects all dependent teams"

# Architecture evolution planning
"Plan the migration from monolithic deployment to Kubernetes with zero downtime"

# Technology adoption evaluation
"Evaluate adopting GraphQL across all teams and services"
```

#### **Architecture Communication**
```bash
# Architecture update broadcasts
"Communicate the new API versioning strategy to all development teams"

# Impact assessment for teams
"Identify which teams are affected by the database migration epic"

# Training and knowledge sharing
"Schedule architecture workshops for the new event sourcing patterns"

# Documentation and guidelines
"Update team guidelines for the new security architecture requirements"
```

## 📊 Architecture Metrics and Analytics

### **Architecture Health Metrics**

#### **Service Dependency Analysis**
```bash
# Monitor service coupling and dependencies
# Track API usage patterns across services
# Identify potential service boundary violations
# Measure service autonomy and independence

# Example metrics:
- Service coupling index: Low (services have minimal dependencies)
- API usage distribution: Balanced (no single service is overwhelmed)
- Cross-service transaction rate: 5% (within target of < 10%)
- Service deployment independence: 95% (services can deploy without coordination)
```

#### **Architecture Evolution Tracking**
```bash
# Track architecture changes over time
# Monitor architectural decision implementation
# Measure compliance with architectural standards
# Assess impact of architectural changes on team velocity

# Example tracking:
- ADR implementation rate: 85% (8/10 approved ADRs implemented)
- Architecture rule compliance: 92% (improvement from 78% last quarter)
- Cross-team coordination events: 12 (down from 18, indicating better service boundaries)
- Time to implement architecture changes: 3.2 weeks average
```

### **Epic Architecture Impact Analysis**

#### **Architecture Change Prediction**
```bash
# Analyze planned epics for architectural impact
"Analyze the upcoming Q2 epics for potential architecture changes and team coordination needs"

# AI provides:
# ✅ Predicted service boundary changes
# ✅ New infrastructure requirements
# ✅ Cross-team dependencies and coordination needs
# ✅ Timeline and resource implications
# ✅ Risk assessment and mitigation strategies
```

#### **Architecture Roadmap Planning**
```bash
# Long-term architecture evolution planning
"Create a 12-month architecture roadmap based on current epics and business requirements"

# Include:
# ✅ Planned technology adoptions
# ✅ Service architecture evolution
# ✅ Infrastructure and scalability improvements
# ✅ Team structure and ownership changes
# ✅ Compliance and security enhancements
```

## 🚀 Advanced Architecture Techniques

### **Architecture-as-Code Implementation**

#### **Infrastructure Architecture Integration**
```yaml
---
description: "Infrastructure architecture patterns and deployment standards"
globs: "infrastructure/**/*.{tf,yaml,yml}"
alwaysApply: false
priority: 8
tags: ["architecture", "infrastructure", "deployment"]
---

# Infrastructure Architecture Standards

## Container and Orchestration
- Docker containers for all services
- Kubernetes for orchestration and scaling
- Helm charts for deployment configuration
- Service mesh (Istio) for traffic management

## Infrastructure as Code
- Terraform for infrastructure provisioning
- GitOps workflow for deployment automation
- Environment parity (dev/staging/production)
- Immutable infrastructure principles

## Monitoring and Observability
```yaml
# Example infrastructure architecture integration
apiVersion: v1
kind: ConfigMap
metadata:
  name: architecture-config
data:
  service-mesh: "istio"
  container-runtime: "containerd"
  orchestration: "kubernetes"
  monitoring: "prometheus"
  logging: "elasticsearch"
  tracing: "jaeger"
  
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: user-service
spec:
  http:
  - match:
    - headers:
        api-version:
          exact: v2
    route:
    - destination:
        host: user-service-v2
  - route:
    - destination:
        host: user-service-v1
```
```

### **Multi-Region Architecture Patterns**

#### **Distributed System Architecture**
```bash
# Global service architecture planning
"Design multi-region architecture for global user base with data sovereignty requirements"

# AI considerations:
# ✅ Data residency and compliance requirements
# ✅ Cross-region latency and performance
# ✅ Disaster recovery and failover strategies
# ✅ Eventual consistency and conflict resolution
# ✅ Cost optimization across regions
```

### **Architecture Testing and Validation**

#### **Architecture Testing Strategies**
```bash
# Test architecture decisions and implementations
"Create architecture tests to validate service boundary compliance"

# Example architecture tests:
# ✅ Dependency analysis: No unauthorized service dependencies
# ✅ API contract testing: All services comply with OpenAPI specs
# ✅ Performance testing: Services meet SLA requirements
# ✅ Security testing: All services implement required security patterns
# ✅ Data consistency testing: Event-driven patterns maintain consistency
```

## 💡 Architect Success Strategies

### **Continuous Architecture Evolution**
- **Living Documentation**: Architecture.mdc evolves with implementation
- **Decision Traceability**: All architecture decisions recorded and tracked
- **Impact Assessment**: Every change analyzed for system-wide effects
- **Team Alignment**: Regular architecture reviews and team coordination

### **Architecture Governance Balance**
- **Standards Enforcement**: Clear rules with automated compliance checking
- **Innovation Enablement**: Framework supports experimentation and improvement
- **Team Autonomy**: Service teams maintain ownership within architectural constraints
- **Evolution Management**: Structured approach to architectural change

### **Strategic Architecture Planning**
- **Business Alignment**: Architecture decisions support business objectives
- **Technology Evolution**: Planned adoption of new technologies and patterns
- **Team Structure**: Architecture supports current and planned team organization
- **Scalability Planning**: Architecture grows with business and technical requirements

### **Knowledge and Communication**
- **Documentation Excellence**: Clear, current, and comprehensive architecture documentation
- **Team Education**: Regular training and knowledge sharing on architecture patterns
- **Cross-Team Collaboration**: Architecture facilitates rather than hinders team coordination
- **External Communication**: Architecture decisions communicated effectively to stakeholders

---

**The Cursor Rule Framework empowers architects to maintain architectural integrity while enabling team autonomy and continuous system evolution through AI-driven documentation and governance.** 