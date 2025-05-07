interface ValidationResult {
  confidence: number;
  suggestedChanges: Array<{
    section: string;
    reason: string;
  }>;
}

export const webhookFormattedResponse = (platform: string, result: ValidationResult) => {
  return {
    text: `${platform} Policy Validation Results`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `${platform} Validation Results`,
          emoji: true
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Overall Confidence Score:* ${(result.confidence * 100).toFixed(1)}%`
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: result.confidence < 0.7 && result.suggestedChanges.length > 0 ? 
            "*Suggested Changes:*\n" + result.suggestedChanges.map((change) => 
              `• *${change.section}*: ${change.reason}`
            ).join("\n") :
            "_No changes needed_"
        }
      }
    ]
  };
};

export const webhookFormattedError = (platform: string, error: any) => {
  return {
    text: `${platform} Policy Validation Error`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `❌ ${platform} Policy Validation Error`,
          emoji: true
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Error: ${error.message}`
        }
      }
    ]
  };
};