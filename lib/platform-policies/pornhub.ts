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
    "accessTimestamp": "2025-09-18T21:57:08.082Z",
    "policies": [
      {
        "id": "ph-non-consensual-content",
        "reference": "PH-TOS-NCC",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation. Content must be uploaded only by those with proper consent and rights.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word); Further, the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein.",
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
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific violating content for review"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation",
          "Content was uploaded without proper consent from all individuals appearing"
        ]
      },
      {
        "id": "ph-privacy-violation",
        "reference": "PH-TOS-PRIVACY",
        "summary": "Prohibits posting content that violates privacy rights or contains personally identifiable information without consent.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable; collect or store personal data about anyone;",
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
            "description": "Report using the content removal form at https://pornhub.com/content-removal",
            "reason": "To report privacy violations and unauthorized sharing of personal information"
          },
          {
            "description": "Description of how the content violates privacy rights",
            "reason": "To help moderators understand the nature of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content is invasive of another's privacy",
          "Content contains personal data collected or stored without consent",
          "Content reveals private information without authorization"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating another person or misrepresenting affiliation with others.",
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
            "description": "Evidence showing the content impersonates you or misrepresents affiliation",
            "reason": "To verify the impersonation claim"
          },
          {
            "description": "Report through the content removal form",
            "reason": "To formally report the impersonation violation"
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
        "summary": "Prohibits copyright infringement and unauthorized use of copyrighted materials. Operates under DMCA takedown procedures.",
        "quote": "This Website does not permit copyright infringing activities and infringement of intellectual property rights on this Website, and this Website will remove all Content if properly notified that such Content infringes on another's intellectual property rights. post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases;",
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
            "description": "Evidence of ownership or rights to the copyrighted material",
            "reason": "To establish legal standing for the copyright claim"
          },
          {
            "description": "Identification of the specific infringing content",
            "reason": "To locate and remove the infringing material"
          }
        ],
        "removalCriteria": [
          "Content infringes on copyrighted materials owned by the complainant",
          "Content uses materials protected by intellectual property laws without permission",
          "Proper DMCA notice has been filed identifying the infringement"
        ]
      },
      {
        "id": "ph-harassment-policy",
        "reference": "PH-TOS-HARASSMENT",
        "summary": "Prohibits harassment, stalking, threatening, and abusive conduct toward other users.",
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
            "description": "Documentation of the harassing, threatening, or abusive conduct",
            "reason": "To provide evidence of the harassment for review"
          },
          {
            "description": "Report using the content removal form or report button",
            "reason": "To formally report the harassment violation"
          }
        ],
        "removalCriteria": [
          "Content or conduct is harmful, threatening, or abusive",
          "Content involves harassment or stalking of other users",
          "Content is intimidating or encourages violence",
          "Conduct negatively affects other users' ability to use the website"
        ]
      },
      {
        "id": "ph-account-security",
        "reference": "PH-TOS-SECURITY",
        "summary": "Users are responsible for account security and must report unauthorized access immediately. Unauthorized use may result in liability.",
        "quote": "You are fully responsible for all activities that occur under your username or password. You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com. Although this Website will not be liable for your losses caused by any unauthorized use of your account, you may be liable for the losses of this Website or others due to such unauthorized use.",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Immediate notification to support@pornhub.com of unauthorized access",
            "reason": "To report the security breach and initiate account recovery"
          },
          {
            "description": "Description of the unauthorized activity or breach",
            "reason": "To understand the scope and nature of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to the account",
          "Unauthorized content uploaded due to account compromise",
          "Account being used in violation of terms due to security breach"
        ]
      },
      {
        "id": "ph-content-consent-requirements",
        "reference": "PH-TOS-CONSENT",
        "summary": "All content uploaders must obtain proper consent and releases from every individual appearing in their content and verify they are over 18.",
        "quote": "you own the rights to use the Content on this Website and that the Content does not infringe on the rights (including intellectual property rights) of a third party and, that you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website; for every individual appearing in your Content you have carefully ascertained and examined a valid governmental photo identification demonstrating that they are at least 18 years of age",
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
            "description": "Evidence that proper consent was not obtained from individuals in the content",
            "reason": "To demonstrate violation of consent requirements"
          },
          {
            "description": "Report through the content removal form",
            "reason": "To formally report the consent violation"
          }
        ],
        "removalCriteria": [
          "Content uploaded without proper consent from all individuals appearing",
          "Uploader failed to obtain necessary releases from content subjects",
          "Content violates the rights of individuals appearing in it"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users may lodge complaints against content removal decisions within 6 months via email to dsa@pornhub.com. Complaints are handled in a timely, non-discriminatory manner and decisions may be reversed if justified.",
      "steps": [
        "Submit complaint within 6 months of the decision notification",
        "Email dsa@pornhub.com from the account email address",
        "Include detailed information about the complaint and reasoning",
        "Platform will review complaint in timely, objective manner",
        "Decision may be reversed if complaint demonstrates the prior decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-18T21:57:08.082Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "PH-PP-SECTION-6",
        "summary": "Pornhub provides content removal processes for users to report and request removal of content, including non-consensual content and privacy violations.",
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
            "description": "Content report submission through platform reporting system",
            "example": "Report submitted via content reporting feature",
            "reason": "Required for content moderation and complaint handling obligations"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms and Conditions",
          "Content reported through content reporting system",
          "Content that violates legal obligations"
        ]
      },
      {
        "id": "ph-pp-user-contributions-control",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete their own user contributions and audio/video information through account settings, providing control over personal content.",
        "quote": "You may use your account settings to delete your user contributions and audio/video information.",
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
            "description": "Account ownership verification",
            "example": "Login to account and access account settings",
            "reason": "To ensure only account owner can delete their content"
          }
        ],
        "removalCriteria": [
          "User-uploaded content owned by the account holder",
          "Audio/video information associated with the account"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "PH-PP-SECTION-8",
        "summary": "Users can delete and deactivate their entire account, which removes profile access and associated content unless legally prohibited.",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you.",
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
            "description": "Account ownership verification",
            "example": "Login credentials and account access",
            "reason": "To ensure only account owner can delete the account"
          }
        ],
        "removalCriteria": [
          "User request for account deletion",
          "No legal or court order preventing deletion"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "PH-PP-SECTION-18",
        "summary": "Users have the right to request deletion/erasure of their personal data, including content and account information.",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data",
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
            "description": "Platform response timeframe for data deletion requests"
          },
          "removal": null
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
            "reason": "To confirm account ownership"
          }
        ],
        "removalCriteria": [
          "Valid data deletion request from verified account owner",
          "Personal data that can be legally deleted"
        ]
      },
      {
        "id": "ph-pp-law-enforcement-disclosure",
        "reference": "PH-PP-SECTION-6",
        "summary": "Platform discloses information to law enforcement and authorities to comply with legal obligations, detect illegal activities, and protect rights and safety.",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues; protect against harm to the rights, property or safety of our company, our users, our employees, or others",
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
            "example": "Court-issued subpoena properly served to Aylo Freesites Ltd",
            "reason": "Legal requirement for disclosure of user information"
          },
          {
            "description": "Proper legal service through designated platform",
            "example": "Document uploaded to https://legalservice.aylo.com/legal/datarequest",
            "reason": "To ensure proper legal process is followed"
          }
        ],
        "removalCriteria": [
          "Valid legal process requiring disclosure",
          "Illegal or suspected illegal activities",
          "Threats to rights, property or safety of users or others"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.pornhub.com/managemydata/requestDatadeletion?productId=10068&productDomain=pornhub.com",
      "summary": "Users can request deletion of personal data through dedicated data management system, with identity verification required",
      "steps": [
        "Access the data deletion request page",
        "Provide identity verification information (username and email address)",
        "Verify account access through registered email",
        "Submit deletion request",
        "Platform responds within one month"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-18T21:57:08.082Z",
    "policies": [
      {
        "id": "ph-content-removal-policy",
        "reference": "PH-CONTENT-REMOVAL",
        "summary": "Provides a dedicated Content Removal Request Form for anyone to request the removal of content depicting them for any reason.",
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
            "description": "Use the dedicated Content Removal Request Form",
            "reason": "To ensure the report is processed through the proper channel"
          },
          {
            "description": "URL(s) of the content to be removed",
            "reason": "To locate and identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts the requesting person",
          "Request is submitted through the official Content Removal Request Form"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "pornhub-new-1758232628081-0",
    "reference": "PH-NCII-POLICY",
    "title": "Pornhub Non-Consensual Content Policy",
    "summary": "Detailed policy specifically addressing non-consensual intimate imagery, content removal procedures, and reporting mechanisms for NCII violations.",
    "url": "https://help.porn-hub.website/hc/en-us/articles/4419871787027-Non-Consensual-Content-Policy",
    "accessTimestamp": "2025-09-18T21:57:08.082Z",
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
            "description": "First-hand knowledge of content violation",
            "example": "Being the person featured in the content",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate content for removal"
          }
        ],
        "removalCriteria": [
          "Content taken without valid written consent",
          "Content shared without valid written consent",
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "First-hand knowledge of content violation",
            "example": "Being the person featured in the content",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate content for removal"
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
            "example": "Being the person whose information is exposed",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate content for removal"
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
            "example": "Being the person whose likeness was manipulated",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate content for removal"
          }
        ],
        "removalCriteria": [
          "AI-generated manipulations of a person's image",
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
            "description": "First-hand knowledge of content violation",
            "example": "Being featured in content without providing consent",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate content for removal"
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
        "summary": "Pornhub removes violating content, fingerprints it to prevent re-uploads, and suspends or terminates associated accounts.",
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
            "description": "First-hand knowledge of content violation or being the victim",
            "example": "Being featured in non-consensual content",
            "reason": "To verify legitimate takedown requests"
          },
          {
            "description": "Relevant URL links to the content in question",
            "example": "Direct links to the violating content",
            "reason": "To identify and locate content for removal"
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
    "id": "pornhub-new-1758232628081-1",
    "reference": "PH-CONTENT-REMOVAL-FORM",
    "title": "Pornhub Content Removal Request Form",
    "summary": "Direct access to Pornhub's content removal request system for reporting non-consensual content, harassment, privacy violations, and other policy violations.",
    "url": "https://help.porn-hub.website/hc/en-us/requests/new",
    "accessTimestamp": "2025-09-18T21:57:08.082Z",
    "policies": [],
    "appealProcess": null
  }
],
};
