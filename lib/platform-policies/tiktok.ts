import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, privacy violations, and content removal policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
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
          "AI-generated content is used to create misleading depictions that harm individuals",
          "Realistic AI or edited content is not clearly labeled",
          "AIGC misleads about matters of public importance"
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
          "Content constitutes targeted harassment or bullying",
          "Content contains degrading remarks about appearance",
          "Content involves doxing or sharing personal information to harass",
          "Content constitutes sexual harassment",
          "Content is part of coordinated abuse against an individual"
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
          "Content reveals personal information that could lead to identity theft",
          "Content shares information that could enable stalking",
          "Content exposes personal information that could facilitate fraud",
          "Information is shared without the subject's consent"
        ]
      },
      {
        "id": "tt-deceptive-behavior-policy",
        "reference": "TT-CG-DECEPTIVE",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform, including impersonation and fake engagement activities.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "contentTypes": [
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
            "description": "Link to the misleading or impersonating account",
            "reason": "To identify the deceptive account"
          },
          {
            "description": "Evidence of your authentic identity",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is misleading or manipulative",
            "reason": "To understand the nature and extent of the deceptive behavior"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity or purpose",
          "Account attempts to manipulate platform systems",
          "Account engages in fake engagement activities",
          "Account tricks the recommendation system"
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
            "description": "Evidence of ownership or authorization to represent the rights holder",
            "reason": "To verify you have the right to request removal"
          },
          {
            "description": "Description of the copyrighted or trademarked material being infringed",
            "reason": "To understand what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content violates copyright without permission",
          "Content violates trademark rights without authorization",
          "Content is a repost of protected material without proper licensing"
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
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
    "policies": [
      {
        "id": "tt-tos-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement and requires compliance with TikTok's Copyright Policy for access to services.",
        "quote": "We respect intellectual property rights and ask you to do the same. As a condition of your access to and use of the Services, you agree to the terms of the Copyright Policy.",
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
            "description": "Compliance with TikTok's Copyright Policy terms",
            "reason": "Required condition for service access and copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or intellectual property rights of others"
        ]
      },
      {
        "id": "tt-tos-prohibited-content",
        "reference": "TT-TOS-PROHIBITED",
        "summary": "Prohibits uploading private information of third parties, defamatory content, and material designed to harass, harm, or embarrass people.",
        "quote": "use the Services to upload, transmit, distribute, store or otherwise make available in any way: any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers; any material which is defamatory of any person, obscene, offensive, pornographic, hateful or inflammatory; any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Evidence that content contains private information of third parties",
            "reason": "To verify privacy violation"
          },
          {
            "description": "Evidence that content is defamatory, harassing, or designed to embarrass",
            "reason": "To establish violation of prohibited content policy"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties without authorization",
          "Content is defamatory, obscene, offensive, pornographic, hateful or inflammatory",
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-tos-impersonation",
        "reference": "TT-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation, including making content appear to emanate from the Services.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of impersonation or false representation of identity",
            "reason": "To verify impersonation violation"
          },
          {
            "description": "Proof of actual identity being impersonated",
            "reason": "To establish legitimate claim to identity"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person or entity",
          "Content falsely represents user's affiliation with another person or entity",
          "Content gives false impression of emanating from TikTok Services"
        ]
      },
      {
        "id": "tt-tos-unauthorized-account-use",
        "reference": "TT-TOS-UNAUTHORIZED",
        "summary": "Prohibits using or attempting to use another's account or service without authorization, or creating false identities.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized account access or use",
            "reason": "To verify unauthorized access violation"
          },
          {
            "description": "Proof of legitimate account ownership",
            "reason": "To establish rightful ownership of compromised account"
          }
        ],
        "removalCriteria": [
          "Account is being used without authorization from the legitimate owner",
          "False identity has been created on the Services"
        ]
      },
      {
        "id": "tt-tos-account-security",
        "reference": "TT-TOS-SECURITY",
        "summary": "Requires users to keep account passwords confidential and immediately notify TikTok if account is compromised.",
        "quote": "It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
        "contentTypes": [
          "intimate",
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
            "description": "Report compromised account immediately through feedback form",
            "reason": "To initiate account security response"
          },
          {
            "description": "Evidence of unauthorized access or password compromise",
            "reason": "To verify security breach"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised"
        ]
      },
      {
        "id": "tt-tos-content-removal",
        "reference": "TT-TOS-REMOVAL",
        "summary": "TikTok reserves the right to remove or disable access to content at their discretion for any reason, including content that violates Terms or Community Policy.",
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
            "description": "Report content through feedback form with details of violation",
            "reason": "To notify TikTok of problematic content for review"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Policy",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-user-content-removal",
        "reference": "TT-TOS-USER-REMOVAL",
        "summary": "TikTok has the right to remove, disallow, block or delete any user posting that doesn't comply with content standards or in response to complaints.",
        "quote": "We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at 'Your Access to and Use of Our Services' above. In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
            "description": "File complaint about content uploaded by other users through feedback form",
            "reason": "To report violating content for potential removal"
          },
          {
            "description": "Evidence that content violates Terms of Service content standards",
            "reason": "To support removal request"
          }
        ],
        "removalCriteria": [
          "User content does not comply with content standards",
          "User content violates Terms of Service",
          "Complaints received from other users or third parties about the content"
        ]
      },
      {
        "id": "tt-tos-expedited-removal",
        "reference": "TT-TOS-EXPEDITED",
        "summary": "TikTok takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat infringers.",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
            "unit": "expeditious",
            "description": "Reasonable measures to expeditiously remove infringing material"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright or intellectual property infringement",
            "reason": "To trigger expedited removal process"
          }
        ],
        "removalCriteria": [
          "Material infringes copyright or intellectual property rights",
          "User repeatedly infringes copyrights or intellectual property rights"
        ]
      },
      {
        "id": "tt-tos-identity-disclosure",
        "reference": "TT-TOS-DISCLOSURE",
        "summary": "TikTok reserves the right to disclose user identity to third parties claiming intellectual property or privacy rights violations.",
        "quote": "We also have the right to disclose your identity to any third party who is claiming that any User Content posted or uploaded by you to our Services constitutes a violation of their intellectual property rights, or of their right to privacy.",
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
            "description": "Claim that user content violates intellectual property rights",
            "reason": "To justify identity disclosure to claiming party"
          },
          {
            "description": "Claim that user content violates right to privacy",
            "reason": "To justify identity disclosure for privacy violation"
          }
        ],
        "removalCriteria": [
          "User content allegedly violates third party intellectual property rights",
          "User content allegedly violates third party privacy rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content through TikTok's feedback form, and there is a counter-notice process for copyright claims.",
      "steps": [
        "File complaint through https://www.tiktok.com/legal/report/feedback",
        "For copyright counter-notices: TikTok may send copy to original complainant",
        "Unless original complainant files court action, removed content may be restored in ten business days or more"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, including data sharing and user rights.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
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
            "example": "URL, timestamp, username, or other identifying details",
            "reason": "To locate the content in TikTok's system"
          }
        ],
        "removalCriteria": [
          "User must be a California resident",
          "User must be under 18 years of age",
          "Content must have been posted by the requesting user",
          "Adequate information must be provided to locate the content"
        ]
      },
      {
        "id": "tt-pp-connecticut-account-deletion",
        "reference": "TT-PP-CONNECTICUT-DELETION",
        "summary": "Connecticut residents under 18 and parents/guardians of users under 16 can request account unpublishing or deletion.",
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
            "example": "State identification or utility bill",
            "reason": "To verify eligibility under Connecticut law"
          },
          {
            "description": "Age verification or parental relationship proof",
            "example": "Birth certificate or legal guardianship documents",
            "reason": "To confirm age requirements or parental authority"
          }
        ],
        "removalCriteria": [
          "User must be a Connecticut resident under 18 years of age, OR parent/guardian of Connecticut resident under 16",
          "Request must follow provided instructions",
          "For parents/guardians: must demonstrate legal authority over the minor's account"
        ]
      },
      {
        "id": "tt-pp-parent-guardian-rights",
        "reference": "TT-PP-PARENT-RIGHTS",
        "summary": "Parents and guardians can request deletion of underage child accounts or download account data by contacting TikTok's privacy portal.",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account. For example, you may request the deletion of their accounts, download account data, or exercise other rights in connection with your child or teen by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Proof of parental or guardian relationship",
            "example": "Birth certificate, adoption papers, or legal guardianship documents",
            "reason": "To verify legal authority over the minor's account"
          },
          {
            "description": "Identification of the child's account",
            "example": "Username, email address, or other account identifiers",
            "reason": "To locate the specific account for deletion or data download"
          }
        ],
        "removalCriteria": [
          "Requester must be parent or legal guardian of the account holder",
          "Account holder must be underage (under 18)",
          "Request must be made through official privacy portal",
          "Adequate proof of relationship must be provided"
        ]
      },
      {
        "id": "tt-pp-user-data-rights",
        "reference": "TT-PP-USER-RIGHTS",
        "summary": "Users can request to know, access, correct, or delete information collected about them through TikTok's privacy portal or physical address.",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. You may appeal any decision we have made about your request by following the instructions in the communication you receive from us notifying you of our decision. You may also exercise your rights to know, access, correct, delete, or appeal by sending your request to the physical address provided in the 'Contact Us' section below.",
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
            "description": "Request sent from email address associated with account OR information necessary to verify account",
            "example": "Account username, email, phone number, or other identifying information",
            "reason": "To verify identity and prevent unauthorized access to personal information"
          }
        ],
        "removalCriteria": [
          "User must provide proper verification of account ownership",
          "Request must be submitted through official channels",
          "Information requested must be within scope of collected data"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests by following instructions provided in TikTok's response communication.",
      "steps": [
        "Submit initial request through privacy portal or physical address",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal with additional information if needed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233958216-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive copyright and trademark policy covering DMCA takedown procedures, repeat infringer policies, and appeal processes for content removal.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban repeat infringers or restrict LIVE feature access.",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement.",
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
            "example": "Name and contact details of rights holder",
            "reason": "TikTok may provide this information to the user and contact the reporter with questions"
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
        "summary": "TikTok removes content that violates trademark rights and prohibits counterfeit goods, with potential account bans for repeat infringers.",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement.",
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
            "description": "Name of the trademark owner",
            "example": "Registered trademark holder information",
            "reason": "TikTok may provide this information to the reported user"
          }
        ],
        "removalCriteria": [
          "Content violates trademark rights through unauthorized use likely to cause confusion about source or affiliation",
          "Content promotes or facilitates trade in counterfeit goods",
          "Use does not fall under permitted acts like accurate referencing, commentary, criticism, parody, or review"
        ]
      },
      {
        "id": "tiktok-ip-eu-copyright-directive",
        "reference": "TT-IP-EU-COPYRIGHT",
        "summary": "Under EU Copyright Directive Article 17, TikTok provides mechanisms for rights holders to request removal of music or audiovisual works in the EU and prevent re-uploads.",
        "quote": "If you want to request that your music or audiovisual works are made unavailable in the EU, we need you to file this form. Upon receiving this information and validating your request, TikTok will do its best to ensure that your copyrighted work is made unavailable on TikTok in the EU. You may ask us to prevent future copies of a video from re-appearing on the platform when you submit a report via our online Copyright Infringement Report form.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Relevant and necessary information about the rights holder and copyrighted works",
            "example": "Proof of ownership of music or audiovisual works",
            "reason": "For TikTok to consider and validate the EU removal request"
          }
        ],
        "removalCriteria": [
          "Music or audiovisual works requested for removal in EU by validated rights holder",
          "Request submitted through proper EU-specific form with necessary validation information"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright and trademark removals through in-app notifications, with different processes for EU and non-EU users. Appeals may be forwarded to original reporters and could result in legal action.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app accessed from the notification",
        "Provide all required information including contact details and supporting evidence",
        "TikTok may contact you with additional questions about the appeal",
        "For non-EU users: Appeal may be forwarded to copyright claimant who could file lawsuit",
        "Content may be reinstated at TikTok's sole discretion if no court action is filed",
        "Alternative: Contact the rights holder directly to request retraction"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233958216-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention",
    "summary": "Dedicated policy page covering harassment, bullying, and cyberbullying prevention with reporting mechanisms and safety tools.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
    "policies": [
      {
        "id": "tt-bp-harassment-bullying",
        "reference": "TT-BP-HARASSMENT",
        "summary": "TikTok prohibits language or behavior that harasses, humiliates, threatens or doxxes anyone on the platform, including bullying that causes physical, social and/or psychological harm.",
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
            "example": "Use in-app reporting feature to flag harassing content",
            "reason": "Allows moderation team to review and take appropriate action"
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
        "id": "tt-bp-doxxing-personal-info",
        "reference": "TT-BP-DOXXING",
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
            "description": "Report the doxxing content showing personal information published with malicious intent",
            "example": "Content containing private addresses, phone numbers, or other personal details shared to harm someone",
            "reason": "To identify content that violates privacy and poses safety risks"
          }
        ],
        "removalCriteria": [
          "Content that publishes personal information about someone",
          "Content shared with malicious intent to harm the individual",
          "Content that poses safety or privacy risks to users"
        ]
      },
      {
        "id": "tt-bp-public-figure-attacks",
        "reference": "TT-BP-PUBLIC-FIGURES",
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
            "description": "Report content showing severe attacks against public figures",
            "example": "Content promoting physical harm or harassment campaigns against public figures",
            "reason": "To prevent content that poses risk of physical or severe psychological harm"
          }
        ],
        "removalCriteria": [
          "Severe attacks targeting public figures",
          "Content that may promote physical harm against public figures",
          "Content that promotes harassment against public figures",
          "Content where risk of harm outweighs expression benefits"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines through the in-app reporting system for moderation team review.",
      "steps": [
        "Report the content in-app following the provided steps",
        "Moderation team reviews the reported content",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233958216-2",
    "reference": "TT-SC-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed community guidelines section covering harassment, bullying, hate speech, and violent behavior with enforcement policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
    "policies": [
      {
        "id": "tt-sc-image-sexual-abuse",
        "reference": "TT-SC-SAFETY-5",
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
            "example": "Use the dedicated reporting form for privacy violations",
            "reason": "Specialized handling for sensitive intimate content violations"
          }
        ],
        "removalCriteria": [
          "Content shows, promotes, or engages in non-consensual sexual acts or image-based sexual abuse",
          "Intimate images shared without consent of the person depicted",
          "Content created for sexual purposes without subject's permission"
        ]
      },
      {
        "id": "tt-sc-sextortion",
        "reference": "TT-SC-SAFETY-4-5",
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
            "example": "Screenshots of threatening messages or demands",
            "reason": "To establish the extortive nature of the threat"
          }
        ],
        "removalCriteria": [
          "Threatening to share nude or sexual content without permission",
          "Demanding money, sex, or additional explicit content in exchange for not sharing intimate images",
          "Any form of sexual extortion or coercion"
        ]
      },
      {
        "id": "tt-sc-harassment-sexual",
        "reference": "TT-SC-SAFETY-7",
        "summary": "TikTok prohibits sexual harassment, including sexualization or sexual degradation of individuals through language or behaviors relating to sexual activities and intimate body parts.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
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
            "description": "Evidence of unwanted sexual comments or behavior",
            "example": "Screenshots of sexual comments about intimate body parts",
            "reason": "To demonstrate the sexual harassment nature of the content"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments or engaging in unwanted sexual behavior towards someone",
          "Mimicking sexual acts using Duet or stickers",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-sc-doxing",
        "reference": "TT-SC-SAFETY-7",
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
            "description": "Evidence of personal information being shared with malicious intent",
            "example": "Screenshots showing private information with threatening captions or hashtags",
            "reason": "To establish malicious intent through objective indicators"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone with malicious intent",
          "Threatening to publish personal information about someone",
          "Content with objective indicators of malicious intent such as threatening captions and hashtags"
        ]
      },
      {
        "id": "tt-sc-harassment-coordinated",
        "reference": "TT-SC-SAFETY-7",
        "summary": "TikTok prohibits inciting harassment or promoting coordinated abuse, including encouraging others to leave abusive comments or falsely report accounts.",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of content encouraging coordinated harassment",
            "example": "Posts encouraging others to target or mass report an account",
            "reason": "To demonstrate the coordinated nature of the harassment campaign"
          }
        ],
        "removalCriteria": [
          "Inciting harassment against an individual or account",
          "Promoting coordinated abuse campaigns",
          "Encouraging others to leave abusive comments on someone's content",
          "Encouraging false reporting of accounts"
        ]
      },
      {
        "id": "tt-sc-harassment-degrading",
        "reference": "TT-SC-SAFETY-7",
        "summary": "TikTok prohibits insulting someone's physical attributes and degrading people who have experienced tragedy, with content potentially being removed or made FYF ineligible.",
        "quote": "Insulting someone's physical attributes, such as weight, facial features, or body parts. Degrading or revictimizing people who have experienced a tragedy, including claiming they deserved it or dismissing their experience.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of content insulting physical attributes or degrading tragedy victims",
            "example": "Screenshots of comments attacking appearance or dismissing traumatic experiences",
            "reason": "To demonstrate the degrading and harmful nature of the content"
          }
        ],
        "removalCriteria": [
          "Insulting someone's physical attributes such as weight, facial features, or body parts",
          "Degrading or revictimizing people who have experienced a tragedy",
          "Claiming someone deserved a traumatic experience",
          "Dismissing someone's experience of tragedy or trauma"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "TikTok provides a specialized reporting form for intimate privacy violations and general support for reporting problems through their app and website.",
      "steps": [
        "Report intimate privacy violations through the dedicated privacy reporting form",
        "For other violations, report immediately in the app or on the website",
        "Contact emergency services if someone is in immediate danger",
        "Reach out to helplines or local support services for additional assistance"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233958216-3",
    "reference": "TT-SC-PRIVACY",
    "title": "Privacy and Security Guidelines",
    "summary": "Community guidelines section specifically addressing privacy violations, personal information sharing, and platform security.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "TT-SC-PRIVACY-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including when posted by the person themselves or with their consent.",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
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
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the provided reporting link for privacy violations",
            "reason": "To initiate TikTok's review process for personal information removal"
          }
        ],
        "removalCriteria": [
          "Content contains home address",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Information could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-ps-personal-info-moderate-risk",
        "reference": "TT-SC-PRIVACY-1",
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, requiring additional context for removal decisions.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information causes emotional distress or reputational damage",
            "reason": "TikTok requires context to assess moderate-risk personal information removal requests"
          },
          {
            "description": "Proof that information was shared without consent",
            "example": "Documentation showing the person did not agree to share the information",
            "reason": "To establish that sharing was non-consensual"
          }
        ],
        "removalCriteria": [
          "Content contains contact details or date of birth shared without consent",
          "Content contains medical information shared without consent",
          "Content contains image/audio likeness shared without consent",
          "Content contains private communications on sensitive subjects disclosed by non-participants",
          "Information puts someone at risk of psychological harm",
          "Information likely to cause emotional distress for an individual"
        ]
      },
      {
        "id": "tt-ps-account-security",
        "reference": "TT-SC-PRIVACY-2",
        "summary": "TikTok prohibits sharing login information, unauthorized access attempts, malware distribution, phishing, and other activities that compromise platform or account security.",
        "quote": "We work hard to keep TikTok safe, secure, and running smoothly. That includes stopping any attempts to break into the platform, steal information, or abuse our systems.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized access or security compromise",
            "example": "Screenshots or documentation of suspicious account activity",
            "reason": "To demonstrate platform security violations"
          }
        ],
        "removalCriteria": [
          "Giving someone else login information or letting them break TikTok's rules on your account",
          "Using unauthorized ways to access TikTok or creating fake versions of the platform",
          "Sharing files or messages that carry malware or other harmful software",
          "Attempting to steal personal information, hack accounts, or access data using phishing or automated tools",
          "Attempting to reverse-engineer TikTok's code, systems, or algorithms"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "TikTok provides a dedicated privacy violation reporting system for users who believe their privacy has been violated.",
      "steps": [
        "Access the privacy violation reporting form at the provided URL",
        "Submit report with relevant details about the privacy violation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233958216-4",
    "reference": "TT-SC-INTEGRITY",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Community guidelines covering impersonation, deceptive behavior, misinformation, and account authenticity requirements.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity/",
    "accessTimestamp": "2025-09-18T22:19:18.216Z",
    "policies": [
      {
        "id": "tt-ia-aigc-private-likeness",
        "reference": "TT-SC-INTEGRITY-AIGC-1",
        "summary": "TikTok prohibits using the likeness of private figures without consent in AI-generated or significantly edited content.",
        "quote": "Using the likeness of private figures without consent",
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
            "description": "Proof that you are the private figure depicted without consent",
            "example": "Government-issued ID matching the person in the content",
            "reason": "To verify identity and lack of consent for likeness use"
          }
        ],
        "removalCriteria": [
          "Content uses AI or significant editing to show a private figure's likeness without their consent",
          "Content depicts a recognizable private individual through AI generation or manipulation"
        ]
      },
      {
        "id": "tt-ia-aigc-sexualized-content",
        "reference": "TT-SC-INTEGRITY-AIGC-2",
        "summary": "TikTok removes AI-generated or edited content that creates sexualized, fetishized, or victimizing depictions of individuals.",
        "quote": "Sexualized, fetishized, or victimizing depictions",
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
            "description": "Identification of the sexualized or victimizing AI-generated content",
            "example": "URL or screenshot of the violating content",
            "reason": "To locate and assess the inappropriate AI-generated depiction"
          }
        ],
        "removalCriteria": [
          "AI-generated content depicts individuals in sexualized manner",
          "AI-generated content fetishizes or victimizes depicted persons",
          "Content creates inappropriate intimate depictions through AI manipulation"
        ]
      },
      {
        "id": "tt-ia-aigc-harassment-bullying",
        "reference": "TT-SC-INTEGRITY-AIGC-3",
        "summary": "TikTok prohibits AI-created likenesses made to bully or harass individuals.",
        "quote": "AI-created likenesses made to bully or harass",
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
            "description": "Evidence that AI-generated content is being used for harassment or bullying",
            "example": "Screenshots showing the harassing context or repeated targeting",
            "reason": "To demonstrate the bullying or harassing nature of the AI-generated likeness"
          }
        ],
        "removalCriteria": [
          "AI-generated content is created specifically to bully an individual",
          "AI-generated content is used as part of a harassment campaign",
          "Content uses AI to create harmful depictions intended to cause distress"
        ]
      },
      {
        "id": "tt-ia-deceptive-impersonation",
        "reference": "TT-SC-INTEGRITY-DECEPTIVE-1",
        "summary": "TikTok removes accounts that impersonate others by pretending to be someone else without clearly stating it's a fan or parody account.",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
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
            "description": "Proof of your identity and evidence of impersonation",
            "example": "Government-issued ID and screenshots of the impersonating account",
            "reason": "To verify your identity and confirm unauthorized impersonation"
          }
        ],
        "removalCriteria": [
          "Account pretends to be another person without clear fan/parody disclosure",
          "Account uses someone's name, photos, or identity deceptively",
          "Display name does not clearly indicate fan or parody status when impersonating"
        ]
      },
      {
        "id": "tt-ia-copyright-violation",
        "reference": "TT-SC-INTEGRITY-IP-1",
        "summary": "TikTok removes content that violates someone else's intellectual property rights including copyrights and trademarks.",
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
            "example": "Copyright registration, trademark documentation, or original creation evidence",
            "reason": "To establish legal rights to the intellectual property"
          }
        ],
        "removalCriteria": [
          "Content violates copyright protections for original works",
          "Content infringes on trademark rights",
          "Content uses protected intellectual property without authorization"
        ]
      },
      {
        "id": "tt-ia-hacked-materials",
        "reference": "TT-SC-INTEGRITY-DECEPTIVE-2",
        "summary": "TikTok prohibits distribution of hacked materials when it poses a significant risk of harm.",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
        "contentTypes": [
          "private",
          "personal",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that materials were obtained through hacking and pose harm risk",
            "example": "Documentation showing unauthorized access and potential for significant harm",
            "reason": "To verify the materials were illegally obtained and assess harm potential"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through unauthorized hacking or data breach",
          "Distribution of the hacked materials poses significant risk of harm",
          "Content lacks clear public interest justification or journalistic standards"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok mentions enforcement actions and appeals but does not provide specific appeal process details in this document.",
      "steps": [
        "Content may be removed, restricted, or labeled by TikTok's team",
        "Users can submit copyright or trademark reports through in-app tools",
        "Account restrictions or bans may be applied for violations"
      ]
    }
  }
],
};
