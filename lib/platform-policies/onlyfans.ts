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
    "accessTimestamp": "2025-09-23T13:58:30.849Z",
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
        "id": "of-coauthored-consent-policy",
        "reference": "OF-COAUTHOR-CONSENT",
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
            "reason": "To ensure all participants have consented to content sharing"
          },
          {
            "description": "Proof of identity for all individuals in co-authored content",
            "reason": "To verify age and identity of all participants"
          },
          {
            "description": "Documentation of consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals who have not provided written, informed consent",
          "An individual appearing in content withdraws their consent",
          "Required documentation for co-authored content is not provided"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-SUSPENSION",
        "summary": "Reserves the right to suspend or delete accounts and content for Terms of Service violations, including withholding earnings from unlawful or fraudulent activity.",
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
            "description": "Evidence of Terms of Service violation",
            "reason": "To justify account suspension or content removal"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity if applicable",
            "reason": "To support withholding of earnings or account termination"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity related to earnings"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and dispute Creator Earnings forfeiture through the Complaints Policy. Users have six months to dispute decisions or waive their right to challenge them.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Submit dispute within six months of notification to preserve right to challenge the decision",
        "Provide relevant evidence and documentation to support your appeal"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T13:58:30.849Z",
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
        "id": "of-content-responsibility-policy",
        "reference": "OF-TOS-CONTENT-8",
        "summary": "Prohibits uploading content that violates the Terms of Service. Users are legally responsible for all content they upload and must own or hold all necessary rights.",
        "quote": "You are legally responsible for all Content you Upload. You warrant that, for each item of Content you Upload to OnlyFans: it complies with the Terms of Service and all applicable laws; you own your Content (and all intellectual property rights in it) or hold all rights necessary, including licenses, to post and monetise the Content on OnlyFans or the subsequent use of that Content by OnlyFans; if your Content includes or uses any third-party material, you have secured all rights, licenses, written consents and releases that are necessary for the use of such third-party property in your Content and for the subsequent use of that Content on OnlyFans and by us.",
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
            "description": "Evidence that the uploader does not own the content or have necessary rights",
            "reason": "To demonstrate violation of content ownership requirements"
          },
          {
            "description": "Proof of your ownership or rights to the content",
            "reason": "To establish that you are the rightful owner"
          },
          {
            "description": "Evidence that proper consents were not obtained for third-party content",
            "reason": "To show violation of consent requirements"
          }
        ],
        "removalCriteria": [
          "Content uploaded without owning necessary rights or licenses",
          "Third-party material used without proper consents and releases",
          "Content violates Terms of Service or applicable laws"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED-16",
        "summary": "Prohibits uploading content featuring other individuals without their written, informed consent and proper age verification. Consent can be withdrawn at any time, requiring content removal.",
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
            "description": "Evidence that you appear in the content without your consent",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "Proof of identity showing you are the individual in the content",
            "reason": "To verify you have standing to request removal"
          },
          {
            "description": "Statement withdrawing consent for the content to remain posted",
            "reason": "To formally revoke permission for content use"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Individual appearing in content withdraws their consent",
          "Proper age verification and identity proof not obtained for individuals in content"
        ]
      },
      {
        "id": "of-content-removal-authority",
        "reference": "OF-TOS-RIGHTS-12",
        "summary": "Reserves the right to suspend or remove content that may breach Terms of Service and to quickly remove illegal content when made aware of it.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report content through the Complaints Policy process",
            "reason": "To notify OnlyFans of potentially illegal or policy-violating content"
          },
          {
            "description": "Evidence that content violates Terms of Service or applicable laws",
            "reason": "To demonstrate grounds for removal"
          }
        ],
        "removalCriteria": [
          "Content breaches OnlyFans Terms of Service",
          "Content is illegal under applicable laws",
          "Content violates platform policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and dispute Creator Earnings forfeiture through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive the right to dispute",
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
    "accessTimestamp": "2025-09-23T13:58:30.849Z",
    "policies": [
      {
        "id": "onlyfans-privacy-data-protection",
        "reference": "OF-PP-14",
        "summary": "Provides users with rights to request deletion/erasure of personal data where there is no legitimate reason for continued processing, including when users have objected to processing",
        "quote": "Request deletion / erasure of your Personal Data: You may ask us to delete or remove Personal Data where there is no legitimate reason for us continuing to process it. You also may ask us to delete or remove your Personal Data where you have exercised your right to object to processing (see below).",
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
            "description": "Sufficient information to confirm identity and understand the request",
            "example": "Account information and specific details about the personal data to be deleted",
            "reason": "Required to verify identity and properly evaluate the deletion request"
          }
        ],
        "removalCriteria": [
          "No legitimate reason for continuing to process the personal data",
          "User has exercised right to object to processing"
        ]
      },
      {
        "id": "onlyfans-privacy-data-correction",
        "reference": "OF-PP-14",
        "summary": "Provides users with the right to request correction of incomplete or inaccurate personal data held by the platform",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Information demonstrating the inaccuracy or incompleteness of the data",
            "example": "Correct information to replace inaccurate personal data",
            "reason": "Required to verify and implement the correction"
          }
        ],
        "removalCriteria": [
          "Personal data is incomplete or inaccurate"
        ]
      },
      {
        "id": "onlyfans-privacy-processing-restriction",
        "reference": "OF-PP-14",
        "summary": "Allows users to request suspension of processing of their personal data, including when establishing accuracy or reason for processing",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Justification for why processing should be restricted",
            "example": "Explanation of dispute over data accuracy or processing grounds",
            "reason": "Required to evaluate the basis for restricting processing"
          }
        ],
        "removalCriteria": [
          "Need to establish accuracy of personal data",
          "Need to establish reason for processing personal data"
        ]
      },
      {
        "id": "onlyfans-privacy-objection-right",
        "reference": "OF-PP-14",
        "summary": "Provides users with the right to object to processing of personal data based on legitimate interests when there are particular circumstances affecting the individual",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Explanation of particular circumstances justifying objection",
            "example": "Specific reasons why legitimate interest processing should not apply in your situation",
            "reason": "Required to evaluate whether objection overrides legitimate interests"
          }
        ],
        "removalCriteria": [
          "Processing is based on legitimate interests",
          "Particular circumstances of the individual justify objection to processing"
        ]
      },
      {
        "id": "onlyfans-privacy-account-settings-control",
        "reference": "OF-PP-16",
        "summary": "Allows users to update and modify their personal data through account settings on the platform",
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
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Valid account access",
            "example": "Login credentials to access account settings",
            "reason": "Required to authenticate user and allow modification of personal data"
          }
        ],
        "removalCriteria": [
          "User has an active account with the platform"
        ]
      },
      {
        "id": "onlyfans-privacy-face-recognition-consent-withdrawal",
        "reference": "OF-PP-9",
        "summary": "Allows users to withdraw consent for retention of face recognition data used for authentication purposes, requiring deletion of such data",
        "quote": "Withdrawing your consent: You may request the withdrawal of your consent to the retention of your Face Recognition Data for the purposes of subsequent authentication (and delete this) by contacting privacy@onlyfans.com.",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Request to withdraw consent for face recognition data retention",
            "example": "Email to privacy@onlyfans.com requesting deletion of face recognition data",
            "reason": "Required to process consent withdrawal and delete biometric data"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for retention of face recognition data"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can contact the platform's Data Protection Officer and privacy team through account tickets or email for questions, requests, and concerns about privacy and personal data processing. Appeals for certain U.S. residents are available for privacy request decisions.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Alternatively, email privacy@onlyfans.com",
        "For U.S. residents with denied privacy requests, submit appeal using same contact methods",
        "If appeal is denied, contact your local Attorney General"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758635910849-1",
    "reference": "OF-DMCA",
    "title": "DMCA and Copyright Policy",
    "summary": "Policy covering copyright protection, DMCA takedown procedures, and intellectual property rights for content creators.",
    "url": "https://onlyfans.com/help/copyright",
    "accessTimestamp": "2025-09-23T13:58:30.849Z",
    "policies": [],
    "appealProcess": null
  }
],
};
