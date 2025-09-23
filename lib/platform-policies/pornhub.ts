import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "pornhub-new-1758649746947-0",
    "reference": "PH-NCCP-001",
    "title": "Non-Consensual Content Policy",
    "summary": "Comprehensive policy outlining Pornhub's approach to preventing and removing non-consensual intimate images and videos, including consent requirements, reporting mechanisms, and enforcement procedures",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T17:49:06.947Z",
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
          "Content depicts intimate images without consent",
          "Content was recorded without consent",
          "Content was distributed without consent"
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
        "summary": "Prohibits sharing explicit images without consent including revenge sharing",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\")",
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
          "Content contains explicit images shared without consent",
          "Content was distributed without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-001-non-sexual-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-intimate images without consent",
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
          "Content contains non-intimate images shared without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-001-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
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
        "id": "ph-nccp-001-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits all deepfakes and AI-generated manipulated content",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated or manipulated images or videos",
          "Content is designed to deceive viewers about a person's actions or speech",
          "Content uses deepfake technology"
        ]
      },
      {
        "id": "ph-nccp-001-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts",
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
        "id": "ph-nccp-001-swift-removal",
        "reference": "Enforcement",
        "summary": "Commits to swift review and removal of infringing content with account consequences",
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
            "description": "Swift removal promised but no specific timeframe given"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates the Non-Consensual Content Policy",
          "Content has been identified or reported as violating"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758649746947-1",
    "reference": "PH-CRF-001",
    "title": "Content Removal Request Form",
    "summary": "Primary mechanism for reporting and requesting removal of non-consensual content, revenge porn, blackmail, and other violative material from Pornhub platform",
    "url": "https://help.pornhub.com/hc/en-us/requests/new",
    "accessTimestamp": "2025-09-23T17:49:06.947Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758649746947-2",
    "reference": "PH-TOS-001",
    "title": "Terms of Service",
    "summary": "Platform's comprehensive terms governing user conduct, content policies, prohibited activities, and enforcement mechanisms",
    "url": "https://www.pornhub.com/terms",
    "accessTimestamp": "2025-09-23T17:49:06.947Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758649746947-3",
    "reference": "PH-PP-001",
    "title": "Privacy Policy",
    "summary": "Details data collection, usage, and protection practices including user information handling during content removal processes",
    "url": "https://www.pornhub.com/privacy",
    "accessTimestamp": "2025-09-23T17:49:06.947Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758649746947-4",
    "reference": "PH-CG-001",
    "title": "Community Guidelines",
    "summary": "Platform standards for acceptable content and behavior, including prohibited content categories and enforcement procedures",
    "url": "https://www.pornhub.com/community-guidelines",
    "accessTimestamp": "2025-09-23T17:49:06.947Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758649746947-5",
    "reference": "PH-DMCA-001",
    "title": "DMCA Copyright Policy",
    "summary": "Copyright infringement reporting and takedown procedures under the Digital Millennium Copyright Act",
    "url": "https://www.pornhub.com/dmca",
    "accessTimestamp": "2025-09-23T17:49:06.947Z",
    "policies": [
      {
        "id": "ph-dmca-001",
        "reference": "DMCA Copyright Policy",
        "summary": "Prohibits posting copyrighted content without permission and provides takedown procedures for copyright holders",
        "quote": "DMCA Copyright Policy",
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
          "Content infringes copyright",
          "Content posted without permission of copyright holder"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
