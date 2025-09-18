import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Comprehensive legal terms governing platform use, content policies, prohibited activities, user responsibilities, and account management. Covers non-consensual content, harassment, impersonation, and content removal procedures.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T18:29:06.552Z",
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
          "Content infringes or violates intellectual property rights of third-party",
          "User does not own Content or hold all rights necessary to post and monetise the Content",
          "Content uses third-party material without secured rights, licenses, written consents and releases"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove Content that may breach Terms of Service and will quickly remove illegal Content when made aware of it.",
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
            "description": "Quickly remove illegal Content when made aware"
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
          "Content violates internal policies as detected by technology tools, AI and Machine Learning"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION",
        "summary": "OnlyFans may suspend or delete accounts and Content without warning for serious or repeated breaches, threats, or suspected unlawful activity.",
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
            "description": "Evidence of serious or repeated breach of Terms of Service",
            "reason": "To demonstrate violation warranting account action"
          },
          {
            "description": "Evidence of threats to breach Terms of Service with serious consequences",
            "reason": "To show potential harm to platform or users"
          },
          {
            "description": "Evidence of unlawful or fraudulent activity",
            "reason": "To demonstrate illegal conduct requiring intervention"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-coauthored-content-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring others requires either tagging the individual as a Creator or obtaining written consent from individuals 18+ with proof of identity.",
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
            "description": "Proof that individual in content is a tagged Creator on OnlyFans",
            "reason": "To verify the person consented to appear in content"
          },
          {
            "description": "Written, informed consent from individual 18+ appearing in content",
            "reason": "To ensure legal consent for content sharing"
          },
          {
            "description": "Proof of identity of individual appearing in content",
            "reason": "To verify age and identity requirements are met"
          }
        ],
        "removalCriteria": [
          "Individual in Co-Authored Content is not a tagged Creator and consent was not obtained",
          "Individual in Co-Authored Content is under 18 years of age",
          "Written, informed consent was not obtained from individual appearing in content",
          "Individual appearing in Co-Authored Content withdraws their consent"
        ]
      },
      {
        "id": "of-ai-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must be clearly labeled with signifiers like #ai or #AIGenerated and comply with Terms of Service.",
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
            "reason": "To identify unlabeled AI content requiring proper disclosure"
          },
          {
            "description": "Evidence that AI-generated content violates Terms of Service",
            "reason": "To demonstrate policy violations beyond labeling requirements"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled with appropriate signifiers",
          "AI Generated content violates Terms of Service requirements"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute Creator Earnings forfeiture decisions via Complaints Policy and account termination or Content deactivation decisions via Appeals Policy. Disputes must be made within six months of notification or rights are waived.",
      "steps": [
        "Dispute Creator Earnings forfeiture by following the Complaints Policy",
        "Dispute account termination or Content deactivation by following the Appeals Policy",
        "Submit dispute within six months of notification to preserve rights",
        "In certain jurisdictions, bring breach of contract claims where content or platform access is restricted in breach of Terms of Service"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Comprehensive privacy policy detailing data collection practices, user information protection, retention policies, and privacy controls for creators and subscribers.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T18:29:06.552Z",
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
            "description": "DMCA takedown report",
            "example": "Copyright infringement claim following DMCA procedures",
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
        "summary": "OnlyFans moderates and filters text and content uploaded to the platform, livestreaming, and chat messages to monitor and investigate violations of their Terms of Service.",
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
            "example": "Content that violates platform policies",
            "reason": "To identify and investigate policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content identified as inappropriate through moderation systems"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes text and content uploaded by users that is identified as illegal and suspends or deactivates those user accounts.",
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
            "description": "Evidence that content is illegal",
            "example": "Documentation showing content violates applicable laws",
            "reason": "To establish legal violation requiring removal"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Content poses legal compliance risk to platform"
        ]
      },
      {
        "id": "of-pp-tos-violation-removal",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes text and content uploaded by users that violates their Terms of Service and may suspend or deactivate user accounts.",
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
            "example": "Specific policy violation with supporting documentation",
            "reason": "To establish breach of platform terms requiring content removal"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content violates Acceptable Use Policy",
          "User account engaged in prohibited activities"
        ]
      },
      {
        "id": "of-pp-fraud-prevention",
        "reference": "OF-PP-10",
        "summary": "OnlyFans monitors transactions and systems to detect malicious, deceptive, fraudulent, or illegal activity to protect information security and user safety.",
        "quote": "Monitoring transactions and company network, systems, applications, and data, to: (i) detect malicious, deceptive, fraudulent, or illegal activity to protect information security and integrity, and user safety; and (ii) respond to / investigate incidents where appropriate.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of fraudulent or malicious activity",
            "example": "Documentation of account compromise or deceptive practices",
            "reason": "To protect platform security and user safety"
          }
        ],
        "removalCriteria": [
          "Activity identified as malicious or deceptive",
          "Content associated with fraudulent behavior",
          "Activity poses risk to information security or user safety"
        ]
      },
      {
        "id": "of-pp-user-protection",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes personal data as necessary to protect the rights and property of users, the platform, and other third parties.",
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
            "description": "Evidence that rights or property need protection",
            "example": "Documentation showing harm to user rights or property",
            "reason": "To establish legitimate need for protective action"
          }
        ],
        "removalCriteria": [
          "Content threatens user rights or property",
          "Content poses risk to third party rights",
          "Action necessary to protect platform interests"
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
            "description": "Evidence of illegal activity",
            "example": "Documentation supporting criminal law violation",
            "reason": "To fulfill legal reporting obligations and protect public safety"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement notification",
          "Activity poses public safety risk",
          "Content violates criminal law"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise rights regarding personal data processing, including requesting deletion or restriction of processing, by submitting a ticket through their account or emailing privacy@onlyfans.com.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Alternatively, email privacy@onlyfans.com",
        "Provide sufficient information to confirm identity and understand the request",
        "OnlyFans may request additional personal data to verify identity",
        "For US residents in certain states, appeal decisions can be made using the same contact methods"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758220146552-0",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Detailed policy covering prohibited content and behavior, including non-consensual content, harassment, impersonation, and content restrictions.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-18T18:29:06.552Z",
    "policies": [
      {
        "id": "of-aup-content-removal",
        "reference": "OF-AUP-12.1",
        "summary": "OnlyFans reserves the right to suspend or remove Content that may breach their Terms of Service.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service.",
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
            "description": "Evidence that content breaches Terms of Service",
            "example": "Documentation showing violation of acceptable use policy",
            "reason": "To demonstrate content violates platform rules"
          }
        ],
        "removalCriteria": [
          "Content that breaches Terms of Service"
        ]
      },
      {
        "id": "of-aup-illegal-content",
        "reference": "OF-AUP-12.2",
        "summary": "OnlyFans complies with applicable laws requiring proportionate measures to quickly remove illegal Content when they become aware it is on the platform.",
        "quote": "We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans.",
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
            "description": "Quickly remove illegal content"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that content is illegal under applicable laws",
            "example": "Legal documentation or law enforcement report",
            "reason": "To demonstrate content violates applicable laws"
          }
        ],
        "removalCriteria": [
          "Content that is illegal under applicable laws"
        ]
      },
      {
        "id": "of-aup-co-authored-consent",
        "reference": "OF-AUP-16.6",
        "summary": "Co-Authored Content may be deleted where a participant withdraws their consent to appear in that content.",
        "quote": "Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of identity as person appearing in the content",
            "example": "Government-issued ID matching person in content",
            "reason": "To verify the person requesting removal appears in the content"
          },
          {
            "description": "Clear statement withdrawing consent",
            "example": "Written statement explicitly withdrawing consent to appear in specific content",
            "reason": "To document the withdrawal of consent"
          }
        ],
        "removalCriteria": [
          "Individual appearing in Co-Authored Content withdraws consent"
        ]
      },
      {
        "id": "of-aup-copyright-infringement",
        "reference": "OF-AUP-15.6-15.7",
        "summary": "OnlyFans has a DMCA Takedown Policy for responding to reports of infringing content and procedures for complaints about intellectual property infringement.",
        "quote": "Our DMCA Takedown Policy describes our procedures for responding to reports that infringing content was published on OnlyFans. Our Complaints Policy explains how to make a complaint about infringement of intellectual property rights on platforms other than OnlyFans.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "DMCA-compliant takedown notice",
            "example": "Notice identifying copyrighted work, infringing material, and good faith statement",
            "reason": "Required under DMCA procedures for copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Content that infringes copyright or intellectual property rights",
          "Content published without proper authorization from rights holder"
        ]
      },
      {
        "id": "of-aup-account-suspension",
        "reference": "OF-AUP-14.2",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when they suspect serious or repeated breaches of Terms of Service or unlawful activity.",
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
            "description": "Evidence of serious or repeated Terms of Service violations",
            "example": "Documentation of policy violations or unlawful activity",
            "reason": "To demonstrate grounds for account suspension or content removal"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breaches of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "OnlyFans provides an Appeals Policy for disputing account termination or Content deactivation decisions, with a six-month time limit to dispute decisions.",
      "steps": [
        "Follow the Appeals Policy procedures for account termination or Content deactivation decisions",
        "Submit dispute within six months of notification or waive right to dispute",
        "For Creator Earnings forfeiture, follow the Complaints Policy procedures instead"
      ]
    }
  }
],
};
