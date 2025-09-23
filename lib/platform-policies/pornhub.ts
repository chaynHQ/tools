import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "pornhub-new-1758648538881-0",
    "reference": "PH-NCCP-001",
    "title": "Non-Consensual Content Policy",
    "summary": "Comprehensive policy covering consent requirements, non-consensual content violations, content removal processes, and reporting mechanisms. Includes detailed guidelines on sensitive themes and enforcement procedures.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T17:28:58.881Z",
    "policies": [
      {
        "id": "ph-nccp-001-intimate-without-consent",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits recording or distribution of intimate images without someone's consent",
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
          "Images show explicit sexual activity or nudity without valid written consent"
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
          "Content includes hidden or spy camera footage"
        ]
      },
      {
        "id": "ph-nccp-001-revenge-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit sexual images of someone without their valid written consent",
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
          "Content shows explicit sexual images shared without consent",
          "Content was distributed without valid written consent from the person depicted"
        ]
      },
      {
        "id": "ph-nccp-001-non-sexual-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows non-sexual images shared without consent",
          "Images were shared without valid written consent from the person depicted"
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
          "Content includes phone number, email, address, or full name without consent"
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
          "Content contains AI-generated or manipulated images",
          "Content uses deepfake technology to deceive viewers"
        ]
      },
      {
        "id": "ph-nccp-001-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts, real or simulated",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited.",
        "contentTypes": [
          "intimate",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content features non-consensual acts",
          "Content promotes non-consensual activities whether real or simulated"
        ]
      },
      {
        "id": "ph-nccp-001-intoxicated-content",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content depicting persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
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
          "Content depicts intoxicated individuals in sexual situations"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758648538881-1",
    "reference": "PH-TOS-001",
    "title": "Terms of Service",
    "summary": "Core terms governing platform use, content standards, user obligations, and enforcement mechanisms. Referenced extensively in other policy documents as the foundational governance framework.",
    "url": "Not directly accessible - referenced in help documents",
    "accessTimestamp": "2025-09-23T17:28:58.881Z",
    "policies": [],
    "appealProcess": null
  }
],
};
