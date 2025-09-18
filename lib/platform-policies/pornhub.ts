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
    "accessTimestamp": "2025-09-18T18:39:24.631Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must be reported using the content removal form.",
        "quote": "the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein.",
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
            "description": "Report using the electronic form at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific content that violates terms of service"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was shared without consent of individuals appearing in it"
        ]
      },
      {
        "id": "ph-child-safety-policy",
        "reference": "PH-TOS-CSAM",
        "summary": "Zero-tolerance policy for child sexual abuse material. All suspected CSAM is immediately removed and reported to NCMEC.",
        "quote": "We have a zero-tolerance policy towards the solicitation, access, generation, distribution, or storage of any Content that involves the depiction of children or features Class 1A Material in any capacity. All child sexual exploitation/abuse material that we identify or are made aware of will result in the immediate removal of the Content in question as well as the immediate removal of its uploader from this Website.",
        "contentTypes": [
          "intimate",
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
          "removal": {
            "value": 0,
            "unit": "immediate",
            "description": "Immediate removal upon identification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report suspected CSAM to legal@pornhub.com",
            "reason": "For immediate investigation and reporting to law enforcement"
          },
          {
            "description": "Use Anonymous Content Removal Request form",
            "reason": "To anonymously report suspected child sexual abuse material"
          }
        ],
        "removalCriteria": [
          "Content depicts any person under 18 years of age",
          "Content involves child sexual exploitation or abuse",
          "Content features simulated depictions of minors in sexual situations"
        ]
      },
      {
        "id": "ph-age-verification-requirement",
        "reference": "PH-TOS-AGE",
        "summary": "All individuals appearing in content must be verified as 18+ years old with valid government photo identification and proper record keeping under 18 U.S.C. § 2257.",
        "quote": "for every individual appearing in your Content you have carefully ascertained and examined a valid governmental photo identification demonstrating that they are at least 18 years of age on the day they are photographed, filmed or otherwise appearing in such Content",
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
            "description": "Valid governmental photo identification for all individuals in content",
            "reason": "To verify all performers were 18+ at time of production"
          },
          {
            "description": "Records maintained in accordance with 18 U.S.C. § 2257",
            "reason": "Legal requirement for age verification documentation"
          },
          {
            "description": "Consent and release forms for every individual appearing in content",
            "reason": "To establish permission for use and upload of content"
          }
        ],
        "removalCriteria": [
          "Content lacks proper age verification documentation",
          "Individuals in content cannot be verified as 18+ years old",
          "Missing consent and release forms from performers",
          "Failure to maintain required records under 18 U.S.C. § 2257"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Provides DMCA takedown process for copyright holders.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights.",
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
            "description": "File a formal DMCA takedown notice following the Copyright Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of ownership or authorization to use copyrighted material",
            "reason": "To establish rights to the content in question"
          },
          {
            "description": "Identification of specific infringing content with URLs",
            "reason": "To locate and assess the allegedly infringing material"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyright or intellectual property rights",
          "Content uses copyrighted material without permission",
          "Content violates third-party proprietary rights",
          "Valid DMCA takedown notice has been received"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation. Content that impersonates others will be removed.",
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
            "description": "Evidence that content falsely represents or impersonates another person",
            "reason": "To establish that impersonation is occurring"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To verify the legitimate identity being misrepresented"
          },
          {
            "description": "Report through content removal form or report button",
            "reason": "To formally notify platform of impersonation violation"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person without authorization",
          "Content falsely represents affiliation with a person or entity",
          "Account or content misrepresents identity or relationship to others"
        ]
      },
      {
        "id": "ph-harassment-threats-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, abuse, intimidation, and hate speech in content and interactions on the platform.",
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
            "description": "Evidence of harassing, threatening, or abusive content or behavior",
            "reason": "To document the harassment or threatening conduct"
          },
          {
            "description": "Report using content removal form or report button",
            "reason": "To formally notify platform of harassment violations"
          },
          {
            "description": "Screenshots or documentation of threatening communications",
            "reason": "To provide evidence of the harassing behavior"
          }
        ],
        "removalCriteria": [
          "Content contains threats, harassment, or abuse toward individuals",
          "Content promotes violence or intimidation",
          "Content constitutes hate speech based on protected characteristics",
          "Content stalks or invades privacy of others",
          "Content is racially, ethnically, or otherwise objectionable"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Platform may disable accounts for security violations.",
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
            "description": "Immediate notification to support@pornhub.com of security breach",
            "reason": "To report unauthorized access and secure the account"
          },
          {
            "description": "Description of unauthorized access or activity",
            "reason": "To understand the scope and nature of the security breach"
          },
          {
            "description": "Evidence of account ownership for recovery",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Account being used to upload violating content without owner consent",
          "Security breach that compromises account integrity",
          "Unauthorized use of account credentials"
        ]
      },
      {
        "id": "ph-violent-content-policy",
        "reference": "PH-TOS-VIOLENCE",
        "summary": "Prohibits content depicting violence, torture, death, snuff, or content that encourages violence toward people or animals.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech",
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
            "description": "Report violent content using content removal form or report button",
            "reason": "To notify platform of violent content violations"
          },
          {
            "description": "Description of violent or harmful content",
            "reason": "To assess the nature and severity of the violent material"
          }
        ],
        "removalCriteria": [
          "Content depicts violence, torture, or death",
          "Content shows or encourages violence toward people or animals",
          "Content contains snuff material",
          "Content promotes or glorifies violent acts"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users may lodge complaints against content removal decisions within 6 months via email to dsa@pornhub.com from their registered email address.",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
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
    "accessTimestamp": "2025-09-18T18:39:24.631Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub provides content removal processes for users to report and request removal of content, with dedicated support channels and forms available.",
        "quote": "We may disclose your information to third parties for the above purposes where necessary to comply with our legal obligations, to perform a task in the public interest (where the public interest is laid down by applicable law), or under our legitimate interests and the interests of the public, including as part of investigations or regulatory enquiries to detect, investigate and prosecute illegal activity.",
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
            "description": "Contact information for support requests",
            "example": "Email address or account information",
            "reason": "To process content removal requests and communicate with users"
          }
        ],
        "removalCriteria": [
          "Content that violates terms of service",
          "Illegal activities or content",
          "Content reported through proper channels"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "PH-PP-SECTION-2",
        "summary": "User contributions including audio/video content are made publicly available, and users can delete their contributions through account settings.",
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
            "description": "Account access to manage user contributions",
            "example": "Login credentials or account verification",
            "reason": "To allow users to delete their own uploaded content"
          }
        ],
        "removalCriteria": [
          "User request to delete their own contributions",
          "Account deletion request"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users may delete and deactivate their account at any time, which removes profile access and associated content unless prohibited by law or court order.",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
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
            "description": "Account verification for deletion request",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate account information for deletion"
          }
        ],
        "removalCriteria": [
          "User request for account deletion",
          "Verification of account ownership"
        ]
      },
      {
        "id": "ph-pp-law-enforcement",
        "reference": "PH-PP-SECTION-12",
        "summary": "Law enforcement can request disclosure of records through valid court orders, subpoenas, or search warrants served through the designated legal service platform.",
        "quote": "You may serve us a valid court order, subpoena, search warrant or equivalent legal or official administrative document by respecting the following conditions: The document(s) is uploaded, and all required fields have been filed out adequately on our platform for Legal Service Process located at: https://legalservice.aylo.com/legal/datarequest",
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
            "description": "Valid court order, subpoena, or search warrant",
            "example": "Legal document issued by valid court or administrative authority",
            "reason": "To comply with legal obligations for disclosure of records"
          },
          {
            "description": "Proper service through designated platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest",
            "reason": "To ensure proper legal service process"
          }
        ],
        "removalCriteria": [
          "Valid legal process served correctly",
          "Document issued to Aylo Freesites Ltd by valid authority",
          "Compliance with legal service requirements"
        ]
      },
      {
        "id": "ph-pp-data-subject-rights",
        "reference": "PH-PP-SECTION-18",
        "summary": "Users have rights to access, rectify, delete, and object to processing of their personal data, with verification required for identity protection.",
        "quote": "Prior to processing an access or deletion request of your data, we will need to verify your identity and ensure your right to access or delete the information. This is an appropriate and reasonable security measure to ensure that personal data is not disclosed to any person who has no right to receive it or deleted in an unauthorized way.",
        "contentTypes": [
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
            "unit": "month",
            "description": "Response time for data subject requests"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification information",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and ensure authorized access to personal data"
          },
          {
            "description": "Account access verification",
            "example": "Access to registered email account",
            "reason": "Additional security measure for identity verification"
          }
        ],
        "removalCriteria": [
          "Verified identity of data subject",
          "Valid exercise of data protection rights",
          "No legal obligations preventing deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for content removal requests, data subject rights, and other privacy-related inquiries",
      "steps": [
        "Contact support@pornhub.com with specific request type",
        "Provide required verification information",
        "Wait for response within one month for data subject requests"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T18:39:24.631Z",
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
    "id": "pornhub-new-1758220764631-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Dedicated policy specifically addressing non-consensual intimate imagery, content removal procedures, and victim support resources.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T18:39:24.631Z",
    "policies": [
      {
        "id": "ph-ncii-general",
        "reference": "PH-NCII-POLICY-GENERAL",
        "summary": "Pornhub prohibits recording or distribution of intimate images without consent and requires valid consent documentation for all uploaded content.",
        "quote": "The recording or distribution of intimate images (that is, photos and videos that are generally understood to depict explicit sexual activity or nudity or partial nudity) without someone's consent is a violation of that person's privacy and is a severe violation of our Terms of Service, and is strictly prohibited.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Direct knowledge that content was shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to specific videos or images",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "Content uploaded without valid written consent of persons featured",
          "Intimate images shared without consent of the depicted person",
          "Content identified as violation of non-consensual content policy"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-SURVEILLANCE",
        "summary": "Pornhub prohibits videos or photos taken without valid written consent, including hidden camera, spy camera, and upskirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
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
            "description": "Evidence that content was recorded without consent",
            "example": "Documentation showing lack of permission for recording",
            "reason": "To verify non-consensual recording"
          }
        ],
        "removalCriteria": [
          "Content recorded in public or private settings without valid written consent",
          "Hidden camera or spy camera content",
          "Upskirt or similar voyeuristic content"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Pornhub strictly prohibits sharing explicit sexual images without valid written consent, including revenge porn and non-consensual distribution of intimate images.",
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
            "description": "Evidence of lack of consent for sharing",
            "example": "Documentation showing images were shared without permission",
            "reason": "To verify non-consensual distribution"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content identified as revenge porn",
          "Non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-ncii-non-sexual",
        "reference": "PH-NCII-POLICY-NONSEXUAL",
        "summary": "Pornhub prohibits sharing non-sexually explicit images of someone without their valid written consent.",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent",
        "contentTypes": [
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
            "description": "Evidence that non-sexual images were shared without consent",
            "example": "Documentation showing lack of permission to share personal images",
            "reason": "To verify unauthorized sharing of personal content"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Pornhub prohibits doxing, defined as exposing private and identifying information about individuals including phone numbers, emails, addresses, or full names.",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of private information being exposed",
            "example": "Screenshots showing personal contact information or addresses",
            "reason": "To verify unauthorized disclosure of private information"
          }
        ],
        "removalCriteria": [
          "Content exposing phone numbers without consent",
          "Content exposing email addresses without consent",
          "Content exposing physical addresses without consent",
          "Content exposing full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Pornhub prohibits any deepfakes whatsoever, including AI-generated, modified, or manipulated images or videos designed to deceive viewers.",
        "quote": "Any \"deepfakes\" whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
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
            "description": "Evidence that content is AI-generated or digitally manipulated",
            "example": "Technical analysis or documentation showing artificial generation",
            "reason": "To verify content is artificially created or manipulated"
          }
        ],
        "removalCriteria": [
          "AI-generated images or videos of real persons",
          "Digitally modified content designed to deceive viewers",
          "Any manipulated media presenting false representations of individuals"
        ]
      },
      {
        "id": "ph-ncii-intoxicated",
        "reference": "PH-NCII-POLICY-INTOXICATED",
        "summary": "Pornhub prohibits content featuring persons appearing drugged, incapacitated, or intoxicated involved in sexual acts.",
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
            "description": "Evidence that persons in content appear incapacitated or intoxicated",
            "example": "Observable signs of impairment or incapacitation in the content",
            "reason": "To verify inability to provide valid consent"
          }
        ],
        "removalCriteria": [
          "Content featuring persons appearing drugged during sexual acts",
          "Content featuring persons appearing incapacitated during sexual acts",
          "Content featuring persons appearing intoxicated with objectively impaired judgment"
        ]
      },
      {
        "id": "ph-ncii-enforcement",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Pornhub will review and remove infringing content, fingerprint it to prevent re-uploads, and suspend or terminate associated accounts.",
        "quote": "Review and remove infringing content; Fingerprint the content in question to help block future uploads of the same content to our sites; AND Suspend or permanently terminate the associated uploader's account, where appropriate.",
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
            "description": "Completion of Content Removal Request Form",
            "example": "Filled out official removal request with all required information",
            "reason": "To process removal requests systematically"
          }
        ],
        "removalCriteria": [
          "Content identified as violating non-consensual content policy",
          "Content reported through official channels with sufficient evidence",
          "Content flagged by community members or automated systems"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
