import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, security responsibilities, and comprehensive content restrictions covering non-consensual content, harassment, and illegal activities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T19:40:04.260Z",
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
            "description": "Follow DMCA Takedown Policy procedures",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership or necessary rights",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of third-party",
          "User does not own Content or lack necessary rights to distribute it",
          "Content posted without proper licenses or permissions"
        ]
      },
      {
        "id": "of-hacked-account-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "Users are responsible for their account security. Platform is not responsible for lost, stolen, or compromised accounts and resulting unauthorized activities.",
        "quote": "Any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorised activities or resulting unauthorised payments or withdrawals of funds.",
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
            "description": "Contact OnlyFans support at support@onlyfans.com",
            "reason": "To report the compromise and initiate recovery"
          },
          {
            "description": "Provide account details and description of unauthorized activity",
            "reason": "To verify ownership and understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "Account posting content without owner's permission due to compromise"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove Content that violates Terms of Service and uses AI tools to detect policy violations.",
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
            "description": "Quickly remove illegal content when aware"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Follow Complaints Policy procedures",
            "reason": "To report suspected illegal content"
          },
          {
            "description": "Evidence that content violates Terms of Service",
            "reason": "To establish policy violation"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service",
          "Content is illegal under applicable laws",
          "Content violates platform policies as detected by AI tools"
        ]
      },
      {
        "id": "of-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "All individuals appearing in content must provide written, informed consent. Content may be deleted if consent is withdrawn.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans. Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
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
            "description": "Proof of identity of individual appearing in content",
            "reason": "To verify age and identity requirements"
          },
          {
            "description": "Evidence of written, informed consent or withdrawal of consent",
            "reason": "To establish consent status for content sharing"
          },
          {
            "description": "Documentation showing individual did not consent to sharing",
            "reason": "To support removal request for non-consensual content"
          }
        ],
        "removalCriteria": [
          "Individual in content did not provide written, informed consent",
          "Individual has withdrawn their consent to appear in the content",
          "Content features someone without proper consent documentation"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION",
        "summary": "OnlyFans may suspend or delete accounts and content without warning for serious or repeated Terms of Service breaches.",
        "quote": "At any time, without warning or Notice and for as long as is necessary to review the relevant facts, we may: (i) suspend or delete your account and/or your Content; (ii) pause Fan Payments which would have been due during the suspension period; (iii) withhold any part of your Creator Earnings; and/or (iv) suspend, refund, or cancel Fan Payments if: we think you have or may have seriously or repeatedly breached the Terms of Service; you attempt, or threaten, to breach the Terms of Service in a way which we think has or could have serious consequences for us or another User",
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
            "description": "Evidence of serious or repeated Terms of Service breach",
            "reason": "To justify account suspension or content removal"
          },
          {
            "description": "Documentation of harmful consequences to users or platform",
            "reason": "To establish severity of policy violation"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms in way with serious consequences",
          "Unlawful or fraudulent activity suspected"
        ]
      },
      {
        "id": "of-ai-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must be clearly labeled and comply with Terms of Service.",
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
            "reason": "To establish transparency requirement violation"
          },
          {
            "description": "Proof that AI content violates Terms of Service",
            "reason": "To establish policy violation beyond labeling requirements"
          }
        ],
        "removalCriteria": [
          "AI Generated content not properly labeled with required signifiers",
          "AI Generated content violates Terms of Service requirements"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture through the Complaints Policy.",
      "steps": [
        "Follow Appeals Policy for account termination or content deactivation disputes",
        "Follow Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive right to dispute",
        "Provide required documentation and evidence for review"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data, including identity verification requirements and data retention policies.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T19:40:04.260Z",
    "policies": [
      {
        "id": "of-pp-dmca",
        "reference": "OF-PP-10",
        "summary": "OnlyFans investigates and responds to reports made through their DMCA takedown procedure to protect Creator's intellectual property rights.",
        "quote": "We may process Personal Data if it is in our, or a third-party's, legitimate interests (as detailed in the table below). This may include, for example, investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
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
            "description": "DMCA takedown report through official procedure",
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
        "id": "of-pp-content-moderation",
        "reference": "OF-PP-10",
        "summary": "OnlyFans conducts moderation and filtration of text and content uploaded to the platform, livestreaming, and chat messages to monitor and investigate violations of their Terms of Service.",
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
            "example": "Description of how content violates platform rules",
            "reason": "Needed to investigate potential policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content identified through automated or manual moderation systems"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes text and content uploaded by users that is identified as illegal and suspends or deactivates associated user accounts.",
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
            "example": "Legal basis showing content violates criminal or civil law",
            "reason": "Required to establish illegal nature of content"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Content poses legal liability or violates criminal statutes"
        ]
      },
      {
        "id": "of-pp-tos-violation-removal",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes text and content that violates their Terms of Service and may suspend or deactivate user accounts where appropriate.",
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
            "description": "Demonstration of Terms of Service violation",
            "example": "Specific section of ToS violated and how content breaches it",
            "reason": "Needed to establish policy violation"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content violates Acceptable Use Policy"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "OF-PP-10",
        "summary": "OnlyFans reports illegal activity to relevant law enforcement authorities, governmental authorities and non-governmental organizations.",
        "quote": "Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations.",
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
            "example": "Documentation showing criminal activity or child exploitation",
            "reason": "Required for law enforcement referral and investigation"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement intervention",
          "Content relates to child exploitation or other serious criminal activity"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes personal data as necessary to protect the rights and property of users and other third parties.",
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
            "description": "Evidence that content threatens user rights or property",
            "example": "Documentation showing harm to user safety or property rights",
            "reason": "Needed to establish threat to user or third party rights"
          }
        ],
        "removalCriteria": [
          "Content threatens the rights or property of users or third parties",
          "Content poses safety risks to platform users"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise rights regarding Personal Data processing including requesting deletion, correction, or restriction of processing by contacting OnlyFans through their account ticket system or privacy email.",
      "steps": [
        "Submit a ticket through your OnlyFans account at /my/tickets/create",
        "Alternatively, email privacy@onlyfans.com with your request",
        "Provide sufficient information to confirm your identity",
        "Include details about the specific content or processing you want to challenge",
        "OnlyFans will evaluate and respond to the request"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758224404260-0",
    "reference": "OF-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community standards covering prohibited content including non-consensual intimate imagery, harassment, bullying, hate speech, and content moderation policies.",
    "url": "https://onlyfans.com/help/3/16/49",
    "accessTimestamp": "2025-09-18T19:40:04.260Z",
    "policies": [],
    "appealProcess": null
  }
],
};
