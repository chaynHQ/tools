import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, and content removal policies. Updated August 2025 with new AI content policies and enhanced enforcement measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-18T21:47:55.036Z",
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
          "AI-generated content is used to mislead about matters of public importance",
          "AIGC that harms individuals",
          "Realistic AI or edited content lacks clear labeling"
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
          "Content constitutes harassment or bullying",
          "Content contains degrading remarks about appearance",
          "Content involves doxing",
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
            "description": "Explanation of potential harm from the information sharing",
            "reason": "To establish the risk of identity theft, stalking, or fraud"
          }
        ],
        "removalCriteria": [
          "Content shares personal information that could lead to identity theft",
          "Content shares personal information that could enable stalking",
          "Content shares personal information that could facilitate fraud",
          "Content reveals private information without consent"
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
            "reason": "To understand the nature and extent of the deceptive behavior"
          },
          {
            "description": "Evidence of your authentic identity if being impersonated",
            "reason": "To verify you are the person being impersonated"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity or purpose",
          "Account attempts to manipulate the platform",
          "Account engages in deceptive behavior",
          "Account uses fake engagement or tricks the recommendation system"
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
            "reason": "To verify standing to make the intellectual property claim"
          },
          {
            "description": "Description of the copyrighted or trademarked material being infringed",
            "reason": "To understand what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content violates intellectual property rights",
          "Content reposts copyrighted material without permission",
          "Content uses trademarked material without authorization",
          "Content infringes on protected intellectual property"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tt-terms-of-service",
    "reference": "TT-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of TikTok, including content ownership and intellectual property rights.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-18T21:47:55.036Z",
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
        "summary": "Prohibits posting content that is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people.",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "URL(s) of the harassing content",
            "reason": "To identify the specific content that violates the policy"
          },
          {
            "description": "Description of how the content is harassing or distressing",
            "reason": "To demonstrate policy violation"
          }
        ],
        "removalCriteria": [
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-PRIVATE",
        "summary": "Prohibits uploading or sharing any private information of any third party without authorization.",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers",
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
            "description": "URL(s) of content containing private information",
            "reason": "To identify the specific content that violates privacy"
          },
          {
            "description": "Identification of what private information is being shared",
            "reason": "To demonstrate the privacy violation"
          },
          {
            "description": "Confirmation that the information was shared without permission",
            "reason": "To establish unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Content contains private information of a third party shared without authorization"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-IMPERSON",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation with any person or entity.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
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
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific impersonation"
          },
          {
            "description": "Evidence of your identity",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Description of how the account/content is impersonating you",
            "reason": "To demonstrate the impersonation violation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "Content falsely represents affiliation with another person or entity"
        ]
      },
      {
        "id": "tt-unauthorized-account-use-policy",
        "reference": "TT-TOS-UNAUTH",
        "summary": "Prohibits using or attempting to use another's account without authorization from TikTok.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
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
            "description": "Evidence of unauthorized account access",
            "reason": "To demonstrate the account was compromised"
          },
          {
            "description": "URL(s) of content posted without authorization",
            "reason": "To identify specific unauthorized content"
          },
          {
            "description": "Proof of legitimate account ownership",
            "reason": "To verify you are the rightful account owner"
          }
        ],
        "removalCriteria": [
          "Account is being used without authorization from the legitimate owner",
          "Content was posted through unauthorized account access"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-REMOVAL",
        "summary": "TikTok reserves the right to remove or disable access to content that violates Terms of Service or Community Guidelines.",
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
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Explanation of how content violates Terms of Service or Community Guidelines",
            "reason": "To demonstrate policy violation"
          }
        ],
        "removalCriteria": [
          "Content is objectionable or harmful to the Services or users",
          "Content violates Terms of Service or Community Guidelines"
        ]
      },
      {
        "id": "tt-hacked-account-policy",
        "reference": "TT-TOS-HACKED",
        "summary": "Users must notify TikTok immediately if they suspect their account has been compromised or accessed by a third party.",
        "quote": "If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Report through TikTok's feedback form at https://www.tiktok.com/legal/report/feedback",
            "reason": "Official channel for reporting compromised accounts"
          },
          {
            "description": "Details of suspected unauthorized access",
            "reason": "To help TikTok investigate and secure the account"
          },
          {
            "description": "Any evidence of unauthorized activity on the account",
            "reason": "To demonstrate the account compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to the account",
          "Suspicious activity indicating account compromise"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or contact TikTok for assistance through their feedback form. Counter-notices can be filed for copyright claims.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide details about the complaint or issue",
        "For copyright counter-notices, TikTok may send a copy to the original complainant",
        "Removed content may be restored in ten business days unless legal action is filed"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-18T21:47:55.036Z",
    "policies": [
      {
        "id": "tt-pp-content-removal-under18",
        "reference": "TT-PP-CONTENT-REMOVAL",
        "summary": "California residents under 18 can request removal of User Content they posted by providing adequate description and location information.",
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
            "example": "Detailed description of the video, image, or post",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit us to locate that User Content",
            "example": "URL, username, date posted, or other identifying information",
            "reason": "To locate the content in TikTok's system"
          }
        ],
        "removalCriteria": [
          "Content must have been posted by the requesting user",
          "User must be a California resident",
          "User must be under 18 years of age",
          "Adequate information must be provided to locate the content"
        ]
      },
      {
        "id": "tt-pp-connecticut-minor-removal",
        "reference": "TT-PP-CONNECTICUT-REMOVAL",
        "summary": "Connecticut residents under 18 and parents/guardians of users under 16 can request account unpublishing or deletion through specific procedures.",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16) by following the instructions here.",
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
            "description": "Proof of Connecticut residency",
            "reason": "To verify eligibility for this protection"
          },
          {
            "description": "Proof of age (under 18 for users, under 16 for children of parents/guardians)",
            "reason": "To verify eligibility for minor protections"
          },
          {
            "description": "Proof of parental/guardian relationship (for parent/guardian requests)",
            "reason": "To verify authority to request child's account removal"
          }
        ],
        "removalCriteria": [
          "User must be a Connecticut resident under 18, or parent/guardian of Connecticut resident under 16",
          "Request must follow specified instructions and procedures",
          "Proper verification of identity and relationship must be provided"
        ]
      },
      {
        "id": "tt-pp-privacy-violations-reporting",
        "reference": "TT-PP-PRIVACY-VIOLATIONS",
        "summary": "Users can request deletion of personal information collected about them, including when they appear in other users' content without consent.",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. We may receive information about you from others, including where you are included or mentioned in User Content, direct messages, in a complaint, appeal, request or feedback submitted to us, or if your contact information is provided to us.",
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
            "description": "Information necessary to verify your account or identity",
            "example": "Email address associated with account or other identifying information",
            "reason": "To verify the request is legitimate and from the correct person"
          },
          {
            "description": "Description of the information you want deleted",
            "reason": "To identify what personal information should be removed"
          }
        ],
        "removalCriteria": [
          "Information must be personal information collected from or about the requesting user",
          "Request must be properly verified",
          "Request must comply with applicable law requirements"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "TT-PP-PARENTAL-RIGHTS",
        "summary": "Parents and guardians can request deletion of their underage child's account or download account data by contacting TikTok's privacy team.",
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
            "description": "Proof of parental or guardian relationship to the child",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Proof that the child is underage",
            "reason": "To verify eligibility for parental rights protections"
          },
          {
            "description": "Information to identify the child's account",
            "example": "Username, email address, or other account identifying information",
            "reason": "To locate and process the correct account"
          }
        ],
        "removalCriteria": [
          "Requesting party must be verified parent or legal guardian",
          "Child must be under the age of majority",
          "Request must comply with applicable state law requirements",
          "Child's account must be properly identified"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about their privacy requests by following instructions provided in TikTok's response communication.",
      "steps": [
        "Submit initial request through the privacy portal",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal with additional information if needed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232075035-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, and repeat infringer policies. Essential for content removal requests related to unauthorized use of copyrighted material.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-18T21:47:55.036Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban accounts for repeated violations.",
        "quote": "Any user content that infringes another person's copyright may be removed. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright infringement report form with all requested information",
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright claim"
          },
          {
            "description": "Contact information for follow-up questions",
            "example": "Email address or phone number",
            "reason": "Platform may need to contact reporter for clarification"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason",
          "Content does not fall under fair use, fair dealing, or other copyright exceptions"
        ]
      },
      {
        "id": "tiktok-ip-trademark-infringement",
        "reference": "TT-IP-TRADEMARK",
        "summary": "TikTok removes content that violates trademark rights and prohibits counterfeit goods promotion.",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
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
            "description": "Complete trademark infringement report form with all requested information",
            "example": "Trademark registration details, evidence of infringement",
            "reason": "To investigate trademark violation claims"
          },
          {
            "description": "Contact information for follow-up questions",
            "example": "Email address or phone number",
            "reason": "Platform may need additional information about the report"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark causing confusion about source or affiliation",
          "Content promotes or facilitates trade of counterfeit goods",
          "Use of trademark to designate user's own goods or services without permission"
        ]
      },
      {
        "id": "tiktok-ip-repeat-infringer-policy",
        "reference": "TT-IP-REPEAT",
        "summary": "TikTok bans accounts of users who repeatedly commit intellectual property infringement and may immediately ban accounts for severe violations.",
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
            "description": "Documentation of repeated infringement violations",
            "example": "Multiple takedown notices for the same account",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright or trademark infringement",
          "Severe intellectual property violations warrant immediate account ban",
          "Account was previously used for improper IP-related activities"
        ]
      },
      {
        "id": "tiktok-ip-live-feature-restriction",
        "reference": "TT-IP-LIVE",
        "summary": "TikTok may temporarily restrict access to LIVE features for users who commit intellectual property infringement during live streaming.",
        "quote": "If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of IP infringement during live streaming",
            "example": "Screenshots or recordings of infringing live content",
            "reason": "To verify infringement occurred during LIVE feature use"
          }
        ],
        "removalCriteria": [
          "Copyright infringement occurs during use of LIVE feature",
          "Trademark violations occur in connection with LIVE feature use"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications, with different processes for EU and non-EU users. Appeals require complete information and may be forwarded to original reporters.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app via the notification",
        "Provide all required information including contact details and supporting evidence",
        "Platform may contact for additional questions about the appeal",
        "Appeal may be forwarded to original reporter including contact information",
        "Content may be reinstated at TikTok's sole discretion if no infringement found"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232075035-1",
    "reference": "TT-HARASSMENT",
    "title": "Bullying Prevention Policy",
    "summary": "Dedicated policy page addressing harassment, bullying, and cyberbullying prevention measures. Covers reporting mechanisms and enforcement actions.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-18T21:47:55.036Z",
    "policies": [
      {
        "id": "tiktok-harassment-bullying",
        "reference": "TT-HARASSMENT",
        "summary": "TikTok prohibits language or behavior that harasses, humiliates, threatens or doxxes anyone on the platform, including targeted behavior intended to cause harm.",
        "quote": "We do not tolerate language or behavior that harasses, humiliates, threatens or doxxes (publishing personal information about someone online with a malicious intent) anyone on the platform.",
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
            "description": "Report the content through TikTok's in-app reporting system",
            "example": "Use the report function on the specific video, comment, or account",
            "reason": "Required for moderation team review and action"
          }
        ],
        "removalCriteria": [
          "Content that harasses other users",
          "Content that humiliates other users",
          "Content that threatens other users",
          "Content that doxxes users (publishing personal information with malicious intent)",
          "Content that violates TikTok's Community Guidelines"
        ]
      },
      {
        "id": "tiktok-doxxing-personal-info",
        "reference": "TT-HARASSMENT",
        "summary": "TikTok specifically prohibits doxxing, defined as publishing personal information about someone online with malicious intent.",
        "quote": "doxxes (publishing personal information about someone online with a malicious intent)",
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
            "description": "Report the doxxing content through TikTok's reporting system",
            "example": "Report videos, comments, or profiles containing your personal information",
            "reason": "Enables moderation team to review and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone with malicious intent",
          "Content that exposes private personal details without consent"
        ]
      },
      {
        "id": "tiktok-public-figure-attacks",
        "reference": "TT-HARASSMENT",
        "summary": "TikTok does not allow public figures to be targeted with severe attacks that may promote physical harm or harassment against them.",
        "quote": "We do not allow public figures to be targeted with severe attacks that may promote physical harm or promotion of harassment against them. We consider the risk of physical or severe psychological harm resulting from these attacks to be greater than the benefit of their expression and remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report content targeting public figures with severe attacks",
            "example": "Content promoting physical harm or harassment against public figures",
            "reason": "Content poses risk of physical or severe psychological harm"
          }
        ],
        "removalCriteria": [
          "Severe attacks against public figures that may promote physical harm",
          "Content promoting harassment against public figures",
          "Content where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines through the in-app reporting system for moderation team review.",
      "steps": [
        "Report the content in-app following the provided steps",
        "Moderation team reviews the report",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232075035-2",
    "reference": "TT-IMPERSONATION",
    "title": "Impersonation Reporting Guidelines",
    "summary": "Detailed guidelines for reporting impersonation accounts and fake profiles, including verification requirements and appeal processes.",
    "url": "https://support.tiktok.com/en/safety-hc/report-a-problem/report-an-impersonation-account",
    "accessTimestamp": "2025-09-18T21:47:55.036Z",
    "policies": [
      {
        "id": "tiktok-impersonation-report",
        "reference": "TT-IMPERSONATION",
        "summary": "TikTok allows reporting of accounts that impersonate individuals by pretending to be someone else, with specific forms for U.S. and non-U.S. users requiring identification verification.",
        "quote": "If you believe an account is fake and impersonating you or someone else, you can report it to us using the following forms: • Impersonation accounts in the U.S. • Impersonation accounts outside of the U.S.",
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
            "description": "Valid identification document",
            "example": "Government-issued ID or other accepted identification methods",
            "reason": "To verify identity of the person being impersonated"
          },
          {
            "description": "Electronic signature with full name",
            "example": "Typed name confirming statements",
            "reason": "To authenticate the report submission"
          },
          {
            "description": "Country information and relationship to impersonated person",
            "example": "Whether reporting for yourself or someone else",
            "reason": "To determine appropriate handling process"
          }
        ],
        "removalCriteria": [
          "Account is fake and impersonating another person",
          "Account is pretending to be someone else (individual or celebrity)",
          "Account violates impersonation policies by using someone's identity without permission"
        ]
      },
      {
        "id": "tiktok-impersonation-in-app",
        "reference": "TT-IMPERSONATION",
        "summary": "TikTok provides in-app and web browser reporting mechanisms for impersonation accounts with options to specify if the account is impersonating the reporter or a celebrity.",
        "quote": "To report an impersonation account from the app or a web browser: From the TikTok app: 1. Go to the profile and tap the Share button at the top. 2. Tap Report and select Report account. 3. Select Pretending to Be Someone. 4. Select Me if the account is impersonating you, or Celebrity if it's impersonating someone else.",
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
            "description": "Identification of who is being impersonated",
            "example": "Select 'Me' for self-impersonation or 'Celebrity' with username search",
            "reason": "To categorize and process the impersonation report appropriately"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be the reporter",
          "Account is pretending to be a celebrity or public figure",
          "Account is using someone else's identity without authorization"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/submit-requests",
      "summary": "TikTok provides an appeal process for impersonation account decisions through their legal reporting forms, specifically for U.S. accounts.",
      "steps": [
        "Select 'Appeal an Impersonation Account on TikTok' from the dropdown list on the legal report form",
        "Enter email address and country information",
        "Provide details about who is being impersonated",
        "Upload valid identification documents",
        "Confirm statements with electronic signature",
        "Submit the appeal form"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232075035-3",
    "reference": "TT-APPEAL",
    "title": "Content Violations and Appeals Process",
    "summary": "Comprehensive guide to TikTok's content moderation enforcement, strike system, and appeal procedures for removed content.",
    "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
    "accessTimestamp": "2025-09-18T21:47:55.036Z",
    "policies": [
      {
        "id": "tt-appeal-ncii",
        "reference": "TT-APPEAL-SEVERE-VIOLATIONS",
        "summary": "TikTok permanently bans accounts that post or promote content depicting non-consensual sex acts such as rape or molestation.",
        "quote": "Post or promote content that depicts non-consensual sex acts such as rape or molestation.",
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
            "description": "Report the violating content through TikTok's reporting system",
            "example": "Use the 'Report a post' or 'Report an account' feature",
            "reason": "Required to initiate content review and potential account action"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual sex acts",
          "Content promotes non-consensual sexual activity",
          "Content facilitates non-consensual intimate imagery sharing"
        ]
      },
      {
        "id": "tt-appeal-csam",
        "reference": "TT-APPEAL-SEVERE-VIOLATIONS",
        "summary": "TikTok permanently bans accounts that post, promote, or facilitate youth exploitation or child sexual abuse material (CSAM).",
        "quote": "Post, promote, or facilitate youth exploitation or child sexual abuse material (CSAM).",
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
            "description": "Report the violating content immediately through TikTok's reporting system",
            "example": "Use emergency reporting channels for CSAM content",
            "reason": "Legal requirement and platform safety priority"
          }
        ],
        "removalCriteria": [
          "Content contains child sexual abuse material",
          "Content promotes youth exploitation",
          "Content facilitates harm to minors"
        ]
      },
      {
        "id": "tt-appeal-impersonation",
        "reference": "TT-APPEAL-PERMANENT-BAN",
        "summary": "TikTok permanently bans accounts that impersonate another person or entity in a deceptive manner.",
        "quote": "The account impersonates another person or entity in a deceptive manner.",
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
            "description": "Report the impersonating account through the dedicated impersonation reporting feature",
            "example": "Use 'Report an impersonation account' option",
            "reason": "Specific reporting channel exists for impersonation cases"
          },
          {
            "description": "Provide evidence of your identity being impersonated",
            "example": "Documentation showing you are the legitimate person being impersonated",
            "reason": "Verification needed to confirm impersonation claim"
          }
        ],
        "removalCriteria": [
          "Account deceptively impersonates another person",
          "Account deceptively impersonates an entity",
          "Account uses someone else's identity without permission"
        ]
      },
      {
        "id": "tt-appeal-content-removal",
        "reference": "TT-APPEAL-CONTENT-MODERATION",
        "summary": "TikTok removes content that violates Community Guidelines and provides notification with appeal opportunity.",
        "quote": "If a violation is identified: We'll remove the content and, if so, notify you of the reason. You'll be given the opportunity to appeal the decision.",
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
            "description": "Report violating content through appropriate reporting channels",
            "example": "Use 'Report a post', 'Report a comment', or 'Report an account'",
            "reason": "Initiates content review process by Trust and Safety team"
          }
        ],
        "removalCriteria": [
          "Content violates TikTok Community Guidelines",
          "Content is determined harmful by Trust and Safety review",
          "Content poses safety risk to community"
        ]
      },
      {
        "id": "tt-appeal-strike-system",
        "reference": "TT-APPEAL-STRIKES",
        "summary": "TikTok issues strikes for Community Guidelines violations, with strikes expiring after 90 days and permanent bans for severe or repeated violations.",
        "quote": "Our system counts the number of times your account has violated our Community Guidelines, and for each violation after your first warning, you'll receive a strike on your account. Strikes on your TikTok account will expire after 90 days and will no longer be taken into consideration for a permanent account ban.",
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
            "value": 90,
            "unit": "days",
            "description": "Strike expiration period"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report violations through TikTok's reporting system",
            "example": "Multiple reports may be needed for pattern of violations",
            "reason": "System tracks violations to determine strike accumulation"
          }
        ],
        "removalCriteria": [
          "Account reaches strike threshold for multiple violations",
          "Severe violation on first offense",
          "Repeated violations within policy areas"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety#3",
      "summary": "TikTok provides appeal processes for both content removal and account bans, with successful appeals resulting in content/account reinstatement and strike removal.",
      "steps": [
        "Access violation notifications through Inbox > System notifications > Account updates",
        "For content appeals: Go to removed content and follow appeal prompts in notifications",
        "For For You feed eligibility: Go to post > More insights > Analytics > Appeal",
        "For account bans: Log into banned account to submit appeal and download data",
        "If appeal approved: Content/account reinstated and strikes removed"
      ]
    }
  }
],
};
