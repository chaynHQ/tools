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
    "accessTimestamp": "2025-09-23T12:07:15.680Z",
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
        "summary": "Prohibits non-consensual content, revenge porn, blackmail, and intimidation. Requires consent and release for every individual appearing in content.",
        "quote": "you have obtained the consent and release for every individual appearing in your Content... The Website does not permit any form of revenge porn, blackmail, or intimidation... post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation",
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
            "reason": "To formally report non-consensual content"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific content for review"
          },
          {
            "description": "Description of how the content was shared without consent",
            "reason": "To establish the non-consensual nature of the sharing"
          }
        ],
        "removalCriteria": [
          "Content was uploaded without consent of individuals appearing in it",
          "Content constitutes revenge porn or was shared to intimidate or blackmail",
          "Content was obtained through unauthorized means or hacking",
          "Uploader cannot provide proof of consent and release from all individuals in the content"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation and falsely representing affiliation with another person. Screen names must not violate another's copyright or trademark.",
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
            "description": "URL of the impersonating account or content",
            "reason": "To identify the specific impersonation"
          },
          {
            "description": "Evidence that you are the person being impersonated",
            "reason": "To verify your identity and right to report"
          },
          {
            "description": "Description of how the account or content misrepresents your identity",
            "reason": "To understand the nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content falsely represents another person's identity",
          "Screen name violates another person's copyright or trademark",
          "Content misrepresents affiliation with another person without authorization"
        ]
      },
      {
        "id": "ph-content-standards-policy",
        "reference": "PH-TOS-CONTENT-STANDARDS",
        "summary": "Prohibits content that is obscene, illegal, fraudulent, defamatory, harassing, hateful, or encourages criminal conduct. Prohibits unsolicited advertising and spam.",
        "quote": "post any Content that is obscene, illegal, unlawful, fraudulent, defamatory, libelous, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense... post any Content containing unsolicited or unauthorized advertising, promotional materials, spam, junk mail",
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
            "description": "URL of the violating content",
            "reason": "To identify the specific content that violates standards"
          },
          {
            "description": "Description of how the content violates the prohibited categories",
            "reason": "To understand the nature of the violation"
          },
          {
            "description": "Use the reporting mechanisms available on the platform",
            "reason": "To formally report the content through proper channels"
          }
        ],
        "removalCriteria": [
          "Content is obscene, illegal, or unlawful",
          "Content is fraudulent, defamatory, or libelous",
          "Content contains harassment, hate speech, or encourages criminal conduct",
          "Content contains unauthorized advertising or spam"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users may lodge a complaint against content removal or account action decisions within 6 months of notification. Complaints are handled in a timely, non-discriminatory, and objective manner.",
      "steps": [
        "Submit complaint within 6 months of being notified of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of the reason(s) why you believe your complaint is justified",
        "Pornhub will review and may reverse previous decisions if complaint demonstrates the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T12:07:15.680Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6 - Disclosure",
        "summary": "Provides content removal process for users to request removal of personal information and content through dedicated forms and support channels",
        "quote": "We may disclose your information to third parties for the above purposes where necessary to comply with our legal obligations, to perform a task in the public interest (where the public interest is laid down by applicable law), or under our legitimate interests and the interests of the public, including as part of investigations or regulatory enquiries to detect, investigate and prosecute illegal activity.",
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
            "description": "Contact information and details about the content to be removed",
            "example": "Email address, description of content location",
            "reason": "To verify identity and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains personal information that violates privacy",
          "Content was disclosed without proper authorization"
        ]
      },
      {
        "id": "ph-pp-biometric-consent",
        "reference": "Section 11 - Biometric Information",
        "summary": "Requires explicit consent for biometric information processing and allows withdrawal of consent at any time for identity verification purposes",
        "quote": "You will be asked to provide your consent to biometric information processing which you may withdraw at any time. Withdrawing your consent will not affect the lawfulness of any collection, use, processing, or disclosure that occurred prior to the withdrawal.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Explicit consent for biometric processing",
            "example": "Consent checkbox or agreement to facial recognition",
            "reason": "Legal requirement for processing biometric information"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for biometric information processing",
          "Biometric information was processed without proper consent"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Your Choices",
        "summary": "Allows users to delete and deactivate their accounts at any time, removing profile accessibility and associated personal information",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account credentials and identity verification",
            "example": "Username and email address used to create account",
            "reason": "To verify account ownership before deletion"
          }
        ],
        "removalCriteria": [
          "User requests account deletion",
          "Account contains personal information user wants removed"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "Section 8 - Your Choices",
        "summary": "Allows users to delete their user contributions and audio/video information through account settings",
        "quote": "You may use your account settings to delete your user contributions and audio/video information.",
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
            "description": "Access to user account settings",
            "example": "Login credentials to access account settings",
            "reason": "To verify user ownership of the content being deleted"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their uploaded content",
          "User wants to remove personal audio/video information"
        ]
      },
      {
        "id": "ph-pp-data-subject-rights",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Provides comprehensive data subject rights including access, rectification, erasure, portability, objection, and restriction of processing with one month response timeframe",
        "quote": "Subject to local law and applicable legal requirements and exemptions, you have certain rights regarding your personal data: Right of access: you have the right to receive information on the personal data we hold about you and how such personal data is used, as well as a copy of your personal data; Right to rectification: you have the right to rectify inaccurate personal data concerning you; Right to be forgotten: you have the right to delete/erase your personal data; Right to data portability: you have the right to receive the personal data provided by you in a structured, commonly used, and machine-readable format and to transmit this personal data to another data controller; Right to object: you have the right to object to the use of your personal data where such use is based on our legitimate interests or on public interests; Right to restriction of processing: you have the right in some cases, to restrict our use of your personal data",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "months",
            "description": "Response time for data subject rights requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification and account information",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and ensure right to access or delete information"
          }
        ],
        "removalCriteria": [
          "User exercises right to be forgotten",
          "User objects to processing of personal data",
          "User requests restriction of data processing"
        ]
      },
      {
        "id": "ph-pp-minor-protection",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Prohibits minors from using the platform and requires deletion of any personal information from minors upon notification",
        "quote": "Pornhub prohibits minors from using the platform. Pornhub is forbidden for persons under the age of 18 and the applicable age of majority in the jurisdiction from which Pornhub is accessed. We do not knowingly process personal information from minors. If you are the parent or legal guardian of a minor who has provided us with personal information, then please contact us at support@pornhub.com to have that minor's personal information deleted.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of parental or legal guardian status",
            "example": "Documentation showing legal guardianship relationship",
            "reason": "To verify authority to request deletion of minor's information"
          }
        ],
        "removalCriteria": [
          "Content involves a minor under 18 years of age",
          "Parent or legal guardian requests deletion of minor's information"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-cooperation",
        "reference": "Section 6 - Disclosure",
        "summary": "Requires disclosure of personal information to law enforcement and authorities to comply with legal obligations, detect illegal activities, and protect rights and safety",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues; protect against harm to the rights, property or safety of our company, our users, our employees, or others; or to maintain and protect the security and integrity of Pornhub or infrastructure.",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid legal process or court order",
            "example": "Subpoena, search warrant, or equivalent legal document",
            "reason": "Legal requirement for disclosure of personal information"
          }
        ],
        "removalCriteria": [
          "Content involves illegal or suspected illegal activities",
          "Content poses harm to rights, property or safety of users",
          "Legal process requires content preservation or removal"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise data rights, request content removal, or appeal decisions through email contact",
      "steps": [
        "Contact support@pornhub.com with specific request type",
        "Provide identity verification information (username and email address)",
        "Wait for response within one month for data subject rights requests",
        "Provide additional information if requested for verification"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T12:07:15.680Z",
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
    "id": "pornhub-new-1758629235679-0",
    "reference": "PH-NCCP",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual content, consent requirements, and content removal procedures.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T12:07:15.680Z",
    "policies": [
      {
        "id": "ph-nccp-intimate-images",
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
        "id": "ph-nccp-hidden-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos of any person in public or private settings without valid written consent, including hidden camera content, spy camera content, and up-skirt content.",
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
          "Content was recorded without valid written consent",
          "Content involves hidden or spy camera recordings",
          "Content includes up-skirt recordings"
        ]
      },
      {
        "id": "ph-nccp-revenge-porn",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit sexual images of someone else without their valid written consent, including non-consensual distribution of intimate images commonly referred to as revenge porn.",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\")",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown"
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
          "Non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-nccp-non-sexual-images",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-sexually explicit images of someone else without their valid written consent.",
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
        "id": "ph-nccp-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about a particular individual, including phone number, email, address, or full name.",
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
            "example": "URL links to specific content containing private identifying information",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information without consent",
          "Content includes phone numbers, email addresses, physical addresses, or full names"
        ]
      },
      {
        "id": "ph-nccp-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated, modified, or other manipulations of a person's image in picture or video to deceive or mislead viewers.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific deepfake content",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content includes modified images or videos designed to deceive viewers",
          "Content presents deepfake technology in any form"
        ]
      },
      {
        "id": "ph-nccp-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault, whether real or simulated.",
        "quote": "Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
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
          "Content depicts non-consensual sexual activity",
          "Content shows coerced or forced sexual acts",
          "Content depicts rape or sexual assault"
        ]
      },
      {
        "id": "ph-nccp-incapacitated",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring persons appearing drugged, incapacitated, or intoxicated involved in sexual acts.",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific content showing incapacitated persons",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content features persons appearing drugged in sexual acts",
          "Content shows incapacitated individuals involved in sexual activity",
          "Content depicts intoxicated persons in sexual situations"
        ]
      },
      {
        "id": "ph-nccp-enforcement-swift",
        "reference": "Enforcement - Consequences",
        "summary": "Requires swift review and removal of infringing content, fingerprinting to block future uploads, and account suspension or termination where appropriate.",
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
            "description": "Swift action taken upon identification or notification"
          },
          "removal": {
            "value": null,
            "unit": null,
            "description": "Content removed expeditiously upon valid request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URL links to specific violating content",
            "reason": "To enable swift identification, review, and removal of violating content"
          }
        ],
        "removalCriteria": [
          "Content violates Non-Consensual Content Policy",
          "Content is identified through moderation or user reports",
          "Content is confirmed to be in violation after review"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
