import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-22T11:33:09.378Z",
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
            "description": "Proof of identity of the individual appearing in the content",
            "reason": "To verify you are the person depicted in the Co-Authored Content"
          },
          {
            "description": "URL(s) of the Co-Authored Content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement withdrawing consent to appear in the content",
            "reason": "To establish that consent has been withdrawn"
          }
        ],
        "removalCriteria": [
          "An individual appearing in Co-Authored Content withdraws their consent",
          "The content features someone without their current consent"
        ]
      },
      {
        "id": "of-content-responsibility-policy",
        "reference": "OF-TOU-8",
        "summary": "OnlyFans reserves the right to remove Content that violates their Terms of Service and will suspend or remove Content that may breach their terms.",
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
            "reason": "To identify the specific content that violates Terms of Service"
          },
          {
            "description": "Description of how the content violates the Terms of Service",
            "reason": "To assess the nature of the violation"
          },
          {
            "description": "Contact support@onlyfans.com or use the Contact Form",
            "reason": "To report the violation through official channels"
          }
        ],
        "removalCriteria": [
          "Content violates the OnlyFans Terms of Service",
          "Content violates the Acceptable Use Policy",
          "Content is determined to breach platform policies"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOU-14",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when users breach Terms of Service, including for unlawful or fraudulent activity.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the violating account or content",
            "reason": "To identify the account or content in violation"
          },
          {
            "description": "Evidence of Terms of Service breach",
            "reason": "To demonstrate the violation"
          },
          {
            "description": "Evidence of unlawful or fraudulent activity if applicable",
            "reason": "To support claims of illegal activity"
          }
        ],
        "removalCriteria": [
          "User has seriously or repeatedly breached the Terms of Service",
          "User attempts or threatens to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity by the user"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture through the Complaints Policy.",
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
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-22T11:33:09.378Z",
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
          "Content infringes or violates intellectual property rights of a third-party",
          "Content is posted without necessary rights, licenses, or permissions"
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
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT-REMOVAL",
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
            "description": "Report content that violates Terms of Service through the Complaints Policy",
            "reason": "To initiate content review and potential removal"
          },
          {
            "description": "Provide specific URLs or identification of violating content",
            "reason": "To locate and review the reported content"
          }
        ],
        "removalCriteria": [
          "Content breaches OnlyFans Terms of Service",
          "Content violates Acceptable Use Policy",
          "Content is posted without proper authorization or consent"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-CO-AUTHORED",
        "summary": "Content featuring individuals other than the account owner requires written, informed consent from all individuals appearing in the content.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans.",
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
            "description": "Evidence that you appear in the content without consent",
            "reason": "To establish violation of consent requirements"
          },
          {
            "description": "Proof of identity showing you are the individual in the content",
            "reason": "To verify you are the person whose consent was not obtained"
          },
          {
            "description": "Statement that you did not provide written, informed consent",
            "reason": "To establish lack of required consent"
          }
        ],
        "removalCriteria": [
          "Content features individuals who have not provided written, informed consent",
          "Individual appearing in Co-Authored Content withdraws their consent",
          "Creator cannot provide necessary consent documentation when requested"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-AI-CONTENT",
        "summary": "AI Generated content must be clearly labeled and comply with Terms of Service, which could include requirements for consent when depicting real individuals.",
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
            "description": "Evidence that AI-generated content depicts you without consent",
            "reason": "To establish unauthorized use of your likeness"
          },
          {
            "description": "Proof of identity showing you are the person depicted",
            "reason": "To verify you are the individual whose likeness was used"
          },
          {
            "description": "Statement that you did not consent to AI generation of your likeness",
            "reason": "To establish lack of consent for AI-generated depiction"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not properly labeled as required",
          "AI Generated content violates Terms of Service",
          "AI Generated content depicts individuals without their consent"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Submit dispute within six months of notification or waive right to dispute",
        "Provide relevant evidence and reasoning for the appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-22T11:33:09.378Z",
    "policies": [
      {
        "id": "of-pp-dmca",
        "reference": "OF-PP-10",
        "summary": "OnlyFans investigates and responds to reports made through their DMCA takedown procedure to protect Creator's intellectual property rights.",
        "quote": "We may process Personal Data if it is in our, or a third-party's, legitimate interests (as detailed in the table below). This may include, for example, investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "DMCA takedown report",
            "example": "Copyright infringement notice following DMCA format",
            "reason": "Required to establish intellectual property rights violation"
          }
        ],
        "removalCriteria": [
          "Content violates Creator's intellectual property rights",
          "Valid DMCA takedown notice submitted"
        ]
      },
      {
        "id": "of-pp-illegal-content",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes illegal content from the Services and suspends or deactivates user accounts that upload such content.",
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
            "description": "Evidence that content is illegal under applicable law",
            "example": "Legal documentation or law enforcement report",
            "reason": "Required to establish illegal nature of content"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law"
        ]
      },
      {
        "id": "of-pp-tos-violations",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes content that violates their Terms of Service and may suspend or deactivate user accounts for such violations.",
        "quote": "Removal from the Services of text and content uploaded by users that is identified as violating our Terms of Service and where appropriate, suspending or deactivating user accounts.",
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
            "example": "Specific citation of violated terms and supporting documentation",
            "reason": "Required to establish breach of platform terms"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content violates Acceptable Use Policy"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "OF-PP-10",
        "summary": "OnlyFans conducts moderation and filtration of text, content, livestreaming, and chat messages to monitor and investigate violations of their Terms of Service.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans; livestreaming on OnlyFans; content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service.",
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
            "description": "Report of Terms of Service violation",
            "example": "Description of violating content with specific details",
            "reason": "Required for platform investigation and moderation review"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service as identified through moderation",
          "Content violates platform community standards"
        ]
      },
      {
        "id": "of-pp-law-enforcement",
        "reference": "OF-PP-10",
        "summary": "OnlyFans reports illegal activity to law enforcement authorities and provides information in response to investigations by relevant authorities.",
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
            "example": "Law enforcement report or official investigation documentation",
            "reason": "Required to establish illegal nature of content for reporting to authorities"
          }
        ],
        "removalCriteria": [
          "Content constitutes illegal activity requiring law enforcement reporting",
          "Content poses safety risk to users or third parties"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
