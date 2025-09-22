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
    "accessTimestamp": "2025-09-22T12:01:28.116Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must have proper consent from all individuals appearing in it.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); ... the Website does not permit any form of revenge porn, blackmail, or intimidation",
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
            "description": "Report using the electronic form at https://pornhub.com/content-removal",
            "reason": "Official reporting mechanism for policy violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "Direct reporting mechanism for specific content"
          },
          {
            "description": "Description of how the content violates non-consensual content policy",
            "reason": "To establish the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without proper consent from individuals appearing in it",
          "Content violates reasonable expectation of privacy"
        ]
      },
      {
        "id": "ph-consent-requirements",
        "reference": "PH-TOS-CONSENT",
        "summary": "All content uploaders must obtain consent and release for every individual appearing in their content and verify they are over 18 years of age.",
        "quote": "you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website; for every individual appearing in your Content you have carefully ascertained and examined a valid governmental photo identification demonstrating that they are at least 18 years of age",
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
            "description": "Evidence that proper consent was not obtained from individuals in the content",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Explanation of your relationship to the content or individuals depicted",
            "reason": "To establish standing for the removal request"
          }
        ],
        "removalCriteria": [
          "Content uploaded without consent from individuals appearing in it",
          "Uploader cannot demonstrate proper consent and release documentation",
          "Content violates individual's right to control use of their image/likeness"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Provides DMCA takedown process for copyright violations.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Follow the DMCA takedown process outlined in the Copyright Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of ownership or authorized use of the copyrighted material",
            "reason": "To establish copyright ownership or authorization"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyright or intellectual property rights",
          "Content contains copyrighted materials without proper permission",
          "Content violates third-party proprietary rights"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits posting content that impersonates another person or falsely represents affiliation with someone.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
        "contentTypes": [
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that the content impersonates you or falsely represents affiliation",
            "reason": "To demonstrate impersonation violation"
          },
          {
            "description": "Proof of your identity",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "URL(s) of the impersonating content",
            "reason": "To identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with someone",
          "Account or content misrepresents identity"
        ]
      },
      {
        "id": "ph-harassment-intimidation",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits content and behavior that is harmful, threatening, abusive, harassing, stalking, or invasive of privacy.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Evidence of harassing, threatening, or abusive content or behavior",
            "reason": "To demonstrate harassment policy violation"
          },
          {
            "description": "URL(s) of the harassing content or user profile",
            "reason": "To identify the source of harassment"
          },
          {
            "description": "Description of how the content is invasive of privacy or threatening",
            "reason": "To establish the nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, or abusive",
          "Content constitutes harassment or stalking behavior",
          "Content is invasive of another's privacy",
          "Content is intimidating or encouraging violence"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Unauthorized use of accounts is prohibited.",
        "quote": "You are fully responsible for all activities that occur under your username or password... You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "description": "Contact support@pornhub.com with details of unauthorized access",
            "reason": "Official channel for reporting security breaches"
          },
          {
            "description": "Evidence of unauthorized account activity",
            "reason": "To demonstrate account compromise"
          },
          {
            "description": "Description of content uploaded without authorization",
            "reason": "To identify content that needs removal due to account compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to account",
          "Content uploaded through compromised account",
          "Account being used without owner's permission"
        ]
      },
      {
        "id": "ph-prohibited-content",
        "reference": "PH-TOS-PROHIBITED",
        "summary": "Comprehensive prohibition of various harmful content types including fraudulent, misleading, defamatory, and privacy-violating content.",
        "quote": "post any Content that contains falsehoods or misrepresentations that could damage this Website or any third party; post any Content that is obscene, illegal, unlawful, fraudulent, defamatory, libelous, harassing, hateful, racially or ethnically offensive",
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
            "description": "Evidence that content falls under prohibited categories",
            "reason": "To demonstrate policy violation"
          },
          {
            "description": "URL(s) of the prohibited content",
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Explanation of how content violates specific prohibition",
            "reason": "To categorize the type of violation"
          }
        ],
        "removalCriteria": [
          "Content contains falsehoods or misrepresentations",
          "Content is defamatory or libelous",
          "Content is fraudulent or misleading",
          "Content violates privacy expectations",
          "Content is illegal or unlawful"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email to dsa@pornhub.com from their registered email address.",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Wait for review - complaints are handled in a timely, non-discriminatory, diligent, and objective manner"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-22T12:01:28.116Z",
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
            "example": "Email address or account details",
            "reason": "To process content removal requests and verify identity"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms and Conditions",
          "Content reported through content reporting system",
          "Content that violates legal obligations"
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
            "example": "Username and password for account settings",
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
        "summary": "Users have the right to request deletion of their personal data, including content, with verification requirements and dedicated deletion request system.",
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
            "example": "Account credentials or sufficient identifying information",
            "reason": "Security measure to ensure personal data is not deleted in unauthorized way"
          },
          {
            "description": "Username and email address used to create account",
            "example": "Original registration email and username",
            "reason": "To verify identity and locate information in systems"
          }
        ],
        "removalCriteria": [
          "Valid identity verification completed",
          "User has legitimate right to request data deletion",
          "Request complies with applicable legal requirements"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub responds to valid legal process from law enforcement for disclosure of records through dedicated legal service platform.",
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
            "description": "Valid court order, subpoena, search warrant or equivalent legal document",
            "example": "Court-issued subpoena or search warrant",
            "reason": "Legal requirement for disclosure of user records"
          },
          {
            "description": "Document correctly issued to Aylo Freesites Ltd by valid court or legal authority",
            "example": "Properly addressed legal document",
            "reason": "To ensure legal validity and proper jurisdiction"
          }
        ],
        "removalCriteria": [
          "Valid legal process served through proper channels",
          "Document uploaded to legal service platform with required fields completed",
          "Legal document properly issued to correct legal entity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/support",
      "summary": "Users can contact support for assistance with content removal requests and data management issues through dedicated support channels.",
      "steps": [
        "Contact support at support@pornhub.com",
        "Provide necessary verification information",
        "Submit request through appropriate channel (content removal or data management links)"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-22T12:01:28.116Z",
    "policies": [
      {
        "id": "ph-ncii-policy",
        "reference": "PH-POLICY-NCSII",
        "summary": "Maintains a zero-tolerance policy for non-consensual content. Provides a dedicated Content Removal Request Form for anyone to request the removal of content depicting them for any reason.",
        "quote": "We maintain a zero-tolerance policy for non-consensual content. We provide a dedicated Content Removal Request Form for anyone to request the removal of content depicting them for any reason.",
        "contentTypes": [
          "intimate"
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
            "value": 48,
            "unit": "hours",
            "description": "Platform aims to review reports from its dedicated removal form within 24-48 hours"
          },
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Mandated removal under TAKE IT DOWN Act"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the infringing content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Use the dedicated 'Content Removal Request Form' available on the site",
            "reason": "To ensure the report is processed through the proper channel"
          },
          {
            "description": "Provide information to identify yourself as the person in the video or as an authorized representative",
            "reason": "To verify the legitimacy of the removal request"
          }
        ],
        "removalCriteria": [
          "Content is identified as non-consensual",
          "A person depicted in the content requests its removal via the official form",
          "The uploader cannot provide proof of consent for all depicted individuals"
        ]
      },
      {
        "id": "ph-ai-policy",
        "reference": "PH-POLICY-AI",
        "summary": "Prohibits AI-generated 'deepfake' videos that impersonate real individuals without their explicit, documented consent.",
        "quote": "We prohibit AI-generated 'deepfake' videos that impersonate real individuals without their explicit, documented consent.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the content",
            "reason": "To identify the AI-generated content"
          },
          {
            "description": "Evidence that the content is a deepfake and that the person depicted did not consent",
            "reason": "To establish that the AI content impersonates someone without consent"
          },
          {
            "description": "Reporting is done through the Content Removal Request Form",
            "reason": "To ensure the report is processed through the proper channel"
          }
        ],
        "removalCriteria": [
          "Content is an AI-generated deepfake of an identifiable real person",
          "The depicted person has not provided explicit consent for the creation and distribution of the content"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-POLICY-IMPERSONATION",
        "summary": "Prohibits impersonation. This is primarily enforced through the mandatory Uploader Verification System, which requires all uploaders to prove their identity.",
        "quote": "We prohibit impersonation. This is primarily enforced through the mandatory Uploader Verification System, which requires all uploaders to prove their identity.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All uploaders must be verified with government-issued ID",
            "reason": "To prevent impersonation through mandatory identity verification"
          },
          {
            "description": "To report impersonation, use the Content Removal Request Form",
            "reason": "To report suspected impersonation through the proper channel"
          },
          {
            "description": "Provide the URL of the impersonating content/profile and evidence of your own identity",
            "reason": "To verify you are the person being impersonated and process the report"
          }
        ],
        "removalCriteria": [
          "An account is found to be impersonating a real person",
          "An uploader is found to have used fraudulent documents during verification",
          "An account is proven to be operated by someone other than the verified individual"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758542488116-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery (NCII), consent requirements, content removal procedures, and reporting mechanisms for victims.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-22T12:01:28.116Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits recording or distribution of intimate images without consent and requires valid written consent for all persons featured in uploaded content.",
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
            "example": "Being the person featured in the content",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to specific videos or images",
            "reason": "To identify and remove specific violating content"
          }
        ],
        "removalCriteria": [
          "Content uploaded without valid written consent of persons featured",
          "Intimate images shared without consent (revenge porn)",
          "Content that violates non-consensual content policy"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-SURVEILLANCE",
        "summary": "Pornhub prohibits videos or photos taken without valid written consent, including hidden camera content and upskirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of content violation",
            "example": "Being the person filmed without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "All relevant URL links to the content",
            "example": "Direct links to hidden camera or upskirt content",
            "reason": "To identify and remove specific violating content"
          }
        ],
        "removalCriteria": [
          "Hidden or spy camera content without consent",
          "Upskirt content without consent",
          "Any recording in public or private settings without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-images",
        "reference": "PH-NCII-POLICY-NONSEXUAL",
        "summary": "Pornhub prohibits sharing non-sexually explicit images of someone without their valid written consent.",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent",
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
            "description": "First-hand knowledge of content violation",
            "example": "Being the person in the shared images",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "URL links to the non-consensual content",
            "example": "Links to personal photos shared without permission",
            "reason": "To locate and remove the violating content"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Pornhub prohibits doxing, defined as exposing private and identifying information about individuals including phone numbers, emails, addresses, or full names.",
        "quote": "Doxing, defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private",
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
            "description": "First-hand knowledge that private information was exposed",
            "example": "Personal contact information or address being shared",
            "reason": "To verify the information belongs to the complainant"
          },
          {
            "description": "URL links to content containing private information",
            "example": "Links to posts or comments with personal details",
            "reason": "To locate and remove the doxing content"
          }
        ],
        "removalCriteria": [
          "Exposure of phone numbers without consent",
          "Sharing of email addresses without consent",
          "Publication of physical addresses without consent",
          "Revealing full names in context of harassment or privacy violation"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Pornhub prohibits any deepfakes whatsoever, including AI-generated, modified, or manipulated images or videos that deceive viewers.",
        "quote": "Any 'deepfakes' whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge that content uses your likeness",
            "example": "Recognizing your face has been digitally manipulated onto another person's body",
            "reason": "To verify the person's identity is being misused"
          },
          {
            "description": "URL links to the deepfake content",
            "example": "Direct links to AI-generated or manipulated videos",
            "reason": "To identify and remove the synthetic content"
          }
        ],
        "removalCriteria": [
          "AI-generated content using someone's likeness without consent",
          "Modified or manipulated images designed to deceive viewers",
          "Any synthetic media that misrepresents a person's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-intoxicated-content",
        "reference": "PH-NCII-POLICY-INTOXICATED",
        "summary": "Pornhub prohibits content featuring persons appearing drugged, incapacitated, or intoxicated involved in sexual acts.",
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
            "description": "First-hand knowledge of the circumstances of recording",
            "example": "Knowledge that person was intoxicated during filming",
            "reason": "To verify the non-consensual nature due to incapacitation"
          },
          {
            "description": "URL links to content showing intoxicated persons",
            "example": "Links to videos where participants appear impaired",
            "reason": "To review and remove content violating intoxication policy"
          }
        ],
        "removalCriteria": [
          "Sexual content featuring visibly intoxicated participants",
          "Content with persons appearing drugged or incapacitated",
          "Sexual acts where participant's judgment appears objectively impaired"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.porn-hub.website/content-removal",
      "summary": "Users can report violations through the Content Removal Request Form, and registered users can flag harmful content for review.",
      "steps": [
        "Complete and submit the Content Removal Request Form",
        "Include all relevant URL links to the content in question",
        "Request will be addressed confidentially",
        "Content will be removed expeditiously if found in violation",
        "Registered users can alternatively flag content for review"
      ]
    }
  }
],
};
