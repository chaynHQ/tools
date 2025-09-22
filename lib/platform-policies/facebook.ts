import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads. Merged into single location as of November 2024.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-22T12:01:38.347Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits sharing non-consensual intimate images and sextortion across Meta platforms.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters between adults, and non-consensual intimate images.",
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
            "description": "URL(s) of the violating content",
            "reason": "To locate and review the specific content for removal"
          },
          {
            "description": "Statement that the content was shared without consent",
            "reason": "To establish the non-consensual nature of the sharing"
          },
          {
            "description": "Information to identify the depicted individual",
            "reason": "To verify the identity of the person in the content"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity",
          "Content was shared without the consent of the depicted individual",
          "Content facilitates sexual exploitation or sextortion"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images to degrade or shame individuals.",
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
            "description": "URL(s) of the harassing content",
            "reason": "To identify and review the harassing material"
          },
          {
            "description": "Description of how the content constitutes harassment or bullying",
            "reason": "To understand the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the victim and process the report appropriately"
          }
        ],
        "removalCriteria": [
          "Content targets an individual for degradation or shaming",
          "Content is intended to harass, intimidate, or bully",
          "Content violates the dignity of the targeted person"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private content without consent, protecting personal privacy and information.",
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
            "description": "URL(s) of the privacy-violating content",
            "reason": "To locate the content that violates privacy"
          },
          {
            "description": "Evidence that the content was private and shared without permission",
            "reason": "To establish the private nature and lack of consent"
          },
          {
            "description": "Description of how the sharing violates privacy expectations",
            "reason": "To assess the nature and severity of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content was originally private or confidential",
          "Content was shared without the consent of the affected individual",
          "Sharing violates reasonable expectations of privacy"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonation and misrepresentation of identity, including using others' images without authorization.",
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
            "description": "URL of the impersonating profile, page, or content",
            "reason": "To identify the impersonating account or content"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "example": "Government-issued ID or other official documentation",
            "reason": "To verify the identity of the person being impersonated"
          },
          {
            "description": "Description of how the account or content misrepresents identity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses someone's name, photos, or identifying information without authorization",
          "The impersonation is intended to deceive or mislead others",
          "Content misrepresents the identity or actions of another person"
        ]
      },
      {
        "id": "meta-cs-ai-generated-content",
        "reference": "CS-AI",
        "summary": "Community Standards apply to all content including AI-generated and deepfake content that violates policies.",
        "quote": "Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content.",
        "contentTypes": [
          "intimate",
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
            "description": "URL(s) of the AI-generated content",
            "reason": "To locate and review the synthetic content"
          },
          {
            "description": "Evidence that the content is AI-generated or manipulated",
            "reason": "To establish the synthetic nature of the content"
          },
          {
            "description": "Information about how the content violates Community Standards",
            "reason": "To determine which specific policy violations apply"
          }
        ],
        "removalCriteria": [
          "AI-generated content violates existing Community Standards",
          "Synthetic content is used to deceive, harass, or harm others",
          "Content creates realistic but false depictions of individuals"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "META-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products. Updated January 1, 2025 with stronger language around platform misuse, data scraping prevention, and clarified user agreements.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-22T12:01:38.347Z",
    "policies": [
      {
        "id": "meta-tos-ip-infringement",
        "reference": "META-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes intellectual property rights, including unauthorized use of images owned by others.",
        "quote": "That infringes or breaches someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "description": "Proof of intellectual property ownership",
            "reason": "To establish rights to the content"
          },
          {
            "description": "URL(s) of the infringing content on Meta platforms",
            "reason": "To identify the specific content that infringes rights"
          }
        ],
        "removalCriteria": [
          "Content infringes or breaches intellectual property rights including copyright",
          "User does not own or have necessary rights to share the content"
        ]
      },
      {
        "id": "meta-tos-unauthorized-content",
        "reference": "META-TOS-3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share.",
        "quote": "That you do not own or have the necessary rights to share.",
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
            "description": "Evidence of ownership or rights to the content",
            "reason": "To demonstrate the content was shared without permission"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content is shared without ownership or necessary rights",
          "User cannot demonstrate permission to share the content"
        ]
      },
      {
        "id": "meta-tos-repeated-ip-violations",
        "reference": "META-TOS-4.2",
        "summary": "Meta may disable or delete accounts for repeated intellectual property rights infringement.",
        "quote": "We may also disable or delete your account if you repeatedly infringe other people's intellectual property rights or where we are required to do so for legal reasons.",
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
            "description": "Documentation of repeated infringement violations",
            "reason": "To establish pattern of intellectual property violations"
          },
          {
            "description": "Evidence of intellectual property ownership for each violation",
            "reason": "To support each infringement claim"
          }
        ],
        "removalCriteria": [
          "User has repeatedly infringed intellectual property rights",
          "Pattern of unauthorized sharing of others' content"
        ]
      },
      {
        "id": "meta-tos-content-reporting",
        "reference": "META-TOS-3.2",
        "summary": "Meta encourages users to report content that breaches intellectual property rights or terms and policies.",
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
            "description": "Detailed description of rights violation",
            "reason": "To help Meta understand the nature of the breach"
          },
          {
            "description": "Specific content URLs or identification",
            "reason": "To locate and review the reported content"
          }
        ],
        "removalCriteria": [
          "Content breaches intellectual property rights",
          "Content violates Meta's terms and policies"
        ]
      },
      {
        "id": "meta-tos-content-removal-action",
        "reference": "META-TOS-3.2",
        "summary": "Meta can remove, block or restrict content that breaches their provisions and may suspend accounts for violations.",
        "quote": "We can remove, block or restrict content that is in breach of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2.",
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
            "description": "Evidence that content breaches Meta's terms",
            "reason": "To justify removal action under platform policies"
          }
        ],
        "removalCriteria": [
          "Content is in breach of Meta's Terms of Service",
          "Content violates Community Standards or other applicable policies"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions and account actions, with some exceptions for serious violations or legal restrictions.",
      "steps": [
        "Meta will notify users of content removal and explain review options (unless serious/repeated violations)",
        "Users can request another review of removal decisions",
        "For account suspension/termination, Meta will explain available review options",
        "Advanced notification and remedy opportunities provided except for serious breaches requiring immediate action",
        "Oversight Board may review certain decisions subject to its terms and bylaws"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, Messenger and other Meta products. Does not cover WhatsApp, Workplace, or Quest devices without Facebook accounts.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-22T12:01:38.347Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes harmful or unlawful content including non-consensual intimate imagery and harassment through automated and manual review processes.",
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
            "description": "Report the harmful content through Meta's reporting systems",
            "example": "Use in-product reporting tools or help center forms",
            "reason": "Required for Meta to identify and review potentially violating content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported through proper channels and verified as violating"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to valid legal requests from law enforcement and civil litigants for content removal and information disclosure.",
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
            "description": "Valid legal request such as court order, search warrant, or subpoena",
            "example": "Court-issued restraining order or law enforcement subpoena",
            "reason": "Required to comply with legal obligations and applicable law"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized party",
          "Request complies with applicable law",
          "Content falls within scope of legal request"
        ]
      },
      {
        "id": "meta-pp-safety-security",
        "reference": "META-PP-SAFETY-MEASURES",
        "summary": "Meta promotes safety and security by investigating suspicious activity, detecting threats, and maintaining platform integrity through content review and removal.",
        "quote": "To promote the safety, security and integrity of Meta Products, users, employees, property and the public. We may access or preserve your information for an extended amount of time.",
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
            "description": "Evidence of safety threat or policy violation",
            "example": "Screenshots, URLs, or other documentation of harmful content",
            "reason": "Needed to investigate and verify safety concerns"
          }
        ],
        "removalCriteria": [
          "Content poses safety threat to users or public",
          "Content violates platform integrity measures",
          "Suspicious activity detected through automated or manual review"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta uses facial recognition technology with user consent to verify identity and prevent impersonation and identity misuse.",
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
            "description": "Photo or video selfie for identity verification",
            "example": "Clear photo of face matching account profile",
            "reason": "Required to verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Account fails identity verification process",
          "Evidence of impersonation or identity misuse detected",
          "Suspicious activity patterns identified"
        ]
      },
      {
        "id": "meta-pp-content-sharing",
        "reference": "META-PP-SHARING-CONTROLS",
        "summary": "Users can control how their information is shared through privacy settings and audience controls on Meta products.",
        "quote": "Learn more about audiences Privacy Center. You can update these settings to shape your experience.",
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
            "description": "Access to account settings and privacy controls",
            "example": "Ability to modify sharing preferences and audience settings",
            "reason": "Allows users to control distribution of their content"
          }
        ],
        "removalCriteria": [
          "Content shared beyond user's intended audience settings",
          "Privacy settings violated by unauthorized sharing",
          "User requests content removal through platform controls"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1650115808681298",
      "summary": "Users can contact Meta's Data Protection Officer and lodge complaints with supervisory authorities regarding privacy and content decisions.",
      "steps": [
        "Contact Meta Platforms Ireland Limited online or by mail",
        "Contact the Data Protection Officer for Meta Platforms Ireland Limited",
        "Lodge complaint with Irish Data Protection Commission or local supervisory authority",
        "Some content decisions may be reviewed by the Oversight Board"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-22T12:01:38.347Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758542498347-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Comprehensive policy and resources for non-consensual intimate imagery (NCII), sextortion prevention, and victim support including StopNCII.org integration.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T12:01:38.347Z",
    "policies": [
      {
        "id": "meta-ncii-sharing-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and considers sharing or threatening to share intimate images without consent as against Meta policies.",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). Sharing – or threatening to share – intimate images without consent is against Meta policies.",
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
            "description": "Report content that breaks Meta's rules using dedicated reporting option for private images",
            "example": "Use specific reporting flow for intimate image sharing",
            "reason": "To identify and remove violating content"
          }
        ],
        "removalCriteria": [
          "Content or behaviour that exploits people",
          "Sharing intimate images without consent",
          "Threatening to share intimate images without consent"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "META-NCII-002",
        "summary": "Meta prohibits sextortion, defined as the threat to reveal intimate images to force someone to do something they don't want to do, and takes action when becoming aware of such behavior.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do. Nobody should ever have to experience sextortion. We work to prevent this type of behaviour, and when we become aware, we work to take action.",
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
            "description": "Report threats to share intimate images or actual sharing",
            "example": "Report when someone threatens to share images unless you send money or additional images",
            "reason": "To identify sextortion attempts and criminal behavior"
          }
        ],
        "removalCriteria": [
          "Threats to reveal intimate images to coerce behavior",
          "Attempts to force actions through intimate image threats",
          "Criminal sextortion behavior patterns"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "META-NCII-003",
        "summary": "Meta uses automated systems to detect and remove accounts engaged in intimate image abuse at scale, with specialized teams investigating and removing violating accounts.",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "System automatically detects patterns of violating behavior",
            "example": "Automated detection of accounts sending multiple intimate image threats",
            "reason": "To proactively identify and remove violating accounts before harm occurs"
          }
        ],
        "removalCriteria": [
          "Patterns associated with intimate image abuse behavior",
          "Accounts identified as engaging in criminal sextortion",
          "Behavior matching known exploitation patterns"
        ]
      },
      {
        "id": "meta-message-restrictions",
        "reference": "META-NCII-004",
        "summary": "Meta limits message requests to text-only until recipients accept chat requests, preventing images, videos or voice notes from being sent in initial contact attempts.",
        "quote": "We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
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
            "description": "Automatic enforcement - no user evidence required",
            "example": "System prevents image sharing in message requests",
            "reason": "To prevent unwanted intimate content sharing before connection is established"
          }
        ],
        "removalCriteria": [
          "Images, videos or voice notes sent in message requests to unconnected users",
          "Attempts to bypass message request restrictions"
        ]
      },
      {
        "id": "meta-adult-teen-restrictions",
        "reference": "META-NCII-005",
        "summary": "Meta restricts adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger, with stricter default message settings for teens under 16.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We also introduced stricter default message settings for teens under 16 (and under 18 in certain countries). This means that teens can't be messaged or added to group chats by anyone they don't follow or aren't connected to on Instagram and Messenger.",
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
            "description": "Automatic age-based enforcement",
            "example": "System prevents adults from messaging unconnected teens",
            "reason": "To protect minors from potential predatory contact"
          }
        ],
        "removalCriteria": [
          "Adults over 18 attempting to message unconnected teens",
          "Attempts to add teens to group chats without connection",
          "Circumvention of teen protection messaging restrictions"
        ]
      },
      {
        "id": "meta-stopncii-integration",
        "reference": "META-NCII-006",
        "summary": "Meta participates in StopNCII.org for adults over 18, using hash technology to prevent sharing of intimate images across participating platforms without requiring the actual images to be shared.",
        "quote": "Instagram and Facebook are founding members of Take It Down – a platform by NCMEC to proactively prevent young people's intimate images, including AI-generated content, from spreading online. We provided financial support to NCMEC to develop Take It Down, building on the success of StopNCII.org, a platform we developed that helps adults stop the spread of their intimate images online.",
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
            "description": "Create hash of intimate image through StopNCII.org platform",
            "example": "Use StopNCII.org to generate secure digital fingerprint of image",
            "reason": "To prevent sharing without exposing the actual image content"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through StopNCII.org",
          "Attempts to share content with matching digital fingerprints"
        ]
      },
      {
        "id": "meta-takeitdown-integration",
        "reference": "META-NCII-007",
        "summary": "Meta participates in Take It Down for users under 18, preventing sharing of intimate images of minors including AI-generated content through hash technology managed by NCMEC.",
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
            "description": "Create hash through Take It Down platform for content involving minors",
            "example": "Use TakeItDown.NCMEC.org to generate hash of intimate content taken when under 18",
            "reason": "To prevent sharing of minor intimate content without exposing the material"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through Take It Down",
          "Content involving individuals under 18 in intimate situations",
          "AI-generated intimate content of minors"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "META-NCII-008",
        "summary": "Meta's teams review reports 24/7 in more than 70 languages and take action on violating content and behavior related to intimate image sharing and threats.",
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
            "description": "Continuous review available 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Submit report through platform reporting mechanisms",
            "example": "Use Facebook, Instagram, or Messenger reporting tools",
            "reason": "To enable review by specialized teams in appropriate language"
          }
        ],
        "removalCriteria": [
          "Content that violates intimate image policies",
          "Behavior that constitutes threats or harassment",
          "Any content reported that breaks Meta's rules"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758542498347-1",
    "reference": "META-BH",
    "title": "Meta Community Standards - Bullying and Harassment",
    "summary": "Specific policy section covering bullying, harassment, threats, and malicious contact with heightened protections for minors.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T12:01:38.347Z",
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
            "example": "Screenshots of derogatory sexual terms or manipulated photos",
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
            "reason": "To verify the threatening nature regarding private information disclosure"
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
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of false sexual activity claims",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify claims are being made about sexual activity"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing individual is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for this protection tier"
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
            "example": "Screenshots showing sexual commentary or imagery about the individual",
            "reason": "To verify the sexualizing nature of the content"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing individual is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for this protection"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult individual",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to specific physical characteristics for protected individuals.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
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
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots showing images with circles, highlights, or other modifications to physical features",
            "reason": "To verify the manipulative nature of the content"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing individual is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for this protection"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics",
          "Content negatively draws attention to specific body features",
          "Target is a minor, private adult, or limited scope public figure"
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
            "example": "Report submitted by the individual depicted or their legal representative",
            "reason": "Policy requires self-reporting for this protection level"
          },
          {
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots showing altered or manipulated images",
            "reason": "To verify the manipulated nature of the content"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Content is unwanted by the target",
          "Target is private minor, private adult, or minor involuntary public figure",
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
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report from target or authorized representative",
            "example": "Takedown request from the individual being targeted or their legal representative",
            "reason": "Policy requires reporting by target or authorized representative"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots showing unwanted content on dedicated pages or groups",
            "reason": "To verify the targeting nature through these platforms"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals",
          "Content is posted through Pages, Groups, or Events",
          "Content is unwanted by the target",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figures",
        "reference": "META-BH-ADDITIONAL-SEXUAL-PUBLIC",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative",
            "example": "Written confirmation that the sexualizing content is unwanted",
            "reason": "Policy requires confirmation from target that content is unwanted"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots showing sexual commentary or imagery about the public figure",
            "reason": "To verify the sexualizing nature of the content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from recipient or authorized representative",
            "example": "Written confirmation that the contact is unwanted and sexually harassing",
            "reason": "Policy requires confirmation that contact is unwanted"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots of messages or content showing sexual harassment",
            "reason": "To verify the sexually harassing nature of the contact"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Contact is unwanted by recipient",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides multiple appeal options including requesting another review through notifications, Support Inbox, and post-takedown appeal processes with final responses provided.",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758542498347-2",
    "reference": "META-ENFORCEMENT",
    "title": "Meta Transparency Center - Taking Down Violating Content",
    "summary": "Detailed explanation of Meta's content enforcement process, strike system, and violation notification procedures.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-22T12:01:38.347Z",
    "policies": [
      {
        "id": "meta-enforcement-general-removal",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanation of the violation.",
        "quote": "If your content goes against the Community Standards, Meta will remove it. We'll also notify you so you can understand why we removed the content and how to avoid posting violating content in the future.",
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
            "description": "Content must violate Community Standards",
            "example": "Content that goes against established policies",
            "reason": "Required basis for content removal"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "Content is identified through detection systems or user reports"
        ]
      },
      {
        "id": "meta-enforcement-strike-system",
        "reference": "META-ENFORCEMENT-STRIKES",
        "summary": "Meta uses a strike system to count violations and may restrict or disable accounts based on violation history and strike count.",
        "quote": "We use a strike system to count violations and hold you accountable for the content you post. Depending on which policy your content goes against, your previous history of violations and the number of strikes you have, your account may also be restricted or disabled.",
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
            "description": "Pattern of policy violations",
            "example": "Multiple Community Standards violations",
            "reason": "To determine appropriate enforcement action"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "User has previous history of violations",
          "Strike threshold is reached for account restrictions"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, and Meta will take another look.",
      "steps": [
        "Receive notification of content removal in Feed or Support Inbox/Support Requests",
        "Review the policy explanation and reason for removal",
        "Submit appeal request if you believe a mistake was made",
        "Provide additional information during the review process",
        "Receive final decision on the appeal"
      ]
    }
  }
],
};
