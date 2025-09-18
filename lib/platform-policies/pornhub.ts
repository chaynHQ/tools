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
    "accessTimestamp": "2025-09-18T22:12:28.993Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must have proper consent from all individuals appearing.",
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
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content violates the non-consensual policy",
            "reason": "To understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content is revenge porn shared without consent",
          "Content involves blackmail or intimidation",
          "Uploader did not obtain proper consent from individuals appearing in content",
          "Content was shared to harm, threaten, or intimidate someone"
        ]
      },
      {
        "id": "ph-consent-verification",
        "reference": "PH-TOS-CONSENT",
        "summary": "Requires uploaders to obtain consent and release from every individual appearing in content and verify they are over 18 years of age.",
        "quote": "you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website; for every individual appearing in your Content you have carefully ascertained and examined a valid governmental photo identification demonstrating that they are at least 18 years of age",
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
            "description": "Evidence that you appear in the content or have rights to the content",
            "reason": "To establish standing to request removal"
          },
          {
            "description": "Proof that proper consent was not obtained",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "Use the Content Removal Request Form",
            "reason": "To formally report consent violations"
          }
        ],
        "removalCriteria": [
          "Content was uploaded without obtaining proper consent from individuals appearing",
          "Uploader cannot provide valid consent documentation when requested",
          "Individual appearing in content did not consent to upload or distribution",
          "Content was uploaded without proper age verification of participants"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation with others through content or profiles.",
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
            "description": "Evidence that content impersonates you or misrepresents your identity",
            "reason": "To demonstrate impersonation violation"
          },
          {
            "description": "Proof of your actual identity",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "URL(s) of the impersonating content or profile",
            "reason": "To identify the specific impersonating material"
          }
        ],
        "removalCriteria": [
          "Content falsely represents someone's identity",
          "Profile or content impersonates another person",
          "Content misrepresents affiliation with an individual",
          "Account is using someone else's identity or likeness without permission"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Provides DMCA takedown process for copyright holders.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights",
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
            "description": "Evidence of copyright ownership",
            "reason": "To establish rights to the copyrighted material"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyright holder's exclusive rights",
          "Content was uploaded without permission from copyright owner",
          "Valid DMCA takedown notice has been properly submitted",
          "Content violates intellectual property rights"
        ]
      },
      {
        "id": "ph-harassment-intimidation",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits using the platform to harass, threaten, intimidate, or cause harm to others through content or communications.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of harassing, threatening, or intimidating content",
            "reason": "To demonstrate harassment policy violation"
          },
          {
            "description": "URL(s) of the harassing content or communications",
            "reason": "To identify the specific harassing material"
          },
          {
            "description": "Description of how the content causes harm or intimidation",
            "reason": "To understand the impact and nature of harassment"
          }
        ],
        "removalCriteria": [
          "Content is used to harass, threaten, or intimidate individuals",
          "Content is harmful, abusive, or inflammatory toward others",
          "Content encourages violence or harm to people",
          "Content is used for stalking or invasive behavior",
          "Content negatively affects other users' ability to use the platform safely"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Unauthorized use of accounts is prohibited.",
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
            "description": "Contact support@pornhub.com immediately with details of unauthorized access",
            "reason": "To report security breach and initiate account recovery"
          },
          {
            "description": "Evidence of unauthorized account activity",
            "reason": "To document the security breach"
          },
          {
            "description": "Proof of legitimate account ownership",
            "reason": "To verify identity before restoring account access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Content uploaded without account owner's permission",
          "Account being used by someone other than the legitimate owner",
          "Security breach has resulted in unauthorized content uploads"
        ]
      },
      {
        "id": "ph-privacy-violation",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits collecting, storing, or sharing personal data about others and invasive privacy violations.",
        "quote": "collect or store personal data about anyone; act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
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
            "description": "Evidence that content violates your privacy",
            "reason": "To demonstrate privacy violation"
          },
          {
            "description": "URL(s) of content that invades privacy or shares personal data",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of how your privacy has been violated",
            "reason": "To understand the nature of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content collects or stores personal data about individuals without consent",
          "Content is invasive of someone's privacy",
          "Content shares private information without authorization",
          "Content violates reasonable expectations of privacy"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email to dsa@pornhub.com",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Pornhub will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Decisions may be reversed if complaint demonstrates content did not violate policies or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-18T22:12:28.993Z",
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
            "description": "Contact information for support requests",
            "example": "Email address for correspondence",
            "reason": "To process and respond to content removal requests"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms and Conditions",
          "Content reported through official channels",
          "Content subject to legal obligations for removal"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete their own user contributions and audio/video information through account settings, and can deactivate their accounts to remove profile accessibility.",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
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
            "reason": "To verify account ownership for content deletion"
          }
        ],
        "removalCriteria": [
          "User-uploaded content can be deleted by account holder",
          "Account deactivation removes profile accessibility",
          "Content deletion available unless prohibited by law or court order"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub has established procedures for law enforcement requests for content removal and data disclosure, requiring valid legal documents served through specific channels.",
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
            "description": "Valid court order, subpoena, search warrant or equivalent legal document",
            "example": "Court-issued removal order",
            "reason": "Legal authority required for law enforcement requests"
          },
          {
            "description": "Proper service through legal service platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest",
            "reason": "Ensures proper legal service and processing"
          },
          {
            "description": "Mail service to Cyprus address",
            "example": "195-197 Old Nicosia-Limassol Road, Block 1 Dali Industrial Zone, Cyprus 2540",
            "reason": "Formal legal service requirement"
          }
        ],
        "removalCriteria": [
          "Valid legal document properly served",
          "Document correctly issued by valid court or legal authority",
          "Compliance with legal service requirements"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "PH-PP-SECTION-18-19",
        "summary": "Users have the right to request deletion of their personal data, including account deletion which removes all associated content and profile information.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... Note that some requests to delete certain personal information will require the deletion of your user account as the provision of user accounts are inextricably linked to the processing of certain personal information.",
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
            "example": "Username and email address used for account creation",
            "reason": "To verify identity and locate information in systems"
          },
          {
            "description": "Account access verification",
            "example": "Access to registered email account",
            "reason": "Security measure to prevent unauthorized deletion requests"
          }
        ],
        "removalCriteria": [
          "User requests deletion of personal data",
          "Identity verification completed",
          "Account deletion may be required for complete data removal"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/managemydata/requestDatadeletion?productId=10068&productDomain=pornhub.com",
      "summary": "Users can request data deletion through dedicated management portal, with support available via email for other rights including rectification and objection.",
      "steps": [
        "Access the data management portal at the provided URL",
        "Complete identity verification process",
        "Submit deletion request through the system",
        "For other rights (rectification, objection, restriction), email support@pornhub.com",
        "Platform has one month to respond to requests"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T22:12:28.993Z",
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
    "id": "pornhub-new-1758233548993-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate images (NCII), consent requirements, and content removal procedures for unauthorized intimate content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T22:12:28.993Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits the recording or distribution of intimate images without consent, including explicit sexual activity, nudity, or partial nudity.",
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
            "description": "Complete content removal request form with all relevant URL links",
            "example": "URLs to specific videos or images",
            "reason": "To identify and remove specific violating content"
          },
          {
            "description": "First-hand knowledge or victim status confirmation",
            "example": "Statement that you appear in the content without consent",
            "reason": "To verify legitimate takedown requests"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content was shared without valid written consent",
          "Content depicts explicit sexual activity or nudity without consent"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Pornhub strictly prohibits sharing explicit sexual images of someone without their valid written consent, including revenge porn.",
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
            "description": "Complete content removal request form",
            "example": "Form submission with case details",
            "reason": "To process removal request confidentially"
          },
          {
            "description": "All relevant URL links to violating content",
            "example": "Direct links to videos or images",
            "reason": "To locate and remove specific content"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content identified as revenge porn or non-consensual distribution"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-HIDDEN",
        "summary": "Pornhub prohibits videos or photos taken without valid written consent, including hidden camera, spy camera, or upskirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
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
            "description": "Content removal request form submission",
            "example": "Completed form with incident details",
            "reason": "To document the violation and process removal"
          },
          {
            "description": "URL links to the violating content",
            "example": "Direct links to hidden camera videos",
            "reason": "To identify specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Hidden camera or spy camera footage",
          "Upskirt or similar non-consensual recording"
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
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content removal request form",
            "example": "Form detailing unauthorized image sharing",
            "reason": "To process removal of non-consensual content"
          },
          {
            "description": "URLs to violating content",
            "example": "Links to unauthorized personal images",
            "reason": "To locate and remove specific content"
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
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content removal request form identifying doxing content",
            "example": "Form showing personal information exposure",
            "reason": "To document privacy violation and process removal"
          },
          {
            "description": "URLs where private information is exposed",
            "example": "Links to content containing personal details",
            "reason": "To locate and remove doxing content"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information",
          "Content contains phone numbers, emails, addresses, or full names without consent"
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content removal request form identifying deepfake content",
            "example": "Form detailing AI-manipulated content",
            "reason": "To document deepfake violation and process removal"
          },
          {
            "description": "URLs to deepfake content",
            "example": "Links to AI-generated or manipulated videos/images",
            "reason": "To locate and remove deepfake content"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated manipulations of a person's image",
          "Content uses modified images or videos to deceive viewers",
          "Any deepfake content regardless of context"
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
            "description": "Content removal request form documenting intoxicated performer content",
            "example": "Form identifying content with impaired performers",
            "reason": "To document non-consensual content and process removal"
          },
          {
            "description": "URLs to violating content",
            "example": "Links to videos showing intoxicated performers",
            "reason": "To locate and remove non-consensual content"
          }
        ],
        "removalCriteria": [
          "Content features persons appearing drugged or incapacitated in sexual acts",
          "Content shows performers whose judgment appears objectively impaired by substances"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.porn-hub.website/content-removal",
      "summary": "Users can report violations through the Content Removal Request Form, which is processed confidentially by the Trust & Safety team with swift action including content removal, fingerprinting, and account enforcement.",
      "steps": [
        "Complete and submit the Content Removal Request Form",
        "Include all relevant URL links to the violating content",
        "Trust & Safety and Moderation teams review the request",
        "Content is removed and fingerprinted to prevent re-upload",
        "Associated uploader accounts are suspended or terminated where appropriate"
      ]
    }
  },
  {
    "id": "pornhub-new-1758233548993-1",
    "reference": "PH-CONTENT-REMOVAL",
    "title": "Pornhub Content Removal Request Form",
    "summary": "Direct content removal request system for reporting non-consensual content, harassment, privacy violations, and other policy violations.",
    "url": "https://www.pornhub.com/content-removal",
    "accessTimestamp": "2025-09-18T22:12:28.993Z",
    "policies": [
      {
        "id": "ph-content-removal-nonconsensual",
        "reference": "PH-CONTENT-REMOVAL-NONCONSENSUAL",
        "summary": "Pornhub removes content that violates their Non-Consensual Content Policy, including content showing non-consensual sexual acts, content recorded or distributed without consent.",
        "quote": "You may submit requests for removal for content that: Violates our Non-Consensual Content Policy... Which option best describes the reason for reporting? The content shows non-consensual sexual acts, One or more individual(s) in the content did not consent to being recorded, One or more individual(s) in the content did not consent for the content to be distributed",
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
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact",
            "example": "user@example.com",
            "reason": "For verification and communication about the request"
          },
          {
            "description": "Legal name of the person making the request",
            "example": "John Smith",
            "reason": "To verify identity and authority to make the request"
          },
          {
            "description": "URL(s) of the content being reported",
            "example": "https://www.pornhub.com/view_video.php?viewkey=example",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Relationship to the person seen in the content",
            "example": "I am the person in the content",
            "reason": "To establish standing to request removal"
          },
          {
            "description": "Additional information about the request including timestamps or other details",
            "example": "Content was uploaded without my consent after relationship ended",
            "reason": "To provide context and help process the request"
          }
        ],
        "removalCriteria": [
          "Content shows non-consensual sexual acts",
          "Individual(s) in content did not consent to being recorded",
          "Individual(s) in content did not consent for content to be distributed",
          "Content violates Non-Consensual Content Policy"
        ]
      },
      {
        "id": "ph-content-removal-doxxing",
        "reference": "PH-CONTENT-REMOVAL-DOXXING",
        "summary": "Pornhub removes content that contains personal identifying information (doxxing) shared without consent.",
        "quote": "Which option best describes the reason for reporting? The content contains personal identifying information (\"doxxing\")",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid email address for contact",
            "example": "user@example.com",
            "reason": "For verification and communication about the request"
          },
          {
            "description": "Legal name of the person making the request",
            "example": "John Smith",
            "reason": "To verify identity and authority to make the request"
          },
          {
            "description": "URL(s) of the content containing personal information",
            "example": "https://www.pornhub.com/view_video.php?viewkey=example",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Relationship to the person whose information is being shared",
            "example": "I am the person whose information is being shared",
            "reason": "To establish standing to request removal"
          }
        ],
        "removalCriteria": [
          "Content contains personal identifying information shared without consent",
          "Content constitutes doxxing"
        ]
      },
      {
        "id": "ph-content-removal-deepfake",
        "reference": "PH-CONTENT-REMOVAL-DEEPFAKE",
        "summary": "Pornhub removes deepfakes and AI-generated or manipulated content that uses someone's likeness without their consent.",
        "quote": "Which option best describes the reason for reporting? The content is a \"deepfake\" or is AI-generated or manipulated and uses someone's likeness without their consent",
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
            "description": "Valid email address for contact",
            "example": "user@example.com",
            "reason": "For verification and communication about the request"
          },
          {
            "description": "Legal name of the person whose likeness is used",
            "example": "John Smith",
            "reason": "To verify identity and authority to make the request"
          },
          {
            "description": "URL(s) of the deepfake or AI-generated content",
            "example": "https://www.pornhub.com/view_video.php?viewkey=example",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Evidence that the content is AI-generated or manipulated",
            "example": "Technical analysis showing digital manipulation",
            "reason": "To verify the content is indeed artificially generated"
          }
        ],
        "removalCriteria": [
          "Content is a deepfake using someone's likeness without consent",
          "Content is AI-generated or manipulated without consent",
          "Content uses someone's likeness without their permission"
        ]
      },
      {
        "id": "ph-content-removal-consent-violation",
        "reference": "PH-CONTENT-REMOVAL-CONSENT",
        "summary": "Pornhub removes content that violates existing performer consent agreements or where performers wish to withdraw from consent agreements.",
        "quote": "You may submit requests for removal for content that: Violates an existing performer consent agreement, Features a performer who wishes to withdraw from an existing consent agreement... Which option best describes the reason for reporting? No permission was given for this content to be uploaded to the Pornhub, Permission was given for limited use only (e.g. long-form videos or promotional purposes), but this upload does not follow those terms, The consent provided is no longer valid or was not valid in the first place",
        "contentTypes": [
          "intimate",
          "personal"
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
            "reason": "For verification and communication about the request"
          },
          {
            "description": "Legal name of the performer",
            "example": "John Smith",
            "reason": "To verify identity and authority to make the request"
          },
          {
            "description": "URL(s) of the content violating consent agreement",
            "example": "https://www.pornhub.com/view_video.php?viewkey=example",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Details about the consent agreement violation",
            "example": "Original agreement was for limited promotional use only",
            "reason": "To understand the nature of the consent violation"
          }
        ],
        "removalCriteria": [
          "Content violates an existing performer consent agreement",
          "Performer wishes to withdraw from existing consent agreement",
          "No permission was given for content to be uploaded",
          "Permission was given for limited use only but upload violates those terms",
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
            "description": "URL(s) of the content suspected to be CSAM",
            "example": "https://www.pornhub.com/view_video.php?viewkey=example",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Description of why content is believed to be CSAM",
            "example": "Content appears to involve minors",
            "reason": "To understand the nature of the concern"
          }
        ],
        "removalCriteria": [
          "Content violates Child Sexual Abuse Material (CSAM) Policy",
          "Content may involve minors in sexual situations"
        ]
      },
      {
        "id": "ph-content-removal-immediate-disable",
        "reference": "PH-CONTENT-REMOVAL-IMMEDIATE",
        "summary": "Pornhub immediately disables reported content URLs when users confirm their removal request via email verification.",
        "quote": "Once you submit your request, we will send a confirmation email to the email address provided to verify your request. By clicking on the link in the verification email, all valid content URLs from the reported URLs section will be immediately disabled.",
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
            "description": "Content is immediately disabled upon email confirmation"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Email confirmation by clicking verification link",
            "example": "Click the link sent to your email address",
            "reason": "To verify the authenticity of the removal request"
          }
        ],
        "removalCriteria": [
          "User confirms removal request via email verification",
          "Valid content URLs are provided in the request"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
