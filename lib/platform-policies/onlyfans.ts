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
    "accessTimestamp": "2025-09-22T12:01:33.124Z",
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
        "summary": "OnlyFans reserves the right to remove Content that violates Terms of Service and will suspend or remove Content that may breach their terms.",
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
            "description": "Report via Complaints Policy process",
            "reason": "To initiate content review and removal process"
          },
          {
            "description": "Evidence that content violates Terms of Service",
            "reason": "To demonstrate policy violation"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content may breach Terms of Service"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION",
        "summary": "OnlyFans may suspend or delete accounts and content without warning for serious or repeated breaches, threats to breach terms, or suspected unlawful/fraudulent activity.",
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
            "description": "Evidence of serious or repeated Terms of Service breach",
            "reason": "To demonstrate policy violations warranting account action"
          },
          {
            "description": "Evidence of threats to breach Terms of Service with serious consequences",
            "reason": "To show potential harm to platform or users"
          },
          {
            "description": "Evidence of unlawful or fraudulent activity",
            "reason": "To demonstrate illegal conduct"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring others requires written informed consent from all individuals appearing in the content, and consent can be withdrawn at any time resulting in content deletion.",
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
            "description": "Proof of identity of individual appearing in content",
            "reason": "To verify age and identity requirements"
          },
          {
            "description": "Evidence of lack of written, informed consent",
            "reason": "To demonstrate content was shared without proper authorization"
          },
          {
            "description": "Statement of consent withdrawal",
            "reason": "Individuals can withdraw consent at any time"
          }
        ],
        "removalCriteria": [
          "Individual in content did not provide written, informed consent",
          "Individual in content is under 18 years of age",
          "Participant withdraws consent to appear in the content",
          "Creator fails to provide necessary consent documentation when requested"
        ]
      },
      {
        "id": "of-illegal-content-policy",
        "reference": "OF-TOS-ILLEGAL",
        "summary": "OnlyFans complies with laws requiring proportionate measures to quickly remove illegal content when they become aware it is on the platform.",
        "quote": "We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans. You may report Content you suspect may be illegal by following our Complaints Policy.",
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
            "description": "Report via Complaints Policy process",
            "reason": "Official reporting mechanism for suspected illegal content"
          },
          {
            "description": "Evidence that content is illegal under applicable law",
            "reason": "To demonstrate illegality of the content"
          }
        ],
        "removalCriteria": [
          "Content is illegal under applicable laws",
          "Platform becomes aware of illegal content on OnlyFans"
        ]
      },
      {
        "id": "of-ai-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must comply with Terms of Service and be clearly labeled as AI Generated Content with appropriate signifiers.",
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
            "description": "Evidence that content is AI-generated",
            "reason": "To identify artificially created content"
          },
          {
            "description": "Evidence that AI content lacks proper labeling",
            "reason": "AI content must be clearly marked with appropriate signifiers"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled",
          "AI Generated content violates Terms of Service",
          "AI content lacks required signifiers such as #ai or #AIGenerated"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute Creator Earnings forfeiture decisions via Complaints Policy and dispute account termination or Content deactivation decisions via Appeals Policy. Users have six months to dispute decisions or waive the right to dispute.",
      "steps": [
        "Dispute Creator Earnings forfeiture by following Complaints Policy",
        "Dispute account termination or Content deactivation by following Appeals Policy",
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
    "accessTimestamp": "2025-09-22T12:01:33.124Z",
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
            "description": "DMCA takedown report submission",
            "example": "Copyright infringement claim with required DMCA elements",
            "reason": "To establish intellectual property rights violation"
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
            "reason": "To identify content that violates community standards"
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
            "description": "Evidence that content is illegal under applicable law",
            "example": "Legal basis for why content violates criminal or civil law",
            "reason": "To establish legal violation requiring content removal"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Content poses legal risk to platform or users"
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
            "description": "Demonstration of Terms of Service violation",
            "example": "Specific section of ToS violated and how content violates it",
            "reason": "To establish breach of platform community standards"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content violates Acceptable Use Policy",
          "User account shows pattern of violations"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "OF-PP-10",
        "summary": "OnlyFans reports illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organizations.",
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
            "example": "Documentation of criminal conduct or child exploitation",
            "reason": "To fulfill legal reporting obligations and protect public safety"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement notification",
          "Content poses threat to user safety or public welfare",
          "Content involves exploitation of minors or other serious crimes"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
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
            "description": "Evidence that content threatens user rights or property",
            "example": "Documentation of harassment, threats, or privacy violations",
            "reason": "To establish threat to user safety or rights requiring intervention"
          }
        ],
        "removalCriteria": [
          "Content threatens the rights or property of users",
          "Content poses safety risk to platform users",
          "Content violates third-party rights requiring protection"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise privacy rights and submit requests through their account ticket system or by emailing privacy@onlyfans.com. Appeals process available for certain U.S. state residents.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Email privacy@onlyfans.com with your request",
        "Provide sufficient information to confirm identity and understand request",
        "For U.S. residents: Submit appeal using same contact methods if initial request is denied"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758542493124-0",
    "reference": "OF-AUP-UPDATED",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content including non-consensual intimate imagery, harassment, impersonation, and content removal procedures. Based on search findings, this policy covers NCII, harassment, hate speech, impersonation, and copyright violations.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-22T12:01:33.124Z",
    "policies": [
      {
        "id": "of-tou-content-removal",
        "reference": "OF-TOU-12.1",
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
          "Content that may breach Terms of Service"
        ]
      },
      {
        "id": "of-tou-illegal-content",
        "reference": "OF-TOU-12.2",
        "summary": "OnlyFans complies with applicable laws requiring proportionate measures to quickly remove illegal Content when they become aware it is on OnlyFans.",
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
            "description": "Evidence that content is illegal under applicable law",
            "example": "Legal documentation or law enforcement report",
            "reason": "To demonstrate content violates applicable laws"
          }
        ],
        "removalCriteria": [
          "Content that is illegal under applicable laws"
        ]
      },
      {
        "id": "of-tou-account-suspension",
        "reference": "OF-TOU-14.2",
        "summary": "OnlyFans may suspend or delete accounts and Content without warning for serious or repeated breaches of Terms of Service.",
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
            "description": "Evidence of serious or repeated breach of Terms of Service",
            "example": "Documentation of policy violations or harmful behavior",
            "reason": "To demonstrate account poses risk to platform or users"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-tou-co-authored-consent",
        "reference": "OF-TOU-16.6",
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
            "description": "Proof of identity as person appearing in content",
            "example": "Government-issued ID matching person in content",
            "reason": "To verify the person withdrawing consent appears in the content"
          },
          {
            "description": "Clear statement withdrawing consent",
            "example": "Written statement requesting content removal",
            "reason": "To document withdrawal of consent"
          }
        ],
        "removalCriteria": [
          "Withdrawal of consent by individual appearing in Co-Authored Content"
        ]
      },
      {
        "id": "of-tou-dmca-takedown",
        "reference": "OF-TOU-15.7",
        "summary": "OnlyFans has a DMCA Takedown Policy for responding to reports of infringing content published on OnlyFans.",
        "quote": "Our DMCA Takedown Policy describes our procedures for responding to reports that infringing content was published on OnlyFans.",
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
            "description": "DMCA-compliant takedown notice",
            "example": "Notice meeting requirements of Digital Millennium Copyright Act",
            "reason": "To comply with copyright law procedures"
          }
        ],
        "removalCriteria": [
          "Content that infringes copyright as determined under DMCA procedures"
        ]
      },
      {
        "id": "of-tou-ip-complaints",
        "reference": "OF-TOU-15.7",
        "summary": "OnlyFans has a Complaints Policy for intellectual property rights infringement on platforms other than OnlyFans.",
        "quote": "Our Complaints Policy explains how to make a complaint about infringement of intellectual property rights on platforms other than OnlyFans.",
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
            "description": "Evidence of intellectual property rights infringement",
            "example": "Documentation showing ownership of infringed content",
            "reason": "To establish rights in the allegedly infringed material"
          }
        ],
        "removalCriteria": [
          "Infringement of intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "OnlyFans provides an Appeals Policy for disputing account termination or Content deactivation decisions, with a six-month time limit to dispute decisions.",
      "steps": [
        "Follow the Appeals Policy for account termination or Content deactivation decisions",
        "Submit dispute within six months of notification or waive right to dispute",
        "For Creator Earnings forfeiture, follow the Complaints Policy instead"
      ]
    }
  }
],
};
