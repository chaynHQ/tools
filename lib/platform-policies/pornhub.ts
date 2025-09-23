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
    "accessTimestamp": "2025-09-23T16:09:18.772Z",
    "policies": [
      {
        "id": "ph-prohibited-content-policy",
        "reference": "PH-TOS-PROHIBITED",
        "summary": "Prohibits non-consensual content, revenge porn, blackmail, intimidation, and other harmful content including impersonation and privacy violations.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); post any Content that contains falsehoods or misrepresentations that could damage this Website or any third party; post any Content that is obscene, illegal, unlawful, fraudulent, defamatory, libelous, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law, or is otherwise inappropriate; post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
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
            "description": "Report using the Content Removal Request Form",
            "reason": "To formally notify the platform of policy violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific violating content for review"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content impersonates another person",
          "Content contains falsehoods or misrepresentations that could damage third parties",
          "Content is defamatory, libelous, or harassing"
        ]
      },
      {
        "id": "ph-copyright-infringement-policy",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials, including personal content owned by others.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights. post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
          "Content infringes on another person's copyright",
          "Content uses copyrighted materials without permission",
          "Content violates intellectual property rights"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-SECURITY",
        "summary": "Requires users to maintain account security and report unauthorized access or compromised accounts immediately.",
        "quote": "You are responsible for: making all arrangements necessary for you to have access to this Website, and ensuring that all persons who access this Website through your internet connection are aware of these Terms of Service and comply with them. You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com. You are fully responsible for all activities that occur under your username or password.",
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
            "description": "Contact support@pornhub.com immediately upon discovering unauthorized access",
            "reason": "To report security breaches and initiate account recovery"
          },
          {
            "description": "Provide details of the unauthorized activity",
            "reason": "To understand the scope of the security breach"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to account",
          "Unauthorized use of username or password",
          "Security breach affecting account integrity"
        ]
      },
      {
        "id": "ph-personal-information-disclosure-policy",
        "reference": "PH-TOS-PRIVACY-DISCLOSURE",
        "summary": "Prohibits collection and storage of personal data about others and limits disclosure of personally identifiable information.",
        "quote": "collect or store personal data about anyone; This Website will not disclose any personally identifiable information they collects or obtains except: (i) as described in these Terms of Service or our Privacy Notice; (ii) after obtaining your permission to a specific use or disclosure; (iii) if this Website is required to do so in order to comply with any valid legal process or governmental request",
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
            "description": "Evidence of unauthorized collection or disclosure of personal information",
            "reason": "To demonstrate privacy violation"
          },
          {
            "description": "URL(s) of content containing personal data",
            "reason": "To identify the privacy-violating material"
          }
        ],
        "removalCriteria": [
          "Content involves unauthorized collection of personal data",
          "Content discloses personally identifiable information without permission",
          "Content violates privacy expectations"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email or webform, with review conducted in a timely, non-discriminatory manner.",
      "steps": [
        "Submit complaint within 6 months of notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Platform will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Platform may reverse previous decisions if complaint demonstrates the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T16:09:18.772Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Prohibits sharing of personal information without consent and provides mechanisms for content removal",
        "quote": "To comply with the law or protect our rights or the rights of third parties: We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof. This also includes our Trust and Safety initiative, in the scope of which we may disclose some information to several recipients.",
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
            "description": "Valid legal documentation or court order",
            "example": "Court order, subpoena, search warrant or equivalent legal document",
            "reason": "Required to comply with legal obligations and verify legitimate requests"
          }
        ],
        "removalCriteria": [
          "Content violates applicable law or regulation",
          "Content violates Terms & Conditions",
          "Content poses harm to rights, property or safety of users or others"
        ]
      },
      {
        "id": "ph-pp-biometric-consent",
        "reference": "Section 11 - Biometric Information",
        "summary": "Requires explicit consent for processing biometric information and allows withdrawal of consent",
        "quote": "You will be asked to provide your consent to biometric information processing which you may withdraw at any time. Withdrawing your consent will not affect the lawfulness of any collection, use, processing, or disclosure that occurred prior to the withdrawal.",
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
            "description": "Withdrawal of consent request",
            "example": "Written request to withdraw biometric processing consent",
            "reason": "To respect user privacy rights and comply with biometric information laws"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for biometric information processing",
          "Biometric information was processed without proper consent"
        ]
      },
      {
        "id": "ph-pp-user-contributions-public",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Warns that user contributions become publicly available and cannot be controlled once posted",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content was voluntarily submitted as user contribution",
          "Content becomes publicly accessible upon submission"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their account and associated content at any time",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account verification",
            "example": "Username and email address used to create the account",
            "reason": "To verify account ownership before deletion"
          }
        ],
        "removalCriteria": [
          "User requests account deletion",
          "No legal or court order preventing deletion"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Provides users the right to request deletion of their personal data",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data",
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
          "response": {
            "value": 1,
            "unit": "month",
            "description": "Response time for data deletion requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification",
            "example": "Username and email address that you used to create an account",
            "reason": "To verify identity and ensure personal data is not deleted in an unauthorized way"
          }
        ],
        "removalCriteria": [
          "User has the right to request deletion of personal data",
          "Identity verification is completed successfully"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise their rights including rectification, objection, and restriction of processing",
      "steps": [
        "Send an email to support@pornhub.com to exercise rights",
        "Provide identity verification information including username and email address",
        "Wait up to one month for response to request",
        "Additional information may be required to verify identity or authorization"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T16:09:18.772Z",
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
    "id": "pornhub-new-1758643758772-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery (NCII), revenge porn, and content removal procedures. Critical for image takedown requests.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-23T16:09:18.772Z",
    "policies": [
      {
        "id": "ph-ncii-recording-distribution",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate images without consent",
          "Content was recorded without consent",
          "Content was distributed without consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content includes hidden or spy camera footage",
          "Content includes voyeuristic material"
        ]
      },
      {
        "id": "ph-ncii-revenge-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing intimate images without valid written consent",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains intimate images shared without consent",
          "Content was distributed without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-non-intimate-sharing",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits sharing non-intimate images without valid written consent",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains personal images shared without consent",
          "Content was shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
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
        "summary": "Prohibits all deepfakes and AI-generated manipulations of a person's image",
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
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated or manipulated images",
          "Content uses deepfake technology",
          "Content is designed to deceive viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content featuring or promoting non-consensual acts, real or simulated",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited.",
        "contentTypes": [
          "intimate",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content features non-consensual acts",
          "Content promotes non-consensual behavior",
          "Content depicts simulated non-consensual activities"
        ]
      },
      {
        "id": "ph-ncii-incapacitated-content",
        "reference": "Non-Consensual Content Policy - Guidelines",
        "summary": "Prohibits content depicting persons appearing drugged, incapacitated, or intoxicated in intimate situations",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts",
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
            "description": "URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows persons appearing drugged or incapacitated",
          "Content depicts intoxicated individuals in intimate situations",
          "Content shows persons with impaired judgment in intimate contexts"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758643758772-1",
    "reference": "PH-CONTENT-REMOVAL",
    "title": "Pornhub Content Removal Request Form",
    "summary": "Official form and process for requesting removal of non-consensual content, including revenge porn, blackmail, and unauthorized intimate imagery.",
    "url": "https://www.pornhub.com/information/content-removal-request",
    "accessTimestamp": "2025-09-23T16:09:18.772Z",
    "policies": [],
    "appealProcess": null
  }
],
};
