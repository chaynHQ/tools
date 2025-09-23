import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "pornhub-new-1758646835935-0",
    "reference": "PH-NCCP-001",
    "title": "Non-Consensual Content Policy",
    "summary": "Comprehensive policy covering consent requirements, prohibited non-consensual content, content moderation processes, and reporting mechanisms for NCII and other violations",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T17:00:35.935Z",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate images without the subject's consent",
          "Images show explicit sexual activity or nudity without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-001-hidden-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
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
          "Content was taken without the person's valid written consent",
          "Content includes hidden camera or spy camera footage",
          "Content includes up-skirt imagery"
        ]
      },
      {
        "id": "ph-nccp-001-revenge-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit intimate images of someone without their valid written consent",
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
          "Content shows explicit intimate images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-nccp-001-non-sexual-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-intimate images of someone without their valid written consent",
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
          "Content shows non-intimate images shared without valid written consent"
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information including phone numbers, email addresses, physical addresses, or full names"
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated or digitally manipulated images or videos",
          "Content is designed to deceive viewers about a person's actions or speech"
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
          "Content features or promotes non-consensual acts",
          "Content depicts simulated non-consensual activities"
        ]
      },
      {
        "id": "ph-nccp-001-incapacitated-persons",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content showing persons appearing drugged, incapacitated, or intoxicated involved in intimate acts",
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
          "Content shows persons who appear drugged, incapacitated, or intoxicated",
          "Content depicts individuals whose judgment appears objectively impaired"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758646835935-1",
    "reference": "PH-PP-001",
    "title": "Privacy Policy",
    "summary": "Details data collection practices, user privacy protections, and information sharing policies for the platform",
    "url": "https://pornhub.com.do/privacy-policy/",
    "accessTimestamp": "2025-09-23T17:00:35.935Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758646835935-2",
    "reference": "PH-DMCA-001",
    "title": "DMCA Notice of Copyright Infringement",
    "summary": "Copyright infringement reporting process and DMCA takedown procedures for copyrighted content",
    "url": "http://www.pornhubapp.com/dmca/",
    "accessTimestamp": "2025-09-23T17:00:35.935Z",
    "policies": [],
    "appealProcess": null
  }
],
};
