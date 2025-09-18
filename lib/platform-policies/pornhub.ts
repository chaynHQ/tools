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
    "accessTimestamp": "2025-09-18T21:47:56.317Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must be uploaded with proper consent from all individuals appearing.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
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
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Description of how the content violates the non-consensual policy",
            "reason": "To understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without consent of individuals appearing in it",
          "Uploader did not obtain proper consent and release from every individual appearing in the content"
        ]
      },
      {
        "id": "ph-consent-verification",
        "reference": "PH-TOS-CONSENT",
        "summary": "Requires uploaders to obtain consent and release for every individual appearing in content and verify they are over 18 years of age.",
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
            "description": "Evidence that you appear in the content or own rights to the content",
            "reason": "To establish standing to request removal"
          },
          {
            "description": "Proof that consent was not obtained for your appearance",
            "reason": "To demonstrate violation of consent requirements"
          }
        ],
        "removalCriteria": [
          "Uploader failed to obtain consent from individuals appearing in content",
          "Uploader cannot provide proper consent documentation when requested",
          "Individual appearing in content did not consent to upload or distribution"
        ]
      },
      {
        "id": "ph-age-verification",
        "reference": "PH-TOS-AGE",
        "summary": "Requires verification that all individuals in content were at least 18 years old and proper record-keeping under 18 U.S.C. § 2257.",
        "quote": "for every individual appearing in your Content you have carefully ascertained and examined a valid governmental photo identification demonstrating that they are at least 18 years of age on the day they are photographed, filmed or otherwise appearing in such Content",
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
            "description": "Evidence that individuals in content may be under 18 or that proper age verification was not conducted",
            "reason": "To investigate potential underage content violations"
          },
          {
            "description": "Report through appropriate channels including legal@pornhub.com for suspected underage content",
            "reason": "Legal requirement for reporting suspected child exploitation"
          }
        ],
        "removalCriteria": [
          "Content depicts individuals under 18 years of age",
          "Uploader cannot provide proper age verification documentation when requested",
          "Uploader failed to maintain required records under 18 U.S.C. § 2257"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation, including using someone else's content or identity.",
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
            "description": "Evidence that content or account impersonates you or uses your identity",
            "reason": "To establish impersonation violation"
          },
          {
            "description": "Proof of your identity (may require identity verification)",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "URL(s) of impersonating content or accounts",
            "reason": "To identify specific violations for removal"
          }
        ],
        "removalCriteria": [
          "Content or account impersonates another person",
          "Content falsely represents affiliation with another person",
          "Account uses another person's identity or likeness without permission"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Operates under DMCA takedown procedures.",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
            "description": "File a formal DMCA takedown notice following the Copyright Policy procedures",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of copyright ownership or authorization",
            "reason": "To establish rights to the copyrighted material"
          },
          {
            "description": "Identification of the specific infringing content",
            "reason": "To locate and remove infringing material"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright of the complainant",
          "Content uses copyrighted material without permission",
          "Uploader cannot demonstrate ownership or authorization to use copyrighted content"
        ]
      },
      {
        "id": "ph-harassment-intimidation",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, intimidation, and abusive conduct toward other users.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
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
            "description": "Documentation of harassing, threatening, or intimidating content or behavior",
            "reason": "To demonstrate harassment violation"
          },
          {
            "description": "URL(s) of harassing content or user profiles",
            "reason": "To identify specific violations for action"
          },
          {
            "description": "Use reporting mechanisms available on the platform",
            "reason": "To report harassment through proper channels"
          }
        ],
        "removalCriteria": [
          "Content or behavior constitutes harassment of other users",
          "Content contains threats or intimidation",
          "Content is abusive, inflammatory, or stalking in nature",
          "Content invades another person's privacy"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Unauthorized use of accounts is prohibited.",
        "quote": "You are fully responsible for all activities that occur under your username or password. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of this Website using your username, password, or other security information.",
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
            "description": "Evidence of unauthorized account activity or content uploads",
            "reason": "To document the security breach"
          },
          {
            "description": "Proof of account ownership for recovery purposes",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Content uploaded without account owner's authorization",
          "Account being used by someone other than the legitimate owner"
        ]
      },
      {
        "id": "ph-content-standards",
        "reference": "PH-TOS-STANDARDS",
        "summary": "Content must comply with platform standards and not contain illegal, fraudulent, defamatory, or harmful material.",
        "quote": "post any Content that contains falsehoods or misrepresentations that could damage this Website or any third party; post any Content that is obscene, illegal, unlawful, fraudulent, defamatory, libelous, harassing, hateful, racially or ethnically offensive",
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
            "description": "Report violating content using available reporting mechanisms",
            "reason": "To flag content that violates platform standards"
          },
          {
            "description": "Description of how content violates platform standards",
            "reason": "To understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content is illegal, fraudulent, or unlawful",
          "Content is defamatory or libelous",
          "Content contains falsehoods or misrepresentations",
          "Content is obscene or violates platform content standards"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal or enforcement decisions within 6 months via email to dsa@pornhub.com from their registered email address.",
      "steps": [
        "Email dsa@pornhub.com from the email address associated with your account",
        "Include as much information as possible about the decision you're appealing",
        "Provide explanation of why you believe the complaint is justified",
        "Submit within 6 months of being notified of the original decision",
        "Platform will handle complaints in a timely, non-discriminatory, diligent, and objective manner"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-18T21:47:56.317Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Users can delete their user contributions and audio/video information through account settings, and can delete/deactivate their account at any time unless prohibited by law or court order.",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order.",
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
            "description": "Account access credentials",
            "example": "Username and password for registered users",
            "reason": "To verify account ownership and enable content deletion"
          }
        ],
        "removalCriteria": [
          "User-uploaded content can be deleted by account holder",
          "Account deactivation removes profile accessibility",
          "Legal or court order may prevent deletion"
        ]
      },
      {
        "id": "ph-pp-data-deletion",
        "reference": "PH-PP-SECTION-18-19",
        "summary": "Registered users have the right to request deletion of their personal data, with identity verification required before processing deletion requests.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... Prior to processing an access or deletion request of your data, we will need to verify your identity and ensure your right to access or delete the information.",
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
            "description": "Response time for data deletion requests"
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
            "reason": "To confirm account ownership"
          }
        ],
        "removalCriteria": [
          "Must be a registered user",
          "Identity verification must be completed",
          "Some deletions may require full account deletion"
        ]
      },
      {
        "id": "ph-pp-law-enforcement",
        "reference": "PH-PP-SECTION-12",
        "summary": "Law enforcement can request disclosure of records through valid court orders, subpoenas, or search warrants served through the legal service platform or by mail.",
        "quote": "You may serve us a valid court order, subpoena, search warrant or equivalent legal or official administrative document by respecting the following conditions: The document(s) is uploaded, and all required fields have been filed out adequately on our platform for Legal Service Process located at: https://legalservice.aylo.com/legal/datarequest",
        "contentTypes": [
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
            "description": "Valid legal document",
            "example": "Court order, subpoena, or search warrant",
            "reason": "Legal requirement for disclosure of records"
          },
          {
            "description": "Proper service through legal platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest",
            "reason": "To ensure proper legal service process"
          },
          {
            "description": "Mail service to Cyprus address",
            "example": "195-197 Old Nicosia-Limassol Road, Block 1 Dali Industrial Zone, Cyprus 2540",
            "reason": "Alternative method for legal document service"
          }
        ],
        "removalCriteria": [
          "Valid court order or equivalent legal document",
          "Proper service through designated channels",
          "Document correctly issued to Aylo Freesites Ltd"
        ]
      },
      {
        "id": "ph-pp-legal-disclosure",
        "reference": "PH-PP-SECTION-6",
        "summary": "Platform may disclose personal information to comply with law, enforce terms, detect illegal activities, or protect rights and safety of users and others.",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues; protect against harm to the rights, property or safety of our company, our users, our employees, or others",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Legal authority or court order",
            "example": "Government request or legal process",
            "reason": "To comply with legal obligations"
          }
        ],
        "removalCriteria": [
          "Legal compliance requirement",
          "Terms of service violation",
          "Illegal or suspected illegal activities",
          "Threat to safety or security",
          "Protection of rights and property"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/managemydata/requestDatadeletion?productId=10068&productDomain=pornhub.com",
      "summary": "Registered users can request data deletion through dedicated platform links, with identity verification required before processing.",
      "steps": [
        "Access the data deletion request link",
        "Provide identity verification information (username and email)",
        "Verify account access",
        "Wait up to one month for response",
        "Note that some deletions may require full account deletion"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T21:47:56.317Z",
    "policies": [
      {
        "id": "ph-content-removal-policy",
        "reference": "PH-CONTENT-REMOVAL",
        "summary": "Provides a Content Removal Request Form for anyone to request the removal of content depicting them for any reason.",
        "quote": "Content Removal",
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
            "description": "Use the Content Removal Request Form available on the site",
            "reason": "To ensure the report is processed through the proper channel"
          },
          {
            "description": "URL(s) of the content to be removed",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Information to identify yourself as the person in the content or as an authorized representative",
            "reason": "To verify the legitimacy of the removal request"
          }
        ],
        "removalCriteria": [
          "Content depicts the requesting person",
          "Request is submitted through the official Content Removal Request Form",
          "Requester can be identified as the person depicted or their authorized representative"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758232076317-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Specific policy addressing non-consensual intimate imagery, content removal procedures, and reporting mechanisms for NCII violations.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T21:47:56.317Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits recording or distribution of intimate images without consent, including photos and videos depicting explicit sexual activity or nudity.",
        "quote": "The recording or distribution of intimate images (that is, photos and videos that are generally understood to depict explicit sexual activity or nudity or partial nudity) without someone's consent is a violation of that person's privacy and is a severe violation of our Terms of Service, and is strictly prohibited.",
        "contentTypes": [
          "intimate"
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that content was shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Content shared without valid written consent",
          "Content appears to have been taken without consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-SURVEILLANCE",
        "summary": "Pornhub prohibits videos or photos of any person taken without valid written consent, including hidden camera and spy camera content.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Knowledge that recording was made without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content",
            "example": "Direct links to the violating content",
            "reason": "To identify and remove specific content"
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
        "summary": "Pornhub strictly prohibits sharing explicit sexual images of someone without their valid written consent, commonly referred to as revenge porn.",
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
            "description": "First-hand knowledge that content violates policy",
            "example": "Knowledge that explicit images were shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "URL links to the violating content",
            "example": "Direct links to the revenge porn content",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Non-consensual distribution of intimate images"
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of unauthorized sharing",
            "example": "Knowledge that non-sexual images were shared without permission",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "URL links to the content",
            "example": "Direct links to the unauthorized content",
            "reason": "To identify and remove specific content"
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
            "description": "First-hand knowledge of private information exposure",
            "example": "Knowledge that personal identifying information was shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "URL links to content containing private information",
            "example": "Direct links to content exposing personal details",
            "reason": "To identify and remove specific content"
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
            "description": "First-hand knowledge that content contains deepfakes",
            "example": "Knowledge that images or videos have been AI-generated or manipulated",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "URL links to deepfake content",
            "example": "Direct links to the manipulated content",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "AI-generated images or videos",
          "Modified or manipulated images designed to deceive",
          "Content that misleads viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "PH-NCII-POLICY-ACTS",
        "summary": "Pornhub prohibits content featuring or promoting non-consensual acts, whether real or simulated, including depictions of rape or sexual assault.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of non-consensual content",
            "example": "Knowledge that content depicts non-consensual sexual activity",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "URL links to violating content",
            "example": "Direct links to content depicting non-consensual acts",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "Content featuring non-consensual acts (real or simulated)",
          "Depictions of coerced or forced sexual acts",
          "Content depicting rape or sexual assault",
          "Content showing persons appearing drugged, incapacitated, or intoxicated in sexual acts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.porn-hub.website/content-removal",
      "summary": "Users can report violations through the Content Removal Request Form, which is reviewed by 24/7 human moderation team with swift action taken including content removal, fingerprinting, and account suspension.",
      "steps": [
        "Fill out and submit the Content Removal Request Form",
        "Include all relevant URL links to the content in question",
        "Request will be addressed confidentially",
        "Content will be removed expeditiously if found in violation",
        "Content will be fingerprinted to prevent re-upload",
        "Associated uploader's account may be suspended or terminated"
      ]
    }
  },
  {
    "id": "pornhub-new-1758232076317-1",
    "reference": "PH-CONTENT-REMOVAL",
    "title": "Pornhub Content Removal Request Form",
    "summary": "Official form and process for requesting removal of non-consensual content, harassment, and privacy violations from Pornhub.",
    "url": "https://www.pornhub.com/content-removal",
    "accessTimestamp": "2025-09-18T21:47:56.317Z",
    "policies": [
      {
        "id": "ph-content-removal-nonconsensual",
        "reference": "PH-CONTENT-REMOVAL-NCII",
        "summary": "Pornhub removes content that violates their Non-Consensual Content Policy, including content where individuals did not consent to recording or distribution.",
        "quote": "You may submit requests for removal for content that: Violates our Non-Consensual Content Policy",
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
            "description": "Valid email address for contact",
            "example": "user@example.com",
            "reason": "Required for verification and communication about the request"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "To verify identity and confirm the person is authorized to make the request"
          },
          {
            "description": "URL(s) of the content being reported",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Relationship to the person seen in the content",
            "example": "I am the person in the content",
            "reason": "To establish standing to request removal"
          },
          {
            "description": "Confirmation signature with typed name",
            "example": "Typed full name",
            "reason": "To guarantee accuracy of information and identity verification"
          }
        ],
        "removalCriteria": [
          "Content shows non-consensual sexual acts",
          "One or more individuals in the content did not consent to being recorded",
          "One or more individuals in the content did not consent for the content to be distributed",
          "Content contains personal identifying information (doxxing)",
          "Content is a deepfake or AI-generated/manipulated using someone's likeness without consent"
        ]
      },
      {
        "id": "ph-content-removal-deepfake",
        "reference": "PH-CONTENT-REMOVAL-AI",
        "summary": "Pornhub removes deepfake and AI-generated content that uses someone's likeness without their consent.",
        "quote": "The content is a 'deepfake' or is AI-generated or manipulated and uses someone's likeness without their consent",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact",
            "example": "user@example.com",
            "reason": "Required for verification and communication about the request"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "To verify identity and confirm the person is authorized to make the request"
          },
          {
            "description": "URL(s) of the deepfake/AI-generated content",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To locate and identify the specific AI-generated content for removal"
          },
          {
            "description": "Relationship to the person whose likeness is used",
            "example": "I am the person whose likeness is used",
            "reason": "To establish standing to request removal of AI-generated content"
          }
        ],
        "removalCriteria": [
          "Content is identified as deepfake or AI-generated",
          "Content uses someone's likeness without their consent",
          "Content was created using artificial intelligence or manipulation technology"
        ]
      },
      {
        "id": "ph-content-removal-doxxing",
        "reference": "PH-CONTENT-REMOVAL-PII",
        "summary": "Pornhub removes content that contains personal identifying information (doxxing) without consent.",
        "quote": "The content contains personal identifying information ('doxxing')",
        "contentTypes": [
          "personal",
          "private",
          "other"
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
            "description": "Valid email address for contact",
            "example": "user@example.com",
            "reason": "Required for verification and communication about the request"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "To verify identity and confirm the person is authorized to make the request"
          },
          {
            "description": "URL(s) of content containing personal information",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To locate and identify the specific content containing personal identifying information"
          },
          {
            "description": "Description of what personal information is exposed",
            "example": "Video shows my full name, address, and phone number",
            "reason": "To understand what specific personal information needs to be removed"
          }
        ],
        "removalCriteria": [
          "Content contains personal identifying information without consent",
          "Personal information was shared to harass or harm the individual",
          "Content includes private details like addresses, phone numbers, or other identifying data"
        ]
      },
      {
        "id": "ph-content-removal-consent-violation",
        "reference": "PH-CONTENT-REMOVAL-CONSENT",
        "summary": "Pornhub removes content that violates existing performer consent agreements or where performers wish to withdraw from consent agreements.",
        "quote": "Violates an existing performer consent agreement; Features a performer who wishes to withdraw from an existing consent agreement",
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
            "example": "user@example.com",
            "reason": "Required for verification and communication about the request"
          },
          {
            "description": "Legal name of the reporting person",
            "example": "John Smith",
            "reason": "To verify identity and confirm the person is authorized to make the request"
          },
          {
            "description": "URL(s) of content violating consent agreement",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To locate and identify the specific content that violates consent terms"
          },
          {
            "description": "Details about the consent agreement violation",
            "example": "Content was uploaded without permission or exceeds agreed terms",
            "reason": "To understand how the content violates the original consent agreement"
          }
        ],
        "removalCriteria": [
          "No permission was given for content to be uploaded to Pornhub",
          "Permission was given for limited use only but upload doesn't follow those terms",
          "The consent provided is no longer valid or was not valid in the first place",
          "Performer wishes to withdraw from existing consent agreement"
        ]
      },
      {
        "id": "ph-content-removal-immediate-disable",
        "reference": "PH-CONTENT-REMOVAL-IMMEDIATE",
        "summary": "Pornhub immediately disables reported content URLs upon email verification of the removal request.",
        "quote": "By clicking on the link in the verification email, all valid content URLs from the reported URLs section will be immediately disabled.",
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
            "description": "Content is immediately disabled upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Email verification by clicking confirmation link",
            "example": "Click the verification link sent to your email",
            "reason": "To confirm the authenticity of the removal request before immediate action"
          }
        ],
        "removalCriteria": [
          "Valid content removal request has been submitted",
          "Email verification has been completed",
          "URLs provided are valid and accessible on the platform"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758232076317-2",
    "reference": "PH-FTC-SETTLEMENT",
    "title": "FTC Settlement Requirements for Content Moderation",
    "summary": "Recent FTC settlement mandating enhanced content moderation, CSAM prevention, and non-consensual material removal procedures.",
    "url": "https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-takes-action-against-operators-pornhub-other-pornographic-sites-deceiving-users-about-efforts",
    "accessTimestamp": "2025-09-18T21:47:56.317Z",
    "policies": [
      {
        "id": "aylo-ftc-ncm-prevention",
        "reference": "PH-FTC-SETTLEMENT-NCM",
        "summary": "Aylo must implement a comprehensive program to prevent publication and dissemination of nonconsensual material (NCM) on all its websites including Pornhub, with policies, procedures and technical measures.",
        "quote": "Implement a program to prevent the publication or dissemination of CSAM and NCM content, which must include policies, procedures and technical measures to ensure that such content is not published on its websites and a process to respond to reports about CSAM and NCM content on its websites",
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
            "description": "Report identifying NCM content on Aylo websites",
            "example": "URL of specific content, description of why it's nonconsensual",
            "reason": "Required for Aylo's mandated response process under FTC settlement"
          }
        ],
        "removalCriteria": [
          "Content identified as nonconsensual material (NCM)",
          "Content where individuals did not consent to sexual conduct production and publication",
          "Content flagged through user reporting system"
        ]
      },
      {
        "id": "aylo-ftc-consent-verification",
        "reference": "PH-FTC-SETTLEMENT-CONSENT",
        "summary": "Aylo must implement a system to verify that people appearing in videos are adults who provided consent to both the sexual conduct and its production and publication on their websites.",
        "quote": "Implement a system to verify that people who appear in videos or photos on its websites are adults and have provided consent to the sexual conduct as well as its production and publication",
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
            "description": "Evidence that individual in content did not consent to production or publication",
            "example": "Statement from person depicted, evidence of lack of consent",
            "reason": "Required to demonstrate violation of consent verification requirements"
          }
        ],
        "removalCriteria": [
          "Content featuring individuals who did not consent to sexual conduct",
          "Content featuring individuals who did not consent to production",
          "Content featuring individuals who did not consent to publication",
          "Content where age and consent verification cannot be established"
        ]
      },
      {
        "id": "aylo-ftc-legacy-content",
        "reference": "PH-FTC-SETTLEMENT-LEGACY",
        "summary": "Aylo must remove all content uploaded prior to implementation of their prevention program until they can verify participants were adults who consented to the conduct and its production and publication.",
        "quote": "Remove content uploaded prior to the implementation of the CSAM and NCM prevention program until Aylo verifies that the individuals participating in those videos were at least 18 at the time the content was created and consented to the sexual conduct and its production and publication",
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
            "description": "Identification of legacy content uploaded before prevention program implementation",
            "example": "URL of content, upload date if available",
            "reason": "Content must be removed unless consent and age verification completed"
          }
        ],
        "removalCriteria": [
          "Content uploaded prior to implementation of prevention program",
          "Legacy content lacking proper age verification",
          "Legacy content lacking proper consent verification for sexual conduct",
          "Legacy content lacking proper consent verification for production and publication"
        ]
      },
      {
        "id": "aylo-ftc-privacy-security",
        "reference": "PH-FTC-SETTLEMENT-PRIVACY",
        "summary": "Aylo must implement comprehensive privacy and information security program to protect personal data of users and models, addressing previous failures to encrypt data and limit access.",
        "quote": "Implement a comprehensive privacy and information security program to address the privacy and security issues detailed in the complaint",
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
            "description": "Evidence of privacy or security breach involving personal data",
            "example": "Unauthorized access to model verification data, data breach notification",
            "reason": "Required to demonstrate violation of privacy security requirements"
          }
        ],
        "removalCriteria": [
          "Content involving compromised personal data",
          "Content resulting from security breaches",
          "Content involving improperly secured identification documents",
          "Content where privacy protections were inadequate"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
