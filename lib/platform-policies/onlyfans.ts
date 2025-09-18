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
    "accessTimestamp": "2025-09-18T18:39:22.536Z",
    "policies": [
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOU-16",
        "summary": "Individuals appearing in Co-Authored Content may withdraw their consent at any time, requiring the content to be deleted.",
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
            "description": "Statement of consent withdrawal",
            "reason": "To confirm that consent to appear in the content has been withdrawn"
          }
        ],
        "removalCriteria": [
          "An individual appearing in Co-Authored Content withdraws their consent to appear in that content"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOU-12",
        "summary": "OnlyFans reserves the right to suspend or remove Content that may breach their Terms of Service and will try to notify users when taking such action.",
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
            "description": "URL(s) of the content that violates Terms of Service",
            "reason": "To identify and review the violating content"
          },
          {
            "description": "Description of how the content breaches the Terms of Service",
            "reason": "To assess the violation and determine appropriate action"
          }
        ],
        "removalCriteria": [
          "Content breaches OnlyFans Terms of Service",
          "Content violates the Acceptable Use Policy",
          "Content is determined to be illegal under applicable laws"
        ]
      },
      {
        "id": "of-account-suspension-policy",
        "reference": "OF-TOU-14",
        "summary": "OnlyFans may suspend or delete accounts and content without warning when users seriously or repeatedly breach Terms of Service, or when unlawful or fraudulent activity is suspected.",
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
            "description": "Evidence of serious or repeated Terms of Service violations",
            "reason": "To justify account suspension or deletion"
          },
          {
            "description": "Documentation of unlawful or fraudulent activity if applicable",
            "reason": "To support suspension based on suspected illegal activity"
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
      "summary": "Users can dispute account termination or content deactivation decisions through OnlyFans' Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Dispute decisions within six months of notification to avoid waiving rights",
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Provide required documentation and evidence to support your appeal"
      ]
    }
  },
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T18:39:22.536Z",
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
          "Content infringes or violates intellectual property rights of third-party",
          "Content is posted without necessary rights, licenses, or permissions"
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
          "Account is posting content without owner's permission",
          "Legitimate owner is locked out of the account"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT-REMOVAL",
        "summary": "OnlyFans reserves the right to suspend or remove content that violates Terms of Service and will try to notify users when taking such action.",
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
            "description": "Report content that violates Terms of Service",
            "reason": "To identify content that breaches platform policies"
          },
          {
            "description": "Follow the Complaints Policy for reporting violations",
            "reason": "To ensure proper reporting procedures are followed"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service",
          "Content violates platform policies",
          "User has seriously or repeatedly breached Terms of Service"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-CO-AUTHORED",
        "summary": "Content featuring others requires written informed consent from all individuals appearing in the content, and consent can be withdrawn at any time.",
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
            "description": "Evidence that consent has been withdrawn",
            "reason": "To demonstrate that permission to use the content has been revoked"
          },
          {
            "description": "Documentation showing you appear in the content without consent",
            "reason": "To establish that you are featured in the content without permission"
          }
        ],
        "removalCriteria": [
          "Individual appearing in content has withdrawn consent",
          "Content was uploaded without written informed consent from all individuals appearing in it",
          "Individual in content did not provide proper consent initially"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-AI-CONTENT",
        "summary": "AI Generated content must be clearly labeled and comply with Terms of Service, which could apply to deepfake intimate imagery.",
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
            "description": "Evidence that AI-generated content features your likeness without permission",
            "reason": "To establish that AI was used to create content using your image"
          },
          {
            "description": "Proof of identity showing you are the person depicted",
            "reason": "To verify that you are the individual whose likeness was used"
          },
          {
            "description": "Documentation that content is not properly labeled as AI-generated",
            "reason": "To show violation of transparency requirements"
          }
        ],
        "removalCriteria": [
          "AI-generated content is not properly labeled with required signifiers",
          "AI-generated content violates Terms of Service",
          "AI-generated content uses someone's likeness without permission"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Submit dispute within six months of notification to preserve right to appeal",
        "Follow Appeals Policy for account termination or content deactivation disputes",
        "Follow Complaints Policy for Creator Earnings forfeiture disputes",
        "Provide required documentation and evidence to support your appeal"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T18:39:22.536Z",
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
            "description": "Report showing Terms of Service violation",
            "example": "Specific citation of which terms were violated",
            "reason": "Needed to verify policy violation occurred"
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
        "summary": "OnlyFans reports illegal activity to relevant law enforcement authorities, governmental authorities and non-governmental organizations.",
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
            "example": "Documentation showing criminal law violation",
            "reason": "Required for law enforcement referral"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity requiring law enforcement intervention",
          "Activity poses safety risk to users or third parties"
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
            "description": "Evidence showing threat to user rights or property",
            "example": "Documentation of harassment, impersonation, or privacy violation",
            "reason": "Needed to establish legitimate safety concern"
          }
        ],
        "removalCriteria": [
          "Content threatens user rights or property",
          "Content poses safety risk to users or third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can exercise rights regarding Personal Data processing including requesting deletion, correction, or restriction of processing by contacting OnlyFans through their account or privacy email.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Alternatively, email privacy@onlyfans.com",
        "Provide sufficient information to confirm identity and understand the request",
        "OnlyFans may request additional Personal Data to verify identity",
        "For U.S. residents in certain states, appeal decisions can be made using the same contact methods"
      ]
    }
  },
  {
    "id": "onlyfans-new-1758220762536-1",
    "reference": "OF-DMCA",
    "title": "DMCA and Copyright Policy",
    "summary": "Digital Millennium Copyright Act policy covering copyright infringement, takedown procedures, and content protection measures.",
    "url": "https://onlyfans.com/dmca",
    "accessTimestamp": "2025-09-18T18:39:22.536Z",
    "policies": [
      {
        "id": "of-dmca-copyright",
        "reference": "OF-DMCA-NOTICE",
        "summary": "OnlyFans removes copyrighted content upon receipt of valid DMCA takedown notices for copyright infringement.",
        "quote": "If you believe that your work has been copied and published on onlyfans.com in a way that constitutes copyright infringement, please provide Our Designated Copyright Agent (identified below) with the following information: (a) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest; (b) description of the copyrighted work or other intellectual property that you claim has been infringed; (c) a description of where the material that you claim is infringing is located on the Site (preferably including specific url's associated with the material); (d) your address, telephone number, and email address; (e) a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and, (f) a statement by you, made under penalty of perjury, that the above information in your notification is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.",
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
            "description": "expeditiously remove and/or disable access to the infringing material"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Electronic or physical signature of copyright owner or authorized representative",
            "example": "Digital signature or scanned physical signature",
            "reason": "To verify authorization to act on behalf of copyright owner"
          },
          {
            "description": "Description of the copyrighted work that has been infringed",
            "example": "Specific identification of your original content",
            "reason": "To identify what copyrighted material is being infringed"
          },
          {
            "description": "Description of where the infringing material is located on OnlyFans",
            "example": "Specific URLs of the infringing content",
            "reason": "To locate and remove the specific infringing content"
          },
          {
            "description": "Contact information including address, telephone number, and email address",
            "example": "Full contact details of complainant",
            "reason": "For communication regarding the takedown request"
          },
          {
            "description": "Good faith belief statement that use is not authorized",
            "example": "Statement that you believe the use is unauthorized",
            "reason": "Legal requirement under DMCA"
          },
          {
            "description": "Statement under penalty of perjury that information is accurate and you are authorized to act",
            "example": "Sworn statement of accuracy and authorization",
            "reason": "Legal requirement under DMCA with penalty for false statements"
          }
        ],
        "removalCriteria": [
          "Content must be copyrighted work owned by complainant or their client",
          "Content must be published on onlyfans.com without authorization",
          "Notice must comply with DMCA requirements under 17 U.S.C. §512",
          "All required information must be provided in the notice"
        ]
      },
      {
        "id": "of-dmca-repeat-infringer",
        "reference": "OF-DMCA-TERMINATION",
        "summary": "OnlyFans terminates accounts of repeat copyright infringers and removes access to all infringing material.",
        "quote": "It is the firm policy of the Site to terminate the account of repeat copyright infringers, when appropriate, and the Site will act expeditiously to remove access to all material that infringes on another's copyright, according to the procedure set forth in 17 U.S.C. §512 of the DMCA.",
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
            "description": "act expeditiously to remove access to all material that infringes"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of repeated copyright infringement by the same user",
            "example": "Multiple valid DMCA notices against the same account",
            "reason": "To establish pattern of repeat infringement warranting account termination"
          }
        ],
        "removalCriteria": [
          "User must have multiple instances of copyright infringement",
          "Previous DMCA notices must have been valid and processed",
          "Account termination is at OnlyFans' discretion when appropriate"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit DMCA counter-notifications if they believe content was wrongly removed, which must include specific information and be sent to the designated copyright agent.",
      "steps": [
        "Provide specific description of material that was removed or disabled",
        "Describe where the material was located before removal with URLs",
        "Include statement under penalty of perjury that removal was erroneous or due to misidentification",
        "Provide physical address, telephone number, and email address",
        "Include statement consenting to federal court jurisdiction and accepting service of process",
        "Send written notification to designated copyright agent at Walters Law Group",
        "OnlyFans will forward counter-notification to original complainant",
        "Content will be restored within 10-14 days unless court action is filed"
      ]
    }
  }
],
};
