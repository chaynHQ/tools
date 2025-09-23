import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including non-consensual content, illegal activities, and content restrictions.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-23T18:42:43.711Z",
    "policies": [
      {
        "id": "of-aup-content-removal",
        "reference": "Section 12.1",
        "summary": "Reserves the right to suspend or remove content that may breach Terms of Service",
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
          "Content that may breach Terms of Service"
        ]
      },
      {
        "id": "of-aup-illegal-content-removal",
        "reference": "Section 12.2",
        "summary": "Uses proportionate measures to quickly remove illegal content when aware it is on the platform",
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
        "id": "of-aup-account-suspension",
        "reference": "Section 14.2",
        "summary": "May suspend or delete accounts and content without warning for serious or repeated breaches of Terms of Service",
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
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-aup-co-authored-consent",
        "reference": "Section 16.2",
        "summary": "Requires written informed consent from all individuals appearing in co-authored content",
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
            "description": "Proof of identity of all individuals in content",
            "example": "Valid identification documents",
            "reason": "To verify all individuals are over 18 and have consented"
          },
          {
            "description": "Written informed consent from all individuals",
            "example": "Signed consent forms",
            "reason": "To confirm permission to share content on the platform"
          }
        ],
        "removalCriteria": [
          "Content featuring individuals without written informed consent",
          "Content featuring individuals under 18 years of age",
          "Content where required documentation is not provided"
        ]
      },
      {
        "id": "of-aup-consent-withdrawal",
        "reference": "Section 16.6",
        "summary": "Allows individuals to withdraw consent and have co-authored content deleted",
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
        "id": "of-aup-intellectual-property",
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
        "id": "of-aup-dmca-policy",
        "reference": "Section 15.7",
        "summary": "Maintains DMCA takedown procedures for responding to copyright infringement reports",
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
          "Content reported as copyright infringing under DMCA procedures"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy",
      "steps": [
        "Submit dispute within six months of notification to avoid waiving rights",
        "Follow Appeals Policy for account termination or content deactivation disputes",
        "Follow Complaints Policy for Creator Earnings forfeiture disputes"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, security responsibilities, and platform rules.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-23T18:42:43.711Z",
    "policies": [
      {
        "id": "of-tos-content-removal",
        "reference": "Section 12.1",
        "summary": "Reserves the right to suspend or remove content that may breach Terms of Service",
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
          "Content that may breach Terms of Service"
        ]
      },
      {
        "id": "of-tos-illegal-content-removal",
        "reference": "Section 12.2",
        "summary": "Complies with applicable laws requiring proportionate measures to quickly remove illegal content when aware it is on OnlyFans",
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
        "id": "of-tos-content-warranty",
        "reference": "Section 8.3",
        "summary": "Requires users to warrant their content complies with Terms of Service and all applicable laws",
        "quote": "You warrant that, for each item of Content you Upload to OnlyFans: it complies with the Terms of Service and all applicable laws",
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
          "Content that does not comply with applicable laws"
        ]
      },
      {
        "id": "of-tos-ip-rights-warranty",
        "reference": "Section 15.1",
        "summary": "Requires users to confirm their content does not infringe intellectual property rights of any third party",
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
          "Content that infringes or violates intellectual property rights of third parties",
          "Content where user does not own or have necessary rights"
        ]
      },
      {
        "id": "of-tos-co-authored-consent",
        "reference": "Section 16.2",
        "summary": "Requires written informed consent from individuals appearing in co-authored content who are at least 18 years old",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans.",
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
            "example": "Valid identification documents",
            "reason": "To verify age and identity of content participants"
          },
          {
            "description": "Written informed consent from individuals appearing in content",
            "example": "Signed consent forms",
            "reason": "To ensure permission was obtained to share the content"
          }
        ],
        "removalCriteria": [
          "Content featuring individuals without written informed consent",
          "Content featuring individuals under 18 years of age",
          "Content where required documentation is not provided"
        ]
      },
      {
        "id": "of-tos-consent-withdrawal",
        "reference": "Section 16.6",
        "summary": "Allows individuals appearing in co-authored content to withdraw consent at any time, resulting in content deletion",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content where a participant has withdrawn consent to appear"
        ]
      },
      {
        "id": "of-tos-account-suspension-deletion",
        "reference": "Section 14.2",
        "summary": "May suspend or delete accounts and content without warning for serious or repeated breaches of Terms of Service",
        "quote": "At any time, without warning or Notice and for as long as is necessary to review the relevant facts, we may: (i) suspend or delete your account and/or your Content; (ii) pause Fan Payments which would have been due during the suspension period; (iii) withhold any part of your Creator Earnings; and/or (iv) suspend, refund, or cancel Fan Payments if: we think you have or may have seriously or repeatedly breached the Terms of Service; you attempt, or threaten, to breach the Terms of Service in a way which we think has or could have serious consequences for us or another User",
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
          "Serious or repeated breaches of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences"
        ]
      },
      {
        "id": "of-tos-dmca-policy",
        "reference": "Section 15.7",
        "summary": "Has DMCA Takedown Policy for responding to reports of infringing content published on OnlyFans",
        "quote": "Our DMCA Takedown Policy describes our procedures for responding to reports that infringing content was published on OnlyFans.",
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
          "Content that infringes copyright as reported through DMCA procedures"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions by following the Appeals Policy, and dispute Creator Earnings forfeiture decisions by following the Complaints Policy",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Disputes must be made within six months of notification or the right to dispute is waived"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-23T18:42:43.711Z",
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
        "summary": "Provides moderation and filtration of content uploaded to OnlyFans to monitor violations of Terms of Service",
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
        "id": "of-pp-dmca-takedown",
        "reference": "Section 10",
        "summary": "Investigates and responds to DMCA takedown reports to protect intellectual property rights",
        "quote": "We may process Personal Data if it is in our, or a third-party's, legitimate interests (as detailed in the table below). This may include, for example, investigating and responding to a report made through our DMCA takedown procedure, to protect a Creator's intellectual property rights.",
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
          "Content infringes intellectual property rights",
          "Valid DMCA takedown report is submitted"
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
        "summary": "Protects rights and property of users and third parties as necessary",
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
          "Content threatens rights and property of users or third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users in certain U.S. States have the right to appeal decisions regarding privacy requests, with the option to contact their local Attorney General if the appeal is denied",
      "steps": [
        "Submit appeal request using contact details provided in Section 19",
        "If appeal is denied, contact your local Attorney General"
      ]
    }
  }
],
};
