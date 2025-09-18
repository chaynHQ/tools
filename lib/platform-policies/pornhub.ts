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
    "accessTimestamp": "2025-09-18T19:41:43.608Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must be removed and reported.",
        "quote": "the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein",
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
            "reason": "To initiate content removal process"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific violating content directly"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was posted without consent of individuals appearing in it"
        ]
      },
      {
        "id": "ph-child-safety-policy",
        "reference": "PH-TOS-CSAM",
        "summary": "Zero tolerance policy for child sexual abuse material. Immediate removal and reporting to law enforcement required.",
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
            "description": "Report suspected child sexual abuse material to legal@pornhub.com",
            "reason": "For immediate investigation and law enforcement reporting"
          },
          {
            "description": "Use anonymous content removal request form",
            "reason": "To report CSAM violations anonymously"
          }
        ],
        "removalCriteria": [
          "Content depicts any person under 18 years of age",
          "Content involves child sexual exploitation or abuse",
          "Content features simulated depictions of minors in sexual situations"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. DMCA takedown process available.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights.",
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
            "description": "File a formal DMCA takedown notice following the Copyright Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Provide evidence of original ownership of the copyrighted content",
            "reason": "To establish legitimate copyright ownership"
          },
          {
            "description": "Identify specific URLs of infringing content",
            "reason": "To locate and remove the specific infringing material"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyrighted material owned by complainant",
          "Content was posted without permission from copyright holder",
          "Proper DMCA notice has been filed with required elements"
        ]
      },
      {
        "id": "ph-harassment-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, abuse, and hate speech in content and interactions on the platform.",
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
            "description": "Report using the content removal form at https://pornhub.com/content-removal",
            "reason": "To document and investigate harassment claims"
          },
          {
            "description": "Use the 'Report' button on specific content or comments",
            "reason": "To flag harassing content directly"
          }
        ],
        "removalCriteria": [
          "Content contains threats, abuse, or harassment directed at individuals",
          "Content promotes hate speech based on protected characteristics",
          "Content involves stalking or invasive behavior toward others",
          "Content encourages violence against people or animals"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation and false representation of identity or affiliation with others.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report impersonation through the content removal form",
            "reason": "To investigate false identity claims"
          },
          {
            "description": "Provide evidence of your true identity being misrepresented",
            "reason": "To verify legitimate impersonation claim"
          }
        ],
        "removalCriteria": [
          "Account or content falsely represents another person's identity",
          "Content misrepresents affiliation with individuals or organizations",
          "Profile uses another person's photos or information without permission"
        ]
      },
      {
        "id": "ph-privacy-violation-policy",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits posting content that violates privacy expectations or shares private information without consent.",
        "quote": "engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Submit report via content removal form explaining privacy violation",
            "reason": "To document the nature of the privacy breach"
          },
          {
            "description": "Identify specific content that violates privacy expectations",
            "reason": "To locate and assess the privacy-violating material"
          }
        ],
        "removalCriteria": [
          "Content was shared without consent of individuals depicted",
          "Content violates reasonable expectation of privacy",
          "Private or intimate content was obtained without authorization",
          "Content invasion of privacy causes harm to individuals"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users responsible for account security. Unauthorized access must be reported immediately for investigation and remediation.",
        "quote": "You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": {
          "response": {
            "value": 0,
            "unit": "immediate",
            "description": "Users must report immediately upon discovery"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Contact support@pornhub.com immediately upon discovering unauthorized access",
            "reason": "To secure the compromised account and prevent further unauthorized activity"
          },
          {
            "description": "Provide details of the security breach and unauthorized activity",
            "reason": "To investigate the scope of the compromise and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Content uploaded without account owner's permission",
          "Account being used for activities that violate platform policies",
          "Legitimate account owner locked out due to unauthorized access"
        ]
      },
      {
        "id": "ph-violent-content-policy",
        "reference": "PH-TOS-VIOLENCE",
        "summary": "Prohibits violent content including depictions of torture, death, violence, and content encouraging violence.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report violent content using the content removal form",
            "reason": "To investigate and remove harmful violent material"
          },
          {
            "description": "Use the 'Report' button on specific violent content",
            "reason": "To flag violent content for immediate review"
          }
        ],
        "removalCriteria": [
          "Content depicts torture, death, or extreme violence",
          "Content encourages or promotes violence against people or animals",
          "Content contains snuff material or graphic violence",
          "Content glorifies or instructs on violent activities"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content moderation decisions within 6 months via email to dsa@pornhub.com",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Wait for review - complaints are handled in a timely, non-discriminatory, diligent, and objective manner"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-18T19:41:43.608Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub provides content removal processes for users to report and request removal of content, with dedicated support channels and forms available.",
        "quote": "We may process any of the categories of data mentioned herein to enforce this Privacy Notice, our Terms and Conditions and to comply with any legal obligations, namely but not limited to responding to your data subject requests, to verify the age of users having access to Pornhub, to respond to content reports, and to comply with applicable content moderation and complaint handling obligations.",
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
            "description": "Contact information and details about the content to be removed",
            "example": "Email address, description of content location",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms and Conditions",
          "Content reported through official content reporting channels",
          "Content subject to legal obligations for removal"
        ]
      },
      {
        "id": "ph-pp-dmca-takedown",
        "reference": "PH-PP-FOOTER",
        "summary": "Pornhub provides DMCA takedown procedures for copyright infringement claims, including a dedicated DMCA takedown form.",
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
            "description": "DMCA-compliant takedown notice",
            "example": "Copyright ownership proof, identification of infringing content",
            "reason": "Required under DMCA law for copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Content that infringes copyright",
          "Valid DMCA takedown notice submitted"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "PH-PP-SECTION-8",
        "summary": "Registered users can delete their own user contributions and audio/video content through account settings, and can deactivate their accounts at any time.",
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
            "example": "Login credentials to user account",
            "reason": "To verify ownership of content and account"
          }
        ],
        "removalCriteria": [
          "User-uploaded content can be deleted by the account owner",
          "Account deactivation removes profile accessibility"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "PH-PP-SECTION-18-19",
        "summary": "Users have the right to request deletion of their personal data, including through dedicated data management links for registered users.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... Registered Users may request a copy of their personal data or request the deletion of their personal data via the links below.",
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
            "reason": "To verify identity and locate information in systems"
          },
          {
            "description": "Account access verification",
            "example": "Access to registered email account",
            "reason": "Security measure to prevent unauthorized data deletion"
          }
        ],
        "removalCriteria": [
          "Valid data subject request from account holder",
          "Successful identity verification",
          "No legal obligations preventing deletion"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub responds to valid legal process from law enforcement including court orders, subpoenas, and search warrants through their legal service platform.",
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
            "reason": "Required for legal compliance and user protection"
          },
          {
            "description": "Proper service through legal platform and mail",
            "example": "Upload to legal service platform and mail to Cyprus address",
            "reason": "Ensures proper legal service and documentation"
          }
        ],
        "removalCriteria": [
          "Valid legal process properly served",
          "Document correctly issued to Aylo Freesites Ltd",
          "Compliance with legal service requirements"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for assistance with content removal requests, data subject rights, and other privacy-related matters.",
      "steps": [
        "Contact support@pornhub.com with specific request details",
        "Provide necessary verification information",
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
    "accessTimestamp": "2025-09-18T19:41:43.608Z",
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
    "id": "pornhub-new-1758224503608-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, consent requirements, and removal procedures. Critical for NCII takedown requests.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T19:41:43.608Z",
    "policies": [
      {
        "id": "ph-ncii-general",
        "reference": "PH-NCII-POLICY-GENERAL",
        "summary": "Pornhub prohibits recording or distribution of intimate images without consent, including revenge porn and non-consensual sharing of explicit content.",
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
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Content shared without valid written consent",
          "Violation of non-consensual content policy"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-HIDDEN",
        "summary": "Pornhub prohibits videos or photos taken without valid written consent, including hidden camera, spy camera, and up-skirt content.",
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
            "example": "Documentation showing lack of consent for recording",
            "reason": "To verify unauthorized recording"
          }
        ],
        "removalCriteria": [
          "Content recorded without valid written consent",
          "Hidden or spy camera content",
          "Up-skirt or voyeuristic content"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Pornhub strictly prohibits sharing explicit sexual images without valid written consent, commonly known as revenge porn.",
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
          "Non-consensual distribution of intimate images",
          "Revenge porn content"
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that non-sexual images were shared without consent",
            "example": "Documentation showing lack of permission to share images",
            "reason": "To verify unauthorized sharing of personal images"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Pornhub prohibits doxing, defined as exposing private and identifying information about individuals including contact details and full names.",
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
            "description": "Evidence that private identifying information was exposed",
            "example": "Screenshots showing personal information being shared",
            "reason": "To verify doxing violation"
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
        "summary": "Pornhub prohibits all deepfakes, including AI-generated, modified, or manipulated images and videos designed to deceive viewers.",
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
            "example": "Technical analysis or clear indicators of digital manipulation",
            "reason": "To verify deepfake content"
          }
        ],
        "removalCriteria": [
          "AI-generated images or videos",
          "Digitally modified content designed to deceive",
          "Manipulated images or videos of a person",
          "Any deepfake content whatsoever"
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
            "description": "Evidence that person appears incapacitated or unable to consent",
            "example": "Visual indicators of impairment or incapacitation",
            "reason": "To verify lack of capacity to consent"
          }
        ],
        "removalCriteria": [
          "Content featuring drugged persons in sexual acts",
          "Content featuring incapacitated persons in sexual acts",
          "Content featuring intoxicated persons in sexual acts"
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
            "description": "Completion of Content Removal Request Form",
            "example": "Filled out official removal request form",
            "reason": "To process removal requests systematically"
          }
        ],
        "removalCriteria": [
          "Content identified as violating non-consensual content policy",
          "Content reported through proper channels",
          "Content verified as non-consensual"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
