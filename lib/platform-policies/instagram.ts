import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "instagram-new-1758658574677-0",
    "reference": "IG-CS-001",
    "title": "Meta Community Standards",
    "summary": "Unified community standards that apply to Facebook, Instagram, Messenger and Threads, covering all content policies including non-consensual intimate imagery, harassment, bullying, violence, privacy violations, and content removal procedures",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and threats to share intimate content",
        "quote": "Adult Sexual Exploitation",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves adult sexual exploitation",
          "Non-consensual sharing of intimate imagery",
          "Threats to share intimate content"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment that degrades others and violates dignity",
        "quote": "Bullying and Harassment",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content constitutes bullying or harassment",
          "Content degrades or targets individuals",
          "Content violates dignity of others"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects personal privacy and information",
        "quote": "Privacy Violations",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates personal privacy",
          "Unauthorized sharing of personal information",
          "Content shared without consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and impersonation to maintain authenticity",
        "quote": "Authentic Identity Representation",
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
          "Content misrepresents identity",
          "Account or content involves impersonation",
          "False representation of who someone is"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Prohibits compromised accounts and maintains account security",
        "quote": "Account Integrity",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account has been compromised",
          "Unauthorized access to account",
          "Account security has been breached"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior and misrepresentation to ensure genuine interactions",
        "quote": "Inauthentic Behavior",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Behavior is inauthentic or deceptive",
          "Misrepresentation of identity or purpose",
          "Coordinated inauthentic activity"
        ]
      },
      {
        "id": "meta-cs-third-party-ip",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property rights including unauthorized use of personal images",
        "quote": "Third-Party Intellectual Property Infringement",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content infringes intellectual property rights",
          "Unauthorized use of copyrighted material",
          "Use of content without permission from rights holder"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "DIGNITY",
        "summary": "Requires respect for dignity of all people and prohibits harassment or degradation",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content fails to respect dignity of others",
          "Content harasses or degrades individuals",
          "Content violates equal dignity and rights"
        ]
      },
      {
        "id": "meta-cs-privacy-principle",
        "reference": "PRIVACY",
        "summary": "Protects personal privacy and information, ensuring freedom to control sharing",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates personal privacy",
          "Content shared without individual's choice or consent",
          "Content compromises personal information protection"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758658574677-1",
    "reference": "IG-TOS-001",
    "title": "Instagram Terms of Use",
    "summary": "Legal agreement outlining user obligations, content licensing, intellectual property rights, and platform rules for Instagram users",
    "url": "https://help.instagram.com/termsofuse",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "ig-tos-private-confidential-info",
        "reference": "Section 4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains someone else's private or confidential information",
          "Information was posted without permission from the person depicted"
        ]
      },
      {
        "id": "ig-tos-impersonation",
        "reference": "Section 4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information",
        "quote": "You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User is impersonating someone they are not",
          "Account was created for someone else without express permission"
        ]
      },
      {
        "id": "ig-tos-intellectual-property-rights",
        "reference": "Section 4.2",
        "summary": "Prohibits violating someone else's intellectual property rights including copyright infringement",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods). You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent you own or have obtained all necessary rights to the content you post or share.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates intellectual property rights",
          "User does not own or have necessary rights to the posted content",
          "Content infringes copyright without applicable legal exceptions"
        ]
      },
      {
        "id": "ig-tos-content-removal-authority",
        "reference": "Section 6",
        "summary": "Platform can remove any content that violates Terms of Use, policies, or Community Standards",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Terms of Use",
          "Content violates platform policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-tos-account-termination",
        "reference": "Section 6",
        "summary": "Platform can terminate accounts that violate Terms of Use, policies, or repeatedly infringe intellectual property rights",
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
        "timeframes": {
          "response": {
            "value": null,
            "unit": "immediate",
            "description": "Account termination can occur immediately"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User creates risk or legal exposure for the platform",
          "User violates Terms of Use or policies including Community Standards",
          "User repeatedly infringes other people's intellectual property rights",
          "Termination is permitted or required by law"
        ]
      },
      {
        "id": "ig-tos-content-deletion-process",
        "reference": "Section 6",
        "summary": "Content deletion process begins within 30 days of request and may take up to 90 days to complete",
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
            "description": "Deletion process begins within 30 days of request"
          },
          "removal": {
            "value": 90,
            "unit": "days",
            "description": "Content deletion may take up to 90 days after process begins, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests content or account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult Instagram Help Center if they believe their account was terminated in error or want to disable/delete their account",
      "steps": [
        "Consult the Instagram Help Center",
        "Follow the process for account termination disputes or account deletion requests"
      ]
    }
  },
  {
    "id": "instagram-new-1758658574677-2",
    "reference": "IG-PP-001",
    "title": "Instagram Data Policy",
    "summary": "Privacy policy explaining how Instagram collects, uses, and shares user data and personal information",
    "url": "https://help.instagram.com/155833707900388",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "ig-dp-harmful-conduct",
        "reference": "Section II - Promote safety, integrity and security",
        "summary": "Prohibits harmful conduct and enables detection and prevention of violations of terms or policies",
        "quote": "We use the information we have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences, maintain the integrity of our Products, and promote safety and security on and off of Meta Products. For example, we use data we have to investigate suspicious activity or violations of our terms or policies, or to detect when someone needs help.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Suspicious activity detected",
          "Violations of terms or policies identified",
          "Harmful conduct verified"
        ]
      },
      {
        "id": "ig-dp-content-reporting",
        "reference": "Section III - Content others share or reshare about you",
        "summary": "Provides mechanism to report uncomfortable content shared by others about you",
        "quote": "People can also use our Products to create and share content about you with the audience they choose. For example, people can share a photo of you in a Story, mention or tag you at a location in a post, or share information about you in their posts or messages. If you are uncomfortable with what others have shared about you on our Products, you can learn how to report the content.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shared about you without consent",
          "User reports discomfort with shared content"
        ]
      },
      {
        "id": "ig-dp-legal-response",
        "reference": "Section VI - How do we respond to legal requests or prevent harm",
        "summary": "Enables access, preservation and sharing of information to prevent fraud, unauthorized use, violations, and harmful or illegal activity",
        "quote": "We access, preserve and share your information with regulators, law enforcement or others: In response to a legal request (like a search warrant, court order or subpoena) if we have a good faith belief that the law requires us to do so... When we have a good-faith belief it is necessary to: detect, prevent and address fraud, unauthorized use of the Products, violations of our terms or policies, or other harmful or illegal activity; to protect ourselves (including our rights, property or Products), you or others, including as part of investigations or regulatory inquiries; or to prevent death or imminent bodily harm.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Legal request received with good faith belief law requires response",
          "Fraud detected or prevented",
          "Unauthorized use of Products identified",
          "Violations of terms or policies found",
          "Harmful or illegal activity detected",
          "Protection of rights, property or Products needed",
          "Prevention of death or imminent bodily harm required"
        ]
      },
      {
        "id": "ig-dp-account-deletion",
        "reference": "Section V - How can I manage or delete information about me",
        "summary": "Provides ability to delete account and posted content, with retention of information shared by others",
        "quote": "When you delete your account, we delete things you have posted, such as your photos and status updates, and you won't be able to recover that information later. Information that others have shared about you isn't part of your account and won't be deleted.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests account deletion",
          "Content was posted by the account holder"
        ]
      },
      {
        "id": "ig-dp-extended-preservation",
        "reference": "Section VI - Information preservation",
        "summary": "Retains information for extended periods when subject to legal requests, investigations, or to prevent repeat violations",
        "quote": "Information we receive about you (including financial transaction data related to purchases made on our Products) can be accessed and preserved for an extended period when it is the subject of a legal request or obligation, governmental investigation, or investigations of possible violations of our terms or policies, or otherwise to prevent harm. We also retain information from accounts disabled for terms violations for at least a year to prevent repeat abuse or other term violations.",
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
            "value": 1,
            "unit": "years",
            "description": "Information retained from disabled accounts for at least a year to prevent repeat violations"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Subject of legal request or obligation",
          "Under governmental investigation",
          "Investigation of possible terms or policy violations",
          "Necessary to prevent harm",
          "Account disabled for terms violations"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758658574677-3",
    "reference": "IG-CR-001",
    "title": "Instagram Copyright Policy",
    "summary": "Comprehensive policy covering copyright infringement reporting, DMCA takedown procedures, counter-notifications, and intellectual property protection on Instagram",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "ig-cr-001",
        "reference": "Copyright Policy",
        "summary": "Prohibits posting content that violates copyright law and provides mechanisms for reporting copyright infringement",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form.",
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
            "description": "Copyright infringement report form must be completed",
            "example": "Use the provided reporting form at instagram.com/help/ipreporting/report/copyright/",
            "reason": "Required by Instagram to process copyright infringement claims"
          },
          {
            "description": "Information demonstrating copyright ownership",
            "example": "Evidence that you own the copyright in the work being infringed",
            "reason": "To establish legal standing to make a copyright claim"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid copyright infringement report has been submitted",
          "Reporter has legal standing as copyright owner or authorized representative"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram processes DMCA counter-notifications for copyright claims and allows users to retract intellectual property reports",
      "steps": [
        "Submit a DMCA counter-notification if you believe content was wrongly removed",
        "Contact Instagram's DMCA designated agent for copyright-related appeals",
        "Retract an intellectual property report if you submitted it in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758658574677-4",
    "reference": "IG-NCII-001",
    "title": "Non-Consensual Intimate Images Support",
    "summary": "Support page providing guidance for users whose intimate photos have been shared without permission, including reporting procedures and resources",
    "url": "https://help.instagram.com/1769410010008691",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "ig-ncii-001",
        "reference": "Non-Consensual Intimate Images Support",
        "summary": "Prohibits intimate photos that violate Community Standards and provides removal through reporting mechanisms",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Screenshot or record of the post for reporting purposes",
            "example": "Screenshot of the non-consensual intimate image post",
            "reason": "Documentation needed for reporting and potential legal action"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Content is reported through built-in reporting options"
        ]
      },
      {
        "id": "ig-ncii-002",
        "reference": "Non-Consensual Intimate Images Support",
        "summary": "Prohibits threats to share private content including messages, photos, and videos, and requests for money or uncomfortable actions",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the threatening profile through built-in reporting options",
            "example": "Profile making threats to share private content",
            "reason": "Allows specially trained representatives to review and take action"
          }
        ],
        "removalCriteria": [
          "Threats to share private content including messages, photos, videos",
          "Requests for money in connection with private content",
          "Requests to perform uncomfortable actions"
        ]
      },
      {
        "id": "ig-ncii-003",
        "reference": "Non-Consensual Intimate Images Support",
        "summary": "Uses photo-matching technology to prevent future sharing of removed intimate images across Instagram, Facebook and Messenger",
        "quote": "We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Image has been previously removed for violating Community Standards",
          "Photo-matching technology identifies attempts to reshare the content"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758658574677-5",
    "reference": "IG-HAR-001",
    "title": "Harassment and Bullying Reporting",
    "summary": "Policy and procedures for reporting harassment, bullying, and abusive behavior on Instagram",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "ig-har-bullying-harassment",
        "reference": null,
        "summary": "Prohibits accounts established with intent to bully or harass another person and photos or comments intended to bully or harass someone",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account established with intent to bully or harass another person",
          "Photo intended to bully or harass someone",
          "Comment intended to bully or harass someone"
        ]
      },
      {
        "id": "ig-har-impersonation",
        "reference": null,
        "summary": "Prohibits pretending to be another person on Instagram",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Someone pretending to be you or someone else"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758658574677-6",
    "reference": "IG-IMP-001",
    "title": "Impersonation Policy and Reporting",
    "summary": "Policy covering impersonation violations and procedures for reporting accounts that impersonate individuals or entities",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "ig-imp-001",
        "reference": null,
        "summary": "Prohibits creating accounts that impersonate other individuals and provides reporting mechanisms for victims",
        "quote": "Instagram takes safety seriously. If someone created an Instagram account pretending to be you, you can report it to us.",
        "contentTypes": [
          "personal",
          "intimate",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report must be submitted through Instagram's reporting system",
            "example": "Use the in-app reporting feature or desktop form",
            "reason": "Required for Instagram to process impersonation claims"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Account was created to impersonate someone else"
        ]
      },
      {
        "id": "ig-imp-002",
        "reference": null,
        "summary": "Maintains anonymity of reporters except in intellectual property infringement cases",
        "quote": "Keep in mind that your report is anonymous, except if you're reporting an intellectual property infringement. The account you reported won't see who reported them.",
        "contentTypes": [
          "personal",
          "intimate",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Report submitted through proper channels",
          "Exception applies for intellectual property infringement cases"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758658574677-7",
    "reference": "IG-DMCA-001",
    "title": "Copyright Infringement Reporting",
    "summary": "Detailed procedures for reporting copyright infringement through Instagram's DMCA takedown process",
    "url": "https://help.instagram.com/454951664593304",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "ig-dmca-copyright-infringement",
        "reference": "DMCA Copyright Reporting",
        "summary": "Prohibits copyright infringement and provides mechanisms for reporting unauthorized use of copyrighted content",
        "quote": "Report copyright infringement on Instagram or Threads",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
            "description": "Information required to include in a copyright report",
            "example": "Specific information as outlined in Instagram's copyright reporting requirements",
            "reason": "To process DMCA takedown requests in accordance with copyright law"
          },
          {
            "description": "URL link to the infringing photo or video",
            "example": "Direct link to the content on Instagram or Threads",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content must constitute copyright infringement",
          "Proper DMCA notice must be submitted with required information",
          "Content must be accessible via URL on Instagram or Threads platform"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "DMCA counter-notification process available for users whose content was removed due to copyright reports",
      "steps": [
        "Submit a DMCA counter-notification to Instagram or Threads' designated agent",
        "Instagram and Threads will process the counter-notification according to DMCA procedures",
        "Information from copyright reports may be shared with the person who posted the removed content"
      ]
    }
  },
  {
    "id": "instagram-new-1758658574677-8",
    "reference": "US-TAKE-001",
    "title": "TAKE IT DOWN Act",
    "summary": "Federal law criminalizing non-consensual intimate imagery publication and requiring platforms to remove such content within 48 hours of notice",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T20:16:14.677Z",
    "policies": [
      {
        "id": "take-it-down-authentic-adults",
        "reference": "Section 2(h)(2)(A)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causes harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is not a minor if— (i) the intimate visual depiction was obtained or created under circumstances in which the person knew or reasonably should have known the identifiable individual had a reasonable expectation of privacy; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the intimate visual depiction— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intimate visual depiction was obtained or created under circumstances with reasonable expectation of privacy",
          "Content was not voluntarily exposed by the individual in a public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-authentic-minors",
        "reference": "Section 2(h)(2)(B)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content depicts an identifiable individual who is a minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-deepfake-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causes harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Digital forgery was published without consent of the identifiable individual",
          "Content was not voluntarily exposed by the individual in a public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-deepfake-minors",
        "reference": "Section 2(h)(3)(B)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content depicts a digital forgery of an identifiable individual who is a minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-platform-removal",
        "reference": "Section 3(a)(3)",
        "summary": "Requires covered platforms to remove nonconsensual intimate visual depictions within 48 hours of receiving a valid removal request and make reasonable efforts to identify and remove identical copies",
        "quote": "Upon receiving a valid removal request from an identifiable individual (or an authorized person acting on behalf of such individual) using the process described in paragraph (1)(A)(ii), a covered platform shall, as soon as possible, but not later than 48 hours after receiving such request— (A) remove the intimate visual depiction; and (B) make reasonable efforts to identify and remove any known identical copies of such depiction.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Platform must remove content as soon as possible, but not later than 48 hours after receiving valid removal request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Physical or electronic signature of the identifiable individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify the identity of the person making the request"
          },
          {
            "description": "Identification of and information reasonably sufficient to locate the intimate visual depiction",
            "example": "URL or specific location of the content on the platform",
            "reason": "To enable the platform to locate the specific content for removal"
          },
          {
            "description": "Brief statement of good faith belief that the intimate visual depiction is not consensual",
            "example": "Statement explaining why the content was published without consent",
            "reason": "To establish that the content violates the platform's policies"
          },
          {
            "description": "Contact information sufficient to enable platform communication",
            "example": "Email address or phone number",
            "reason": "To allow the platform to communicate about the removal request"
          }
        ],
        "removalCriteria": [
          "Valid removal request received from identifiable individual or authorized person",
          "Content includes depiction of the identifiable individual",
          "Content was published without consent of the identifiable individual"
        ]
      },
      {
        "id": "take-it-down-threats-authentic",
        "reference": "Section 2(h)(6)(A)",
        "summary": "Prohibits intentionally threatening to commit offenses involving authentic intimate visual depictions for purposes of intimidation, coercion, extortion, or creating mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (2) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be punished as provided in paragraph (4).",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intentional threat to commit offense involving authentic intimate visual depictions",
          "Threat made for purpose of intimidation, coercion, extortion, or creating mental distress"
        ]
      },
      {
        "id": "take-it-down-threats-deepfake",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to commit offenses involving digital forgeries (deepfakes) for purposes of intimidation, coercion, extortion, or creating mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both. Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intentional threat to commit offense involving digital forgeries",
          "Threat made for purpose of intimidation, coercion, extortion, or creating mental distress"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
