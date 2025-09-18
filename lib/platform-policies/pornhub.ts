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
    "accessTimestamp": "2025-09-18T22:18:58.037Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To initiate the removal process for non-consensual content"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content violates the non-consensual content policy",
            "reason": "To understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without consent of individuals depicted"
        ]
      },
      {
        "id": "ph-privacy-violation",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits posting content that violates privacy or contains personally identifiable information without consent.",
        "quote": "collect or store personal data about anyone",
        "contentTypes": [
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
            "description": "Report using the Content Removal Request Form",
            "reason": "To report privacy violations"
          },
          {
            "description": "URL(s) of content containing private information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Explanation of what private information is being shared without consent",
            "reason": "To understand the scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content reveals private information without consent",
          "Content contains personally identifiable information shared without authorization",
          "The sharing violates a reasonable expectation of privacy"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation with someone.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through the Content Removal Request Form",
            "reason": "To report impersonation violations"
          },
          {
            "description": "URL(s) of the impersonating content or account",
            "reason": "To identify the impersonating material"
          },
          {
            "description": "Evidence that you are the person being impersonated",
            "reason": "To verify your identity and right to request removal"
          },
          {
            "description": "Explanation of how the content misrepresents your identity",
            "reason": "To understand the nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person without authorization",
          "Content falsely represents affiliation with someone",
          "Account is created to impersonate another individual"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials.",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
            "description": "File a formal DMCA Takedown Notice through the Copyright Policy process",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of original ownership or copyright in the content",
            "reason": "To establish your rights to the copyrighted material"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes on another person's copyright",
          "Content uses copyrighted materials without permission",
          "Content violates intellectual property rights"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately.",
        "quote": "You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "description": "Contact support@pornhub.com immediately upon discovering unauthorized access",
            "reason": "To report the security breach and initiate recovery"
          },
          {
            "description": "Account username and associated email address",
            "reason": "To identify the compromised account"
          },
          {
            "description": "Description of the unauthorized activity or security breach",
            "reason": "To understand the scope of the compromise"
          },
          {
            "description": "Evidence of account ownership may be required for recovery",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to the account",
          "Account is being used to upload content that violates platform policies",
          "The legitimate owner is locked out of their account due to unauthorized access"
        ]
      },
      {
        "id": "ph-harassment-intimidation",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, intimidation, threats, and abusive behavior toward others.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report using the Content Removal Request Form or the Report button below content",
            "reason": "To report harassing or intimidating content"
          },
          {
            "description": "URL(s) of the harassing content, comments, or messages",
            "reason": "To identify the specific harassing material"
          },
          {
            "description": "Description of the harassing, threatening, or intimidating behavior",
            "reason": "To understand the nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content contains threats, harassment, or intimidation",
          "Content is abusive or inflammatory toward individuals",
          "Content encourages violence or harmful behavior",
          "Content constitutes stalking or invasive behavior"
        ]
      },
      {
        "id": "ph-content-consent",
        "reference": "PH-TOS-CONSENT",
        "summary": "Requires consent and release from every individual appearing in uploaded content.",
        "quote": "you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website",
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
            "description": "Report through the Content Removal Request Form if you appear in content without consent",
            "reason": "To report unauthorized use of your image or likeness"
          },
          {
            "description": "URL(s) of the content containing your image without consent",
            "reason": "To identify the specific unauthorized content"
          },
          {
            "description": "Evidence that you appear in the content and did not consent to its upload",
            "reason": "To establish your right to request removal"
          }
        ],
        "removalCriteria": [
          "Content features individuals who did not consent to its upload or distribution",
          "Content was uploaded without proper consent and release from all depicted persons",
          "Individuals in the content have withdrawn their consent for its use"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content moderation decisions within 6 months via email or webform.",
      "steps": [
        "Submit complaint within 6 months of notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Platform will handle complaints in a timely, non-discriminatory, diligent, and objective manner"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-18T22:18:58.037Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub provides content removal processes for users to report and request removal of content, with dedicated support channels and forms available.",
        "quote": "We may process any of the categories of data mentioned herein to enforce this Privacy Notice, our Terms and Conditions and to comply with any legal obligations, namely but not limited to responding to your data subject requests, to verify the age of users having access to Pornhub, to respond to content reports, and to comply with applicable content moderation and complaint handling obligations.",
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
            "description": "Contact information for support requests",
            "example": "Email address for correspondence",
            "reason": "To process and respond to content removal requests"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms and Conditions",
          "Content reported through content reporting system",
          "Content subject to legal obligations for removal"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete their own user contributions and audio/video information through account settings, and can deactivate their accounts to remove profile accessibility.",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
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
            "description": "Account access credentials",
            "example": "Username and password for account verification",
            "reason": "To verify account ownership for content deletion"
          }
        ],
        "removalCriteria": [
          "User-uploaded content can be deleted by account holder",
          "Account deactivation removes profile accessibility"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "PH-PP-SECTION-18-19",
        "summary": "Users have the right to request deletion of their personal data, including content, with identity verification required for processing such requests.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... You can exercise your rights of access or deletion of your data by following the dedicated links in the section 'Manage Your Personal Data' below.",
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
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "month",
            "description": "Response time for data deletion requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification information",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate information in systems"
          },
          {
            "description": "Account access verification",
            "example": "Access to registered email account",
            "reason": "Security measure to ensure authorized deletion request"
          }
        ],
        "removalCriteria": [
          "Valid identity verification provided",
          "Request submitted through proper channels",
          "No legal obligations preventing deletion"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub responds to valid legal process from law enforcement for disclosure of records, requiring proper court orders or equivalent legal documents.",
        "quote": "You may serve us a valid court order, subpoena, search warrant or equivalent legal or official administrative document by respecting the following conditions: The document(s) is uploaded, and all required fields have been filed out adequately on our platform for Legal Service Process located at: https://legalservice.aylo.com/legal/datarequest",
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
            "description": "Valid court order, subpoena, or search warrant",
            "example": "Properly issued legal document from valid court",
            "reason": "Legal requirement for disclosure of user records"
          },
          {
            "description": "Proper service through designated platform",
            "example": "Upload through https://legalservice.aylo.com/legal/datarequest",
            "reason": "Ensures proper legal service process"
          },
          {
            "description": "Mail service to physical address",
            "example": "195-197 Old Nicosia-Limassol Road, Block 1 Dali Industrial Zone, Cyprus 2540",
            "reason": "Formal legal service requirement"
          }
        ],
        "removalCriteria": [
          "Valid legal process served properly",
          "Document correctly issued to Aylo Freesites Ltd",
          "All required fields completed adequately"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T22:18:58.037Z",
    "policies": [
      {
        "id": "ph-content-removal-form",
        "reference": "PH-CONTENT-REMOVAL",
        "summary": "Provides a dedicated Content Removal Request Form for anyone to request the removal of content depicting them for any reason.",
        "quote": "Content Removal",
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
            "description": "Use the dedicated Content Removal Request Form",
            "reason": "To ensure the report is processed through the proper channel"
          },
          {
            "description": "URL(s) of the content to be removed",
            "reason": "To locate and identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts the requesting person",
          "Request is submitted through the official Content Removal Request Form"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758233938037-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Specific policy addressing non-consensual intimate imagery, consent requirements, and removal procedures for NCII content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T22:18:58.037Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits recording or distribution of intimate images without consent, including photos and videos depicting explicit sexual activity or nudity.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that content was shared without consent",
            "reason": "To establish legitimate claim to content removal"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content appears to have been taken without consent",
          "Content was shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-HIDDEN",
        "summary": "Videos or photos taken in public or private settings without valid written consent are prohibited, including hidden camera and up-skirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that recording was made without consent",
            "reason": "To establish legitimate claim to content removal"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was recorded without valid written consent",
          "Content includes hidden or spy camera footage",
          "Content includes voyeuristic material like up-skirt recordings"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Sharing explicit sexual images of someone without their valid written consent, commonly referred to as revenge porn, is strictly prohibited.",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\")",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that images were shared without consent",
            "reason": "To establish legitimate claim to content removal"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-images",
        "reference": "PH-NCII-POLICY-NONSEXUAL",
        "summary": "Sharing non-sexually explicit images of someone without their valid written consent is prohibited.",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that images were shared without consent",
            "reason": "To establish legitimate claim to content removal"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Doxing, defined as exposing private and identifying information about individuals including phone numbers, emails, addresses, or full names, is prohibited.",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that private information was exposed",
            "reason": "To establish legitimate claim to content removal"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information",
          "Content includes phone numbers, email addresses, physical addresses, or full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Any deepfakes whatsoever are prohibited, including AI-generated, modified, or manipulated images or videos designed to deceive viewers.",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that content uses AI manipulation of someone's likeness",
            "reason": "To establish legitimate claim to content removal"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content uses AI-generated manipulation of a person's image",
          "Content includes modified or manipulated images or videos",
          "Content is designed to deceive viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-intoxicated-content",
        "reference": "PH-NCII-POLICY-INTOXICATED",
        "summary": "Content featuring persons appearing drugged, incapacitated, or intoxicated involved in sexual acts is prohibited.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that content shows incapacitated persons",
            "reason": "To establish legitimate claim to content removal"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged or incapacitated in sexual acts",
          "Content shows persons appearing intoxicated with impaired judgment in sexual acts"
        ]
      },
      {
        "id": "ph-ncii-enforcement-response",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Pornhub operates 24/7 human moderation and commits to swift action on reported violations, including content removal, fingerprinting, and account suspension.",
        "quote": "In all cases where we identify or are made aware of content that violates this policy, our Trust & Safety and Moderation teams work swiftly to: Review and remove infringing content; Fingerprint the content in question to help block future uploads of the same content to our sites; AND Suspend or permanently terminate the associated uploader's account, where appropriate.",
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
            "description": "Complete Content Removal Request Form",
            "example": "Fill out the official removal request form",
            "reason": "To provide structured information for review"
          },
          {
            "description": "All relevant URL links to content in question",
            "example": "Direct links to all violating content",
            "reason": "To identify all content requiring removal"
          }
        ],
        "removalCriteria": [
          "Content violates non-consensual content policy",
          "Content is identified as violating Terms of Service",
          "Content is reported through proper channels"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
