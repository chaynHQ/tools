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
    "accessTimestamp": "2025-09-22T11:58:15.000Z",
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
            "description": "Proof of original ownership",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of any third-party",
          "Content is posted without necessary rights, licenses, written consents and releases"
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
          "Account is posting content without authorization",
          "Legitimate owner is locked out of the account"
        ]
      },
      {
        "id": "of-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "All individuals appearing in content must provide written, informed consent and be at least 18 years old. Consent can be withdrawn at any time.",
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
            "description": "Proof of identity of the person appearing in the content",
            "reason": "To verify the individual's identity and age"
          },
          {
            "description": "Evidence that consent was not obtained or has been withdrawn",
            "reason": "To establish lack of consent for content sharing"
          },
          {
            "description": "URL(s) of the content in question",
            "reason": "To identify the specific content that lacks consent"
          }
        ],
        "removalCriteria": [
          "Individual in content did not provide written, informed consent",
          "Individual in content has withdrawn their consent",
          "Individual in content is under 18 years of age"
        ]
      },
      {
        "id": "of-ai-generated-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must be clearly labeled and comply with all Terms of Service requirements.",
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
            "description": "Evidence that content is AI-generated (technical analysis, metadata, etc.)",
            "reason": "To prove the content is artificially generated"
          },
          {
            "description": "Proof that AI-generated content lacks proper labeling",
            "reason": "To show violation of transparency requirements"
          },
          {
            "description": "URL(s) of the unlabeled AI content",
            "reason": "To identify the specific content that violates labeling requirements"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled",
          "AI Generated content violates other Terms of Service provisions"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-REMOVAL",
        "summary": "OnlyFans reserves the right to suspend or remove content that may breach Terms of Service and will try to notify users when taking such action.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service. We may suspend or delete Content and accounts according to our Terms of Service. If we do, we will try to Notify you.",
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
            "reason": "To demonstrate content breaches platform policies"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates terms"
          }
        ],
        "removalCriteria": [
          "Content may breach Terms of Service",
          "Content violates platform policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Review the specific Appeals Policy for account termination or content deactivation disputes",
        "Review the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification to avoid waiving rights",
        "Follow the procedures outlined in the relevant policy document"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-22T11:58:15.000Z",
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
            "reason": "To establish legal violation requiring removal"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Content violates criminal statutes or civil law requirements"
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
            "example": "Specific section of Terms violated and how content breaches those terms",
            "reason": "To establish contractual violation warranting removal"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content breaches platform community guidelines or acceptable use policies"
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
            "example": "Documentation of criminal behavior or content requiring regulatory reporting",
            "reason": "To comply with legal obligations and protect user safety"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement reporting",
          "Activity violates criminal law or regulatory requirements"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes Personal Data as necessary to protect the rights and property of users and other third parties.",
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
            "example": "Documentation showing harm to user privacy, safety, or property rights",
            "reason": "To establish legitimate interest in protecting user welfare"
          }
        ],
        "removalCriteria": [
          "Content threatens the rights or property of users or third parties",
          "Content poses safety or security risks to platform users"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit tickets through their account or email privacy@onlyfans.com for privacy-related concerns. US residents in certain states have the right to appeal privacy request decisions.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Email privacy@onlyfans.com with your concern or request",
        "For US residents in certain states: submit appeal using same contact methods if initial request is denied",
        "If appeal is denied, contact your local Attorney General"
      ]
    }
  },
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-22T11:58:15.000Z",
    "policies": [
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOU-16",
        "summary": "Individuals appearing in co-authored content may withdraw consent at any time, requiring content removal.",
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
            "description": "Proof of identity of the individual appearing in the content",
            "reason": "To verify you are the person depicted in the content"
          },
          {
            "description": "URL(s) of the content containing your image",
            "reason": "To locate the specific content for removal"
          },
          {
            "description": "Statement withdrawing consent for your appearance in the content",
            "reason": "To establish that consent has been withdrawn"
          }
        ],
        "removalCriteria": [
          "An individual appearing in co-authored content withdraws their consent",
          "Content features someone without their current consent"
        ]
      },
      {
        "id": "of-identity-verification-policy",
        "reference": "OF-TOU-6",
        "summary": "All creators must verify identity with government ID and live selfie, preventing impersonation through mandatory verification.",
        "quote": "To open a Creator account, you must also: Upload a valid form of ID and two photos of you; Add a bank account, payment details for your bank account, or a payment method; Select a method (\"Payout Option\") for us to transfer Creator Earnings to you; If you are registered for VAT in the UK, provide your UK VAT number; Submit additional age or identity verification information any time we ask for it",
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
            "description": "URL of the impersonating creator profile",
            "reason": "To identify the account that may be impersonating you"
          },
          {
            "description": "Evidence of your own identity",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Contact support@onlyfans.com with impersonation report",
            "reason": "To initiate the verification review process"
          }
        ],
        "removalCriteria": [
          "An account is operating without proper identity verification",
          "A verified account used fraudulent documents during verification",
          "An account is operated by someone other than the verified individual"
        ]
      },
      {
        "id": "of-ai-labeling-policy",
        "reference": "OF-TOU-19",
        "summary": "AI-generated content must be clearly labeled with signifiers like #ai or #AIGenerated.",
        "quote": "AI Generated Content: AI Generated content must comply with our Terms of Service and must be clearly and conspicuously captioned as AI Generated Content with a signifier such as #ai, or #AIGenerated.",
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
            "description": "URL(s) of the unlabeled AI-generated content",
            "reason": "To identify content that violates AI labeling requirements"
          },
          {
            "description": "Evidence that the content is AI-generated",
            "reason": "To establish that the content should be labeled as AI"
          },
          {
            "description": "Description of how the content violates labeling requirements",
            "reason": "To understand the specific violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content is not clearly labeled with required signifiers",
          "AI content is used to impersonate someone without proper labeling"
        ]
      },
      {
        "id": "of-content-responsibility-policy",
        "reference": "OF-TOU-8",
        "summary": "Users are legally responsible for all content they upload and must own or hold necessary rights and licenses.",
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
            "description": "URL(s) of the infringing content",
            "reason": "To locate the content that violates your rights"
          },
          {
            "description": "Evidence of your ownership or rights to the content",
            "reason": "To establish that you have rights to the content being used"
          },
          {
            "description": "Description of how the content was used without permission",
            "reason": "To understand the nature of the unauthorized use"
          }
        ],
        "removalCriteria": [
          "Content is uploaded without proper rights or licenses",
          "Content violates intellectual property rights of others",
          "Content is used without consent of the rights holder"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, with a six-month deadline to dispute decisions.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Submit dispute within six months of notification or waive right to dispute",
        "Provide required information as specified in the appeals process"
      ]
    }
  }
],
};
