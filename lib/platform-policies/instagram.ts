import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community standards outlining what is and isn't allowed on Facebook, Instagram, Messenger and Threads, including policies on bullying, harassment, privacy violations, and non-consensual intimate imagery.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T21:47:44.236Z",
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
            "description": "Description of the copyrighted work or intellectual property being infringed",
            "reason": "To understand what rights are being violated"
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
    "accessTimestamp": "2025-09-18T21:47:44.236Z",
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
            "reason": "To establish that the user owns or has rights to the content being shared without permission"
          },
          {
            "description": "URL(s) of the infringing content on Instagram",
            "reason": "To identify the specific content that violates intellectual property rights"
          },
          {
            "description": "Evidence that content was posted without permission",
            "reason": "To demonstrate unauthorized use of private or confidential information"
          }
        ],
        "removalCriteria": [
          "Content contains someone else's private or confidential information posted without permission",
          "Content violates intellectual property rights including copyright infringement",
          "Content involves trademark infringement, counterfeit, or pirated goods"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, including creating accounts for someone else without express permission.",
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
            "description": "Evidence of your identity (government-issued ID or other official documentation)",
            "reason": "To verify that you are the person being impersonated"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific account or content that is impersonating you"
          },
          {
            "description": "Examples showing how the account is impersonating you",
            "reason": "To demonstrate the impersonation behavior"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "Account was created for someone else without their express permission",
          "Account provides inaccurate information to deceive others about identity"
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
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates policies"
          },
          {
            "description": "Explanation of how the content violates Terms of Use or Community Standards",
            "reason": "To establish the policy violation"
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
            "description": "Documentation of repeated policy violations or intellectual property infringement",
            "reason": "To establish pattern of violations warranting account termination"
          },
          {
            "description": "Evidence of risk or legal exposure created by the account",
            "reason": "To demonstrate harm to community or legal concerns"
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
      "summary": "Users can request review through Instagram Help Center if they believe their account was terminated in error or want to disable/delete their account.",
      "steps": [
        "Visit Instagram Help Center",
        "Submit request for review if account was terminated in error",
        "Instagram will provide notification and explanation of options for review unless doing so may expose legal liability or harm community",
        "Users can access Complaints Handling Process for additional review options"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms including Instagram.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-18T21:47:44.236Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "META-PP-SAFETY",
        "summary": "Meta uses information to promote safety, security and integrity by detecting, preventing and combating harmful or unlawful behavior, including reviewing and removing reported content.",
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
            "example": "Using platform reporting tools to flag violating content",
            "reason": "Required for Meta to review and potentially remove harmful content"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens safety, security or integrity of users"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL",
        "summary": "Meta accesses, preserves, uses and shares user information in response to legal requests like search warrants, court orders, and subpoenas from law enforcement and other authorities.",
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
            "reason": "Required by law for Meta to disclose user information"
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
        "reference": "META-PP-SHARING",
        "summary": "Meta explains how user information is shared on their products, including content others share or reshare about users, and provides controls for managing information sharing.",
        "quote": "On Meta Products: Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
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
            "reason": "Allows users to manage how their information is shared"
          }
        ],
        "removalCriteria": [
          "Content shared without proper privacy settings",
          "Violations of user's sharing preferences",
          "Content that exceeds intended audience scope"
        ]
      },
      {
        "id": "meta-pp-account-management",
        "reference": "META-PP-MANAGE",
        "summary": "Meta provides tools for users to view, manage, download and delete their information, including options to delete accounts and specific content.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. Port your information, Download your information, Delete your information or account",
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
            "reason": "Required to verify user has authority to delete content"
          }
        ],
        "removalCriteria": [
          "User request to delete specific information",
          "Account deletion request",
          "Content removal through platform tools"
        ]
      },
      {
        "id": "meta-pp-data-preservation",
        "reference": "META-PP-PRESERVE",
        "summary": "Meta may preserve user information for extended periods for legitimate purposes including preventing harm, investigating violations, and protecting rights and property.",
        "quote": "We may access or preserve your information for an extended amount of time. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products",
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
            "description": "Evidence of terms violations or harmful behavior",
            "example": "Documentation of policy violations or safety threats",
            "reason": "Justifies extended preservation for investigation purposes"
          }
        ],
        "removalCriteria": [
          "Completion of investigation or legal process",
          "Resolution of safety or security concerns",
          "End of legitimate business need for preservation"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy and data handling practices through their help center contact form.",
      "steps": [
        "Visit the Facebook Help Center contact page",
        "Submit questions, complaints or requests regarding your information",
        "Contact can also be made by mail to Meta Platforms, Inc. Privacy Operations"
      ]
    }
  },
  {
    "id": "instagram-new-1758232064236-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment across Meta platforms, including heightened protections for minors and definitions of prohibited behavior.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T21:47:44.236Z",
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
        "quote": "Everyone is protected from: Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity. Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of sexual statements or sexualized content",
            "example": "Screenshots of posts containing sexual threats or sexualized imagery",
            "reason": "To verify violation of sexual harassment policies"
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
        "summary": "Meta removes threats to release private information including phone numbers, addresses, email addresses, or medical records.",
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
            "example": "Screenshots showing threats to doxx or release personal data",
            "reason": "To verify threats against privacy and safety"
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
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of false sexual activity claims",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify harassment through sexual allegations"
          }
        ],
        "removalCriteria": [
          "Claims about sexual activity targeting protected individuals",
          "Content sexualizing adults (when reported by target)"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATION",
        "summary": "Meta removes content manipulated to negatively highlight physical characteristics and unwanted manipulated imagery when self-reported.",
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
            "description": "Self-report by target or authorized representative",
            "example": "Report from the individual depicted in manipulated content",
            "reason": "To confirm content is unwanted by the target"
          },
          {
            "description": "Evidence of image manipulation",
            "example": "Original and manipulated versions showing alterations",
            "reason": "To verify content has been manipulated"
          }
        ],
        "removalCriteria": [
          "Content manipulated to highlight physical characteristics negatively",
          "Unwanted manipulated imagery (when self-reported)"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-TARGETING-PAGES",
        "summary": "Meta removes content targeting private individuals through unwanted Pages, Groups, and Events when reported by the target.",
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
            "example": "Complaint from the individual being targeted",
            "reason": "To confirm the targeting is unwanted"
          },
          {
            "description": "Evidence of targeting through pages/groups/events",
            "example": "Screenshots of unwanted pages or groups created about the individual",
            "reason": "To verify the targeting behavior"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through unwanted Pages",
          "Content targets private individuals through unwanted Groups",
          "Content targets private individuals through unwanted Events"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figures",
        "reference": "META-BH-SEXUALIZATION",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target or their authorized representative.",
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
            "description": "Confirmation from target or authorized representative",
            "example": "Statement from public figure or their representative that content is unwanted",
            "reason": "To verify the sexualizing content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure and is confirmed unwanted by target"
        ]
      },
      {
        "id": "meta-bh-mass-harassment",
        "reference": "META-BH-MASS-HARASSMENT",
        "summary": "Meta removes directed mass harassment targeting individuals at heightened risk or via personal surfaces with violating content.",
        "quote": "Remove directed mass harassment, when: Targeting, via any surface, 'individuals at heightened risk of offline harm', defined as: Human rights defenders, Minors, Victims of violent events/tragedies, Opposition figures in at-risk countries during election periods, Election officials, Government dissidents who have been targeted based on their dissident status, Ethnic and religious minorities in conflict zones, Member of a designated and recognizable at-risk group",
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
            "description": "Evidence of coordinated harassment campaign",
            "example": "Multiple accounts targeting the same individual",
            "reason": "To identify mass harassment patterns"
          },
          {
            "description": "Evidence of heightened risk status or personal surface targeting",
            "example": "Documentation showing individual is human rights defender, minor, etc.",
            "reason": "To verify protection eligibility"
          }
        ],
        "removalCriteria": [
          "Mass harassment targeting individuals at heightened risk of offline harm",
          "Harassment via personal surfaces (inbox, profiles) with policy-violating content",
          "Content targeting individuals based on protected characteristics"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through Meta's standard appeal process, with notifications sent via Support Inbox and option to request additional review if they believe the decision was wrong.",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision",
        "Access detailed decision information in Support Inbox",
        "Submit appeal if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758232064236-1",
    "reference": "IG-NCII",
    "title": "Instagram Anti-Bullying Commitment",
    "summary": "Instagram's specific commitment and tools for preventing bullying, including comment warnings, reporting mechanisms, and blocking features.",
    "url": "https://about.instagram.com/community/anti-bullying",
    "accessTimestamp": "2025-09-18T21:47:44.236Z",
    "policies": [
      {
        "id": "ig-antibully-offensive-comments",
        "reference": "IG-NCII-COMMENT-WARNING",
        "summary": "Instagram warns users before posting potentially offensive comments and may remove or hide comments that violate Community Guidelines.",
        "quote": "When someone tries to post a potentially offensive comment, we'll show a warning reminding them of our Community Guidelines and letting them know we may remove or hide their comment if they proceed.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the offensive comment through Instagram's reporting system",
            "example": "Screenshot of the offensive comment",
            "reason": "To allow Instagram's team to review and take action"
          }
        ],
        "removalCriteria": [
          "Comment violates Instagram Community Guidelines",
          "Comment is potentially offensive or inappropriate"
        ]
      },
      {
        "id": "ig-antibully-report-system",
        "reference": "IG-NCII-REPORT",
        "summary": "Users can report content that violates Community Guidelines for review and action, with reports being confidential.",
        "quote": "If you see something that violates our Community Guidelines, report it so our team can review it and take action. People aren't notified when you report them.",
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
            "description": "Use Instagram's built-in reporting feature to flag violating content",
            "example": "Report button on posts, comments, or profiles",
            "reason": "To initiate review process by Instagram's content moderation team"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Community Guidelines",
          "Content constitutes bullying or harassment"
        ]
      },
      {
        "id": "ig-antibully-block-feature",
        "reference": "IG-NCII-BLOCK",
        "summary": "Users can block accounts to prevent them from seeing profile content and can proactively block new accounts created by the same person.",
        "quote": "When you block someone, they won't be able to see your profile, posts, or Stories on Instagram. People aren't notified when you block them. You can also proactively block new accounts that person might create.",
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
            "description": "No evidence required - user-initiated blocking action",
            "example": "Block button on user profiles",
            "reason": "Preventive measure to stop unwanted contact and content sharing"
          }
        ],
        "removalCriteria": [
          "User chooses to block another account",
          "Prevention of harassment or unwanted interactions"
        ]
      },
      {
        "id": "ig-antibully-hidden-words",
        "reference": "IG-NCII-HIDDEN-WORDS",
        "summary": "Instagram filters out comments and message requests that may be inappropriate or offensive, allowing users to create custom word lists.",
        "quote": "Comments and Message Requests that don't go against our Community Guidelines, but may be considered inappropriate or offensive, can be filtered out. You can also create your own custom word list.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User can configure filtering settings and custom word lists",
            "example": "Adding specific words or phrases to filter list",
            "reason": "To automatically hide potentially offensive content before it reaches the user"
          }
        ],
        "removalCriteria": [
          "Content contains words from user's custom filter list",
          "Content is flagged as potentially inappropriate or offensive by Instagram's systems"
        ]
      },
      {
        "id": "ig-antibully-restrict-feature",
        "reference": "IG-NCII-RESTRICT",
        "summary": "Users can restrict accounts to limit their interactions, making their comments visible only to themselves and hiding read receipts and activity status.",
        "quote": "When you Restrict someone, their comments on your posts will only be visible to that person. You can choose to view the comment by tapping 'See Comment'; approve the comment so everyone can see it; delete it; or ignore it. The restricted account will also not be able to see when you've read their DMs or when you are active on Instagram. People aren't notified when you restrict them.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "No evidence required - user-initiated restriction action",
            "example": "Restrict option in user profile settings",
            "reason": "To limit unwanted interactions while maintaining some level of connection"
          }
        ],
        "removalCriteria": [
          "User chooses to restrict another account's interactions",
          "Comments from restricted accounts are hidden from public view"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758232064236-2",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Reporting Harassment or Bullying on Instagram",
    "summary": "Official help center guidance on how to report harassment and bullying content on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T21:47:44.236Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-photo",
        "reference": "IG-REPORT-HARASSMENT-PHOTO",
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
            "description": "Report the harassing photo through Instagram's reporting system",
            "example": "Use the report function on the specific photo or account",
            "reason": "To initiate Instagram's review process for harassment content"
          }
        ],
        "removalCriteria": [
          "Photo is intended to bully or harass someone",
          "Account is established with intent of bullying or harassing another person"
        ]
      },
      {
        "id": "ig-harassment-impersonation",
        "reference": "IG-REPORT-HARASSMENT-IMPERSONATION",
        "summary": "Instagram addresses cases where someone is pretending to be you or someone else, which can involve unauthorized use of images.",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
        "contentTypes": [
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
            "description": "Report impersonation through Instagram's dedicated impersonation reporting process",
            "example": "Follow the impersonation reporting guidelines referenced in the document",
            "reason": "To verify identity and establish unauthorized use of personal information or images"
          }
        ],
        "removalCriteria": [
          "Someone is pretending to be you or someone else on Instagram"
        ]
      },
      {
        "id": "ig-harassment-blocking",
        "reference": "IG-REPORT-HARASSMENT-BLOCKING",
        "summary": "Instagram recommends blocking users after reporting abuse as an additional protective measure.",
        "quote": "Once you've reported the abuse, consider blocking the person.",
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
            "description": "First report the abusive content, then use the blocking feature",
            "example": "Report harassing photos then block the account to prevent further contact",
            "reason": "To provide immediate protection while the report is being processed"
          }
        ],
        "removalCriteria": [
          "Content constitutes abuse that has been reported to Instagram"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758232064236-3",
    "reference": "IG-IMPERSONATION",
    "title": "Instagram Impersonation Reporting",
    "summary": "Help center guidance on reporting impersonation accounts and fake profiles on Instagram.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-18T21:47:44.236Z",
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
            "example": "Driver's license, passport, or other official identification document",
            "reason": "To verify the identity of the person reporting impersonation"
          },
          {
            "description": "All requested information in the report form",
            "example": "Complete details about the impersonating account and your identity",
            "reason": "To process the impersonation claim effectively"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Report is submitted by the impersonated person or their authorized representative",
          "Proper identification verification is provided"
        ]
      },
      {
        "id": "ig-impersonation-eligibility",
        "reference": "IG-IMPERSONATION",
        "summary": "Instagram only processes impersonation reports from the affected person directly or their authorized representative, and reports are kept anonymous except for intellectual property cases.",
        "quote": "We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent). If someone you know is being impersonated, please encourage that person to report it. Keep in mind that your report is anonymous, except if you're reporting an intellectual property infringement.",
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
            "description": "Proof of authorization if reporting on behalf of someone else",
            "example": "Parent reporting for minor child",
            "reason": "To ensure only authorized individuals can report impersonation"
          }
        ],
        "removalCriteria": [
          "Reporter is the impersonated person or their authorized representative",
          "Third-party reports are not accepted unless from authorized representatives"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
