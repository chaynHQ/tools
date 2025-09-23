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
    "accessTimestamp": "2025-09-23T12:01:23.837Z",
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
            "reason": "To verify all participants have consented to content sharing"
          },
          {
            "description": "Proof of identity for all individuals in content",
            "reason": "To confirm the identity and age of all participants"
          },
          {
            "description": "Evidence of consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Any individual appearing in content withdraws their consent",
          "Required documentation for consent is not provided when requested"
        ]
      },
      {
        "id": "of-account-suspension",
        "reference": "Section 14",
        "summary": "Reserves the right to suspend or delete accounts and content for serious or repeated breaches of Terms of Service, including withholding earnings from unlawful activity.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of serious or repeated Terms of Service violations",
            "reason": "To justify account suspension or content removal"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity if applicable",
            "reason": "To support withholding of earnings or account termination"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breaches of the Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity related to earnings"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Disputes must be filed within six months of notification or the right to dispute is waived",
        "Contact support@onlyfans.com for general complaints about OnlyFans"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T12:01:23.837Z",
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
        "summary": "Prohibits uploading content without proper rights, licenses, or consents. Users must own content or have necessary permissions to post it.",
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
            "description": "Proof that you own the content or have necessary rights and licenses",
            "reason": "To establish legal right to post the content"
          },
          {
            "description": "Written consents and releases from any third parties featured in the content",
            "reason": "To ensure all individuals have consented to the content being posted"
          },
          {
            "description": "Evidence that the uploader lacks proper permissions or consents",
            "reason": "To demonstrate violation of the policy"
          }
        ],
        "removalCriteria": [
          "Content uploaded without owning intellectual property rights",
          "Content includes third-party material without proper licenses or consents",
          "Content violates applicable laws or Terms of Service"
        ]
      },
      {
        "id": "of-co-authored-content-policy",
        "reference": "OF-TOS-COAUTHORED-16",
        "summary": "Requires written informed consent from all individuals appearing in content. Individuals can withdraw consent at any time, requiring content removal.",
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
            "description": "Proof of identity of all individuals appearing in the content",
            "reason": "To verify all participants are over 18 and properly identified"
          },
          {
            "description": "Written, informed consent from all individuals in the content",
            "reason": "To ensure all participants have consented to sharing the content"
          },
          {
            "description": "Evidence of consent withdrawal if applicable",
            "reason": "To demonstrate that consent has been revoked"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Any individual appearing in the content has withdrawn their consent",
          "Content features individuals under 18 years of age",
          "Required documentation for consent is not provided when requested"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION-14",
        "summary": "Reserves the right to suspend or delete accounts and content for Terms of Service violations, unlawful activity, or fraudulent behavior without prior notice.",
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
            "description": "Evidence of Terms of Service violations",
            "reason": "To demonstrate breach of platform rules"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support suspension for illegal behavior"
          },
          {
            "description": "Evidence of threats or attempts to breach Terms of Service",
            "reason": "To justify preventive action against potential violations"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity",
          "Content or earnings result from fraudulent Fan Payments"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-TRANSPARENCY-19",
        "summary": "Requires AI-generated content to be clearly labeled and comply with Terms of Service. All AI content must be conspicuously marked as artificially generated.",
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
            "reason": "To demonstrate violation of transparency requirements"
          },
          {
            "description": "Technical analysis or metadata showing artificial generation",
            "reason": "To prove content was created using AI tools"
          },
          {
            "description": "Documentation showing AI content violates other Terms of Service",
            "reason": "To establish additional policy violations beyond labeling"
          }
        ],
        "removalCriteria": [
          "AI-generated content is not clearly and conspicuously labeled",
          "AI content lacks required signifiers like #ai or #AIGenerated",
          "AI-generated content violates other Terms of Service provisions"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and dispute Creator Earnings forfeitures through the Complaints Policy within six months of notification.",
      "steps": [
        "Submit dispute within six months of notification to preserve rights",
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Provide statement of reasons and supporting evidence for the appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T12:01:23.837Z",
    "policies": [
      {
        "id": "of-pp-identity-verification",
        "reference": "Section 9",
        "summary": "Requires age and identity verification for all Creators and Content Collaborators using government identity documents and biometric verification to ensure users are at least 18 years old",
        "quote": "We have processes in place that are intended to ensure that Creators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. Before you can start a Creator account, we will: Ask you to provide Creator User Data, as set out at Section 8 (categories of Personal Data). Check your country of residence. This check is intended to ensure lawful access to OnlyFans and the Services. Ask you to provide Financial Data, as set out at Section 8 (categories of Personal Data). This is necessary so that payments can be made to Creators for content, and so that Creators can access their earnings via OnlyFans. Financial Data is also collected as a verification and anti-fraud measure. Ask you to go through a third-party age and identity verification process, as described below. Check that you have not previously been banned from using OnlyFans and our Services (e.g. for violating our Terms of Service).",
        "contentTypes": [
          "intimate",
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
            "description": "Government identity document",
            "example": "Driver's license, passport, or other official ID",
            "reason": "Required for age and identity verification to ensure compliance with 18+ requirements"
          },
          {
            "description": "Selfie holding government identity document",
            "example": "Photo of user holding their ID document",
            "reason": "Used for biometric verification to match identity document with user"
          }
        ],
        "removalCriteria": [
          "User fails age verification process",
          "User fails identity verification process",
          "User has been previously banned from the platform"
        ]
      },
      {
        "id": "of-pp-content-collaborator-verification",
        "reference": "Section 9",
        "summary": "Requires age and identity verification for Content Collaborators who feature in Creator content, including release forms and biometric verification",
        "quote": "We have processes in place that are intended to ensure that Content Collaborators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. Before you can feature in content uploaded by a Creator we will ask you to go through a third-party age and identity verification process, as described below. You may also be required to provide a release form.",
        "contentTypes": [
          "intimate",
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
            "description": "Government identity document for Content Collaborators",
            "example": "Official ID document",
            "reason": "Required to verify age and identity of individuals appearing in content"
          },
          {
            "description": "Release form with signature",
            "example": "Signed consent form",
            "reason": "Required to document consent for featuring in Creator content"
          }
        ],
        "removalCriteria": [
          "Content Collaborator fails age verification",
          "Content Collaborator fails identity verification",
          "Missing required release form for Content Collaborator"
        ]
      },
      {
        "id": "of-pp-face-recognition-consent",
        "reference": "Section 10",
        "summary": "Requires explicit consent for processing Face Recognition Data during age and identity verification processes for Creators, Content Collaborators, and Fans",
        "quote": "Consent: Your consent is requested only in specific circumstances which includes, for example, the processing of: (i) Face Recognition Data by our third-party providers as part of the age and identity verification process for all Creators (and for Fans in certain circumstances or locations); and (ii) age estimation captures (which may involve the use of Face Recognition Data) by our third-party providers for Fans in certain locations.",
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
            "description": "Explicit consent for biometric data processing",
            "example": "User agreement to face recognition verification",
            "reason": "Required by law for processing biometric/face recognition data"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for face recognition data processing",
          "User fails to provide required consent for biometric verification"
        ]
      },
      {
        "id": "of-pp-fraud-prevention",
        "reference": "Section 9",
        "summary": "Prohibits fraudulent face image spoofing and uploading of fraudulent government identity documents during onboarding processes",
        "quote": "Face recognition technology reduces the possibility of fraudulent face image spoofing and the uploading of fraudulent government identity documents when individuals go through the onboarding process. Where our third-party providers have identified possible fraud attempts (such as the use of fake or otherwise manipulated documents) our third-party providers may maintain a record of such attempts, including Face Recognition Data, for the purposes of detecting and preventing unlawful activity, and preventing fraudulent access to OnlyFans.",
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
            "description": "Detection of fraudulent documents or spoofing attempts",
            "example": "Fake ID documents, manipulated images, or spoofed biometric data",
            "reason": "To prevent fraudulent access and maintain platform security"
          }
        ],
        "removalCriteria": [
          "Use of fake or manipulated identity documents",
          "Fraudulent face image spoofing detected",
          "Fraudulent access attempts identified"
        ]
      },
      {
        "id": "of-pp-banned-user-prevention",
        "reference": "Section 10",
        "summary": "Maintains records of banned users to prevent further access to the platform based on legitimate interests",
        "quote": "Maintaining a record of banned users, to prevent further access to OnlyFans.",
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
            "description": "Previous ban or violation record",
            "example": "Account previously suspended or terminated for Terms of Service violations",
            "reason": "To prevent banned users from creating new accounts"
          }
        ],
        "removalCriteria": [
          "User has been previously banned from the platform",
          "User attempts to circumvent previous ban or suspension"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "Section 10",
        "summary": "Requires removal of illegal content and suspension or deactivation of user accounts that upload such content",
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
            "description": "Content identified as illegal under applicable law",
            "example": "Non-consensual intimate imagery, child exploitation material, or other illegal content",
            "reason": "Required for legal compliance and user safety"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "User account associated with illegal content upload"
        ]
      },
      {
        "id": "of-pp-terms-violation-removal",
        "reference": "Section 10",
        "summary": "Removes content that violates Terms of Service and suspends or deactivates violating user accounts where appropriate",
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
            "example": "Content that breaches platform community guidelines or acceptable use policies",
            "reason": "Required to maintain platform standards and user safety"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "User account repeatedly violates platform policies"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "Section 10",
        "summary": "Reports illegal activity to relevant law enforcement authorities, governmental authorities, and non-governmental organizations",
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
            "description": "Evidence of illegal activity on the platform",
            "example": "Child exploitation material, non-consensual content, or other criminal activity",
            "reason": "Required for legal compliance and public safety"
          }
        ],
        "removalCriteria": [
          "Illegal activity is identified on the platform",
          "Content requires reporting to authorities for public safety"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "Section 10",
        "summary": "Conducts moderation and filtration of text, content, and livestreaming to monitor and investigate Terms of Service violations",
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
            "description": "Content requiring moderation review",
            "example": "User-generated content, chat messages, or livestream content",
            "reason": "To identify and address Terms of Service violations"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service upon moderation review",
          "Chat messages or livestream content breaches platform policies"
        ]
      },
      {
        "id": "of-pp-data-retention-violations",
        "reference": "Section 17",
        "summary": "Retains Personal Data for trust and safety purposes when users violate Terms of Service or to protect user safety and investigate illegal activity",
        "quote": "Trust and safety: If you have (or we reasonably suspect that you have) violated our Terms of Service, or where we otherwise need to retain information to identify and report illegal activity or protect the safety of our users and third parties, we will retain certain Personal Data for as long as necessary to conduct our investigations, assist with any investigations by law enforcement or non-governmental authorities (e.g. NCMEC), and enforce any removal of offending users or content.",
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
            "description": "Evidence of Terms of Service violation or illegal activity",
            "example": "Policy violations, illegal content, or safety threats",
            "reason": "Required for investigations and enforcement actions"
          }
        ],
        "removalCriteria": [
          "User has violated or is suspected of violating Terms of Service",
          "Content poses safety risks to users or third parties",
          "Illegal activity is identified or suspected"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise privacy rights and request corrections, deletions, or restrictions on data processing by contacting the platform",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Email privacy@onlyfans.com with your request",
        "Provide sufficient information to confirm your identity",
        "For US residents in certain states, you have the right to appeal decisions regarding privacy requests"
      ]
    }
  }
],
};
