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
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
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
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "ig-copyright-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission and violations of intellectual property rights, including copyright infringement.",
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
            "description": "Proof of ownership or necessary rights to the content",
            "reason": "To establish that the poster had authorization to share the content"
          },
          {
            "description": "URL(s) of the infringing content on Instagram",
            "reason": "To identify the specific content that violates intellectual property rights"
          },
          {
            "description": "Evidence that content was posted without permission",
            "reason": "To demonstrate unauthorized sharing of private or confidential information"
          }
        ],
        "removalCriteria": [
          "Content contains someone else's private or confidential information posted without permission",
          "Content violates intellectual property rights including copyright infringement"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, requiring users to provide accurate information and obtain express permission before creating accounts for others.",
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
            "description": "Evidence that the account is impersonating another person or entity",
            "reason": "To verify that unauthorized impersonation is occurring"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To establish the legitimate identity being misrepresented"
          },
          {
            "description": "Documentation showing lack of express permission for account creation",
            "reason": "To confirm the account was created without authorization"
          }
        ],
        "removalCriteria": [
          "Account impersonates someone or something the user is not",
          "Account was created for someone else without their express permission",
          "Account provides inaccurate information with intent to deceive"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows removal of any content or information that violates Terms of Use, policies including Community Standards, or as permitted or required by law.",
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
            "reason": "To justify content removal under platform policies"
          },
          {
            "description": "Documentation of legal requirement for removal if applicable",
            "reason": "To comply with legal obligations for content removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows immediate termination or disabling of accounts to protect community or services, when users create risk or legal exposure, violate Terms or policies, or repeatedly infringe intellectual property rights.",
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
            "reason": "To justify account termination for policy violations"
          },
          {
            "description": "Documentation of repeated intellectual property infringement",
            "reason": "To establish pattern of copyright or other IP violations"
          },
          {
            "description": "Evidence that account creates risk or legal exposure for Instagram",
            "reason": "To protect platform from legal liability"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "User violates Terms of Use or Community Standards",
          "User repeatedly infringes other people's intellectual property rights",
          "Termination is permitted or required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users who believe their account was terminated in error can consult Instagram's Help Center for appeal options.",
      "steps": [
        "Visit Instagram Help Center to review appeal options",
        "Submit appeal through appropriate channels if account was terminated in error",
        "Provide necessary documentation to support appeal claim"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires removal of content reported for violations to protect users from harm and provide safe, secure products",
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
            "example": "URL to harmful content, description of violation",
            "reason": "To enable Meta to review and potentially remove content that violates their policies"
          }
        ],
        "removalCriteria": [
          "Content that constitutes harmful or unlawful behavior",
          "Content that violates Meta's terms or policies",
          "Content reported by users for policy violations",
          "Content that threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Requires access, preservation, use and sharing of user information in response to legal requests, to comply with applicable law, and to promote safety, security and integrity of Meta Products and users",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. Learn more about when we respond to legal requests. In accordance with applicable law To promote the safety, security and integrity of Meta Products, users, employees, property and the public. Learn more.",
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
            "example": "Court-issued subpoena for specific user information",
            "reason": "Required by law for Meta to comply with legal obligations and law enforcement requests"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests from law enforcement or courts",
          "Content that violates applicable laws",
          "Content that threatens safety, security and integrity of Meta Products or users"
        ]
      },
      {
        "id": "meta-pp-information-preservation",
        "reference": "Section 8 - Information Retention",
        "summary": "Preserves information for extended periods when needed for legitimate purposes including preventing harm, investigating violations, promoting safety and security, and protecting Meta's rights and property",
        "quote": "We keep information as long as we need it to provide our Products, comply with legal obligations or protect our or other's interests. We decide how long we need information on a case-by-case basis. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products. In some instances and for specific reasons, we'll keep information for an extended period of time.",
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
            "description": "Demonstration of legitimate purpose for information preservation",
            "example": "Evidence of policy violations, safety concerns, or legal obligations",
            "reason": "To justify extended retention of user information beyond normal retention periods"
          }
        ],
        "removalCriteria": [
          "Information no longer needed to provide Meta Products",
          "Information no longer required for legal compliance",
          "Information no longer necessary to protect Meta or others' interests"
        ]
      },
      {
        "id": "meta-pp-user-control",
        "reference": "Section 6 - Managing and Deleting Information",
        "summary": "Provides users with tools to view, manage, download and delete their information through settings and Help Centers, and allows users to exercise privacy rights under applicable laws",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
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
            "description": "User account access or identity verification",
            "example": "Login credentials or account verification process",
            "reason": "To ensure only authorized users can manage or delete their personal information"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own information",
          "User exercises privacy rights under applicable laws",
          "User manages information through platform settings"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "Section 3 - Information Sharing on Meta Products",
        "summary": "Allows users to control how their information is shared with different audiences including people they communicate with, through content others share about them, and via public content settings",
        "quote": "On Meta Products Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
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
            "description": "User privacy settings and sharing preferences",
            "example": "Audience selection settings, privacy controls",
            "reason": "To respect user choices about who can see their shared information"
          }
        ],
        "removalCriteria": [
          "Content shared beyond user's intended audience settings",
          "Content reshared without user consent where privacy settings were violated",
          "Public content that user chooses to make private or remove"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information and privacy policy matters",
      "steps": [
        "Contact Meta online at help.meta.com/support/privacy",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "For policy questions or information requests, provide details about the specific privacy concern or request"
      ]
    }
  },
  {
    "id": "instagram-new-1758631414625-0",
    "reference": "IG-COPYRIGHT",
    "title": "Instagram Copyright Policy",
    "summary": "Comprehensive policy covering copyright infringement reporting, DMCA procedures, and intellectual property protection on Instagram.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "IG-COPYRIGHT",
        "summary": "Prohibits posting content that violates copyright law and provides mechanisms for reporting copyright infringement",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Copyright infringement report form submission",
            "example": "Completed copyright report form with required information",
            "reason": "To provide Instagram with necessary information to process copyright infringement claims"
          },
          {
            "description": "Information required in copyright report",
            "example": "Details about copyrighted work and alleged infringement",
            "reason": "To substantiate copyright ownership and identify infringing content"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from copyright owner",
          "Valid copyright infringement report is submitted through proper channels"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "IG-COPYRIGHT",
        "summary": "Restricts users who repeatedly post content that violates intellectual property rights",
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
            "description": "Pattern of repeated intellectual property violations",
            "example": "Multiple instances of copyright infringement by the same user",
            "reason": "To identify users who habitually violate intellectual property rights"
          }
        ],
        "removalCriteria": [
          "User has repeatedly posted content that violates intellectual property rights",
          "Pattern of violations demonstrates ongoing infringement behavior"
        ]
      },
      {
        "id": "ig-copyright-counter-notification",
        "reference": "IG-COPYRIGHT",
        "summary": "Processes DMCA counter-notifications for content removed due to copyright claims",
        "quote": "How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid DMCA counter-notification",
            "example": "Properly formatted counter-notification disputing copyright claim",
            "reason": "To allow users to challenge copyright takedown requests they believe are invalid"
          }
        ],
        "removalCriteria": [
          "Content was removed based on copyright infringement report",
          "User disputes the validity of the copyright claim through counter-notification process"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit counter-notifications under DMCA process and retract intellectual property reports they have submitted",
      "steps": [
        "Submit DMCA counter-notification if content was wrongfully removed",
        "Contact Instagram's DMCA designated agent for copyright-related disputes",
        "Retract intellectual property reports that were submitted in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758631414625-1",
    "reference": "IG-HARASSMENT",
    "title": "Instagram Bullying and Harassment Policy",
    "summary": "Policy covering reporting and enforcement of bullying, harassment, and abusive behavior on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-reporting",
        "reference": "Reporting harassment or bullying on Instagram",
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
            "example": "Use the report function on the specific post, comment, or account",
            "reason": "Required to initiate Instagram's review process for harassment and bullying violations"
          }
        ],
        "removalCriteria": [
          "Account established with intent to bully or harass another person",
          "Photo intended to bully or harass someone",
          "Comment intended to bully or harass someone"
        ]
      },
      {
        "id": "ig-impersonation-reporting",
        "reference": "Reporting harassment or bullying on Instagram",
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
            "description": "Report impersonation through Instagram's dedicated reporting process",
            "example": "Follow the impersonation reporting guidelines referenced in the document",
            "reason": "Required to verify identity and establish legitimate claim against impersonating account"
          }
        ],
        "removalCriteria": [
          "Account pretending to be another person without authorization"
        ]
      },
      {
        "id": "ig-community-standards-violation",
        "reference": "Reporting harassment or bullying on Instagram",
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
            "description": "Report accounts or posts that violate Community Standards",
            "example": "Use Instagram's reporting system for Community Standards violations",
            "reason": "Required to flag content that doesn't comply with platform policies"
          }
        ],
        "removalCriteria": [
          "Content that doesn't follow Instagram's Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758631414625-2",
    "reference": "IG-NCII",
    "title": "Instagram Non-Consensual Intimate Images Support",
    "summary": "Resources and reporting mechanisms for non-consensual intimate image abuse on Instagram.",
    "url": "https://help.instagram.com/1769410010008691",
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "ig-ncii-intimate-images",
        "reference": "Community Standards",
        "summary": "Prohibits sharing of intimate photos without consent and removes content that violates Community Standards related to non-consensual intimate imagery",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards.",
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
            "description": "Screenshot or record of the violating post",
            "example": "Screenshot of the post showing the intimate image",
            "reason": "Documentation needed for reporting purposes and potential further action"
          },
          {
            "description": "Report submission through built-in reporting options",
            "example": "Using Instagram's anonymous photo reporting feature",
            "reason": "Required to initiate the review process by Community Operations team"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Image is identified as non-consensual intimate imagery",
          "Content is reviewed and confirmed by specially trained Community Operations representatives"
        ]
      },
      {
        "id": "ig-ncii-threats-sextortion",
        "reference": "Built-in Reporting",
        "summary": "Prohibits threatening to share private content, requesting money in exchange for not sharing private content, and other forms of sextortion or coercion",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
        "contentTypes": [
          "intimate",
          "private",
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
            "description": "Report of the threatening profile through built-in reporting system",
            "example": "Reporting a profile that is threatening to share private photos",
            "reason": "Required to alert Instagram to threatening behavior and potential sextortion"
          }
        ],
        "removalCriteria": [
          "Profile is threatening to share private content without consent",
          "Profile is requesting money to prevent sharing of private content",
          "Profile is coercing users to perform uncomfortable actions"
        ]
      },
      {
        "id": "ig-ncii-photo-matching-prevention",
        "reference": "Photo-matching Technology",
        "summary": "Uses photo-matching technology to prevent future sharing of reported intimate images across Instagram, Facebook and Messenger",
        "quote": "We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
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
            "description": "Initial successful report and removal of intimate image",
            "example": "Previously reported and removed non-consensual intimate image",
            "reason": "Photo-matching technology is applied after content is identified and removed as violating"
          }
        ],
        "removalCriteria": [
          "Image has been previously identified and removed as violating Community Standards",
          "Photo-matching technology identifies attempted re-uploads of the same image",
          "Automated prevention of future sharing attempts across Meta platforms"
        ]
      },
      {
        "id": "ig-ncii-third-party-reporting",
        "reference": "Help of a Friend",
        "summary": "Allows reporting of violating content through third parties when the victim does not have an Instagram account",
        "quote": "If you don't have an Instagram account, you can report things with the help of a friend.",
        "contentTypes": [
          "intimate",
          "private",
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
            "description": "Third-party report submission on behalf of victim",
            "example": "Friend reporting intimate images shared without the victim's consent",
            "reason": "Ensures victims without accounts can still access reporting mechanisms"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards regarding non-consensual sharing",
          "Report is submitted by authorized third party on behalf of victim",
          "Content meets same removal standards as direct victim reports"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758631414625-3",
    "reference": "IG-IMPERSONATION",
    "title": "Instagram Impersonation Policy",
    "summary": "Policy and procedures for reporting accounts that impersonate individuals, brands, or organizations.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION",
        "summary": "Prohibits creating accounts pretending to be another person and provides reporting mechanisms for impersonation violations",
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
            "description": "Report must be submitted through Instagram app if user has an account",
            "example": "Using the in-app reporting feature",
            "reason": "Platform's preferred method for authenticated users to report impersonation"
          },
          {
            "description": "Form submission for users without Instagram accounts",
            "example": "Completing the impersonation report form",
            "reason": "Alternative reporting method for non-users who are being impersonated"
          }
        ],
        "removalCriteria": [
          "Account was created pretending to be another person",
          "Account is impersonating someone without authorization"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758631414625-4",
    "reference": "IG-APPEALS",
    "title": "Instagram Content Appeals Process",
    "summary": "Information about appealing content removal decisions and the Oversight Board process.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "ig-appeals-oversight-board",
        "reference": "IG-APPEALS",
        "summary": "Provides appeal process to the Oversight Board for content decisions, including content removal and content that wasn't removed after reporting",
        "quote": "There are two types of content decisions you can appeal to the Oversight Board: a decision about your content or a decision about content by others that you've reported.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": {
          "response": {
            "value": 15,
            "unit": "days",
            "description": "You have 15 days from when the decision was made to appeal to the Oversight Board"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Must first complete Instagram's internal review process before appealing to Oversight Board",
            "example": "Request a review of your content or the content you reported",
            "reason": "Required prerequisite before Oversight Board appeal eligibility"
          },
          {
            "description": "Reference number from appeal submission",
            "example": "Reference number provided when appeal is submitted",
            "reason": "Needed to check appeal status on Oversight Board website"
          }
        ],
        "removalCriteria": [
          "Content must have gone through Instagram's internal review process twice",
          "Appeal must be submitted within 15 days of the decision",
          "Content and content decisions must be eligible for appeal"
        ]
      },
      {
        "id": "ig-appeals-prerequisite-review",
        "reference": "IG-APPEALS",
        "summary": "Requires completion of internal review process before Oversight Board appeals for both content removal and content that wasn't removed after reporting",
        "quote": "Before you can appeal Instagram's content decision to the Oversight Board, you must first request a review of your content or the content you reported. If we've reviewed your content or the content you reported twice and you still disagree with our decision, you may be eligible to appeal that decision to the Oversight Board.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Must complete two rounds of internal review",
            "example": "Request review of content removal or content that wasn't removed",
            "reason": "Required to exhaust internal appeals before Oversight Board eligibility"
          }
        ],
        "removalCriteria": [
          "Must have requested review of content or reported content",
          "Must have completed two rounds of internal review",
          "Must still disagree with Instagram's decision after internal reviews"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/280908123309761",
      "summary": "Two-stage appeal process: first through Instagram's internal review system, then optionally to the Oversight Board within 15 days",
      "steps": [
        "First, request a review through Instagram's internal review process for your content or content you reported",
        "If you disagree after internal review, you may be eligible to appeal to the Oversight Board",
        "Submit appeal to Oversight Board within 15 days of the decision",
        "Check appeal status using reference number on Oversight Board website",
        "Oversight Board will decide whether to review your appeal"
      ]
    }
  },
  {
    "id": "instagram-new-1758631414625-5",
    "reference": "META-BULLYING",
    "title": "Meta Bullying and Harassment Standards",
    "summary": "Detailed community standards specifically addressing bullying and harassment across Meta platforms including Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T12:43:34.625Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "Tier 1",
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
            "reason": "To demonstrate the unwanted nature and pattern of contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large number of individuals without solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-statements",
        "reference": "Tier 1",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
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
            "reason": "To verify the nature of the prohibited statements"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "Tier 1",
        "summary": "Prohibits severe sexualized commentary and derogatory sexualized photoshop or drawings",
        "quote": "Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of severe sexualized commentary or manipulated imagery",
            "example": "Screenshots of sexualized comments or manipulated photos/drawings",
            "reason": "To demonstrate the sexualized and derogatory nature of the content"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "Tier 1",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of derogatory sexual terms being used as attacks",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' in attacking context",
            "reason": "To verify the use of prohibited derogatory sexual terminology"
          }
        ],
        "removalCriteria": [
          "Content uses derogatory terms related to sexual activity as attacks"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "Tier 1",
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
            "reason": "To demonstrate the threatening nature and identify the type of private information at risk"
          }
        ],
        "removalCriteria": [
          "Content threatens to release private phone numbers",
          "Content threatens to release residential addresses",
          "Content threatens to release email addresses",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "meta-bh-sexual-assault-attacks",
        "reference": "Tier 1",
        "summary": "Prohibits attacks based on experience of sexual assault, sexual exploitation, sexual harassment, or domestic abuse",
        "quote": "Attacks based on their experience of sexual assault, sexual exploitation, sexual harassment, or domestic abuse.",
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
            "description": "Evidence of attacks targeting victims based on their trauma experiences",
            "example": "Screenshots showing content that attacks someone for their experience with sexual assault or abuse",
            "reason": "To verify that the attack is based on the victim's experience with trauma"
          }
        ],
        "removalCriteria": [
          "Content attacks individuals based on sexual assault experience",
          "Content attacks individuals based on sexual exploitation experience",
          "Content attacks individuals based on sexual harassment experience",
          "Content attacks individuals based on domestic abuse experience"
        ]
      },
      {
        "id": "meta-bh-bodily-functions-degradation",
        "reference": "Tier 1",
        "summary": "Prohibits content that degrades or expresses disgust toward individuals depicted in the process of or right after menstruating, urinating, vomiting, or defecating",
        "quote": "Content that degrades or expresses disgust toward individuals who are depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
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
            "description": "Evidence of degrading content targeting individuals during bodily functions",
            "example": "Screenshots of content that degrades someone shown during natural bodily functions",
            "reason": "To verify the degrading nature of content targeting vulnerable moments"
          }
        ],
        "removalCriteria": [
          "Content degrades individuals depicted menstruating",
          "Content degrades individuals depicted urinating",
          "Content degrades individuals depicted vomiting",
          "Content degrades individuals depicted defecating"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "Tier 2",
        "summary": "Prohibits claims about sexual activity for minors, private adults, and limited scope public figures, except in context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of claims about sexual activity targeting protected individuals",
            "example": "Screenshots of posts making sexual activity claims about minors or private adults",
            "reason": "To verify inappropriate sexual claims are being made about protected individuals"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of minors",
          "Content makes claims about sexual activity of private adults",
          "Content makes claims about sexual activity of limited scope public figures",
          "Exception: Criminal allegations of non-consensual sexual touching against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "Tier 2",
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
            "description": "Evidence of sexualizing content targeting protected adults",
            "example": "Screenshots of posts that sexualize private adults or limited scope public figures",
            "reason": "To verify inappropriate sexualization of protected individuals"
          }
        ],
        "removalCriteria": [
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery-targeting",
        "reference": "Tier 2",
        "summary": "Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
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
            "description": "Evidence of manipulated imagery targeting physical features",
            "example": "Screenshots of images with circles, arrows, or other modifications highlighting body parts",
            "reason": "To demonstrate the manipulative and targeting nature of the content"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight specific physical characteristics",
          "Content negatively draws attention to physical features through visual modifications"
        ]
      },
      {
        "id": "meta-bh-physical-bullying-degradation",
        "reference": "Tier 2",
        "summary": "Prohibits content that degrades individuals who are depicted being physically bullied, except in fight-sport contexts",
        "quote": "Content that degrades individuals who are depicted being physically bullied (except in fight-sport contexts).",
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
            "description": "Evidence of content degrading physical bullying victims",
            "example": "Screenshots of posts that mock or degrade someone being physically bullied",
            "reason": "To verify the degrading nature of content targeting bullying victims"
          }
        ],
        "removalCriteria": [
          "Content degrades individuals depicted being physically bullied",
          "Exception: Content in legitimate fight-sport contexts"
        ]
      },
      {
        "id": "meta-bh-romantic-sexual-orientation-claims",
        "reference": "Tier 3",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity for private minors, private adults, and minor involuntary public figures",
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
            "description": "Evidence of unauthorized claims about romantic or sexual identity",
            "example": "Screenshots of posts making claims about someone's relationships or sexual orientation",
            "reason": "To verify inappropriate disclosure of personal relationship or identity information"
          },
          {
            "description": "Self-report from target or authorized representative",
            "example": "Report from the individual being targeted or their legal representative",
            "reason": "To confirm the claims are unwanted and unauthorized"
          }
        ],
        "removalCriteria": [
          "Content makes claims about romantic involvement of protected individuals",
          "Content makes claims about sexual orientation of protected individuals",
          "Content makes claims about gender identity of protected individuals",
          "Target must self-report for private adults"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "Tier 3",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures",
        "quote": "Unwanted manipulated imagery.",
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
            "description": "Self-report from target confirming imagery is unwanted",
            "example": "Report from the individual depicted in the manipulated imagery",
            "reason": "To confirm the manipulated imagery is unwanted by the subject"
          },
          {
            "description": "Evidence of image manipulation",
            "example": "Screenshots showing manipulated photos or digitally altered images",
            "reason": "To verify that the imagery has been manipulated"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Target has self-reported the imagery as unwanted",
          "Target is a private minor, private adult, or minor involuntary public figure"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups-events",
        "reference": "Additional Requirements",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
            "description": "Report from target or authorized representative",
            "example": "Report from the individual being targeted or their legal representative",
            "reason": "To confirm the targeting is unwanted by the subject"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots of unwanted Pages, Groups, or Events targeting the individual",
            "reason": "To verify the targeting mechanism and content"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative as unwanted"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figures",
        "reference": "Additional Requirements",
        "summary": "Prohibits content sexualizing public figures when confirmed unwanted by the target or authorized representative",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from public figure or their representative confirming the sexualizing content is unwanted",
            "reason": "To verify the public figure does not consent to the sexualizing content"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of posts that sexualize the public figure",
            "reason": "To verify the sexual nature of the content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexually-harassing-contact",
        "reference": "Additional Requirements",
        "summary": "Prohibits initiating sexually harassing contact when confirmed unwanted by the recipient",
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
            "description": "Confirmation from recipient that contact is unwanted",
            "example": "Report from the recipient or their representative confirming the sexually harassing nature",
            "reason": "To verify the contact is unwanted and sexually harassing"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots of messages or content that constitute sexual harassment",
            "reason": "To demonstrate the sexually harassing nature of the contact"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request another review if they disagree with enforcement decisions. Appeals are processed through the Support Inbox with final responses provided after re-review.",
      "steps": [
        "Report the content through the universal reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  }
],
};
