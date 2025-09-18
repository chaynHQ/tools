import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community guidelines covering prohibited content and behavior across Meta platforms including Instagram, with specific sections on bullying, harassment, privacy violations, and non-consensual intimate imagery.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T18:39:51.555Z",
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
        "summary": "Prohibits misrepresenting identity or using inauthentic behavior to deceive others.",
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
            "description": "Description of how the account or content is misrepresenting identity",
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
    "title": "Meta Terms of Service",
    "summary": "Meta's unified terms of service covering Instagram, Facebook, and other Meta products, effective January 1, 2025, including content licensing and user obligations.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-18T18:39:51.555Z",
    "policies": [
      {
        "id": "fb-tou-ip-infringement",
        "reference": "FB-TOU-3.2.1",
        "summary": "Prohibits sharing content that infringes or breaches someone else's intellectual property rights, including copyright and trademark violations.",
        "quote": "You may not use our Products to do or share anything: That infringes or breaches someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "description": "Proof of intellectual property ownership or authorization",
            "reason": "To establish legal rights to the content"
          },
          {
            "description": "Identification of the specific infringing content",
            "reason": "To locate and assess the violation"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright, trademark, or other intellectual property rights",
          "User does not own or have necessary rights to share the content"
        ]
      },
      {
        "id": "fb-tou-unauthorized-content",
        "reference": "FB-TOU-3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share.",
        "quote": "You may not use our Products to do or share anything: That you do not own or have the necessary rights to share.",
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
            "description": "Evidence of ownership or authorization to share the content",
            "reason": "To verify legitimate rights to the shared material"
          },
          {
            "description": "Identification of unauthorized content",
            "reason": "To locate the content in question"
          }
        ],
        "removalCriteria": [
          "Content is shared without proper ownership or authorization",
          "User lacks necessary rights to distribute the material"
        ]
      },
      {
        "id": "fb-tou-content-removal",
        "reference": "FB-TOU-3.2",
        "summary": "Facebook can remove, block or restrict content that breaches their terms and will notify users with options for review unless violations are serious or repeated.",
        "quote": "We can remove, block or restrict content that is in breach of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2. If we remove, block or restrict content that you have shared for violation of the Community Standards we'll let you know and explain any options you have to request another review, unless you seriously or repeatedly violate these Terms or if doing so may expose us or others to legal liability.",
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
            "description": "Report of violating content through Facebook's reporting system",
            "reason": "To initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content breaches Facebook's Terms of Service",
          "Content violates Community Standards",
          "Content poses legal liability risks"
        ]
      },
      {
        "id": "fb-tou-reporting-system",
        "reference": "FB-TOU-3.2",
        "summary": "Facebook encourages users to report content or conduct that breaches rights or violates terms and policies through their reporting system.",
        "quote": "To help support our community, we encourage you to report content or conduct that you believe breaches your rights (including intellectual property rights) or our terms and policies if this feature exists in your jurisdiction.",
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
            "description": "Identification of the violating content or conduct",
            "reason": "To enable Facebook to locate and review the reported material"
          },
          {
            "description": "Explanation of how the content breaches rights or policies",
            "reason": "To provide context for the violation claim"
          }
        ],
        "removalCriteria": [
          "Content breaches user's rights including intellectual property rights",
          "Content violates Facebook's terms and policies"
        ]
      },
      {
        "id": "fb-tou-account-security",
        "reference": "FB-TOU-3.1",
        "summary": "Users must not share passwords, give account access to others, or transfer accounts without Facebook's permission.",
        "quote": "Not share your password, give access to your Facebook account to others, or transfer your account to anyone else (without our permission).",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized account access or compromise",
            "reason": "To verify account security breach"
          },
          {
            "description": "Proof of legitimate account ownership",
            "reason": "To confirm identity before account recovery"
          }
        ],
        "removalCriteria": [
          "Account has been accessed without authorization",
          "Password or account credentials have been compromised"
        ]
      },
      {
        "id": "fb-tou-content-deletion",
        "reference": "FB-TOU-3.3.3",
        "summary": "Users can delete individual content at any time, with deletion taking up to 90 days to complete from systems and backups.",
        "quote": "You can delete individual content you share, post, and upload at any time. In addition, all content posted to your personal account will be deleted if you delete your account. It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request.",
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
            "value": 90,
            "unit": "days",
            "description": "Maximum time to complete content deletion from all systems"
          }
        },
        "evidenceRequirements": [
          {
            "description": "User account access to delete own content",
            "reason": "To verify legitimate deletion request"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content",
          "User deletes their account"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review of content removal decisions, except for serious or repeated violations or when doing so may expose legal liability.",
      "steps": [
        "Facebook notifies users when content is removed for Community Standards violations",
        "Users are provided options to request another review of the decision",
        "Review options are not available for serious or repeated violations or legal liability cases"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms including Instagram. Updated effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-18T18:39:51.555Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY",
        "summary": "Meta removes content that violates terms or policies, including harmful or unlawful behavior, through automated and manual review processes.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products... Find and address violations of our terms or policies... Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "description": "Report the content through Meta's reporting mechanisms",
            "example": "Use the report button on the content or contact support",
            "reason": "Required to initiate review process for policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content threatens life, physical or mental health, well-being or integrity of users"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and shares information to comply with applicable law and prevent harm.",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas... In accordance with applicable law... To promote the safety, security and integrity of Meta Products, users, employees, property and the public",
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
            "reason": "Required to compel Meta to share user information with third parties"
          }
        ],
        "removalCriteria": [
          "Valid legal request from law enforcement or civil litigants",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity of users and the public"
        ]
      },
      {
        "id": "meta-pp-content-review",
        "reference": "META-PP-MANUAL-REVIEW",
        "summary": "Meta conducts both automated processing and manual human review to access and review user information for safety and policy enforcement.",
        "quote": "we also use manual review to access and review your information... apply automated processing techniques and, in some instances, conduct manual (human) review",
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
            "description": "Content must be reported or flagged for review",
            "example": "User reports or automated systems flag potentially violating content",
            "reason": "Triggers manual review process for policy violations"
          }
        ],
        "removalCriteria": [
          "Content identified through automated processing as potentially violating",
          "Content reported by users for policy violations",
          "Content that requires human judgment for policy enforcement"
        ]
      },
      {
        "id": "meta-pp-account-deletion",
        "reference": "META-PP-DELETE",
        "summary": "Users can delete their information or account through Meta's privacy controls and settings.",
        "quote": "Delete your information or account... You can learn more about how privacy works on Facebook and on Instagram, and in the Facebook Help Center",
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
            "example": "Login credentials or identity verification",
            "reason": "Required to confirm user has authority to delete account or information"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own information or account",
          "User has proper authentication and authorization"
        ]
      },
      {
        "id": "meta-pp-data-management",
        "reference": "META-PP-MANAGE",
        "summary": "Meta provides tools for users to view, manage, download and delete their information through privacy settings and controls.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use",
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
            "description": "Account access and authentication",
            "example": "Login to account settings and privacy controls",
            "reason": "Required to access and manage personal information"
          }
        ],
        "removalCriteria": [
          "User requests management or deletion of their own information",
          "User has authenticated access to their account"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy, complaints, or requests regarding their information through online contact forms or mail.",
      "steps": [
        "Contact Meta online through the provided support link",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "For certain jurisdictions, users may also contact the Data Protection Officer or local Data Protection Authority"
      ]
    }
  },
  {
    "id": "instagram-new-1758220791555-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific Meta Community Standards section detailing policies on bullying, harassment, threats, and unwanted contact, with heightened protections for minors.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T18:39:51.555Z",
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
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes severe sexualized commentary, derogatory sexualized photoshop or drawings, and attacks through derogatory terms related to sexual activity.",
        "quote": "Severe sexualized commentary. Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of sexualized harassment or manipulated imagery",
            "example": "Screenshots of derogatory sexual comments or manipulated photos",
            "reason": "To verify the sexual nature and severity of the harassment"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings",
          "Content attacks individuals using derogatory sexual terms"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-SEXUAL-CLAIMS",
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in context of criminal allegations against adults.",
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
            "description": "Evidence of false or unwanted sexual claims",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify claims are being made about sexual activity"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing individual is minor, private adult, or limited scope public figure",
            "reason": "To determine level of protection under policy"
          }
        ],
        "removalCriteria": [
          "Target is a minor, private adult, or limited scope public figure",
          "Content makes claims about sexual activity",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-ADULT-SEX",
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
            "example": "Screenshots or links to content that sexualizes the individual",
            "reason": "To verify the sexual nature of the content"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing target is minor, private adult, or limited scope public figure",
            "reason": "To determine eligibility for protection"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult",
          "Target is minor, private adult, or limited scope public figure"
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
            "example": "Screenshots showing manipulated photos with highlighted or circled features",
            "reason": "To verify content has been manipulated to negatively highlight features"
          },
          {
            "description": "Self-report confirmation for unwanted manipulated imagery",
            "example": "Report from target or authorized representative",
            "reason": "Policy requires self-reporting for certain protections"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to negatively highlight physical characteristics",
          "For unwanted manipulated imagery: target is private minor, private adult, or minor involuntary public figure and has self-reported"
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
            "example": "Screenshots of messages or posts threatening to share private contact details or medical records",
            "reason": "To verify threats are being made to release private information"
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
        "id": "meta-bh-self-report-required",
        "reference": "META-BH-SELF-REPORT",
        "summary": "Meta removes certain harassment content when reported by the target or authorized representative, including unwanted Pages/Groups/Events and sexually harassing public figure content.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target. Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Report from target or authorized representative",
            "example": "Confirmation that the target considers the content unwanted",
            "reason": "Policy requires confirmation from target that content is unwanted"
          },
          {
            "description": "Evidence of targeting through unwanted pages/groups/events",
            "example": "Links to pages, groups, or events created to target the individual",
            "reason": "To verify targeting is occurring through these platforms"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through unwanted Pages, Groups, or Events",
          "Content sexualizes a public figure and target confirms it's unwanted",
          "Target or authorized representative has reported the content"
        ]
      },
      {
        "id": "meta-bh-mass-harassment",
        "reference": "META-BH-MASS-HARASSMENT",
        "summary": "Meta removes directed mass harassment targeting individuals at heightened risk or any individual via personal surfaces with violating content.",
        "quote": "Remove directed mass harassment, when: Targeting, via any surface, 'individuals at heightened risk of offline harm', defined as: Human rights defenders, Minors, Victims of violent events/tragedies, Opposition figures in at-risk countries during election periods, Election officials, Government dissidents who have been targeted based on their dissident status, Ethnic and religious minorities in conflict zones, Member of a designated and recognizable at-risk group. Targeting any individual via personal surfaces, such as inbox or profiles, with: Content that violates the bullying and harassment policies for private individuals or, Objectionable content that is based on a protected characteristic",
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
            "example": "Screenshots showing multiple accounts targeting the individual",
            "reason": "To establish pattern of mass harassment"
          },
          {
            "description": "Evidence of heightened risk status or personal surface targeting",
            "example": "Documentation showing individual falls into at-risk category or evidence of harassment via inbox/profiles",
            "reason": "To determine if enhanced protections apply"
          }
        ],
        "removalCriteria": [
          "Targeting individuals at heightened risk of offline harm via any surface",
          "Targeting any individual via personal surfaces with policy-violating content",
          "Targeting based on protected characteristics via personal surfaces"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through notifications and Support Inbox, allowing users to request another review if they believe the decision was wrong.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758220791555-1",
    "reference": "IG-NCII",
    "title": "Non-Consensual Intimate Imagery Support",
    "summary": "Meta's support for StopNCII.org initiative and policies regarding non-consensual sharing of intimate images, including proactive detection and removal processes.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T18:39:51.555Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "IG-NCII-001",
        "summary": "Meta prohibits non-consensual sharing of intimate images across all platforms and provides proactive detection tools.",
        "quote": "The non-consensual sharing of intimate images (NCII) — sometimes unfortunately referred to as \"revenge porn\" — can have a devastating impact on a person's life. We do not allow this content on our apps",
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
            "description": "Intimate images that may be shared without consent",
            "example": "Photos or videos featuring nudity or sexual content",
            "reason": "To create hash fingerprints for proactive detection"
          }
        ],
        "removalCriteria": [
          "Images or videos of a person which feature nudity or are sexual in nature shared without consent",
          "Content that matches hash fingerprints of reported NCII"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "IG-NCII-002",
        "summary": "Meta uses hash-matching technology to proactively detect and prevent sharing of reported intimate images before they are posted.",
        "quote": "Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms. While participating companies use the hash they receive from StopNCII.org to identify images that someone has shared or is trying to share on their platforms, the original image never leaves the person's device.",
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
            "description": "Hash fingerprints of intimate images through StopNCII.org platform",
            "example": "Digital fingerprint created by hashing technology",
            "reason": "To enable proactive detection without sharing actual images"
          }
        ],
        "removalCriteria": [
          "Content that matches hash fingerprints from StopNCII.org database",
          "Images being uploaded that match reported NCII hashes"
        ]
      },
      {
        "id": "meta-ncii-removal-existing",
        "reference": "IG-NCII-003",
        "summary": "Meta removes intimate images shared without consent and provides resources for victims to report such content.",
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
            "description": "Report of intimate images shared without consent",
            "example": "User report identifying specific content",
            "reason": "To identify and remove existing NCII content"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without the subject's consent",
          "Content that matches photo- and video-matching technology for known NCII"
        ]
      },
      {
        "id": "meta-ncii-age-restriction",
        "reference": "IG-NCII-004",
        "summary": "StopNCII.org platform is restricted to adults over 18, with separate resources available for minors.",
        "quote": "StopNCII.org is for adults over 18 years old who think an intimate image of them may be shared, or has already been shared, without their consent. For people who are under 18, there are other resources and organizations that can offer support, including the National Center for Missing & Exploited Children (NCMEC).",
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
            "description": "Age verification that user is over 18 years old",
            "example": "Adult status confirmation",
            "reason": "Platform restriction for StopNCII.org access"
          }
        ],
        "removalCriteria": [
          "Intimate images of adults over 18 shared without consent",
          "Content reported through appropriate channels based on subject's age"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/safety/notwithoutmyconsent/resources",
      "summary": "Meta provides resources and support for NCII victims through dedicated safety pages and the StopNCII.org platform.",
      "steps": [
        "Access Meta's safety resources for non-consensual intimate images",
        "Use StopNCII.org platform to create hash fingerprints of intimate images",
        "Report existing content through standard Meta reporting channels",
        "Access support from partner organizations for additional assistance"
      ]
    }
  },
  {
    "id": "instagram-new-1758220791555-2",
    "reference": "IG-IMP",
    "title": "Impersonation Reporting",
    "summary": "Instagram's policies and reporting mechanisms for fake accounts and impersonation, including personal and brand impersonation detection and removal.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-18T18:39:51.555Z",
    "policies": [
      {
        "id": "ig-imp-impersonation",
        "reference": "IG-IMP-001",
        "summary": "Instagram removes accounts that impersonate others when reported by the impersonated person or their representative with proper identification.",
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
            "reason": "To properly investigate and verify the impersonation claim"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Report is submitted by the impersonated person or their authorized representative",
          "Proper identification documentation is provided"
        ]
      },
      {
        "id": "ig-imp-reporting-eligibility",
        "reference": "IG-IMP-002",
        "summary": "Only the impersonated person or their authorized representative can report impersonation accounts to Instagram.",
        "quote": "We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent). If someone you know is being impersonated, please encourage that person to report it.",
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
            "description": "Authorization to act on behalf of impersonated person",
            "example": "Parent reporting for minor child",
            "reason": "To ensure only authorized parties can request account removal"
          }
        ],
        "removalCriteria": [
          "Reporter is the impersonated person themselves",
          "Reporter is an authorized representative of the impersonated person"
        ]
      },
      {
        "id": "ig-imp-anonymous-reporting",
        "reference": "IG-IMP-003",
        "summary": "Impersonation reports are anonymous except for intellectual property infringement cases, and the reported account will not see who reported them.",
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
          "Report meets Instagram's impersonation policy requirements"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758220791555-3",
    "reference": "IG-APPEAL",
    "title": "Content Removal Appeals Process",
    "summary": "Instagram's appeal process for content removal decisions, including Oversight Board appeals and standard appeal procedures for policy violations.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-18T18:39:51.555Z",
    "policies": [
      {
        "id": "ig-appeal-content-removal",
        "reference": "IG-APPEAL-001",
        "summary": "Users can appeal Instagram's content removal decisions through a two-step process: first requesting a review, then appealing to the Oversight Board if still unsatisfied.",
        "quote": "If you don't think that your content should have been taken down and you want to appeal to the Oversight Board, you must first go through the request a review process. Before you can appeal Instagram's content decision to the Oversight Board, you must first request a review of your content.",
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
            "description": "Must complete initial review request process before Oversight Board appeal",
            "example": "Submit review request through Instagram's standard process",
            "reason": "Required prerequisite step before escalating to Oversight Board"
          }
        ],
        "removalCriteria": [
          "Content must have been reviewed twice by Instagram with user disagreeing with decision",
          "Appeal must be submitted within 15 days of the decision",
          "Content and decision must be eligible for Oversight Board review"
        ]
      },
      {
        "id": "ig-appeal-reported-content",
        "reference": "IG-APPEAL-002",
        "summary": "Users can appeal Instagram's decision not to remove content they reported by first requesting a review, then escalating to the Oversight Board if the content remains up.",
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
            "description": "Must have initially reported the content through Instagram's reporting system",
            "example": "Original report submission showing content violates policies",
            "reason": "Establishes standing to appeal non-removal decision"
          },
          {
            "description": "Must complete review request process before Oversight Board appeal",
            "example": "Submit review request for the reported content decision",
            "reason": "Required step before escalating to external oversight"
          }
        ],
        "removalCriteria": [
          "Content must have been reported and reviewed twice with user disagreeing with non-removal decision",
          "Appeal must be submitted within 15 days of the decision",
          "Reported content must be eligible for Oversight Board review"
        ]
      },
      {
        "id": "ig-appeal-timeframe",
        "reference": "IG-APPEAL-003",
        "summary": "Appeals to the Oversight Board must be submitted within 15 days of Instagram's content decision, after which the appeal window expires.",
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
            "description": "Documentation of when Instagram's decision was made",
            "example": "Email notification or platform notification showing decision date",
            "reason": "Needed to verify appeal is submitted within 15-day window"
          }
        ],
        "removalCriteria": [
          "Appeal must be submitted within 15 days of Instagram's decision",
          "Must have completed prerequisite review processes"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Two-tier appeal process: first request review through Instagram, then appeal to independent Oversight Board if unsatisfied. Oversight Board selects limited number of cases to review.",
      "steps": [
        "Submit initial content review request through Instagram's standard process",
        "Wait for Instagram's review decision on the content or reported content",
        "If still unsatisfied after review, submit appeal to Oversight Board within 15 days",
        "Oversight Board decides whether to select the case for review",
        "Track appeal status using reference number on Oversight Board website"
      ]
    }
  }
],
};
