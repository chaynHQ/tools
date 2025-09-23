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
    "accessTimestamp": "2025-09-23T12:01:41.214Z",
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
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. All content must have proper consent from individuals appearing in it.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); ... Further, the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein. ... you have obtained the consent and release for every individual appearing in your Content",
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
            "description": "Report using the electronic form available at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific content for review"
          },
          {
            "description": "Description of how the content was shared without consent",
            "reason": "To understand the nature of the non-consensual sharing"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without proper consent from individuals appearing in it",
          "Content was shared to harm, threaten, or intimidate someone"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation of another person or falsely representing affiliation with someone. Users cannot falsely state or misrepresent their identity.",
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
            "description": "URL(s) of the impersonating content or profile",
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
          "Content impersonates another person",
          "Profile or account falsely represents affiliation with someone",
          "Content misrepresents the uploader's identity",
          "Account is using someone else's identity without permission"
        ]
      },
      {
        "id": "ph-content-removal-process",
        "reference": "PH-TOS-REMOVAL",
        "summary": "Provides multiple reporting mechanisms for content violations including anonymous reporting for suspected illegal content and general content removal requests.",
        "quote": "If you see any Content you suspect violates applicable law, third party rights, or these Terms of Service, please report such Content to us, using the electronic form available at https://pornhub.com/content-removal, or the 'Report' button available below each piece of content. ... Anonymous Content Removal Request: This is the form under which you can anonymously report to us any Content that you may suspect is in violation of our CSAM Policy. Additionally, it provides the link to the general Content Removal Request",
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
            "description": "Use the electronic form at https://pornhub.com/content-removal",
            "reason": "Primary method for reporting content violations"
          },
          {
            "description": "Use the 'Report' button below specific content",
            "reason": "Direct reporting mechanism for individual pieces of content"
          },
          {
            "description": "Anonymous reporting form for suspected illegal content",
            "reason": "To allow reporting without revealing reporter identity"
          }
        ],
        "removalCriteria": [
          "Content violates applicable law",
          "Content violates third party rights",
          "Content violates the platform's Terms of Service",
          "Content is suspected of being illegal",
          "Content violates community standards"
        ]
      }
    ],
    "appealProcess": {
      "url": "dsa@pornhub.com",
      "summary": "Users can lodge complaints against content moderation decisions within 6 months via email. The platform handles complaints in a timely, non-discriminatory manner and may reverse decisions if justified.",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide an explanation of why you believe your complaint is justified",
        "The platform will review and may reverse the decision if the complaint demonstrates the content did not violate policies or the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T12:01:41.214Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6",
        "summary": "Provides content removal process for users to report violations and request removal of content",
        "quote": "We may disclose your information to third parties for the above purposes where necessary to comply with our legal obligations, to perform a task in the public interest (where the public interest is laid down by applicable law), or under our legitimate interests and the interests of the public, including as part of investigations or regulatory enquiries to detect, investigate and prosecute illegal activity.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Information necessary to respond to and resolve requests",
            "example": "Content reports and moderation requests",
            "reason": "To ensure compliance with legal obligations and handle content moderation"
          }
        ],
        "removalCriteria": [
          "Content that violates legal obligations",
          "Content reported through content reporting system",
          "Content that poses harm to rights, property or safety"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "Section 11",
        "summary": "Requires identity and age verification using facial recognition technology and government-issued identification to prevent impersonation and ensure user authenticity",
        "quote": "We employ third-party service providers to verify your identity, age, and the authenticity of the identification documents you provide using facial recognition technology. Facial recognition technology creates a mathematical representation of your facial features from the live scan of your face, your selfie, and the government-issued ID you submit or previously submitted to us.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Government-issued photo identification and live facial scan",
            "example": "Driver's license, passport, and real-time selfie",
            "reason": "To verify identity, prevent impersonation, and confirm age requirements"
          }
        ],
        "removalCriteria": [
          "Use of methods that allow a user to identify as someone else",
          "Failure to match selfie with government-issued ID",
          "Inability to confirm user's age"
        ]
      },
      {
        "id": "ph-pp-biometric-processing",
        "reference": "Section 11",
        "summary": "Processes biometric information including facial recognition data to verify user identity and prevent impersonation, requiring explicit user consent",
        "quote": "Information derived from this face scan or mathematical representation may be considered biometric information under the laws of certain states and countries and may be shared with us by our third-party service providers: When applicable, your biometric information may be processed to: verify you are a real, live person and to prevent the use of methods which would allow a user to identify as someone else; to match your selfie with your government-issued ID you submit or previously submitted to us to make sure that nobody is impersonating you; to help confirm your age.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Explicit consent for biometric information processing",
            "example": "User agreement to facial recognition scanning",
            "reason": "Required by law for processing biometric data and preventing impersonation"
          }
        ],
        "removalCriteria": [
          "Withdrawal of consent for biometric processing",
          "Failure to verify as real, live person",
          "Inability to match identity documents with biometric data"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "Section 2",
        "summary": "Prohibits sharing of user contributions that become publicly available and warns users that content can be accessed, collected, and used by others without platform control",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account settings access to delete user contributions",
            "example": "User account login and content management tools",
            "reason": "To allow users to remove their own uploaded content and audio/video information"
          }
        ],
        "removalCriteria": [
          "User request to delete their own contributions",
          "Content that violates terms of use",
          "Unauthorized sharing of user-submitted content"
        ]
      },
      {
        "id": "ph-pp-minor-protection",
        "reference": "Section 2",
        "summary": "Prohibits minors from using the platform and requires immediate deletion of any personal information from users under the age of majority",
        "quote": "Pornhub prohibits minors from using the platform. Pornhub is forbidden for persons under the age of 18 and the applicable age of majority in the jurisdiction from which Pornhub is accessed. We do not knowingly process personal information from minors. If you are the parent or legal guardian of a minor who has provided us with personal information, then please contact us at support@pornhub.com to have that minor's personal information deleted.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of parental or legal guardian status",
            "example": "Contact from verified parent or guardian",
            "reason": "To verify authority to request deletion of minor's information"
          }
        ],
        "removalCriteria": [
          "Any personal information from users under age of majority",
          "Content involving minors",
          "Accounts created by users under 18 years old"
        ]
      },
      {
        "id": "ph-pp-security-protection",
        "reference": "Section 4",
        "summary": "Processes personal information to detect, prevent, and respond to fraud, illegal activities, and security threats to protect platform integrity",
        "quote": "Functionality and security: We may process any of the categories of data mentioned herein to diagnose or fix technology problems, to detect, prevent, and respond to actual or potential fraud, illegal activities, or intellectual property infringement.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of fraud, illegal activities, or security threats",
            "example": "Reports of unauthorized access, fraudulent content, or intellectual property violations",
            "reason": "To maintain platform security and prevent illegal activities"
          }
        ],
        "removalCriteria": [
          "Content involving fraud or illegal activities",
          "Intellectual property infringement",
          "Security threats to platform or users",
          "Unauthorized access to accounts"
        ]
      },
      {
        "id": "ph-pp-hash-values",
        "reference": "Section 4",
        "summary": "Creates and shares hash values from content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation, with law enforcement sharing capability",
        "quote": "Hash Values: We may create hash values from any of the categories of data we process, such as infringing or illegal content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation. We reserve the right to share any hashes with law enforcement agencies.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content identified as infringing or illegal",
            "example": "Reports of sexual assault, exploitation, or fraudulent content",
            "reason": "To create digital fingerprints for detecting and preventing illegal content distribution"
          }
        ],
        "removalCriteria": [
          "Content involving sexual assault or exploitation",
          "Fraudulent or illegal content",
          "Content that matches known illegal material hash values"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8",
        "summary": "Allows users to delete and deactivate their accounts at any time, making profiles no longer accessible and requiring new registration for future access",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you. If you later choose to have an account with us, you will have to sign up for a new account as none of the information you previously provided or saved within your account will have been saved.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User account access and deletion request",
            "example": "Logged-in user requesting account termination",
            "reason": "To verify user identity and process account deletion"
          }
        ],
        "removalCriteria": [
          "User request for account deletion",
          "Account deactivation request",
          "Complete removal of user profile and associated data"
        ]
      },
      {
        "id": "ph-pp-data-subject-rights",
        "reference": "Section 18",
        "summary": "Provides users rights to access, rectify, delete, port, object to processing, and restrict use of their personal data, with one month response timeframe",
        "quote": "Subject to local law and applicable legal requirements and exemptions, you have certain rights regarding your personal data: Right of access: you have the right to receive information on the personal data we hold about you and how such personal data is used, as well as a copy of your personal data; Right to rectification: you have the right to rectify inaccurate personal data concerning you; Right to be forgotten: you have the right to delete/erase your personal data; Right to data portability: you have the right to receive the personal data provided by you in a structured, commonly used, and machine-readable format and to transmit this personal data to another data controller; Right to object: you have the right to object to the use of your personal data where such use is based on our legitimate interests or on public interests; Right to restriction of processing: you have the right in some cases, to restrict our use of your personal data.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
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
            "example": "Username, email address, and verification of account access",
            "reason": "To verify user identity and locate information in platform systems"
          }
        ],
        "removalCriteria": [
          "User request for data access, rectification, or deletion",
          "Objection to data processing based on legitimate interests",
          "Request for data portability or processing restrictions"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for data subject rights requests, content removal, and privacy-related concerns",
      "steps": [
        "Contact support@pornhub.com with specific request type",
        "Provide identity verification information including username and email address",
        "Submit any additional information reasonably requested for identity verification",
        "Wait for response within one month for data subject rights requests"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T12:01:41.214Z",
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
    "id": "pornhub-new-1758628901214-0",
    "reference": "PH-NCCP",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, consent requirements, and content removal procedures for NCII cases.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T12:01:41.214Z",
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
          "hacked",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and review"
          }
        ],
        "removalCriteria": [
          "Content was taken without the person's valid written consent",
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
            "description": "Report content through the Content Removal Request Form or flag content for review",
            "example": "URL links to hidden camera or spy camera content",
            "reason": "To enable swift identification and removal of non-consensual recordings"
          }
        ],
        "removalCriteria": [
          "Content was recorded without valid written consent",
          "Content involves hidden or spy cameras",
          "Content includes voyeuristic material like up-skirt recordings"
        ]
      },
      {
        "id": "ph-nccp-revenge-porn",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit sexual images of someone without their valid written consent, including non-consensual distribution of intimate images commonly referred to as revenge porn.",
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
            "description": "Submit Content Removal Request Form with first-hand knowledge or as the victim",
            "example": "URLs to explicit images shared without consent",
            "reason": "To verify the non-consensual nature of the content and enable swift removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-nccp-non-sexual-images",
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
            "description": "Report through Content Removal Request Form or flagging system",
            "example": "URLs to personal images shared without permission",
            "reason": "To protect privacy and prevent unauthorized sharing of personal content"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about individuals, including phone numbers, email addresses, physical addresses, or full names.",
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
            "description": "Report doxing content through appropriate reporting channels",
            "example": "Content containing private phone numbers, addresses, or identifying information",
            "reason": "To protect individual privacy and prevent harassment through exposure of personal information"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information",
          "Content includes phone numbers, email addresses, physical addresses, or full names without consent"
        ]
      },
      {
        "id": "ph-nccp-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated, modified, or manipulated images or videos of a person designed to deceive viewers into believing the person is acting or speaking as presented.",
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
            "description": "Report deepfake content through Content Removal Request Form",
            "example": "AI-generated or manipulated videos or images of individuals",
            "reason": "To prevent deceptive manipulation of individuals' likenesses and protect against non-consensual digital impersonation"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content includes modified images or videos designed to deceive viewers",
          "Content manipulates a person's likeness to misrepresent their actions or speech"
        ]
      },
      {
        "id": "ph-nccp-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts, whether real or simulated, including depictions of coerced or forced sexual acts, rape, or sexual assault.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report content through flagging system or Content Removal Request Form",
            "example": "Content depicting forced, coerced, or non-consensual sexual activity",
            "reason": "To maintain platform safety and prevent promotion of harmful non-consensual content"
          }
        ],
        "removalCriteria": [
          "Content features or promotes non-consensual sexual acts",
          "Content depicts coerced or forced sexual activity",
          "Content shows rape or sexual assault, whether real or simulated"
        ]
      },
      {
        "id": "ph-nccp-incapacitated-persons",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content involving persons appearing drugged, incapacitated, or intoxicated involved in sexual acts, where intoxication means impaired judgment from alcohol or drugs.",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts; Intoxicated (including pretending to be) means a state induced by alcohol or drugs, whether legal, illicit, or recreational as determined by Pornhub in its sole discretion, such that a performer's judgment appears to the reasonable observer as objectively impaired.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report content showing impaired individuals through appropriate channels",
            "example": "Videos showing persons who appear drugged, incapacitated, or intoxicated during sexual activity",
            "reason": "To protect individuals who cannot provide valid consent due to impaired judgment"
          }
        ],
        "removalCriteria": [
          "Content involves persons appearing drugged or incapacitated",
          "Content shows individuals whose judgment appears objectively impaired by substances",
          "Content features persons appearing intoxicated during sexual acts"
        ]
      },
      {
        "id": "ph-nccp-swift-removal",
        "reference": "Enforcement - Consequences",
        "summary": "Requires swift review and removal of infringing content, fingerprinting to block future uploads, and account suspension or termination of violating uploaders.",
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
            "description": "Swift action by Trust & Safety and Moderation teams"
          },
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal upon report submission"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Submit Content Removal Request Form with relevant URL links",
            "example": "Direct links to violating content on the platform",
            "reason": "To enable swift identification, review, and removal of policy-violating content"
          }
        ],
        "removalCriteria": [
          "Content violates Non-Consensual Content Policy",
          "Content is identified through reports or platform detection",
          "Content requires fingerprinting to prevent re-upload"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
