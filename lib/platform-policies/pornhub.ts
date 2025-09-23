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
    "accessTimestamp": "2025-09-23T13:58:16.661Z",
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
        "summary": "Prohibits non-consensual content, revenge porn, blackmail, and intimidation. Content must have proper consent from all individuals appearing in it.",
        "quote": "Further, the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein. You have obtained the consent and release for every individual appearing in your Content.",
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
            "description": "Submit report via Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "URL(s) of the non-consensual content",
            "reason": "To identify the specific content that violates consent policies"
          },
          {
            "description": "Description of how the content was shared without consent",
            "reason": "To understand the nature of the non-consensual sharing"
          }
        ],
        "removalCriteria": [
          "Content was uploaded without consent from individuals appearing in it",
          "Content constitutes revenge porn or was shared for intimidation purposes",
          "Content was shared as part of blackmail or coercion",
          "Uploader cannot demonstrate proper consent and release from all individuals in the content"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation and falsely representing affiliation with another person. Users cannot create fake profiles or misrepresent their identity.",
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
          "Account or content impersonates another person without authorization",
          "Profile falsely claims affiliation with an individual",
          "Content misrepresents the uploader's identity or relationship to others"
        ]
      },
      {
        "id": "ph-prohibited-content-policy",
        "reference": "PH-TOS-PROHIBITED",
        "summary": "Prohibits content that is harmful, threatening, abusive, harassing, invasive of privacy, or otherwise objectionable. Content must comply with all applicable laws.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
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
            "description": "URL(s) of the prohibited content",
            "reason": "To identify the specific content that violates platform policies"
          },
          {
            "description": "Description of how the content violates the prohibited use policies",
            "reason": "To understand the nature of the policy violation"
          },
          {
            "description": "Use the Report button available below each piece of content",
            "reason": "To report violations through the proper reporting mechanism"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, abusive, or harassing toward users",
          "Content is invasive of another person's privacy",
          "Content encourages violence or contains hate speech",
          "Content violates applicable laws or platform terms of service"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email or webform. Complaints are handled in a timely, non-discriminatory manner and may result in reversal of previous decisions.",
      "steps": [
        "Submit complaint within 6 months of notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Pornhub will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Previous decisions may be reversed if complaint demonstrates content did not violate policies or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T13:58:16.661Z",
    "policies": [
      {
        "id": "ph-pp-content-removal-1",
        "reference": "PH-PP-Section-6",
        "summary": "Provides content removal process for users to request removal of content that violates privacy or was shared without consent",
        "quote": "We provide areas on Pornhub where you can post information about yourself and others, communicate with others, upload content (e.g., pictures, video files, etc.), and post comments or reviews of content found on Pornhub. Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Contact information for content removal requests",
            "example": "Email to support@pornhub.com",
            "reason": "To initiate content removal process"
          }
        ],
        "removalCriteria": [
          "Content that violates user privacy",
          "Content shared without proper consent"
        ]
      },
      {
        "id": "ph-pp-identity-verification-1",
        "reference": "PH-PP-Section-2",
        "summary": "Requires identity and age verification for registered users, including biometric processing to prevent impersonation and verify authenticity of identification documents",
        "quote": "Identifiers and Biometric Information: If you choose to register to Pornhub or if this is required for age verification purposes, we process identifiers you submit to us (including government-issued photo identification as well as other documentation) for us to verify your identity, age, and record checks. Our third-party service provider will also process you face scan which is considered biometric information to verify the authenticity of the identifiers you provide to us while registering for such services",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or other official ID",
            "reason": "To verify identity and prevent impersonation"
          },
          {
            "description": "Biometric face scan",
            "example": "Live facial recognition scan",
            "reason": "To verify authenticity of identification documents and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Failure to verify identity through proper documentation",
          "Detection of impersonation through biometric verification"
        ]
      },
      {
        "id": "ph-pp-account-security-1",
        "reference": "PH-PP-Section-4",
        "summary": "Processes personal information to detect, prevent, and respond to fraud, illegal activities, and security issues including unauthorized access",
        "quote": "Functionality and security: We may process any of the categories of data mentioned herein to diagnose or fix technology problems, to detect, prevent, and respond to actual or potential fraud, illegal activities, or intellectual property infringement.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of fraudulent or illegal activity",
            "example": "Documentation showing unauthorized access or misuse",
            "reason": "To investigate and respond to security incidents"
          }
        ],
        "removalCriteria": [
          "Detection of actual or potential fraud",
          "Identification of illegal activities",
          "Evidence of intellectual property infringement"
        ]
      },
      {
        "id": "ph-pp-platform-safety-1",
        "reference": "PH-PP-Section-4",
        "summary": "Processes user information to promote safety and security on the platform and provide safe, secure products for users",
        "quote": "Platform Safety: To promote safety and security on Pornhub. We use the information we collect to help protect Pornhub users from harm and provide safe, secure product.",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Information demonstrating harm or safety concerns",
            "example": "Reports of harassment, abuse, or safety violations",
            "reason": "To protect users from harm and maintain platform safety"
          }
        ],
        "removalCriteria": [
          "Content that poses harm to users",
          "Violations of platform safety standards"
        ]
      },
      {
        "id": "ph-pp-hash-values-1",
        "reference": "PH-PP-Section-4",
        "summary": "Creates hash values from content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation, with authority to share hashes with law enforcement",
        "quote": "Hash Values: We may create hash values from any of the categories of data we process, such as infringing or illegal content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation. We reserve the right to share any hashes with law enforcement agencies.",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Content suspected of being illegal or infringing",
            "example": "URLs or descriptions of problematic content",
            "reason": "To create hash values for detection and prevention of illegal activities"
          }
        ],
        "removalCriteria": [
          "Content identified as infringing or illegal",
          "Content associated with fraud, sexual assault, or exploitation"
        ]
      },
      {
        "id": "ph-pp-user-account-deletion-1",
        "reference": "PH-PP-Section-8",
        "summary": "Allows users to delete and deactivate their accounts at any time, making profiles no longer accessible and requiring new account creation for future use",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you. If you later choose to have an account with us, you will have to sign up for a new account as none of the information you previously provided or saved within your account will have been saved.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Account verification for deletion request",
            "example": "Username and email address used to create account",
            "reason": "To verify account ownership before deletion"
          }
        ],
        "removalCriteria": [
          "User request for account deletion",
          "Deactivation of user profile and associated content"
        ]
      },
      {
        "id": "ph-pp-user-contributions-deletion-1",
        "reference": "PH-PP-Section-8",
        "summary": "Allows users to delete their user contributions and audio/video information through account settings",
        "quote": "You may use your account settings to delete your user contributions and audio/video information.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Access to user account settings",
            "example": "Login credentials for registered account",
            "reason": "To access deletion controls for user-generated content"
          }
        ],
        "removalCriteria": [
          "User request to delete contributions",
          "User request to delete audio/video content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/managemydata/requestDatadeletion?productId=10068&productDomain=pornhub.com",
      "summary": "Users can request data deletion and manage personal data through dedicated platform tools, with one month response time for data subject requests",
      "steps": [
        "Access the 'Manage Your Personal Data' section",
        "Use the 'DELETE MY PERSONAL DATA' link for registered users",
        "Provide verification information including username and email address",
        "Wait for processing within one month response period",
        "Contact support@pornhub.com for additional assistance with rights requests"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T13:58:16.661Z",
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
    "id": "pornhub-new-1758635896661-0",
    "reference": "PH-NCII-POLICY",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, revenge porn, and consent requirements for all content uploads.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T13:58:16.661Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Strictly prohibits the recording or distribution of intimate images without consent, including photos and videos depicting explicit sexual activity, nudity, or partial nudity.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate images without valid written consent",
          "Content shows explicit sexual activity without consent",
          "Content shows nudity or partial nudity without consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-HIDDEN",
        "summary": "Prohibits videos or photos of any person taken without valid written consent, including hidden camera content, spy camera content, and up-skirt content.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content appears to have been taken without consent",
          "Content includes hidden or spy camera footage",
          "Content includes up-skirt imagery"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific videos or images that violate the policy",
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
        "id": "ph-ncii-personal-images",
        "reference": "PH-NCII-POLICY-PERSONAL",
        "summary": "Prohibits sharing non-sexually explicit images of someone without their valid written consent.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent",
          "Personal images shared without permission"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about individuals, including phone numbers, email addresses, physical addresses, or full names.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to content containing the exposed private information",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content exposes phone numbers without consent",
          "Content exposes email addresses without consent",
          "Content exposes physical addresses without consent",
          "Content exposes full names without consent",
          "Content constitutes doxing of private identifying information"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated, modified, or other manipulations of a person's image in picture or video to deceive or mislead viewers.",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to the deepfake content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content contains modified images or videos to deceive viewers",
          "Content constitutes deepfake technology usage",
          "Content misleads viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "PH-NCII-POLICY-NONCONSENT",
        "summary": "Prohibits content featuring or promoting non-consensual acts, including depictions of non-consensual sexual activity, coerced or forced sexual acts, rape, or sexual assault.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to content depicting non-consensual acts",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content features non-consensual acts",
          "Content promotes non-consensual acts",
          "Content depicts non-consensual sexual activity",
          "Content shows coerced or forced sexual acts",
          "Content depicts rape or sexual assault"
        ]
      },
      {
        "id": "ph-ncii-incapacitated",
        "reference": "PH-NCII-POLICY-INCAPACITATED",
        "summary": "Prohibits content showing persons appearing drugged, incapacitated, or intoxicated involved in sexual acts.",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "URL links to the content in question",
            "example": "Direct links to content showing incapacitated persons",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged in sexual acts",
          "Content shows incapacitated persons in sexual acts",
          "Content shows intoxicated persons in sexual acts",
          "Performers appear to have impaired judgment due to substances"
        ]
      },
      {
        "id": "ph-ncii-swift-removal",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Requires swift removal of violating content, with content reviewed and removed expeditiously upon report through the Content Removal Request Form.",
        "quote": "Please include all relevant URL links to the content in question and we will address your request confidentially and remove the content expeditiously. our Trust & Safety and Moderation teams work swiftly to: Review and remove infringing content",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Content removed expeditiously upon report"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Completed Content Removal Request Form",
            "example": "Form submission through the platform's official removal request system",
            "reason": "To process removal requests through the proper channels"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to specific violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates non-consensual content policy",
          "Content is reported through proper channels",
          "Content is identified as infringing"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
