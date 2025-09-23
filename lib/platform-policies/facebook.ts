import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "facebook-new-1758653384549-0",
    "reference": "FB-CS-001",
    "title": "Community Standards",
    "summary": "Facebook's comprehensive community guidelines that outline what is and isn't allowed on Facebook, Instagram, Messenger and Threads, covering safety, privacy, dignity, authenticity and voice principles.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
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
          "Content constitutes bullying or harassment",
          "Content degrades or targets individuals",
          "Content violates dignity of others"
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
          "Deceptive identity practices"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including impersonation and misrepresentation",
        "quote": "Inauthentic Behavior",
        "contentTypes": [
          "personal",
          "private",
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
          "Content involves inauthentic behavior",
          "Impersonation of others",
          "Misrepresentation through fake accounts"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Protects account integrity and prevents unauthorized access to user accounts",
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
          "Content posted through compromised accounts",
          "Unauthorized account access",
          "Account security violations"
        ]
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Prohibits cybersecurity violations including unauthorized access to accounts and systems",
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
          "Content involves cybersecurity violations",
          "Unauthorized system or account access",
          "Hacking or security breaches"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property rights including unauthorized use of personal images",
        "quote": "Third-Party Intellectual Property Infringement",
        "contentTypes": [
          "personal",
          "intimate",
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
          "Content infringes intellectual property rights",
          "Unauthorized use of copyrighted material",
          "Violation of image rights"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "Dignity",
        "summary": "Requires respect for the dignity of others and prohibits harassment or degradation",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content fails to respect dignity of others",
          "Content harasses or degrades individuals",
          "Content violates equal dignity principles"
        ]
      },
      {
        "id": "meta-cs-safety-principle",
        "reference": "Safety",
        "summary": "Prohibits content that threatens people or could contribute to physical security risks",
        "quote": "We're committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people has the potential to intimidate, exclude or silence others and isn't allowed on our services.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
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
          "Content threatens individuals",
          "Content contributes to risk of physical harm",
          "Content intimidates, excludes or silences others"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758653384549-1",
    "reference": "FB-TOS-001",
    "title": "Meta Terms of Service",
    "summary": "The main terms of service governing use of Facebook, Messenger, and other Meta products, establishing the legal framework for user agreements and platform policies.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
    "policies": [
      {
        "id": "fb-tos-community-standards-violation",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that violates Community Standards, which include policies against non-consensual intimate imagery, harassment, and privacy violations",
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
          "Content violates Community Standards",
          "Content violates other applicable terms and policies"
        ]
      },
      {
        "id": "fb-tos-unlawful-content",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing unlawful, misleading, discriminatory or fraudulent content",
        "quote": "That is unlawful, misleading, discriminatory or fraudulent (or assists someone else in using our Products in such a way).",
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
          "Content is unlawful",
          "Content is misleading",
          "Content is discriminatory",
          "Content is fraudulent"
        ]
      },
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that you do not own or have necessary rights to share",
        "quote": "That you do not own or have the necessary rights to share.",
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
          "User does not own the content",
          "User does not have necessary rights to share the content"
        ]
      },
      {
        "id": "fb-tos-intellectual-property-violation",
        "reference": "Section 3.2.1",
        "summary": "Prohibits content that infringes or violates someone else's intellectual property rights",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
          "Content infringes intellectual property rights",
          "Content violates copyright",
          "Content violates trademark rights"
        ]
      },
      {
        "id": "fb-tos-content-removal-authority",
        "reference": "Section 3.2",
        "summary": "Platform can remove or restrict access to content that violates these provisions",
        "quote": "We can remove or restrict access to content that is in violation of these provisions.",
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
          "Content violates Terms of Service provisions"
        ]
      },
      {
        "id": "fb-tos-account-suspension",
        "reference": "Section 3.2",
        "summary": "Platform can suspend or disable accounts for conduct that violates these provisions",
        "quote": "We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2.",
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
          "User conduct violates Terms of Service provisions"
        ]
      },
      {
        "id": "fb-tos-reporting-violations",
        "reference": "Section 3.2",
        "summary": "Platform encourages reporting content or conduct that violates rights or terms and policies",
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
          "Content violates user rights",
          "Content violates intellectual property rights",
          "Content violates platform terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-deletion-90-days",
        "reference": "Section 3.3.3",
        "summary": "Content deletion process takes up to 90 days after deletion request, with additional 90 days for backup removal",
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
            "description": "Up to 90 days to delete content, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content deletion request received",
          "Account deletion process initiated"
        ]
      },
      {
        "id": "fb-tos-permanent-account-disable",
        "reference": "Section 4.2",
        "summary": "Platform may permanently disable accounts for clear, serious or repeated breaches of Terms or Community Standards",
        "quote": "If we determine, in our discretion, that you have clearly, seriously or repeatedly breached our Terms or Policies, including in particular the Community Standards, we may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account.",
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
          "Clear breach of Terms or Policies",
          "Serious breach of Terms or Policies",
          "Repeated breach of Terms or Policies",
          "Violation of Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Platform provides options to request review of content removal or account actions, unless doing so may expose the platform or others to legal liability, harm the community, or compromise system integrity",
      "steps": [
        "Platform will notify users of content removal and explain review options",
        "Users can request another review of removed content",
        "Users can request review of account suspension or termination decisions",
        "Review may not be available if it exposes platform to legal liability, harms community, or compromises system integrity"
      ]
    }
  },
  {
    "id": "facebook-new-1758653384549-2",
    "reference": "FB-PP-001",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive privacy policy explaining how Meta collects, uses, shares, retains and transfers information across Facebook and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
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
          "Content threatens user safety, security or well-being",
          "Content is reported by users"
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
        "quote": "Sharing information with others, including law enforcement and to respond to legal requests. The categories of information we access, preserve, use and share depend on the specific circumstances. For example, responses to legal requests where not compelled by law will typically include limited information (such as contact details and login information). However, the information we process will depend on the purposes, which could include the following: In response to legal requests from third parties such as civil litigants, law enforcement and other government authorities. To comply with applicable law or legitimate legal purposes. To promote the safety, security and integrity of Meta Companies, Meta Products, users, employees, property and the public.",
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
          "Necessary for safety, security and integrity purposes"
        ]
      },
      {
        "id": "meta-pp-account-deletion",
        "reference": "Section 6 - Delete your information or account",
        "summary": "Provides users ability to delete their information and accounts",
        "quote": "You can learn more about how privacy works on Facebook and on Instagram, and in the Facebook Help Center. If you have questions about this policy, you can contact us as described below. You can contact us online or by mail. You can also manage your information by visiting the settings of the Products you use. Delete your information or account.",
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
          "User requests account or information deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions about privacy policy or to exercise their rights",
      "steps": [
        "Contact Meta online through the support portal",
        "Alternatively, contact by mail at Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Users may also contact their local Data Protection Authority (DPA) directly depending on jurisdiction"
      ]
    }
  },
  {
    "id": "facebook-new-1758653384549-3",
    "reference": "FB-BH-001",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy on Facebook's approach to bullying and harassment, including heightened protections for minors and specific provisions for different types of harmful content.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
    "policies": [
      {
        "id": "fb-bh-unwanted-contact",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation",
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
          "Content attacks individuals using derogatory terms related to sexual activity"
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
          "Content threatens to release private phone numbers",
          "Content threatens to release residential addresses",
          "Content threatens to release email addresses",
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
          "Content states intent to engage in bullying or harassment"
        ]
      },
      {
        "id": "fb-bh-degrading-bodily-functions",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits content that degrades or expresses disgust toward individuals depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
        "quote": "Content that degrades or expresses disgust toward individuals who are depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
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
          "Content degrades individuals depicted in bodily functions",
          "Content expresses disgust toward individuals depicted in bodily functions"
        ]
      },
      {
        "id": "fb-bh-sexual-activity-claims",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
        "id": "fb-bh-manipulated-physical-features",
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
          "Content negatively draws attention to specific physical features"
        ]
      },
      {
        "id": "fb-bh-physical-appearance-ranking",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content that ranks individuals based on physical appearance or character traits",
        "quote": "Content that ranks them based on physical appearance or character traits.",
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
          "Content ranks individuals based on physical appearance",
          "Content ranks individuals based on character traits"
        ]
      },
      {
        "id": "fb-bh-physical-bullying-degradation",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content that degrades individuals who are depicted being physically bullied, except in fight-sport contexts",
        "quote": "Content that degrades individuals who are depicted being physically bullied (except in fight-sport contexts).",
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
          "Content degrades individuals depicted being physically bullied",
          "Content is not in fight-sport context"
        ]
      },
      {
        "id": "fb-bh-romantic-involvement-claims",
        "reference": "Tier 3: Additional protections",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity for private minors, private adults, and minor involuntary public figures",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
        "contentTypes": [
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
          "Target is private minor, private adult, or minor involuntary public figure"
        ]
      },
      {
        "id": "fb-bh-unwanted-manipulated-imagery",
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
            "example": "Report submitted by the person depicted in the manipulated imagery",
            "reason": "Required to confirm the imagery is unwanted"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content is self-reported as unwanted"
        ]
      },
      {
        "id": "fb-bh-unwanted-pages-groups-events",
        "reference": "Additional information required",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by target",
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
            "example": "Report submitted by the targeted individual or their authorized representative",
            "reason": "Required to confirm the content is unwanted targeting"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-unwanted-content-confirmation",
        "reference": "Additional information required",
        "summary": "Removes content when there is confirmation from the target that the content is unwanted, including when target is tagged",
        "quote": "Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target (for example: the target is tagged in the post or comment). We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Written confirmation that the targeted individual does not want the content posted",
            "reason": "Required to establish that the content violates the target's wishes"
          }
        ],
        "removalCriteria": [
          "Content directly targets an individual (e.g., through tagging)",
          "Confirmation received that content is unwanted",
          "Confirmation from target or authorized representative (alive or deceased)"
        ]
      },
      {
        "id": "fb-bh-public-figure-sexualization",
        "reference": "Additional information required",
        "summary": "Removes content sexualizing a public figure when confirmed unwanted by the target",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
        "evidenceRequirements": [
          {
            "description": "Confirmation from public figure or authorized representative that sexualizing content is unwanted",
            "example": "Written statement from public figure requesting removal of sexualizing content",
            "reason": "Required to establish public figure's objection to sexualizing content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "fb-bh-sexually-harassing-contact",
        "reference": "Additional information required",
        "summary": "Removes sexually harassing contact when confirmed unwanted by the recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
        "evidenceRequirements": [
          {
            "description": "Confirmation from recipient or authorized representative that contact is unwanted",
            "example": "Statement from recipient confirming the sexually harassing contact is unwanted",
            "reason": "Required to establish that the contact constitutes unwanted sexual harassment"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Confirmation received that contact is unwanted",
          "Confirmation from recipient or authorized representative"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content removal decisions through Facebook's Support Inbox system, with options for review and final decision communication",
      "steps": [
        "Report content violation or appeal removal decision",
        "Receive notification of review decision via notifications",
        "Access detailed review information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional context or information for appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758653384549-4",
    "reference": "FB-NSFW-001",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Policy governing adult nudity and sexual content on Facebook, including provisions for non-consensual intimate imagery and exceptions for educational, artistic, or awareness content.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
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
          "Content displays other forms of sexual activity or stimulation as defined in policy"
        ]
      },
      {
        "id": "meta-nsfw-ai-generated",
        "reference": "Policy Rationale",
        "summary": "Prohibits AI-generated or computer-generated images of nudity and sexual activity regardless of photorealistic appearance",
        "quote": "Under this policy, we remove real photographs and videos of nudity and sexual activity, AI- or computer-generated images of nudity and sexual activity, and digital imagery, regardless of whether it looks \"photorealistic\" (as in, it looks like a real person).",
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
          "Content is AI-generated or computer-generated imagery of nudity",
          "Content is AI-generated or computer-generated imagery of sexual activity",
          "Content is digital imagery of nudity or sexual activity regardless of photorealistic appearance"
        ]
      },
      {
        "id": "meta-nsfw-fetish-content",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic digital imagery and real world art depicting certain fetish activities",
        "quote": "Photorealistic/ digital imagery or real world art depicting fetish that involves the following: Acts that are likely to lead to the death of a person or animal, Dismemberment, Cannibalism, Feces, urine, spit, snot, menstruation or vomit, Bestiality, Incest, BDSM (bondage and discipline, domination and submission, sadism and masochism), only when sexual indicators are also present",
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
          "Content depicts fetish activities involving acts likely to lead to death",
          "Content shows dismemberment, cannibalism, or bodily fluids in sexual context",
          "Content displays bestiality or incest",
          "Content shows BDSM activities when sexual indicators are present"
        ]
      },
      {
        "id": "meta-nsfw-audio-content",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits extended audio of sexual activity",
        "quote": "Extended audio of sexual activity",
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
          "Content contains extended audio of sexual activity"
        ]
      },
      {
        "id": "meta-nsfw-age-restricted-nudity",
        "reference": "Age Restrictions",
        "summary": "Restricts certain nudity content to users 18 and older with sensitive content labels",
        "quote": "For the following content, we limit the ability to view the content to users, ages 18 and older and include a label so that people are aware the content may be sensitive: Digital imagery and real world art of explicit sexual activity or stimulation in a medical or health context, Photorealistic/ digital imagery and real world art of implicit or other sexual activity or stimulation in a medical or health context",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows explicit sexual activity in medical or health context",
          "Content depicts implicit sexual activity in medical or health context",
          "Content displays nudity in context of gender confirmation surgery"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal content removal decisions through Meta's review process, with notifications sent via Support Inbox and option for secondary review",
      "steps": [
        "User receives notification of content removal decision",
        "Detailed information provided in Support Inbox with link",
        "User can request another review if they believe decision was incorrect",
        "Meta conducts re-review of the content",
        "Final response sent to Support Inbox after re-review"
      ]
    }
  },
  {
    "id": "facebook-new-1758653384549-5",
    "reference": "FB-AID-001",
    "title": "Authentic Identity Representation Policy",
    "summary": "Policy requiring authentic identity representation on Facebook, preventing impersonation and identity misrepresentation while allowing diverse forms of identity expression.",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
    "policies": [
      {
        "id": "fb-aid-impersonation-images",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits impersonation of another person or entity by using their images, name, or likeness with the aim to deceive others",
        "quote": "Impersonate another person or entity by: Using their image(s), name, or likeness with the aim to deceive others",
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
          "Using another person's image(s), name, or likeness",
          "Intent to deceive others through impersonation"
        ]
      },
      {
        "id": "fb-aid-unauthorized-representation",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits speaking in the voice of another person or entity without authorization, including by creating unauthorized Pages or Profiles",
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
          "Creating unauthorized Pages or Profiles"
        ]
      },
      {
        "id": "fb-aid-identity-misrepresentation",
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
          "Intent to mislead or deceive others",
          "Intent to evade enforcement",
          "Intent to violate Community Standards",
          "Repeated or significant changes to identity details",
          "Misleading profile information",
          "Using stock imagery for deceptive purposes"
        ]
      },
      {
        "id": "fb-aid-false-information",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Restricts accounts that provide false date of birth or use names that are not authentic names used in everyday life",
        "quote": "On Facebook, we will seek further information before taking actions ranging from temporarily restricting to permanently disabling profiles or accounts if you: Provide a false date of birth; Use a name that is not the authentic name you go by in everyday life",
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
          "Providing a false date of birth",
          "Using a name that is not the authentic name used in everyday life"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request another review if they disagree with enforcement decisions. Appeals are submitted through the Support Inbox with options to provide additional information.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for another review",
        "Provide additional information if needed",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758653384549-6",
    "reference": "FB-CR-001",
    "title": "Copyright Policy",
    "summary": "Facebook's intellectual property policy covering copyright infringement, DMCA compliance, reporting procedures, and appeal processes for copyright-related content removal.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
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
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Only the copyright owner or their authorized representative may file a report",
            "example": "Proof of copyright ownership or authorization to act on behalf of the copyright owner",
            "reason": "To verify legitimate ownership and prevent fraudulent reports"
          },
          {
            "description": "Complete copyright claim information",
            "example": "Details of the copyrighted work and how it is being infringed",
            "reason": "To properly assess the validity of the copyright infringement claim"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was posted without permission from the copyright owner",
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
          "Must be the actual copyright owner or authorized representative to file a report"
        ]
      },
      {
        "id": "meta-cr-003-repeat-infringer",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeatedly posting content that infringes intellectual property rights and may result in account restrictions",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy.",
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
      },
      {
        "id": "meta-cr-004-fraudulent-reports",
        "reference": "Reporting copyright infringement",
        "summary": "Prohibits submitting misleading or fraudulent copyright infringement reports",
        "quote": "Please note that submitting a report of intellectual property infringement is a serious matter with potential legal consequences. Intentionally submitting misleading or otherwise fraudulent reports of copyright or trademark infringement may lead to Facebook taking action, including termination of your account.",
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
            "description": "Good faith belief that the content infringes copyright",
            "example": "Genuine assessment that your copyrighted work is being used without permission",
            "reason": "To prevent abuse of the reporting system and false claims"
          }
        ],
        "removalCriteria": [
          "Intentionally misleading or fraudulent reports",
          "Bad faith reporting of copyright infringement"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following up with the rights owner directly or submitting a DMCA counter-notification if applicable",
      "steps": [
        "Receive notification from Meta with details of the removal and rights owner information",
        "Follow up with the rights owner directly to try to resolve the issue",
        "Submit an appeal through the instructions provided in Meta's notification message",
        "For DMCA cases, file a DMCA counter-notification following provided instructions",
        "Group admins are notified of removals but only the original poster can submit appeals"
      ]
    }
  },
  {
    "id": "facebook-new-1758653384549-7",
    "reference": "FB-APP-001",
    "title": "Appeals and Oversight Process",
    "summary": "Information on how users can appeal content decisions to the Oversight Board, including procedures for challenging takedown decisions and counter-notifications.",
    "url": "https://transparency.meta.com/oversight/appealing-to-oversight-board/",
    "accessTimestamp": "2025-09-23T18:49:44.549Z",
    "policies": [
      {
        "id": "fb-app-001-content-takedown",
        "reference": "What you can appeal",
        "summary": "Allows appeals for content that has been taken down from Facebook, Instagram, or Threads",
        "quote": "Most content you posted on Facebook, Instagram, or Threads that has been taken down.",
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
          "Content must have been posted by the user themselves",
          "Content must have been taken down by Meta",
          "User must have completed Meta's internal appeals process"
        ]
      },
      {
        "id": "fb-app-001-content-left-up",
        "reference": "What you can appeal",
        "summary": "Allows appeals for content posted by others that remains on Facebook, Instagram, or Threads",
        "quote": "Most content posted by another person that has been left up on Facebook, Instagram, or Threads.",
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
          "Content must have been posted by another person",
          "Content must have been left up after reporting",
          "User must have completed Meta's internal appeals process"
        ]
      },
      {
        "id": "fb-app-001-eligible-content-types",
        "reference": "Types of content eligible for review",
        "summary": "Specifies content types eligible for Oversight Board review including posts, photos, videos, comments, and shares",
        "quote": "Here are some types of content eligible for the board to review: Posts/statuses. Photos. Videos. Comments. Shares.",
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
          "Content must be in the form of posts/statuses, photos, videos, comments, or shares"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://oversightboard.com",
      "summary": "Six-step process to appeal Meta's content decisions to the independent Oversight Board after exhausting Meta's internal appeals process",
      "steps": [
        "Obtain an Oversight Board reference number by completing Meta's appeals process and receiving a final content decision",
        "Log in to Oversightboard.com and navigate to Start an Appeal using Facebook, Instagram, or Threads credentials",
        "Enter the reference number to verify post eligibility and establish system links",
        "Provide consent including agreeing to Terms of Service, permission to process special data, and optional consent for public decision details",
        "Provide context explaining why you posted the content, why you're appealing, and how you think Meta got the decision wrong",
        "Review all information including consents provided and submit the case, with ability to check status and withdraw consents later"
      ]
    }
  }
],
};
