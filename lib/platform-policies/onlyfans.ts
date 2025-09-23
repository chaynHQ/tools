import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including restrictions on illegal content, non-consensual material, minors, violence, and harassment.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-23T12:43:18.202Z",
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
        "id": "of-co-authored-consent",
        "reference": "Section 16",
        "summary": "Requires written informed consent from all individuals appearing in co-authored content. Consent can be withdrawn at any time, requiring content removal.",
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
            "reason": "To verify all participants have consented to sharing the content"
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
          "Content features individuals who have not provided written informed consent",
          "Any individual appearing in the content withdraws their consent",
          "Required documentation for consent or identity verification is not provided"
        ]
      },
      {
        "id": "of-account-suspension",
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
            "description": "Evidence of unlawful or fraudulent activity",
            "reason": "To protect the platform and other users from harm"
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
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Disputes must be filed within six months of notification or the right to dispute is waived",
        "In certain jurisdictions, users may bring breach of contract claims for improper content removal or platform access restrictions"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, user responsibilities, intellectual property rights, and platform rules.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T12:43:18.202Z",
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
        "reference": "OF-TOS-CONTENT-8",
        "summary": "Prohibits uploading content without owning all necessary rights and intellectual property. Users must own content or hold all rights necessary to post and monetize content on OnlyFans.",
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
            "description": "Proof of ownership or necessary rights to the content",
            "reason": "To establish that the uploader has legal right to post the content"
          },
          {
            "description": "Written consents and releases for any third-party material",
            "reason": "To verify permission was obtained for use of others' likeness or property"
          },
          {
            "description": "Documentation showing compliance with applicable laws",
            "reason": "To ensure content meets legal requirements"
          }
        ],
        "removalCriteria": [
          "Content uploaded without owning necessary rights or intellectual property",
          "Third-party material used without proper consents and releases",
          "Content that violates applicable laws"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED-16",
        "summary": "Requires written, informed consent from all individuals appearing in co-authored content. Individuals may withdraw consent at any time, resulting in content deletion.",
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
            "reason": "To verify permission was obtained from all participants"
          },
          {
            "description": "Proof of identity for all individuals in the content",
            "reason": "To confirm age verification and identity of participants"
          },
          {
            "description": "Documentation of consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Any participant withdraws their consent to appear in the content",
          "Unable to provide required documentation for individuals appearing in content"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION-14",
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
            "description": "Evidence of serious or repeated Terms of Service breaches",
            "reason": "To justify account suspension or deletion"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support suspension based on illegal behavior"
          },
          {
            "description": "Evidence of threats or attempts to breach Terms of Service",
            "reason": "To prevent harm to platform or other users"
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
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Submit dispute within six months of notification or waive the right to dispute",
        "In certain jurisdictions, users may bring breach of contract claims for improper content removal or platform access restriction"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data, including personal information, financial data, and content metadata.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T12:43:18.202Z",
    "policies": [
      {
        "id": "of-pp-personal-data-protection",
        "reference": "Section 1",
        "summary": "Protects Personal Data processed about users and requires compliance with privacy practices for content sharing platforms",
        "quote": "Fenix International Limited (\"we\", \"us\", \"our\") respects your privacy and we are committed to protecting the Personal Data we process about you. This privacy policy (\"Policy\") explains our practices with respect to the Personal Data processed about our Creators and Fans. It also explains our practices with respect to the Personal Data processed about individuals that feature in content uploaded by a Creator (\"Content Collaborators\").",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identity verification for privacy requests",
            "example": "Sufficient information to confirm identity and understand the request",
            "reason": "To verify identity and properly evaluate privacy rights requests"
          }
        ],
        "removalCriteria": [
          "Processing violates privacy policy terms",
          "User exercises valid privacy rights including deletion requests"
        ]
      },
      {
        "id": "of-pp-content-collaborator-consent",
        "reference": "Section 8, Section 9",
        "summary": "Requires age and identity verification for Content Collaborators who feature in uploaded content and mandates release forms for their participation",
        "quote": "We have processes in place that are intended to ensure that Content Collaborators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. Before you can feature in content uploaded by a Creator we will ask you to go through a third-party age and identity verification process, as described below. You may also be required to provide a release form.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Government identity document and selfie verification",
            "example": "Copy of government ID and selfie holding the document",
            "reason": "To verify age and identity of individuals appearing in content"
          },
          {
            "description": "Signed release form",
            "example": "Release form with signature from Content Collaborator",
            "reason": "To document consent for featuring in Creator content"
          }
        ],
        "removalCriteria": [
          "Content features individuals without proper age and identity verification",
          "Content features individuals without required release forms"
        ]
      },
      {
        "id": "of-pp-data-deletion-rights",
        "reference": "Section 14",
        "summary": "Provides users the right to request deletion of Personal Data where there is no legitimate reason for continued processing",
        "quote": "Request deletion / erasure of your Personal Data: You may ask us to delete or remove Personal Data where there is no legitimate reason for us continuing to process it. You also may ask us to delete or remove your Personal Data where you have exercised your right to object to processing (see below). Please note that we may not always be able to comply with your request of deletion / erasure for specific legal reasons, for example if your account has been deactivated for violations of our Terms of Service.",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid deletion request with identity verification",
            "example": "Request submitted through account or via privacy email with sufficient identifying information",
            "reason": "To verify identity and process legitimate deletion requests"
          }
        ],
        "removalCriteria": [
          "No legitimate reason exists for continued processing of Personal Data",
          "User has exercised valid right to object to processing"
        ]
      },
      {
        "id": "of-pp-unauthorized-access-protection",
        "reference": "Section 10",
        "summary": "Monitors and investigates malicious, deceptive, fraudulent, or illegal activity to protect information security and user safety",
        "quote": "Monitoring transactions and company network, systems, applications, and data, to: (i) detect malicious, deceptive, fraudulent, or illegal activity to protect information security and integrity, and user safety; and (ii) respond to / investigate incidents where appropriate.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of malicious, deceptive, fraudulent, or illegal activity",
            "example": "Documentation of unauthorized access or fraudulent behavior",
            "reason": "To investigate and respond to security incidents and protect user safety"
          }
        ],
        "removalCriteria": [
          "Detection of malicious, deceptive, fraudulent, or illegal activity",
          "Compromise of information security and integrity",
          "Threats to user safety identified"
        ]
      },
      {
        "id": "of-pp-face-recognition-consent",
        "reference": "Section 9, Section 10",
        "summary": "Requires explicit consent for processing Face Recognition Data during age and identity verification processes",
        "quote": "Consent: Your consent is requested only in specific circumstances which includes, for example, the processing of: (i) Face Recognition Data by our third-party providers as part of the age and identity verification process for all Creators (and for Fans in certain circumstances or locations); and (ii) age estimation captures (which may involve the use of Face Recognition Data) by our third-party providers for Fans in certain locations.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Explicit consent for Face Recognition Data processing",
            "example": "User consent to biometric data processing during verification",
            "reason": "Legal requirement for processing biometric/face recognition data"
          }
        ],
        "removalCriteria": [
          "Processing Face Recognition Data without explicit user consent",
          "User withdraws consent for Face Recognition Data retention"
        ]
      },
      {
        "id": "of-pp-legal-reporting-obligations",
        "reference": "Section 10, Section 12",
        "summary": "Requires reporting of illegal activity to law enforcement authorities and governmental organizations for public safety",
        "quote": "Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations. Providing relevant information to, or responding to requests from / investigations by, relevant law enforcement authorities, other governmental authorities and non-governmental organisations.",
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
            "description": "Evidence of illegal activity requiring reporting",
            "example": "Content or behavior that violates applicable laws",
            "reason": "Legal obligation to report illegal activity to authorities"
          }
        ],
        "removalCriteria": [
          "Content or activity identified as illegal under applicable laws",
          "Content poses risk to public safety or user protection"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal privacy decisions by contacting the platform, with specific appeal rights for certain U.S. State residents",
      "steps": [
        "Submit appeal request using contact details provided in Section 19",
        "For U.S. State residents: if appeal is denied, contact local Attorney General",
        "Provide sufficient information to confirm identity and understand the request",
        "Platform will evaluate appeal in accordance with applicable privacy laws"
      ]
    }
  }
],
};
