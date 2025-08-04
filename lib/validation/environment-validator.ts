export interface EnvironmentValidationResult {
  isValid: boolean;
  missingVariables: string[];
  warnings: string[];
}

export interface RequiredEnvironmentVariables {
  GOOGLE_AI_API_KEY: string;
  ANTHROPIC_API_KEY: string;
  GITHUB_TOKEN?: string;
  SLACK_WEBHOOK_URL?: string;
}

/**
 * Validates that all required environment variables are present and properly configured
 */
export class EnvironmentValidator {
  private static readonly REQUIRED_VARS = ['GOOGLE_AI_API_KEY', 'ANTHROPIC_API_KEY'];

  private static readonly OPTIONAL_VARS = ['GITHUB_TOKEN', 'SLACK_WEBHOOK_URL'];

  /**
   * Validates all environment variables required for policy validation
   */
  static validateEnvironment(): EnvironmentValidationResult {
    const missingVariables: string[] = [];
    const warnings: string[] = [];

    // Check required variables
    for (const varName of this.REQUIRED_VARS) {
      const value = process.env[varName];
      if (!value || value.trim() === '') {
        missingVariables.push(varName);
      } else if (value.length < 10) {
        warnings.push(`${varName} appears to be too short (${value.length} characters)`);
      }
    }

    // Check optional variables and warn if missing
    for (const varName of this.OPTIONAL_VARS) {
      const value = process.env[varName];
      if (!value || value.trim() === '') {
        warnings.push(`${varName} is not configured - some features may not work`);
      }
    }

    // Validate API key formats
    if (process.env.GOOGLE_AI_API_KEY && !process.env.GOOGLE_AI_API_KEY.startsWith('AIza')) {
      warnings.push('GOOGLE_AI_API_KEY does not appear to have the correct format');
    }

    if (process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_API_KEY.startsWith('sk-ant-')) {
      warnings.push('ANTHROPIC_API_KEY does not appear to have the correct format');
    }

    return {
      isValid: missingVariables.length === 0,
      missingVariables,
      warnings,
    };
  }

  /**
   * Throws an error if environment validation fails
   */
  static validateOrThrow(): void {
    const result = this.validateEnvironment();

    if (!result.isValid) {
      const errorMessage = [
        'Environment validation failed. Missing required variables:',
        ...result.missingVariables.map((v) => `  - ${v}`),
        '',
        'Please ensure all required environment variables are configured.',
      ].join('\n');

      throw new Error(errorMessage);
    }

    // Log warnings if any
    if (result.warnings.length > 0) {
      console.warn('Environment validation warnings:');
      result.warnings.forEach((warning) => console.warn(`  - ${warning}`));
    }
  }

  /**
   * Gets a summary of the current environment configuration
   */
  static getEnvironmentSummary(): Record<string, boolean> {
    const summary: Record<string, boolean> = {};

    [...this.REQUIRED_VARS, ...this.OPTIONAL_VARS].forEach((varName) => {
      summary[varName] = !!(process.env[varName] && process.env[varName].trim() !== '');
    });

    return summary;
  }
}
