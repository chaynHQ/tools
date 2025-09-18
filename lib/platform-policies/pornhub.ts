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
    "accessTimestamp": "2025-09-18T18:29:01.417Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. All content must have proper consent from appearing individuals.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); ... the Website does not permit any form of revenge porn, blackmail, or intimidation",
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
            "description": "Report using the Content Removal Request form at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content violates non-consensual content policy",
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
        "id": "ph-csam-policy",
        "reference": "PH-TOS-CSAM",
        "summary": "Zero tolerance policy for child sexual abuse material. All individuals in content must be verified as 18+ years old with proper documentation.",
        "quote": "We have a zero-tolerance policy towards the solicitation, access, generation, distribution, or storage of any Content that involves the depiction of children or features Class 1A Material in any capacity. All child sexual exploitation/abuse material that we identify or are made aware of will result in the immediate removal of the Content in question as well as the immediate removal of its uploader from this Website.",
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
          "removal": {
            "value": 0,
            "unit": "immediate",
            "description": "Immediate removal upon identification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report using Anonymous Content Removal Request at https://www.pornhub.com/anonymous-content-removal",
            "reason": "To anonymously report suspected CSAM violations"
          },
          {
            "description": "Contact legal@pornhub.com for suspected underage content",
            "reason": "Direct reporting channel for serious violations"
          },
          {
            "description": "URL(s) of suspected violating content",
            "reason": "To identify content for immediate investigation and removal"
          }
        ],
        "removalCriteria": [
          "Content depicts any person under 18 years of age",
          "Content involves child sexual exploitation or abuse",
          "Uploader cannot provide valid age verification documentation for all individuals in content",
          "Content features individuals who appear to be under 18 years old"
        ]
      },
      {
        "id": "ph-privacy-violations",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits collection or storage of personal data and unauthorized disclosure of personally identifiable information.",
        "quote": "collect or store personal data about anyone; ... This Website will not disclose any personally identifiable information they collects or obtains except: (i) as described in these Terms of Service or our Privacy Notice; (ii) after obtaining your permission to a specific use or disclosure",
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
            "description": "Report through Content Removal Request form",
            "reason": "To report privacy violations and unauthorized personal information disclosure"
          },
          {
            "description": "URL(s) of content containing personal information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of what personal information was disclosed without consent",
            "reason": "To understand the scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content reveals personal data without consent",
          "Content contains personally identifiable information shared without permission",
          "User collected or stored personal data about others through the platform"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation. Screen names must not violate others' rights.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person; ... You will choose your own screen name, which must be unique to you, not offensive to others, and not in violation of another's copyright or trademark.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through Content Removal Request form",
            "reason": "To report impersonation violations"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the impersonating material"
          },
          {
            "description": "Evidence that you are the person being impersonated",
            "reason": "To verify legitimate ownership of identity"
          },
          {
            "description": "Description of how the account or content impersonates you",
            "reason": "To understand the nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Account falsely represents affiliation with another person",
          "Screen name violates another's copyright or trademark",
          "Content misrepresents the uploader's identity or affiliation"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Operates under DMCA takedown procedures.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights. ... post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
            "description": "File formal DMCA Takedown Notice through the Copyright Policy process",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of original ownership or authorization to use the content",
            "reason": "To establish copyright ownership or licensing rights"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          },
          {
            "description": "Written evidence of ownership or right to use the material",
            "reason": "Platform may require proof of ownership within 5 working days"
          }
        ],
        "removalCriteria": [
          "Content infringes on another person's copyright",
          "Content uses copyrighted materials without proper permissions or releases",
          "Content violates intellectual property rights",
          "Uploader cannot provide written evidence of ownership when requested"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Platform can disable accounts for Terms violations.",
        "quote": "You are fully responsible for all activities that occur under your username or password. ... You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com. ... We have the right to disable any username, password, or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Service.",
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
          "Account is being used to upload content that violates platform policies",
          "Security breach has compromised account integrity",
          "Account activities violate Terms of Service"
        ]
      },
      {
        "id": "ph-harassment-intimidation",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, intimidation, and abusive conduct that negatively affects other users' ability to use the platform.",
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
            "description": "Report through Content Removal Request form or flag content using report buttons",
            "reason": "To report harassing or intimidating behavior"
          },
          {
            "description": "URL(s) of harassing content or user profiles",
            "reason": "To identify the source of harassment"
          },
          {
            "description": "Description of the harassing, threatening, or intimidating behavior",
            "reason": "To understand the nature and severity of the harassment"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, or abusive toward other users",
          "Content involves harassment, stalking, or intimidation",
          "Content negatively affects other users' ability to use the platform",
          "Content is invasive of another's privacy in a harassing manner"
        ]
      },
      {
        "id": "ph-violent-content",
        "reference": "PH-TOS-VIOLENCE",
        "summary": "Prohibits content depicting violence, torture, death, or encouraging violence against people or animals.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
        "contentTypes": [
          "intimate",
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
            "description": "Report through Content Removal Request form",
            "reason": "To report violent or harmful content"
          },
          {
            "description": "URL(s) of violent content",
            "reason": "To identify the violent material for removal"
          },
          {
            "description": "Description of the violent content",
            "reason": "To understand the nature of the violence depicted"
          }
        ],
        "removalCriteria": [
          "Content depicts snuff, torture, or death",
          "Content shows violence against people or animals",
          "Content encourages violence toward people or animals",
          "Content contains violent material that violates platform standards"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email or webform. Platform handles complaints in a timely, objective manner and may reverse decisions if justified.",
      "steps": [
        "Submit complaint within 6 months of notification of the decision",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe the complaint is justified",
        "Platform will review complaint in timely, non-discriminatory, diligent, and objective manner",
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
    "accessTimestamp": "2025-09-18T18:29:01.417Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub provides content removal processes for users to report and request removal of content, with dedicated support channels and forms available.",
        "quote": "We may disclose all categories of personal information we process to a buyer or other successor in the event of a merger, acquisition or sale or transfer of some or all our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding. Such transactions may be in our legitimate interest, particularly our interest in making decisions that enable our business to develop. To comply with the law or protect our rights or the rights of third parties: We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests enforce applicable Terms & Conditions, including prevention of potential violations thereof. This also includes our Trust and Safety initiative, in the scope of which we may disclose some information to several recipients. You can find out more about this here.",
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
            "description": "Contact information and details about the content requiring removal",
            "example": "Email address, description of content",
            "reason": "To identify and process removal requests"
          }
        ],
        "removalCriteria": [
          "Content that violates applicable Terms & Conditions",
          "Content reported through Trust and Safety initiative",
          "Content subject to legal requirements or court orders"
        ]
      },
      {
        "id": "ph-pp-dmca-takedown",
        "reference": "PH-PP-FOOTER",
        "summary": "Pornhub provides DMCA takedown processes for copyright infringement claims, with dedicated forms and procedures for content removal requests.",
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
          "Content uploaded without permission of copyright holder"
        ]
      },
      {
        "id": "ph-pp-user-contributions-public",
        "reference": "PH-PP-SECTION-2",
        "summary": "User contributions including audio/video content become publicly available when posted, and users can delete their contributions through account settings.",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit. You may use your account settings to delete your user contributions and audio/video information.",
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
            "description": "Account access to delete own contributions",
            "example": "Login credentials to user account",
            "reason": "Users can only delete their own uploaded content"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own contributions",
          "Content violates terms of service"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete and deactivate their accounts at any time, which removes profile accessibility and associated content unless legally prohibited.",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you. If you later choose to have an account with us, you will have to sign up for a new account as none of the information you previously provided or saved within your account will have been saved.",
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
            "description": "Account verification and deletion request",
            "example": "Account login credentials or verification",
            "reason": "To verify account ownership before deletion"
          }
        ],
        "removalCriteria": [
          "User requests account deletion",
          "No legal or court order preventing deletion"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub responds to valid legal process from law enforcement including court orders, subpoenas, and search warrants through their legal service platform.",
        "quote": "The following information serves as a guideline for law enforcement officials seeking disclosure of records. You may serve us a valid court order, subpoena, search warrant or equivalent legal or official administrative document by respecting the following conditions: The document(s) is uploaded, and all required fields have been filed out adequately on our platform for Legal Service Process located at: https://legalservice.aylo.com/legal/datarequest",
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
            "example": "Court-issued subpoena, search warrant",
            "reason": "Legal requirement for disclosure of user information"
          },
          {
            "description": "Proper service through legal service platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest",
            "reason": "Ensures proper legal process is followed"
          }
        ],
        "removalCriteria": [
          "Valid legal process requiring disclosure or removal",
          "Court order mandating content removal",
          "Law enforcement request with proper legal authority"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for assistance with content removal, account issues, and privacy-related requests",
      "steps": [
        "Contact support@pornhub.com with detailed request",
        "Provide necessary verification information",
        "Wait for response and follow additional instructions if needed"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T18:29:01.417Z",
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
    "id": "pornhub-new-1758220141417-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery (NCII), content removal procedures, and reporting mechanisms for revenge porn and harassment.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T18:29:01.417Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits the recording or distribution of intimate images (photos and videos depicting explicit sexual activity, nudity or partial nudity) without someone's consent.",
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
            "reason": "To establish standing and verify the claim"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content appears to have been taken without consent",
          "Content was shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-HIDDEN",
        "summary": "Pornhub prohibits videos or photos of any person taken without valid written consent, including hidden/spy camera content and up-skirt content.",
        "quote": "Videos or photos of any person, whether in a public or private setting, without that person's valid written consent (such as hidden/spy camera content, or up-skirt content)",
        "contentTypes": [
          "intimate",
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
            "example": "Personal knowledge that content was recorded without consent",
            "reason": "To establish standing and verify the claim"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content was recorded without valid written consent",
          "Content was taken in public or private setting without consent",
          "Content includes hidden camera or spy camera recordings",
          "Content includes up-skirt recordings"
        ]
      },
      {
        "id": "ph-ncii-revenge-porn",
        "reference": "PH-NCII-POLICY-REVENGE",
        "summary": "Pornhub prohibits sharing explicit sexual images of someone without their valid written consent, including revenge porn and non-consensual distribution of intimate images.",
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
            "example": "Personal knowledge that intimate images were shared without consent",
            "reason": "To establish standing and verify the claim"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Explicit sexual images shared without valid written consent",
          "Content constitutes non-consensual distribution of intimate images",
          "Content constitutes revenge porn"
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
            "example": "Personal knowledge that images were shared without consent",
            "reason": "To establish standing and verify the claim"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Non-sexually explicit images shared without valid written consent"
        ]
      },
      {
        "id": "ph-ncii-doxing",
        "reference": "PH-NCII-POLICY-DOXING",
        "summary": "Pornhub prohibits doxing, defined as exposing private and identifying information about individuals including phone numbers, email addresses, physical addresses, or full names.",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that private information was exposed without consent",
            "reason": "To establish standing and verify the claim"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content exposes private identifying information without consent",
          "Content includes phone numbers, email addresses, physical addresses, or full names"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Pornhub prohibits any deepfakes whatsoever, including AI-generated, modified, or other manipulations of a person's image to deceive viewers.",
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
            "example": "Personal knowledge that content uses AI manipulation or deepfake technology",
            "reason": "To establish standing and verify the claim"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content uses AI-generated manipulation of person's image",
          "Content uses modified or manipulated images to deceive viewers",
          "Content presents deepfake technology in any form"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "PH-NCII-POLICY-ACTS",
        "summary": "Pornhub prohibits content featuring or promoting non-consensual acts, whether real or simulated, including depictions of rape, sexual assault, or coerced sexual acts.",
        "quote": "Content featuring or promoting non-consensual acts, real or simulated, is also prohibited. Depictions of non-consensual sexual activity, including coerced or forced sexual acts, rape, or sexual assault",
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
            "description": "First-hand knowledge of content violation",
            "example": "Personal knowledge that content depicts non-consensual acts",
            "reason": "To establish standing and verify the claim"
          },
          {
            "description": "All relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content features or promotes non-consensual acts",
          "Content depicts coerced or forced sexual acts",
          "Content depicts rape or sexual assault",
          "Content shows persons appearing drugged, incapacitated, or intoxicated in sexual acts"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
