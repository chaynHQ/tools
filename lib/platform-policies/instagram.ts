import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community guidelines covering prohibited content and behavior across Meta platforms including Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "ig-ncii-policy",
        "reference": "META-CS-NCSII",
        "summary": "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content, and threatening to share them (sextortion).",
        "quote": "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content, and threatening to share them (sextortion).",
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
            "value": 48,
            "unit": "hours",
            "description": "Priority review for severe harms like NCII"
          },
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Mandated removal under TAKE IT DOWN Act"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the infringing content or threatening messages",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement made in good faith that the content is non-consensual",
            "reason": "To establish that consent was not given for sharing"
          },
          {
            "description": "Information to identify the victim and locate the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity",
          "Image/video is shared without the consent of the depicted individual",
          "The content is an authentic or AI-generated intimate depiction",
          "A threat to share intimate media exists"
        ]
      },
      {
        "id": "ig-bullying-policy",
        "reference": "META-CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We prohibit bullying and harassment. Sharing intimate images of someone without their consent is considered a severe form of bullying.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the content",
            "reason": "To locate and review the harassing material"
          },
          {
            "description": "Description of how the content constitutes targeted harassment",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the victim",
            "reason": "To verify the target of harassment and process the report"
          }
        ],
        "removalCriteria": [
          "Content targets a private individual for abuse or degradation",
          "Content includes shaming material, such as non-consensual intimate imagery"
        ]
      },
      {
        "id": "ig-privacy-policy",
        "reference": "META-CS-PRIVACY",
        "summary": "Prohibits violations of privacy, including sharing private intimate media or personal information without consent.",
        "quote": "We prohibit violations of privacy. Sharing someone's private, intimate media without their consent is a fundamental breach of privacy.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "URL(s) of the content",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of how the content violates the victim's privacy",
            "reason": "To understand the nature of the privacy violation"
          },
          {
            "description": "Identification of the specific PII that was shared",
            "reason": "To assess the severity and scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains PII used maliciously",
          "Information is shared without consent and is intended to harass or incite harassment"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "META-CS-IMPERSONATION",
        "summary": "Prohibits impersonating others (individuals, organizations) with an intent to deceive or mislead.",
        "quote": "We prohibit impersonating others (individuals, organizations) with an intent to deceive or mislead.",
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
            "description": "URL of the impersonating profile",
            "reason": "To identify the impersonating account"
          },
          {
            "description": "Proof of identity",
            "example": "Government-issued ID for a person or business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is impersonating you or your entity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account uses another's name, photos, or other identifying information without authorization",
          "The profile is intended to mislead or deceive others about who is behind it",
          "The account is not clearly marked as a parody or fan account"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "ig-terms-of-use",
    "reference": "IG-TOU",
    "title": "Instagram Terms of Use",
    "summary": "Legal terms governing the use of Instagram, including content ownership and intellectual property rights.",
    "url": "https://help.instagram.com/581066165581870",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "ig-tou-private-confidential",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission and violations of others' rights, including intellectual property rights.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "Evidence that the content is private or confidential information posted without permission",
            "reason": "To establish that the content violates privacy rights"
          },
          {
            "description": "Proof that you are the person whose private information was shared or have authority to act on their behalf",
            "reason": "To verify standing to request removal"
          }
        ],
        "removalCriteria": [
          "Content contains someone's private or confidential information shared without their permission",
          "Content violates someone else's rights, including intellectual property rights"
        ]
      },
      {
        "id": "ig-tou-impersonation",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, and requires users to provide accurate registration information.",
        "quote": "You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that an account is impersonating you or someone else",
            "reason": "To establish that impersonation is occurring"
          },
          {
            "description": "Proof of your identity or authority to report on behalf of the impersonated person",
            "reason": "To verify standing to request removal of impersonating content"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates someone or something they are not",
          "Account was created for someone else without their express permission",
          "User provided inaccurate information during registration"
        ]
      },
      {
        "id": "ig-tou-content-removal",
        "reference": "IG-TOU-6",
        "summary": "Allows removal of any content that violates Terms of Use, policies including Community Standards, or as permitted or required by law.",
        "quote": "We can remove any content or information you share on the Service if we believe that it violates these Terms of Use, our policies (including our Community Standards), or we are permitted or required to do so by law.",
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
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request, with up to 90 days to complete deletion"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that content violates Instagram's Terms of Use or Community Standards",
            "reason": "To establish grounds for content removal under platform policies"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-tou-account-termination",
        "reference": "IG-TOU-6",
        "summary": "Allows immediate termination or disabling of accounts that create risk, violate terms or policies, repeatedly infringe intellectual property rights, or as required by law.",
        "quote": "We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your access to the Meta Products and Meta Company Products) immediately to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies (including our Community Standards), if you repeatedly infringe other people's intellectual property rights, or where we are permitted or required to do so by law.",
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
            "description": "Evidence of Terms of Use or policy violations",
            "reason": "To establish grounds for account termination"
          },
          {
            "description": "Documentation of repeated intellectual property infringement",
            "reason": "To demonstrate pattern of copyright violations warranting account termination"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account violates Terms of Use or policies including Community Standards",
          "Account repeatedly infringes other people's intellectual property rights",
          "Termination is permitted or required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult Instagram's Help Center if they believe their account was terminated in error or want to disable or permanently delete their account",
      "steps": [
        "Visit Instagram Help Center to report issues with account termination",
        "Follow the guidance provided for account recovery or deletion requests"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires removal of content reported for violations to protect user safety, security and integrity",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Identify and combat disparities and racial bias against historically marginalized communities, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Report of content that violates terms or policies",
            "example": "Content reported through platform reporting mechanisms",
            "reason": "To identify and address violations of terms or policies"
          }
        ],
        "removalCriteria": [
          "Content that constitutes harmful or unlawful behavior",
          "Content that violates Meta's terms or policies",
          "Content that threatens user safety, security or integrity",
          "Content that poses threats to personnel and property"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Requires access, preservation, use and sharing of user information in response to legal requests, to comply with applicable law, and to promote safety and security",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. Learn more about when we respond to legal requests. In accordance with applicable law To promote the safety, security and integrity of Meta Products, users, employees, property and the public.",
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
            "description": "Valid legal request such as search warrant, court order, production order or subpoena",
            "example": "Search warrant from law enforcement or court order from civil litigation",
            "reason": "To comply with legal obligations and respond to legitimate legal process"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests for removal",
          "Content that violates applicable law",
          "Content that threatens safety, security and integrity of users or the public"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "Section 4 - Third Party Information Sharing",
        "summary": "Prohibits unauthorized sharing of user information and requires partners and third parties to follow rules about how they can use and disclose provided information",
        "quote": "We don't sell any of your information to anyone, and we never will. We also require partners and other third parties to follow rules about how they can and cannot use and disclose the information we provide.",
        "contentTypes": [
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
            "description": "Evidence of unauthorized information sharing or misuse by partners or third parties",
            "example": "Documentation showing violation of information use rules",
            "reason": "To enforce rules about proper use and disclosure of user information"
          }
        ],
        "removalCriteria": [
          "Unauthorized sale or sharing of user information",
          "Violation of rules governing use and disclosure of user information by partners or third parties"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "Section 19 - Account and Activity Verification",
        "summary": "Requires verification of accounts and activity to detect and prevent suspicious behavior, unauthorized access, and maintain platform integrity",
        "quote": "Promoting safety, integrity and security on and across the Meta Products: The Meta Products are designed to research and help ensure the safety, integrity and security of those services and those people who enjoy them, on and off Meta Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior",
        "contentTypes": [
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
            "description": "Information to verify legitimate account ownership and activity",
            "example": "Account activity patterns, device information, or contact verification",
            "reason": "To verify accounts and detect suspicious or unauthorized activity"
          }
        ],
        "removalCriteria": [
          "Accounts that fail verification processes",
          "Suspicious activity indicating unauthorized access",
          "Activity that violates terms or policies",
          "Harmful or unlawful behavior"
        ]
      },
      {
        "id": "meta-pp-privacy-controls",
        "reference": "Section 6 - Information Management and Privacy Rights",
        "summary": "Provides users tools to view, manage, download and delete their information and exercise privacy rights through platform settings and help centers",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
        "contentTypes": [
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
            "description": "User verification to access privacy management tools",
            "example": "Account login credentials or identity verification",
            "reason": "To ensure only authorized users can manage their personal information"
          }
        ],
        "removalCriteria": [
          "User requests for information deletion",
          "Exercise of privacy rights under applicable laws",
          "User-initiated account or content removal"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information and privacy policy matters",
      "steps": [
        "Contact Meta online at help.meta.com/support/privacy",
        "Alternatively, contact by mail at: Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "For some decisions, violations may be reviewed by the Oversight Board",
        "In some countries, users may contact the Data Protection Officer for Meta Platforms, Inc.",
        "Users may also contact their local Data Protection Authority (DPA) directly depending on jurisdiction"
      ]
    }
  },
  {
    "id": "instagram-new-1758631210831-0",
    "reference": "IG-COPYRIGHT",
    "title": "Instagram Copyright Policy",
    "summary": "Comprehensive policy covering copyright infringement reporting, DMCA procedures, and counter-notification processes.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "IG-COPYRIGHT",
        "summary": "Prohibits posting content that violates copyright law and provides mechanisms for copyright holders to report unauthorized use of their copyrighted works",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form. These articles provide information about copyrights, including how you can protect your own copyrighted works and avoid infringing the copyrights of others. We also provide information about how Instagram and Threads address reported copyright infringement.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright infringement report form",
            "example": "Use the provided online form to submit copyright claims",
            "reason": "Required to initiate the copyright infringement review process"
          },
          {
            "description": "Information demonstrating copyright ownership",
            "example": "Evidence that you own or are authorized to act on behalf of the copyright owner",
            "reason": "To verify legitimate copyright claims and prevent false reports"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Content violates copyright law",
          "Valid copyright infringement report has been submitted"
        ]
      },
      {
        "id": "ig-copyright-dmca-process",
        "reference": "IG-COPYRIGHT-DMCA",
        "summary": "Processes copyright infringement reports under the Digital Millennium Copyright Act (DMCA) and provides counter-notification procedures for users whose content is removed",
        "quote": "How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications. What happens when you submit a copyright report to Instagram or Threads. Instagram or Threads removed content as a result of your copyright report. What information is sent to the person who posted that content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "DMCA-compliant copyright infringement notice",
            "example": "Notice containing all required elements under DMCA Section 512(c)(3)",
            "reason": "Required for processing copyright claims under U.S. federal law"
          },
          {
            "description": "Contact information for DMCA designated agent",
            "example": "Submit reports through proper channels to Instagram's designated agent",
            "reason": "Ensures proper legal processing of DMCA notices"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice has been received",
          "Content identified in the notice infringes copyright",
          "Notice complies with DMCA requirements"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "IG-COPYRIGHT-REPEAT",
        "summary": "Takes action against users who repeatedly post content that violates intellectual property rights, including potential account restrictions or termination",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Documentation of multiple copyright violations",
            "example": "Record of previous copyright infringement notices and violations",
            "reason": "To identify patterns of repeat infringement behavior"
          }
        ],
        "removalCriteria": [
          "User has repeatedly posted content that violates intellectual property rights",
          "Multiple valid copyright infringement reports have been submitted against the user's content"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram provides DMCA counter-notification procedures for users whose content is removed due to copyright claims, and allows users to retract intellectual property reports they have submitted",
      "steps": [
        "Review the counter-notification process for DMCA copyright claims",
        "Submit counter-notification if you believe content was removed in error",
        "Alternatively, retract an intellectual property report if you submitted it in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758631210831-1",
    "reference": "IG-IP",
    "title": "Instagram Intellectual Property Policy",
    "summary": "Policy covering intellectual property rights protection including copyright and trademark violations.",
    "url": "https://help.instagram.com/535503073130320",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "ig-ip-copyright",
        "reference": "Copyright Section",
        "summary": "Prohibits posting content that violates someone else's copyright, including original works of authorship such as books, music, film, and art",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright ownership or authorization",
            "example": "Original work registration or proof of creation",
            "reason": "To establish legitimate copyright claim and ownership of the protected work"
          },
          {
            "description": "Identification of the infringing content",
            "example": "URL or specific location of the unauthorized content on Instagram",
            "reason": "To locate and assess the allegedly infringing material for removal"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content uses original expression such as words or images without authorization",
          "Content reproduces protected works of authorship including books, music, film, or art"
        ]
      },
      {
        "id": "ig-ip-trademark",
        "reference": "Trademark Section",
        "summary": "Prohibits posting content that violates someone else's trademark rights, including unauthorized use of words, slogans, symbols or designs that distinguish products or services",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of trademark ownership or registration",
            "example": "Trademark registration certificate or proof of commercial use",
            "reason": "To establish legitimate trademark rights and prevent consumer confusion"
          },
          {
            "description": "Identification of the infringing trademark use",
            "example": "URL showing unauthorized use of brand name, logo, or distinguishing marks",
            "reason": "To locate content that may cause confusion about product or service affiliation"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's trademark rights",
          "Content uses protected words, slogans, symbols or designs without authorization",
          "Content creates confusion about who provides or is affiliated with a product or service"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758631210831-2",
    "reference": "META-BULLYING",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Detailed policy on bullying and harassment prevention across Meta platforms including Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "meta-bullying-unwanted-contact",
        "reference": "Tier 1 Universal Protections",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted contact pattern",
            "example": "Screenshots showing repeated messages or sexually harassing content",
            "reason": "To demonstrate the contact meets the criteria of being repeated, sexually harassing, or mass-directed"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at a large number of individuals with no prior solicitation"
        ]
      },
      {
        "id": "meta-bullying-sexual-activity-statements",
        "reference": "Tier 1 Universal Protections",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity with specific individuals",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of statements expressing intent or advocacy for sexual activity",
            "example": "Screenshots of posts or messages containing such statements",
            "reason": "To verify the content contains explicit statements of sexual intent or advocacy"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity with the target"
        ]
      },
      {
        "id": "meta-bullying-severe-sexualized-commentary",
        "reference": "Tier 1 Universal Protections",
        "summary": "Prohibits severe sexualized commentary targeting individuals",
        "quote": "Severe sexualized commentary.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of severe sexualized commentary",
            "example": "Screenshots of posts containing explicit sexual commentary about the individual",
            "reason": "To demonstrate the commentary meets the threshold of being severely sexualized"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary about an individual"
        ]
      },
      {
        "id": "meta-bullying-derogatory-sexualized-imagery",
        "reference": "Tier 1 Universal Protections",
        "summary": "Prohibits derogatory sexualized photoshop or drawings targeting individuals",
        "quote": "Derogatory sexualized photoshop or drawings",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of manipulated sexualized imagery",
            "example": "Screenshots or links to photoshopped or drawn sexual imagery of the individual",
            "reason": "To verify the content contains derogatory sexualized manipulated imagery"
          }
        ],
        "removalCriteria": [
          "Content contains derogatory sexualized photoshop of an individual",
          "Content contains derogatory sexualized drawings of an individual"
        ]
      },
      {
        "id": "meta-bullying-sexual-activity-attacks",
        "reference": "Tier 1 Universal Protections",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of derogatory sexual terms being used as attacks",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at the individual",
            "reason": "To demonstrate the use of derogatory sexual terminology as a form of attack"
          }
        ],
        "removalCriteria": [
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "meta-bullying-private-info-threats",
        "reference": "Tier 1 Universal Protections",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to release private information",
            "example": "Screenshots of messages threatening to share phone numbers, addresses, emails, or medical records",
            "reason": "To verify the content contains explicit threats to release private personal information"
          }
        ],
        "removalCriteria": [
          "Content contains threats to release private phone numbers",
          "Content contains threats to release residential addresses",
          "Content contains threats to release email addresses",
          "Content contains threats to release medical records"
        ]
      },
      {
        "id": "meta-bullying-sexual-activity-claims-private",
        "reference": "Tier 2 Additional Protections",
        "summary": "Prohibits claims about sexual activity targeting minors, private adults, and limited scope public figures, except in context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of claims about sexual activity",
            "example": "Screenshots of posts making claims about the individual's sexual behavior",
            "reason": "To verify the content makes claims about sexual activity outside of criminal allegation contexts"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of minors, private adults, or limited scope public figures",
          "Claims are not in the context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bullying-adult-sexualization",
        "reference": "Tier 2 Additional Protections",
        "summary": "Prohibits content sexualizing adults who are minors, private individuals, or limited scope public figures",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of posts that sexualize the individual",
            "reason": "To demonstrate the content sexualizes protected individuals"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors, private adults, or limited scope public figures"
        ]
      },
      {
        "id": "meta-bullying-unwanted-manipulated-imagery",
        "reference": "Tier 3 Additional Protections",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Self-report from the target or authorized representative",
            "example": "Report indicating the manipulated imagery is unwanted",
            "reason": "Policy requires self-reporting for this protection to apply"
          },
          {
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots or links to manipulated photos or images",
            "reason": "To verify the content contains manipulated imagery of the individual"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Target is a private minor, private adult, or minor involuntary public figure",
          "Content has been self-reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bullying-romantic-claims-private",
        "reference": "Tier 3 Additional Protections",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity targeting private minors, private adults, and minor involuntary public figures",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
        "contentTypes": [
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
            "description": "Evidence of claims about romantic involvement, sexual orientation, or gender identity",
            "example": "Screenshots of posts making claims about the individual's relationships or identity",
            "reason": "To verify the content makes protected claims about personal relationships or identity"
          }
        ],
        "removalCriteria": [
          "Content makes claims about romantic involvement",
          "Content makes claims about sexual orientation",
          "Content makes claims about gender identity",
          "Target is a private minor, private adult, or minor involuntary public figure"
        ]
      },
      {
        "id": "meta-bullying-self-report-required",
        "reference": "Additional Context Requirements",
        "summary": "Requires target confirmation for removal of unwanted content, sexualizing content of public figures, and sexually harassing contact",
        "quote": "Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target (for example: the target is tagged in the post or comment). We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from the individual or their representative indicating the content is unwanted",
            "reason": "Policy requires target confirmation for certain types of content removal"
          }
        ],
        "removalCriteria": [
          "Content requires target reporting or directly targets the individual",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "meta-bullying-public-figure-sexualization",
        "reference": "Additional Context Requirements",
        "summary": "Prohibits content sexualizing public figures when confirmed as unwanted by the target or authorized representative",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from public figure or authorized representative that sexualizing content is unwanted",
            "example": "Statement from the public figure or their representative requesting removal",
            "reason": "Policy requires confirmation from public figures for sexualizing content removal"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots or links to content that sexualizes the public figure",
            "reason": "To verify the content sexualizes the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "meta-bullying-sexual-harassment-contact",
        "reference": "Additional Context Requirements",
        "summary": "Prohibits sexually harassing contact when confirmed as unwanted by the recipient or authorized representative",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from recipient or authorized representative that contact is unwanted",
            "example": "Statement from the recipient indicating the sexually harassing contact is unwanted",
            "reason": "Policy requires confirmation from recipient for sexually harassing contact removal"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots of messages or content that constitute sexual harassment",
            "reason": "To verify the contact constitutes sexual harassment"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Confirmation received from recipient or authorized representative that contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through the Support Inbox and request another review if they believe the decision was incorrect",
      "steps": [
        "Report content through the universal reporting option",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758631210831-3",
    "reference": "IG-NCII-HELP",
    "title": "Instagram Non-Consensual Intimate Images Help",
    "summary": "Guidance and reporting procedures for non-consensual intimate image sharing violations.",
    "url": "https://help.instagram.com/1769410010008691",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "ig-ncii-help-01",
        "reference": "Report the post section",
        "summary": "Prohibits intimate photos shared without consent and removes them upon reporting, with photo-matching technology to prevent future sharing across Instagram, Facebook and Messenger",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards. We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Screenshot of the post for documentation purposes",
            "example": "Screenshot showing the intimate image and posting details",
            "reason": "Provides record of the violation for reporting and potential legal action"
          },
          {
            "description": "Anonymous report through Instagram's built-in reporting system",
            "example": "Using Instagram's photo reporting feature",
            "reason": "Allows platform to review content against Community Standards"
          }
        ],
        "removalCriteria": [
          "Image goes against Instagram's Community Standards",
          "Content identified as intimate photo shared without consent"
        ]
      },
      {
        "id": "ig-ncii-help-02",
        "reference": "Report the post section",
        "summary": "Prohibits threats to share private content including messages, photos, and videos, and sextortion attempts involving demands for money or uncomfortable actions",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
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
            "description": "Report of the threatening profile through built-in reporting system",
            "example": "Profile report showing threats to share private content or demands for money",
            "reason": "Enables platform review of threatening behavior and sextortion attempts"
          }
        ],
        "removalCriteria": [
          "Threats to share private messages, photos, or videos",
          "Demands for money in exchange for not sharing private content",
          "Requests for uncomfortable actions under threat of sharing private content"
        ]
      },
      {
        "id": "ig-ncii-help-03",
        "reference": "Report the post section",
        "summary": "Provides reporting mechanism for users without Instagram accounts through assistance from existing users",
        "quote": "If you don't have an Instagram account, you can report things with the help of a friend.",
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
            "description": "Assistance from a friend with an Instagram account to file the report",
            "example": "Friend reporting content on behalf of the victim",
            "reason": "Ensures victims without accounts can still access reporting mechanisms"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards regardless of reporter's account status"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758631210831-4",
    "reference": "IG-HARASSMENT-REPORT",
    "title": "Instagram Harassment and Bullying Reporting",
    "summary": "Specific procedures for reporting harassment and bullying content on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-report",
        "reference": "IG-HARASSMENT-REPORT",
        "summary": "Prohibits accounts established with intent to bully or harass another person and photos or comments intended to bully or harass someone",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the harassing account or content through Instagram's reporting system",
            "example": "Use Instagram's built-in reporting feature to flag the account or specific content",
            "reason": "Required to initiate Instagram's review process for harassment and bullying violations"
          }
        ],
        "removalCriteria": [
          "Account is established with the intent of bullying or harassing another person",
          "Photo or comment is intended to bully or harass someone"
        ]
      },
      {
        "id": "ig-impersonation-report",
        "reference": "IG-HARASSMENT-REPORT",
        "summary": "Prohibits accounts pretending to be another person and provides reporting mechanism for impersonation",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report impersonation through Instagram's dedicated impersonation reporting process",
            "example": "Follow Instagram's impersonation reporting guidelines to verify identity and report fake accounts",
            "reason": "Required to verify legitimate identity and distinguish from parody or fan accounts"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be you or someone else without authorization"
        ]
      },
      {
        "id": "ig-community-standards-violation",
        "reference": "IG-HARASSMENT-REPORT",
        "summary": "Requires content to follow Community Standards and provides reporting mechanism for violations",
        "quote": "Learn how to report other accounts or posts that don't follow our Community Standards.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report accounts or posts that violate Community Standards through Instagram's reporting system",
            "example": "Use Instagram's reporting feature to flag content that violates platform policies",
            "reason": "Required to initiate review process for Community Standards violations"
          }
        ],
        "removalCriteria": [
          "Content does not follow Instagram's Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758631210831-5",
    "reference": "IG-IMPERSONATION",
    "title": "Instagram Impersonation Policy",
    "summary": "Policy and procedures for reporting accounts that impersonate individuals or entities.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T12:40:10.831Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION",
        "summary": "Prohibits creating Instagram accounts pretending to be another person and provides reporting mechanisms for impersonation violations",
        "quote": "Instagram takes safety seriously. If someone created an Instagram account pretending to be you, you can report it to us.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report must be filed through Instagram app if user has an account",
            "example": "Using the in-app reporting feature",
            "reason": "Platform requires use of official reporting channels for account holders"
          },
          {
            "description": "Non-users must complete impersonation report form",
            "example": "Filling out the dedicated impersonation form at help.instagram.com/contact/636276399721841",
            "reason": "Alternative reporting method for users without Instagram accounts"
          }
        ],
        "removalCriteria": [
          "Account created pretending to be another person",
          "Account impersonating someone without authorization"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
