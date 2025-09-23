import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "ph-terms-of-service",
    "reference": "PH-TOS",
    "title": "Pornhub Terms of Service",
    "summary": "Legal terms governing the use of Pornhub, including content ownership, security responsibilities, and prohibited behavior. Recently updated following FTC settlement requiring enhanced content moderation and safety measures.",
    "url": "https://www.pornhub.com/information/terms",
    "accessTimestamp": "2025-09-23T12:41:49.528Z",
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
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
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
        "id": "ph-non-consensual-content-policy",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content, revenge porn, blackmail, and intimidation.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
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
            "reason": "To formally report non-consensual content"
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
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was shared without the consent of all individuals depicted"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation of another person or falsely misrepresenting affiliation with a person.",
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
            "description": "Evidence of the impersonating account or content",
            "reason": "To identify the impersonation violation"
          },
          {
            "description": "Proof of your identity being impersonated",
            "reason": "To verify you are the legitimate person being impersonated"
          },
          {
            "description": "Report using the content removal form or report button",
            "reason": "To formally report the impersonation"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person without authorization",
          "Account falsely represents affiliation with another person",
          "Content uses another person's identity or likeness without permission"
        ]
      },
      {
        "id": "ph-copyright-policy",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials.",
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
          "Content uses copyrighted material without proper authorization"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-SECURITY",
        "summary": "Requires users to maintain account security and prohibits unauthorized access to accounts.",
        "quote": "You are responsible for making all arrangements necessary for you to have access to this Website, and ensuring that all persons who access this Website through your internet connection are aware of these Terms of Service and comply with them... You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "description": "Contact Pornhub support at support@pornhub.com with details of unauthorized access",
            "reason": "To report the security breach and initiate recovery"
          },
          {
            "description": "Provide account username and associated email address",
            "reason": "To identify the compromised account"
          },
          {
            "description": "Description of the unauthorized activity or security breach",
            "reason": "To understand the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity on the account",
          "Account is being used to upload content that violates platform policies",
          "The legitimate owner is locked out of their account due to unauthorized access"
        ]
      },
      {
        "id": "ph-consent-verification-policy",
        "reference": "PH-TOS-CONSENT",
        "summary": "Requires consent and release for every individual appearing in uploaded content.",
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
            "description": "Evidence that consent was not obtained for individuals appearing in content",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "Report using the content removal form or report button",
            "reason": "To formally report the consent violation"
          },
          {
            "description": "URL(s) of the content uploaded without proper consent",
            "reason": "To identify the specific content that violates consent requirements"
          }
        ],
        "removalCriteria": [
          "Content features individuals who did not consent to its upload or distribution",
          "Uploader cannot demonstrate proper consent and release from all individuals in the content",
          "Content was uploaded without authorization from the individuals depicted"
        ]
      }
    ],
    "appealProcess": {
      "url": "dsa@pornhub.com",
      "summary": "Users may lodge complaints against content moderation decisions within 6 months of notification. Complaints are handled in a timely, non-discriminatory, diligent, and objective manner.",
      "steps": [
        "Submit complaint within 6 months of being notified of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of the complaint",
        "Provide explanation of reasons why you believe the complaint is justified",
        "Pornhub will review and may reverse decisions if complaint demonstrates content did not violate policies or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data. Updated to address data security concerns raised in regulatory proceedings.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T12:41:49.528Z",
    "policies": [
      {
        "id": "ph-pp-ncii-1",
        "reference": "Section 6 - Disclosure of Personal Information",
        "summary": "Prohibits sharing of personal information publicly through user contributions without consent, as such content becomes publicly available and accessible worldwide",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
            "description": "Contact support with details about unauthorized content",
            "example": "Email to support@pornhub.com with specific information about the violation",
            "reason": "To enable platform to identify and address unauthorized sharing of personal information"
          }
        ],
        "removalCriteria": [
          "User contributions that make personal information publicly available without consent",
          "Content that can be read, collected, used, and disclosed by others without authorization"
        ]
      },
      {
        "id": "ph-pp-privacy-1",
        "reference": "Section 2 - Data Processing",
        "summary": "Requires consent for processing of sensitive personal information including biometric information, ethnicity, and information concerning sex life",
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
            "description": "Proof of lack of consent for processing sensitive personal information",
            "example": "Documentation showing sensitive information was processed without explicit consent",
            "reason": "To verify unauthorized processing of protected categories of personal data"
          }
        ],
        "removalCriteria": [
          "Processing of biometric information without consent",
          "Collection of sensitive personal information without explicit user consent",
          "Use of information concerning sex life without authorization"
        ]
      },
      {
        "id": "ph-pp-identity-1",
        "reference": "Section 11 - Biometric Information",
        "summary": "Requires explicit consent for biometric information processing and allows withdrawal of consent at any time",
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
            "description": "Evidence of biometric processing without consent or failure to honor consent withdrawal",
            "example": "Documentation showing continued biometric processing after consent withdrawal",
            "reason": "To verify unauthorized biometric information processing"
          }
        ],
        "removalCriteria": [
          "Biometric information processing without explicit consent",
          "Continued processing after consent withdrawal",
          "Facial recognition technology use without proper authorization"
        ]
      },
      {
        "id": "ph-pp-minors-1",
        "reference": "Section 2 - Data Processing",
        "summary": "Prohibits minors from using the platform and requires deletion of any minor's personal information",
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
            "description": "Proof of being parent or legal guardian of minor whose information appears on platform",
            "example": "Legal documentation establishing guardianship relationship",
            "reason": "To verify authority to request deletion of minor's personal information"
          }
        ],
        "removalCriteria": [
          "Personal information from persons under age 18",
          "Content involving minors under applicable age of majority",
          "Any processing of personal information from prohibited underage users"
        ]
      },
      {
        "id": "ph-pp-account-deletion-1",
        "reference": "Section 8 - User Choices",
        "summary": "Allows users to delete user contributions, audio/video information, and deactivate accounts at any time unless prohibited by law",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order.",
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
            "description": "Account verification to confirm identity for deletion request",
            "example": "Username and email address used to create account",
            "reason": "To verify account ownership before processing deletion requests"
          }
        ],
        "removalCriteria": [
          "User contributions requested for deletion by account owner",
          "Audio/video information requested for removal by user",
          "Account deactivation requests from verified account holders"
        ]
      },
      {
        "id": "ph-pp-data-rights-1",
        "reference": "Section 18 - Your Rights Related to Personal Information",
        "summary": "Provides right to deletion/erasure of personal data and right to object to processing based on legitimate interests",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data; Right to object: you have the right to object to the use of your personal data where such use is based on our legitimate interests or on public interests;",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "months",
            "description": "Platform has one month to respond to data rights requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification and account information",
            "example": "Username and email address used to create account, plus additional verification if required",
            "reason": "To verify identity and ensure personal data is not disclosed to unauthorized persons"
          }
        ],
        "removalCriteria": [
          "Personal data requested for deletion by verified data subject",
          "Processing objected to where based on legitimate interests",
          "Data subject exercises right to be forgotten"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise data rights including rectification, objection, and restriction of processing",
      "steps": [
        "Send email to support@pornhub.com to exercise rights",
        "Provide identity verification including username and email address used to create account",
        "Platform will respond within one month to the request",
        "Additional information may be required to adequately verify identity or authorization"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures. Significantly enhanced following 2020-2025 regulatory actions and FTC settlement.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T12:41:49.528Z",
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
    "id": "pornhub-new-1758631309527-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Dedicated policy specifically addressing non-consensual intimate imagery (NCII), revenge porn, and related content removal procedures.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T12:41:49.528Z",
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
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "Direct URLs to the specific videos or images that violate the policy",
            "reason": "To identify and locate the specific content for expeditious removal"
          }
        ],
        "removalCriteria": [
          "Content was taken without the person's valid written consent",
          "Content appears to have been taken without consent",
          "Content was shared without the consent of the people involved"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
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
            "description": "Complete and submit the Content Removal Request Form with all relevant URL links to the content in question",
            "example": "URLs to hidden camera or spy camera content",
            "reason": "To identify and remove non-consensual recordings"
          }
        ],
        "removalCriteria": [
          "Content was recorded without the person's valid written consent",
          "Content involves hidden or spy cameras",
          "Content includes up-skirt recordings"
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
            "description": "Complete and submit the Content Removal Request Form as a victim or someone with first-hand knowledge",
            "example": "URLs to the explicit sexual images shared without consent",
            "reason": "To verify the non-consensual nature of the content and enable swift removal"
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
            "description": "Complete and submit the Content Removal Request Form with relevant URLs",
            "example": "Links to non-sexually explicit images shared without permission",
            "reason": "To identify and remove unauthorized sharing of personal images"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
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
            "description": "Report content through flagging or Content Removal Request Form",
            "example": "URLs to content containing exposed private information like phone numbers, addresses, or email",
            "reason": "To protect individual privacy and prevent harassment"
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
        "summary": "Prohibits any deepfakes whatsoever, including AI-generated, modified, or other manipulations of a person's image in picture or video to deceive or mislead viewers.",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report deepfake content through appropriate channels",
            "example": "URLs to AI-generated or manipulated images/videos",
            "reason": "To prevent deception and protect individuals from unauthorized digital manipulation"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content includes modified images or videos designed to deceive viewers",
          "Content presents deepfake technology in any form"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits content featuring or promoting non-consensual acts, whether real or simulated, including depictions of coerced or forced sexual acts, rape, or sexual assault.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
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
            "description": "Report content through flagging system or Content Removal Request Form",
            "example": "URLs to content depicting non-consensual sexual activity",
            "reason": "To maintain platform safety and prevent promotion of harmful content"
          }
        ],
        "removalCriteria": [
          "Content features non-consensual sexual activity",
          "Content promotes coerced or forced sexual acts",
          "Content depicts rape or sexual assault, real or simulated"
        ]
      },
      {
        "id": "ph-ncii-incapacitated-persons",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content involving persons appearing drugged, incapacitated, or intoxicated involved in sexual acts.",
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
            "description": "Report content showing incapacitated individuals in sexual situations",
            "example": "URLs to content involving drugged or intoxicated persons",
            "reason": "To protect vulnerable individuals who cannot provide valid consent"
          }
        ],
        "removalCriteria": [
          "Content involves persons appearing drugged in sexual acts",
          "Content shows incapacitated individuals in sexual situations",
          "Content features intoxicated persons involved in sexual acts"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
