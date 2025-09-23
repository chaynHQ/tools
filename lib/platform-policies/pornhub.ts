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
    "accessTimestamp": "2025-09-23T14:11:49.379Z",
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
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation.",
        "quote": "the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein.",
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
            "description": "Report using the electronic form available at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific content for review"
          }
        ],
        "removalCriteria": [
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was shared without the consent of individuals depicted"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation and falsely representing affiliation with another person.",
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
            "description": "Evidence that the account or content falsely represents another person",
            "reason": "To verify the impersonation claim"
          },
          {
            "description": "Report through the content removal form or support channels",
            "reason": "To initiate the impersonation investigation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person",
          "False representation of affiliation with another person",
          "Use of someone else's identity without permission"
        ]
      },
      {
        "id": "ph-prohibited-content-policy",
        "reference": "PH-TOS-PROHIBITED",
        "summary": "Prohibits posting content that is obscene, illegal, defamatory, harassing, hateful, or encourages criminal conduct.",
        "quote": "post any Content that is obscene, illegal, unlawful, fraudulent, defamatory, libelous, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law, or is otherwise inappropriate",
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
            "description": "Report content using available reporting mechanisms",
            "reason": "To flag prohibited content for review"
          },
          {
            "description": "Provide specific details about the violation",
            "reason": "To help moderators understand the nature of the prohibited content"
          }
        ],
        "removalCriteria": [
          "Content is obscene, illegal, or unlawful",
          "Content is defamatory, libelous, or harassing",
          "Content is hateful or racially/ethnically offensive",
          "Content encourages criminal conduct or violates applicable laws"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users may lodge a complaint against content removal decisions within 6 months of notification. Complaints are handled in a timely, non-discriminatory, diligent, and objective manner.",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision notification",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide an explanation of the reason(s) why you believe your complaint is justified",
        "Pornhub will review and may reverse previous decisions if the complaint demonstrates the content did not violate terms or the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T14:11:49.379Z",
    "policies": [
      {
        "id": "ph-pp-ncii-1",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Prohibits sharing of user contributions including audio/video content without consent, as such content becomes publicly available when posted",
        "quote": "We provide areas on Pornhub where you can post information about yourself and others, communicate with others, upload content (e.g., pictures, video files, etc.), and post comments or reviews of content found on Pornhub. Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
            "description": "Evidence that content was posted without consent",
            "example": "Documentation showing lack of permission to share the content",
            "reason": "To verify that user contributions were shared without proper authorization"
          }
        ],
        "removalCriteria": [
          "Content was posted without the subject's consent",
          "User contributions contain personal information shared without authorization"
        ]
      },
      {
        "id": "ph-pp-privacy-1",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Prohibits processing of personal data including intimate content, personal information, and private documents without proper consent",
        "quote": "We may process different kinds of personal data about you, depending on whether you chose to create an account with us. Contact Data, Online Forms and Communication Data, Activity data, Identifiers, User Submitted Personal Information, Identifiers and Biometric Information, Sensitive data, User Contributions including Audio/Video Information.",
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
            "description": "Proof of identity and ownership of the personal data",
            "example": "Account verification or documentation showing data ownership",
            "reason": "To verify the requester has legitimate rights to the personal data in question"
          }
        ],
        "removalCriteria": [
          "Personal data was processed without proper consent",
          "Sensitive personal information was shared without authorization",
          "User contributions contain private information shared without permission"
        ]
      },
      {
        "id": "ph-pp-age-verification-1",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Requires age verification and prohibits minors from using the platform, with mandatory deletion of minor's personal information",
        "quote": "Pornhub prohibits minors from using the platform. Pornhub is forbidden for persons under the age of 18 and the applicable age of majority in the jurisdiction from which Pornhub is accessed. We do not knowingly process personal information from minors. If you are the parent or legal guardian of a minor who has provided us with personal information, then please contact us at support@pornhub.com to have that minor's personal information deleted.",
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
            "description": "Proof of guardianship and evidence that content involves a minor",
            "example": "Legal guardianship documents and evidence of minor's involvement",
            "reason": "To verify parental/guardian authority and protect minors from exploitation"
          }
        ],
        "removalCriteria": [
          "Content involves individuals under 18 years of age",
          "Personal information of minors was processed without proper authorization"
        ]
      },
      {
        "id": "ph-pp-biometric-1",
        "reference": "Section 11 - Biometric Information",
        "summary": "Requires explicit consent for biometric information processing and allows withdrawal of consent at any time",
        "quote": "You will be asked to provide your consent to biometric information processing which you may withdraw at any time. Withdrawing your consent will not affect the lawfulness of any collection, use, processing, or disclosure that occurred prior to the withdrawal.",
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
            "description": "Evidence that biometric data was processed without consent",
            "example": "Documentation showing lack of consent for biometric processing",
            "reason": "To verify that biometric information was processed without proper authorization"
          }
        ],
        "removalCriteria": [
          "Biometric information was processed without explicit consent",
          "Consent for biometric processing was withdrawn"
        ]
      },
      {
        "id": "ph-pp-security-1",
        "reference": "Section 4 - Purposes for Which We Process Your Personal Information",
        "summary": "Prohibits fraud, illegal activities, and unauthorized access, with measures to detect and prevent security breaches",
        "quote": "We may process any of the categories of data mentioned herein to diagnose or fix technology problems, to detect, prevent, and respond to actual or potential fraud, illegal activities, or intellectual property infringement.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of fraudulent activity or unauthorized access",
            "example": "Documentation of security breach or unauthorized account access",
            "reason": "To verify and respond to security incidents and protect user data"
          }
        ],
        "removalCriteria": [
          "Content was obtained through fraudulent means",
          "Unauthorized access to user accounts or data occurred",
          "Illegal activities involving user data were detected"
        ]
      },
      {
        "id": "ph-pp-hash-values-1",
        "reference": "Section 4 - Purposes for Which We Process Your Personal Information",
        "summary": "Creates and shares hash values of illegal content to detect and prevent illegal activities including sexual assault and exploitation",
        "quote": "We may create hash values from any of the categories of data we process, such as infringing or illegal content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation. We reserve the right to share any hashes with law enforcement agencies.",
        "contentTypes": [
          "intimate",
          "personal"
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
            "description": "Evidence that content constitutes illegal material",
            "example": "Documentation showing content violates laws regarding sexual assault or exploitation",
            "reason": "To identify and prevent distribution of illegal content and protect victims"
          }
        ],
        "removalCriteria": [
          "Content constitutes illegal material involving sexual assault or exploitation",
          "Content matches hash values of previously identified illegal material"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise their rights including rectification, objection, and restriction of processing",
      "steps": [
        "Email support@pornhub.com to exercise rights to rectification, object, or restriction of processing",
        "Provide sufficient information to verify identity and locate information in systems",
        "Platform has one month to respond to requests",
        "For data deletion, use the dedicated 'DELETE MY PERSONAL DATA' link on the manage data page"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T14:11:49.379Z",
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
    "id": "pornhub-new-1758636709379-0",
    "reference": "PH-NCCP",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, consent requirements, content removal procedures, and enforcement measures.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T14:11:49.379Z",
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
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content features intimate images shared without valid written consent",
          "Content depicts explicit sexual activity or nudity without consent",
          "Content was taken or appears to have been taken without consent"
        ]
      },
      {
        "id": "ph-nccp-hidden-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos of any person in public or private settings without valid written consent, including hidden camera content and up-skirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content);",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content shows person without their valid written consent",
          "Content was recorded in public or private setting without consent",
          "Content includes hidden camera or spy camera footage",
          "Content includes up-skirt imagery"
        ]
      },
      {
        "id": "ph-nccp-revenge-porn",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing explicit sexual images of someone without their valid written consent, including non-consensual distribution of intimate images commonly referred to as revenge porn.",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\");",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content contains explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images",
          "Content was shared by someone other than the person depicted without consent"
        ]
      },
      {
        "id": "ph-nccp-personal-images",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-sexually explicit images of someone without their valid written consent.",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent;",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content contains non-sexually explicit images shared without valid written consent",
          "Content shows person who did not consent to sharing"
        ]
      },
      {
        "id": "ph-nccp-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits doxing, defined as exposing private and identifying information about a particular individual, including phone number, email, address, or full name.",
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
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific content containing private identifying information",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information without consent",
          "Content contains phone number, email, address, or full name",
          "Content constitutes doxing of an individual"
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific deepfake content",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content includes modified images or videos designed to deceive",
          "Content constitutes deepfake technology usage",
          "Content misleads viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-nccp-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts, whether real or simulated, including depictions of coerced or forced sexual acts, rape, or sexual assault.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault;",
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
            "example": "URLs to specific content depicting non-consensual acts",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content features or promotes non-consensual acts",
          "Content depicts coerced or forced sexual acts",
          "Content shows rape or sexual assault",
          "Content simulates non-consensual sexual activity"
        ]
      },
      {
        "id": "ph-nccp-incapacitated-persons",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content depicting persons appearing drugged, incapacitated, or intoxicated involved in sexual acts.",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts;",
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
            "example": "URLs to specific content showing incapacitated persons",
            "reason": "To identify and locate the specific content for removal and to process the request confidentially"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged in sexual acts",
          "Content depicts incapacitated individuals involved in sexual activity",
          "Content features intoxicated persons in sexual situations"
        ]
      },
      {
        "id": "ph-nccp-consent-requirement",
        "reference": "Non-Consensual Content Policy",
        "summary": "Requires all uploaders to affirm they have obtained and maintain valid consent and proper release documentation for all persons featured in all content uploaded to the platform.",
        "quote": "We require all uploaders to affirm they have obtained and maintain valid consent and proper release documentation for all persons featured in all content uploaded to the platform.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid consent and proper release documentation for all persons featured in content",
            "example": "Written consent forms from all individuals appearing in the content",
            "reason": "To ensure all persons featured have consented to the content creation and distribution"
          }
        ],
        "removalCriteria": [
          "Uploader cannot provide valid consent documentation",
          "Uploader lacks proper release documentation for persons featured",
          "Content uploaded without affirming consent requirements"
        ]
      },
      {
        "id": "ph-nccp-swift-removal",
        "reference": "Enforcement - Consequences",
        "summary": "Commits to swift review and removal of infringing content, fingerprinting content to block future uploads, and suspending or permanently terminating associated uploader accounts where appropriate.",
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
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Swift action promised but no specific timeframe provided"
          },
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal promised but no specific timeframe provided"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Complete and submit Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to specific violating content",
            "reason": "To identify and locate the specific content for swift removal action"
          }
        ],
        "removalCriteria": [
          "Content violates Non-Consensual Content Policy",
          "Content identified as infringing by Trust & Safety team",
          "Content reported through proper channels"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
