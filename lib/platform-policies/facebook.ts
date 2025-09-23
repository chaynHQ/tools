import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "facebook-new-1758654329967-0",
    "reference": "FB-CS-001",
    "title": "Community Standards",
    "summary": "Facebook's comprehensive community guidelines that outline what is and isn't allowed on Facebook, Instagram, Messenger and Threads, covering safety, privacy, dignity, authenticity and voice principles.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual sharing of intimate imagery",
        "quote": "Adult Sexual Exploitation",
        "contentTypes": [
          "intimate",
          "personal"
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
          "Content constitutes adult sexual exploitation"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment that degrades or intimidates individuals",
        "quote": "Bullying and Harassment",
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
          "Content constitutes bullying or harassment"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and image privacy rights violations including sharing personal information without consent",
        "quote": "Privacy Violations",
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
          "Content violates privacy rights",
          "Content shares personal information without consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and impersonation of others",
        "quote": "Authentic Identity Representation",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content misrepresents identity",
          "Account impersonates another person"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property rights including unauthorized use of personal images",
        "quote": "Third-Party Intellectual Property Infringement",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
          "Content infringes intellectual property rights",
          "Unauthorized use of copyrighted material"
        ]
      },
      {
        "id": "meta-cs-human-exploitation",
        "reference": "Human Exploitation",
        "summary": "Prohibits human exploitation including sextortion and coercive threats",
        "quote": "Human Exploitation",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
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
          "Content involves human exploitation",
          "Content involves coercive or threatening behavior"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including coordinated harassment and fake accounts used for abuse",
        "quote": "Inauthentic Behavior",
        "contentTypes": [
          "personal",
          "private",
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
          "Account engages in inauthentic behavior",
          "Coordinated inauthentic activity"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Prohibits compromised accounts and unauthorized access that may lead to abuse",
        "quote": "Account Integrity",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account has been compromised",
          "Unauthorized account access"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758654329967-1",
    "reference": "FB-TOS-001",
    "title": "Meta Terms of Service",
    "summary": "The main terms of service governing use of Facebook, Messenger, and other Meta products, including user rights, responsibilities, content policies, and enforcement procedures.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "fb-tos-content-violations",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that violates Community Standards, is unlawful, misleading, discriminatory, fraudulent, or that users do not own or have necessary rights to share",
        "quote": "You may not use our Products to do or share anything: That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products. That is unlawful, misleading, discriminatory or fraudulent (or assists someone else in using our Products in such a way). That you do not own or have the necessary rights to share.",
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
          "Content violates Community Standards",
          "Content is unlawful, misleading, discriminatory or fraudulent",
          "User does not own or have necessary rights to share the content"
        ]
      },
      {
        "id": "fb-tos-ip-infringement",
        "reference": "Section 3.2.1",
        "summary": "Prohibits content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations",
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
          "Content infringes someone else's intellectual property rights",
          "Content violates copyright or trademark",
          "No applicable legal exception or limitation exists"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "Section 3.2",
        "summary": "Allows Meta to remove or restrict access to content that violates Terms of Service provisions and suspend or disable accounts for violating conduct",
        "quote": "We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2.",
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
          "Content violates Terms of Service provisions",
          "User conduct violates platform provisions"
        ]
      },
      {
        "id": "fb-tos-reporting-encouragement",
        "reference": "Section 3.2",
        "summary": "Encourages users to report content or conduct that violates their rights, including intellectual property rights, or platform terms and policies",
        "quote": "To help support our community, we encourage you to report content or conduct that you believe violates your rights (including intellectual property rights) or our terms and policies, if this feature exists in your jurisdiction.",
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
          "Content violates user's rights",
          "Content violates intellectual property rights",
          "Content violates platform terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-deletion-timeline",
        "reference": "Section 3.3.3",
        "summary": "Provides timeline for content deletion, taking up to 90 days after deletion process begins, with additional 90 days for backup removal",
        "quote": "It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
            "value": 90,
            "unit": "days",
            "description": "Up to 90 days to delete content after deletion process begins, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content deletion request received",
          "Account deletion process initiated",
          "Content sent to trash"
        ]
      },
      {
        "id": "fb-tos-account-termination",
        "reference": "Section 4.2",
        "summary": "Allows suspension or permanent deletion of accounts for clear, serious, or repeated breaches of Terms or Community Standards, including intellectual property infringement",
        "quote": "If we determine, in our discretion, that you have clearly, seriously or repeatedly breached our Terms or Policies, including in particular the Community Standards, we may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account. We may also disable or delete your account if you repeatedly infringe other people's intellectual property rights or where we are required to do so for legal reasons.",
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
          "Clear, serious, or repeated breach of Terms or Policies",
          "Violation of Community Standards",
          "Repeated infringement of intellectual property rights",
          "Legal requirement for account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions and account actions, unless violations are serious/repeated or legal restrictions apply",
      "steps": [
        "Meta will notify users when content is removed for Community Standards violations",
        "Users can request another review of removal decisions",
        "Options for review are explained when content is removed",
        "Users can request review of account suspension or termination decisions",
        "Users can contact Meta if they believe account was disabled by mistake",
        "Review may not be available for serious/repeated violations or legal restrictions"
      ]
    }
  },
  {
    "id": "facebook-new-1758654329967-2",
    "reference": "FB-PP-001",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive privacy policy explaining how Meta collects, uses, shares, retains and transfers user information across Facebook and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and enables content removal through review processes",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - How do we respond to legal requests",
        "summary": "Provides framework for accessing, preserving and sharing information in response to legal requests and to prevent harm",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Valid legal request received",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "Section 19 - Sharing information with others, including law enforcement",
        "summary": "Enables information sharing with law enforcement and others to respond to legal requests and promote safety",
        "quote": "Sharing information with others, including law enforcement and to respond to legal requests. The categories of information we access, preserve, use and share depend on the specific circumstances. For example, responses to legal requests where not compelled by law will typically include limited information (such as contact details and login information). However, the information we process will depend on the purposes, which could include the following: In response to legal requests from third parties such as civil litigants, law enforcement and other government authorities, To comply with applicable law or legitimate legal purposes, To promote the safety, security and integrity of Meta Companies, Meta Products, users, employees, property and the public.",
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
          "Legal request from authorized third parties",
          "Required by applicable law",
          "Necessary for safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "Section 19 - Promoting safety, integrity and security",
        "summary": "Enables account verification and investigation of suspicious activity to maintain platform integrity",
        "quote": "Promoting safety, integrity and security on and across the Meta Products: The Meta Products are designed to research and help ensure the safety, integrity and security of those services and those people who enjoy them, on and off Meta Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity.",
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
          "Account verification required",
          "Suspicious activity detected",
          "Terms or policy violations identified"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta through online forms or mail for privacy-related questions, complaints or requests regarding their information",
      "steps": [
        "Contact Meta online through the provided support link",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, users may contact their local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "facebook-new-1758654329967-3",
    "reference": "FB-BH-001",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy on Facebook's approach to bullying and harassment, including protections for minors, public figures, and private individuals with specific enforcement guidelines.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "fb-bh-unwanted-contact",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals without prior solicitation",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
          "Contact is repeated",
          "Contact is sexually harassing",
          "Contact is directed at a large number of individuals with no prior solicitation"
        ]
      },
      {
        "id": "fb-bh-sexual-activity-statements",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
        "contentTypes": [
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity"
        ]
      },
      {
        "id": "fb-bh-severe-sexualized-commentary",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits severe sexualized commentary",
        "quote": "Severe sexualized commentary.",
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
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "fb-bh-derogatory-sexualized-content",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits derogatory sexualized photoshop or drawings",
        "quote": "Derogatory sexualized photoshop or drawings",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains derogatory sexualized photoshop",
          "Content contains derogatory sexualized drawings"
        ]
      },
      {
        "id": "fb-bh-sexual-activity-attacks",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "fb-bh-private-info-threats",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
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
        "removalCriteria": [
          "Content threatens to release private phone number",
          "Content threatens to release residential address",
          "Content threatens to release email address",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "fb-bh-bullying-harassment-calls",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits calls for, or statements of intent to engage in, bullying and harassment",
        "quote": "Calls for, or statements of intent to engage in, bullying and/or harassment.",
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
          "Content calls for bullying or harassment",
          "Content contains statements of intent to engage in bullying or harassment"
        ]
      },
      {
        "id": "fb-bh-sexual-activity-claims",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in the context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
          "Content makes claims about sexual activity",
          "Target is a minor, private adult, or limited scope public figure",
          "Content is not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "fb-bh-adult-sexualization",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content sexualizing another adult for minors, private adults and limited scope public figures",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content sexualizes another adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "fb-bh-manipulated-imagery",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
        "contentTypes": [
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics",
          "Content negatively draws attention to specific physical characteristics",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "fb-bh-romantic-claims",
        "reference": "Tier 3: Additional protections",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity for private minors, private adults, and minor involuntary public figures",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
        "contentTypes": [
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
          "Content makes claims about romantic involvement",
          "Content makes claims about sexual orientation",
          "Content makes claims about gender identity",
          "Target is a private minor, private adult, or minor involuntary public figure"
        ]
      },
      {
        "id": "fb-bh-unwanted-manipulated-imagery-self-report",
        "reference": "Tier 3: Additional protections - Self-reported",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
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
            "description": "Self-report by the target or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated imagery",
            "reason": "Required to confirm the imagery is unwanted"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Content is unwanted by the target",
          "Target is a private minor, private adult, or minor involuntary public figure",
          "Content is self-reported by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-unwanted-pages-groups-events",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
            "description": "Report by the target or authorized representative",
            "example": "Report submitted by the targeted individual or their representative",
            "reason": "Required to confirm the content is unwanted targeting"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals",
          "Content is posted through Pages, Groups or Events",
          "Content is unwanted by the target",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-public-figure-sexualization",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits content sexualizing a public figure when confirmed unwanted by the target",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from the target or authorized representative that content is unwanted",
            "example": "Statement from the public figure or their representative confirming the content is unwanted",
            "reason": "Required to confirm the sexualizing content is unwanted by the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target confirms content is unwanted",
          "Confirmation provided by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-sexually-harassing-contact",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits initiating sexually harassing contact when confirmed unwanted by the recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from the recipient or authorized representative that contact is unwanted",
            "example": "Statement from the recipient confirming the sexually harassing contact is unwanted",
            "reason": "Required to confirm the contact is unwanted and sexually harassing"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Contact is unwanted by recipient",
          "Confirmation provided by recipient or authorized representative"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content removal decisions through Facebook's Support Inbox system with options for review and final decision communication",
      "steps": [
        "Submit an appeal request if you disagree with the enforcement decision",
        "Provide additional information or context to support your appeal",
        "Meta reviews the appeal and makes a final decision",
        "Final response is communicated through the Support Inbox",
        "Users can also contact the Help Center for additional support with bullying and harassment issues"
      ]
    }
  },
  {
    "id": "facebook-new-1758654329967-4",
    "reference": "FB-NCII-001",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Policy covering restrictions on adult nudity and sexual content, including specific provisions for non-consensual intimate imagery and sexual exploitation.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "fb-ncii-001-adult-nudity",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic and digital imagery of adult nudity including intimate body parts",
        "quote": "Photorealistic/digital imagery of adult nudity, if it depicts: Visible genitalia (including when obscured by pubic hair or digital overlays), Visible anuses and/or close-ups of visible buttocks, Visible female nipples, except in a breastfeeding, or act of protest context",
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
          "Content depicts visible genitalia including when obscured",
          "Content shows visible anuses or close-ups of buttocks",
          "Content shows visible female nipples outside of breastfeeding or protest contexts"
        ]
      },
      {
        "id": "fb-ncii-001-voyeuristic-content",
        "reference": "Adult Nudity",
        "summary": "Prohibits videos focusing on intimate body parts recorded without the subject's awareness",
        "quote": "Photorealistic/ digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person(s) depicted in them",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Video focuses on intimate body parts",
          "Content was recorded without the subject's awareness"
        ]
      },
      {
        "id": "fb-ncii-001-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery of adult sexual activity including explicit and implicit sexual content",
        "quote": "Photorealistic/ digital imagery of adult sexual activity, including: Explicit sexual activity or stimulation, Implicit sexual activity or stimulation, Other sexual activity or stimulation",
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
          "Content depicts explicit sexual activity or stimulation",
          "Content shows implicit sexual activity or stimulation",
          "Content contains other forms of sexual activity or stimulation as defined in policy"
        ]
      },
      {
        "id": "fb-ncii-001-ai-generated",
        "reference": "Policy Rationale",
        "summary": "Prohibits AI-generated and computer-generated images of nudity and sexual activity regardless of photorealistic appearance",
        "quote": "Under this policy, we remove real photographs and videos of nudity and sexual activity, AI- or computer-generated images of nudity and sexual activity, and digital imagery, regardless of whether it looks \"photorealistic\" (as in, it looks like a real person).",
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
          "Content is AI-generated imagery depicting nudity or sexual activity",
          "Content is computer-generated imagery depicting nudity or sexual activity",
          "Content is digital imagery depicting nudity or sexual activity regardless of photorealistic appearance"
        ]
      },
      {
        "id": "fb-ncii-001-age-restricted-nudity",
        "reference": "Age-restricted content with labels",
        "summary": "Restricts certain nudity content to users 18 and older with sensitivity labels",
        "quote": "For the following content, we limit the ability to view the content to users, ages 18 and older and include a label so that people are aware the content may be sensitive: Digital imagery and real world art of explicit sexual activity or stimulation in a medical or health context",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains explicit sexual activity outside of medical/health contexts",
          "Content shows nudity that requires age restriction and sensitivity labeling"
        ]
      },
      {
        "id": "fb-ncii-001-near-nudity",
        "reference": "Age-restricted content",
        "summary": "Restricts near-nudity content and imagery focusing on intimate body parts to users 18 and older",
        "quote": "For the following content, we limit the ability to view the content to adults, ages 18 and older: Photorealistic/digital imagery depicting near nudity such as nudity covered only by digital overlay or an opaque object and certain instances of nudity obscured by see-through clothing, Photorealistic/digital imagery of persons where crotch, buttock or female breast(s) are the focus of the image",
        "contentTypes": [
          "intimate",
          "personal"
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
          "Content depicts near-nudity covered only by digital overlay or objects",
          "Content shows nudity obscured by see-through clothing",
          "Image focuses primarily on intimate body parts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal content removal decisions through Facebook's Support Inbox system with multiple review opportunities",
      "steps": [
        "Report content removal decision through notification system",
        "Access detailed review information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Provide additional context or information during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758654329967-5",
    "reference": "FB-AI-001",
    "title": "Authentic Identity Representation Policy",
    "summary": "Policy governing authentic identity requirements, impersonation prevention, and account integrity measures on Facebook.",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "fb-ai-001-impersonation-images",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits impersonation of another person or entity by using their images, name, or likeness with the aim to deceive others",
        "quote": "Impersonate another person or entity by: Using their image(s), name, or likeness with the aim to deceive others",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Using another person's image(s), name, or likeness",
          "Intent to deceive others through impersonation"
        ]
      },
      {
        "id": "fb-ai-001-unauthorized-representation",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits speaking in the voice of another person or entity without authorization, including through creating profiles or pages",
        "quote": "Speaking in the voice of another person or entity for whom the user is not authorized to do so (e.g. by creating a Page or Profile)",
        "contentTypes": [
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
          "Speaking in the voice of another person or entity",
          "Lack of authorization to represent the person or entity",
          "Creating unauthorized pages or profiles"
        ]
      },
      {
        "id": "fb-ai-001-identity-misrepresentation",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits identity misrepresentation to mislead or deceive others, evade enforcement, or violate Community Standards",
        "quote": "Engage in identity misrepresentation to mislead or deceive others, evade enforcement, or violate our Community Standards. We consider a number of factors when assessing misleading identity misrepresentation, such as: Repeated or significant changes to identity details, such as name or age; Misleading profile information, such as bio details and profile location; Using stock imagery",
        "contentTypes": [
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
          "Intent to mislead or deceive others through false identity",
          "Attempting to evade enforcement through identity misrepresentation",
          "Repeated or significant changes to identity details",
          "Misleading profile information including bio details and location",
          "Using stock imagery to misrepresent identity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can request another review if they disagree with enforcement decisions, with appeals handled through the Support Inbox and notification system",
      "steps": [
        "If you think we got the decision wrong, you can request another review",
        "Provide additional information to support your appeal",
        "We'll send a final response after we've re-reviewed the content to the Support Inbox",
        "Appeals can also be escalated to the Oversight Board for eligible cases"
      ]
    }
  },
  {
    "id": "facebook-new-1758654329967-6",
    "reference": "FB-CR-001",
    "title": "Copyright Policy",
    "summary": "Meta's copyright policy explaining DMCA compliance, copyright infringement reporting, counter-notification procedures, and intellectual property protections.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "meta-cr-001-copyright-infringement",
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Copyright ownership or authorized representative status",
            "example": "Only the copyright owner or their authorized representative may file a report",
            "reason": "To verify legitimate ownership of the copyrighted content"
          },
          {
            "description": "Complete copyright claim information",
            "example": "Must include a complete copyright claim in your report if contacting designated agent",
            "reason": "Required for proper DMCA compliance and processing"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content posted without permission from copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-cr-002-copyright-ownership",
        "reference": "Know if you own the copyright to something",
        "summary": "Establishes that appearing in content does not grant copyright ownership",
        "quote": "If you appear in a photo or video, that doesn't necessarily mean you have a copyright in that photo or video.",
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
          "Must be actual copyright owner, not just subject of the content"
        ]
      },
      {
        "id": "meta-cr-003-no-permission-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits using copyrighted content even with credit, disclaimers, or modifications",
        "quote": "Keep in mind that your use of someone else's content may infringe their copyright, even if you: Gave credit to the copyright owner, Included a disclaimer that you don't intend to infringe copyright, Think that the use is a fair use, Didn't intend to profit from it, Legally bought or downloaded the content, Modified the work or added your own original material to it, Found the content available on the internet, Recorded the content onto your own recording device, Saw that others have posted the same content as well",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
          "Use of copyrighted content without permission regardless of credit given",
          "Use of copyrighted content without permission regardless of disclaimers",
          "Use of copyrighted content without permission regardless of modifications made",
          "Use of copyrighted content without permission regardless of how it was obtained"
        ]
      },
      {
        "id": "meta-cr-004-repeat-infringer",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeated posting of content that infringes intellectual property rights with escalating consequences",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
          "Repeated posting of content that infringes intellectual property rights",
          "Pattern of copyright or trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following up with rights owners directly or submitting DMCA counter-notifications for copyright claims",
      "steps": [
        "Receive notification from Meta with rights owner contact information and report details",
        "Follow up with the rights owner directly to try to resolve the issue",
        "For copyright reports, submit an appeal following instructions in the notification message",
        "For DMCA cases, file a DMCA counter-notification if eligible",
        "Wait for restoration consideration, which will be taken into account under repeat infringer policy"
      ]
    }
  },
  {
    "id": "facebook-new-1758654329967-7",
    "reference": "FB-AP-001",
    "title": "Appeals and Content Review Process",
    "summary": "Information about Facebook's appeals process for content decisions, including how users can contest removals and request review of enforcement actions.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal decisions by requesting another review when notified that their content has been removed or covered with a warning. The content is reviewed again to determine if it follows Community Standards. Appeals are available for the vast majority of violation types except those with extreme safety concerns such as child exploitation imagery.",
      "steps": [
        "Receive notification that content has been removed or covered with a warning",
        "Choose to disagree with the decision and request another review",
        "Content is resubmitted for review and remains hidden during the review process",
        "If reviewer accepts original decision, content remains removed",
        "If reviewer disagrees with initial review, content goes to another reviewer for final determination",
        "Final reviewer's decision determines whether content should be restored or remain removed"
      ]
    }
  },
  {
    "id": "facebook-new-1758654329967-8",
    "reference": "FB-US-001",
    "title": "United States Regional Privacy Notice",
    "summary": "Supplemental privacy notice for US users explaining consumer privacy rights, data practices, and legal compliance under US privacy laws including CCPA.",
    "url": "https://www.facebook.com/privacy/policies/uso/",
    "accessTimestamp": "2025-09-23T19:05:29.967Z",
    "policies": [
      {
        "id": "fb-us-001-personal-info-collection",
        "reference": "Categories of Personal Information",
        "summary": "Collects photos and videos which may include face imagery as personal information",
        "quote": "Photos and videos, which may include face imagery",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-audio-visual-info",
        "reference": "Categories of Personal Information",
        "summary": "Collects audio or visual information including photos, videos, and voice recordings",
        "quote": "Audio or visual information, including photos, videos, and voice recordings",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-face-imagery-sensitive",
        "reference": "Sensitive Personal Information",
        "summary": "Treats face imagery or voice recordings which may be used to identify you as sensitive personal information",
        "quote": "Face imagery or voice recordings which may be used to identify you when you use relevant features",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-content-sharing-disclosure",
        "reference": "Information Disclosure",
        "summary": "Discloses personal information to people and accounts you share and communicate with",
        "quote": "People and accounts you share and communicate with",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-reshare-disclosure",
        "reference": "Information Disclosure",
        "summary": "Discloses personal information to people and accounts with which others share or reshare content about you",
        "quote": "People and accounts with which others share or reshare content about you",
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
        "id": "fb-us-001-deletion-right",
        "reference": "Right to Request Deletion",
        "summary": "Provides the right to request deletion of personal information collected from or about you",
        "quote": "Right to Request Deletion: The right to request that we delete your Personal Information that we have collected from or about you.",
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
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-correction-right",
        "reference": "Right to Request Correction",
        "summary": "Provides the right to request correction of inaccurate personal information",
        "quote": "Right to Request Correction: The right to request that we correct inaccurate Personal Information that we maintain about you.",
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
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-targeted-advertising-opt-out",
        "reference": "Right to Opt Out of Targeted Advertising",
        "summary": "Provides the right to opt out of processing personal information for targeted advertising purposes",
        "quote": "Right to Opt Out of Targeted Advertising: The right to opt out of the processing of your Personal Information for purposes that may be considered \"targeted advertising\" under applicable U.S. privacy laws, including information obtained from your activities on nonaffiliated websites or online applications.",
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
        "removalCriteria": []
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can submit requests to exercise privacy rights and appeal consumer rights actions through a webform, with identity verification required and authorized agent options available",
      "steps": [
        "Visit the webform at help.meta.com/support/privacy",
        "Submit request to exercise rights or appeal consumer rights action",
        "Provide identity verification if requested (may include government issued ID)",
        "If using authorized agent, provide additional verification information",
        "Request will be processed through automated tools available through password-protected account in most cases"
      ]
    }
  }
],
};
