import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community standards covering bullying, harassment, NCII, privacy violations, and content removal policies across Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T19:41:40.832Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "META-CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate images, including threats to share such content (sextortion) and AI-generated intimate imagery.",
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
            "description": "Statement that the content is non-consensual",
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
        "id": "meta-cs-bullying-harassment",
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
            "description": "URL(s) of the harassing content",
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
          "Content includes shaming material, such as non-consensual intimate imagery",
          "Content is intended to intimidate, exclude or silence others"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
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
            "description": "URL(s) of the privacy-violating content",
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
        "id": "meta-cs-authentic-identity",
        "reference": "META-CS-IDENTITY",
        "summary": "Prohibits impersonating others with intent to deceive or mislead, including using someone's photos or identifying information without authorization.",
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
            "description": "Description of how the account or content is impersonating you",
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
        "reference": "META-CS-IP",
        "summary": "Prohibits third-party intellectual property infringement, including unauthorized use of copyrighted images and other protected content.",
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
            "reason": "To locate the specific content that allegedly infringes intellectual property rights"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify you have the right to request removal of the content"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To identify what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission from the rights holder",
          "Content infringes on trademark rights",
          "Use of the content is not covered by fair use or other legal exceptions"
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
    "accessTimestamp": "2025-09-18T19:41:40.832Z",
    "policies": [
      {
        "id": "ig-tou-intellectual-property",
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
            "description": "Proof of ownership or authorization to the content",
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
        "id": "ig-tou-impersonation",
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
          "unknown",
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
        "id": "ig-tou-content-removal",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove any content or information that violates Terms of Use, policies including Community Standards, or as required by law.",
        "quote": "We can remove any content or information you share on the Service if we believe that it violates these Terms of Use, our policies (including our Community Standards), or we are permitted or required to do so by law.",
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
            "description": "Evidence that content violates Instagram's Terms of Use or Community Standards",
            "reason": "To demonstrate policy violations that warrant content removal"
          },
          {
            "description": "Specific identification of the violating content",
            "reason": "To locate and assess the reported content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's Community Standards",
          "Content removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-tou-account-termination",
        "reference": "IG-TOU-6",
        "summary": "Instagram can terminate or disable accounts that create risk, violate terms or policies, repeatedly infringe intellectual property rights, or as required by law.",
        "quote": "We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your access to the Meta Products and Meta Company Products) immediately to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies (including our Community Standards), if you repeatedly infringe other people's intellectual property rights, or where we are permitted or required to do so by law.",
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
            "description": "Evidence of Terms of Use or Community Standards violations",
            "reason": "To demonstrate policy violations warranting account action"
          },
          {
            "description": "Documentation of repeated intellectual property infringement if applicable",
            "reason": "To show pattern of copyright or IP violations"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account violates Terms of Use or Community Standards",
          "Account repeatedly infringes other people's intellectual property rights",
          "Termination is permitted or required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult Instagram's Help Center if they believe their account was terminated in error or want to disable/delete their account.",
      "steps": [
        "Visit Instagram Help Center",
        "Report the issue or request account review",
        "Follow the guidance provided for account restoration or deletion"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Updated privacy policy effective June 16, 2025, explaining how Meta collects, uses, and shares user data across Facebook, Instagram, Messenger and other platforms.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-18T19:41:40.832Z",
    "policies": [
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY",
        "summary": "Meta removes content that violates terms or policies to promote safety, security and integrity, including harmful or unlawful behavior and content reported by users.",
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
            "description": "Report the violating content through Meta's reporting systems",
            "example": "Use the report button on the specific post or content",
            "reason": "Required for Meta to review and potentially remove content that violates policies"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content threatens safety, security or integrity of users or platform"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and may access, preserve or share user information to comply with applicable law and prevent harm.",
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
            "example": "Court-issued subpoena requesting specific user information",
            "reason": "Required by law for Meta to disclose user information to third parties"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-VERIFICATION",
        "summary": "Meta verifies accounts and activity as part of promoting safety and security, which may involve reviewing user-provided identification materials.",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity... Your photo or video selfie if you provide it when you contact us for account support",
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
            "description": "Photo or video selfie for account support verification",
            "example": "Selfie holding ID or following specific instructions",
            "reason": "To verify account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Account fails verification process",
          "Suspicious account activity detected",
          "Account used for impersonation or fraudulent purposes"
        ]
      },
      {
        "id": "meta-pp-content-review",
        "reference": "META-PP-REVIEW",
        "summary": "Meta conducts both automated and manual human review of content and user information to detect violations, investigate suspicious activity, and remove harmful content.",
        "quote": "We also use manual review to access and review your information... apply automated processing techniques and, in some instances, conduct manual (human) review to... Investigate suspicious activity... review and, in some cases, remove content reported to us",
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
            "description": "Content reported through Meta's reporting mechanisms",
            "example": "User reports inappropriate content using platform reporting tools",
            "reason": "Enables Meta's review systems to evaluate content for policy violations"
          }
        ],
        "removalCriteria": [
          "Content identified as violating policies through automated systems",
          "Content flagged through manual human review process",
          "Suspicious activity detected requiring content removal"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/507739850846588",
      "summary": "Users can contact Meta with questions about the privacy policy and content decisions, and may also contact Data Protection Officers or local Data Protection Authorities depending on jurisdiction.",
      "steps": [
        "Contact Meta online or by mail with questions about policy decisions",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, contact local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "instagram-new-1758224500832-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Dedicated policy page covering Meta's approach to non-consensual intimate images (NCII), sextortion prevention, and related safety measures.",
    "url": "https://www.meta.com/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-18T19:41:40.832Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and sextortion across all platforms.",
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
            "description": "Report through dedicated reporting option for private images",
            "example": "Use specific reporting flow for intimate image abuse",
            "reason": "To enable specialized review by dedicated teams"
          }
        ],
        "removalCriteria": [
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images",
          "Content constitutes sextortion behavior"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "META-NCII-002",
        "summary": "Meta prohibits sextortion, defined as threatening to reveal intimate images to force someone to do something against their will.",
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
            "description": "Report threats or coercive behavior involving intimate images",
            "example": "Screenshots of threatening messages demanding money or additional images",
            "reason": "To identify and remove sextortion attempts"
          }
        ],
        "removalCriteria": [
          "Content involves threats to share intimate images",
          "Content attempts to coerce victims through image threats",
          "Content demands money, additional images, or sexual contact using image threats"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "META-NCII-003",
        "summary": "Meta uses automated systems and specialized teams to detect, investigate, and remove accounts engaged in intimate image abuse at scale.",
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
            "description": "Content may be detected automatically through pattern recognition",
            "example": "Automated detection of suspicious account behavior",
            "reason": "To proactively identify and remove violating content"
          }
        ],
        "removalCriteria": [
          "Accounts exhibit patterns associated with intimate image abuse",
          "Content matches automated detection systems for NCII",
          "Behavior indicates criminal activity related to intimate images"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "META-NCII-004",
        "summary": "Meta restricts adults from messaging teens and limits message requests to text-only until accepted to prevent intimate image abuse.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
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
            "description": "Violations of teen protection messaging rules",
            "example": "Adults attempting to send images to unconnected teens",
            "reason": "To prevent unwanted contact and potential exploitation"
          }
        ],
        "removalCriteria": [
          "Adults attempting to message unconnected teens with media content",
          "Circumventing teen protection messaging restrictions",
          "Sending images, videos, or voice notes in initial message requests"
        ]
      },
      {
        "id": "meta-stopncii-integration",
        "reference": "META-NCII-005",
        "summary": "Meta integrates with StopNCII.org to prevent sharing of intimate images of adults using hash-based detection technology.",
        "quote": "The tool uses hash-generating technology that assigns a unique hash value (a numeric code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
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
            "description": "Hash values generated through StopNCII.org for images of adults over 18",
            "example": "Secure digital fingerprint created without sharing actual image",
            "reason": "To proactively prevent sharing without exposing the content"
          }
        ],
        "removalCriteria": [
          "Content matches hash values from StopNCII.org database",
          "Images involve adults over 18 who have submitted prevention requests",
          "Content attempts to share previously flagged intimate imagery"
        ]
      },
      {
        "id": "meta-takeitdown-integration",
        "reference": "META-NCII-006",
        "summary": "Meta integrates with Take It Down to prevent sharing of intimate images involving minors using hash-based detection technology.",
        "quote": "Similar to StopNCII.org, Take It Down assigns a unique hash value (a numerical code) to your image or video privately and without the image or video ever leaving your device or anyone viewing it. Once you submit the hash value to NCMEC, companies like ours can use those hashes to prevent the content from being posted on our apps in the future.",
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
            "description": "Hash values generated through Take It Down for images involving minors",
            "example": "NCMEC-processed hash for content involving individuals under 18",
            "reason": "To prevent child exploitation material from being shared"
          }
        ],
        "removalCriteria": [
          "Content matches hash values from Take It Down database",
          "Images involve individuals under 18 years old",
          "Content attempts to share previously flagged minor-involved imagery"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "META-NCII-007",
        "summary": "Meta reviews reports of intimate image abuse 24/7 in over 70 languages and takes action on violating content and behavior.",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behaviour.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Reports submitted through platform reporting mechanisms",
            "example": "Use dedicated reporting flows for intimate image abuse",
            "reason": "To enable multilingual review by specialized teams"
          }
        ],
        "removalCriteria": [
          "Content violates intimate image sharing policies",
          "Behavior constitutes harassment or abuse involving images",
          "Content reported through official reporting channels"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758224500832-1",
    "reference": "IG-HARASSMENT",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment definitions, reporting mechanisms, and enforcement actions on Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T19:41:40.832Z",
    "policies": [
      {
        "id": "ig-harassment-unwanted-contact",
        "reference": "IG-HARASSMENT",
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
          "Contact is directed at large numbers without prior solicitation"
        ]
      },
      {
        "id": "ig-harassment-severe-sexualized-commentary",
        "reference": "IG-HARASSMENT",
        "summary": "Meta prohibits severe sexualized commentary and derogatory sexualized photoshop or drawings targeting individuals.",
        "quote": "Everyone is protected from: Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of severe sexualized commentary or manipulated imagery",
            "example": "Screenshots of the offending content",
            "reason": "To verify the content violates the severe sexualized commentary policy"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary about an individual",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "ig-harassment-sexual-activity-attacks",
        "reference": "IG-HARASSMENT",
        "summary": "Meta removes attacks through derogatory terms related to sexual activity (e.g., whore, slut) for all users.",
        "quote": "Everyone is protected from: Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of attacks using derogatory sexual terms",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at the individual",
            "reason": "To demonstrate the content constitutes an attack using prohibited sexual terminology"
          }
        ],
        "removalCriteria": [
          "Content attacks individual using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "ig-harassment-private-info-threats",
        "reference": "IG-HARASSMENT",
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
            "example": "Screenshots of threats to share phone number, address, email, or medical records",
            "reason": "To verify the threat involves protected private information"
          }
        ],
        "removalCriteria": [
          "Content threatens to release private phone number",
          "Content threatens to release residential address",
          "Content threatens to release email address",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "ig-harassment-sexual-activity-claims",
        "reference": "IG-HARASSMENT",
        "summary": "Meta provides additional protection for minors, private adults, and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
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
            "description": "Evidence of claims about sexual activity and confirmation of protected status",
            "example": "Screenshots of sexual activity claims and verification that target is minor, private adult, or limited scope public figure",
            "reason": "To verify both the violating content and the protected status of the individual"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of protected individuals",
          "Target is a minor, private adult, or limited scope public figure",
          "Content is not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "ig-harassment-adult-sexualization",
        "reference": "IG-HARASSMENT",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Content sexualizing another adult",
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
            "description": "Evidence of sexualizing content and confirmation of protected status",
            "example": "Screenshots of sexualizing content targeting a minor, private adult, or limited scope public figure",
            "reason": "To verify the content sexualizes the individual and they fall under protected categories"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult individual",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "ig-harassment-unwanted-manipulated-imagery",
        "reference": "IG-HARASSMENT",
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
            "description": "Self-report from target and evidence of manipulated imagery",
            "example": "Report from the individual depicted and screenshots of the manipulated content",
            "reason": "Policy requires self-reporting and verification of image manipulation"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery of the individual",
          "Content is unwanted by the depicted person",
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content is self-reported by the target"
        ]
      },
      {
        "id": "ig-harassment-unwanted-pages-groups-events",
        "reference": "IG-HARASSMENT",
        "summary": "Meta removes content that targets private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative.",
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
            "description": "Report from target or authorized representative and evidence of targeting",
            "example": "Report from the individual or their representative with screenshots of unwanted Pages/Groups/Events",
            "reason": "Policy requires confirmation from target that the content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is unwanted by the target",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "ig-harassment-public-figure-sexualization",
        "reference": "IG-HARASSMENT",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
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
            "description": "Confirmation from target or authorized representative that sexualizing content is unwanted",
            "example": "Statement from public figure or their representative confirming the content is unwanted",
            "reason": "Policy requires explicit confirmation that the sexualizing content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "ig-harassment-mass-harassment-at-risk",
        "reference": "IG-HARASSMENT",
        "summary": "Meta removes directed mass harassment targeting individuals at heightened risk of offline harm, including human rights defenders, minors, and victims of violent events.",
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
            "description": "Evidence of mass harassment and confirmation of at-risk status",
            "example": "Documentation showing coordinated harassment and evidence that target falls into protected at-risk category",
            "reason": "To verify both the mass harassment pattern and the heightened risk status of the individual"
          }
        ],
        "removalCriteria": [
          "Content constitutes directed mass harassment",
          "Target is an individual at heightened risk of offline harm",
          "Target falls into categories like human rights defenders, minors, victims of violent events, opposition figures, election officials, government dissidents, ethnic/religious minorities in conflict zones, or members of at-risk groups"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through Meta's Support Inbox system and request additional reviews if they believe the decision was incorrect.",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision via notifications and Support Inbox",
        "If disagreeing with decision, request another review through appeal option",
        "Provide additional information or context during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758224500832-2",
    "reference": "IG-COPYRIGHT",
    "title": "Instagram Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA procedures, reporting mechanisms, and intellectual property protection on Instagram.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-18T19:41:40.832Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "IG-COPYRIGHT-REPORT",
        "summary": "Instagram removes content that infringes copyright when reported through their copyright infringement form.",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Copyright infringement report form completion",
            "example": "Using Instagram's dedicated copyright reporting form",
            "reason": "Required method for submitting copyright infringement claims"
          },
          {
            "description": "Information required for copyright report",
            "example": "Details specified in Instagram's copyright reporting requirements",
            "reason": "To substantiate copyright ownership and infringement claim"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from copyright owner",
          "Valid copyright infringement report submitted through proper channels"
        ]
      },
      {
        "id": "ig-copyright-dmca",
        "reference": "IG-COPYRIGHT-DMCA",
        "summary": "Instagram processes copyright takedown requests under the Digital Millennium Copyright Act (DMCA) and provides counter-notification procedures.",
        "quote": "How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "DMCA-compliant copyright infringement notice",
            "example": "Notice sent to Instagram's designated DMCA agent",
            "reason": "Required for formal DMCA takedown process"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice received",
          "Content identified as infringing copyrighted material"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "IG-COPYRIGHT-REPEAT",
        "summary": "Instagram takes action against accounts that repeatedly post content violating intellectual property rights.",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Documentation of repeated intellectual property violations",
            "example": "Multiple valid copyright infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "Multiple instances of intellectual property infringement",
          "Pattern of repeated violations of others' intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram provides DMCA counter-notification procedures and allows users to retract intellectual property reports they have submitted.",
      "steps": [
        "Submit DMCA counter-notification if content was wrongly removed",
        "Contact Instagram's DMCA designated agent for counter-notifications",
        "Retract intellectual property report if submitted in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758224500832-3",
    "reference": "IG-APPEAL",
    "title": "Instagram Content Appeal Process",
    "summary": "Policy covering appeal procedures for content removal decisions and Oversight Board processes.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-18T19:41:40.832Z",
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
          "User must still disagree with Instagram's decision after internal review"
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
            "description": "Must have reported the content through Instagram's reporting system",
            "example": "Initial report of harmful content",
            "reason": "Required to establish standing for appeal"
          },
          {
            "description": "Must complete internal review process for reported content",
            "example": "Request review of Instagram's decision not to remove",
            "reason": "Prerequisite before Oversight Board appeal"
          }
        ],
        "removalCriteria": [
          "Content must have been reported and reviewed twice by Instagram",
          "Instagram must have decided not to remove the content",
          "User must still disagree with Instagram's decision after internal review"
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
            "description": "Must submit appeal within 15 days of Instagram's decision",
            "example": "Appeal submitted within deadline",
            "reason": "Statutory deadline for appeal eligibility"
          },
          {
            "description": "Must have completed Instagram's internal review process twice",
            "example": "Two completed reviews with continued disagreement",
            "reason": "Required exhaustion of internal remedies"
          }
        ],
        "removalCriteria": [
          "Appeal must be submitted within 15-day deadline",
          "Content must be eligible for Oversight Board review",
          "Oversight Board must select the case for review"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Two-tier appeal process: first through Instagram's internal review system, then potentially to the Oversight Board within 15 days",
      "steps": [
        "Complete Instagram's internal content review process",
        "If still unsatisfied after internal review, submit appeal to Oversight Board within 15 days",
        "Oversight Board decides whether to review the appeal",
        "Track appeal status using reference number on Oversight Board website"
      ]
    }
  }
],
};
