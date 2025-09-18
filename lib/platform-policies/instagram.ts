import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community guidelines covering prohibited content and behavior across Meta platforms including Instagram, with specific policies on harassment, privacy violations, NCII, and content removal.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T19:09:59.609Z",
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
        "id": "meta-cs-inauthentic-behavior-policy",
        "reference": "META-CS-INAUTHENTIC-BEHAVIOR",
        "summary": "Prohibits inauthentic behavior including using fake accounts or misrepresenting identity to deceive others.",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
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
        "evidenceRequirements": [
          {
            "description": "URL(s) of the inauthentic accounts or content",
            "reason": "To identify the inauthentic behavior"
          },
          {
            "description": "Description of the inauthentic behavior",
            "reason": "To understand how the account or content is being used deceptively"
          },
          {
            "description": "Evidence of coordination or fake identity use",
            "reason": "To verify the inauthentic nature of the behavior"
          }
        ],
        "removalCriteria": [
          "Account uses false identity information",
          "Coordinated inauthentic behavior across multiple accounts",
          "Misrepresentation of identity to deceive others",
          "Use of fake accounts to manipulate or mislead"
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
    "accessTimestamp": "2025-09-18T19:09:59.609Z",
    "policies": [
      {
        "id": "ig-intellectual-property-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission and violations of intellectual property rights including copyright infringement.",
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
            "description": "Documentation showing ownership or authorization to the content",
            "reason": "To establish rights to the content being shared without permission"
          },
          {
            "description": "URL(s) of the infringing content on Instagram",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content contains someone else's private or confidential information posted without permission",
          "Content violates intellectual property rights including copyright infringement"
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
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence showing the account is impersonating you or someone else",
            "reason": "To verify that unauthorized impersonation is occurring"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To confirm the legitimate identity being misrepresented"
          }
        ],
        "removalCriteria": [
          "Account is impersonating someone without their permission",
          "Account was created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove or restrict content that violates Terms of Use, policies including Community Standards, or as required by law.",
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
            "description": "Specific explanation of how content violates Terms of Use or Community Standards",
            "reason": "To evaluate whether content meets removal criteria under platform policies"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify and locate the specific content for review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Terms of Use",
          "Content violates Instagram Community Standards",
          "Content removal is required by law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can terminate or disable accounts that create risk, violate terms or policies, repeatedly infringe intellectual property rights, or as required by law.",
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
            "description": "Documentation of repeated violations of Terms of Use or Community Standards",
            "reason": "To demonstrate pattern of policy violations warranting account termination"
          },
          {
            "description": "Evidence of repeated intellectual property infringement",
            "reason": "To show ongoing copyright or trademark violations"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account violates Terms of Use or Community Standards",
          "Account repeatedly infringes other people's intellectual property rights",
          "Account termination is required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with explanation of options to request review, unless doing so may expose Instagram or others to legal liability.",
      "steps": [
        "Instagram will notify you of content removal or account action",
        "Instagram will explain available options to request another review",
        "Consult Instagram Help Center if you believe your account was terminated in error",
        "Use available review and appeals processes through the platform"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-18T19:09:59.609Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "META-PP-SAFETY",
        "summary": "Meta uses information to promote safety, security and integrity by detecting, preventing and combating harmful or unlawful behavior, including reviewing and removing content reported to them.",
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
            "description": "Content reported to Meta through their reporting mechanisms",
            "example": "Using platform reporting tools to flag harmful content",
            "reason": "Required for Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Suspicious activity that threatens user safety"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL",
        "summary": "Meta accesses, preserves, uses and shares user information in response to legal requests like search warrants, court orders, production orders or subpoenas from law enforcement and other government authorities.",
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
            "reason": "Legal compliance requirement for Meta to process the request"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Promotion of safety, security and integrity of users and the public"
        ]
      },
      {
        "id": "meta-pp-content-sharing",
        "reference": "META-PP-SHARING",
        "summary": "Meta explains how user information is shared on their products, including content others share or reshare about users, and provides controls for managing information sharing.",
        "quote": "Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
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
            "description": "Access to platform settings and privacy controls",
            "example": "Using Facebook or Instagram privacy settings to control content sharing",
            "reason": "Users can manage how their information is shared through platform controls"
          }
        ],
        "removalCriteria": [
          "Content shared without proper privacy settings",
          "Unauthorized sharing by other users",
          "Violation of user's intended sharing preferences"
        ]
      },
      {
        "id": "meta-pp-data-management",
        "reference": "META-PP-MANAGE",
        "summary": "Meta provides tools for users to view, manage, download and delete their information, including options to delete content or entire accounts.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. Delete your information or account",
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
            "description": "Account access and verification of identity",
            "example": "Logging into account to access deletion tools",
            "reason": "Required to verify user has authority to delete the content or account"
          }
        ],
        "removalCriteria": [
          "User request to delete specific information",
          "User request to delete entire account",
          "User exercising data management rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy, and in some countries may also contact the Data Protection Officer or local Data Protection Authority.",
      "steps": [
        "Contact Meta through the provided help center link",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, contact local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "instagram-new-1758222599609-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy section covering bullying and harassment across Meta platforms, including definitions, prohibited content, and enforcement measures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T19:09:59.609Z",
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
        "id": "meta-bh-sexual-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta prohibits statements of intent to engage in sexual activity and severe sexualized commentary targeting individuals.",
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
            "description": "Evidence of sexual statements or commentary",
            "example": "Screenshots of posts containing sexual statements or severe sexualized commentary",
            "reason": "To verify violation of sexual harassment policy"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexual",
        "reference": "META-BH-T1-DEROGATORY",
        "summary": "Meta removes derogatory sexualized photoshop/drawings and attacks through derogatory terms related to sexual activity.",
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
            "description": "Evidence of derogatory sexualized content or terms",
            "example": "Screenshots of manipulated images or posts using derogatory sexual terms",
            "reason": "To verify presence of derogatory sexual content"
          }
        ],
        "removalCriteria": [
          "Content contains derogatory sexualized photoshop or drawings",
          "Content contains attacks using derogatory sexual terms"
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
            "example": "Screenshots showing threats to share personal contact details or medical records",
            "reason": "To verify threat to privacy and personal safety"
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
        "summary": "Meta protects minors, private adults and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexual activity claims",
            "example": "Screenshots of posts making claims about sexual behavior",
            "reason": "To verify inappropriate claims about sexual activity"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence that target is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for enhanced protection"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity",
          "Target is a minor, private adult, or limited scope public figure",
          "Content is not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
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
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of posts sexualizing the target individual",
            "reason": "To verify inappropriate sexualization"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence that target is minor, private adult, or limited scope public figure",
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
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to negatively highlight specific physical characteristics when self-reported by protected individuals.",
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
            "reason": "To verify image manipulation for harassment purposes"
          },
          {
            "description": "Self-report from target or authorized representative",
            "example": "Report from the individual depicted or their legal representative",
            "reason": "Policy requires self-reporting for enforcement"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to negatively highlight physical characteristics",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-TARGETING-PAGES",
        "summary": "Meta removes content targeting private individuals through unwanted Pages, Groups and Events when reported by the target.",
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
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots of unwanted Pages, Groups, or Events targeting the individual",
            "reason": "To verify targeting behavior"
          },
          {
            "description": "Report from target or authorized representative",
            "example": "Complaint from the targeted individual or their legal representative",
            "reason": "Policy requires target reporting for removal"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-unwanted-content-confirmation",
        "reference": "META-BH-CONFIRMATION-REQUIRED",
        "summary": "Meta removes bullying content when there is confirmation from the target that the content is unwanted.",
        "quote": "We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Confirmation from target that content is unwanted",
            "example": "Statement from individual or authorized representative confirming content is unwanted",
            "reason": "Policy requires target confirmation for removal"
          },
          {
            "description": "Evidence of bullying content",
            "example": "Screenshots of the harassing or bullying content",
            "reason": "To verify policy violation"
          }
        ],
        "removalCriteria": [
          "Content constitutes bullying or harassment under Meta policies",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEXUALIZATION",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target.",
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
            "description": "Evidence of sexualizing content targeting public figure",
            "example": "Screenshots of posts sexualizing the public figure",
            "reason": "To verify inappropriate sexualization"
          },
          {
            "description": "Confirmation from target that content is unwanted",
            "example": "Statement from public figure or authorized representative",
            "reason": "Policy requires confirmation for public figure protection"
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
      "summary": "Meta provides appeal options through Support Inbox notifications with request for additional review if users believe enforcement decisions were incorrect.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional context or information for review",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758222599609-1",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Instagram Harassment Reporting",
    "summary": "Official Instagram help page for reporting harassment and bullying content.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T19:09:59.609Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-report",
        "reference": "IG-REPORT-HARASSMENT-001",
        "summary": "Instagram removes accounts established with intent to bully or harass another person, and photos or comments intended to bully or harass someone.",
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
            "description": "Report the harassing account or content through Instagram's reporting system",
            "example": "Use the report function on the specific post or account",
            "reason": "Required to initiate Instagram's review process for harassment violations"
          }
        ],
        "removalCriteria": [
          "Account established with intent to bully or harass another person",
          "Photo intended to bully or harass someone",
          "Comment intended to bully or harass someone"
        ]
      },
      {
        "id": "ig-impersonation-report",
        "reference": "IG-REPORT-HARASSMENT-002",
        "summary": "Instagram addresses cases where someone is pretending to be you or someone else, which may involve unauthorized use of personal images.",
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
            "description": "Report the impersonating account through Instagram's specialized impersonation reporting process",
            "example": "Follow the specific reporting flow for impersonation cases",
            "reason": "Required to verify identity and establish legitimate claim against impersonation"
          }
        ],
        "removalCriteria": [
          "Account pretending to be another person",
          "Unauthorized use of someone's identity or likeness"
        ]
      },
      {
        "id": "ig-community-standards-violation",
        "reference": "IG-REPORT-HARASSMENT-003",
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
            "example": "Use the report function and select the appropriate Community Standards violation category",
            "reason": "Required to flag content for review against Instagram's Community Standards"
          }
        ],
        "removalCriteria": [
          "Content that violates Instagram's Community Standards",
          "Accounts that repeatedly violate Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758222599609-2",
    "reference": "STOPNCII-PARTNERSHIP",
    "title": "StopNCII.org Partnership",
    "summary": "Meta's partnership with StopNCII.org for proactive detection and removal of non-consensual intimate images.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T19:09:59.609Z",
    "policies": [
      {
        "id": "meta-stopncii-partnership",
        "reference": "STOPNCII-PARTNERSHIP",
        "summary": "Meta prohibits non-consensual intimate images and supports StopNCII.org platform for proactive detection and removal using hash technology.",
        "quote": "We do not allow this content on our apps, and today, we're building on our industry-leading efforts to combat the spread of NCII on our platforms and beyond.",
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
            "description": "Access to the intimate images to generate hash values",
            "example": "Original photos or videos that may be shared without consent",
            "reason": "Required to create unique digital fingerprints for proactive detection"
          },
          {
            "description": "Verification that the person is over 18 years old",
            "example": "Age verification through StopNCII.org platform",
            "reason": "Platform is only available for adults over 18"
          }
        ],
        "removalCriteria": [
          "Images or videos featuring nudity or sexual content shared without consent",
          "Content matches hash values submitted through StopNCII.org platform",
          "Content identified through photo- and video-matching technology"
        ]
      },
      {
        "id": "meta-ncii-hash-detection",
        "reference": "STOPNCII-PARTNERSHIP",
        "summary": "Meta uses hash-generating technology to detect and prevent sharing of intimate images without requiring the original images to leave the victim's device.",
        "quote": "The tool features hash-generating technology that assigns a unique hash value (a numerical code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
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
            "description": "Hash values generated through StopNCII.org platform",
            "example": "Unique numerical codes created from intimate images",
            "reason": "Enables detection without sharing actual images"
          }
        ],
        "removalCriteria": [
          "Content matches hash values provided through StopNCII.org",
          "Images or videos are being shared or attempted to be shared without consent",
          "Content prevents further circulation of NCII material"
        ]
      },
      {
        "id": "meta-ncii-proactive-prevention",
        "reference": "STOPNCII-PARTNERSHIP",
        "summary": "Meta provides proactive protection against intimate image sharing through technology that helps victims stop proliferation before it occurs, not just after-the-fact removal.",
        "quote": "StopNCII.org builds on technology developed by Facebook and Instagram's NCII Pilot, which began in 2018 to help victims proactively stop the proliferation of their intimate images — not just remove them after the fact.",
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
            "description": "Participation in StopNCII.org platform",
            "example": "Creating a case through the platform to generate hashes",
            "reason": "Enables proactive detection before content is shared"
          }
        ],
        "removalCriteria": [
          "Intimate images that may be shared without consent",
          "Content identified through proactive hash matching",
          "Prevention of initial sharing rather than reactive removal"
        ]
      },
      {
        "id": "meta-ncii-resources-support",
        "reference": "STOPNCII-PARTNERSHIP",
        "summary": "Meta provides resources and support for victims of non-consensual intimate image sharing and encourages reporting of such behavior.",
        "quote": "For years, we've been using photo- and video-matching technology to remove intimate images shared without consent, encouraging people who use our services to report this type of behavior or content, and offering resources to better support victims.",
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
            "description": "Report of non-consensual intimate image sharing behavior",
            "example": "User reports through Meta's reporting systems",
            "reason": "Enables platform to identify and address violations"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without consent",
          "Content identified through photo- and video-matching technology",
          "Reported behavior involving non-consensual sharing"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
