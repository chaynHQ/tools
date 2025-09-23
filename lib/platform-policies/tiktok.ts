import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including safety and civility, harassment and bullying, and content enforcement policies. Updated in August 2025 with new language around content moderation and enhanced policies for AI content and LIVE creators.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T15:04:15.747Z",
    "policies": [
      {
        "id": "tt-ncii-policy",
        "reference": "TT-CG-NCSII",
        "summary": "Strictly prohibits adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.",
        "quote": "We don't allow content that shows, promotes, or facilitates adult sexual abuse or exploitation.",
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
          "Content shows, promotes, or facilitates adult sexual abuse or exploitation",
          "Content depicts adult nudity, sexual activity, or is sexually suggestive",
          "Content is an intimate image or video (authentic or AI-generated) shared without the consent of the depicted individual"
        ]
      },
      {
        "id": "tt-ai-policy",
        "reference": "TT-CG-AI",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AIGC that misleads about matters of public importance or that harms individuals.",
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
            "description": "Description of how the content is a deepfake or violates policy",
            "reason": "To understand the nature of the AI violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content is used to create harmful or misleading content",
          "Realistic AI or edited content is not clearly labeled",
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
          "private",
          "other"
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
          "Content harasses or bullies others",
          "Content contains degrading remarks about appearance",
          "Content constitutes doxing",
          "Content involves sexual harassment",
          "Content is part of coordinated abuse"
        ]
      },
      {
        "id": "tt-privacy-policy",
        "reference": "TT-CG-PRIVACY",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "contentTypes": [
          "private",
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
            "description": "Link to the content containing personal information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of the private information exposed",
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
          "Personal information is shared without consent"
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
    "accessTimestamp": "2025-09-23T15:04:15.747Z",
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
            "example": "Copyright takedown notice under DMCA",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership of the content",
            "example": "Evidence showing you created or own the copyright to the image/video",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "Direct links to the TikTok posts containing your copyrighted content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content is an original work (photo, video) posted without the copyright owner's permission"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-4",
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
            "description": "Report through the feedback form with details of unauthorized access",
            "example": "Description of how account was compromised and what unauthorized activity occurred",
            "reason": "To investigate and secure the compromised account"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Third party knows user's password or has accessed the account without permission"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity or falsely representing affiliation with others.",
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
            "description": "Evidence that someone is impersonating you",
            "example": "Screenshots showing fake profile using your identity or content",
            "reason": "To verify impersonation is occurring"
          },
          {
            "description": "Proof of your identity",
            "example": "Information demonstrating you are the real person being impersonated",
            "reason": "To confirm you are the legitimate person being impersonated"
          }
        ],
        "removalCriteria": [
          "User is impersonating another person or entity",
          "User is falsely representing their affiliation with another person or entity",
          "Content gives false impression it emanates from TikTok Services"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits intimidating or harassing others and content designed to provoke, harm, or upset people.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age; ... any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Evidence of intimidating or harassing behavior",
            "example": "Screenshots of threatening messages or harassing content",
            "reason": "To document the harassment for review"
          },
          {
            "description": "URL(s) of the harassing content",
            "example": "Direct links to TikTok posts or messages containing harassment",
            "reason": "To identify specific content that violates harassment policy"
          }
        ],
        "removalCriteria": [
          "Content intimidates or harasses another person",
          "Material is deliberately designed to provoke or antagonize people",
          "Content is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
          "Content constitutes trolling and bullying"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits sharing private information of third parties including personal documents and identifying details.",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers",
        "contentTypes": [
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
            "description": "Evidence that your private information has been shared",
            "example": "Screenshots showing your personal details posted without permission",
            "reason": "To verify unauthorized sharing of private information"
          },
          {
            "description": "URL(s) of content containing private information",
            "example": "Direct links to posts containing your private details",
            "reason": "To identify specific content that violates privacy"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties",
          "Material includes addresses, phone numbers, email addresses",
          "Content shows personal identity document numbers or credit card numbers"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at their discretion for violations or harm to users.",
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
            "description": "Report content through feedback form",
            "example": "Detailed report explaining why content should be removed",
            "reason": "To alert TikTok to potentially violating content"
          }
        ],
        "removalCriteria": [
          "Content is objectionable",
          "Content violates Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users through TikTok's feedback form. Counter-notices may be filed for copyright claims, which can lead to content restoration unless legal action is taken.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide details about the content or issue you want to report",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless legal action is filed, removed content may be restored in ten business days or more after receipt of counter-notice"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024, with enhanced transparency about data collection and sharing practices.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T15:04:15.747Z",
    "policies": [
      {
        "id": "tt-pp-user-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Prohibits abuse, fraud, and illegal activity on the Platform through content scanning and analysis",
        "quote": "To help us detect abuse, fraud, and illegal activity on the Platform. To promote the safety and security of the Platform, including by scanning, analyzing, and reviewing User Content, messages and associated metadata for violations of our Terms of Service, Community Guidelines, or other conditions and policies.",
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
            "description": "Report through the privacy reporting system",
            "example": "Submit request at https://www.tiktok.com/legal/report/privacy",
            "reason": "To initiate content review and removal process"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content constitutes abuse, fraud, or illegal activity"
        ]
      },
      {
        "id": "tt-pp-biometric-data-collection",
        "reference": "Automatically Collected Information - Image and Audio Information",
        "summary": "Collects biometric identifiers and information from user content with required permissions where mandated by law",
        "quote": "We may collect biometric identifiers and biometric information as defined under U.S. laws, such as faceprints and voiceprints, from your User Content. Where required by law, we will seek any required permissions from you prior to any such collection.",
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
            "description": "Contact privacy team for biometric data concerns",
            "example": "Submit request at https://www.tiktok.com/legal/report/privacy",
            "reason": "To address unauthorized collection or use of biometric information"
          }
        ],
        "removalCriteria": [
          "Biometric data collected without required legal permissions",
          "Unauthorized use of faceprints or voiceprints from User Content"
        ]
      },
      {
        "id": "tt-pp-underage-account-removal",
        "reference": "Children and Teens",
        "summary": "Requires deletion of accounts and content when users are identified as being under 13 years old",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Report suspected underage user",
            "example": "Contact through https://www.tiktok.com/legal/report/feedback",
            "reason": "To verify age and initiate account termination if user is under 13"
          }
        ],
        "removalCriteria": [
          "User is identified as being under 13 years old",
          "Personal information collected from a child under 13"
        ]
      },
      {
        "id": "tt-pp-parental-content-removal",
        "reference": "Children and Teens",
        "summary": "Allows parents and guardians to request deletion of underage children's accounts and content",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account. For example, you may request the deletion of their accounts, download account data, or exercise other rights in connection with your child or teen by contacting us at https://www.tiktok.com/legal/report/privacy.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of parental or guardian relationship",
            "example": "Documentation showing legal guardianship or parental status",
            "reason": "To verify authority to make requests on behalf of minor"
          },
          {
            "description": "Submit request through privacy portal",
            "example": "Contact at https://www.tiktok.com/legal/report/privacy",
            "reason": "To initiate account deletion or data download process"
          }
        ],
        "removalCriteria": [
          "Request made by verified parent or guardian",
          "Account belongs to underage child or teen",
          "Request complies with applicable state law requirements"
        ]
      },
      {
        "id": "tt-pp-california-minor-content-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Provides content removal rights for California residents under 18 years old for content they posted",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
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
            "description": "Description of User Content to be removed",
            "example": "Detailed description of the specific content posted",
            "reason": "To locate the specific content for removal"
          },
          {
            "description": "Information sufficient to locate content",
            "example": "URL, timestamp, or other identifying information",
            "reason": "To enable platform to find and remove the specific content"
          },
          {
            "description": "Proof of California residency and age under 18",
            "example": "Documentation showing California residence and age",
            "reason": "To verify eligibility for this specific removal right"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years old",
          "Content was posted by the requesting user themselves",
          "Adequate information provided to locate the content"
        ]
      },
      {
        "id": "tt-pp-connecticut-minor-account-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows Connecticut residents under 18 and parents of users under 16 to request account deletion",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16) by following the instructions here.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of Connecticut residency and age",
            "example": "Documentation showing Connecticut residence and age verification",
            "reason": "To verify eligibility for Connecticut-specific removal rights"
          },
          {
            "description": "Follow account deletion instructions",
            "example": "Complete process outlined in TikTok's safety guidelines",
            "reason": "To properly initiate account unpublishing or deletion"
          }
        ],
        "removalCriteria": [
          "User is Connecticut resident under 18 years old requesting own account deletion",
          "Parent/guardian of Connecticut resident under 16 requesting child's account deletion",
          "Proper deletion process followed"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests through the same privacy reporting system",
      "steps": [
        "Submit initial privacy request through the privacy reporting portal",
        "Receive decision notification from TikTok",
        "Follow instructions in the decision communication to submit an appeal",
        "Alternatively, send appeal request to physical address: TikTok Inc., Attn: Privacy Policy Inquiry, 5800 Bristol Parkway, Suite 100, Culver City, CA 90230"
      ]
    }
  },
  {
    "id": "tiktok-new-1758639855747-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA procedures, including takedown processes and counter-notification procedures for intellectual property violations.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T15:04:15.747Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright, including unauthorized use of copyrighted content without proper authorization or legally valid reason",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
        "contentTypes": [
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, identification of infringing content, contact information",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Information about the copyrighted work and evidence of ownership",
            "example": "Details of the original work, proof of copyright ownership",
            "reason": "Required by DMCA and similar laws for compliant notification"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Unauthorized use of copyrighted content without proper authorization or legally valid reason"
        ]
      },
      {
        "id": "tt-ip-copyright-removal-enforcement",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes copyright and may temporarily restrict LIVE feature access, with repeat infringer policy leading to account bans",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User content infringes another person's copyright",
          "User repeatedly commits copyright infringement",
          "Severe copyright violations"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of identical or similar trademarks in connection with goods or services that is likely to cause confusion about source, origin, sponsorship or affiliation",
        "quote": "Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.",
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
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark ownership details, identification of infringing content, contact information",
            "reason": "To facilitate evaluation of the trademark infringement report"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion, deception or mistake about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits the purchase, sale, trade, promotion, or solicitation of counterfeit goods and removes such content",
        "quote": "Counterfeiting is the illegal manufacturing, importing and exporting, distributing, selling, facilitating the trade of, or otherwise dealing in goods under a trademark that is identical to or substantially similar to a registered trademark, without the trademark owner's permission, thereby infringing the rights of the trademark owner. Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods",
          "Content violates trademark rights through counterfeiting"
        ]
      },
      {
        "id": "tt-ip-trademark-removal-enforcement",
        "reference": "Removal of Content; Account Bans (Trademark)",
        "summary": "Removes content that violates trademark rights and may temporarily restrict LIVE feature access, with repeat infringer policy leading to account bans",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "User repeatedly commits trademark infringement",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can appeal content removal through in-app notifications, with different processes for EU and non-EU users. Appeals require contact information and supporting evidence, and may be forwarded to original reporters.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal through TikTok app",
        "TikTok may contact you for additional questions",
        "Appeal forwarded to original reporter where appropriate",
        "Content may be reinstated at TikTok's discretion (non-EU users)",
        "Alternative: Contact copyright/trademark owner directly for retraction"
      ]
    }
  },
  {
    "id": "tiktok-new-1758639855747-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention Policy",
    "summary": "Dedicated policy addressing harassment, bullying, and harmful behavior on the platform, including reporting mechanisms and enforcement procedures.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T15:04:15.747Z",
    "policies": [
      {
        "id": "tt-bp-harassment-bullying",
        "reference": "Bullying Prevention Policy",
        "summary": "Prohibits language or behavior that harasses, humiliates, threatens or doxxes anyone on the platform",
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
            "description": "Report the bullying content through TikTok's reporting system",
            "example": "Use the in-app reporting feature to flag harassing content",
            "reason": "Required for moderation team to review and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content that harasses other users",
          "Content that humiliates other users",
          "Content that threatens other users",
          "Content that doxxes other users by publishing personal information with malicious intent",
          "Content that violates TikTok's Community Guidelines"
        ]
      },
      {
        "id": "tt-bp-public-figure-attacks",
        "reference": "Bullying Prevention Policy - Public Figures",
        "summary": "Prohibits severe attacks against public figures that may promote physical harm or harassment",
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
            "description": "Report the content targeting public figures through TikTok's reporting system",
            "example": "Use the in-app reporting feature to flag severe attacks on public figures",
            "reason": "Required for moderation team to assess risk of physical or psychological harm"
          }
        ],
        "removalCriteria": [
          "Severe attacks targeting public figures",
          "Content that may promote physical harm against public figures",
          "Content that promotes harassment against public figures",
          "Content where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report bullying and harassment content through TikTok's in-app reporting system for moderation team review",
      "steps": [
        "Access the in-app reporting feature",
        "Report the content that violates Community Guidelines",
        "Moderation team reviews the report",
        "Appropriate action is taken if violations are confirmed"
      ]
    }
  }
],
};
