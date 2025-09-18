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
    "accessTimestamp": "2025-09-18T22:08:54.179Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. All content must have proper consent from individuals appearing in it.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); ... the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein.",
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
            "description": "Report using the electronic form at https://pornhub.com/content-removal or the 'Report' button below each piece of content",
            "reason": "To formally notify the platform of non-consensual content"
          },
          {
            "description": "Description of how the content violates non-consensual content policies",
            "reason": "To help platform understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without consent of individuals appearing in it",
          "Uploader did not obtain proper consent and release for every individual appearing in the content"
        ]
      },
      {
        "id": "ph-privacy-violation",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits posting content that violates privacy rights or contains personally identifiable information without consent.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable; ... collect or store personal data about anyone;",
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
            "description": "Report using the content removal form or Report button",
            "reason": "To notify platform of privacy violation"
          },
          {
            "description": "Explanation of how content invades privacy or contains personal information without consent",
            "reason": "To establish the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content is invasive of another's privacy",
          "Content contains personal data collected or stored without consent",
          "Content violates reasonable expectation of privacy"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation with someone else.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person;",
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
            "description": "Report through content removal form identifying the impersonation",
            "reason": "To notify platform of impersonation violation"
          },
          {
            "description": "Evidence showing the content falsely represents you or your affiliation",
            "reason": "To establish impersonation has occurred"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely states or misrepresents affiliation with a person",
          "Account is posting content while impersonating someone else"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Provides DMCA takedown process for copyright holders.",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases; ... This Website operates a clear Copyright Policy in relation to any Content alleged to infringe the copyright of a third party. If you believe that any Content violates your copyright, please see our Copyright Policy for instructions on sending us a notice of copyright infringement.",
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
            "description": "Follow DMCA Copyright Policy procedures for copyright infringement claims",
            "reason": "Legal requirement for copyright takedown requests"
          },
          {
            "description": "Evidence of copyright ownership in the infringing content",
            "reason": "To establish legal right to request removal"
          },
          {
            "description": "Identification of specific infringing content URLs",
            "reason": "To locate and remove the infringing material"
          }
        ],
        "removalCriteria": [
          "Content contains copyrighted materials without permission",
          "Content infringes intellectual property rights of third parties",
          "Uploader does not own rights or have written permissions for the content",
          "Valid DMCA takedown notice has been submitted"
        ]
      },
      {
        "id": "ph-harassment-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, stalking, and abusive conduct that negatively affects other users.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable;",
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
            "description": "Report harassing content using the Report button or content removal form",
            "reason": "To notify platform of harassment violation"
          },
          {
            "description": "Description of the harmful, threatening, abusive, or harassing conduct",
            "reason": "To establish the harassment has occurred"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, or abusive",
          "Content constitutes harassment or stalking",
          "Content is intimidating or encouraging violence",
          "Conduct negatively affects other users' ability to use the website"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Platform may disable compromised accounts.",
        "quote": "You are fully responsible for all activities that occur under your username or password. ... You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com. ... We have the right to disable any username, password, or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason",
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
            "description": "Description of unauthorized activity or security breach",
            "reason": "To understand scope of compromise and take appropriate action"
          },
          {
            "description": "Evidence of account ownership may be required for recovery",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to account",
          "Account is being used for activities that violate Terms of Service",
          "Security breach has been reported and confirmed"
        ]
      },
      {
        "id": "ph-content-standards",
        "reference": "PH-TOS-CONTENT-STANDARDS",
        "summary": "All uploaded content must comply with comprehensive content standards including proper age verification, consent documentation, and legal compliance.",
        "quote": "You represent and warrant that with respect to all Content you will upload on this Website: ... you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website; ... for every individual appearing in your Content you have carefully ascertained and examined a valid governmental photo identification demonstrating that they are at least 18 years of age",
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
            "description": "Report content that violates content standards using content removal form",
            "reason": "To notify platform of standards violation"
          },
          {
            "description": "Explanation of how content fails to meet consent, age verification, or other standards",
            "reason": "To establish the violation of content standards"
          }
        ],
        "removalCriteria": [
          "Content uploaded without proper consent from individuals appearing in it",
          "Uploader cannot demonstrate proper age verification was conducted",
          "Content violates applicable laws or platform terms",
          "Content does not comply with required documentation standards"
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
    "accessTimestamp": "2025-09-18T22:08:54.179Z",
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
          }
        ],
        "removalCriteria": [
          "Legal obligations compliance",
          "Terms and Conditions enforcement",
          "Content moderation requirements"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete their user contributions and audio/video information through account settings, and can delete/deactivate their entire account at any time.",
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
            "description": "Account access",
            "example": "Login credentials to access account settings",
            "reason": "To manage and delete user contributions"
          }
        ],
        "removalCriteria": [
          "User request through account settings",
          "Account deletion request",
          "Unless prohibited by law or court order"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "PH-PP-SECTION-18",
        "summary": "Users have the right to request deletion/erasure of their personal data, with verification required and one month response time.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... Please note that we have one (1) month to respond to your request. Prior to processing an access or deletion request of your data, we will need to verify your identity and ensure your right to access or delete the information.",
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
            "description": "Response time for deletion requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification",
            "example": "Username, email address, and additional verification information",
            "reason": "Security measure to ensure personal data is not deleted in unauthorized way"
          }
        ],
        "removalCriteria": [
          "Valid deletion request from data subject",
          "Successful identity verification",
          "Legal right to deletion under applicable law"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub responds to valid legal process from law enforcement for disclosure of records through their legal service platform.",
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
            "description": "Valid legal process document",
            "example": "Court order, subpoena, search warrant",
            "reason": "Legal requirement for disclosure of records"
          },
          {
            "description": "Proper service through legal platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest",
            "reason": "Official channel for legal service process"
          }
        ],
        "removalCriteria": [
          "Valid court order or equivalent legal document",
          "Properly issued by valid court or legal authority",
          "Served through official legal service platform"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/managemydata/requestDatadeletion?productId=10068&productDomain=pornhub.com",
      "summary": "Users can manage their personal data through dedicated links for data access and deletion requests, with email support available for other rights.",
      "steps": [
        "Use dedicated links for data access or deletion requests",
        "Email support@pornhub.com for rectification, objection, or restriction requests",
        "Provide identity verification information as required",
        "Wait up to one month for response to request"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T22:08:54.179Z",
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
    "id": "pornhub-new-1758233334179-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Specific policy addressing non-consensual intimate imagery, content removal procedures, and reporting mechanisms for NCII violations.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T22:08:54.179Z",
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
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Content shared without valid written consent",
          "Hidden/spy camera content",
          "Up-skirt content"
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that content was shared without consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
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
        "quote": "Doxing, defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that private information was exposed",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
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
        "summary": "Pornhub prohibits any deepfakes whatsoever, including AI-generated, modified, or manipulated images or videos that deceive viewers.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Knowledge that content uses AI manipulation of someone's likeness",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "AI-generated manipulations of person's image",
          "Modified images or videos to deceive viewers",
          "Any content that misleads viewers about a person's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-consent-requirement",
        "reference": "PH-NCII-POLICY-CONSENT",
        "summary": "Pornhub requires all uploaders to affirm they have obtained and maintain valid consent and proper release documentation for all persons featured in uploaded content.",
        "quote": "We require all uploaders to affirm they have obtained and maintain valid consent and proper release documentation for all persons featured in all content uploaded to the platform.",
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
            "description": "First-hand knowledge of lack of consent",
            "example": "Personal knowledge that consent was not obtained",
            "reason": "To verify violation of consent requirements"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "Content uploaded without valid consent from featured persons",
          "Content uploaded without proper release documentation"
        ]
      },
      {
        "id": "ph-ncii-enforcement-actions",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Pornhub will review and remove infringing content, fingerprint it to block future uploads, and suspend or terminate uploader accounts.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge of policy violation",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and remove specific content"
          }
        ],
        "removalCriteria": [
          "Content identified as violating non-consensual content policy",
          "Content reported through proper channels with valid evidence"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758233334179-1",
    "reference": "PH-FTC-SETTLEMENT",
    "title": "FTC Settlement Agreement - Content Moderation Requirements",
    "summary": "Recent FTC settlement requiring enhanced content moderation, CSAM/NCM prevention programs, and mandatory reporting systems.",
    "url": "https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-takes-action-against-operators-pornhub-other-pornographic-sites-deceiving-users-about-efforts",
    "accessTimestamp": "2025-09-18T22:08:54.179Z",
    "policies": [
      {
        "id": "ftc-aylo-ncm-prevention",
        "reference": "PH-FTC-SETTLEMENT-NCM-PROGRAM",
        "summary": "Aylo must implement a comprehensive program to prevent publication or dissemination of nonconsensual material (NCM) content on its websites including Pornhub.",
        "quote": "Implement a program to prevent the publication or dissemination of CSAM and NCM content, which must include policies, procedures and technical measures to ensure that such content is not published on its websites and a process to respond to reports about CSAM and NCM content on its websites",
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
            "description": "Report identifying NCM content on Aylo websites",
            "example": "URL of specific content, description of non-consensual nature",
            "reason": "Required for Aylo's mandated response process under FTC settlement"
          }
        ],
        "removalCriteria": [
          "Content identified as nonconsensual material (NCM)",
          "Content that revictimizes individuals who were abused in its creation",
          "Content uploaded without proper age and consent verification"
        ]
      },
      {
        "id": "ftc-aylo-consent-verification",
        "reference": "PH-FTC-SETTLEMENT-CONSENT-SYSTEM",
        "summary": "Aylo must implement a system to verify that people appearing in videos are adults who have provided consent to the sexual conduct and its production and publication.",
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
            "reason": "Required for verification system mandated by FTC settlement"
          }
        ],
        "removalCriteria": [
          "Content featuring individuals who did not consent to sexual conduct",
          "Content featuring individuals who did not consent to production",
          "Content featuring individuals who did not consent to publication",
          "Content where age and consent cannot be verified"
        ]
      },
      {
        "id": "ftc-aylo-legacy-content-removal",
        "reference": "PH-FTC-SETTLEMENT-LEGACY-REMOVAL",
        "summary": "Aylo must remove all content uploaded prior to implementing their prevention program until they can verify age and consent of all participants.",
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
            "reason": "Settlement requires removal of all unverified legacy content"
          }
        ],
        "removalCriteria": [
          "Content uploaded prior to implementation of prevention program",
          "Content where participant age at time of creation cannot be verified as 18+",
          "Content where participant consent to sexual conduct cannot be verified",
          "Content where participant consent to production and publication cannot be verified"
        ]
      },
      {
        "id": "ftc-aylo-user-flagging-response",
        "reference": "PH-FTC-SETTLEMENT-FLAGGING-PROCESS",
        "summary": "Aylo previously failed to review flagged content and must now maintain a proper process to respond to reports about harmful content.",
        "quote": "Aylo failed to review videos flagged by users, did not ban uploaders of CSAM from further use of their websites, did not prevent the reupload of CSAM that Aylo had identified, and did not review all videos before they went live for CSAM or NCM",
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
            "description": "User report flagging harmful content on Aylo platforms",
            "example": "Content URL, description of violation, reason for flagging",
            "reason": "Settlement mandates proper response process to user reports"
          }
        ],
        "removalCriteria": [
          "Content flagged by users as harmful or violative",
          "Content identified as CSAM or NCM through user reports",
          "Content uploaded by previously banned users who circumvented restrictions"
        ]
      },
      {
        "id": "ftc-aylo-data-security-breach",
        "reference": "PH-FTC-SETTLEMENT-PRIVACY-SECURITY",
        "summary": "Aylo must implement comprehensive privacy and information security program after failing to protect user data including dates of birth, Social Security numbers and government-issued IDs.",
        "quote": "Aylo also told its models that they could 'trust that their personal data remains secure' yet failed to use standard security measures to protect the data. For example, Aylo did not encrypt the personal data it stored, failed to limit access to the data, and did not store the data behind a firewall",
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
            "description": "Evidence of personal data exposure or security breach involving Aylo platforms",
            "example": "Documentation of exposed personal information, evidence of data misuse",
            "reason": "Settlement requires comprehensive security program due to previous failures"
          }
        ],
        "removalCriteria": [
          "Personal data exposed due to inadequate security measures",
          "Government-issued ID information improperly stored or accessed",
          "Personal information of models or users compromised through security failures"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
