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
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
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
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
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
    "reference": "TIKTOK-TOS-2026",
    "title": "TikTok Terms of Service",
    "summary": "Legal agreement between TikTok USDS Joint Venture LLC and users establishing platform rules, user obligations, and enforcement mechanisms following US ownership transition. Updated January 2026 with new data collection and AI content provisions.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
    "policies": [
      {
        "id": "tt-tos-harassment-intimidation",
        "reference": "Section 3.4",
        "summary": "Prohibits intimidating or harassing others and promoting sexually explicit material",
        "quote": "do anything misleading or harmful",
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
          "Content that is misleading or harmful"
        ]
      },
      {
        "id": "tt-tos-exploitative-conduct",
        "reference": "Section 3.4",
        "summary": "Prohibits engaging with minors in an exploitative or inappropriate way",
        "quote": "engage with minors in an exploitative or inappropriate way",
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
          "Content involving exploitative or inappropriate engagement with minors"
        ]
      },
      {
        "id": "tt-tos-consent-violations",
        "reference": "Section 3.4",
        "summary": "Prohibits uploading content in violation of laws requiring consent of individuals whose images appear",
        "quote": "upload content in violation of applicable laws, including laws requiring the consent of individuals whose images appear in Your Content, or their legally authorized representatives",
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
          "Content uploaded without required consent of individuals whose images appear",
          "Content violating applicable laws regarding consent"
        ]
      },
      {
        "id": "tt-tos-impersonation-accounts",
        "reference": "Section 3.4",
        "summary": "Prohibits inauthentic commercial behaviors including spam or impersonation accounts",
        "quote": "engage in inauthentic commercial behaviors, such as by operating spam or impersonation accounts or any other means further detailed in our Community Guidelines",
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
        "id": "tt-tos-unauthorized-account-access",
        "reference": "Section 3.4",
        "summary": "Prohibits using or attempting to use another user's account without authorization",
        "quote": "use or attempt to use another user's account without authorization",
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
        "id": "tt-tos-commercial-content-restrictions",
        "reference": "Section 3.4",
        "summary": "Prohibits using TikTok Content or another user's content for commercial purposes unless permitted",
        "quote": "use TikTok Content (as defined in Section 3.5), another user's content or generative AI-enabled features for commercial purposes unless permitted by TikTok USDS Joint Venture or the user, respectively (including via applicable account settings)",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
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
          "Commercial use of TikTok Content without permission",
          "Commercial use of another user's content without permission"
        ]
      },
      {
        "id": "tt-tos-content-removal-discretion",
        "reference": "Section 3.6",
        "summary": "Reserves right to remove or restrict access to content for violations or harm to users",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Content may be removed at any time for violations or harm"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that violates Terms, Community Guidelines, or other policies",
          "Content that may cause harm to users or third parties",
          "Content that violates rights of users or third parties",
          "Content removal required by legal requirement or court order"
        ]
      },
      {
        "id": "tt-tos-ai-content-restrictions",
        "reference": "Section 3.10",
        "summary": "Prohibits using AI features to create content that violates Terms or infringes rights",
        "quote": "Provide, create, or otherwise use Input or Output in a way that violates these Terms, our Community Guidelines, or other conditions or policies or any applicable laws, or that infringes, violates or misappropriates the rights of TikTok USDS Joint Venture, our users, or any third party",
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
          "AI-generated content that violates Terms or Community Guidelines",
          "AI-generated content that infringes rights of users or third parties"
        ]
      },
      {
        "id": "tt-tos-ai-deceptive-content",
        "reference": "Section 3.10",
        "summary": "Prohibits representing AI-generated content as human-generated or removing AI disclosure markers",
        "quote": "Represent, imply or otherwise create an impression that your Output is human-generated or otherwise generated without the use of AI, including by removing, obscuring, or altering any watermarks, content-authenticating metadata, or other marking or disclosure applied to or associated with your Output",
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
          "Removal or alteration of AI disclosure markers or watermarks"
        ]
      },
      {
        "id": "tt-tos-ai-fraudulent-use",
        "reference": "Section 3.10",
        "summary": "Prohibits using AI features in a fraudulent manner or to deceive or impersonate others",
        "quote": "Provide, create, or otherwise use Input or Output in a fraudulent manner or to deceive, mislead or impersonate others",
        "contentTypes": [
          "intimate",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "AI-generated content used fraudulently",
          "AI-generated content used to deceive, mislead or impersonate others"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
      "summary": "Users can submit appeals through Platform functionalities for account bans, suspensions, or content restrictions",
      "steps": [
        "Submit an appeal through the functionalities provided on the Platform",
        "TikTok will review the decision",
        "Users will be notified of the appeal outcome"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-2",
    "reference": "TIKTOK-PP-2026",
    "title": "TikTok Privacy Policy",
    "summary": "Policy governing collection, use, and protection of user personal information under US ownership, including enhanced provisions for precise location tracking, AI interactions, and data sharing. Updated January 2026 following ownership transition.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
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
        "summary": "Prohibits collection of personal information from children and requires immediate account termination and data deletion when discovered",
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
        "quote": "Users of the Services who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Services who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their Child's account (for parents and guardians with teen users under 16).",
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
      "summary": "Users can appeal decisions made about their requests through the same methods used to submit initial requests",
      "steps": [
        "Submit appeal through the privacy report webform at https://www.tiktok.com/legal/report/privacy",
        "Alternatively, send appeal to the physical address: TikTok USDS Joint Venture LLC, Attn: Privacy Policy Inquiry, 5800 Bristol Parkway, Suite 300, Culver City, CA 90230"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-3",
    "reference": "TIKTOK-IP-2025",
    "title": "TikTok Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies. Updated March 2025 and effective April 2025 with enhanced enforcement mechanisms and clearer guidelines for creators.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
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
      "url": null,
      "summary": "Users can submit appeals through in-app notifications for both copyright and trademark removals, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal form from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal for review by TikTok",
        "Appeal may be forwarded to original reporter including contact information",
        "Content may be reinstated at TikTok's discretion based on review"
      ]
    }
  },
  {
    "id": "tiktok-new-1758659200366-4",
    "reference": "TIKTOK-SAFETY-2025",
    "title": "TikTok Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent content. Includes specific provisions for protecting minors and public figures, with enhanced enforcement mechanisms. Updated September 2025 as part of Community Guidelines refresh.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
    "policies": [
      {
        "id": "tt-cg-ncii",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes",
        "quote": "Image-Based Sexual Abuse",
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
        "quote": "Sextortion",
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
        "quote": "Sextortion",
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
        "quote": "Child Sexual Abuse Material (CSAM)",
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
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
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
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
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
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
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
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
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
        "quote": "Child Sexual Abuse Material (CSAM)",
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
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
    "policies": [
      {
        "id": "tt-cg-nudity-sexual-activity",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content including digital or illustrated images",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity",
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
          "Content depicts sexual activity"
        ]
      },
      {
        "id": "tt-cg-sexual-services",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits facilitating access to sexual services including offering sexual acts, chats, or imagery",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Sexual Services",
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
          "Content facilitates access to sexual services"
        ]
      },
      {
        "id": "tt-cg-youth-sexualized-content",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits sexually suggestive acts or significant body exposure involving young people",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Sexually suggestive acts or significant body exposure involving youth",
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
          "Content shows sexually suggestive acts involving young people",
          "Content depicts significant body exposure involving young people"
        ]
      },
      {
        "id": "tt-cg-adult-significant-exposure",
        "reference": "Body Exposure and Sexualized Behaviors - Age-restricted and FYF ineligible",
        "summary": "Age-restricts content showing significant adult body exposure or sexually suggestive behavior involving adults",
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
          "Content displays sexually suggestive behavior involving adults"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758665740946-0",
    "reference": "TIKTOK-PRIVACY-SEC-2025",
    "title": "TikTok Privacy and Security Guidelines",
    "summary": "Specific community guidelines section addressing privacy violations, personal information sharing, and security threats. Includes policies on high-risk and moderate-risk personal information sharing.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2026-04-13T09:38:19.518Z",
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
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Privacy violation reporting process for users who believe their privacy has been violated",
      "steps": [
        "Report privacy violation through the provided link"
      ]
    }
  }
],
};
