import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "pornhub-new-1758648466376-0",
    "reference": "PH-NCCP-001",
    "title": "Non-Consensual Content Policy",
    "summary": "Comprehensive policy addressing non-consensual intimate imagery, consent requirements, content moderation processes, and removal procedures. Covers NCII, revenge porn, and related violations with detailed reporting mechanisms.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T17:27:46.376Z",
    "policies": [
      {
        "id": "ph-nccp-001-intimate-without-consent",
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
          "Content depicts intimate images without valid written consent",
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
          "Content was taken in public or private settings without consent"
        ]
      },
      {
        "id": "ph-nccp-001-revenge-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing intimate images without valid written consent including revenge sharing",
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
          "Content shows intimate images shared without valid written consent",
          "Content was distributed without the subject's permission"
        ]
      },
      {
        "id": "ph-nccp-001-non-intimate-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-intimate images without valid written consent",
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
          "Content shows non-intimate images shared without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-001-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits doxing including exposing private identifying information",
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
        "id": "ph-nccp-001-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits all deepfakes and AI-generated manipulated content",
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
          "Content contains AI-generated or manipulated images or videos",
          "Content is designed to deceive viewers about a person's actions or speech",
          "Content uses deepfake technology or similar manipulation"
        ]
      },
      {
        "id": "ph-nccp-001-consent-requirement",
        "reference": "Non-Consensual Content Policy",
        "summary": "Requires all uploaders to obtain and maintain valid consent and proper release documentation",
        "quote": "We require all uploaders to affirm they have obtained and maintain valid consent and proper release documentation for all persons featured in all content uploaded to the platform.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
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
          "Uploader lacks valid consent from all persons featured",
          "Uploader lacks proper release documentation",
          "Content features persons without documented permission"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758648466376-1",
    "reference": "PH-PRIVACY-001",
    "title": "Privacy Policy",
    "summary": "Details data collection practices, user privacy protections, information sharing policies, and data retention procedures for both registered and anonymous users.",
    "url": "https://pornhub.com.do/privacy-policy/",
    "accessTimestamp": "2025-09-23T17:27:46.376Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758648466376-2",
    "reference": "PH-DMCA-001",
    "title": "DMCA Notice of Copyright Infringement",
    "summary": "Copyright infringement policy detailing DMCA takedown procedures, requirements for valid notices, and contact information for copyright agent.",
    "url": "http://www.pornhubapp.com/dmca/",
    "accessTimestamp": "2025-09-23T17:27:46.376Z",
    "policies": [],
    "appealProcess": null
  }
],
};
