import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "instagram-new-1758653633182-0",
    "reference": "IG-CS-001",
    "title": "Community Standards",
    "summary": "Meta's unified Community Standards that apply to Facebook, Instagram, Messenger and Threads, outlining what is and isn't allowed on these platforms including content removal policies, safety guidelines, and enforcement philosophy.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
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
          "Content misrepresents identity",
          "Account or content involves impersonation",
          "False representation of who they are"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior and misrepresentation on the platform",
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
          "Misrepresentation of actions or identity",
          "Coordinated inauthentic activity"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Protects account integrity and prevents unauthorized access",
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
          "Content posted without authorization"
        ]
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Addresses cybersecurity threats and unauthorized access to accounts or content",
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
          "Content related to cybersecurity threats",
          "Unauthorized access or hacking",
          "Security compromise of accounts"
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
        "id": "meta-cs-dignity-principle",
        "reference": "DIGNITY",
        "summary": "Establishes that all people are equal in dignity and rights, and prohibits harassment or degradation of others",
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
          "Content violates dignity of individuals",
          "Content disrespects others' rights"
        ]
      },
      {
        "id": "meta-cs-privacy-principle",
        "reference": "PRIVACY",
        "summary": "Commits to protecting personal privacy and information, giving people freedom to choose how and when to share",
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
          "Content shared without consent",
          "Content compromises privacy rights"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758653633182-1",
    "reference": "IG-TOU-001",
    "title": "Instagram Terms of Use",
    "summary": "Instagram's official Terms of Use governing user conduct, content licensing, intellectual property rights, and platform usage rules.",
    "url": "https://help.instagram.com/581066165581870/",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
    "policies": [
      {
        "id": "ig-tou-private-confidential-info",
        "reference": "Section 4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
        "contentTypes": [
          "private",
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
          "Content contains someone else's private or confidential information",
          "Information was posted without permission from the person"
        ]
      },
      {
        "id": "ig-tou-impersonation",
        "reference": "Section 4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information",
        "quote": "You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
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
        "id": "ig-tou-intellectual-property",
        "reference": "Section 4.2",
        "summary": "Prohibits violating someone else's intellectual property rights including copyright infringement",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods). You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent you own or have obtained all necessary rights to the content you post or share.",
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
          "Content violates intellectual property rights",
          "User does not own or have necessary rights to the posted content",
          "Content infringes copyright without applicable legal exceptions"
        ]
      },
      {
        "id": "ig-tou-content-removal",
        "reference": "Section 6",
        "summary": "Platform can remove content that violates Terms of Use or policies",
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
          "Content violates platform policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-tou-account-termination",
        "reference": "Section 6",
        "summary": "Platform can terminate accounts for policy violations including repeated intellectual property infringement",
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
          "User creates risk or legal exposure for the platform",
          "User violates Terms of Use or policies",
          "User repeatedly infringes other people's intellectual property rights",
          "Action is permitted or required by law"
        ]
      },
      {
        "id": "ig-tou-reporting-misuse",
        "reference": "Section 4.2",
        "summary": "Prohibits interfering with service operation including misusing reporting channels",
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
          "User interferes with or impairs service operation",
          "User misuses reporting, dispute, or appeals channels",
          "User makes fraudulent or groundless reports or appeals"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult the Help Center if they believe their account has been terminated in error, or to disable or permanently delete their account. The document references reporting conduct or content through the Help Center.",
      "steps": [
        "Consult the Instagram Help Center if account was terminated in error",
        "Use Help Center to disable or permanently delete account",
        "Report conduct or content through Help Center reporting mechanisms"
      ]
    }
  },
  {
    "id": "instagram-new-1758653633182-2",
    "reference": "IG-DP-001",
    "title": "Data Policy",
    "summary": "Instagram's privacy policy explaining how user data is collected, used, shared, and protected across Meta's family of apps.",
    "url": "https://help.instagram.com/155833707900388",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
    "policies": [
      {
        "id": "ig-dp-content-reporting",
        "reference": "Section III - Content others share or reshare about you",
        "summary": "Provides a reporting mechanism for users who are uncomfortable with content others have shared about them on the platform",
        "quote": "If you are uncomfortable with what others have shared about you on our Products, you can learn how to report the content.",
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
          "Content shared by others that makes the subject uncomfortable"
        ]
      },
      {
        "id": "ig-dp-legal-response",
        "reference": "Section VI - How do we respond to legal requests or prevent harm?",
        "summary": "Responds to legal requests including search warrants, court orders, and subpoenas when required by law",
        "quote": "We access, preserve and share your information with regulators, law enforcement or others: In response to a legal request (like a search warrant, court order or subpoena) if we have a good faith belief that the law requires us to do so.",
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
          "Valid legal request such as search warrant, court order, or subpoena",
          "Good faith belief that law requires compliance with the request"
        ]
      },
      {
        "id": "ig-dp-harm-prevention",
        "reference": "Section VI - How do we respond to legal requests or prevent harm?",
        "summary": "Takes action to detect, prevent and address fraud, unauthorized use, policy violations, and other harmful or illegal activity",
        "quote": "When we have a good-faith belief it is necessary to: detect, prevent and address fraud, unauthorized use of the Products, violations of our terms or policies, or other harmful or illegal activity; to protect ourselves (including our rights, property or Products), you or others, including as part of investigations or regulatory inquiries; or to prevent death or imminent bodily harm.",
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
          "Fraud detection or prevention",
          "Unauthorized use of the platform",
          "Violations of terms or policies",
          "Other harmful or illegal activity",
          "Protection of users or the platform",
          "Prevention of death or imminent bodily harm"
        ]
      },
      {
        "id": "ig-dp-account-deletion",
        "reference": "Section V - How can I manage or delete information about me?",
        "summary": "Allows users to delete their accounts and associated content, though information shared by others is not included in account deletion",
        "quote": "When you delete your account, we delete things you have posted, such as your photos and status updates, and you won't be able to recover that information later. Information that others have shared about you isn't part of your account and won't be deleted.",
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
          "User requests account deletion"
        ]
      },
      {
        "id": "ig-dp-data-retention",
        "reference": "Section V - How can I manage or delete information about me?",
        "summary": "Retains information from accounts disabled for terms violations for at least one year to prevent repeat abuse",
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
            "description": "Information retained for at least one year after account disabled for terms violations"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account disabled for terms violations"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758653633182-3",
    "reference": "IG-CR-001",
    "title": "Copyright Policy",
    "summary": "Comprehensive policy covering copyright infringement reporting, DMCA procedures, counter-notifications, and intellectual property protection on Instagram.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
    "policies": [
      {
        "id": "ig-cr-001-copyright-infringement",
        "reference": "Copyright Policy",
        "summary": "Prohibits posting content that infringes on someone else's copyright without permission",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Complete the copyright infringement reporting form",
            "example": "Use the provided form at instagram.com/help/ipreporting/report/copyright/",
            "reason": "Required to initiate the copyright infringement review process"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid copyright infringement report is submitted"
        ]
      },
      {
        "id": "ig-cr-001-repeat-violations",
        "reference": "Copyright and Posting Content on Instagram",
        "summary": "Takes action against accounts that repeatedly post content violating intellectual property rights",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
        "contentTypes": [
          "personal",
          "intimate",
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
          "Multiple violations of intellectual property rights",
          "Pattern of posting infringing content"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram processes DMCA counter-notifications and allows users to retract intellectual property reports they have submitted",
      "steps": [
        "Submit a DMCA counter-notification if content was wrongly removed",
        "Contact Instagram's DMCA designated agent",
        "Retract an intellectual property report if submitted in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758653633182-4",
    "reference": "IG-BH-001",
    "title": "Bullying and Harassment Policy",
    "summary": "Policy outlining Instagram's approach to combating bullying, harassment, and abusive behavior, with enhanced protections for minors.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
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
        "id": "meta-bh-sexual-statements",
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
        "id": "meta-bh-severe-sexualized-commentary",
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
        "id": "meta-bh-derogatory-sexualized-imagery",
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
        "id": "meta-bh-sexual-activity-attacks",
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
        "id": "meta-bh-private-info-threats",
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
        "id": "meta-bh-bullying-harassment-calls",
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
        "id": "meta-bh-sexual-activity-claims",
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
        "id": "meta-bh-adult-sexualization",
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
        "id": "meta-bh-manipulated-imagery-highlight",
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
          "Content negatively draws attention to specific body parts"
        ]
      },
      {
        "id": "meta-bh-romantic-involvement-claims",
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
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "Tier 3: Additional protections",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures",
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
            "description": "Self-report by the target or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated imagery",
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
        "id": "meta-bh-unwanted-pages-groups-events",
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
            "example": "Report submitted by the targeted individual or their legal representative",
            "reason": "Required to confirm the content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals",
          "Content is posted through Pages, Groups or Events",
          "Content is reported by target or authorized representative as unwanted"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figure",
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
            "example": "Statement from the public figure or their legal representative confirming the content is unwanted",
            "reason": "Required to establish that the sexualizing content is unwanted by the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexually-harassing-contact",
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
      "summary": "Users can appeal content removal decisions through the Support Inbox and request another review if they believe the decision was incorrect",
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
    "id": "instagram-new-1758653633182-5",
    "reference": "IG-IMP-001",
    "title": "Impersonation Policy",
    "summary": "Policy addressing fake accounts, impersonation, and identity misrepresentation, including reporting procedures and enforcement actions.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
    "policies": [
      {
        "id": "ig-imp-001",
        "reference": "Impersonation Policy",
        "summary": "Prohibits creating accounts that impersonate other individuals",
        "quote": "If someone created an Instagram account pretending to be you, you can report it to us.",
        "contentTypes": [
          "personal",
          "intimate",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report must be submitted through official channels",
            "example": "Report through Instagram app, desktop form, or contact form for non-users",
            "reason": "To verify the legitimacy of the impersonation claim and process the report appropriately"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Account was created to impersonate someone else"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758653633182-6",
    "reference": "IG-NCII-001",
    "title": "Non-Consensual Intimate Images Policy",
    "summary": "Meta's policy specifically addressing intimate image abuse and sextortion, including support for StopNCII.org and proactive detection measures.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
    "policies": [
      {
        "id": "meta-ncii-001",
        "reference": "Non-Consensual Intimate Images Policy",
        "summary": "Strictly prohibits the sharing of non-consensual intimate images (NCII)",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII).",
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
          "Content involves intimate images shared without consent"
        ]
      },
      {
        "id": "meta-sextortion-001",
        "reference": "Sextortion Policy",
        "summary": "Prohibits sextortion, defined as threatening to reveal intimate images to force someone to do something they don't want to do",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something you don't want to do. Sharing—or threatening to share—intimate images without consent is against Meta policies.",
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
          "Content involves threats to reveal intimate images",
          "Content involves forcing someone to do something against their will using intimate images as leverage"
        ]
      },
      {
        "id": "meta-exploitation-001",
        "reference": "Content Exploitation Policy",
        "summary": "Prohibits content or behavior that exploits people, including sharing or threatening to share someone's intimate images",
        "quote": "We have strict rules against content or behavior that exploits people, including sharing or threatening to share someone's intimate images.",
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
          "Content exploits people",
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images"
        ]
      },
      {
        "id": "meta-private-images-001",
        "reference": "Private Images Reporting Policy",
        "summary": "Provides dedicated reporting option for private images being shared without permission",
        "quote": "We encourage anyone who sees content they think breaks our rules to report it—and we have a dedicated reporting option to use if someone is sharing private images.",
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
          "Content involves private images being shared without permission"
        ]
      },
      {
        "id": "meta-enforcement-001",
        "reference": "Content Enforcement Policy",
        "summary": "Takes action on content that violates policies when made aware of it",
        "quote": "When we become aware of this content, we work to take action.",
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
          "Content violates Meta's policies"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758653633182-7",
    "reference": "IG-APP-001",
    "title": "Appeal and Counter-Notice Procedures",
    "summary": "Comprehensive guide to Instagram's appeal process for content removal, account actions, and DMCA counter-notifications.",
    "url": "https://help.instagram.com/454951664593304",
    "accessTimestamp": "2025-09-23T18:53:53.182Z",
    "policies": [
      {
        "id": "ig-app-copyright-infringement",
        "reference": "Copyright Infringement Reporting",
        "summary": "Prohibits copyright infringement and provides mechanisms for reporting violations of copyrighted content",
        "quote": "Report copyright infringement on Instagram or Threads",
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
            "description": "Information required to include in a copyright report",
            "example": "Specific information as outlined in Instagram's copyright reporting requirements",
            "reason": "To substantiate the copyright infringement claim and enable platform review"
          },
          {
            "description": "Link (URL) to the infringing photo or video",
            "example": "Direct URL to the content on Instagram or Threads",
            "reason": "To identify the specific content that allegedly infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content reported for intellectual property infringement",
          "Valid copyright infringement claim submitted through proper channels"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications for users whose content was removed due to copyright reports",
      "steps": [
        "Submit a DMCA counter-notification if content was removed due to copyright report",
        "Instagram/Threads will process the counter-notification according to DMCA procedures"
      ]
    }
  }
],
};
