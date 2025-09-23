import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "pornhub-new-1758658541698-0",
    "reference": "PH-NCCP-001",
    "title": "Non-Consensual Content Policy",
    "summary": "Comprehensive policy covering non-consensual intimate imagery, consent requirements, content removal procedures, and enforcement measures. Updated September 2024.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T20:15:41.698Z",
    "policies": [
      {
        "id": "ph-nccp-001-intimate-images",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits recording or distribution of intimate images without consent",
        "quote": "The recording or distribution of intimate images (that is, photos and videos that are generally understood to depict explicit sexual activity or nudity or partial nudity) without someone's consent is a violation of that person's privacy and is a severe violation of our Terms of Service, and is strictly prohibited.",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts explicit sexual activity or nudity without consent",
          "Content was recorded without the person's consent",
          "Content was distributed without the person's consent"
        ]
      },
      {
        "id": "ph-nccp-001-hidden-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos taken without valid written consent including hidden camera content",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
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
          "Content was taken without valid written consent",
          "Content includes hidden or spy camera footage",
          "Content includes voyeuristic material"
        ]
      },
      {
        "id": "ph-nccp-001-revenge-porn",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit sexual images without valid written consent",
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
          "Content constitutes non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-nccp-001-non-sexual-images",
        "reference": "Non-Consensual Content Policy - Guidelines",
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
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-001-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits exposing private and identifying information about individuals",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private"
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
        "id": "ph-nccp-001-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits any deepfakes or AI-generated manipulations of a person's image",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal"
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated or modified images",
          "Content uses deepfake technology to manipulate a person's likeness",
          "Content is designed to deceive viewers about a person's actions or words"
        ]
      },
      {
        "id": "ph-nccp-001-non-consensual-acts",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits content featuring or promoting non-consensual acts, real or simulated",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited.",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
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
        "id": "ph-nccp-001-intoxicated-content",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content depicting persons appearing drugged, incapacitated, or intoxicated in sexual acts",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged or incapacitated",
          "Content depicts intoxicated individuals in sexual situations",
          "Content involves persons whose judgment appears objectively impaired"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758658541698-1",
    "reference": "PH-PP-001",
    "title": "Privacy Policy",
    "summary": "Details data collection, usage, sharing practices, and user privacy rights for Pornhub platform users and content creators.",
    "url": "https://pornhub.com.do/privacy-policy/",
    "accessTimestamp": "2025-09-23T20:15:41.698Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758658541698-2",
    "reference": "PH-DMCA-001",
    "title": "DMCA Notice of Copyright Infringement",
    "summary": "Copyright infringement takedown procedures and DMCA compliance process for unauthorized content removal.",
    "url": "http://www.pornhubapp.com/dmca/",
    "accessTimestamp": "2025-09-23T20:15:41.698Z",
    "policies": [],
    "appealProcess": null
  }
],
};
