import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads. As of November 2024, unified standards apply to all Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "meta-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits sharing non-consensual intimate images and sextortion across Meta platforms.",
        "quote": "Adult Sexual Exploitation",
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
        "id": "meta-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including image-based abuse targeting individuals.",
        "quote": "Bullying and Harassment",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
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
        "id": "meta-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits violations of privacy including sharing private content without consent.",
        "quote": "Privacy Violations",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-authentic-identity",
        "reference": "CS-AIR",
        "summary": "Prohibits impersonation and misrepresentation of identity on Meta platforms.",
        "quote": "Authentic Identity Representation",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-adult-nudity-sexual-activity",
        "reference": "CS-ANSA",
        "summary": "Regulates adult intimate content and prohibits non-consensual sharing of such material.",
        "quote": "Adult Nudity and Sexual Activity",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025 with significant changes to content licensing and AI usage rights.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "fb-copyright-policy",
        "reference": "FB-TOS-IP",
        "summary": "Prohibits copyright infringement, including unauthorized use of intimate images owned by others.",
        "quote": "We prohibit copyright infringement. If the intimate image was created and owned by someone else, its unauthorized use is a copyright violation.",
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
            "description": "A formal DMCA takedown notice",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership of the content",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content is an original work (photo, video) posted without the copyright owner's permission"
        ]
      },
      {
        "id": "fb-unauthorized-content-policy",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share.",
        "quote": "You may not use our Products to do or share anything: That you do not own or have the necessary rights to share.",
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
          "Content shared without owning it or having necessary rights to share it"
        ]
      },
      {
        "id": "fb-intellectual-property-policy",
        "reference": "Section 3.2.1",
        "summary": "Prohibits content that infringes or violates someone else's intellectual property rights.",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
          "Content infringes or violates someone else's intellectual property rights"
        ]
      },
      {
        "id": "fb-community-standards-policy",
        "reference": "Section 3.2.1",
        "summary": "Prohibits content that violates Community Standards, which include policies against image-based abuse.",
        "quote": "You may not use our Products to do or share anything: That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products.",
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
          "Content violates Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request another review of content removal decisions, unless they seriously or repeatedly violate Terms or if doing so may expose Meta or others to legal liability.",
      "steps": [
        "Submit a request for review of the content removal decision",
        "Meta will review the request unless user has seriously or repeatedly violated Terms",
        "Review may be denied if it would expose Meta or others to legal liability, harm the community, compromise system integrity, or for technical/legal limitations"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across all Meta platforms. Effective June 16, 2025 with updated provisions for AI data usage and enhanced user controls.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "meta-pp-safety-integrity",
        "reference": "Section 2 - Promoting safety, integrity and security",
        "summary": "Prohibits harmful or unlawful behavior and allows for content review and removal when reported",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Content must be reported to Meta for review",
            "example": "Report the specific content through Meta's reporting mechanisms",
            "reason": "Required for Meta to identify and review potentially harmful content"
          }
        ],
        "removalCriteria": [
          "Content constitutes harmful or unlawful behavior",
          "Content violates Meta's terms or policies",
          "Content threatens the physical or mental health, well-being or integrity of users"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - How do we respond to legal requests",
        "summary": "Allows access, preservation and sharing of user information in response to legal requests and to prevent harm",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. In accordance with applicable law. To promote the safety, security and integrity of Meta Products, users, employees, property and the public.",
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
            "example": "Court order requesting specific user information",
            "reason": "Required by law for Meta to disclose user information"
          }
        ],
        "removalCriteria": [
          "Valid legal request from civil litigants, law enforcement or government authorities",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity of Meta Products and users"
        ]
      },
      {
        "id": "meta-pp-account-deletion",
        "reference": "Section 6 - How can you manage or delete your information",
        "summary": "Provides users with tools to delete their information or account",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. Delete your information or account.",
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
            "description": "User must access account settings or deletion tools",
            "example": "Navigate to account settings and select delete account option",
            "reason": "Required for user to initiate account or information deletion process"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their information or account through provided tools"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information, and may also contact Data Protection Officers or local Data Protection Authorities in some jurisdictions",
      "steps": [
        "Contact Meta online through the provided support link",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, may also contact local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "fb-hacked-account-policy",
        "reference": "FB-HC-HACKED",
        "summary": "Provides a process to report and recover compromised accounts via facebook.com/hacked.",
        "quote": "We provide a process to report and recover compromised accounts via facebook.com/hacked.",
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
            "description": "Account details (email, phone number)",
            "reason": "To identify and verify ownership of the compromised account"
          },
          {
            "description": "Access to a previously linked email or phone number to receive a recovery code",
            "reason": "To securely restore access to the legitimate account owner"
          },
          {
            "description": "Government ID may be required if other methods fail",
            "example": "Driver's license, passport",
            "reason": "To prove ownership when standard recovery methods are unavailable"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "The legitimate owner is locked out of the account",
          "The account is posting spam or malicious content"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758643839914-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment across Meta platforms with heightened protections for minors and public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation",
        "quote": "Everyone is protected from: Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
          "Contact is repeated",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without prior solicitation"
        ]
      },
      {
        "id": "meta-bh-severe-sexualised-commentary",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits severe sexualised commentary targeting individuals",
        "quote": "Everyone is protected from: Severe sexualised commentary.",
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
          "Content contains severe sexualised commentary"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexualised-imagery",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits derogatory sexualised photoshop or drawings targeting individuals",
        "quote": "Everyone is protected from: Derogatory sexualised photoshop or drawings",
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
          "Content contains derogatory sexualised photoshop or drawings"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Everyone is protected from: Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits threats to release an individual's private contact information or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
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
          "Content threatens to release private phone numbers",
          "Content threatens to release residential addresses",
          "Content threatens to release email addresses",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures",
        "quote": "In addition to the universal protections for everyone, all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
          "Content makes claims about sexual activity targeting protected individuals",
          "Exception: criminal allegations of non-consensual sexual touching against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualisation",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content sexualising adults in protected categories",
        "quote": "Content sexualising another adult (sexualisation of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
          "Content sexualises protected adult individuals"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content manipulated to negatively highlight specific physical characteristics",
        "quote": "Content manipulated to highlight, circle or otherwise negatively draw attention to specific physical characteristics (nose, ear and so on).",
        "contentTypes": [
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
          "Content is manipulated to negatively highlight physical characteristics"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery-self-report",
        "reference": "Tier 3: Additional protections",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private individuals",
        "quote": "When self-reported, private minors, private adults and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Self-report by the targeted individual or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated content",
            "reason": "Required to confirm the content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Content is self-reported by protected individual"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups-events",
        "reference": "Additional information required",
        "summary": "Prohibits content targeting private individuals through unwanted Pages, groups and events when reported by target",
        "quote": "Post content that targets private individuals through unwanted Pages, groups and events. We remove this content when it is reported by the target or an authorised representative of the target.",
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
            "description": "Report from the target or authorized representative",
            "example": "Report submitted by the targeted individual or their legal representative",
            "reason": "Required to confirm the content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, groups or events",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualisation",
        "reference": "Additional information required",
        "summary": "Prohibits content sexualising public figures when reported as unwanted",
        "quote": "Post content sexualising a public figure. We will remove this content when we have confirmation from the target or an authorised representative of the target that the content is unwanted.",
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
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Written confirmation from public figure or their representative",
            "reason": "Required to confirm the sexualising content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualises a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexually-harassing-contact",
        "reference": "Additional information required",
        "summary": "Prohibits sexually harassing contact when confirmed as unwanted by recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorised representative of the recipient that contact is unwanted.",
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
        "evidenceRequirements": [
          {
            "description": "Confirmation from recipient or authorized representative that contact is unwanted",
            "example": "Statement from recipient confirming the sexually harassing nature of contact",
            "reason": "Required to confirm the contact is unwanted and sexually harassing"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request another review if they believe Meta made the wrong decision about their content or report",
      "steps": [
        "Submit appeal request through notification or Support Inbox",
        "Provide additional information or context if available",
        "Meta conducts re-review of the content",
        "Final response sent to Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758643839914-1",
    "reference": "META-CR",
    "title": "Meta Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA procedures, counter-notifications, and intellectual property protection across Meta platforms.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "meta-cr-copyright-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits posting content that infringes someone else's copyright without permission",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
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
        "evidenceRequirements": [
          {
            "description": "Complete copyright claim including identification of copyrighted work",
            "example": "Details of the copyrighted work and location of infringing content",
            "reason": "Required for DMCA compliance and copyright verification"
          },
          {
            "description": "Proof of copyright ownership or authorization",
            "example": "Documentation showing you own or represent the copyright holder",
            "reason": "Only copyright owners or authorized representatives can file reports"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content posted without permission from copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-cr-unauthorized-use",
        "reference": "Copyright and posting content on Meta platforms",
        "summary": "Prohibits posting copyrighted content even when recorded personally, credited, or modified",
        "quote": "It's possible to infringe someone else's copyright when you post their content on Meta platforms, or facilitate copyright infringement, even if you: Recorded the content onto your own recording device (examples: a song playing in the background during a party, concert, sporting event, wedding, etc.) Gave credit to the copyright owner Included a disclaimer that you didn't intend to infringe copyright Didn't intend to profit from it Modified the work or added your own original material to it Found the content available on the internet Saw that others posted the same content as well Think that the use is a fair use",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright ownership in the content",
            "example": "Proof you created or own rights to the photos/videos",
            "reason": "To establish legitimate copyright claim"
          }
        ],
        "removalCriteria": [
          "Content posted without copyright owner's permission",
          "Content infringes copyright regardless of intent or modifications",
          "Content recorded from copyrighted source material"
        ]
      },
      {
        "id": "meta-cr-repeat-infringer",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeatedly posting content that infringes intellectual property rights with account consequences",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
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
        "evidenceRequirements": [
          {
            "description": "Documentation of repeated copyright violations",
            "example": "Multiple instances of unauthorized content posting",
            "reason": "To establish pattern of infringement behavior"
          }
        ],
        "removalCriteria": [
          "Repeated posting of content that infringes intellectual property rights",
          "Pattern of copyright or trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by contacting the rights owner directly or submitting a DMCA counter-notification through Meta's process",
      "steps": [
        "Receive notification from Meta with rights owner contact information",
        "Contact rights owner directly to resolve the issue",
        "Submit appeal through instructions provided in Meta's notification message",
        "For DMCA cases, file counter-notification following provided instructions",
        "Wait for restoration decision or rights owner response"
      ]
    }
  },
  {
    "id": "facebook-new-1758643839914-2",
    "reference": "META-NCII",
    "title": "Non-Consensual Intimate Imagery Resources",
    "summary": "Resources and policies for reporting and removing non-consensual intimate imagery, including AI-generated deepfakes.",
    "url": "https://about.fb.com/news/2019/03/detecting-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "meta-ncii-removal",
        "reference": "Community Standards",
        "summary": "Prohibits non-consensual intimate images and removes them when reported",
        "quote": "it's long been our policy to remove non-consensual intimate images (sometimes referred to as revenge porn) when they're reported to us",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Community Standards on sexual exploitation of adults",
          "Images or videos are shared without permission"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": null,
        "summary": "Proactively detects near-intimate images or videos shared without permission using machine learning",
        "quote": "By using machine learning and artificial intelligence, we can now proactively detect near nude images or videos that are shared without permission on Facebook and Instagram. This means we can find this content before anyone reports it",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is detected as near-intimate imagery",
          "Content is shared without permission",
          "Content violates Community Standards"
        ]
      },
      {
        "id": "meta-ncii-account-disable",
        "reference": null,
        "summary": "Disables accounts for sharing intimate content without permission in most cases",
        "quote": "If the image or video violates our Community Standards, we will remove it, and in most cases we will also disable an account for sharing intimate content without permission",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account shared intimate content without permission",
          "Content violates Community Standards"
        ]
      },
      {
        "id": "meta-ncii-photo-matching",
        "reference": null,
        "summary": "Uses photo-matching technology to prevent re-sharing of non-consensual intimate images",
        "quote": "in recent years we've used photo-matching technology to keep them from being re-shared",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Image matches previously reported non-consensual intimate content"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Appeals process available if users believe Meta made a mistake in content removal or account action",
      "steps": [
        "Submit an appeal if you believe Meta made a mistake"
      ]
    }
  },
  {
    "id": "facebook-new-1758643839914-3",
    "reference": "META-AI",
    "title": "Account Integrity and Authentic Identity Policy",
    "summary": "Policy covering impersonation, fake accounts, and authentic identity requirements across Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/account-integrity/",
    "accessTimestamp": "2025-09-23T16:10:39.914Z",
    "policies": [
      {
        "id": "meta-ai-account-integrity-egregious-violations",
        "reference": "Account Integrity Policy - Egregious Violations",
        "summary": "Restricts or disables accounts that violate Community Standards involving egregious harms, including those referred to law enforcement due to risk of imminent harm to individual or public safety",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that: Violate our Community Standards involving egregious harms, including those we refer to law enforcement due to the risk of imminent harm to individual or public safety",
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
          "Content violates Community Standards involving egregious harms",
          "Content poses risk of imminent harm to individual or public safety"
        ]
      },
      {
        "id": "meta-ai-account-integrity-persistent-violations",
        "reference": "Account Integrity Policy - Persistent Violations",
        "summary": "Restricts or disables accounts that persistently violate Community Standards by posting violating content and/or managing violating entities or business assets",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that: Persistently violate our Community Standards by posting violating content and/or managing violating entities or business assets",
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
          "Account demonstrates persistent violations of Community Standards",
          "Account posts violating content repeatedly",
          "Account manages violating entities or business assets"
        ]
      },
      {
        "id": "meta-ai-account-integrity-evasion",
        "reference": "Account Integrity Policy - Evasion",
        "summary": "Restricts or disables accounts created or repurposed to evade previous account or entity removal, including those with common ownership and content as previously removed accounts",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that are: Created or repurposed to evade a previous account or entity removal, including those assessed to have common ownership and content as previously removed accounts or entities",
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
          "Account created to evade previous removal",
          "Account repurposed to evade previous removal",
          "Account has common ownership with previously removed accounts",
          "Account has common content with previously removed accounts"
        ]
      },
      {
        "id": "meta-ai-account-integrity-blocking-evasion",
        "reference": "Account Integrity Policy - Blocking Evasion",
        "summary": "Restricts or disables accounts created to contact a user that has blocked an account",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that are: Created to contact a user that has blocked an account",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account created to contact a user who has blocked another account"
        ]
      },
      {
        "id": "meta-ai-account-integrity-sex-offender",
        "reference": "Account Integrity Policy - Sex Offender Restriction",
        "summary": "Restricts or disables accounts owned by convicted sex offenders, including those convicted of offences related to sexual abuse of children or adults",
        "quote": "We will work to restrict or disable accounts or other entities (Pages, groups, events), or business assets (Business Managers, ad accounts) that engage in off-platform activity that can lead to harm on our platform, including those: Owned by a convicted sex offender, convicted of offences related to the sexual abuse of children or adults",
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
          "Account owned by convicted sex offender",
          "Account owned by person convicted of offences related to sexual abuse of children or adults"
        ]
      },
      {
        "id": "meta-ai-account-integrity-compromised-accounts",
        "reference": "Account Integrity Policy - Compromised Accounts",
        "summary": "May request additional information about compromised accounts to ascertain ownership and permissible activity",
        "quote": "In the following scenarios, we may request additional information about an account to ascertain ownership and/or permissible activity: Compromised accounts",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Additional information to verify account ownership",
            "example": "Identity verification documents or account recovery information",
            "reason": "To ascertain legitimate ownership of compromised accounts"
          }
        ],
        "removalCriteria": [
          "Account has been compromised"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can request another review if they disagree with enforcement decisions through the Support Inbox system",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  }
],
};
