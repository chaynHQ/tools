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
    "accessTimestamp": "2025-09-18T19:10:17.095Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must be removed if uploaded without consent of depicted individuals.",
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
            "reason": "To formally report non-consensual content for removal"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content was uploaded without consent",
            "reason": "To establish the non-consensual nature of the content"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn uploaded without subject's consent",
          "Content involves blackmail or intimidation",
          "Content was uploaded without consent of all depicted individuals"
        ]
      },
      {
        "id": "ph-consent-verification",
        "reference": "PH-TOS-CONSENT",
        "summary": "Requires uploaders to obtain consent and release for every individual appearing in content, with verification that all individuals were 18+ at time of production.",
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
            "description": "Evidence that you appear in the content or have rights to the content",
            "reason": "To establish standing to request removal"
          },
          {
            "description": "Statement that consent was not provided for uploading",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "Use the Content Removal Request Form",
            "reason": "To formally request removal through proper channels"
          }
        ],
        "removalCriteria": [
          "Content was uploaded without obtaining proper consent from depicted individuals",
          "Uploader cannot provide valid consent documentation when requested",
          "Content violates the consent and release requirements"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits posting content that impersonates another person or falsely represents affiliation with someone.",
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
            "description": "Evidence of your identity (may require government-issued ID verification)",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "URL(s) of the impersonating content or profile",
            "reason": "To identify the specific impersonating material"
          },
          {
            "description": "Description of how the content misrepresents you",
            "reason": "To understand the nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Content falsely impersonates another person",
          "Profile or content misrepresents affiliation with someone",
          "Content is uploaded under false identity or pretenses"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY-BREACH",
        "summary": "Users must immediately report unauthorized access or security breaches. Platform may take action to secure compromised accounts and remove unauthorized content.",
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
            "description": "Contact support@pornhub.com immediately upon discovering breach",
            "reason": "To report the security breach and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity or access",
            "reason": "To understand the scope of the security breach"
          },
          {
            "description": "Evidence of account ownership (username, email, etc.)",
            "reason": "To verify legitimate ownership of the compromised account"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Content uploaded without authorization due to account compromise",
          "Security breach that resulted in unauthorized content posting"
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
            "description": "File a formal DMCA takedown notice following the Copyright Policy",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of copyright ownership in the content",
            "reason": "To establish legal rights to the copyrighted material"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyright or intellectual property rights",
          "Content was used without permission from the copyright holder",
          "Valid DMCA takedown notice is received"
        ]
      },
      {
        "id": "ph-prohibited-content",
        "reference": "PH-TOS-PROHIBITED",
        "summary": "Comprehensive prohibition of various harmful content types including fraudulent, defamatory, harassing, and privacy-violating content.",
        "quote": "post any Content that is obscene, illegal, unlawful, fraudulent, defamatory, libelous, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law, or is otherwise inappropriate",
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
            "description": "Use the Content Removal Request Form or Report button",
            "reason": "To formally report prohibited content"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific prohibited content"
          },
          {
            "description": "Description of how the content violates the prohibited content policy",
            "reason": "To understand the nature of the policy violation"
          }
        ],
        "removalCriteria": [
          "Content is fraudulent, defamatory, or harassing",
          "Content violates privacy or contains unauthorized personal information",
          "Content encourages illegal activity or violates applicable laws",
          "Content is otherwise inappropriate or harmful"
        ]
      },
      {
        "id": "ph-records-compliance",
        "reference": "PH-TOS-2257",
        "summary": "Requires compliance with age verification and record-keeping laws. Platform may request documentation to verify age compliance.",
        "quote": "Upon our request, you shall promptly deliver us legible copies (as may be lawfully redacted), of valid (as of the date of production of the Content) recognizable governmental photo identifications for any or all individuals appearing in any or all of your Content",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": 5,
            "unit": "working days",
            "description": "Timeframe to provide requested documentation"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report concerns about age verification compliance",
            "reason": "To trigger platform investigation of potential violations"
          },
          {
            "description": "Evidence suggesting individuals in content may be underage",
            "reason": "To substantiate age verification concerns"
          }
        ],
        "removalCriteria": [
          "Uploader fails to provide age verification documentation when requested",
          "Content appears to involve individuals under 18 years of age",
          "Failure to comply with record-keeping requirements under 18 U.S.C. § 2257"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email to dsa@pornhub.com",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe the complaint is justified",
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
    "accessTimestamp": "2025-09-18T19:10:17.095Z",
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
            "example": "Email address, description of content, location of content",
            "reason": "To identify and process the removal request"
          }
        ],
        "removalCriteria": [
          "Content that violates applicable Terms & Conditions",
          "Content reported through Trust and Safety initiative",
          "Content subject to legal obligations or court orders"
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
            "description": "DMCA-compliant takedown notice with required legal elements",
            "example": "Copyright ownership proof, identification of infringing content, contact information",
            "reason": "Legal requirement for DMCA takedown processing"
          }
        ],
        "removalCriteria": [
          "Content that infringes copyright",
          "Content uploaded without authorization from copyright holder"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "PH-PP-SECTION-2",
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
            "description": "Account access and authentication",
            "example": "Login credentials, account verification",
            "reason": "To verify account ownership before allowing content deletion"
          }
        ],
        "removalCriteria": [
          "User-uploaded content that the account holder wants removed",
          "Account deactivation request from verified account holder"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-12",
        "summary": "Pornhub responds to valid legal process from law enforcement for disclosure of records, requiring proper court orders, subpoenas, or search warrants served through designated channels.",
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
            "example": "Court-issued subpoena, search warrant with proper jurisdiction",
            "reason": "Legal requirement for law enforcement data requests"
          },
          {
            "description": "Proper service through designated legal service platform",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest with required fields completed",
            "reason": "To ensure proper legal service and processing"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal process",
          "Content involved in criminal investigations with proper legal authority",
          "Content requiring disclosure under court order or legal obligation"
        ]
      },
      {
        "id": "ph-pp-platform-safety",
        "reference": "PH-PP-SECTION-4",
        "summary": "Pornhub processes user information to promote safety and security on the platform, providing safe and secure products while detecting and preventing harmful activities.",
        "quote": "Platform Safety: To promote safety and security on Pornhub. We use the information we collect to help protect Pornhub users from harm and provide safe, secure product.",
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
            "description": "Information demonstrating harm or safety concerns",
            "example": "Evidence of harassment, threats, or harmful content",
            "reason": "To assess and respond to platform safety issues"
          }
        ],
        "removalCriteria": [
          "Content that poses harm to users",
          "Content that compromises platform security",
          "Content involved in harmful activities or harassment"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T19:10:17.095Z",
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
    "id": "pornhub-new-1758222617095-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery (NCII), content removal procedures, and consent requirements for all uploaded content.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T19:10:17.095Z",
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
          "Content uploaded without valid written consent of persons featured",
          "Intimate images shared without consent of the person depicted",
          "Content identified as violation of non-consensual content policy"
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
            "example": "Documentation showing lack of permission for recording",
            "reason": "To verify non-consensual recording"
          }
        ],
        "removalCriteria": [
          "Content recorded in public or private settings without valid written consent",
          "Hidden camera or spy camera content",
          "Up-skirt or voyeuristic content"
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of private identifying information being exposed",
            "example": "Screenshots showing personal information being shared",
            "reason": "To verify doxing violation"
          }
        ],
        "removalCriteria": [
          "Exposure of private identifying information",
          "Sharing of phone numbers, email addresses, or physical addresses",
          "Publication of full names without consent"
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
            "description": "Evidence that content is AI-generated or digitally manipulated",
            "example": "Technical analysis showing digital manipulation",
            "reason": "To verify deepfake content"
          }
        ],
        "removalCriteria": [
          "AI-generated content depicting real persons",
          "Digitally modified images or videos designed to deceive",
          "Any manipulated content that misleads viewers about a person's actions or speech"
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
            "description": "Evidence that persons in content appear incapacitated or unable to consent",
            "example": "Visual evidence of impairment or incapacitation",
            "reason": "To verify lack of capacity to consent"
          }
        ],
        "removalCriteria": [
          "Content featuring drugged or incapacitated persons in sexual acts",
          "Sexual content involving visibly intoxicated individuals",
          "Content where performer's judgment appears objectively impaired"
        ]
      },
      {
        "id": "ph-ncii-enforcement",
        "reference": "PH-NCII-POLICY-ENFORCEMENT",
        "summary": "Pornhub commits to swift review and removal of violating content, fingerprinting to prevent re-uploads, and account suspension or termination for violators.",
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
          "response": {
            "value": null,
            "unit": null,
            "description": "Swift response committed but no specific timeframe given"
          },
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal promised"
          }
        },
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
          "Content verified as non-consensual through review process"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
