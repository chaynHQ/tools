import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including non-consensual content, harassment, illegal activities, and content restrictions.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-18T21:50:03.366Z",
    "policies": [
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOU-16",
        "summary": "Individuals appearing in Co-Authored Content may withdraw their consent at any time, requiring the content to be deleted.",
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
            "description": "Proof of identity showing you appear in the content",
            "reason": "To verify you are the person withdrawing consent"
          },
          {
            "description": "URL(s) of the Co-Authored Content",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Statement withdrawing consent for the content to remain on the platform",
            "reason": "To establish that consent has been withdrawn"
          }
        ],
        "removalCriteria": [
          "An individual appearing in Co-Authored Content withdraws their consent",
          "The content features someone who did not provide written, informed consent"
        ]
      },
      {
        "id": "of-content-responsibility-policy",
        "reference": "OF-TOU-8",
        "summary": "OnlyFans reserves the right to remove Content that violates their Terms of Service and may suspend or remove Content that may breach their Terms of Service.",
        "quote": "We reserve the right to remove Content that violates our Terms of Service. We reserve the right to suspend or remove Content that may breach our Terms of Service.",
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
            "reason": "To identify the specific content for review and removal"
          },
          {
            "description": "Description of how the content violates the Terms of Service",
            "reason": "To assess the nature of the violation"
          },
          {
            "description": "Evidence supporting the violation claim",
            "reason": "To substantiate the Terms of Service breach"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content may breach OnlyFans Terms of Service"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOU-14",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when users seriously or repeatedly breach Terms of Service or engage in unlawful activity.",
        "quote": "At any time, without warning or Notice and for as long as is necessary to review the relevant facts, we may: (i) suspend or delete your account and/or your Content; (ii) pause Fan Payments which would have been due during the suspension period; (iii) withhold any part of your Creator Earnings; and/or (iv) suspend, refund, or cancel Fan Payments if: we think you have or may have seriously or repeatedly breached the Terms of Service; you attempt, or threaten, to breach the Terms of Service in a way which we think has or could have serious consequences for us or another User; and/or we suspect that all or any part of the Creator Earnings result from unlawful or fraudulent activity",
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
            "description": "URL(s) of the violating account or content",
            "reason": "To identify the account or content for enforcement action"
          },
          {
            "description": "Evidence of serious or repeated Terms of Service breaches",
            "reason": "To justify suspension or deletion without warning"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity if applicable",
            "reason": "To support claims of illegal conduct"
          }
        ],
        "removalCriteria": [
          "User has seriously or repeatedly breached the Terms of Service",
          "User attempts or threatens to breach Terms of Service with serious consequences",
          "Creator Earnings result from unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions through OnlyFans' Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive the right to dispute"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, security responsibilities, and platform rules.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T21:50:03.366Z",
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
        "summary": "OnlyFans reserves the right to suspend or remove content that violates Terms of Service and will try to notify users when taking such action.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service. We reserve the right to remove Content that violates our Terms of Service. We may suspend or delete Content and accounts according to our Terms of Service. If we do, we will try to Notify you.",
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
            "description": "Report content through the Complaints Policy process",
            "reason": "To initiate review of potentially violating content"
          },
          {
            "description": "Provide specific URLs of violating content",
            "reason": "To identify the content that violates Terms of Service"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service",
          "Content violates OnlyFans policies",
          "Content is posted without proper authorization"
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
            "description": "Proof of identity of the person appearing in content",
            "reason": "To verify the identity of individuals in co-authored content"
          },
          {
            "description": "Evidence that consent was not obtained or has been withdrawn",
            "reason": "To establish lack of consent for content sharing"
          },
          {
            "description": "Contact support@onlyfans.com with details of non-consensual content",
            "reason": "To report content posted without proper consent"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Consent has been withdrawn by any participant in the content",
          "Proper identity verification was not obtained for all participants"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must comply with Terms of Service and must be clearly labeled as AI Generated Content.",
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
            "description": "Evidence that content is AI-generated but not properly labeled",
            "reason": "To identify unlabeled AI content that violates transparency requirements"
          },
          {
            "description": "Report through Complaints Policy if AI content violates other Terms of Service",
            "reason": "To address AI content that creates unauthorized representations"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled",
          "AI Generated content violates other Terms of Service provisions",
          "AI content creates unauthorized representations of individuals"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Disputes must be made within six months of notification or the right to dispute is waived",
        "In certain jurisdictions, users may bring breach of contract claims for improper content removal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T21:50:03.366Z",
    "policies": [
      {
        "id": "of-pp-content-moderation",
        "reference": "OF-PP-10",
        "summary": "OnlyFans moderates and filters content uploaded to the platform to monitor and investigate violations of their Terms of Service, including removal of content that violates policies.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans, livestreaming on OnlyFans, content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service.",
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
            "description": "Report through appropriate channels as referenced in Terms of Service",
            "example": "Content violation report",
            "reason": "To enable investigation of Terms of Service violations"
          }
        ],
        "removalCriteria": [
          "Content identified as violating Terms of Service",
          "Content identified as illegal"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes content identified as illegal from the platform and suspends or deactivates associated user accounts.",
        "quote": "Removal from the Services of text and content uploaded by users that is identified as illegal, and suspending or deactivating those user accounts.",
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
            "description": "Evidence demonstrating content is illegal under applicable law",
            "example": "Legal documentation or law enforcement report",
            "reason": "To verify illegal nature of content before removal"
          }
        ],
        "removalCriteria": [
          "Content identified as illegal under applicable law"
        ]
      },
      {
        "id": "of-pp-dmca-takedown",
        "reference": "OF-PP-10",
        "summary": "OnlyFans investigates and responds to reports made through their DMCA takedown procedure to protect intellectual property rights.",
        "quote": "This may include, for example, investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
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
            "description": "DMCA takedown notice with required elements",
            "example": "Copyright ownership documentation and identification of infringing content",
            "reason": "To verify copyright ownership and infringement claims"
          }
        ],
        "removalCriteria": [
          "Content that infringes intellectual property rights",
          "Valid DMCA takedown notice received"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "OF-PP-10",
        "summary": "OnlyFans reports illegal activity to relevant law enforcement authorities and other governmental organizations, and provides information in response to their requests and investigations.",
        "quote": "Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations. Providing relevant information to, or responding to requests from / investigations by, relevant law enforcement authorities, other governmental authorities and non-governmental organisations.",
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
            "description": "Evidence of illegal activity",
            "example": "Documentation showing violation of applicable laws",
            "reason": "To enable proper reporting to authorities and compliance with legal obligations"
          }
        ],
        "removalCriteria": [
          "Content involving illegal activity",
          "Content subject to law enforcement investigation"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes personal data as necessary to protect the rights, property, and safety of users and third parties.",
        "quote": "As necessary or appropriate to protect the rights and property of our users, us, and other third parties.",
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
            "description": "Evidence demonstrating threat to user safety or rights",
            "example": "Documentation of harassment, threats, or unauthorized content sharing",
            "reason": "To verify legitimate safety concerns requiring protective action"
          }
        ],
        "removalCriteria": [
          "Content that threatens user safety",
          "Content that violates user rights or property"
        ]
      },
      {
        "id": "of-pp-data-deletion-rights",
        "reference": "OF-PP-14",
        "summary": "Users have the right to request deletion or erasure of their personal data, though OnlyFans may not always comply for specific legal reasons such as Terms of Service violations.",
        "quote": "Request deletion / erasure of your Personal Data: You may ask us to delete or remove Personal Data where there is no legitimate reason for us continuing to process it. Please note that we may not always be able to comply with your request of deletion / erasure for specific legal reasons, for example if your account has been deactivated for violations of our Terms of Service.",
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
            "description": "Identity verification and specific data deletion request",
            "example": "Account information and description of data to be deleted",
            "reason": "To verify user identity and process legitimate deletion requests"
          }
        ],
        "removalCriteria": [
          "No legitimate reason for continued data processing",
          "Valid user request for data deletion",
          "No legal obligations preventing deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can contact OnlyFans through support tickets or email privacy@onlyfans.com for privacy-related requests. US residents in certain states have the right to appeal privacy request decisions.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Email privacy@onlyfans.com with your request",
        "Provide sufficient information to confirm identity",
        "For US residents: submit appeal using same contact methods if initial request is denied"
      ]
    }
  }
],
};
