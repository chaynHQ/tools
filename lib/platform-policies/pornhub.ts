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
    "accessTimestamp": "2025-09-23T12:01:49.616Z",
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
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. All content must have proper consent from all individuals appearing in it.",
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
          "Content was uploaded without proper consent from all individuals appearing in it",
          "Content was shared to harm, threaten, or intimidate someone"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation of another person or falsely misrepresenting affiliation with a person. Users cannot falsely state their identity or create fake profiles.",
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
            "reason": "To verify your identity and establish the impersonation"
          },
          {
            "description": "Description of how the account or content misrepresents your identity",
            "reason": "To understand the nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person",
          "Profile falsely states or misrepresents affiliation with a person",
          "Content is uploaded using someone else's identity without permission"
        ]
      },
      {
        "id": "ph-content-removal-process",
        "reference": "PH-TOS-REMOVAL",
        "summary": "Provides a content removal process for users to report violations including illegal content, non-consensual material, and privacy violations through electronic forms and reporting buttons.",
        "quote": "If you see any Content you suspect violates applicable law, third party rights, or these Terms of Service, please report such Content to us, using the electronic form available at https://pornhub.com/content-removal, or the 'Report' button available below each piece of content.",
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
            "reason": "To formally report content violations"
          },
          {
            "description": "Use the 'Report' button below each piece of content",
            "reason": "To flag specific content for review"
          },
          {
            "description": "Description of the suspected violation",
            "reason": "To help moderators understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content violates applicable law",
          "Content violates third party rights",
          "Content violates the platform's Terms of Service",
          "Content is suspected of being illegal or harmful"
        ]
      }
    ],
    "appealProcess": {
      "url": "dsa@pornhub.com",
      "summary": "Users can lodge complaints against content moderation decisions within 6 months through email or webform. Complaints are handled in a timely, non-discriminatory manner and decisions may be reversed if justified.",
      "steps": [
        "Submit complaint within 6 months of notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of the complaint",
        "Provide explanation of reasons why you believe the complaint is justified",
        "Pornhub will review and may reverse decisions if complaint demonstrates the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T12:01:49.616Z",
    "policies": [
      {
        "id": "ph-pp-content-reporting",
        "reference": "Section 4 - Communications and handling of requests",
        "summary": "Processes communications and requests to respond to and resolve user requests, including ensuring compliance with legal obligations",
        "quote": "We process Online Forms and Communications Data and other information as necessary to respond to and resolve any of your requests, including where this is required to ensure compliance with our legal obligations.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Online forms and communication data",
            "example": "Information submitted through online forms or sent via email/support chats",
            "reason": "To respond to and resolve user requests and ensure legal compliance"
          }
        ],
        "removalCriteria": [
          "User requests that require response and resolution",
          "Requests necessary for legal compliance"
        ]
      },
      {
        "id": "ph-pp-content-moderation",
        "reference": "Section 2 - Online Forms and Communication Data",
        "summary": "Processes information for content reporting and moderation of content through internal complaint handling system",
        "quote": "We process Contact Data and other information that you submit through online forms provided on Pornhub or information send to us via email, online support chats or such as information provided in the context of support requests or any other inquiries, the content reporting and moderation of content, and our internal complaint handling system.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Contact data and information submitted through online forms",
            "example": "Information provided via email, support chats, or online forms",
            "reason": "For content reporting and moderation through internal complaint handling system"
          }
        ],
        "removalCriteria": [
          "Content reported through official channels",
          "Content identified through moderation processes"
        ]
      },
      {
        "id": "ph-pp-platform-safety",
        "reference": "Section 4 - Platform Safety",
        "summary": "Promotes safety and security on Pornhub by using collected information to help protect users from harm and provide safe, secure products",
        "quote": "Platform Safety: To promote safety and security on Pornhub. We use the information we collect to help protect Pornhub users from harm and provide safe, secure product.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Information collected from users",
            "example": "User activity data, identifiers, and other collected information",
            "reason": "To protect users from harm and maintain platform safety"
          }
        ],
        "removalCriteria": [
          "Content that poses harm to users",
          "Content that compromises platform safety and security"
        ]
      },
      {
        "id": "ph-pp-fraud-prevention",
        "reference": "Section 4 - Functionality and security",
        "summary": "Processes data to detect, prevent, and respond to actual or potential fraud, illegal activities, or intellectual property infringement",
        "quote": "We may process any of the categories of data mentioned herein to diagnose or fix technology problems, to detect, prevent, and respond to actual or potential fraud, illegal activities, or intellectual property infringement.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Any categories of data collected by the platform",
            "example": "User data, activity logs, identifiers, and other information",
            "reason": "To detect, prevent, and respond to fraud, illegal activities, or intellectual property infringement"
          }
        ],
        "removalCriteria": [
          "Content involving actual or potential fraud",
          "Illegal activities",
          "Intellectual property infringement"
        ]
      },
      {
        "id": "ph-pp-hash-values",
        "reference": "Section 4 - Hash Values",
        "summary": "Creates hash values from processed data to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation, with authority to share hashes with law enforcement",
        "quote": "Hash Values: We may create hash values from any of the categories of data we process, such as infringing or illegal content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation. We reserve the right to share any hashes with law enforcement agencies.",
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
            "description": "Hash values created from processed data",
            "example": "Digital fingerprints of infringing or illegal content",
            "reason": "To detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation"
          }
        ],
        "removalCriteria": [
          "Content identified through hash matching as infringing or illegal",
          "Content involving fraud, sexual assault, or exploitation"
        ]
      },
      {
        "id": "ph-pp-legal-compliance",
        "reference": "Section 4 - Compliance",
        "summary": "Processes data to enforce Privacy Notice and Terms and Conditions, comply with legal obligations including responding to data subject requests, verify user age, respond to content reports, and comply with content moderation obligations",
        "quote": "Compliance: We may process any of the categories of data mentioned herein to enforce this Privacy Notice, our Terms and Conditions and to comply with any legal obligations, namely but not limited to responding to your data subject requests, to verify the age of users having access to Pornhub, to respond to content reports, and to comply with applicable content moderation and complaint handling obligations.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Any categories of data processed by the platform",
            "example": "User data, content reports, age verification documents",
            "reason": "To enforce policies, comply with legal obligations, and respond to content reports"
          }
        ],
        "removalCriteria": [
          "Content reported by users",
          "Content violating Terms and Conditions",
          "Content requiring removal for legal compliance"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "Section 6 - To comply with the law or protect rights",
        "summary": "Accesses, preserves and shares personal information with authorities to comply with legal processes, enforce terms, detect illegal activities, protect rights and safety, and maintain platform security",
        "quote": "To comply with the law or protect our rights or the rights of third parties: We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: 1. comply with any applicable law, regulation, court order, legal process, government or public authority requests 2. enforce applicable Terms & Conditions, including prevention of potential violations thereof. This also includes our Trust and Safety initiative, in the scope of which we may disclose some information to several recipients. 3. detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues. 4. protect against harm to the rights, property or safety of our company, our users, our employees, or others; or 5. to maintain and protect the security and integrity of Pornhub or infrastructure.",
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
            "description": "Legal process documentation",
            "example": "Court orders, subpoenas, government requests",
            "reason": "To comply with legal obligations and protect rights and safety"
          }
        ],
        "removalCriteria": [
          "Content subject to legal process or court orders",
          "Content violating Terms and Conditions",
          "Illegal or suspected illegal activities",
          "Content causing harm to rights, property or safety"
        ]
      },
      {
        "id": "ph-pp-user-contributions-public",
        "reference": "Section 2 - User Contributions",
        "summary": "Warns that user contributions including audio/video information are made publicly available and can be accessed, collected, used and disclosed by others beyond platform control",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User-submitted content",
            "example": "Pictures, video files, comments, reviews",
            "reason": "Content becomes publicly available when submitted"
          }
        ],
        "removalCriteria": [
          "User-submitted content that becomes publicly accessible",
          "Content voluntarily posted by users"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/managemydata/requestDatadeletion?productId=10068&productDomain=pornhub.com",
      "summary": "Users can request deletion of personal data and exercise data subject rights including rectification, objection, and restriction of processing",
      "steps": [
        "Contact support@pornhub.com to exercise rights to rectification, objection, or restriction of processing",
        "Use dedicated links for data access or deletion requests",
        "Verify identity and provide sufficient information to locate data in systems",
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
    "accessTimestamp": "2025-09-23T12:01:49.616Z",
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
    "id": "pornhub-new-1758628909616-0",
    "reference": "PH-NCCP",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, consent requirements, and removal procedures for NCII content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T12:01:49.616Z",
    "policies": [
      {
        "id": "ph-nccp-intimate-without-consent",
        "reference": "PH-NCCP",
        "summary": "Strictly prohibits the recording or distribution of intimate images without someone's consent, including explicit sexual activity, nudity, or partial nudity.",
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
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate images without valid written consent",
          "Content shows explicit sexual activity without consent",
          "Content shows nudity or partial nudity without consent"
        ]
      },
      {
        "id": "ph-nccp-hidden-camera",
        "reference": "PH-NCCP",
        "summary": "Prohibits videos or photos of any person taken without their valid written consent, including hidden camera content, spy camera content, and up-skirt content.",
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
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Hidden or spy camera content",
          "Up-skirt content",
          "Content taken in public or private settings without consent"
        ]
      },
      {
        "id": "ph-nccp-revenge-porn",
        "reference": "PH-NCCP",
        "summary": "Prohibits sharing explicit sexual images of someone else without their valid written consent, including non-consensual distribution of intimate images commonly referred to as revenge porn.",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\")",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Non-consensual distribution of intimate images",
          "Content commonly referred to as revenge porn"
        ]
      },
      {
        "id": "ph-nccp-non-sexual-without-consent",
        "reference": "PH-NCCP",
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
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-doxing",
        "reference": "PH-NCCP",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about a particular individual, including phone number, email, address, or full name.",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to content containing private identifying information",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information",
          "Content contains phone numbers without consent",
          "Content contains email addresses without consent",
          "Content contains physical addresses without consent",
          "Content contains full names without consent"
        ]
      },
      {
        "id": "ph-nccp-deepfakes",
        "reference": "PH-NCCP",
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated, modified, or other manipulations of a person's image in picture or video to deceive or mislead viewers.",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to deepfake content or AI-manipulated images/videos",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content contains modified images or videos to deceive viewers",
          "Content presents deepfakes of any kind"
        ]
      },
      {
        "id": "ph-nccp-non-consensual-acts",
        "reference": "PH-NCCP",
        "summary": "Prohibits content featuring or promoting non-consensual acts, real or simulated, including depictions of coerced or forced sexual acts, rape, or sexual assault.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to content depicting non-consensual sexual acts",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Content features non-consensual acts, real or simulated",
          "Content promotes non-consensual sexual activity",
          "Content depicts coerced or forced sexual acts",
          "Content depicts rape or sexual assault"
        ]
      },
      {
        "id": "ph-nccp-intoxicated-persons",
        "reference": "PH-NCCP",
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
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to content showing intoxicated persons in sexual acts",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged in sexual acts",
          "Content shows incapacitated persons in sexual acts",
          "Content shows intoxicated persons in sexual acts"
        ]
      },
      {
        "id": "ph-nccp-swift-removal",
        "reference": "PH-NCCP",
        "summary": "Requires swift action to review and remove infringing content, fingerprint content to block future uploads, and suspend or terminate associated uploader accounts where appropriate.",
        "quote": "In all cases where we identify or are made aware of content that violates this policy, our Trust & Safety and Moderation teams work swiftly to: Review and remove infringing content; Fingerprint the content in question to help block future uploads of the same content to our sites; AND Suspend or permanently terminate the associated uploader's account, where appropriate.",
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
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Swift action taken by Trust & Safety and Moderation teams"
          },
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal upon report submission"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to violating content",
            "reason": "To enable swift identification and removal of infringing content"
          }
        ],
        "removalCriteria": [
          "Content violates non-consensual content policy",
          "Content is identified as infringing",
          "Content is reported through proper channels"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
