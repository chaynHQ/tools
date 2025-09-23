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
    "accessTimestamp": "2025-09-23T12:02:26.143Z",
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
            "reason": "To ensure all participants have consented to content sharing"
          },
          {
            "description": "Proof of identity for all individuals in content",
            "reason": "To verify the identity and age of all participants"
          },
          {
            "description": "Documentation confirming consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals who have not provided written, informed consent",
          "Any individual appearing in the content withdraws their consent",
          "Required documentation for consent or identity is not provided"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "Section 14",
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
            "reason": "To justify account suspension or content removal"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support enforcement actions against violating accounts"
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
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Submit dispute within six months of notification to preserve right to dispute",
        "Provide relevant documentation and evidence supporting your appeal"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T12:02:26.143Z",
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
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-SECTION-12",
        "summary": "Reserves the right to suspend or remove content that may breach Terms of Service and uses proportionate measures to quickly remove illegal content when aware of it.",
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
            "description": "Proportionate measures to quickly remove illegal content when aware"
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
          "Content is illegal under applicable laws"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SECTION-14",
        "summary": "May suspend or delete accounts and content without warning for serious or repeated breaches, unlawful activity, or fraudulent behavior.",
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
            "description": "Evidence of unlawful or fraudulent activity",
            "reason": "To protect the platform and other users from harmful behavior"
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
        "reference": "OF-TOS-SECTION-16",
        "summary": "Requires written informed consent from all individuals appearing in content, and allows withdrawal of consent which may result in content deletion.",
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
            "reason": "To ensure all participants have agreed to content sharing"
          },
          {
            "description": "Proof of identity for all individuals in content",
            "reason": "To verify age and identity of participants"
          },
          {
            "description": "Documentation of consent withdrawal if applicable",
            "reason": "To process removal requests from content participants"
          }
        ],
        "removalCriteria": [
          "Individual appearing in content withdraws consent",
          "Lack of written informed consent from participants",
          "Unable to verify identity or age of individuals in content"
        ]
      },
      {
        "id": "of-intellectual-property-enforcement",
        "reference": "OF-TOS-SECTION-15",
        "summary": "Reserves the right to submit notifications of infringement on behalf of creators to third parties that are infringing their content.",
        "quote": "While we do not own your Content, you grant us the right to submit notifications of infringement (including of copyright or trademark) on your behalf to any third-party that is infringing your Content. We are under no obligation to submit such notifications or to police infringements of your Content.",
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
            "description": "Evidence of content infringement on third-party platforms",
            "reason": "To identify unauthorized use of creator content"
          },
          {
            "description": "Proof of original ownership or licensing rights",
            "reason": "To establish legal standing for infringement claims"
          }
        ],
        "removalCriteria": [
          "Third-party platform is hosting infringing content",
          "Creator requests enforcement action against infringement"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive right to dispute",
        "Provide relevant evidence and documentation to support appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T12:02:26.143Z",
    "policies": [
      {
        "id": "of-pp-age-verification",
        "reference": "Section 9",
        "summary": "Requires all users to be at least 18 years of age and implements mandatory age and identity verification processes for Creators and Content Collaborators, with third-party verification for Fans in certain circumstances.",
        "quote": "Our Services are strictly intended for individuals 18 years of age or older. Anyone under 18 years of age is not permitted to use the Services. By using the Services, you represent that you are 18 years of age or older.",
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
            "example": "Driver's license, passport, or other official government-issued ID",
            "reason": "Required for age and identity verification to ensure compliance with 18+ age requirement"
          },
          {
            "description": "Selfie holding government identity document",
            "example": "Photo of user holding their ID document",
            "reason": "Used by third-party providers for face recognition verification to prevent fraud"
          }
        ],
        "removalCriteria": [
          "User is under 18 years of age",
          "User fails age verification process",
          "User fails identity verification process"
        ]
      },
      {
        "id": "of-pp-content-collaborator-verification",
        "reference": "Section 9",
        "summary": "Requires Content Collaborators who feature in Creator content to complete age and identity verification and provide release forms before appearing in uploaded content.",
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
            "description": "Government identity document for Content Collaborators",
            "example": "Driver's license, passport, or other official government-issued ID",
            "reason": "Required to verify age and identity of individuals appearing in Creator content"
          },
          {
            "description": "Release form with signature",
            "example": "Signed consent form authorizing appearance in content",
            "reason": "Legal documentation of consent to appear in Creator's content"
          }
        ],
        "removalCriteria": [
          "Content Collaborator has not completed age verification",
          "Content Collaborator has not completed identity verification",
          "Required release form has not been provided"
        ]
      },
      {
        "id": "of-pp-banned-user-prevention",
        "reference": "Section 9, Section 10",
        "summary": "Maintains records of banned users to prevent further access to OnlyFans and checks during onboarding to ensure previously banned users cannot create new accounts.",
        "quote": "Check that you have not previously been banned from using OnlyFans and our Services (e.g. for violating our Terms of Service). Maintaining a record of banned users, to prevent further access to OnlyFans.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User identification information",
            "example": "Email address, identity documents, or other identifying information",
            "reason": "To cross-reference against database of previously banned users"
          }
        ],
        "removalCriteria": [
          "User was previously banned from OnlyFans",
          "User violated Terms of Service in the past"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "Section 10",
        "summary": "Conducts moderation and filtration of text and content uploaded to OnlyFans, livestreaming, and chat messages to monitor and investigate violations of Terms of Service.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans, livestreaming on OnlyFans, content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service.",
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
            "example": "Uploaded content, chat messages, or livestream content",
            "reason": "To identify and investigate potential violations of platform policies"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Text messages violate Terms of Service",
          "Livestream content violates Terms of Service"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "Section 10",
        "summary": "Removes text and content identified as illegal from the Services and suspends or deactivates associated user accounts.",
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
            "example": "Content that violates applicable laws",
            "reason": "Required to comply with legal obligations and maintain platform safety"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "User account associated with illegal content"
        ]
      },
      {
        "id": "of-pp-tos-violation-removal",
        "reference": "Section 10",
        "summary": "Removes text and content that violates Terms of Service and suspends or deactivates user accounts where appropriate.",
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
            "description": "Content violating Terms of Service",
            "example": "Content that breaches platform policies or acceptable use guidelines",
            "reason": "To enforce platform rules and maintain community standards"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "User behavior violates Terms of Service",
          "Account suspension or deactivation is appropriate"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "Section 10",
        "summary": "Reports illegal activity to relevant law enforcement authorities, governmental authorities, and non-governmental organizations, and provides information in response to official requests and investigations.",
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
            "description": "Evidence of illegal activity",
            "example": "Content, user behavior, or communications that constitute illegal activity",
            "reason": "Required to comply with legal obligations and assist law enforcement investigations"
          }
        ],
        "removalCriteria": [
          "Activity is identified as illegal",
          "Content involves illegal behavior",
          "Official request from law enforcement or governmental authority"
        ]
      },
      {
        "id": "of-pp-fraud-detection",
        "reference": "Section 10",
        "summary": "Monitors transactions and systems to detect malicious, deceptive, fraudulent, or illegal activity to protect information security and user safety, and responds to incidents appropriately.",
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
            "description": "Suspicious transaction or system activity",
            "example": "Unusual payment patterns, unauthorized access attempts, or fraudulent behavior",
            "reason": "To detect and prevent fraud, protect user accounts, and maintain platform security"
          }
        ],
        "removalCriteria": [
          "Activity is identified as malicious or fraudulent",
          "Transaction patterns indicate deceptive behavior",
          "System security has been compromised"
        ]
      },
      {
        "id": "of-pp-data-deletion-rights",
        "reference": "Section 14",
        "summary": "Provides users the right to request deletion or erasure of Personal Data, subject to certain legal limitations, including cases where accounts have been deactivated for Terms of Service violations.",
        "quote": "Request deletion / erasure of your Personal Data: You may ask us to delete or remove Personal Data where there is no legitimate reason for us continuing to process it. You also may ask us to delete or remove your Personal Data where you have exercised your right to object to processing (see below). Please note that we may not always be able to comply with your request of deletion / erasure for specific legal reasons, for example if your account has been deactivated for violations of our Terms of Service.",
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
            "description": "Valid deletion request with identity verification",
            "example": "Request submitted through official channels with proof of identity",
            "reason": "To verify the requestor's identity and authority to request data deletion"
          }
        ],
        "removalCriteria": [
          "No legitimate reason exists for continued data processing",
          "User has exercised right to object to processing",
          "Legal requirements do not prevent deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal privacy rights decisions, with specific appeal rights for U.S. residents. Appeals should be submitted using the contact information provided in the policy.",
      "steps": [
        "Submit appeal request using contact details provided in Section 19",
        "Include sufficient information for identity verification and request evaluation",
        "If appeal is denied, U.S. residents may contact their local Attorney General"
      ]
    }
  }
],
};
