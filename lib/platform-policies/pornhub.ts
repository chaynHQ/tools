import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "ph-terms-of-service",
    "reference": "PH-TOS",
    "title": "Pornhub Terms of Service",
    "summary": "Legal terms governing the use of Pornhub, including content ownership, security responsibilities, and prohibited behavior.",
    "url": "https://www.pornhub.com/information/terms",
    "accessTimestamp": "2025-09-23T18:43:23.850Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T18:43:23.850Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Prohibits sharing of personal information without consent and provides mechanisms for content removal",
        "quote": "We may disclose your information to third parties for the above purposes where necessary to comply with our legal obligations, to perform a task in the public interest (where the public interest is laid down by applicable law), or under our legitimate interests and the interests of the public, including as part of investigations or regulatory enquiries to detect, investigate and prosecute illegal activity.",
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
          "Content shared without consent",
          "Violation of privacy rights",
          "Illegal activity involving personal information"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Warns users that content they post becomes publicly available and advises caution in sharing personal information",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
          "User contributions made publicly available without understanding of consequences"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their account and user contributions at any time",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
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
          "User request for account deletion",
          "User request for content removal from their account"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Provides users with the right to request deletion of their personal data",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data",
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
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "months",
            "description": "One month to respond to data deletion requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification to ensure right to access or delete information",
            "example": "Username and email address used to create account",
            "reason": "Security measure to ensure personal data is not disclosed to unauthorized persons"
          }
        ],
        "removalCriteria": [
          "Valid request for data deletion",
          "Successful identity verification",
          "No legal obligations preventing deletion"
        ]
      },
      {
        "id": "ph-pp-minor-protection",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Prohibits minors from using the platform and requires deletion of any minor's personal information",
        "quote": "Pornhub prohibits minors from using the platform. Pornhub is forbidden for persons under the age of 18 and the applicable age of majority in the jurisdiction from which Pornhub is accessed. We do not knowingly process personal information from minors. If you are the parent or legal guardian of a minor who has provided us with personal information, then please contact us at support@pornhub.com to have that minor's personal information deleted.",
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
            "description": "Proof of being parent or legal guardian of minor",
            "example": "Documentation showing guardianship relationship",
            "reason": "To verify authority to request deletion of minor's information"
          }
        ],
        "removalCriteria": [
          "Content involving persons under 18 years of age",
          "Personal information of minors",
          "Request from verified parent or legal guardian"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-compliance",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Requires compliance with legal processes and law enforcement requests for content removal or disclosure",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues; protect against harm to the rights, property or safety of our company, our users, our employees, or others",
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
            "description": "Valid court order, subpoena, search warrant or equivalent legal document",
            "example": "Document correctly issued by valid court of law",
            "reason": "Legal compliance and verification of authority"
          }
        ],
        "removalCriteria": [
          "Valid legal process requiring disclosure or removal",
          "Court order or government authority request",
          "Illegal or suspected illegal activities",
          "Harm to rights, property or safety of users or company"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise their rights including data deletion, rectification, and objection to processing",
      "steps": [
        "Contact support@pornhub.com with your request",
        "Provide username and email address used to create account",
        "Provide any additional information reasonably requested for identity verification",
        "Verify access to your account and/or email account used for registration",
        "Wait up to one month for response to your request"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T18:43:23.850Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758653003850-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Dedicated policy specifically addressing non-consensual intimate imagery, consent requirements, and removal procedures for NCII content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T18:43:23.850Z",
    "policies": [
      {
        "id": "ph-ncii-recording-distribution",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits recording or distribution of intimate images without consent",
        "quote": "The recording or distribution of intimate images (that is, photos and videos that are generally understood to depict explicit sexual activity or nudity or partial nudity) without someone's consent is a violation of that person's privacy and is a severe violation of our Terms of Service, and is strictly prohibited.",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate images without consent",
          "Images show explicit sexual activity or nudity without permission",
          "Content violates the person's privacy"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits videos or photos taken without valid written consent including hidden camera content",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content includes hidden or spy camera footage",
          "Content was taken in public or private settings without permission"
        ]
      },
      {
        "id": "ph-ncii-revenge-sharing",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits sharing explicit sexual images without valid written consent including revenge sharing",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\")",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images",
          "Content was shared as revenge or without permission"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-sharing",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits sharing non-sexually explicit images without valid written consent",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent",
        "contentTypes": [
          "personal"
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent",
          "Personal images posted without permission"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits doxing and exposing private identifying information",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private"
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information",
          "Content includes phone numbers, email addresses, physical addresses, or full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "Content Prohibitions",
        "summary": "Prohibits all deepfakes and AI-generated manipulations of a person's image",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated or modified images",
          "Content manipulates a person's image to deceive viewers",
          "Content uses deepfake technology in any form"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "Content Prohibitions",
        "summary": "Prohibits content featuring or promoting non-consensual acts whether real or simulated",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited.",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content features non-consensual acts",
          "Content promotes non-consensual activities",
          "Content depicts real or simulated non-consensual situations"
        ]
      },
      {
        "id": "ph-ncii-incapacitated-persons",
        "reference": "Content Prohibitions",
        "summary": "Prohibits content depicting persons appearing drugged, incapacitated, or intoxicated in sexual acts",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged or incapacitated",
          "Content depicts intoxicated individuals in sexual situations",
          "Content involves persons who cannot provide valid consent due to impairment"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.porn-hub.website/content-removal",
      "summary": "Users can report violations through the Content Removal Request Form for review and removal",
      "steps": [
        "Complete and submit the Content Removal Request Form",
        "Include all relevant URL links to the content in question",
        "Request will be addressed confidentially",
        "Content will be removed expeditiously upon review"
      ]
    }
  },
  {
    "id": "pornhub-new-1758653003850-1",
    "reference": "PH-TRANSPARENCY-REPORT",
    "title": "Pornhub Transparency Report",
    "summary": "Annual report detailing content moderation statistics, DMCA takedowns, law enforcement requests, and safety measures implemented by the platform.",
    "url": "https://www.pornhub.com/transparency",
    "accessTimestamp": "2025-09-23T18:43:23.850Z",
    "policies": [],
    "appealProcess": null
  }
],
};
