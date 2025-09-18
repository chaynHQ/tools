import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, impersonation, and content removal policies. Updated August 2025 with enhanced policies on AI content, LIVE creators, and commercial disclosure.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
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
          "Content involves sexually suggestive behavior or significant exposure involving young people"
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
          "Content constitutes targeted harassment or bullying",
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
            "description": "Confirmation that the information was shared without consent",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content reveals personal information that could lead to harm",
          "Information sharing could enable identity theft, stalking, or fraud",
          "Personal information is shared without the subject's consent"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-CG-IMPERSONATION",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform through deceptive behavior.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
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
            "description": "Link to the impersonating profile",
            "reason": "To identify the impersonating account"
          },
          {
            "description": "Evidence of your authentic identity",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is misleading or impersonating",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity",
          "Account attempts to manipulate the platform",
          "Account engages in deceptive behavior"
        ]
      },
      {
        "id": "tt-ip-policy",
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
            "reason": "To verify the legitimacy of the intellectual property claim"
          },
          {
            "description": "Description of the copyrighted or trademarked material being infringed",
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
    "summary": "Legal terms governing the use of TikTok, including content ownership and intellectual property rights.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
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
          "Content infringes intellectual property rights",
          "Material violates copyright protections"
        ]
      },
      {
        "id": "tt-tos-prohibited-content",
        "reference": "TT-TOS-PROHIBITED",
        "summary": "Prohibits posting private information of third parties, defamatory content, and material designed to harass, harm, hurt, scare, distress, embarrass or upset people.",
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
            "reason": "To establish violation of privacy protection rules"
          },
          {
            "description": "Evidence that material is defamatory, harassing, or intended to cause distress",
            "reason": "To demonstrate violation of harassment and harm prevention policies"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties without authorization",
          "Material is defamatory, obscene, offensive, pornographic, hateful or inflammatory",
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-tos-impersonation-policy",
        "reference": "TT-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation, including giving impression that uploaded content emanates from the Services.",
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
            "description": "Evidence of false identity or misrepresentation of affiliation",
            "reason": "To establish impersonation violation"
          },
          {
            "description": "Proof that content was uploaded under false pretenses",
            "reason": "To demonstrate unauthorized use of identity or affiliation"
          }
        ],
        "removalCriteria": [
          "User is impersonating another person or entity",
          "User falsely misrepresents their affiliation with any person or entity",
          "Content gives false impression of emanating from official TikTok Services"
        ]
      },
      {
        "id": "tt-tos-unauthorized-account-use",
        "reference": "TT-TOS-UNAUTHORIZED",
        "summary": "Prohibits using or attempting to use another's account, service or system without authorization from TikTok, or creating false identities.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
        "contentTypes": [
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
            "reason": "To establish violation of account security policies"
          },
          {
            "description": "Proof of false identity creation",
            "reason": "To demonstrate violation of authentic identity requirements"
          }
        ],
        "removalCriteria": [
          "User is using another person's account without authorization",
          "User has created a false identity on the platform",
          "Unauthorized access to another user's account or system"
        ]
      },
      {
        "id": "tt-tos-account-security",
        "reference": "TT-TOS-SECURITY",
        "summary": "Requires users to keep account passwords confidential and immediately notify TikTok if account is compromised or accessed by third parties.",
        "quote": "It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Report through TikTok's feedback form at https://www.tiktok.com/legal/report/feedback",
            "reason": "Official channel for reporting compromised accounts"
          },
          {
            "description": "Evidence of suspected unauthorized access to account",
            "reason": "To establish account compromise and initiate security measures"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised",
          "Suspicious activity indicating account breach"
        ]
      },
      {
        "id": "tt-tos-content-removal-authority",
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
            "description": "Evidence that content violates Terms of Service or Community Guidelines",
            "reason": "To justify content removal under platform policies"
          },
          {
            "description": "Demonstration that content is harmful to services or users",
            "reason": "To establish grounds for discretionary content removal"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Policy",
          "Content is harmful to the Services or users",
          "Any reason or no reason at TikTok's discretion"
        ]
      },
      {
        "id": "tt-tos-user-content-rights",
        "reference": "TT-TOS-USER-CONTENT",
        "summary": "Users must own User Content or have necessary permissions to submit it, and TikTok can disclose user identity to third parties claiming intellectual property or privacy violations.",
        "quote": "When you submit User Content through the Services, you agree and represent that you own that User Content, or you have received all necessary permissions, clearances from, or are authorised by, the owner of any part of the content to submit it to the Services... We also have the right to disclose your identity to any third party who is claiming that any User Content posted or uploaded by you to our Services constitutes a violation of their intellectual property rights, or of their right to privacy.",
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
            "description": "Proof of ownership or authorization to submit content",
            "reason": "Required representation for all user-submitted content"
          },
          {
            "description": "Evidence of intellectual property or privacy rights violation",
            "reason": "To support third-party claims against user content"
          }
        ],
        "removalCriteria": [
          "User does not own the submitted content",
          "User lacks necessary permissions or authorization from content owner",
          "Content violates third party intellectual property rights",
          "Content violates third party privacy rights"
        ]
      },
      {
        "id": "tt-tos-expedited-removal",
        "reference": "TT-TOS-EXPEDITED",
        "summary": "TikTok takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat copyright infringers.",
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
            "description": "Reasonable measures for expeditious removal of infringing material"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright or intellectual property infringement",
            "reason": "To trigger expedited removal process"
          },
          {
            "description": "Documentation of repeat infringement for account action",
            "reason": "To support account termination for repeat offenders"
          }
        ],
        "removalCriteria": [
          "Material infringes copyrights or intellectual property rights",
          "User repeatedly infringes copyrights or intellectual property rights of others"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users through TikTok's feedback system, and there is a counter-notice process for copyright claims.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless legal action is filed, removed content may be restored in ten business days or more after counter-notice receipt"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024 with enhanced transparency and user control provisions.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
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
            "example": "Detailed description of the specific video, image, or post",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit us to locate that User Content",
            "example": "URL, timestamp, username, or other identifying information",
            "reason": "To locate the content in TikTok's system"
          }
        ],
        "removalCriteria": [
          "User must be a California resident",
          "User must be under 18 years of age",
          "Content must have been posted by the requesting user themselves",
          "Adequate information must be provided to locate the content"
        ]
      },
      {
        "id": "tt-pp-connecticut-minor-removal",
        "reference": "TT-PP-CONNECTICUT-REMOVAL",
        "summary": "Connecticut residents under 18 and parents/guardians of users under 16 can request account unpublishing or deletion through specific instructions.",
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
            "example": "State identification or other residency verification",
            "reason": "To verify eligibility under Connecticut law"
          },
          {
            "description": "Proof of age (under 18 for users, under 16 for children of parents/guardians)",
            "example": "Birth certificate or other age verification",
            "reason": "To verify eligibility under age requirements"
          },
          {
            "description": "For parents/guardians: proof of parental relationship",
            "example": "Birth certificate, custody documents, or other legal documentation",
            "reason": "To verify authority to request deletion of child's account"
          }
        ],
        "removalCriteria": [
          "User must be a Connecticut resident under 18 years of age, OR parent/guardian of Connecticut resident under 16",
          "Request must follow specific instructions provided by TikTok",
          "For parent/guardian requests: child must be under 16 years of age"
        ]
      },
      {
        "id": "tt-pp-parent-guardian-rights",
        "reference": "TT-PP-PARENT-RIGHTS",
        "summary": "Parents and guardians can request deletion of underage child accounts or download account data, with rights varying by state of residence.",
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
            "example": "Birth certificate, custody documents, or other legal documentation",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Proof that child is underage",
            "example": "Birth certificate or other age verification",
            "reason": "To verify the child qualifies for parental control provisions"
          },
          {
            "description": "State of residence information",
            "example": "Address or state identification",
            "reason": "Rights may vary depending on state of residence"
          }
        ],
        "removalCriteria": [
          "Requestor must be parent or legal guardian",
          "Child must be underage (specific age may vary by state)",
          "Request must be made through official privacy contact form",
          "Rights exercised must be in accordance with applicable state law"
        ]
      },
      {
        "id": "tt-pp-user-data-rights",
        "reference": "TT-PP-USER-RIGHTS",
        "summary": "Users can request to know, access, correct, or delete information collected about them, with verification required and appeal rights available.",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. You may appeal any decision we have made about your request by following the instructions in the communication you receive from us notifying you of our decision. We will verify your request by asking you to send it from the email address associated with your account or to provide information necessary to verify your account.",
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
            "example": "Email sent from registered account email",
            "reason": "To verify account ownership"
          },
          {
            "description": "Information necessary to verify your account",
            "example": "Account details, username, or other identifying information",
            "reason": "Alternative verification method if email verification is not possible"
          }
        ],
        "removalCriteria": [
          "Request must be properly verified through email or account information",
          "Request must be consistent with applicable law",
          "Proper verification of identity must be completed"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their data requests by following instructions provided in TikTok's response communication.",
      "steps": [
        "Submit initial request through privacy contact form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal through the specified process"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232638383-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright and trademark infringement, DMCA takedown procedures, and repeat infringer policies.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban accounts for repeat violations.",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies. Any user content that infringes another person's copyright may be removed.",
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership documentation, identification of infringing content",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Name of the copyright owner",
            "example": "Individual or company name holding copyright",
            "reason": "Required for DMCA compliance and may be shared with the reported user"
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
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark registration details, evidence of infringement",
            "reason": "To investigate trademark infringement claims"
          },
          {
            "description": "Name of the trademark owner",
            "example": "Company or individual holding trademark rights",
            "reason": "Required for processing and may be shared with the reported user"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark likely to cause confusion about source or affiliation",
          "Content promotes, sells, or facilitates trade of counterfeit goods",
          "Use does not fall under permitted acts like lawful commentary, criticism, parody, or review"
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
            "example": "Multiple valid takedown notices against the same account",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright or trademark infringement",
          "Severe intellectual property violations warrant immediate account ban",
          "Account was previously used for improper IP-related activities"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications, with different processes for EU and non-EU users. Appeals are forwarded to original reporters and may result in content reinstatement.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app via the notification",
        "Provide all required information including contact details and supporting evidence",
        "TikTok may contact you for additional questions about your appeal",
        "Appeal is forwarded to original reporter (where legally appropriate)",
        "Content may be reinstated at TikTok's discretion if no court action is filed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232638383-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention",
    "summary": "Dedicated policy page addressing harassment, bullying, and cyberbullying prevention with reporting mechanisms.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
    "policies": [
      {
        "id": "tt-bp-harassment",
        "reference": "TT-BP-HARASSMENT",
        "summary": "TikTok prohibits language or behavior that harasses, humiliates, threatens or doxxes anyone on the platform, including image-based harassment and bullying.",
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
            "description": "Report the harassing content through TikTok's reporting system",
            "example": "Use in-app reporting feature or support portal",
            "reason": "Required for moderation team review and action"
          }
        ],
        "removalCriteria": [
          "Content that harasses other users",
          "Content that humiliates other users",
          "Content that threatens other users",
          "Content that doxxes other users (publishing personal information with malicious intent)",
          "Content that violates TikTok's Community Guidelines"
        ]
      },
      {
        "id": "tt-bp-bullying",
        "reference": "TT-BP-BULLYING",
        "summary": "TikTok does not tolerate bullying behavior that causes physical, social or psychological harm, including targeted behavior that misuses power over others.",
        "quote": "Bullying typically involves targeted behavior that intends to cause physical, social and/or psychological harm. The behavior can be carried out online or offline by an individual or a group who misuse their power, or perceived power, over another person or group of people who feel unable to stop it from happening. We recognize that bullying can cause severe distress to people, and we do not tolerate it on our platform.",
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
            "description": "Report bullying content for moderation team review",
            "example": "Use TikTok's reporting system to flag bullying behavior",
            "reason": "Enables appropriate action if Community Guidelines are violated"
          }
        ],
        "removalCriteria": [
          "Targeted behavior intended to cause physical harm",
          "Targeted behavior intended to cause social harm",
          "Targeted behavior intended to cause psychological harm",
          "Behavior that misuses power or perceived power over others",
          "Content that causes severe distress through bullying"
        ]
      },
      {
        "id": "tt-bp-public-figure-attacks",
        "reference": "TT-BP-PUBLIC-FIGURES",
        "summary": "TikTok removes severe attacks against public figures that may promote physical harm or harassment, considering the risk of harm greater than expression benefits.",
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
            "reason": "Platform removes such content when harm risk exceeds expression benefits"
          }
        ],
        "removalCriteria": [
          "Severe attacks targeting public figures",
          "Content that may promote physical harm against public figures",
          "Content that promotes harassment against public figures",
          "Content where risk of physical harm outweighs expression benefits",
          "Content where risk of severe psychological harm outweighs expression benefits"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines through the in-app reporting system for moderation team review and appropriate action.",
      "steps": [
        "Access TikTok's reporting system in-app or through support portal",
        "Report the content that violates Community Guidelines",
        "Moderation team reviews the report",
        "Appropriate action is taken if violations are confirmed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232638383-2",
    "reference": "TT-PS",
    "title": "Privacy and Security Guidelines",
    "summary": "Community guidelines section specifically addressing personal information sharing, doxxing, and privacy violations.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "TT-PS-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including content posted by the person themselves or with their consent.",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
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
        "reference": "TT-PS-2",
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, requiring additional context for removal decisions.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
          "Information likely to cause emotional distress or reputational damage"
        ]
      },
      {
        "id": "tt-ps-account-security",
        "reference": "TT-PS-3",
        "summary": "TikTok prohibits sharing login information, unauthorized access attempts, and activities that compromise platform or account security.",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
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
            "description": "Evidence of unauthorized account access or security breach",
            "example": "Screenshots showing unauthorized activity or login information sharing",
            "reason": "To demonstrate platform security violations"
          }
        ],
        "removalCriteria": [
          "Content involves sharing login information with others",
          "Content shows unauthorized access to TikTok accounts",
          "Content contains malware, viruses, or harmful software",
          "Content involves phishing, smishing, or automated tools for data theft",
          "Content attempts to reverse-engineer TikTok's systems or algorithms"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "TikTok provides a privacy violation reporting system for users who believe their privacy has been violated",
      "steps": [
        "Access the privacy violation reporting form through the provided link",
        "Submit report with relevant information about the privacy violation",
        "TikTok will review the report and take appropriate action"
      ]
    }
  },
  {
    "id": "tiktok-new-1758232638383-3",
    "reference": "TT-SMT",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Detailed guidelines on sexually explicit content, NCII, and age-restricted content policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
    "policies": [
      {
        "id": "tt-smt-nudity-sexual",
        "reference": "TT-SMT-BODY-1",
        "summary": "TikTok prohibits nudity, sexual activity, and sexually suggestive content involving minors, with removal for violations.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
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
            "description": "Report content showing prohibited nudity or sexual activity",
            "example": "Content showing nudity, sexual activity, or sexually suggestive behavior involving minors",
            "reason": "To identify violations of body exposure and sexualized behavior policies"
          }
        ],
        "removalCriteria": [
          "Nudity or sexual activity including digital or illustrated images",
          "Sexually suggestive acts or significant body exposure involving youth",
          "Sexual services facilitation",
          "Sexually explicit language involving or directed at young people"
        ]
      },
      {
        "id": "tt-smt-age-restricted",
        "reference": "TT-SMT-BODY-2",
        "summary": "TikTok age-restricts and removes from For You feed content showing significant adult body exposure or sexually suggestive behavior.",
        "quote": "Some content, like significant adult body exposure or sexually suggestive behavior involving adults, is age-restricted and ineligible for the FYF.",
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
            "description": "Report content showing significant adult body exposure or sexually suggestive behavior",
            "example": "Adults wearing only underwear that doesn't cover most of the buttocks, intimate kissing, or sexualized framing",
            "reason": "To apply age restrictions and FYF ineligibility"
          }
        ],
        "removalCriteria": [
          "Significant adult body exposure such as wearing only nipple covers or minimal underwear",
          "Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "In some regions, moderate adult body exposure or sexually explicit language"
        ]
      },
      {
        "id": "tt-smt-graphic-content",
        "reference": "TT-SMT-GRAPHIC-1",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm.",
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
            "description": "Report content showing graphic violence, dead bodies, or graphic injury",
            "example": "Graphic incidents, torture, moment of death, dismembered or mutilated bodies",
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
        "id": "tt-smt-animal-abuse",
        "reference": "TT-SMT-ANIMAL-1",
        "summary": "TikTok prohibits animal abuse, cruelty, neglect, and any form of animal exploitation.",
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
            "example": "Inhumane slaughter, animal fights, mistreatment, poaching, or bestiality",
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
    "id": "tiktok-new-1758232638383-4",
    "reference": "TT-IA",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Guidelines covering impersonation, fake accounts, and deceptive behavior policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity/",
    "accessTimestamp": "2025-09-18T21:57:18.383Z",
    "policies": [
      {
        "id": "tt-ia-aigc-private-likeness",
        "reference": "TT-IA-AIGC-1",
        "summary": "TikTok prohibits using the likeness of private figures without consent in AI-generated or significantly edited content.",
        "quote": "Using the likeness of private figures without consent",
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
            "description": "Proof that you are the private figure depicted without consent",
            "example": "Government-issued ID matching the person in the content",
            "reason": "To verify identity and lack of consent for likeness use"
          }
        ],
        "removalCriteria": [
          "Content uses likeness of private figures without consent",
          "Content is AI-generated or significantly edited showing realistic-appearing people"
        ]
      },
      {
        "id": "tt-ia-aigc-sexualized",
        "reference": "TT-IA-AIGC-2",
        "summary": "TikTok does not allow sexualized, fetishized, or victimizing depictions in AI-generated content.",
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
            "description": "Identification of the sexualized, fetishized, or victimizing AI-generated content",
            "example": "Link to the specific content and description of how it violates the policy",
            "reason": "To identify and assess the violating content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains sexualized depictions created through AI",
          "Content contains fetishized depictions created through AI",
          "Content contains victimizing depictions created through AI"
        ]
      },
      {
        "id": "tt-ia-aigc-harassment",
        "reference": "TT-IA-AIGC-3",
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
            "description": "Evidence that AI-generated content using your likeness is being used for bullying or harassment",
            "example": "Screenshots of the content and explanation of how it constitutes bullying or harassment",
            "reason": "To verify the harassing nature of the AI-generated content"
          }
        ],
        "removalCriteria": [
          "Content uses AI-created likenesses for bullying purposes",
          "Content uses AI-created likenesses for harassment purposes"
        ]
      },
      {
        "id": "tt-ia-aigc-youth-inappropriate",
        "reference": "TT-IA-AIGC-4",
        "summary": "TikTok prohibits accounts focused on AI images of youth in clothing suited for adults or sexualized poses or facial expressions.",
        "quote": "Accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
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
            "description": "Identification of accounts or content showing AI-generated images of minors in inappropriate contexts",
            "example": "Account username and specific content showing youth in adult clothing or sexualized contexts",
            "reason": "To protect minors from inappropriate AI-generated depictions"
          }
        ],
        "removalCriteria": [
          "Account focuses on AI images of youth in adult-suited clothing",
          "Account focuses on AI images of youth in sexualized poses",
          "Account focuses on AI images of youth with sexualized facial expressions"
        ]
      },
      {
        "id": "tt-ia-impersonation",
        "reference": "TT-IA-DECEPTIVE-1",
        "summary": "TikTok does not allow impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name.",
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
            "description": "Proof that an account is impersonating you without proper disclosure",
            "example": "Link to the impersonating account and evidence of your identity",
            "reason": "To verify impersonation and protect against identity misuse"
          }
        ],
        "removalCriteria": [
          "Account pretends to be someone else without clear fan/parody disclosure in display name",
          "Account misleads others about the account holder's identity"
        ]
      },
      {
        "id": "tt-ia-copyright-violation",
        "reference": "TT-IA-IP-1",
        "summary": "TikTok does not allow content that violates someone else's intellectual property rights including copyrights and trademarks.",
        "quote": "Content that violates someone else's copyrights, trademarks, or other IP rights",
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
            "description": "Proof of ownership of the intellectual property being infringed",
            "example": "Copyright registration, trademark documentation, or other proof of IP ownership",
            "reason": "To verify legitimate ownership before removing allegedly infringing content"
          }
        ],
        "removalCriteria": [
          "Content violates copyright ownership",
          "Content violates trademark rights",
          "Content violates other intellectual property rights"
        ]
      },
      {
        "id": "tt-ia-hacked-materials",
        "reference": "TT-IA-DECEPTIVE-2",
        "summary": "TikTok prohibits hacked materials distribution when this poses a significant risk of harm.",
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
            "description": "Evidence that materials were obtained through hacking and pose significant risk of harm",
            "example": "Documentation showing unauthorized access and potential harm from distribution",
            "reason": "To verify materials were illegally obtained and assess harm potential"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through hacking or unauthorized access",
          "Distribution poses significant risk of harm to individuals"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides copyright and trademark reporting tools for intellectual property violations, but no specific appeal process is detailed in this document.",
      "steps": [
        "Submit a copyright report through TikTok's in-app tools for copyright violations",
        "Submit a trademark report through TikTok's in-app tools for trademark violations"
      ]
    }
  }
],
};
