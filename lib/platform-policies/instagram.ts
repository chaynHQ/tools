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
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
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
        "id": "meta-cs-ip-policy",
        "reference": "META-CS-INTELLECTUAL-PROPERTY",
        "summary": "Prohibits third-party intellectual property infringement, including unauthorized use of copyrighted images and content.",
        "quote": "We remove content that infringes on third-party intellectual property rights, including copyright and trademark violations.",
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
            "reason": "To locate the specific content that infringes intellectual property rights"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify standing to make the intellectual property claim"
          },
          {
            "description": "Description of the copyrighted work or trademark being infringed",
            "reason": "To identify the specific intellectual property rights at issue"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission from the rights holder",
          "Content infringes on trademark rights",
          "Use of intellectual property is not covered by fair use or other exceptions"
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
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
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
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of identity showing you are the person being impersonated",
            "reason": "To verify that impersonation is occurring and establish the legitimate identity"
          },
          {
            "description": "URL of the impersonating account or specific posts",
            "reason": "To identify the account or content engaged in impersonation"
          },
          {
            "description": "Evidence showing the account was created without your express permission",
            "reason": "To demonstrate unauthorized account creation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates someone without their permission",
          "Account was created for someone else without their express permission",
          "Account provides inaccurate information to misrepresent identity"
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
            "description": "Deletion process begins no more than 30 days after request, with up to 90 days to complete deletion"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Explanation of how the content violates Terms of Use or Community Standards",
            "reason": "To establish grounds for content removal under platform policies"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that needs to be removed"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Terms of Use",
          "Content violates Community Standards",
          "Content removal is required by law"
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
            "description": "Documentation of repeated violations or policy breaches",
            "reason": "To demonstrate pattern of behavior warranting account termination"
          },
          {
            "description": "Evidence of intellectual property infringement if applicable",
            "reason": "To support claims of repeated IP violations"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account repeatedly violates Terms of Use or Community Standards",
          "Account repeatedly infringes other people's intellectual property rights",
          "Account termination is required by law"
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
            "description": "Evidence of legitimate grounds for the report",
            "reason": "To prevent fraudulent or groundless reporting that interferes with service operation"
          },
          {
            "description": "Specific details about the violation being reported",
            "reason": "To ensure reports are substantive and not misusing the reporting system"
          }
        ],
        "removalCriteria": [
          "Reports or appeals are fraudulent or groundless",
          "Activity interferes with or impairs the intended operation of the Service"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with options to request review, unless doing so would expose legal liability or harm the community.",
      "steps": [
        "Instagram will notify you of content removal or account action",
        "Instagram will explain available options for requesting another review",
        "Submit appeal through provided channels if notification includes review options",
        "Consult Instagram Help Center if you believe your account was terminated in error"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "META-PP-SAFETY",
        "summary": "Meta uses information to promote safety, security and integrity, including detecting and preventing harmful behavior and removing content reported to them.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some cases, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences",
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
            "example": "Use the report button on posts, messages, or profiles",
            "reason": "Required to initiate content review process"
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
        "summary": "Meta accesses, preserves, uses and shares information in response to legal requests, to comply with applicable law, and to promote safety and prevent harm.",
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
            "example": "Court-issued subpoena for specific content removal",
            "reason": "Required to compel Meta to take action under legal authority"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Content threatens safety, security and integrity of users or public"
        ]
      },
      {
        "id": "meta-pp-content-sharing",
        "reference": "META-PP-SHARING",
        "summary": "Meta explains how information is shared on their products, including content others share about you and public content visibility.",
        "quote": "On Meta Products. Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
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
            "description": "Identification of content shared without permission",
            "example": "Screenshots or links to posts containing your private information",
            "reason": "To locate and verify unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Content shared without proper authorization",
          "Private information made public without consent"
        ]
      },
      {
        "id": "meta-pp-account-management",
        "reference": "META-PP-MANAGE",
        "summary": "Meta provides tools to view, manage, download and delete information, with options to exercise privacy rights through settings and help centers.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
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
            "description": "Account verification through legitimate channels",
            "example": "Login credentials or account recovery information",
            "reason": "To verify account ownership before allowing content management"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own information",
          "Content violates user's privacy rights under applicable laws"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy and content decisions through their help center contact form.",
      "steps": [
        "Visit the Facebook Help Center contact page",
        "Submit questions or complaints regarding privacy policy or content decisions",
        "In some countries, users may also contact the Data Protection Officer or local Data Protection Authority"
      ]
    }
  },
  {
    "id": "instagram-new-1758221774625-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment across Meta platforms, including Instagram, with detailed enforcement guidelines.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
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
            "description": "Evidence that contact is unwanted and fits criteria",
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
            "description": "Evidence of sexualized commentary or manipulated imagery",
            "example": "Screenshots of derogatory sexual terms or photoshopped images",
            "reason": "To verify violation of sexual harassment policies"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings",
          "Content attacks individuals through derogatory sexual terms"
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
            "example": "Screenshots showing threats to doxx or release personal data",
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
            "description": "Evidence of false or unwanted sexual activity claims",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify inappropriate sexual content targeting protected individuals"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of minors",
          "Content makes claims about sexual activity of private adults",
          "Content makes claims about sexual activity of limited scope public figures",
          "Exception: Criminal allegations of non-consensual touching against adults"
        ]
      },
      {
        "id": "meta-bh-sexualizing-adults",
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
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots showing sexualized comments or imagery",
            "reason": "To verify inappropriate sexualization"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors (any status)",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to specific physical characteristics.",
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
            "description": "Evidence of manipulated imagery highlighting physical features",
            "example": "Screenshots showing circled or highlighted body parts",
            "reason": "To verify image manipulation for harassment"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to highlight physical characteristics",
          "Content circles or draws attention to specific body parts",
          "Manipulation is done in a negative or harassing manner"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery-self-report",
        "reference": "META-BH-T3-SELF-REPORT",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
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
            "description": "Self-report from target or authorized representative",
            "example": "Report from the individual depicted in manipulated content",
            "reason": "Self-reporting requirement for this protection tier"
          },
          {
            "description": "Evidence of unwanted manipulated imagery",
            "example": "Screenshots of manipulated photos or videos",
            "reason": "To verify the manipulated content"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Imagery is unwanted by the target",
          "Target is a private minor, private adult, or minor involuntary public figure",
          "Content is self-reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups-events",
        "reference": "META-BH-ADDITIONAL-PAGES",
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
            "example": "Complaint from the individual being targeted",
            "reason": "Required confirmation that content is unwanted"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots of unwanted pages or groups created about the individual",
            "reason": "To verify the targeting behavior"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals",
          "Targeting occurs through Pages, Groups, or Events",
          "Content is reported by target or authorized representative",
          "Content is unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figures",
        "reference": "META-BH-ADDITIONAL-SEXUAL-PF",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from public figure or their representative",
            "reason": "Required confirmation for public figure protection"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of sexualized posts or comments",
            "reason": "To verify the sexualizing nature of content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted",
          "Confirmation is provided to Meta"
        ]
      },
      {
        "id": "meta-bh-sexually-harassing-contact",
        "reference": "META-BH-ADDITIONAL-SEXUAL-CONTACT",
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
            "description": "Confirmation from recipient or authorized representative that contact is unwanted",
            "example": "Statement from the recipient confirming harassment",
            "reason": "Required confirmation that contact is unwanted"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots of unwanted sexual messages or content",
            "reason": "To verify the sexually harassing nature of contact"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Contact is unwanted by the recipient",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain decisions.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional context or information for review",
        "Receive final response after re-review in Support Inbox",
        "For eligible cases, may appeal to Oversight Board"
      ]
    }
  },
  {
    "id": "instagram-new-1758221774625-1",
    "reference": "IG-NCII",
    "title": "Instagram Non-Consensual Intimate Imagery Support",
    "summary": "Information about Instagram's participation in StopNCII.org and policies regarding non-consensual intimate imagery.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "IG-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on Facebook and Instagram platforms and provides proactive detection tools.",
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
            "description": "Intimate images that may be shared without consent",
            "example": "Photos or videos of a person which feature nudity or are sexual in nature",
            "reason": "To create hash fingerprints for proactive detection and removal"
          }
        ],
        "removalCriteria": [
          "Images are intimate in nature (featuring nudity or sexual content)",
          "Images are shared without the subject's consent",
          "Content violates platform's NCII policies"
        ]
      },
      {
        "id": "meta-stopncii-tool",
        "reference": "IG-NCII-002",
        "summary": "Meta supports StopNCII.org platform allowing users to proactively prevent sharing of intimate images through hash-based detection.",
        "quote": "When someone is concerned their intimate images have been posted or might be posted to online platforms like Facebook or Instagram, they can create a case through StopNCII.org to proactively detect them.",
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
            "description": "Access to the intimate images to generate hash fingerprints",
            "example": "Original photos or videos stored on user's device",
            "reason": "Hash-generating technology creates secure digital fingerprints for detection without sharing actual images"
          }
        ],
        "removalCriteria": [
          "Hash matches detected content on platform",
          "Content identified as intimate imagery",
          "Images flagged through StopNCII.org system"
        ]
      },
      {
        "id": "meta-hash-detection",
        "reference": "IG-NCII-003",
        "summary": "Meta uses hash-matching technology to detect and remove intimate images shared without consent while protecting user privacy.",
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
            "description": "Hash values generated from intimate images",
            "example": "Numerical codes created by hash-generating technology",
            "reason": "Allows detection without requiring users to share actual intimate images"
          }
        ],
        "removalCriteria": [
          "Hash value matches content on platform",
          "Content identified as non-consensual intimate imagery",
          "Images detected through hash-matching system"
        ]
      },
      {
        "id": "meta-ncii-resources",
        "reference": "IG-NCII-004",
        "summary": "Meta provides resources and reporting mechanisms for victims of non-consensual intimate image sharing.",
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
            "description": "Report of non-consensual intimate image sharing",
            "example": "User reports through platform reporting mechanisms",
            "reason": "Enables platform to identify and remove violating content"
          }
        ],
        "removalCriteria": [
          "Content reported as non-consensual intimate imagery",
          "Images shared without subject's consent",
          "Content violates platform community standards"
        ]
      },
      {
        "id": "meta-age-restriction",
        "reference": "IG-NCII-005",
        "summary": "StopNCII.org service is restricted to adults over 18, with alternative resources provided for minors.",
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
            "description": "Verification that user is over 18 years old",
            "example": "Age confirmation for StopNCII.org access",
            "reason": "Service restricted to adults, minors directed to specialized resources like NCMEC"
          }
        ],
        "removalCriteria": [
          "User must be over 18 to use StopNCII.org service",
          "Content involves non-consensual intimate imagery",
          "Alternative processes apply for users under 18"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758221774625-2",
    "reference": "IG-REPORT",
    "title": "Instagram Harassment and Bullying Reporting",
    "summary": "Official reporting mechanisms and procedures for harassment and bullying content on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
    "policies": [
      {
        "id": "ig-report-harassment-bullying",
        "reference": "IG-REPORT-HARASSMENT",
        "summary": "Instagram removes accounts established with intent to bully or harass another person, and removes photos or comments intended to bully or harass someone.",
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
            "description": "Report through Instagram's reporting system",
            "example": "Use the report function on the specific content or account",
            "reason": "Required to initiate Instagram's review process for harassment content"
          }
        ],
        "removalCriteria": [
          "Account established with intent to bully or harass another person",
          "Photo intended to bully or harass someone",
          "Comment intended to bully or harass someone"
        ]
      },
      {
        "id": "ig-report-impersonation",
        "reference": "IG-REPORT-IMPERSONATION",
        "summary": "Instagram addresses cases where someone is pretending to be you or someone else, which often involves unauthorized use of personal images.",
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
            "description": "Report through Instagram's impersonation reporting process",
            "example": "Follow the specific impersonation reporting guidelines",
            "reason": "Required to verify identity and establish unauthorized use of personal information or images"
          }
        ],
        "removalCriteria": [
          "Account pretending to be another person",
          "Unauthorized use of someone's identity or personal content"
        ]
      },
      {
        "id": "ig-report-community-standards",
        "reference": "IG-REPORT-COMMUNITY",
        "summary": "Instagram removes accounts or posts that violate Community Standards, which include various forms of abusive content and unauthorized sharing.",
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
            "description": "Report through Instagram's general reporting system",
            "example": "Use the report function and specify Community Standards violation",
            "reason": "Required to flag content that violates platform policies"
          }
        ],
        "removalCriteria": [
          "Content that violates Instagram Community Standards",
          "Accounts that repeatedly violate Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758221774625-3",
    "reference": "IG-IMPERSON",
    "title": "Instagram Impersonation Reporting",
    "summary": "Official process and forms for reporting impersonation accounts on Instagram.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
    "policies": [
      {
        "id": "ig-imperson-report",
        "reference": "IG-IMPERSON-001",
        "summary": "Instagram allows reporting of accounts that impersonate you, requiring government-issued ID verification and only accepting reports from the impersonated person or their representative.",
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
            "reason": "To provide complete information for Instagram's review process"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Report is submitted by the impersonated person or their authorized representative"
        ]
      },
      {
        "id": "ig-imperson-anonymous",
        "reference": "IG-IMPERSON-002",
        "summary": "Instagram impersonation reports are anonymous except for intellectual property infringement cases, and the reported account will not see who reported them.",
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
          "Report qualifies as impersonation (not intellectual property infringement)"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758221774625-4",
    "reference": "IG-APPEAL",
    "title": "Instagram Content Appeal Process",
    "summary": "Official process for appealing content removal decisions on Instagram.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-18T18:56:14.625Z",
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
            "description": "Must complete initial review request",
            "example": "Submit review through Instagram's standard process",
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
        "summary": "Users can appeal Instagram's decision not to remove content they reported, but must first complete the internal review process.",
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
            "description": "Must have initially reported the content",
            "example": "Original report submission to Instagram",
            "reason": "Establishes standing to appeal non-removal decision"
          },
          {
            "description": "Must complete review request process",
            "example": "Submit review request for reported content",
            "reason": "Required step before Oversight Board appeal"
          }
        ],
        "removalCriteria": [
          "Content must have been reported and reviewed twice",
          "Instagram must have decided not to remove the content",
          "User must disagree with non-removal decision"
        ]
      },
      {
        "id": "ig-appeal-oversight-board",
        "reference": "IG-APPEAL-OVERSIGHT",
        "summary": "Users have 15 days to appeal Instagram's content decisions to the Oversight Board after completing internal reviews.",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Must submit appeal within 15-day window",
            "example": "Appeal submitted within 15 days of Instagram's final decision",
            "reason": "Statutory deadline for appeal eligibility"
          },
          {
            "description": "Must have completed two rounds of Instagram review",
            "example": "Evidence of completed internal review process",
            "reason": "Prerequisite for Oversight Board consideration"
          }
        ],
        "removalCriteria": [
          "Appeal must be submitted within 15 days of decision",
          "Must have exhausted Instagram's internal review process",
          "Content must be eligible for Oversight Board review"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Two-tier appeal process: first through Instagram's internal review system, then optionally to the Oversight Board within 15 days",
      "steps": [
        "Submit initial review request through Instagram's standard process",
        "Wait for Instagram's review decision",
        "If still unsatisfied, submit second review request",
        "Wait for second review decision from Instagram",
        "If still disagreeing, submit appeal to Oversight Board within 15 days",
        "Oversight Board decides whether to review the appeal",
        "Track appeal status using reference number on Oversight Board website"
      ]
    }
  }
],
};
