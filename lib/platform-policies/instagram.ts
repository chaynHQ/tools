import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community standards covering content policies for Facebook, Instagram, Messenger and Threads, including specific sections on bullying, harassment, privacy violations, adult nudity, and content enforcement procedures.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T18:29:48.883Z",
    "policies": [
      {
        "id": "meta-cs-ncii-policy",
        "reference": "META-CS-NCII",
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
        "timeframes": {
          "response": {
            "value": 48,
            "unit": "hours",
            "description": "Priority review for severe harms like NCII"
          },
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Mandated removal under TAKE IT DOWN Act"
          }
        },
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
        "reference": "META-CS-BULLYING",
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
        "reference": "META-CS-PRIVACY",
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
        "id": "meta-cs-authenticity-policy",
        "reference": "META-CS-AUTHENTICITY",
        "summary": "Requires authentic representation and prohibits misrepresenting identity or actions on the platform.",
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
            "reason": "To identify the inauthentic account or content"
          },
          {
            "description": "Proof of identity",
            "example": "Government-issued ID for a person or business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account or content misrepresents identity",
            "reason": "To understand the nature and extent of the misrepresentation"
          }
        ],
        "removalCriteria": [
          "Account uses another's name, photos, or other identifying information without authorization",
          "The profile or content is intended to mislead or deceive others about who is behind it",
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
    "accessTimestamp": "2025-09-18T18:29:48.883Z",
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
            "description": "Evidence that the account is impersonating you or someone else",
            "reason": "To verify that unauthorized impersonation is occurring"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To confirm the legitimate identity being misrepresented"
          }
        ],
        "removalCriteria": [
          "Account is impersonating someone or something they are not",
          "Account was created for someone else without their express permission"
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
          "response": null,
          "removal": {
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Explanation of how the content violates Terms of Use or Community Standards",
            "reason": "To assess whether content meets removal criteria"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Community Standards",
          "Content removal is required by law"
        ]
      },
      {
        "id": "ig-reporting-misuse-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits interfering with service operation including misusing reporting, dispute, or appeals channels through fraudulent or groundless reports.",
        "quote": "You can't do anything to interfere with or impair the intended operation of the Service. This includes misusing any reporting, dispute, or appeals channel, such as by making fraudulent or groundless reports or appeals.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Good faith basis for the report with specific policy violations identified",
            "reason": "To prevent misuse of reporting systems with fraudulent or groundless reports"
          }
        ],
        "removalCriteria": [
          "Reports must be made in good faith and not be fraudulent or groundless"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with options to request review, except where doing so may expose legal liability or harm the community.",
      "steps": [
        "Instagram will notify you of content removal or account action",
        "Review options will be explained unless legal restrictions apply",
        "Submit appeal through provided channels if you believe action was taken in error",
        "Consult Help Center if you believe your account was terminated in error"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms, with recent updates regarding AI training data usage.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-18T18:29:48.883Z",
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
            "reason": "Enables Meta to review and potentially remove harmful content"
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
        "summary": "Meta accesses, preserves, uses and shares information in response to legal requests like search warrants, court orders, production orders or subpoenas from law enforcement and other government authorities.",
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
          "Court orders or law enforcement requests"
        ]
      },
      {
        "id": "meta-pp-harm-prevention",
        "reference": "META-PP-HARM",
        "summary": "Meta processes information to promote safety, security and integrity of users, employees, property and the public, including protecting life, physical or mental health, well-being or integrity of users.",
        "quote": "To promote the safety, security and integrity of Meta Products, users, employees, property and the public. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences",
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
            "description": "Evidence of threat to user safety, health, or well-being",
            "example": "Documentation showing content poses risk to physical or mental health",
            "reason": "Enables Meta to assess and address potential harm to users"
          }
        ],
        "removalCriteria": [
          "Content threatening life, physical or mental health of users",
          "Content compromising well-being or integrity of users",
          "Spam or security threats",
          "Content creating bad user experiences"
        ]
      },
      {
        "id": "meta-pp-content-sharing",
        "reference": "META-PP-SHARING",
        "summary": "Meta allows users to control how their information is shared, including content others share or reshare about them, with various privacy controls and settings available.",
        "quote": "On Meta Products: Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content. You can update these settings to shape your experience.",
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
            "description": "Demonstration that content was shared without permission",
            "example": "Evidence showing private content was posted by someone else without consent",
            "reason": "Establishes violation of privacy settings and sharing controls"
          }
        ],
        "removalCriteria": [
          "Content shared without user's permission",
          "Violation of user's privacy settings",
          "Unauthorized resharing of private content"
        ]
      },
      {
        "id": "meta-pp-information-management",
        "reference": "META-PP-MANAGE",
        "summary": "Meta provides users with tools to view, manage, download and delete their information, including the ability to delete content or entire accounts.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. View and manage your information, Port, download or delete your information, Delete your information or account",
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
            "description": "Account ownership verification",
            "example": "Login credentials or account verification process",
            "reason": "Ensures only authorized users can delete their own content"
          }
        ],
        "removalCriteria": [
          "User request to delete their own content",
          "User request to delete their account",
          "User management of their privacy settings"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy and data handling practices through their help center contact form.",
      "steps": [
        "Visit the Facebook Help Center contact page",
        "Submit questions, complaints or requests regarding your information",
        "Contact can also be made by mail to Meta Platforms, Inc. ATTN: Privacy Operations"
      ]
    }
  },
  {
    "id": "instagram-new-1758220188883-0",
    "reference": "IG-HARASSMENT",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment on Instagram with reporting mechanisms and enforcement procedures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T18:29:48.883Z",
    "policies": [
      {
        "id": "ig-harassment-unwanted-contact",
        "reference": "IG-HARASSMENT-TIER1",
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
            "reason": "To demonstrate the contact meets the criteria for removal"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "ig-harassment-severe-sexualized",
        "reference": "IG-HARASSMENT-TIER1",
        "summary": "Meta removes severe sexualized commentary, derogatory sexualized photoshop or drawings, and attacks through derogatory terms related to sexual activity.",
        "quote": "Everyone is protected from: Severe sexualized commentary. Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of sexualized harassment content",
            "example": "Screenshots of derogatory sexualized comments or manipulated images",
            "reason": "To verify the content violates sexualized harassment policies"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings",
          "Content attacks individuals using derogatory sexual terms"
        ]
      },
      {
        "id": "ig-harassment-private-info-threats",
        "reference": "IG-HARASSMENT-TIER1",
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
            "reason": "To verify threats against private information sharing"
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
        "id": "ig-harassment-sexual-activity-claims",
        "reference": "IG-HARASSMENT-TIER2",
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in criminal allegation contexts.",
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
            "reason": "To verify claims about sexual activity that violate harassment policies"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing the target is a minor, private adult, or limited scope public figure",
            "reason": "To determine applicable protection level under the policy"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of protected individuals",
          "Target is a minor, private adult, or limited scope public figure",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "ig-harassment-adult-sexualization",
        "reference": "IG-HARASSMENT-TIER2",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
            "example": "Screenshots showing sexualized content targeting the individual",
            "reason": "To verify content sexualizes the targeted individual"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing target is minor, private adult, or limited scope public figure",
            "reason": "To determine if enhanced protections apply"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult individual",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "ig-harassment-manipulated-imagery",
        "reference": "IG-HARASSMENT-TIER2-3",
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
            "example": "Screenshots showing images that have been altered to highlight or mock physical features",
            "reason": "To verify the content contains manipulated imagery targeting the individual"
          },
          {
            "description": "Self-report confirmation for enhanced protections",
            "example": "Report must come from the targeted individual or authorized representative",
            "reason": "Policy requires self-reporting for certain manipulated imagery protections"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to negatively highlight physical characteristics",
          "Content contains unwanted manipulated imagery of protected individuals",
          "Content is reported by the target or authorized representative"
        ]
      },
      {
        "id": "ig-harassment-unwanted-pages-groups",
        "reference": "IG-HARASSMENT-ADDITIONAL",
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
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots showing unwanted Pages, Groups, or Events created to target the individual",
            "reason": "To verify the content targets private individuals through these platforms"
          },
          {
            "description": "Report from target or authorized representative",
            "example": "Confirmation that report comes from the targeted individual or their authorized representative",
            "reason": "Policy requires reporting by target or authorized representative for removal"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is unwanted by the target",
          "Report comes from target or authorized representative"
        ]
      },
      {
        "id": "ig-harassment-public-figure-sexualization",
        "reference": "IG-HARASSMENT-ADDITIONAL",
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
            "description": "Evidence of sexualizing content targeting public figure",
            "example": "Screenshots showing content that sexualizes the public figure",
            "reason": "To verify the content sexualizes the targeted public figure"
          },
          {
            "description": "Confirmation from target or authorized representative",
            "example": "Statement from the public figure or their representative that the content is unwanted",
            "reason": "Policy requires confirmation that the content is unwanted for removal"
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
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain cases.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox",
        "For eligible cases, may appeal to Oversight Board"
      ]
    }
  },
  {
    "id": "instagram-new-1758220188883-1",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Reporting Harassment or Bullying on Instagram",
    "summary": "Help center page for reporting harassment and bullying content with direct reporting mechanisms.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T18:29:48.883Z",
    "policies": [
      {
        "id": "ig-harassment-photo-reporting",
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
            "description": "Report the harassing photo or account through Instagram's reporting system",
            "example": "Use the report function on the specific post or profile",
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the impersonating account through Instagram's specialized impersonation reporting process",
            "example": "Follow the impersonation reporting guidelines linked in the document",
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
        "summary": "Instagram removes accounts or posts that violate Community Standards, with a general reporting mechanism for various policy violations.",
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
            "reason": "To flag content that violates Instagram's policies for review and potential removal"
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
    "id": "instagram-new-1758220188883-2",
    "reference": "IG-CONTENT-APPEAL",
    "title": "Content Removal Appeals Process",
    "summary": "Process for appealing content removal decisions on Instagram including account status and review procedures.",
    "url": "https://help.instagram.com/1445818549016877/",
    "accessTimestamp": "2025-09-18T18:29:48.883Z",
    "policies": [
      {
        "id": "ig-appeal-ip-removal",
        "reference": "IG-CONTENT-APPEAL-IP",
        "summary": "Content removed for intellectual property infringement can be appealed, with notification including rights owner details for direct resolution.",
        "quote": "If we remove content you posted because of an intellectual property report submitted through our online form, you'll receive a notification that may include the name and email address of the rights owner who made the report and/or other details of the report. If you believe the content shouldn't have been removed, you can follow up with the rights owner directly to try to resolve the issue.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Belief that content was wrongly removed",
            "example": "Evidence showing you have rights to the content or that removal was incorrect",
            "reason": "To justify appeal of intellectual property removal"
          }
        ],
        "removalCriteria": [
          "Content reported through intellectual property infringement online form",
          "Valid intellectual property rights claim submitted by rights owner"
        ]
      },
      {
        "id": "ig-appeal-copyright-removal",
        "reference": "IG-CONTENT-APPEAL-COPYRIGHT",
        "summary": "Content removed for copyright violations can be formally appealed through Instagram's appeals process.",
        "quote": "If your content was removed because of a copyright report, you can submit an appeal. Learn more about our appeals process or how to use music in your videos on Instagram or Threads.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Justification for why copyright removal was incorrect",
            "example": "Evidence of fair use, permission, or ownership of copyrighted material",
            "reason": "To support copyright removal appeal"
          }
        ],
        "removalCriteria": [
          "Content reported for copyright infringement",
          "Valid copyright claim submitted against the content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/instagram/1417735471763678?locale=en_US&helpref=faq_content",
      "summary": "Instagram provides an appeals process for content removed due to intellectual property reports, allowing users to contest removals they believe were incorrect.",
      "steps": [
        "Receive notification of content removal with rights owner details",
        "Option to contact rights owner directly to resolve the issue",
        "Submit formal appeal through Instagram's appeals process if direct resolution fails",
        "Follow specific appeal procedures for copyright-related removals"
      ]
    }
  },
  {
    "id": "instagram-new-1758220188883-3",
    "reference": "IG-ANTI-BULLYING",
    "title": "Instagram's Commitment to Bullying Prevention",
    "summary": "Comprehensive overview of Instagram's anti-bullying tools and policies including comment controls and blocking features.",
    "url": "https://about.instagram.com/community/anti-bullying",
    "accessTimestamp": "2025-09-18T18:29:48.883Z",
    "policies": [
      {
        "id": "ig-anti-bullying-report",
        "reference": "IG-ANTI-BULLYING-REPORT",
        "summary": "Users can report content that violates Community Guidelines, including bullying and harassment, for review and potential removal.",
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
            "example": "Bullying comments, harassment posts, or other policy violations",
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
        "summary": "Users can block accounts to prevent them from seeing profile, posts, or Stories, with proactive blocking of new accounts the person might create.",
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
            "reason": "To prevent further contact and harassment"
          }
        ],
        "removalCriteria": [
          "Account is engaging in harassment or bullying behavior",
          "User wants to prevent contact from specific account"
        ]
      },
      {
        "id": "ig-anti-bullying-restrict",
        "reference": "IG-ANTI-BULLYING-RESTRICT",
        "summary": "Users can restrict accounts to limit their interactions, hiding comments and preventing visibility of read receipts and activity status.",
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
            "description": "Account engaging in unwanted interactions",
            "example": "Account posting inappropriate comments or messages",
            "reason": "To limit harmful interactions while maintaining some control"
          }
        ],
        "removalCriteria": [
          "Account is posting inappropriate or offensive comments",
          "User wants to limit interactions without full blocking"
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
            "description": "Unwanted tags or mentions in content",
            "example": "Being tagged in harassing posts or inappropriate content",
            "reason": "To prevent association with unwanted content"
          }
        ],
        "removalCriteria": [
          "User has restricted tagging/mentioning permissions",
          "Tags or mentions violate user's privacy settings"
        ]
      },
      {
        "id": "ig-anti-bullying-comment-warning",
        "reference": "IG-ANTI-BULLYING-COMMENT-WARNING",
        "summary": "Instagram shows warnings for potentially offensive comments and may remove or hide comments that proceed despite the warning.",
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
            "description": "Potentially offensive comment content",
            "example": "Comments that may violate Community Guidelines",
            "reason": "To prevent posting of harmful content"
          }
        ],
        "removalCriteria": [
          "Comment is potentially offensive",
          "Comment violates Community Guidelines despite warning"
        ]
      },
      {
        "id": "ig-anti-bullying-hidden-words",
        "reference": "IG-ANTI-BULLYING-HIDDEN-WORDS",
        "summary": "Comments and messages that may be inappropriate or offensive can be filtered out, including custom word lists created by users.",
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
            "description": "Inappropriate or offensive content in comments or messages",
            "example": "Content containing specific words or phrases deemed offensive",
            "reason": "To filter out unwanted content automatically"
          }
        ],
        "removalCriteria": [
          "Content contains words on filtered list",
          "Content is considered inappropriate or offensive by user settings"
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
            "description": "Unwanted interactions from non-followers or new followers",
            "example": "Harassment from accounts that don't follow the user",
            "reason": "To reduce unwanted contact during vulnerable periods"
          }
        ],
        "removalCriteria": [
          "Interactions come from non-followers when limits are active",
          "Interactions come from recent followers when limits are active"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/192435014247952?ref=ig_about",
      "summary": "Users can report content through Instagram's reporting system for team review",
      "steps": [
        "Identify content that violates Community Guidelines",
        "Use the report function to submit the content for review",
        "Instagram team reviews and takes appropriate action"
      ]
    }
  }
],
};
