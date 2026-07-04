import { PlatformPolicies } from '../../types/platforms';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146 / Public Law No. 119-12",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law (enacted, Public Law No. 119-12) that criminalizes the nonconsensual publication of intimate images, including AI-generated deepfakes/digital forgeries, and requires covered platforms to establish a notice-and-removal process enabling victims to request takedown within statutory timeframes. Platforms including TikTok have implemented compliant reporting forms.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
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
      },
      {
        "id": "take-it-down-notice-requirements",
        "reference": "Section 3(a)(1)(B)",
        "summary": "Requires that a removal request include a signature, sufficient information to locate the content, a good faith statement of non-consent, and contact information",
        "quote": "A notification and request for removal of an intimate visual depiction submitted under the process established under subparagraph (A) shall include, in writing— (i) a physical or electronic signature of the identifiable individual (or an authorized person acting on behalf of such individual); (ii) an identification of, and information reasonably sufficient for the covered platform to locate, the intimate visual depiction of the identifiable individual; (iii) a brief statement that the identifiable individual has a good faith belief that any intimate visual depiction identified under clause (ii) is not consensual, including any relevant information for the covered platform to determine the intimate visual depiction was published without the consent of the identifiable individual; and (iv) information sufficient to enable the covered platform to contact the identifiable individual (or an authorized person acting on behalf of such individual).",
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
            "description": "Physical or electronic signature of the identifiable individual or authorized person",
            "example": "Typed name, digital signature, or scanned signature",
            "reason": "To verify the identity of the requester and confirm authorization to submit the request"
          },
          {
            "description": "Identification and location information sufficient for the platform to locate the content",
            "example": "Direct URL or screenshots showing where the content appears on the platform",
            "reason": "To allow the platform to find and act on the specific content"
          },
          {
            "description": "A good faith statement that the content is not consensual",
            "example": "A brief written statement explaining the content was published without consent",
            "reason": "To establish the basis for the removal request under the nonconsensual publication prohibition"
          },
          {
            "description": "Contact information for the individual or their authorized representative",
            "example": "Email address or phone number",
            "reason": "To enable the platform to follow up regarding the request"
          }
        ],
        "removalCriteria": [
          "Request includes a valid signature",
          "Request includes sufficient information to locate the content",
          "Request includes a good faith statement of non-consent",
          "Request includes contact information"
        ]
      },
      {
        "id": "take-it-down-platform-notice-of-process",
        "reference": "Section 3(a)(2)",
        "summary": "Requires covered platforms to provide clear and conspicuous notice of the notice and removal process, including how to submit a removal request",
        "quote": "A covered platform shall provide on the platform a clear and conspicuous notice, which may be provided through a clear and conspicuous link to another web page or disclosure, of the notice and removal process established under paragraph (1)(A) that— (A) is easy to read and in plain language; and (B) provides information regarding the responsibilities of the covered platform under this section, including a description of how an individual can submit a notification and request for removal.",
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
          "Platform must publish clear and easy-to-read notice describing the removal process",
          "Notice must explain how an individual can submit a request for removal"
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
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
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
    "summary": "Legal agreement between TikTok USDS Joint Venture LLC and users in the United States establishing platform rules, user obligations, and enforcement mechanisms. Following TikTok's US ownership transition, updated Terms took effect January 22, 2026, incorporating the Community Guidelines and Privacy Policy by reference and establishing TikTok's authority to remove violating content, alongside DMCA counter-notice procedures.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
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
        "reference": "Section 3.4",
        "summary": "Prohibits using another user's account without authorization",
        "quote": "use or attempt to use another user's account without authorization,",
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
          "Using another user's account without authorization",
          "Attempting to use another's account without authorization"
        ]
      },
      {
        "id": "tt-tos-content-removal-discretion",
        "reference": "Section 3.6",
        "summary": "Reserves right to remove or restrict access to content, including due to violations, harm to users, or legal requirements",
        "quote": "We may remove or restrict access to any content, including yours, whether publicly or privately posted, for any reason, including if (a) it violates these Terms, our Community Guidelines, or other conditions or policies, (b) it may cause harm to, or violate the rights of, our users, TikTok USDS Joint Venture, our affiliates, or other third parties, or (c) we are required to do so to comply with a legal requirement or court order, or are permitted to do so by law.",
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
          "Content that violates the Terms, Community Guidelines, or other conditions or policies",
          "Content that may cause harm to, or violate the rights of, users, TikTok, affiliates, or third parties",
          "Content required to be removed to comply with legal requirement or court order"
        ]
      },
      {
        "id": "tt-tos-content-review-enforcement",
        "reference": "Section 3.8",
        "summary": "Reviews user content and metadata using automated tools and human moderators to enforce Terms and Community Guidelines and keep the community safe",
        "quote": "You agree that we can use automated tools and human moderators to review Your Content (as defined in Section 3.5) and associated metadata on the Platform, to identify, detect, and enforce potential or actual violations of these Terms, our Community Guidelines, and other conditions or policies, and to keep our community safe and prevent harmful or illegal conduct on the Platform.",
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
          "Content that violates Terms, Community Guidelines, or other conditions or policies",
          "Content involved in harmful or illegal conduct on the Platform"
        ]
      },
      {
        "id": "tt-tos-image-consent-requirement",
        "reference": "Section 3.4",
        "summary": "Prohibits uploading content that depicts individuals without their consent or that of their legally authorized representative, as required by applicable law",
        "quote": "upload content in violation of applicable laws, including laws requiring the consent of individuals whose images appear in Your Content, or their legally authorized representatives,",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content depicting individuals uploaded without their consent as required by applicable law",
          "Content depicting individuals uploaded without consent of their legally authorized representative"
        ]
      },
      {
        "id": "tt-tos-inauthentic-behavior",
        "reference": "Section 3.4",
        "summary": "Prohibits inauthentic commercial behaviors including operating spam or impersonation accounts",
        "quote": "engage in inauthentic commercial behaviors, such as by operating spam or impersonation accounts or any other means further detailed in our Community Guidelines,",
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
          "Operating spam accounts",
          "Operating impersonation accounts"
        ]
      },
      {
        "id": "tt-tos-genai-misuse",
        "reference": "Section 3.10",
        "summary": "Prohibits misuse of generative AI features to violate Terms, deceive, impersonate others, or misrepresent AI-generated content as human-generated",
        "quote": "Provide, create, or otherwise use Input or Output in a way that violates these Terms, our Community Guidelines, or other conditions or policies or any applicable laws, or that infringes, violates or misappropriates the rights of TikTok USDS Joint Venture, our users, or any third party, ... Represent, imply or otherwise create an impression that your Output is human-generated or otherwise generated without the use of AI, including by removing, obscuring, or altering any watermarks, content-authenticating metadata, or other marking or disclosure applied to or associated with your Output, Provide, create, or otherwise use Input or Output in a fraudulent manner or to deceive, mislead or impersonate others,",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "AI-generated Input or Output that violates the Terms, Community Guidelines, or other conditions or policies",
          "AI-generated Input or Output that infringes or violates the rights of TikTok, users, or third parties",
          "AI-generated Output misrepresented as human-generated by removing watermarks or authenticating metadata",
          "AI-generated Input or Output used fraudulently or to deceive, mislead or impersonate others"
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
        "reference": "Section 3.9",
        "summary": "Takes measures to address copyright and intellectual property infringement and may disable accounts of repeat infringers",
        "quote": "We respect copyright and other intellectual property rights and expect for you to do the same. You agree to the terms of our Intellectual Property Policy.",
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
            "description": "Report of suspected intellectual property infringement",
            "example": "Submission via the Copyright or Trademark reporting links",
            "reason": "To identify and evaluate claims of infringement on the Platform"
          }
        ],
        "removalCriteria": [
          "Material that infringes copyrights or intellectual property rights of others"
        ]
      },
      {
        "id": "tt-tos-account-ban-suspension",
        "reference": "Section 5.2",
        "summary": "Reserves right to ban or suspend accounts or restrict access to features at its discretion, including for violations of Terms or Community Guidelines",
        "quote": "We reserve the right, at any time and without prior notice, to ban or suspend your account, or restrict your access to features of the Platform, at our sole discretion, including if: we have reason to believe in our sole discretion that you have violated these Terms, our Community Guidelines, or other conditions or policies, we are legally required to do so, or it is necessary in our judgment to respond to a technical or security issue.",
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
            "description": "Account may be banned or suspended at any time without prior notice"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Reasonable belief that the account violated Terms, Community Guidelines, or other conditions or policies",
          "Legal requirement to ban or suspend the account",
          "Necessary response to a technical or security issue"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
      "summary": "Users who believe their account was wrongly banned, suspended, or restricted, or whose age determination was incorrect, can submit an appeal through the Platform's functionalities for review.",
      "steps": [
        "Submit an appeal through the functionalities provided on the Platform",
        "TikTok reviews the decision",
        "For underage bans specifically, users can appeal via the dedicated underage appeals process"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-2",
    "reference": "TIKTOK-PP-2025",
    "title": "TikTok Privacy Policy",
    "summary": "Policy governing collection, use, and protection of user personal information, including provisions for data sharing, law enforcement requests, and content moderation processes. Updated as part of TikTok's US ownership transition effective January 22, 2026, with new provisions covering precise location data and AI interaction data; the equivalent global/other-regions version was last updated July 8, 2025.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
    "policies": [
      {
        "id": "tiktok-pp-user-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Prohibits content that violates Terms of Service and Community Guidelines through scanning and analysis of user content and messages",
        "quote": "To enforce our Terms of Service, Community Guidelines, and other conditions and policies that apply to you and to protect the safety of our community and integrity of the Services, including by scanning, analyzing, and reviewing user content, messages, AI interactions, and associated metadata.",
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
        "quote": "To maintain and enhance the safety, security, and stability of the Services by identifying and addressing technical or security issues or problems (such as technical bugs and spam accounts), and detecting abuse, fraud, and illegal activity.",
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
        "summary": "Prohibits collection of personal information from children and requires account termination and data deletion when discovered",
        "quote": "If we become aware that a Child's personal information has been collected outside of this separate experience for Children, we will delete this information in accordance with applicable law and terminate the Child's account.",
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
            "description": "Deletion of information and account termination upon discovery, in accordance with applicable law"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Personal information collected from a child under 13 outside the separate Children's experience",
          "Account belongs to user under 13 years of age"
        ]
      },
      {
        "id": "tiktok-pp-content-removal-under-18",
        "reference": "Other Rights - Content Removal for Users Under 18",
        "summary": "Allows users under 18 in California to request removal of their posted content",
        "quote": "Users of the Services who are California residents and are under 18 years of age may request and obtain removal of user content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the user content they want removed and information reasonably sufficient to permit us to locate that user content.",
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
            "description": "Description of the user content you want removed",
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
        "reference": "Other Rights - Content Removal for Users Under 18",
        "summary": "Allows Connecticut users under 18 and parents of users under 16 to request account deletion or unpublishing",
        "quote": "Users of the Services who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Services who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their Child's account (for parents and guardians with teen users under 16) by following the instructions here.",
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
      },
      {
        "id": "tiktok-pp-retention-violation-removal",
        "reference": "Data Security and Retention",
        "summary": "Allows immediate removal of users from the platform for violating platform policies, with information retained to process the violation",
        "quote": "If you violate our Terms of Service, Community Guidelines, or other conditions or policies, we may remove you from the Services immediately, but may keep information about you to process the violation.",
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
            "description": "Immediate removal from the Services upon violation of policies"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User violates Terms of Service",
          "User violates Community Guidelines",
          "User violates other platform conditions or policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users may submit requests to know, access, correct, or delete their information, and may appeal decisions made about such requests through the same channels.",
      "steps": [
        "Submit a request to know, access, correct, or delete information via the webform or mailing address provided",
        "If disagreeing with the outcome, appeal the decision through the same methods (webform or mailing address)",
        "Verification of identity may be required, such as confirming the email address associated with the account"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-3",
    "reference": "TIKTOK-IP-2025",
    "title": "TikTok Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies. Includes specific processes for reporting and appealing IP violations. Released March 27, 2025, effective April 26, 2025.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
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
        "summary": "Removes user content that infringes copyright and may ban accounts of repeat infringers, restrict LIVE access, or in cases of severe violations",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations. We reserve the right to refuse any account holder whose account was used for improper activities from opening a new TikTok account.",
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
          "User infringes copyright using the LIVE feature",
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
        "summary": "Removes content that violates trademark rights and may ban accounts of repeat infringers, restrict LIVE access, or in cases of severe violations",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations. We reserve the right to refuse any account holder whose account was used for improper activities from opening a new TikTok account.",
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
      },
      {
        "id": "tt-ip-impersonation-fan-page",
        "reference": "Trademark Infringement",
        "summary": "Prohibits users from falsely claiming to speak for or be associated with a brand or rightsholder when creating fan pages or referencing trademarks",
        "quote": "Likewise, it is generally permissible to make a fan page about a brand, even without the brand's permission, provided that the user does not claim to speak for or be associated with the brand or otherwise violate the brand's intellectual property rights.",
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
          "User falsely claims to speak for or be associated with a brand",
          "User otherwise violates the brand's intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users whose content is removed due to a copyright or trademark infringement report can submit an in-app appeal, providing contact information and supporting evidence. TikTok may forward the appeal, including contact information, to the original reporter where appropriate and authorised by law.",
      "steps": [
        "User receives an in-app notification when content is removed due to an infringement report",
        "User may contact the rightsholder directly to request a retraction",
        "User submits an appeal within the TikTok app via the in-app notification",
        "User provides required information, including contact details and evidence supporting the claim",
        "TikTok may contact the user with additional questions about the appeal",
        "For copyright appeals outside the EU, TikTok may forward the appeal to the original reporter, who may file a legal action to keep the content down",
        "TikTok reinstates content if it does not infringe the rightsholder's rights, or if no legal action is filed within the applicable timeframe, at TikTok's sole discretion"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-4",
    "reference": "TIKTOK-SAFETY-2025",
    "title": "TikTok Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent content. Includes specific provisions for protecting minors and public figures, with enhanced enforcement mechanisms.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
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
      },
      {
        "id": "tt-cg-harassment-bullying-general",
        "reference": "Harassment and Bullying",
        "summary": "Prohibits harassment or bullying, including retaliatory harassment, with stronger protections for private individuals and minors",
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
        "contentTypes": [
          "personal",
          "intimate",
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
          "Harassment or bullying content",
          "Retaliatory harassment",
          "Content targeting someone under 18 that could contribute to serious harm",
          "Content that is most harmful such as doxing, sexual harassment, or exploitation of private figures"
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
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
    "policies": [
      {
        "id": "tt-cg-nudity-sexual-activity",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content including digital or illustrated images",
        "quote": "Nudity or sexual activity",
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
          "Content shows nudity",
          "Content shows sexual activity"
        ]
      },
      {
        "id": "tt-cg-sexual-services",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits facilitating access to sexual services including offering sexual acts, chats, or imagery",
        "quote": "Sexual Services",
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
        "summary": "Prohibits sexually suggestive acts and significant body exposure involving young people",
        "quote": "Sexually suggestive acts or significant body exposure involving youth",
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
          "Content depicts young people in sexually suggestive acts"
        ]
      },
      {
        "id": "tt-cg-adult-significant-exposure",
        "reference": "Body Exposure and Sexualized Behaviors - FYF INELIGIBLE & AGE-RESTRICTED",
        "summary": "Age-restricts and removes from For You feed content showing significant adult body exposure or sexually suggestive behavior",
        "quote": "Some content, like significant adult body exposure or sexually suggestive behavior involving adults, is age-restricted and ineligible for the FYF.",
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
          "Content shows sexually suggestive behavior involving adults"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758665740946-0",
    "reference": "TIKTOK-PRIVACY-SEC-2025",
    "title": "TikTok Privacy and Security Guidelines",
    "summary": "Specific community guidelines section addressing privacy violations, personal information sharing, and security threats. Includes policies on high-risk and moderate-risk personal information sharing that could lead to stalking, identity theft, fraud, or psychological harm. Released August 14, 2025, effective September 13, 2025.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1783175882801-0",
    "reference": "TIKTOK-REPORT-ILLEGAL-CONTENT",
    "title": "TikTok Reporting Illegal Content (EU Digital Services Act)",
    "summary": "Policy page explaining TikTok's mechanism, required under the EU Digital Services Act, for reporting illegal content, including a dedicated category for non-consensual sharing of private or intimate images, alongside child sexual exploitation and illegal privacy violations.",
    "url": "https://www.tiktok.com/legal/page/global/reporting-illegal-content/en",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
    "policies": [
      {
        "id": "tiktok-ric-child-sexual-exploitation",
        "reference": "Guide to illegal content reporting categories - Child sexual exploitation",
        "summary": "Prohibits sexualized content involving young people and any Child Sexual Abuse Material, including recruitment, grooming, or offers to share such material.",
        "quote": "Sexualised content of young people (under the age of 18) or Child Sexual Abuse Material (CSAM) is any visual, textual and audible depictions or production of explicit or inferred child sexual assault and child exploitation. This could include: Content featuring images which sexualise young people; Attempts to recruit a young person to produce CSAM; Offering to share CSAM; Content which is grooming or soliciting sexual services from a young person. TikTok has zero tolerance for child sexual exploitation.",
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
        "evidenceRequirements": [
          {
            "description": "Report via illegal content reporting channels without downloading, saving, commenting on, sharing or interacting with the content",
            "example": "Reporting through TikTok's in-app reporting tool or a trusted child safety organisation",
            "reason": "To prevent further distribution of the material and enable proper handling by specialists"
          }
        ],
        "removalCriteria": [
          "Content sexualises a young person under 18",
          "Content constitutes Child Sexual Abuse Material",
          "Content involves recruitment, grooming, or solicitation of a young person for sexual purposes"
        ]
      },
      {
        "id": "tiktok-ric-illegal-privacy-violations",
        "reference": "Guide to illegal content reporting categories - Illegal privacy-related violations",
        "summary": "Prohibits illegally disclosing someone's personal data or private information without their consent, including threats to disclose such information.",
        "quote": "Illegal privacy-related violations means illegally disclosing someone's personal data without their consent, or other private information in a way which violates their privacy rights. In some cases, this may include offering or threatening to disclose the information.",
        "contentTypes": [
          "private",
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
            "description": "Identify the personal data or private information within the content",
            "example": "A screenshot showing an address, phone number, or personal document shared without consent",
            "reason": "To allow assessment of what specific private information is at issue"
          },
          {
            "description": "Identify the individual the information relates to and whether they are under 18",
            "example": "Confirming the age and identity of the affected person",
            "reason": "To determine applicable protections and severity of the violation"
          },
          {
            "description": "Explain whether the person or organisation sharing the information had consent to do so",
            "example": "A statement that the content was shared without the subject's permission",
            "reason": "To establish lack of consent as required for illegality"
          },
          {
            "description": "Describe how the content violates the individual's privacy",
            "example": "Explanation of why the information is considered private",
            "reason": "To support the claim that the content breaches privacy rights"
          }
        ],
        "removalCriteria": [
          "Personal data or private information disclosed without consent",
          "Disclosure violates the individual's privacy rights",
          "Content includes offering or threatening to disclose private information"
        ]
      },
      {
        "id": "tiktok-ric-ncii",
        "reference": "Guide to illegal content reporting categories - Non-consensual sharing of private or intimate images",
        "summary": "Prohibits illegally distributing intimate images or videos without the depicted individual's consent, including hidden-camera content and non-consensual images taken in public.",
        "quote": "Non-consensual sharing of private or intimate images means illegally distributing intimate images or videos without the individual's consent. This could include: Content focused on a private body part or underwear, or which displays a sexual or private act; Content featuring a person in a private setting protected from view e.g. hidden camera in a toilet or bathroom; Intimate images taken in public where the individual clearly did not consent e.g. upskirting",
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
        "evidenceRequirements": [
          {
            "description": "Explain whether the individual featured consented to the image or video being shared",
            "example": "A statement confirming the depicted person did not agree to the image or video being posted",
            "reason": "To establish that the content was shared without consent, which is required to assess illegality"
          }
        ],
        "removalCriteria": [
          "Image or video is intimate or private in nature",
          "Content was distributed without the depicted individual's consent",
          "Content includes hidden-camera footage or non-consensual public images such as upskirting"
        ]
      },
      {
        "id": "tiktok-ric-harassment-threats",
        "reference": "Guide to illegal content reporting categories - Harassment or threats",
        "summary": "Prohibits threats to commit serious crimes against a person, including physical injury or sexual violence, and persistent behaviour targeting an individual to cause serious alarm or distress.",
        "quote": "Threats mean expressions of intent to commit a serious crime against an individual or group of individuals: in particular, threats to inflict serious physical injury or sexual violence, or threats to destroy or steal their property. Harassment means persistent behaviour (i.e. it is not a one-off) targeted at an individual causing or intending to cause serious alarm or distress.",
        "contentTypes": [
          "personal",
          "other"
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
            "description": "Identify the precise statement or image believed to be an illegal threat",
            "example": "A direct quote or screenshot of the threatening content",
            "reason": "To allow assessment of whether the statement constitutes an illegal threat"
          },
          {
            "description": "Identify the individual or organisation making the threat and who it is directed towards",
            "example": "Names or usernames of the parties involved",
            "reason": "To establish the relationship between the alleged threat and its target"
          },
          {
            "description": "Explain why this amounts to an illegal threat",
            "example": "Description of the intent and potential harm conveyed",
            "reason": "To support the legal assessment of the report"
          },
          {
            "description": "Identify the precise statement or image believed to amount to harassment",
            "example": "Screenshot or description of repeated harassing content",
            "reason": "To evaluate whether the behaviour meets the threshold for harassment"
          },
          {
            "description": "Explain how the content causes the individual serious alarm or distress",
            "example": "Description of the emotional or psychological impact",
            "reason": "To assess the severity of harm caused"
          },
          {
            "description": "Provide details showing the harasser's persistent behaviour, including prior incidents",
            "example": "Dates and descriptions of previous harassing posts or messages targeting the same individual",
            "reason": "To demonstrate the behaviour is not a one-off occurrence"
          }
        ],
        "removalCriteria": [
          "Content expresses intent to commit a serious crime against an individual or group",
          "Threat is of serious physical injury, sexual violence, or destruction/theft of property",
          "Behaviour is persistent and targeted at an individual",
          "Behaviour causes or intends to cause serious alarm or distress"
        ]
      },
      {
        "id": "tiktok-ric-defamation",
        "reference": "Guide to illegal content reporting categories - Defamation",
        "summary": "Prohibits false statements or allegations about an individual or organisation that seriously harm their reputation.",
        "quote": "Defamation is a false statement of fact or allegation about an individual or organisation which seriously harms their reputation. Such a statement is said to be defamatory of the individual.",
        "contentTypes": [
          "personal",
          "other"
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
            "description": "Identify the precise statement or allegation believed to be false and defamatory",
            "example": "A direct quote or screenshot of the statement",
            "reason": "To allow assessment of the specific content in question"
          },
          {
            "description": "Identify the individual or organisation defamed in the statement",
            "example": "Name of the person or organisation targeted",
            "reason": "To confirm who is affected by the statement"
          },
          {
            "description": "Confirm that the reporter is or represents the individual or organisation identified",
            "example": "A statement of representation or personal identification",
            "reason": "To validate standing to report the defamatory content"
          },
          {
            "description": "Explain why the statement is false and defamatory and how it harms reputation",
            "example": "Evidence contradicting the claim and description of reputational harm",
            "reason": "To support the legal assessment of defamation"
          }
        ],
        "removalCriteria": [
          "Statement is false",
          "Statement is presented as fact or allegation about an identifiable individual or organisation",
          "Statement seriously harms the reputation of the individual or organisation"
        ]
      },
      {
        "id": "tiktok-ric-illegal-disclosure",
        "reference": "Guide to illegal content reporting categories - Information-related offences (Illegal disclosure)",
        "summary": "Prohibits illegally disclosing information in breach of EU/EEA and member state laws.",
        "quote": "Illegal disclosure - This means illegally disclosing information in breach of EU/EEA and member state laws.",
        "contentTypes": [
          "private",
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
            "description": "Identify the precise statement, image, message or content believed to have been illegally disclosed",
            "example": "Screenshot or description of the disclosed content",
            "reason": "To assess the specific content forming the basis of the report"
          },
          {
            "description": "Explain why the content breaches the law",
            "example": "Reference to the specific legal restriction believed to apply",
            "reason": "To support the legal assessment of illegality"
          }
        ],
        "removalCriteria": [
          "Content discloses information in breach of applicable EU/EEA or member state law"
        ]
      },
      {
        "id": "tiktok-ric-court-order-breach",
        "reference": "Guide to illegal content reporting categories - Information-related offences (Breaching court orders)",
        "summary": "Prohibits content that breaches court orders restricting disclosure of private details, identities of protected individuals, or contact restrictions such as those following domestic abuse cases.",
        "quote": "Courts often introduce specific orders making it illegal for others to carry out particular activities or disclose certain information. Court orders might restrict: Content publicly disclosing certain elements of court cases; Content publicly disclosing certain details about an individual's private life; Content publicly disclosing the identity of specified individuals (e.g. high risk witnesses); Individuals from contacting certain other individuals (e.g. following a domestic abuse court case)",
        "contentTypes": [
          "private",
          "personal",
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
            "description": "Identify the precise statement, image, message or content believed to breach a court order",
            "example": "Screenshot of the content and description of the alleged breach",
            "reason": "To assess whether the content breaches a specific court order"
          },
          {
            "description": "Provide details about the court order",
            "example": "Case reference or description of the order's restrictions",
            "reason": "To verify the existence and scope of the court order"
          }
        ],
        "removalCriteria": [
          "Content breaches a specific court order restricting disclosure or contact"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/page/global/reporting-illegal-content/en",
      "summary": "Reporters are notified of TikTok's decision on their illegal content report, including if the content is found not to be illegal, and may appeal such decisions.",
      "steps": [
        "Submit a report identifying the content and selecting the relevant illegal content category with supporting evidence",
        "TikTok reviews the content first against its Community Guidelines and may remove it globally if it violates those policies",
        "If not removed globally, TikTok checks whether the report contains sufficient information to assess illegality, rejecting incomplete reports and notifying the reporter",
        "If sufficient information is provided, TikTok assesses whether the content is illegal and restricts access accordingly in the relevant country, region, or removes it entirely",
        "The reporter is notified of the decision, including if the content is found not to be illegal",
        "Reporters who disagree with the decision can appeal using the appeals process"
      ]
    }
  },
  {
    "id": "tiktok-new-1783175882801-1",
    "reference": "TIKTOK-SEXUAL-ABUSE-RESOURCES",
    "title": "TikTok Sexual Abuse and Image-Based Abuse Support Policy",
    "summary": "TikTok Safety Center policy page describing prohibitions on CSAM, image-based sexual abuse, non-consensual sexual acts, and sextortion, and directing users to StopNCII.org and NCMEC's Take It Down tool for removal of non-consensual intimate imagery.",
    "url": "https://www.tiktok.com/safety/en/community-support/sexual-assault-resources",
    "accessTimestamp": "2026-07-04T14:38:02.801Z",
    "policies": [
      {
        "id": "tiktok-sexual-abuse-prohibition",
        "reference": "Sexual abuse - intro",
        "summary": "Prohibits content, whether real or AI-generated, that contains, shares, promotes, or engages with any form of sexual abuse, including child sexual abuse material, grooming, image-based sexual abuse, non-consensual sexual acts, and sextortion.",
        "quote": "We do not allow content, real or AI-generated, that contains, shares, promotes, or engages with any form of sexual abuse on our platform. This includes child sexual abuse material (CSAM), grooming, image-based sexual abuse, non-consensual sexual acts, and sextortion.",
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
          "Content contains, shares, promotes, or engages with sexual abuse",
          "Content is real or AI-generated",
          "Content includes CSAM, grooming, image-based sexual abuse, non-consensual sexual acts, or sextortion"
        ]
      },
      {
        "id": "tiktok-sexual-abuse-mocking-survivors",
        "reference": "What do I do if I come across content that shows or promotes sexual abuse",
        "summary": "Prohibits content that shows or promotes sexual abuse, or mocks survivors of sexual abuse.",
        "quote": "Content on TikTok that shows or promotes sexual abuse, or mocks survivors of sexual abuse, is a violation of our rules and you can report it to us.",
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
          "Content shows or promotes sexual abuse",
          "Content mocks survivors of sexual abuse"
        ]
      },
      {
        "id": "tiktok-csam-prohibition",
        "reference": "What do I do if I come across content that shows or promotes sexual abuse",
        "summary": "Prohibits and treats as illegal any content that implies or shows sexual activity or sexual abuse of a person under the age of 18.",
        "quote": "If the content seems to imply or show sexual activity or sexual abuse of a person under the age of 18, it may be child sexual abuse material (CSAM), which is illegal and strictly prohibited on our platform.",
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
          "Content implies or shows sexual activity or sexual abuse of a person under 18"
        ]
      },
      {
        "id": "tiktok-reporting-confidentiality",
        "reference": "What do I do if I come across content that shows or promotes sexual abuse",
        "summary": "Ensures that a reporter's identity will not be disclosed to the person whose content or account is being reported.",
        "quote": "We will not disclose your identity to the person whose content or account you're reporting.",
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
        "removalCriteria": []
      },
      {
        "id": "tiktok-report-exploitation-minors",
        "reference": "In-app reporting",
        "summary": "Provides an in-app reporting mechanism for content depicting exploitation and abuse of people under 18.",
        "quote": "To report sexual abuse or exploitation of young people: In the TikTok app, press and hold the post you want to report. Tap Report. Tap Violence, abuse, and criminal exploitation, then select Exploitation and abuse of people under 18. Tap Submit.",
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
            "description": "Identification of the specific post depicting exploitation or abuse of a person under 18",
            "example": "Link or in-app reference to the offending post",
            "reason": "Needed for TikTok to locate and review the reported content"
          }
        ],
        "removalCriteria": [
          "Content depicts exploitation and abuse of people under 18"
        ]
      },
      {
        "id": "tiktok-report-sexual-exploitation-adults",
        "reference": "In-app reporting",
        "summary": "Provides an in-app reporting mechanism for content involving sexual exploitation and abuse of adults.",
        "quote": "To report sexual abuse or exploitation of adults: In the TikTok app, press and hold the post you want to report. Tap Report. Tap Violence, abuse, and criminal exploitation, then select Sexual exploitation and abuse. Tap Submit.",
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
            "description": "Identification of the specific post depicting sexual exploitation or abuse",
            "example": "Link or in-app reference to the offending post",
            "reason": "Needed for TikTok to locate and review the reported content"
          }
        ],
        "removalCriteria": [
          "Content involves sexual exploitation and abuse of adults"
        ]
      },
      {
        "id": "tiktok-external-reporting-support",
        "reference": "External reporting",
        "summary": "Supports external partners and resources to address CSAM, image-based sexual abuse, and sextortion beyond in-app reporting.",
        "quote": "TikTok helps young people and adults by supporting partners and resources that tackle CSAM, image-based sexual abuse, and sextortion.",
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
        "removalCriteria": []
      },
      {
        "id": "tiktok-ncii-external-tools",
        "reference": "Image-based sexual abuse or sextortion",
        "summary": "Directs individuals affected by image-based sexual abuse or sextortion to external tools (Take It Down for minors and former minors, StopNCII.org for adults) that help remove and prevent sharing of non-consensual intimate content.",
        "quote": "If you're under 18, or if you're an adult worried that someone might share intimate images or videos from when you were under 18, use Take It Down from the National Center for Missing and Exploited Children (NCMEC). This tool helps people remove sexually explicit content and stops others from sharing it. If you're 18 years or older and worry that someone might share your intimate images or videos without your consent, visit StopNCII.org. This service helps people remove non-consensual content and prevents others from sharing it.",
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
          "Intimate images or videos shared or threatened to be shared without consent",
          "Content originates from when the individual was under 18"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
