import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "instagram-new-1758653299647-0",
    "reference": "INSTA-CS-001",
    "title": "Community Standards",
    "summary": "Meta's unified Community Standards that apply to Facebook, Instagram, Messenger and Threads, outlining what content is and isn't allowed on these platforms. Covers safety, privacy, dignity, authenticity, and content policies including non-consensual intimate imagery, harassment, violence, and intellectual property.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T18:48:19.647Z",
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
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content constitutes bullying or harassment",
          "Content degrades or harasses others",
          "Content violates dignity of individuals"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects personal privacy and information",
        "quote": "Privacy Violations",
        "contentTypes": [
          "private",
          "personal",
          "intimate",
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
          "Content violates personal privacy",
          "Unauthorized sharing of personal information",
          "Content shared without consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and impersonation",
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
        "summary": "Prohibits compromised accounts and unauthorized access",
        "quote": "Account Integrity",
        "contentTypes": [
          "personal",
          "intimate",
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
          "Content posted without authorization"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior and misrepresentation",
        "quote": "Inauthentic Behavior",
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
          "Content involves inauthentic behavior",
          "Misrepresentation of identity or actions",
          "Deceptive practices"
        ]
      },
      {
        "id": "meta-cs-third-party-ip",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property rights including personal images",
        "quote": "Third-Party Intellectual Property Infringement",
        "contentTypes": [
          "personal",
          "intimate",
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
          "Content infringes intellectual property rights",
          "Unauthorized use of copyrighted material",
          "Use of content without permission"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "DIGNITY",
        "summary": "Requires respect for dignity of others and prohibits harassment or degradation",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
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
        "summary": "Protects personal privacy and information, ensuring freedom to choose how and when to share",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
        "contentTypes": [
          "private",
          "personal",
          "intimate",
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
          "Content violates personal privacy",
          "Content shared without individual's choice or consent",
          "Content compromises privacy protection"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758653299647-1",
    "reference": "INSTA-TOS-001",
    "title": "Instagram Terms of Use",
    "summary": "Instagram's Terms of Use governing user rights, responsibilities, content licensing, and platform usage. Includes provisions on intellectual property, content ownership, and user conduct.",
    "url": "https://help.instagram.com/581066165581870/",
    "accessTimestamp": "2025-09-23T18:48:19.647Z",
    "policies": [
      {
        "id": "insta-tos-private-info",
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
          "Information was posted without the person's permission"
        ]
      },
      {
        "id": "insta-tos-impersonation",
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
          "User is impersonating someone or something they are not",
          "Account was created for someone else without their express permission"
        ]
      },
      {
        "id": "insta-tos-copyright-infringement",
        "reference": "Section 4.2",
        "summary": "Prohibits violating intellectual property rights including copyright infringement",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods). You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent you own or have obtained all necessary rights to the content you post or share.",
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
          "Content violates someone else's intellectual property rights",
          "User does not own or have necessary rights to the posted content",
          "Content constitutes copyright infringement"
        ]
      },
      {
        "id": "insta-tos-content-removal",
        "reference": "Section 6",
        "summary": "Allows removal of content that violates Terms of Use or policies",
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
          "response": null,
          "removal": {
            "value": 30,
            "unit": "days",
            "description": "Deletion process will automatically begin no more than 30 days after request"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Terms of Use",
          "Content violates Instagram policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "insta-tos-account-termination",
        "reference": "Section 6",
        "summary": "Allows account termination for Terms violations or policy breaches",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User creates risk or legal exposure for Instagram",
          "User violates Terms of Use or policies including Community Standards",
          "User repeatedly infringes other people's intellectual property rights",
          "Action is permitted or required by law"
        ]
      },
      {
        "id": "insta-tos-reporting-misuse",
        "reference": "Section 4.2",
        "summary": "Prohibits interfering with service operation including misusing reporting channels",
        "quote": "You can't do anything to interfere with or impair the intended operation of the Service. This includes misusing any reporting, dispute, or appeals channel, such as by making fraudulent or groundless reports or appeals.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User interferes with or impairs the intended operation of the Service",
          "User misuses reporting, dispute, or appeals channels",
          "User makes fraudulent or groundless reports or appeals"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal account termination decisions and request account restoration through Instagram's Help Center",
      "steps": [
        "If you believe your account has been terminated in error, consult Instagram Help Center",
        "Submit appeal through available channels",
        "Instagram will review the appeal decision"
      ]
    }
  },
  {
    "id": "instagram-new-1758653299647-2",
    "reference": "INSTA-COPY-001",
    "title": "Copyright Policy",
    "summary": "Instagram's comprehensive copyright policy covering DMCA procedures, copyright infringement reporting, counter-notifications, and repeat infringer policies. Includes information on fair use and intellectual property protection.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T18:48:19.647Z",
    "policies": [
      {
        "id": "insta-copy-001-copyright-infringement",
        "reference": "Copyright Policy",
        "summary": "Prohibits posting content that violates someone else's copyright, including personal images and videos shared without permission",
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
            "reason": "Required for Instagram to process copyright violation claims"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid copyright infringement report has been submitted"
        ]
      },
      {
        "id": "insta-copy-001-repeat-violations",
        "reference": "Copyright and Posting Content on Instagram",
        "summary": "Prohibits repeatedly posting content that violates someone else's intellectual property rights, with consequences for repeat offenders",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
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
            "description": "Documentation of multiple intellectual property violations",
            "example": "Evidence of repeated copyright infringement by the same account",
            "reason": "To establish pattern of violations for enforcement action"
          }
        ],
        "removalCriteria": [
          "Multiple instances of intellectual property rights violations",
          "Pattern of repeated infringing behavior"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram processes DMCA counter-notifications and allows users to retract intellectual property reports they have submitted",
      "steps": [
        "Submit a DMCA counter-notification if content was wrongly removed",
        "Contact Instagram's DMCA designated agent for copyright disputes",
        "Retract an intellectual property report if submitted in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758653299647-3",
    "reference": "INSTA-COPY-002",
    "title": "Reporting Copyright Infringements",
    "summary": "Detailed procedures for reporting copyright infringement on Instagram, including DMCA takedown process, required information, and what happens after submission of a copyright report.",
    "url": "https://help.instagram.com/454951664593304",
    "accessTimestamp": "2025-09-23T18:48:19.647Z",
    "policies": [
      {
        "id": "insta-copy-002-copyright",
        "reference": "DMCA Copyright Policy",
        "summary": "Prohibits posting content that infringes on others' copyright, including personal images shared without permission",
        "quote": "Report copyright infringement on Instagram or Threads",
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
            "description": "Information required to include in a copyright report to Instagram or Threads",
            "example": "URL link to the photo or video on Instagram or Threads",
            "reason": "To identify and locate the specific infringing content for removal"
          }
        ],
        "removalCriteria": [
          "Content must be reported for copyright infringement",
          "Report must include required information as specified by platform guidelines"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "DMCA counter-notification process available for content removed due to copyright reports",
      "steps": [
        "Submit a DMCA counter-notification to Instagram or Threads' designated agent",
        "Platform processes the counter-notification according to DMCA procedures"
      ]
    }
  },
  {
    "id": "instagram-new-1758653299647-4",
    "reference": "INSTA-NCII-001",
    "title": "Intimate image abuse and sextortion",
    "summary": "Meta's policy and resources addressing non-consensual intimate images (NCII), sextortion, and intimate image abuse. Covers prevention measures, reporting mechanisms, and support for victims.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T18:48:19.647Z",
    "policies": [
      {
        "id": "meta-ncii-001",
        "reference": "Meta policies",
        "summary": "Prohibits sharing or threatening to share intimate images without consent",
        "quote": "Sharing—or threatening to share—intimate images without consent is against Meta policies.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves intimate images",
          "Images are shared without consent",
          "Content involves threats to share intimate images"
        ]
      },
      {
        "id": "meta-sextortion-001",
        "reference": "Meta policies",
        "summary": "Prohibits sextortion behavior including threats to reveal intimate images to force unwanted actions",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something you don't want to do. Sharing—or threatening to share—intimate images without consent is against Meta policies.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves threats to reveal intimate images",
          "Threats are made to force unwanted actions",
          "Content involves extortion or coercion using intimate images"
        ]
      },
      {
        "id": "meta-exploitation-001",
        "reference": "Our policies and enforcement",
        "summary": "Prohibits content or behavior that exploits people",
        "quote": "We have strict rules against content or behavior that exploits people, including sharing or threatening to share someone's intimate images.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content exploits people",
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images"
        ]
      },
      {
        "id": "meta-private-images-001",
        "reference": "How to report threats and intimate images",
        "summary": "Prohibits sharing private intimate images without permission and prevents resharing",
        "quote": "You can report nude or sexual photos or videos of yourself or threats to share these images or videos to our apps or technologies to prevent them from being reshared.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Teams review reports 24/7 in more than 70 languages"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report of the content through platform reporting mechanisms",
            "example": "Using Facebook, Instagram, or Messenger reporting tools",
            "reason": "To identify and remove violating content and prevent resharing"
          }
        ],
        "removalCriteria": [
          "Content contains intimate images shared without permission",
          "Content involves threats to share intimate images",
          "Content violates platform policies on intimate imagery"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758653299647-5",
    "reference": "INSTA-APPEAL-001",
    "title": "Appeal Instagram's content decision to the Oversight Board",
    "summary": "Process for appealing Instagram's content moderation decisions to the independent Oversight Board for review of challenging content decisions.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-23T18:48:19.647Z",
    "policies": [],
    "appealProcess": {
      "url": "https://help.instagram.com/675885993348720",
      "summary": "Two-stage appeal process where users must first request a review through Instagram's internal process, then can appeal to the Oversight Board if still unsatisfied with the decision after two reviews.",
      "steps": [
        "First go through the request a review process for your content or content you reported",
        "If Instagram has reviewed your content twice and you still disagree with the decision, you may be eligible to appeal to the Oversight Board",
        "Submit your appeal to the Oversight Board within 15 days of the decision",
        "The Oversight Board will decide whether to review your appeal (they only select a certain number of eligible appeals)",
        "Check your appeal status on the Oversight Board's website using your reference number"
      ]
    }
  },
  {
    "id": "instagram-new-1758653299647-6",
    "reference": "US-TAKEITDOWN-001",
    "title": "TAKE IT DOWN Act",
    "summary": "Federal legislation signed into law in May 2025 that criminalizes publication of non-consensual intimate imagery (NCII) and requires platforms to remove such content within 48 hours of notice from victims. Applies to both authentic and AI-generated intimate images.",
    "url": "https://rainn.org/federal-legislation/take-it-down-act/",
    "accessTimestamp": "2025-09-23T18:48:19.647Z",
    "policies": [
      {
        "id": "takeitdown-ncii-criminal",
        "reference": "Key Provisions - Section 1",
        "summary": "Criminalizes the knowing sharing or threatening to share non-consensual intimate images, including AI-generated images that depict real people",
        "quote": "Makes it a federal crime to knowingly share or threaten to share NCII, including AI-generated images that depict real people",
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
          "Content constitutes non-consensual intimate images",
          "Content includes AI-generated images depicting real people",
          "Content was knowingly shared without consent"
        ]
      },
      {
        "id": "takeitdown-consent-clarification",
        "reference": "Key Provisions - Section 1",
        "summary": "Clarifies that consent to create an image does not constitute consent to share it",
        "quote": "Clarifies that consent to create an image does not mean consent to share it",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Image was shared without explicit consent for distribution",
          "Original consent was limited to creation only"
        ]
      },
      {
        "id": "takeitdown-platform-removal",
        "reference": "Key Provisions - Section 2",
        "summary": "Requires websites and online platforms to remove non-consensual intimate images within 48 hours of a survivor's verified request",
        "quote": "Requires websites and online platforms to remove NCII within 48 hours of a survivor's verified request",
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
            "description": "Platforms must remove NCII within 48 hours of verified request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Verified request from survivor",
            "example": "Identity verification and confirmation of non-consent",
            "reason": "To ensure legitimate takedown requests and prevent abuse"
          }
        ],
        "removalCriteria": [
          "Content constitutes non-consensual intimate images",
          "Request is verified as coming from the depicted person or authorized representative"
        ]
      },
      {
        "id": "takeitdown-duplicate-removal",
        "reference": "Key Provisions - Section 2",
        "summary": "Platforms must make reasonable efforts to remove duplicates or reposts of non-consensual intimate images",
        "quote": "Platforms must also make reasonable efforts to remove duplicates or reposts",
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
          "Content is a duplicate or repost of previously reported NCII",
          "Platform can reasonably identify content as duplicate through available means"
        ]
      },
      {
        "id": "takeitdown-good-faith-protection",
        "reference": "Key Provisions - Section 3",
        "summary": "Protects medical professionals, law enforcement, and others who disclose non-consensual intimate images responsibly and ethically",
        "quote": "Shields medical professionals, law enforcement, and others who disclose NCII responsibly and ethically",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Disclosure is made by authorized professionals",
          "Disclosure is conducted responsibly and ethically",
          "Disclosure serves legitimate professional or legal purposes"
        ]
      },
      {
        "id": "takeitdown-free-speech-protection",
        "reference": "Key Provisions - Section 4",
        "summary": "Protects journalistic, artistic, and lawful speech under the First Amendment while targeting only the knowing publication of non-consensual intimate images",
        "quote": "Targets only the knowing publication of NCII. Includes protections for journalistic, artistic, and lawful speech under the First Amendment",
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
          "Content constitutes knowing publication of NCII",
          "Content does not qualify for journalistic protection",
          "Content does not qualify for artistic expression protection",
          "Content does not constitute protected lawful speech"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
