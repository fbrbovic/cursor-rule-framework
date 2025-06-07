#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Validates cursor rule files for proper MDC format and structure
 */
class RuleValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.validatedFiles = 0;
  }

  /**
   * Validate a single rule file
   */
  validateRule(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      console.log(`🔍 Validating ${fileName}...`);
      
      // Check file extension
      if (!filePath.endsWith('.mdc')) {
        this.addError(fileName, 'File must have .mdc extension');
        return false;
      }

      // Split content into parts
      const parts = content.split('---');
      
      if (parts.length < 3) {
        this.addError(fileName, 'Missing YAML frontmatter (must start and end with ---)');
        return false;
      }

      // Validate YAML frontmatter
      const yamlContent = parts[1].trim();
      let metadata;
      
      try {
        metadata = yaml.load(yamlContent);
      } catch (yamlError) {
        this.addError(fileName, `Invalid YAML: ${yamlError.message}`);
        return false;
      }

      // Validate required fields
      this.validateMetadata(fileName, metadata);
      
      // Validate markdown content
      const markdownContent = parts.slice(2).join('---').trim();
      this.validateMarkdown(fileName, markdownContent);
      
      this.validatedFiles++;
      console.log(`✅ ${fileName} is valid`);
      return true;
      
    } catch (error) {
      this.addError(path.basename(filePath), `Failed to read file: ${error.message}`);
      return false;
    }
  }

  /**
   * Validate YAML metadata
   */
  validateMetadata(fileName, metadata) {
    const required = ['description', 'globs', 'alwaysApply'];
    
    for (const field of required) {
      if (!(field in metadata)) {
        this.addError(fileName, `Missing required field: ${field}`);
      }
    }

    // Validate field types
    if (metadata.description && typeof metadata.description !== 'string') {
      this.addError(fileName, 'description must be a string');
    }

    if (metadata.globs && typeof metadata.globs !== 'string') {
      this.addError(fileName, 'globs must be a string');
    }

    if (metadata.alwaysApply && typeof metadata.alwaysApply !== 'boolean') {
      this.addError(fileName, 'alwaysApply must be a boolean (true/false)');
    }

    // Validate description length
    if (metadata.description && metadata.description.length > 200) {
      this.addWarning(fileName, 'description is quite long (>200 chars), consider shortening');
    }

    // Validate glob patterns
    if (metadata.globs) {
      this.validateGlobPatterns(fileName, metadata.globs);
    }
  }

  /**
   * Validate glob patterns
   */
  validateGlobPatterns(fileName, globs) {
    // Basic glob pattern validation
    const suspiciousPatterns = [
      /\*\*\*+/,  // Too many asterisks
      /\/\//,     // Double slashes
      /\s/,       // Whitespace in glob
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(globs)) {
        this.addWarning(fileName, `Potentially problematic glob pattern: ${globs}`);
        break;
      }
    }
  }

  /**
   * Validate markdown content
   */
  validateMarkdown(fileName, content) {
    if (!content || content.length === 0) {
      this.addError(fileName, 'Rule content cannot be empty');
      return;
    }

    // Check for proper heading structure
    if (!content.includes('#')) {
      this.addWarning(fileName, 'Rule should include markdown headings for better structure');
    }

    // Check for very short content
    if (content.length < 100) {
      this.addWarning(fileName, 'Rule content is quite short, consider adding more detail');
    }

    // Check for common markdown issues
    const lines = content.split('\n');
    let inCodeBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;
      
      // Track code blocks
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }
      
      // Check for unbalanced markdown
      if (!inCodeBlock) {
        const backticks = (line.match(/`/g) || []).length;
        if (backticks % 2 !== 0) {
          this.addWarning(fileName, `Line ${lineNum}: Unbalanced backticks`);
        }
      }
    }
    
    if (inCodeBlock) {
      this.addError(fileName, 'Unclosed code block (missing closing ```)');
    }
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
   * Validate all rule files in a directory
   */
  validateDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
      console.log(`❌ Directory ${dirPath} does not exist`);
      return false;
    }

    const files = fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.mdc'))
      .map(file => path.join(dirPath, file));

    if (files.length === 0) {
      console.log(`⚠️  No .mdc files found in ${dirPath}`);
      return true;
    }

    console.log(`🔍 Found ${files.length} rule files to validate\n`);

    let allValid = true;
    for (const file of files) {
      const isValid = this.validateRule(file);
      if (!isValid) {
        allValid = false;
      }
    }

    return allValid;
  }

  /**
   * Print validation summary
   */
  printSummary() {
    console.log('\n📊 Validation Summary');
    console.log('====================');
    console.log(`Files validated: ${this.validatedFiles}`);
    console.log(`Errors: ${this.errors.length}`);
    console.log(`Warnings: ${this.warnings.length}`);

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('🎉 All rules are valid!');
      return true;
    }

    if (this.errors.length > 0) {
      console.log('\n❌ Errors (must be fixed):');
      this.errors.forEach(err => {
        console.log(`  • ${err.file}: ${err.message}`);
      });
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  Warnings (recommended fixes):');
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
function main() {
  console.log('🎯 Cursor Rule Framework - Rule Validator');
  console.log('==========================================\n');

  const validator = new RuleValidator();
  
  // Validate .cursor/rules directory
  const rulesDir = path.join(process.cwd(), '.cursor', 'rules');
  const success = validator.validateDirectory(rulesDir);
  
  // Print summary
  const allValid = validator.printSummary();
  
  // Exit with appropriate code
  process.exit(allValid ? 0 : 1);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { RuleValidator }; 