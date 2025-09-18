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
    "accessTimestamp": "2025-09-18T22:12:20.337Z",
    "policies": [
      {
        "id": "meta-cs-ncii-policy",
        "reference": "META-CS-ADULT-SEXUAL-EXPLOITATION",
        "summary": "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content, and threatening to share them (sextortion).",
        "quote": "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content, and threatening to share them (sextortion).",
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
        "id": "meta-cs-bullying-policy",
        "reference": "META-CS-BULLYING-HARASSMENT",
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
        "id": "meta-cs-privacy-policy",
        "reference": "META-CS-PRIVACY-VIOLATIONS",
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
            "description": "Identification of the specific private information that was shared",
            "reason": "To assess the severity and scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains personal information used maliciously",
          "Information is shared without consent and is intended to harass or incite harassment"
        ]
      },
      {
        "id": "meta-cs-impersonation-policy",
        "reference": "META-CS-AUTHENTIC-IDENTITY",
        "summary": "Prohibits impersonating others (individuals, organizations) with an intent to deceive or mislead.",
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
            "description": "URL of the impersonating profile or content",
            "reason": "To identify the impersonating account or content"
          },
          {
            "description": "Proof of identity",
            "example": "Government-issued ID for a person or business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account or content is impersonating you or your entity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account uses another's name, photos, or other identifying information without authorization",
          "The profile or content is intended to mislead or deceive others about who is behind it",
          "The account is not clearly marked as a parody or fan account"
        ]
      },
      {
        "id": "meta-cs-intellectual-property-policy",
        "reference": "META-CS-THIRD-PARTY-IP",
        "summary": "Prohibits third-party intellectual property infringement, including unauthorized use of copyrighted images and content.",
        "quote": "Third-Party Intellectual Property Infringement",
        "contentTypes": [
          "intimate",
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
            "description": "URL(s) of the infringing content",
            "reason": "To locate the content that allegedly infringes intellectual property rights"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify the legitimacy of the intellectual property claim"
          },
          {
            "description": "Description of the copyrighted work or intellectual property being infringed",
            "reason": "To understand what specific rights are being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission",
          "Content infringes on trademark rights",
          "Content violates other intellectual property rights"
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
    "accessTimestamp": "2025-09-18T22:12:20.337Z",
    "policies": [
      {
        "id": "ig-intellectual-property-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission or violating intellectual property rights including copyright infringement.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
            "description": "Documentation showing ownership or necessary rights to the content",
            "reason": "To establish that you own or have obtained all necessary rights to the content"
          },
          {
            "description": "URL(s) of the infringing content on Instagram",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content posted without permission from the rights holder",
          "Content that violates intellectual property rights including copyright, trademark, or other IP violations",
          "Private or confidential information shared without authorization"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, including creating accounts for someone else without permission.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
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
            "description": "Evidence that someone is impersonating you or using your identity without permission",
            "reason": "To verify that unauthorized impersonation is occurring"
          },
          {
            "description": "Proof of your identity to establish you are the person being impersonated",
            "reason": "To confirm you have the right to report the impersonation"
          }
        ],
        "removalCriteria": [
          "Account impersonating another person without their permission",
          "Account created for someone else without their express permission",
          "Use of someone else's identity or likeness without authorization"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove or restrict content that violates Terms of Use, Community Standards, or is required by law, with notification and review options provided.",
        "quote": "We can remove or restrict any content or information you share on the Service if we believe that it violates these Terms of Use, our policies (including our Community Standards), or we are required to do so by law.",
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
          "removal": {
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request, may take up to 90 days to complete"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Specific identification of content that violates Terms of Use or Community Standards",
            "reason": "To identify content for review and potential removal"
          },
          {
            "description": "Explanation of how the content violates Instagram's policies",
            "reason": "To assess whether content meets removal criteria"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Community Standards",
          "Content removal required by applicable law",
          "Content creates risk or legal exposure for Instagram",
          "Content involves repeated intellectual property infringement"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can terminate or disable accounts that create risk, violate terms or policies, or repeatedly infringe intellectual property rights.",
        "quote": "We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your access to the Meta Products and Meta Company Products) to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies (including our Community Standards), if you repeatedly infringe other people's intellectual property rights, or where we are required to do so by law.",
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
            "description": "Documentation of Terms of Use or Community Standards violations",
            "reason": "To establish grounds for account action"
          },
          {
            "description": "Evidence of repeated intellectual property infringement if applicable",
            "reason": "To demonstrate pattern of violations warranting account termination"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Violation of Terms of Use or Community Standards",
          "Repeated infringement of intellectual property rights",
          "Account termination required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with options to request review, unless doing so would expose Instagram or others to legal liability or harm the community.",
      "steps": [
        "Instagram will notify you when content is removed or account action is taken",
        "Instagram will explain any options available to request another review",
        "Consult Instagram's Help Center if you believe your account was terminated in error",
        "Use Instagram's reporting and appeals channels (but do not make fraudulent or groundless reports)"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-18T22:12:20.337Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes content that violates terms or policies to promote safety, security and integrity, including harmful or unlawful behavior.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "description": "Report the violating content through Meta's reporting systems",
            "example": "Use the report button on the specific post or content",
            "reason": "Required for Meta to review and potentially remove content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content poses threats to user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests and complies with applicable law by accessing, preserving and sharing user information when legally required.",
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
            "example": "Court-issued subpoena for specific user information",
            "reason": "Required by law for Meta to process legal requests"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Promotion of safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-content-sharing",
        "reference": "META-PP-INFORMATION-SHARING",
        "summary": "Meta allows users to control how their information is shared and provides settings to manage privacy and content visibility.",
        "quote": "It's important to us that you know how to control your privacy, so we also show you where you can manage your information in the settings of the Meta Products you use. You can update these settings to shape your experience. We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use.",
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
            "description": "Access to account settings and privacy controls",
            "example": "Navigate to privacy settings in Facebook or Instagram",
            "reason": "Users can control their own content sharing and privacy"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content",
          "User modifies privacy settings to restrict access",
          "User downloads and deletes their information"
        ]
      },
      {
        "id": "meta-pp-account-deletion",
        "reference": "META-PP-DELETE-INFORMATION",
        "summary": "Meta provides options for users to delete their information or entire accounts through available tools and settings.",
        "quote": "Port, download or delete your information. Port your information, Download your information, Delete your information or account. You can learn more about how privacy works on Facebook and on Instagram, and in the Facebook Help Center.",
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
            "description": "Account access or identity verification for account deletion",
            "example": "Login credentials or identity verification process",
            "reason": "Required to verify account ownership before deletion"
          }
        ],
        "removalCriteria": [
          "User requests account deletion",
          "User requests specific information deletion",
          "Successful identity verification for account ownership"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy and data handling practices through the Facebook Help Center.",
      "steps": [
        "Visit the Facebook Help Center contact page",
        "Submit questions or concerns about privacy policy",
        "Contact local Data Protection Authority if applicable in your jurisdiction"
      ]
    }
  },
  {
    "id": "instagram-new-1758233540337-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying, harassment, and intimidation across Meta platforms including Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T22:12:20.337Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1-CONTACT",
        "summary": "Meta prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted contact pattern",
            "example": "Screenshots showing repeated messages or sexually harassing content",
            "reason": "To establish pattern of unwanted contact behavior"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes statements of intent to engage in sexual activity or advocating to engage in sexual activity, and severe sexualized commentary.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity. Severe sexualized commentary.",
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
            "description": "Evidence of sexual statements or commentary",
            "example": "Screenshots of posts containing sexual intent or severe sexualized commentary",
            "reason": "To verify violation of sexual activity policy"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity",
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexual-terms",
        "reference": "META-BH-T1-DEROGATORY",
        "summary": "Meta prohibits attacks through derogatory terms related to sexual activity and derogatory sexualized photoshop or drawings.",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut). Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of derogatory sexual content or manipulated imagery",
            "example": "Screenshots showing derogatory sexual terms or sexualized manipulated images",
            "reason": "To establish use of prohibited derogatory sexual content"
          }
        ],
        "removalCriteria": [
          "Content contains derogatory terms related to sexual activity",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta removes threats to release an individual's private phone number, residential address, email address or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
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
            "description": "Evidence of threats to release private information",
            "example": "Screenshots showing threats to share private contact details or medical records",
            "reason": "To verify threats against private information"
          }
        ],
        "removalCriteria": [
          "Content threatens to release private phone numbers",
          "Content threatens to release residential addresses",
          "Content threatens to release email addresses",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-CLAIMS",
        "summary": "Meta protects minors, private adults and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of sexual activity claims",
            "example": "Screenshots showing false claims about sexual behavior",
            "reason": "To verify inappropriate claims about sexual activity"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing target is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for enhanced protections"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity",
          "Target is a minor, private adult, or limited scope public figure",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots showing content that sexualizes the target",
            "reason": "To verify sexualization violation"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing target is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for protection"
          }
        ],
        "removalCriteria": [
          "Content sexualizes another adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATION",
        "summary": "Meta removes content manipulated to negatively highlight specific physical characteristics when targeting protected individuals.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots showing images altered to highlight physical features",
            "reason": "To verify image manipulation for harassment"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing target qualifies for enhanced protections",
            "reason": "To establish eligibility for protection"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics",
          "Manipulation negatively draws attention to specific features",
          "Target qualifies for enhanced protections"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-REPORTING-REQUIRED",
        "summary": "Meta removes content targeting private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
        "evidenceRequirements": [
          {
            "description": "Report from target or authorized representative",
            "example": "Direct report from the targeted individual or their legal representative",
            "reason": "Required for enforcement of this policy"
          },
          {
            "description": "Evidence of targeting through Pages/Groups/Events",
            "example": "Screenshots showing unwanted targeting via these platforms",
            "reason": "To verify the targeting behavior"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported by target or authorized representative",
          "Content is unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-sexually-harassing-contact",
        "reference": "META-BH-SEXUAL-HARASSMENT",
        "summary": "Meta removes sexually harassing contact when confirmed as unwanted by the recipient or their representative.",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from recipient or authorized representative",
            "example": "Statement from target confirming contact is unwanted",
            "reason": "Required to establish unwanted nature of contact"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots showing sexually harassing messages or content",
            "reason": "To verify the harassing nature of the contact"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-FIGURE",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or their representative.",
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
            "description": "Confirmation from target or authorized representative",
            "example": "Statement from public figure or their representative that content is unwanted",
            "reason": "Required for removal of sexualizing content targeting public figures"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots showing content that sexualizes the public figure",
            "reason": "To verify the sexualizing nature of the content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides multiple appeal options including requesting another review through notifications, the Support Inbox, and post-takedown appeal processes.",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758233540337-1",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Instagram Harassment Reporting Guidelines",
    "summary": "Specific guidelines for reporting harassment and bullying on Instagram platform.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T22:12:20.337Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-photos",
        "reference": "IG-REPORT-HARASSMENT-001",
        "summary": "Instagram removes photos or comments intended to bully or harass someone, and accounts established with intent to harass others.",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
        "contentTypes": [
          "personal",
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
            "description": "Report the harassing photo or comment through Instagram's reporting system",
            "example": "Use the report function on the specific post or account",
            "reason": "To identify the specific content that violates harassment policies"
          }
        ],
        "removalCriteria": [
          "Photo is intended to bully or harass someone",
          "Comment is intended to bully or harass someone",
          "Account is established with the intent of bullying or harassing another person"
        ]
      },
      {
        "id": "ig-impersonation-reporting",
        "reference": "IG-REPORT-HARASSMENT-002",
        "summary": "Instagram provides reporting mechanisms for cases where someone is pretending to be you or someone else, which may involve unauthorized use of images.",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Follow Instagram's impersonation reporting process",
            "example": "Report through the designated impersonation reporting channel",
            "reason": "To verify identity and establish unauthorized use of personal information or images"
          }
        ],
        "removalCriteria": [
          "Someone is pretending to be you or another person",
          "Unauthorized use of identity or personal content for impersonation"
        ]
      },
      {
        "id": "ig-community-standards-violation",
        "reference": "IG-REPORT-HARASSMENT-003",
        "summary": "Instagram removes accounts or posts that don't follow Community Standards, which includes various forms of abusive content.",
        "quote": "Learn how to report other accounts or posts that don't follow our Community Standards.",
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
            "description": "Report the violating account or post through Instagram's reporting system",
            "example": "Use the report function and specify Community Standards violation",
            "reason": "To identify content that violates Instagram's comprehensive community guidelines"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Community Standards",
          "Account behavior violates Instagram Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758233540337-2",
    "reference": "IG-IMPERSONATION",
    "title": "Instagram Impersonation Reporting",
    "summary": "Guidelines for reporting impersonation and fake accounts on Instagram.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-18T22:12:20.337Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION",
        "summary": "Instagram allows users to report accounts that are impersonating them, requiring government-issued ID verification and only accepting reports from the impersonated person or their representative.",
        "quote": "If someone created an Instagram account pretending to be you, you can report it to us. Make sure to provide all the requested info, including a photo of your government-issued ID. We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent).",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Photo of government-issued ID",
            "example": "Driver's license, passport, or state ID",
            "reason": "To verify the identity of the person being impersonated"
          },
          {
            "description": "All requested information in the report form",
            "example": "Details about the impersonating account and evidence of impersonation",
            "reason": "To provide sufficient information for Instagram to investigate the impersonation claim"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Report is submitted by the impersonated person or their authorized representative",
          "Proper identification verification is provided"
        ]
      },
      {
        "id": "ig-impersonation-reporting-process",
        "reference": "IG-IMPERSONATION",
        "summary": "Instagram provides multiple reporting methods for impersonation: through the app for existing users, via desktop/mobile browser, or through a form for users without Instagram accounts.",
        "quote": "If you have an Instagram account, you can report it to us from within the app, or visit this page on your desktop or mobile browser to secure your account. If you don't have an Instagram account, please fill out this form.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Access to Instagram reporting mechanisms",
            "example": "Instagram app, desktop browser, or web form",
            "reason": "To submit the impersonation report through official channels"
          }
        ],
        "removalCriteria": [
          "Report is submitted through official Instagram reporting channels",
          "User follows the appropriate reporting method based on their account status"
        ]
      },
      {
        "id": "ig-impersonation-anonymity",
        "reference": "IG-IMPERSONATION",
        "summary": "Instagram maintains anonymity for impersonation reports, with the reported account not being able to see who reported them, except in cases of intellectual property infringement.",
        "quote": "Keep in mind that your report is anonymous, except if you're reporting an intellectual property infringement. The account you reported won't see who reported them.",
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
          "Report is not related to intellectual property infringement (for anonymity protection)"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758233540337-3",
    "reference": "IG-CONTENT-APPEAL",
    "title": "Instagram Content Removal Appeals Process",
    "summary": "Process for appealing content removal decisions on Instagram.",
    "url": "https://help.instagram.com/1445818549016877",
    "accessTimestamp": "2025-09-18T22:12:20.337Z",
    "policies": [
      {
        "id": "ig-appeal-copyright",
        "reference": "IG-CONTENT-APPEAL-COPYRIGHT",
        "summary": "Users can submit appeals for content removed due to copyright reports through Instagram's appeals process.",
        "quote": "If your content was removed because of a copyright report, you can submit an appeal. Learn more about our appeals process",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Appeal submission through designated process",
            "example": "Following the appeals process link provided",
            "reason": "To challenge copyright-based content removal"
          }
        ],
        "removalCriteria": [
          "Content reported for copyright infringement through online form",
          "Intellectual property report submitted by rights owner"
        ]
      },
      {
        "id": "ig-appeal-ip-notification",
        "reference": "IG-CONTENT-APPEAL-IP-NOTIFY",
        "summary": "Instagram provides notification details including rights owner information when content is removed for intellectual property infringement.",
        "quote": "If we remove content you posted because of an intellectual property report submitted through our online form, you'll receive a notification that may include the name and email address of the rights owner who made the report and/or other details of the report.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Intellectual property report submitted through online form",
            "example": "Copyright or trademark infringement report",
            "reason": "To establish valid IP claim for content removal"
          }
        ],
        "removalCriteria": [
          "Intellectual property report submitted through official online form",
          "Valid rights owner claim established"
        ]
      },
      {
        "id": "ig-appeal-direct-resolution",
        "reference": "IG-CONTENT-APPEAL-DIRECT",
        "summary": "Users can contact rights owners directly to resolve intellectual property disputes before or instead of formal appeals.",
        "quote": "If you believe the content shouldn't have been removed, you can follow up with the rights owner directly to try to resolve the issue.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Direct communication with rights owner",
            "example": "Email or contact using provided rights owner information",
            "reason": "To attempt resolution outside formal appeal process"
          }
        ],
        "removalCriteria": [
          "Content removed due to intellectual property report",
          "Rights owner contact information available in removal notification"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/instagram/1417735471763678?locale=en_US&helpref=faq_content",
      "summary": "Instagram provides an appeals process specifically for copyright-related content removals, with options for direct resolution with rights owners.",
      "steps": [
        "Receive notification with rights owner details when content is removed",
        "Option 1: Contact rights owner directly to resolve the issue",
        "Option 2: Submit formal appeal through Instagram's appeals process for copyright reports",
        "Access additional resources about music usage and copyright compliance"
      ]
    }
  }
],
};
