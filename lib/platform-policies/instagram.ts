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
    "accessTimestamp": "2025-09-22T11:58:34.674Z",
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
        "quote": "We remove content that infringes on third-party intellectual property rights, including copyrighted content shared without authorization.",
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
            "reason": "To locate the specific content that infringes intellectual property"
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
    "accessTimestamp": "2025-09-22T11:58:34.674Z",
    "policies": [
      {
        "id": "ig-intellectual-property-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission and violating intellectual property rights including copyright infringement.",
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
            "description": "Evidence of ownership or authorization to act on behalf of rights holder",
            "reason": "To establish standing to make the intellectual property claim"
          },
          {
            "description": "Identification of the specific content that violates intellectual property rights",
            "reason": "To enable Instagram to locate and review the allegedly infringing content"
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
          "Removal required by applicable law"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, requiring users to provide accurate information and obtain express permission before creating accounts for others.",
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
            "description": "Evidence that the account is impersonating you or someone you represent",
            "reason": "To establish that unauthorized impersonation is occurring"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To verify the legitimate identity being misrepresented"
          },
          {
            "description": "Identification of the specific impersonating account or content",
            "reason": "To enable Instagram to locate and review the impersonating content"
          }
        ],
        "removalCriteria": [
          "Account impersonates another person without permission",
          "Account provides inaccurate information about identity",
          "Account created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-unauthorized-access-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits unauthorized account access, data collection, and account trading, including attempts to buy, sell, or transfer accounts or collect user credentials.",
        "quote": "You can't attempt to create accounts or access or collect information in unauthorized ways. This includes creating accounts or accessing or collecting information in an automated way without our express permission, regardless of whether such automated access or collection is undertaken while logged-in to an Instagram account. You can't sell, license, or purchase any account or data obtained from us or our Service, regardless of whether such data was obtained while logged-in to an Instagram account. This includes attempts to buy, sell, or transfer any aspect of your account (including your username); solicit, collect, or use login credentials or badges of other users; or request or collect Instagram usernames, passwords, or misappropriate access tokens.",
        "contentTypes": [
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
            "description": "Evidence of unauthorized access to your account",
            "reason": "To demonstrate that account security has been compromised"
          },
          {
            "description": "Documentation of suspicious account activity",
            "reason": "To show unauthorized use of the compromised account"
          },
          {
            "description": "Evidence of attempts to collect login credentials or personal information",
            "reason": "To identify violations of unauthorized data collection policies"
          }
        ],
        "removalCriteria": [
          "Unauthorized access to user accounts",
          "Automated collection of user information without permission",
          "Attempts to buy, sell, or transfer accounts or user data",
          "Collection or misappropriation of user login credentials"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with options to request review, unless doing so would expose Instagram or others to legal liability or harm the community.",
      "steps": [
        "Instagram will notify you of content removal or account action",
        "Instagram will explain available options for requesting another review",
        "Submit appeal through Instagram Help Center if you believe action was taken in error",
        "Instagram will review the appeal unless restricted by legal or safety concerns"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-22T11:58:34.674Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-SECURITY",
        "summary": "Meta removes harmful or unlawful content and takes action against violations of terms or policies to promote safety, security and integrity.",
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
            "example": "Use in-product reporting tools or contact forms",
            "reason": "Required for Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported through proper channels"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and other authorities, and shares information to comply with applicable law and prevent harm.",
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
            "reason": "Required to compel Meta to preserve or share user information"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Request complies with applicable law",
          "Request is from civil litigants, law enforcement or government authorities"
        ]
      },
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY-MEASURES",
        "summary": "Meta processes information to verify accounts, investigate suspicious activity, detect threats, and maintain platform integrity through automated and manual review.",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts, identity and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior",
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
            "description": "Information demonstrating policy violations or suspicious activity",
            "example": "Evidence of account impersonation or harmful behavior",
            "reason": "Enables Meta to investigate and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Account or content verification fails",
          "Suspicious activity is detected",
          "Violations of terms or policies are identified",
          "Harmful or unlawful behavior is present"
        ]
      },
      {
        "id": "meta-pp-content-review",
        "reference": "META-PP-OVERSIGHT",
        "summary": "Meta reviews content and policy violations, with some decisions subject to review by the independent Oversight Board.",
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
            "example": "Documentation showing content violates community standards",
            "reason": "Required for Meta's review process and potential Oversight Board consideration"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Violation is confirmed through review process",
          "Decision may be subject to Oversight Board review"
        ]
      },
      {
        "id": "meta-pp-data-preservation",
        "reference": "META-PP-PRESERVATION",
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
            "description": "Demonstration of legitimate purpose for data preservation",
            "example": "Evidence of ongoing investigation or safety concern",
            "reason": "Justifies extended retention of user information"
          }
        ],
        "removalCriteria": [
          "Information is needed to prevent harm",
          "Investigation of terms or policy violations is ongoing",
          "Safety, security and integrity concerns exist",
          "Protection of Meta's rights, property or products is required"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.oversightboard.com/",
      "summary": "Some content moderation decisions made by Meta can be appealed to the independent Oversight Board for review.",
      "steps": [
        "Meta makes initial decision on content violation",
        "In applicable cases, decision may be eligible for Oversight Board review",
        "Users can appeal through designated channels",
        "Oversight Board reviews selected cases independently"
      ]
    }
  },
  {
    "id": "instagram-new-1758542314674-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Comprehensive policy covering non-consensual intimate imagery (NCII), sextortion prevention, and intimate image abuse with specific enforcement mechanisms.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T11:58:34.674Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and takes action when content violates policies.",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). We have strict rules against content or behaviour that exploits people, including sharing or threatening to share someone's intimate images.",
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
            "description": "Report the content through dedicated reporting option for private images",
            "example": "Use the specific reporting flow for intimate image abuse",
            "reason": "To identify and remove violating content"
          }
        ],
        "removalCriteria": [
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images",
          "Content exploits people through intimate imagery"
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report threats or actual sharing of intimate images",
            "example": "Screenshots of threatening messages or shared intimate content",
            "reason": "To identify sextortion behavior and take enforcement action"
          }
        ],
        "removalCriteria": [
          "Threats to reveal intimate images to coerce behavior",
          "Actual sharing of intimate images as part of coercion",
          "Using intimate images to force unwanted actions"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "META-NCII-003",
        "summary": "Meta uses automated systems and specialized teams to detect, remove, and report accounts engaged in intimate image abuse at scale.",
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
            "example": "System detection of suspicious account behavior",
            "reason": "To proactively identify and remove violating content"
          }
        ],
        "removalCriteria": [
          "Patterns associated with intimate image abuse behavior",
          "Accounts identified as engaging in criminal intimate image sharing",
          "Content flagged by automated detection systems"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "META-NCII-004",
        "summary": "Meta restricts adults from messaging teens they're not connected to and limits message requests to text-only until accepted.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
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
            "description": "Violations of teen protection messaging rules",
            "example": "Adults attempting to send images/videos to unconnected teens",
            "reason": "To prevent unwanted contact and potential exploitation"
          }
        ],
        "removalCriteria": [
          "Adults over 18 initiating private chats with unconnected teens",
          "Sending images, videos, or voice notes in message requests before acceptance",
          "Attempting to circumvent teen protection messaging restrictions"
        ]
      },
      {
        "id": "meta-stopncii-integration",
        "reference": "META-NCII-005",
        "summary": "Meta participates in StopNCII.org to help prevent adult intimate images from being shared online using hash technology.",
        "quote": "We've made both Take It Down and StopNCII easily accessible on our apps when people are reporting potentially violating content. The tool uses hash-generating technology that assigns a unique hash value (a numeric code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
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
            "description": "Create hash of intimate image through StopNCII.org (for users over 18)",
            "example": "Generate secure digital fingerprint without sharing actual image",
            "reason": "To prevent sharing or resharing of intimate images across platforms"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through StopNCII.org",
          "Attempts to share content with known intimate image hashes",
          "Content flagged through hash-matching technology"
        ]
      },
      {
        "id": "meta-takeitdown-integration",
        "reference": "META-NCII-006",
        "summary": "Meta participates in Take It Down to help prevent sharing of intimate images of minors using hash technology.",
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
            "description": "Create hash of intimate image through TakeItDown.NCMEC.org (for users under 18 or content created when under 18)",
            "example": "Generate secure hash through NCMEC platform",
            "reason": "To prevent sharing of intimate images of minors"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through Take It Down",
          "Content involving individuals under 18 in intimate imagery",
          "Attempts to share content with known minor intimate image hashes"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "META-NCII-007",
        "summary": "Meta reviews reports of intimate image abuse 24/7 in over 70 languages and takes action on violating content.",
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
            "example": "Use dedicated reporting options for intimate image abuse",
            "reason": "To enable 24/7 review and action on violating content"
          }
        ],
        "removalCriteria": [
          "Content determined to violate intimate image policies after review",
          "Behavior that exploits people through intimate imagery",
          "Threats involving intimate images"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758542314674-1",
    "reference": "META-BH",
    "title": "Meta Community Standards - Bullying and Harassment",
    "summary": "Detailed policy on bullying and harassment covering threats, degrading content, mass harassment, and specific protections for different user categories.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T11:58:34.674Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1",
        "summary": "Meta prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
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
        "id": "meta-bh-sexual-activity-statements",
        "reference": "META-BH-T1",
        "summary": "Meta removes statements of intent to engage in sexual activity or advocating to engage in sexual activity targeting individuals.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
            "description": "Evidence of sexual statements directed at target",
            "example": "Screenshots of posts or messages containing sexual intent statements",
            "reason": "To verify sexual nature of harassment"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity with target"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-T1",
        "summary": "Meta prohibits severe sexualized commentary targeting individuals.",
        "quote": "Severe sexualized commentary.",
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
            "description": "Evidence of severe sexualized commentary",
            "example": "Screenshots showing explicit sexual comments about the target",
            "reason": "To establish severity and sexual nature of harassment"
          }
        ],
        "removalCriteria": [
          "Commentary is sexualized in nature",
          "Commentary reaches threshold of severity"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexualized-imagery",
        "reference": "META-BH-T1",
        "summary": "Meta removes derogatory sexualized photoshop or drawings targeting individuals.",
        "quote": "Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of manipulated sexualized imagery",
            "example": "Screenshots of photoshopped or drawn sexual content featuring the target",
            "reason": "To verify existence and sexual nature of manipulated content"
          }
        ],
        "removalCriteria": [
          "Content contains photoshopped sexual imagery of target",
          "Content contains drawn sexual imagery of target",
          "Imagery is derogatory in nature"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "META-BH-T1",
        "summary": "Meta prohibits attacks through derogatory terms related to sexual activity.",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
            "description": "Evidence of sexual derogatory terms used as attacks",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at target",
            "reason": "To verify use of prohibited sexual derogatory language"
          }
        ],
        "removalCriteria": [
          "Content uses derogatory terms related to sexual activity",
          "Terms are used as attacks against the target"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1",
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
            "example": "Screenshots of messages threatening to share phone number, address, email, or medical records",
            "reason": "To verify existence of privacy violation threats"
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
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2",
        "summary": "Meta removes claims about sexual activity targeting minors, private adults, and limited scope public figures, except in context of criminal allegations against adults.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of sexual activity claims and target status",
            "example": "Screenshots of posts making sexual claims about minors or private individuals",
            "reason": "To verify prohibited sexual claims and confirm target protection level"
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
        "reference": "META-BH-T2",
        "summary": "Meta removes content sexualizing adults who are minors, private adults, or limited scope public figures.",
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
            "description": "Evidence of sexualizing content and target status",
            "example": "Screenshots of sexualizing posts about private adults or limited scope public figures",
            "reason": "To verify sexualizing nature and confirm target protection level"
          }
        ],
        "removalCriteria": [
          "Target is a minor, private adult, or limited scope public figure",
          "Content sexualizes the target adult"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery-negative",
        "reference": "META-BH-T2",
        "summary": "Meta removes content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics of protected individuals.",
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
            "description": "Evidence of manipulated imagery targeting physical features",
            "example": "Screenshots showing circled or highlighted body parts in a negative context",
            "reason": "To verify image manipulation and negative targeting of physical characteristics"
          }
        ],
        "removalCriteria": [
          "Target is a minor, private adult, or limited scope public figure",
          "Content is manipulated to highlight physical characteristics",
          "Manipulation negatively draws attention to specific features"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery-self-report",
        "reference": "META-BH-T3",
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
            "description": "Self-report from target and evidence of manipulated imagery",
            "example": "Report from the individual depicted showing manipulated images",
            "reason": "Self-reporting requirement and verification of image manipulation"
          }
        ],
        "removalCriteria": [
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content contains manipulated imagery of target",
          "Target has self-reported the content as unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups-events",
        "reference": "META-BH-ADDITIONAL",
        "summary": "Meta removes content that targets private individuals through unwanted Pages, Groups and Events when reported by the target.",
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
            "example": "Complaint from the targeted individual or their legal representative",
            "reason": "Required reporting from target to establish unwanted nature"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals",
          "Content appears on unwanted Pages, Groups, or Events",
          "Target or authorized representative has reported the content"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-ADDITIONAL",
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
            "example": "Statement from public figure or their representative confirming content is unwanted",
            "reason": "Required confirmation to establish unwanted nature for public figures"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexually-harassing-contact",
        "reference": "META-BH-ADDITIONAL",
        "summary": "Meta removes sexually harassing contact when confirmed unwanted by the recipient or authorized representative.",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from recipient that contact is unwanted and sexually harassing",
            "example": "Statement from recipient confirming sexual harassment and unwanted nature",
            "reason": "Required confirmation to establish unwanted and sexually harassing nature"
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
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain cases.",
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
    "id": "instagram-new-1758542314674-2",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Instagram Help Center - Reporting Harassment or Bullying",
    "summary": "Official reporting mechanism and guidelines for harassment and bullying content on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-22T11:58:34.674Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-photo",
        "reference": "IG-REPORT-HARASSMENT-PHOTO",
        "summary": "Instagram removes photos intended to bully or harass someone when reported through their reporting system.",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
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
            "description": "Report through Instagram's reporting system",
            "example": "Use the report function on the specific photo or comment",
            "reason": "Required to initiate Instagram's review process for harassment content"
          }
        ],
        "removalCriteria": [
          "Photo is intended to bully or harass someone",
          "Content violates Instagram's Community Standards regarding harassment"
        ]
      },
      {
        "id": "ig-harassment-bullying-account",
        "reference": "IG-REPORT-HARASSMENT-ACCOUNT",
        "summary": "Instagram removes accounts established with the intent of bullying or harassing another person when reported.",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
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
            "description": "Report the account through Instagram's reporting system",
            "example": "Use Instagram's account reporting feature",
            "reason": "Required to demonstrate the account's harassing intent"
          }
        ],
        "removalCriteria": [
          "Account is established with the intent of bullying or harassing another person",
          "Account violates Instagram's Community Standards"
        ]
      },
      {
        "id": "ig-impersonation-reporting",
        "reference": "IG-REPORT-IMPERSONATION",
        "summary": "Instagram provides a reporting mechanism for cases where someone is pretending to be you or someone else on the platform.",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
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
            "description": "Follow Instagram's impersonation reporting process",
            "example": "Report through the designated impersonation reporting channel",
            "reason": "Required to verify identity and establish impersonation claim"
          }
        ],
        "removalCriteria": [
          "Someone is pretending to be you or another person",
          "Account or content violates impersonation policies under Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758542314674-3",
    "reference": "IG-IMPERSONATION-REPORT",
    "title": "Instagram Help Center - What to do if someone is impersonating you",
    "summary": "Official policy and reporting procedures for impersonation accounts on Instagram.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-22T11:58:34.674Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION-REPORT",
        "summary": "Instagram allows users to report accounts that are impersonating them by using their photos or identity, requiring government-issued ID as proof.",
        "quote": "Instagram takes safety seriously. If someone created an Instagram account pretending to be you, you can report it to us. Make sure to provide all the requested info, including a photo of your government-issued ID.",
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
          "Account created pretending to be another person",
          "Report must be submitted by the person being impersonated or their authorized representative"
        ]
      },
      {
        "id": "ig-impersonation-eligibility",
        "reference": "IG-IMPERSONATION-REPORT",
        "summary": "Instagram only responds to impersonation reports from the actual person being impersonated or their authorized representative (such as a parent).",
        "quote": "We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent). If someone you know is being impersonated, please encourage that person to report it.",
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
            "description": "Proof of identity as the impersonated person or authorized representative",
            "example": "Government-issued ID matching the impersonated person, or documentation showing parental/guardian relationship",
            "reason": "To ensure only authorized individuals can request removal of impersonating accounts"
          }
        ],
        "removalCriteria": [
          "Report must be submitted by the person being impersonated",
          "Report may be submitted by an authorized representative of the impersonated person"
        ]
      },
      {
        "id": "ig-impersonation-anonymity",
        "reference": "IG-IMPERSONATION-REPORT",
        "summary": "Instagram keeps impersonation reports anonymous, and the reported account will not see who reported them, except for intellectual property infringement reports.",
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
          "Standard impersonation reports remain anonymous",
          "Intellectual property infringement reports are not anonymous"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
