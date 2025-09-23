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
    "accessTimestamp": "2025-09-23T12:39:57.404Z",
    "policies": [
      {
        "id": "of-ncii-policy",
        "reference": "OF-AUP-NCSII",
        "summary": "Strictly prohibits posting or sharing non-consensual intimate images (NCII). Consent can be withdrawn at any time, requiring content to be taken down.",
        "quote": "We strictly prohibit posting or sharing non-consensual intimate images (NCII). Consent can be withdrawn at any time, requiring content to be taken down.",
        "contentTypes": [
          "intimate"
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
            "value": 48,
            "unit": "hours",
            "description": "Mandated removal under TAKE IT DOWN Act"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the infringing content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "A description of the violation and evidence of non-consent",
            "reason": "To establish that consent was not given or has been withdrawn"
          },
          {
            "description": "Contact support and select 'Law Enforcement/Legal Matters' for non-consensual content",
            "reason": "To ensure the report is handled with appropriate priority and sensitivity"
          }
        ],
        "removalCriteria": [
          "Content is sexually explicit and shared without the consent of all depicted individuals",
          "A depicted individual withdraws their prior consent",
          "Content violates specific prohibitions in the AUP (e.g., incest, necrophilia, certain bodily fluids, extreme violence)"
        ]
      },
      {
        "id": "of-ai-policy",
        "reference": "OF-AUP-AI",
        "summary": "Prohibits AI-generated deepfakes that impersonate a real individual without their explicit consent.",
        "quote": "We prohibit AI-generated deepfakes that impersonate a real individual without their explicit consent.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the content",
            "reason": "To identify the AI-generated content"
          },
          {
            "description": "Description of the violation (e.g., unlabeled AI, deepfake impersonation)",
            "reason": "To understand the nature of the AI violation"
          },
          {
            "description": "Evidence of impersonation if applicable",
            "reason": "To establish that the AI content impersonates someone without consent"
          }
        ],
        "removalCriteria": [
          "Content is an AI deepfake that impersonates another real individual without their explicit consent",
          "AI-generated content featuring the creator is not clearly labeled with #ai or #AIGenerated"
        ]
      },
      {
        "id": "of-harassment-policy",
        "reference": "OF-AUP-HARASSMENT",
        "summary": "Prohibits using the platform to stalk, bully, abuse, harass, threaten, or intimidate anyone.",
        "quote": "We prohibit using the platform to stalk, bully, abuse, harass, threaten, or intimidate anyone.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the content or user profile",
            "reason": "To identify and review the harassing material"
          },
          {
            "description": "Screenshots of harassing messages",
            "reason": "To provide evidence of the harassing behavior"
          },
          {
            "description": "Description of the abusive behavior",
            "reason": "To assess the nature and impact of the harassment"
          }
        ],
        "removalCriteria": [
          "Content or behavior constitutes targeted harassment or bullying",
          "Abusive or threatening language is used in posts or messages",
          "Content is used to threaten, intimidate, or degrade an individual"
        ]
      },
      {
        "id": "of-privacy-policy",
        "reference": "OF-AUP-PRIVACY",
        "summary": "Prohibits violating others' privacy by sharing their private information without consent (doxing).",
        "quote": "We prohibit violating others' privacy by sharing their private information without consent (doxing).",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "URL(s) of the content containing private information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of the private information exposed",
            "reason": "To understand the nature and scope of the privacy violation"
          },
          {
            "description": "Evidence that the information was shared without consent",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Private information (e.g., address, phone number) is exposed without consent",
          "The information poses a privacy or security risk",
          "Private information is exposed without consent to intimidate or harass",
          "Content consists of private media shared without consent"
        ]
      },
      {
        "id": "of-impersonation-policy",
        "reference": "OF-AUP-IMPERSONATION",
        "summary": "Prohibits impersonating any person or entity. This is strictly enforced through the mandatory creator identity verification process.",
        "quote": "We prohibit impersonating any person or entity. This is strictly enforced through the mandatory creator identity verification process.",
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
            "description": "All creators must pass verification with a government-issued ID and a live selfie",
            "reason": "To prevent impersonation through mandatory identity verification"
          },
          {
            "description": "To report impersonation, contact support with the URL of the impersonating profile and evidence of your own identity",
            "reason": "To verify you are the person being impersonated and process the report"
          }
        ],
        "removalCriteria": [
          "An unverified account is impersonating a person or entity",
          "A verified account is found to have used fraudulent documents",
          "An account is proven to be operated by someone other than the verified individual"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "Section 16",
        "summary": "Requires written, informed consent from all individuals appearing in content. Consent can be withdrawn at any time, requiring content removal.",
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
            "description": "Written, informed consent from all individuals appearing in content",
            "reason": "To verify that all depicted individuals have consented to the content being shared"
          },
          {
            "description": "Proof of identity for all individuals in the content",
            "reason": "To confirm the identity and age of all participants"
          },
          {
            "description": "Documentation of consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals who have not provided written, informed consent",
          "An individual appearing in the content withdraws their consent",
          "Creators fail to provide required documentation for individuals in their content"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "Section 14",
        "summary": "Reserves the right to suspend or delete accounts and content without warning for serious or repeated breaches, unlawful activity, or fraud.",
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
            "description": "Evidence of serious or repeated Terms of Service violations",
            "reason": "To justify account suspension or deletion"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support enforcement action against accounts involved in illegal activities"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breaches of the Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Submit dispute within six months of notification to preserve right to dispute",
        "In certain jurisdictions, users may bring breach of contract claims for improper content removal or platform restriction"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T12:39:57.404Z",
    "policies": [
      {
        "id": "of-copyright-policy",
        "reference": "OF-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement. If the intimate image is owned by the victim or a photographer, posting it without permission is a copyright violation.",
        "quote": "We prohibit copyright infringement. If the intimate image is owned by the victim or a photographer, posting it without permission is a copyright violation.",
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
            "description": "File a DMCA notice via the 'Reporting Stolen Content' contact form",
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
          "Content is an original work posted without the copyright owner's permission",
          "The impersonating account is posting content you own the copyright to"
        ]
      },
      {
        "id": "of-hacked-account-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "Users are responsible for their account security. If compromised, users should immediately change their password and contact support.",
        "quote": "Users are responsible for their account security. If compromised, users should immediately change their password and contact support.",
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
          },
          {
            "description": "Enable Two-Factor Authentication (2FA) to secure the account after recovery",
            "reason": "To prevent future unauthorized access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "Account is posting spam or fraudulent content",
          "Legitimate owner is locked out of the account"
        ]
      },
      {
        "id": "of-content-ownership-policy",
        "reference": "OF-TOS-8.3",
        "summary": "Requires users to own all content they upload or hold all necessary rights and licenses. Prohibits posting content without proper authorization.",
        "quote": "You warrant that, for each item of Content you Upload to OnlyFans: it complies with the Terms of Service and all applicable laws; you own your Content (and all intellectual property rights in it) or hold all rights necessary, including licenses, to post and monetise the Content on OnlyFans or the subsequent use of that Content by OnlyFans; if your Content includes or uses any third-party material, you have secured all rights, licenses, written consents and releases that are necessary for the use of such third-party property in your Content and for the subsequent use of that Content on OnlyFans and by us",
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
            "description": "Proof of ownership or authorization for all content uploaded",
            "reason": "To verify compliance with content ownership requirements"
          },
          {
            "description": "Written consents and releases for any third-party material",
            "reason": "To ensure proper authorization for use of others' content"
          }
        ],
        "removalCriteria": [
          "Content uploaded without proper ownership or authorization",
          "Third-party material used without necessary rights, licenses, or consents",
          "Content that violates intellectual property rights"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-16",
        "summary": "Requires written, informed consent from all individuals appearing in co-authored content. Allows withdrawal of consent at any time, which may result in content deletion.",
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
            "description": "Written, informed consent from all individuals appearing in the content",
            "reason": "To ensure all participants have agreed to sharing the content"
          },
          {
            "description": "Proof of identity for all individuals in the content",
            "reason": "To verify age and identity requirements"
          },
          {
            "description": "Documentation showing consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content featuring individuals without their written, informed consent",
          "Content where a participant has withdrawn their consent",
          "Content featuring individuals whose identity cannot be verified"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-14",
        "summary": "Reserves the right to suspend or delete accounts and content without warning for serious or repeated breaches, unlawful activity, or fraudulent behavior.",
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
            "description": "Evidence of serious or repeated Terms of Service violations",
            "reason": "To justify account suspension or deletion"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support enforcement actions against problematic accounts"
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
      "summary": "Users may dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification to avoid waiving rights",
        "Provide relevant documentation and explanation for the appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T12:39:57.404Z",
    "policies": [
      {
        "id": "of-pp-content-moderation",
        "reference": "Section 10",
        "summary": "Conducts moderation and filtration of text and content uploaded to OnlyFans, livestreaming, and chat messages to monitor and investigate violations of Terms of Service.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans; livestreaming on OnlyFans; content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service.",
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
            "description": "Content that violates Terms of Service",
            "example": "Uploaded content, livestream content, or chat messages",
            "reason": "To identify and investigate violations of platform policies"
          }
        ],
        "removalCriteria": [
          "Content identified as violating Terms of Service",
          "Content sent in direct messages that violates Terms of Service"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "Section 10",
        "summary": "Removes text and content uploaded by users that is identified as illegal and suspends or deactivates those user accounts.",
        "quote": "Removal from the Services of text and content uploaded by users that is identified as illegal, and suspending or deactivating those user accounts.",
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
            "description": "Content identified as illegal",
            "example": "Uploaded text or content that violates applicable laws",
            "reason": "To comply with legal obligations and maintain platform safety"
          }
        ],
        "removalCriteria": [
          "Content identified as illegal under applicable law"
        ]
      },
      {
        "id": "of-pp-tos-violation-removal",
        "reference": "Section 10",
        "summary": "Removes text and content uploaded by users that violates Terms of Service and suspends or deactivates user accounts where appropriate.",
        "quote": "Removal from the Services of text and content uploaded by users that is identified as violating our Terms of Service and where appropriate, suspending or deactivating user accounts.",
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
            "description": "Content that violates Terms of Service",
            "example": "Uploaded text or content that breaches platform policies",
            "reason": "To enforce Terms of Service and maintain platform integrity"
          }
        ],
        "removalCriteria": [
          "Content identified as violating Terms of Service"
        ]
      },
      {
        "id": "of-pp-banned-user-prevention",
        "reference": "Section 10",
        "summary": "Maintains a record of banned users to prevent further access to OnlyFans.",
        "quote": "Maintaining a record of banned users, to prevent further access to OnlyFans.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User account information for banned individuals",
            "example": "Account details of users who violated platform policies",
            "reason": "To prevent previously banned users from accessing the platform again"
          }
        ],
        "removalCriteria": [
          "Users who have been previously banned from the platform"
        ]
      },
      {
        "id": "of-pp-fraud-detection",
        "reference": "Section 10",
        "summary": "Monitors transactions and systems to detect malicious, deceptive, fraudulent, or illegal activity to protect information security and user safety.",
        "quote": "Monitoring transactions and company network, systems, applications, and data, to: (i) detect malicious, deceptive, fraudulent, or illegal activity to protect information security and integrity, and user safety; and (ii) respond to / investigate incidents where appropriate.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Transaction data and system activity logs",
            "example": "Suspicious transaction patterns or system access attempts",
            "reason": "To detect and prevent fraudulent or malicious activity"
          }
        ],
        "removalCriteria": [
          "Malicious, deceptive, fraudulent, or illegal activity detected",
          "Activity that threatens information security or user safety"
        ]
      },
      {
        "id": "of-pp-dmca-protection",
        "reference": "Section 10",
        "summary": "Investigates and responds to reports made through DMCA takedown procedure to protect Creator intellectual property rights.",
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
            "description": "DMCA takedown report",
            "example": "Report filed through official DMCA takedown procedure",
            "reason": "To protect Creator intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content subject to valid DMCA takedown notice"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "Section 10",
        "summary": "Reports illegal activity to relevant law enforcement authorities, governmental authorities and non-governmental organizations.",
        "quote": "Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations.",
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
            "description": "Evidence of illegal activity",
            "example": "Content or behavior that violates applicable laws",
            "reason": "To comply with legal obligations and protect public safety"
          }
        ],
        "removalCriteria": [
          "Activity identified as illegal under applicable law"
        ]
      },
      {
        "id": "of-pp-age-identity-verification",
        "reference": "Section 9",
        "summary": "Requires age and identity verification for all Creators and Content Collaborators, and for Fans in certain circumstances, using third-party verification processes including face recognition technology.",
        "quote": "We have processes in place that are intended to ensure that Creators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. We have processes in place that are intended to ensure that Content Collaborators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. We have processes in place that are intended to ensure that: (i) all Fans on OnlyFans are at least 18 years of age; and (ii) Fans in certain circumstances or locations verify their identity.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Government identity document and selfie for verification",
            "example": "Copy of government ID and selfie holding the document",
            "reason": "To verify age and identity as required by platform policies and applicable law"
          }
        ],
        "removalCriteria": [
          "Users who fail age verification process",
          "Users who fail identity verification process",
          "Users under 18 years of age"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise privacy rights including requesting correction, deletion, or restriction of processing by contacting the platform. Appeals process available for certain U.S. State residents with right to appeal privacy request decisions.",
      "steps": [
        "Contact OnlyFans using provided contact details to exercise privacy rights",
        "Submit request with sufficient information to confirm identity",
        "Platform may request additional Personal Data for identity verification",
        "For U.S. residents: Submit appeal requests using contact details if privacy request is denied",
        "If appeal is denied, contact local Attorney General"
      ]
    }
  }
],
};
