import { PlatformPolicies } from '../../types/platforms';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including rules against non-consensual content, harassment, impersonation, hate speech, illegal activity (including exploitation of minors, incest, bestiality, necrophilia, rape/sexual assault), and other prohibited conduct on the platform.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2026-07-04T14:36:33.324Z",
    "policies": [
      {
        "id": "of-tou-content-removal",
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
        "id": "of-tou-illegal-content-removal",
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
        "id": "of-tou-account-suspension",
        "reference": "Section 14.2",
        "summary": "May suspend or delete accounts and content without warning for serious or repeated breaches",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempt or threat to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity"
        ]
      },
      {
        "id": "of-tou-co-authored-consent",
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
          "Content featuring individuals without proper identity verification"
        ]
      },
      {
        "id": "of-tou-consent-withdrawal",
        "reference": "Section 16.6",
        "summary": "Allows individuals to withdraw consent and requires content deletion upon consent withdrawal",
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
          "Withdrawal of consent by any individual appearing in content"
        ]
      },
      {
        "id": "of-tou-intellectual-property",
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
          "Content uploaded without necessary rights or permissions"
        ]
      },
      {
        "id": "of-tou-dmca-process",
        "reference": "Section 15.7",
        "summary": "Provides DMCA takedown procedures for responding to copyright infringement reports",
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
        "id": "of-tou-illegal-content-reporting",
        "reference": "Section 13.1",
        "summary": "Enables users to report content they suspect may be illegal for review and removal",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content reported as suspected illegal via the Complaints Policy process"
        ]
      },
      {
        "id": "of-tou-account-termination-dispute",
        "reference": "Section 14.4",
        "summary": "Provides a process to dispute account termination or content removal decisions within six months",
        "quote": "If you do not dispute our decision within six months of Notification, you waive the right to dispute the decision. You may dispute a Creator Earnings forfeiture decision by following our Complaints Policy and dispute an account termination or Content deactivation decision by following our Appeals Policy.",
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
            "value": 6,
            "unit": "months",
            "description": "Window to dispute account termination or content deactivation decisions before waiving the right to dispute"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account termination or content deactivation decision disputed within six months of notification"
        ]
      },
      {
        "id": "of-tou-doxing-liability",
        "reference": "Section 21.3",
        "summary": "Acknowledges that unauthorised disclosure of a user's identity or personal information by other users or third parties without consent (doxing) can occur on the platform",
        "quote": "are not liable to you for any disclosure of your identity, or any disclosure or publication of your personal information by other Users or third parties without your consent (also known as \"doxing\")",
        "contentTypes": [
          "private",
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other",
          "impersonation",
          "relationship"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "of-tou-ai-generated-labeling",
        "reference": "Section 19.2",
        "summary": "Requires AI-generated content to be clearly and conspicuously labeled as such",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "AI Generated Content not clearly and conspicuously labeled as such"
        ]
      },
      {
        "id": "of-tou-content-moderation-tools",
        "reference": "Section 12.3",
        "summary": "Uses automated detection tools including AI and machine learning to identify and remove policy-violating content",
        "quote": "When we review Content in accordance with our internal policies, we reserve the right to conduct these reviews with technology tools such as classifiers, and Artificial Intelligence and Machine Learning-enabled tools to detect and remove Content that violates our policies.",
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
          "Content that violates OnlyFans policies as detected by automated review tools"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions by following the Appeals Policy, or dispute a Creator Earnings forfeiture decision by following the Complaints Policy, within six months of notification.",
      "steps": [
        "Receive Notification of the account termination, content deactivation, or Creator Earnings forfeiture decision",
        "Follow the Appeals Policy to dispute an account termination or Content deactivation decision",
        "Follow the Complaints Policy to dispute a Creator Earnings forfeiture decision",
        "Submit the dispute within six months of Notification, or the right to dispute is waived"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, licensing, account responsibilities, and security obligations for creators and fans.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2026-07-04T14:36:33.324Z",
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
            "description": "quickly remove illegal Content"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that is illegal under applicable laws"
        ]
      },
      {
        "id": "of-tos-content-ownership-warranty",
        "reference": "Section 8.3.2",
        "summary": "Requires users to own content or hold all rights necessary to post and monetize content on OnlyFans",
        "quote": "you own your Content (and all intellectual property rights in it) or hold all rights necessary, including licenses, to post and monetise the Content on OnlyFans or the subsequent use of that Content by OnlyFans",
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
          "Content posted without owning rights or necessary licenses",
          "Content that infringes intellectual property rights"
        ]
      },
      {
        "id": "of-tos-third-party-consent",
        "reference": "Section 8.3.3",
        "summary": "Requires users to secure all rights, licenses, written consents and releases for any third-party material included in content",
        "quote": "if your Content includes or uses any third-party material, you have secured all rights, licenses, written consents and releases that are necessary for the use of such third-party property in your Content and for the subsequent use of that Content on OnlyFans and by us",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Written consents and releases from third parties appearing in content",
            "example": "Signed consent forms from individuals featured in the content",
            "reason": "To ensure all parties have agreed to the use of their likeness or material"
          }
        ],
        "removalCriteria": [
          "Content including third-party material without secured rights, licenses, written consents and releases"
        ]
      },
      {
        "id": "of-tos-co-authored-content-consent",
        "reference": "Section 16.2",
        "summary": "Requires written, informed consent from individuals at least 18 years of age who appear in co-authored content",
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
            "description": "Proof of identity of individuals appearing in co-authored content",
            "example": "Government-issued ID verification",
            "reason": "To verify age and identity of all participants"
          },
          {
            "description": "Written, informed consent from individuals appearing in content",
            "example": "Signed consent agreement",
            "reason": "To ensure all participants have agreed to content sharing"
          }
        ],
        "removalCriteria": [
          "Co-authored content without written, informed consent from participants",
          "Co-authored content featuring individuals without proper identity verification"
        ]
      },
      {
        "id": "of-tos-consent-withdrawal",
        "reference": "Section 16.6",
        "summary": "Allows individuals to withdraw consent for co-authored content at any time, which may result in content deletion",
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
          "Co-authored content where a participant has withdrawn consent"
        ]
      },
      {
        "id": "of-tos-ip-infringement-warranty",
        "reference": "Section 15.1",
        "summary": "Requires content to not infringe or violate intellectual property rights of any third party",
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
          "Content posted without obtaining necessary rights to distribute, copy, display, or use"
        ]
      },
      {
        "id": "of-tos-account-suspension-violation",
        "reference": "Section 14.2",
        "summary": "May suspend or delete accounts and content without warning for serious or repeated breaches of Terms of Service",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Serious breach of Terms of Service",
          "Repeated breaches of Terms of Service"
        ]
      },
      {
        "id": "of-tos-unlawful-fraudulent-activity",
        "reference": "Section 14.2.3",
        "summary": "May suspend accounts and withhold earnings when suspected unlawful or fraudulent activity is involved",
        "quote": "we suspect that all or any part of the Creator Earnings result from unlawful or fraudulent activity, either by you or by the Fan who made the Fan Payment resulting in the Creator Earnings.",
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
          "Content or earnings resulting from unlawful activity",
          "Content or earnings resulting from fraudulent activity"
        ]
      },
      {
        "id": "of-tos-ai-generated-content-disclosure",
        "reference": "Section 19.2",
        "summary": "Requires AI-generated content to be clearly and conspicuously labelled as such",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "AI generated content not clearly and conspicuously labelled as such"
        ]
      },
      {
        "id": "of-tos-content-moderation-technology",
        "reference": "Section 12.3",
        "summary": "Uses automated detection tools including AI and machine learning to detect and remove content that violates policies",
        "quote": "When we review Content in accordance with our internal policies, we reserve the right to conduct these reviews with technology tools such as classifiers, and Artificial Intelligence and Machine Learning-enabled tools to detect and remove Content that violates our policies.",
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
          "Content detected by automated tools as violating platform policies"
        ]
      },
      {
        "id": "of-tos-doxing-disclosure",
        "reference": "Section 21.3",
        "summary": "Addresses lack of liability for disclosure of identity or personal information by other users without consent, commonly known as doxing",
        "quote": "are not liable to you for any disclosure of your identity, or any disclosure or publication of your personal information by other Users or third parties without your consent (also known as \"doxing\")",
        "contentTypes": [
          "private",
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
          "Disclosure or publication of personal information without consent (doxing)"
        ]
      },
      {
        "id": "of-tos-account-compromise-disclaimer",
        "reference": "Section 13.8",
        "summary": "Addresses lack of responsibility for lost, stolen, or compromised accounts and resulting unauthorised activity",
        "quote": "Any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorised activities or resulting unauthorised payments or withdrawals of funds.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content or activity resulting from a lost, stolen, or compromised account"
        ]
      },
      {
        "id": "of-tos-content-circulation-breach-disclaimer",
        "reference": "Section 13.9",
        "summary": "Notes lack of responsibility for the circulation of content recorded in breach of the Terms of Service",
        "quote": "The circulation of Content recorded in breach of the Terms of Service.",
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
          "Content that was recorded in breach of the Terms of Service"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users may dispute account termination or content deactivation decisions through the Appeals Policy, or dispute Creator Earnings forfeiture through the Complaints Policy, within six months of notification.",
      "steps": [
        "Receive notification of the action taken and a statement of reasons",
        "Dispute a Creator Earnings forfeiture decision by following the Complaints Policy",
        "Dispute an account termination or Content deactivation decision by following the Appeals Policy",
        "Submit the dispute within six months of notification, or the right to dispute is waived"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, shares, and protects user personal data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2026-07-04T14:36:33.324Z",
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
        "summary": "Provides moderation and filtration of content uploaded to OnlyFans to monitor and investigate violations",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content threatens the rights and property of users or third parties"
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
          "Activity is identified as illegal and reportable to authorities"
        ]
      },
      {
        "id": "of-pp-background-screening",
        "reference": "Section 8",
        "summary": "Reserves the right to take action against content or accounts where an individual has a serious criminal conviction, including sex offender registry status, to enforce platform terms",
        "quote": "We reserve the right to take action in relation to content or accounts where an individual has been convicted of committing a serious criminal offence.",
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
          "Individual has been convicted of a serious criminal offence",
          "Individual appears on a sex offenders registry (for U.S.-based individuals)"
        ]
      },
      {
        "id": "of-pp-serious-conviction-enforcement",
        "reference": "Section 10",
        "summary": "Enforces Terms of Service by determining whether a user has a serious criminal conviction, including sex offender registry status",
        "quote": "Ensuring compliance with, and enforcing, our Terms of Service and other usage policies (e.g. our Acceptable Use Policy). As set out as Section 8 (categories of Personal Data), this may include determining whether you have a serious criminal conviction (including if you appear on a sex offenders registry).",
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
          "User has a serious criminal conviction",
          "User appears on a sex offenders registry"
        ]
      },
      {
        "id": "of-pp-legal-request-preservation",
        "reference": "Section 17",
        "summary": "Retains data related to trust and safety investigations, including suspected Terms of Service violations, to support law enforcement and non-governmental authority investigations and enforce removal of offending users or content",
        "quote": "Trust and safety: If you have (or we reasonably suspect that you have) violated our Terms of Service, or where we otherwise need to retain information to identify and report illegal activity or protect the safety of our users and third parties, we will retain certain Personal Data for as long as necessary to conduct our investigations, assist with any investigations by law enforcement or non-governmental authorities (e.g. NCMEC), and enforce any removal of offending users or content.",
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
          "Suspected or confirmed violation of Terms of Service",
          "Need to identify and report illegal activity",
          "Need to protect the safety of users and third parties"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "Federal law signed on May 19, 2025, criminalizing nonconsensual intimate imagery including deepfakes and requiring covered platforms to remove such content within 48 hours of verified requests. The May 19, 2026 deadline for platforms to implement notice-and-removal processes has now passed, and the FTC has begun active enforcement, including sending compliance reminder letters to major platforms.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2026-07-04T14:36:33.324Z",
    "policies": [
      {
        "id": "take-it-down-authentic-adults",
        "reference": "Section 223(h)(2)(A)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is not a minor if— (i) the intimate visual depiction was obtained or created under circumstances in which the person knew or reasonably should have known the identifiable individual had a reasonable expectation of privacy; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the intimate visual depiction— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intimate visual depiction was obtained or created under circumstances with reasonable expectation of privacy",
          "Content was not voluntarily exposed in a public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-authentic-minors",
        "reference": "Section 223(h)(2)(B)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content depicts an identifiable minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-deepfake-adults",
        "reference": "Section 223(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is a digital forgery published without consent",
          "Content was not voluntarily exposed in a public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-deepfake-minors",
        "reference": "Section 223(h)(3)(B)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is a digital forgery depicting an identifiable minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-threats-authentic",
        "reference": "Section 223(h)(6)(A)",
        "summary": "Prohibits intentionally threatening to publish authentic intimate visual depictions for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (2) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be punished as provided in paragraph (4).",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intentional threat to publish authentic intimate visual depictions",
          "Threat made for intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "take-it-down-threats-deepfake",
        "reference": "Section 223(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to publish digital forgeries (deepfakes) for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both. Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intentional threat to publish digital forgeries",
          "Threat made for intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "take-it-down-platform-removal",
        "reference": "Section 3(a)(3)",
        "summary": "Requires covered platforms to remove nonconsensual intimate visual depictions within 48 hours of receiving a valid removal request and make reasonable efforts to identify and remove identical copies",
        "quote": "Upon receiving a valid removal request from an identifiable individual (or an authorized person acting on behalf of such individual) using the process described in paragraph (1)(A)(ii), a covered platform shall, as soon as possible, but not later than 48 hours after receiving such request— (A) remove the intimate visual depiction; and (B) make reasonable efforts to identify and remove any known identical copies of such depiction.",
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
            "description": "Platform must remove content as soon as possible but not later than 48 hours after receiving valid removal request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Physical or electronic signature of the identifiable individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify the identity of the person making the request"
          },
          {
            "description": "Identification and information reasonably sufficient to locate the intimate visual depiction",
            "example": "URL or specific location of the content on the platform",
            "reason": "To enable the platform to find and remove the specific content"
          },
          {
            "description": "Brief statement of good faith belief that the content is nonconsensual",
            "example": "Statement explaining why the content was published without consent",
            "reason": "To establish that the content violates the platform's policies"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address or phone number",
            "reason": "To enable the platform to communicate about the request"
          }
        ],
        "removalCriteria": [
          "Content is an intimate visual depiction of the requesting individual",
          "Content was published without the consent of the identifiable individual",
          "Valid removal request submitted through established process"
        ]
      },
      {
        "id": "take-it-down-platform-process",
        "reference": "Section 3(a)(1)",
        "summary": "Requires covered platforms to establish a notice and removal process for nonconsensual intimate visual depictions within one year of enactment",
        "quote": "Not later than 1 year after the date of enactment of this Act, a covered platform shall establish a process whereby an identifiable individual (or an authorized person acting on behalf of such individual) may— (i) notify the covered platform of an intimate visual depiction published on the covered platform that— (I) includes a depiction of the identifiable individual; and (II) was published without the consent of the identifiable individual; and (ii) submit a request for the covered platform to remove such intimate visual depiction.",
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
          "response": {
            "value": 1,
            "unit": "years",
            "description": "Platform must establish notice and removal process within 1 year of enactment"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content includes a depiction of the identifiable individual",
          "Content was published without the consent of the identifiable individual"
        ]
      },
      {
        "id": "take-it-down-liability-limitation",
        "reference": "Section 3(a)(4)",
        "summary": "Protects platforms from liability for good faith removal of content reasonably believed to be a nonconsensual intimate visual depiction, supporting good faith takedown actions",
        "quote": "A covered platform shall not be liable for any claim based on the covered platform's good faith disabling of access to, or removal of, material claimed to be a nonconsensual intimate visual depiction based on facts or circumstances from which the unlawful publishing of an intimate visual depiction is apparent, regardless of whether the intimate visual depiction is ultimately determined to be unlawful or not.",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Facts or circumstances make the unlawful publishing of the intimate visual depiction apparent to the platform"
        ]
      },
      {
        "id": "take-it-down-notice-of-process",
        "reference": "Section 3(a)(2)",
        "summary": "Requires covered platforms to provide clear and conspicuous notice of the notice-and-removal process, including how individuals can submit removal requests",
        "quote": "A covered platform shall provide on the platform a clear and conspicuous notice, which may be provided through a clear and conspicuous link to another web page or disclosure, of the notice and removal process established under paragraph (1)(A) that— (A) is easy to read and in plain language; and (B) provides information regarding the responsibilities of the covered platform under this section, including a description of how an individual can submit a notification and request for removal.",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "take-it-down-ftc-enforcement",
        "reference": "Section 3(b)(1)",
        "summary": "Establishes that a platform's failure to reasonably comply with notice and takedown obligations is treated as an unfair or deceptive act or practice, enforceable by the Federal Trade Commission",
        "quote": "A failure to reasonably comply with the notice and takedown obligations under subsection (a) shall be treated as a violation of a rule defining an unfair or a deceptive act or practice under section 18(a)(1)(B) of the Federal Trade Commission Act (15 U.S.C. 57a(a)(1)(B)).",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Covered platform fails to reasonably comply with the notice and takedown obligations established under this Act"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
