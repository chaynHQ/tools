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
    "accessTimestamp": "2025-09-22T11:33:44.598Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate images, including threats to share such content and sextortion.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters between adults, and non-consensual sharing of intimate images.",
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
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement that the content was shared without consent",
            "reason": "To establish that consent was not given for sharing"
          },
          {
            "description": "Information to identify the victim in the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity",
          "Image/video shared without the consent of the depicted individual",
          "Content includes threats to share intimate images",
          "Content is used for sextortion or coercion"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a form of harassment.",
        "quote": "We remove content that appears to purposefully target private individuals with the intention of degrading or shaming them.",
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
          "Content targets a private individual for abuse",
          "Content includes degrading or shaming material",
          "Content is shared with intent to harass or humiliate",
          "The behavior is unwanted and causes harm"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private residential information and intimate images without consent as privacy violations.",
        "quote": "We remove content that shares private residential information and imagery of private individuals without permission.",
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
            "description": "Description of how the content violates privacy",
            "reason": "To understand the nature of the privacy violation"
          },
          {
            "description": "Evidence that the content was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private imagery shared without consent",
          "The sharing violates a reasonable expectation of privacy",
          "Content includes private residential information",
          "Content was obtained or shared without authorization"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AI",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
        "quote": "We require people to use the name they go by in everyday life and prohibit impersonation.",
        "contentTypes": [
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
            "example": "Government ID for individuals, business documents for organizations",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how your identity is being misrepresented",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or identifying information without authorization",
          "The profile or content is intended to mislead or deceive others",
          "The impersonation is not clearly marked as parody or fan content",
          "Content misrepresents identity with intent to deceive"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "CS-IP",
        "summary": "Prohibits sharing content that infringes on others' intellectual property rights, including unauthorized use of copyrighted images.",
        "quote": "We remove content reported to us by a rights holder as infringing their intellectual property rights.",
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
            "description": "URL(s) of the infringing content",
            "reason": "To locate the specific content claimed to be infringing"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of rights holder",
            "reason": "To verify you have rights to the content or authority to report"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To identify the original work and assess the infringement claim"
          },
          {
            "description": "Statement of good faith belief that use is not authorized",
            "reason": "To confirm the report is made in good faith under applicable law"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission",
          "Use does not qualify as fair use or fair dealing",
          "Rights holder has not authorized the use",
          "Content substantially reproduces protected work"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "META-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025 with stronger language around platform misuse and data scraping.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-22T11:33:44.598Z",
    "policies": [
      {
        "id": "meta-tos-intellectual-property",
        "reference": "META-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or breaches someone else's intellectual property rights, including copyright and trademark violations.",
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
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes or breaches someone else's intellectual property rights",
          "Content violates copyright or trademark protections",
          "Content involves distribution or selling of counterfeit or pirated goods"
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
            "description": "Proof of ownership or rights to the content",
            "reason": "To establish that the reporter has rights to the shared content"
          },
          {
            "description": "Evidence that content was shared without permission",
            "reason": "To demonstrate unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without necessary rights or permissions"
        ]
      },
      {
        "id": "meta-tos-content-removal",
        "reference": "META-TOS-3.2",
        "summary": "Meta can remove, block or restrict content that breaches Terms of Service and will provide notification and review options unless violations are serious or repeated.",
        "quote": "We can remove, block or restrict content that is in breach of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2. If we remove, block or restrict content that you have shared for violation of the Community Standards we'll let you know and explain any options you have to request another review, unless you seriously or repeatedly violate these Terms or if doing so may expose us or others to legal liability; harm our community of users; compromise or interfere with the integrity or operation of any of our services, systems or Products; where we are restricted due to technical limitations; or where we are prohibited from doing so for legal reasons.",
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
            "description": "Report of content that violates Terms of Service or Community Standards",
            "reason": "To identify content that breaches platform policies"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service provisions",
          "Content violates Community Standards",
          "Content involves harmful conduct towards others"
        ]
      },
      {
        "id": "meta-tos-reporting-system",
        "reference": "META-TOS-3.2",
        "summary": "Users are encouraged to report content or conduct that breaches their rights, including intellectual property rights, or platform terms and policies.",
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
            "description": "Description of how content breaches your rights",
            "reason": "To establish the nature of the rights violation"
          },
          {
            "description": "Identification of specific content or conduct",
            "reason": "To locate and assess the reported material"
          }
        ],
        "removalCriteria": [
          "Content breaches user's rights including intellectual property rights",
          "Content or conduct violates platform terms and policies"
        ]
      },
      {
        "id": "meta-tos-repeated-ip-violations",
        "reference": "META-TOS-4.2",
        "summary": "Meta may disable or delete accounts for repeated intellectual property infringement violations.",
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
            "description": "Documentation of repeated intellectual property infringement",
            "reason": "To establish pattern of violations"
          },
          {
            "description": "Evidence of intellectual property ownership",
            "reason": "To verify rights to the infringed content"
          }
        ],
        "removalCriteria": [
          "Account repeatedly infringes other people's intellectual property rights",
          "Legal requirements mandate account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions unless violations are serious/repeated or other restrictions apply. The Oversight Board may review some decisions.",
      "steps": [
        "Meta will notify users when content is removed and explain review options available",
        "Users can request another review of removal decisions",
        "Some decisions may be reviewed by the independent Oversight Board",
        "Review options may not be available for serious/repeated violations or legal restrictions"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, Messenger and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-22T11:33:44.598Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes harmful or unlawful content and takes action against violations of terms or policies through automated and manual review processes.",
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
            "reason": "To initiate review and potential removal of violating content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported and confirmed to violate community standards"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and shares information to comply with applicable law and prevent harm.",
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
            "example": "Court-issued subpoena or search warrant",
            "reason": "Legal compliance and law enforcement cooperation"
          }
        ],
        "removalCriteria": [
          "Valid legal request requiring content removal",
          "Court order mandating takedown",
          "Law enforcement request with proper legal authority"
        ]
      },
      {
        "id": "meta-pp-safety-security",
        "reference": "META-PP-PLATFORM-INTEGRITY",
        "summary": "Meta promotes safety, security and integrity by investigating suspicious activity, detecting threats, and maintaining platform security through automated and manual review.",
        "quote": "To promote the safety, security and integrity of Meta Products, users, employees, property and the public",
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
            "description": "Evidence of suspicious activity or security threats",
            "example": "Documentation of impersonation or unauthorized account access",
            "reason": "To investigate and address security violations"
          }
        ],
        "removalCriteria": [
          "Content poses security threat to users or platform",
          "Suspicious activity detected",
          "Threats to personnel and property identified",
          "Platform integrity compromised"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta verifies accounts and identity to prevent impersonation and identity misuse, including through facial recognition technology with user consent.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
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
            "description": "Account information and verification materials",
            "example": "Account photos or video selfie if chosen to provide",
            "reason": "To verify identity and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Impersonation detected",
          "Identity misuse identified",
          "Suspicious account activity confirmed",
          "Unauthorized use of someone's identity"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "META-PP-SHARING-PERMISSIONS",
        "summary": "Meta allows users to control how their information is shared and provides settings to manage privacy and content visibility across their products.",
        "quote": "It's important to us that you know how to control your privacy, so we also show you where you can manage your information in the settings of the Meta Products you use. You can update these settings to shape your experience.",
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
            "example": "Privacy settings configuration in Meta products",
            "reason": "To manage content visibility and sharing permissions"
          }
        ],
        "removalCriteria": [
          "Content shared without proper privacy settings",
          "User requests content visibility changes",
          "Privacy controls violated"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1994830130782319",
      "summary": "Users can object to processing and seek restriction of their information through Facebook settings and Help Center, with Meta conducting assessments based on user expectations, benefits, risks, and legal requirements.",
      "steps": [
        "Visit Facebook settings or Instagram settings to exercise rights",
        "Contact through Help Center for objections to processing",
        "Meta will assess objection considering user expectations, benefits, risks to all parties",
        "Processing will cease unless compelling legitimate grounds exist that outweigh user interests",
        "Decisions may be reviewed by the Oversight Board in some cases"
      ]
    }
  },
  {
    "id": "facebook-new-1758540824598-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Dedicated policy page covering non-consensual intimate imagery (NCII), sextortion prevention, and related safety resources including StopNCII.org integration.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T11:33:44.598Z",
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
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through dedicated reporting option for private images",
            "example": "Use Facebook, Instagram, or Messenger reporting tools",
            "reason": "To initiate content review and removal process"
          }
        ],
        "removalCriteria": [
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images",
          "Content constitutes sextortion behavior"
        ]
      },
      {
        "id": "meta-ncii-sextortion-definition",
        "reference": "META-NCII-002",
        "summary": "Meta defines sextortion as the threat to reveal intimate images to force someone to do something they don't want to do, and takes action against such behavior.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do.",
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
            "description": "Evidence of threats to share intimate images",
            "example": "Screenshots of threatening messages",
            "reason": "To establish sextortion behavior pattern"
          }
        ],
        "removalCriteria": [
          "Threats to reveal intimate images to coerce behavior",
          "Demands for money, additional images, or sexual contact using intimate images as leverage"
        ]
      },
      {
        "id": "meta-ncii-enforcement-action",
        "reference": "META-NCII-003",
        "summary": "Meta has specialized teams and automated systems that detect and remove accounts engaging in intimate image abuse at scale, and reports to authorities when appropriate.",
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
            "description": "Report content that breaks rules using dedicated reporting options",
            "example": "Use platform-specific reporting mechanisms",
            "reason": "To trigger automated detection and human review processes"
          }
        ],
        "removalCriteria": [
          "Accounts identified through pattern recognition as engaging in sextortion",
          "Content that exploits people through intimate image sharing",
          "Behavior that matches known sextortion patterns"
        ]
      },
      {
        "id": "meta-ncii-prevention-messaging",
        "reference": "META-NCII-004",
        "summary": "Meta restricts message requests to text-only until accepted and prevents adults from messaging teens they're not connected to, limiting opportunities for intimate image abuse.",
        "quote": "We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat. We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger.",
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
            "description": "Report unwanted contact or inappropriate messaging",
            "example": "Report unsolicited intimate images or harassment",
            "reason": "To enforce messaging restrictions and protect users"
          }
        ],
        "removalCriteria": [
          "Adults attempting to send private messages to unconnected teens",
          "Sending images, videos, or voice notes in unrequested message requests",
          "Circumventing messaging restrictions to contact potential victims"
        ]
      },
      {
        "id": "meta-ncii-stopncii-integration",
        "reference": "META-NCII-005",
        "summary": "Meta participates in StopNCII.org for users over 18 to prevent sharing of intimate images by creating secure digital fingerprints without exposing the actual content.",
        "quote": "If you have an intimate image or video that was taken when you were over 18 and are concerned that it will be shared or reshared online, you can take steps to help prevent further circulation through StopNCII.org. The tool uses hash-generating technology that assigns a unique hash value (a numeric code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
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
            "description": "Create hash of intimate image through StopNCII.org",
            "example": "Use StopNCII platform to generate secure digital fingerprint",
            "reason": "To enable proactive detection and prevention of image sharing without exposing content"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through StopNCII.org",
          "Content identified through digital fingerprint matching for users over 18"
        ]
      },
      {
        "id": "meta-ncii-takeitdown-integration",
        "reference": "META-NCII-006",
        "summary": "Meta participates in Take It Down for users under 18 to prevent sharing of intimate images taken when they were minors, including AI-generated content.",
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
            "description": "Create hash of intimate image through Take It Down platform",
            "example": "Use NCMEC's Take It Down service for content taken when under 18",
            "reason": "To prevent sharing of intimate images of minors without exposing the content"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through Take It Down for users under 18",
          "Content involving nude or sexual images of minors",
          "AI-generated intimate content of individuals who were under 18"
        ]
      },
      {
        "id": "meta-ncii-24-7-review",
        "reference": "META-NCII-007",
        "summary": "Meta reviews reports of nude or sexual photos/videos and threats to share such content 24/7 in more than 70 languages and takes action on violating content.",
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
            "description": "Continuous review availability"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report through Facebook, Instagram, or Messenger reporting systems",
            "example": "Use platform-specific reporting tools for intimate image abuse",
            "reason": "To initiate 24/7 review process by specialized teams"
          }
        ],
        "removalCriteria": [
          "Nude or sexual photos or videos shared without consent",
          "Threats to share intimate images",
          "Content that violates intimate image abuse policies"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758540824598-1",
    "reference": "META-BH",
    "title": "Meta Community Standards - Bullying and Harassment",
    "summary": "Specific section of Community Standards addressing bullying, harassment, and intimidation policies with enhanced protections for minors and public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T11:33:44.598Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1-CONTACT",
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
            "description": "Evidence that contact is unwanted and falls into prohibited categories",
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
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-SEXUAL",
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
            "description": "Evidence that content makes claims about sexual activity",
            "example": "Screenshots of posts making sexual claims",
            "reason": "To verify violation of sexual activity claims policy"
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
        "reference": "META-BH-T2-SEXUALIZE",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
            "description": "Evidence that content sexualizes the target individual",
            "example": "Screenshots showing sexualizing content",
            "reason": "To establish sexualization violation"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-derogatory-photoshop",
        "reference": "META-BH-T1-PHOTOSHOP",
        "summary": "Meta removes derogatory sexualized photoshop or drawings targeting any individual.",
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
            "description": "Evidence that image has been manipulated in derogatory sexualized manner",
            "example": "Original image and manipulated version showing sexualized alterations",
            "reason": "To verify unauthorized manipulation"
          }
        ],
        "removalCriteria": [
          "Image is photoshopped or drawn content",
          "Content is derogatory in nature",
          "Content is sexualized"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "META-BH-T3-MANIPULATED",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
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
            "description": "Self-report from target or authorized representative",
            "example": "Report from the individual depicted or their legal representative",
            "reason": "Policy requires self-reporting for this protection tier"
          },
          {
            "description": "Evidence that imagery has been manipulated without consent",
            "example": "Original image and manipulated version",
            "reason": "To establish unauthorized manipulation"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content is self-reported as unwanted"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta removes threats to release private phone numbers, residential addresses, email addresses, or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
          "personal"
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
            "description": "Evidence of threats to release private information",
            "example": "Screenshots showing threats to doxx or release private details",
            "reason": "To establish credible threat to privacy"
          }
        ],
        "removalCriteria": [
          "Content contains threats to release private information",
          "Information includes phone numbers, addresses, emails, or medical records"
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
            "reason": "Policy requires target confirmation for removal"
          },
          {
            "description": "Evidence that Pages, Groups, or Events are targeting the individual",
            "example": "Screenshots showing targeting behavior",
            "reason": "To establish unwanted targeting"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative",
          "Content is unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEXUAL",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from public figure or their representative",
            "reason": "Policy requires target confirmation for public figure protection"
          },
          {
            "description": "Evidence that content sexualizes the public figure",
            "example": "Screenshots showing sexualizing content",
            "reason": "To establish sexualization violation"
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
      "summary": "Meta provides appeal options through Support Inbox where users can request another review if they believe the decision was wrong, with final responses provided after re-review.",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758540824598-2",
    "reference": "META-AI",
    "title": "Meta Account Integrity and Authentic Identity",
    "summary": "Community Standards section covering impersonation, fake accounts, and authentic identity requirements across Meta platforms.",
    "url": "https://transparency.fb.com/policies/community-standards/account-integrity-and-authentic-identity/",
    "accessTimestamp": "2025-09-22T11:33:44.598Z",
    "policies": [
      {
        "id": "meta-ai-account-restriction",
        "reference": "META-AI-ACCOUNT-INTEGRITY",
        "summary": "Meta may restrict or disable accounts that violate Community Standards involving egregious harms or demonstrate activity indicative of clear violating purpose.",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that: Violate our Community Standards involving egregious harms, including those we refer to law enforcement due to the risk of imminent harm to individual or public safety",
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
            "description": "Evidence of Community Standards violation",
            "example": "Screenshots or links to violating content",
            "reason": "To demonstrate policy violation occurred"
          }
        ],
        "removalCriteria": [
          "Violate Community Standards involving egregious harms",
          "Violate Community Standards involving harms that warrant law enforcement referral",
          "Persistently violate Community Standards by posting violating content",
          "Demonstrate activity or behavior indicative of clear violating purpose"
        ]
      },
      {
        "id": "meta-ai-evasion-prevention",
        "reference": "META-AI-EVASION",
        "summary": "Meta restricts accounts created to evade previous removals, contact blocked users, or circumvent enforcement actions.",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that are: Created or repurposed to evade a previous account or entity removal, including those assessed to have common ownership and content as previously removed accounts or entities - Created to contact a user that has blocked an account - Otherwise used to evade our enforcement actions or review processes",
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
            "description": "Evidence of connection to previously removed account",
            "example": "Similar content, usernames, or profile information",
            "reason": "To establish evasion pattern"
          },
          {
            "description": "Evidence of circumventing blocks or restrictions",
            "example": "Screenshots showing contact attempts after blocking",
            "reason": "To demonstrate harassment continuation"
          }
        ],
        "removalCriteria": [
          "Created or repurposed to evade previous account removal",
          "Created to contact a user that has blocked an account",
          "Used to evade enforcement actions or review processes"
        ]
      },
      {
        "id": "meta-ai-network-coordination",
        "reference": "META-AI-NETWORK",
        "summary": "Meta takes action against accounts demonstrating close linkage or coordination within networks that violate policies.",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that demonstrate: Close linkage with a network of accounts or other entities that violate or evade our policies - Coordination within a network of accounts or other entities that persistently or egregiously violate our policies - Activity or behavior indicative of a clear violating purpose through a network of accounts",
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
            "description": "Evidence of coordination between multiple accounts",
            "example": "Similar posting patterns, shared content, or coordinated harassment",
            "reason": "To establish network behavior"
          }
        ],
        "removalCriteria": [
          "Close linkage with network of accounts that violate policies",
          "Coordination within network that persistently violates policies",
          "Activity indicative of clear violating purpose through network"
        ]
      },
      {
        "id": "meta-ai-off-platform-activity",
        "reference": "META-AI-OFF-PLATFORM",
        "summary": "Meta restricts accounts owned by convicted sex offenders or those engaging in off-platform activity that can lead to on-platform harm.",
        "quote": "We will work to restrict or disable accounts or other entities (Pages, groups, events), or business assets (Business Managers, ad accounts) that engage in off-platform activity that can lead to harm on our platform, including those: Owned by a convicted sex offender, convicted of offences related to the sexual abuse of children or adults",
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
            "description": "Evidence of off-platform harmful activity",
            "example": "Court records or documented criminal convictions",
            "reason": "To establish risk of on-platform harm"
          }
        ],
        "removalCriteria": [
          "Owned by convicted sex offender",
          "Engage in off-platform activity that can lead to harm on platform"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides notification for each content removal with information about violations and restrictions. Users can request review through the Support Inbox if they believe the decision was wrong.",
      "steps": [
        "Receive notification about content removal or account action",
        "Review details in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758540824598-3",
    "reference": "META-ENFORCEMENT",
    "title": "Meta Transparency Center - Taking Down Violating Content",
    "summary": "Detailed explanation of Meta's content enforcement approach, including removal processes, strike systems, and notification procedures.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-22T11:33:44.598Z",
    "policies": [
      {
        "id": "meta-enforcement-general-removal",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanation of policy violation.",
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
            "description": "Content that violates Community Standards",
            "example": "Any content posted on Facebook or Instagram that goes against policies",
            "reason": "Required to identify policy violations for removal"
          }
        ],
        "removalCriteria": [
          "Content goes against the Community Standards",
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
            "example": "Multiple instances of content that violates Community Standards",
            "reason": "To determine appropriate enforcement action beyond content removal"
          }
        ],
        "removalCriteria": [
          "Content violates specific Community Standards policies",
          "User has previous history of violations",
          "Strike count reaches threshold for account action"
        ]
      },
      {
        "id": "meta-enforcement-notification",
        "reference": "META-ENFORCEMENT-NOTIFICATION",
        "summary": "Meta provides detailed notifications explaining policy violations and gives users information to avoid future violations.",
        "quote": "We'll do our best to reference which part of our policies you didn't follow, and give a brief description of why we don't allow the content, so you can avoid having other content removed in the future.",
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
            "description": "Specific policy violation identification",
            "example": "Reference to exact Community Standards section violated",
            "reason": "To educate users and prevent future violations"
          }
        ],
        "removalCriteria": [
          "Content clearly violates identifiable Community Standards policy",
          "Violation can be explained with reference to specific policy section"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, and Meta will take another look at the decision.",
      "steps": [
        "Receive notification that content was removed",
        "Click option to request review if you disagree with the decision",
        "Provide additional information about why you believe the removal was incorrect",
        "Submit request for review",
        "Wait for Meta to review the decision and provide final determination"
      ]
    }
  }
],
};
