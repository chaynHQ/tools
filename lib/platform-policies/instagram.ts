import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "The Community Standards outline what is and isn't allowed on Facebook, Instagram, Messenger and Threads, including policies on bullying, harassment, privacy violations, and content removal.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T22:19:05.208Z",
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
          "Account or content uses another's name, photos, or other identifying information without authorization",
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
            "description": "Description of the copyrighted work being infringed",
            "reason": "To identify the specific intellectual property being violated"
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
    "accessTimestamp": "2025-09-18T22:19:05.208Z",
    "policies": [
      {
        "id": "ig-tou-private-content",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission.",
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
            "description": "Identification of the private or confidential content posted without permission",
            "reason": "To locate the specific content that violates privacy"
          },
          {
            "description": "Evidence that the content is private or confidential",
            "reason": "To establish that the content was not meant to be public"
          },
          {
            "description": "Proof that permission was not granted to share the content",
            "reason": "To confirm unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Content contains private or confidential information",
          "Content was posted without the subject's permission",
          "Content violates someone's privacy rights"
        ]
      },
      {
        "id": "ig-tou-impersonation",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, including creating accounts for someone else without permission.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence that someone is impersonating you or using your identity without permission",
            "reason": "To establish unauthorized use of identity"
          },
          {
            "description": "Proof of your actual identity",
            "reason": "To verify you are the legitimate person being impersonated"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific impersonation content"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person without permission",
          "False identity information is being used",
          "Account was created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-tou-content-removal",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove or restrict content that violates Terms of Use, policies, or Community Standards.",
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
            "description": "Deletion process begins no more than 30 days after request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Identification of content that violates Terms of Use or Community Standards",
            "reason": "To locate the violating content for review"
          },
          {
            "description": "Explanation of how the content violates specific policies",
            "reason": "To assess the violation against platform standards"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Terms of Use",
          "Content violates Instagram Community Standards",
          "Content violates other Instagram policies",
          "Removal is required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can request another review of content removal or account termination decisions through Instagram's Help Center, with notification and explanation provided unless it would expose Instagram or others to legal liability.",
      "steps": [
        "Visit Instagram Help Center to learn about reporting and appeals",
        "Submit a request for review of the content removal or account action",
        "Wait for Instagram's response with explanation of options available",
        "Follow any additional steps provided in the response"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Meta Privacy Policy explaining how Meta collects and uses user data across Facebook, Instagram and Messenger platforms.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-18T22:19:05.208Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content-removal",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes harmful or unlawful content through automated and manual review processes to promote safety, security and integrity.",
        "quote": "Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "description": "Report the harmful content through Meta's reporting mechanisms",
            "example": "Use the report button on the content or contact Meta support",
            "reason": "Required to initiate review and potential removal process"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported by users and confirmed to violate policies"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants by accessing, preserving and sharing user information when legally required.",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities.",
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
            "reason": "Legal compliance requirement for information disclosure"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Court orders or law enforcement requests with proper jurisdiction"
        ]
      },
      {
        "id": "meta-pp-terms-violations",
        "reference": "META-PP-POLICY-ENFORCEMENT",
        "summary": "Meta finds and addresses violations of terms or policies through automated processing and manual review, with some decisions reviewed by the Oversight Board.",
        "quote": "Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board",
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
            "description": "Evidence of terms or policy violations",
            "example": "Screenshots or links to violating content",
            "reason": "Required to assess and confirm policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms of service",
          "Content violates Meta's community policies",
          "Violations confirmed through automated or manual review"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta verifies identity or accounts using face analysis including facial recognition technology when users select this option to protect against impersonation.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
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
            "description": "Account information, account photos, or photo/video selfie if you choose to provide it",
            "example": "Government-issued ID verification or selfie video",
            "reason": "Required to verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious activity detected on account",
          "Impersonation or identity misuse reported",
          "User requests identity verification to secure account"
        ]
      },
      {
        "id": "meta-pp-information-sharing-consent",
        "reference": "META-PP-CONSENT-SHARING",
        "summary": "Meta shares user contact, profile or other information with third parties only upon user request and with explicit consent.",
        "quote": "Sharing your contact, profile or other information with third parties upon your request when you use some of our Products. For example, when you direct us we share your email address or other information that you might choose to share with an advertiser so that they can contact you with additional information about a promoted product.",
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
            "description": "Explicit user consent and direction to share information",
            "example": "User actively choosing to share email with advertiser",
            "reason": "Required to ensure information sharing is consensual and authorized"
          }
        ],
        "removalCriteria": [
          "Information shared without user consent",
          "User withdraws consent for information sharing",
          "Unauthorized sharing of personal information"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.oversightboard.com/",
      "summary": "Some content moderation decisions are reviewed by Meta's independent Oversight Board",
      "steps": [
        "Meta makes initial decision on content violations",
        "In some cases, decisions are automatically referred to Oversight Board",
        "Oversight Board conducts independent review of the decision",
        "Board issues binding decision on whether content should be restored or removed"
      ]
    }
  },
  {
    "id": "instagram-new-1758233945208-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment prevention across Meta platforms including Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T22:19:05.208Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1-CONTACT",
        "summary": "Meta removes unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
        "quote": "Everyone is protected from: Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
            "reason": "To establish pattern of harassment or sexual nature of contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta prohibits statements of intent to engage in sexual activity, severe sexualized commentary, and derogatory sexualized content including photoshop or drawings.",
        "quote": "Everyone is protected from: Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity. Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of sexualized content or statements",
            "example": "Screenshots of sexual statements or manipulated images",
            "reason": "To verify sexual nature of harassment"
          }
        ],
        "removalCriteria": [
          "Statements of intent to engage in sexual activity",
          "Severe sexualized commentary",
          "Derogatory sexualized photoshop or drawings"
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
            "example": "Screenshots of threats mentioning specific private details",
            "reason": "To verify threat to release private information"
          }
        ],
        "removalCriteria": [
          "Threats to release private phone numbers",
          "Threats to release residential addresses",
          "Threats to release email addresses",
          "Threats to release medical records"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-SEXUAL-CLAIMS",
        "summary": "Meta protects minors, private adults, and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
        "quote": "In addition to the universal protections for everyone, all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of claims about sexual activity",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify sexual claims are being made about protected individuals"
          },
          {
            "description": "Confirmation of individual status",
            "example": "Evidence showing person is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for this protection tier"
          }
        ],
        "removalCriteria": [
          "Claims about sexual activity targeting minors",
          "Claims about sexual activity targeting private adults",
          "Claims about sexual activity targeting limited scope public figures",
          "Exception: Criminal allegations of non-consensual sexual touching against adults"
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
            "example": "Screenshots of posts sexualizing the individual",
            "reason": "To verify content is sexualizing in nature"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing target is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for protection"
          }
        ],
        "removalCriteria": [
          "Content sexualizing minors",
          "Content sexualizing private adults",
          "Content sexualizing limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to negatively highlight physical characteristics and unwanted manipulated imagery when self-reported by protected individuals.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on). When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
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
            "example": "Screenshots showing manipulated photos highlighting physical features",
            "reason": "To verify content has been manipulated to target physical characteristics"
          },
          {
            "description": "Self-report from target or authorized representative",
            "example": "Report from the individual depicted or their legal representative",
            "reason": "Required for unwanted manipulated imagery removal"
          }
        ],
        "removalCriteria": [
          "Content manipulated to highlight physical characteristics negatively",
          "Unwanted manipulated imagery (requires self-report)",
          "Target must be minor, private adult, or minor involuntary public figure for self-report protection"
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
            "example": "Takedown request from the individual or their legal representative",
            "reason": "Required confirmation that content is unwanted"
          },
          {
            "description": "Evidence of targeting through Pages/Groups/Events",
            "example": "Screenshots showing unwanted targeting content",
            "reason": "To verify targeting is occurring through these platforms"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported as unwanted by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-confirmation-required",
        "reference": "META-BH-CONFIRMATION",
        "summary": "Meta removes certain harassment content when there is confirmation from the target or authorized representative that the content is unwanted.",
        "quote": "We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative",
            "example": "Written statement that content is unwanted",
            "reason": "Required to establish content is unwanted by the target"
          },
          {
            "description": "Evidence of policy-violating content",
            "example": "Screenshots of content that would qualify as harassment",
            "reason": "To verify content meets harassment policy criteria"
          }
        ],
        "removalCriteria": [
          "Content qualifies as harassment under policies",
          "Target or authorized representative confirms content is unwanted",
          "Applies to targets both alive or deceased"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEXUAL",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
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
            "description": "Confirmation from public figure or authorized representative",
            "example": "Written statement from the public figure or their representative",
            "reason": "Required to establish content is unwanted by the public figure"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of content sexualizing the public figure",
            "reason": "To verify content is sexualizing in nature"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Public figure or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexual-harassment-contact",
        "reference": "META-BH-SEXUAL-CONTACT",
        "summary": "Meta removes sexually harassing contact when confirmed as unwanted by the recipient or authorized representative.",
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
            "example": "Statement confirming the contact is unwanted",
            "reason": "Required to establish contact is unwanted and sexually harassing"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots of sexually harassing messages or content",
            "reason": "To verify contact is sexually harassing in nature"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through notifications and Support Inbox, allowing users to request another review if they disagree with enforcement decisions.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758233945208-1",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Reporting Harassment or Bullying on Instagram",
    "summary": "Help center page for reporting harassment and bullying content on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T22:19:05.208Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-photos",
        "reference": "IG-REPORT-HARASSMENT-PHOTOS",
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
        "id": "ig-impersonation-reporting",
        "reference": "IG-REPORT-HARASSMENT-IMPERSONATION",
        "summary": "Instagram provides reporting mechanisms for accounts pretending to be you or someone else, which often involves unauthorized use of images.",
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
            "description": "Report the impersonating account through Instagram's specialized impersonation reporting process",
            "example": "Follow the impersonation reporting guidelines referenced in the document",
            "reason": "To verify identity and establish unauthorized use of personal information or images"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be you or someone else",
          "Unauthorized use of someone's identity or images"
        ]
      },
      {
        "id": "ig-community-standards-violation",
        "reference": "IG-REPORT-HARASSMENT-COMMUNITY",
        "summary": "Instagram removes accounts or posts that violate Community Standards, which include various forms of harmful content sharing.",
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
            "description": "Report the violating content through Instagram's general reporting system",
            "example": "Use the report function and specify the Community Standards violation",
            "reason": "To flag content that violates Instagram's comprehensive content policies"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Community Standards",
          "Account behavior violates Instagram's Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758233945208-2",
    "reference": "IG-ANTI-BULLYING",
    "title": "Instagram's Commitment to Bullying Prevention",
    "summary": "Instagram's official anti-bullying policy and tools available to prevent online abuse.",
    "url": "https://about.instagram.com/community/anti-bullying",
    "accessTimestamp": "2025-09-18T22:19:05.208Z",
    "policies": [
      {
        "id": "ig-anti-bullying-report",
        "reference": "IG-ANTI-BULLYING-REPORT",
        "summary": "Users can report content that violates Community Guidelines, including bullying content, and Instagram's team will review and take action.",
        "quote": "If you see something that violates our Community Guidelines, report it so our team can review it and take action. People aren't notified when you report them.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "harassment",
          "bullying",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content that violates Community Guidelines",
            "example": "Bullying comments, harassment, offensive content",
            "reason": "To enable team review and appropriate action"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Community Guidelines",
          "Content constitutes bullying or harassment"
        ]
      },
      {
        "id": "ig-anti-bullying-block",
        "reference": "IG-ANTI-BULLYING-BLOCK",
        "summary": "Users can block accounts to prevent them from seeing profile, posts, or Stories, with proactive blocking of new accounts that person might create.",
        "quote": "When you block someone, they won't be able to see your profile, posts, or Stories on Instagram. People aren't notified when you block them. You can also proactively block new accounts that person might create.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "harassment",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identification of the account to be blocked",
            "example": "Username or profile of harassing account",
            "reason": "To prevent further contact and content visibility"
          }
        ],
        "removalCriteria": [
          "User chooses to block an account",
          "Account is engaging in unwanted contact or harassment"
        ]
      },
      {
        "id": "ig-anti-bullying-restrict",
        "reference": "IG-ANTI-BULLYING-RESTRICT",
        "summary": "Users can restrict accounts to hide their comments from others and limit their ability to see activity status and read receipts.",
        "quote": "When you Restrict someone, their comments on your posts will only be visible to that person. You can choose to view the comment by tapping \"See Comment\"; approve the comment so everyone can see it; delete it; or ignore it. The restricted account will also not be able to see when you've read their DMs or when you are active on Instagram. People aren't notified when you restrict them.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "harassment",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account engaging in unwanted commenting or messaging",
            "example": "Account posting inappropriate comments",
            "reason": "To limit visibility of their interactions without full blocking"
          }
        ],
        "removalCriteria": [
          "User chooses to restrict an account",
          "Account is posting unwanted comments or messages"
        ]
      },
      {
        "id": "ig-anti-bullying-tag-mention-controls",
        "reference": "IG-ANTI-BULLYING-TAG-MENTION",
        "summary": "Users can control who can tag or mention them in comments, captions, or Stories to prevent unwanted associations.",
        "quote": "You can choose whether you want everyone, only people you follow or no one to be able to tag or mention you in a comment, caption or Story.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "harassment",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User preference setting for tag and mention permissions",
            "example": "Setting to allow only followers to tag/mention",
            "reason": "To prevent unwanted associations and harassment through tags"
          }
        ],
        "removalCriteria": [
          "Tags or mentions from accounts not permitted by user settings",
          "Unwanted tagging or mentioning in content"
        ]
      },
      {
        "id": "ig-anti-bullying-comment-warning",
        "reference": "IG-ANTI-BULLYING-COMMENT-WARNING",
        "summary": "Instagram shows warnings for potentially offensive comments and may remove or hide comments that violate Community Guidelines.",
        "quote": "When someone tries to post a potentially offensive comment, we'll show a warning reminding them of our Community Guidelines and letting them know we may remove or hide their comment if they proceed.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "harassment",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Comment content that is potentially offensive",
            "example": "Bullying, harassing, or inappropriate comments",
            "reason": "To prevent posting of content that violates guidelines"
          }
        ],
        "removalCriteria": [
          "Comment is potentially offensive",
          "Comment violates Community Guidelines",
          "User proceeds to post after warning"
        ]
      },
      {
        "id": "ig-anti-bullying-hidden-words",
        "reference": "IG-ANTI-BULLYING-HIDDEN-WORDS",
        "summary": "Comments and Message Requests that may be inappropriate or offensive can be filtered out, including custom word lists.",
        "quote": "Comments and Message Requests that don't go against our Community Guidelines, but may be considered inappropriate or offensive, can be filtered out. You can also create your own custom word list.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "harassment",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content containing inappropriate or offensive language",
            "example": "Comments with specific words or phrases deemed offensive",
            "reason": "To filter out unwanted content even if not guideline-violating"
          }
        ],
        "removalCriteria": [
          "Content contains words on filter list",
          "Content is considered inappropriate or offensive by user",
          "Content matches custom word list criteria"
        ]
      },
      {
        "id": "ig-anti-bullying-limits",
        "reference": "IG-ANTI-BULLYING-LIMITS",
        "summary": "Users can limit unwanted interactions by automatically hiding comments and message requests from non-followers or recent followers.",
        "quote": "Limit unwanted interactions for a period of time by automatically hiding comments and message requests from people who don't follow you, or who only recently followed you.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "harassment",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Unwanted interactions from non-followers or recent followers",
            "example": "Harassment from accounts that don't follow the user",
            "reason": "To temporarily reduce exposure to potential harassment"
          }
        ],
        "removalCriteria": [
          "Comments from accounts that don't follow the user",
          "Message requests from non-followers or recent followers",
          "Interactions during active limits period"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
