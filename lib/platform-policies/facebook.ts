import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "facebook-new-1758648752341-0",
    "reference": "FB-CS-001",
    "title": "Meta Community Standards",
    "summary": "Comprehensive policy document outlining what is and isn't allowed on Facebook, Instagram, Messenger and Threads. Covers safety, privacy, dignity, authenticity and voice principles with specific sections on harassment, adult content, violence, and content removal policies.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T17:32:32.342Z",
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
          "Content violates personal dignity"
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
          "Content violates personal privacy",
          "Unauthorized sharing of personal information",
          "Violation of image privacy rights"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresenting identity and requires authentic representation of who users are",
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
          "Inauthentic representation of identity or activities"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including impersonation and misrepresentation",
        "quote": "Inauthentic Behavior",
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
          "Content involves inauthentic behavior",
          "Impersonation of others",
          "Misrepresentation of identity"
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
          "Violations of account integrity"
        ]
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Addresses cybersecurity threats including unauthorized access and account compromise",
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
          "Content related to cybersecurity violations",
          "Unauthorized access to accounts or systems"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property rights including unauthorized use of personal images",
        "quote": "Third-Party Intellectual Property Infringement",
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
          "Content infringes intellectual property rights",
          "Unauthorized use of copyrighted material",
          "Violation of image rights"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "Dignity",
        "summary": "Protects human dignity and prohibits harassment or degradation of others",
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
          "Content harasses or degrades others",
          "Content violates human dignity",
          "Content disrespects individual rights"
        ]
      },
      {
        "id": "meta-cs-privacy-principle",
        "reference": "Privacy",
        "summary": "Protects personal privacy and information, giving people freedom to control how and when they share",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
        "removalCriteria": [
          "Content violates personal privacy",
          "Unauthorized sharing without consent",
          "Content shared without user's choice or control"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758648752341-1",
    "reference": "FB-TOS-001",
    "title": "Meta Terms of Service",
    "summary": "Legal agreement governing use of Facebook, Messenger, and other Meta products. Defines user rights, responsibilities, content licensing, and enforcement procedures including account suspension and content removal.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T17:32:32.342Z",
    "policies": [
      {
        "id": "fb-tos-content-violations",
        "reference": "Section 3.2",
        "summary": "Prohibits sharing content that violates these Terms, Community Standards, or other applicable policies",
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
          "Content violates Terms of Service",
          "Content violates Community Standards",
          "Content violates other applicable policies"
        ]
      },
      {
        "id": "fb-tos-unlawful-content",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that is unlawful, misleading, discriminatory or fraudulent",
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
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share",
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
          "User lacks necessary rights to share the content"
        ]
      },
      {
        "id": "fb-tos-ip-infringement",
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
          "Content violates trademark rights",
          "Content involves distribution of counterfeit goods"
        ]
      },
      {
        "id": "fb-tos-content-removal-authority",
        "reference": "Section 3.2",
        "summary": "Platform can remove or restrict access to content that violates these provisions",
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
          "Content violates Community Standards"
        ]
      },
      {
        "id": "fb-tos-content-deletion-process",
        "reference": "Section 3.3.3",
        "summary": "Content deletion process takes up to 90 days after deletion request or account deletion begins",
        "quote": "It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users.",
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
            "description": "Content deletion may take up to 90 days after deletion request"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content deletion request is received",
          "Account deletion process begins",
          "Content is sent to trash"
        ]
      },
      {
        "id": "fb-tos-reporting-violations",
        "reference": "Section 3.2",
        "summary": "Platform encourages users to report content or conduct that violates rights or terms and policies",
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
          "Content violates terms and policies"
        ]
      },
      {
        "id": "fb-tos-safety-security-measures",
        "reference": "Section 1.5",
        "summary": "Platform takes action against harmful conduct and content to maintain community safety",
        "quote": "If we learn of content or conduct like this, we may take appropriate action based on our assessment that may include - notifying you, offering help, removing content, removing or restricting access to certain features, disabling an account, or contacting law enforcement.",
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
          "Content involves harmful conduct",
          "Content poses safety risks to community",
          "Content involves misuse of platform"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review of content removal decisions unless they seriously or repeatedly violate Terms or if doing so may expose the platform or others to legal liability",
      "steps": [
        "Platform will notify users when content is removed for Community Standards violations",
        "Platform will explain options for requesting another review",
        "Review options may not be available for serious or repeated violations",
        "Review options may not be available if it would expose platform or others to legal liability"
      ]
    }
  },
  {
    "id": "facebook-new-1758648752341-2",
    "reference": "FB-PP-001",
    "title": "Meta Privacy Policy",
    "summary": "Explains how Meta collects, uses, shares, retains and transfers user information across Facebook and other Meta products. Covers data rights, privacy controls, and information sharing practices.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T17:32:32.342Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and allows for content removal when reported",
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
          "Content is reported by users",
          "Content threatens user safety, security or well-being"
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Valid legal request received",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "Section 4 - How do we share information with third parties",
        "summary": "Prohibits selling user information and requires partners to follow rules about information use and disclosure",
        "quote": "We don't sell any of your information to anyone, and we never will. We also require partners and other third parties to follow rules about how they can and cannot use and disclose the information we provide.",
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
          "Information cannot be sold",
          "Partners must follow disclosure rules"
        ]
      },
      {
        "id": "meta-pp-account-management",
        "reference": "Section 6 - How can you manage or delete your information",
        "summary": "Provides users tools to view, manage, download and delete their information and exercise privacy rights",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws.",
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
          "User requests to delete information",
          "User exercises privacy rights under applicable laws"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information, and may also contact Data Protection Authorities in some jurisdictions",
      "steps": [
        "Contact Meta online through the support portal",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, contact local Data Protection Authority directly"
      ]
    }
  },
  {
    "id": "facebook-new-1758648752341-3",
    "reference": "FB-BH-001",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy on preventing bullying and harassment across Meta platforms. Covers protection for private individuals vs public figures, mass harassment, and enforcement procedures with heightened protections for minors.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T17:32:32.342Z",
    "policies": [
      {
        "id": "fb-bh-unwanted-contact",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals without prior solicitation",
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
          "Contact is directed at large number of individuals with no prior solicitation"
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
          "Content threatens to release private phone number",
          "Content threatens to release residential address",
          "Content threatens to release email address",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "fb-bh-bullying-harassment-calls",
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
          "Content calls for bullying and/or harassment",
          "Content contains statements of intent to engage in bullying and/or harassment"
        ]
      },
      {
        "id": "fb-bh-degrading-bodily-functions",
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
          "Target is minor, private adult, or limited scope public figure",
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
          "Target is minor, private adult, or limited scope public figure"
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
          "Content is manipulated to negatively highlight physical characteristics",
          "Target is minor, private adult, or limited scope public figure"
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
          "Content is not in fight-sport context",
          "Target is minor, private adult, or limited scope public figure"
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
            "example": "Report submitted by the targeted individual or their representative",
            "reason": "Required to confirm the targeting is unwanted"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-unwanted-targeted-content",
        "reference": "Additional information required",
        "summary": "Prohibits content where the target is directly tagged or targeted, when confirmed unwanted by target or authorized representative",
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
            "example": "Written confirmation that the tagged or targeted content is unwanted",
            "reason": "Required to establish that the direct targeting is unwanted"
          }
        ],
        "removalCriteria": [
          "Target is directly tagged in post or comment",
          "Content indicates poster is directly targeting the target",
          "Confirmation received that content is unwanted"
        ]
      },
      {
        "id": "fb-bh-public-figure-sexualization",
        "reference": "Additional information required",
        "summary": "Prohibits content sexualizing a public figure when confirmed unwanted by target or authorized representative",
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
            "description": "Confirmation from target or authorized representative that sexualizing content is unwanted",
            "example": "Written confirmation from public figure that sexualizing content is unwanted",
            "reason": "Required for public figures to establish the content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received that content is unwanted"
        ]
      },
      {
        "id": "fb-bh-sexually-harassing-contact",
        "reference": "Additional information required",
        "summary": "Prohibits initiation of sexually harassing contact when confirmed unwanted by recipient",
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
            "description": "Confirmation from recipient or authorized representative that contact is unwanted",
            "example": "Written confirmation that the sexually harassing contact is unwanted",
            "reason": "Required to establish that the contact is unwanted and sexually harassing"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Confirmation received that contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content decisions through the Support Inbox and request another review if they disagree with the initial decision",
      "steps": [
        "Report content through universal reporting option",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758648752341-4",
    "reference": "FB-AN-001",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Policy governing nudity and sexual content on Meta platforms. Addresses non-consensual intimate imagery, revenge porn, and sexual exploitation with specific enforcement procedures and exceptions for educational/artistic content.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T17:32:32.342Z",
    "policies": [
      {
        "id": "fb-an-001-adult-nudity",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic and digital imagery of adult nudity including visible intimate body parts, except in specific contexts like breastfeeding, protest, or medical situations",
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
          "Content depicts visible intimate body parts",
          "Content is photorealistic or digital imagery",
          "Content does not fall under allowed contexts (breastfeeding, protest, medical, educational)"
        ]
      },
      {
        "id": "fb-an-001-voyeuristic-content",
        "reference": "Adult Nudity",
        "summary": "Prohibits videos that focus on intimate body parts recorded without the awareness of the person depicted",
        "quote": "Photorealistic/ digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person(s) depicted in them",
        "contentTypes": [
          "intimate",
          "personal"
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
          "Content was recorded without the person's awareness",
          "Content is photorealistic or digital"
        ]
      },
      {
        "id": "fb-an-001-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery depicting explicit, implicit, or other sexual activity and stimulation",
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
          "Content depicts sexual activity or stimulation",
          "Content is photorealistic or digital imagery",
          "Content shows explicit, implicit, or other sexual activity"
        ]
      },
      {
        "id": "fb-an-001-fetish-content",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery depicting fetish content involving harmful acts",
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
          "Content depicts fetish involving harmful acts",
          "Content is photorealistic, digital imagery, or real world art",
          "Content involves acts likely to cause death, dismemberment, or other specified harmful activities"
        ]
      },
      {
        "id": "fb-an-001-age-restricted-nudity",
        "reference": "Age-Restricted Content",
        "summary": "Restricts access to certain nudity content to users 18 and older with warning labels for sensitive content",
        "quote": "For the following content, we limit the ability to view the content to users, ages 18 and older and include a label so that people are aware the content may be sensitive: Digital imagery and real world art of explicit sexual activity or stimulation in a medical or health context",
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
          "Content contains nudity or sexual activity",
          "Content does not qualify for complete removal but requires age restriction",
          "Content may be in medical, health, or artistic context"
        ]
      },
      {
        "id": "fb-an-001-non-consensual-prevention",
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
          "Content contains sexual imagery",
          "Content may be non-consensual",
          "Content may involve underage individuals"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal content removal decisions through Facebook's Support Inbox system with multiple review opportunities",
      "steps": [
        "User receives notification of content action",
        "User can request review through Support Inbox",
        "Meta reviews the appeal decision",
        "User receives final response in Support Inbox",
        "Additional appeal option available to Oversight Board for eligible cases"
      ]
    }
  },
  {
    "id": "facebook-new-1758648752341-5",
    "reference": "FB-CR-001",
    "title": "Copyright Policy",
    "summary": "Policy explaining copyright protections, DMCA compliance procedures, reporting mechanisms for copyright infringement, and counter-notification processes. Covers both Facebook and Instagram copyright enforcement.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T17:32:32.342Z",
    "policies": [
      {
        "id": "meta-cr-001",
        "reference": "Copyright and posting content on Meta platforms",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights, including personal photos and videos",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
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
            "description": "Complete copyright claim including identification of copyrighted work",
            "example": "URL to infringing content, description of original work, statement of ownership",
            "reason": "Required to process DMCA takedown requests and verify copyright ownership"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was not created by the person posting it",
          "Content was posted without permission from the copyright owner"
        ]
      },
      {
        "id": "meta-cr-002",
        "reference": "Copyright infringement",
        "summary": "Prohibits using someone else's copyrighted work without permission, including photos and videos taken by others",
        "quote": "It's possible to infringe someone else's copyright, even if you don't intend to do so. In most cases, you shouldn't use someone else's copyrighted work if you don't have permission.",
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
          "Use of someone else's copyrighted work without permission",
          "Posting content created by another person"
        ]
      },
      {
        "id": "meta-cr-003",
        "reference": "Your rights as a copyright owner",
        "summary": "Grants copyright owners the right to prevent others from copying or distributing their work without permission",
        "quote": "As a copyright owner, you have certain rights under the law. These include the right to stop others from copying or distributing your work, or from creating new works based on your work. Copyright infringement generally occurs when a person engages in one of these activities without the copyright owner's permission.",
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
          "Copying or distributing copyrighted work without permission",
          "Creating new works based on copyrighted material without authorization"
        ]
      },
      {
        "id": "meta-cr-004",
        "reference": "Reporting copyright infringement",
        "summary": "Provides mechanism for copyright owners to report unauthorized use of their content",
        "quote": "Only the copyright owner or their authorized representative may file a report of copyright infringement. If you believe something on Facebook or Instagram infringes someone else's copyright, you may want to let the rights owner know.",
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
            "description": "Must be the copyright owner or authorized representative",
            "example": "Proof of ownership or authorization to act on behalf of rights holder",
            "reason": "Only rights holders can file valid copyright infringement reports"
          }
        ],
        "removalCriteria": [
          "Valid copyright infringement report filed by rights owner or authorized representative"
        ]
      },
      {
        "id": "meta-cr-005",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeatedly posting content that infringes intellectual property rights and may result in account restrictions or removal",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy.",
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
          "Repeated posting of content that infringes intellectual property rights",
          "Multiple violations of copyright or trademark policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following up with rights owners directly or submitting counter-notifications under DMCA procedures",
      "steps": [
        "Receive notification from Meta with details of the removal and rights owner information",
        "Follow up with the rights owner directly to try to resolve the issue",
        "Submit an appeal if you believe the content shouldn't have been removed",
        "For DMCA cases, file a counter-notification following provided instructions",
        "Wait for review and potential restoration of content"
      ]
    }
  },
  {
    "id": "facebook-new-1758648752341-6",
    "reference": "FB-AP-001",
    "title": "Appeals and Content Review Process",
    "summary": "Policy explaining how users can appeal content removal decisions, the review process for appeals, and procedures for challenging enforcement actions across Meta platforms.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T17:32:32.342Z",
    "policies": [],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal decisions by requesting another review when notified that their content has been removed or covered with a warning. Meta reviews the post again to determine whether it follows Community Standards. Appeals are offered for the vast majority of violation types on Facebook and Instagram, except for violations with extreme safety concerns such as child exploitation imagery.",
      "steps": [
        "User receives notification that their content has been removed or covered with a warning",
        "User is given the option to accept the decision or disagree and request another review",
        "If user chooses to disagree, the content is resubmitted for another review",
        "Content remains not visible to other people while under review",
        "If reviewer accepts the original decision, content remains off the platform",
        "If reviewer disagrees with initial review, content goes to another reviewer for final decision",
        "Appeals are processed using a combination of human review and technology"
      ]
    }
  }
],
};
