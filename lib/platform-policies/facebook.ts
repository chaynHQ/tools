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
    "accessTimestamp": "2025-09-23T12:05:56.967Z",
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
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated with new provisions effective January 1, 2025.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-23T12:05:56.967Z",
    "policies": [
      {
        "id": "fb-tos-intellectual-property",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations.",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "description": "Proof of ownership or necessary rights to the content",
            "reason": "To establish that the user has intellectual property rights in the content being shared without permission"
          },
          {
            "description": "URL or location of the infringing content on Facebook",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes someone else's copyright or trademark",
          "Content is shared without owning or having necessary rights to share it",
          "Content involves distributing or selling counterfeit or pirated goods"
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
            "description": "Documentation showing ownership or rights to the content",
            "reason": "To verify that the person sharing the content has legal authority to do so"
          },
          {
            "description": "Identification of the unauthorized content",
            "reason": "To locate and assess the content that was shared without proper rights"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without having necessary rights or permissions"
        ]
      },
      {
        "id": "fb-tos-community-standards-violation",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that violates Community Standards and other applicable terms and policies.",
        "quote": "That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products.",
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
            "description": "Report identifying the violating content and specific policy violation",
            "reason": "To enable Meta to assess the content against Community Standards and other applicable policies"
          }
        ],
        "removalCriteria": [
          "Content violates the Terms of Service",
          "Content violates Community Standards",
          "Content violates other applicable terms and policies"
        ]
      },
      {
        "id": "fb-tos-account-termination",
        "reference": "FB-TOS-4.2",
        "summary": "Allows suspension or permanent deletion of accounts for repeated intellectual property infringement or serious policy violations.",
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
            "reason": "To establish a pattern of violations that warrants account termination"
          },
          {
            "description": "Evidence of serious or repeated policy breaches",
            "reason": "To justify permanent account suspension under Meta's enforcement policies"
          }
        ],
        "removalCriteria": [
          "User repeatedly infringes other people's intellectual property rights",
          "Account termination is required for legal reasons",
          "User has clearly, seriously or repeatedly breached Terms or Policies"
        ]
      },
      {
        "id": "fb-tos-content-deletion-process",
        "reference": "FB-TOS-3.3.3",
        "summary": "Provides process for content deletion with up to 90-day timeframe for complete removal from all systems.",
        "quote": "It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
            "description": "Up to 90 days to delete content, with content becoming invisible to other users during the deletion process, and up to another 90 days to remove from backups"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request",
            "reason": "To initiate the formal content removal process"
          }
        ],
        "removalCriteria": [
          "Content deletion is requested by the user or account holder",
          "Account deletion process has been initiated"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions and account suspensions, except in cases involving serious violations, legal liability, or technical limitations.",
      "steps": [
        "If content is removed for Community Standards violations, Meta will notify the user and explain review options",
        "Users can request another review unless they seriously or repeatedly violated Terms",
        "For account suspension or termination, users will be notified and given options to request a review",
        "Some decisions may be reviewed by the Oversight Board subject to its terms and bylaws",
        "Appeals may not be available if doing so would expose Meta or others to legal liability, harm the community, compromise system integrity, or is prohibited for legal reasons"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms. Effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T12:05:56.967Z",
    "policies": [
      {
        "id": "meta-pp-safety-security-integrity",
        "reference": "Section: Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires removal of content reported for violations to protect users from harm",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Identify and combat disparities and racial bias against historically marginalized communities, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Report of content that violates terms or policies",
            "example": "Content reported through platform reporting mechanisms",
            "reason": "To identify and address violations of platform policies"
          }
        ],
        "removalCriteria": [
          "Content that constitutes harmful or unlawful behavior",
          "Content that violates Meta's terms or policies",
          "Content that threatens user safety, security, or well-being",
          "Spam or other security threats"
        ]
      },
      {
        "id": "meta-pp-legal-requests-harm-prevention",
        "reference": "Section 10: How do we respond to legal requests, comply with applicable law and prevent harm?",
        "summary": "Requires disclosure of user information in response to legal requests and to prevent harm, including access to and preservation of content for extended periods",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. In accordance with applicable law. To promote the safety, security and integrity of Meta Products, users, employees, property and the public. We may access or preserve your information for an extended amount of time.",
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
            "example": "Search warrant from law enforcement or court order from civil litigation",
            "reason": "To comply with legal obligations and law enforcement requirements"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests for removal",
          "Content that threatens safety, security and integrity of users or the public",
          "Content that violates applicable law"
        ]
      },
      {
        "id": "meta-pp-account-deletion-management",
        "reference": "Section 6: How can you manage or delete your information and exercise your rights?",
        "summary": "Provides users tools to view, manage, download and delete their information and exercise privacy rights through platform settings and help centers",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
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
            "description": "Access to user account settings or help center contact",
            "example": "Facebook settings, Instagram settings, or help center contact form",
            "reason": "To verify account ownership and process information management requests"
          }
        ],
        "removalCriteria": [
          "User-requested deletion of their own information",
          "User-requested account deletion",
          "Information subject to user privacy rights under applicable laws"
        ]
      },
      {
        "id": "meta-pp-information-sharing-control",
        "reference": "Section 3: How is your information shared on Meta Products or with integrated partners?",
        "summary": "Restricts information sharing to specified contexts including people you communicate with, public content, and integrated partners, with user control over sharing settings",
        "quote": "On Meta Products. Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content. With integrated partners. You can choose to connect with integrated partners who use our Products. If you do, these integrated partners receive information about you and your activity.",
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
            "description": "Evidence of unauthorized sharing outside specified contexts",
            "example": "Content shared without user consent or beyond intended audience",
            "reason": "To verify violations of information sharing restrictions"
          }
        ],
        "removalCriteria": [
          "Information shared beyond user-specified audiences without consent",
          "Content shared by others that violates user privacy settings",
          "Unauthorized sharing with integrated partners"
        ]
      },
      {
        "id": "meta-pp-data-retention-preservation",
        "reference": "Section 8: How long do we keep your information?",
        "summary": "Requires retention of information for extended periods when needed to prevent harm, investigate violations, or comply with legal obligations",
        "quote": "We keep information as long as we need it to provide our Products, comply with legal obligations or protect our or other's interests. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products. In some instances and for specific reasons, we'll keep information for an extended period of time.",
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
            "description": "Evidence of need for information preservation",
            "example": "Investigation of policy violations, legal compliance requirements, or harm prevention needs",
            "reason": "To justify extended retention beyond normal deletion timelines"
          }
        ],
        "removalCriteria": [
          "Information no longer needed for product provision",
          "Information not required for legal compliance",
          "Information not needed for harm prevention or safety purposes"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail for questions, complaints or requests regarding their information and privacy policy matters",
      "steps": [
        "Contact Meta online through the help center support form",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Users may also contact their local Data Protection Authority (DPA) directly depending on jurisdiction"
      ]
    }
  },
  {
    "id": "facebook-new-1758629156967-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Comprehensive policy on non-consensual intimate imagery (NCII) and sextortion, including reporting mechanisms and prevention tools.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T12:05:56.967Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": null,
        "summary": "Strictly prohibits the sharing of non-consensual intimate images (NCII) and considers sextortion a crime that violates Meta policies.",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). Sextortion is the threat to reveal intimate images to force you to do something you don't want to do. Sharing—or threatening to share—intimate images without consent is against Meta policies.",
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
            "description": "Report the content through dedicated reporting options for private images",
            "example": "Use the specific reporting flow for intimate image abuse on Facebook, Instagram, or Messenger",
            "reason": "Meta has specialized teams and automated systems to detect and remove this content"
          }
        ],
        "removalCriteria": [
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images",
          "Content constitutes sextortion behavior"
        ]
      },
      {
        "id": "meta-ncii-enforcement",
        "reference": null,
        "summary": "Maintains specialized teams and automated systems that detect, remove, and report accounts engaged in sextortion and intimate image abuse to authorities including law enforcement and NCMEC.",
        "quote": "We have specialized teams working on combating sextortion. We have identified patterns associated with this behavior, and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "Report violating content or behavior through platform reporting mechanisms",
            "example": "Use reporting options when encountering sextortion attempts or intimate image abuse",
            "reason": "Enables specialized teams to investigate and take enforcement action"
          }
        ],
        "removalCriteria": [
          "Accounts identified as engaging in sextortion patterns",
          "Content detected by automated systems as violating intimate image policies",
          "Behavior that exploits people through intimate images"
        ]
      },
      {
        "id": "meta-ncii-24-7-review",
        "reference": null,
        "summary": "Reviews reports of nude or sexual photos, videos, or threats to share such content 24/7 in more than 70 languages and takes action on violating content and behavior.",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behavior.",
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
            "description": "Report nude or sexual photos or videos of yourself or threats to share these images",
            "example": "Submit reports through Facebook, Instagram, or Messenger reporting systems",
            "reason": "Enables 24/7 review teams to assess and take action on violations"
          }
        ],
        "removalCriteria": [
          "Nude or sexual photos or videos shared without permission",
          "Threats to share intimate images or videos",
          "Content that violates intimate image policies"
        ]
      },
      {
        "id": "meta-ncii-prevention-messaging",
        "reference": null,
        "summary": "Restricts adults over 18 from starting private chats with teens they're not connected to and limits message requests to text-only until accepted, preventing image sharing in initial contact.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos, or voice notes in message requests until the recipient accepts the request to chat.",
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
            "description": "No user action required - automatic enforcement",
            "example": "System automatically prevents image sharing in message requests",
            "reason": "Proactive measure to prevent sextortion and unwanted intimate content sharing"
          }
        ],
        "removalCriteria": [
          "Adults attempting to send private messages to unconnected teens",
          "Image, video, or voice note content in message requests before acceptance",
          "Attempts to circumvent messaging restrictions"
        ]
      },
      {
        "id": "meta-ncii-teen-protection",
        "reference": null,
        "summary": "Automatically sets teen accounts under 16 to private, prevents unknown users from tagging or mentioning teens, and uses technology to identify and prevent suspicious adults from finding or interacting with teen accounts.",
        "quote": "We automatically set teens' accounts under 16 (and under 18 in certain countries) to private when they join Instagram. We also don't allow people who teens don't follow to tag or mention them, or to include their content in Reels Remixes or Guides by default. We use technology to identify and prevent potentially suspicious adults from finding, following and interacting with teen accounts, and we don't recommend teen accounts to these adults.",
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
            "description": "No user action required - automatic protection measures",
            "example": "System automatically applies privacy settings and prevents suspicious interactions",
            "reason": "Proactive protection against potential predators and unwanted contact"
          }
        ],
        "removalCriteria": [
          "Attempts by non-followers to tag or mention teens",
          "Suspicious adult accounts trying to interact with teen accounts",
          "Recommendations of teen accounts to potentially suspicious adults"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758629156967-1",
    "reference": "META-IP",
    "title": "Meta Intellectual Property Policy",
    "summary": "Detailed copyright and trademark policy including DMCA procedures, reporting forms, and appeal processes.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T12:05:56.967Z",
    "policies": [
      {
        "id": "meta-ip-copyright-infringement",
        "reference": "Copyright infringement section",
        "summary": "Prohibits posting content that infringes someone else's copyrighted work without permission, including photos, videos, music, and other creative works.",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright claim including identification of copyrighted work, identification of infringing material, and contact information",
            "example": "URL to infringing content, description of copyrighted work being infringed",
            "reason": "Required under DMCA procedures to process copyright infringement claims"
          },
          {
            "description": "Proof of copyright ownership or authorization to act on behalf of copyright owner",
            "example": "Documentation showing you own the copyright or are authorized to represent the rights holder",
            "reason": "Only copyright owners or authorized representatives may file copyright reports"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content infringes copyright even if user gave credit to copyright owner",
          "Content infringes copyright even if user included disclaimer about not intending to infringe",
          "Content infringes copyright even if user didn't intend to profit from it",
          "Content infringes copyright even if user legally purchased the content",
          "Content infringes copyright even if user modified the work or added original material",
          "Content infringes copyright even if user found the content available on the internet",
          "Content infringes copyright even if user recorded the content themselves",
          "Content infringes copyright even if others have posted the same content"
        ]
      },
      {
        "id": "meta-ip-unauthorized-streaming",
        "reference": "Copyright and posting content section",
        "summary": "Prohibits posting content that facilitates copyright infringement through unauthorized devices or services, including jailbroken or loaded streaming apps.",
        "quote": "Posting content that facilitates copyright infringement through unauthorized devices or services is also not allowed on Meta platforms.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized streaming device or service being promoted or used",
            "example": "Screenshots or links showing promotion of jailbroken or loaded streaming apps",
            "reason": "To identify content that facilitates copyright infringement through unauthorized means"
          }
        ],
        "removalCriteria": [
          "Content facilitates copyright infringement through unauthorized devices or services",
          "Content promotes or uses jailbroken or loaded streaming apps or services"
        ]
      },
      {
        "id": "meta-ip-repeat-infringer",
        "reference": "Repeat infringer policy section",
        "summary": "Disables accounts or removes pages of users who repeatedly post content that infringes intellectual property rights, with potential loss of features and functionality.",
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
            "description": "Documentation of multiple intellectual property violations by the same account",
            "example": "Record of previous copyright or trademark infringement reports against the account",
            "reason": "To establish pattern of repeat infringement behavior"
          }
        ],
        "removalCriteria": [
          "User repeatedly posts content that infringes intellectual property rights",
          "Multiple violations of copyright or trademark policies by same account",
          "Pattern of intellectual property infringement established"
        ]
      },
      {
        "id": "meta-ip-prompt-removal",
        "reference": "Appealing the removal of content section",
        "summary": "Removes reported infringing content promptly from platforms without contacting the poster first when intellectual property reports are received.",
        "quote": "When we receive a report from a rights owner claiming that content you posted on Facebook or Instagram infringes their intellectual property rights, we may need to promptly remove that content from Facebook without contacting you first.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid intellectual property infringement report from rights owner",
            "example": "Completed copyright or trademark infringement report form",
            "reason": "To initiate prompt removal process for infringing content"
          }
        ],
        "removalCriteria": [
          "Content reported by rights owner as infringing their intellectual property rights",
          "Valid intellectual property infringement claim received through official reporting channels"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal by following up with rights owners directly or filing DMCA counter-notifications for copyright claims. Instructions are provided in removal notifications.",
      "steps": [
        "Receive notification from Meta about content removal with rights owner contact information",
        "Follow up with rights owner directly to try to resolve the issue",
        "For copyright claims, submit DMCA counter-notification if applicable",
        "Follow instructions provided in the removal notification message",
        "Wait for restoration consideration if appeal is successful or rights owner withdraws report"
      ]
    }
  },
  {
    "id": "facebook-new-1758629156967-2",
    "reference": "META-APPEALS",
    "title": "Meta Appeals Process",
    "summary": "Comprehensive appeals system for content decisions, including procedures for challenging removals and account actions.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T12:05:56.967Z",
    "policies": [
      {
        "id": "meta-appeals-content-removal",
        "reference": "Appeals Process",
        "summary": "Provides an appeals process for content removed for policy violations, allowing users to request another review of enforcement decisions",
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
            "example": "Selecting the appeal option after receiving a content removal notification",
            "reason": "To initiate the review process for potentially incorrect enforcement decisions"
          }
        ],
        "removalCriteria": [
          "Content that violates Community Standards",
          "Content with extreme safety concerns such as child exploitation imagery is not eligible for appeal"
        ]
      },
      {
        "id": "meta-appeals-eligibility",
        "reference": "What can be appealed",
        "summary": "Restricts appeals for content with extreme safety concerns while allowing appeals for the vast majority of other violation types",
        "quote": "Today, we offer appeals for the vast majority of violation types on Facebook and Instagram. We don't offer appeals for violations with extreme safety concerns, such as child exploitation imagery.",
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
            "description": "Content must not involve extreme safety concerns",
            "example": "Content that doesn't involve child exploitation imagery",
            "reason": "Extreme safety violations are excluded from the appeals process for protection purposes"
          }
        ],
        "removalCriteria": [
          "Content with extreme safety concerns such as child exploitation imagery",
          "Violations during busy periods may not be reviewed due to capacity limitations"
        ]
      },
      {
        "id": "meta-appeals-reporter",
        "reference": "What can be appealed",
        "summary": "Provides appeals not only for actioned content but also for reported content that was not acted upon",
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
            "description": "User must have reported content that was not acted upon",
            "example": "Content that was reported for policy violations but remained on the platform",
            "reason": "To allow reporters to challenge decisions where no action was taken on reported content"
          }
        ],
        "removalCriteria": [
          "Content that was reported but not acted upon by initial review"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides a multi-stage appeals process where users can request review of content removal decisions. Appeals are processed through human review and technology, with a secondary review process for disputed decisions.",
      "steps": [
        "User receives notification that content has been removed or covered with a warning",
        "User is given option to accept the decision or disagree and request another review",
        "If user chooses to disagree, content is resubmitted for another review",
        "Content remains not visible to other people during review process",
        "If reviewer accepts original decision, content remains off platform",
        "If reviewer disagrees with initial review, content goes to another reviewer",
        "Second reviewer's decision determines final outcome for content visibility"
      ]
    }
  }
],
};
