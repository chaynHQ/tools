import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-acceptable-use-policy",
    "reference": "OF-AUP",
    "title": "Acceptable Use Policy",
    "summary": "Comprehensive policy covering prohibited content and behavior on OnlyFans, including non-consensual content, illegal activities, harassment, and content restrictions.",
    "url": "https://onlyfans.com/aup",
    "accessTimestamp": "2025-09-18T19:50:11.501Z",
    "policies": [
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOU-16",
        "summary": "Any individual appearing in Co-Authored Content may withdraw their consent at any time, requiring the content to be deleted.",
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
            "reason": "To verify you are the person depicted in the Co-Authored Content"
          },
          {
            "description": "URL(s) of the Co-Authored Content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement withdrawing consent to appear in the content",
            "reason": "To establish that consent has been withdrawn"
          }
        ],
        "removalCriteria": [
          "An individual appearing in Co-Authored Content withdraws their consent",
          "The Creator fails to provide necessary documents confirming consent requirements"
        ]
      },
      {
        "id": "of-identity-verification-policy",
        "reference": "OF-TOU-6",
        "summary": "All Creators must upload valid ID and photos for identity verification to prevent impersonation.",
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
            "description": "Evidence that an account is impersonating you",
            "reason": "To establish that unauthorized impersonation is occurring"
          },
          {
            "description": "Your own proof of identity",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "URL of the impersonating Creator account",
            "reason": "To identify the account for investigation and potential removal"
          }
        ],
        "removalCriteria": [
          "A Creator account is found to be using fraudulent identity documents",
          "An account is operated by someone other than the verified individual",
          "Identity verification requirements are not met or maintained"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOU-12",
        "summary": "OnlyFans reserves the right to suspend or remove Content that may breach Terms of Service and will try to notify users when taking such action.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service. We comply with applicable laws requiring us to use proportionate measures to quickly remove illegal Content when we become aware it is on OnlyFans. We may suspend or delete Content and accounts according to our Terms of Service. If we do, we will try to Notify you.",
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
            "description": "Proportionate measures to quickly remove illegal Content"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the content that breaches Terms of Service",
            "reason": "To locate and review the allegedly violating content"
          },
          {
            "description": "Description of how the content violates Terms of Service",
            "reason": "To assess the nature of the violation"
          },
          {
            "description": "Evidence supporting the violation claim",
            "reason": "To substantiate the removal request"
          }
        ],
        "removalCriteria": [
          "Content breaches the Terms of Service",
          "Content is determined to be illegal under applicable laws",
          "Content violates platform policies as determined by review"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOU-14",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when users seriously or repeatedly breach Terms of Service or engage in unlawful activity.",
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
            "reason": "To justify account suspension or deletion"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity",
            "reason": "To support suspension based on suspected illegal activity"
          },
          {
            "description": "Evidence of threats or attempts to breach Terms of Service",
            "reason": "To establish serious consequences warranting immediate action"
          }
        ],
        "removalCriteria": [
          "Serious or repeated breach of Terms of Service",
          "Attempts or threats to breach Terms of Service with serious consequences",
          "Suspected unlawful or fraudulent activity",
          "Activity that poses risk to the platform or other users"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "For account termination or content deactivation: Follow the Appeals Policy process",
        "For Creator Earnings forfeiture: Follow the Complaints Policy process",
        "Disputes must be made within six months of notification or the right to dispute is waived",
        "In certain jurisdictions, users may bring breach of contract claims for improper content removal"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, security responsibilities, copyright provisions, and user conduct requirements.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T19:50:11.501Z",
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
            "description": "Proof of original ownership or copyright",
            "reason": "To establish intellectual property rights"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          },
          {
            "description": "File a DMCA notice via OnlyFans DMCA policy procedures",
            "reason": "Legal requirement for copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of third-party",
          "User does not own or have rights necessary to distribute, copy, display, or use the Content"
        ]
      },
      {
        "id": "of-account-security-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "Platform is not responsible for lost, stolen, or compromised accounts, but users should contact support for unauthorized activities.",
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
            "reason": "To report unauthorized access and initiate recovery"
          },
          {
            "description": "Description of unauthorized activities",
            "reason": "To understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "Account posting content without owner's permission due to compromise"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove Content that may breach Terms of Service and will try to notify users when taking such action.",
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
            "description": "Evidence that content breaches Terms of Service",
            "reason": "To demonstrate violation of platform policies"
          },
          {
            "description": "Contact via support@onlyfans.com or Contact Form",
            "reason": "Official reporting channel for policy violations"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service",
          "Content violates platform policies"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring others requires written, informed consent from all individuals, and consent can be withdrawn at any time, resulting in content deletion.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans. Any individual(s) who appear in the Co-Authored Content may, at any time, withdraw their consent to appear in that Co-Authored Content. Co-Authored Content may be deleted where a participant withdraws consent.",
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
            "description": "Proof of identity showing you appear in the content",
            "reason": "To verify you are the individual in the Co-Authored Content"
          },
          {
            "description": "Statement withdrawing consent for the content to be shared",
            "reason": "To exercise right to withdraw consent for Co-Authored Content"
          },
          {
            "description": "URL(s) of the specific Co-Authored Content",
            "reason": "To identify the content for which consent is being withdrawn"
          }
        ],
        "removalCriteria": [
          "Individual appearing in Co-Authored Content withdraws consent",
          "Co-Authored Content was uploaded without required written, informed consent",
          "Creator cannot provide proof of consent when requested"
        ]
      },
      {
        "id": "of-illegal-content-policy",
        "reference": "OF-TOS-ILLEGAL",
        "summary": "OnlyFans complies with applicable laws requiring proportionate measures to quickly remove illegal Content when they become aware it is on the platform.",
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
            "description": "Follow Complaints Policy procedures for reporting illegal content",
            "reason": "Official process for reporting suspected illegal content"
          },
          {
            "description": "Evidence demonstrating content is illegal",
            "reason": "To establish that content violates applicable laws"
          }
        ],
        "removalCriteria": [
          "Content is illegal under applicable laws",
          "Content violates legal requirements in relevant jurisdiction"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive right to dispute",
        "Provide relevant information and evidence supporting your appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data, including biometric data collection and GDPR compliance.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T19:50:11.501Z",
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
            "description": "DMCA takedown report through official procedure",
            "example": "Copyright infringement notice following DMCA format",
            "reason": "Required to establish intellectual property rights violation"
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
        "summary": "OnlyFans moderates and filters text and content uploaded to the platform, livestreaming, and chat messages to monitor and investigate violations of their Terms of Service.",
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
            "reason": "Needed to investigate potential policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content identified as inappropriate through moderation process"
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
            "example": "Legal documentation or law enforcement report",
            "reason": "Required to establish illegal nature of content"
          }
        ],
        "removalCriteria": [
          "Content is identified as illegal under applicable law",
          "Content violates legal compliance requirements"
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
            "description": "Report demonstrating Terms of Service violation",
            "example": "Specific citation of which terms were violated and how",
            "reason": "Needed to verify policy violation and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content violates OnlyFans Terms of Service",
          "Content violates Acceptable Use Policy"
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
            "example": "Documentation of criminal activity or child exploitation",
            "reason": "Required for reporting to appropriate authorities"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement reporting",
          "Content poses safety risk to users or third parties"
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
            "example": "Documentation of harassment, threats, or privacy violations",
            "reason": "Needed to assess threat to user safety and rights"
          }
        ],
        "removalCriteria": [
          "Content threatens the rights or property of users",
          "Content poses safety risk to platform users or third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise rights regarding Personal Data processing including requesting deletion, correction, or restriction of processing by contacting OnlyFans through their account ticket system or privacy email.",
      "steps": [
        "Submit a ticket through your OnlyFans account at /my/tickets/create",
        "Alternatively, email privacy@onlyfans.com with your request",
        "Provide sufficient information to confirm your identity",
        "Include details about the specific content or processing you want addressed",
        "OnlyFans will evaluate and respond to the request according to applicable privacy laws"
      ]
    }
  }
],
};
