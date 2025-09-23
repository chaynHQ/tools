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
    "accessTimestamp": "2025-09-23T16:10:57.793Z",
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
            "description": "Report using the Content Removal Request Form",
            "example": "Complete the form at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content for investigation and removal"
          },
          {
            "description": "URL(s) of the violating content",
            "example": "Direct links to the specific videos, photos, or comments",
            "reason": "To identify the exact content that violates the non-consensual content policy"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was posted without the consent of individuals appearing in it"
        ]
      },
      {
        "id": "ph-harassment-policy-updated",
        "reference": "PH-TOS-HARASSMENT-UPDATED",
        "summary": "Prohibits harassment, threats, abuse, and conduct that negatively affects other users' ability to use the platform.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
        "contentTypes": [
          "personal",
          "private",
          "other"
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
            "description": "Use the reporting flag available on videos and comments",
            "example": "Click the 'Report' button below the content",
            "reason": "To report harassing behavior through the proper channel"
          },
          {
            "description": "URL(s) of the harassing content or user profile",
            "example": "Links to specific videos, comments, or user profiles containing harassment",
            "reason": "To identify the source and nature of the harassing behavior"
          }
        ],
        "removalCriteria": [
          "Content contains harmful, threatening, or abusive conduct",
          "Content involves harassment or stalking behavior",
          "Content is invasive of another's privacy",
          "Content negatively affects other users' ability to use the platform"
        ]
      },
      {
        "id": "ph-privacy-violation-policy",
        "reference": "PH-TOS-PRIVACY-VIOLATION",
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
            "description": "Report via the Content Removal Request Form",
            "example": "Submit details through https://pornhub.com/content-removal",
            "reason": "To report privacy violations and unauthorized data collection"
          },
          {
            "description": "Description of the privacy violation",
            "example": "Explanation of what personal data was collected or shared without consent",
            "reason": "To understand the nature and scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content involves unauthorized collection of personal data",
          "Content stores personal information about individuals without consent",
          "Content violates reasonable expectations of privacy"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation with a person.",
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
            "description": "Evidence of impersonation through Content Removal Request Form",
            "example": "Screenshots or links showing someone using your identity or likeness",
            "reason": "To verify that impersonation is occurring and identify the impersonating content"
          },
          {
            "description": "Proof of your identity",
            "example": "Documentation showing you are the person being impersonated",
            "reason": "To confirm you have the right to request removal of impersonating content"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with a person",
          "Content misrepresents the identity of the uploader"
        ]
      },
      {
        "id": "ph-copyright-policy-updated",
        "reference": "PH-TOS-COPYRIGHT-UPDATED",
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
            "description": "File a formal DMCA Takedown Notice",
            "example": "Complete the DMCA process as outlined in the Copyright Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of original ownership of the content",
            "example": "Documentation proving you own the copyright to the material",
            "reason": "To establish your legal right to request removal of copyrighted content"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "Direct links to the specific content that infringes your copyright",
            "reason": "To identify the exact content that violates copyright"
          }
        ],
        "removalCriteria": [
          "Content contains copyrighted materials without permission",
          "Content violates intellectual property rights",
          "Uploader does not own the rights to the posted content",
          "Content was posted without obtaining necessary written permissions and releases"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-ACCOUNT-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately.",
        "quote": "You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "description": "Contact support immediately with account details",
            "example": "Email support@pornhub.com with your username and description of unauthorized access",
            "reason": "To report the security breach and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity",
            "example": "Details about what unauthorized actions were taken on your account",
            "reason": "To understand the scope of the security breach and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Unauthorized use of username or password",
          "Security breach affecting user account",
          "Content posted through compromised account"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email or webform, with complaints handled in a timely, non-discriminatory manner.",
      "steps": [
        "Submit complaint within 6 months of notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Pornhub will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Pornhub may reverse previous decisions if complaint demonstrates the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T16:10:57.793Z",
    "policies": [
      {
        "id": "ph-pp-user-contributions",
        "reference": "Section 2 - User Contributions including Audio/Video Information",
        "summary": "Prohibits sharing user contributions publicly without understanding that content becomes publicly available and accessible to others",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete user contributions and audio/video information through account settings",
        "quote": "You may use your account settings to delete your user contributions and audio/video information.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests deletion through account settings"
        ]
      },
      {
        "id": "ph-pp-account-deactivation",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete and deactivate accounts at any time unless prohibited by law or court order",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests account deletion and deactivation",
          "Not prohibited by law or court order"
        ]
      },
      {
        "id": "ph-pp-minor-protection",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Prohibits minors from using the platform and requires deletion of personal information from minors",
        "quote": "Pornhub prohibits minors from using the platform. Pornhub is forbidden for persons under the age of 18 and the applicable age of majority in the jurisdiction from which Pornhub is accessed. We do not knowingly process personal information from minors. If you are the parent or legal guardian of a minor who has provided us with personal information, then please contact us at support@pornhub.com to have that minor's personal information deleted.",
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
            "description": "Proof of being parent or legal guardian of the minor",
            "example": "Legal documentation showing guardianship",
            "reason": "To verify authority to request deletion of minor's information"
          }
        ],
        "removalCriteria": [
          "Content involves a person under 18 years of age",
          "Request made by parent or legal guardian of the minor"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Provides right to delete/erase personal data held by the platform",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data",
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
            "description": "Identity verification to ensure right to access or delete information",
            "example": "Account credentials or other identifying information",
            "reason": "Security measure to ensure personal data is not disclosed or deleted by unauthorized persons"
          }
        ],
        "removalCriteria": [
          "Valid request for data deletion",
          "Identity verification completed"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for data deletion requests, privacy concerns, and exercising data rights",
      "steps": [
        "Contact support@pornhub.com with your request",
        "Provide necessary identity verification information",
        "Wait for response within one month",
        "For minors' data deletion, parent/guardian must provide proof of guardianship"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T16:10:57.793Z",
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
    "id": "pornhub-new-1758643857792-0",
    "reference": "PH-NCCP",
    "title": "Non-Consensual Content Policy",
    "summary": "Detailed policy covering consent requirements, prohibited non-consensual content, and enforcement measures for content moderation",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T16:10:57.793Z",
    "policies": [
      {
        "id": "ph-nccp-intimate-images",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits recording or distribution of intimate images without consent",
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
          "Content depicts intimate images without the subject's consent",
          "Images were taken without valid written consent",
          "Images were shared without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-hidden-camera",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits videos or photos taken without valid written consent including hidden camera content",
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
          "Content was recorded without the person's valid written consent",
          "Content includes hidden or spy camera footage",
          "Content includes voyeuristic material"
        ]
      },
      {
        "id": "ph-nccp-revenge-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing intimate images without consent including revenge sharing",
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
          "Content contains intimate images shared without consent",
          "Content was distributed without valid written consent from the subject"
        ]
      },
      {
        "id": "ph-nccp-personal-images",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-intimate personal images without consent",
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
          "Content contains personal images shared without valid written consent"
        ]
      },
      {
        "id": "ph-nccp-doxing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits doxing and exposing private identifying information",
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
          "Content exposes private identifying information without consent",
          "Content includes phone numbers, email addresses, physical addresses, or full names"
        ]
      },
      {
        "id": "ph-nccp-deepfakes",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits all deepfakes and AI-generated manipulated content",
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
          "Content contains AI-generated or digitally manipulated images or videos",
          "Content uses deepfake technology to deceive viewers",
          "Content manipulates a person's likeness without consent"
        ]
      },
      {
        "id": "ph-nccp-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts",
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
          "Content depicts non-consensual acts",
          "Content promotes non-consensual activities"
        ]
      },
      {
        "id": "ph-nccp-incapacitated-content",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content depicting persons appearing drugged, incapacitated, or intoxicated in intimate situations",
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
