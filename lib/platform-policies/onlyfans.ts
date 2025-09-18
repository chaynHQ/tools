import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including non-consensual content, harassment, and content restrictions.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-18T21:46:08.129Z",
    "policies": [
      {
        "id": "of-co-authored-consent",
        "reference": "OF-TOU-16",
        "summary": "Individuals appearing in Co-Authored Content may withdraw consent at any time, requiring content removal.",
        "quote": "Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identity verification as the person appearing in the content",
            "reason": "To confirm you are the individual withdrawing consent"
          },
          {
            "description": "URL(s) of the Co-Authored Content",
            "reason": "To locate the specific content for removal"
          },
          {
            "description": "Evidence that you appear in the content without current consent",
            "reason": "To establish grounds for content removal"
          }
        ],
        "removalCriteria": [
          "An individual appearing in Co-Authored Content withdraws their consent",
          "Content features someone without their current consent"
        ]
      },
      {
        "id": "of-content-suspension",
        "reference": "OF-TOU-12-14",
        "summary": "OnlyFans reserves the right to suspend or remove content that may breach Terms of Service and will quickly remove illegal content when made aware.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service. We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Quickly remove illegal content when made aware"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report through Complaints Policy process",
            "reason": "To follow proper reporting procedures for illegal content"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify and locate the content for review"
          },
          {
            "description": "Description of how content violates Terms of Service or law",
            "reason": "To assess the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content breaches OnlyFans Terms of Service",
          "Content is determined to be illegal under applicable laws"
        ]
      },
      {
        "id": "of-ai-transparency",
        "reference": "OF-TOU-19",
        "summary": "AI Generated content must be clearly labeled with signifiers such as #ai or #AIGenerated.",
        "quote": "AI Generated content must comply with our Terms of Service and must be clearly and conspicuously captioned as AI Generated Content with a signifier such as #ai, or #AIGenerated.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of unlabeled AI-generated content",
            "reason": "To identify content that violates AI transparency requirements"
          },
          {
            "description": "Evidence that content is AI-generated but unlabeled",
            "reason": "To establish the violation of labeling requirements"
          }
        ],
        "removalCriteria": [
          "AI-generated content lacks required #ai or #AIGenerated signifiers",
          "AI content is not clearly and conspicuously labeled as required"
        ]
      },
      {
        "id": "of-account-suspension",
        "reference": "OF-TOU-14",
        "summary": "OnlyFans may suspend or delete accounts for serious or repeated breaches of Terms of Service, including unlawful or fraudulent activity.",
        "quote": "At any time, without warning or Notice and for as long as is necessary to review the relevant facts, we may: (i) suspend or delete your account and/or your Content; (ii) pause Fan Payments which would have been due during the suspension period; (iii) withhold any part of your Creator Earnings; and/or (iv) suspend, refund, or cancel Fan Payments if: we think you have or may have seriously or repeatedly breached the Terms of Service; you attempt, or threaten, to breach the Terms of Service in a way which we think has or could have serious consequences for us or another User; and/or we suspect that all or any part of the Creator Earnings result from unlawful or fraudulent activity, either by you or by the Fan who made the Fan Payment resulting in the Creator Earnings.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of Terms of Service violations by the account",
            "reason": "To demonstrate grounds for account suspension"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support claims of illegal behavior"
          },
          {
            "description": "Contact support@onlyfans.com with detailed complaint",
            "reason": "To initiate review process for problematic accounts"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breaches of Terms of Service",
          "Attempts or threats to breach Terms with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture through the Complaints Policy.",
      "steps": [
        "Dispute decisions within six months of notification to avoid waiving rights",
        "Follow Appeals Policy for account termination or content deactivation disputes",
        "Follow Complaints Policy for Creator Earnings forfeiture disputes",
        "Contact support@onlyfans.com for general complaints about OnlyFans"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, security responsibilities, and platform rules.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T21:46:08.129Z",
    "policies": [
      {
        "id": "of-copyright-policy",
        "reference": "OF-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement. If the intimate image is owned by the victim or a photographer, posting it without permission is a copyright violation.",
        "quote": "You confirm that your Content does not infringe or violate the intellectual property rights of any third-party and that you own or have obtained all rights necessary to distribute, copy, display, publicly perform or otherwise use the Content.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "File a DMCA notice via the DMCA Takedown Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of third-party",
          "Content is posted without necessary rights or licenses",
          "Content violates Terms of Service"
        ]
      },
      {
        "id": "of-hacked-account-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "Users are responsible for their account security. If compromised, users should immediately change their password and contact support.",
        "quote": "We are not responsible for any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorised activities or resulting unauthorised payments or withdrawals of funds.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Contact OnlyFans support immediately at support@onlyfans.com",
            "reason": "To report the compromise and initiate recovery"
          },
          {
            "description": "Provide account details (username, email) and a description of the unauthorized activity",
            "reason": "To verify ownership and understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "Account is posting content without authorization",
          "Legitimate owner is locked out of the account"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove content that may breach their Terms of Service and will try to notify users when taking such action.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service. We may suspend or delete Content and accounts according to our Terms of Service. If we do, we will try to Notify you.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Follow the Complaints Policy reporting process",
            "reason": "To formally report content that violates Terms of Service"
          },
          {
            "description": "Provide specific URLs of violating content",
            "reason": "To identify the exact content that needs review"
          },
          {
            "description": "Explain how the content violates Terms of Service",
            "reason": "To help OnlyFans assess the violation"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service",
          "Content violates Acceptable Use Policy",
          "Content is illegal or harmful"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring others requires written informed consent from all individuals appearing in the content, and consent can be withdrawn at any time.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans. Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of identity showing you appear in the content",
            "reason": "To verify you are the person in the content"
          },
          {
            "description": "Evidence that you did not provide written informed consent",
            "reason": "To demonstrate the content was posted without permission"
          },
          {
            "description": "Contact support@onlyfans.com to withdraw consent",
            "reason": "To formally notify OnlyFans of consent withdrawal"
          }
        ],
        "removalCriteria": [
          "Individual in content did not provide written informed consent",
          "Individual withdraws their consent to appear in the content",
          "Content features someone without proper authorization"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must be clearly labeled and comply with Terms of Service. Unlabeled AI content of real people may violate transparency requirements.",
        "quote": "AI Generated content must comply with our Terms of Service and must be clearly and conspicuously captioned as AI Generated Content with a signifier such as #ai, or #AIGenerated.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content appears to be AI-generated but lacks proper labeling",
            "reason": "To demonstrate violation of transparency requirements"
          },
          {
            "description": "Proof that AI content uses your likeness without permission",
            "reason": "To establish unauthorized use of your image"
          },
          {
            "description": "Report via Complaints Policy process",
            "reason": "To formally notify OnlyFans of the violation"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not properly labeled with required signifiers",
          "AI content violates Terms of Service",
          "AI content uses someone's likeness without authorization"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Dispute Creator Earnings forfeiture by following the Complaints Policy",
        "Dispute account termination or content deactivation by following the Appeals Policy",
        "Submit dispute within six months of notification or waive the right to dispute",
        "In certain jurisdictions, bring a claim for breach of contract if content is removed in violation of Terms of Service"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T21:46:08.129Z",
    "policies": [
      {
        "id": "of-pp-data-protection",
        "reference": "OF-PP-14",
        "summary": "Users have the right to request deletion/erasure of their Personal Data when there is no legitimate reason for continued processing.",
        "quote": "Request deletion / erasure of your Personal Data: You may ask us to delete or remove Personal Data where there is no legitimate reason for us continuing to process it. You also may ask us to delete or remove your Personal Data where you have exercised your right to object to processing (see below). Please note that we may not always be able to comply with your request of deletion / erasure for specific legal reasons, for example if your account has been deactivated for violations of our Terms of Service.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Sufficient information to confirm identity and properly understand the request",
            "example": "Account details, specific content identification",
            "reason": "To verify identity and process the deletion request"
          }
        ],
        "removalCriteria": [
          "No legitimate reason for continued processing exists",
          "User has exercised right to object to processing",
          "Account has not been deactivated for Terms of Service violations"
        ]
      },
      {
        "id": "of-pp-data-correction",
        "reference": "OF-PP-14",
        "summary": "Users can request correction of incomplete or inaccurate Personal Data held by OnlyFans.",
        "quote": "Request correction of the Personal Data that we hold about you: You may correct any incomplete or inaccurate Personal Data we hold about you.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Information showing the data is incomplete or inaccurate",
            "example": "Correct personal information, documentation of errors",
            "reason": "To verify the correction needed and update records accurately"
          }
        ],
        "removalCriteria": [
          "Personal Data is incomplete or inaccurate"
        ]
      },
      {
        "id": "of-pp-processing-restriction",
        "reference": "OF-PP-14",
        "summary": "Users can request suspension of processing of their Personal Data under certain circumstances.",
        "quote": "Request the restriction of processing of your Personal Data: You may ask us to suspend the processing of Personal Data about you, for example if you want us to establish its accuracy or the reason for processing it.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Justification for why processing should be suspended",
            "example": "Dispute over data accuracy, challenge to processing grounds",
            "reason": "To evaluate whether processing restriction is warranted"
          }
        ],
        "removalCriteria": [
          "Need to establish accuracy of the data",
          "Need to establish the reason for processing",
          "Legitimate grounds for restricting processing exist"
        ]
      },
      {
        "id": "of-pp-consent-withdrawal",
        "reference": "OF-PP-14",
        "summary": "Users can withdraw consent to processing of Personal Data, including Face Recognition Data used for verification.",
        "quote": "Withdraw your consent to the processing of your Personal Data: Please note that withdrawing your consent will not affect the lawfulness of any processing carried out before you withdraw your consent... You may request the withdrawal of your consent to the retention of your Face Recognition Data for the purposes of subsequent authentication (and delete this) by contacting privacy@onlyfans.com.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Clear statement of consent withdrawal",
            "example": "Written request to withdraw consent for specific processing",
            "reason": "To document the withdrawal and stop relevant processing"
          }
        ],
        "removalCriteria": [
          "Processing is based on consent",
          "User clearly withdraws consent",
          "No other legal basis exists for continued processing"
        ]
      },
      {
        "id": "of-pp-account-settings-control",
        "reference": "OF-PP-16",
        "summary": "Users can modify and delete Personal Data through their account settings on OnlyFans.",
        "quote": "Modifying and deleting your Personal Data: If you have an account with us, you may update your account settings on OnlyFans. Please note that changes to your settings may require some time to take effect.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account access credentials",
            "example": "Login to account settings",
            "reason": "To verify account ownership and authorize changes"
          }
        ],
        "removalCriteria": [
          "User has valid account access",
          "Data is modifiable through account settings"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal privacy rights decisions, with specific appeal rights for certain U.S. State residents, and may contact local Attorney General if appeal is denied.",
      "steps": [
        "Submit appeal request using contact details provided in Section 19",
        "If appeal is denied and you are a U.S. State resident with appeal rights, contact your local Attorney General"
      ]
    }
  }
],
};
