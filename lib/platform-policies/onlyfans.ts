import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including restrictions on illegal content, non-consensual material, minors, violence, hate speech, impersonation, spam, and specific sexual content guidelines. Regularly updated to reflect platform policy changes.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-23T15:04:39.786Z",
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
        "reference": "Section 19.2",
        "summary": "Prohibits AI-generated deepfakes that impersonate a real individual without their explicit consent and requires AI-generated content to be clearly labeled.",
        "quote": "AI Generated content must comply with our Terms of Service and must be clearly and conspicuously captioned as AI Generated Content with a signifier such as #ai, or #AIGenerated.",
        "contentTypes": [
          "intimate",
          "personal"
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
        "id": "of-coauthored-consent-policy",
        "reference": "Section 16.6",
        "summary": "Allows individuals appearing in co-authored content to withdraw consent at any time, requiring the content to be deleted.",
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
            "description": "URL(s) of the co-authored content",
            "reason": "To identify the specific content where consent is being withdrawn"
          },
          {
            "description": "Proof of identity of the individual withdrawing consent",
            "reason": "To verify the person is actually depicted in the content"
          },
          {
            "description": "Clear statement of consent withdrawal",
            "reason": "To establish that consent has been formally withdrawn"
          }
        ],
        "removalCriteria": [
          "An individual appearing in co-authored content withdraws their consent",
          "The individual can be verified as appearing in the content in question"
        ]
      },
      {
        "id": "of-content-verification-policy",
        "reference": "Section 16.2",
        "summary": "Requires written, informed consent from all individuals appearing in content, and proof of identity verification for anyone over 18.",
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
            "description": "URL(s) of the content in question",
            "reason": "To identify the content lacking proper consent documentation"
          },
          {
            "description": "Evidence that proper consent was not obtained",
            "reason": "To establish violation of consent requirements"
          },
          {
            "description": "Identity verification if you are the person depicted without consent",
            "reason": "To verify you are the individual whose consent was not obtained"
          }
        ],
        "removalCriteria": [
          "Content features individuals whose written, informed consent was not obtained",
          "Content features individuals whose identity was not properly verified",
          "Creator cannot provide necessary consent documentation when requested"
        ]
      },
      {
        "id": "of-account-termination-policy",
        "reference": "Section 14",
        "summary": "Allows OnlyFans to suspend or delete accounts and content for serious or repeated breaches of Terms of Service, including withholding creator earnings.",
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
            "reason": "To justify account suspension or termination"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity if applicable",
            "reason": "To support withholding of creator earnings"
          }
        ],
        "removalCriteria": [
          "User has seriously or repeatedly breached the Terms of Service",
          "User attempts or threatens to breach Terms of Service with serious consequences",
          "Creator earnings result from unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "OnlyFans provides an appeals process for account termination and content deactivation decisions, with a six-month time limit to dispute decisions.",
      "steps": [
        "Submit an appeal following the Appeals Policy within six months of notification",
        "For creator earnings forfeiture decisions, follow the Complaints Policy process",
        "Provide relevant evidence and documentation to support your appeal",
        "OnlyFans will review the decision based on the facts presented"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, user responsibilities, intellectual property rights, payment terms, enforcement mechanisms, collaboration requirements, and appeal processes. Contains detailed provisions on content licensing, prohibited activities, and account termination procedures.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T15:04:39.786Z",
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
            "example": "Follow the procedures described in OnlyFans DMCA policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership or necessary rights",
            "example": "Documentation showing you own or have rights to the content",
            "reason": "To establish copyright ownership or licensing rights"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "Direct links to the specific content that infringes copyright",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of a third-party",
          "User does not own the content or have necessary rights to distribute it",
          "Content is posted without obtaining all necessary rights, licenses, written consents and releases"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "Section 13.8",
        "summary": "OnlyFans is not responsible for lost, stolen, or compromised user accounts, passwords, or email accounts, or any resulting unauthorized activities or payments.",
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
            "description": "Contact OnlyFans support immediately at support@onlyfans.com",
            "example": "Email support@onlyfans.com with details of the compromise",
            "reason": "To report the compromise and initiate recovery procedures"
          },
          {
            "description": "Provide account details and description of unauthorized activity",
            "example": "Username, email associated with account, and details of what unauthorized activity occurred",
            "reason": "To verify ownership and understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Account has been lost, stolen, or compromised",
          "Unauthorized activities have occurred on the account",
          "Unauthorized payments or withdrawals have been made"
        ]
      },
      {
        "id": "of-content-responsibility-policy",
        "reference": "Section 8.2",
        "summary": "Users are legally responsible for all content they upload, and OnlyFans reserves the right to remove content that violates their Terms of Service.",
        "quote": "You are legally responsible for all Content you Upload. If you are a Creator and someone else assists you with the operation of your Creator account, this does not affect your legal responsibility. Our relationship is with you, and not with any third-party, and you will be legally responsible for ensuring that all Content posted and all use of your account complies with the Terms of Service.",
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
            "description": "Report content that violates Terms of Service through appropriate channels",
            "example": "Use OnlyFans reporting mechanisms or contact support",
            "reason": "To notify OnlyFans of Terms of Service violations"
          },
          {
            "description": "Identify specific content and violation type",
            "example": "URL of content and explanation of how it violates Terms of Service",
            "reason": "To enable OnlyFans to review and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content does not comply with applicable laws",
          "Account use does not comply with Terms of Service"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "Section 16.2",
        "summary": "Prohibits uploading content featuring other individuals without proper consent and age verification.",
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
            "description": "Report content featuring you without consent",
            "example": "Identify content where you appear but did not consent to sharing",
            "reason": "To demonstrate lack of required consent for co-authored content"
          },
          {
            "description": "Proof of identity showing you appear in the content",
            "example": "Evidence that you are the individual featured in the content",
            "reason": "To establish that you are the person whose consent was not obtained"
          }
        ],
        "removalCriteria": [
          "Content features individuals who are not tagged Creators on OnlyFans",
          "Written, informed consent was not obtained from individuals appearing in content",
          "Proof of identity and age verification was not obtained for individuals in content",
          "Individual appearing in content withdraws their consent"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "Section 12.1-12.2",
        "summary": "OnlyFans reserves the right to suspend or remove content that may breach their Terms of Service and will quickly remove illegal content when they become aware of it.",
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
            "description": "Quickly remove illegal content when aware"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report suspected illegal content following Complaints Policy",
            "example": "Use OnlyFans Complaints Policy procedures to report illegal content",
            "reason": "To notify OnlyFans of potentially illegal content requiring quick removal"
          },
          {
            "description": "Identify specific content and legal violation",
            "example": "URL of content and explanation of what law it violates",
            "reason": "To enable OnlyFans to assess and remove illegal content"
          }
        ],
        "removalCriteria": [
          "Content may breach OnlyFans Terms of Service",
          "Content is illegal under applicable laws",
          "Content violates OnlyFans internal policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "OnlyFans provides an Appeals Policy for disputing account termination or content deactivation decisions, and a Complaints Policy for other disputes including Creator Earnings forfeiture.",
      "steps": [
        "For account termination or content deactivation decisions, follow the Appeals Policy at /transparency-center/appeals",
        "For Creator Earnings forfeiture decisions, follow the Complaints Policy at /transparency-center/complaints",
        "You must dispute decisions within six months of notification or waive the right to dispute",
        "In certain jurisdictions, you may bring a claim for breach of contract where content or platform access is removed in breach of Terms of Service"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, protects, and shares user data, including extensive identity verification requirements, biometric data collection, GDPR compliance, data retention practices, and third-party data sharing policies.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T15:04:39.786Z",
    "policies": [
      {
        "id": "of-pp-data-rights",
        "reference": "Section 14",
        "summary": "Provides users with rights to request deletion/erasure of personal data including content uploaded to the platform",
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
            "description": "Sufficient information to confirm identity and understand the request",
            "example": "Account information and specific description of data to be deleted",
            "reason": "To verify identity and properly evaluate the deletion request"
          }
        ],
        "removalCriteria": [
          "No legitimate reason for continuing to process the personal data",
          "User has exercised right to object to processing",
          "Request complies with applicable legal requirements"
        ]
      },
      {
        "id": "of-pp-data-correction",
        "reference": "Section 14",
        "summary": "Allows users to request correction of inaccurate or incomplete personal data held by the platform",
        "quote": "Request correction of the Personal Data that we hold about you: You may correct any incomplete or inaccurate Personal Data we hold about you.",
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
            "description": "Information showing the data is inaccurate or incomplete",
            "example": "Correct information to replace inaccurate data",
            "reason": "To verify the accuracy of the correction request"
          }
        ],
        "removalCriteria": [
          "Personal data held is incomplete or inaccurate"
        ]
      },
      {
        "id": "of-pp-processing-restriction",
        "reference": "Section 14",
        "summary": "Enables users to request suspension of processing of their personal data in specific circumstances",
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
            "description": "Justification for why processing should be restricted",
            "example": "Explanation of dispute over data accuracy or processing grounds",
            "reason": "To evaluate the validity of the restriction request"
          }
        ],
        "removalCriteria": [
          "Need to establish accuracy of the personal data",
          "Need to establish the reason for processing the data"
        ]
      },
      {
        "id": "of-pp-objection-right",
        "reference": "Section 14",
        "summary": "Grants users the right to object to processing of personal data based on legitimate interests in specific situations",
        "quote": "You also have the right to object to processing of your Personal Data where we are relying on a legitimate interest for the processing and there is something about your particular situation which makes you want to object to processing on this ground.",
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
            "description": "Explanation of particular situation that justifies objection",
            "example": "Specific circumstances that make the processing objectionable",
            "reason": "To assess whether the objection overrides legitimate processing interests"
          }
        ],
        "removalCriteria": [
          "Processing is based on legitimate interest",
          "User's particular situation justifies objection to processing"
        ]
      },
      {
        "id": "of-pp-account-modification",
        "reference": "Section 16",
        "summary": "Allows users to modify and delete personal data through account settings",
        "quote": "Modifying and deleting your Personal Data: If you have an account with us, you may update your account settings on OnlyFans. Please note that changes to your settings may require some time to take effect.",
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
            "description": "Changes may require some time to take effect"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Access to user account",
            "example": "Login credentials to access account settings",
            "reason": "To verify account ownership and enable data modification"
          }
        ],
        "removalCriteria": [
          "User has an active account with the platform"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal privacy rights decisions by contacting the platform, with residents of certain U.S. States having additional appeal rights and the ability to contact their local Attorney General if appeals are denied",
      "steps": [
        "Submit appeal request using contact details provided in Section 19",
        "For certain U.S. State residents: if appeal is denied, contact local Attorney General"
      ]
    }
  }
],
};
