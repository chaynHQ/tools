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
    "accessTimestamp": "2025-09-18T19:49:55.713Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation.",
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
            "description": "Report using the electronic form at https://pornhub.com/content-removal",
            "reason": "To submit a formal content removal request"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific violating content directly"
          },
          {
            "description": "Description of how the content violates terms of service",
            "reason": "To help moderators understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without consent of individuals depicted"
        ]
      },
      {
        "id": "ph-privacy-violation",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits posting content that violates privacy or contains personally identifiable information without consent.",
        "quote": "collect or store personal data about anyone",
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
            "description": "Report using the content removal form or report button",
            "reason": "To initiate the privacy violation review process"
          },
          {
            "description": "Explanation of what private information is being shared without consent",
            "reason": "To identify the specific privacy violation"
          }
        ],
        "removalCriteria": [
          "Content contains personal data collected or stored without consent",
          "Content reveals private information that violates reasonable expectation of privacy",
          "Content shares personally identifiable information without authorization"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation with others.",
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
            "description": "Report the impersonating content using the content removal form",
            "reason": "To flag the impersonation violation"
          },
          {
            "description": "Evidence showing the content falsely represents you or your affiliation",
            "reason": "To demonstrate the impersonation claim"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person without authorization",
          "Content falsely states or misrepresents affiliation with a person",
          "Account is being used to impersonate someone else"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials.",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
            "description": "File a formal DMCA takedown notice following the Copyright Policy procedures",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Evidence of ownership or authorization to use the copyrighted material",
            "reason": "To establish legitimate copyright claim"
          },
          {
            "description": "Identification of the specific infringing content",
            "reason": "To locate and remove the infringing material"
          }
        ],
        "removalCriteria": [
          "Content contains copyrighted materials without proper authorization",
          "Content infringes on intellectual property rights of third parties",
          "User does not own or have written permission to use the materials",
          "Valid DMCA takedown notice has been submitted"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately.",
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
            "reason": "To report the security breach and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity or access",
            "reason": "To understand the scope of the security breach"
          },
          {
            "description": "Evidence of account ownership for recovery purposes",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Account is being used to upload content that violates platform policies",
          "Legitimate account owner has been locked out due to compromise"
        ]
      },
      {
        "id": "ph-content-consent",
        "reference": "PH-TOS-CONSENT",
        "summary": "All content must be uploaded with proper consent from individuals appearing in the content.",
        "quote": "you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website",
        "contentTypes": [
          "intimate",
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
            "description": "Report content uploaded without consent using the content removal form",
            "reason": "To flag content that lacks proper consent"
          },
          {
            "description": "Statement that you did not consent to the content being uploaded",
            "reason": "To establish lack of consent for your appearance in the content"
          }
        ],
        "removalCriteria": [
          "Content was uploaded without consent of individuals appearing in it",
          "Uploader does not have proper releases from people in the content",
          "Content violates reasonable expectation of privacy of depicted individuals"
        ]
      },
      {
        "id": "ph-age-verification",
        "reference": "PH-TOS-AGE-VERIFICATION",
        "summary": "All individuals in content must be verified as 18+ years old, with proper documentation maintained.",
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
            "description": "Report suspected underage content immediately using content removal form",
            "reason": "To flag potential child sexual abuse material"
          },
          {
            "description": "Contact legal@pornhub.com for suspected underage content",
            "reason": "For immediate escalation of serious violations"
          }
        ],
        "removalCriteria": [
          "Content may depict individuals under 18 years of age",
          "Uploader cannot provide proper age verification documentation",
          "Content appears to involve minors in any capacity"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content moderation decisions within 6 months via email to dsa@pornhub.com from their registered email address.",
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
    "accessTimestamp": "2025-09-18T19:49:55.713Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub provides content removal processes for users to report and request removal of content, with dedicated support channels and content reporting systems.",
        "quote": "We process Online Forms and Communication Data and other information as necessary to respond to and resolve any of your requests, including where this is required to ensure compliance with our legal obligations... Communications and handling of requests: We process Online Forms and Communications Data and other information as necessary to respond to and resolve any of your requests... the content reporting and moderation of content, and our internal complaint handling system.",
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
            "description": "Contact information and details of the request",
            "example": "Email address, description of content to be removed",
            "reason": "To process and respond to removal requests"
          }
        ],
        "removalCriteria": [
          "Content that violates terms and conditions",
          "Content reported through internal complaint handling system",
          "Content that requires compliance with legal obligations"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "PH-PP-SECTION-2",
        "summary": "Users may be required to provide government-issued photo identification and undergo biometric verification to confirm identity and age, processed by third-party verification services.",
        "quote": "Some users may be asked to provide identifiers (including government-issued photo identification as well as other documentation) to verify that they are over the age of majority required to have access to Pornhub and to view their contents. In such cases, this information is processed by trusted third-party age verification service providers... If you choose to register to Pornhub or if this is required for age verification purposes, we process identifiers you submit to us (including government-issued photo identification as well as other documentation) for us to verify your identity, age, and record checks.",
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
            "example": "Driver's license, passport, national ID card",
            "reason": "To verify identity and age for account access"
          },
          {
            "description": "Biometric information (face scan)",
            "example": "Live facial scan for identity verification",
            "reason": "To verify authenticity of identification documents and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Failure to provide valid identification when requested",
          "Inability to verify identity through biometric matching",
          "Detection of fraudulent or fake identification documents"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "PH-PP-SECTION-2",
        "summary": "User-uploaded content becomes publicly available, and users can delete their contributions and audio/video information through account settings.",
        "quote": "User Contributions including Audio/Video Information: We provide areas on Pornhub where you can post information about yourself and others, communicate with others, upload content (e.g., pictures, video files, etc.), and post comments or reviews of content found on Pornhub. Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
            "example": "Access to registered account",
            "reason": "To allow users to manage their own uploaded content"
          }
        ],
        "removalCriteria": [
          "User request to delete their own contributions",
          "Account deletion by user",
          "Content that violates platform terms of use"
        ]
      },
      {
        "id": "ph-pp-law-enforcement",
        "reference": "PH-PP-SECTION-12",
        "summary": "Law enforcement can request disclosure of records through valid court orders, subpoenas, or search warrants served through the designated legal service platform.",
        "quote": "The following information serves as a guideline for law enforcement officials seeking disclosure of records. You may serve us a valid court order, subpoena, search warrant or equivalent legal or official administrative document by respecting the following conditions: The document(s) is uploaded, and all required fields have been filed out adequately on our platform for Legal Service Process located at: https://legalservice.aylo.com/legal/datarequest; The document(s) you are serving is correctly issued to Aylo Freesites Ltd by a valid court of law or equivalent legal or administrative authority to us",
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
            "example": "Court-issued legal document properly served to Aylo Freesites Ltd",
            "reason": "Legal requirement for disclosure of user records"
          },
          {
            "description": "Proper service through designated platform",
            "example": "Upload through https://legalservice.aylo.com/legal/datarequest",
            "reason": "To ensure proper legal service and processing"
          }
        ],
        "removalCriteria": [
          "Valid legal order from competent court or authority",
          "Compliance with legal obligations",
          "Protection of rights and safety of users and others"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete and deactivate their accounts at any time, which removes profile accessibility and requires creating a new account for future use.",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you. If you later choose to have an account with us, you will have to sign up for a new account as none of the information you previously provided or saved within your account will have been saved.",
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
            "description": "Account ownership verification",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate account information for deletion"
          }
        ],
        "removalCriteria": [
          "User request for account deletion",
          "Verification of account ownership",
          "No legal or court order preventing deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for assistance with data requests, content removal, and exercising privacy rights, with a one-month response timeframe.",
      "steps": [
        "Contact support@pornhub.com with your request",
        "Provide necessary verification information (username, email address)",
        "Wait for response within one month",
        "Follow any additional verification steps if required"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T19:49:55.713Z",
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
    "appealProcess": {
      "url": "/support",
      "summary": "Users can contact support for assistance with content removal issues",
      "steps": [
        "Contact Support through the provided support link",
        "Provide details about your content removal request or appeal"
      ]
    }
  },
  {
    "id": "pornhub-new-1758224995713-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery (NCII), consent requirements, content removal procedures, and reporting mechanisms. Includes information about StopNCII.org integration and fingerprinting technology.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T19:49:55.713Z",
    "policies": [
      {
        "id": "ph-ncii-intimate-images",
        "reference": "PH-NCII-POLICY-INTIMATE",
        "summary": "Pornhub prohibits the recording or distribution of intimate images without consent, including revenge porn and non-consensual sharing of explicit content.",
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
            "description": "URL links to the content in question",
            "example": "Direct links to videos or images on the platform",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "First-hand knowledge or victim status confirmation",
            "example": "Statement that you are the victim or have direct knowledge of the violation",
            "reason": "To verify legitimacy of the removal request"
          }
        ],
        "removalCriteria": [
          "Content was taken without valid written consent",
          "Content was shared without valid written consent",
          "Content depicts explicit sexual activity or nudity without consent"
        ]
      },
      {
        "id": "ph-ncii-hidden-camera",
        "reference": "PH-NCII-POLICY-SURVEILLANCE",
        "summary": "Pornhub prohibits videos or photos taken without valid written consent, including hidden camera content, spy camera content, and up-skirt content.",
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
            "description": "URL links to the violating content",
            "example": "Direct links to the hidden camera or spy content",
            "reason": "To identify the specific surveillance content for removal"
          }
        ],
        "removalCriteria": [
          "Content was recorded without valid written consent",
          "Content involves hidden or spy cameras",
          "Content includes up-skirt or similar non-consensual recording"
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
            "description": "URL links to the non-consensual content",
            "example": "Links to personal photos shared without permission",
            "reason": "To locate and verify the unauthorized content"
          }
        ],
        "removalCriteria": [
          "Images were shared without valid written consent",
          "Content depicts the person without their permission"
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL links to content containing private information",
            "example": "Links to videos or profiles displaying personal contact information",
            "reason": "To identify where private information is being exposed"
          }
        ],
        "removalCriteria": [
          "Content exposes phone numbers without consent",
          "Content reveals email addresses without permission",
          "Content displays home addresses or full names without authorization"
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL links to the deepfake content",
            "example": "Links to AI-generated or manipulated videos/images",
            "reason": "To identify and verify the artificially generated content"
          },
          {
            "description": "Evidence that content is artificially generated or manipulated",
            "example": "Technical analysis or clear indicators of digital manipulation",
            "reason": "To confirm the content violates deepfake policy"
          }
        ],
        "removalCriteria": [
          "Content is AI-generated to depict a person without consent",
          "Content involves digital manipulation to deceive viewers",
          "Content falsely represents someone's actions or speech"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "PH-NCII-POLICY-COERCION",
        "summary": "Pornhub prohibits content featuring or promoting non-consensual sexual acts, including depictions of rape, sexual assault, or coerced sexual activity.",
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
            "description": "URL links to content depicting non-consensual acts",
            "example": "Links to videos showing forced or coerced sexual activity",
            "reason": "To identify content that violates consent policies"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content shows coerced or forced sexual acts",
          "Content promotes or features rape or sexual assault"
        ]
      },
      {
        "id": "ph-ncii-intoxicated-content",
        "reference": "PH-NCII-POLICY-INTOXICATION",
        "summary": "Pornhub prohibits content featuring persons appearing drugged, incapacitated, or intoxicated involved in sexual acts where judgment appears objectively impaired.",
        "quote": "Persons appearing drugged, incapacitated, or intoxicated involved in sexual acts; Intoxicated (including pretending to be) means a state induced by alcohol or drugs, whether legal, illicit, or recreational as determined by Pornhub in its sole discretion, such that a performer's judgment appears to the reasonable observer as objectively impaired.",
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
            "description": "URL links to content showing intoxicated individuals",
            "example": "Links to videos where performers appear impaired or incapacitated",
            "reason": "To identify content where consent cannot be properly given"
          }
        ],
        "removalCriteria": [
          "Performers appear drugged or incapacitated during sexual acts",
          "Performers show signs of impaired judgment due to substances",
          "Content involves individuals who cannot properly consent due to intoxication"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
