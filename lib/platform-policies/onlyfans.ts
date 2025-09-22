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
    "accessTimestamp": "2025-09-22T15:08:25.386Z",
    "policies": [
      {
        "id": "of-copyright-policy",
        "reference": "OF-TOS-COPYRIGHT",
        "summary": "OnlyFans may submit notifications of copyright infringement on behalf of creators to third parties that are infringing their content.",
        "quote": "While we do not own your Content, you grant us the right to submit notifications of infringement (including of copyright or trademark) on your behalf to any third-party that is infringing your Content. We are under no obligation to submit such notifications or to police infringements of your Content. Our DMCA Takedown Policy describes our procedures for responding to reports that infringing content was published on OnlyFans.",
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
            "description": "Follow DMCA Takedown Policy procedures",
            "reason": "Required for copyright infringement claims on OnlyFans"
          },
          {
            "description": "Proof of copyright ownership in the content",
            "reason": "To establish legal right to request takedown"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright owned by the complainant",
          "Proper DMCA procedures are followed"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "OnlyFans is not responsible for lost, stolen, or compromised user accounts, passwords, or email accounts, or any resulting unauthorized activities.",
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
            "description": "Contact support@onlyfans.com with account details",
            "reason": "To report compromised account and initiate recovery"
          },
          {
            "description": "Evidence of unauthorized account access or activity",
            "reason": "To verify the account compromise claim"
          }
        ],
        "removalCriteria": [
          "Account shows evidence of unauthorized access",
          "Unauthorized content posted from compromised account"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove content that may breach their Terms of Service and will quickly remove illegal content when they become aware of it.",
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
          "removal": {
            "value": null,
            "unit": null,
            "description": "Quickly remove illegal content when aware"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report suspected illegal content following Complaints Policy",
            "reason": "Required procedure for reporting violations"
          },
          {
            "description": "Evidence that content breaches Terms of Service",
            "reason": "To substantiate the violation claim"
          }
        ],
        "removalCriteria": [
          "Content breaches OnlyFans Terms of Service",
          "Content is illegal under applicable laws"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring individuals other than the uploader requires written informed consent from all participants, and consent can be withdrawn at any time resulting in content deletion.",
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
            "description": "Proof of identity of individuals appearing in content",
            "reason": "To verify age and identity requirements"
          },
          {
            "description": "Evidence of lack of written informed consent or withdrawn consent",
            "reason": "To establish violation of consent requirements"
          }
        ],
        "removalCriteria": [
          "Content features individuals without written informed consent",
          "Participant has withdrawn consent to appear in the content",
          "Unable to provide required documentation for individuals in content"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOS-SUSPENSION",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when they suspect serious or repeated breaches, unlawful activity, or fraudulent activity.",
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
            "reason": "To support suspension based on illegal activity"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Unlawful or fraudulent activity suspected",
          "Threats to breach Terms of Service with serious consequences"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through OnlyFans' Appeals Policy, and must dispute Creator Earnings forfeiture decisions through the Complaints Policy within six months.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation decisions",
        "Follow the Complaints Policy for Creator Earnings forfeiture decisions",
        "Submit dispute within six months of notification or waive right to dispute",
        "In certain jurisdictions, may bring breach of contract claim for improper content removal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-22T15:08:25.386Z",
    "policies": [
      {
        "id": "of-pp-dmca",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes DMCA takedown requests to protect Creator intellectual property rights through their established DMCA takedown procedure.",
        "quote": "We may process Personal Data if it is in our, or a third-party's, legitimate interests (as detailed in the table below). This may include, for example, investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "DMCA takedown report through established procedure",
            "example": "Copyright infringement claim following DMCA format",
            "reason": "Required to investigate and respond to intellectual property violations"
          }
        ],
        "removalCriteria": [
          "Content that infringes Creator's intellectual property rights",
          "Content reported through DMCA takedown procedure"
        ]
      },
      {
        "id": "of-pp-illegal-content",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes illegal content from the platform and suspends or deactivates associated user accounts.",
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
            "description": "Evidence demonstrating content is illegal under applicable law",
            "example": "Documentation showing content violates criminal or civil law",
            "reason": "Required to identify and remove illegal content"
          }
        ],
        "removalCriteria": [
          "Content identified as illegal under applicable laws",
          "Content that violates criminal or civil legal standards"
        ]
      },
      {
        "id": "of-pp-tos-violations",
        "reference": "OF-PP-10",
        "summary": "OnlyFans removes content that violates their Terms of Service and may suspend or deactivate user accounts for violations.",
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
            "description": "Evidence showing specific Terms of Service violation",
            "example": "Documentation of how content breaches acceptable use policies",
            "reason": "Required to enforce Terms of Service compliance"
          }
        ],
        "removalCriteria": [
          "Content that violates OnlyFans Terms of Service",
          "Content that breaches Acceptable Use Policy",
          "Repeated or serious violations may result in account suspension or deactivation"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "OF-PP-10",
        "summary": "OnlyFans conducts moderation and filtration of text, content, livestreaming, and chat messages to monitor and investigate Terms of Service violations.",
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
            "description": "Content subject to automated and manual moderation systems",
            "example": "Uploaded content, livestreams, or chat messages",
            "reason": "To monitor and investigate Terms of Service violations"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms of Service as identified through moderation",
          "Text or media content that breaches platform policies",
          "Livestreaming content that violates acceptable use standards",
          "Chat messages that contain prohibited content"
        ]
      },
      {
        "id": "of-pp-law-enforcement",
        "reference": "OF-PP-10",
        "summary": "OnlyFans reports illegal activity to law enforcement and provides information to authorities investigating violations.",
        "quote": "Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations. Providing relevant information to, or responding to requests from / investigations by, relevant law enforcement authorities, other governmental authorities and non-governmental organisations.",
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
            "example": "Criminal violations, child exploitation, or other serious illegal content",
            "reason": "Required for reporting to and cooperating with law enforcement investigations"
          }
        ],
        "removalCriteria": [
          "Content constituting illegal activity under applicable laws",
          "Content requiring reporting to law enforcement authorities",
          "Content subject to governmental or non-governmental organization investigations"
        ]
      },
      {
        "id": "of-pp-banned-users",
        "reference": "OF-PP-10",
        "summary": "OnlyFans maintains records of banned users to prevent further access to the platform.",
        "quote": "Maintaining a record of banned users, to prevent further access to OnlyFans.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Previous violation history or ban-worthy conduct",
            "example": "Terms of Service violations, illegal activity, or policy breaches",
            "reason": "To prevent banned users from regaining platform access"
          }
        ],
        "removalCriteria": [
          "Users previously banned for Terms of Service violations",
          "Users who have engaged in illegal activity on the platform",
          "Attempts by banned users to create new accounts or regain access"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/my/tickets/create",
      "summary": "Users can submit tickets through their account or email privacy@onlyfans.com for privacy-related concerns and data processing questions.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Alternatively, email privacy@onlyfans.com with your concern",
        "Provide sufficient information to confirm identity and understand the request",
        "OnlyFans may request additional personal data to verify identity depending on request sensitivity"
      ]
    }
  }
],
};
