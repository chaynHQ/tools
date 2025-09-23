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
    "accessTimestamp": "2025-09-23T15:50:21.470Z",
    "policies": [
      {
        "id": "ph-ncii-policy",
        "reference": "PH-TOS-NCII",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
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
            "description": "Report Content using the electronic form or Report button",
            "reason": "To identify and review the non-consensual content"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation"
        ]
      },
      {
        "id": "ph-privacy-violation-policy",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits collecting or storing personal data about anyone and posting content that violates privacy expectations.",
        "quote": "collect or store personal data about anyone",
        "contentTypes": [
          "private",
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
            "description": "Report Content using the content removal form at https://pornhub.com/content-removal",
            "reason": "To identify content that violates privacy"
          }
        ],
        "removalCriteria": [
          "Content contains personal data collected without authorization",
          "Content violates reasonable privacy expectations"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits posting content that impersonates another person or falsely represents affiliation with a person.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
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
            "description": "Report Content using the content removal form",
            "reason": "To identify impersonating content and verify identity of the real person"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with a person"
        ]
      },
      {
        "id": "ph-harassment-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits content that is harmful, threatening, abusive, inflammatory, intimidating, violent, harassing, stalking, or invasive of privacy.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
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
            "description": "Report Content using the Report button or content removal form",
            "reason": "To identify harassing or threatening content"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, or abusive",
          "Content constitutes harassment or stalking",
          "Content is invasive of another's privacy"
        ]
      },
      {
        "id": "ph-copyright-policy",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and posting copyrighted materials without permission.",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
            "description": "File a formal DMCA Takedown Notice through the Copyright Policy process",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of ownership or necessary permissions for the copyrighted material",
            "reason": "To establish copyright ownership or authorization"
          }
        ],
        "removalCriteria": [
          "Content contains copyrighted materials without permission",
          "Content infringes intellectual property rights of others"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-SECURITY",
        "summary": "Requires users to maintain account security and prohibits unauthorized access to accounts.",
        "quote": "You are fully responsible for all activities that occur under your username or password. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of this Website using your username, password, or other security information. You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "description": "Contact support@pornhub.com immediately with details of unauthorized access",
            "reason": "To report security breach and initiate account recovery"
          },
          {
            "description": "Provide information about the unauthorized activity",
            "reason": "To understand the scope of the security breach"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to account",
          "Content uploaded through compromised account credentials"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users may lodge a complaint against content removal decisions within 6 months by emailing dsa@pornhub.com with detailed information and explanation of why the complaint is justified.",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide an explanation of the reason(s) why you believe your complaint is justified",
        "Pornhub will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Pornhub may reverse previous decisions if the complaint demonstrates the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T15:50:21.470Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6",
        "summary": "Prohibits sharing of personal information without consent and provides content removal process",
        "quote": "We may disclose your personal information when necessary to perform the services or for other purposes set out in this Privacy Notice. When we disclose your personal information, we usually rely on the performance of our contract with you, our legal obligation to do so, our legitimate interest (e.g., operating Pornhub), so long as it doesn't outweigh your interests or your consent, except when expressly stated otherwise below in the paragraph \"To comply with the law or protect our rights or the rights of third parties\".",
        "contentTypes": [
          "private",
          "personal",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shared without proper consent",
          "Disclosure that outweighs user interests"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "Section 2",
        "summary": "Warns users that content they upload becomes publicly available and cannot be controlled once shared",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content voluntarily posted becomes publicly accessible"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8",
        "summary": "Allows users to delete their account and user contributions at any time",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User request for account deletion",
          "User request for content removal"
        ]
      },
      {
        "id": "ph-pp-biometric-consent",
        "reference": "Section 11",
        "summary": "Requires consent for biometric information processing and allows withdrawal of consent",
        "quote": "You will be asked to provide your consent to biometric information processing which you may withdraw at any time. Withdrawing your consent will not affect the lawfulness of any collection, use, processing, or disclosure that occurred prior to the withdrawal.",
        "contentTypes": [
          "private",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Lack of consent for biometric processing",
          "Withdrawal of previously given consent"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "Section 18",
        "summary": "Provides users with right to delete personal data and restrict processing",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data; Right to restriction of processing: you have the right in some cases, to restrict our use of your personal data",
        "contentTypes": [
          "private",
          "personal",
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
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
            "description": "Identity verification to process deletion request",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate information in systems"
          }
        ],
        "removalCriteria": [
          "User request for data deletion",
          "User request to restrict data processing"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise their rights including rectification, objection, and restriction of processing",
      "steps": [
        "Send email to support@pornhub.com",
        "Provide identity verification information including username and email address",
        "Specify the type of request (rectification, objection, restriction of processing, or deletion)",
        "Wait up to one month for response to request"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T15:50:21.470Z",
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
    "id": "pornhub-new-1758642621470-0",
    "reference": "PH-NCCP",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, consent requirements, and removal procedures for NCII content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T15:50:21.470Z",
    "policies": [
      {
        "id": "ph-nccp-intimate-without-consent",
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
          "Content depicts intimate images without valid written consent",
          "Content was taken without the person's consent",
          "Content appears to have been taken without consent"
        ]
      },
      {
        "id": "ph-nccp-hidden-camera-content",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos of any person taken without valid written consent, including hidden camera content",
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
          "Content includes hidden/spy camera footage or upskirt content"
        ]
      },
      {
        "id": "ph-nccp-revenge-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing intimate images of someone without their valid written consent",
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
        "id": "ph-nccp-non-sexual-without-consent",
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
        "id": "ph-nccp-doxing",
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
          "Content exposes private identifying information",
          "Content includes phone number, email, address, or full name without consent"
        ]
      },
      {
        "id": "ph-nccp-deepfakes",
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
          "Content contains AI-generated or modified images",
          "Content uses deepfake technology to manipulate person's likeness",
          "Content is designed to deceive viewers about person's actions or speech"
        ]
      },
      {
        "id": "ph-nccp-non-consensual-acts",
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
          "Content features non-consensual acts",
          "Content promotes non-consensual activities",
          "Content depicts real or simulated non-consensual situations"
        ]
      },
      {
        "id": "ph-nccp-incapacitated-persons",
        "reference": "Non-Consensual Content Policy - Sensitive Themes",
        "summary": "Prohibits content showing persons appearing incapacitated or intoxicated involved in activities",
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
          "Content shows persons appearing drugged or incapacitated",
          "Content depicts intoxicated individuals in compromising situations"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
