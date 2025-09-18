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
    "accessTimestamp": "2025-09-18T18:55:41.934Z",
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
          "Content infringes or violates intellectual property rights of third parties",
          "User does not own Content or hold necessary rights to post and monetize it",
          "Content uses third-party material without secured rights, licenses, written consents and releases"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove Content that violates Terms of Service and will try to notify users when taking such action.",
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
            "description": "Report Content via Complaints Policy",
            "reason": "To initiate review of potentially violating content"
          },
          {
            "description": "Evidence that Content violates Terms of Service",
            "reason": "To substantiate the violation claim"
          }
        ],
        "removalCriteria": [
          "Content may breach Terms of Service",
          "Content violates OnlyFans policies",
          "Content is illegal and OnlyFans becomes aware of it"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring others requires written informed consent from individuals at least 18 years old, and consent can be withdrawn at any time resulting in content deletion.",
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
            "description": "Proof of identity showing you are at least 18 years old",
            "reason": "To verify age requirement for consent withdrawal"
          },
          {
            "description": "Evidence that you appear in the Co-Authored Content",
            "reason": "To establish your right to withdraw consent"
          },
          {
            "description": "Statement withdrawing consent for the content to remain on OnlyFans",
            "reason": "To formally revoke permission for content sharing"
          }
        ],
        "removalCriteria": [
          "Individual appearing in Co-Authored Content withdraws their consent",
          "Creator cannot provide written informed consent from individuals in the content",
          "Creator cannot provide proof of identity for individuals in Co-Authored Content"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "OnlyFans is not responsible for lost, stolen, or compromised accounts and resulting unauthorized activities, but may take action on accounts posting unauthorized content.",
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
            "description": "Contact support@onlyfans.com immediately",
            "reason": "To report the compromise and initiate recovery"
          },
          {
            "description": "Provide account details and description of unauthorized activity",
            "reason": "To verify ownership and understand the scope of the compromise"
          },
          {
            "description": "Evidence of unauthorized content posting or account activity",
            "reason": "To substantiate the claim of account compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized account access or activity",
          "Account is posting content without owner's permission",
          "Legitimate owner is locked out of the account"
        ]
      },
      {
        "id": "of-illegal-content-policy",
        "reference": "OF-TOS-ILLEGAL",
        "summary": "OnlyFans complies with laws requiring quick removal of illegal content when they become aware of it and users can report suspected illegal content.",
        "quote": "We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans. You may report Content you suspect may be illegal by following our Complaints Policy.",
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
            "description": "Report via Complaints Policy",
            "reason": "To notify OnlyFans of suspected illegal content"
          },
          {
            "description": "Evidence that content is illegal under applicable law",
            "reason": "To substantiate the illegality claim"
          },
          {
            "description": "URL(s) of the illegal content",
            "reason": "To identify the specific illegal content for removal"
          }
        ],
        "removalCriteria": [
          "Content is illegal under applicable laws",
          "OnlyFans becomes aware of illegal content on the platform"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive the right to dispute",
        "In certain jurisdictions, bring a claim for breach of contract where content removal violates Terms of Service"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T18:55:41.934Z",
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
            "reason": "To establish that content meets threshold for illegal material"
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
            "example": "Specific section of ToS violated and how content violates it",
            "reason": "To show content breaches platform community guidelines"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content breaches Acceptable Use Policy",
          "Repeated or serious violations may result in account suspension"
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
            "description": "Evidence of illegal activity requiring law enforcement intervention",
            "example": "Criminal conduct, child exploitation, or other serious illegal behavior",
            "reason": "To fulfill legal obligations and protect user safety"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement reporting",
          "Activity poses threat to user safety or involves criminal conduct"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
        "reference": "OF-PP-10",
        "summary": "OnlyFans processes personal data as necessary to protect the rights and property of users and other third parties.",
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
            "example": "Harassment, threats, or misuse of personal information",
            "reason": "To protect user safety and legal rights"
          }
        ],
        "removalCriteria": [
          "Content threatens the rights or property of users or third parties",
          "Content poses safety risk to platform users"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit tickets through their account or contact privacy@onlyfans.com for privacy-related concerns. The platform mentions appeal rights for certain U.S. residents regarding privacy requests.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Email privacy@onlyfans.com for privacy-related issues",
        "For U.S. residents: Submit appeal requests using provided contact details if privacy request is denied"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758221741934-0",
    "reference": "OF-AUP-NEW",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content including non-consensual intimate imagery, harassment, impersonation, and content removal guidelines. Contains specific provisions against revenge porn, deepfakes, and NCII.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-18T18:55:41.934Z",
    "policies": [
      {
        "id": "of-aup-content-removal",
        "reference": "OF-AUP-NEW-12.1",
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
          "Content that breaches Terms of Service"
        ]
      },
      {
        "id": "of-aup-illegal-content",
        "reference": "OF-AUP-NEW-12.2",
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
            "example": "Legal documentation or law enforcement communication",
            "reason": "To establish content violates applicable laws"
          }
        ],
        "removalCriteria": [
          "Content that is illegal under applicable laws"
        ]
      },
      {
        "id": "of-aup-co-authored-consent",
        "reference": "OF-AUP-NEW-16.6",
        "summary": "Co-Authored Content may be deleted where a participant withdraws their consent to appear in that content.",
        "quote": "Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of identity as individual appearing in the content",
            "example": "Government-issued ID matching person in content",
            "reason": "To verify the person requesting removal appears in the content"
          },
          {
            "description": "Clear statement withdrawing consent",
            "example": "Written declaration that consent is withdrawn",
            "reason": "To document withdrawal of consent for content use"
          }
        ],
        "removalCriteria": [
          "Individual appearing in Co-Authored Content withdraws consent"
        ]
      },
      {
        "id": "of-aup-copyright-infringement",
        "reference": "OF-AUP-NEW-15.6",
        "summary": "OnlyFans has procedures for responding to reports of infringing content and may submit notifications of infringement on behalf of creators.",
        "quote": "While we do not own your Content, you grant us the right to submit notifications of infringement (including of copyright or trademark) on your behalf to any third-party that is infringing your Content. We are under no obligation to submit such notifications or to police infringements of your Content.",
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
            "description": "Proof of copyright ownership or authorization",
            "example": "Copyright registration or license agreement",
            "reason": "To establish legal right to the content"
          },
          {
            "description": "Identification of infringing content",
            "example": "URLs or screenshots of unauthorized use",
            "reason": "To locate and verify the infringement"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or trademark rights"
        ]
      },
      {
        "id": "of-aup-dmca-policy",
        "reference": "OF-AUP-NEW-15.7",
        "summary": "OnlyFans has a DMCA Takedown Policy that describes procedures for responding to reports that infringing content was published on the platform.",
        "quote": "Our DMCA Takedown Policy describes our procedures for responding to reports that infringing content was published on OnlyFans.",
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
            "description": "DMCA-compliant takedown notice",
            "example": "Notice meeting requirements of Digital Millennium Copyright Act",
            "reason": "To comply with statutory copyright infringement procedures"
          }
        ],
        "removalCriteria": [
          "Content subject to valid DMCA takedown notice"
        ]
      },
      {
        "id": "of-aup-account-suspension",
        "reference": "OF-AUP-NEW-14.2",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when they suspect serious or repeated breaches, threats, or unlawful activity.",
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
            "description": "Evidence of serious or repeated Terms of Service breach",
            "example": "Documentation of policy violations or harmful behavior",
            "reason": "To justify account suspension or content removal"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "OnlyFans provides an Appeals Policy for disputing account termination or Content deactivation decisions, with a six-month deadline to dispute decisions.",
      "steps": [
        "Follow the Appeals Policy for account termination or Content deactivation decisions",
        "Submit dispute within six months of notification or waive right to dispute",
        "For Creator Earnings forfeiture, follow the Complaints Policy instead"
      ]
    }
  }
],
};
