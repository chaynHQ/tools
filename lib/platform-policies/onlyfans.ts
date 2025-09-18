import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T22:08:42.439Z",
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
            "description": "Proof of original ownership or necessary rights",
            "reason": "To establish copyright ownership or licensing rights"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of third parties",
          "User does not own Content or hold all rights necessary to post and monetise the Content",
          "Content uses third-party material without secured rights, licenses, written consents and releases"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove Content that may breach Terms of Service and will quickly remove illegal Content when they become aware of it.",
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
          "removal": {
            "value": null,
            "unit": null,
            "description": "Quickly remove illegal Content when aware"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report Content suspected to be illegal by following the Complaints Policy",
            "reason": "To notify OnlyFans of potentially illegal content for review"
          }
        ],
        "removalCriteria": [
          "Content may breach Terms of Service",
          "Content is illegal under applicable laws",
          "Content violates OnlyFans policies as determined by review"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring others requires written, informed consent from individuals at least 18 years old, and consent can be withdrawn at any time resulting in content deletion.",
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
            "description": "Proof of identity of individuals appearing in content",
            "reason": "To verify age and identity requirements"
          },
          {
            "description": "Written, informed consent from individuals appearing in content",
            "reason": "To demonstrate permission to share content featuring others"
          },
          {
            "description": "Documentation confirming withdrawal of consent if applicable",
            "reason": "To support removal request based on consent withdrawal"
          }
        ],
        "removalCriteria": [
          "Individual in Co-Authored Content has not provided written, informed consent",
          "Individual appearing in Co-Authored Content withdraws their consent",
          "Creator fails to provide required documentation about consent and identity verification"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "OnlyFans is not responsible for lost, stolen, or compromised accounts and resulting unauthorized activities or payments, but may review suspected misuse and cooperate with law enforcement.",
        "quote": "Any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorised activities or resulting unauthorised payments or withdrawals of funds. We may review any suspected or alleged misuse, abuse, or unlawful use of OnlyFans and cooperate with law enforcement agencies in such reviews.",
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
            "description": "Contact support@onlyfans.com to report compromised account",
            "reason": "To notify OnlyFans of unauthorized access for investigation"
          },
          {
            "description": "Provide account details and description of unauthorized activity",
            "reason": "To verify ownership and understand scope of compromise"
          },
          {
            "description": "Evidence of unauthorized content posting or account misuse",
            "reason": "To support claims of account compromise and unauthorized activity"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity on account",
          "Account is posting content without owner's permission due to compromise",
          "Suspected misuse, abuse, or unlawful use of OnlyFans platform"
        ]
      },
      {
        "id": "of-ai-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must be clearly labeled and comply with Terms of Service, providing a mechanism to address deepfakes and non-consensual AI-generated imagery.",
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
            "description": "Report unlabeled AI-generated content through Complaints Policy",
            "reason": "To identify content that violates AI labeling requirements"
          },
          {
            "description": "Evidence that content is AI-generated but not properly labeled",
            "reason": "To demonstrate violation of transparency requirements"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled",
          "AI Generated content violates other Terms of Service provisions",
          "Content appears to be AI-generated deepfake or non-consensual imagery"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or Content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Dispute Creator Earnings forfeiture decision by following the Complaints Policy",
        "Dispute account termination or Content deactivation decision by following the Appeals Policy",
        "Submit dispute within six months of notification or waive right to dispute",
        "In certain jurisdictions, bring breach of contract claim for improper content removal or platform restriction"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T22:08:42.439Z",
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
            "description": "Sufficient information to confirm identity",
            "example": "Account details and verification information",
            "reason": "To verify the requester's identity before processing data deletion"
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
            "description": "Identity verification information",
            "example": "Account credentials and supporting documentation",
            "reason": "To confirm identity before allowing data corrections"
          },
          {
            "description": "Details of incorrect information",
            "example": "Specific data fields that need correction",
            "reason": "To identify what needs to be corrected"
          }
        ],
        "removalCriteria": [
          "Personal Data is incomplete or inaccurate",
          "User can verify their identity"
        ]
      },
      {
        "id": "of-pp-data-access",
        "reference": "OF-PP-14",
        "summary": "Users can request access to their Personal Data and receive a copy of what OnlyFans holds about them.",
        "quote": "Request to know or access to your Personal Data: You may receive a copy of the Personal Data we hold about you and to check that we are lawfully processing it.",
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
            "description": "Identity verification",
            "example": "Account information and verification documents",
            "reason": "To ensure Personal Data is only shared with the rightful owner"
          }
        ],
        "removalCriteria": [
          "User can verify their identity",
          "Request contains sufficient information for processing"
        ]
      },
      {
        "id": "of-pp-processing-restriction",
        "reference": "OF-PP-14",
        "summary": "Users can request suspension of Personal Data processing in specific circumstances.",
        "quote": "Request the restriction of processing of your Personal Data: You may ask us to suspend the processing of Personal Data about you, for example if you want us to establish its accuracy or the reason for processing it.",
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
            "description": "Identity verification",
            "example": "Account credentials",
            "reason": "To verify the requester's identity"
          },
          {
            "description": "Reason for restriction request",
            "example": "Dispute over data accuracy or processing purpose",
            "reason": "To understand the basis for the restriction request"
          }
        ],
        "removalCriteria": [
          "User wants to establish data accuracy",
          "User questions the reason for processing",
          "User can verify their identity"
        ]
      },
      {
        "id": "of-pp-consent-withdrawal",
        "reference": "OF-PP-14",
        "summary": "Users can withdraw consent for Personal Data processing, including Face Recognition Data used for authentication.",
        "quote": "Withdraw your consent to the processing of your Personal Data: Please note that withdrawing your consent will not affect the lawfulness of any processing carried out before you withdraw your consent. You may request the withdrawal of your consent to the retention of your Face Recognition Data for the purposes of subsequent authentication (and delete this) by contacting privacy@onlyfans.com.",
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
            "description": "Identity verification",
            "example": "Account information",
            "reason": "To confirm the user's identity before processing consent withdrawal"
          },
          {
            "description": "Specific consent to be withdrawn",
            "example": "Face Recognition Data retention consent",
            "reason": "To identify which consent is being withdrawn"
          }
        ],
        "removalCriteria": [
          "User has previously given consent for processing",
          "User can verify their identity",
          "Consent withdrawal does not affect past lawful processing"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can lodge complaints with data protection regulators and have rights to appeal decisions in certain U.S. States.",
      "steps": [
        "Contact OnlyFans privacy team at privacy@onlyfans.com or through account ticket system",
        "If unsatisfied, lodge complaint with relevant data protection regulator (ICO in UK, FDPIC in Switzerland, local regulators in EEA)",
        "For U.S. residents in certain states, submit appeal using contact details provided",
        "If appeal is denied, contact local Attorney General"
      ]
    }
  },
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Detailed policy outlining prohibited content including non-consensual intimate imagery, harassment, impersonation, illegal activities, and content removal procedures. Critical for NCII takedown requests.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-18T22:08:42.439Z",
    "policies": [
      {
        "id": "of-co-authored-consent",
        "reference": "OF-TOU-16",
        "summary": "Individuals appearing in Co-Authored Content may withdraw their consent at any time, requiring content removal.",
        "quote": "Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identity verification as the individual appearing in the content",
            "reason": "To confirm you are the person withdrawing consent"
          },
          {
            "description": "URL(s) of the Co-Authored Content",
            "reason": "To locate the specific content for removal"
          },
          {
            "description": "Statement withdrawing consent to appear in the content",
            "reason": "To establish that consent has been withdrawn"
          }
        ],
        "removalCriteria": [
          "An individual appearing in Co-Authored Content withdraws their consent",
          "The content features someone who did not provide written, informed consent"
        ]
      },
      {
        "id": "of-content-responsibility",
        "reference": "OF-TOU-8",
        "summary": "OnlyFans reserves the right to remove Content that violates their Terms of Service and will try to notify users when content is suspended or deleted.",
        "quote": "We reserve the right to remove Content that violates our Terms of Service. We may suspend or delete Content and accounts according to our Terms of Service. If we do, we will try to Notify you.",
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
            "description": "URL(s) of the violating content",
            "reason": "To identify the content that violates Terms of Service"
          },
          {
            "description": "Description of how the content violates the Terms of Service",
            "reason": "To assess the violation and determine appropriate action"
          }
        ],
        "removalCriteria": [
          "Content violates the OnlyFans Terms of Service",
          "Content violates the Acceptable Use Policy",
          "Content does not comply with applicable laws"
        ]
      },
      {
        "id": "of-account-suspension",
        "reference": "OF-TOU-14",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when users seriously or repeatedly breach Terms of Service or engage in unlawful activity.",
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
            "description": "URL(s) of the account or content in violation",
            "reason": "To identify the account or content for review"
          },
          {
            "description": "Description of the serious or repeated breach of Terms of Service",
            "reason": "To assess the severity of the violation"
          },
          {
            "description": "Evidence of unlawful or fraudulent activity if applicable",
            "reason": "To support claims of illegal activity"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of the Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through OnlyFans' Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Submit dispute within six months of notification to avoid waiving rights",
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Provide supporting evidence and reasoning for the appeal"
      ]
    }
  }
],
};
