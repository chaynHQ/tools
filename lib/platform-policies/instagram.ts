import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community standards that outline what is and isn't allowed on Facebook, Instagram, Messenger and Threads, covering safety, privacy, dignity, and authenticity policies.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T21:57:06.576Z",
    "policies": [
      {
        "id": "meta-cs-ncii-policy",
        "reference": "META-CS-NCSII",
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
        "quote": "Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
        "reference": "META-CS-IMPERSONATION",
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
    "accessTimestamp": "2025-09-18T21:57:06.576Z",
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
            "description": "Explanation of how the content violates Instagram's Terms of Use or Community Standards",
            "reason": "To assess whether content meets removal criteria under platform policies"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's Community Standards",
          "Removal is required by applicable law"
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
          "Account repeatedly violates Terms of Use or Community Standards",
          "Account repeatedly infringes other people's intellectual property rights",
          "Termination is required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account termination with explanation of options to request review, except where doing so may expose Instagram or others to legal liability.",
      "steps": [
        "Instagram will notify you when content is removed or account is terminated",
        "Instagram will explain any options available to request another review",
        "Consult Instagram's Help Center if you believe your account was terminated in error",
        "Use available review processes unless restricted due to legal, technical, or safety reasons"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-18T21:57:06.576Z",
    "policies": [
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY",
        "summary": "Meta removes content that violates terms or policies to promote safety, security and integrity, including harmful or unlawful behavior and content reported by users.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products... We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies... Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "reason": "Required for Meta to review and potentially remove content that violates policies"
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
        "summary": "Meta responds to legal requests including search warrants, court orders, production orders or subpoenas, and complies with applicable law to prevent harm.",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities... In accordance with applicable law... To promote the safety, security and integrity of Meta Products, users, employees, property and the public",
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
          },
          {
            "description": "Demonstration that content violates applicable law",
            "example": "Evidence that content constitutes harassment, privacy violation, or other illegal activity",
            "reason": "Necessary for Meta to determine legal compliance requirements"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties (civil litigants, law enforcement, government authorities)",
          "Content violates applicable law",
          "Removal necessary to promote safety, security and integrity of users and the public"
        ]
      },
      {
        "id": "meta-pp-content-sharing",
        "reference": "META-PP-SHARING",
        "summary": "Meta allows users to control how their information is shared, with different privacy settings for content shared with specific audiences versus public content.",
        "quote": "Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content... You can choose to connect with integrated partners who use our Products. If you do, these integrated partners receive information about you and your activity.",
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
            "description": "Demonstration that content was shared without permission beyond intended audience",
            "example": "Private content shared publicly or with unintended recipients",
            "reason": "To establish violation of user's privacy settings and sharing preferences"
          },
          {
            "description": "Evidence of original privacy settings or sharing intent",
            "example": "Screenshots showing content was originally shared privately",
            "reason": "To verify that sharing violated user's intended audience restrictions"
          }
        ],
        "removalCriteria": [
          "Content shared beyond user's intended audience or privacy settings",
          "Unauthorized sharing of private content by others",
          "Violation of user's control over their information sharing"
        ]
      },
      {
        "id": "meta-pp-account-management",
        "reference": "META-PP-ACCOUNT",
        "summary": "Users can manage, download, or delete their information and exercise privacy rights through Meta's settings and help centers.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use... To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
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
            "example": "Login credentials or account recovery information",
            "reason": "To verify user has authority to manage or delete the content"
          },
          {
            "description": "Specific identification of content to be managed or removed",
            "example": "URLs or specific posts/images to be deleted",
            "reason": "To locate and process the specific content for removal"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content or account",
          "User exercises privacy rights to manage their information",
          "Content removal requested through official Meta settings or help centers"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy and content decisions, and may also contact Data Protection Officers or local Data Protection Authorities depending on jurisdiction.",
      "steps": [
        "Contact Meta online at help.meta.com/support/privacy or through Facebook help contact",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, contact local Data Protection Authority (DPA) directly",
        "For policy violations, decisions may be reviewed by the Oversight Board"
      ]
    }
  },
  {
    "id": "instagram-new-1758232626576-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Dedicated policy page covering Meta's approach to non-consensual intimate images (NCII) and sextortion prevention across platforms including Instagram.",
    "url": "https://www.meta.com/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-18T21:57:06.576Z",
    "policies": [
      {
        "id": "meta-ncii-sharing-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and considers sharing or threatening to share intimate images without consent as against Meta policies.",
        "quote": "Sharing – or threatening to share – intimate images without consent is against Meta policies. Nobody should ever have to experience sextortion. We work to prevent this type of behaviour, and when we become aware, we work to take action.",
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
            "description": "Report the content through dedicated reporting option for private images",
            "example": "Use specific reporting flow for intimate image abuse",
            "reason": "Meta has specialized reporting mechanisms for NCII cases"
          }
        ],
        "removalCriteria": [
          "Content involves intimate images shared without consent",
          "Content involves threats to share intimate images",
          "Content constitutes sextortion behavior"
        ]
      },
      {
        "id": "meta-ncii-sextortion-definition",
        "reference": "META-NCII-002",
        "summary": "Meta defines sextortion as the threat to reveal intimate images to force someone to do something they don't want to do, and takes action against such behavior.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do. If someone tries to use a personal intimate image as a threat to make you do something that you don't want to do – such as send money, additional images or have sexual contact – that is a crime known as sextortion.",
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
            "description": "Evidence of threats involving intimate images",
            "example": "Screenshots of threatening messages demanding money, additional images, or sexual contact",
            "reason": "To establish the coercive nature of sextortion"
          }
        ],
        "removalCriteria": [
          "Content involves threats to reveal intimate images",
          "Content is used to coerce victims into unwanted actions",
          "Content involves demands for money, additional images, or sexual contact"
        ]
      },
      {
        "id": "meta-ncii-enforcement-teams",
        "reference": "META-NCII-003",
        "summary": "Meta has specialized teams working on combating sextortion with automated systems for detection and removal, and reports cases to law enforcement when appropriate.",
        "quote": "We have specialised teams working on combating sextortion. We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "Report content that appears to violate policies",
            "example": "Use reporting mechanisms when encountering sextortion behavior",
            "reason": "Enables automated and manual review systems to take action"
          }
        ],
        "removalCriteria": [
          "Content matches patterns associated with sextortion behavior",
          "Accounts exhibit behavior consistent with criminal activity",
          "Content involves exploitation requiring law enforcement referral"
        ]
      },
      {
        "id": "meta-ncii-24-7-review",
        "reference": "META-NCII-004",
        "summary": "Meta's teams review reports of nude or sexual photos/videos and threats 24/7 in more than 70 languages and take action on violating content and behavior.",
        "quote": "You can report nude or sexual photos or videos of yourself or threats to share these images or videos to our apps or technologies to prevent them from being reshared. Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behaviour.",
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
            "value": 24,
            "unit": "hours",
            "description": "Continuous review available 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report through platform-specific reporting mechanisms",
            "example": "Use Facebook, Instagram, or Messenger reporting tools",
            "reason": "Enables 24/7 multilingual review process"
          }
        ],
        "removalCriteria": [
          "Content involves nude or sexual photos/videos of the reporter",
          "Content involves threats to share intimate images",
          "Content violates Meta's intimate image policies"
        ]
      },
      {
        "id": "meta-ncii-prevention-teens",
        "reference": "META-NCII-005",
        "summary": "Meta automatically sets teen accounts under 16 to private and restricts adults over 18 from starting private chats with unconnected teens to prevent unwanted contact and sextortion.",
        "quote": "We automatically set teens' accounts under 16 (and under 18 in certain countries) to private when they join Instagram. We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger.",
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
            "description": "Age verification for teen protection measures",
            "example": "Account age settings determine applicable protections",
            "reason": "To apply appropriate privacy and contact restrictions"
          }
        ],
        "removalCriteria": [
          "Adult accounts attempting inappropriate contact with teens",
          "Violations of teen privacy protection measures",
          "Circumvention of automatic privacy settings for minors"
        ]
      },
      {
        "id": "meta-ncii-message-restrictions",
        "reference": "META-NCII-006",
        "summary": "Meta limits message requests from unconnected users to text-only, preventing images, videos, or voice notes until the recipient accepts the chat request.",
        "quote": "We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized media sharing in message requests",
            "example": "Screenshots showing images/videos sent before chat acceptance",
            "reason": "To enforce text-only message request policy"
          }
        ],
        "removalCriteria": [
          "Images, videos, or voice notes sent in unaccepted message requests",
          "Violations of text-only message request policy",
          "Attempts to circumvent message request restrictions"
        ]
      },
      {
        "id": "meta-ncii-stopncii-integration",
        "reference": "META-NCII-007",
        "summary": "Meta integrates with StopNCII.org for adults over 18 to prevent sharing of intimate images using hash technology to create digital fingerprints.",
        "quote": "If you have an intimate image or video that was taken when you were over 18 and are concerned that it will be shared or reshared online, you can take steps to help prevent further circulation through StopNCII.org. The tool uses hash-generating technology that assigns a unique hash value (a numeric code) to an image, creating a secure digital fingerprint.",
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
            "description": "Access to the intimate image to generate hash through StopNCII.org",
            "example": "User uploads image to StopNCII.org to create digital fingerprint",
            "reason": "Hash technology requires original image to create unique identifier"
          },
          {
            "description": "Confirmation that person in image was over 18 when taken",
            "example": "Age verification for StopNCII.org eligibility",
            "reason": "StopNCII.org is specifically for adult content, minors use Take It Down"
          }
        ],
        "removalCriteria": [
          "Image matches hash submitted through StopNCII.org",
          "Content identified as non-consensual intimate imagery",
          "Hash indicates previously reported intimate content"
        ]
      },
      {
        "id": "meta-ncii-takeitdown-integration",
        "reference": "META-NCII-008",
        "summary": "Meta integrates with Take It Down for individuals under 18 to prevent sharing of nude/sexual images using hash technology without the image leaving the device.",
        "quote": "If you have a nude or sexual photo or video of yourself that was taken when you were under 18 and are concerned that it will be shared or reshared online, you can take steps to help prevent further circulation through TakeItDown.NCMEC.org. Similar to StopNCII.org, Take It Down assigns a unique hash value (a numerical code) to your image or video privately and without the image or video ever leaving your device or anyone viewing it.",
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
            "description": "Access to the intimate image to generate hash through Take It Down",
            "example": "User generates hash locally through TakeItDown.NCMEC.org",
            "reason": "Hash technology creates unique identifier without exposing the image"
          },
          {
            "description": "Confirmation that person in image was under 18 when taken",
            "example": "Age verification for Take It Down eligibility",
            "reason": "Take It Down specifically handles content involving minors"
          }
        ],
        "removalCriteria": [
          "Image matches hash submitted through Take It Down",
          "Content involves person who was under 18 when image was taken",
          "Hash indicates previously reported intimate content involving minors"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/189722821075378",
      "summary": "Users can report intimate image abuse through platform-specific reporting mechanisms on Facebook, Instagram, and Messenger with 24/7 review in over 70 languages.",
      "steps": [
        "Use dedicated reporting option for private images on the relevant platform",
        "Submit report through Facebook, Instagram, or Messenger reporting tools",
        "Reports are reviewed by specialized teams 24/7 in multiple languages",
        "Teams take action on violating content and behavior",
        "Cases may be reported to law enforcement and NCMEC when appropriate"
      ]
    }
  },
  {
    "id": "instagram-new-1758232626576-1",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy covering Meta's approach to bullying and harassment across platforms, including specific protections and reporting mechanisms.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T21:57:06.576Z",
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
            "description": "Report showing pattern of unwanted contact",
            "example": "Screenshots of repeated messages or sexually harassing content",
            "reason": "To demonstrate the unwanted nature and pattern of contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-SEXUAL",
        "summary": "Meta protects minors, private adults, and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
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
            "description": "Evidence showing you are a minor, private adult, or limited scope public figure",
            "example": "Account verification or status confirmation",
            "reason": "To determine applicable protection tier"
          }
        ],
        "removalCriteria": [
          "Target is a minor (any status)",
          "Target is a private adult",
          "Target is a limited scope public figure",
          "Content makes claims about sexual activity",
          "Not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-sexualized-content",
        "reference": "META-BH-T2-SEXUALIZE",
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
            "description": "Evidence of your status as minor, private adult, or limited scope public figure",
            "example": "Account verification showing private status",
            "reason": "To confirm eligibility for protection under this tier"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult",
          "Target is a minor, private adult, or limited scope public figure",
          "Content is unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-T1-SEVERE-SEX",
        "summary": "Meta removes severe sexualized commentary targeting any individual as part of universal protections.",
        "quote": "Severe sexualized commentary.",
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
            "description": "Evidence of severe sexualized commentary",
            "example": "Screenshots of the offending content",
            "reason": "To demonstrate the severity and sexual nature of the commentary"
          }
        ],
        "removalCriteria": [
          "Commentary is severe in nature",
          "Commentary is sexualized",
          "Applies to all users regardless of status"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexual-terms",
        "reference": "META-BH-T1-DEROG-SEX",
        "summary": "Meta removes attacks using derogatory terms related to sexual activity (e.g., whore, slut) as universal protection.",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of attacks using derogatory sexual terms",
            "example": "Screenshots showing use of terms like 'whore' or 'slut'",
            "reason": "To demonstrate the derogatory sexual nature of the attack"
          }
        ],
        "removalCriteria": [
          "Content contains derogatory terms related to sexual activity",
          "Terms are used in an attacking manner",
          "Applies universally to all users"
        ]
      },
      {
        "id": "meta-bh-derogatory-photoshop",
        "reference": "META-BH-T1-DEROG-PHOTO",
        "summary": "Meta removes derogatory sexualized photoshop or drawings targeting individuals.",
        "quote": "Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of manipulated imagery that is derogatory and sexualized",
            "example": "Screenshots of photoshopped images with sexual content",
            "reason": "To demonstrate the derogatory and sexualized nature of manipulated content"
          }
        ],
        "removalCriteria": [
          "Content is photoshopped or drawn imagery",
          "Content is derogatory in nature",
          "Content is sexualized",
          "Applies universally to all users"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "META-BH-T3-MANIP-IMG",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
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
            "description": "Self-report from target confirming imagery is unwanted",
            "example": "Direct report from the person depicted",
            "reason": "Policy requires self-reporting for this protection"
          },
          {
            "description": "Evidence of private status or minor involuntary public figure status",
            "example": "Account verification showing private status",
            "reason": "To confirm eligibility under this protection tier"
          }
        ],
        "removalCriteria": [
          "Imagery has been manipulated",
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content is self-reported as unwanted",
          "Target confirms the manipulated imagery is unwanted"
        ]
      },
      {
        "id": "meta-bh-privacy-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta removes threats to release private contact information including phone numbers, addresses, email addresses, or medical records.",
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
            "example": "Screenshots of messages threatening to share personal contact details",
            "reason": "To demonstrate the threatening nature and privacy violation risk"
          }
        ],
        "removalCriteria": [
          "Content contains threats to release private information",
          "Information includes phone numbers, addresses, email, or medical records",
          "Applies universally to all users"
        ]
      },
      {
        "id": "meta-bh-self-report-required",
        "reference": "META-BH-SELF-REPORT",
        "summary": "Meta requires self-reporting or authorized representative confirmation for certain harassment content to be removed.",
        "quote": "Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target. We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Direct statement from the person depicted or their legal representative",
            "reason": "Policy requires target confirmation for certain content types"
          }
        ],
        "removalCriteria": [
          "Content requires target reporting",
          "Target is directly tagged or targeted",
          "Confirmation received from target or authorized representative",
          "Content is confirmed as unwanted"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEX",
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
            "description": "Confirmation from public figure or authorized representative that sexualized content is unwanted",
            "example": "Statement from the public figure or their legal representative",
            "reason": "Policy requires explicit confirmation from public figures due to their status"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received from target or authorized representative",
          "Content is confirmed as unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through notifications and Support Inbox, allowing users to request another review if they believe the decision was wrong.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758232626576-2",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Reporting Harassment or Bullying on Instagram",
    "summary": "Instagram Help Center page providing guidance on reporting harassment and bullying content and accounts.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T21:57:06.576Z",
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
            "example": "Use the report function on the specific photo or comment",
            "reason": "To initiate Instagram's review process for policy violations"
          }
        ],
        "removalCriteria": [
          "Photo is intended to bully or harass someone",
          "Account established with intent of bullying or harassing another person"
        ]
      },
      {
        "id": "ig-harassment-impersonation",
        "reference": "IG-REPORT-HARASSMENT-IMPERSONATION",
        "summary": "Instagram addresses cases where someone is pretending to be you or someone else, which often involves unauthorized use of images.",
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
            "description": "Report impersonation through Instagram's dedicated impersonation reporting process",
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
        "id": "ig-harassment-blocking",
        "reference": "IG-REPORT-HARASSMENT-BLOCKING",
        "summary": "Instagram recommends blocking users after reporting abuse as an additional protective measure.",
        "quote": "Once you've reported the abuse, consider blocking the person.",
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
            "description": "First report the abusive content, then use blocking feature",
            "example": "Report harassing photos/comments, then block the user account",
            "reason": "To prevent further harassment and protect the victim"
          }
        ],
        "removalCriteria": [
          "Content constitutes abuse or harassment",
          "User has been reported for policy violations"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758232626576-3",
    "reference": "IG-IP",
    "title": "Instagram Intellectual Property Policy",
    "summary": "Comprehensive guide to Instagram's intellectual property policies including copyright and trademark protections.",
    "url": "https://help.instagram.com/535503073130320",
    "accessTimestamp": "2025-09-18T21:57:06.576Z",
    "policies": [
      {
        "id": "ig-ip-copyright",
        "reference": "IG-IP-COPYRIGHT",
        "summary": "Instagram prohibits posting content that violates someone else's copyright, including unauthorized use of original works like images, music, and art.",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. Copyright is a legal right that seeks to protect original works of authorship (example: books, music, film, art). Generally, copyright protects original expression such as words or images.",
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
            "description": "Evidence of copyright ownership or authorization",
            "example": "Copyright registration, original creation proof, or licensing agreement",
            "reason": "To establish legal right to the copyrighted material"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content uses original works of authorship without permission",
          "Content includes copyrighted images or other protected expression"
        ]
      },
      {
        "id": "ig-ip-trademark",
        "reference": "IG-IP-TRADEMARK",
        "summary": "Instagram prohibits content that violates trademark rights, including unauthorized use of brand names, logos, or other distinctive marks that could cause consumer confusion.",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. A trademark is a word, slogan, symbol or design (example: brand name, logo) that distinguishes the products or services offered by one person, group or company from another. Generally, trademark law seeks to prevent confusion among consumers about who provides or is affiliated with a product or service.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of trademark ownership or registration",
            "example": "Trademark registration certificate or proof of trademark use in commerce",
            "reason": "To establish legal right to the trademark and prevent consumer confusion"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's trademark rights",
          "Content uses trademarked words, slogans, symbols or designs without authorization",
          "Content could cause confusion about product or service affiliation"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
