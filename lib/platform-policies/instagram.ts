import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community standards covering bullying, harassment, NCII, privacy violations, and content removal policies across Meta platforms including Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-22T11:26:06.023Z",
    "policies": [
      {
        "id": "meta-cs-ncii",
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
        "id": "meta-cs-bullying",
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
        "id": "meta-cs-privacy",
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
        "id": "meta-cs-impersonation",
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
          "Account or content uses another's name, photos, or other identifying information without authorization",
          "The profile or content is intended to mislead or deceive others about who is behind it",
          "The account is not clearly marked as a parody or fan account"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "META-CS-IP-INFRINGEMENT",
        "summary": "Prohibits third-party intellectual property infringement, including unauthorized use of copyrighted images and content.",
        "quote": "Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content.",
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
            "description": "URL(s) of the infringing content",
            "reason": "To locate the content that allegedly infringes intellectual property rights"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify standing to make the intellectual property claim"
          },
          {
            "description": "Description of the copyrighted work or intellectual property being infringed",
            "reason": "To identify what rights are being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission from the rights holder",
          "Content infringes on trademark rights",
          "Use of intellectual property is not covered by fair use or other legal exceptions"
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
    "accessTimestamp": "2025-09-22T11:26:06.023Z",
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
            "description": "Report through Instagram's intellectual property reporting system",
            "reason": "To formally notify Instagram of intellectual property violations"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To establish legal standing to request removal"
          },
          {
            "description": "Identification of the specific content that violates intellectual property rights",
            "reason": "To enable Instagram to locate and review the infringing content"
          }
        ],
        "removalCriteria": [
          "Content posted without permission of the rights holder",
          "Content violates intellectual property rights including copyright",
          "Private or confidential information shared without authorization"
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
            "description": "Report through Instagram's standard reporting mechanisms",
            "reason": "To notify Instagram of policy violations"
          },
          {
            "description": "Specific identification of violating content",
            "reason": "To enable Instagram to locate and review the reported content"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Terms of Use",
          "Content violates Community Standards",
          "Content removal required by law"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, requiring users to provide accurate information and obtain permission before creating accounts for others.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
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
            "description": "Evidence that the account is impersonating you or someone else",
            "reason": "To demonstrate unauthorized use of identity"
          },
          {
            "description": "Proof of your identity or authorization to report on behalf of the impersonated person",
            "reason": "To verify legitimate reporting and prevent false claims"
          },
          {
            "description": "Identification of the specific impersonating account or content",
            "reason": "To enable Instagram to locate and review the impersonating content"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person without permission",
          "Account created for someone else without their express permission",
          "Inaccurate information provided with intent to deceive"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can terminate or disable accounts that create risk, violate terms or policies, or repeatedly infringe intellectual property rights, with advance notification when possible.",
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
            "description": "Documentation of repeated policy violations or intellectual property infringement",
            "reason": "To demonstrate pattern of harmful behavior warranting account termination"
          },
          {
            "description": "Evidence of risk to community or legal exposure created by the account",
            "reason": "To justify protective action against the account"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Repeated violations of Terms of Use or Community Standards",
          "Repeated infringement of intellectual property rights",
          "Account termination required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with options to request review, unless doing so would create legal liability or compromise system integrity.",
      "steps": [
        "Instagram will notify you of content removal or account action",
        "Instagram will explain available options for requesting another review",
        "Submit appeal through provided channels if notification includes review options",
        "Instagram will review the appeal unless restricted by legal or technical limitations"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-22T11:26:06.023Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-10",
        "summary": "Meta removes content in response to legal requests, to comply with applicable law, and to promote safety, security and integrity of users and the public.",
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
            "example": "Court-issued subpoena or search warrant",
            "reason": "Required for legal compliance and content removal"
          }
        ],
        "removalCriteria": [
          "Valid legal request from civil litigants, law enforcement or government authorities",
          "Content violates applicable law",
          "Content threatens safety, security and integrity of Meta Products, users, employees, property and the public"
        ]
      },
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-2",
        "summary": "Meta uses information to detect, prevent and combat harmful or unlawful behavior, including reviewing and removing content reported by users.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We use information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts, identity and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "description": "Content report identifying harmful or unlawful behavior",
            "example": "Report of non-consensual intimate imagery or harassment",
            "reason": "Enables Meta to review and potentially remove harmful content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported by users as violating community standards"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-CONSENT",
        "summary": "Meta provides identity verification services including facial recognition technology to help protect against suspicious activity, impersonation and identity misuse.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
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
        "evidenceRequirements": [
          {
            "description": "Photo or video selfie for identity verification",
            "example": "Selfie photo matching profile information",
            "reason": "To verify account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious account activity detected",
          "Evidence of impersonation or identity misuse",
          "Account verification fails to confirm legitimate ownership"
        ]
      },
      {
        "id": "meta-pp-data-sharing-protection",
        "reference": "META-PP-4",
        "summary": "Meta does not sell user information and requires partners and third parties to follow rules about how they can use and disclose information provided by Meta.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized information sharing or sale",
            "example": "Documentation showing third party misuse of personal data",
            "reason": "To investigate violations of data sharing agreements"
          }
        ],
        "removalCriteria": [
          "Partners or third parties violate rules about information use and disclosure",
          "Unauthorized sharing or selling of user information",
          "Misuse of information provided by Meta to external parties"
        ]
      },
      {
        "id": "meta-pp-content-preservation",
        "reference": "META-PP-8",
        "summary": "Meta may preserve information for extended periods for legitimate purposes including preventing harm, investigating violations, promoting safety and protecting rights.",
        "quote": "We may access or preserve your information for an extended amount of time. In some instances and for specific reasons, we'll keep information for an extended period of time. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products",
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
            "description": "Evidence of harm, policy violations, or safety threats",
            "example": "Documentation of harassment, threats, or policy violations",
            "reason": "To justify extended preservation of information for safety and legal purposes"
          }
        ],
        "removalCriteria": [
          "Information needed to prevent harm to users or others",
          "Evidence of violations of terms or policies requiring investigation",
          "Information necessary to promote safety, security and integrity",
          "Information needed to protect Meta's rights, property or products"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Some content removal decisions are reviewed by the Oversight Board, and users have rights to access, correct, withdraw consent, port, download, erase information, object to processing, and make complaints.",
      "steps": [
        "Contact Meta through provided contact methods for privacy-related concerns",
        "Submit requests through Facebook settings and Instagram settings for data rights",
        "Contact Data Protection Officer for Meta Platforms Ireland Limited if needed",
        "Lodge complaint with Irish Data Protection Commission or local supervisory authority",
        "Some violation decisions may be escalated to Oversight Board review"
      ]
    }
  },
  {
    "id": "instagram-new-1758540366023-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Detailed policy covering bullying, harassment, threats, and degrading content with specific protections for minors and private individuals.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T11:26:06.023Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1-CONTACT",
        "summary": "Meta removes unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
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
            "description": "Evidence that contact is unwanted and falls into prohibited categories",
            "example": "Screenshots showing repeated messages or sexually harassing content",
            "reason": "To establish pattern of unwanted contact"
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
            "description": "Evidence of sexual statements or severe sexualized commentary",
            "example": "Screenshots of posts containing sexual intent or commentary",
            "reason": "To verify violation of sexual harassment policy"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity",
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "meta-bh-derogatory-photoshop",
        "reference": "META-BH-T1-PHOTOSHOP",
        "summary": "Meta removes derogatory sexualized photoshop or drawings and attacks through derogatory terms related to sexual activity.",
        "quote": "Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of manipulated imagery or derogatory sexual terms",
            "example": "Screenshots showing sexualized photoshopped images or derogatory sexual language",
            "reason": "To verify content violates harassment policy through sexual degradation"
          }
        ],
        "removalCriteria": [
          "Content contains derogatory sexualized photoshop or drawings",
          "Content attacks individuals using derogatory sexual terms"
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
            "example": "Screenshots showing threats to share personal contact information or medical records",
            "reason": "To verify threats against privacy"
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
        "reference": "META-BH-T2-SEXUAL-CLAIMS",
        "summary": "Meta provides additional protection for minors, private adults and limited scope public figures from claims about sexual activity, except in criminal contexts.",
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
            "description": "Evidence of claims about sexual activity targeting protected individuals",
            "example": "Screenshots of posts making sexual claims about minors or private adults",
            "reason": "To verify harassment through sexual claims"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of minors",
          "Content makes claims about sexual activity of private adults",
          "Content makes claims about sexual activity of limited scope public figures",
          "Exception: Criminal allegations of non-consensual sexual touching against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults and limited scope public figures.",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots showing sexualized content about private adults or minors",
            "reason": "To verify sexualization harassment"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors (any context)",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to specific physical characteristics when targeting protected individuals.",
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
            "description": "Evidence of manipulated images highlighting physical features",
            "example": "Screenshots showing circled or highlighted body parts in images",
            "reason": "To verify harassment through manipulated imagery"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to highlight physical characteristics",
          "Content circles or draws attention to specific body parts",
          "Content negatively emphasizes physical features"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-PAGES-GROUPS",
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
            "reason": "To confirm content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported as unwanted by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "META-BH-T3-UNWANTED-MANIPULATED",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Self-report from target individual",
            "example": "Direct report from the person depicted in manipulated imagery",
            "reason": "To confirm imagery is unwanted by the depicted person"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content is self-reported as unwanted"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEXUALIZATION",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target or authorized representative.",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from public figure or their representative requesting removal",
            "reason": "To verify public figure considers sexualizing content unwanted"
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
      "summary": "Meta provides appeal options through Support Inbox notifications with request for additional review if users disagree with enforcement decisions.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Request another review if disagreeing with decision",
        "Provide additional context or information during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758540366023-1",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Comprehensive policy and resources for non-consensual intimate imagery (NCII) and sextortion prevention and response.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T11:26:06.023Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and takes action when becoming aware of such content.",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). We have strict rules against content or behaviour that exploits people, including sharing or threatening to share someone's intimate images.",
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
        "evidenceRequirements": [
          {
            "description": "Report the content through dedicated reporting option for private images",
            "example": "Use the specific reporting flow for intimate image abuse",
            "reason": "To identify and remove violating content"
          }
        ],
        "removalCriteria": [
          "Content or behaviour that exploits people",
          "Sharing intimate images without consent",
          "Threatening to share intimate images"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "META-NCII-002",
        "summary": "Meta prohibits sextortion, defined as threatening to reveal intimate images to force someone to do something against their will.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do. Sharing – or threatening to share – intimate images without consent is against Meta policies.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report threats or actual sharing of intimate images",
            "example": "Screenshots of threatening messages or shared intimate content",
            "reason": "To investigate and take action against sextortion attempts"
          }
        ],
        "removalCriteria": [
          "Threatening to reveal intimate images to coerce behavior",
          "Using intimate images as leverage for unwanted actions",
          "Forcing someone to send money, additional images, or have sexual contact"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "META-NCII-003",
        "summary": "Meta uses automated systems and specialized teams to detect, investigate, and remove accounts engaged in intimate image abuse at scale.",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content is detected through automated systems or user reports",
            "example": "Pattern recognition of abusive behavior",
            "reason": "To proactively identify and remove violating accounts"
          }
        ],
        "removalCriteria": [
          "Patterns associated with intimate image abuse behavior",
          "Accounts identified as engaging in criminal activity",
          "Content flagged by automated detection systems"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "META-NCII-004",
        "summary": "Meta restricts adults over 18 from starting private chats with teens they're not connected to and limits message requests to text-only until accepted.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages.",
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
            "description": "Evidence of unwanted contact from adults to teens",
            "example": "Screenshots of inappropriate messages or contact attempts",
            "reason": "To protect minors from potential exploitation"
          }
        ],
        "removalCriteria": [
          "Adults over 18 attempting to privately message unconnected teens",
          "Sending non-text content in message requests before acceptance",
          "Circumventing teen protection measures"
        ]
      },
      {
        "id": "meta-teen-account-defaults",
        "reference": "META-NCII-005",
        "summary": "Meta automatically sets teen accounts under 16 (18 in certain countries) to private and prevents unknown adults from tagging, mentioning, or including them in content.",
        "quote": "We automatically set teens' accounts under 16 (and under 18 in certain countries) to private when they join Instagram. We also don't allow people who teens don't follow to tag or mention them, or to include their content in Reels Remixes or Guides by default.",
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
            "description": "Evidence of unauthorized tagging, mentioning, or content inclusion of teens",
            "example": "Screenshots showing teens being tagged by unknown accounts",
            "reason": "To maintain teen privacy and safety settings"
          }
        ],
        "removalCriteria": [
          "Tagging teens by accounts they don't follow",
          "Mentioning teens without connection",
          "Including teen content in Reels Remixes or Guides without permission"
        ]
      },
      {
        "id": "meta-stopncii-integration",
        "reference": "META-NCII-006",
        "summary": "Meta participates in StopNCII.org for adults over 18 to prevent sharing of intimate images through hash-generating technology.",
        "quote": "If you have an intimate image or video that was taken when you were over 18 and are concerned that it will be shared or reshared online, you can take steps to help prevent further circulation through StopNCII.org. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
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
        "evidenceRequirements": [
          {
            "description": "Create a hash of intimate images through StopNCII.org",
            "example": "Digital fingerprint generated without sharing actual image",
            "reason": "To proactively prevent sharing without exposing the content"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through StopNCII.org",
          "Attempts to share intimate content with registered digital fingerprints"
        ]
      },
      {
        "id": "meta-takeitdown-integration",
        "reference": "META-NCII-007",
        "summary": "Meta participates in Take It Down for individuals under 18 to prevent sharing of intimate images through NCMEC's hash system.",
        "quote": "If you have a nude or sexual photo or video of yourself that was taken when you were under 18 and are concerned that it will be shared or reshared online, you can take steps to help prevent further circulation through TakeItDown.NCMEC.org. Once you submit the hash value to NCMEC, companies like ours can use those hashes to prevent the content from being posted on our apps in the future.",
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
        "evidenceRequirements": [
          {
            "description": "Submit hash through Take It Down for content created when under 18",
            "example": "Hash value generated through NCMEC's system",
            "reason": "To prevent sharing of intimate images of minors"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through Take It Down",
          "Content depicting individuals under 18 in intimate situations",
          "Attempts to post content with registered NCMEC hashes"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "META-NCII-008",
        "summary": "Meta's teams review reports 24/7 in more than 70 languages and take action on violating content and behavior.",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behaviour.",
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
          "response": {
            "value": 24,
            "unit": "hours",
            "description": "Continuous review process operates 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Submit report through platform reporting mechanisms",
            "example": "Use dedicated reporting flows for different types of violations",
            "reason": "To enable multilingual review and appropriate action"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's policies",
          "Behavior that exploits or harms users",
          "Content reported through official channels"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758540366023-2",
    "reference": "IG-HARASSMENT",
    "title": "Instagram Harassment and Bullying Reporting",
    "summary": "Specific Instagram help center page for reporting harassment and bullying with direct reporting mechanisms.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-22T11:26:06.023Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-photos",
        "reference": "IG-HARASSMENT-PHOTO-POLICY",
        "summary": "Instagram prohibits photos intended to bully or harass someone and provides reporting mechanisms for such content.",
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
            "description": "Report the harassing photo or account through Instagram's reporting system",
            "example": "Use the report function on the specific photo or profile",
            "reason": "To initiate Instagram's review process for policy violations"
          }
        ],
        "removalCriteria": [
          "Photo is intended to bully or harass someone",
          "Account is established with the intent of bullying or harassing another person"
        ]
      },
      {
        "id": "ig-harassment-impersonation",
        "reference": "IG-HARASSMENT-IMPERSONATION",
        "summary": "Instagram addresses cases where someone is pretending to be you or someone else, which often involves unauthorized use of personal images.",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
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
            "description": "Report the impersonating account through Instagram's dedicated impersonation reporting process",
            "example": "Follow the specific reporting flow for impersonation cases",
            "reason": "To verify identity and establish unauthorized use of personal information or images"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be you or someone else",
          "Unauthorized use of personal images or information for impersonation"
        ]
      },
      {
        "id": "ig-harassment-blocking-option",
        "reference": "IG-HARASSMENT-BLOCKING",
        "summary": "Instagram recommends blocking users after reporting harassment or bullying as an additional protective measure.",
        "quote": "Once you've reported the abuse, consider blocking the person.",
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
            "description": "First report the abusive content or account",
            "example": "Use Instagram's reporting system before blocking",
            "reason": "To document the violation before taking personal protective measures"
          }
        ],
        "removalCriteria": [
          "Content or account has been reported for abuse",
          "User needs additional protection from harassing individual"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758540366023-3",
    "reference": "IG-APPEAL",
    "title": "Instagram Content Appeal Process",
    "summary": "Information on appealing content removal decisions and accessing the Oversight Board for complex cases.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-22T11:26:06.023Z",
    "policies": [
      {
        "id": "ig-appeal-content-review",
        "reference": "IG-APPEAL-REVIEW",
        "summary": "Users must first go through Instagram's internal review process before appealing content decisions to the Oversight Board.",
        "quote": "If you don't think that your content should have been taken down and you want to appeal to the Oversight Board, you must first go through the request a review process.",
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
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Must complete internal review process first",
            "example": "Request review through Instagram's standard process",
            "reason": "Required prerequisite before Oversight Board appeal"
          }
        ],
        "removalCriteria": [
          "Content must have been reviewed twice by Instagram",
          "User must still disagree with Instagram's decision after two reviews"
        ]
      },
      {
        "id": "ig-appeal-reported-content",
        "reference": "IG-APPEAL-REPORTED",
        "summary": "Users who reported content that wasn't removed can appeal to the Oversight Board after going through the internal review process.",
        "quote": "If you reported content from others that wasn't taken down and you want to appeal to the Oversight Board to have the content removed, you must first go through the request a review process.",
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
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Must have previously reported the content",
            "example": "Original report submission through Instagram's reporting system",
            "reason": "Establishes standing to appeal non-removal decision"
          },
          {
            "description": "Must complete internal review process for reported content",
            "example": "Request review of the decision not to remove reported content",
            "reason": "Required prerequisite before Oversight Board appeal"
          }
        ],
        "removalCriteria": [
          "Content must have been reported and reviewed twice by Instagram",
          "Instagram must have decided not to remove the content",
          "User must still disagree with Instagram's decision after two reviews"
        ]
      },
      {
        "id": "ig-appeal-timeframe",
        "reference": "IG-APPEAL-DEADLINE",
        "summary": "Users have 15 days from when Instagram's decision was made to appeal to the Oversight Board.",
        "quote": "Keep in mind that you have 15 days from when the decision was made to appeal to the Oversight Board. After 15 days, the window to appeal a decision has expired and you'll no longer be able to submit it.",
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
          "response": {
            "value": 15,
            "unit": "days",
            "description": "Deadline to submit appeal to Oversight Board"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Must submit appeal within 15 days of Instagram's decision",
            "example": "Appeal submitted within 15 days of content removal or non-removal decision",
            "reason": "Statutory deadline for appeal eligibility"
          }
        ],
        "removalCriteria": [
          "Appeal must be submitted within 15 days of Instagram's decision",
          "After 15 days, appeals are no longer accepted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Two-tier appeal process: first through Instagram's internal review system, then potentially to the Oversight Board if still unsatisfied after two reviews.",
      "steps": [
        "First, go through Instagram's request a review process for your content or content you reported",
        "If Instagram reviews your case twice and you still disagree with the decision, you may be eligible to appeal to the Oversight Board",
        "Submit appeal to Oversight Board within 15 days of Instagram's decision",
        "Oversight Board decides whether to review your appeal (they only select certain eligible appeals)",
        "Check appeal status on Oversight Board's website using your reference number"
      ]
    }
  }
],
};
