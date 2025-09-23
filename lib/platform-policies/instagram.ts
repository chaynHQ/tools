import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "instagram-new-1758648624130-0",
    "reference": "IG-CS-001",
    "title": "Meta Community Standards",
    "summary": "Unified community standards that apply to Facebook, Instagram, Messenger and Threads, covering content policies including harassment, bullying, non-consensual intimate images, hate speech, and other prohibited content",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and sextortion",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment that could intimidate, exclude or silence others",
        "quote": "Bullying and Harassment",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects personal privacy and information",
        "quote": "Privacy Violations",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresenting who you are or impersonating others",
        "quote": "Authentic Identity Representation",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-adult-nudity",
        "reference": "Adult Nudity and Sexual Activity",
        "summary": "Regulates adult nudity and sexual activity content",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-sexual-solicitation",
        "reference": "Adult Sexual Solicitation and Sexually Explicit Language",
        "summary": "Prohibits adult sexual solicitation and sexually explicit language",
        "quote": "Adult Sexual Solicitation and Sexually Explicit Language",
        "contentTypes": [
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Addresses cybersecurity violations including unauthorized access to accounts",
        "quote": "Cybersecurity",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits third-party intellectual property infringement including unauthorized use of personal images",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including coordinated efforts to misrepresent identity",
        "quote": "Inauthentic Behavior",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-safety-commitment",
        "reference": "SAFETY",
        "summary": "Commits to removing content that threatens people and has potential to intimidate, exclude or silence others",
        "quote": "We're committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people has the potential to intimidate, exclude or silence others and isn't allowed on our services.",
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
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that could contribute to a risk of harm to physical security",
          "Content that threatens people",
          "Content that has potential to intimidate, exclude or silence others"
        ]
      },
      {
        "id": "meta-cs-privacy-commitment",
        "reference": "PRIVACY",
        "summary": "Commits to protecting personal privacy and information to give people freedom to be themselves",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-cs-dignity-commitment",
        "reference": "DIGNITY",
        "summary": "Prohibits harassment and degradation, expecting people to respect the dignity of others",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that harasses others",
          "Content that degrades others"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758648624130-1",
    "reference": "IG-TOU-001",
    "title": "Instagram Terms of Use",
    "summary": "Instagram's terms of service governing user conduct, content ownership, licensing, and platform usage rules",
    "url": "https://help.instagram.com/581066165581870/",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "ig-tou-private-confidential",
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
          "Information was posted without permission from the person depicted"
        ]
      },
      {
        "id": "ig-tou-impersonation",
        "reference": "Section 4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
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
          "Account was created for someone else without their express permission"
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
        "summary": "Platform can remove content that violates Terms of Use, policies, or Community Standards",
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
            "description": "Deletion process begins no more than 30 days after request, may take up to 90 days to complete"
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
        "summary": "Platform can terminate accounts for policy violations or repeated intellectual property infringement",
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
          "User violates Terms of Use or policies including Community Standards",
          "User repeatedly infringes other people's intellectual property rights",
          "Termination is permitted or required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult the Help Center if they believe their account has been terminated in error or want to delete their account",
      "steps": [
        "Consult the Instagram Help Center",
        "Submit appeal if account was terminated in error",
        "Request account deletion if desired"
      ]
    }
  },
  {
    "id": "instagram-new-1758648624130-2",
    "reference": "IG-IP-001",
    "title": "Instagram Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and other intellectual property protections including DMCA procedures",
    "url": "https://help.instagram.com/535503073130320/",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "ig-ip-copyright",
        "reference": "Copyright Section",
        "summary": "Prohibits posting content that violates someone else's copyright, including original works of authorship such as images",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. Copyright is a legal right that seeks to protect original works of authorship (example: books, music, film, art). Generally, copyright protects original expression such as words or images.",
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
          "Content violates someone else's copyright",
          "Content uses original expression such as images without authorization"
        ]
      },
      {
        "id": "ig-ip-trademark",
        "reference": "Trademark Section",
        "summary": "Prohibits posting content that violates someone else's trademark rights, including unauthorized use of distinguishing words, symbols or designs",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. A trademark is a word, slogan, symbol or design (example: brand name, logo) that distinguishes the products or services offered by one person, group or company from another.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates someone else's trademark rights",
          "Unauthorized use of distinguishing words, slogans, symbols or designs"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758648624130-3",
    "reference": "IG-CR-001",
    "title": "Instagram Copyright Policy",
    "summary": "Detailed copyright policy including DMCA takedown procedures, counter-notifications, and repeat infringer policies",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "ig-cr-copyright-infringement",
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
            "description": "Complete copyright infringement report form",
            "example": "Fill out Instagram's copyright reporting form with required information",
            "reason": "To provide Instagram with necessary details to process the copyright claim"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid copyright infringement report is submitted"
        ]
      },
      {
        "id": "ig-cr-repeat-violations",
        "reference": "Repeat Infringement Policy",
        "summary": "Prohibits repeatedly posting content that violates intellectual property rights with potential account consequences",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Multiple violations of intellectual property rights",
          "Pattern of posting infringing content"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit DMCA counter-notifications and retract intellectual property reports they have submitted",
      "steps": [
        "Submit a DMCA counter-notification if content was wrongly removed",
        "Contact Instagram's DMCA designated agent",
        "Retract an intellectual property report if submitted in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758648624130-4",
    "reference": "IG-BH-001",
    "title": "Instagram Bullying and Harassment Policy",
    "summary": "Policy covering harassment, bullying, and abusive behavior with heightened protections for minors",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "ig-bh-unwanted-contact",
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
        "id": "ig-bh-sexual-activity-statements",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
        "contentTypes": [
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
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity"
        ]
      },
      {
        "id": "ig-bh-severe-sexualized-commentary",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits severe sexualized commentary",
        "quote": "Severe sexualized commentary.",
        "contentTypes": [
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
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "ig-bh-derogatory-sexualized-imagery",
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
          "Content contains derogatory sexualized manipulated images or drawings"
        ]
      },
      {
        "id": "ig-bh-sexual-activity-attacks",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "ig-bh-private-info-threats",
        "reference": "Tier 1: Universal protections",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
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
          "Content contains threats to release private contact information",
          "Content contains threats to release medical records"
        ]
      },
      {
        "id": "ig-bh-sexual-activity-claims-minors-private",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
        "contentTypes": [
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
          "Content makes claims about sexual activity involving protected individuals",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "ig-bh-adult-sexualization",
        "reference": "Tier 2: Additional protections",
        "summary": "Prohibits content sexualizing adults who are minors, private adults or limited scope public figures",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
          "Content sexualizes protected adult individuals"
        ]
      },
      {
        "id": "ig-bh-manipulated-imagery-highlight",
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
          "Content is manipulated to negatively highlight physical characteristics"
        ]
      },
      {
        "id": "ig-bh-unwanted-manipulated-imagery-self-report",
        "reference": "Tier 3: Additional protections",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures",
        "quote": "Unwanted manipulated imagery.",
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
            "description": "Self-reporting by the targeted individual or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated content",
            "reason": "Required to confirm the content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Content is reported as unwanted by the target or authorized representative"
        ]
      },
      {
        "id": "ig-bh-unwanted-pages-groups-events",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
        "contentTypes": [
          "personal",
          "intimate",
          "private",
          "other"
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
            "description": "Report from the targeted individual or authorized representative",
            "example": "Complaint submitted by the person being targeted",
            "reason": "Required to confirm the targeting is unwanted"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported as unwanted by target or authorized representative"
        ]
      },
      {
        "id": "ig-bh-sexualizing-public-figure",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits content sexualizing a public figure when confirmed as unwanted by the target",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
        "evidenceRequirements": [
          {
            "description": "Confirmation from the public figure or authorized representative that content is unwanted",
            "example": "Statement from the public figure or their representative",
            "reason": "Required to confirm the sexualizing content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "ig-bh-sexually-harassing-contact",
        "reference": "Additional enforcement requirements",
        "summary": "Prohibits initiating sexually harassing contact when confirmed as unwanted by the recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
        "contentTypes": [
          "intimate",
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
            "description": "Confirmation from the recipient or authorized representative that contact is unwanted",
            "example": "Statement from the recipient confirming harassment",
            "reason": "Required to confirm the contact is sexually harassing and unwanted"
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
      "summary": "Users can appeal content decisions through the Support Inbox and request another review if they believe the decision was incorrect",
      "steps": [
        "Report the content violation through the platform's reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in the Support Inbox",
        "Submit appeal request if disagreeing with the decision",
        "Provide additional context or information during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758648624130-5",
    "reference": "IG-IMP-001",
    "title": "Instagram Impersonation Reporting",
    "summary": "Policy and procedures for reporting accounts that impersonate individuals or entities",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "ig-imp-001",
        "reference": null,
        "summary": "Prohibits creating accounts that impersonate other individuals",
        "quote": "If someone created an Instagram account pretending to be you, you can report it to us.",
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
            "description": "Evidence that an account is impersonating you",
            "example": "Account details showing someone pretending to be you",
            "reason": "To verify the impersonation claim and take appropriate action"
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
    "id": "instagram-new-1758648624130-6",
    "reference": "IG-NCII-001",
    "title": "Meta NCII Policy and StopNCII Integration",
    "summary": "Policy prohibiting non-consensual intimate images with integration to StopNCII.org prevention system",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "meta-ncii-001",
        "reference": "Meta NCII Policy",
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
          "Content involves sharing intimate images without consent",
          "Content is used to coerce someone into unwanted actions"
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
          "Content involves sharing intimate images without permission",
          "Content involves threatening to share intimate images"
        ]
      },
      {
        "id": "meta-adult-teen-contact-001",
        "reference": "Adult-Teen Contact Restrictions",
        "summary": "Restricts adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Adult over 18 attempting to contact unconnected teen",
          "Private chat initiated without existing connection"
        ]
      },
      {
        "id": "meta-message-requests-001",
        "reference": "Message Request Limitations",
        "summary": "Limits message requests to text-only messages until the recipient accepts the request to chat, preventing images, videos, or voice notes in initial contact",
        "quote": "We limit the message requests people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos, or voice notes in message requests until the recipient accepts the request to chat.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Message request contains images, videos, or voice notes to unconnected user",
          "Media content sent before recipient accepts chat request"
        ]
      },
      {
        "id": "meta-teen-messaging-001",
        "reference": "Teen Messaging Restrictions",
        "summary": "Prevents teens from being messaged or added to group chats by anyone they don't follow or aren't connected to on Instagram and Messenger",
        "quote": "We also introduced stricter default message settings for teens under 16 (and under 18 in certain countries). This means teens can't be messaged or added to group chats by anyone they don't follow or aren't connected to on Instagram and Messenger.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Message sent to teen by unconnected user",
          "Teen added to group chat by someone they don't follow or aren't connected to"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758648624130-7",
    "reference": "IG-DP-001",
    "title": "Instagram Data Policy",
    "summary": "Privacy policy covering data collection, usage, and user rights regarding personal information",
    "url": "https://help.instagram.com/155833707900388",
    "accessTimestamp": "2025-09-23T17:30:24.130Z",
    "policies": [
      {
        "id": "ig-dp-content-sharing",
        "reference": "Section III - Sharing on Meta Products",
        "summary": "Prohibits sharing content about others without their consent and provides reporting mechanisms for unwanted content sharing",
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
        "evidenceRequirements": [
          {
            "description": "Report the specific content that was shared without consent",
            "example": "URL or location of the unwanted content on Instagram",
            "reason": "To identify and review the content for potential removal"
          }
        ],
        "removalCriteria": [
          "Content shared about you that makes you uncomfortable",
          "Photos, mentions, tags, or information shared without your consent"
        ]
      },
      {
        "id": "ig-dp-third-party-access",
        "reference": "Section III - Apps, websites, and third-party integrations",
        "summary": "Restricts third-party access to user data and implements controls to prevent unauthorized data sharing",
        "quote": "We are in the process of restricting developers' data access even further to help prevent abuse. For example, we will remove developers' access to your Facebook and Instagram data if you haven't used their app in 3 months, and we are changing Login, so that in the next version, we will reduce the data that an app can request without app review to include only name, Instagram username and bio, profile photo and email address.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": 3,
            "unit": "months",
            "description": "Access removed after 3 months of app inactivity"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "App not used for 3 months",
          "Unauthorized data access by third-party applications"
        ]
      },
      {
        "id": "ig-dp-legal-response",
        "reference": "Section VI - How do we respond to legal requests or prevent harm",
        "summary": "Provides framework for responding to legal requests and preventing harmful activities including fraud and unauthorized use",
        "quote": "We access, preserve and share your information with regulators, law enforcement or others: In response to a legal request (like a search warrant, court order or subpoena) if we have a good faith belief that the law requires us to do so... When we have a good-faith belief it is necessary to: detect, prevent and address fraud, unauthorized use of the Products, violations of our terms or policies, or other harmful or illegal activity",
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
            "description": "Legal documentation such as court orders or law enforcement requests",
            "example": "Search warrant, court order, or subpoena",
            "reason": "To comply with legal requirements and prevent harmful activities"
          }
        ],
        "removalCriteria": [
          "Legal request with good faith belief that law requires compliance",
          "Fraud detection and prevention",
          "Unauthorized use of the platform",
          "Violations of terms or policies",
          "Other harmful or illegal activity"
        ]
      },
      {
        "id": "ig-dp-account-deletion",
        "reference": "Section V - How can I manage or delete information about me",
        "summary": "Allows users to delete their accounts and associated content, with limitations on content shared by others",
        "quote": "When you delete your account, we delete things you have posted, such as your photos and status updates, and you won't be able to recover that information later. Information that others have shared about you isn't part of your account and won't be deleted.",
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
          "User-initiated account deletion",
          "Content posted by the account holder"
        ]
      },
      {
        "id": "ig-dp-data-retention",
        "reference": "Section V - Data retention and deletion",
        "summary": "Establishes data retention periods and deletion practices for various types of content and verification materials",
        "quote": "We store data until it is no longer necessary to provide our services and Meta Products, or until your account is deleted - whichever comes first... If you submit a copy of your government-issued ID for account verification purposes, we delete that copy 30 days after review, unless otherwise stated.",
        "contentTypes": [
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": 30,
            "unit": "days",
            "description": "Government-issued ID deleted 30 days after review"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Data no longer necessary for service provision",
          "Account deletion",
          "Completion of verification process for government-issued ID"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/contact/1676704782672605",
      "summary": "Users can contact Instagram online or by mail to address privacy policy questions and concerns",
      "steps": [
        "Contact Instagram online through the provided contact form",
        "Alternatively, send mail to Meta Platforms, Inc. ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025"
      ]
    }
  }
],
};
