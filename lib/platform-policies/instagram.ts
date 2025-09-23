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
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "META-CS-ASE",
        "summary": "Prohibits adult sexual exploitation, including non-consensual intimate imagery, sextortion, and threats to share intimate content.",
        "quote": "We prohibit adult sexual exploitation, including non-consensual intimate imagery (NCII), sextortion, and threats to share intimate content.",
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
        "id": "meta-cs-bullying-harassment",
        "reference": "META-CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
        "id": "meta-cs-privacy-violations",
        "reference": "META-CS-PV",
        "summary": "Prohibits violations of privacy, including sharing private intimate media or personal information without consent.",
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
        "id": "meta-cs-authentic-identity",
        "reference": "META-CS-AI",
        "summary": "Prohibits impersonating others with intent to deceive or mislead, including using another person's images or identifying information without authorization.",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
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
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "ig-copyright-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission or violating intellectual property rights, including copyright infringement.",
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
            "reason": "To establish that you own or have obtained all necessary rights to the content"
          },
          {
            "description": "URL(s) of the infringing content on Instagram",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content posted without permission from the rights holder",
          "Content that violates intellectual property rights including copyright infringement"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, including creating accounts for someone else without express permission.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
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
            "description": "Evidence that the account is impersonating you or someone else",
            "reason": "To verify that impersonation is occurring"
          },
          {
            "description": "Proof of your identity or authorization to report on behalf of the impersonated person",
            "reason": "To confirm you have the right to report the impersonation"
          }
        ],
        "removalCriteria": [
          "Account impersonates someone or something it is not",
          "Account created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows removal of any content or information shared on the Service that violates Terms of Use, policies including Community Standards, or as permitted or required by law.",
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
            "description": "Deletion process will automatically begin no more than 30 days after request, taking up to 90 days to complete"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that content violates Terms of Use or Community Standards",
            "reason": "To determine if content removal is warranted under platform policies"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Use",
          "Content violates Community Standards or other policies",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows immediate termination or disabling of accounts to protect community or services, or if users create risk, violate Terms or policies, or repeatedly infringe intellectual property rights.",
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
            "reason": "To justify account termination or service restriction"
          },
          {
            "description": "Documentation of repeated intellectual property infringement",
            "reason": "To establish pattern of copyright or other IP violations"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Violation of Terms of Use or Community Standards",
          "Repeated infringement of intellectual property rights",
          "Required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users who believe their account has been terminated in error can consult the Help Center for appeal options.",
      "steps": [
        "Visit the Instagram Help Center",
        "Report that your account was terminated in error",
        "Follow the provided appeal process"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires removal of reported content that violates policies to protect user safety and platform integrity",
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
            "reason": "Enables Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content that constitutes harmful or unlawful behavior",
          "Content that violates Meta's terms or policies",
          "Content that threatens user safety, security, or well-being",
          "Spam or content that creates bad user experiences"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Law Compliance",
        "summary": "Requires access, preservation, use and sharing of user information in response to legal requests, court orders, and to prevent harm and promote safety",
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
            "example": "Court-issued subpoena, law enforcement search warrant",
            "reason": "Required by law for Meta to respond to legitimate legal processes"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests from authorities",
          "Content that violates applicable law",
          "Content that threatens safety, security and integrity of platform or users"
        ]
      },
      {
        "id": "meta-pp-information-preservation",
        "reference": "Section 8 - Information Retention",
        "summary": "Preserves information for extended periods when needed to comply with legal obligations, prevent harm, investigate violations, or protect Meta's rights and property",
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
            "example": "Evidence of terms violation, safety threat, or legal obligation",
            "reason": "Justifies extended retention beyond normal deletion timelines"
          }
        ],
        "removalCriteria": [
          "Information no longer needed for product provision",
          "Information no longer required for legal compliance",
          "Information no longer necessary to protect legitimate interests"
        ]
      },
      {
        "id": "meta-pp-user-control",
        "reference": "Section 6 - Managing and Deleting Information",
        "summary": "Provides users tools to view, manage, download and delete their information through platform settings and help centers",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User account access and identity verification",
            "example": "Login credentials, account verification",
            "reason": "Ensures only authorized users can manage their information"
          }
        ],
        "removalCriteria": [
          "User-requested deletion of their own information",
          "User-requested download or portability of their data",
          "User privacy settings changes"
        ]
      },
      {
        "id": "meta-pp-sharing-control",
        "reference": "Section 3 - Information Sharing on Meta Products",
        "summary": "Regulates how user information is shared on Meta Products and with integrated partners, including content others share about users",
        "quote": "On Meta Products Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content. With integrated partners You can choose to connect with integrated partners who use our Products. If you do, these integrated partners receive information about you and your activity.",
        "contentTypes": [
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
            "description": "Evidence of unauthorized sharing or privacy violation",
            "example": "URLs to content shared without permission, screenshots of privacy violations",
            "reason": "Enables Meta to investigate and address unauthorized information sharing"
          }
        ],
        "removalCriteria": [
          "Content shared without user consent",
          "Information shared beyond user's privacy settings",
          "Unauthorized sharing by integrated partners"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail for questions, complaints or requests regarding their information and privacy policy violations",
      "steps": [
        "Contact Meta online at help.meta.com/support/privacy",
        "Alternatively, mail concerns to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, contact local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "instagram-new-1758629259190-0",
    "reference": "IG-BULLYING",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy addressing bullying and harassment on Instagram, including reporting mechanisms and enforcement procedures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "ig-bullying-unwanted-contact",
        "reference": "Tier 1",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation",
        "quote": "Everyone is protected from: Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
        "contentTypes": [
          "personal",
          "other"
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
            "reason": "To demonstrate the contact meets the criteria of being repeated, sexually harassing, or mass-directed"
          }
        ],
        "removalCriteria": [
          "Contact is repeated",
          "Contact is sexually harassing",
          "Contact is directed at a large number of individuals with no prior solicitation"
        ]
      },
      {
        "id": "ig-bullying-sexual-harassment",
        "reference": "Tier 1",
        "summary": "Prohibits statements of intent to engage in sexual activity, severe sexualized commentary, and attacks through derogatory terms related to sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity. Severe sexualized commentary. Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of sexual harassment content",
            "example": "Screenshots of posts containing sexual statements, sexualized commentary, or derogatory sexual terms",
            "reason": "To verify the content violates sexual harassment policies"
          }
        ],
        "removalCriteria": [
          "Statements of intent to engage in sexual activity",
          "Severe sexualized commentary",
          "Derogatory sexualized photoshop or drawings",
          "Attacks through derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "ig-bullying-private-info-threats",
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
            "example": "Screenshots showing threats to share phone numbers, addresses, email addresses, or medical records",
            "reason": "To verify threats were made to release specific types of private information"
          }
        ],
        "removalCriteria": [
          "Threats to release private phone number",
          "Threats to release residential address",
          "Threats to release email address",
          "Threats to release medical records"
        ]
      },
      {
        "id": "ig-bullying-degrading-bodily-functions",
        "reference": "Tier 1",
        "summary": "Prohibits content that degrades or expresses disgust toward individuals depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
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
            "description": "Evidence of degrading content related to bodily functions",
            "example": "Screenshots showing content that degrades individuals depicted during bodily functions",
            "reason": "To verify the content degrades individuals in vulnerable bodily states"
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
        "id": "ig-bullying-sexual-activity-claims",
        "reference": "Tier 2",
        "summary": "Prohibits claims about sexual activity for minors, private adults, and limited scope public figures, except in the context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of sexual activity claims against protected individuals",
            "example": "Screenshots showing claims about someone's sexual behavior or activities",
            "reason": "To verify claims were made about sexual activity of protected individuals"
          }
        ],
        "removalCriteria": [
          "Claims about sexual activity of minors",
          "Claims about sexual activity of private adults",
          "Claims about sexual activity of limited scope public figures"
        ]
      },
      {
        "id": "ig-bullying-adult-sexualization",
        "reference": "Tier 2",
        "summary": "Prohibits content sexualizing adults when targeting minors, private adults, and limited scope public figures",
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
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots showing sexualized content directed at minors, private adults, or limited scope public figures",
            "reason": "To verify content inappropriately sexualizes protected individuals"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "ig-bullying-manipulated-imagery",
        "reference": "Tier 2",
        "summary": "Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of manipulated imagery targeting physical characteristics",
            "example": "Screenshots showing images that have been edited to highlight or circle physical features",
            "reason": "To verify images were manipulated to negatively target physical characteristics"
          }
        ],
        "removalCriteria": [
          "Content manipulated to highlight physical characteristics",
          "Content manipulated to circle physical characteristics",
          "Content manipulated to negatively draw attention to physical features"
        ]
      },
      {
        "id": "ig-bullying-unwanted-manipulated-imagery-self-report",
        "reference": "Tier 3",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
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
            "description": "Self-report from the targeted individual",
            "example": "Report from the person depicted in the manipulated imagery",
            "reason": "Self-reporting is required to establish the imagery is unwanted"
          },
          {
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots showing the manipulated images",
            "reason": "To verify the content contains manipulated imagery of the reporting individual"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Content is self-reported by the targeted individual",
          "Target is a private minor, private adult, or minor involuntary public figure"
        ]
      },
      {
        "id": "ig-bullying-unwanted-pages-groups-events",
        "reference": "Additional Requirements",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative",
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
            "example": "Report submitted by the targeted individual or their legal representative",
            "reason": "Required to establish the targeting is unwanted by the affected party"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Links to Pages, Groups, or Events that target the individual",
            "reason": "To verify the targeting occurs through these specific platform features"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by the target or authorized representative",
          "Content is unwanted by the targeted individual"
        ]
      },
      {
        "id": "ig-bullying-unwanted-content-confirmation",
        "reference": "Additional Requirements",
        "summary": "Removes content that requires target reporting or indicates direct targeting when confirmed unwanted by the target or authorized representative",
        "quote": "Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target (for example: the target is tagged in the post or comment). We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Written confirmation from the targeted individual or their legal representative",
            "reason": "Required to establish the content is unwanted by the affected party"
          },
          {
            "description": "Evidence of direct targeting",
            "example": "Screenshots showing the target is tagged in posts or comments",
            "reason": "To verify the content directly targets the individual"
          }
        ],
        "removalCriteria": [
          "Content directly targets an individual",
          "Target is tagged in the post or comment",
          "Content is confirmed unwanted by target or authorized representative"
        ]
      },
      {
        "id": "ig-bullying-sexually-harassing-contact",
        "reference": "Additional Requirements",
        "summary": "Removes sexually harassing contact when confirmed unwanted by the recipient or authorized representative",
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
            "description": "Confirmation from recipient or authorized representative that contact is unwanted",
            "example": "Written confirmation from the recipient or their legal representative",
            "reason": "Required to establish the sexually harassing contact is unwanted"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots of messages or content showing sexual harassment",
            "reason": "To verify the contact constitutes sexual harassment"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Contact is confirmed unwanted by recipient or authorized representative",
          "Content is shared in an unwanted context"
        ]
      },
      {
        "id": "ig-bullying-public-figure-sexualization",
        "reference": "Additional Requirements",
        "summary": "Removes content sexualizing public figures when confirmed unwanted by the target or authorized representative",
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
            "example": "Written confirmation from the public figure or their legal representative",
            "reason": "Required to establish the sexualizing content is unwanted by the public figure"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots showing content that sexualizes the public figure",
            "reason": "To verify the content inappropriately sexualizes the individual"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Content is confirmed unwanted by target or authorized representative"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through the Support Inbox and request another review if they believe the decision was incorrect",
      "steps": [
        "Report is submitted and reviewed by Meta",
        "User receives notification of review decision",
        "Detailed decision information is provided in Support Inbox",
        "If user disagrees, they can request another review through appeal option",
        "Final response is sent to Support Inbox after re-review"
      ]
    }
  },
  {
    "id": "instagram-new-1758629259190-1",
    "reference": "IG-COPYRIGHT",
    "title": "Copyright and Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA procedures, and intellectual property protection on Instagram.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "Copyright and Intellectual Property Policy",
        "summary": "Prohibits posting content that violates copyright law and provides mechanisms for copyright holders to report infringement",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form. We also provide information about how Instagram and Threads address reported copyright infringement.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Copyright infringement report form completion",
            "example": "Filling out the provided copyright reporting form",
            "reason": "To provide Instagram with necessary information to process copyright infringement claims"
          },
          {
            "description": "Information required for copyright report",
            "example": "Specific information as outlined in copyright reporting requirements",
            "reason": "To substantiate copyright ownership and identify infringing content"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from copyright owner",
          "Content is reported through proper copyright infringement reporting channels",
          "Content violates someone else's intellectual property rights"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "Copyright and Intellectual Property Policy",
        "summary": "Prohibits repeatedly posting content that violates intellectual property rights and enforces consequences for repeat infringement",
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
            "example": "Multiple instances of posting copyrighted content without permission",
            "reason": "To identify accounts that systematically violate intellectual property rights"
          }
        ],
        "removalCriteria": [
          "User repeatedly posts content that violates intellectual property rights",
          "Pattern of intellectual property infringement is established"
        ]
      },
      {
        "id": "ig-copyright-counter-notification",
        "reference": "Copyright and Intellectual Property Policy",
        "summary": "Provides process for users to submit DMCA counter-notifications when they believe their content was wrongfully removed for copyright infringement",
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
            "description": "DMCA counter-notification submission",
            "example": "Proper counter-notification following DMCA procedures",
            "reason": "To allow users to dispute wrongful copyright takedown claims"
          }
        ],
        "removalCriteria": [
          "Content was removed due to copyright report",
          "User believes removal was incorrect or unauthorized"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit DMCA counter-notifications and retract intellectual property reports they have submitted",
      "steps": [
        "Submit DMCA counter-notification through Instagram's process",
        "Retract intellectual property report if submitted in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758629259190-2",
    "reference": "IG-NCII-HELP",
    "title": "Non-Consensual Intimate Image Support",
    "summary": "Help center resource for reporting and addressing non-consensual intimate imagery violations.",
    "url": "https://help.instagram.com/1769410010008691",
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "ig-ncii-help-01",
        "reference": "IG-NCII-HELP",
        "summary": "Prohibits intimate photos shared without consent and removes them upon report through Community Standards enforcement",
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
            "description": "Report the post through Instagram's built-in reporting system",
            "example": "Use the anonymous photo reporting feature",
            "reason": "Required for Community Operations team to review and potentially remove the content"
          },
          {
            "description": "Screenshot of the post for documentation purposes",
            "example": "Take a screenshot of the intimate photo post",
            "reason": "May be needed for further action or legal proceedings"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Content is an intimate photo shared without consent"
        ]
      },
      {
        "id": "ig-ncii-help-02",
        "reference": "IG-NCII-HELP",
        "summary": "Prohibits threats to share private content including messages, photos, and videos, and removes profiles engaging in such behavior",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
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
            "description": "Report the threatening profile through built-in reporting options",
            "example": "Report a profile threatening to share private photos",
            "reason": "Enables Instagram to investigate and take action against threatening behavior"
          }
        ],
        "removalCriteria": [
          "Profile is threatening to share private content",
          "Profile is requesting money in exchange for not sharing private content",
          "Profile is making demands that make the victim uncomfortable"
        ]
      },
      {
        "id": "ig-ncii-help-03",
        "reference": "IG-NCII-HELP",
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
            "description": "Initial report of the intimate image through Community Standards reporting",
            "example": "Report the non-consensual intimate image",
            "reason": "Required to create a hash for photo-matching technology to prevent re-sharing"
          }
        ],
        "removalCriteria": [
          "Image has been previously reported and removed for violating Community Standards",
          "Image matches photo-matching technology database of prohibited intimate content"
        ]
      },
      {
        "id": "ig-ncii-help-04",
        "reference": "IG-NCII-HELP",
        "summary": "Allows reporting of content without requiring an Instagram account through friend assistance",
        "quote": "If you don't have an Instagram account, you can report things with the help of a friend.",
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
            "description": "Assistance from a friend who has an Instagram account to file the report",
            "example": "A friend reports the content on behalf of the victim",
            "reason": "Enables victims without accounts to still report harmful content"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards regardless of reporter's account status"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758629259190-3",
    "reference": "IG-IMPERSONATION",
    "title": "Impersonation Policy and Reporting",
    "summary": "Policy and procedures for reporting accounts that impersonate individuals or entities.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION",
        "summary": "Prohibits creating Instagram accounts pretending to be another person and provides reporting mechanisms for impersonation violations",
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
            "example": "Using the in-app reporting feature to report impersonation",
            "reason": "Instagram requires reports to be submitted through their official channels for verification and processing"
          },
          {
            "description": "Non-Instagram users must fill out a specific form",
            "example": "Completing the impersonation report form for users without Instagram accounts",
            "reason": "Alternative reporting method needed for users who don't have Instagram accounts to access the platform's reporting system"
          }
        ],
        "removalCriteria": [
          "Account was created pretending to be another person",
          "Account is impersonating someone without authorization"
        ]
      },
      {
        "id": "ig-impersonation-third-party",
        "reference": "IG-IMPERSONATION",
        "summary": "Allows third-party reporting of impersonation accounts with anonymous reporting protections",
        "quote": "If someone you know is being impersonated, learn more about how to report the account. Keep in mind that your report is anonymous, except if you're reporting an intellectual property infringement. The account you reported won't see who reported them.",
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
            "description": "Third-party reporter must identify the impersonated person",
            "example": "Providing information about the person being impersonated",
            "reason": "Instagram needs to verify the legitimacy of the impersonation claim and identify the affected party"
          }
        ],
        "removalCriteria": [
          "Account is impersonating someone known to the reporter",
          "Impersonation can be verified through the reporting process"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758629259190-4",
    "reference": "IG-APPEAL-PROCESS",
    "title": "Content Appeal and Counter-Notice Procedures",
    "summary": "Procedures for appealing content removal decisions and filing counter-notifications.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-23T12:07:39.190Z",
    "policies": [
      {
        "id": "ig-appeal-oversight-board",
        "reference": "IG-APPEAL-PROCESS",
        "summary": "Provides appeal process to the Oversight Board for content decisions after completing the initial review process",
        "quote": "There are two types of content decisions you can appeal to the Oversight Board: a decision about your content or a decision about content by others that you've reported.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Must first complete the request a review process before appealing to Oversight Board",
            "example": "Going through Instagram's internal review process first",
            "reason": "Required prerequisite step before Oversight Board appeal becomes available"
          },
          {
            "description": "Reference number for tracking appeal status",
            "example": "Appeal reference number provided after submission",
            "reason": "Allows users to check appeal status on Oversight Board website"
          }
        ],
        "removalCriteria": [
          "Content must have been reviewed twice by Instagram and user still disagrees with decision",
          "Appeal must be submitted within 15 days of the decision",
          "Content and content decisions must be eligible for appeal (not all content qualifies)"
        ]
      },
      {
        "id": "ig-appeal-prerequisite-review",
        "reference": "IG-APPEAL-PROCESS",
        "summary": "Requires completion of internal review process before Oversight Board appeals for both user content and reported content",
        "quote": "If you don't think that your content should have been taken down and you want to appeal to the Oversight Board, you must first go through the request a review process. If you reported content from others that wasn't taken down and you want to appeal to the Oversight Board to have the content removed, you must first go through the request a review process.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Must complete request a review process for own content that was removed",
            "example": "Using Instagram's internal content review system",
            "reason": "Required step before escalating to Oversight Board for removed content"
          },
          {
            "description": "Must complete request a review process for reported content that wasn't removed",
            "example": "Using Instagram's internal review system for content reported by user",
            "reason": "Required step before escalating to Oversight Board for content that should be removed"
          }
        ],
        "removalCriteria": [
          "User must have gone through internal review process first",
          "User must still disagree with Instagram's decision after review",
          "Content must be eligible for Oversight Board review"
        ]
      },
      {
        "id": "ig-appeal-time-limit",
        "reference": "IG-APPEAL-PROCESS",
        "summary": "Establishes 15-day time limit for appealing content decisions to the Oversight Board",
        "quote": "Keep in mind that you have 15 days from when the decision was made to appeal to the Oversight Board. After 15 days, the window to appeal a decision has expired and you'll no longer be able to submit it.",
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
            "description": "Time limit to submit appeal to Oversight Board from when decision was made"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Appeal must be submitted within the specified timeframe",
            "example": "Submitting appeal within 15 days of Instagram's content decision",
            "reason": "Appeals submitted after the deadline will not be accepted"
          }
        ],
        "removalCriteria": [
          "Appeal must be submitted within 15 days of the original decision",
          "After 15 days, appeals will no longer be accepted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Two-tier appeal process requiring initial internal review followed by optional Oversight Board appeal within 15 days",
      "steps": [
        "First go through Instagram's request a review process for your content or content you reported",
        "If you still disagree after Instagram's review, you may be eligible to appeal to the Oversight Board",
        "Submit appeal to Oversight Board within 15 days of the original decision",
        "Oversight Board decides whether to review your appeal (they only select certain appeals)",
        "Check appeal status on Oversight Board website using your reference number"
      ]
    }
  }
],
};
