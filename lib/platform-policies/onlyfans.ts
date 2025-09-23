import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including restrictions on illegal content, non-consensual material, minors, hate speech, and specific content guidelines.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-23T14:40:56.932Z",
    "policies": [
      {
        "id": "of-terms-content-responsibility",
        "reference": "Section 8.2",
        "summary": "Users are legally responsible for all Content they Upload and must ensure compliance with Terms of Service and applicable laws.",
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
            "description": "Evidence that content was uploaded without authorization",
            "reason": "To establish that the uploader violated their legal responsibility for content compliance"
          }
        ],
        "removalCriteria": [
          "Content was uploaded by someone who is not legally responsible for it",
          "Content violates Terms of Service or applicable laws",
          "Account operation involves unauthorized third parties"
        ]
      },
      {
        "id": "of-terms-content-ownership",
        "reference": "Section 8.3",
        "summary": "Users warrant they own their Content or hold all necessary rights and licenses, including securing consent for any third-party material.",
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
            "description": "Evidence of ownership or authorization to use the content",
            "reason": "To verify the uploader has necessary rights to post the content"
          },
          {
            "description": "Proof that consent was not given for third-party material",
            "reason": "To establish violation of consent requirements for content featuring others"
          }
        ],
        "removalCriteria": [
          "Content is uploaded without ownership or necessary rights",
          "Third-party material is used without securing proper consents and releases",
          "Content violates intellectual property rights of others"
        ]
      },
      {
        "id": "of-terms-coauthored-consent",
        "reference": "Section 16",
        "summary": "Prohibits uploading content featuring others without their written informed consent, and allows consent withdrawal at any time requiring content deletion.",
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
            "description": "Proof of identity of the individual appearing in content",
            "reason": "To verify the person depicted and their right to withdraw consent"
          },
          {
            "description": "Evidence that written informed consent was not obtained or has been withdrawn",
            "reason": "To establish violation of consent requirements"
          },
          {
            "description": "URL of the content featuring the individual without consent",
            "reason": "To identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written informed consent",
          "An individual appearing in content has withdrawn their consent",
          "Content features untagged individuals who are not verified Creators",
          "Required documentation confirming consent compliance is not provided"
        ]
      },
      {
        "id": "of-terms-ai-transparency",
        "reference": "Section 19.2",
        "summary": "Requires AI Generated content to be clearly labeled with signifiers such as #ai or #AIGenerated.",
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
            "description": "URL of AI-generated content that is not properly labeled",
            "reason": "To identify content that violates transparency requirements"
          },
          {
            "description": "Evidence that content is AI-generated but lacks required signifiers",
            "reason": "To establish the violation of labeling requirements"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled",
          "Content lacks required signifiers such as #ai or #AIGenerated",
          "AI content violates other Terms of Service provisions"
        ]
      },
      {
        "id": "of-terms-account-suspension",
        "reference": "Section 14",
        "summary": "Platform may suspend or delete accounts and content, pause payments, and withhold earnings for Terms of Service violations or suspected unlawful activity.",
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
            "reason": "To justify account suspension or content removal actions"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support withholding of earnings or account termination"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity related to earnings",
          "Content or account activity poses risk to platform or other users"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute Creator Earnings forfeiture decisions through the Complaints Policy and dispute account termination or Content deactivation decisions through the Appeals Policy. Users have six months to dispute decisions or waive the right to dispute.",
      "steps": [
        "Review the decision notification and statement of reasons provided by OnlyFans",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "For account termination or Content deactivation: Follow the Appeals Policy process",
        "Submit dispute within six months of notification to preserve right to dispute",
        "In certain jurisdictions, users may bring breach of contract claims for improper content removal or platform access restrictions"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, user responsibilities, account requirements, intellectual property rights, and platform usage guidelines.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T14:40:56.932Z",
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
            "example": "Follow the procedures described in OnlyFans DMCA Takedown Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership or licensing rights",
            "example": "Documentation showing you own or have rights to the content",
            "reason": "To establish copyright ownership or authorized use"
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
          "Content is posted without obtaining all required rights, licenses, written consents and releases"
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
            "example": "Username, email address, and specific unauthorized actions taken",
            "reason": "To verify ownership and understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Unauthorized activities resulting from compromised account",
          "Unauthorized payments or withdrawals from compromised account"
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
            "description": "Evidence that content violates Terms of Service",
            "example": "Specific violations of OnlyFans policies",
            "reason": "To demonstrate grounds for content removal"
          },
          {
            "description": "Report through OnlyFans complaint procedures",
            "example": "Use the Complaints Policy process to report violations",
            "reason": "To follow proper reporting channels"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content posted without proper authorization",
          "Account use does not comply with Terms of Service"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "Section 8.5 and 12.1",
        "summary": "OnlyFans reserves the right to suspend or remove content that may breach their Terms of Service and will use proportionate measures to quickly remove illegal content.",
        "quote": "We reserve the right to pre-screen, monitor, or reuse Content. We reserve the right to remove Content that violates our Terms of Service. We reserve the right to suspend or remove Content that may breach our Terms of Service. We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans.",
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
            "description": "Report suspected illegal content through Complaints Policy",
            "example": "Follow the Complaints Policy procedures to report illegal content",
            "reason": "To alert OnlyFans to illegal content requiring removal"
          },
          {
            "description": "Evidence of Terms of Service violation",
            "example": "Specific examples of how content breaches OnlyFans policies",
            "reason": "To demonstrate grounds for content removal"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content is illegal under applicable laws",
          "Content breaches OnlyFans policies"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "Section 16.2 and 16.6",
        "summary": "Prohibits uploading content featuring others without their written, informed consent. Individuals may withdraw consent at any time, leading to content deletion.",
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
            "description": "Proof of identity of individuals in content",
            "example": "Age verification showing individuals are at least 18 years old",
            "reason": "To confirm all individuals in content are adults"
          },
          {
            "description": "Written, informed consent from all individuals appearing in content",
            "example": "Signed consent forms from each person featured",
            "reason": "To verify permission to share the content on OnlyFans"
          },
          {
            "description": "Evidence of consent withdrawal",
            "example": "Communication showing an individual has withdrawn consent",
            "reason": "To trigger removal of content when consent is withdrawn"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Individual appearing in content withdraws their consent",
          "Content features individuals under 18 years of age",
          "Required consent documentation is not provided"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "OnlyFans provides an Appeals Policy for disputing account termination or content deactivation decisions, and a Complaints Policy for disputing Creator Earnings forfeiture decisions.",
      "steps": [
        "Dispute Creator Earnings forfeiture decisions by following the Complaints Policy",
        "Dispute account termination or content deactivation decisions by following the Appeals Policy",
        "Submit disputes within six months of notification or waive the right to dispute",
        "In certain jurisdictions, bring a claim for breach of contract where content or platform access is removed in breach of Terms of Service"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data, including personal information encryption, financial data security, and user privacy protections.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T14:40:56.932Z",
    "policies": [
      {
        "id": "of-pp-content-moderation",
        "reference": "Section 10",
        "summary": "Prohibits content that violates Terms of Service through moderation and filtration of text and content uploaded to OnlyFans",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans, livestreaming on OnlyFans, content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Report through OnlyFans platform or contact support",
            "example": "Submit a support ticket through your account or email privacy@onlyfans.com",
            "reason": "To enable investigation of Terms of Service violations"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content identified through moderation and filtration processes"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "Section 10",
        "summary": "Removes content identified as illegal and suspends or deactivates associated user accounts",
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
            "example": "Documentation showing content violates applicable laws",
            "reason": "To comply with legal obligations and remove illegal content"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable laws"
        ]
      },
      {
        "id": "of-pp-tos-violation-removal",
        "reference": "Section 10",
        "summary": "Removes content that violates Terms of Service and may suspend or deactivate user accounts",
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
            "example": "Specific details about how content violates platform policies",
            "reason": "To enforce Terms of Service compliance"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content identified through platform monitoring systems"
        ]
      },
      {
        "id": "of-pp-dmca-takedown",
        "reference": "Section 10",
        "summary": "Investigates and responds to DMCA takedown reports to protect intellectual property rights",
        "quote": "investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "DMCA takedown notice",
            "example": "Properly formatted DMCA notice identifying copyrighted content",
            "reason": "To protect intellectual property rights under copyright law"
          }
        ],
        "removalCriteria": [
          "Content infringes on intellectual property rights",
          "Valid DMCA takedown notice received"
        ]
      },
      {
        "id": "of-pp-fraud-detection",
        "reference": "Section 10",
        "summary": "Monitors and investigates malicious, deceptive, fraudulent, or illegal activity to protect user safety and information security",
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
            "example": "Details about suspicious account behavior or unauthorized access",
            "reason": "To protect user safety and platform security"
          }
        ],
        "removalCriteria": [
          "Activity is identified as malicious, deceptive, or fraudulent",
          "Activity poses risk to information security or user safety"
        ]
      },
      {
        "id": "of-pp-user-protection",
        "reference": "Section 10",
        "summary": "Protects the rights and property of users and third parties",
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
            "description": "Evidence that rights or property are at risk",
            "example": "Documentation showing harm to user rights or property",
            "reason": "To protect legitimate interests of users and third parties"
          }
        ],
        "removalCriteria": [
          "Content threatens user rights or property",
          "Action necessary to protect third party interests"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "Section 10",
        "summary": "Reports illegal activity to law enforcement and governmental authorities",
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
            "example": "Documentation of criminal behavior or violations of law",
            "reason": "To comply with legal obligations and protect public safety"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement notification"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise privacy rights including requesting correction or deletion of personal data, and can submit requests through their account or by contacting privacy@onlyfans.com. U.S. residents have the right to appeal privacy decisions.",
      "steps": [
        "Submit a ticket through your OnlyFans account or email privacy@onlyfans.com",
        "Provide sufficient information to confirm identity and understand the request",
        "OnlyFans may request additional personal data to verify identity",
        "For U.S. residents: if appeal is denied, contact your local Attorney General"
      ]
    }
  }
],
};
