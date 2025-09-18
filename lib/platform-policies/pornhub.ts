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
    "accessTimestamp": "2025-09-18T18:56:10.902Z",
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
            "description": "Report using the electronic form available at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific violating content directly"
          }
        ],
        "removalCriteria": [
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was posted without consent of individuals appearing in it",
          "Content violates non-consensual content policies"
        ]
      },
      {
        "id": "ph-prohibited-content-policy",
        "reference": "PH-TOS-PROHIBITED",
        "summary": "Comprehensive prohibition of various harmful content types including non-consensual sexual activity, impersonation, harassment, and privacy violations.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
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
            "description": "Report suspected violations using https://pornhub.com/content-removal",
            "reason": "To initiate investigation of prohibited content"
          },
          {
            "description": "Use the 'Report' button below specific content",
            "reason": "To flag individual pieces of violating content"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn, blackmail, or intimidation",
          "Content impersonates another person",
          "Content falsely represents affiliation with a person",
          "Content contains harassment, threats, or hate speech",
          "Content violates privacy or contains unauthorized personal information"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Formal DMCA takedown notices required for copyright claims.",
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
            "description": "File a formal DMCA takedown notice as outlined in the Copyright Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Provide evidence of ownership or right to use the copyrighted material",
            "reason": "To establish legitimate copyright ownership"
          },
          {
            "description": "Written evidence of ownership within five (5) working days if requested",
            "reason": "To verify copyright claims and prevent false takedowns"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyright or intellectual property rights",
          "Content uses copyrighted materials without permission",
          "Content violates third-party proprietary rights",
          "User cannot provide evidence of ownership when requested"
        ]
      },
      {
        "id": "ph-account-security",
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
            "description": "Contact support@pornhub.com immediately upon discovering unauthorized access",
            "reason": "To report security breaches and initiate account recovery"
          },
          {
            "description": "Provide details of the unauthorized access or security breach",
            "reason": "To help investigate and secure the compromised account"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Account is being used to post violating content without owner's consent",
          "Security breach has resulted in unauthorized content uploads",
          "Account credentials have been compromised"
        ]
      },
      {
        "id": "ph-content-standards",
        "reference": "PH-TOS-STANDARDS",
        "summary": "All uploaded content must comply with consent requirements, age verification, and legal standards. Platform reserves right to remove non-compliant content.",
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
            "description": "Provide evidence of consent and release from all individuals appearing in content",
            "reason": "To verify all participants consented to content creation and distribution"
          },
          {
            "description": "Demonstrate valid governmental photo identification showing individuals are 18+ years old",
            "reason": "Legal requirement to verify age of all participants"
          },
          {
            "description": "Maintain records required under 18 U.S.C. § 2257 age verification laws",
            "reason": "Legal compliance for age verification documentation"
          }
        ],
        "removalCriteria": [
          "Content uploaded without proper consent from all individuals appearing",
          "Unable to provide evidence of consent when requested",
          "Content violates age verification requirements",
          "Content does not comply with legal standards or Terms of Service"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users may lodge complaints against content removal decisions within 6 months via email to dsa@pornhub.com from their registered email address.",
      "steps": [
        "Email dsa@pornhub.com from the email address associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Platform will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Platform may reverse previous decisions if complaint demonstrates content did not violate policies or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-18T18:56:10.902Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub provides content removal processes for users to report and request removal of content, with dedicated support for handling requests.",
        "quote": "Communications and handling of requests: We process Online Forms and Communications Data and other information as necessary to respond to and resolve any of your requests, including where this is required to ensure compliance with our legal obligations.",
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
            "description": "Response time for data subject requests"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Contact information and details of the request",
            "example": "Email address, description of content to be removed",
            "reason": "To identify and process the removal request"
          }
        ],
        "removalCriteria": [
          "Content reported through official channels",
          "Requests that require compliance with legal obligations"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "PH-PP-SECTION-2",
        "summary": "Users may be required to provide government-issued photo identification and undergo biometric verification to confirm identity and age, processed by third-party verification services.",
        "quote": "Some users may be asked to provide identifiers (including government-issued photo identification as well as other documentation) to verify that they are over the age of majority required to have access to Pornhub and to view their contents. In such cases, this information is processed by trusted third-party age verification service providers.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or other official ID",
            "reason": "To verify identity and age for account access"
          },
          {
            "description": "Biometric information (face scan)",
            "example": "Live facial scan for identity verification",
            "reason": "To verify authenticity of identification documents and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Failure to provide required identification when requested",
          "Identity verification failure"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "PH-PP-SECTION-2",
        "summary": "User-uploaded content becomes publicly available, and users can delete their contributions and audio/video information through account settings.",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
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
            "description": "Account access credentials",
            "example": "Username and password for account verification",
            "reason": "To verify ownership of content for deletion requests"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own uploaded content",
          "Content violates terms of service"
        ]
      },
      {
        "id": "ph-pp-legal-compliance",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub discloses personal information and removes content to comply with legal obligations, court orders, and to detect, prevent or address illegal activities including fraud and exploitation.",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues.",
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
            "description": "Valid court order, subpoena, or legal document",
            "example": "Court-issued subpoena or search warrant",
            "reason": "Legal requirement for disclosure or removal"
          },
          {
            "description": "Evidence of illegal activity",
            "example": "Documentation of fraud, exploitation, or other illegal conduct",
            "reason": "To address illegal or suspected illegal activities"
          }
        ],
        "removalCriteria": [
          "Court order or legal process requiring removal",
          "Content involves illegal or suspected illegal activities",
          "Content poses security or technical issues",
          "Content violates applicable laws or regulations"
        ]
      },
      {
        "id": "ph-pp-hash-values",
        "reference": "PH-PP-SECTION-4",
        "summary": "Pornhub creates hash values from content to detect, prevent, and combat illegal activities including fraud, sexual assault, or exploitation, and may share these hashes with law enforcement.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of illegal content",
            "example": "Reports of fraud, sexual assault, or exploitation",
            "reason": "To detect and prevent illegal activities"
          }
        ],
        "removalCriteria": [
          "Content identified as infringing or illegal",
          "Content associated with fraud, sexual assault, or exploitation",
          "Content flagged through hash value detection systems"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/support",
      "summary": "Users can contact support for assistance with data requests, content removal, and other inquiries. Data subject requests have a one-month response timeframe.",
      "steps": [
        "Contact support@pornhub.com with your request",
        "Provide necessary verification information (username, email address)",
        "Wait for response within one month for data subject requests",
        "Follow up if additional information is required"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T18:56:10.902Z",
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
    "id": "pornhub-new-1758221770902-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery (NCII), consent requirements, and content removal procedures for image takedown requests.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T18:56:10.902Z",
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
            "example": "Being the person featured in the content",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to violating videos or images",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Content shared without valid written consent",
          "Content featuring non-consensual acts (real or simulated)"
        ]
      },
      {
        "id": "ph-ncii-spy-camera",
        "reference": "PH-NCII-POLICY-SPY",
        "summary": "Pornhub prohibits videos or photos taken without valid written consent, including hidden camera and upskirt content.",
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
            "description": "Evidence that content was taken without consent",
            "example": "Documentation showing lack of permission",
            "reason": "To verify non-consensual nature of recording"
          }
        ],
        "removalCriteria": [
          "Hidden or spy camera content",
          "Upskirt or similar voyeuristic content",
          "Any recording made without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Pornhub prohibits sharing explicit sexual images without valid written consent, including revenge porn.",
        "quote": "Sharing explicit sexual images of someone else without their valid written consent (this would include, namely: non-consensual distribution of intimate images, also commonly referred to as \"revenge porn\")",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of being featured in the content",
            "example": "Identity verification",
            "reason": "To confirm the person making the request is the subject"
          },
          {
            "description": "Evidence of lack of consent for sharing",
            "example": "Documentation showing no permission was given",
            "reason": "To verify non-consensual distribution"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without consent",
          "Content distributed for revenge purposes",
          "Any intimate content shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-non-sexual",
        "reference": "PH-NCII-POLICY-NONSEXUAL",
        "summary": "Pornhub prohibits sharing non-sexually explicit images without valid written consent.",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent",
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
            "description": "Proof of being the subject of the images",
            "example": "Identity verification",
            "reason": "To confirm legitimate ownership of image rights"
          },
          {
            "description": "Evidence of lack of consent",
            "example": "Documentation showing no permission was given",
            "reason": "To verify unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Non-sexual images shared without consent",
          "Personal photos distributed without permission"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Pornhub prohibits doxing, defined as exposing private identifying information including phone numbers, emails, addresses, or full names.",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof that private information belongs to the complainant",
            "example": "Evidence of identity ownership",
            "reason": "To verify legitimate privacy violation claim"
          },
          {
            "description": "Identification of specific private information exposed",
            "example": "Screenshots showing personal details",
            "reason": "To locate and remove specific violating content"
          }
        ],
        "removalCriteria": [
          "Exposure of phone numbers without consent",
          "Sharing of email addresses without permission",
          "Publication of home addresses",
          "Revealing full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Pornhub prohibits all deepfakes and AI-generated manipulations of a person's image designed to deceive viewers.",
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
            "description": "Evidence that content uses AI manipulation of complainant's likeness",
            "example": "Technical analysis or clear visual indicators of manipulation",
            "reason": "To identify deepfake technology usage"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "example": "Identity verification documents",
            "reason": "To confirm the person making the complaint is the subject"
          }
        ],
        "removalCriteria": [
          "Any AI-generated content using someone's likeness",
          "Modified images or videos designed to deceive",
          "Manipulated content that misrepresents someone's actions or speech"
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
            "description": "Evidence of impaired state during recording",
            "example": "Visual indicators of intoxication or incapacitation",
            "reason": "To verify inability to consent due to impairment"
          },
          {
            "description": "Proof of identity if complainant is the subject",
            "example": "Identity verification",
            "reason": "To confirm legitimate complaint from affected person"
          }
        ],
        "removalCriteria": [
          "Content showing drugged persons in sexual acts",
          "Videos featuring incapacitated individuals",
          "Sexual content with visibly intoxicated participants"
        ]
      },
      {
        "id": "ph-ncii-enforcement",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Pornhub operates 24/7 human moderation, uses automated detection tools, and provides expeditious removal of violating content.",
        "quote": "Our team of moderators and support staff work 24 hours a day, 7 days a week in order to review all uploaded content for violations of our Terms of Service, address user concerns, and remove all non-consensual content that we identify or of which we are made aware.",
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
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal upon identification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Completion of Content Removal Request Form",
            "example": "Filled out official removal request",
            "reason": "To process removal requests systematically"
          }
        ],
        "removalCriteria": [
          "Content identified as violating non-consensual content policy",
          "Content reported through proper channels",
          "Content flagged by community or automated systems"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
