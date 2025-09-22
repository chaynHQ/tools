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
    "accessTimestamp": "2025-09-22T11:58:27.405Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. All content must have proper consent from individuals appearing in it.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); ... you have obtained the consent and release for every individual appearing in your Content",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates consent requirements"
          },
          {
            "description": "Description of how the content was shared without consent",
            "reason": "To establish the non-consensual nature of the content sharing"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without proper consent from individuals appearing in it",
          "Content violates reasonable expectation of privacy"
        ]
      },
      {
        "id": "ph-csam-policy",
        "reference": "PH-TOS-CSAM",
        "summary": "Zero tolerance policy for child sexual abuse material. All individuals in content must be verified as 18+ years old with proper documentation maintained.",
        "quote": "post any Content that depicts any person under 18 years of age (or older in any other location in which 18 is not the minimum age of majority) whether real or simulated; ... for every individual appearing in your Content you have carefully ascertained and examined a valid governmental photo identification demonstrating that they are at least 18 years of age",
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
        "timeframes": {
          "removal": {
            "value": 0,
            "unit": "immediate",
            "description": "Immediate removal and reporting to authorities"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report using Anonymous Content Removal Request at https://www.pornhub.com/anonymous-content-removal",
            "reason": "To anonymously report suspected CSAM content"
          },
          {
            "description": "URL(s) of the suspected content",
            "reason": "To identify the specific content for immediate investigation"
          },
          {
            "description": "Contact legal@pornhub.com for suspected underage content",
            "reason": "Direct reporting channel for serious violations"
          }
        ],
        "removalCriteria": [
          "Content depicts or appears to depict individuals under 18 years of age",
          "Content involves simulated underage sexual activity",
          "Uploader cannot provide valid age verification documentation for individuals in content",
          "Any suspicion of child sexual exploitation or abuse"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Content must be owned or properly licensed by the uploader.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights... post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
            "description": "File a formal DMCA Takedown Notice through the Copyright Policy process",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of original ownership or copyright in the content",
            "reason": "To establish legal standing to request removal"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          },
          {
            "description": "Written evidence of ownership within 5 working days if requested",
            "reason": "Platform may require additional proof of ownership rights"
          }
        ],
        "removalCriteria": [
          "Content infringes on another person's copyright",
          "Content uses copyrighted materials without proper permissions or licenses",
          "Uploader cannot provide evidence of ownership or right to use the material",
          "Content violates intellectual property rights of third parties"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation of other individuals and falsely representing affiliation with others. Screen names must not violate others' rights.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person... You will choose your own screen name, which must be unique to you, not offensive to others, and not in violation of another's copyright or trademark",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through the Content Removal Request Form",
            "reason": "To formally report impersonation violations"
          },
          {
            "description": "Evidence that the account or content falsely represents you or your identity",
            "reason": "To establish that impersonation is occurring"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific impersonating material"
          },
          {
            "description": "Proof of your actual identity if claiming to be impersonated",
            "reason": "To verify you are the legitimate person being impersonated"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person without authorization",
          "Account falsely represents affiliation with another individual",
          "Screen name violates another's copyright or trademark",
          "Content falsely states or misrepresents identity or affiliations"
        ]
      },
      {
        "id": "ph-harassment-threats",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, abuse, and hate speech in all forms of communication on the platform.",
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
            "reason": "Built-in reporting mechanism for harassing content"
          },
          {
            "description": "Screenshots or evidence of harassing comments or messages",
            "reason": "To document the harassing behavior"
          },
          {
            "description": "URL(s) of the content containing harassment or threats",
            "reason": "To identify the specific harassing material"
          },
          {
            "description": "Report through Content Removal Request Form for serious violations",
            "reason": "For comprehensive reporting of harassment patterns"
          }
        ],
        "removalCriteria": [
          "Content contains threats, abuse, or harassment toward individuals",
          "Content promotes hate speech against protected groups",
          "Content is harmful, threatening, or intimidating in nature",
          "Content encourages violence toward people or animals",
          "Content stalks or invades another's privacy",
          "Content is racially, ethnically, or otherwise objectionable"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must immediately report unauthorized access or security breaches.",
        "quote": "You are fully responsible for all activities that occur under your username or password... You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "description": "Contact support@pornhub.com immediately upon discovering unauthorized access",
            "reason": "To report security breaches and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity or security breach",
            "reason": "To understand the scope and nature of the compromise"
          },
          {
            "description": "Account username and associated email address",
            "reason": "To identify and secure the compromised account"
          },
          {
            "description": "Evidence of account ownership for recovery purposes",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Account is being used to upload content without owner's permission",
          "Security breach has resulted in unauthorized content posting",
          "Account compromise poses risk to platform or other users"
        ]
      },
      {
        "id": "ph-violent-content",
        "reference": "PH-TOS-VIOLENCE",
        "summary": "Prohibits violent content including snuff, torture, death, and content encouraging violence toward people or animals.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech... engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals",
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
            "description": "Report through Content Removal Request Form",
            "reason": "To formally report violent content violations"
          },
          {
            "description": "URL(s) of the violent content",
            "reason": "To identify the specific violent material for removal"
          },
          {
            "description": "Description of the violent nature of the content",
            "reason": "To help moderators understand the severity of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts snuff, torture, or death",
          "Content shows violence toward people or animals",
          "Content encourages or promotes violent behavior",
          "Content is harmful, threatening, or intimidating in nature"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users may lodge complaints against content removal decisions within 6 months via email to dsa@pornhub.com. Complaints are handled in a timely, non-discriminatory, diligent, and objective manner.",
      "steps": [
        "Email dsa@pornhub.com from the account email within 6 months of the decision",
        "Include as much information as possible to allow investigation of the complaint",
        "Provide explanation of reasons why you believe the complaint is justified",
        "Platform will review and may reverse decisions if complaint demonstrates the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-22T11:58:27.405Z",
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
            "example": "Email address or account details",
            "reason": "To verify identity and process removal request"
          }
        ],
        "removalCriteria": [
          "Content reported through proper channels",
          "Compliance with legal obligations",
          "Protection of rights, property or safety of users"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "PH-PP-SECTION-2",
        "summary": "Users can delete their own user contributions and audio/video information through account settings, and content becomes publicly available when posted.",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available.",
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
            "description": "Account access and login credentials",
            "example": "Username and password",
            "reason": "To verify ownership of content for self-removal"
          }
        ],
        "removalCriteria": [
          "User owns the content",
          "Content was uploaded by the requesting user",
          "User has active account access"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "PH-PP-SECTION-2",
        "summary": "Pornhub processes government-issued photo identification and biometric information through third-party services for age and identity verification purposes.",
        "quote": "Some users may be asked to provide identifiers (including government-issued photo identification as well as other documentation) to verify that they are over the age of majority required to have access to Pornhub and to view their contents. In such cases, this information is processed by trusted third-party age verification service providers.",
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
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or national ID",
            "reason": "To verify identity and age for account verification"
          },
          {
            "description": "Biometric information (face scan)",
            "example": "Live selfie or facial recognition scan",
            "reason": "To verify authenticity of identification documents"
          }
        ],
        "removalCriteria": [
          "Identity verification required for account access",
          "Age verification compliance",
          "Prevention of impersonation"
        ]
      },
      {
        "id": "ph-pp-dmca-process",
        "reference": "PH-PP-FOOTER",
        "summary": "Pornhub has a DMCA takedown process and form available for copyright infringement claims and content removal requests.",
        "quote": "DMCA Takedown Form",
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
            "description": "DMCA compliant takedown notice",
            "example": "Formal DMCA notice with required elements",
            "reason": "To process copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice submitted",
          "Copyright infringement claim",
          "Proper identification of infringing content"
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
            "reason": "To comply with legal obligations for data disclosure"
          },
          {
            "description": "Proper service through legal platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest",
            "reason": "To ensure proper legal service process"
          }
        ],
        "removalCriteria": [
          "Valid legal document properly served",
          "Document issued to Aylo Freesites Ltd",
          "Compliance with legal service requirements"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for assistance with content removal, account issues, and privacy-related requests through email support.",
      "steps": [
        "Contact support@pornhub.com with your request",
        "Provide necessary verification information (username, email address)",
        "Wait for response within reasonable timeframe",
        "Follow any additional instructions provided by support team"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-22T11:58:27.405Z",
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
    "id": "pornhub-new-1758542307405-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, content removal procedures, and victim support resources. Critical for NCII takedown requests.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-22T11:58:27.405Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits the recording or distribution of intimate images (photos and videos depicting explicit sexual activity, nudity, or partial nudity) without someone's consent.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that content was shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Content shared without valid written consent",
          "Hidden or spy camera content",
          "Up-skirt content"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Pornhub strictly prohibits sharing explicit sexual images of someone else without their valid written consent, including revenge porn.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that explicit images were shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content identified as revenge porn or non-consensual distribution of intimate images"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-images",
        "reference": "PH-NCII-POLICY-NONSEXUAL",
        "summary": "Pornhub prohibits sharing non-sexually explicit images of someone else without their valid written consent.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that images were shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Pornhub prohibits 'doxing' - exposing private and identifying information about individuals including phone numbers, emails, addresses, or full names.",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that private information was exposed",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Exposure of private identifying information including phone numbers, emails, addresses, or full names"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Pornhub prohibits any deepfakes whatsoever - AI-generated, modified, or manipulated images or videos that deceive viewers into believing a person is acting or speaking as presented.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Knowledge that content contains AI-generated or manipulated imagery",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "AI-generated, modified, or manipulated images or videos designed to deceive viewers",
          "Any content that misleads viewers about a person's actions or speech through digital manipulation"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "PH-NCII-POLICY-ACTS",
        "summary": "Pornhub prohibits content featuring or promoting non-consensual acts, whether real or simulated, including depictions of rape, sexual assault, or coerced sexual acts.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
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
            "description": "First-hand knowledge of content violation",
            "example": "Knowledge that content depicts non-consensual sexual activity",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content featuring or promoting non-consensual acts, real or simulated",
          "Depictions of coerced or forced sexual acts",
          "Depictions of rape or sexual assault",
          "Content showing persons appearing drugged, incapacitated, or intoxicated involved in sexual acts"
        ]
      },
      {
        "id": "ph-ncii-swift-removal",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Pornhub commits to swift action including content review and removal, fingerprinting to prevent re-uploads, and account suspension or termination for violating content.",
        "quote": "our Trust & Safety and Moderation teams work swiftly to: Review and remove infringing content; Fingerprint the content in question to help block future uploads of the same content to our sites; AND Suspend or permanently terminate the associated uploader's account, where appropriate.",
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
            "description": "First-hand knowledge of content violation or victim status",
            "example": "Personal knowledge that content violates non-consensual content policy",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content identified as violating Non-Consensual Content Policy",
          "Content that violates Terms of Service"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
