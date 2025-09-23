import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "pornhub-new-1758657539989-0",
    "reference": "PH-NCCP-001",
    "title": "Non-Consensual Content Policy",
    "summary": "Comprehensive policy covering non-consensual intimate imagery, consent requirements, prohibited content including deepfakes, and enforcement measures. Updated September 2024.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T19:58:59.989Z",
    "policies": [
      {
        "id": "ph-nccp-001-ncii",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits the recording or distribution of intimate images without someone's consent",
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
          "Content depicts intimate images without valid written consent",
          "Content was taken without the person's consent",
          "Content appears to have been taken without consent",
          "Content was shared without the consent of the people involved"
        ]
      },
      {
        "id": "ph-nccp-001-hidden-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos of any person taken without their valid written consent, including hidden camera content",
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
          "Content shows person without their valid written consent",
          "Content was taken in public or private setting without consent",
          "Content includes hidden/spy camera footage",
          "Content includes voyeuristic material"
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
          "Content shows intimate images shared without valid written consent",
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
          "Content includes phone number, email, address, or full name without consent"
        ]
      },
      {
        "id": "ph-nccp-001-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits any deepfakes or AI-generated manipulations of a person's image to deceive viewers",
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
          "Content contains AI-generated or manipulated images",
          "Content uses deepfake technology",
          "Content is designed to deceive or mislead viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-nccp-001-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts, whether real or simulated",
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
          "Content promotes non-consensual acts",
          "Content depicts real or simulated non-consensual activity"
        ]
      },
      {
        "id": "ph-nccp-001-enforcement-removal",
        "reference": "Consequences for Violating this Policy",
        "summary": "Requires swift review and removal of infringing content with fingerprinting to prevent re-uploads",
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
            "description": "Swift action taken upon identification"
          },
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal upon report"
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
          "Content violates Non-Consensual Content Policy",
          "Content is identified as infringing"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758657539989-1",
    "reference": "PH-TID-001",
    "title": "Take It Down Initiative",
    "summary": "Partnership with Meta's Take It Down tool for preventing non-consensual intimate image sharing through digital fingerprinting technology.",
    "url": "https://stopncii.org/",
    "accessTimestamp": "2025-09-23T19:58:59.989Z",
    "policies": [
      {
        "id": "stopncii-ncii-prevention",
        "reference": null,
        "summary": "Provides a tool to prevent non-consensual intimate image sharing by creating digital fingerprints that participating companies use to detect and remove images",
        "quote": "StopNCII.org is a free tool designed to support victims of Non-Consensual Intimate Image (NCII) abuse. The tool works by generating a hash from your intimate image(s)/video(s). StopNCII.org then shares the hash with participating companies so they can help detect and remove the images from being shared online.",
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
            "description": "You must be the person who is in the image",
            "example": "Verification that you are the individual depicted in the content",
            "reason": "To ensure only the affected individual can request prevention measures"
          },
          {
            "description": "You must be 18 or older at the time the image was taken and currently over 18 years old",
            "example": "Age verification for both when content was created and current age",
            "reason": "Service is only available for adult content to comply with legal requirements"
          },
          {
            "description": "You must still be in possession of the image or video",
            "example": "Access to the original files to create digital fingerprints",
            "reason": "The hashing process requires the original content to generate prevention measures"
          },
          {
            "description": "You must be nude, semi-nude, or engaging in a sexual act in the image/video",
            "example": "Content must be of an intimate nature",
            "reason": "Service is specifically designed for intimate image abuse prevention"
          }
        ],
        "removalCriteria": [
          "Content matches a hash fingerprint submitted through the StopNCII system",
          "Content is identified as non-consensual intimate imagery by participating companies using the hash database"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
