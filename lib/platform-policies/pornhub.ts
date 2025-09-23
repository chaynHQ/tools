import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "pornhub-new-1758651812846-0",
    "reference": "PORNHUB-NCII-001",
    "title": "Non-Consensual Content Policy",
    "summary": "Comprehensive policy addressing non-consensual intimate imagery, consent requirements, content moderation processes, and reporting mechanisms. Covers NCII, revenge porn, and related violations with detailed enforcement procedures.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T18:23:32.846Z",
    "policies": [
      {
        "id": "pornhub-ncii-001",
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
          "Content was recorded without the person's consent",
          "Content was distributed without the person's consent",
          "Content depicts explicit sexual activity or nudity without valid written consent"
        ]
      },
      {
        "id": "pornhub-ncii-002",
        "reference": "Guidelines - Do NOT use platform",
        "summary": "Prohibits uploading explicit images or videos taken or shared without consent of people involved",
        "quote": "Do NOT use the platform to upload, post, or otherwise share explicit images or videos that were taken, appear to have been taken or that were shared without the consent of the people involved.",
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
          "Content was uploaded without consent of people involved",
          "Content appears to have been taken without consent",
          "Content was shared without consent of people involved"
        ]
      },
      {
        "id": "pornhub-ncii-003",
        "reference": "Guidelines - Hidden/spy camera content",
        "summary": "Prohibits videos or photos of any person taken without valid written consent, including hidden camera content",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content);",
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
          "Content includes hidden or spy camera footage",
          "Content was taken in public or private settings without consent"
        ]
      },
      {
        "id": "pornhub-ncii-004",
        "reference": "Guidelines - Revenge porn",
        "summary": "Prohibits sharing explicit sexual images of someone without their valid written consent, including revenge porn",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\");",
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
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images",
          "Content was shared as revenge porn"
        ]
      },
      {
        "id": "pornhub-ncii-005",
        "reference": "Guidelines - Non-sexually explicit images",
        "summary": "Prohibits sharing non-sexually explicit images of someone without their valid written consent",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent;",
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
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "pornhub-ncii-006",
        "reference": "Guidelines - Doxing",
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
          "Content includes phone numbers without consent",
          "Content includes email addresses without consent",
          "Content includes physical addresses without consent",
          "Content includes full names without consent"
        ]
      },
      {
        "id": "pornhub-ncii-007",
        "reference": "Guidelines - Deepfakes",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated or manipulated content to deceive viewers",
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
          "Content is AI-generated manipulation of person's image",
          "Content is modified to deceive or mislead viewers",
          "Content manipulates person's image in pictures or videos",
          "Content presents person as acting or speaking in ways they did not"
        ]
      },
      {
        "id": "pornhub-ncii-008",
        "reference": "Enforcement - Content removal",
        "summary": "Commits to swift removal of violating content and account enforcement",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content on the platform",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates non-consensual content policy",
          "Content has been identified or reported as violating"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758651812846-1",
    "reference": "PORNHUB-PRIVACY-001",
    "title": "Privacy Policy",
    "summary": "Details data collection practices, user privacy protections, information sharing policies, and data retention practices. Covers both registered and anonymous users' data handling.",
    "url": "https://pornhub.com.do/privacy-policy/",
    "accessTimestamp": "2025-09-23T18:23:32.846Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758651812846-2",
    "reference": "PORNHUB-DMCA-001",
    "title": "DMCA Notice of Copyright Infringement",
    "summary": "Copyright infringement policy outlining DMCA takedown procedures, requirements for valid notices, and contact information for copyright agent. Covers process for reporting and removing copyrighted content.",
    "url": "http://www.pornhubapp.com/dmca/",
    "accessTimestamp": "2025-09-23T18:23:32.846Z",
    "policies": [],
    "appealProcess": null
  }
],
};
