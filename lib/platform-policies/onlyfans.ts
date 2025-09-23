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
    "accessTimestamp": "2025-09-23T13:34:32.094Z",
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
        "reference": "OF-TOU-COAUTHORED",
        "summary": "Requires written informed consent from all individuals appearing in content. Consent can be withdrawn at any time, requiring content removal.",
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
            "description": "Proof of identity for all individuals appearing in content",
            "reason": "To verify all participants are over 18 and properly identified"
          },
          {
            "description": "Written, informed consent from all individuals appearing in content",
            "reason": "To establish that all participants consented to content sharing"
          },
          {
            "description": "Documentation confirming withdrawal of consent if applicable",
            "reason": "To process removal requests when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals who have not provided written, informed consent",
          "An individual appearing in content withdraws their consent",
          "Required documentation for consent verification is not provided"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "OF-TOU-SECURITY",
        "summary": "Prohibits unauthorized access to user accounts and holds users responsible for securing their accounts. Platform is not liable for compromised accounts or resulting unauthorized activities.",
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
            "description": "Evidence of unauthorized account access",
            "reason": "To document the security breach"
          },
          {
            "description": "Details of unauthorized activities or content posted",
            "reason": "To identify what content was posted without authorization"
          },
          {
            "description": "Proof of account ownership",
            "reason": "To verify the legitimate account holder"
          }
        ],
        "removalCriteria": [
          "Content was posted through unauthorized account access",
          "Account credentials were compromised leading to unauthorized content sharing",
          "Unauthorized activities occurred due to account security breach"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy. Creator earnings forfeiture decisions can be disputed through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator earnings forfeiture disputes",
        "Submit dispute within six months of notification to avoid waiving rights",
        "Provide required documentation and evidence to support the appeal"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T13:34:32.094Z",
    "policies": [
      {
        "id": "of-copyright-policy",
        "reference": "OF-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and grants OnlyFans the right to submit DMCA takedown notices on behalf of content owners for infringing content posted without permission.",
        "quote": "You confirm that your Content does not infringe or violate the intellectual property rights of any third-party and that you own or have obtained all rights necessary to distribute, copy, display, publicly perform or otherwise use the Content. While we do not own your Content, you grant us the right to submit notifications of infringement (including of copyright or trademark) on your behalf to any third-party that is infringing your Content. We are under no obligation to submit such notifications or to police infringements of your Content. Our DMCA Takedown Policy describes our procedures for responding to reports that infringing content was published on OnlyFans.",
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
            "description": "File a DMCA notice via the DMCA Takedown Policy procedures",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership or necessary rights to the content",
            "reason": "To establish copyright ownership and right to file claim"
          },
          {
            "description": "URL(s) of the infringing content on OnlyFans",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates the intellectual property rights of any third-party",
          "Content is posted without obtaining all rights necessary to distribute, copy, display, publicly perform or otherwise use the Content",
          "Content violates copyright or trademark rights"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "Prohibits unauthorized account access and holds users responsible for account security, with OnlyFans not liable for compromised accounts or resulting unauthorized activities.",
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
            "description": "Contact OnlyFans support at support@onlyfans.com",
            "reason": "To report the compromise and seek assistance"
          },
          {
            "description": "Provide account details and description of unauthorized activity",
            "reason": "To verify ownership and understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Account has been lost, stolen, or compromised",
          "Unauthorized activities have occurred on the account",
          "Unauthorized payments or withdrawals of funds have been made"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT-REMOVAL",
        "summary": "Reserves the right to suspend or remove content that breaches Terms of Service and to quickly remove illegal content when identified, using technology tools including AI for content review.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service. We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans. When we review Content in accordance with our internal policies, we reserve the right to conduct these reviews with technology tools such as classifiers, and Artificial Intelligence and Machine Learning-enabled tools to detect and remove Content that violates our policies.",
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
            "description": "Report content through OnlyFans Complaints Policy procedures",
            "reason": "To notify OnlyFans of potentially violating content"
          },
          {
            "description": "Identify specific content that violates Terms of Service",
            "reason": "To enable OnlyFans to locate and review the content"
          }
        ],
        "removalCriteria": [
          "Content breaches OnlyFans Terms of Service",
          "Content is illegal under applicable laws",
          "Content violates OnlyFans internal policies"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-CO-AUTHORED",
        "summary": "Requires written informed consent from all individuals appearing in uploaded content and allows withdrawal of consent, which may result in content deletion.",
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
            "description": "Proof that written, informed consent was not obtained from individuals appearing in content",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "Evidence of consent withdrawal by individuals appearing in content",
            "reason": "To trigger content deletion under withdrawal provisions"
          },
          {
            "description": "Contact OnlyFans support with details of non-consensual content",
            "reason": "To report violation of consent requirements"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Individual appearing in content has withdrawn their consent",
          "Content includes individuals under 18 years of age",
          "Required consent documentation is not provided when requested"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION",
        "summary": "Authorizes immediate account suspension and content removal without warning for serious or repeated Terms of Service breaches, unlawful activity, or fraudulent behavior.",
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
            "reason": "To justify immediate suspension without warning"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support suspension and earnings withholding"
          },
          {
            "description": "Proof of threats or attempts to breach Terms of Service with serious consequences",
            "reason": "To demonstrate risk to platform or other users"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity",
          "Activity that poses risk to OnlyFans or other users"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and dispute Creator Earnings forfeiture through the Complaints Policy. Disputes must be made within six months of notification or the right is waived.",
      "steps": [
        "Follow the Appeals Policy procedures for account termination or content deactivation disputes",
        "Follow the Complaints Policy procedures for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification to preserve rights",
        "Provide statement of reasons and supporting evidence for the dispute"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T13:34:32.094Z",
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
            "reason": "Required to verify age and identity of all Creators and Content Collaborators"
          },
          {
            "description": "Selfie verification",
            "example": "Photo of user holding their government identity document",
            "reason": "Used with face recognition technology to match identity documents"
          }
        ],
        "removalCriteria": [
          "User is under 18 years of age",
          "User fails age verification process",
          "User provides fraudulent identity documents"
        ]
      },
      {
        "id": "of-pp-content-collaborator-verification",
        "reference": "Section 9",
        "summary": "Requires age and identity verification for all Content Collaborators who feature in uploaded content to ensure they are at least 18 years old.",
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
            "description": "Third-party age and identity verification",
            "example": "Government identity document and selfie verification through third-party provider",
            "reason": "To ensure all individuals appearing in content are verified as 18 years or older"
          },
          {
            "description": "Release form with signature",
            "example": "Signed consent form from Content Collaborator",
            "reason": "Required where Content Collaborator features in Creator's content"
          }
        ],
        "removalCriteria": [
          "Content Collaborator has not completed age and identity verification",
          "Content Collaborator is under 18 years of age",
          "Required release form is not provided"
        ]
      },
      {
        "id": "of-pp-face-recognition-consent",
        "reference": "Section 9",
        "summary": "Requires explicit consent for the use of face recognition technology during age and identity verification processes.",
        "quote": "Your consent is requested only in specific circumstances which includes, for example, the processing of: (i) Face Recognition Data by our third-party providers as part of the age and identity verification process for all Creators (and for Fans in certain circumstances or locations); and (ii) age estimation captures (which may involve the use of Face Recognition Data) by our third-party providers for Fans in certain locations.",
        "contentTypes": [
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
            "description": "Explicit consent for face recognition processing",
            "example": "User agreement to biometric data processing during verification",
            "reason": "Required by law for processing of biometric/face recognition data"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for face recognition data processing",
          "Face recognition data is processed without proper consent"
        ]
      },
      {
        "id": "of-pp-fraud-prevention",
        "reference": "Section 9",
        "summary": "Prohibits fraudulent identity verification attempts and maintains records of fraud attempts to prevent unauthorized access to the platform.",
        "quote": "Face recognition technology reduces the possibility of fraudulent face image spoofing and the uploading of fraudulent government identity documents when individuals go through the onboarding process. Where our third-party providers have identified possible fraud attempts (such as the use of fake or otherwise manipulated documents) our third-party providers may maintain a record of such attempts, including Face Recognition Data, for the purposes of detecting and preventing unlawful activity, and preventing fraudulent access to OnlyFans.",
        "contentTypes": [
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of fraudulent verification attempt",
            "example": "Fake or manipulated identity documents, spoofed face images",
            "reason": "To detect and prevent fraudulent access to the platform"
          }
        ],
        "removalCriteria": [
          "Use of fake or manipulated government identity documents",
          "Fraudulent face image spoofing during verification",
          "Attempts to circumvent age or identity verification processes"
        ]
      },
      {
        "id": "of-pp-banned-user-prevention",
        "reference": "Section 10",
        "summary": "Maintains records of banned users to prevent individuals who have previously violated Terms of Service from accessing the platform again.",
        "quote": "Check that you have not previously been banned from using OnlyFans and our Services (e.g. for violating our Terms of Service). Maintaining a record of banned users, to prevent further access to OnlyFans.",
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
            "description": "Evidence of previous Terms of Service violations",
            "example": "Account history showing policy violations or harmful behavior",
            "reason": "To prevent previously banned users from creating new accounts"
          }
        ],
        "removalCriteria": [
          "User has been previously banned from OnlyFans",
          "User attempts to circumvent previous ban",
          "User has violated Terms of Service in the past"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "Section 10",
        "summary": "Implements comprehensive content moderation and filtration systems to monitor text, uploaded content, livestreaming, and chat messages for Terms of Service violations.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans; livestreaming on OnlyFans; content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service. Filtration of text sent in direct messages on OnlyFans to investigate violations of our Terms of Service.",
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
            "example": "Inappropriate text, images, videos, or livestream content",
            "reason": "To identify and investigate policy violations across all platform features"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Text or media contains prohibited material",
          "Livestream content violates platform policies",
          "Chat messages contain policy violations"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "Section 10",
        "summary": "Requires removal of illegal content and suspension or deactivation of accounts that upload such content, with mandatory reporting to law enforcement.",
        "quote": "Removal from the Services of text and content uploaded by users that is identified as illegal, and suspending or deactivating those user accounts. Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations.",
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
            "description": "Content identified as illegal under applicable law",
            "example": "Non-consensual intimate imagery, child exploitation material, or other illegal content",
            "reason": "Required for legal compliance and user safety"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Content violates criminal statutes",
          "Content poses safety risks to users or third parties"
        ]
      },
      {
        "id": "of-pp-terms-violation-removal",
        "reference": "Section 10",
        "summary": "Removes content that violates Terms of Service and may suspend or deactivate user accounts for policy violations.",
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
            "description": "Content that violates Terms of Service",
            "example": "Content that breaches platform community guidelines or acceptable use policies",
            "reason": "To maintain platform safety and enforce community standards"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content breaches Acceptable Use Policy",
          "Repeated policy violations by user account"
        ]
      },
      {
        "id": "of-pp-security-monitoring",
        "reference": "Section 10",
        "summary": "Monitors transactions and systems to detect malicious, fraudulent, or illegal activity and responds to security incidents to protect user safety and data integrity.",
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
            "description": "Evidence of malicious, fraudulent, or illegal activity",
            "example": "Suspicious transaction patterns, unauthorized access attempts, or security breaches",
            "reason": "To protect platform security and user safety"
          }
        ],
        "removalCriteria": [
          "Malicious activity detected on platform",
          "Fraudulent or deceptive behavior identified",
          "Illegal activity compromising user safety",
          "Security incidents affecting data integrity"
        ]
      },
      {
        "id": "of-pp-data-deletion-rights",
        "reference": "Section 14",
        "summary": "Provides users the right to request deletion of their personal data, though certain legal restrictions may apply for accounts deactivated due to Terms of Service violations.",
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
            "description": "Valid request for data deletion",
            "example": "User request to delete personal data with proper identity verification",
            "reason": "To comply with privacy rights while maintaining legal obligations"
          }
        ],
        "removalCriteria": [
          "No legitimate reason exists for continued data processing",
          "User has exercised right to object to processing",
          "Legal requirements do not mandate data retention"
        ]
      },
      {
        "id": "of-pp-face-recognition-withdrawal",
        "reference": "Section 9",
        "summary": "Allows users to withdraw consent for retention of face recognition data used in authentication processes, though this may require re-providing identity documents for future verification.",
        "quote": "Withdrawing your consent: You may request the withdrawal of your consent to the retention of your Face Recognition Data for the purposes of subsequent authentication (and delete this) by contacting privacy@onlyfans.com. While withdrawing your consent to the retention of your Face Recognition Data will not affect your ability to complete a subsequent authentication process, it may require you to provide the third-party provider with your government identity document again during the authentication process.",
        "contentTypes": [
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
            "description": "Request to withdraw face recognition consent",
            "example": "Email to privacy@onlyfans.com requesting deletion of biometric data",
            "reason": "To respect user privacy preferences regarding biometric data"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for face recognition data retention",
          "User requests deletion of biometric authentication data"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise privacy rights and submit requests through their account ticket system or by emailing privacy@onlyfans.com. For certain U.S. residents, there is a right to appeal privacy request decisions.",
      "steps": [
        "Submit a ticket through your OnlyFans account or email privacy@onlyfans.com",
        "Provide sufficient information to confirm identity and understand the request",
        "Platform may request additional personal data for identity verification",
        "For U.S. residents with denied requests, submit appeal using same contact methods",
        "If appeal is denied, contact your local Attorney General"
      ]
    }
  }
],
};
