import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "facebook-new-1758653007663-0",
    "reference": "FB-CS-001",
    "title": "Meta Community Standards",
    "summary": "Comprehensive policy document outlining what is and isn't allowed on Facebook, Instagram, Messenger and Threads, including policies on safety, privacy, dignity, authenticity, and voice. Covers content removal, enforcement philosophy, and specific policies on harassment, nudity, sexual activity, and harmful content.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and threats to share intimate content",
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
          "Content involves adult sexual exploitation",
          "Non-consensual sharing of intimate imagery",
          "Threats to share intimate content"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment that degrades others and violates dignity",
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
          "Content constitutes bullying or harassment",
          "Content degrades others",
          "Content violates dignity of individuals"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects personal privacy and information",
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
          "Content violates personal privacy",
          "Unauthorized sharing of personal information",
          "Content shared without consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and impersonation",
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
          "Content involves misrepresentation of identity",
          "Account or content involves impersonation",
          "False representation of who they are"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Protects account security and prevents unauthorized access",
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
          "Unauthorized access to account",
          "Account security has been violated"
        ]
      },
      {
        "id": "meta-cs-third-party-ip",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property including unauthorized use of personal images",
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
          "Unauthorized use of copyrighted material",
          "Use of content without permission"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including coordinated harassment and fake accounts",
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
          "Behavior is inauthentic",
          "Coordinated harassment activities",
          "Use of fake accounts"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "DIGNITY",
        "summary": "Requires respect for dignity of others and prohibits harassment or degradation",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
          "Content fails to respect dignity of others",
          "Content harasses or degrades others",
          "Content violates equal dignity and rights"
        ]
      },
      {
        "id": "meta-cs-privacy-principle",
        "reference": "PRIVACY",
        "summary": "Protects personal privacy and information, ensuring freedom to choose how and when to share",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
          "Content violates personal privacy",
          "Content shared without user's choice or consent",
          "Content compromises freedom to control sharing"
        ]
      },
      {
        "id": "meta-cs-safety-principle",
        "reference": "SAFETY",
        "summary": "Removes content that threatens people and could intimidate, exclude or silence others",
        "quote": "We're committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people has the potential to intimidate, exclude or silence others and isn't allowed on our services.",
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
          "Content contributes to risk of harm to physical security",
          "Content threatens people",
          "Content has potential to intimidate, exclude or silence others"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758653007663-1",
    "reference": "FB-TOS-001",
    "title": "Meta Terms of Service",
    "summary": "Legal agreement governing user access and use of Facebook, Messenger, and other Meta products. Defines user rights, responsibilities, content policies, and enforcement mechanisms including account suspension and content removal.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [
      {
        "id": "fb-tos-content-violations",
        "reference": "Section 3.2",
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
        "summary": "Provides for removal or restriction of access to content that violates terms and policies, and suspension or disabling of accounts for violating conduct",
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
          "Content is in violation of Terms of Service provisions",
          "Conduct violates Terms of Service provisions"
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
          "Content or conduct violates user's rights",
          "Content or conduct violates intellectual property rights",
          "Content or conduct violates platform terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-deletion-timeframe",
        "reference": "Section 3.3.3",
        "summary": "Provides timeframes for content deletion, including up to 90 days for deletion process and additional 90 days for removal from backups",
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
            "description": "Up to 90 days to delete content after deletion process begins, with additional 90 days to remove from backups"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account deletion process initiated",
          "Content deletion request received",
          "Content sent to trash (automatic deletion after 30 days)"
        ]
      },
      {
        "id": "fb-tos-account-termination",
        "reference": "Section 4.2",
        "summary": "Provides for suspension or permanent disabling of accounts for clear, serious, or repeated breaches of Terms or Community Standards, including intellectual property infringement",
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
          "Clear, serious or repeated breach of Terms or Policies",
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
        "Review options may not be available for serious or repeated violations",
        "Users can request review of account suspension or termination decisions",
        "Contact Meta if account was disabled by mistake"
      ]
    }
  },
  {
    "id": "facebook-new-1758653007663-2",
    "reference": "FB-PP-001",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive policy explaining how Meta collects, uses, shares, retains and transfers user information. Includes user rights, data management tools, and privacy controls across Meta products.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [
      {
        "id": "meta-pp-safety-integrity",
        "reference": "Section 2 - Promoting safety, integrity and security",
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
          "Legal request from authorized third party",
          "Required by applicable law",
          "Necessary for safety, security and integrity purposes"
        ]
      },
      {
        "id": "meta-pp-mandatory-legal-processing",
        "reference": "Section 19 - Processing information when the law requires it",
        "summary": "Mandates disclosure of information when legally required through valid legal requests",
        "quote": "For processing information when the law requires it: Where we are under an obligation to disclose information such as, for example, if we receive a valid legal request for certain information such as a search warrant, we will access, preserve and/or share your information with regulators, law enforcement or others. The way in which the information will be processed depends on the specific circumstances.",
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
            "description": "Valid legal request such as search warrant",
            "example": "Court order, subpoena, or other legal document",
            "reason": "Required by law for mandatory disclosure"
          }
        ],
        "removalCriteria": [
          "Valid legal request received",
          "Legal obligation to disclose exists",
          "Information necessary to comply with legal requirement"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta with questions about the privacy policy or submit complaints regarding their information",
      "steps": [
        "Contact Meta online through the privacy support portal",
        "Submit questions, complaints or requests regarding your information",
        "Mail correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025"
      ]
    }
  },
  {
    "id": "facebook-new-1758653007663-3",
    "reference": "FB-BH-001",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy on Meta's approach to bullying and harassment, including definitions, enforcement actions, and special protections for minors and public figures. Covers mass harassment, intimidation, and coordinated attacks.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [
      {
        "id": "fb-bh-unwanted-contact",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
        "id": "fb-bh-sexual-activity-statements",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
        "id": "fb-bh-derogatory-sexualized-imagery",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits derogatory sexualized photoshop or drawings",
        "quote": "Derogatory sexualized photoshop or drawings",
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
          "Content contains derogatory sexualized photoshop",
          "Content contains derogatory sexualized drawings"
        ]
      },
      {
        "id": "fb-bh-derogatory-sexual-terms",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
        "id": "fb-bh-private-info-threats",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
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
        "id": "fb-bh-bullying-harassment-intent",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits calls for, or statements of intent to engage in, bullying and/or harassment",
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
          "Content states intent to engage in bullying or harassment"
        ]
      },
      {
        "id": "fb-bh-sexual-activity-claims",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in context of criminal allegations against adults",
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
          "Content is manipulated to highlight physical characteristics",
          "Content negatively draws attention to specific body parts",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "fb-bh-romantic-involvement-claims",
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
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
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
        "evidenceRequirements": [
          {
            "description": "Self-report by the target or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated imagery",
            "reason": "Required to confirm the imagery is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
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
            "example": "Report submitted by the targeted individual or their legal representative",
            "reason": "Required to confirm the content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-sexualizing-public-figure",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits content sexualizing a public figure when confirmed unwanted by the target",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from the target or authorized representative that content is unwanted",
            "example": "Statement from the public figure or their representative confirming the sexualizing content is unwanted",
            "reason": "Required to establish that the public figure does not consent to the sexualizing content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "fb-bh-sexually-harassing-contact",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits sexually harassing contact when confirmed unwanted by the recipient",
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
            "reason": "Required to establish that the contact is unwanted by the recipient"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content decisions through Facebook's Support Inbox system, with options to request another review if they disagree with the initial decision",
      "steps": [
        "Report content through the universal reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional context or information during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758653007663-4",
    "reference": "FB-NSFW-001",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Policy governing the display of nudity and sexual content on Meta platforms, including restrictions on non-consensual intimate imagery, sexual exploitation, and guidelines for educational or artistic content.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [
      {
        "id": "meta-nsfw-adult-nudity",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic and digital imagery of adult nudity including visible genitalia, anuses, buttocks, and female nipples except in specific contexts",
        "quote": "We do not allow the following content for all users: Adult Nudity - Photorealistic/digital imagery of adult nudity, if it depicts: Visible genitalia (including when obscured by pubic hair or digital overlays), Visible anuses and/or close-ups of visible buttocks, Visible female nipples, except in a breastfeeding, or act of protest context",
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
          "Content depicts visible genitalia including when obscured by pubic hair or digital overlays",
          "Content shows visible anuses and/or close-ups of visible buttocks",
          "Content displays visible female nipples except in breastfeeding or act of protest context"
        ]
      },
      {
        "id": "meta-nsfw-voyeuristic-content",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic digital videos that focus on intimate body parts recorded without the awareness of the person depicted",
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
          "Content was recorded without the awareness of the person depicted"
        ]
      },
      {
        "id": "meta-nsfw-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery of adult sexual activity including explicit and implicit sexual acts",
        "quote": "We do not allow the following content for all users: Adult Sexual Activity - Photorealistic/ digital imagery of adult sexual activity, including: Explicit sexual activity or stimulation, Implicit sexual activity or stimulation, Other sexual activity or stimulation",
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
          "Content displays other sexual activity including erections or presence of by-products of sexual activity"
        ]
      },
      {
        "id": "meta-nsfw-ai-generated",
        "reference": "Policy Rationale",
        "summary": "Prohibits AI or computer-generated images of nudity and sexual activity regardless of whether they look photorealistic",
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
          "Content is AI or computer-generated imagery of nudity",
          "Content is AI or computer-generated imagery of sexual activity",
          "Content appears photorealistic but is digitally created"
        ]
      },
      {
        "id": "meta-nsfw-non-consensual-context",
        "reference": "Policy Rationale",
        "summary": "Removes sexual imagery by default to prevent sharing of non-consensual content",
        "quote": "We default to removing sexual imagery to prevent the sharing of non-consensual or underage content.",
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
          "Content contains sexual imagery that may be non-consensual"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal content removal decisions through Facebook's Support Inbox system with options for review and final decision communication",
      "steps": [
        "User receives notification about content action via notifications",
        "Detailed review decision information is provided in the Support Inbox",
        "User can request another review if they disagree with the decision",
        "User can provide additional information during the appeal process",
        "Final response is sent to the Support Inbox after re-review of the content"
      ]
    }
  },
  {
    "id": "facebook-new-1758653007663-5",
    "reference": "FB-CR-001",
    "title": "Copyright Policy",
    "summary": "Meta's intellectual property policy covering copyright protection, DMCA compliance, reporting procedures, and appeal processes for copyright-related content removal.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [
      {
        "id": "meta-cr-001-copyright-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits posting content that infringes someone else's copyright, including photos and videos posted without permission",
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
            "description": "Only the copyright owner or their authorized representative may file a report",
            "example": "Complete copyright claim including identification of copyrighted work",
            "reason": "To verify ownership and establish legitimate claim to the content"
          },
          {
            "description": "Identification of the specific content that infringes copyright",
            "example": "URL or location of the infringing content on the platform",
            "reason": "To locate and assess the allegedly infringing material"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was not created by the person posting it",
          "Content was posted without permission from the copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-cr-002-photo-copyright",
        "reference": "Know if you own the copyright to something",
        "summary": "Establishes that photographers own copyright to photos they take, but appearing in a photo does not grant copyright ownership",
        "quote": "In general, the person who creates an original work owns the copyright. For example, if you create a painting, you likely own the copyright for that painting. Similarly, if you take a photo, you likely own the copyright for that photo. If you appear in a photo or video, that doesn't necessarily mean you have a copyright in that photo or video.",
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
            "description": "Evidence of being the original creator/photographer",
            "example": "Proof of taking the original photograph",
            "reason": "To establish copyright ownership of the image"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted photos without permission from the photographer",
          "Person posting is not the original creator of the visual content"
        ]
      },
      {
        "id": "meta-cr-003-no-permission-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits using someone else's copyrighted work without permission, regardless of intent, credit given, or modifications made",
        "quote": "It's possible to infringe someone else's copyright, even if you don't intend to do so. In most cases, you shouldn't use someone else's copyrighted work if you don't have permission. Keep in mind that your use of someone else's content may infringe their copyright, even if you: Gave credit to the copyright owner, Included a disclaimer that you don't intend to infringe copyright, Think that the use is a fair use, Didn't intend to profit from it, Legally bought or downloaded the content, Modified the work or added your own original material to it, Found the content available on the internet, Recorded the content onto your own recording device, Saw that others have posted the same content as well",
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
            "description": "Evidence of copyright ownership",
            "example": "Proof of creating or owning the original content",
            "reason": "To establish legitimate copyright claim"
          }
        ],
        "removalCriteria": [
          "Use of copyrighted content without permission",
          "Posting content created by someone else",
          "Using copyrighted material regardless of giving credit",
          "Using copyrighted material regardless of disclaimers",
          "Using copyrighted material regardless of modifications made",
          "Using copyrighted material found on the internet without permission"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following up with the rights owner directly or submitting a DMCA counter-notification if applicable",
      "steps": [
        "Receive notification from Meta with details of the removal and rights owner information",
        "Contact the rights owner directly to try to resolve the issue",
        "If content was removed under DMCA, file a DMCA counter-notification following instructions provided",
        "Submit appeal through the process outlined in the removal notification message"
      ]
    }
  },
  {
    "id": "facebook-new-1758653007663-6",
    "reference": "FB-APPEAL-001",
    "title": "Content Appeals Process",
    "summary": "Policy and procedures for appealing content moderation decisions, including timelines, eligibility criteria, and the review process for restored content.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [],
    "appealProcess": {
      "url": "https://transparency.meta.com/data/community-standards-enforcement/",
      "summary": "Meta provides an appeals process for content removed for policy violations. Users can request another review when they disagree with a removal decision. The content undergoes multiple levels of human review during the appeal process.",
      "steps": [
        "Receive notification that content has been removed or covered with a warning",
        "Choose to disagree with the decision and request another review",
        "Content is resubmitted for another review (content remains hidden during review)",
        "If first reviewer accepts original decision, content remains removed",
        "If first reviewer disagrees with initial removal, content goes to another reviewer",
        "Second reviewer's decision determines final outcome"
      ]
    }
  },
  {
    "id": "facebook-new-1758653007663-7",
    "reference": "FB-NCII-001",
    "title": "Non-Consensual Intimate Images Initiative",
    "summary": "Meta's comprehensive approach to combating non-consensual intimate imagery, including proactive detection tools, StopNCII.org partnership, and victim support resources.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-23T18:43:27.663Z",
    "policies": [
      {
        "id": "fb-ncii-001",
        "reference": "FB-NCII-001",
        "summary": "Prohibits non-consensual sharing of intimate images on Meta platforms",
        "quote": "We do not allow this content on our apps",
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
          "Content consists of intimate images shared without consent"
        ]
      },
      {
        "id": "fb-ncii-002",
        "reference": "FB-NCII-001",
        "summary": "Provides proactive detection and removal of intimate images through hash-matching technology",
        "quote": "For years, we've been using photo- and video-matching technology to remove intimate images shared without consent, encouraging people who use our services to report this type of behavior or content",
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
          "Images match hash values of previously reported non-consensual intimate content",
          "Content is reported as intimate images shared without consent"
        ]
      },
      {
        "id": "fb-ncii-003",
        "reference": "FB-NCII-001",
        "summary": "Enables proactive prevention of intimate image sharing through StopNCII.org platform integration",
        "quote": "When someone is concerned their intimate images have been posted or might be posted to online platforms like Facebook or Instagram, they can create a case through StopNCII.org to proactively detect them. The tool features hash-generating technology that assigns a unique hash value (a numerical code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
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
        "evidenceRequirements": [
          {
            "description": "User must create a case through StopNCII.org with their intimate images",
            "example": "Upload images to StopNCII.org to generate hash values",
            "reason": "To create secure digital fingerprints for proactive detection across participating platforms"
          }
        ],
        "removalCriteria": [
          "Images match hash values generated through StopNCII.org system",
          "Content is identified as intimate images that may be shared without consent"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
