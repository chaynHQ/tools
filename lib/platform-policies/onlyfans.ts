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
    "accessTimestamp": "2025-09-23T14:12:27.045Z",
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
        "reference": "OF-COAUTHORED",
        "summary": "Requires written, informed consent from all individuals appearing in content. Consent can be withdrawn at any time, requiring content removal.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans... Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
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
            "reason": "To verify age and identity of all participants"
          },
          {
            "description": "Documentation confirming consent withdrawal if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals who have not provided written, informed consent",
          "An individual appearing in content withdraws their consent",
          "Required documentation for consent is not provided when requested"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and dispute Creator Earnings forfeiture through the Complaints Policy",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive the right to dispute",
        "Provide required documentation and evidence to support the appeal"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Comprehensive legal terms governing platform use, covering content restrictions, user conduct, intellectual property rights, payment terms, and enforcement policies. Includes specific prohibitions on non-consensual content, illegal activities, and detailed content guidelines.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T14:12:27.045Z",
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
        "quote": "We are not responsible for any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorised activities or resulting unauthorised payments or withdrawals of funds.",
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
        "reference": "OF-TOS-CONTENT-REMOVAL",
        "summary": "Reserves the right to suspend or remove content that may breach Terms of Service and to quickly remove illegal content when aware of its presence.",
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
            "description": "Report content via the Complaints Policy process",
            "reason": "To notify OnlyFans of potentially illegal or policy-violating content"
          },
          {
            "description": "Provide URL(s) of the violating content",
            "reason": "To identify the specific content for review and removal"
          }
        ],
        "removalCriteria": [
          "Content breaches OnlyFans Terms of Service",
          "Content is illegal under applicable laws",
          "Content violates platform policies"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-CO-AUTHORED",
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
            "description": "Proof that you appear in the content without consent",
            "reason": "To establish that consent was not obtained or has been withdrawn"
          },
          {
            "description": "Contact OnlyFans support to withdraw consent",
            "reason": "To formally notify the platform of consent withdrawal"
          },
          {
            "description": "Provide URL(s) of the content featuring you without consent",
            "reason": "To identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Individual appearing in content did not provide written informed consent",
          "Individual appearing in content has withdrawn their consent",
          "Content features someone without proper consent documentation"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION",
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
            "description": "Report violations through the Complaints Policy",
            "reason": "To notify OnlyFans of serious Terms of Service breaches"
          },
          {
            "description": "Evidence of unlawful or fraudulent activity",
            "reason": "To support claims of serious policy violations"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Unlawful or fraudulent activity",
          "Behavior that threatens serious consequences for other users"
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
    "summary": "Privacy policy detailing data collection practices, user information protection, GDPR compliance, data retention policies, and user privacy controls. Covers both creator and subscriber data handling.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T14:12:27.045Z",
    "policies": [
      {
        "id": "of-pp-age-verification",
        "reference": "Section 9",
        "summary": "Requires all users to be at least 18 years of age and implements age verification processes to ensure compliance with this requirement.",
        "quote": "Our Services are strictly intended for individuals 18 years of age or older. Anyone under 18 years of age is not permitted to use the Services. By using the Services, you represent that you are 18 years of age or older.",
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
            "description": "Government identity document verification",
            "example": "Driver's license, passport, or other government-issued ID",
            "reason": "To verify age and identity of all users on the platform"
          },
          {
            "description": "Selfie verification matching identity document",
            "example": "Photo of user holding their government ID document",
            "reason": "To prevent fraudulent identity verification and ensure the person matches the ID"
          }
        ],
        "removalCriteria": [
          "User is under 18 years of age",
          "User fails age verification process",
          "User provides fraudulent identity documents"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "Section 10",
        "summary": "Conducts moderation and filtration of text and content uploaded to OnlyFans, including livestreaming and chat messages, to monitor and investigate violations of Terms of Service.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans, livestreaming on OnlyFans, content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service.",
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
            "description": "Content that violates Terms of Service",
            "example": "Screenshots or URLs of violating content",
            "reason": "To identify and investigate potential violations of platform policies"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content is identified as illegal",
          "Content violates platform usage policies"
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
            "example": "Legal documentation or law enforcement communication identifying illegal nature of content",
            "reason": "To comply with legal obligations and remove illegal content from the platform"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Content violates legal requirements in jurisdictions where OnlyFans operates"
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
            "example": "Specific content or behavior that violates platform policies",
            "reason": "To enforce platform rules and maintain community standards"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "User behavior violates Acceptable Use Policy",
          "Content violates platform community standards"
        ]
      },
      {
        "id": "of-pp-banned-user-prevention",
        "reference": "Section 10",
        "summary": "Maintains records of banned users to prevent further access to OnlyFans and enforces account restrictions.",
        "quote": "Maintaining a record of banned users, to prevent further access to OnlyFans.",
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
            "description": "Previous ban or violation history",
            "example": "Records of prior Terms of Service violations or account suspensions",
            "reason": "To prevent previously banned users from creating new accounts"
          }
        ],
        "removalCriteria": [
          "User was previously banned from the platform",
          "User attempts to circumvent previous account restrictions",
          "User has history of Terms of Service violations"
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
            "example": "Content or behavior that violates applicable laws",
            "reason": "To comply with legal obligations and assist law enforcement investigations"
          }
        ],
        "removalCriteria": [
          "Activity is identified as illegal under applicable law",
          "Content involves criminal behavior",
          "Situation requires law enforcement intervention"
        ]
      },
      {
        "id": "of-pp-fraud-detection",
        "reference": "Section 10",
        "summary": "Monitors transactions and systems to detect malicious, deceptive, fraudulent, or illegal activity to protect information security and user safety.",
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of fraudulent or malicious activity",
            "example": "Suspicious transaction patterns, unauthorized access attempts, or deceptive behavior",
            "reason": "To protect platform security and user safety from fraudulent activities"
          }
        ],
        "removalCriteria": [
          "Activity is identified as malicious or deceptive",
          "Fraudulent behavior is detected",
          "Activity poses risk to information security or user safety"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
        "reference": "Section 10",
        "summary": "Processes Personal Data as necessary to protect the rights and property of users and third parties.",
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
            "description": "Evidence of threat to user rights or property",
            "example": "Documentation showing harm or potential harm to users or third parties",
            "reason": "To protect users and third parties from harm and safeguard their rights"
          }
        ],
        "removalCriteria": [
          "Content or activity threatens user rights or property",
          "Activity poses risk to third party safety or rights",
          "Protective action is necessary to prevent harm"
        ]
      },
      {
        "id": "of-pp-face-recognition-consent",
        "reference": "Section 9",
        "summary": "Requires explicit consent for the processing of Face Recognition Data by third-party providers during age and identity verification processes.",
        "quote": "Your consent is requested only in specific circumstances which includes, for example, the processing of: (i) Face Recognition Data by our third-party providers as part of the age and identity verification process for all Creators (and for Fans in certain circumstances or locations); and (ii) age estimation captures (which may involve the use of Face Recognition Data) by our third-party providers for Fans in certain locations.",
        "contentTypes": [
          "personal",
          "private"
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
            "description": "Explicit user consent for face recognition processing",
            "example": "User agreement to biometric data processing during verification",
            "reason": "To comply with privacy laws requiring consent for biometric data processing"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for face recognition data processing",
          "Face recognition data is processed without proper consent",
          "Biometric data processing violates applicable privacy laws"
        ]
      },
      {
        "id": "of-pp-content-collaborator-verification",
        "reference": "Section 9",
        "summary": "Requires age and identity verification for Content Collaborators who feature in Creator content, including release forms where required.",
        "quote": "We have processes in place that are intended to ensure that Content Collaborators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. Before you can feature in content uploaded by a Creator we will ask you to go through a third-party age and identity verification process, as described below. You may also be required to provide a release form.",
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
            "description": "Age and identity verification for all individuals appearing in content",
            "example": "Government ID and selfie verification for Content Collaborators",
            "reason": "To ensure all individuals in content are over 18 and have consented to appear"
          },
          {
            "description": "Signed release forms where required",
            "example": "Written consent from individuals appearing in Creator content",
            "reason": "To document consent for appearing in monetized content"
          }
        ],
        "removalCriteria": [
          "Content Collaborator has not completed age verification",
          "Content Collaborator is under 18 years of age",
          "Required release forms are not provided",
          "Content Collaborator has not consented to appear in content"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise privacy rights and request corrections, deletions, or restrictions on processing by contacting the platform directly or submitting tickets through their account.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Email privacy@onlyfans.com with your request",
        "Provide sufficient information to confirm your identity",
        "Include specific details about your request",
        "Wait for platform response and verification process",
        "For U.S. residents, appeal decisions can be made using the same contact methods",
        "If appeal is denied, contact your local Attorney General"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758636747045-1",
    "reference": "OF-DMCA",
    "title": "DMCA Copyright Policy",
    "summary": "Digital Millennium Copyright Act policy covering copyright infringement, takedown procedures, and intellectual property protection.",
    "url": "https://onlyfans.com/dmca",
    "accessTimestamp": "2025-09-23T14:12:27.045Z",
    "policies": [],
    "appealProcess": null
  }
],
};
