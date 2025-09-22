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
    "accessTimestamp": "2025-09-22T11:24:51.949Z",
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
            "description": "Proof of original ownership or necessary rights",
            "reason": "To establish copyright ownership or licensing rights"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of third-party",
          "User does not own Content or hold necessary rights to post and monetise the Content",
          "Content uses third-party material without secured rights, licenses, written consents and releases"
        ]
      },
      {
        "id": "of-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Requires written, informed consent from all individuals appearing in content. Content may be removed if consent is withdrawn.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans... Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of identity showing you appear in the content",
            "reason": "To verify you are the individual in the content"
          },
          {
            "description": "Evidence that written, informed consent was not obtained",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "Formal withdrawal of consent statement",
            "reason": "To document consent withdrawal for content removal"
          }
        ],
        "removalCriteria": [
          "Individual appearing in Co-Authored Content did not provide written, informed consent",
          "Individual appearing in Co-Authored Content withdraws their consent",
          "Creator cannot provide necessary documents confirming consent requirements are satisfied"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "Platform is not responsible for lost, stolen, or compromised accounts. Users should contact support for unauthorized activities.",
        "quote": "We are not responsible for: Any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorised activities or resulting unauthorised payments or withdrawals of funds.",
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
            "description": "Contact support@onlyfans.com with account details",
            "reason": "To report unauthorized access and initiate investigation"
          },
          {
            "description": "Description of unauthorized activities or content posted",
            "reason": "To document the scope of the security breach"
          },
          {
            "description": "Evidence of account compromise (unusual activity, changed settings, etc.)",
            "reason": "To verify the account was actually compromised"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Content posted without user authorization due to compromised account",
          "Unauthorized activities resulting from account compromise"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT-REMOVAL",
        "summary": "Platform reserves the right to suspend or remove content that violates Terms of Service and will try to notify users when taking such action.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service... We may suspend or delete Content and accounts according to our Terms of Service. If we do, we will try to Notify you.",
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
            "description": "Report via Complaints Policy process",
            "reason": "To formally notify platform of Terms of Service violation"
          },
          {
            "description": "Evidence of specific Terms of Service breach",
            "reason": "To demonstrate which terms have been violated"
          },
          {
            "description": "URL(s) of violating content",
            "reason": "To identify specific content for review and removal"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service",
          "Content violates platform policies",
          "Account engages in serious or repeated breaches of Terms of Service"
        ]
      },
      {
        "id": "of-ai-content-policy",
        "reference": "OF-TOS-AI-TRANSPARENCY",
        "summary": "AI Generated content must be clearly labeled and comply with Terms of Service. Unlabeled AI content may be subject to removal.",
        "quote": "AI Generated Content: AI Generated content must comply with our Terms of Service and must be clearly and conspicuously captioned as AI Generated Content with a signifier such as #ai, or #AIGenerated.",
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
            "reason": "To prove the content was artificially generated"
          },
          {
            "description": "Documentation showing content lacks required AI labeling",
            "reason": "To demonstrate violation of transparency requirements"
          },
          {
            "description": "URL(s) of unlabeled AI-generated content",
            "reason": "To identify specific content violating labeling requirements"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly and conspicuously labeled",
          "AI Generated content lacks required signifiers (#ai, #AIGenerated)",
          "AI Generated content violates other Terms of Service provisions"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification to avoid waiving rights",
        "Provide required documentation and evidence supporting your appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-22T11:24:51.949Z",
    "policies": [
      {
        "id": "of-pp-dmca-takedown",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes DMCA takedown requests to protect Creator intellectual property rights, including unauthorized use of images and content.",
        "quote": "We may process Personal Data if it is in our, or a third-party's, legitimate interests (as detailed in the table below). This may include, for example, investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
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
            "description": "DMCA takedown report submission",
            "example": "Report filed through OnlyFans DMCA procedure",
            "reason": "Required to initiate intellectual property protection process"
          }
        ],
        "removalCriteria": [
          "Content violates Creator's intellectual property rights",
          "Valid DMCA takedown request submitted"
        ]
      },
      {
        "id": "of-pp-terms-enforcement",
        "reference": "OF-PP-10",
        "summary": "OnlyFans enforces Terms of Service violations and removes content that violates platform policies, including unauthorized sharing of private content.",
        "quote": "Ensuring compliance with, and enforcing, our Terms of Service and other usage policies (e.g. our Acceptable Use Policy)... Removal from the Services of text and content uploaded by users that is identified as violating our Terms of Service and where appropriate, suspending or deactivating user accounts.",
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
            "example": "Documentation showing policy breach",
            "reason": "Required to demonstrate violation of platform rules"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content violates Acceptable Use Policy",
          "User account may be suspended or deactivated for violations"
        ]
      },
      {
        "id": "of-pp-illegal-content-removal",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes illegal content and suspends accounts associated with illegal activity, including non-consensual sharing.",
        "quote": "Removal from the Services of text and content uploaded by users that is identified as illegal, and suspending or deactivating those user accounts... Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations.",
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
            "description": "Evidence of illegal content or activity",
            "example": "Documentation showing content violates applicable laws",
            "reason": "Required to identify and remove illegal material"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Account suspension or deactivation for illegal activity",
          "Content may be reported to law enforcement authorities"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "OF-PP-10",
        "summary": "OnlyFans moderates and filters content, chat messages, and livestreams to investigate Terms of Service violations.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans, livestreaming on OnlyFans, content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service... Filtration of text sent in direct messages on OnlyFans to investigate violations of our Terms of Service.",
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
            "description": "Content subject to automated and manual moderation",
            "example": "Platform monitoring of uploads and messages",
            "reason": "To detect and prevent Terms of Service violations"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service as detected through moderation",
          "Chat messages violate platform policies",
          "Livestream content breaches acceptable use standards"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes personal data to protect user rights, property, and safety, including responding to harassment and privacy violations.",
        "quote": "As necessary or appropriate to protect the rights and property of our users, us, and other third parties... to protect the safety of our users and third parties",
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
            "description": "Evidence of threat to user safety or property rights",
            "example": "Documentation of harassment or privacy violation",
            "reason": "Required to assess and respond to safety concerns"
          }
        ],
        "removalCriteria": [
          "Content threatens user safety",
          "Content violates user property rights",
          "Content poses risk to third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/my/tickets/create",
      "summary": "Users can submit tickets through their OnlyFans account or email privacy@onlyfans.com for privacy-related concerns. Appeals process available for certain U.S. residents.",
      "steps": [
        "Submit a ticket through your OnlyFans account at /my/tickets/create",
        "Alternatively, email privacy@onlyfans.com for privacy-related issues",
        "For U.S. residents: Submit appeal requests using provided contact details if initial request is denied",
        "If appeal is denied, residents of certain U.S. States may contact their local Attorney General"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758540291949-0",
    "reference": "OF-AUP-NEW",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including non-consensual content, harassment, impersonation, and content removal guidelines.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-22T11:24:51.949Z",
    "policies": [
      {
        "id": "of-tou-content-removal",
        "reference": "OF-TOU-12.1",
        "summary": "OnlyFans reserves the right to suspend or remove Content that may breach their Terms of Service.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service.",
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
            "description": "Evidence that content breaches Terms of Service",
            "example": "Documentation showing violation of acceptable use policy",
            "reason": "To demonstrate content violates platform rules"
          }
        ],
        "removalCriteria": [
          "Content that may breach Terms of Service"
        ]
      },
      {
        "id": "of-tou-illegal-content",
        "reference": "OF-TOU-12.2",
        "summary": "OnlyFans complies with applicable laws requiring proportionate measures to quickly remove illegal Content when they become aware it is on the platform.",
        "quote": "We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans.",
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
          "removal": {
            "value": null,
            "unit": null,
            "description": "Quickly remove illegal content"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that content is illegal under applicable law",
            "example": "Legal documentation or court order",
            "reason": "To establish content violates applicable laws"
          }
        ],
        "removalCriteria": [
          "Content that is illegal under applicable laws"
        ]
      },
      {
        "id": "of-tou-account-suspension",
        "reference": "OF-TOU-14.2",
        "summary": "OnlyFans may suspend or delete accounts and Content without warning when they suspect serious or repeated breaches of Terms of Service.",
        "quote": "At any time, without warning or Notice and for as long as is necessary to review the relevant facts, we may: (i) suspend or delete your account and/or your Content; (ii) pause Fan Payments which would have been due during the suspension period; (iii) withhold any part of your Creator Earnings; and/or (iv) suspend, refund, or cancel Fan Payments if: we think you have or may have seriously or repeatedly breached the Terms of Service",
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
            "example": "Documentation of multiple policy violations",
            "reason": "To demonstrate pattern of violations warranting account action"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breaches of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-tou-co-authored-consent",
        "reference": "OF-TOU-16.2",
        "summary": "Content featuring individuals other than the uploader requires written informed consent from all individuals appearing in the content.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "example": "Identity verification and statement that consent was not given",
            "reason": "To establish lack of required consent for content featuring you"
          }
        ],
        "removalCriteria": [
          "Content featuring individuals without their written, informed consent",
          "Content featuring individuals under 18 years of age",
          "Failure to provide required consent documentation when requested"
        ]
      },
      {
        "id": "of-tou-consent-withdrawal",
        "reference": "OF-TOU-16.6",
        "summary": "Individuals appearing in Co-Authored Content may withdraw their consent at any time, and the content may be deleted upon consent withdrawal.",
        "quote": "Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of identity and statement withdrawing consent",
            "example": "Government-issued ID and written statement withdrawing consent for specific content",
            "reason": "To verify identity and establish consent withdrawal"
          }
        ],
        "removalCriteria": [
          "Withdrawal of consent by any individual appearing in the content"
        ]
      },
      {
        "id": "of-tou-ip-infringement",
        "reference": "OF-TOU-15.6",
        "summary": "OnlyFans may submit notifications of intellectual property infringement on behalf of creators to third parties infringing their content.",
        "quote": "While we do not own your Content, you grant us the right to submit notifications of infringement (including of copyright or trademark) on your behalf to any third-party that is infringing your Content. We are under no obligation to submit such notifications or to police infringements of your Content.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
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
            "description": "Evidence of intellectual property ownership and infringement",
            "example": "Proof of content ownership and evidence of unauthorized use",
            "reason": "To establish ownership rights and unauthorized use"
          }
        ],
        "removalCriteria": [
          "Infringement of copyright or trademark rights",
          "Unauthorized use of creator's content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through OnlyFans' Appeals Policy, with a six-month time limit to dispute decisions.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Submit dispute within six months of notification",
        "Provide relevant information as requested in the appeals process"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758540291949-1",
    "reference": "OF-TC",
    "title": "Transparency Center",
    "summary": "OnlyFans transparency center containing content policies, safety measures, and reporting procedures for various violations.",
    "url": "https://onlyfans.com/transparency",
    "accessTimestamp": "2025-09-22T11:24:51.949Z",
    "policies": [],
    "appealProcess": null
  }
],
};
