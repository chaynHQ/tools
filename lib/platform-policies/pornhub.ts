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
    "accessTimestamp": "2025-09-22T15:08:34.724Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must have consent from all individuals appearing in it.",
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
            "reason": "To formally report non-consensual content"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific violating content directly"
          },
          {
            "description": "Description of how the content violates consent requirements",
            "reason": "To establish the non-consensual nature of the content"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without consent of individuals appearing in it",
          "Uploader cannot demonstrate they obtained proper consent and releases"
        ]
      },
      {
        "id": "ph-privacy-violation",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits content that violates privacy rights or shares private information without consent.",
        "quote": "collect or store personal data about anyone; ... Content does not infringe on the rights (including intellectual property rights) of a third party",
        "contentTypes": [
          "personal",
          "private"
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
            "description": "Report using the Content Removal Request Form",
            "reason": "To formally report privacy violations"
          },
          {
            "description": "Explanation of how your privacy was violated",
            "reason": "To establish the nature of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content reveals private information without consent",
          "Content violates reasonable expectation of privacy",
          "Personal data is collected or stored without authorization"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation with others.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
        "contentTypes": [
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report using the Content Removal Request Form",
            "reason": "To formally report impersonation"
          },
          {
            "description": "Evidence showing you are the person being impersonated",
            "reason": "To verify your identity and establish impersonation"
          },
          {
            "description": "Description of how the content misrepresents you",
            "reason": "To understand the nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with someone",
          "Account or content misrepresents identity"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials.",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases; ... This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website",
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
            "description": "File a formal DMCA Takedown Notice through the Copyright Policy process",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of original ownership or copyright in the content",
            "reason": "To establish your rights to the copyrighted material"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content contains copyrighted materials without permission",
          "Content infringes intellectual property rights",
          "Uploader cannot demonstrate ownership or proper licensing",
          "Content violates DMCA requirements"
        ]
      },
      {
        "id": "ph-harassment-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, abuse, and hate speech in content and interactions.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report using the Content Removal Request Form",
            "reason": "To formally report harassing content"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific harassing content directly"
          },
          {
            "description": "Description of the harassing, threatening, or abusive behavior",
            "reason": "To understand the nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, or abusive",
          "Content constitutes harassment or stalking",
          "Content is invasive of privacy",
          "Content contains hate speech or discriminatory language",
          "Content negatively affects other users' ability to use the platform"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users must secure their accounts and report unauthorized access. Platform may terminate accounts for security violations.",
        "quote": "You are fully responsible for all activities that occur under your username or password. ... You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "description": "Contact support@pornhub.com immediately with details of unauthorized access",
            "reason": "To report security breaches and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity or security breach",
            "reason": "To understand the scope and nature of the compromise"
          },
          {
            "description": "Evidence of account ownership may be required for recovery",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to account",
          "Account is being used for activities that violate Terms of Service",
          "Security breach poses risk to platform or other users"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal or account actions within 6 months of notification. Complaints are handled in a timely, non-discriminatory manner.",
      "steps": [
        "Submit complaint within 6 months of receiving notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
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
    "accessTimestamp": "2025-09-22T15:08:34.724Z",
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
            "description": "Contact through official support channels",
            "example": "Email to support@pornhub.com",
            "reason": "To verify identity and process removal requests"
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
        "summary": "Users can delete their own user contributions and audio/video information through account settings, with warnings about public availability of posted content.",
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
            "description": "Account ownership verification",
            "example": "Login credentials or account access",
            "reason": "To verify user has rights to delete content"
          }
        ],
        "removalCriteria": [
          "User-uploaded content can be deleted by the account owner",
          "Content deletion available through account settings"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "PH-PP-SECTION-4",
        "summary": "Platform processes identity verification including biometric information to prevent impersonation and verify user authenticity.",
        "quote": "We employ third-party service providers to verify your identity, age, and the authenticity of the identification documents you provide using facial recognition technology... to match your selfie with your government-issued ID you submit or previously submitted to us to make sure that nobody is impersonating you",
        "contentTypes": [
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
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or state ID",
            "reason": "To verify identity and prevent impersonation"
          },
          {
            "description": "Live facial scan or selfie",
            "example": "Real-time photo verification",
            "reason": "To match identity with provided documentation"
          }
        ],
        "removalCriteria": [
          "Content uploaded by users who cannot verify their identity",
          "Content that involves impersonation of others"
        ]
      },
      {
        "id": "ph-pp-law-enforcement",
        "reference": "PH-PP-SECTION-12",
        "summary": "Platform cooperates with law enforcement through formal legal processes including court orders, subpoenas, and search warrants for content removal and disclosure.",
        "quote": "The following information serves as a guideline for law enforcement officials seeking disclosure of records. You may serve us a valid court order, subpoena, search warrant or equivalent legal or official administrative document",
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
            "example": "Properly issued legal document from valid court",
            "reason": "Legal requirement for disclosure of user information"
          },
          {
            "description": "Formal service through legal platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest",
            "reason": "Proper legal service requirements"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal orders",
          "Content involved in criminal investigations",
          "Content disclosure required by law enforcement"
        ]
      },
      {
        "id": "ph-pp-data-deletion",
        "reference": "PH-PP-SECTION-18",
        "summary": "Users have the right to request deletion of their personal data, including account deletion which removes all associated content and information.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... some requests to delete certain personal information will require the deletion of your user account as the provision of user accounts are inextricably linked to the processing of certain personal information",
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
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "month",
            "description": "Response time for data deletion requests"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate information in systems"
          },
          {
            "description": "Account access verification",
            "example": "Access to registered email account",
            "reason": "Additional security measure for data deletion"
          }
        ],
        "removalCriteria": [
          "Personal data deletion upon verified user request",
          "Account deletion removes all associated content",
          "Data deletion subject to legal obligations and exemptions"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for content removal requests, data deletion, and privacy-related concerns through email or the dedicated data management system.",
      "steps": [
        "Contact support@pornhub.com with specific request type",
        "Provide required verification information (username, email address)",
        "For data deletion, use dedicated links: REQUEST A COPY OF MY PERSONAL DATA or DELETE MY PERSONAL DATA",
        "Platform has one month to respond to requests",
        "Additional verification may be required for security purposes"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-22T15:08:34.724Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758553714724-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Specific policy addressing non-consensual intimate imagery (NCII), consent requirements, and removal procedures for unauthorized content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-22T15:08:34.724Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits recording or distribution of intimate images without consent, including revenge porn and non-consensual sharing of explicit content.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
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
          "Content was taken without valid written consent",
          "Content was shared without valid written consent",
          "Content features explicit sexual activity or nudity shared non-consensually"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-SURVEILLANCE",
        "summary": "Pornhub prohibits videos or photos taken without valid written consent, including hidden camera, spy camera, and up-skirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content was recorded without consent",
            "example": "Documentation showing lack of consent for recording",
            "reason": "To establish violation of consent requirements"
          }
        ],
        "removalCriteria": [
          "Content recorded in public or private setting without valid written consent",
          "Hidden or spy camera content",
          "Up-skirt or voyeuristic content"
        ]
      },
      {
        "id": "ph-ncii-non-sexual-images",
        "reference": "PH-NCII-POLICY-NONSEXUAL",
        "summary": "Pornhub prohibits sharing non-sexually explicit images of someone without their valid written consent.",
        "quote": "Sharing non-sexually explicit images of someone else without their valid written consent",
        "contentTypes": [
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
            "description": "Proof of lack of consent for image sharing",
            "example": "Evidence showing images were shared without permission",
            "reason": "To verify non-consensual sharing"
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
        "quote": "Doxing, defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
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
            "description": "Evidence of private information being exposed",
            "example": "Screenshots showing personal information being shared",
            "reason": "To identify privacy violations"
          }
        ],
        "removalCriteria": [
          "Exposure of phone numbers without consent",
          "Exposure of email addresses without consent",
          "Exposure of physical addresses without consent",
          "Exposure of full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Pornhub prohibits any deepfakes whatsoever, including AI-generated, modified, or manipulated images or videos designed to deceive viewers.",
        "quote": "Any 'deepfakes' whatsoever (AI-generated, modified, or other manipulations of a person's image, whether in picture or video, to deceive or mislead the viewer into believing that person is acting or speaking in the way presented).",
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
            "description": "Evidence that content is AI-generated or manipulated",
            "example": "Technical analysis showing digital manipulation",
            "reason": "To identify artificially created content"
          }
        ],
        "removalCriteria": [
          "AI-generated images or videos of a person",
          "Modified or manipulated images designed to deceive",
          "Any content that misleads viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-intoxicated-content",
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
            "description": "Evidence that person appears incapacitated or intoxicated",
            "example": "Visual evidence of impairment during sexual activity",
            "reason": "To identify non-consensual content involving impaired individuals"
          }
        ],
        "removalCriteria": [
          "Content showing drugged persons in sexual acts",
          "Content showing incapacitated persons in sexual acts",
          "Content showing intoxicated persons with objectively impaired judgment in sexual acts"
        ]
      },
      {
        "id": "ph-ncii-removal-process",
        "reference": "PH-NCII-POLICY-REMOVAL",
        "summary": "Pornhub provides a Content Removal Request Form for reporting violations and commits to swift review, removal, fingerprinting, and account action.",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Complete Content Removal Request Form",
            "example": "Filled out form with all required information",
            "reason": "To process removal requests systematically"
          },
          {
            "description": "All relevant URL links to content in question",
            "example": "Direct links to each piece of violating content",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content identified as violating non-consensual content policy",
          "Content reported through proper channels with sufficient evidence"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758553714724-1",
    "reference": "PH-CONTENT-REMOVAL",
    "title": "Pornhub Content Removal Request Form",
    "summary": "Official form and process for reporting and requesting removal of non-consensual content, harassment, and privacy violations.",
    "url": "https://www.pornhub.com/content-removal",
    "accessTimestamp": "2025-09-22T15:08:34.724Z",
    "policies": [
      {
        "id": "ph-content-removal-non-consensual",
        "reference": "PH-CONTENT-REMOVAL-NCII",
        "summary": "Pornhub removes content that violates their Non-Consensual Content Policy, including content showing non-consensual sexual acts, content recorded or distributed without consent, doxxing, and deepfakes/AI-generated content using someone's likeness without consent.",
        "quote": "You may submit requests for removal for content that: Violates our Non-Consensual Content Policy... The content shows non-consensual sexual acts... One or more individual(s) in the content did not consent to being recorded... One or more individual(s) in the content did not consent for the content to be distributed... The content contains personal identifying information (\"doxxing\")... The content is a \"deepfake\" or is AI-generated or manipulated and uses someone's likeness without their consent",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact",
            "example": "user@example.com",
            "reason": "For communication about the request"
          },
          {
            "description": "Legal name of the person making the request",
            "example": "John Smith",
            "reason": "To verify identity of requestor"
          },
          {
            "description": "URL(s) of the content being reported",
            "example": "https://pornhub.com/view_video.php?viewkey=example",
            "reason": "To locate and remove specific content"
          },
          {
            "description": "Relationship to the person seen in the content",
            "example": "I am the person in the content, Family member, Authorized Representative",
            "reason": "To establish standing to make the removal request"
          },
          {
            "description": "Additional information about the request including timestamps or other details",
            "example": "Content was uploaded without permission after relationship ended",
            "reason": "To help process the removal request effectively"
          }
        ],
        "removalCriteria": [
          "Content shows non-consensual sexual acts",
          "Individual(s) in content did not consent to being recorded",
          "Individual(s) in content did not consent to distribution",
          "Content contains personal identifying information (doxxing)",
          "Content is deepfake or AI-generated using someone's likeness without consent",
          "Content violates Non-Consensual Content Policy"
        ]
      },
      {
        "id": "ph-content-removal-consent-withdrawal",
        "reference": "PH-CONTENT-REMOVAL-CONSENT",
        "summary": "Pornhub removes content when performers withdraw from existing consent agreements or when content violates existing performer consent agreements.",
        "quote": "You may submit requests for removal for content that: Violates an existing performer consent agreement... Features a performer who wishes to withdraw from an existing consent agreement... No permission was given for this content to be uploaded to the Pornhub... Permission was given for limited use only (e.g. long-form videos or promotional purposes), but this upload does not follow those terms... The consent provided is no longer valid or was not valid in the first place",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact",
            "example": "performer@example.com",
            "reason": "For communication about the request"
          },
          {
            "description": "Legal name of the person making the request",
            "example": "Jane Doe",
            "reason": "To verify identity of requestor"
          },
          {
            "description": "URL(s) of the content being reported",
            "example": "https://pornhub.com/view_video.php?viewkey=example",
            "reason": "To locate and remove specific content"
          },
          {
            "description": "Details about the consent agreement violation or withdrawal",
            "example": "Permission was only given for promotional use, not full distribution",
            "reason": "To understand the nature of the consent issue"
          }
        ],
        "removalCriteria": [
          "Content violates existing performer consent agreement",
          "Performer wishes to withdraw from existing consent agreement",
          "No permission was given for content to be uploaded",
          "Permission was given for limited use only but upload exceeds those terms",
          "Consent provided is no longer valid or was not valid initially"
        ]
      },
      {
        "id": "ph-content-removal-csam",
        "reference": "PH-CONTENT-REMOVAL-CSAM",
        "summary": "Pornhub removes content that violates their Child Sexual Abuse Material (CSAM) Policy and provides anonymous reporting options for such content.",
        "quote": "You may submit requests for removal for content that: Violates our Child Sexual Abuse Material (CSAM) Policy... If you are reporting CSAM and do not wish to leave your contact information, you may report anonymously here",
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
            "description": "URL(s) of the content being reported or content identification details",
            "example": "https://pornhub.com/view_video.php?viewkey=example or video title/username",
            "reason": "To locate and remove the illegal content"
          },
          {
            "description": "Contact information (optional for anonymous reporting)",
            "example": "Email address and legal name",
            "reason": "For follow-up communication if not reporting anonymously"
          }
        ],
        "removalCriteria": [
          "Content violates Child Sexual Abuse Material (CSAM) Policy",
          "Content may be illegal involving minors"
        ]
      },
      {
        "id": "ph-content-removal-immediate-disable",
        "reference": "PH-CONTENT-REMOVAL-VERIFICATION",
        "summary": "Pornhub immediately disables reported content URLs upon email verification of removal requests, with all requests being carefully reviewed regardless of email confirmation status.",
        "quote": "By clicking on the link in the verification email, all valid content URLs from the reported URLs section will be immediately disabled... Confirmed by email or not, all content removal requests will be carefully reviewed",
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
            "value": 0,
            "unit": "immediate",
            "description": "Content immediately disabled upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Email verification by clicking link in confirmation email",
            "example": "Click verification link sent to provided email address",
            "reason": "To confirm the authenticity of the removal request"
          }
        ],
        "removalCriteria": [
          "Valid removal request submitted through official form",
          "Email verification completed by clicking confirmation link",
          "Content URLs are valid and accessible on the platform"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758553714724-2",
    "reference": "PH-DMCA-POLICY",
    "title": "Pornhub DMCA Copyright Policy",
    "summary": "Digital Millennium Copyright Act compliance policy covering copyright infringement claims and takedown procedures.",
    "url": "https://www.pornhub.com/dmca",
    "accessTimestamp": "2025-09-22T15:08:34.724Z",
    "policies": [],
    "appealProcess": null
  }
],
};
