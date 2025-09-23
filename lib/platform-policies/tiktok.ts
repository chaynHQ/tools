import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including safety and civility, sensitive and mature themes, integrity and authenticity, and privacy and security. Updated August 14, 2025 with new sections on AI-generated content, enhanced harassment policies, and content levels system.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T14:41:35.428Z",
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
          "Content depicts adult nudity, sexual activity, or is sexually suggestive",
          "Content is an intimate image or video (authentic or AI-generated) shared without the consent of the depicted individual",
          "Content threatens to share intimate imagery (sextortion)"
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
          "AI-generated content is used to create a deepfake for NCII",
          "Other realistic manipulated media is not clearly disclosed using a label like 'AI-generated'",
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
          },
          {
            "description": "Screenshots of comments or messages if applicable",
            "reason": "To provide evidence of the harassing behavior"
          }
        ],
        "removalCriteria": [
          "Content constitutes targeted harassment or bullying",
          "Content contains abusive statements about a private individual",
          "Unwanted sexualization or advances",
          "Content targets a private individual for abuse by exposing their private information",
          "Content includes degrading remarks about appearance",
          "Content involves doxing",
          "Content involves sexual harassment",
          "Content involves coordinated abuse"
        ]
      },
      {
        "id": "tt-privacy-policy",
        "reference": "TT-CG-PRIVACY",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
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
          "Content reveals private, personal, or identifying information (e.g., phone number, home address, non-public email)",
          "Information is shared without the subject's consent",
          "Content shows private media of an individual without their permission",
          "Content reveals private, personal, or identifying information to enable harassment",
          "Information could lead to identity theft, stalking, or fraud"
        ]
      },
      {
        "id": "tt-body-exposure-policy",
        "reference": "TT-CG-BODY-EXPOSURE",
        "summary": "Prohibits some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
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
            "description": "Link to the content showing inappropriate body exposure or sexual behavior",
            "reason": "To identify the violating content"
          },
          {
            "description": "Description of the violation",
            "reason": "To understand the nature of the policy violation"
          }
        ],
        "removalCriteria": [
          "Content shows nudity",
          "Content depicts sexual activity",
          "Content promotes sexual services",
          "Content shows sexually suggestive behavior involving young people",
          "Content shows significant exposure involving young people"
        ]
      },
      {
        "id": "tt-ip-policy",
        "reference": "TT-CG-IP",
        "summary": "Prohibits content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
        "quote": "We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
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
            "description": "Link to the infringing content",
            "reason": "To identify the content that violates intellectual property rights"
          },
          {
            "description": "Proof of ownership or authorization",
            "reason": "To establish rights to the copyrighted or trademarked material"
          },
          {
            "description": "Description of how the content violates intellectual property rights",
            "reason": "To understand the nature of the infringement"
          }
        ],
        "removalCriteria": [
          "Content violates intellectual property rights",
          "Content is a repost of copyrighted material without permission",
          "Content is a repost of trademarked material without permission"
        ]
      },
      {
        "id": "tt-platform-security-policy",
        "reference": "TT-CG-PLATFORM-SECURITY",
        "summary": "Prohibits attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "quote": "We don't allow attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
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
            "description": "Evidence of hacking attempts or system compromise",
            "reason": "To identify security violations"
          },
          {
            "description": "Description of the security breach or attempted breach",
            "reason": "To understand the nature of the security violation"
          }
        ],
        "removalCriteria": [
          "Content shows attempts to hack TikTok's systems",
          "Content demonstrates reverse-engineering of TikTok's systems",
          "Content compromises TikTok's platform security"
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
    "accessTimestamp": "2025-09-23T14:41:35.428Z",
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
            "example": "DMCA takedown notice or similar copyright claim",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership of the content",
            "example": "Original files, metadata, or creation documentation",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "Direct links to the unauthorized content on TikTok",
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
          "Third party knowledge or access to account password"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity or falsely representing affiliation with any person or entity.",
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
            "description": "Evidence of false identity or misrepresentation",
            "example": "Screenshots showing impersonation or false claims of identity",
            "reason": "To verify that impersonation is occurring"
          },
          {
            "description": "Proof of your actual identity",
            "example": "Documentation showing you are the person being impersonated",
            "reason": "To establish that you have standing to report the impersonation"
          }
        ],
        "removalCriteria": [
          "User is impersonating another person or entity",
          "User is falsely representing their affiliation with another person or entity",
          "Content gives false impression of emanating from official services"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits intimidating or harassing others and content designed to provoke, antagonize, or cause distress.",
        "quote": "intimidate or harass another... any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Evidence of harassing or intimidating behavior",
            "example": "Screenshots of threatening messages or bullying content",
            "reason": "To document the harassment for review"
          },
          {
            "description": "Description of how the content causes harm or distress",
            "example": "Explanation of the impact of the harassment",
            "reason": "To understand the severity and nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content is designed to intimidate or harass another person",
          "Content is deliberately designed to provoke or antagonize people",
          "Content constitutes trolling or bullying",
          "Content is intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits sharing private information of third parties including addresses, phone numbers, email addresses, and personal identity document numbers.",
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
            "description": "Identification of the private information being shared",
            "example": "Screenshot showing personal details like address or phone number",
            "reason": "To locate and verify the privacy violation"
          },
          {
            "description": "Confirmation that you are the person whose information is being shared",
            "example": "Statement confirming the private information belongs to you",
            "reason": "To establish standing to request removal"
          }
        ],
        "removalCriteria": [
          "Content contains private addresses of third parties",
          "Content contains private phone numbers of third parties",
          "Content contains private email addresses of third parties",
          "Content contains personal identity document numbers",
          "Content contains credit card numbers"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at their discretion for any reason, including objectionable content or Terms violations.",
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
            "description": "Report content through official channels",
            "example": "Use TikTok's reporting system or feedback form",
            "reason": "To bring content to TikTok's attention for review"
          }
        ],
        "removalCriteria": [
          "Content is found objectionable by TikTok",
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-unauthorized-account-use-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits using or attempting to use another person's account without authorization or creating false identities.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized account use",
            "example": "Screenshots showing someone else using your account",
            "reason": "To document the unauthorized access"
          },
          {
            "description": "Proof of account ownership",
            "example": "Account creation details or associated email/phone",
            "reason": "To verify you are the legitimate account owner"
          }
        ],
        "removalCriteria": [
          "User is using another person's account without authorization",
          "User has created a false identity on the platform"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users through TikTok's feedback system, and TikTok has a counter-notice process for copyright claims.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide details about the content violation or unauthorized use",
        "For copyright counter-notices, TikTok may send a copy to the original complainant",
        "Removed content may be restored in ten business days unless legal action is filed"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024 with enhanced data protection measures and clearer user rights information.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T14:41:35.428Z",
    "policies": [
      {
        "id": "tt-pp-user-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Prohibits abuse, fraud, and illegal activity on the platform and scans user content for violations of terms and community guidelines",
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
            "description": "Report through the platform's reporting system",
            "example": "Use https://www.tiktok.com/legal/report/privacy for privacy-related issues",
            "reason": "To enable platform review and enforcement of community guidelines"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content violates other platform conditions and policies",
          "Content constitutes abuse, fraud, or illegal activity"
        ]
      },
      {
        "id": "tt-pp-legal-disclosure",
        "reference": "For Legal Reasons",
        "summary": "Discloses user information to respond to legal process and protect platform safety and security",
        "quote": "We may disclose any of the Information We Collect to respond to subpoenas, court orders, legal process, law enforcement requests, legal claims, or government inquiries, and to protect and defend the rights, interests, safety, and security of the Platform, our affiliates, users, or the public.",
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
            "description": "Valid legal process such as subpoena or court order",
            "example": "Court-issued subpoena requesting user information",
            "reason": "To comply with legal obligations and protect platform and user safety"
          }
        ],
        "removalCriteria": [
          "Valid subpoena received",
          "Court order issued",
          "Law enforcement request made",
          "Legal claims filed",
          "Government inquiry initiated",
          "Necessary to protect rights, interests, safety, and security of platform, affiliates, users, or public"
        ]
      },
      {
        "id": "tt-pp-user-rights-deletion",
        "reference": "Your Rights",
        "summary": "Provides users the right to request deletion of their information and account",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. You can also update your account information directly through your in-app settings, as well as request a copy of your TikTok data or request to deactivate by following the instructions here or delete your account by following the instructions here.",
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
            "description": "Verification of account ownership",
            "example": "Send request from email address associated with account or provide information to verify account",
            "reason": "To verify identity and prevent unauthorized deletion requests"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their information",
          "User requests account deletion",
          "Proper verification of account ownership completed"
        ]
      },
      {
        "id": "tt-pp-minor-content-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Provides content removal rights for California residents under 18 years of age for user content they posted",
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
            "description": "Description of the user content to be removed",
            "example": "Detailed description of the specific post, video, or content",
            "reason": "To locate the specific content for removal"
          },
          {
            "description": "Information sufficient to locate the content",
            "example": "URL, timestamp, or other identifying information about the content",
            "reason": "To enable platform staff to find and remove the specific content"
          },
          {
            "description": "Proof of California residency and age under 18",
            "example": "Documentation showing California residence and age verification",
            "reason": "To verify eligibility under California law"
          }
        ],
        "removalCriteria": [
          "User is a California resident",
          "User is under 18 years of age",
          "Content was posted by the requesting user",
          "Adequate description and location information provided"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "Children and Teens",
        "summary": "Provides parents and guardians the right to request deletion of underage children's accounts and exercise rights over teen accounts",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account. For example, you may request the deletion of their accounts, download account data, or exercise other rights in connection with your child or teen by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Proof of parental or guardian relationship",
            "example": "Documentation establishing legal guardianship or parental relationship",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Identification of the child's account",
            "example": "Username, email, or other account identifying information",
            "reason": "To locate the specific account for deletion or data access"
          }
        ],
        "removalCriteria": [
          "Requester is verified parent or guardian",
          "Account belongs to underage child or teen",
          "Request complies with applicable state law requirements"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests through the platform's reporting system",
      "steps": [
        "Submit initial request through https://www.tiktok.com/legal/report/privacy",
        "Receive decision notification from TikTok",
        "Follow instructions in the decision communication to submit an appeal",
        "Alternatively, send appeal request to physical address: TikTok Inc., Attn: Privacy Policy Inquiry, 5800 Bristol Parkway, Suite 100, Culver City, CA 90230"
      ]
    }
  },
  {
    "id": "tiktok-new-1758638495428-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and counterfeiting violations, including DMCA takedown procedures and repeat infringer policies.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T14:41:35.428Z",
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
            "reason": "Required under DMCA and similar laws for compliant notification"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization",
          "Use of copyrighted content without legally valid reason"
        ]
      },
      {
        "id": "tt-ip-copyright-removal-account-bans",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes copyright and may ban accounts of repeat copyright infringers or in cases of severe violations",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
            "description": "Evidence of copyright infringement through reporting process",
            "example": "Valid copyright infringement report with required documentation",
            "reason": "To establish that content infringes copyright before removal"
          }
        ],
        "removalCriteria": [
          "User content infringes another person's copyright",
          "Repeated copyright infringement by the same user",
          "Severe copyright violations"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of identical or similar trademarks that causes confusion about source, origin, sponsorship or affiliation",
        "quote": "Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.",
        "contentTypes": [
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
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark registration details, evidence of infringement, contact information",
            "reason": "To investigate trademark infringement claims"
          },
          {
            "description": "Evidence of trademark ownership and unauthorized use",
            "example": "Trademark registration certificate, examples of infringing use",
            "reason": "Required to establish valid trademark infringement claim"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion about source, origin, sponsorship or affiliation",
          "Use in connection with goods or services that creates deception or mistake"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits purchase, sale, trade, promotion, or solicitation of counterfeit goods and removes such content",
        "quote": "Counterfeiting is the illegal manufacturing, importing and exporting, distributing, selling, facilitating the trade of, or otherwise dealing in goods under a trademark that is identical to or substantially similar to a registered trademark, without the trademark owner's permission, thereby infringing the rights of the trademark owner. We do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
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
            "description": "Evidence of counterfeit goods being promoted or sold",
            "example": "Screenshots of listings, proof of trademark ownership, evidence of unauthorized use",
            "reason": "To establish that goods are counterfeit and infringe trademark rights"
          }
        ],
        "removalCriteria": [
          "Content promotes or solicits counterfeit goods",
          "Content facilitates purchase, sale, or trade of counterfeit goods",
          "Goods use trademark identical or substantially similar to registered trademark without permission"
        ]
      },
      {
        "id": "tt-ip-trademark-removal-account-bans",
        "reference": "Trademark - Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and may ban accounts of repeat trademark infringers or in cases of severe violations",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
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
            "description": "Evidence of trademark rights violation through reporting process",
            "example": "Valid trademark infringement report with required documentation",
            "reason": "To establish that content violates trademark rights before removal"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Repeated trademark infringement by the same user",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can appeal copyright and trademark infringement removals through in-app notifications, with different processes for EU and non-EU users. Appeals require contact information and supporting evidence.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal through TikTok app",
        "TikTok may contact user for additional questions about the appeal",
        "For copyright appeals outside EU: TikTok forwards entire appeal to original reporter including contact information",
        "For copyright appeals: Content may be reinstated if it doesn't infringe or no court action is filed",
        "Users can also contact the rights holder directly to request retraction"
      ]
    }
  },
  {
    "id": "tiktok-new-1758638495428-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention",
    "summary": "Dedicated policy page addressing harassment, bullying, and cyberbullying prevention with reporting mechanisms and support resources.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T14:41:35.428Z",
    "policies": [
      {
        "id": "tt-bp-harassment-general",
        "reference": "Bullying Prevention",
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
            "description": "Report the content through TikTok's reporting system",
            "example": "Use the in-app reporting feature or report via support.tiktok.com",
            "reason": "Required for moderation team to review and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content that harasses another person",
          "Content that humiliates another person",
          "Content that threatens another person",
          "Content that doxxes another person (publishing personal information with malicious intent)"
        ]
      },
      {
        "id": "tt-bp-bullying-general",
        "reference": "Bullying Prevention",
        "summary": "Prohibits bullying behavior including targeted behavior that intends to cause physical, social and/or psychological harm",
        "quote": "Bullying typically involves targeted behavior that intends to cause physical, social and/or psychological harm. The behavior can be carried out online or offline by an individual or a group who misuse their power, or perceived power, over another person or group of people who feel unable to stop it from happening. We recognize that bullying can cause severe distress to people, and we do not tolerate it on our platform.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Report the bullying content for moderation review",
            "example": "Submit report through TikTok's Community Guidelines reporting process",
            "reason": "Enables moderation team to assess if content violates Community Guidelines"
          }
        ],
        "removalCriteria": [
          "Targeted behavior that intends to cause physical harm",
          "Targeted behavior that intends to cause social harm",
          "Targeted behavior that intends to cause psychological harm",
          "Behavior that misuses power over another person or group"
        ]
      },
      {
        "id": "tt-bp-public-figure-attacks",
        "reference": "Bullying Prevention - Public Figures",
        "summary": "Prohibits severe attacks against public figures that may promote physical harm or harassment",
        "quote": "We do not allow public figures to be targeted with severe attacks that may promote physical harm or promotion of harassment against them. We consider the risk of physical or severe psychological harm resulting from these attacks to be greater than the benefit of their expression and remove such content.",
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
            "description": "Evidence that content contains severe attacks against public figures",
            "example": "Content that promotes physical harm or harassment against public figures",
            "reason": "To assess risk of physical or severe psychological harm"
          }
        ],
        "removalCriteria": [
          "Severe attacks that may promote physical harm against public figures",
          "Content that promotes harassment against public figures",
          "Attacks where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines through the in-app reporting system for moderation team review",
      "steps": [
        "Report the content in-app following the provided steps",
        "Moderation team reviews the report",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  }
],
};
