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
    "accessTimestamp": "2025-09-23T12:43:20.462Z",
    "policies": [
      {
        "id": "ph-privacy-policy",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits the violation of privacy, including the unauthorized publication of personally identifiable information (doxing).",
        "quote": "We prohibit the violation of privacy, including the unauthorized publication of personally identifiable information (doxing).",
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
            "description": "URL(s) of the content containing private information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of the privacy violation submitted via the Content Removal Request Form",
            "reason": "To understand the nature of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content (video, comments, etc.) reveals private information without consent",
          "The information poses a privacy or security risk to an individual",
          "Content consists of private media shared without consent",
          "The sharing violates a reasonable expectation of privacy"
        ]
      },
      {
        "id": "ph-harassment-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, and hate speech in comments and other interactions on the platform.",
        "quote": "We prohibit harassment, threats, and hate speech in comments and other interactions on the platform.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the video where comments appear or the user profile sending messages",
            "reason": "To identify the source of the harassing content"
          },
          {
            "description": "Screenshots of the harassing comments or messages",
            "reason": "To provide evidence of the harassing behavior"
          },
          {
            "description": "Use the reporting flag available on all videos and comments",
            "reason": "To report the harassment through the proper channel"
          }
        ],
        "removalCriteria": [
          "Comments or messages contain targeted harassment, abuse, or threats",
          "Content promotes hate speech against protected groups",
          "Private information is shared with the clear intent to incite harassment or cause fear"
        ]
      },
      {
        "id": "ph-copyright-policy",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement. Re-uploading content from other creators is prohibited.",
        "quote": "We prohibit copyright infringement. Re-uploading content from other creators is prohibited.",
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
            "description": "File a formal DMCA Takedown Notice through the process outlined on the site",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of original ownership of the content",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content violates Pornhub's Terms of Service",
          "Content infringes on another person's copyright (DMCA)",
          "The impersonating account is posting content to which you own the copyright"
        ]
      },
      {
        "id": "ph-hacked-account-policy",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for their account security. If an account is compromised, the user should contact support immediately to secure the account and report unauthorized activity.",
        "quote": "Users are responsible for their account security. If an account is compromised, the user should contact support immediately to secure the account and report unauthorized activity.",
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
            "description": "Contact Pornhub support with the account username and email",
            "reason": "To report the compromise and initiate recovery"
          },
          {
            "description": "Provide a description of the unauthorized activity",
            "reason": "To understand the scope of the compromise"
          },
          {
            "description": "Evidence of account ownership may be required for recovery",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "The account is being used to upload content that violates platform policies",
          "The legitimate owner is locked out of their account"
        ]
      },
      {
        "id": "ph-non-consensual-content-policy",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Requires consent and release for every individual appearing in content.",
        "quote": "you have obtained the consent and release for every individual appearing in your Content... The Content does not contain or comprise of, for example: child sexual abuse material (CSAM), non-consensual content (NCC), revenge porn, blackmail, intimidation, fraudulent content, misleading content, and gambling... the Website does not permit any form of revenge porn, blackmail, or intimidation",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Report using the electronic form at https://pornhub.com/content-removal",
            "reason": "To report suspected violations of applicable law or Terms of Service"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific content for review"
          },
          {
            "description": "URL(s) of the non-consensual content",
            "reason": "To identify the specific content that violates the policy"
          }
        ],
        "removalCriteria": [
          "Content uploaded without consent of individuals appearing in it",
          "Content constitutes revenge porn or blackmail",
          "Content is used for intimidation purposes",
          "Uploader cannot provide consent and release documentation for individuals in content"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation of another person or falsely stating affiliation with a person. Screen names must not be offensive or violate copyright or trademark.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person... You will choose your own screen name, which must be unique to you, not offensive to others, and not in violation of another's copyright or trademark",
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
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific impersonation violation"
          },
          {
            "description": "Evidence that you are the person being impersonated",
            "reason": "To verify your identity and establish the impersonation claim"
          },
          {
            "description": "Description of how the account or content misrepresents your identity",
            "reason": "To understand the nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person",
          "Screen name violates another's copyright or trademark",
          "Content falsely represents affiliation with a person",
          "Account is being used to deceive others about the user's identity"
        ]
      },
      {
        "id": "ph-prohibited-content-policy",
        "reference": "PH-TOS-PROHIBITED",
        "summary": "Prohibits content that is harmful, threatening, abusive, harassing, stalking, invasive of privacy, or racially/ethnically objectionable. Prohibits content depicting non-consensual sexual activity.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable... post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "URL(s) of the prohibited content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content violates the prohibited content policy",
            "reason": "To understand the nature of the violation"
          },
          {
            "description": "Use the content removal form or report button",
            "reason": "To report the violation through proper channels"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, abusive, or harassing",
          "Content is stalking or invasive of another's privacy",
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn, blackmail, or intimidation",
          "Content promotes hate speech or violence"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users may lodge complaints against content removal decisions within 6 months via email or webform. Complaints are handled in a timely, non-discriminatory manner.",
      "steps": [
        "Submit complaint within 6 months of notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Pornhub will review and may reverse decisions if complaint demonstrates content did not violate policies or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T12:43:20.462Z",
    "policies": [
      {
        "id": "ph-pp-ncii-1",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Prohibits sharing of user contributions and audio/video content without consent, as user contributions are made publicly available and can be read, collected, used, and disclosed by others",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence that content was shared without consent",
            "example": "Documentation showing the content was originally private or submitted without intent for public sharing",
            "reason": "To establish that the user contributions were shared beyond the user's intended scope"
          }
        ],
        "removalCriteria": [
          "Content shared without user's understanding of public nature",
          "User contributions accessed or used beyond intended scope"
        ]
      },
      {
        "id": "ph-pp-privacy-1",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Restricts processing of sensitive personal information including biometric information, ethnicity, and information concerning sex life, requiring specific consent and verification procedures",
        "quote": "Depending on how you use Pornhub, we might collect special categories of personal information including your biometric information, ethnicity, or information concerning your sex life (\"sensitive personal information\"). We also collect certain sensitive personal information, such as your sexual orientation, when you choose to provide it upon the completion of your profile page.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of unauthorized collection or use of sensitive personal information",
            "example": "Evidence showing biometric data or sexual orientation information was processed without consent",
            "reason": "To verify that sensitive personal information was handled improperly"
          }
        ],
        "removalCriteria": [
          "Unauthorized processing of biometric information",
          "Collection of sensitive personal information without proper consent",
          "Use of sexual orientation or intimate information beyond stated purposes"
        ]
      },
      {
        "id": "ph-pp-identity-1",
        "reference": "Section 11 - Biometric Information",
        "summary": "Requires explicit consent for biometric information processing and facial recognition technology used for identity verification, with right to withdraw consent at any time",
        "quote": "We employ third-party service providers to verify your identity, age, and the authenticity of the identification documents you provide using facial recognition technology. Facial recognition technology creates a mathematical representation of your facial features from the live scan of your face, your selfie, and the government-issued ID you submit or previously submitted to us. Information derived from this face scan or mathematical representation may be considered biometric information under the laws of certain states and countries and may be shared with us by our third-party service providers",
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
            "description": "Evidence of unauthorized biometric processing or impersonation",
            "example": "Documentation showing facial recognition was used without consent or for impersonation purposes",
            "reason": "To establish improper use of biometric verification systems"
          }
        ],
        "removalCriteria": [
          "Use of facial recognition technology without consent",
          "Processing of biometric information for unauthorized purposes",
          "Impersonation through fraudulent identity verification"
        ]
      },
      {
        "id": "ph-pp-account-security-1",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Provides users control over account deletion and personal information removal, allowing deletion of user contributions and audio/video information through account settings",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account ownership verification",
            "example": "Access to the registered account or email verification",
            "reason": "To confirm the user has authority to delete the content and account"
          }
        ],
        "removalCriteria": [
          "User request for deletion of contributions and audio/video content",
          "Account deactivation request from verified account holder",
          "Content removal through account settings"
        ]
      },
      {
        "id": "ph-pp-legal-compliance-1",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Requires disclosure of personal information to comply with legal obligations, court orders, and to detect, prevent, or address illegal activities including fraud and security issues",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues; protect against harm to the rights, property or safety of our company, our users, our employees, or others",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Legal documentation or evidence of illegal activity",
            "example": "Court order, law enforcement request, or evidence of fraud/security breach",
            "reason": "To justify disclosure under legal compliance requirements"
          }
        ],
        "removalCriteria": [
          "Court order or legal process requiring disclosure",
          "Detection of illegal or suspected illegal activities",
          "Security or technical issues threatening user safety",
          "Fraud prevention and detection requirements"
        ]
      },
      {
        "id": "ph-pp-data-rights-1",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Grants users comprehensive data rights including access, rectification, erasure, data portability, objection to processing, and restriction of processing with one month response timeframe",
        "quote": "Subject to local law and applicable legal requirements and exemptions, you have certain rights regarding your personal data: Right of access: you have the right to receive information on the personal data we hold about you and how such personal data is used, as well as a copy of your personal data; Right to rectification: you have the right to rectify inaccurate personal data concerning you; Right to be forgotten: you have the right to delete/erase your personal data; Right to data portability: you have the right to receive the personal data provided by you in a structured, commonly used, and machine-readable format and to transmit this personal data to another data controller; Right to object: you have the right to object to the use of your personal data where such use is based on our legitimate interests or on public interests; Right to restriction of processing: you have the right in some cases, to restrict our use of your personal data",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "months",
            "description": "Response time for data rights requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification and account information",
            "example": "Username and email address used to create account, plus additional verification as reasonably requested",
            "reason": "To verify identity and locate information in systems before processing data rights requests"
          }
        ],
        "removalCriteria": [
          "Verified user request for data access, rectification, or erasure",
          "Objection to processing based on legitimate interests",
          "Request for restriction of personal data processing",
          "Data portability request with proper verification"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for data rights requests, rectification, objection, and restriction of processing. Data Protection Officer available for privacy-related concerns.",
      "steps": [
        "Email support@pornhub.com with specific request type",
        "Provide identity verification information (username, email address, additional verification as requested)",
        "For data rights requests, use dedicated links for data copy or deletion requests",
        "For privacy-specific concerns, contact Data Protection Officer at dpo@pornhub.com",
        "Platform has one month to respond to requests"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T12:43:20.462Z",
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
    "id": "pornhub-new-1758631400462-0",
    "reference": "PH-NCII-POLICY",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, consent requirements, and removal procedures for NCII content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T12:43:20.462Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "Non-Consensual Content Policy",
        "summary": "Strictly prohibits the recording or distribution of intimate images without someone's consent, including photos and videos depicting explicit sexual activity, nudity, or partial nudity.",
        "quote": "The recording or distribution of intimate images (that is, photos and videos that are generally understood to depict explicit sexual activity or nudity or partial nudity) without someone's consent is a violation of that person's privacy and is a severe violation of our Terms of Service, and is strictly prohibited.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content appears to have been taken without consent",
          "Content was shared without the consent of the people involved"
        ]
      },
      {
        "id": "ph-ncii-spy-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos of any person in public or private settings without valid written consent, including hidden camera content and up-skirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content appears to be hidden or spy camera footage",
          "Content appears to be up-skirt or similar voyeuristic material"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit sexual images of someone without their valid written consent, including non-consensual distribution of intimate images commonly referred to as revenge porn.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-images",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-sexually explicit images of someone without their valid written consent.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about individuals including phone numbers, email addresses, physical addresses, or full names.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific content exposing private information",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information without consent",
          "Content includes phone numbers, email addresses, physical addresses, or full names without authorization"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated, modified, or other manipulations of a person's image in pictures or videos to deceive or mislead viewers.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific deepfake content",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content contains modified images or videos designed to deceive viewers",
          "Content presents manipulated media as authentic"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts, whether real or simulated, including depictions of coerced sexual acts, rape, or sexual assault.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific content depicting non-consensual acts",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content features or promotes non-consensual acts",
          "Content depicts coerced or forced sexual acts",
          "Content depicts rape or sexual assault, whether real or simulated"
        ]
      },
      {
        "id": "ph-ncii-intoxicated-persons",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring persons appearing drugged, incapacitated, or intoxicated involved in sexual acts.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific content featuring intoxicated persons",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content features persons appearing drugged or incapacitated in sexual acts",
          "Content features persons appearing intoxicated in sexual acts"
        ]
      },
      {
        "id": "ph-ncii-enforcement-swift-action",
        "reference": "Enforcement",
        "summary": "Requires swift action to review and remove infringing content, fingerprint content to block future uploads, and suspend or terminate associated uploader accounts where appropriate.",
        "quote": "In all cases where we identify or are made aware of content that violates this policy, our Trust & Safety and Moderation teams work swiftly to: Review and remove infringing content; Fingerprint the content in question to help block future uploads of the same content to our sites; AND Suspend or permanently terminate the associated uploader's account, where appropriate.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific violating content",
            "reason": "To enable swift review and removal of infringing content"
          }
        ],
        "removalCriteria": [
          "Content violates non-consensual content policy",
          "Content has been identified or reported as infringing"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
