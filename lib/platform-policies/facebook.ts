import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "fb-ncii-policy",
        "reference": "CS-NCSII",
        "summary": "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content.",
        "quote": "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content.",
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
            "description": "URL(s) of the infringing content",
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
          "Image/video shared without the consent of the depicted individual",
          "The content is an authentic or AI-generated intimate depiction",
          "Subject is identifiable"
        ]
      },
      {
        "id": "fb-sextortion-policy",
        "reference": "CS-SEXTORTION",
        "summary": "Prohibits threatening to share intimate images for purposes of extortion or coercion (sextortion).",
        "quote": "We prohibit threatening to share intimate images for purposes of extortion or coercion (sextortion).",
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
            "description": "URL(s) of threatening content or messages",
            "reason": "To identify and review the threatening behavior"
          },
          {
            "description": "Description of threats or demands made",
            "reason": "To understand the nature and severity of the extortion"
          },
          {
            "description": "Evidence of the intimate content being used for the threat",
            "reason": "To establish the connection between the threat and the intimate material"
          }
        ],
        "removalCriteria": [
          "Evidence of threats to share intimate content",
          "Content is being used for extortion or harassment",
          "Subject identifies themselves as the victim"
        ]
      },
      {
        "id": "fb-bullying-policy",
        "reference": "CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We prohibit bullying and harassment. Sharing intimate images without consent is considered a severe form of bullying.",
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
          "Content targets a private individual for abuse",
          "Content includes degrading or shaming material, such as non-consensual intimate imagery",
          "The behavior is unwanted and causes severe emotional distress"
        ]
      },
      {
        "id": "fb-privacy-policy",
        "reference": "CS-PRIVACY",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "We prohibit violations of privacy. Sharing intimate media of a person without their consent is a severe privacy violation.",
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
            "description": "Evidence that the media was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains PII used maliciously or for harassment"
        ]
      },
      {
        "id": "fb-impersonation-policy",
        "reference": "CS-IMPERSONATION",
        "summary": "Prohibits impersonating others, including individuals and organizations, with an intent to deceive.",
        "quote": "We prohibit impersonating others, including individuals and organizations, with an intent to deceive.",
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
            "description": "URL of the impersonating profile or page",
            "reason": "To identify the impersonating account"
          },
          {
            "description": "Proof of identity",
            "example": "Government ID for a person, business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of the impersonation",
            "reason": "To understand how the account is misrepresenting your identity"
          }
        ],
        "removalCriteria": [
          "Account uses name, photos, or other identifying information without authorization",
          "The profile or page is intended to mislead or deceive others",
          "The account is not clearly marked as a parody or fan account"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, with significant updates effective January 1, 2025 regarding content licensing and AI usage.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that you do not own or lack necessary rights to share, including unauthorized use of others' images and personal content.",
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
            "description": "Proof that you are the rightful owner of the content or have necessary rights",
            "reason": "To establish ownership and unauthorized use"
          },
          {
            "description": "URL(s) of the content shared without permission",
            "reason": "To identify the specific content that violates the policy"
          }
        ],
        "removalCriteria": [
          "Content is shared without ownership or necessary rights from the content owner"
        ]
      },
      {
        "id": "fb-tos-ip-infringement",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that infringes or breaches someone else's intellectual property rights, including copyright and trademark violations of personal images and content.",
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
            "description": "Proof of intellectual property ownership",
            "reason": "To establish rights to the content"
          },
          {
            "description": "Evidence of infringement or breach of rights",
            "reason": "To demonstrate unauthorized use"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes someone else's intellectual property rights",
          "Content breaches copyright or trademark protections",
          "No applicable legal exception or limitation exists"
        ]
      },
      {
        "id": "fb-tos-community-standards-violation",
        "reference": "FB-TOS-3.2",
        "summary": "Prohibits content that breaches Community Standards, which include detailed policies on harassment, privacy violations, and non-consensual content sharing.",
        "quote": "You may not use our Products to do or share anything: That breaches or attempts to circumvent these Terms, the Community Standards, and other terms and policies that apply to your use of our Products.",
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
            "description": "Report identifying the specific Community Standards violation",
            "reason": "To categorize the type of policy breach"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To locate and review the content that breaches Community Standards"
          }
        ],
        "removalCriteria": [
          "Content breaches the Community Standards",
          "Content attempts to circumvent platform terms and policies"
        ]
      },
      {
        "id": "fb-tos-account-termination-ip",
        "reference": "FB-TOS-4.2",
        "summary": "Provides for account suspension or deletion when users repeatedly infringe other people's intellectual property rights, including unauthorized sharing of personal images.",
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
            "description": "Documentation of repeated intellectual property infringements",
            "reason": "To establish a pattern of violations"
          },
          {
            "description": "Evidence of intellectual property ownership for each infringement",
            "reason": "To verify rights to the content being infringed"
          }
        ],
        "removalCriteria": [
          "User has repeatedly infringed other people's intellectual property rights",
          "Account deletion is required for legal reasons"
        ]
      },
      {
        "id": "fb-tos-content-removal-process",
        "reference": "FB-TOS-3.2",
        "summary": "Establishes Meta's authority to remove, block, or restrict content that violates terms and policies, including unauthorized personal content and harassment.",
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
            "description": "Evidence that content breaches platform terms and policies",
            "reason": "To justify content removal action"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify content for removal, blocking, or restriction"
          }
        ],
        "removalCriteria": [
          "Content is in breach of platform terms and provisions",
          "User conduct violates platform policies"
        ]
      },
      {
        "id": "fb-tos-content-deletion-timeframe",
        "reference": "FB-TOS-3.3.3",
        "summary": "Specifies content deletion timeframes, with up to 90 days for complete removal from systems and backups after deletion process begins.",
        "quote": "It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you choose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
            "value": 90,
            "unit": "days",
            "description": "Up to 90 days to delete content after deletion process begins, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request",
            "reason": "To initiate the content removal process"
          }
        ],
        "removalCriteria": [
          "Content deletion request has been submitted",
          "Account deletion process has begun"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions and account actions, except in cases involving serious violations, legal liability, or technical limitations.",
      "steps": [
        "Submit a request for review when notified of content removal or account action",
        "Review will be provided unless violation was serious/repeated, creates legal liability, harms community, compromises system integrity, or is prohibited for legal/technical reasons",
        "Appeals process follows the Complaints Handling Process outlined in Meta's transparency documentation"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy - How Meta collects and uses user data",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data, with updates effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "meta-pp-safety-security-integrity",
        "reference": "Section 2 - To promote safety, security and integrity",
        "summary": "Processes information to promote safety, security and integrity, including verifying accounts, finding violations of terms or policies, investigating suspicious activity, detecting harmful behavior, and preventing spam",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. To promote safety, security and integrity. We use information we have to provide and improve our Products. This includes personalizing features, content and recommendations, such as your Facebook Feed, Instagram Feed, Stories and ads (if we show you ads on Meta Products). We use information with special protections you choose to provide for these purposes, but not to show you ads.",
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
            "description": "Content that violates terms or policies",
            "example": "Posts, comments, messages, or other content that violates community standards",
            "reason": "To identify and address violations of platform policies"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Suspicious activity that threatens platform integrity",
          "Spam and other bad experiences"
        ]
      },
      {
        "id": "meta-pp-legal-requests-harm-prevention",
        "reference": "Section 10 - How do we respond to legal requests, comply with applicable law and prevent harm?",
        "summary": "Accesses, preserves, uses and shares information in response to legal requests, to comply with applicable law, and to promote safety, security and integrity of products, users, employees, property and the public",
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
            "description": "Valid legal request documentation",
            "example": "Search warrants, court orders, production orders, or subpoenas",
            "reason": "To comply with legal obligations and law enforcement requests"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests",
          "Content that violates applicable law",
          "Content that threatens safety, security and integrity of the platform or users"
        ]
      },
      {
        "id": "meta-pp-harmful-unlawful-behavior",
        "reference": "Legal basis information - Performance of a contract",
        "summary": "Detects, prevents and combats harmful or unlawful behavior, including reviewing and removing reported content, to maintain platform safety and integrity",
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
            "description": "Reports of harmful or unlawful content",
            "example": "User reports identifying specific harmful content or behavior",
            "reason": "To identify content that violates platform policies and threatens user safety"
          }
        ],
        "removalCriteria": [
          "Harmful or unlawful behavior",
          "Content reported by users that violates policies",
          "Content that threatens user safety or platform integrity"
        ]
      },
      {
        "id": "meta-pp-account-verification-identity",
        "reference": "Legal basis information - Performance of a contract",
        "summary": "Verifies accounts, identity and activity to prevent impersonation and identity misuse, including through face analysis and facial recognition technology with user consent",
        "quote": "Verify accounts, identity and activity. Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "hacked",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account information and photos for verification",
            "example": "Account photos or photo/video selfie if provided for account support",
            "reason": "To verify identity and prevent impersonation or account misuse"
          }
        ],
        "removalCriteria": [
          "Suspicious activity including impersonation",
          "Identity misuse",
          "Unverified accounts engaging in harmful behavior"
        ]
      },
      {
        "id": "meta-pp-content-sharing-privacy",
        "reference": "Section 3 - How is your information shared on Meta Products or with integrated partners?",
        "summary": "Allows users to control how their information is shared, including with people they communicate with, through content others share about them, and via public content settings",
        "quote": "On Meta Products. Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
        "contentTypes": [
          "personal",
          "private",
          "intimate",
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
            "description": "Evidence of unauthorized sharing of private content",
            "example": "Screenshots or links showing private content shared without permission",
            "reason": "To identify violations of privacy settings and unauthorized content sharing"
          }
        ],
        "removalCriteria": [
          "Content shared without user permission",
          "Violations of privacy settings",
          "Unauthorized sharing of private information"
        ]
      },
      {
        "id": "meta-pp-data-protection-rights",
        "reference": "Section 7 - What is our legal basis for processing your information, and what are your rights?",
        "summary": "Provides users with rights to access, correct, withdraw consent, port, download, erase information, object to processing, and make complaints about data handling",
        "quote": "You have the following rights under GDPR and other relevant data protection laws: Access and correct information, Withdraw consent, Port your information, Download your information, Erase information, Object, Make a complaint",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Identity verification for data rights requests",
            "example": "Account verification to confirm identity for data access or deletion requests",
            "reason": "To ensure data rights requests are made by the legitimate account holder"
          }
        ],
        "removalCriteria": [
          "User requests for data erasure",
          "Withdrawal of consent for data processing",
          "Objections to data processing that cannot be overridden by legitimate interests"
        ]
      },
      {
        "id": "meta-pp-information-retention",
        "reference": "Section 8 - How long do we keep your information?",
        "summary": "Retains information only as long as needed to operate products, comply with legal obligations, or protect legitimate interests, with extended retention possible for specific reasons including harm prevention",
        "quote": "We keep information as long as we need it to provide our Products, comply with legal obligations or protect our or other's interests. We decide how long we need information on a case-by-case basis. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products",
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
            "description": "Justification for information retention",
            "example": "Evidence of ongoing investigation or legal proceeding requiring data preservation",
            "reason": "To comply with legal obligations and protect legitimate interests"
          }
        ],
        "removalCriteria": [
          "Information no longer needed for product operation",
          "Completion of legal obligations requiring data retention",
          "Resolution of investigations or safety concerns"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can make complaints to supervisory authorities and have rights to object to processing decisions",
      "steps": [
        "Contact Meta Platforms Ireland Limited online or by mail for privacy-related complaints",
        "Contact the Data Protection Officer for Meta Platforms Ireland Limited",
        "Lodge a complaint with the Irish Data Protection Commission or local supervisory authority",
        "Exercise rights to object to processing through Facebook and Instagram settings"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "fb-content-reporting-policy",
        "reference": "FB-HC-REPORTING",
        "summary": "Provides a comprehensive reporting system for abusive content and spam through Report links near content, covering profiles, posts, photos, videos, messages, and other content types.",
        "quote": "The best way to report abusive content or spam on Facebook is by using the Report link near the content itself. Below are some examples of how you can report content to us.",
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
            "description": "Access to the specific content to be reported",
            "example": "Direct link or ability to view the post, photo, comment, or profile",
            "reason": "To use the Report link feature located near the content"
          },
          {
            "description": "Facebook account for standard reporting",
            "reason": "To access the built-in reporting mechanisms for most content types"
          }
        ],
        "removalCriteria": [
          "Content qualifies as abusive according to Facebook's standards",
          "Content is identified as spam",
          "Content violates Facebook's community guidelines"
        ]
      },
      {
        "id": "fb-no-account-reporting-policy",
        "reference": "FB-HC-NO-ACCOUNT",
        "summary": "Provides alternative reporting mechanisms for users who don't have accounts or cannot access content they want to report due to being blocked.",
        "quote": "If you don't have an account or can't see the content you'd like to report (example: someone blocked you), learn what you can do.",
        "contentTypes": [
          "intimate",
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
            "description": "Alternative method to identify and describe the problematic content",
            "example": "URL or description of content that cannot be directly accessed",
            "reason": "To report content when standard reporting mechanisms are unavailable due to account restrictions"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook policies even when reporter lacks direct access",
          "Content can be verified through alternative reporting channels"
        ]
      },
      {
        "id": "fb-hacked-account-policy",
        "reference": "FB-HC-HACKED",
        "summary": "Provides a process to report and recover compromised accounts with specific guidance for users experiencing unauthorized access or hacking incidents.",
        "quote": "If you're having other issues, such as trouble logging into your account or if you think you've been hacked, learn more about what steps you can take.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of account compromise or unauthorized access",
            "example": "Inability to log in, suspicious activity notifications, unauthorized posts",
            "reason": "To verify that the account has been compromised and requires recovery assistance"
          },
          {
            "description": "Account identification information",
            "example": "Email address or phone number associated with the account",
            "reason": "To identify and verify ownership of the compromised account"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to the account",
          "Account is posting content without owner's consent",
          "Legitimate account owner is locked out due to compromise"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758628981388-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment protections, including heightened protections for minors and public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "Tier 1",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation.",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
        "contentTypes": [
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
            "description": "Evidence of unwanted contact pattern",
            "example": "Screenshots showing repeated messages or sexually harassing content",
            "reason": "To establish the unwanted and harassing nature of the contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large number of individuals without solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-statements",
        "reference": "Tier 1",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity with specific individuals.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
            "description": "Evidence of sexual statements or advocacy",
            "example": "Screenshots of posts or messages containing sexual intent statements",
            "reason": "To verify the sexual nature of the threatening content"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity with the target"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "Tier 1",
        "summary": "Prohibits severe sexualized commentary targeting individuals.",
        "quote": "Severe sexualized commentary.",
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
            "description": "Evidence of severe sexualized commentary",
            "example": "Screenshots of posts containing explicit sexual commentary about the individual",
            "reason": "To establish the severe and sexualized nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary about an individual"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexualized-imagery",
        "reference": "Tier 1",
        "summary": "Prohibits derogatory sexualized photoshop or drawings targeting individuals.",
        "quote": "Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of manipulated sexualized imagery",
            "example": "Screenshots or links to derogatory sexualized photoshopped images or drawings",
            "reason": "To verify the existence and derogatory nature of the manipulated content"
          }
        ],
        "removalCriteria": [
          "Content contains derogatory sexualized photoshop of an individual",
          "Content contains derogatory sexualized drawings of an individual"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "Tier 1",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity.",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
            "description": "Evidence of derogatory sexual terms being used as attacks",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at the individual",
            "reason": "To establish the attacking and derogatory nature of the sexual terminology"
          }
        ],
        "removalCriteria": [
          "Content uses derogatory terms related to sexual activity to attack an individual"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "Tier 1",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to release private information",
            "example": "Screenshots of messages threatening to share phone numbers, addresses, emails, or medical records",
            "reason": "To verify the threatening nature and identify the type of private information at risk"
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
        "id": "meta-bh-sexual-activity-claims-protected",
        "reference": "Tier 2",
        "summary": "Prohibits claims about sexual activity targeting minors, private adults, and limited scope public figures, except in context of criminal allegations against adults.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of sexual activity claims and confirmation of protected status",
            "example": "Screenshots of posts making sexual claims about the individual, along with evidence they are a minor, private adult, or limited scope public figure",
            "reason": "To verify both the sexual nature of the claims and the protected status of the target"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of a minor",
          "Content makes claims about sexual activity of a private adult",
          "Content makes claims about sexual activity of a limited scope public figure",
          "Exception: Criminal allegations of non-consensual sexual touching against adults are allowed"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "Tier 2",
        "summary": "Prohibits content sexualizing adults who are minors, private adults, or limited scope public figures.",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
            "description": "Evidence of sexualizing content and confirmation of protected status",
            "example": "Screenshots of sexualizing posts about the individual, with evidence they are a private adult or limited scope public figure",
            "reason": "To verify the sexualizing nature of content and protected status of the target"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a private adult",
          "Content sexualizes a limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "Tier 3",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Self-report from target and evidence of manipulated imagery",
            "example": "Report from the individual themselves showing manipulated images of them",
            "reason": "Self-reporting requirement ensures the target considers the content unwanted"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Target is a private minor, private adult, or minor involuntary public figure",
          "Content is self-reported by the target"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups-events",
        "reference": "Additional Requirements",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report from target or authorized representative",
            "example": "Report from the targeted individual or their legal representative identifying unwanted targeting content",
            "reason": "Ensures the target considers the content unwanted and validates reporting authority"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by the target or authorized representative",
          "Content is unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-unwanted-content-confirmation",
        "reference": "Additional Requirements",
        "summary": "Removes content that targets individuals when there is confirmation from the target or authorized representative that the content is unwanted.",
        "quote": "We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Written confirmation from the individual or their representative stating the content is unwanted",
            "reason": "Ensures removal is desired by the affected party or their legitimate representative"
          }
        ],
        "removalCriteria": [
          "Content targets an individual",
          "Target or authorized representative confirms content is unwanted",
          "Applies to both living and deceased individuals"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "Additional Requirements",
        "summary": "Removes content sexualizing public figures when confirmed unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from public figure or representative that sexualizing content is unwanted",
            "example": "Statement from the public figure or their representative requesting removal of sexualizing content",
            "reason": "Respects public figures' right to object to unwanted sexualization despite their public status"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexual-harassment-contact",
        "reference": "Additional Requirements",
        "summary": "Removes content shared in unwanted sexually harassing context when confirmed by the recipient or authorized representative.",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from recipient or representative that sexually harassing contact is unwanted",
            "example": "Statement from the recipient confirming the sexual harassment and that contact is unwanted",
            "reason": "Validates that the contact constitutes unwanted sexual harassment from the recipient's perspective"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Content is shared in unwanted context",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through notifications and the Support Inbox, with options for additional review if they believe the decision was incorrect.",
      "steps": [
        "Report content through universal reporting option on posts, comments, stories, messages, or profiles",
        "Receive notification of review decision",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional context or information during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758628981388-1",
    "reference": "META-IB",
    "title": "Inauthentic Behavior Policy",
    "summary": "Policy addressing fake accounts, impersonation, and coordinated inauthentic behavior on Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/inauthentic-behavior/",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "meta-ib-fake-accounts",
        "reference": "Inauthentic Behavior Policy",
        "summary": "Prohibits the creation, use, or claimed use of fake accounts to deceive Meta or users about identity, purpose, origin, or popularity of content or assets.",
        "quote": "The creation, use, or claimed use of Inauthentic Meta Assets (Accounts, Pages, Groups, etc.) in order to: Deceive Meta or our users about: The identity, purpose, or origin of an audience or the entity that they represent; or the popularity of content or assets on our services; or a Meta asset's ownership or control network.",
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
            "description": "Evidence of fake account creation or use",
            "example": "Screenshots showing inauthentic profile information or coordinated behavior",
            "reason": "To verify that accounts are being used to deceive users about identity or purpose"
          }
        ],
        "removalCriteria": [
          "Account is fake or inauthentic",
          "Account is used to deceive about identity, purpose, or origin",
          "Account is used to artificially boost content popularity",
          "Account is part of a network designed to mislead users"
        ]
      },
      {
        "id": "meta-ib-evade-enforcement",
        "reference": "Inauthentic Behavior Policy",
        "summary": "Prohibits using inauthentic assets to evade enforcement under Community Standards or to misuse reporting systems for harassment.",
        "quote": "The creation, use, or claimed use of Inauthentic Meta Assets (Accounts, Pages, Groups, etc.) in order to: To Evade enforcement under the Community Standards. Misuse Meta reporting systems to harass, intimidate or silence others.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of enforcement evasion or reporting system misuse",
            "example": "Documentation showing creation of new accounts after suspension or coordinated false reporting",
            "reason": "To verify that accounts are being used to circumvent platform rules or abuse reporting mechanisms"
          }
        ],
        "removalCriteria": [
          "Account is used to evade Community Standards enforcement",
          "Account is used to misuse reporting systems",
          "Account is used to harass, intimidate or silence others through false reports"
        ]
      },
      {
        "id": "meta-ib-foreign-behavior",
        "reference": "Inauthentic Behavior Policy",
        "summary": "Prohibits foreign entities using inauthentic assets to falsely represent domestic or local voices in order to deceive audiences about identity, purpose or origin.",
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
            "description": "Evidence of foreign entity misrepresenting as domestic voice",
            "example": "Technical indicators showing foreign origin while claiming local identity",
            "reason": "To verify that foreign actors are deceiving audiences about their true location and identity"
          }
        ],
        "removalCriteria": [
          "Foreign entity falsely represents domestic or local voice",
          "Account is used to deceive audience about entity's true origin",
          "Account is part of foreign interference operation"
        ]
      },
      {
        "id": "meta-ib-coordinated-behavior",
        "reference": "Inauthentic Behavior Policy",
        "summary": "Prohibits sophisticated coordinated inauthentic behavior where fake accounts are central to operations using adversarial methods to manipulate public debate.",
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
            "description": "Evidence of coordinated network behavior and adversarial techniques",
            "example": "Pattern analysis showing coordinated posting, shared infrastructure, or synchronized activities across multiple fake accounts",
            "reason": "To identify sophisticated operations designed to manipulate public discourse through coordinated deception"
          }
        ],
        "removalCriteria": [
          "Network uses fake accounts as central to operation",
          "Operators use adversarial methods to evade detection",
          "Network employs multiple inauthentic techniques for strategic objectives",
          "Primary purpose is to manipulate public debate"
        ]
      },
      {
        "id": "meta-ib-government-interference",
        "reference": "Inauthentic Behavior Policy",
        "summary": "Prohibits government interference through coordinated inauthentic behavior and restricts governments that block social media from denying violent events.",
        "quote": "Entities to engage in, or claim to engage in Government Interference, defined as Coordinated Inauthentic Behavior where the operation is attributable to a government actor. Governments that have instituted sustained blocks of social media to use their official departments, agencies, and embassies to deny the use of force or violent events in the context of an attack against the territorial integrity of another state in violation of Article 2(4) of the UN charter.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence linking coordinated inauthentic behavior to government actors",
            "example": "Attribution analysis connecting network operations to government entities or official denial of documented violent events",
            "reason": "To identify and counter government-sponsored disinformation and manipulation campaigns"
          }
        ],
        "removalCriteria": [
          "Operation is attributable to government actor",
          "Government uses official channels to deny documented violent events",
          "Government that blocks social media engages in territorial integrity violations denial"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review through the Support Inbox if they believe enforcement decisions were incorrect, with final responses provided after re-review.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Provide additional information during appeal process",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758628981388-2",
    "reference": "META-NCII",
    "title": "Non-Consensual Intimate Images Policy",
    "summary": "Comprehensive policy and tools for addressing non-consensual sharing of intimate images, including StopNCII.org integration.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "meta-ncii-001",
        "reference": "NCII Policy",
        "summary": "Strictly prohibits the sharing of non-consensual intimate images (NCII) and content or behavior that exploits people, including sharing or threatening to share someone's intimate images",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). We have strict rules against content or behaviour that exploits people, including sharing or threatening to share someone's intimate images.",
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
            "description": "Report content that breaks the rules using dedicated reporting option for private images",
            "example": "Use the specific reporting option for someone sharing private images",
            "reason": "To enable Meta's specialized teams to investigate and remove violating content"
          }
        ],
        "removalCriteria": [
          "Content that shares intimate images without consent",
          "Content that threatens to share intimate images",
          "Behavior that exploits people through intimate image sharing"
        ]
      },
      {
        "id": "meta-ncii-002",
        "reference": "Sextortion Policy",
        "summary": "Prohibits sextortion, defined as the threat to reveal intimate images to force someone to do something they don't want to do, and considers such behavior against Meta policies",
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
            "description": "Report threats to share intimate images or actual sharing of such content",
            "example": "Report when someone threatens to share intimate images to force compliance with demands",
            "reason": "To enable Meta to take action against sextortion behavior and remove violating accounts"
          }
        ],
        "removalCriteria": [
          "Threats to reveal intimate images to coerce behavior",
          "Attempts to force someone to send money, additional images, or have sexual contact using intimate image threats"
        ]
      },
      {
        "id": "meta-ncii-003",
        "reference": "Automated Detection and Removal",
        "summary": "Operates automated systems that detect and remove accounts engaged in sextortion and intimate image abuse at scale, with specialized teams investigating and reporting to authorities",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "Content or behavior matching identified patterns of sextortion or intimate image abuse",
            "example": "Accounts exhibiting patterns associated with sextortion behavior",
            "reason": "To enable automated detection and removal of violating accounts before they cause harm"
          }
        ],
        "removalCriteria": [
          "Accounts matching patterns associated with sextortion behavior",
          "Content identified through automated systems as violating intimate image policies"
        ]
      },
      {
        "id": "meta-ncii-004",
        "reference": "Message Request Restrictions",
        "summary": "Restricts message requests to text-only messages for people who don't follow or aren't connected to the sender, preventing images, videos or voice notes until the recipient accepts the request",
        "quote": "We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Attempts to send images, videos, or voice notes in message requests to unconnected users",
            "example": "Sending intimate images or videos through message requests to someone who hasn't accepted the chat request",
            "reason": "To prevent unwanted sharing of visual content before establishing a connection"
          }
        ],
        "removalCriteria": [
          "Images, videos, or voice notes sent in message requests to unconnected users",
          "Attempts to bypass message request restrictions"
        ]
      },
      {
        "id": "meta-ncii-005",
        "reference": "Adult-Teen Contact Restrictions",
        "summary": "Restricts adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger, and prevents teens from being messaged by anyone they don't follow",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We also introduced stricter default message settings for teens under 16 (and under 18 in certain countries). This means that teens can't be messaged or added to group chats by anyone they don't follow or aren't connected to on Instagram and Messenger.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Adults attempting to contact teens they're not connected to",
            "example": "Adult users over 18 trying to start private chats with teens they don't know",
            "reason": "To protect teens from unwanted contact that could lead to exploitation or abuse"
          }
        ],
        "removalCriteria": [
          "Adults over 18 attempting to start private chats with unconnected teens",
          "Messages or group chat additions to teens from users they don't follow or aren't connected to"
        ]
      },
      {
        "id": "meta-ncii-006",
        "reference": "24/7 Review Process",
        "summary": "Reviews reports of nude or sexual photos/videos and threats to share such content 24/7 in more than 70 languages, taking action on violating content and behavior",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behaviour.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Teams review reports 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Reports of nude or sexual photos/videos or threats to share such content",
            "example": "Report of someone sharing intimate images without consent",
            "reason": "To enable 24/7 review and action on violating content across multiple languages"
          }
        ],
        "removalCriteria": [
          "Nude or sexual photos or videos shared without consent",
          "Threats to share intimate images",
          "Content and behavior that violates intimate image policies"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758628981388-3",
    "reference": "META-COPYRIGHT",
    "title": "Copyright and Intellectual Property Policy",
    "summary": "Policy covering copyright infringement, DMCA procedures, and intellectual property protection on Meta platforms.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "meta-copyright-01",
        "reference": "Copyright and posting content on Meta platforms",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights and requires users to only post content they have created themselves or have permission to use",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use and our Community Standards, you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms, such as Facebook and Instagram, doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright claim including identification of copyrighted work, location of infringing content, and contact information",
            "example": "URL to infringing content, description of original copyrighted work, statement of good faith belief",
            "reason": "Required under DMCA procedures to process copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-copyright-02",
        "reference": "Copyright infringement",
        "summary": "Prohibits using someone else's copyrighted work without permission, even when giving credit, including disclaimers, or modifying the work",
        "quote": "Bear in mind that your use of someone else's content may infringe their copyright, even if you: Gave credit to the copyright owner; Included a disclaimer that you don't intend to infringe copyright; Think that the use is a fair use; Didn't intend to profit from it; Legally bought or downloaded the content (e.g. a copy of a DVD or a song from the Internet); Modified the work or added your own original material to it; Found the content available on the Internet; Recorded the content onto your own recording device (e.g. from a film, concert or sporting event); Saw that others have posted the same content as well",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Copyright ownership documentation and identification of infringing content",
            "example": "Proof of copyright ownership, URL of infringing post",
            "reason": "To verify legitimate copyright claim and locate specific infringing content"
          }
        ],
        "removalCriteria": [
          "Use of copyrighted content without permission",
          "Content infringes copyright regardless of attribution or disclaimers"
        ]
      },
      {
        "id": "meta-copyright-03",
        "reference": "Reporting copyright infringement",
        "summary": "Requires that only copyright owners or their authorized representatives may file copyright infringement reports and provides notification to content posters including reporter's contact information",
        "quote": "Only the copyright owner or their authorised representative may file a report of copyright infringement. We regularly provide the person who posted the content you are reporting with the rights owner's name, your email and the details of your report. If you are an authorised representative submitting a report, we provide the name of the organisation or client that owns the right in question.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of copyright ownership or authorization to represent copyright owner",
            "example": "Copyright registration, license agreement, or letter of authorization",
            "reason": "To verify standing to file copyright infringement claim"
          },
          {
            "description": "Valid business or professional email address",
            "example": "company@business.com or legal@lawfirm.com",
            "reason": "Contact information will be shared with the person who posted the reported content"
          }
        ],
        "removalCriteria": [
          "Reporter must be copyright owner or authorized representative",
          "Content must infringe valid copyright"
        ]
      },
      {
        "id": "meta-copyright-04",
        "reference": "Repeat infringer policy",
        "summary": "Restricts or disables accounts of users who repeatedly post content that infringes intellectual property rights",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Documentation of multiple copyright infringement violations",
            "example": "Previous takedown notices, repeat infringement reports",
            "reason": "To establish pattern of repeated intellectual property violations"
          }
        ],
        "removalCriteria": [
          "Repeated posting of content that infringes intellectual property rights",
          "Multiple copyright or trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removals by following instructions provided in removal notifications, including DMCA counter-notifications for copyright claims",
      "steps": [
        "Receive notification from Meta about content removal with appeal instructions",
        "Follow up directly with rights owner to resolve the issue",
        "Submit appeal following instructions in the removal message",
        "For DMCA claims, file a DMCA counter-notification if applicable"
      ]
    }
  },
  {
    "id": "facebook-new-1758628981388-4",
    "reference": "META-APPEALS",
    "title": "Appeals and Content Review Process",
    "summary": "Documentation of Meta's appeals process for content decisions, including Oversight Board procedures.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T12:03:01.388Z",
    "policies": [
      {
        "id": "meta-appeals-content-review",
        "reference": "Appeals Process",
        "summary": "Provides an appeals process for content removal decisions, allowing users to request another review when they believe content was incorrectly removed for policy violations",
        "quote": "Where a decision is eligible for appeal, people are given the option to ask us to take another look after receiving a notification that their content has been removed or covered with a warning. When someone appeals a decision, Meta reviews the post again and determines whether or not it follows our Community Standards.",
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
            "description": "User must disagree with the initial decision and request another review",
            "example": "Selecting the option to disagree with content removal decision",
            "reason": "To initiate the appeals review process for potentially incorrectly removed content"
          }
        ],
        "removalCriteria": [
          "Content must have been initially removed for going against Community Standards",
          "Content must be eligible for appeal (not involving extreme safety concerns like child exploitation imagery)",
          "Appeal must be submitted through the provided notification system"
        ]
      },
      {
        "id": "meta-appeals-safety-exclusions",
        "reference": "What can be appealed",
        "summary": "Excludes appeals for violations with extreme safety concerns, specifically prohibiting appeals for child exploitation imagery",
        "quote": "We don't offer appeals for violations with extreme safety concerns, such as child exploitation imagery.",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves extreme safety concerns",
          "Content constitutes child exploitation imagery"
        ]
      },
      {
        "id": "meta-appeals-reporter-appeals",
        "reference": "What can be appealed",
        "summary": "Provides appeals process for users who reported content that was not acted upon, allowing reporters to request review of inaction decisions",
        "quote": "We also provide appeals not just for content that we took action on, but also for content that was reported but not acted on. These reporter appeals are not included in the Community Standards Enforcement Report.",
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
            "description": "User must have previously reported content that was not acted upon",
            "example": "Content that was reported for policy violations but remained on the platform",
            "reason": "To allow reporters to challenge decisions where no action was taken on reported content"
          }
        ],
        "removalCriteria": [
          "Content was previously reported by the user",
          "No action was taken on the reported content",
          "Reporter believes the content violates Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides a multi-stage appeals process where users can request review of content removal decisions. Content is reviewed again by human reviewers and technology, with escalation to additional reviewers if needed. Appeals are available for most violation types except extreme safety concerns.",
      "steps": [
        "Receive notification that content has been removed or covered with a warning",
        "Choose to disagree with the decision and request another review",
        "Content is resubmitted for review and becomes invisible to others during review",
        "If initial appeal is rejected, content goes to another reviewer for final decision",
        "Final reviewer determines whether content should remain on or be restored to the platform"
      ]
    }
  }
],
};
