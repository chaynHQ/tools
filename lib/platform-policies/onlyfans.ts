import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
  {
    "id": "of-terms-of-service",
    "reference": "OF-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of OnlyFans, including content ownership, security responsibilities, prohibited content, and user conduct.",
    "url": "https://onlyfans.com/terms",
    "accessTimestamp": "2025-09-18T22:11:55.077Z",
    "policies": [
      {
        "id": "of-copyright-policy",
        "reference": "OF-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement. If the intimate image is owned by the victim or a photographer, posting it without permission is a copyright violation.",
        "quote": "You confirm that your Content does not infringe or violate the intellectual property rights of any third-party and that you own or have obtained all rights necessary to distribute, copy, display, publicly perform or otherwise use the Content.",
        "contentTypes": [
          "intimate",
          "personal"
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
            "description": "File a DMCA notice via the DMCA Takedown Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership or necessary rights",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or violates intellectual property rights of third-party",
          "Content is posted without owning or obtaining all necessary rights"
        ]
      },
      {
        "id": "of-hacked-account-policy",
        "reference": "OF-TOS-SECURITY",
        "summary": "Users are responsible for their account security. If compromised, users should immediately change their password and contact support.",
        "quote": "We are not responsible for any lost, stolen, or compromised User accounts, passwords, email accounts, or any resulting unauthorised activities or resulting unauthorised payments or withdrawals of funds.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Contact OnlyFans support immediately at support@onlyfans.com",
            "reason": "To report the compromise and initiate recovery"
          },
          {
            "description": "Provide account details (username, email) and description of unauthorized activity",
            "reason": "To verify ownership and understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "Account is posting content without owner's permission",
          "Legitimate owner is locked out of the account"
        ]
      },
      {
        "id": "of-content-removal-policy",
        "reference": "OF-TOS-CONTENT",
        "summary": "OnlyFans reserves the right to suspend or remove content that may breach their Terms of Service and will try to notify users when taking such action.",
        "quote": "We reserve the right to suspend or remove Content that may breach our Terms of Service. We may suspend or delete Content and accounts according to our Terms of Service. If we do, we will try to Notify you.",
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
        "evidenceRequirements": [
          {
            "description": "Report content that violates Terms of Service through Complaints Policy",
            "reason": "To initiate content review process"
          },
          {
            "description": "Evidence that content breaches Terms of Service",
            "reason": "To substantiate the violation claim"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service",
          "Content violates platform policies"
        ]
      },
      {
        "id": "of-co-authored-consent-policy",
        "reference": "OF-TOS-COAUTHORED",
        "summary": "Content featuring individuals other than the uploader requires written, informed consent from all participants who must be at least 18 years old.",
        "quote": "You warrant that each individual in Co-Authored Content you Upload is: a Creator you have tagged using the tool available on OnlyFans; or an individual at least 18 years of age whose proof of identity and whose written, informed consent you have obtained to share the Content on OnlyFans.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence that written, informed consent was not obtained from individuals in the content",
            "reason": "To prove violation of consent requirements"
          },
          {
            "description": "Identification of yourself in the content",
            "reason": "To establish you are the individual whose consent was not obtained"
          }
        ],
        "removalCriteria": [
          "Content features individuals without their written, informed consent",
          "Individual in content withdraws their consent",
          "Content uploader cannot provide proof of consent when requested"
        ]
      },
      {
        "id": "of-ai-generated-content-policy",
        "reference": "OF-TOS-AI",
        "summary": "AI Generated content must be clearly labeled with signifiers like #ai or #AIGenerated and must comply with Terms of Service.",
        "quote": "AI Generated content must comply with our Terms of Service and must be clearly and conspicuously captioned as AI Generated Content with a signifier such as #ai, or #AIGenerated.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence that content is AI-generated but not properly labeled",
            "reason": "To prove violation of transparency requirements"
          },
          {
            "description": "Evidence that AI content depicts you without consent",
            "reason": "To establish unauthorized use of your likeness"
          }
        ],
        "removalCriteria": [
          "AI Generated content is not clearly labeled with required signifiers",
          "AI content violates other Terms of Service provisions"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://onlyfans.com/transparency-center/appeals",
      "summary": "Users can dispute account termination or content deactivation decisions through the Appeals Policy, and Creator Earnings forfeiture decisions through the Complaints Policy.",
      "steps": [
        "Follow the Appeals Policy for account termination or content deactivation disputes",
        "Follow the Complaints Policy for Creator Earnings forfeiture disputes",
        "Submit dispute within six months of notification or waive right to dispute"
      ]
    }
  },
  {
    "id": "of-privacy-policy",
    "reference": "OF-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how OnlyFans collects, uses, and protects user data, including biometric data collection and GDPR compliance.",
    "url": "https://onlyfans.com/privacy",
    "accessTimestamp": "2025-09-18T22:11:55.077Z",
    "policies": [
      {
        "id": "of-pp-data-protection",
        "reference": "OF-PP-14",
        "summary": "Users have the right to request deletion/erasure of their personal data, including when there is no legitimate reason for continued processing.",
        "quote": "Request deletion / erasure of your Personal Data: You may ask us to delete or remove Personal Data where there is no legitimate reason for us continuing to process it. You also may ask us to delete or remove your Personal Data where you have exercised your right to object to processing (see below). Please note that we may not always be able to comply with your request of deletion / erasure for specific legal reasons, for example if your account has been deactivated for violations of our Terms of Service.",
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
        "evidenceRequirements": [
          {
            "description": "Sufficient information to confirm identity and understand the request",
            "example": "Account details, description of content to be removed",
            "reason": "To verify identity and properly evaluate the request"
          }
        ],
        "removalCriteria": [
          "No legitimate reason for continued processing of personal data",
          "User has exercised right to object to processing",
          "Account has not been deactivated for Terms of Service violations"
        ]
      },
      {
        "id": "of-pp-content-moderation",
        "reference": "OF-PP-10",
        "summary": "OnlyFans moderates and filters content uploaded to the platform to monitor and investigate violations of Terms of Service, including removal of illegal content.",
        "quote": "Moderation and filtration: text and content uploaded to OnlyFans; livestreaming on OnlyFans; content sent in chat messages on OnlyFans to monitor and investigate violations of our Terms of Service. Removal from the Services of text and content uploaded by users that is identified as illegal, and suspending or deactivating those user accounts. Removal from the Services of text and content uploaded by users that is identified as violating our Terms of Service and where appropriate, suspending or deactivating user accounts.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence that content violates Terms of Service or is illegal",
            "example": "Description of policy violation, screenshots if applicable",
            "reason": "To investigate and determine if content should be removed"
          }
        ],
        "removalCriteria": [
          "Content identified as illegal",
          "Content violating Terms of Service",
          "Content uploaded without proper authorization"
        ]
      },
      {
        "id": "of-pp-law-enforcement",
        "reference": "OF-PP-10",
        "summary": "OnlyFans reports illegal activity to law enforcement and provides information in response to investigations, including for user safety protection.",
        "quote": "Reporting illegal activity to relevant law enforcement authorities, other governmental authorities and non-governmental organisations. Providing relevant information to, or responding to requests from / investigations by, relevant law enforcement authorities, other governmental authorities and non-governmental organisations. As necessary or appropriate to protect the rights and property of our users, us, and other third parties.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of illegal activity or threats to user safety",
            "example": "Documentation of harassment, threats, or unauthorized content sharing",
            "reason": "To protect user safety and comply with legal obligations"
          }
        ],
        "removalCriteria": [
          "Content involves illegal activity",
          "Content threatens user safety or rights",
          "Content requires law enforcement intervention"
        ]
      },
      {
        "id": "of-pp-identity-verification",
        "reference": "OF-PP-9",
        "summary": "OnlyFans requires age and identity verification for all users, with processes to prevent fraudulent access and ensure platform safety.",
        "quote": "We have processes in place that are intended to ensure that Creators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. We have processes in place that are intended to ensure that Content Collaborators on OnlyFans: (i) are at least 18 years of age; and (ii) verify their identity. Face recognition technology reduces the possibility of fraudulent face image spoofing and the uploading of fraudulent government identity documents when individuals go through the onboarding process.",
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
        "evidenceRequirements": [
          {
            "description": "Government identity document and selfie verification",
            "example": "Valid government ID and live selfie photo",
            "reason": "To prevent impersonation and ensure all users are verified adults"
          }
        ],
        "removalCriteria": [
          "User fails age verification process",
          "User fails identity verification process",
          "Fraudulent or manipulated documents detected",
          "User under 18 years of age"
        ]
      },
      {
        "id": "of-pp-account-correction",
        "reference": "OF-PP-14",
        "summary": "Users can request correction of incomplete or inaccurate personal data held by OnlyFans.",
        "quote": "Request correction of the Personal Data that we hold about you: You may correct any incomplete or inaccurate Personal Data we hold about you.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of correct information to replace inaccurate data",
            "example": "Updated contact information, corrected personal details",
            "reason": "To ensure accuracy of personal data records"
          }
        ],
        "removalCriteria": [
          "Personal data is incomplete or inaccurate",
          "User provides evidence of correct information"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can contact OnlyFans through support tickets or email privacy@onlyfans.com for privacy-related requests and appeals. US residents have specific appeal rights for privacy decisions.",
      "steps": [
        "Submit a ticket through your OnlyFans account",
        "Email privacy@onlyfans.com with your request",
        "Provide sufficient information to confirm identity",
        "For US residents: submit appeal requests using same contact methods if initial request is denied"
      ]
    }
  }
],
};
