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
    "accessTimestamp": "2025-09-23T15:04:25.879Z",
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
            "example": "https://pornhub.com/view_video.php?viewkey=example",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of the privacy violation submitted via the Content Removal Request Form",
            "example": "Personal address and phone number posted without consent",
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
            "example": "https://pornhub.com/view_video.php?viewkey=example or https://pornhub.com/users/username",
            "reason": "To identify the source of the harassing content"
          },
          {
            "description": "Screenshots of the harassing comments or messages",
            "example": "Screenshot showing threatening language in comments",
            "reason": "To provide evidence of the harassing behavior"
          },
          {
            "description": "Use the reporting flag available on all videos and comments",
            "example": "Click the flag icon next to the offending content",
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
            "example": "Complete the DMCA form at https://www.pornhub.com/information/dmcaform",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of original ownership of the content",
            "example": "Original files with metadata or proof of creation",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "https://pornhub.com/view_video.php?viewkey=example",
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
            "example": "Email support@pornhub.com with account details",
            "reason": "To report the compromise and initiate recovery"
          },
          {
            "description": "Provide a description of the unauthorized activity",
            "example": "Account was used to upload content without permission",
            "reason": "To understand the scope of the compromise"
          },
          {
            "description": "Evidence of account ownership may be required for recovery",
            "example": "Access to the registered email address",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "The account is being used to upload content that violates platform policies",
          "The legitimate owner is locked out of their account"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/support",
      "summary": "Users can lodge complaints against content moderation decisions within 6 months of notification through email or webform contact options.",
      "steps": [
        "Submit complaint within 6 months of the decision notification",
        "Email dsa@pornhub.com from the account email or use the webform at pornhub.com/support",
        "Include detailed information about the complaint and explanation of why the decision should be reversed",
        "Pornhub will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Decisions may be reversed if the complaint demonstrates the content did not violate policies or the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T15:04:25.879Z",
    "policies": [
      {
        "id": "ph-pp-content-reporting",
        "reference": "Section 2 - Online Forms and Communication Data",
        "summary": "Processes information submitted through content reporting and moderation systems",
        "quote": "We process Contact Data and other information that you submit through online forms provided on Pornhub or information send to us via email, online support chats or such as information provided in the context of support requests or any other inquiries, the content reporting and moderation of content, and our internal complaint handling system.",
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
            "description": "Contact information and details about the content issue",
            "example": "Email address, description of the problem with specific content",
            "reason": "Required to process content reports and moderation requests"
          }
        ],
        "removalCriteria": [
          "Content reported through official reporting channels",
          "Information provided supports content moderation action"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "Section 2 - Identifiers and Biometric Information",
        "summary": "Processes government-issued identification and biometric data for identity verification and age confirmation",
        "quote": "If you choose to register to Pornhub or if this is required for age verification purposes, we process identifiers you submit to us (including government-issued photo identification as well as other documentation) for us to verify your identity, age, and record checks. Our third-party service provider will also process you face scan which is considered biometric information to verify the authenticity of the identifiers you provide to us while registering for such services",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or other official ID document",
            "reason": "Required to verify identity and age for account registration"
          },
          {
            "description": "Face scan for biometric verification",
            "example": "Live selfie or facial recognition scan",
            "reason": "To verify authenticity of identification documents and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Identity verification required for account registration",
          "Age verification required for platform access",
          "Prevention of impersonation through biometric matching"
        ]
      },
      {
        "id": "ph-pp-user-contributions-public",
        "reference": "Section 2 - User Contributions",
        "summary": "Warns that user-submitted content becomes publicly available and cannot be controlled once posted",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Understanding that content becomes public upon submission",
            "example": "Acknowledgment of public nature of uploaded content",
            "reason": "Users must understand the public nature of their contributions"
          }
        ],
        "removalCriteria": [
          "Content voluntarily submitted by users becomes publicly available",
          "Platform cannot control access to or use of user contributions once posted"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "Section 6 - To comply with the law",
        "summary": "Discloses personal information to law enforcement and authorities to comply with legal obligations and protect rights",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues; protect against harm to the rights, property or safety of our company, our users, our employees, or others; or to maintain and protect the security and integrity of Pornhub or infrastructure.",
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
            "description": "Legal process or court order",
            "example": "Subpoena, search warrant, or other valid legal document",
            "reason": "Required to comply with legal obligations and law enforcement requests"
          }
        ],
        "removalCriteria": [
          "Legal compliance requirements",
          "Court orders or legal process",
          "Prevention of illegal activities",
          "Protection of user safety and platform security",
          "Enforcement of Terms and Conditions violations"
        ]
      },
      {
        "id": "ph-pp-hash-values-sharing",
        "reference": "Section 4 - Hash Values",
        "summary": "Creates and shares hash values of content to detect and prevent illegal activities including fraud and exploitation",
        "quote": "We may create hash values from any of the categories of data we process, such as infringing or illegal content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation. We reserve the right to share any hashes with law enforcement agencies.",
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
            "description": "Content identified as infringing or illegal",
            "example": "Non-consensual intimate images, exploitative content",
            "reason": "To create hash values for detection and prevention of illegal content"
          }
        ],
        "removalCriteria": [
          "Content identified as infringing or illegal",
          "Content related to fraud, sexual assault, or exploitation",
          "Content requiring law enforcement notification"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Account Deletion",
        "summary": "Allows users to delete and deactivate their accounts, removing profile accessibility",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you. If you later choose to have an account with us, you will have to sign up for a new account as none of the information you previously provided or saved within your account will have been saved.",
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
            "description": "Account ownership verification",
            "example": "Access to registered email address or account credentials",
            "reason": "To verify user has authority to delete the account"
          }
        ],
        "removalCriteria": [
          "User request for account deletion",
          "No legal or court order preventing deletion",
          "Profile becomes inaccessible after deletion"
        ]
      },
      {
        "id": "ph-pp-user-content-deletion",
        "reference": "Section 8 - User Content Management",
        "summary": "Allows users to delete their user contributions and audio/video content through account settings",
        "quote": "You may use your account settings to delete your user contributions and audio/video information.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Account access and ownership verification",
            "example": "Login credentials to access account settings",
            "reason": "To verify user has authority to delete their own content"
          }
        ],
        "removalCriteria": [
          "User request to delete their own contributions",
          "Access to account settings required",
          "Content must be user's own submissions"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/support",
      "summary": "Users can contact support for assistance with content issues and data requests, with a one-month response timeframe for data subject requests",
      "steps": [
        "Contact support via email at support@pornhub.com",
        "Provide necessary information to verify identity and locate information in systems",
        "Platform has one month to respond to data subject requests",
        "For account-related issues, users may need to verify account access"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T15:04:25.879Z",
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
    "id": "pornhub-new-1758639865879-0",
    "reference": "PH-NON-CONSENSUAL-POLICY",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy covering non-consensual intimate imagery, revenge porn, and content removal procedures including the Content Removal Request Form process.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T15:04:25.879Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits recording or distribution of intimate images without consent, including photos and videos depicting explicit sexual activity or nudity",
        "quote": "The recording or distribution of intimate images (that is, photos and videos that are generally understood to depict explicit sexual activity or nudity or partial nudity) without someone's consent is a violation of that person's privacy and is a severe violation of our Terms of Service, and is strictly prohibited.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific videos or images",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content was shared without valid written consent",
          "Content depicts explicit sexual activity or nudity without consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos of any person taken without valid written consent, including hidden camera and upskirt content",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific videos or images",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content includes hidden or spy camera footage",
          "Content includes upskirt imagery"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit sexual images of someone without their valid written consent, including revenge porn",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\")",
        "contentTypes": [
          "intimate"
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
            "example": "Direct links to the specific videos or images",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images",
          "Content qualifies as revenge porn"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-images",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-sexually explicit images of someone without their valid written consent",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent",
        "contentTypes": [
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
            "description": "URL links to the content in question",
            "example": "Direct links to the specific videos or images",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about individuals including phone numbers, emails, addresses, or full names",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
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
            "description": "URL links to the content in question",
            "example": "Direct links to the specific content containing private information",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information",
          "Content includes phone numbers, email addresses, physical addresses, or full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated, modified, or manipulated images or videos that deceive viewers",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the specific deepfake content",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Content is AI-generated manipulation of a person's image",
          "Content is modified to deceive or mislead viewers",
          "Content manipulates a person's likeness without consent"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual sexual acts, whether real or simulated, including rape and sexual assault",
        "quote": "Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific content",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content shows coerced or forced sexual acts",
          "Content depicts rape or sexual assault"
        ]
      },
      {
        "id": "ph-ncii-intoxicated-persons",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific content",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Content Removal Request Form completion",
            "example": "Completed form with all required fields",
            "reason": "To process the removal request confidentially and expeditiously"
          }
        ],
        "removalCriteria": [
          "Content features persons appearing drugged during sexual acts",
          "Content shows incapacitated persons in sexual situations",
          "Content depicts intoxicated individuals involved in sexual acts"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
