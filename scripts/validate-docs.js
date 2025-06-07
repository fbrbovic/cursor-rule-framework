#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Validates documentation files for completeness and quality
 */
class DocumentationValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.validatedFiles = 0;
    this.linksToCheck = new Set();
  }

  /**
   * Validate all documentation
   */
  async validateAll() {
    console.log('🎯 Cursor Rule Framework - Documentation Validator');
    console.log('===================================================\n');

    // Validate core files
    await this.validateCoreFiles();
    
    // Validate docs directory
    await this.validateDocsDirectory();
    
    // Validate examples
    await this.validateExamplesDirectory();
    
    // Check for broken internal links
    await this.validateInternalLinks();

    return this.printSummary();
  }

  /**
   * Validate core documentation files
   */
  async validateCoreFiles() {
    const coreFiles = [
      'README.md',
      'CHANGELOG.md', 
      'CONTRIBUTING.md',
      'CODE_OF_CONDUCT.md',
      'LICENSE'
    ];

    console.log('📋 Validating core files...\n');

    for (const file of coreFiles) {
      if (fs.existsSync(file)) {
        await this.validateFile(file);
      } else {
        this.addError('Core Files', `Missing required file: ${file}`);
      }
    }
  }

  /**
   * Validate docs directory
   */
  async validateDocsDirectory() {
    const docsDir = 'docs';
    
    console.log('📚 Validating docs directory...\n');
    
    if (!fs.existsSync(docsDir)) {
      this.addError('Documentation', 'Missing docs directory');
      return;
    }

    const docFiles = this.getMarkdownFiles(docsDir);
    for (const file of docFiles) {
      await this.validateFile(file);
    }

    // Check for required documentation
    const requiredDocs = [
      'docs/README.md',
      'docs/getting-started.md',
      'docs/rule-organization.md'
    ];

    for (const doc of requiredDocs) {
      if (!fs.existsSync(doc)) {
        this.addWarning('Documentation', `Recommended doc missing: ${doc}`);
      }
    }
  }

  /**
   * Validate examples directory
   */
  async validateExamplesDirectory() {
    const examplesDir = 'examples';
    
    console.log('🛠️  Validating examples directory...\n');
    
    if (!fs.existsSync(examplesDir)) {
      this.addWarning('Examples', 'Missing examples directory');
      return;
    }

    // Check each example has a README
    const examples = fs.readdirSync(examplesDir)
      .filter(item => fs.statSync(path.join(examplesDir, item)).isDirectory());

    for (const example of examples) {
      const readmePath = path.join(examplesDir, example, 'README.md');
      if (!fs.existsSync(readmePath)) {
        this.addWarning('Examples', `Example ${example} missing README.md`);
      } else {
        await this.validateFile(readmePath);
      }
    }
  }

  /**
   * Validate a single file
   */
  async validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      console.log(`🔍 Validating ${fileName}...`);
      
      // Basic checks
      if (content.length === 0) {
        this.addError(fileName, 'File is empty');
        return;
      }

      // Markdown-specific validation
      if (filePath.endsWith('.md')) {
        this.validateMarkdown(fileName, content);
      }

      // Special validations for specific files
      if (fileName === 'README.md') {
        this.validateReadme(fileName, content);
      } else if (fileName === 'CHANGELOG.md') {
        this.validateChangelog(fileName, content);
      } else if (fileName === 'CONTRIBUTING.md') {
        this.validateContributing(fileName, content);
      }

      this.validatedFiles++;
      console.log(`✅ ${fileName} is valid`);
      
    } catch (error) {
      this.addError(path.basename(filePath), `Failed to read file: ${error.message}`);
    }
  }

  /**
   * Validate markdown content
   */
  validateMarkdown(fileName, content) {
    const lines = content.split('\n');
    let inCodeBlock = false;
    let hasHeading = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      // Track code blocks
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }

      // Check for headings
      if (line.trim().startsWith('#')) {
        hasHeading = true;
      }

      // Check for broken markdown
      if (!inCodeBlock) {
        // Unbalanced backticks
        const backticks = (line.match(/`/g) || []).length;
        if (backticks % 2 !== 0) {
          this.addWarning(fileName, `Line ${lineNum}: Unbalanced backticks`);
        }

        // Extract links for validation
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let match;
        while ((match = linkRegex.exec(line)) !== null) {
          const linkUrl = match[2];
          this.linksToCheck.add({ file: fileName, url: linkUrl, line: lineNum });
        }
      }
    }

    if (inCodeBlock) {
      this.addError(fileName, 'Unclosed code block');
    }

    if (!hasHeading && content.length > 100) {
      this.addWarning(fileName, 'Document should have at least one heading');
    }

    // Check for very short content (unless it's a placeholder)
    if (content.length < 50 && !content.includes('TODO') && !content.includes('placeholder')) {
      this.addWarning(fileName, 'Document content is very short');
    }
  }

  /**
   * Validate README.md specifically
   */
  validateReadme(fileName, content) {
    const requiredSections = [
      /^#\s+.*(?:cursor|rule|framework)/i,  // Title with keywords
      /installation|getting started|quick start/i,
      /usage|how to|examples/i,
      /contributing/i,
      /license/i
    ];

    for (let i = 0; i < requiredSections.length; i++) {
      if (!requiredSections[i].test(content)) {
        const sectionNames = [
          'Title with keywords (Cursor, Rule, Framework)', 
          'Installation/Getting Started section',
          'Usage/Examples section',
          'Contributing section',
          'License section'
        ];
        this.addWarning(fileName, `Missing recommended section: ${sectionNames[i]}`);
      }
    }

    // Check for badges (common in open source READMEs)
    if (!content.includes('![') && !content.includes('[![')) {
      this.addWarning(fileName, 'Consider adding badges (build status, license, etc.)');
    }
  }

  /**
   * Validate CHANGELOG.md specifically
   */
  validateChangelog(fileName, content) {
    // Check for Keep a Changelog format
    if (!content.includes('Keep a Changelog')) {
      this.addWarning(fileName, 'Consider following Keep a Changelog format');
    }

    // Check for semantic versioning
    if (!content.includes('Semantic Versioning')) {
      this.addWarning(fileName, 'Consider mentioning Semantic Versioning adherence');
    }

    // Check for version entries
    const versionRegex = /##\s+\[\d+\.\d+\.\d+\]/;
    if (!versionRegex.test(content)) {
      this.addWarning(fileName, 'No version entries found');
    }

    // Check for Unreleased section
    if (!content.includes('[Unreleased]')) {
      this.addWarning(fileName, 'Consider adding an [Unreleased] section for upcoming changes');
    }
  }

  /**
   * Validate CONTRIBUTING.md specifically
   */
  validateContributing(fileName, content) {
    const requiredSections = [
      /getting started|development setup/i,
      /pull request|contribution process/i,
      /issue|bug report/i,
      /code of conduct/i
    ];

    const sectionNames = [
      'Development setup section',
      'Pull request process section', 
      'Issue reporting section',
      'Code of conduct reference'
    ];

    for (let i = 0; i < requiredSections.length; i++) {
      if (!requiredSections[i].test(content)) {
        this.addWarning(fileName, `Consider adding: ${sectionNames[i]}`);
      }
    }
  }

  /**
   * Validate internal links
   */
  async validateInternalLinks() {
    console.log('🔗 Validating internal links...\n');

    for (const link of this.linksToCheck) {
      // Skip external links
      if (link.url.startsWith('http://') || link.url.startsWith('https://')) {
        continue;
      }

      // Skip mailto and other protocol links
      if (link.url.includes(':')) {
        continue;
      }

      // Check if file exists
      let targetPath = link.url;
      
      // Handle relative paths
      if (!path.isAbsolute(targetPath)) {
        const linkDir = path.dirname(link.file);
        targetPath = path.resolve(linkDir, link.url);
      }

      // Remove fragment identifiers for file existence check
      const cleanPath = targetPath.split('#')[0];
      
      if (!fs.existsSync(cleanPath)) {
        this.addError(link.file, `Broken link on line ${link.line}: ${link.url}`);
      }
    }
  }

  /**
   * Get all markdown files in a directory recursively
   */
  getMarkdownFiles(dir) {
    const files = [];
    
    function scanDir(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath);
        } else if (item.endsWith('.md')) {
          files.push(fullPath);
        }
      }
    }
    
    scanDir(dir);
    return files;
  }

  /**
   * Add an error
   */
  addError(fileName, message) {
    this.errors.push({ file: fileName, message, type: 'error' });
    console.log(`❌ ${fileName}: ${message}`);
  }

  /**
   * Add a warning
   */
  addWarning(fileName, message) {
    this.warnings.push({ file: fileName, message, type: 'warning' });
    console.log(`⚠️  ${fileName}: ${message}`);
  }

  /**
   * Print validation summary
   */
  printSummary() {
    console.log('\n📊 Documentation Validation Summary');
    console.log('===================================');
    console.log(`Files validated: ${this.validatedFiles}`);
    console.log(`Links checked: ${this.linksToCheck.size}`);
    console.log(`Errors: ${this.errors.length}`);
    console.log(`Warnings: ${this.warnings.length}`);

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('🎉 All documentation is valid!');
      return true;
    }

    if (this.errors.length > 0) {
      console.log('\n❌ Errors (must be fixed):');
      this.errors.forEach(err => {
        console.log(`  • ${err.file}: ${err.message}`);
      });
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  Warnings (recommended improvements):');
      this.warnings.forEach(warn => {
        console.log(`  • ${warn.file}: ${warn.message}`);
      });
    }

    return this.errors.length === 0;
  }
}

/**
 * Main execution
 */
async function main() {
  const validator = new DocumentationValidator();
  const success = await validator.validateAll();
  process.exit(success ? 0 : 1);
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  });
}

module.exports = { DocumentationValidator }; 