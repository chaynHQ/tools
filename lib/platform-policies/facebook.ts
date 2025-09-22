import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate images, including threats to share such content and sextortion.",
        "quote": "We remove content that threatens or advocates for sexual violence or sexual exploitation. This includes the non-consensual sharing of intimate images.",
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
            "description": "Information to identify the victim in the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate imagery shared without consent",
          "Content threatens to share intimate images",
          "Content is used for sextortion or sexual exploitation",
          "Subject is identifiable in the content"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a form of harassment.",
        "quote": "We define bullying and harassment as repeated behavior that's intended to degrade, intimidate, or silence someone. We also prohibit sharing intimate images of someone without their consent.",
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
            "description": "Description of how the content constitutes harassment or bullying",
            "reason": "To assess the nature and severity of the harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the victim and process the report"
          }
        ],
        "removalCriteria": [
          "Content targets a private individual for degradation or intimidation",
          "Content includes intimate imagery shared without consent",
          "Behavior is repeated or part of a coordinated effort",
          "Content causes or is likely to cause emotional distress"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private information and intimate media without consent, protecting individuals' privacy rights.",
        "quote": "We remove content that shares private information without permission. This includes intimate media of a person shared without their consent.",
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
            "reason": "To identify and locate the violating material"
          },
          {
            "description": "Description of how the content violates privacy",
            "reason": "To understand the nature of the privacy violation"
          },
          {
            "description": "Evidence that the content was private and shared without permission",
            "reason": "To establish lack of consent for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing violates a reasonable expectation of privacy",
          "Content contains personally identifiable information used maliciously",
          "Content was obtained through hacking or unauthorized access"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
        "quote": "We require people to use the name they go by in everyday life and prohibit impersonating others by using their photos, names, or other identifying information.",
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
            "example": "Government-issued ID or official documentation",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Description of how your identity is being misused",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses someone's name without authorization",
          "Profile uses someone's photos or identifying information without permission",
          "The impersonation is intended to mislead or deceive others",
          "Account is not clearly marked as parody, fan page, or commentary"
        ]
      },
      {
        "id": "meta-cs-child-safety",
        "reference": "CS-CSEANU",
        "summary": "Strictly prohibits child sexual exploitation, abuse, and nudity, with zero tolerance for such content.",
        "quote": "We do not allow content that sexually exploits or endangers children. We remove all such content and report it to relevant authorities.",
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
            "description": "Priority review for child safety violations"
          },
          "removal": {
            "value": 24,
            "unit": "hours",
            "description": "Immediate removal of child exploitation content"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the violating content",
            "reason": "To locate and immediately remove harmful content"
          },
          {
            "description": "Description of the violation",
            "reason": "To understand the nature of the child safety concern"
          },
          {
            "description": "Relationship to the child (if applicable)",
            "reason": "To verify authority to report on behalf of a minor"
          }
        ],
        "removalCriteria": [
          "Content depicts minors in sexual or suggestive contexts",
          "Content exploits or endangers children",
          "Content sexualizes minors in any way",
          "Any form of child sexual abuse material"
        ]
      },
      {
        "id": "meta-cs-adult-nudity",
        "reference": "CS-ANSA",
        "summary": "Restricts adult nudity and sexual activity while allowing exceptions for educational, artistic, or advocacy purposes.",
        "quote": "We restrict the display of nudity or sexual activity because some people in our community may be sensitive to this type of content. We allow exceptions for content that is clearly artistic, educational, or related to health and advocacy.",
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
            "description": "URL(s) of the content in question",
            "reason": "To review the specific content for policy violations"
          },
          {
            "description": "Context of how the content violates community standards",
            "reason": "To determine if content falls outside allowed exceptions"
          }
        ],
        "removalCriteria": [
          "Content shows adult nudity without educational, artistic, or advocacy purpose",
          "Content depicts sexual activity",
          "Content is not clearly marked for mature audiences when appropriate",
          "Content lacks sufficient context for allowed exceptions"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "META-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
    "policies": [
      {
        "id": "meta-tos-ip-infringement",
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
            "reason": "To establish legal rights to the content"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or trademark rights",
          "Content involves distribution of counterfeit or pirated goods",
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
            "description": "Evidence of original ownership or creation of the content",
            "reason": "To demonstrate you have rights to the shared content"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without permission"
          }
        ],
        "removalCriteria": [
          "Content is shared without proper ownership or rights",
          "User cannot demonstrate necessary permissions to share the content"
        ]
      },
      {
        "id": "meta-tos-content-removal",
        "reference": "META-TOS-3.2",
        "summary": "Meta can remove, block or restrict content that breaches Terms of Service or Community Standards, with notification and review options provided unless violations are serious or repeated.",
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
            "description": "Report identifying the violating content",
            "reason": "To alert Meta to potential Terms or Community Standards violations"
          },
          {
            "description": "Explanation of how content violates policies",
            "reason": "To help Meta assess the violation and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service provisions",
          "Content violates Community Standards",
          "Content poses legal liability risks",
          "Content harms community users",
          "Content compromises system integrity or operation"
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
            "reason": "To help Meta understand the nature of the rights violation"
          },
          {
            "description": "Identification of specific terms or policies violated",
            "reason": "To enable proper assessment under relevant platform policies"
          }
        ],
        "removalCriteria": [
          "Content breaches user's legal rights",
          "Content violates intellectual property rights",
          "Content violates platform terms and policies"
        ]
      },
      {
        "id": "meta-tos-account-termination",
        "reference": "META-TOS-4.2",
        "summary": "Meta may suspend or permanently disable accounts for clear, serious, or repeated breaches of Terms or Community Standards, including repeated intellectual property infringement.",
        "quote": "If we determine that you have clearly, seriously or repeatedly breached our Terms or Policies as listed in Section 5, including in particular the Community Standards which set out in detail the content that is not allowed on Meta Company Products, we may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account. We may also disable or delete your account if you repeatedly infringe other people's intellectual property rights or where we are required to do so for legal reasons.",
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
            "description": "Documentation of repeated policy violations",
            "reason": "To demonstrate pattern of serious breaches warranting account action"
          },
          {
            "description": "Evidence of intellectual property infringement",
            "reason": "To support claims of repeated IP rights violations"
          }
        ],
        "removalCriteria": [
          "Clear, serious, or repeated breaches of Terms or Community Standards",
          "Repeated infringement of intellectual property rights",
          "Legal requirements mandate account action"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://transparency.meta.com/enforcement/taking-action/complaints-handling-process",
      "summary": "Meta provides options to request review of content removal decisions and account actions, with explanations provided unless doing so would expose Meta or others to legal liability or harm community safety.",
      "steps": [
        "Review notification of content removal or account action",
        "Access review options provided in the notification (if available)",
        "Submit request for review through provided channels",
        "Await Meta's assessment of the appeal",
        "Receive decision on the review request"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, and Messenger. Effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes content reported as harmful or unlawful behavior through automated and manual review processes to promote safety and security.",
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
            "example": "Use the report button on the content or contact Meta directly",
            "reason": "Required for Meta to investigate and take action on policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported and verified through review process"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests and preserves/shares information when required by law or to prevent harm and promote safety.",
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
            "example": "Court order from civil litigation or law enforcement warrant",
            "reason": "Required to compel Meta to take action under legal authority"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Content poses safety, security or integrity risks"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "META-PP-SHARING-CONTROL",
        "summary": "Users can control how their information is shared and Meta provides settings to manage privacy and content visibility.",
        "quote": "It's important to us that you know how to control your privacy, so we also show you where you can manage your information in the settings of the Meta Products you use. You can update these settings to shape your experience.",
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
            "description": "Access to account settings and privacy controls",
            "example": "User must be able to log into their account to modify settings",
            "reason": "Required to manage content visibility and sharing preferences"
          }
        ],
        "removalCriteria": [
          "User has control over their own content sharing settings",
          "Content visibility can be modified through privacy settings"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta uses face analysis and facial recognition technology for identity verification and protection against impersonation when users consent.",
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
            "example": "Account photos or selfie provided by the user",
            "reason": "Required to verify legitimate account ownership and prevent impersonation"
          },
          {
            "description": "User consent for facial recognition technology",
            "example": "Explicit consent through platform settings",
            "reason": "Required by privacy law and platform policy for biometric processing"
          }
        ],
        "removalCriteria": [
          "Suspicious activity detected on account",
          "Potential impersonation or identity misuse identified",
          "User requests identity verification protection"
        ]
      },
      {
        "id": "meta-pp-data-erasure",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have the right to request erasure of their information under GDPR and other data protection laws.",
        "quote": "Erase information - You have the right to erase information",
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
            "description": "Valid request for data erasure under applicable privacy laws",
            "example": "GDPR Article 17 right to erasure request",
            "reason": "Required to exercise legal rights to data deletion"
          }
        ],
        "removalCriteria": [
          "User has legal right to erasure under GDPR or similar laws",
          "Information is no longer necessary for original processing purpose",
          "User withdraws consent and no other legal basis exists"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1994830130782319",
      "summary": "Users can object to processing and seek restriction through Facebook settings and Help Center, with decisions reviewed by the Oversight Board in some cases.",
      "steps": [
        "Visit Facebook settings to manage information processing",
        "Contact through Help Center for objections and restrictions",
        "Submit objection with reasoning for processing concerns",
        "Meta will assess objection considering user expectations, benefits, risks, and alternative means",
        "Some content decisions may be reviewed by the independent Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758540408703-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment across Meta platforms, with heightened protections for minors and detailed enforcement guidelines.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
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
            "reason": "To establish pattern of harassment or unwanted nature of contact"
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
            "description": "Evidence of sexualized harassment content",
            "example": "Screenshots of derogatory sexual comments or manipulated images",
            "reason": "To verify the sexual nature and severity of the harassment"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings",
          "Content attacks through derogatory sexual terms"
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
            "reason": "To verify the threatening nature and identify the private information at risk"
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
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in criminal allegation contexts.",
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
            "description": "Evidence of false sexual activity claims",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify the nature of the claims and confirm they are not criminal allegations"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing the target is a minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for this protection tier"
          }
        ],
        "removalCriteria": [
          "Target is a minor, private adult, or limited scope public figure",
          "Content makes claims about sexual activity",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to specific physical characteristics when targeting protected individuals.",
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
            "example": "Screenshots showing images altered to highlight or circle body parts",
            "reason": "To verify the manipulative nature of the content"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing target is minor, private adult, or limited scope public figure",
            "reason": "To establish eligibility for this protection"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics",
          "Content negatively draws attention to specific body parts",
          "Target falls under protected categories (minors, private adults, limited scope public figures)"
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
            "example": "Complaint filed by the targeted individual or their legal representative",
            "reason": "Required for enforcement of this policy"
          },
          {
            "description": "Evidence of targeting through pages/groups/events",
            "example": "Screenshots showing unwanted targeting content on pages, groups, or events",
            "reason": "To verify the targeting behavior and platform used"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative",
          "Content is unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-unwanted-sexualization",
        "reference": "META-BH-PUBLIC-SEXUAL",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target or authorized representative.",
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
            "description": "Confirmation from target or authorized representative",
            "example": "Written statement from public figure or their representative confirming content is unwanted",
            "reason": "Required confirmation for removal of sexualizing content about public figures"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots showing content that sexualizes the public figure",
            "reason": "To verify the sexual nature of the content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-mass-harassment",
        "reference": "META-BH-MASS-HARASSMENT",
        "summary": "Meta removes directed mass harassment targeting individuals at heightened risk of offline harm or targeting any individual via personal surfaces.",
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
            "description": "Evidence of mass harassment campaign",
            "example": "Documentation showing coordinated harassment across multiple accounts or platforms",
            "reason": "To establish the mass nature of the harassment"
          },
          {
            "description": "Evidence of heightened risk status or personal surface targeting",
            "example": "Documentation showing target is human rights defender, minor, victim, etc. or evidence of harassment via personal surfaces",
            "reason": "To confirm eligibility under mass harassment protections"
          }
        ],
        "removalCriteria": [
          "Harassment targets individuals at heightened risk of offline harm",
          "Harassment occurs via personal surfaces like inbox or profiles",
          "Content violates bullying policies for private individuals",
          "Content targets based on protected characteristics"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain cases.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox",
        "For eligible cases, may appeal to Meta's Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758540408703-1",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Comprehensive resource covering Meta's policies and tools for addressing non-consensual intimate imagery (NCII) and sextortion across platforms.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and will take action when content violates policies.",
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
            "description": "Report content that breaks Meta's rules using dedicated reporting option",
            "example": "Use specific reporting flow for private images",
            "reason": "To identify violating content for review and removal"
          }
        ],
        "removalCriteria": [
          "Content or behaviour that exploits people",
          "Sharing intimate images without consent",
          "Threatening to share intimate images"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "META-NCII-002",
        "summary": "Sextortion (threatening to reveal intimate images to force unwanted actions) is against Meta policies and will result in account removal and law enforcement reporting.",
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
            "description": "Report threats or coercive behavior through platform reporting systems",
            "example": "Report messages threatening to share intimate images",
            "reason": "To investigate criminal behavior and protect victims"
          }
        ],
        "removalCriteria": [
          "Threatening to reveal intimate images",
          "Using intimate images to force unwanted actions",
          "Coercive behavior involving intimate content"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "META-NCII-003",
        "summary": "Meta uses automated systems to detect and remove accounts engaged in sextortion and intimate image abuse at scale.",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities.",
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
            "description": "No user evidence required for automated detection",
            "example": "System automatically identifies suspicious patterns",
            "reason": "Proactive enforcement against criminal behavior"
          }
        ],
        "removalCriteria": [
          "Patterns associated with sextortion behavior",
          "Accounts identified as engaging in intimate image abuse",
          "Criminal behavior targeting victims with intimate content"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "META-NCII-004",
        "summary": "Meta restricts adults over 18 from starting private chats with teens they're not connected to and limits message requests to text-only until accepted.",
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
            "description": "Automatic enforcement based on age and connection status",
            "example": "System prevents adults from messaging unconnected teens",
            "reason": "Proactive protection against predatory behavior"
          }
        ],
        "removalCriteria": [
          "Adults attempting to message unconnected teens",
          "Sending non-text content in message requests",
          "Circumventing teen protection measures"
        ]
      },
      {
        "id": "meta-stopncii-integration",
        "reference": "META-NCII-005",
        "summary": "Meta participates in StopNCII.org to prevent sharing of intimate images of adults (18+) using hash technology to detect and block content.",
        "quote": "We've made both Take It Down and StopNCII easily accessible on our apps when people are reporting potentially violating content. The tool uses hash-generating technology that assigns a unique hash value (a numeric code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
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
            "example": "Upload image to generate secure digital fingerprint",
            "reason": "To prevent sharing without exposing the actual image"
          }
        ],
        "removalCriteria": [
          "Images matching hashes from StopNCII.org database",
          "Intimate images of adults shared without consent",
          "Content flagged through hash-matching technology"
        ]
      },
      {
        "id": "meta-takeitdown-integration",
        "reference": "META-NCII-006",
        "summary": "Meta participates in Take It Down to prevent sharing of intimate images of minors (under 18) using hash technology administered by NCMEC.",
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
            "example": "Generate hash for images taken when under 18",
            "reason": "To prevent child sexual abuse material from spreading"
          }
        ],
        "removalCriteria": [
          "Images matching hashes from Take It Down database",
          "Intimate images of minors shared without consent",
          "Content involving individuals under 18 in sexual contexts"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "META-NCII-007",
        "summary": "Meta's teams review reports of intimate image abuse 24/7 in more than 70 languages and take action on violating content and behavior.",
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
            "example": "Use dedicated reporting flow for intimate images",
            "reason": "To enable human review of potentially violating content"
          }
        ],
        "removalCriteria": [
          "Content that violates intimate image policies",
          "Behavior that exploits or harms users",
          "Content reported as non-consensual intimate imagery"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758540408703-2",
    "reference": "META-IB",
    "title": "Meta Inauthentic Behavior Policy",
    "summary": "Policy covering fake accounts, impersonation, and coordinated inauthentic behavior across Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/inauthentic-behavior/",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
    "policies": [
      {
        "id": "meta-ib-fake-accounts",
        "reference": "META-IB-FAKE-ACCOUNTS",
        "summary": "Meta prohibits the creation and use of fake accounts to deceive users about identity, purpose, or origin, or to evade enforcement.",
        "quote": "The creation, use, or claimed use of Inauthentic Meta Assets (Accounts, Pages, Groups, etc.) in order to: Deceive Meta or our users about: The identity, purpose, or origin of an audience or the entity that they represent; or the popularity of content or assets on our services; or a Meta asset's ownership or control network. To Evade enforcement under the Community Standards. Misuse Meta reporting systems to harass, intimidate or silence others.",
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
            "description": "Evidence that the account is fake or misrepresenting identity",
            "example": "Documentation showing the account is using false information",
            "reason": "To verify the account violates authenticity standards"
          }
        ],
        "removalCriteria": [
          "Account is created with false identity information",
          "Account is used to deceive users about the entity's identity, purpose, or origin",
          "Account is used to evade Community Standards enforcement",
          "Account misuses reporting systems to harass others"
        ]
      },
      {
        "id": "meta-ib-impersonation",
        "reference": "META-IB-IMPERSONATION",
        "summary": "Meta prohibits using fake accounts to misrepresent identity or falsely represent domestic/local voices, particularly by foreign entities.",
        "quote": "Foreign Inauthentic Behavior: Foreign entities using Inauthentic Meta assets to falsely represent a domestic or local voice, in order to deceive an audience about the identity, purpose or origin of the entity they represent.",
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
            "description": "Evidence that a foreign entity is falsely representing a domestic voice",
            "example": "Documentation showing the account operator is not located where they claim",
            "reason": "To verify foreign inauthentic behavior"
          }
        ],
        "removalCriteria": [
          "Foreign entities using fake accounts to represent domestic voices",
          "Deception about the identity, purpose or origin of the entity"
        ]
      },
      {
        "id": "meta-ib-coordinated-behavior",
        "reference": "META-IB-COORDINATED",
        "summary": "Meta prohibits Coordinated Inauthentic Behavior where fake accounts are central to sophisticated operations designed to manipulate public debate.",
        "quote": "Entities to engage in, or claim to engage in Coordinated Inauthentic Behavior, defined as particularly sophisticated forms of Inauthentic Behavior where inauthentic accounts are central to the operation and operators: Use adversarial methods to evade detection or appear authentic; and Use a variety of adversarial and inauthentic techniques to achieve overarching strategic objectives; and Primarily seek to manipulate public debate.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of coordinated network of fake accounts",
            "example": "Documentation showing connected inauthentic assets working together",
            "reason": "To verify coordinated inauthentic behavior"
          },
          {
            "description": "Evidence of adversarial methods to evade detection",
            "example": "Technical indicators of sophisticated deception techniques",
            "reason": "To establish the sophisticated nature of the operation"
          }
        ],
        "removalCriteria": [
          "Network uses fake accounts as central to the operation",
          "Operators use adversarial methods to evade detection",
          "Network uses multiple inauthentic techniques for strategic objectives",
          "Primary purpose is to manipulate public debate"
        ]
      },
      {
        "id": "meta-ib-reporting-abuse",
        "reference": "META-IB-REPORTING",
        "summary": "Meta prohibits misusing reporting systems to harass, intimidate, or silence other users.",
        "quote": "Misuse Meta reporting systems to harass, intimidate or silence others.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of systematic misuse of reporting features",
            "example": "Pattern of false reports targeting specific users",
            "reason": "To verify abuse of reporting systems"
          }
        ],
        "removalCriteria": [
          "Systematic misuse of reporting systems",
          "Reports made with intent to harass, intimidate, or silence others",
          "False or bad faith reporting patterns"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review through Meta's standard appeal process if they believe enforcement action was taken in error.",
      "steps": [
        "User receives notification of enforcement action",
        "User can request review through the provided appeal option",
        "Meta reviews the appeal and provides final decision",
        "Final response is sent to the user's Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758540408703-3",
    "reference": "META-ENF",
    "title": "Meta Content Enforcement - Taking Down Violating Content",
    "summary": "Detailed explanation of Meta's content enforcement process, including how content is reviewed, removed, and appeals are handled.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
    "policies": [
      {
        "id": "meta-enf-content-removal",
        "reference": "META-ENF-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanation of the violation and policy reference.",
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
            "example": "Any content that goes against established community guidelines",
            "reason": "Required basis for content removal under Meta's enforcement system"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "Content is identified through detection systems or user reports"
        ]
      },
      {
        "id": "meta-enf-strike-system",
        "reference": "META-ENF-STRIKES",
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
            "description": "Pattern of Community Standards violations",
            "example": "Multiple instances of policy-violating content",
            "reason": "Strike system tracks repeat violations to determine account restrictions"
          }
        ],
        "removalCriteria": [
          "Content violates specific Community Standards policy",
          "User has previous history of violations",
          "Strike count reaches threshold for account action"
        ]
      },
      {
        "id": "meta-enf-notification-process",
        "reference": "META-ENF-NOTIFY",
        "summary": "Meta provides detailed notifications when content is removed, including policy reference and explanation to help users understand violations.",
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
            "description": "Content removal action by Meta",
            "example": "Content that has been removed for policy violation",
            "reason": "Notification system requires prior enforcement action"
          }
        ],
        "removalCriteria": [
          "Content has been removed for Community Standards violation",
          "User notification is part of standard enforcement process"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, with additional context provided during the appeal process.",
      "steps": [
        "User receives notification of content removal with policy explanation",
        "User can request review if they disagree with the decision",
        "User can provide additional information during the review request",
        "Meta conducts secondary review of the content and decision",
        "Final decision is communicated with expectations about outcome"
      ]
    }
  },
  {
    "id": "facebook-new-1758540408703-4",
    "reference": "META-USP",
    "title": "Meta United States Regional Privacy Notice",
    "summary": "US-specific privacy notice detailing data handling practices and user rights under applicable US privacy laws.",
    "url": "https://www.facebook.com/privacy/policies/uso/",
    "accessTimestamp": "2025-09-22T11:26:48.703Z",
    "policies": [
      {
        "id": "meta-usp-deletion",
        "reference": "META-USP-DELETION",
        "summary": "Users have the right to request deletion of personal information that Meta has collected from or about them.",
        "quote": "Right to Request Deletion: The right to request that we delete your Personal Information that we have collected from or about you.",
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
            "description": "Identity verification may be required",
            "example": "Government issued ID",
            "reason": "To protect your information and the integrity of our products"
          }
        ],
        "removalCriteria": [
          "Personal information collected from or about the user",
          "Subject to certain exceptions under applicable U.S. privacy laws"
        ]
      },
      {
        "id": "meta-usp-correction",
        "reference": "META-USP-CORRECTION",
        "summary": "Users can request correction of inaccurate personal information maintained by Meta.",
        "quote": "Right to Request Correction: The right to request that we correct inaccurate Personal Information that we maintain about you.",
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
            "description": "Identity verification may be required",
            "example": "Government issued ID",
            "reason": "To protect your information and the integrity of our products"
          }
        ],
        "removalCriteria": [
          "Personal information must be inaccurate",
          "Information must be maintained by Meta"
        ]
      },
      {
        "id": "meta-usp-photos-videos",
        "reference": "META-USP-VISUAL",
        "summary": "Meta collects and processes photos, videos, and face imagery as personal information with specific use restrictions.",
        "quote": "Photos and videos, which may include face imagery; Audio or visual information, including photos, videos, and voice recordings; Face imagery or voice recordings which may be used to identify you when you use relevant features.",
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
            "description": "Identity verification may be required for requests",
            "example": "Government issued ID",
            "reason": "To protect information and product integrity"
          }
        ],
        "removalCriteria": [
          "Photos and videos constitute personal information subject to deletion rights",
          "Face imagery used for identification features",
          "Audio or visual information collected by Meta"
        ]
      },
      {
        "id": "meta-usp-sensitive-content",
        "reference": "META-USP-SENSITIVE",
        "summary": "Meta processes sensitive personal information including message content and requires specific consent or legal basis for use.",
        "quote": "The content of messages you send and receive, which are considered sensitive personal information under CCPA; For categories of sensitive personal information that we collect, we will only use or disclose it either with your specific consent when required, or as otherwise permitted by law, including the CCPA.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "Identity verification may be required",
            "example": "Government issued ID",
            "reason": "To protect sensitive information"
          }
        ],
        "removalCriteria": [
          "Message content is considered sensitive personal information",
          "Use requires specific consent or legal permission",
          "Subject to CCPA sensitive information protections"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can appeal consumer rights actions through Meta's privacy support webform and may need to verify identity.",
      "steps": [
        "Submit request through the privacy support webform",
        "Provide identity verification if required (such as government issued ID)",
        "Use authorized agent if desired (additional verification may be required)",
        "Appeal decisions through the same webform system"
      ]
    }
  }
],
};
