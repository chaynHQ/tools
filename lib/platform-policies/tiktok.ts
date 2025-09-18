import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, impersonation, and content removal policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tt-ncii-policy",
        "reference": "TT-CG-NCSII",
        "summary": "Strictly prohibits adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.",
        "quote": "We don't allow some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
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
            "description": "Link to the video, content, or user profile",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Description of the violation",
            "reason": "To understand the nature of the policy violation"
          }
        ],
        "removalCriteria": [
          "Content depicts adult nudity, sexual activity, or is sexually suggestive",
          "Content shows body exposure or sexual behavior",
          "Content involves sexual services or sexually suggestive behavior"
        ]
      },
      {
        "id": "tt-ai-policy",
        "reference": "TT-CG-AI",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AIGC that misleads or harms individuals.",
        "quote": "We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
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
            "description": "Link to the video",
            "reason": "To identify the AI-generated content"
          },
          {
            "description": "Description of how the content is AI-generated and violates policy",
            "reason": "To understand the nature of the AI violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content is used to realistically depict people without clear labeling",
          "AIGC misleads about matters of public importance",
          "AIGC harms individuals"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-CG-HARASSMENT",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "Link to the harassing content or user profile",
            "reason": "To identify and review the harassing material"
          },
          {
            "description": "Description of the harassment and its targeted nature",
            "reason": "To assess the nature and impact of the harassment"
          }
        ],
        "removalCriteria": [
          "Content constitutes harassment or bullying of others",
          "Content contains degrading remarks about appearance",
          "Content involves doxing (sharing personal information)",
          "Content constitutes sexual harassment",
          "Content involves coordinated abuse"
        ]
      },
      {
        "id": "tt-privacy-policy",
        "reference": "TT-CG-PRIVACY",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
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
            "description": "Link to the content containing personal information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of the personal information exposed",
            "reason": "To understand the nature and scope of the privacy violation"
          },
          {
            "description": "Confirmation that the information was shared without consent",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content shares personal information that could lead to harm",
          "Information could enable identity theft, stalking, or fraud",
          "Personal information is shared without the subject's consent"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-CG-IMPERSONATION",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform through deceptive behavior.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Link to the misleading or impersonating account",
            "reason": "To identify the deceptive account"
          },
          {
            "description": "Description of how the account is misleading or impersonating",
            "reason": "To understand the nature and extent of the deception"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity or purpose",
          "Account attempts to manipulate the platform",
          "Account engages in deceptive behavior"
        ]
      },
      {
        "id": "tt-copyright-policy",
        "reference": "TT-CG-IP",
        "summary": "Prohibits content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
        "quote": "We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
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
            "description": "Link to the infringing content",
            "reason": "To identify the content that violates intellectual property rights"
          },
          {
            "description": "Evidence of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify the legitimacy of the copyright claim"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To understand what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content violates intellectual property rights",
          "Content is a repost of copyrighted material without permission",
          "Content uses trademarked material without authorization"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tt-terms-of-service",
    "reference": "TT-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of TikTok, including content ownership, intellectual property rights, and user obligations.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tt-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement, including unauthorized posting of intimate images owned by the victim or photographer.",
        "quote": "We respect intellectual property rights and ask you to do the same. As a condition of your access to and use of the Services, you agree to the terms of the Copyright Policy.",
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
            "description": "A formal copyright infringement report",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership of the content",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content is an original work (photo, video) posted without the copyright owner's permission"
        ]
      },
      {
        "id": "tt-content-standards-policy",
        "reference": "TT-TOS-CONTENT",
        "summary": "Prohibits posting content that harasses, intimidates, or violates privacy rights, including private information of third parties.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age; use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services; any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers; any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Report through the feedback form with details of the violation",
            "reason": "To provide TikTok with information needed to investigate the content"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content violates the policy",
            "reason": "To help TikTok understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content intimidates or harasses another person",
          "Content contains private information of third parties without consent",
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people",
          "Content promotes sexually explicit material inappropriately"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating any person or entity or falsely representing affiliation, including creating false identities.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through the feedback form with details of the impersonation",
            "reason": "To provide TikTok with information about the false identity or misrepresentation"
          },
          {
            "description": "Evidence showing the account is impersonating you or misrepresenting affiliation",
            "reason": "To demonstrate that impersonation is occurring"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific account or content engaging in impersonation"
          }
        ],
        "removalCriteria": [
          "Account impersonates any person or entity",
          "Account falsely states or misrepresents affiliation with any person or entity",
          "Account creates a false identity on the Services"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-ACCOUNT",
        "summary": "Requires users to keep account passwords confidential and report unauthorized access immediately.",
        "quote": "It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Report unauthorized access through the feedback form immediately",
            "reason": "To alert TikTok of potential account compromise"
          },
          {
            "description": "Details of suspected unauthorized access or password compromise",
            "reason": "To help TikTok investigate and secure the account"
          }
        ],
        "removalCriteria": [
          "Evidence that a third party knows the account password",
          "Evidence that unauthorized access to the account has occurred",
          "Account is posting content the legitimate owner did not create"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-REMOVAL",
        "summary": "TikTok reserves the right to remove or disable access to content at their discretion for violations or harm to users.",
        "quote": "We reserve the right, at any time and without prior notice, to remove or disable access to content at our discretion for any reason or no reason. Some of the reasons we may remove or disable access to content may include finding the content objectionable, in violation of these Terms or our Community Policy, or otherwise harmful to the Services or our users.",
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
            "description": "Report content through the feedback form",
            "reason": "To notify TikTok of potentially violating content"
          },
          {
            "description": "URL(s) of the content to be reviewed",
            "reason": "To identify the specific content for review"
          },
          {
            "description": "Explanation of why the content should be removed",
            "reason": "To help TikTok assess whether removal is appropriate"
          }
        ],
        "removalCriteria": [
          "Content is objectionable",
          "Content violates the Terms of Service",
          "Content violates Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-user-content-policy",
        "reference": "TT-TOS-USERCONTENT",
        "summary": "Users must own or have permission for all content they post and warrant compliance with content standards.",
        "quote": "When you submit User Content through the Services, you agree and represent that you own that User Content, or you have received all necessary permissions, clearances from, or are authorised by, the owner of any part of the content to submit it to the Services. You warrant that any such contribution does comply with those standards, and you will be liable to us and indemnify us for any breach of that warranty.",
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
            "description": "Evidence that you own the content or have permission to post it",
            "reason": "To establish legitimate ownership or authorization"
          },
          {
            "description": "URL(s) of unauthorized content posted by others",
            "reason": "To identify content posted without proper authorization"
          },
          {
            "description": "Proof that the poster lacks permission to use your content",
            "reason": "To demonstrate unauthorized use"
          }
        ],
        "removalCriteria": [
          "Content was posted without ownership or proper permissions",
          "Content violates the content standards",
          "Poster cannot demonstrate authorization to use the content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content and contact TikTok for assistance through their feedback form.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide details about the content or issue",
        "Wait for TikTok to review and respond to the complaint"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, with specific provisions for personal information protection.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tiktok-pp-content-removal-under18",
        "reference": "TT-PP-CONTENT-REMOVAL",
        "summary": "California residents under 18 can request removal of User Content they posted, and Connecticut residents under 18 (or their parents/guardians if under 16) can request account deletion.",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
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
            "description": "Description of the User Content you want removed",
            "example": "Specific details about the content including when it was posted",
            "reason": "To help TikTok locate the specific content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit location of content",
            "example": "Username, approximate date posted, content description",
            "reason": "Required to identify and locate the specific User Content"
          },
          {
            "description": "Proof of California residency and age under 18",
            "example": "State identification or other age verification",
            "reason": "To verify eligibility for content removal under California law"
          }
        ],
        "removalCriteria": [
          "User must be a California resident under 18 years of age",
          "Content must have been posted by the requesting user themselves",
          "Request must include adequate description and location information"
        ]
      },
      {
        "id": "tiktok-pp-privacy-request",
        "reference": "TT-PP-YOUR-RIGHTS",
        "summary": "Users can submit requests to know, access, correct or delete information collected about them, with verification requirements.",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. We will verify your request by asking you to send it from the email address associated with your account or to provide information necessary to verify your account.",
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
            "description": "Request sent from email address associated with account",
            "example": "Submit request using the same email used to create the TikTok account",
            "reason": "To verify account ownership and prevent unauthorized requests"
          },
          {
            "description": "Information necessary to verify your account",
            "example": "Account username, phone number, or other account details",
            "reason": "Alternative verification method if email verification is not possible"
          }
        ],
        "removalCriteria": [
          "User must verify account ownership through associated email or account information",
          "Request must be submitted through official privacy request form",
          "Information requested for deletion must be within user's rights under applicable law"
        ]
      },
      {
        "id": "tiktok-pp-child-account-deletion",
        "reference": "TT-PP-CHILDREN-TEENS",
        "summary": "Parents or guardians can request deletion of their underage child's account or download account data.",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of parent or guardian status",
            "example": "Legal documentation showing parental relationship",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Child's account information",
            "example": "Username, email associated with account, or other identifying details",
            "reason": "To locate and identify the specific account for deletion or data download"
          },
          {
            "description": "Proof that child is underage",
            "example": "Birth certificate or other age verification",
            "reason": "To confirm eligibility for parental control over the account"
          }
        ],
        "removalCriteria": [
          "Requester must be verified parent or guardian of the account holder",
          "Account holder must be under the applicable age threshold",
          "Request must be made through official privacy request channel"
        ]
      },
      {
        "id": "tiktok-pp-underage-account-termination",
        "reference": "TT-PP-CHILDREN-TEENS",
        "summary": "TikTok will delete information and terminate accounts of users discovered to be under 13 years old.",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Information about suspected underage user",
            "example": "Username or profile information indicating user is under 13",
            "reason": "To identify accounts that may belong to users under the minimum age requirement"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age",
          "Personal information was collected from a user under 13",
          "Account violates minimum age requirements for the platform"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests by following instructions in the communication received from TikTok.",
      "steps": [
        "Submit initial request through privacy request form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal with additional information if needed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758225049026-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban accounts of repeat infringers.",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies. Any user content that infringes another person's copyright may be removed.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details",
            "reason": "Required for DMCA compliance and potential follow-up communication"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason",
          "Content does not fall under fair use, fair dealing, or other copyright exceptions"
        ]
      },
      {
        "id": "tiktok-ip-copyright-repeat-infringer",
        "reference": "TT-IP-COPYRIGHT-REPEAT",
        "summary": "TikTok bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe violations.",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of repeated copyright infringement by the same user",
            "example": "Multiple copyright infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement for account termination"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright infringement",
          "Severe copyright violations warrant immediate account ban",
          "Account was used for improper copyright-related activities"
        ]
      },
      {
        "id": "tiktok-ip-trademark-infringement",
        "reference": "TT-IP-TRADEMARK",
        "summary": "TikTok removes content that violates trademark rights and prohibits counterfeit goods on the platform.",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark registration details, evidence of infringement",
            "reason": "To investigate trademark infringement claims"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details of rights holder",
            "reason": "Required for processing trademark infringement reports"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Unauthorized use of trademark likely to cause confusion about source or affiliation",
          "Content promotes, sells, or solicits counterfeit goods",
          "Use does not fall under permitted acts like commentary, criticism, or parody"
        ]
      },
      {
        "id": "tiktok-ip-trademark-repeat-infringer",
        "reference": "TT-IP-TRADEMARK-REPEAT",
        "summary": "TikTok bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts for severe violations.",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of repeated trademark infringement by the same user",
            "example": "Multiple trademark infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement for account termination"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits trademark infringement",
          "Severe trademark violations warrant immediate account ban",
          "Account was used for improper trademark-related activities"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications for both copyright and trademark infringement, with different processes for EU and non-EU users.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app via the notification",
        "Provide all required information including contact details and supporting evidence",
        "TikTok may contact you for additional questions about your appeal",
        "For copyright appeals outside EU: Appeal may be forwarded to original reporter who can file lawsuit",
        "For copyright appeals in EU: Must demonstrate use falls under quotation, criticism, review, parody, or other EU exceptions",
        "Content may be reinstated at TikTok's sole discretion if criteria are met"
      ]
    }
  },
  {
    "id": "tiktok-new-1758225049026-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Specific guidelines covering harassment, bullying, hate speech, and safety violations with enforcement details.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tt-safety-ncii",
        "reference": "TT-SAFETY-5",
        "summary": "TikTok prohibits image-based sexual abuse, including having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes.",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through TikTok's intimate privacy violation form",
            "example": "Use the dedicated reporting link provided",
            "reason": "Specialized handling for intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Content shows intimate images shared without consent",
          "Content involves sexual purposes or intent",
          "Content includes edited intimate images without consent"
        ]
      },
      {
        "id": "tt-safety-sextortion",
        "reference": "TT-SAFETY-4-5",
        "summary": "TikTok prohibits sextortion, defined as threatening to share nude or sexual content without permission to demand money, sex, or more explicit content.",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
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
            "description": "Evidence of threats to share intimate content",
            "example": "Screenshots of threatening messages",
            "reason": "To establish sextortion behavior"
          },
          {
            "description": "Evidence of demands for money, sex, or content",
            "example": "Messages showing extortion demands",
            "reason": "To prove coercive intent"
          }
        ],
        "removalCriteria": [
          "Content involves threats to share intimate images",
          "Demands are made for money, sexual acts, or additional content",
          "Content shows or promotes sextortion behavior"
        ]
      },
      {
        "id": "tt-safety-harassment-sexual",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits sexual harassment, including sexualization or sexual degradation of individuals through language or behaviors relating to sexual activities and intimate body parts.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted sexual comments or behavior",
            "example": "Screenshots of sexual comments about intimate body parts",
            "reason": "To establish sexual harassment"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments towards someone",
          "Engaging in unwanted sexual behavior towards someone",
          "Mimicking sexual acts using Duet or stickers",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-safety-doxing",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits doxing, defined as publishing or threatening to publish personal information about someone online with malicious intent.",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
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
            "description": "Evidence of published or threatened publication of personal information",
            "example": "Screenshots showing personal information being shared",
            "reason": "To establish doxing behavior"
          },
          {
            "description": "Evidence of malicious intent through captions or hashtags",
            "example": "Threatening language or harmful hashtags",
            "reason": "To prove malicious intent as required by policy"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone with malicious intent",
          "Threatening to publish personal information with malicious intent",
          "Encouraging others to engage in doxing behavior"
        ]
      },
      {
        "id": "tt-safety-harassment-coordinated",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits inciting harassment or promoting coordinated abuse, including encouraging others to leave abusive comments or falsely report accounts.",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
        "contentTypes": [
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
            "description": "Evidence of encouraging coordinated harassment",
            "example": "Posts calling for mass reporting or abusive comments",
            "reason": "To establish coordinated abuse behavior"
          }
        ],
        "removalCriteria": [
          "Content encourages others to leave abusive comments",
          "Content promotes false reporting of accounts",
          "Content incites coordinated harassment campaigns"
        ]
      },
      {
        "id": "tt-safety-csam",
        "reference": "TT-SAFETY-4",
        "summary": "TikTok prohibits Child Sexual Abuse Material (CSAM), including sexual content involving young people and anything that sexualizes or fetishizes a young person's body, including AI-generated content.",
        "quote": "Child Sexual Abuse Material (CSAM): Sexual content involving a young person, including anything that shows or suggests abuse or sexual activity. This covers content created by others or the young person themselves, and includes digital or AI-generated images. It also includes anything that sexualizes or fetishizes a young person's body.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report suspected CSAM immediately through in-app reporting",
            "example": "Use TikTok's reporting system",
            "reason": "Immediate reporting required for child safety"
          }
        ],
        "removalCriteria": [
          "Content shows or suggests sexual activity involving young people",
          "Content sexualizes or fetishizes young people",
          "Content includes AI-generated sexual imagery of young people",
          "Any screenshot or clip from CSAM, even without nudity"
        ]
      },
      {
        "id": "tt-safety-personal-info",
        "reference": "TT-SAFETY-PRIVACY",
        "summary": "TikTok has policies protecting personal information and provides a dedicated reporting mechanism for intimate privacy violations.",
        "quote": "If you think your intimate privacy has been violated on TikTok, report it to us here",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Use TikTok's dedicated intimate privacy violation reporting form",
            "example": "Submit report through provided link",
            "reason": "Specialized handling for privacy violations"
          }
        ],
        "removalCriteria": [
          "Content violates intimate privacy",
          "Personal information shared without consent",
          "Private content distributed without permission"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok mentions notice and appeals processes in their enforcement section, but specific appeal procedures are not detailed in this safety guidelines document.",
      "steps": [
        "Report content through appropriate TikTok reporting mechanisms",
        "For intimate privacy violations, use dedicated reporting form",
        "For CSAM, report immediately through in-app system"
      ]
    }
  },
  {
    "id": "tiktok-new-1758225049026-2",
    "reference": "TT-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "Guidelines specifically addressing personal information sharing, doxxing, and privacy violations.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tt-privacy-sec-personal-info-high-risk",
        "reference": "TT-PRIVACY-SEC-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including content posted by the person themselves or with their consent.",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
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
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the provided privacy violation report link",
            "reason": "To initiate TikTok's review process for privacy violations"
          }
        ],
        "removalCriteria": [
          "Content contains home address information",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Content could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-privacy-sec-personal-info-moderate-risk",
        "reference": "TT-PRIVACY-SEC-2",
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, requiring additional context for removal decisions.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
        "contentTypes": [
          "personal",
          "private",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Additional context explaining the psychological harm risk",
            "example": "Explanation of how the shared information causes emotional distress or reputational damage",
            "reason": "TikTok requires context to assess moderate-risk personal information removal requests"
          },
          {
            "description": "Evidence that content was shared without consent",
            "example": "Documentation showing lack of permission to share the information",
            "reason": "To establish that the information was shared without the subject's consent"
          }
        ],
        "removalCriteria": [
          "Content contains contact details or date of birth shared without consent",
          "Content contains medical information shared without consent",
          "Content contains image/audio likeness shared without consent",
          "Content contains private communications on sensitive subjects disclosed by non-participants",
          "Content is likely to cause psychological harm or emotional distress",
          "Content may cause reputational damage or unwanted contact"
        ]
      },
      {
        "id": "tt-privacy-sec-account-security",
        "reference": "TT-PRIVACY-SEC-3",
        "summary": "TikTok prohibits unauthorized access to accounts, sharing login information, and attempts to steal personal information or hack accounts through phishing or other methods.",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account... Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized account access or hacking attempts",
            "example": "Screenshots or documentation of suspicious account activity",
            "reason": "To demonstrate platform security violations and unauthorized access"
          }
        ],
        "removalCriteria": [
          "Content involves giving login information to unauthorized parties",
          "Content involves unauthorized access to TikTok accounts",
          "Content contains malware, viruses, or harmful software",
          "Content involves phishing, smishing, or automated data collection attempts",
          "Content involves attempts to steal personal information or hack accounts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "TikTok provides a privacy violation reporting system for users who believe their privacy has been violated",
      "steps": [
        "Access the privacy violation report form through the provided link",
        "Submit details about the privacy violation",
        "Provide additional context as required for moderate-risk personal information cases"
      ]
    }
  },
  {
    "id": "tiktok-new-1758225049026-3",
    "reference": "TT-MATURE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Guidelines covering sexually explicit content, nudity, and adult content policies including NCII provisions.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tt-mature-nudity-sexual",
        "reference": "TT-MATURE-BODY-1",
        "summary": "TikTok prohibits nudity, sexual activity, and sexually suggestive content involving minors, with removal of non-consensual intimate content.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
        "contentTypes": [
          "intimate",
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
            "description": "Report content showing prohibited nudity or sexual activity",
            "example": "Content showing nudity, sexual activity, or sexually suggestive behavior",
            "reason": "To identify violations of body exposure and sexualized behavior policies"
          }
        ],
        "removalCriteria": [
          "Nudity or sexual activity including digital or illustrated images",
          "Physical sexual arousal or stimulation",
          "Fetish or kink behavior such as BDSM",
          "Significant body exposure of young people such as wearing only underwear or lingerie",
          "Young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "Sexually explicit language involving or directed at young people"
        ]
      },
      {
        "id": "tt-mature-sexual-services",
        "reference": "TT-MATURE-BODY-2",
        "summary": "TikTok prohibits content facilitating access to sexual services including offering sexual acts, sexual chats, or imagery.",
        "quote": "Facilitating access to sexual services, such as offering or asking for sexual acts, sexual chats or imagery, or pornography",
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
            "description": "Report content offering or requesting sexual services",
            "example": "Posts offering sexual acts, sexual chats, or pornographic imagery",
            "reason": "To identify violations of sexual services prohibition"
          }
        ],
        "removalCriteria": [
          "Offering or asking for sexual acts",
          "Offering or asking for sexual chats or imagery",
          "Offering or asking for pornography"
        ]
      },
      {
        "id": "tt-mature-age-restricted",
        "reference": "TT-MATURE-BODY-3",
        "summary": "TikTok age-restricts and removes from For You feed content showing significant adult body exposure or sexually suggestive behavior.",
        "quote": "Some content, like significant adult body exposure or sexually suggestive behavior involving adults, is age-restricted and ineligible for the FYF",
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
            "description": "Report content showing significant adult body exposure or sexually suggestive behavior",
            "example": "Content showing adults in underwear that doesn't cover most of the buttocks or engaging in sexually suggestive acts",
            "reason": "To apply age restrictions and FYF ineligibility"
          }
        ],
        "removalCriteria": [
          "Significant adult body exposure such as wearing only nipple covers or underwear that doesn't cover most of the buttocks",
          "Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "In some regions, moderate adult body exposure or sexually explicit language"
        ]
      },
      {
        "id": "tt-mature-graphic-content",
        "reference": "TT-MATURE-GRAPHIC-1",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm, including graphic incidents and dead bodies.",
        "quote": "we don't allow anything extremely gory, disturbing, or violent, especially when it could cause psychological harm",
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
            "description": "Report extremely graphic, gory, or disturbing content",
            "example": "Content showing graphic violence, torture, dead bodies, or dismembered bodies",
            "reason": "To identify content that violates graphic content policies"
          }
        ],
        "removalCriteria": [
          "Graphic incidents and violence such as torture or the moment of someone's death",
          "Dead bodies",
          "Graphic injury such as dismembered, mutilated, charred, or burned bodies"
        ]
      },
      {
        "id": "tt-mature-animal-abuse",
        "reference": "TT-MATURE-ANIMAL-1",
        "summary": "TikTok prohibits animal abuse, cruelty, neglect, and exploitation including inhumane slaughter and staged animal fights.",
        "quote": "We don't allow animal abuse, cruelty, neglect, or any other form of animal exploitation",
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
            "description": "Report content showing animal abuse, cruelty, or exploitation",
            "example": "Content showing inhumane slaughter, animal fights, or mistreatment of animals",
            "reason": "To identify violations of animal welfare policies"
          }
        ],
        "removalCriteria": [
          "Inhumane slaughter, mutilation, or abuse of animals including staged animal fights",
          "Mistreatment or neglect of animals such as malnourishment",
          "Dismembered, mutilated, charred, burned, or severely injured animals",
          "Poaching",
          "Bestiality"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758225049026-4",
    "reference": "TT-INTEGRITY",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Guidelines covering impersonation, fake accounts, deceptive behavior, and platform manipulation.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity/",
    "accessTimestamp": "2025-09-18T19:50:49.027Z",
    "policies": [
      {
        "id": "tt-integrity-aigc-private-likeness",
        "reference": "TT-INTEGRITY-AIGC-1",
        "summary": "TikTok prohibits using the likeness of private figures without consent in AI-generated or significantly edited content.",
        "quote": "Using the likeness of private figures without consent",
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
            "description": "Proof that you are the private figure depicted without consent",
            "example": "Government-issued ID matching the person in the content",
            "reason": "To verify identity and establish lack of consent"
          },
          {
            "description": "Evidence that the content uses AI or significant editing to create your likeness",
            "example": "Technical analysis or clear indicators of manipulation",
            "reason": "To establish that the content falls under AIGC policies"
          }
        ],
        "removalCriteria": [
          "Content uses AI-generated or significantly edited likeness of a private figure",
          "No consent was obtained from the depicted private figure"
        ]
      },
      {
        "id": "tt-integrity-aigc-sexualized",
        "reference": "TT-INTEGRITY-AIGC-2",
        "summary": "TikTok prohibits sexualized, fetishized, or victimizing depictions in AI-generated content.",
        "quote": "Sexualized, fetishized, or victimizing depictions",
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
            "description": "Evidence that the content depicts you in a sexualized, fetishized, or victimizing manner",
            "example": "Screenshots or links to the violating content",
            "reason": "To establish the nature of the violation"
          },
          {
            "description": "Proof of your identity if you are depicted in the content",
            "example": "Government-issued ID or other identity verification",
            "reason": "To verify you are the person affected by the content"
          }
        ],
        "removalCriteria": [
          "Content contains sexualized depictions created through AI or editing",
          "Content contains fetishized depictions created through AI or editing",
          "Content contains victimizing depictions created through AI or editing"
        ]
      },
      {
        "id": "tt-integrity-aigc-harassment",
        "reference": "TT-INTEGRITY-AIGC-3",
        "summary": "TikTok prohibits AI-created likenesses made to bully or harass individuals.",
        "quote": "AI-created likenesses made to bully or harass",
        "contentTypes": [
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
            "description": "Evidence that AI-created content uses your likeness for bullying or harassment",
            "example": "Screenshots showing the harassing content and context",
            "reason": "To establish the harassing nature and AI creation"
          },
          {
            "description": "Proof of your identity as the person being harassed",
            "example": "Government-issued ID matching the depicted person",
            "reason": "To verify you are the target of the harassment"
          }
        ],
        "removalCriteria": [
          "Content uses AI to create someone's likeness",
          "The AI-created likeness is used specifically to bully or harass the depicted person"
        ]
      },
      {
        "id": "tt-integrity-aigc-youth-inappropriate",
        "reference": "TT-INTEGRITY-AIGC-4",
        "summary": "TikTok prohibits accounts focused on AI images of youth in adult clothing or sexualized poses.",
        "quote": "Accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
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
            "description": "Evidence that the account focuses on AI-generated images of minors in inappropriate contexts",
            "example": "Screenshots of multiple posts showing the pattern of content",
            "reason": "To establish the account's focus and pattern of violations"
          },
          {
            "description": "Proof that the depicted individuals are minors",
            "example": "Evidence of age or clear indication of youth",
            "reason": "To establish that minors are being depicted inappropriately"
          }
        ],
        "removalCriteria": [
          "Account is focused on AI images of youth",
          "Images show youth in clothing suited for adults",
          "Images show youth in sexualized poses or facial expressions"
        ]
      },
      {
        "id": "tt-integrity-impersonation",
        "reference": "TT-INTEGRITY-DECEPTIVE-1",
        "summary": "TikTok prohibits impersonation by pretending to be someone else without clearly stating the account is fan or parody.",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof that you are the person being impersonated",
            "example": "Government-issued ID or official verification documents",
            "reason": "To verify your identity and establish impersonation"
          },
          {
            "description": "Evidence that the account is impersonating you without proper disclosure",
            "example": "Screenshots of the account profile and content showing impersonation",
            "reason": "To demonstrate the impersonation and lack of fan/parody disclosure"
          }
        ],
        "removalCriteria": [
          "Account pretends to be another person",
          "Account does not clearly state it is a fan or parody account in the display name"
        ]
      },
      {
        "id": "tt-integrity-copyright",
        "reference": "TT-INTEGRITY-IP-1",
        "summary": "TikTok prohibits content that violates someone else's intellectual property rights including copyrights and trademarks.",
        "quote": "We don't allow content that violates someone else's intellectual property (IP) rights",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of ownership of the intellectual property being infringed",
            "example": "Copyright registration, trademark registration, or other ownership documentation",
            "reason": "To establish legal rights to the content"
          },
          {
            "description": "Evidence of the infringing content on TikTok",
            "example": "Links or screenshots of the unauthorized use of your IP",
            "reason": "To identify the specific violation"
          }
        ],
        "removalCriteria": [
          "Content violates copyrights of another person or entity",
          "Content violates trademarks of another person or entity",
          "Content violates other intellectual property rights"
        ]
      },
      {
        "id": "tt-integrity-hacked-materials",
        "reference": "TT-INTEGRITY-DECEPTIVE-2",
        "summary": "TikTok prohibits distribution of hacked materials when this poses a significant risk of harm.",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that your private materials were obtained through hacking",
            "example": "Documentation of security breach, unauthorized access, or hacking incident",
            "reason": "To establish that materials were obtained illegally"
          },
          {
            "description": "Proof that you are the owner of the hacked materials",
            "example": "Evidence of ownership or creation of the materials",
            "reason": "To verify your rights to the content"
          },
          {
            "description": "Evidence of significant risk of harm from distribution",
            "example": "Documentation of potential personal, professional, or safety risks",
            "reason": "To meet the harm threshold for removal"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through hacking or unauthorized access",
          "Distribution of the materials poses a significant risk of harm"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides copyright and trademark reporting tools through in-app mechanisms, with reference to their IP policies for detailed procedures.",
      "steps": [
        "Submit a copyright report through TikTok's in-app tools if copyright violation",
        "Submit a trademark report through TikTok's in-app tools if trademark violation",
        "Refer to TikTok's IP policies for detailed procedures and requirements"
      ]
    }
  }
],
};
