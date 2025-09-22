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
    "accessTimestamp": "2025-09-22T11:33:19.874Z",
    "policies": [
      {
        "id": "ph-ncii-policy",
        "reference": "PH-TOS-NCII",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. All content requires consent from every individual appearing in it.",
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
            "reason": "For immediate flagging of violative content"
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
          "Content violates the prohibition against non-consensual material"
        ]
      },
      {
        "id": "ph-harassment-intimidation-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, intimidation, and content that negatively affects other users' ability to use the platform.",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report harassing content"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "For immediate flagging of harassing behavior"
          },
          {
            "description": "Evidence of threatening, abusive, or intimidating conduct",
            "reason": "To demonstrate the harassing nature of the content"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, abusive, or intimidating",
          "Content encourages violence against people or animals",
          "Content constitutes harassment or stalking",
          "Content is invasive of another's privacy",
          "Content negatively affects other users' ability to use the platform"
        ]
      },
      {
        "id": "ph-privacy-violation-policy",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits collecting or storing personal data about anyone and invasive content that violates privacy expectations.",
        "quote": "collect or store personal data about anyone; ... invasive of another's privacy",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report privacy-violating content"
          },
          {
            "description": "Description of how the content violates privacy",
            "reason": "To establish the privacy violation"
          },
          {
            "description": "Evidence that personal data was collected or stored without consent",
            "reason": "To demonstrate unauthorized data collection"
          }
        ],
        "removalCriteria": [
          "Content involves unauthorized collection or storage of personal data",
          "Content is invasive of another person's privacy",
          "Content violates reasonable privacy expectations",
          "Content exposes private information without consent"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or falsely misrepresenting affiliation with a person.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
        "contentTypes": [
          "personal",
          "intimate",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report impersonation"
          },
          {
            "description": "Evidence that content impersonates another person",
            "reason": "To establish the impersonation"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To verify legitimate ownership of identity"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with a person",
          "Content misrepresents the uploader's identity"
        ]
      },
      {
        "id": "ph-copyright-policy",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Operates a clear Copyright Policy with DMCA takedown procedures.",
        "quote": "This Website operates a clear Copyright Policy in relation to any Content alleged to infringe the copyright of a third party. If you believe that any Content violates your copyright, please see our Copyright Policy for instructions on sending us a notice of copyright infringement.",
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
            "description": "File a formal DMCA takedown notice following the Copyright Policy procedures",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of copyright ownership in the content",
            "reason": "To establish legal right to the copyrighted material"
          },
          {
            "description": "Identification of the specific infringing content",
            "reason": "To locate and remove the infringing material"
          }
        ],
        "removalCriteria": [
          "Content infringes on third party copyright",
          "Content contains copyrighted materials without permission",
          "Content violates intellectual property rights",
          "Valid DMCA takedown notice has been received"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must immediately report unauthorized access or security breaches.",
        "quote": "You are fully responsible for all activities that occur under your username or password. You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
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
            "reason": "To report security breach and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity or security breach",
            "reason": "To understand the scope of the compromise"
          },
          {
            "description": "Evidence of account ownership for recovery purposes",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to account",
          "Account is being used without owner's permission",
          "Security breach has been confirmed",
          "Unauthorized content has been uploaded to compromised account"
        ]
      },
      {
        "id": "ph-age-verification-policy",
        "reference": "PH-TOS-AGE-VERIFICATION",
        "summary": "All individuals appearing in content must be verified as 18+ years old, with proper documentation maintained by uploaders.",
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
            "description": "Report suspected underage content using the Content Removal Request Form",
            "reason": "To report potential violations of age verification requirements"
          },
          {
            "description": "Evidence suggesting individuals in content may be under 18",
            "reason": "To investigate potential age verification violations"
          }
        ],
        "removalCriteria": [
          "Content depicts individuals who may be under 18 years of age",
          "Uploader cannot provide proper age verification documentation",
          "Content violates age verification requirements",
          "Suspected underage individuals appear in content"
        ]
      }
    ],
    "appealProcess": {
      "url": "dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions or other platform actions within 6 months of notification.",
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
    "accessTimestamp": "2025-09-22T11:33:19.874Z",
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
            "example": "Email address or support form submission",
            "reason": "To process content removal requests and communicate with users"
          }
        ],
        "removalCriteria": [
          "Content reported through proper channels",
          "Content that violates platform terms and conditions"
        ]
      },
      {
        "id": "ph-pp-dmca-takedown",
        "reference": "PH-PP-FOOTER",
        "summary": "Pornhub has a dedicated DMCA takedown process with specific forms for copyright infringement claims and content removal requests.",
        "quote": "DMCA Takedown Form",
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
            "description": "DMCA compliant takedown notice",
            "example": "Completed DMCA takedown form with required legal elements",
            "reason": "To comply with copyright law requirements"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice submitted",
          "Content identified as infringing copyright"
        ]
      },
      {
        "id": "ph-pp-user-data-deletion",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete their user contributions and audio/video information through account settings, and can delete and deactivate their entire account at any time.",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order.",
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
            "description": "Account access and authentication",
            "example": "Login credentials or account verification",
            "reason": "To verify user identity and account ownership"
          }
        ],
        "removalCriteria": [
          "User-uploaded content in their own account",
          "Valid account ownership verification",
          "No legal restrictions preventing deletion"
        ]
      },
      {
        "id": "ph-pp-data-subject-rights",
        "reference": "PH-PP-SECTION-18",
        "summary": "Users have rights to request deletion of personal data and can exercise these rights through dedicated support channels with identity verification requirements.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... You can exercise your rights of access or deletion of your data by following the dedicated links in the section 'Manage Your Personal Data' below. You can send an e-mail at support@pornhub.com to exercise your rights to Rectification, Object, Restriction of Processing, or to request us to help you with the process.",
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
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification information",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate information in systems"
          },
          {
            "description": "Account access verification",
            "example": "Access to registered email account",
            "reason": "Security measure to ensure authorized requests"
          }
        ],
        "removalCriteria": [
          "Valid identity verification completed",
          "Legitimate data subject request under privacy laws",
          "No legal obligations preventing deletion"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub has specific procedures for law enforcement requests, requiring valid court orders and proper service through designated channels.",
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
            "example": "Properly issued legal document from valid court",
            "reason": "Legal requirement for disclosure of user information"
          },
          {
            "description": "Proper service through designated platform",
            "example": "Upload through https://legalservice.aylo.com/legal/datarequest",
            "reason": "To ensure proper legal service and processing"
          }
        ],
        "removalCriteria": [
          "Valid legal document properly served",
          "Document correctly issued to Aylo Freesites Ltd",
          "All required fields completed on legal service platform"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for assistance with data requests, content removal, and exercising privacy rights",
      "steps": [
        "Contact support@pornhub.com with specific request type",
        "Provide required identity verification information",
        "Wait for response within one month for data subject requests",
        "Follow up if additional information is needed"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-22T11:33:19.874Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758540799874-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, consent requirements, and content removal procedures for NCII cases.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-22T11:33:19.874Z",
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
            "example": "Personal testimony that content was shared without consent",
            "reason": "To establish direct connection to the violation"
          },
          {
            "description": "URL links to the content in question",
            "example": "Direct links to specific videos or images",
            "reason": "To identify and locate the violating content for removal"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Content shared without valid written consent",
          "Content violates non-consensual content policy"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-HIDDEN",
        "summary": "Pornhub prohibits videos or photos of any person taken without valid written consent, including hidden camera and spy camera content.",
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
            "reason": "To establish non-consensual nature of content creation"
          }
        ],
        "removalCriteria": [
          "Content recorded in public or private setting without valid written consent",
          "Hidden or spy camera content",
          "Up-skirt content"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Pornhub prohibits sharing explicit sexual images of someone without their valid written consent, including revenge porn.",
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
            "description": "Evidence of lack of consent for sharing",
            "example": "Documentation showing images were shared without permission",
            "reason": "To establish non-consensual distribution"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Non-consensual distribution of intimate images",
          "Revenge porn content"
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
            "example": "Documentation showing lack of permission for sharing personal images",
            "reason": "To establish unauthorized sharing of personal content"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Pornhub prohibits doxing, defined as exposing private and identifying information about individuals.",
        "quote": "\"Doxing\", defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of private identifying information being exposed",
            "example": "Screenshots showing personal contact details, addresses, or full names",
            "reason": "To identify privacy violations and personal information exposure"
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
        "summary": "Pornhub prohibits any deepfakes whatsoever, including AI-generated or manipulated content designed to deceive viewers.",
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
            "description": "Evidence that content is AI-generated or digitally manipulated",
            "example": "Technical analysis or clear indicators of digital manipulation",
            "reason": "To identify artificially created or modified content"
          }
        ],
        "removalCriteria": [
          "AI-generated content using someone's likeness",
          "Modified or manipulated images or videos",
          "Content designed to deceive viewers about a person's actions or speech"
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
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that person appears incapacitated or unable to consent",
            "example": "Visual indicators of impairment or incapacitation",
            "reason": "To identify content where consent cannot be established due to impairment"
          }
        ],
        "removalCriteria": [
          "Content featuring drugged persons in sexual acts",
          "Content featuring incapacitated persons in sexual acts",
          "Content featuring intoxicated persons with impaired judgment in sexual acts"
        ]
      },
      {
        "id": "ph-ncii-enforcement",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Pornhub removes violating content, fingerprints it to prevent re-upload, and suspends or terminates associated accounts.",
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
            "description": "Report through Content Removal Request Form",
            "example": "Completed form with all relevant details and URLs",
            "reason": "To initiate review and removal process"
          }
        ],
        "removalCriteria": [
          "Content identified as violating non-consensual content policy",
          "Content reported through proper channels",
          "Content confirmed as non-consensual by moderation team"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758540799874-1",
    "reference": "PH-CONTENT-REMOVAL-FORM",
    "title": "Pornhub Content Removal Request Process",
    "summary": "Official process and form for requesting removal of non-consensual content, revenge porn, harassment, and privacy violations.",
    "url": "https://www.pornhub.com/content-removal",
    "accessTimestamp": "2025-09-22T11:33:19.874Z",
    "policies": [
      {
        "id": "ph-cr-nonconsensual",
        "reference": "PH-CONTENT-REMOVAL-FORM",
        "summary": "Pornhub removes content that violates their Non-Consensual Content Policy, including content showing non-consensual sexual acts, recording without consent, or distribution without consent.",
        "quote": "You may submit requests for removal for content that: Violates our Non-Consensual Content Policy... The content shows non-consensual sexual acts... One or more individual(s) in the content did not consent to being recorded... One or more individual(s) in the content did not consent for the content to be distributed",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Immediate disabling upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact and verification",
            "example": "user@example.com",
            "reason": "Required for email verification and communication"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "Identity verification for legitimate requests"
          },
          {
            "description": "URL(s) of the content being reported",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Relationship to the person in the content",
            "example": "I am the person in the content",
            "reason": "Establish standing to make the removal request"
          }
        ],
        "removalCriteria": [
          "Content shows non-consensual sexual acts",
          "Individual(s) did not consent to being recorded",
          "Individual(s) did not consent to content distribution",
          "Content violates Non-Consensual Content Policy"
        ]
      },
      {
        "id": "ph-cr-doxxing",
        "reference": "PH-CONTENT-REMOVAL-FORM",
        "summary": "Pornhub removes content that contains personal identifying information (doxxing) shared without consent.",
        "quote": "The content contains personal identifying information (\"doxxing\")",
        "contentTypes": [
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
            "description": "Immediate disabling upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact and verification",
            "example": "user@example.com",
            "reason": "Required for email verification and communication"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "Identity verification for legitimate requests"
          },
          {
            "description": "URL(s) of the content containing personal information",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains personal identifying information shared without consent",
          "Content constitutes doxxing"
        ]
      },
      {
        "id": "ph-cr-deepfake",
        "reference": "PH-CONTENT-REMOVAL-FORM",
        "summary": "Pornhub removes deepfakes, AI-generated content, or manipulated content that uses someone's likeness without their consent.",
        "quote": "The content is a \"deepfake\" or is AI-generated or manipulated and uses someone's likeness without their consent",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Immediate disabling upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact and verification",
            "example": "user@example.com",
            "reason": "Required for email verification and communication"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "Identity verification for legitimate requests"
          },
          {
            "description": "URL(s) of the deepfake or AI-generated content",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Evidence that likeness is used without consent",
            "example": "Explanation of how the person's likeness was used",
            "reason": "To establish unauthorized use of likeness"
          }
        ],
        "removalCriteria": [
          "Content is a deepfake using someone's likeness without consent",
          "Content is AI-generated using someone's likeness without consent",
          "Content is manipulated using someone's likeness without consent"
        ]
      },
      {
        "id": "ph-cr-consent-violation",
        "reference": "PH-CONTENT-REMOVAL-FORM",
        "summary": "Pornhub removes content that violates existing performer consent agreements or where performers wish to withdraw from consent agreements.",
        "quote": "Violates an existing performer consent agreement... Features a performer who wishes to withdraw from an existing consent agreement... No permission was given for this content to be uploaded to the Pornhub... Permission was given for limited use only (e.g. long-form videos or promotional purposes), but this upload does not follow those terms... The consent provided is no longer valid or was not valid in the first place",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Immediate disabling upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact and verification",
            "example": "user@example.com",
            "reason": "Required for email verification and communication"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "Identity verification for legitimate requests"
          },
          {
            "description": "URL(s) of the content violating consent agreement",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Details about the consent agreement violation",
            "example": "Description of how the content violates the original agreement",
            "reason": "To establish the nature of the consent violation"
          }
        ],
        "removalCriteria": [
          "Content violates an existing performer consent agreement",
          "Performer wishes to withdraw from existing consent agreement",
          "No permission was given for content upload",
          "Content exceeds the scope of limited permission given",
          "Consent is no longer valid or was never valid"
        ]
      },
      {
        "id": "ph-cr-csam",
        "reference": "PH-CONTENT-REMOVAL-FORM",
        "summary": "Pornhub removes content that violates their Child Sexual Abuse Material (CSAM) Policy and provides anonymous reporting options.",
        "quote": "Violates our Child Sexual Abuse Material (CSAM) Policy... If you are reporting CSAM and do not wish to leave your contact information, you may report anonymously here",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Immediate disabling upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the content being reported (anonymous reporting available)",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Description of CSAM policy violation",
            "example": "Explanation of how content violates CSAM policy",
            "reason": "To establish the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content violates Child Sexual Abuse Material (CSAM) Policy",
          "Content may involve minors in sexual situations"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
