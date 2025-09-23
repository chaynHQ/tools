import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "facebook-new-1758653625651-0",
    "reference": "FB-CS-001",
    "title": "Community Standards",
    "summary": "Comprehensive policy document outlining what is and isn't allowed on Facebook, Instagram, Messenger and Threads, covering safety, privacy, dignity, authenticity, and voice principles",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
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
        "summary": "Prohibits bullying and harassment that degrades others and violates their dignity",
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
          "Content constitutes bullying behavior",
          "Content harasses or degrades others",
          "Content violates dignity of individuals"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects personal privacy and information including image privacy rights",
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
          "Violation of image privacy rights"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and requires authentic representation of who users are",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content misrepresents user identity",
          "Inauthentic representation of who someone is",
          "Misrepresentation of activities or actions"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior that misrepresents identity or activities on the platform",
        "quote": "Inauthentic Behavior",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Behavior is inauthentic",
          "Misrepresentation through fake accounts or activities"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Protects account integrity and prevents unauthorized access or compromise of user accounts",
        "quote": "Account Integrity",
        "contentTypes": [
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
          "Unauthorized access to user account",
          "Violation of account security"
        ]
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Addresses cybersecurity threats including unauthorized access and digital security violations",
        "quote": "Cybersecurity",
        "contentTypes": [
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
          "Content involves cybersecurity threats",
          "Unauthorized access to accounts or systems",
          "Digital security violations"
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
          "Unauthorized use of copyrighted material",
          "Violation of image rights"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "Dignity Principle",
        "summary": "Protects human dignity and requires respectful treatment, prohibiting harassment and degradation of others",
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
          "Content violates human dignity",
          "Content harasses or degrades others",
          "Content fails to respect dignity and rights of individuals"
        ]
      },
      {
        "id": "meta-cs-safety-principle",
        "reference": "Safety Principle",
        "summary": "Removes content that could contribute to risk of harm to physical security and prohibits threatening content",
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
          "Content contributes to risk of physical harm",
          "Content threatens people",
          "Content has potential to intimidate, exclude or silence others"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758653625651-1",
    "reference": "FB-TOS-001",
    "title": "Meta Terms of Service",
    "summary": "Legal agreement governing use of Facebook, Messenger, and other Meta products, including content licensing, user responsibilities, and enforcement procedures",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
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
          "Content involves distributing or selling counterfeit or pirated goods"
        ]
      },
      {
        "id": "fb-tos-content-removal-authority",
        "reference": "Section 3.2",
        "summary": "Provides Meta authority to remove or restrict access to content that violates their provisions and suspend or disable accounts for violating conduct",
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
          "User conduct violates Terms of Service provisions"
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
        "id": "fb-tos-content-deletion-timeframe",
        "reference": "Section 3.3.3",
        "summary": "Specifies content deletion timeframes of up to 90 days after deletion process begins, with additional 90 days for backup removal",
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
          "User requests content deletion",
          "Account deletion process is initiated"
        ]
      },
      {
        "id": "fb-tos-account-termination",
        "reference": "Section 4.2",
        "summary": "Provides authority to suspend or permanently disable accounts for clear, serious or repeated breaches of Terms or Community Standards, including intellectual property infringement",
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
      "summary": "Meta provides notification of content removal with explanation of options to request another review, unless violations are serious/repeated or may expose Meta or others to legal liability",
      "steps": [
        "Meta removes content that violates Community Standards",
        "Meta notifies user of removal and explains options for review request",
        "User can request another review (unless violations are serious/repeated)",
        "For account suspension/termination, Meta explains options to request a review unless prohibited for legal/technical reasons"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-2",
    "reference": "FB-PP-001",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive privacy policy explaining how Meta collects, uses, shares, retains and transfers information across Facebook and other Meta products",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
    "policies": [
      {
        "id": "meta-pp-safety-integrity",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and enables content removal through review processes",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others",
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
          "Content involves harmful or unlawful behavior",
          "Content threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Provides framework for responding to legal requests and removing content to prevent harm",
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
        "id": "meta-pp-content-sharing-control",
        "reference": "Section 3 - Information Sharing on Meta Products",
        "summary": "Establishes user control over content sharing and privacy settings",
        "quote": "On Meta Products. Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content. You can choose to connect with integrated partners who use our Products. If you do, these integrated partners receive information about you and your activity.",
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
          "Content shared without user consent",
          "Privacy settings violated",
          "Unauthorized sharing by others"
        ]
      },
      {
        "id": "meta-pp-account-security",
        "reference": "Section 2 - Account Verification and Security",
        "summary": "Prohibits unauthorized account access and requires account verification",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account verification fails",
          "Suspicious account activity detected",
          "Unauthorized account access"
        ]
      },
      {
        "id": "meta-pp-user-rights-management",
        "reference": "Section 6 - Managing and Deleting Information",
        "summary": "Provides users rights to manage, download and delete their information",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests information management",
          "User exercises deletion rights",
          "Privacy rights under applicable laws"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail for privacy-related questions, complaints or requests regarding their information",
      "steps": [
        "Contact Meta online through the help center",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Contact local Data Protection Authority (DPA) directly depending on jurisdiction"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-3",
    "reference": "FB-BH-001",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy on preventing bullying and harassment across Meta platforms, with heightened protections for minors and specific provisions for different types of harmful content",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
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
        "id": "fb-bh-sexual-statements",
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
        "id": "fb-bh-sexual-activity-attacks",
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
        "id": "fb-bh-bullying-calls",
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
        "id": "fb-bh-bodily-function-degradation",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits content that degrades or expresses disgust toward individuals depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
        "quote": "Content that degrades or expresses disgust toward individuals who are depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
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
          "Content degrades individuals depicted in bodily functions",
          "Content expresses disgust toward individuals depicted in bodily functions"
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
          "Content sexualizes an adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "fb-bh-manipulated-imagery",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
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
          "Content is manipulated to highlight physical characteristics",
          "Content negatively draws attention to specific physical features",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "fb-bh-physical-appearance-ranking",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content that ranks individuals based on physical appearance or character traits for minors, private adults and limited scope public figures",
        "quote": "Content that ranks them based on physical appearance or character traits.",
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
          "Content ranks individuals based on physical appearance",
          "Content ranks individuals based on character traits",
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
        "quote": "Unwanted manipulated imagery.",
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
            "description": "Self-report by the target or authorized representative",
            "example": "Report submitted by the individual depicted in the manipulated imagery",
            "reason": "Required to confirm the imagery is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Target is a private minor, private adult, or minor involuntary public figure",
          "Content is self-reported as unwanted"
        ]
      },
      {
        "id": "fb-bh-unwanted-pages-groups-events",
        "reference": "Additional information required",
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
            "example": "Report submitted by the individual being targeted or their authorized representative",
            "reason": "Required to confirm the content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported by the target or authorized representative as unwanted"
        ]
      },
      {
        "id": "fb-bh-sexualizing-public-figure",
        "reference": "Additional information required",
        "summary": "Prohibits content sexualizing a public figure when confirmed as unwanted by the target",
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
            "reason": "Required to confirm the sexualizing content is unwanted by the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "fb-bh-sexual-harassment-contact",
        "reference": "Additional information required",
        "summary": "Prohibits initiation of sexually harassing contact when confirmed as unwanted by the recipient",
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
            "reason": "Required to confirm the contact is unwanted by the recipient"
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
      "summary": "Users can appeal content decisions through Facebook's Support Inbox system with multiple review opportunities",
      "steps": [
        "Report the content through Facebook's reporting system",
        "Receive notification of review decision via notifications and Support Inbox",
        "If disagreeing with decision, request another review through the appeal option",
        "Provide additional information or context during the appeal process",
        "Receive final response after re-review in the Support Inbox",
        "For certain cases, may be eligible to appeal to the Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-4",
    "reference": "FB-NSFW-001",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Policy governing adult nudity and sexual content, including restrictions on non-consensual intimate imagery and provisions for educational/artistic content",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
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
          "Content displays visible female nipples except in breastfeeding or protest contexts"
        ]
      },
      {
        "id": "meta-nsfw-voyeuristic-content",
        "reference": "Adult Nudity",
        "summary": "Prohibits videos that focus on intimate body parts recorded without the awareness of the person depicted",
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
          "Content displays other forms of sexual activity or stimulation as defined in policy"
        ]
      },
      {
        "id": "meta-nsfw-ai-generated",
        "reference": "Policy Rationale",
        "summary": "Prohibits AI-generated and computer-generated images of nudity and sexual activity regardless of photorealistic appearance",
        "quote": "Under this policy, we remove real photographs and videos of nudity and sexual activity, AI- or computer-generated images of nudity and sexual activity, and digital imagery, regardless of whether it looks 'photorealistic' (as in, it looks like a real person).",
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
          "Content is AI-generated or computer-generated imagery of nudity",
          "Content is AI-generated or computer-generated imagery of sexual activity",
          "Content is digital imagery of nudity or sexual activity regardless of photorealistic appearance"
        ]
      },
      {
        "id": "meta-nsfw-age-restricted-nudity",
        "reference": "For the following content, we limit the ability to view the content to users, ages 18 and older",
        "summary": "Restricts access to certain nudity content to users 18 and older including near nudity and content where intimate body parts are the focus",
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
          "Content depicts near nudity covered only by digital overlay or opaque object",
          "Content shows nudity obscured by see-through clothing",
          "Content focuses on intimate body parts as the primary subject"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal content removal decisions through Facebook's Support Inbox system with multiple review opportunities",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional context or information for appeal review",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-5",
    "reference": "FB-AI-001",
    "title": "Authentic Identity Representation Policy",
    "summary": "Policy requiring authentic identity representation and preventing impersonation, including measures against fake accounts and identity misrepresentation",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
    "policies": [
      {
        "id": "fb-ai-001-impersonation-images",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits impersonation of another person or entity by using their images, name, or likeness with the aim to deceive others",
        "quote": "We do not allow the use of our services and will restrict or disable Facebook, Instagram, and Threads accounts or other Facebook entities (such as Pages, groups) that: Impersonate another person or entity by: Using their image(s), name, or likeness with the aim to deceive others",
        "contentTypes": [
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Using another person's images without authorization",
          "Using another person's name or likeness to deceive others",
          "Creating accounts or profiles that impersonate another person or entity"
        ]
      },
      {
        "id": "fb-ai-001-unauthorized-representation",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits speaking in the voice of another person or entity without authorization, including creating Pages or Profiles to represent someone else",
        "quote": "We do not allow the use of our services and will restrict or disable Facebook, Instagram, and Threads accounts or other Facebook entities (such as Pages, groups) that: Impersonate another person or entity by: Speaking in the voice of another person or entity for whom the user is not authorized to do so (e.g. by creating a Page or Profile)",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Creating Pages or Profiles to represent another person without authorization",
          "Speaking or posting content as if representing another person or entity",
          "Lack of authorization to represent the person or entity"
        ]
      },
      {
        "id": "fb-ai-001-identity-misrepresentation",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits identity misrepresentation used to mislead or deceive others, evade enforcement, or violate Community Standards",
        "quote": "We do not allow the use of our services and will restrict or disable Facebook, Instagram, and Threads accounts or other Facebook entities (such as Pages, groups) that: Engage in identity misrepresentation to mislead or deceive others, evade enforcement, or violate our Community Standards. We consider a number of factors when assessing misleading identity misrepresentation, such as: Repeated or significant changes to identity details, such as name or age; Misleading profile information, such as bio details and profile location; Using stock imagery",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Repeated or significant changes to identity details such as name or age",
          "Misleading profile information including bio details and profile location",
          "Using stock imagery to misrepresent identity",
          "Identity misrepresentation used to mislead or deceive others",
          "Identity misrepresentation used to evade enforcement",
          "Identity misrepresentation used to violate Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can request another review if they disagree with enforcement decisions through the Support Inbox, with final responses provided after re-review",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Provide additional information to support the appeal",
        "Receive final response after content re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-6",
    "reference": "FB-CR-001",
    "title": "Copyright Policy",
    "summary": "Policy governing copyright infringement reporting, DMCA compliance, and intellectual property protection across Meta platforms",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
    "policies": [
      {
        "id": "meta-cr-001-copyright-protection",
        "reference": "Copyright and posting content on Meta platforms",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights including copyrighted photos and videos",
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
            "example": "Proof of copyright ownership or authorization to represent the copyright owner",
            "reason": "To verify legitimate ownership of the copyrighted content"
          },
          {
            "description": "Complete copyright claim information",
            "example": "Details about the copyrighted work and how it's being infringed",
            "reason": "To provide sufficient information for Meta to evaluate the claim"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content posted without permission from copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-cr-002-copyright-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits using someone else's copyrighted work without permission, even without intent to infringe",
        "quote": "It's possible to infringe someone else's copyright, even if you don't intend to do so. In most cases, you shouldn't use someone else's copyrighted work if you don't have permission.",
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
          "Use of copyrighted work without permission",
          "Copying or distributing copyrighted content",
          "Creating new works based on copyrighted material without authorization"
        ]
      },
      {
        "id": "meta-cr-003-no-intent-defense",
        "reference": "Copyright infringement",
        "summary": "Prohibits copyright infringement regardless of credit given, disclaimers, profit intent, modifications, or widespread availability",
        "quote": "Keep in mind that your use of someone else's content may infringe their copyright, even if you: Gave credit to the copyright owner, Included a disclaimer that you don't intend to infringe copyright, Think that the use is a fair use, Didn't intend to profit from it, Legally bought or downloaded the content, Modified the work or added your own original material to it, Found the content available on the internet, Recorded the content onto your own recording device, Saw that others have posted the same content as well",
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
          "Use of copyrighted content regardless of attribution",
          "Use of copyrighted content despite disclaimers",
          "Use of copyrighted content even if legally purchased",
          "Use of modified copyrighted content without permission",
          "Use of copyrighted content found online without permission"
        ]
      },
      {
        "id": "meta-cr-004-repeat-infringer",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeated posting of content that infringes intellectual property rights and may result in account disability or page removal",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Repeated posting of content that infringes intellectual property rights",
          "Multiple violations of copyright or trademark policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following instructions provided in removal notifications, including DMCA counter-notifications for copyright claims",
      "steps": [
        "Receive notification from Meta with details about removed content and rights owner information",
        "Follow appeal instructions provided in the removal notification message",
        "For copyright claims, submit a DMCA counter-notification if applicable",
        "Contact rights owner directly to try to resolve the issue",
        "Group admins are notified of removals but only the original poster can submit appeals"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-7",
    "reference": "FB-AP-001",
    "title": "Appeals and Counter-Notice Process",
    "summary": "Process for appealing content decisions and submitting counter-notices, including DMCA counter-notifications and general content appeals",
    "url": "https://www.facebook.com/help/contact/1653629651334864",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
    "policies": [
      {
        "id": "fb-ap-copyright-appeal",
        "reference": "Copyright Appeal Form",
        "summary": "Provides an appeals process for content removed due to copyright infringement complaints",
        "quote": "You should only use this form if we removed something you posted due to a copyright report and you believe the content should not have been removed.",
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
            "description": "Full name and surname of the appellant",
            "example": "John Smith",
            "reason": "Required for identity verification and processing the appeal"
          },
          {
            "description": "Valid email address",
            "example": "user@email.com",
            "reason": "Required for communication regarding the appeal status"
          },
          {
            "description": "URL or description of where the content appeared on Facebook",
            "example": "https://facebook.com/post/123456",
            "reason": "Required to locate and identify the specific content being appealed"
          },
          {
            "description": "Explanation of why the content should not have been removed",
            "example": "Written justification for why the removal was incorrect",
            "reason": "The rights holder who filed the complaint will be provided with this explanation in its entirety"
          },
          {
            "description": "Electronic signature matching full name",
            "example": "John Smith",
            "reason": "Required to confirm the authenticity of the appeal submission"
          },
          {
            "description": "Optional supporting attachment in JPG, GIF, PNG, TIFF or PDF format",
            "example": "Evidence document or image file",
            "reason": "To provide additional evidence supporting the appeal"
          }
        ],
        "removalCriteria": [
          "Content was removed due to a copyright infringement complaint",
          "User believes the content should not have been removed"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1653629651334864",
      "summary": "Facebook provides a copyright appeal form for users whose content was removed due to copyright reports. Users must access the form through a link sent to their account and provide detailed information including their identity, the content in question, and justification for why the removal was incorrect.",
      "steps": [
        "Access the form using the link sent to your Facebook account",
        "Confirm understanding and wish to continue with the appeal",
        "Provide contact information including full name and email address",
        "Provide URL or description of where the content appeared on Facebook",
        "Select the specific content you wish to appeal from the provided options",
        "If content is not visible, use checkbox to describe where content was located",
        "Explain why you believe the content should not have been removed",
        "Optionally attach supporting files in JPG, GIF, PNG, TIFF or PDF format",
        "Confirm that your content was removed due to copyright complaint and you believe it should not have been removed",
        "Provide electronic signature matching your full name",
        "Submit the form and await email with further instructions",
        "Follow the instructions in the email to complete the appeal submission"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-8",
    "reference": "FB-OB-001",
    "title": "Oversight Board Appeals Process",
    "summary": "Process for appealing Meta's content decisions to the independent Oversight Board for final review",
    "url": "https://transparency.meta.com/oversight/appealing-to-oversight-board/",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
    "policies": [
      {
        "id": "fb-ob-001-content-appeal",
        "reference": "What you can appeal",
        "summary": "Allows appeals for content that has been taken down or left up on Facebook, Instagram, or Threads",
        "quote": "Most content you posted on Facebook, Instagram, or Threads that has been taken down. Most content posted by another person that has been left up on Facebook, Instagram, or Threads.",
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
            "description": "Must have exhausted Meta's appeals process and received a final content decision",
            "example": "Reference number from Support Inbox on Facebook or Support Requests on Instagram",
            "reason": "Required to establish eligibility and link to Meta's case management system"
          }
        ],
        "removalCriteria": [
          "Content must be eligible for Oversight Board review",
          "Must have completed Meta's internal appeals process first"
        ]
      },
      {
        "id": "fb-ob-001-content-types",
        "reference": "Types of content eligible for review",
        "summary": "Covers posts, photos, videos, comments, and shares for Oversight Board appeals",
        "quote": "Posts/statuses. Photos. Videos. Comments. Shares.",
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
          "Content must be in the form of posts, photos, videos, comments, or shares",
          "Content must be eligible for Oversight Board review"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://oversightboard.com",
      "summary": "Six-step process to appeal Meta's content decisions to the Oversight Board after exhausting Meta's internal appeals process",
      "steps": [
        "Obtain an Oversight Board reference number by completing Meta's appeals process and receiving a final content decision",
        "Log in to Oversightboard.com and navigate to Start an Appeal using Facebook, Instagram, or Threads credentials",
        "Enter the reference number to verify post eligibility and establish system links",
        "Provide required consents including Terms of Service agreement and data processing permissions",
        "Provide context on the case including reasons for posting content and why Meta's decision was wrong",
        "Review all information and submit the case, with ability to check status and withdraw consents later"
      ]
    }
  },
  {
    "id": "facebook-new-1758653625651-9",
    "reference": "FB-USRPN-001",
    "title": "United States Regional Privacy Notice",
    "summary": "US-specific privacy notice supplementing the main privacy policy, detailing consumer privacy rights under US state laws",
    "url": "https://www.facebook.com/privacy/policies/uso/",
    "accessTimestamp": "2025-09-23T18:53:45.651Z",
    "policies": [],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can submit requests to exercise privacy rights including deletion of personal information through Meta's webform system, with identity verification required and option to use authorized agents.",
      "steps": [
        "Visit the webform at help.meta.com/support/privacy",
        "Submit request to exercise rights (deletion, correction, etc.)",
        "Provide identity verification if requested (may include government issued ID)",
        "For authorized agent requests, provide additional verification information",
        "Appeal consumer rights actions through the same webform if applicable"
      ]
    }
  }
],
};
