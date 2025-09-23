import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including restrictions on illegal content, non-consensual material, minors, violence, harassment, and specific content guidelines.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-23T12:07:24.871Z",
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
        "summary": "Requires AI-generated content to be clearly labeled with signifiers such as #ai or #AIGenerated.",
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
            "description": "URL(s) of the content",
            "reason": "To identify the AI-generated content"
          },
          {
            "description": "Description of the violation (e.g., unlabeled AI content)",
            "reason": "To understand the nature of the AI violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content is not clearly and conspicuously labeled with #ai or #AIGenerated",
          "AI-generated content does not comply with Terms of Service"
        ]
      },
      {
        "id": "of-co-authored-consent",
        "reference": "OF-TOU-16",
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
            "description": "URL(s) of the content containing the individual without consent",
            "reason": "To identify the specific content for review and potential removal"
          },
          {
            "description": "Evidence that consent was not obtained or has been withdrawn",
            "reason": "To establish the non-consensual nature of the content"
          },
          {
            "description": "Identity verification of the individual appearing in the content",
            "reason": "To confirm the person making the complaint is the individual depicted"
          }
        ],
        "removalCriteria": [
          "Content features an individual who did not provide written, informed consent",
          "An individual appearing in content withdraws their previously given consent",
          "Content features an individual who is not a tagged Creator and whose consent cannot be verified"
        ]
      },
      {
        "id": "of-content-responsibility",
        "reference": "OF-TOU-8",
        "summary": "Holds users legally responsible for all content they upload and reserves the right to remove content that violates Terms of Service.",
        "quote": "You are legally responsible for all Content you Upload. We are not responsible for, do not control, and do not endorse any Content you or any other OnlyFans User posts. We have no direct control over what your Content may comprise and are not obligated to pre-screen Content. We reserve the right to pre-screen, monitor, or reuse Content. We reserve the right to remove Content that violates our Terms of Service.",
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
            "reason": "To identify and review the content in question"
          },
          {
            "description": "Description of how the content violates Terms of Service",
            "reason": "To assess the violation and determine appropriate action"
          }
        ],
        "removalCriteria": [
          "Content violates the Terms of Service",
          "Content does not comply with applicable laws",
          "User does not own or have necessary rights to the content"
        ]
      },
      {
        "id": "of-account-suspension",
        "reference": "OF-TOU-14",
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
            "reason": "To support enforcement action against the account"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-intellectual-property",
        "reference": "OF-TOU-15",
        "summary": "Requires users to own or have necessary rights to all content and reserves the right to submit infringement notifications on behalf of creators.",
        "quote": "You confirm that your Content does not infringe or violate the intellectual property rights of any third-party and that you own or have obtained all rights necessary to distribute, copy, display, publicly perform or otherwise use the Content. While we do not own your Content, you grant us the right to submit notifications of infringement (including of copyright or trademark) on your behalf to any third-party that is infringing your Content.",
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
            "description": "Evidence of ownership or necessary rights to the content",
            "reason": "To establish legitimate rights to the content in question"
          },
          {
            "description": "Documentation of intellectual property infringement",
            "reason": "To support infringement claims and takedown requests"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates third-party intellectual property rights",
          "User does not own or have necessary rights to distribute the content",
          "Content uses third-party material without proper licenses or consents"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Disputes must be made within six months of notification or the right to dispute is waived",
        "In certain jurisdictions, users may bring breach of contract claims for improper content removal or platform restriction"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, user responsibilities, intellectual property rights, payment terms, and platform usage guidelines.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T12:07:24.871Z",
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
        "summary": "Prohibits uploading content without proper ownership or licensing rights. Users must own all intellectual property rights or hold necessary licenses for all content uploaded.",
        "quote": "You warrant that, for each item of Content you Upload to OnlyFans: it complies with the Terms of Service and all applicable laws; you own your Content (and all intellectual property rights in it) or hold all rights necessary, including licenses, to post and monetise the Content on OnlyFans",
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
            "description": "Proof of content ownership or licensing rights",
            "reason": "To verify the user has legal right to upload and monetize the content"
          },
          {
            "description": "Written consents and releases for any third-party material included",
            "reason": "To ensure all necessary permissions have been obtained for third-party content"
          }
        ],
        "removalCriteria": [
          "Content uploaded without proper ownership or licensing rights",
          "Third-party material used without necessary consents and releases",
          "Content that infringes intellectual property rights of others"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED-16",
        "summary": "Requires written informed consent from all individuals appearing in uploaded content. Individuals may withdraw consent at any time, requiring content removal.",
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
            "reason": "To ensure all participants have agreed to sharing the content on OnlyFans"
          },
          {
            "description": "Proof of identity for all individuals in the content",
            "reason": "To verify age and identity of all participants"
          },
          {
            "description": "Documentation of consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals without written, informed consent",
          "Any participant withdraws their consent to appear in the content",
          "Unable to provide required documentation for individuals appearing in content"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION-14",
        "summary": "Reserves the right to suspend or delete accounts and content for serious or repeated breaches, unlawful activity, or fraudulent behavior without prior warning.",
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
            "reason": "To justify account suspension or deletion"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support suspension based on illegal behavior"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breaches of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-RIGHTS-12",
        "summary": "Reserves the right to suspend or remove content that breaches Terms of Service and uses proportionate measures to quickly remove illegal content when identified.",
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
            "description": "Quickly remove illegal content when identified"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report suspected illegal content through the Complaints Policy process",
            "reason": "To notify OnlyFans of potentially illegal content for review"
          }
        ],
        "removalCriteria": [
          "Content that breaches Terms of Service",
          "Content identified as illegal under applicable laws"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-TRANSPARENCY-19",
        "summary": "Requires AI-generated content to be clearly labeled with signifiers such as #ai or #AIGenerated and must comply with all Terms of Service.",
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
            "description": "Identification of unlabeled AI-generated content",
            "reason": "To ensure transparency requirements are met"
          },
          {
            "description": "Evidence that AI content violates Terms of Service",
            "reason": "To assess compliance with platform policies"
          }
        ],
        "removalCriteria": [
          "AI-generated content not properly labeled with required signifiers",
          "AI-generated content that violates Terms of Service"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy. Disputes must be made within six months of notification or rights are waived.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification to preserve rights",
        "Provide relevant documentation and evidence to support the appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, stores, and protects user data, including identity verification requirements and data sharing practices.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T12:07:24.871Z",
    "policies": [
      {
        "id": "of-pp-face-recognition-consent",
        "reference": "Section 9",
        "summary": "Requires explicit consent for processing Face Recognition Data during age and identity verification processes for Creators, Content Collaborators, and Fans in certain circumstances.",
        "quote": "Your consent is requested only in specific circumstances which includes, for example, the processing of: (i) Face Recognition Data by our third-party providers as part of the age and identity verification process for all Creators (and for Fans in certain circumstances or locations); and (ii) age estimation captures (which may involve the use of Face Recognition Data) by our third-party providers for Fans in certain locations.",
        "contentTypes": [
          "intimate",
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
            "example": "Photo of government-issued ID and selfie holding the document",
            "reason": "Required for age and identity verification to ensure platform safety and legal compliance"
          }
        ],
        "removalCriteria": [
          "User withdraws consent to Face Recognition Data processing",
          "Verification process fails or is incomplete"
        ]
      },
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
            "example": "Specific posts, messages, or livestream content that breaches platform rules",
            "reason": "To identify and investigate potential violations for platform safety"
          }
        ],
        "removalCriteria": [
          "Content identified as violating Terms of Service",
          "Content identified as illegal"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "Section 10",
        "summary": "Removes text and content uploaded by users that is identified as illegal and suspends or deactivates associated user accounts.",
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
            "description": "Evidence that content violates applicable laws",
            "example": "Legal documentation or clear indication that content is illegal under relevant jurisdiction",
            "reason": "To comply with legal obligations and maintain platform safety"
          }
        ],
        "removalCriteria": [
          "Content identified as illegal under applicable law",
          "Content that violates legal compliance requirements"
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
            "description": "Evidence of Terms of Service violation",
            "example": "Specific content or behavior that breaches platform terms and acceptable use policies",
            "reason": "To enforce platform rules and maintain community standards"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content violates Acceptable Use Policy",
          "User behavior violates platform community standards"
        ]
      },
      {
        "id": "of-pp-banned-user-prevention",
        "reference": "Section 10",
        "summary": "Maintains records of banned users to prevent further access to OnlyFans platform.",
        "quote": "Maintaining a record of banned users, to prevent further access to OnlyFans.",
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
            "description": "Previous account violation or ban history",
            "example": "Records of Terms of Service violations or illegal activity",
            "reason": "To prevent repeat offenders from accessing the platform"
          }
        ],
        "removalCriteria": [
          "User has been previously banned for Terms of Service violations",
          "User attempts to circumvent existing ban"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "Section 10",
        "summary": "Reports illegal activity to relevant law enforcement authorities, governmental authorities, and non-governmental organizations.",
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
            "example": "Content or behavior that violates criminal law or regulations",
            "reason": "To comply with legal obligations and assist law enforcement investigations"
          }
        ],
        "removalCriteria": [
          "Content or activity identified as illegal",
          "Activity that poses risk to user safety or public interest"
        ]
      },
      {
        "id": "of-pp-fraud-detection",
        "reference": "Section 10",
        "summary": "Monitors transactions and systems to detect malicious, deceptive, fraudulent, or illegal activity to protect information security and user safety.",
        "quote": "Monitoring transactions and company network, systems, applications, and data, to: (i) detect malicious, deceptive, fraudulent, or illegal activity to protect information security and integrity, and user safety; and (ii) respond to / investigate incidents where appropriate.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of suspicious or fraudulent activity",
            "example": "Unusual transaction patterns, security breaches, or deceptive behavior",
            "reason": "To protect platform integrity and user safety from malicious actors"
          }
        ],
        "removalCriteria": [
          "Activity identified as malicious or deceptive",
          "Fraudulent transactions or account behavior",
          "Security threats to platform or users"
        ]
      },
      {
        "id": "of-pp-data-deletion-rights",
        "reference": "Section 14",
        "summary": "Provides users the right to request deletion or erasure of Personal Data, subject to certain legal limitations including Terms of Service violations.",
        "quote": "Request deletion / erasure of your Personal Data: You may ask us to delete or remove Personal Data where there is no legitimate reason for us continuing to process it. You also may ask us to delete or remove your Personal Data where you have exercised your right to object to processing (see below). Please note that we may not always be able to comply with your request of deletion / erasure for specific legal reasons, for example if your account has been deactivated for violations of our Terms of Service.",
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
            "description": "Valid request for data deletion with identity verification",
            "example": "Formal request through proper channels with sufficient information to confirm identity",
            "reason": "To verify the requestor's identity and ensure legitimate deletion request"
          }
        ],
        "removalCriteria": [
          "No legitimate reason for continued data processing",
          "User has exercised right to object to processing",
          "Legal requirements do not mandate data retention"
        ]
      },
      {
        "id": "of-pp-face-recognition-withdrawal",
        "reference": "Section 9",
        "summary": "Allows users to withdraw consent for retention of Face Recognition Data for subsequent authentication purposes.",
        "quote": "Withdrawing your consent: You may request the withdrawal of your consent to the retention of your Face Recognition Data for the purposes of subsequent authentication (and delete this) by contacting privacy@onlyfans.com. While withdrawing your consent to the retention of your Face Recognition Data will not affect your ability to complete a subsequent authentication process, it may require you to provide the third-party provider with your government identity document again during the authentication process.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Request to withdraw consent for Face Recognition Data retention",
            "example": "Email to privacy@onlyfans.com requesting withdrawal of biometric data consent",
            "reason": "To process consent withdrawal and delete biometric data as requested"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for Face Recognition Data retention",
          "User requests deletion of biometric information"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit privacy rights requests and appeals through account tickets or by emailing privacy@onlyfans.com. US residents have specific appeal rights for privacy request decisions.",
      "steps": [
        "Submit initial request through account ticket system or email privacy@onlyfans.com",
        "Provide sufficient information for identity verification and request evaluation",
        "For US residents: if request is denied, submit appeal using same contact methods",
        "If appeal is denied, US residents may contact their local Attorney General"
      ]
    }
  }
],
};
