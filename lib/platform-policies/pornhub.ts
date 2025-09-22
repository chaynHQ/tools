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
    "accessTimestamp": "2025-09-22T11:25:35.554Z",
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
            "description": "Report using the Content Removal Request form at https://pornhub.com/content-removal",
            "reason": "To initiate the removal process for non-consensual content"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content violates the non-consensual content policy",
            "reason": "To understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was posted without consent of individuals appearing in it",
          "Content violates reasonable expectation of privacy"
        ]
      },
      {
        "id": "ph-csam-policy",
        "reference": "PH-TOS-CSAM",
        "summary": "Zero tolerance policy for child sexual abuse material. All suspected CSAM is immediately removed and reported to authorities.",
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
            "description": "Anonymous report via https://www.pornhub.com/anonymous-content-removal",
            "reason": "To report suspected CSAM anonymously"
          },
          {
            "description": "Contact legal@pornhub.com for suspected child exploitation",
            "reason": "Direct reporting channel for serious violations"
          }
        ],
        "removalCriteria": [
          "Content depicts individuals under 18 years of age",
          "Content involves child sexual exploitation or abuse",
          "Content appears to involve minors in sexual situations"
        ]
      },
      {
        "id": "ph-copyright-infringement",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. DMCA takedown process available for copyright holders.",
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
            "description": "Evidence of copyright ownership",
            "reason": "To establish legal right to request removal"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyright of the complainant",
          "Content was used without permission from copyright holder",
          "Content violates intellectual property rights"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonation of other persons and falsely representing affiliation with others.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
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
            "description": "Report via Content Removal Request form",
            "reason": "To report impersonation violations"
          },
          {
            "description": "Evidence that the account is impersonating you or someone else",
            "reason": "To verify the impersonation claim"
          },
          {
            "description": "URL of the impersonating account or content",
            "reason": "To identify the specific impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person",
          "Content falsely represents affiliation with someone",
          "Profile uses someone else's identity without permission"
        ]
      },
      {
        "id": "ph-harassment-intimidation",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, threats, intimidation, and abusive conduct toward other users.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
        "contentTypes": [
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
            "description": "Report using the Content Removal Request form",
            "reason": "To report harassment and threatening behavior"
          },
          {
            "description": "Evidence of the harassing or threatening content",
            "reason": "To document the harassment for review"
          },
          {
            "description": "Description of how the content constitutes harassment or intimidation",
            "reason": "To understand the nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content is harmful, threatening, or abusive",
          "Content constitutes harassment or stalking",
          "Content is intimidating or encourages violence",
          "Content invades another person's privacy",
          "Content negatively affects other users' ability to use the platform"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Unauthorized use may result in liability.",
        "quote": "You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com. ... you may be liable for the losses of this Website or others due to such unauthorized use.",
        "contentTypes": [
          "intimate",
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
            "description": "Contact support@pornhub.com immediately upon discovering unauthorized access",
            "reason": "To report security breaches and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity",
            "reason": "To understand the scope of the security breach"
          },
          {
            "description": "Evidence of account ownership",
            "reason": "To verify legitimate ownership before restoring access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to account",
          "Account is being used without owner's permission",
          "Unauthorized content has been uploaded to compromised account"
        ]
      },
      {
        "id": "ph-violent-content",
        "reference": "PH-TOS-VIOLENCE",
        "summary": "Prohibits violent content including snuff, torture, death, and content encouraging violence.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report via Content Removal Request form",
            "reason": "To report violent or harmful content"
          },
          {
            "description": "URL(s) of the violent content",
            "reason": "To identify the specific violent content"
          },
          {
            "description": "Description of the violent nature of the content",
            "reason": "To understand how the content violates the violence policy"
          }
        ],
        "removalCriteria": [
          "Content depicts snuff, torture, or death",
          "Content shows violence or encourages violence",
          "Content is harmful or dangerous to viewers"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users may lodge complaints against content removal decisions within 6 months via dsa@pornhub.com. Complaints are handled in a timely, non-discriminatory manner and decisions may be reversed if justified.",
      "steps": [
        "Submit complaint within 6 months of the decision notification",
        "Email dsa@pornhub.com from the email associated with your account",
        "Include as much information as possible to allow investigation",
        "Provide explanation of why you believe the complaint is justified",
        "Wait for review - complaints are handled in a timely, objective manner"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-22T11:25:35.554Z",
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
            "description": "Content report submission through available channels",
            "example": "Using content removal form or support contact",
            "reason": "Required for content moderation and complaint handling obligations"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms and Conditions",
          "Content reported through proper channels",
          "Content that requires compliance with legal obligations"
        ]
      },
      {
        "id": "ph-pp-law-enforcement",
        "reference": "PH-PP-SECTION-12",
        "summary": "Law enforcement can request disclosure of records through valid court orders, subpoenas, or search warrants served through the legal service platform.",
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
            "example": "Court-issued subpoena for user records",
            "reason": "Legal requirement for disclosure of user information"
          },
          {
            "description": "Document correctly issued to Aylo Freesites Ltd by valid court or legal authority",
            "example": "Properly addressed legal document",
            "reason": "Ensures proper legal jurisdiction and authority"
          },
          {
            "description": "Document served through legal service platform and mailed to Cyprus address",
            "example": "Upload to https://legalservice.aylo.com/legal/datarequest and mail to 195-197 Old Nicosia-Limassol Road, Block 1 Dali Industrial Zone, Cyprus 2540",
            "reason": "Required service process for legal requests"
          }
        ],
        "removalCriteria": [
          "Valid legal process served properly",
          "Document meets all specified requirements",
          "Request falls within legal obligations for disclosure"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "PH-PP-SECTION-8",
        "summary": "Registered users can delete their user contributions and audio/video information through account settings, and can delete/deactivate their entire account.",
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
            "example": "Username and password for registered account",
            "reason": "Required to access account settings for content deletion"
          }
        ],
        "removalCriteria": [
          "User has registered account with platform",
          "Content was uploaded by the requesting user",
          "No legal or court order preventing deletion"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "PH-PP-SECTION-18-19",
        "summary": "Users have the right to request deletion of their personal data, with verification required and dedicated links provided for data management requests.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data... Registered Users may request a copy of their personal data or request the deletion of their personal data via the links below.",
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
            "reason": "Required to verify identity and locate information in systems"
          },
          {
            "description": "Access verification to account and/or email",
            "example": "Demonstration of access to registered email account",
            "reason": "Security measure to prevent unauthorized data deletion"
          }
        ],
        "removalCriteria": [
          "User identity successfully verified",
          "Request submitted through proper channels",
          "No legal obligations preventing deletion"
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
    "accessTimestamp": "2025-09-22T11:25:35.554Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758540335554-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery (NCII), revenge porn, and content removal procedures. Includes reporting mechanisms and consent verification requirements.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-22T11:25:35.554Z",
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
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid written consent documentation",
            "example": "Signed release forms or consent agreements",
            "reason": "Platform requires uploaders to affirm they have obtained and maintain valid consent for all persons featured"
          },
          {
            "description": "URL links to the content in question",
            "example": "Direct links to specific videos or images",
            "reason": "Required for content identification and removal"
          }
        ],
        "removalCriteria": [
          "Content uploaded without valid written consent of featured persons",
          "Intimate images shared without consent (revenge porn)",
          "Hidden or spy camera content",
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
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid written consent documentation",
            "example": "Signed consent agreements",
            "reason": "Required to demonstrate lack of consent for image sharing"
          },
          {
            "description": "URL links to the content in question",
            "example": "Direct links to specific content",
            "reason": "Required for content identification and removal"
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
        "quote": "Doxing, defined as exposing private and identifying information about a particular individual, including phone number, e-mail, address, or full name.",
        "contentTypes": [
          "private",
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
            "description": "Identification of private information being exposed",
            "example": "Screenshots showing personal details like phone numbers, addresses, or emails",
            "reason": "Required to identify doxing violations"
          },
          {
            "description": "URL links to the content in question",
            "example": "Direct links to content containing private information",
            "reason": "Required for content identification and removal"
          }
        ],
        "removalCriteria": [
          "Content exposing phone numbers without consent",
          "Content exposing email addresses without consent",
          "Content exposing physical addresses without consent",
          "Content exposing full names without consent"
        ]
      },
      {
        "id": "ph-ncii-deepfakes",
        "reference": "PH-NCII-POLICY-DEEPFAKES",
        "summary": "Pornhub prohibits any deepfakes whatsoever - AI-generated, modified, or manipulated images or videos that deceive viewers about a person's actions or speech.",
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
            "description": "Evidence of AI manipulation or image modification",
            "example": "Technical analysis showing digital manipulation",
            "reason": "Required to identify deepfake content"
          },
          {
            "description": "URL links to the deepfake content",
            "example": "Direct links to manipulated videos or images",
            "reason": "Required for content identification and removal"
          }
        ],
        "removalCriteria": [
          "AI-generated manipulated images or videos",
          "Modified content designed to deceive viewers",
          "Any manipulated content presenting false actions or speech"
        ]
      },
      {
        "id": "ph-ncii-non-consensual-acts",
        "reference": "PH-NCII-POLICY-NONCONSENSUAL-ACTS",
        "summary": "Pornhub prohibits content featuring or promoting non-consensual sexual acts, including depictions of rape, sexual assault, or coerced sexual activity.",
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
            "description": "Evidence of non-consensual activity depiction",
            "example": "Content showing forced or coerced sexual acts",
            "reason": "Required to identify violations of consent policies"
          },
          {
            "description": "URL links to the violating content",
            "example": "Direct links to content depicting non-consensual acts",
            "reason": "Required for content identification and removal"
          }
        ],
        "removalCriteria": [
          "Depictions of rape or sexual assault",
          "Content showing coerced or forced sexual acts",
          "Content featuring persons appearing drugged or incapacitated in sexual acts",
          "Real or simulated non-consensual sexual activity"
        ]
      },
      {
        "id": "ph-ncii-expeditious-removal",
        "reference": "PH-NCII-POLICY-REMOVAL",
        "summary": "Pornhub commits to expeditious removal of reported non-consensual content through their Content Removal Request Form with confidential handling.",
        "quote": "Please include all relevant URL links to the content in question and we will address your request confidentially and remove the content expeditiously.",
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
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal promised but no specific timeframe given"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Complete Content Removal Request Form",
            "example": "Submission through official form at porn-hub.website/content-removal",
            "reason": "Required process for reporting violations"
          },
          {
            "description": "All relevant URL links to content in question",
            "example": "Direct links to specific violating content",
            "reason": "Required for content identification and removal"
          },
          {
            "description": "First-hand knowledge or victim status",
            "example": "Personal involvement or direct knowledge of violation",
            "reason": "Prioritized for victims and those with direct knowledge"
          }
        ],
        "removalCriteria": [
          "Content identified as violating Non-Consensual Content Policy",
          "Content reported through proper channels with sufficient evidence",
          "Content that violates Terms of Service regarding consent"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758540335554-1",
    "reference": "PH-CONTENT-REMOVAL-FORM",
    "title": "Pornhub Content Removal Request Form",
    "summary": "Direct access to Pornhub's content removal request system for reporting non-consensual content, harassment, privacy violations, and impersonation.",
    "url": "https://www.pornhub.com/content-removal",
    "accessTimestamp": "2025-09-22T11:25:35.554Z",
    "policies": [
      {
        "id": "ph-cr-non-consensual",
        "reference": "PH-CONTENT-REMOVAL-FORM-NCII",
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
            "description": "Valid email address for verification",
            "example": "user@example.com",
            "reason": "To verify the request and send confirmation"
          },
          {
            "description": "Legal name of the person making the request",
            "example": null,
            "reason": "To confirm identity and authority to make the request"
          },
          {
            "description": "URL(s) of the content being reported",
            "example": "https://pornhub.com/view_video.php?viewkey=xxxxx",
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Relationship to the person in the content",
            "example": "I am the person in the content",
            "reason": "To establish standing to request removal"
          }
        ],
        "removalCriteria": [
          "The content shows non-consensual sexual acts",
          "One or more individual(s) in the content did not consent to being recorded",
          "One or more individual(s) in the content did not consent for the content to be distributed",
          "The content contains personal identifying information (doxxing)",
          "The content is a deepfake or is AI-generated or manipulated and uses someone's likeness without their consent"
        ]
      },
      {
        "id": "ph-cr-csam",
        "reference": "PH-CONTENT-REMOVAL-FORM-CSAM",
        "summary": "Pornhub removes content that violates their Child Sexual Abuse Material (CSAM) Policy and provides anonymous reporting options.",
        "quote": "You may submit requests for removal for content that: Violates our Child Sexual Abuse Material (CSAM) Policy",
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
            "description": "URL(s) of the content being reported (or title/user information if URLs unavailable)",
            "example": "Video title or username",
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Optional contact information (anonymous reporting available)",
            "example": null,
            "reason": "Anonymous reporting is permitted for CSAM concerns"
          }
        ],
        "removalCriteria": [
          "Content depicts minors in sexual situations",
          "Content violates child safety policies"
        ]
      },
      {
        "id": "ph-cr-consent-agreement",
        "reference": "PH-CONTENT-REMOVAL-FORM-CONSENT",
        "summary": "Pornhub removes content that violates existing performer consent agreements or when performers wish to withdraw from consent agreements.",
        "quote": "You may submit requests for removal for content that: Violates an existing performer consent agreement, Features a performer who wishes to withdraw from an existing consent agreement",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
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
            "description": "Valid email address for verification",
            "example": "performer@example.com",
            "reason": "To verify the request and send confirmation"
          },
          {
            "description": "Legal name of the person making the request",
            "example": null,
            "reason": "To confirm identity and authority to make the request"
          },
          {
            "description": "URL(s) of the content being reported",
            "example": null,
            "reason": "To identify specific content for removal"
          },
          {
            "description": "Details about consent agreement violation or withdrawal",
            "example": "No permission was given for this content to be uploaded or Permission was given for limited use only",
            "reason": "To understand the nature of the consent issue"
          }
        ],
        "removalCriteria": [
          "No permission was given for this content to be uploaded to Pornhub",
          "Permission was given for limited use only (e.g. long-form videos or promotional purposes), but this upload does not follow those terms",
          "The consent provided is no longer valid or was not valid in the first place"
        ]
      },
      {
        "id": "ph-cr-immediate-disable",
        "reference": "PH-CONTENT-REMOVAL-FORM-PROCESS",
        "summary": "Pornhub immediately disables reported content URLs upon email verification of removal requests.",
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
            "value": null,
            "unit": null,
            "description": "Immediate upon email verification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Email verification by clicking link in confirmation email",
            "example": null,
            "reason": "To confirm the authenticity of the removal request"
          }
        ],
        "removalCriteria": [
          "Valid content removal request submitted through official form",
          "Email verification completed by clicking confirmation link"
        ]
      },
      {
        "id": "ph-cr-confidential-reporting",
        "reference": "PH-CONTENT-REMOVAL-FORM-PRIVACY",
        "summary": "Pornhub maintains complete confidentiality of content removal reports, ensuring the user who posted content will not see reporter information.",
        "quote": "Your report is completely confidential. When you report content, the user who posted the content will not see your name or any information about you.",
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
            "description": "Contact information (kept confidential)",
            "example": null,
            "reason": "For follow-up communication while maintaining reporter anonymity"
          }
        ],
        "removalCriteria": [
          "Valid removal request submitted through official channels",
          "Reporter identity protection maintained throughout process"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
