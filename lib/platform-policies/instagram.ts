import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards",
    "summary": "Comprehensive community standards covering safety, privacy, authenticity, and dignity across Facebook, Instagram, Messenger and Threads, including policies on violence, harassment, adult content, hate speech, and intellectual property.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T14:12:22.753Z",
    "policies": [
      {
        "id": "ig-ncii-policy",
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
        "id": "ig-bullying-policy",
        "reference": "META-CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We prohibit bullying and harassment. Sharing intimate images of someone without their consent is considered a severe form of bullying.",
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
        "id": "ig-privacy-policy",
        "reference": "META-CS-PRIVACY",
        "summary": "Prohibits violations of privacy, including sharing private intimate media or personal information without consent.",
        "quote": "We prohibit violations of privacy. Sharing someone's private, intimate media without their consent is a fundamental breach of privacy.",
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
            "description": "Identification of the specific PII that was shared",
            "reason": "To assess the severity and scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains PII used maliciously",
          "Information is shared without consent and is intended to harass or incite harassment"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "META-CS-IMPERSONATION",
        "summary": "Prohibits impersonating others (individuals, organizations) with an intent to deceive or mislead.",
        "quote": "We prohibit impersonating others (individuals, organizations) with an intent to deceive or mislead.",
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
    "accessTimestamp": "2025-09-23T14:12:22.753Z",
    "policies": [
      {
        "id": "ig-copyright-policy",
        "reference": "IG-TOU-IP",
        "summary": "Prohibits copyright infringement, including unauthorized posting of intimate images owned by the victim or photographer.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
            "description": "A formal DMCA takedown notice submitted through Instagram's copyright form",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership of the content",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content is an original work (photo, video) posted without the copyright owner's permission"
        ]
      },
      {
        "id": "ig-private-information-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
            "description": "Evidence that the information is private or confidential",
            "reason": "To establish that the content violates privacy rights"
          },
          {
            "description": "Proof that you are the person whose private information was shared",
            "reason": "To verify standing to make the complaint"
          },
          {
            "description": "URL(s) of the content containing private information",
            "reason": "To identify the specific content that violates the policy"
          }
        ],
        "removalCriteria": [
          "Content contains private or confidential information shared without the subject's permission"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information about identity.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that someone is impersonating you",
            "reason": "To establish that impersonation is occurring"
          },
          {
            "description": "Proof of your identity",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific account or content that violates the policy"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person without permission",
          "Account provides inaccurate information about the user's identity"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows removal of any content that violates Terms of Use, policies, or Community Standards.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content violates Instagram's Terms of Use or Community Standards",
            "reason": "To establish grounds for content removal"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's Community Standards",
          "Content violates applicable law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows termination or disabling of accounts that violate Terms of Use, Community Standards, or repeatedly infringe intellectual property rights.",
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
            "reason": "To establish grounds for account action"
          },
          {
            "description": "Documentation of repeated intellectual property infringement",
            "reason": "To support termination for repeat copyright violations"
          }
        ],
        "removalCriteria": [
          "Account violates Terms of Use or Community Standards",
          "Account repeatedly infringes intellectual property rights",
          "Account creates risk or legal exposure for Instagram"
        ]
      },
      {
        "id": "ig-deletion-timeframe-policy",
        "reference": "IG-TOU-6",
        "summary": "Provides specific timeframes for content and account deletion processes.",
        "quote": "When you request to delete content or your account, the deletion process will automatically begin no more than 30 days after your request. It may take up to 90 days to delete content after the deletion process begins. While the deletion process for such content is being undertaken, the content is no longer visible to other users, but remains subject to these Terms of Use and our Privacy Policy. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request"
          },
          "removal": {
            "value": 90,
            "unit": "days",
            "description": "Up to 90 days to delete content after deletion process begins, plus up to another 90 days to remove from backups"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Request for content or account deletion",
            "reason": "To initiate the deletion process"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their content or account"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can consult Instagram's Help Center if they believe their account has been terminated in error or want to disable or permanently delete their account.",
      "steps": [
        "Consult Instagram's Help Center for account termination disputes",
        "Follow the process outlined in the Help Center for account recovery or deletion"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-23T14:12:22.753Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires removal of content reported for violations to protect users from harm and maintain platform safety.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Content reported to Meta for violations",
            "example": "Reports of harmful or unlawful behavior",
            "reason": "To enable Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Requires access, preservation, use and sharing of user information in response to legal requests from law enforcement and other authorities, and to prevent harm and promote safety.",
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
            "description": "Valid legal requests such as search warrants, court orders, production orders or subpoenas",
            "example": "Law enforcement search warrant or court order",
            "reason": "Required by law for Meta to comply with legal obligations"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests from authorities",
          "Information required to be disclosed under applicable law",
          "Content that threatens safety, security and integrity of users or the public"
        ]
      },
      {
        "id": "meta-pp-account-compromise",
        "reference": "Section 2 - Account Security",
        "summary": "Prohibits unauthorized access to accounts and requires verification of accounts and activity to detect and prevent security threats and account compromise.",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Investigate suspicious activity, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of suspicious account activity or unauthorized access",
            "example": "Unusual login patterns or account behavior",
            "reason": "To verify legitimate account ownership and detect security threats"
          }
        ],
        "removalCriteria": [
          "Accounts or activity that cannot be verified as legitimate",
          "Suspicious activity indicating potential compromise",
          "Security threats to accounts or the platform"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "Section 3 - Information Sharing on Products",
        "summary": "Regulates how user information is shared on Meta Products, including content shared by others about users and public content visibility.",
        "quote": "Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content.",
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
            "example": "URLs or screenshots of unauthorized sharing",
            "reason": "To identify and address unauthorized information sharing"
          }
        ],
        "removalCriteria": [
          "Content shared by others without proper authorization",
          "Information shared beyond intended audience or privacy settings"
        ]
      },
      {
        "id": "meta-pp-user-rights",
        "reference": "Section 6 - User Rights and Information Management",
        "summary": "Provides users with rights to view, manage, download and delete their information, including tools to control privacy and remove unwanted content.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. View and manage your information, Port, download or delete your information, Delete your information or account.",
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
            "description": "User account verification for information management requests",
            "example": "Account login credentials or identity verification",
            "reason": "To ensure only authorized users can manage their information"
          }
        ],
        "removalCriteria": [
          "User requests for information deletion or account removal",
          "Content that users no longer want associated with their accounts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information and privacy policy matters.",
      "steps": [
        "Contact Meta online at help.meta.com/support/privacy",
        "Alternatively, contact by mail at: Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "For some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Users may also contact their local Data Protection Authority (DPA) directly depending on jurisdiction"
      ]
    }
  },
  {
    "id": "instagram-new-1758636742753-0",
    "reference": "IG-COPYRIGHT",
    "title": "Instagram Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA procedures, reporting copyright infringement, counter-notifications, and repeat infringer policies.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T14:12:22.753Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "IG-COPYRIGHT",
        "summary": "Prohibits posting content that violates someone else's copyright and provides mechanisms for copyright holders to report infringement",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form. These articles provide information about copyrights, including how you can protect your own copyrighted works and avoid infringing the copyrights of others. We also provide information about how Instagram and Threads address reported copyright infringement.",
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
            "description": "Complete copyright infringement report form",
            "example": "Use Instagram's dedicated copyright reporting form",
            "reason": "Required to initiate the copyright infringement review process"
          },
          {
            "description": "Information specified in copyright report requirements",
            "example": "Details about the copyrighted work and infringement",
            "reason": "Necessary to evaluate the validity of the copyright claim"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright holder",
          "Valid copyright infringement report is submitted through proper channels"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "IG-COPYRIGHT",
        "summary": "Takes action against accounts that repeatedly post content violating intellectual property rights",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
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
            "description": "Pattern of multiple intellectual property violations",
            "example": "Multiple copyright infringement reports against the same account",
            "reason": "To identify accounts that systematically violate intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Account has repeatedly posted content that violates intellectual property rights",
          "Multiple valid intellectual property infringement reports have been filed"
        ]
      },
      {
        "id": "ig-copyright-dmca-process",
        "reference": "IG-COPYRIGHT",
        "summary": "Processes copyright infringement reports under the Digital Millennium Copyright Act (DMCA) and provides counter-notification procedures",
        "quote": "How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications. How to contact Threads or Instagram's Digital Millennium Copyright Act (DMCA) designated agent",
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
            "description": "DMCA-compliant copyright infringement notice",
            "example": "Formal DMCA takedown notice to designated agent",
            "reason": "Required under US copyright law for processing copyright claims"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice is received by designated agent",
          "Content is identified as infringing copyrighted material"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram provides counter-notification procedures under DMCA and allows users to retract intellectual property reports they have submitted",
      "steps": [
        "Submit DMCA counter-notification if content was wrongly removed",
        "Use the retraction process to withdraw intellectual property reports you previously submitted",
        "Review information about what happens when content is removed due to copyright reports"
      ]
    }
  },
  {
    "id": "instagram-new-1758636742753-1",
    "reference": "IG-NCII",
    "title": "Non-Consensual Intimate Images Support",
    "summary": "Support resources and reporting mechanisms for victims of non-consensual intimate image sharing.",
    "url": "https://help.instagram.com/1769410010008691",
    "accessTimestamp": "2025-09-23T14:12:22.753Z",
    "policies": [
      {
        "id": "ig-ncii-reporting",
        "reference": "Report the post",
        "summary": "Prohibits intimate photos that violate Community Standards and provides anonymous reporting mechanism for non-consensual intimate imagery",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
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
            "description": "Screenshot of the post for reporting purposes",
            "example": "Screenshot showing the non-consensual intimate image or threatening message",
            "reason": "To provide a record of the violation for review and potential legal action"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Images are intimate photos shared without consent",
          "Content involves threats to share private materials",
          "Content involves extortion or sextortion attempts"
        ]
      },
      {
        "id": "ig-ncii-removal-process",
        "reference": "Report the post",
        "summary": "Requires specially trained Community Operations team to review reported intimate images and remove content that violates Community Standards, with photo-matching technology to prevent re-sharing",
        "quote": "After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards. We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
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
            "description": "Report submitted through built-in reporting system",
            "example": "Using Instagram's anonymous reporting feature for the specific post",
            "reason": "To initiate review by specially trained Community Operations team"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards upon review by trained representatives",
          "Images are determined to be non-consensual intimate imagery"
        ]
      },
      {
        "id": "ig-ncii-sextortion",
        "reference": "Report the post",
        "summary": "Prohibits threatening to share private content, extortion for money, and coercive behavior involving private materials",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
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
            "description": "Report of the threatening profile through built-in reporting system",
            "example": "Screenshots of threatening messages or extortion attempts",
            "reason": "To document sextortion or coercive behavior for platform review"
          }
        ],
        "removalCriteria": [
          "User is threatening to share private content without consent",
          "User is demanding money in exchange for not sharing private content",
          "User is coercing victim to perform uncomfortable actions using private content as leverage"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758636742753-2",
    "reference": "IG-IP",
    "title": "Instagram Intellectual Property Policy",
    "summary": "General intellectual property protection policies covering copyright, trademark, and other IP rights.",
    "url": "https://help.instagram.com/535503073130320",
    "accessTimestamp": "2025-09-23T14:12:22.753Z",
    "policies": [
      {
        "id": "ig-ip-copyright",
        "reference": "Copyright Section",
        "summary": "Prohibits posting content that violates someone else's copyright, including original works of authorship such as books, music, film, and art",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. Copyright is a legal right that seeks to protect original works of authorship (example: books, music, film, art). Generally, copyright protects original expression such as words or images.",
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
            "description": "Evidence of copyright ownership or authorization",
            "example": "Original creation documentation, registration certificates, or proof of authorship",
            "reason": "To establish legitimate copyright claim and ownership of the protected work"
          },
          {
            "description": "Identification of the infringing content",
            "example": "URL or specific location of the unauthorized content on Instagram",
            "reason": "To locate and assess the allegedly infringing material for removal"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content uses original expression such as words or images without authorization",
          "Content infringes on original works of authorship including books, music, film, or art"
        ]
      },
      {
        "id": "ig-ip-trademark",
        "reference": "Trademark Section",
        "summary": "Prohibits posting content that violates someone else's trademark rights, including unauthorized use of words, slogans, symbols or designs that distinguish products or services",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. A trademark is a word, slogan, symbol or design (example: brand name, logo) that distinguishes the products or services offered by one person, group or company from another. Generally, trademark law seeks to prevent confusion among consumers about who provides or is affiliated with a product or service.",
        "contentTypes": [
          "personal",
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
            "description": "Evidence of trademark ownership or registration",
            "example": "Trademark registration certificate, proof of commercial use, or documentation of trademark rights",
            "reason": "To establish legitimate trademark claim and prevent consumer confusion"
          },
          {
            "description": "Identification of the infringing content",
            "example": "URL or specific location of the unauthorized trademark use on Instagram",
            "reason": "To locate and assess the allegedly infringing trademark usage for removal"
          },
          {
            "description": "Evidence of potential consumer confusion",
            "example": "Documentation showing how the unauthorized use could confuse consumers about product or service affiliation",
            "reason": "To demonstrate likelihood of confusion which is central to trademark protection"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's trademark rights",
          "Content uses protected words, slogans, symbols or designs without authorization",
          "Content creates confusion about who provides or is affiliated with a product or service",
          "Content uses brand names or logos that distinguish another's products or services"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
