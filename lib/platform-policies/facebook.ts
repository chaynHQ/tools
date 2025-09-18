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
    "accessTimestamp": "2025-09-18T19:50:36.819Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate images and sexual exploitation of adults.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters between adults or commercial sexual services, such as prostitution or escort services. We also remove content that attempts to coordinate or recruit for activities that involve the non-consensual sharing of intimate images.",
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
            "description": "URL(s) of the infringing content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement that the content was shared without consent",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content involves non-consensual sharing of intimate images",
          "Content facilitates sexual exploitation",
          "Content attempts to coordinate activities involving intimate images without consent"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images to degrade or shame individuals.",
        "quote": "We define bullying and harassment as repeated behavior that's intended to degrade, intimidate, or silence someone. We also prohibit content meant to degrade or shame, including, for example, claims about someone's sexual activity.",
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
            "description": "Description of how the content constitutes harassment or degradation",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the victim and process the report"
          }
        ],
        "removalCriteria": [
          "Content is intended to degrade, intimidate, or silence someone",
          "Content involves repeated harassing behavior",
          "Content makes degrading claims about someone's sexual activity",
          "Content targets a private individual for abuse"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private information and intimate images without consent, protecting individual privacy rights.",
        "quote": "Privacy and the protection of personal information are fundamentally important values for Facebook, Instagram, Messenger and Threads. We work hard to safeguard your personal identity and information and we remove content that contains personal information used to financially defraud, harass, or contact private individuals without permission.",
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
            "description": "URL(s) of the content violating privacy",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of how the content violates privacy",
            "reason": "To understand the nature of the privacy violation"
          },
          {
            "description": "Evidence that the information was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content contains personal information used to harass or contact individuals without permission",
          "Content involves sharing of private information without consent",
          "Content violates reasonable expectation of privacy",
          "Content contains personally identifiable information used maliciously"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
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
            "description": "Proof of identity",
            "example": "Government-issued ID for individuals, business documents for organizations",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how your identity is being misrepresented",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or identifying information without authorization",
          "Content is intended to mislead or deceive others about identity",
          "Account misrepresents who they are or what they're doing",
          "Profile is not clearly marked as parody or fan account when appropriate"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits using fake accounts or misrepresenting identity to deceive others or manipulate public discourse.",
        "quote": "We don't allow people to misrepresent themselves on Facebook, Instagram, Messenger and Threads, use fake accounts, artificially boost the popularity of content, or engage in behaviors designed to enable other violations under our Community Standards.",
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
            "description": "URL(s) of accounts or content exhibiting inauthentic behavior",
            "reason": "To identify and investigate the inauthentic activity"
          },
          {
            "description": "Evidence of coordinated inauthentic behavior or fake accounts",
            "reason": "To establish patterns of deceptive activity"
          },
          {
            "description": "Description of how the behavior violates authenticity standards",
            "reason": "To understand the nature of the inauthentic activity"
          }
        ],
        "removalCriteria": [
          "Use of fake accounts to misrepresent identity",
          "Coordinated efforts to manipulate public discourse",
          "Artificial boosting of content popularity",
          "Behaviors designed to enable other Community Standards violations"
        ]
      },
      {
        "id": "meta-cs-adult-nudity",
        "reference": "CS-AN",
        "summary": "Restricts adult nudity and sexual activity while allowing exceptions for educational, artistic, or advocacy purposes.",
        "quote": "We restrict the display of nudity or sexual activity because some people in our community may be sensitive to this type of content. Additionally, we default to removing sexual imagery to prevent the sharing of non-consensual or underage content.",
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
            "description": "URL(s) of the content containing nudity or sexual activity",
            "reason": "To locate and review the reported content"
          },
          {
            "description": "Context about whether content was shared without consent",
            "reason": "To determine if removal is warranted under non-consensual sharing policies"
          }
        ],
        "removalCriteria": [
          "Content displays nudity or sexual activity outside permitted exceptions",
          "Content may involve non-consensual sharing",
          "Content does not qualify for educational, artistic, or advocacy exceptions",
          "Content is sexually explicit and not in public interest"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-18T19:50:36.819Z",
    "policies": [
      {
        "id": "fb-tos-copyright",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or breaches someone else's intellectual property rights, including copyright.",
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
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or breaches someone else's intellectual property rights",
          "Content is shared without necessary rights or permissions"
        ]
      },
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "FB-TOS-3.2.1",
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
            "reason": "To establish that the content was shared without permission"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without rights"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without necessary rights or permissions"
        ]
      },
      {
        "id": "fb-tos-community-standards",
        "reference": "FB-TOS-3.2",
        "summary": "Prohibits content that breaches Community Standards, with removal and account suspension possible for violations.",
        "quote": "That breaches or attempts to circumvent these Terms, the Community Standards, and other terms and policies that apply to your use of our Products.",
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
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates Community Standards"
          },
          {
            "description": "Description of how the content violates Community Standards",
            "reason": "To establish the specific violation"
          }
        ],
        "removalCriteria": [
          "Content breaches Community Standards",
          "Content violates other applicable terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "FB-TOS-3.2",
        "summary": "Meta can remove, block or restrict content that breaches their provisions and will notify users unless violations are serious or repeated.",
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
            "description": "Report of violating content through platform reporting tools",
            "reason": "To initiate Meta's review process"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content is in breach of Terms of Service provisions",
          "Content violates Community Standards or other applicable policies"
        ]
      },
      {
        "id": "fb-tos-ip-reporting",
        "reference": "FB-TOS-3.2",
        "summary": "Users are encouraged to report content that breaches their rights, including intellectual property rights.",
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
            "description": "Use of platform's reporting feature",
            "reason": "To formally report rights violations to Meta"
          },
          {
            "description": "Evidence of rights ownership",
            "reason": "To establish that your rights have been breached"
          }
        ],
        "removalCriteria": [
          "Content breaches user's rights including intellectual property rights",
          "Content violates platform terms and policies"
        ]
      },
      {
        "id": "fb-tos-repeated-ip-violations",
        "reference": "FB-TOS-4.2",
        "summary": "Meta may disable or delete accounts for repeated infringement of other people's intellectual property rights.",
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
            "reason": "To establish pattern of violations warranting account action"
          },
          {
            "description": "Evidence of intellectual property ownership",
            "reason": "To prove rights to the infringed content"
          }
        ],
        "removalCriteria": [
          "User repeatedly infringes other people's intellectual property rights",
          "Account deletion is required for legal reasons"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal or account actions, unless violations are serious/repeated or legal restrictions apply.",
      "steps": [
        "Meta will explain options for requesting review when content is removed or accounts are disabled",
        "Review options are not provided for serious or repeated violations",
        "Review may not be available if it would expose Meta or others to legal liability",
        "Users can access the Complaints Handling Process for additional recourse"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, and other Meta products. Effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T19:50:36.819Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes harmful or unlawful content including content reported by users, and takes action against violations of terms or policies.",
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
            "example": "Use the report button on the content or contact support",
            "reason": "Required for Meta to investigate and take action on policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported by users and found to violate policies"
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
            "example": "Court order requiring removal of specific content",
            "reason": "Meta responds to legally binding requests from authorities"
          }
        ],
        "removalCriteria": [
          "Valid legal request from law enforcement or civil litigants",
          "Court order requiring content removal",
          "Compliance with applicable law requirements"
        ]
      },
      {
        "id": "meta-pp-safety-security",
        "reference": "META-PP-SAFETY-PROMOTION",
        "summary": "Meta promotes safety, security and integrity by investigating suspicious activity, detecting threats, and maintaining platform integrity.",
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
            "reason": "Needed to investigate and address security concerns"
          }
        ],
        "removalCriteria": [
          "Content poses security threats to users or platform",
          "Suspicious activity detected",
          "Threats to personnel and property identified",
          "Platform integrity compromised"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta verifies accounts and identity to prevent impersonation and identity misuse, including through facial recognition technology when selected by users.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it",
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
            "description": "Account information and photos for identity verification",
            "example": "Profile photos or selfie for account verification",
            "reason": "Required to verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Impersonation detected through identity verification",
          "Identity misuse identified",
          "Suspicious account activity confirmed"
        ]
      },
      {
        "id": "meta-pp-content-review",
        "reference": "META-PP-MANUAL-REVIEW",
        "summary": "Meta conducts both automated and manual human review of content to identify and address violations of terms and policies.",
        "quote": "we also use manual review to access and review your information",
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
            "description": "Content reported through Meta's systems for review",
            "example": "Reported posts, images, or messages violating policies",
            "reason": "Enables manual review process to assess policy violations"
          }
        ],
        "removalCriteria": [
          "Content identified as violating policies through manual review",
          "Automated systems flag content for human review",
          "Content confirmed to violate terms through review process"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "META-PP-THIRD-PARTY-SHARING",
        "summary": "Meta shares information with third parties upon user request, such as when users direct Meta to share contact or profile information with advertisers or other services.",
        "quote": "Sharing your contact, profile or other information with third parties upon your request when you use some of our Products. For example, when you direct us we share your email address or other information that you might choose to share with an advertiser",
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
            "description": "Evidence that information was shared without user consent",
            "example": "Documentation showing unauthorized sharing of personal information",
            "reason": "To verify that sharing occurred without proper user authorization"
          }
        ],
        "removalCriteria": [
          "Information shared without user consent",
          "Unauthorized sharing of personal or contact information",
          "Violation of user privacy preferences"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1650115808681298",
      "summary": "Users can contact Meta online or by mail for questions, complaints or requests regarding their information and privacy policy matters.",
      "steps": [
        "Contact Meta online through the provided contact form",
        "Alternatively, send mail to Meta Platforms Ireland Limited at the Dublin address provided",
        "Contact the Data Protection Officer for Meta Platforms Ireland Limited if needed",
        "Lodge a complaint with the Irish Data Protection Commission or local supervisory authority"
      ]
    }
  },
  {
    "id": "facebook-new-1758225036818-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying, harassment, and intimidation across Meta platforms with heightened protections for minors and public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T19:50:36.819Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-TIER1",
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
            "description": "Evidence of repeated contact pattern",
            "example": "Screenshots showing multiple unwanted messages",
            "reason": "To establish pattern of harassment"
          },
          {
            "description": "Evidence of sexual nature of harassment",
            "example": "Screenshots of sexually explicit messages",
            "reason": "To verify sexual harassment claim"
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
        "reference": "META-BH-TIER1",
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
            "description": "Screenshots or links to the sexualized content",
            "example": "URL to post containing derogatory sexualized imagery",
            "reason": "To identify and review the violating content"
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
        "reference": "META-BH-TIER1",
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
            "description": "Evidence of threat to release private information",
            "example": "Screenshot of message threatening to share personal details",
            "reason": "To verify the threat was made"
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
        "reference": "META-BH-TIER2",
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in context of criminal allegations against adults.",
        "quote": "In addition to the universal protections for everyone, all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence showing claims about sexual activity",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify the nature of the claims being made"
          },
          {
            "description": "Confirmation of individual's status as minor, private adult, or limited scope public figure",
            "example": "Evidence showing person is not a major public figure",
            "reason": "To determine applicable protection level"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of protected individuals",
          "Target is a minor, private adult, or limited scope public figure",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-TIER2",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, or limited scope public figures.",
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
            "example": "Screenshots or links to posts sexualizing the individual",
            "reason": "To identify the violating sexualized content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-TIER2-3",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to physical characteristics, and unwanted manipulated imagery when self-reported.",
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
            "example": "Screenshots showing edited photos highlighting physical features",
            "reason": "To verify content has been manipulated"
          },
          {
            "description": "Self-report from target or authorized representative",
            "example": "Report submitted by the individual depicted",
            "reason": "Required for certain protection levels"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics negatively",
          "Content contains unwanted manipulated imagery (when self-reported)",
          "Target falls under protected categories"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-ADDITIONAL",
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
            "example": "Takedown request from the individual being targeted",
            "reason": "Required to establish content is unwanted"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Links to unwanted Pages or Groups created about the individual",
            "reason": "To identify the violating content"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative",
          "Content is unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-confirmation-required",
        "reference": "META-BH-ADDITIONAL",
        "summary": "Meta removes certain harassment content when there is confirmation from the target or authorized representative that the content is unwanted.",
        "quote": "We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative",
            "example": "Written statement that content is unwanted",
            "reason": "Required to establish content violates policy"
          },
          {
            "description": "Evidence of targeting or harassment",
            "example": "Screenshots or links to the harassing content",
            "reason": "To identify content for removal"
          }
        ],
        "removalCriteria": [
          "Content targets an individual",
          "Confirmation received that content is unwanted",
          "Content falls under harassment policy violations"
        ]
      },
      {
        "id": "meta-bh-mass-harassment",
        "reference": "META-BH-ADDITIONAL",
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
            "example": "Multiple accounts targeting the same individual",
            "reason": "To establish mass harassment pattern"
          },
          {
            "description": "Evidence target is at heightened risk or harassment via personal surfaces",
            "example": "Documentation showing target is human rights defender, minor, etc.",
            "reason": "To determine applicable protection level"
          }
        ],
        "removalCriteria": [
          "Content constitutes directed mass harassment",
          "Target is individual at heightened risk of offline harm",
          "Harassment occurs via personal surfaces with policy-violating content",
          "Content targets based on protected characteristics"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through Meta's standard appeal process, with notifications sent via Support Inbox and option to request additional review if they believe the decision was wrong.",
      "steps": [
        "Report content through universal reporting option on posts, comments, stories, messages, or profiles",
        "Receive notification of review decision via notifications and Support Inbox",
        "If disagreeing with decision, request another review through appeal option",
        "Receive final response after re-review via Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758225036818-1",
    "reference": "META-IB",
    "title": "Meta Inauthentic Behavior Policy",
    "summary": "Policy addressing fake accounts, impersonation, and coordinated inauthentic behavior including specific protections against impersonation.",
    "url": "https://transparency.meta.com/policies/community-standards/inauthentic-behavior/",
    "accessTimestamp": "2025-09-18T19:50:36.819Z",
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
            "description": "Evidence that account is fake or misrepresenting identity",
            "example": "Documentation showing real identity differs from account representation",
            "reason": "To verify authenticity violations"
          }
        ],
        "removalCriteria": [
          "Account deceives about identity, purpose, or origin",
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
            "description": "Evidence of foreign entity falsely representing local identity",
            "example": "Documentation showing account operators are not from claimed location",
            "reason": "To verify foreign impersonation"
          }
        ],
        "removalCriteria": [
          "Foreign entities using fake assets to represent domestic voices",
          "Deception about identity, purpose or origin of entity"
        ]
      },
      {
        "id": "meta-ib-coordinated-behavior",
        "reference": "META-IB-COORDINATED",
        "summary": "Meta prohibits sophisticated coordinated inauthentic behavior using fake accounts to manipulate public debate through adversarial methods.",
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
            "reason": "To identify sophisticated coordinated operations"
          },
          {
            "description": "Evidence of adversarial methods to evade detection",
            "example": "Technical indicators of deceptive practices",
            "reason": "To verify sophisticated evasion techniques"
          }
        ],
        "removalCriteria": [
          "Network uses fake accounts as central to operation",
          "Operators use adversarial methods to evade detection",
          "Network uses inauthentic techniques for strategic objectives",
          "Primary purpose is manipulating public debate"
        ]
      },
      {
        "id": "meta-ib-inauthentic-engagement",
        "reference": "META-IB-ENGAGEMENT",
        "summary": "Meta prohibits using networks of fake accounts to deliver fake engagement designed to appear authentic and deceive about content popularity.",
        "quote": "Inauthentic Engagement: Using a connected network of inauthentic Meta assets to deliver substantial quantities of fake engagement in ways designed to look authentic, in order to deceive Meta and its users about the popularity of content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of coordinated fake engagement activity",
            "example": "Pattern analysis showing artificial likes, shares, or comments",
            "reason": "To identify inauthentic engagement networks"
          }
        ],
        "removalCriteria": [
          "Connected network of inauthentic assets delivering fake engagement",
          "Engagement designed to appear authentic",
          "Intent to deceive about content popularity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can request review through Facebook's Support Inbox system with multiple review stages and final appeal options.",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758225036818-2",
    "reference": "META-NCII",
    "title": "Meta NCII and StopNCII Initiative",
    "summary": "Meta's approach to combating non-consensual intimate imagery including the StopNCII.org platform and proactive detection technologies.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T19:50:36.819Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on all platforms and uses proactive detection technology to prevent their sharing.",
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
          "Images or videos featuring nudity or sexual content shared without consent",
          "Content that matches hash fingerprints of reported NCII"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "META-NCII-002",
        "summary": "Meta uses hash-matching technology to proactively detect and prevent sharing of intimate images before they are posted to platforms.",
        "quote": "Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms",
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
            "description": "Hash values of intimate images generated through StopNCII.org",
            "example": "Numerical code fingerprint of the image",
            "reason": "To enable proactive detection without exposing the actual images"
          }
        ],
        "removalCriteria": [
          "Content that matches hash fingerprints provided through StopNCII.org platform",
          "Images detected as potential NCII through hash-matching technology"
        ]
      },
      {
        "id": "meta-ncii-victim-control",
        "reference": "META-NCII-003",
        "summary": "Meta provides tools through StopNCII.org that give victims control over their intimate images without compromising privacy by using on-device hashing.",
        "quote": "The tool features hash-generating technology that assigns a unique hash value (a numerical code) to an image, creating a secure digital fingerprint... the original image never leaves the person's device. Only hashes, not the images themselves, are shared with StopNCII.org and participating tech platforms",
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
            "description": "Access to StopNCII.org platform for hash generation",
            "example": "Creating a case through StopNCII.org website",
            "reason": "To generate secure hash fingerprints while keeping images private"
          },
          {
            "description": "Confirmation of being over 18 years old",
            "example": "Age verification for platform access",
            "reason": "StopNCII.org is only available for adults over 18"
          }
        ],
        "removalCriteria": [
          "Intimate images of adults over 18 that may be shared without consent",
          "Content matching hashes generated through StopNCII.org platform"
        ]
      },
      {
        "id": "meta-ncii-reporting-resources",
        "reference": "META-NCII-004",
        "summary": "Meta provides reporting mechanisms and resources for victims of non-consensual intimate image sharing, including removal after posting occurs.",
        "quote": "For years, we've been using photo- and video-matching technology to remove intimate images shared without consent, encouraging people who use our services to report this type of behavior or content, and offering resources to better support victims",
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
            "description": "Report of NCII content through platform reporting mechanisms",
            "example": "Using Facebook or Instagram reporting tools",
            "reason": "To identify and remove content that has already been posted"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without consent that are reported through platform mechanisms",
          "Content identified through photo and video matching technology"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758225036818-3",
    "reference": "META-US-PRIVACY",
    "title": "Meta United States Regional Privacy Notice",
    "summary": "US-specific privacy notice detailing data collection, use, and user rights under applicable US privacy laws including state-specific provisions.",
    "url": "https://www.facebook.com/privacy/policies/uso/",
    "accessTimestamp": "2025-09-18T19:50:36.819Z",
    "policies": [
      {
        "id": "meta-us-privacy-deletion",
        "reference": "META-US-PRIVACY-DELETION",
        "summary": "Users have the right to request deletion of personal information collected by Meta, including photos and videos.",
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
        "id": "meta-us-privacy-correction",
        "reference": "META-US-PRIVACY-CORRECTION",
        "summary": "Users can request correction of inaccurate personal information, including photos and videos with face imagery.",
        "quote": "Right to Request Correction: The right to request that we correct inaccurate Personal Information that we maintain about you.",
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
          "Personal information that is inaccurate",
          "Information maintained by Meta about the user"
        ]
      },
      {
        "id": "meta-us-privacy-photos-videos",
        "reference": "META-US-PRIVACY-PHOTOS",
        "summary": "Meta collects and processes photos and videos which may include face imagery, and users have rights over this visual content.",
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
            "description": "Identity verification for requests involving face imagery",
            "example": "Government issued ID",
            "reason": "To verify identity when processing requests about identifying visual content"
          }
        ],
        "removalCriteria": [
          "Photos and videos containing face imagery",
          "Audio or visual information that can identify the user",
          "Content used for identification features"
        ]
      },
      {
        "id": "meta-us-privacy-third-party-sharing",
        "reference": "META-US-PRIVACY-SHARING",
        "summary": "Meta receives content and information about users from other people, including photos, which users can request to be removed.",
        "quote": "We may also receive and analyze content, communications, and information about you that other people provide when they use our products, such as when others share or comment on a photo of you, send a message to you, or upload, sync, or import your contact information.",
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
            "description": "Identity verification to confirm the person in the content",
            "example": "Government issued ID",
            "reason": "To verify the requester is the subject of the content shared by others"
          }
        ],
        "removalCriteria": [
          "Content about the user provided by other people",
          "Photos of the user shared by others",
          "Communications and information uploaded by third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can submit requests to exercise privacy rights and appeal consumer rights actions through Meta's webform system.",
      "steps": [
        "Visit the Meta privacy support webform",
        "Submit a request to exercise privacy rights",
        "Provide identity verification if required",
        "Submit an appeal for consumer rights actions if needed"
      ]
    }
  }
],
};
