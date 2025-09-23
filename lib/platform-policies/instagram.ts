import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "instagram-new-1758654347401-0",
    "reference": "IG-COMMUNITY-STANDARDS",
    "title": "Community Standards",
    "summary": "Meta's comprehensive community standards that apply to Facebook, Instagram, Messenger and Threads, covering content policies including safety, privacy, dignity, authenticity, and specific policies on bullying, harassment, non-consensual intimate imagery, and content removal",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
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
          "relationship",
          "hacked",
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
          "relationship",
          "impersonation",
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
        "id": "meta-cs-child-sexual-exploitation",
        "reference": "Child Sexual Exploitation, Abuse, and Nudity",
        "summary": "Prohibits child sexual exploitation, abuse, and nudity content",
        "quote": "Child Sexual Exploitation, Abuse, and Nudity",
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
          "Content involves child sexual exploitation",
          "Content depicts child abuse",
          "Content contains child nudity"
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
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates personal privacy",
          "Content shares personal information without consent",
          "Content violates image privacy rights"
        ]
      },
      {
        "id": "meta-cs-adult-nudity-sexual-activity",
        "reference": "Adult Nudity and Sexual Activity",
        "summary": "Prohibits adult nudity and sexual activity content",
        "quote": "Adult Nudity and Sexual Activity",
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
          "Content contains adult nudity",
          "Content depicts sexual activity"
        ]
      },
      {
        "id": "meta-cs-authentic-identity-representation",
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
          "Content misrepresents identity",
          "Account impersonates another person",
          "Content used for identity deception"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior and misrepresentation of who users are or what they're doing",
        "quote": "We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
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
          "Content involves misrepresentation of identity",
          "Account engages in inauthentic behavior",
          "Content misrepresents user activities"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Prohibits account integrity violations including unauthorized access",
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
          "Unauthorized access to account",
          "Account integrity has been violated"
        ]
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Prohibits cybersecurity violations and unauthorized access to accounts or systems",
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
          "Unauthorized system access",
          "Account hacking or compromise"
        ]
      },
      {
        "id": "meta-cs-third-party-ip-infringement",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits third-party intellectual property infringement including unauthorized use of personal images",
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
          "Content infringes third-party intellectual property rights",
          "Unauthorized use of copyrighted material",
          "Use of personal images without permission"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758654347401-1",
    "reference": "IG-TERMS-OF-USE",
    "title": "Instagram Terms of Use",
    "summary": "Instagram's current terms of service governing user obligations, content licensing, intellectual property rights, and platform usage rules",
    "url": "https://help.instagram.com/581066165581870/",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [
      {
        "id": "ig-terms-private-info",
        "reference": "Section 4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains someone else's private or confidential information",
          "Information was posted without the person's permission"
        ]
      },
      {
        "id": "ig-terms-impersonation",
        "reference": "Section 4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information",
        "quote": "You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User is impersonating someone they are not",
          "Account was created for someone else without express permission"
        ]
      },
      {
        "id": "ig-terms-ip-rights",
        "reference": "Section 4.2",
        "summary": "Prohibits violating intellectual property rights including copyright infringement",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods). You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent you own or have obtained all necessary rights to the content you post or share.",
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
          "Content violates intellectual property rights",
          "User does not own or have necessary rights to the posted content",
          "Content infringes copyright"
        ]
      },
      {
        "id": "ig-terms-content-removal",
        "reference": "Section 6",
        "summary": "Allows removal of content that violates Terms of Use or policies",
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
            "description": "Deletion process will automatically begin no more than 30 days after request"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Terms of Use",
          "Content violates Instagram policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-terms-account-termination",
        "reference": "Section 6",
        "summary": "Allows account termination for Terms violations or policy breaches",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User creates risk or legal exposure for Instagram",
          "User violates Terms of Use or policies including Community Standards",
          "User repeatedly infringes intellectual property rights",
          "Action is permitted or required by law"
        ]
      },
      {
        "id": "ig-terms-reporting-misuse",
        "reference": "Section 4.2",
        "summary": "Prohibits misusing reporting, dispute, or appeals channels",
        "quote": "You can't do anything to interfere with or impair the intended operation of the Service. This includes misusing any reporting, dispute, or appeals channel, such as by making fraudulent or groundless reports or appeals.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User interferes with or impairs intended operation of the Service",
          "User makes fraudulent or groundless reports or appeals"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult Instagram Help Center if they believe their account has been terminated in error, or to disable or permanently delete their account",
      "steps": [
        "Consult Instagram Help Center if account terminated in error",
        "Request to disable or permanently delete account through Help Center",
        "Deletion process begins automatically within 30 days of request",
        "Content becomes invisible to other users but remains subject to Terms and Privacy Policy during deletion process",
        "Complete deletion may take up to 90 days, with additional 90 days for backup removal"
      ]
    }
  },
  {
    "id": "instagram-new-1758654347401-2",
    "reference": "IG-DATA-POLICY",
    "title": "Instagram Data Policy",
    "summary": "Instagram's privacy policy explaining data collection, usage, and user privacy rights",
    "url": "https://help.instagram.com/155833707900388",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [
      {
        "id": "ig-data-policy-harmful-conduct",
        "reference": "Section II - Promote safety, integrity and security",
        "summary": "Prohibits harmful conduct and violations of terms or policies, with detection and prevention measures",
        "quote": "We use the information we have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences, maintain the integrity of our Products, and promote safety and security on and off of Meta Products. For example, we use data we have to investigate suspicious activity or violations of our terms or policies, or to detect when someone needs help.",
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
          "Suspicious activity detected",
          "Violations of terms or policies identified",
          "Harmful conduct verified"
        ]
      },
      {
        "id": "ig-data-policy-content-reporting",
        "reference": "Section III - Content others share or reshare about you",
        "summary": "Provides reporting mechanism for uncomfortable content shared by others about you",
        "quote": "People can also use our Products to create and share content about you with the audience they choose. For example, people can share a photo of you in a Story, mention or tag you at a location in a post, or share information about you in their posts or messages. If you are uncomfortable with what others have shared about you on our Products, you can learn how to report the content.",
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
        "removalCriteria": [
          "Content shared about you without consent",
          "User reports discomfort with shared content"
        ]
      },
      {
        "id": "ig-data-policy-legal-response",
        "reference": "Section VI - How do we respond to legal requests or prevent harm",
        "summary": "Responds to legal requests and takes action to prevent harm, fraud, and unauthorized use",
        "quote": "We access, preserve and share your information with regulators, law enforcement or others: In response to a legal request (like a search warrant, court order or subpoena) if we have a good faith belief that the law requires us to do so. When we have a good-faith belief it is necessary to: detect, prevent and address fraud, unauthorized use of the Products, violations of our terms or policies, or other harmful or illegal activity; to protect ourselves (including our rights, property or Products), you or others, including as part of investigations or regulatory inquiries; or to prevent death or imminent bodily harm.",
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
          "Legal request received (search warrant, court order, subpoena)",
          "Fraud detected",
          "Unauthorized use of Products identified",
          "Violations of terms or policies found",
          "Harmful or illegal activity verified",
          "Risk of death or imminent bodily harm"
        ]
      },
      {
        "id": "ig-data-policy-account-deletion",
        "reference": "Section V - How can I manage or delete information about me",
        "summary": "Allows users to delete their account and associated content, with permanent removal of posted content",
        "quote": "When you delete your account, we delete things you have posted, such as your photos and status updates, and you won't be able to recover that information later. Information that others have shared about you isn't part of your account and won't be deleted.",
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
          "User requests account deletion",
          "Content posted by the user will be permanently deleted"
        ]
      },
      {
        "id": "ig-data-policy-data-retention",
        "reference": "Section VI - Information preservation",
        "summary": "Retains information from disabled accounts for violations to prevent repeat abuse",
        "quote": "We also retain information from accounts disabled for terms violations for at least a year to prevent repeat abuse or other term violations.",
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
            "value": 1,
            "unit": "years",
            "description": "Information retained for at least a year after account disabled for violations"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account disabled for terms violations",
          "Information retained to prevent repeat abuse"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758654347401-3",
    "reference": "IG-COPYRIGHT-POLICY",
    "title": "Copyright Policy",
    "summary": "Comprehensive policy covering copyright infringement reporting, DMCA procedures, counter-notifications, and repeat infringer policies",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "Copyright Policy",
        "summary": "Prohibits posting content that infringes on another person's copyright without permission",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form.",
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
            "description": "Complete the copyright infringement reporting form",
            "example": "Use the provided form at instagram.com/help/ipreporting/report/copyright/",
            "reason": "Required by Instagram to process copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid copyright infringement report is submitted"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "Copyright and Posting Content on Instagram",
        "summary": "Prohibits repeatedly posting content that violates someone else's intellectual property rights with potential account consequences",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
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
            "example": "Multiple instances of infringing content posted by the same account",
            "reason": "To establish pattern of repeat infringement for account-level enforcement"
          }
        ],
        "removalCriteria": [
          "Multiple instances of copyright infringement by the same account",
          "Pattern of repeated intellectual property violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram processes DMCA counter-notifications for copyright claims and allows users to retract intellectual property reports they have submitted",
      "steps": [
        "Submit a DMCA counter-notification if you believe your content was wrongly removed",
        "Contact Instagram's DMCA designated agent for copyright-related appeals",
        "Retract an intellectual property report if you submitted one in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758654347401-4",
    "reference": "IG-BULLYING-HARASSMENT",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy on bullying and harassment prevention, reporting mechanisms, and enforcement actions, with heightened protections for minors",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [
      {
        "id": "ig-bullying-harassment-unwanted-contact",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation",
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
        "id": "ig-bullying-harassment-sexual-activity-statements",
        "reference": "Tier 1: Universal protections for everyone",
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
        "id": "ig-bullying-harassment-severe-sexualized-commentary",
        "reference": "Tier 1: Universal protections for everyone",
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
        "id": "ig-bullying-harassment-derogatory-sexualized-imagery",
        "reference": "Tier 1: Universal protections for everyone",
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
        "id": "ig-bullying-harassment-sexual-activity-terms",
        "reference": "Tier 1: Universal protections for everyone",
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
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "ig-bullying-harassment-private-info-threats",
        "reference": "Tier 1: Universal protections for everyone",
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
          "Content contains threats to release private phone numbers",
          "Content contains threats to release residential addresses",
          "Content contains threats to release email addresses",
          "Content contains threats to release medical records"
        ]
      },
      {
        "id": "ig-bullying-harassment-sexual-activity-claims",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits claims about sexual activity, except in the context of criminal allegations against adults",
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
          "Content contains claims about sexual activity",
          "Exception: criminal allegations against adults involving non-consensual sexual touching"
        ]
      },
      {
        "id": "ig-bullying-harassment-adult-sexualization",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content sexualizing another adult",
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
          "Content sexualizes another adult"
        ]
      },
      {
        "id": "ig-bullying-harassment-manipulated-imagery",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits unwanted manipulated imagery when self-reported",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
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
            "description": "Self-reporting by the target or authorized representative",
            "example": "Report must be submitted by the person depicted or their authorized representative",
            "reason": "Required to establish that the manipulated imagery is unwanted"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Content must be self-reported by target or authorized representative"
        ]
      },
      {
        "id": "ig-bullying-harassment-public-figure-sexualization",
        "reference": "For the following Community Standards, we require additional information and/or context to enforce",
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
            "example": "Written confirmation from the public figure or their representative",
            "reason": "Required to establish that the sexualizing content is unwanted by the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "ig-bullying-harassment-sexual-harassment-contact",
        "reference": "For the following Community Standards, we require additional information and/or context to enforce",
        "summary": "Prohibits initiating sexually harassing contact when confirmed unwanted by recipient",
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
            "example": "Written confirmation from the recipient or their representative",
            "reason": "Required to establish that the sexually harassing contact is unwanted"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Confirmation received from recipient or authorized representative that contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal content removal decisions through the Support Inbox and request another review if they believe the decision was incorrect",
      "steps": [
        "Report content through the universal reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional information during appeal process",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758654347401-5",
    "reference": "IG-NCII-SUPPORT",
    "title": "Non-Consensual Intimate Image Support",
    "summary": "Support resources and reporting mechanisms for victims of non-consensual intimate image sharing, including partnerships with organizations like StopNCII.org",
    "url": "https://help.instagram.com/1769410010008691/",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [
      {
        "id": "ig-ncii-community-standards",
        "reference": "Community Standards",
        "summary": "Prohibits intimate photos that violate Community Standards and enables anonymous reporting for removal",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Screenshot or record of the post for reporting purposes",
            "example": "Screenshot of the non-consensual intimate image post",
            "reason": "Needed for documentation and potential further legal action"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Content is reported through the built-in reporting system"
        ]
      },
      {
        "id": "ig-ncii-photo-matching",
        "reference": "Photo-matching technology",
        "summary": "Uses photo-matching technology to prevent future sharing of removed intimate images across Instagram, Facebook and Messenger",
        "quote": "We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
        "contentTypes": [
          "intimate",
          "personal"
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
          "Image has been previously removed for violating Community Standards"
        ]
      },
      {
        "id": "ig-ncii-threats-sextortion",
        "reference": "Threatening behavior reporting",
        "summary": "Prohibits threatening to share private content or demanding money/actions in exchange for not sharing private content",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the threatening profile through built-in reporting options",
            "example": "Screenshots of threatening messages or demands for money",
            "reason": "To document the threatening behavior for platform review"
          }
        ],
        "removalCriteria": [
          "User is threatening to share private content",
          "User is demanding money to prevent sharing private content",
          "User is demanding actions in exchange for not sharing private content"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758654347401-6",
    "reference": "IG-IMPERSONATION-POLICY",
    "title": "Impersonation Policy",
    "summary": "Policy covering account impersonation, fake profiles, and identity misuse, including reporting and enforcement procedures",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": null,
        "summary": "Prohibits creating Instagram accounts pretending to be another person and provides reporting mechanisms for impersonation violations",
        "quote": "Instagram takes safety seriously. If someone created an Instagram account pretending to be you, you can report it to us.",
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
        "evidenceRequirements": [
          {
            "description": "Report must be submitted through Instagram app or designated forms",
            "example": "Use in-app reporting feature or fill out the impersonation form for non-users",
            "reason": "Required to initiate the impersonation investigation process"
          }
        ],
        "removalCriteria": [
          "Account was created pretending to be another person",
          "Account is impersonating someone without authorization"
        ]
      },
      {
        "id": "ig-impersonation-anonymous",
        "reference": null,
        "summary": "Ensures anonymous reporting for impersonation cases except for intellectual property infringement reports",
        "quote": "Keep in mind that your report is anonymous, except if you're reporting an intellectual property infringement. The account you reported won't see who reported them.",
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
          "Report submitted for impersonation (maintains anonymity)",
          "Report not related to intellectual property infringement"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758654347401-7",
    "reference": "IG-APPEAL-PROCESS",
    "title": "Content Appeal and Counter-Notice Process",
    "summary": "Procedures for appealing content removal decisions, including DMCA counter-notifications and general content appeals",
    "url": "https://help.instagram.com/1417735471763678/",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [
      {
        "id": "ig-copyright-removal-policy",
        "reference": null,
        "summary": "Removes content reported for copyright infringement under DMCA procedures and other copyright reporting mechanisms",
        "quote": "If your content was removed because of a copyright report, you can submit an appeal or a DMCA counter-notification.",
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
          "Content reported for copyright infringement",
          "Content removed under DMCA notice and counter-notice procedures",
          "Content removed because of copyright report submitted outside DMCA procedures"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit appeals for copyright-related content removal through two pathways: DMCA counter-notifications for DMCA removals, or standard appeals for non-DMCA copyright reports. Appeals are reviewed expeditiously and can be resolved quickly when users respond promptly to requests for information.",
      "steps": [
        "Receive notification message with removal instructions",
        "Determine if content was removed under DMCA procedures or other copyright reporting",
        "For DMCA removals: File a DMCA counter-notification",
        "For non-DMCA copyright removals: Submit an appeal using instructions in the notification message",
        "For disabled accounts: Log into account and follow on-screen instructions to submit appeal",
        "Respond promptly to any requests for additional information during review",
        "Await expeditious review of valid and adequately substantiated appeals"
      ]
    }
  },
  {
    "id": "instagram-new-1758654347401-8",
    "reference": "IG-OVERSIGHT-BOARD",
    "title": "Oversight Board Appeals",
    "summary": "Process for appealing Instagram's content decisions to the independent Oversight Board for challenging cases",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-23T19:05:47.401Z",
    "policies": [],
    "appealProcess": {
      "url": "https://help.instagram.com/675885993348720",
      "summary": "Two-tier appeal process where users must first request a review through Instagram's internal process, then can appeal to the Oversight Board within 15 days if they disagree with the decision after two reviews.",
      "steps": [
        "First go through Instagram's request a review process for your content or content you reported",
        "If Instagram reviews your content twice and you still disagree with the decision, you may be eligible to appeal to the Oversight Board",
        "Submit your appeal to the Oversight Board within 15 days of the decision",
        "The Oversight Board will decide whether to review your appeal (they only select a certain number of eligible appeals)",
        "Check your appeal status on the Oversight Board's website using your reference number"
      ]
    }
  }
],
};
