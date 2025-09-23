import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "onlyfans-new-1758654288629-0",
    "reference": "OF-TOS-001",
    "title": "OnlyFans Terms of Service",
    "summary": "Primary terms governing platform use, including content restrictions, user obligations, account management, and enforcement policies. Covers prohibited content including non-consensual material, illegal activities, and extreme content.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T19:04:48.629Z",
    "policies": [
      {
        "id": "of-tos-content-removal",
        "reference": "Section 12.1",
        "summary": "Prohibits content that breaches Terms of Service and reserves right to suspend or remove such content",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that breaches Terms of Service"
        ]
      },
      {
        "id": "of-tos-illegal-content",
        "reference": "Section 12.2",
        "summary": "Requires quick removal of illegal content when platform becomes aware of it",
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
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Quickly remove illegal content when aware"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that is illegal under applicable laws"
        ]
      },
      {
        "id": "of-tos-account-suspension",
        "reference": "Section 14.2",
        "summary": "Allows immediate suspension of accounts and content for serious breaches, unlawful activity, or fraud",
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
          "response": {
            "value": null,
            "unit": "immediate",
            "description": "At any time, without warning or Notice"
          },
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "At any time, without warning or Notice"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-tos-co-authored-consent",
        "reference": "Section 16.2",
        "summary": "Requires written informed consent from all individuals appearing in content",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Written, informed consent from all individuals appearing in content",
            "example": "Signed consent form from person appearing in content",
            "reason": "To ensure all individuals have consented to content sharing"
          },
          {
            "description": "Proof of identity for all individuals in content",
            "example": "Valid ID verification for person in content",
            "reason": "To verify age and identity of individuals in content"
          }
        ],
        "removalCriteria": [
          "Content featuring individuals without written informed consent",
          "Content featuring individuals under 18 years of age",
          "Content featuring individuals without proof of identity"
        ]
      },
      {
        "id": "of-tos-consent-withdrawal",
        "reference": "Section 16.6",
        "summary": "Allows removal of content when any participant withdraws consent",
        "quote": "Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Withdrawal of consent by any individual appearing in the content"
        ]
      },
      {
        "id": "of-tos-ip-infringement",
        "reference": "Section 15.1",
        "summary": "Prohibits content that infringes intellectual property rights of third parties",
        "quote": "You confirm that your Content does not infringe or violate the intellectual property rights of any third-party and that you own or have obtained all rights necessary to distribute, copy, display, publicly perform or otherwise use the Content.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that infringes intellectual property rights of third parties",
          "Content uploaded without necessary rights or licenses"
        ]
      },
      {
        "id": "of-tos-dmca-policy",
        "reference": "Section 15.7",
        "summary": "Provides procedures for responding to copyright infringement reports through DMCA takedown process",
        "quote": "Our DMCA Takedown Policy describes our procedures for responding to reports that infringing content was published on OnlyFans. Our Complaints Policy explains how to make a complaint about infringement of intellectual property rights on platforms other than OnlyFans.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content reported as copyright infringing through DMCA process"
        ]
      },
      {
        "id": "of-tos-user-responsibility",
        "reference": "Section 8.2",
        "summary": "Makes users legally responsible for all content they upload",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that does not comply with Terms of Service",
          "Content uploaded without proper authorization"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and dispute Creator Earnings forfeiture through the Complaints Policy. Users have six months to dispute decisions or waive the right to dispute.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification to avoid waiving dispute rights"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758654288629-3",
    "reference": "OF-PP-001",
    "title": "OnlyFans Privacy Policy",
    "summary": "Privacy protections, data handling procedures, and user rights regarding personal information and content. Includes provisions for content removal requests and privacy violations.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T19:04:48.629Z",
    "policies": [
      {
        "id": "of-pp-age-verification",
        "reference": "Section 4",
        "summary": "Prohibits use of services by individuals under 18 years of age",
        "quote": "Our Services are strictly intended for individuals 18 years of age or older. Anyone under 18 years of age is not permitted to use the Services. By using the Services, you represent that you are 18 years of age or older.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User is under 18 years of age"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "Section 10",
        "summary": "Provides moderation and filtration of content uploaded to OnlyFans to monitor violations",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans; livestreaming on OnlyFans; content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Terms of Service"
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is identified as illegal"
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Terms of Service"
        ]
      },
      {
        "id": "of-pp-banned-user-prevention",
        "reference": "Section 10",
        "summary": "Maintains records of banned users to prevent further access to OnlyFans",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User has been previously banned from the platform"
        ]
      },
      {
        "id": "of-pp-law-enforcement-reporting",
        "reference": "Section 10",
        "summary": "Reports illegal activity to relevant law enforcement authorities and governmental organizations",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Activity is identified as illegal"
        ]
      },
      {
        "id": "of-pp-fraud-detection",
        "reference": "Section 10",
        "summary": "Monitors transactions and systems to detect malicious, deceptive, fraudulent, or illegal activity",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Activity is identified as malicious, deceptive, fraudulent, or illegal"
        ]
      },
      {
        "id": "of-pp-user-safety-protection",
        "reference": "Section 10",
        "summary": "Protects the rights and property of users and third parties as necessary",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content threatens the rights and property of users or third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users have the right to appeal decisions regarding privacy requests, with specific appeal rights for certain U.S. State residents",
      "steps": [
        "Submit appeal request using contact details provided in Section 19",
        "If appeal is denied and you are a U.S. resident, you may contact your local Attorney General"
      ]
    }
  }
],
};
