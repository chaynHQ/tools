import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including non-consensual content, harassment, impersonation, and content removal guidelines.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-18T22:18:48.644Z",
    "policies": [
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOU-16",
        "summary": "Individuals appearing in co-authored content may withdraw consent at any time, requiring content removal.",
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
            "description": "Proof of identity as the individual appearing in the content",
            "reason": "To verify you are the person withdrawing consent"
          },
          {
            "description": "URL(s) of the co-authored content",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Statement of consent withdrawal",
            "reason": "To confirm you are withdrawing your consent to appear in the content"
          }
        ],
        "removalCriteria": [
          "An individual appearing in co-authored content withdraws their consent",
          "Content features someone without their ongoing consent"
        ]
      },
      {
        "id": "of-identity-verification-policy",
        "reference": "OF-TOU-6",
        "summary": "All creators must verify identity with government ID and live selfie, preventing impersonation through mandatory verification.",
        "quote": "To open a Creator account, you must also: Upload a valid form of ID and two photos of you",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report impersonation to support with URL of impersonating profile",
            "reason": "To identify the account engaging in impersonation"
          },
          {
            "description": "Evidence of your own identity",
            "reason": "To verify you are the person being impersonated"
          }
        ],
        "removalCriteria": [
          "Account is impersonating another person or entity",
          "Fraudulent documents were used during verification",
          "Account is operated by someone other than the verified individual"
        ]
      },
      {
        "id": "of-content-responsibility-policy",
        "reference": "OF-TOU-8",
        "summary": "Users are legally responsible for all content they upload and must ensure compliance with Terms of Service and applicable laws.",
        "quote": "You are legally responsible for all Content you Upload. If you are a Creator and someone else assists you with the operation of your Creator account, this does not affect your legal responsibility.",
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
            "description": "URL(s) of the infringing content",
            "reason": "To identify the content that violates terms of service"
          },
          {
            "description": "Description of how the content violates Terms of Service",
            "reason": "To assess the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content violates applicable laws",
          "User does not own rights to the content or lacks necessary licenses"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOU-14",
        "summary": "OnlyFans may suspend or delete accounts and content for Terms of Service violations, with ability to withhold earnings and refund payments.",
        "quote": "At any time, without warning or Notice and for as long as is necessary to review the relevant facts, we may: (i) suspend or delete your account and/or your Content; (ii) pause Fan Payments which would have been due during the suspension period; (iii) withhold any part of your Creator Earnings; and/or (iv) suspend, refund, or cancel Fan Payments",
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
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of Terms of Service violation",
            "reason": "To demonstrate the account or content violates platform rules"
          },
          {
            "description": "Documentation of harm or potential harm",
            "reason": "To show serious consequences from the violation"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, with a six-month time limit.",
      "steps": [
        "Submit dispute within six months of notification",
        "Follow the Appeals Policy process for account termination or content deactivation",
        "Follow the Complaints Policy process for Creator Earnings forfeiture decisions"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, security responsibilities, copyright policies, and community standards.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T22:18:48.644Z",
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
          "Content is posted without necessary rights or licenses"
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
          "Account is posting content without owner's permission",
          "Legitimate owner is locked out of the account"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring other individuals requires their written, informed consent. Content may be removed if consent is withdrawn.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans... Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
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
            "description": "Proof of identity of the individual appearing in the content",
            "reason": "To verify the person requesting removal is the individual in the content"
          },
          {
            "description": "Statement that consent was not given or has been withdrawn",
            "reason": "To establish lack of consent for content sharing"
          },
          {
            "description": "URL(s) of the specific content",
            "reason": "To identify the content for removal"
          }
        ],
        "removalCriteria": [
          "Content features individual without their written, informed consent",
          "Individual appearing in content has withdrawn their consent",
          "Creator cannot provide proof of consent when requested"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must be clearly labeled and comply with Terms of Service. Unlabeled AI content may be subject to removal.",
        "quote": "AI Generated content must comply with our Terms of Service and must be clearly and conspicuously captioned as AI Generated Content with a signifier such as #ai, or #AIGenerated.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content is AI-generated (technical analysis, metadata, etc.)",
            "reason": "To establish that content is artificially generated"
          },
          {
            "description": "Proof that AI content is not properly labeled",
            "reason": "To show violation of transparency requirements"
          },
          {
            "description": "URL(s) of the unlabeled AI content",
            "reason": "To identify the specific content in violation"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled",
          "AI content violates other Terms of Service provisions"
        ]
      },
      {
        "id": "of-terms-violation-policy",
        "reference": "OF-TOS-VIOLATION",
        "summary": "OnlyFans may suspend or remove content and accounts that violate Terms of Service, including serious or repeated breaches.",
        "quote": "We may suspend or delete your account and/or your Content; pause Fan Payments which would have been due during the suspension period; withhold any part of your Creator Earnings; and/or suspend, refund, or cancel Fan Payments if: we think you have or may have seriously or repeatedly breached the Terms of Service; you attempt, or threaten, to breach the Terms of Service in a way which we think has or could have serious consequences for us or another User",
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
            "description": "Evidence of Terms of Service violation",
            "reason": "To demonstrate breach of platform rules"
          },
          {
            "description": "Documentation of harm or potential harm to users",
            "reason": "To show serious consequences of the violation"
          },
          {
            "description": "URL(s) of violating content or account",
            "reason": "To identify the specific violation"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Content violates Acceptable Use Policy or Community Guidelines"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture through the Complaints Policy.",
      "steps": [
        "Submit dispute within six months of notification to avoid waiving rights",
        "Follow Appeals Policy for account termination or content deactivation decisions",
        "Follow Complaints Policy for Creator Earnings forfeiture decisions",
        "Provide supporting evidence and documentation for the appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data, including GDPR compliance and data retention policies.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T22:18:48.644Z",
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
            "description": "Report through appropriate channels as specified in Terms of Service",
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
            "example": "Legal documentation or clear violation of criminal law",
            "reason": "To verify illegality before removal"
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
        "quote": "investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
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
            "description": "DMCA takedown notice following proper legal format",
            "example": "Formal DMCA notice with required elements",
            "reason": "To establish copyright ownership and infringement claim"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice received",
          "Content infringes on intellectual property rights"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "OF-PP-10",
        "summary": "OnlyFans reports illegal activity to law enforcement authorities and other governmental organizations, and provides information in response to investigations.",
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
            "description": "Evidence of illegal activity requiring law enforcement involvement",
            "example": "Documentation of criminal behavior",
            "reason": "To enable proper law enforcement response"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement reporting",
          "Content poses safety risk to users or third parties"
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
            "description": "Evidence demonstrating threat to user rights, property, or safety",
            "example": "Documentation of harassment, threats, or unauthorized content sharing",
            "reason": "To assess and respond to safety concerns"
          }
        ],
        "removalCriteria": [
          "Content threatens user rights or property",
          "Content poses safety risk to users or third parties"
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
            "description": "Valid identity verification and specific data deletion request",
            "example": "Account verification and detailed description of data to be deleted",
            "reason": "To verify identity and process legitimate deletion requests"
          }
        ],
        "removalCriteria": [
          "No legitimate reason for continued processing exists",
          "User has exercised right to object to processing",
          "Account not deactivated for Terms of Service violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can contact OnlyFans through support tickets or email privacy@onlyfans.com to exercise their rights regarding personal data, including appeals for certain U.S. state residents.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Alternatively, email privacy@onlyfans.com",
        "For U.S. residents: Submit appeal requests using the same contact methods",
        "If appeal is denied, residents of certain U.S. states may contact their local Attorney General"
      ]
    }
  }
],
};
