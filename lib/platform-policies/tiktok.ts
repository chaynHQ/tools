import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law that criminalizes the nonconsensual publication of intimate images, including AI-generated deepfakes, and requires covered platforms to implement notice-and-removal processes for such content. Signed into law by President Trump on May 19, 2025.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "take-it-down-authentic-adults",
        "reference": "Section 2(h)(2)(A)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
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
          "Individual depicted is a minor (under 18 years)",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-deepfake-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
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
          "Content is a digital forgery created through software, machine learning, AI, or other technological means",
          "Digital forgery was published without consent of the individual",
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
          "Individual depicted is a minor (under 18 years)",
          "Content is a digital forgery created through technological means",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-threats-authentic",
        "reference": "Section 2(h)(6)(A)",
        "summary": "Prohibits intentionally threatening to publish authentic intimate visual depictions for intimidation, coercion, extortion, or to create mental distress",
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
          "Threat is intentional",
          "Threat involves publishing authentic intimate visual depictions",
          "Purpose is intimidation, coercion, extortion, or creating mental distress"
        ]
      },
      {
        "id": "take-it-down-threats-deepfake",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to publish digital forgeries (deepfakes) for intimidation, coercion, extortion, or to create mental distress",
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
          "Threat is intentional",
          "Threat involves publishing digital forgeries",
          "Purpose is intimidation, coercion, extortion, or creating mental distress"
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
            "description": "Physical or electronic signature of the individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify identity and authorization for the removal request"
          },
          {
            "description": "Identification and location information for the intimate visual depiction",
            "example": "URL or specific location of the content on the platform",
            "reason": "To enable the platform to locate the specific content for removal"
          },
          {
            "description": "Good faith statement that the content is nonconsensual",
            "example": "Brief explanation of why the content was published without consent",
            "reason": "To establish that the content violates the nonconsensual publication prohibition"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address or phone number",
            "reason": "To enable the platform to communicate regarding the removal request"
          }
        ],
        "removalCriteria": [
          "Content is an intimate visual depiction",
          "Content includes a depiction of the requesting individual",
          "Content was published without the consent of the individual",
          "Valid removal request submitted through established process"
        ]
      },
      {
        "id": "take-it-down-platform-process",
        "reference": "Section 3(a)(1)",
        "summary": "Requires covered platforms to establish a notice and removal process for individuals to request removal of nonconsensual intimate visual depictions",
        "quote": "Not later than 1 year after the date of enactment of this Act, a covered platform shall establish a process whereby an identifiable individual (or an authorized person acting on behalf of such individual) may— (i) notify the covered platform of an intimate visual depiction published on the covered platform that— (I) includes a depiction of the identifiable individual; and (II) was published without the consent of the identifiable individual; and (ii) submit a request for the covered platform to remove such intimate visual depiction.",
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
          "response": {
            "value": 1,
            "unit": "years",
            "description": "Platforms must establish the notice and removal process within 1 year of enactment"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Platform serves the public",
          "Platform primarily provides forum for user-generated content or regularly publishes nonconsensual intimate visual depictions",
          "Content includes depiction of the requesting individual",
          "Content was published without consent"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758659200366-0",
    "reference": "TIKTOK-CG-2025",
    "title": "TikTok Community Guidelines",
    "summary": "Comprehensive policy document outlining TikTok's content standards, including prohibitions on non-consensual intimate imagery, harassment, bullying, and sexually explicit content. Updated September 2025 with enhanced policies for AI content and live streaming.",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tt-cg-harassment-bullying",
        "reference": "Safety and Civility - Harassment and Bullying",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
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
          "Content that harasses or bullies others",
          "Degrading remarks about appearance",
          "Doxing",
          "Sexual harassment",
          "Coordinated abuse"
        ]
      },
      {
        "id": "tt-cg-adult-sexual-abuse",
        "reference": "Safety and Civility - Adult Sexual Abuse",
        "summary": "Prohibits content that shows, promotes, or facilitates adult sexual abuse or exploitation",
        "quote": "We don't allow content that shows, promotes, or facilitates adult sexual abuse or exploitation.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that shows adult sexual abuse or exploitation",
          "Content that promotes adult sexual abuse or exploitation",
          "Content that facilitates adult sexual abuse or exploitation"
        ]
      },
      {
        "id": "tt-cg-personal-information",
        "reference": "Privacy and Security - Personal Information",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "contentTypes": [
          "private",
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
          "Sharing personal information that could lead to identity theft",
          "Sharing personal information that could lead to stalking",
          "Sharing personal information that could lead to fraud",
          "Sharing personal information that could lead to other harm"
        ]
      },
      {
        "id": "tt-cg-platform-security",
        "reference": "Privacy and Security - Platform Security",
        "summary": "Prohibits attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems",
        "quote": "We don't allow attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Attempts to hack TikTok's systems",
          "Attempts to reverse-engineer TikTok's systems",
          "Attempts to otherwise compromise TikTok's systems"
        ]
      },
      {
        "id": "tt-cg-deceptive-behaviors",
        "reference": "Integrity and Authenticity - Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform, or the trade of services that artificially boost engagement or trick the recommendation system",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Accounts that mislead users",
          "Accounts that try to manipulate the platform",
          "Trade of services that artificially boost engagement",
          "Services that trick the recommendation system"
        ]
      },
      {
        "id": "tt-cg-intellectual-property",
        "reference": "Integrity and Authenticity - Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission",
        "quote": "We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
        "contentTypes": [
          "personal",
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
          "Content that violates intellectual property rights",
          "Reposts of copyrighted material without permission",
          "Reposts of trademarked material without permission"
        ]
      },
      {
        "id": "tt-cg-aigc-harmful",
        "reference": "Integrity and Authenticity - Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-generated content that misleads about matters of public importance or that harms individuals",
        "quote": "We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
        "contentTypes": [
          "intimate",
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
          "AI-generated content that misleads about matters of public importance",
          "AI-generated content that harms individuals"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758659200366-1",
    "reference": "TIKTOK-TOS-2025",
    "title": "TikTok Terms of Service",
    "summary": "Legal agreement between TikTok and users establishing platform rules, user obligations, and enforcement mechanisms. Incorporates Community Guidelines by reference and establishes TikTok's authority to remove violating content.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tt-tos-harassment-intimidation",
        "reference": "Section 5",
        "summary": "Prohibits intimidating or harassing others and promoting sexually explicit material",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;",
        "contentTypes": [
          "intimate",
          "personal",
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
          "Content that intimidates or harasses another person",
          "Content that promotes sexually explicit material"
        ]
      },
      {
        "id": "tt-tos-impersonation",
        "reference": "Section 5",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting identity or affiliation",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services;",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that impersonates any person or entity",
          "Content that falsely misrepresents identity or affiliation",
          "Content that gives false impression of emanating from the Services"
        ]
      },
      {
        "id": "tt-tos-private-information",
        "reference": "Section 5",
        "summary": "Prohibits uploading private information of third parties including personal documents and contact details",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers;",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content containing addresses of third parties",
          "Content containing phone numbers of third parties",
          "Content containing email addresses of third parties",
          "Content containing personal identity document information",
          "Content containing credit card numbers"
        ]
      },
      {
        "id": "tt-tos-copyright-infringement",
        "reference": "Section 5",
        "summary": "Prohibits material that infringes copyright, trademark or other intellectual property rights",
        "quote": "any material which does or may infringe any copyright, trademark or other intellectual property or privacy rights of any other person;",
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
          "Material that infringes copyright of another person",
          "Material that infringes trademark rights",
          "Material that infringes other intellectual property rights",
          "Material that violates privacy rights of another person"
        ]
      },
      {
        "id": "tt-tos-defamatory-content",
        "reference": "Section 5",
        "summary": "Prohibits defamatory, obscene, offensive, or inflammatory material",
        "quote": "any material which is defamatory of any person, obscene, offensive, pornographic, hateful or inflammatory;",
        "contentTypes": [
          "intimate",
          "personal",
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
          "Material that is defamatory of any person",
          "Material that is obscene, offensive, or inflammatory",
          "Material that is inappropriate in nature"
        ]
      },
      {
        "id": "tt-tos-harassment-bullying",
        "reference": "Section 5",
        "summary": "Prohibits material designed to provoke, harass, harm, hurt, scare, distress, embarrass or upset people",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people;",
        "contentTypes": [
          "intimate",
          "personal",
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
          "Material deliberately designed to provoke or antagonise people",
          "Material intended for trolling and bullying",
          "Material intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-tos-threats",
        "reference": "Section 5",
        "summary": "Prohibits material containing threats of any kind including physical violence",
        "quote": "any material that contains a threat of any kind, including threats of physical violence;",
        "contentTypes": [
          "intimate",
          "personal",
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
          "Material containing threats of any kind",
          "Material containing threats of physical violence"
        ]
      },
      {
        "id": "tt-tos-unauthorized-account-use",
        "reference": "Section 5",
        "summary": "Prohibits using or attempting to use another's account or system without authorization",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services;",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Using another's account without authorization",
          "Attempting to use another's system without authorization",
          "Creating a false identity on the Services"
        ]
      },
      {
        "id": "tt-tos-content-removal-discretion",
        "reference": "Section 5",
        "summary": "Reserves right to remove or disable access to content at discretion for violations or harm to services or users",
        "quote": "We reserve the right, at any time and without prior notice, to remove or disable access to content at our discretion for any reason or no reason. Some of the reasons we may remove or disable access to content may include finding the content objectionable, in violation of these Terms or our Community Policy, or otherwise harmful to the Services or our users.",
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
            "value": null,
            "unit": "immediate",
            "description": "Content may be removed at any time without prior notice"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content found objectionable",
          "Content in violation of Terms or Community Policy",
          "Content harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-user-content-removal-rights",
        "reference": "Section 7",
        "summary": "Reserves right to remove, disallow, block or delete any User Content that violates Terms or in response to complaints",
        "quote": "We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at \"Your Access to and Use of Our Services\" above. In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
          "Content that does not comply with content standards",
          "User Content that violates these Terms",
          "Content subject to complaints from other users or third parties"
        ]
      },
      {
        "id": "tt-tos-identity-disclosure",
        "reference": "Section 7",
        "summary": "Reserves right to disclose user identity to third parties claiming intellectual property or privacy rights violations",
        "quote": "We also have the right to disclose your identity to any third party who is claiming that any User Content posted or uploaded by you to our Services constitutes a violation of their intellectual property rights, or of their right to privacy.",
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
          "User Content that violates intellectual property rights of third parties",
          "User Content that violates privacy rights of third parties"
        ]
      },
      {
        "id": "tt-tos-infringing-material-removal",
        "reference": "Section 7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat infringers",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
            "value": null,
            "unit": "immediate",
            "description": "Reasonable measures to expeditiously remove infringing material"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Material that infringes copyrights or intellectual property rights",
          "Accounts of users who repeatedly infringe may be disabled or terminated"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can contact TikTok to file complaints about content or request assistance with account issues",
      "steps": [
        "Contact TikTok at the provided feedback URL",
        "Provide description of the issue or content in question",
        "TikTok will review and respond to the complaint or request"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-2",
    "reference": "TIKTOK-PP-2025",
    "title": "TikTok Privacy Policy",
    "summary": "Policy governing collection, use, and protection of user personal information, including provisions for data sharing with law enforcement and content moderation processes. Last updated August 2024.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tiktok-pp-user-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Prohibits content that violates Terms of Service and Community Guidelines through scanning and analysis of user content and messages",
        "quote": "To promote the safety and security of the Platform, including by scanning, analyzing, and reviewing User Content, messages and associated metadata for violations of our Terms of Service, Community Guidelines, or other conditions and policies.",
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
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content violates other platform conditions and policies"
        ]
      },
      {
        "id": "tiktok-pp-abuse-fraud-detection",
        "reference": "How We Use Your Information",
        "summary": "Prohibits abuse, fraud, and illegal activity on the platform",
        "quote": "To help us detect abuse, fraud, and illegal activity on the Platform.",
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
          "Content constitutes abuse",
          "Content involves fraud",
          "Content involves illegal activity"
        ]
      },
      {
        "id": "tiktok-pp-child-protection",
        "reference": "Children and Teens",
        "summary": "Prohibits collection of personal information from children and requires immediate account termination and data deletion when discovered",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account.",
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
            "description": "Immediate deletion and account termination upon discovery"
          },
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Immediate deletion and account termination upon discovery"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Personal information collected from a child under 13",
          "Account belongs to user under 13 years of age"
        ]
      },
      {
        "id": "tiktok-pp-content-removal-under-18",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows users under 18 in California to request removal of their posted content",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Description of the User Content you want removed",
            "example": "Detailed description identifying the specific content",
            "reason": "To locate the content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit location of content",
            "example": "URL, username, timestamp, or other identifying information",
            "reason": "To verify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "User is a California resident",
          "User is under 18 years of age",
          "Content was posted by the requesting user",
          "Adequate information provided to locate content"
        ]
      },
      {
        "id": "tiktok-pp-connecticut-minor-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows Connecticut users under 18 and parents of users under 16 to request account deletion or unpublishing",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16).",
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
          "User is a Connecticut resident under 18 years of age",
          "Parent/guardian of Connecticut resident under 16 years of age",
          "Request made through proper channels"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users may appeal decisions made about their privacy requests by following instructions in the communication received from TikTok",
      "steps": [
        "Submit initial request through privacy portal",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-3",
    "reference": "TIKTOK-IP-2025",
    "title": "TikTok Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies. Includes specific processes for reporting and appealing IP violations. Released March 27, 2025, effective April 26, 2025.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright, including unauthorized use of copyrighted content without proper authorization",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
        "contentTypes": [
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
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, identification of infringing content, contact information",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Information about the copyrighted work and evidence of ownership",
            "example": "Original creation details, registration information if applicable",
            "reason": "To verify legitimate copyright ownership and infringement claims"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason"
        ]
      },
      {
        "id": "tt-ip-copyright-removal-policy",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes copyright and may ban accounts of repeat infringers or in cases of severe violations",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
        "contentTypes": [
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
          "User content infringes another person's copyright",
          "User repeatedly commits copyright infringement",
          "Severe copyright violations occur"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of trademarks that causes confusion about source, origin, sponsorship or affiliation",
        "quote": "Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.",
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
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark ownership details, identification of infringing content, contact information",
            "reason": "To facilitate evaluation of the trademark infringement report"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion, deception or mistake about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-trademark-removal-policy",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and may ban accounts of repeat infringers or in cases of severe violations",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
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
          "Content violates another's trademark rights",
          "Content involves counterfeit goods",
          "User repeatedly commits trademark infringement",
          "Severe trademark violations occur"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can appeal copyright and trademark removals through in-app notifications, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app accessed from the notification",
        "Provide all required information including contact details and supporting evidence",
        "TikTok may contact you for additional questions about your appeal",
        "Appeal may be forwarded to original reporter including contact information",
        "Content may be reinstated at TikTok's discretion if no infringement found"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-4",
    "reference": "TIKTOK-SAFETY-2025",
    "title": "TikTok Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent content. Includes specific provisions for protecting minors and public figures, with enhanced enforcement mechanisms.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tt-cg-ncii",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
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
          "Intimate images shared without consent",
          "Content created for sexual purposes without permission",
          "Content that appears consensually taken but distributed without consent"
        ]
      },
      {
        "id": "tt-cg-sextortion",
        "reference": "Adult Sexual Abuse - Sextortion",
        "summary": "Prohibits threatening to share intimate or sexual content without permission to demand money, sexual acts, or more explicit content",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
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
          "Threats to share intimate content without permission",
          "Demands for money in exchange for not sharing content",
          "Demands for sexual acts in exchange for not sharing content",
          "Demands for more explicit content in exchange for not sharing content"
        ]
      },
      {
        "id": "tt-cg-youth-sextortion",
        "reference": "Youth Sexual and Physical Abuse - Sextortion",
        "summary": "Prohibits threatening to share intimate or sexual content of young people without permission to demand money, sexual acts, or more explicit content",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
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
          "Threats to share intimate content of young people without permission",
          "Demands targeting young people for money, sexual acts, or more content"
        ]
      },
      {
        "id": "tt-cg-csam",
        "reference": "Youth Sexual and Physical Abuse - CSAM",
        "summary": "Prohibits sexual content involving young people, including digital or AI-generated images and content that sexualizes young people",
        "quote": "Child Sexual Abuse Material (CSAM): Sexual content involving a young person, including anything that shows or suggests abuse or sexual activity. This covers content created by others or the young person themselves, and includes digital or AI-generated images. It also includes anything that sexualizes or fetishizes a young person's body.",
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
          "Sexual content involving young people",
          "Content showing or suggesting abuse or sexual activity with young people",
          "Digital or AI-generated sexual images of young people",
          "Content that sexualizes or fetishizes young people"
        ]
      },
      {
        "id": "tt-cg-sexual-harassment",
        "reference": "Harassment and Bullying - Sexual Harassment",
        "summary": "Prohibits unwanted sexual comments, behaviors, and sexualization or sexual degradation of individuals",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "contentTypes": [
          "intimate",
          "personal",
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
          "Unwanted sexual comments or behaviors",
          "Mimicking sexual acts using platform features",
          "Remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-cg-doxing",
        "reference": "Harassment and Bullying - Doxing",
        "summary": "Prohibits publishing or threatening to publish personal information about someone online with malicious intent",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Publishing personal information with malicious intent",
          "Threatening to publish personal information",
          "Encouraging others to engage in doxing"
        ]
      },
      {
        "id": "tt-cg-coordinated-harassment",
        "reference": "Harassment and Bullying - Coordinated Abuse",
        "summary": "Prohibits inciting harassment or promoting coordinated abuse against individuals",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
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
          "Encouraging others to leave abusive comments",
          "Promoting false reporting of accounts",
          "Coordinating harassment campaigns"
        ]
      },
      {
        "id": "tt-cg-physical-degradation",
        "reference": "Harassment and Bullying - Physical Attributes",
        "summary": "Prohibits insulting someone's physical attributes including weight, facial features, or body parts",
        "quote": "Insulting someone's physical attributes, such as weight, facial features, or body parts",
        "contentTypes": [
          "personal",
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
          "Insulting comments about weight, facial features, or body parts"
        ]
      },
      {
        "id": "tt-cg-ai-generated-abuse",
        "reference": "Youth Sexual and Physical Abuse - AI-Generated CSAM",
        "summary": "Prohibits AI-generated sexual images and content involving young people",
        "quote": "This covers content created by others or the young person themselves, and includes digital or AI-generated images.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "AI-generated sexual images of young people",
          "Digital manipulation of images for sexual purposes involving young people"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758659200366-5",
    "reference": "TIKTOK-MATURE-2025",
    "title": "TikTok Sensitive and Mature Themes Policy",
    "summary": "Policy governing sexually suggestive content, adult themes, and age-restricted material. Includes content levels system and restrictions for teen accounts.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tt-cg-nudity-sexual-activity",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content including digital or illustrated images",
        "quote": "Showing: Penetrative sex, non-penetrative sex, or oral sex—including digital or illustrated images, like manga; Physical sexual arousal or stimulation; Fetish or kink behavior, such as BDSM or sexual behavior involving a focus on specific body parts; Nudity of adults or young people—including digital or illustrated images, like manga",
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
          "Content shows penetrative sex, non-penetrative sex, or oral sex",
          "Content depicts physical sexual arousal or stimulation",
          "Content shows fetish or kink behavior",
          "Content displays nudity of adults or young people",
          "Content includes digital or illustrated intimate images"
        ]
      },
      {
        "id": "tt-cg-sexual-services",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits facilitating access to sexual services including offering sexual acts, chats, or imagery",
        "quote": "Facilitating access to sexual services, such as offering or asking for sexual acts, sexual chats or imagery, or pornography",
        "contentTypes": [
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
          "Content offers or asks for sexual acts",
          "Content facilitates sexual chats or imagery",
          "Content promotes access to pornography"
        ]
      },
      {
        "id": "tt-cg-youth-sexualized-content",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits sexually suggestive acts, significant body exposure, intimate kissing, and sexually explicit language involving young people",
        "quote": "Significant body exposure of young people, such as wearing only underwear or lingerie; Showing young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing; Sexually explicit language involving or directed at young people",
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
          "Content shows significant body exposure of young people",
          "Content depicts young people in intimate kissing",
          "Content shows young people in sexually suggestive acts",
          "Content includes sexually explicit language involving young people"
        ]
      },
      {
        "id": "tt-cg-adult-significant-exposure",
        "reference": "Body Exposure and Sexualized Behaviors - FYF INELIGIBLE & AGE-RESTRICTED",
        "summary": "Age-restricts and removes from For You feed content showing significant adult body exposure or sexually suggestive behavior",
        "quote": "Showing: Significant adult body exposure, such as wearing only nipple covers or underwear that doesn't cover most of the buttocks; In some regions, moderate adult body exposure—such as the side breast or partial exposure of the buttocks that would be typically covered based on cultural norms; Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
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
          "Content shows significant adult body exposure",
          "Content depicts moderate adult body exposure in certain regions",
          "Content shows adults engaging in intimate kissing",
          "Content displays sexually suggestive acts by adults"
        ]
      },
      {
        "id": "tt-cg-youth-revealing-clothing",
        "reference": "Body Exposure and Sexualized Behaviors - FYF INELIGIBLE",
        "summary": "Removes from For You feed content showing young people in revealing clothing that outlines intimate body parts",
        "quote": "Showing young people in clothing that reveals cleavage or outlines intimate body parts",
        "contentTypes": [
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
          "Content shows young people in clothing that reveals cleavage",
          "Content depicts young people in clothing that outlines intimate body parts"
        ]
      },
      {
        "id": "tt-cg-adult-explicit-language-products",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED / FYF INELIGIBLE & AGE-RESTRICTED",
        "summary": "Prohibits or age-restricts adults using sexually explicit language or showing sex products depending on region",
        "quote": "In some regions, adults using sexually explicit language or showing or promoting sex products",
        "contentTypes": [
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
          "Content shows adults using sexually explicit language in certain regions",
          "Content depicts adults showing or promoting sex products in certain regions"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758665740946-0",
    "reference": "TIKTOK-PRIVACY-SEC-2025",
    "title": "TikTok Privacy and Security Guidelines",
    "summary": "Specific community guidelines section addressing privacy violations, personal information sharing, and security threats. Includes policies on high-risk and moderate-risk personal information sharing. Released August 14, 2025, effective September 13, 2025.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "Personal Information - High Risk",
        "summary": "Prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains personal information that could lead to stalking",
          "Content contains personal information that could lead to identity theft",
          "Content contains personal information that could lead to fraud",
          "Content contains personal information that could lead to other harm"
        ]
      },
      {
        "id": "tt-ps-personal-info-moderate-risk",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Prohibits moderate risk personal information shared without consent when it puts someone at risk of psychological harm",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information puts the individual at risk",
            "reason": "Platform requires additional context to assess moderate risk personal information removal requests"
          }
        ],
        "removalCriteria": [
          "Moderate risk personal information shared without consent",
          "Information puts someone at risk of psychological harm"
        ]
      },
      {
        "id": "tt-ps-image-audio-likeness",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Prohibits sharing image or audio likeness without consent that may cause harm including emotional distress or reputational damage",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
        "evidenceRequirements": [
          {
            "description": "Additional context demonstrating potential harm",
            "example": "Evidence of emotional distress, reputational damage, or unwanted contact",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Image or audio likeness shared without consent",
          "Content may cause emotional distress",
          "Content may cause reputational damage",
          "Content may lead to unwanted contact"
        ]
      },
      {
        "id": "tt-ps-private-communications",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Prohibits sharing private communications on sensitive subjects disclosed by individuals who were not part of the exchange",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
            "description": "Additional context demonstrating potential harm",
            "example": "Evidence showing the communications were private and disclosed without authorization",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Private communications on sensitive subjects shared without consent",
          "Communications disclosed by individuals who were not part of the exchange"
        ]
      },
      {
        "id": "tt-ps-account-security-sharing",
        "reference": "Platform Security",
        "summary": "Prohibits giving login information to others or allowing them to break platform rules on user accounts",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Sharing login information with others",
          "Allowing others to break platform rules on user account"
        ]
      },
      {
        "id": "tt-ps-unauthorized-access",
        "reference": "Platform Security",
        "summary": "Prohibits using unauthorized methods to access the platform or creating fake versions of the platform",
        "quote": "Using unauthorized ways to access TikTok or creating fake versions of the platform",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Using unauthorized methods to access the platform",
          "Creating fake versions of the platform"
        ]
      },
      {
        "id": "tt-ps-malware-sharing",
        "reference": "Platform Security",
        "summary": "Prohibits sharing files or messages that carry malware or other harmful software including viruses or worms",
        "quote": "Sharing files or messages that carry malware or other harmful software, such as viruses or worms",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Sharing files containing malware",
          "Sharing messages containing harmful software",
          "Distributing viruses or worms"
        ]
      },
      {
        "id": "tt-ps-phishing-hacking",
        "reference": "Platform Security",
        "summary": "Prohibits attempts to steal personal information, hack accounts, or access data using deceptive methods or automated tools",
        "quote": "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
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
          "Attempting to steal personal information",
          "Attempting to hack accounts",
          "Using phishing or smishing techniques",
          "Using automated tools to access data"
        ]
      },
      {
        "id": "tt-ps-reverse-engineering",
        "reference": "Platform Security",
        "summary": "Prohibits attempting to reverse-engineer TikTok's code, systems, or algorithms or creating versions based on them",
        "quote": "Trying to reverse-engineer TikTok's code, systems, or algorithms—or create your own versions based on them",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Attempting to reverse-engineer platform code",
          "Attempting to reverse-engineer platform systems",
          "Attempting to reverse-engineer platform algorithms",
          "Creating versions based on platform technology"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Privacy violation reporting process for users who believe their privacy has been violated",
      "steps": [
        "Report privacy violation through the provided link"
      ]
    }
  },
  {
    "id": "tiktok-new-1758722394636-0",
    "reference": "TIKTOK-LAW-ENF-2025",
    "title": "TikTok Law Enforcement Guidelines",
    "summary": "Guidelines for law enforcement officials seeking information from TikTok, including procedures for data requests, user notification requirements, and compliance with legal processes. Last updated April 25, 2025.",
    "url": "https://www.tiktok.com/legal/page/global/law-enforcement/en",
    "accessTimestamp": "2025-09-24T13:59:54.636Z",
    "policies": [
      {
        "id": "tt-law-emergency-disclosure",
        "reference": "Section 6",
        "summary": "Provides emergency disclosure of user data when there is imminent harm or risk of death or serious physical injury to a person",
        "quote": "TikTok has processes in place to handle emergency requests. Such requests are evaluated on a case-by-case basis: if as part of an emergency request we receive information that is sufficient in our assessment to establish a good faith belief that there is an emergency involving imminent harm or the risk of death or serious physical injury to a person, we may provide user data necessary to prevent that harm, as permitted by applicable law.",
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
            "description": "Must be submitted by sworn law enforcement official from official email domain",
            "example": "Official law enforcement email address and credentials",
            "reason": "To verify legitimacy of emergency request"
          },
          {
            "description": "Information sufficient to establish good faith belief of emergency involving imminent harm",
            "example": "Documentation of threat or evidence of imminent danger",
            "reason": "To assess whether emergency disclosure criteria are met"
          }
        ],
        "removalCriteria": [
          "Emergency involving imminent harm or risk of death or serious physical injury to a person",
          "Good faith belief that disclosure is necessary to prevent harm",
          "Request made by sworn law enforcement official"
        ]
      },
      {
        "id": "tt-law-child-exploitation-reporting",
        "reference": "FAQ Section",
        "summary": "Reports suspected child exploitation to the U.S. National Center for Missing and Exploited Children for child safeguarding purposes",
        "quote": "In limited circumstances, including where TikTok is subject to legal obligations, TikTok reports certain user data either to law enforcement authorities or to designated bodies. Examples include reporting suspected child exploitation to the U.S. National Center for Missing and Exploited Children (\"NCMEC\") for child safeguarding purposes",
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
          "Suspected child exploitation content",
          "Content subject to mandatory reporting obligations"
        ]
      },
      {
        "id": "tt-law-content-data-disclosure",
        "reference": "Section 2",
        "summary": "Requires domestic court or judicial order, warrant or equivalent for disclosure of content data including video content, comments, and direct message content",
        "quote": "Content data: Video content, Comments, Direct message content. Each request must clearly specify the type of data requested and the legal basis for requesting it. If the request does not meet the applicable legal requirements for the requested data (as listed in Section 3 below), the data will not be disclosed. This is in particular the case for requests relating to content data (which generally require a domestic court / judicial order, warrant or equivalent).",
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
            "description": "Domestic court or judicial order, warrant or equivalent",
            "example": "Court order signed by judge or magistrate",
            "reason": "Legal requirement for accessing private content data"
          },
          {
            "description": "Clear specification of content data type requested",
            "example": "Video content, comments, or direct messages",
            "reason": "To identify specific data for disclosure"
          }
        ],
        "removalCriteria": [
          "Valid domestic court or judicial order",
          "Warrant or legal equivalent",
          "Clear specification of content data requested"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
