import { PlatformPolicies } from '../../types/platforms';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law that criminalizes the nonconsensual publication of intimate images, including AI-generated deepfakes, and requires covered platforms to implement notice-and-removal processes for such content.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
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
    "summary": "Comprehensive policy document outlining TikTok's content standards, including prohibitions on non-consensual intimate imagery, harassment, bullying, and sexually explicit content. This version was released August 14, 2025 and became effective September 13, 2025 (confirmed live version tagged 'cgversion=2025H2update'), with enhanced policies addressing AI-generated/synthetic content, misinformation, and live streaming safety.",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
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
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
    "policies": [
      {
        "id": "tt-tos-content-removal-discretion",
        "reference": "Section 3.6",
        "summary": "Reserves right to remove or restrict access to content, including for violating Terms, Community Guidelines, causing harm to users, or to comply with legal requirements",
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
          "Content that may cause harm to or violate the rights of users or third parties",
          "Content required to be removed to comply with a legal requirement or court order"
        ]
      },
      {
        "id": "tt-tos-image-consent-requirement",
        "reference": "Section 3.4",
        "summary": "Prohibits uploading content that violates laws requiring the consent of individuals whose images appear in the content",
        "quote": "upload content in violation of applicable laws, including laws requiring the consent of individuals whose images appear in Your Content, or their legally authorized representatives,",
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
          "Content uploaded without the consent of individuals whose images appear in it",
          "Content that violates applicable laws regarding image consent"
        ]
      },
      {
        "id": "tt-tos-unauthorized-account-use-v2",
        "reference": "Section 3.4",
        "summary": "Prohibits using or attempting to use another user's account without authorization",
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
          "Attempting to use another user's account without authorization"
        ]
      },
      {
        "id": "tt-tos-inauthentic-impersonation-accounts",
        "reference": "Section 3.4",
        "summary": "Prohibits engaging in inauthentic behaviors such as operating spam or impersonation accounts",
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
          "Operating impersonation accounts",
          "Engaging in inauthentic commercial behaviors"
        ]
      },
      {
        "id": "tt-tos-ai-impersonation-deception",
        "reference": "Section 3.10",
        "summary": "Prohibits using AI-generated content to impersonate others or to deceive or mislead people, including misrepresenting AI-generated content as human-generated",
        "quote": "Represent, imply or otherwise create an impression that your Output is human-generated or otherwise generated without the use of AI, including by removing, obscuring, or altering any watermarks, content-authenticating metadata, or other marking or disclosure applied to or associated with your Output,\n- Provide, create, or otherwise use Input or Output in a fraudulent manner or to deceive, mislead or impersonate others,",
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
          "AI-generated content misrepresented as human-generated",
          "Removal, obscuring, or altering of watermarks or content-authenticating metadata on AI-generated content",
          "Use of AI-generated content to deceive, mislead, or impersonate others"
        ]
      },
      {
        "id": "tt-tos-ai-generative-violation",
        "reference": "Section 3.10",
        "summary": "Prohibits using generative AI features or their outputs in ways that violate Terms, Community Guidelines, or infringe the rights of TikTok, users, or third parties",
        "quote": "Provide, create, or otherwise use Input or Output in a way that violates these Terms, our Community Guidelines, or other conditions or policies or any applicable laws, or that infringes, violates or misappropriates the rights of TikTok USDS Joint Venture, our users, or any third party,",
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
          "AI-generated Input or Output that violates the Terms, Community Guidelines, or applicable laws",
          "AI-generated Input or Output that infringes, violates or misappropriates the rights of users or third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
      "summary": "Users who believe their account was wrongly banned, suspended, or restricted, or whose access to features was wrongly restricted, may submit an appeal through the platform's functionalities for review.",
      "steps": [
        "Submit an appeal through the functionalities provided on the Platform",
        "TikTok will review the decision to ban, suspend, or restrict the account"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-2",
    "reference": "TIKTOK-PP-2025",
    "title": "TikTok Privacy Policy",
    "summary": "Policy governing collection, use, and protection of user personal information, including provisions for data sharing with law enforcement and content moderation processes. Last updated August 2024.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
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
            "description": "Deletion of information and account termination upon becoming aware, in accordance with applicable law"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Personal information collected from a child under 13 outside the designated children's experience",
          "Account belongs to user under 13 years of age"
        ]
      },
      {
        "id": "tiktok-pp-content-removal-under-18",
        "reference": "Content Removal for Users Under 18",
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
        "reference": "Content Removal for Users Under 18",
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
        "id": "tiktok-pp-child-account-deletion-request",
        "reference": "Children and Teens",
        "summary": "Allows parents or guardians to request deletion of a child's account or download of their data",
        "quote": "As a parent or guardian, you can also request to delete the account of your Child or to download their data, by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
          "Requester is a parent or guardian of the child",
          "Request made through designated contact channel"
        ]
      },
      {
        "id": "tiktok-pp-biometric-collection-notice",
        "reference": "Automatically Collected Information",
        "summary": "Requires permission before collecting biometric identifiers such as faceprints and voiceprints from user content where required by law",
        "quote": "We may collect biometric identifiers and biometric information as defined under US laws, such as faceprints and voiceprints, from your user content. Where required by law, we will seek any required permissions from you prior to any such collection.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Biometric information collected without required legal permissions"
        ]
      },
      {
        "id": "tiktok-pp-legal-reasons-sharing",
        "reference": "How We Share Your Information - For Legal Reasons",
        "summary": "Permits disclosure of information to protect rights, safety, and security of users and the public, and to enforce platform terms",
        "quote": "We may also disclose Information We Collect to enforce any terms applicable to the Services, and to protect and defend our rights, interests, safety, and security, and those of our affiliates, users, or the public.",
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
          "Necessary to enforce platform terms",
          "Necessary to protect rights, safety, and security of users, affiliates, or the public"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users may submit requests regarding their information, including content removal, and may appeal decisions made about their requests through the same channels.",
      "steps": [
        "Submit a request to know, access, correct, or delete information via the webform or mailing address provided.",
        "If applicable, submit a content removal request (for California residents under 18) with a description of the content and sufficient information to locate it.",
        "Appeal any decision made about the request through the same webform or mailing address.",
        "Authorized agents may submit requests on a user's behalf with proof of authorization, subject to identity verification."
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-3",
    "reference": "TIKTOK-IP-2025",
    "title": "TikTok Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies. Includes specific processes for reporting and appealing IP violations. Updated March 2025.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
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
        "summary": "Removes user content that infringes copyright, may restrict LIVE feature access, and may ban accounts of repeat infringers or in cases of severe violations",
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
          "User repeatedly commits copyright infringement",
          "Severe copyright violations occur",
          "Account was used for improper activities relating to copyright infringement"
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
        "summary": "Removes content that violates trademark rights, may restrict LIVE feature access, and may ban accounts of repeat infringers or in cases of severe violations",
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
          "Severe trademark violations occur",
          "Account was used for improper activities relating to trademark infringement"
        ]
      },
      {
        "id": "tt-ip-eu-unavailability-request",
        "reference": "EU Copyright Directive",
        "summary": "Allows rightsholders to request that their music or audiovisual works be made unavailable in the EU and requests prevention of re-upload of removed infringing content",
        "quote": "If you want to request that your music or audiovisual works are made unavailable in the EU, we need you to file this form. So that TikTok can consider your request, you will have to provide us with relevant and necessary information about you and your copyrighted works. Upon receiving this information and validating your request, TikTok will do its best to ensure that your copyrighted work is made unavailable on TikTok in the EU. You may ask us to prevent future copies of a video from re-appearing on the platform when you submit a report via our online Copyright Infringement Report form. If you do so, and where a video is removed due to your report, we will use our best efforts to prevent the same video from re-appearing on the platform.",
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
            "description": "Relevant and necessary information about the requester and their copyrighted works",
            "example": "Ownership documentation, description of the copyrighted works",
            "reason": "To validate the request to make works unavailable in the EU"
          }
        ],
        "removalCriteria": [
          "Rightsholder requests music or audiovisual works be made unavailable in the EU",
          "Video previously removed due to a copyright report may be prevented from re-appearing upon request"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users whose content has been removed due to a copyright or trademark infringement report can submit an in-app appeal, providing contact information and supporting evidence. Appeals may be forwarded to the original reporter, who may pursue further legal action.",
      "steps": [
        "Receive an in-app notification if content is removed due to a copyright or trademark infringement report",
        "Optionally contact the rightsholder directly to request a retraction",
        "Submit an appeal within the TikTok app via the link in the notification",
        "Provide all required information, including contact details and supporting evidence for the claim",
        "TikTok may contact the appellant with additional questions",
        "TikTok may forward the appeal, including contact information, to the original reporter where appropriate and authorized by law",
        "For copyright appeals outside the EU, content may be reinstated if it does not infringe or if no legal action is filed by the claimant within the required timeframe; decision to reinstate is at TikTok's sole discretion"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-4",
    "reference": "TIKTOK-SAFETY-2025",
    "title": "TikTok Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent content, part of the Community Guidelines refreshed August 14, 2025 (effective September 13, 2025). Includes specific provisions for protecting minors and public figures, with enhanced enforcement mechanisms and clearer definitions of bullying versus criticism.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
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
        "id": "tt-cg-privacy-reporting",
        "reference": "Adult Sexual Abuse",
        "summary": "Provides a dedicated reporting channel for individuals whose intimate privacy has been violated on the platform",
        "quote": "If you think your intimate privacy has been violated on TikTok, report it to us here",
        "contentTypes": [
          "intimate",
          "private",
          "personal",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that violates a person's intimate privacy"
        ]
      },
      {
        "id": "tt-cg-non-consensual-sexual-acts",
        "reference": "Adult Sexual Abuse - Non-Consensual Sexual Acts",
        "summary": "Prohibits content that shows or promotes non-consensual sexual acts against adults",
        "quote": "We don't allow content that shows or promotes the sexual abuse or exploitation of adults. This includes: Non-Consensual Sexual Acts",
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
          "Content depicting non-consensual sexual acts",
          "Content promoting sexual abuse or exploitation of adults"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758659200366-5",
    "reference": "TIKTOK-MATURE-2025",
    "title": "TikTok Sensitive and Mature Themes Policy",
    "summary": "Policy governing sexually suggestive content, adult themes, and age-restricted material, part of the Community Guidelines refreshed August 14, 2025 (effective September 13, 2025). Includes content levels system and restrictions for teen accounts.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
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
    "summary": "Specific community guidelines section addressing privacy violations, personal information sharing, and security threats, part of the Community Guidelines refreshed August 14, 2025 (effective September 13, 2025). Includes policies on high-risk and moderate-risk personal information sharing and protecting intimate privacy.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
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
    "id": "tiktok-new-1783173078332-0",
    "reference": "TIKTOK-CG-PRINCIPLES-2025",
    "title": "TikTok Community Principles",
    "summary": "The eight core principles underlying TikTok's Community Guidelines and enforcement decisions, including 'Prevent Harm' and 'Protect Privacy', which explicitly commits to ensuring content doesn't invade intimate privacy.",
    "url": "https://www.tiktok.com/community-guidelines/en/community-principles",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
    "policies": [
      {
        "id": "tt-cg-principles-prevent-harm",
        "reference": "Principle 1 - Prevent Harm",
        "summary": "Restricts content that causes physical, emotional, or financial harm, balancing free expression against the need to minimize harm.",
        "quote": "Prevent Harm: Keeping TikTok safe and fun is our top priority. Harm can look different—it might be physical, emotional, or even financial. To strike the right balance with free expression, we restrict content only when necessary and in a way that seeks to minimize the impact on speech.",
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
          "Content causes physical, emotional, or financial harm"
        ]
      },
      {
        "id": "tt-cg-principles-protect-privacy",
        "reference": "Principle 6 - Protect Privacy",
        "summary": "Commits to protecting the privacy of individuals shown or discussed on the platform, prohibiting content that exposes personal information or invades intimate privacy.",
        "quote": "Protect Privacy: We are committed to protecting the privacy of our community and anyone shown or discussed on the platform. We strive to ensure that content doesn't expose anyone's personal information or invade their intimate privacy.",
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
          "Content exposes a person's personal information",
          "Content invades a person's intimate privacy"
        ]
      },
      {
        "id": "tt-cg-principles-kindness-respect",
        "reference": "Principle 3 - Encourage Kindness and Respect",
        "summary": "Aims to prevent content that demeans or dehumanizes others in order to foster a safer, more respectful community.",
        "quote": "Encourage Kindness and Respect: We aim to foster a space where people treat each other with empathy and dignity. Our approach is designed to help prevent content that demeans or dehumanizes others, making TikTok a safer and more welcoming place for everyone.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content demeans or dehumanizes others"
        ]
      },
      {
        "id": "tt-cg-principles-act-fairly",
        "reference": "Principle 8 - Act Fairly",
        "summary": "Commits to impartial and clear enforcement decisions, with opportunities for users to appeal.",
        "quote": "Act Fairly: Evaluating millions of pieces of content each day is a complex effort, but we're committed to being impartial, clear, and providing opportunities to appeal.",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1783173078332-1",
    "reference": "TIKTOK-POLICIES-OVERVIEW-2025",
    "title": "TikTok Policies and Engagement Overview",
    "summary": "Hub page summarizing TikTok's Community Guidelines structure, distinguishing 'Not Allowed', 'Age-Restricted', and 'FYF Ineligible' content categories, and linking to the full guidelines and enforcement framework.",
    "url": "https://www.tiktok.com/safety/en/policies-and-engagement/overview",
    "accessTimestamp": "2026-07-04T13:51:18.332Z",
    "policies": [
      {
        "id": "tt-cg-adult-sexual-abuse",
        "reference": "Safety and Civility - Adult Sexual Abuse",
        "summary": "Prohibits content that shows, promotes, or facilitates the sexual abuse or exploitation of adults.",
        "quote": "Adult Sexual Abuse: We don't allow content that shows, promotes, or facilitates adult sexual abuse or exploitation.",
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
        "removalCriteria": [
          "Content shows adult sexual abuse or exploitation",
          "Content promotes adult sexual abuse or exploitation",
          "Content facilitates adult sexual abuse or exploitation"
        ]
      },
      {
        "id": "tt-cg-youth-sexual-abuse",
        "reference": "Safety and Civility - Youth Sexual and Physical Abuse",
        "summary": "Prohibits content that shows, promotes, or facilitates the sexual abuse, exploitation, or harm of young people.",
        "quote": "Youth Sexual and Physical Abuse: We don't allow content that shows, promotes, or facilitates the sexual abuse, exploitation, or harm of young people.",
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
        "removalCriteria": [
          "Content shows sexual abuse, exploitation, or harm of young people",
          "Content promotes such abuse",
          "Content facilitates such abuse"
        ]
      },
      {
        "id": "tt-cg-harassment-bullying",
        "reference": "Safety and Civility - Harassment and Bullying",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
        "quote": "Harassment and Bullying: We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse. We allow commentary about political figures which may be critical, but remove content that crosses into severe harm.",
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
        "removalCriteria": [
          "Content harasses or bullies others",
          "Content includes degrading remarks about appearance",
          "Content includes doxing",
          "Content includes sexual harassment",
          "Content involves coordinated abuse",
          "Content crosses into severe harm even for public figure commentary"
        ]
      },
      {
        "id": "tt-cg-body-exposure",
        "reference": "Sensitive and Mature Themes - Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits certain types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or sexually suggestive behavior, including content involving young people.",
        "quote": "Body Exposure and Sexualized Behaviors: We don't allow some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
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
        "removalCriteria": [
          "Content depicts nudity",
          "Content depicts sexual activity",
          "Content depicts sexual services",
          "Content depicts sexually suggestive behavior",
          "Content involves significant exposure of young people"
        ]
      },
      {
        "id": "tt-cg-edited-media-aigc",
        "reference": "Integrity and Authenticity - Edited Media and AI-Generated Content (AIGC)",
        "summary": "Requires clear labeling of AI-generated or edited content that realistically depicts people or scenes, and prohibits AI-generated content that misleads or harms individuals.",
        "quote": "Edited Media and AI-Generated Content (AIGC): We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
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
        "removalCriteria": [
          "AI-generated or edited content realistically depicting a person is not clearly labeled",
          "AI-generated content misleads about matters of public importance",
          "AI-generated content harms individuals"
        ]
      },
      {
        "id": "tt-cg-unoriginal-content-ip",
        "reference": "Integrity and Authenticity - Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates intellectual property rights, including reposting copyrighted or trademarked material without permission.",
        "quote": "Unoriginal Content and Intellectual Property Rights: We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other",
          "relationship"
        ],
        "timeframes": null,
        "removalCriteria": [
          "Content violates intellectual property rights",
          "Content is a repost of copyrighted or trademarked material without permission"
        ]
      },
      {
        "id": "tt-cg-personal-information",
        "reference": "Privacy and Security - Personal Information",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "quote": "Personal Information: We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
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
        "removalCriteria": [
          "Content shares personal information that could lead to identity theft",
          "Content shares personal information that could lead to stalking",
          "Content shares personal information that could lead to fraud"
        ]
      },
      {
        "id": "tt-cg-platform-security",
        "reference": "Privacy and Security - Platform Security",
        "summary": "Prohibits attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "quote": "Platform Security: We don't allow attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "contentTypes": [
          "other",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "removalCriteria": [
          "Attempts to hack TikTok's systems",
          "Attempts to reverse-engineer TikTok's systems",
          "Attempts to otherwise compromise TikTok's systems"
        ]
      },
      {
        "id": "tt-cg-deceptive-behavior",
        "reference": "Integrity and Authenticity - Deceptive Behavior & Fake Engagement",
        "summary": "Prohibits accounts that mislead or manipulate the platform, including impersonation-related deceptive behavior.",
        "quote": "Deceptive Behavior & Fake Engagement: We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "contentTypes": [
          "other",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "removalCriteria": [
          "Account misleads or attempts to manipulate the platform",
          "Trade of services that artificially boost engagement or trick the recommendation system"
        ]
      },
      {
        "id": "tt-cg-content-removal-enforcement",
        "reference": "Content Moderation - We Remove Content",
        "summary": "Content that violates the 'Not Allowed' rules within the Community Guidelines will be removed from the platform.",
        "quote": "Everyone on TikTok can share content, but when we identify content that falls under the \"Not Allowed\" rules in our Community Guidelines, we'll remove it.",
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
        "removalCriteria": [
          "Content falls under the 'Not Allowed' rules in the Community Guidelines"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
