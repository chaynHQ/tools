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
    "accessTimestamp": "2025-09-23T18:47:41.521Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T18:47:41.521Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6",
        "summary": "Prohibits posting content without proper consent and provides content removal mechanisms",
        "quote": "We provide areas on Pornhub where you can post information about yourself and others, communicate with others, upload content (e.g., pictures, video files, etc.), and post comments or reviews of content found on Pornhub. Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content posted without proper consent",
          "User contributions that violate privacy"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8",
        "summary": "Allows users to delete their accounts and associated content at any time",
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
          "User request for content removal through account settings"
        ]
      },
      {
        "id": "ph-pp-age-verification",
        "reference": "Section 2",
        "summary": "Prohibits minors from using the platform and requires age verification",
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
            "description": "Proof of guardianship for minor's content removal",
            "example": "Legal documentation showing parent/guardian relationship",
            "reason": "To verify authority to request removal of minor's content"
          }
        ],
        "removalCriteria": [
          "Content involving minors",
          "Personal information of minors"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "Section 4",
        "summary": "Processes identity verification including biometric information for account security",
        "quote": "If you choose to register to Pornhub or if this is required for age verification purposes, we process identifiers you submit to us (including government-issued photo identification as well as other documentation) for us to verify your identity, age, and record checks. Our third-party service provider will also process you face scan which is considered biometric information to verify the authenticity of the identifiers you provide to us while registering for such services.",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or state ID",
            "reason": "To verify identity and prevent impersonation"
          },
          {
            "description": "Biometric verification through face scan",
            "example": "Live selfie matching government ID",
            "reason": "To confirm authenticity and prevent fraudulent accounts"
          }
        ],
        "removalCriteria": [
          "Fraudulent identity verification",
          "Impersonation through false identification"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "Section 18",
        "summary": "Provides users with rights to access, rectify, and delete their personal data",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data; Right of access: you have the right to receive information on the personal data we hold about you and how such personal data is used, as well as a copy of your personal data; Right to rectification: you have the right to rectify inaccurate personal data concerning you.",
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
            "description": "Response time for data subject requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification to process data deletion request",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and ensure authorized deletion request"
          }
        ],
        "removalCriteria": [
          "Valid user request for data deletion",
          "Verified identity for data subject rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for data subject requests and content-related issues",
      "steps": [
        "Contact support@pornhub.com with your request",
        "Provide required verification information (username and email address)",
        "Wait for response within one month for data subject requests",
        "Additional verification may be required to confirm identity"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T18:47:41.521Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758653261521-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Dedicated policy specifically addressing non-consensual intimate imagery (NCII), including prohibited content types, detection technologies, and removal procedures.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T18:47:41.521Z",
    "policies": [
      {
        "id": "ph-ncii-recording-distribution",
        "reference": "Non-Consensual Content Policy",
        "summary": "Strictly prohibits the recording or distribution of intimate images without someone's consent",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate images without consent",
          "Images show explicit sexual activity or nudity without permission",
          "Content was recorded without the person's consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits videos or photos taken without valid written consent, including hidden camera content",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content appears to be taken covertly or without knowledge",
          "Content includes hidden camera or voyeuristic material"
        ]
      },
      {
        "id": "ph-ncii-revenge-sharing",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits sharing explicit sexual images of someone without their valid written consent, including revenge sharing",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images",
          "Images were shared by someone other than the person depicted"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-sharing",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits sharing non-sexually explicit images of someone without their valid written consent",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent",
          "Content depicts someone without their permission"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "Guidelines - Do NOT",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about individuals",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information",
          "Content includes phone numbers, email addresses, or physical addresses",
          "Content reveals full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "Guidelines - Prohibited Content",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated or modified images to deceive viewers",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated or digitally manipulated images",
          "Content is designed to deceive or mislead viewers",
          "Images or videos have been modified to falsely depict someone"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits content featuring or promoting non-consensual acts, real or simulated",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited.",
        "contentTypes": [
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content features non-consensual acts",
          "Content promotes non-consensual activities",
          "Content depicts simulated non-consensual scenarios"
        ]
      },
      {
        "id": "ph-ncii-intoxicated-content",
        "reference": "Guidelines - Prohibited Content",
        "summary": "Prohibits content depicting persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged or incapacitated",
          "Content depicts intoxicated individuals in sexual situations",
          "Persons in content appear to have impaired judgment"
        ]
      },
      {
        "id": "ph-ncii-swift-removal",
        "reference": "Enforcement",
        "summary": "Commits to swift removal of infringing content and account suspension where appropriate",
        "quote": "In all cases where we identify or are made aware of content that violates this policy, our Trust & Safety and Moderation teams work swiftly to: Review and remove infringing content; Fingerprint the content in question to help block future uploads of the same content to our sites; AND Suspend or permanently terminate the associated uploader's account, where appropriate.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Swift action promised but no specific timeframe given"
          },
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal promised but no specific timeframe given"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates non-consensual content policy",
          "Content has been identified or reported as violating",
          "Content meets criteria for policy violation"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
