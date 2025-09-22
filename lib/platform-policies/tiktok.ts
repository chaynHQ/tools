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
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
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
          "AI-generated content is used to create misleading depictions",
          "AIGC harms individuals",
          "Realistic AI content lacks proper labeling"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-CG-HARASSMENT",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks, doxing, sexual harassment, or coordinated abuse.",
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
        "id": "tt-deceptive-behavior-policy",
        "reference": "TT-CG-DECEPTIVE",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform, including fake engagement and deceptive schemes.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
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
            "description": "Link to the deceptive account or content",
            "reason": "To identify the misleading material"
          },
          {
            "description": "Description of the deceptive behavior",
            "reason": "To understand how the account is misleading users"
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
            "description": "Evidence of ownership or authorization to represent the rights holder",
            "reason": "To verify the legitimacy of the takedown request"
          },
          {
            "description": "Description of the copyrighted or trademarked material being infringed",
            "reason": "To understand what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content violates intellectual property rights",
          "Content reposts copyrighted material without permission",
          "Content uses trademarked material without authorization"
        ]
      },
      {
        "id": "tt-platform-security-policy",
        "reference": "TT-CG-SECURITY",
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
            "description": "Link to content showing or promoting system compromise",
            "reason": "To identify security-threatening material"
          },
          {
            "description": "Description of the security threat or compromise attempt",
            "reason": "To understand the nature of the security violation"
          }
        ],
        "removalCriteria": [
          "Content shows attempts to hack TikTok systems",
          "Content promotes reverse-engineering of platform systems",
          "Content compromises or attempts to compromise platform security"
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
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
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
            "description": "Compliance with Copyright Policy terms",
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
            "description": "Identification of content that contains private information or is defamatory/harassing",
            "reason": "To verify violation of prohibited content policies"
          },
          {
            "description": "URL or location of the violating content",
            "reason": "To locate and review the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties",
          "Material is defamatory, obscene, offensive, or pornographic",
          "Content is designed to harass, harm, hurt, scare, distress, embarrass or upset people",
          "Material constitutes trolling or bullying"
        ]
      },
      {
        "id": "tt-tos-impersonation-policy",
        "reference": "TT-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation, including giving impression that uploaded content emanates from the Services.",
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
            "description": "Evidence that account or content is impersonating another person or entity",
            "reason": "To verify impersonation violation"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To establish legitimate claim against impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "User falsely misrepresents their identity or affiliation",
          "Content gives false impression of emanating from TikTok Services"
        ]
      },
      {
        "id": "tt-tos-unauthorized-account-use",
        "reference": "TT-TOS-UNAUTHORIZED",
        "summary": "Prohibits using or attempting to use another person's account or service without authorization, or creating false identities.",
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
          "User has created a false identity on the platform",
          "Unauthorized access to another user's account or service"
        ]
      },
      {
        "id": "tt-tos-content-removal-discretion",
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
            "description": "Report identifying objectionable or harmful content",
            "reason": "To enable TikTok's discretionary content review and removal"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Policy",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-account-compromise-notification",
        "reference": "TT-TOS-COMPROMISE",
        "summary": "Users must immediately notify TikTok if they know or suspect their account password has been compromised or accessed by third parties.",
        "quote": "If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": {
          "response": {
            "value": 0,
            "unit": "immediate",
            "description": "User must notify immediately upon suspecting compromise"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report of suspected account compromise through official feedback form",
            "reason": "To initiate account security review and protection measures"
          },
          {
            "description": "Details of suspected unauthorized access or password compromise",
            "reason": "To assess security breach and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised",
          "Suspicious activity indicating account breach"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can contact TikTok through the feedback form for complaints about content or account issues, including requests for content removal or account recovery assistance.",
      "steps": [
        "Access the TikTok legal feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide details about the content violation, account compromise, or other issue",
        "Submit the report for TikTok review and response"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, including personal information handling and user rights.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
    "policies": [
      {
        "id": "tiktok-pp-content-removal-under18",
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
            "reason": "To locate the content within the platform"
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
        "id": "tiktok-pp-connecticut-minor-removal",
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
            "example": "State identification or utility bill",
            "reason": "To verify eligibility under Connecticut law"
          },
          {
            "description": "Age verification (under 18 for users, under 16 for parent/guardian requests)",
            "example": "Birth certificate or government ID",
            "reason": "To confirm age eligibility requirements"
          },
          {
            "description": "Parent/guardian relationship proof (for parental requests)",
            "example": "Birth certificate or legal guardianship documents",
            "reason": "To verify authority to make requests on behalf of minor"
          }
        ],
        "removalCriteria": [
          "User must be a Connecticut resident under 18 years of age, OR parent/guardian of Connecticut resident under 16",
          "Must follow specific instructions provided by platform",
          "For parental requests: child must be under 16 years of age"
        ]
      },
      {
        "id": "tiktok-pp-parental-rights",
        "reference": "TT-PP-PARENTAL-RIGHTS",
        "summary": "Parents and guardians can request deletion of underage child accounts or download account data, with state-specific rights varying by residence.",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account.",
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
            "description": "Proof of parent or guardian relationship",
            "example": "Birth certificate, adoption papers, or legal guardianship documents",
            "reason": "To verify authority to make requests on behalf of minor"
          },
          {
            "description": "Proof that child is underage",
            "example": "Birth certificate or other age verification",
            "reason": "To confirm the child qualifies as underage under platform policies"
          },
          {
            "description": "State of residence information",
            "example": "Driver's license or utility bill showing address",
            "reason": "To determine applicable state-specific rights"
          }
        ],
        "removalCriteria": [
          "Requester must be parent or legal guardian",
          "Child must be underage according to platform definitions",
          "Request must be made through official privacy contact form",
          "Rights may vary depending on state of residence"
        ]
      },
      {
        "id": "tiktok-pp-child-account-termination",
        "reference": "TT-PP-CHILD-TERMINATION",
        "summary": "TikTok will delete personal information and terminate accounts of users under 13 when discovered, with reporting mechanism for suspected underage users.",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Information about suspected underage user",
            "example": "Username, profile link, or other identifying information",
            "reason": "To identify and investigate the suspected underage account"
          },
          {
            "description": "Basis for believing user is under 13",
            "example": "Profile information, content posted, or other indicators",
            "reason": "To assess the validity of the underage user report"
          }
        ],
        "removalCriteria": [
          "User must be determined to be under 13 years of age",
          "Platform becomes aware through any means that user is under 13",
          "Account termination and data deletion occurs automatically upon confirmation"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests by following instructions in the communication received from TikTok.",
      "steps": [
        "Submit initial request through privacy contact form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal with additional information if needed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540356424-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies essential for content removal requests.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban accounts for repeated violations.",
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
            "example": "Name and contact details of rightsholder",
            "reason": "Platform may need to contact reporter and will provide this information to the user"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason"
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
            "example": "Name and contact details of trademark holder",
            "reason": "Platform may need to contact reporter and will provide this information to the user"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Unauthorized use of identical or similar trademark likely to cause confusion about source or affiliation",
          "Purchase, sale, trade, promotion, or solicitation of counterfeit goods"
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
            "description": "Evidence of repeated intellectual property violations",
            "example": "Multiple copyright or trademark infringement instances",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright infringement",
          "User repeatedly commits trademark infringement",
          "Severe copyright violations",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications and submit counter-notifications with required information including contact details and supporting evidence.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app accessed from the notification",
        "Provide all required information including contact information and evidence",
        "Platform may contact user for additional questions",
        "Platform forwards appeal to original reporter where appropriate",
        "Platform may reinstate content at sole discretion if no infringement found"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540356424-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Specific section of Community Guidelines focused on harassment, bullying, hate speech, and safety violations with detailed enforcement procedures.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
    "policies": [
      {
        "id": "tt-safety-ncii",
        "reference": "TT-SAFETY-5",
        "summary": "TikTok prohibits image-based sexual abuse, including sharing intimate images without consent, and removes such content while supporting survivors.",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
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
            "description": "Report through TikTok's intimate privacy violation form",
            "example": "Use the dedicated reporting form at https://www.tiktok.com/legal/report/privacy",
            "reason": "Specialized handling for intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Content shows intimate images shared without consent",
          "Content involves creating intimate images without consent",
          "Content includes edited intimate images without consent"
        ]
      },
      {
        "id": "tt-safety-sextortion",
        "reference": "TT-SAFETY-4-5",
        "summary": "TikTok prohibits sextortion, which involves threatening to share nude or sexual content without permission to demand money, sex, or more explicit content.",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
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
            "description": "Evidence of threats to share intimate content",
            "example": "Screenshots of threatening messages or demands",
            "reason": "To establish the coercive nature of the behavior"
          }
        ],
        "removalCriteria": [
          "Content involves threatening to share nude or sexual content",
          "Content demands money, sex, or explicit content in exchange for not sharing intimate images",
          "Content shows engagement in sextortion behavior"
        ]
      },
      {
        "id": "tt-safety-harassment-sexual",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits sexual harassment including unwanted sexual comments, behaviors, and sexualization or sexual degradation of individuals.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
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
            "description": "Evidence of unwanted sexual comments or behaviors",
            "example": "Screenshots of sexual comments about intimate body parts or sexual performance",
            "reason": "To demonstrate the harassing nature of the content"
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
        "summary": "TikTok prohibits doxing, which is publishing or threatening to publish personal information about someone online with malicious intent.",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
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
            "description": "Evidence of personal information being published or threatened to be published",
            "example": "Screenshots showing private addresses, phone numbers, or other personal details",
            "reason": "To identify the personal information being shared maliciously"
          },
          {
            "description": "Context showing malicious intent",
            "example": "Captions, hashtags, or comments indicating harmful purpose",
            "reason": "To establish the malicious nature of the information sharing"
          }
        ],
        "removalCriteria": [
          "Content publishes personal information with malicious intent",
          "Content threatens to publish personal information",
          "Objective indicators show malicious intent through captions and hashtags"
        ]
      },
      {
        "id": "tt-safety-harassment-general",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits harassment and bullying, including coordinated abuse, insulting physical attributes, and inciting harassment against individuals.",
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
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
            "description": "Evidence of harassing or bullying behavior",
            "example": "Screenshots of insulting comments about physical attributes or coordinated abuse",
            "reason": "To demonstrate the harassing nature of the content"
          }
        ],
        "removalCriteria": [
          "Insulting someone's physical attributes, such as weight, facial features, or body parts",
          "Wishing serious harm on someone, such as expressing a desire for them to die or contract a serious illness",
          "Inciting harassment or promoting coordinated abuse",
          "Encouraging others to leave abusive comments or falsely report an account"
        ]
      },
      {
        "id": "tt-safety-csam",
        "reference": "TT-SAFETY-4",
        "summary": "TikTok strictly prohibits Child Sexual Abuse Material (CSAM) including any sexual content involving young people, and reports such content to NCMEC and law enforcement.",
        "quote": "Child Sexual Abuse Material (CSAM): Sexual content involving a young person, including anything that shows or suggests abuse or sexual activity. This covers content created by others or the young person themselves, and includes digital or AI-generated images. It also includes anything that sexualizes or fetishizes a young person's body.",
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
            "description": "Report suspected CSAM immediately through in-app reporting",
            "example": "Use TikTok's reporting feature or website reporting form",
            "reason": "Immediate reporting required for child safety and law enforcement notification"
          }
        ],
        "removalCriteria": [
          "Content shows sexual activity involving a young person",
          "Content suggests abuse of a young person",
          "Content sexualizes or fetishizes a young person's body",
          "Content includes AI-generated sexual images of young people",
          "Any screenshot or clip from CSAM, even without nudity or sexual activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "TikTok provides a specialized reporting form for intimate privacy violations and general support for appeals through their help center.",
      "steps": [
        "Report intimate privacy violations through the dedicated form at https://www.tiktok.com/legal/report/privacy",
        "For other violations, use the in-app reporting feature or website reporting",
        "Contact emergency services if someone is in immediate danger",
        "Reach out to helplines or local support services for abuse situations"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540356424-2",
    "reference": "TT-INTEGRITY",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Community Guidelines section covering impersonation, deceptive behavior, fake accounts, and authenticity violations.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
    "policies": [
      {
        "id": "tt-integrity-aigc-private-likeness",
        "reference": "TT-INTEGRITY-AIGC",
        "summary": "TikTok prohibits using the likeness of private figures without consent in AI-generated or significantly edited content.",
        "quote": "Using the likeness of private figures without consent",
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
            "description": "Proof that you are the private figure depicted without consent",
            "example": "Government-issued ID matching the person in the content",
            "reason": "To verify identity and establish lack of consent for likeness use"
          }
        ],
        "removalCriteria": [
          "Content uses AI-generated or significantly edited likeness of private figures without consent",
          "Content shows realistic-appearing scenes or people created without permission"
        ]
      },
      {
        "id": "tt-integrity-aigc-sexualized",
        "reference": "TT-INTEGRITY-AIGC",
        "summary": "TikTok prohibits sexualized, fetishized, or victimizing depictions in AI-generated content.",
        "quote": "Sexualized, fetishized, or victimizing depictions",
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
            "description": "Identification of the sexualized or victimizing AI-generated content",
            "example": "URL or screenshot of the violating content",
            "reason": "To locate and assess the prohibited sexualized AI-generated material"
          }
        ],
        "removalCriteria": [
          "AI-generated content contains sexualized depictions",
          "AI-generated content contains fetishized depictions",
          "AI-generated content contains victimizing depictions"
        ]
      },
      {
        "id": "tt-integrity-aigc-harassment",
        "reference": "TT-INTEGRITY-AIGC",
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
            "description": "Evidence of AI-generated content used for bullying or harassment",
            "example": "Screenshots showing harassing AI-generated content targeting you",
            "reason": "To identify harmful AI-generated content created for harassment purposes"
          }
        ],
        "removalCriteria": [
          "AI-created likeness is used to bully an individual",
          "AI-created likeness is used to harass an individual"
        ]
      },
      {
        "id": "tt-integrity-aigc-youth-inappropriate",
        "reference": "TT-INTEGRITY-AIGC",
        "summary": "TikTok prohibits accounts focused on AI images of youth in adult clothing or sexualized poses.",
        "quote": "Accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
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
            "description": "Documentation of account pattern showing AI-generated inappropriate youth content",
            "example": "Multiple examples of AI-generated content showing minors inappropriately",
            "reason": "To establish pattern of prohibited AI-generated youth content"
          }
        ],
        "removalCriteria": [
          "Account focuses on AI images of youth in adult-suited clothing",
          "Account focuses on AI images of youth in sexualized poses",
          "Account focuses on AI images of youth with sexualized facial expressions"
        ]
      },
      {
        "id": "tt-integrity-impersonation",
        "reference": "TT-INTEGRITY-DECEPTIVE",
        "summary": "TikTok prohibits impersonation by pretending to be someone else without clearly stating the account is fan or parody.",
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
            "description": "Proof of your identity and evidence of impersonation account",
            "example": "Government ID and screenshots of fake account using your likeness",
            "reason": "To verify your identity and confirm unauthorized impersonation"
          }
        ],
        "removalCriteria": [
          "Account pretends to be someone else without clear fan/parody disclaimer",
          "Account misleads others about the account holder's identity"
        ]
      },
      {
        "id": "tt-integrity-fake-person",
        "reference": "TT-INTEGRITY-DECEPTIVE",
        "summary": "TikTok prohibits pretending to be a fake person or organization with the goal of misleading people.",
        "quote": "Pretending to be a fake person or organization with the goal of misleading people",
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
            "description": "Evidence that account is using fake identity to mislead others",
            "example": "Documentation showing account uses fabricated persona or stolen images",
            "reason": "To identify accounts created with deceptive fake identities"
          }
        ],
        "removalCriteria": [
          "Account uses fake person identity to mislead users",
          "Account uses fake organization identity to mislead users"
        ]
      },
      {
        "id": "tt-integrity-hacked-materials",
        "reference": "TT-INTEGRITY-DECEPTIVE",
        "summary": "TikTok prohibits distribution of hacked materials when this poses a significant risk of harm.",
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
            "reason": "To verify materials were illegally obtained and assess harm potential"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through hacking or unauthorized access",
          "Distribution poses significant risk of harm to individuals"
        ]
      },
      {
        "id": "tt-integrity-copyright",
        "reference": "TT-INTEGRITY-IP",
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
            "example": "Copyright registration, trademark documentation, or original creation proof",
            "reason": "To establish legal ownership of the intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content violates copyright protections",
          "Content violates trademark rights",
          "Content violates other intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides copyright and trademark reporting tools through in-app mechanisms, with reference to general enforcement and appeals processes.",
      "steps": [
        "Submit copyright report through in-app tools if copyright violated",
        "Submit trademark report through in-app tools if trademark violated",
        "Follow general community guidelines enforcement and appeals process"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540356424-3",
    "reference": "TT-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "Community Guidelines section addressing personal information sharing, privacy violations, and security-related content policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
    "policies": [
      {
        "id": "tt-privacy-sec-personal-info-high-risk",
        "reference": "TT-PRIVACY-SEC-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including home addresses, login credentials, payment information, and identity numbers.",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others. High Risk Personal Information: Information that is characterized by a heightened potential to cause physical, financial, or psychological harm to the individual. It includes: Home Address, Account Login Information, Sensitive Payment Information, Identity Numbers",
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
            "example": "Use the provided privacy violation report link",
            "reason": "To initiate content review and removal process"
          }
        ],
        "removalCriteria": [
          "Content contains home addresses",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Information could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-privacy-sec-personal-info-moderate-risk",
        "reference": "TT-PRIVACY-SEC-2",
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, including contact details, medical information, image/audio likeness, and private communications.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information. Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Additional context explaining the risk of psychological harm",
            "example": "Explanation of how the shared information causes emotional distress or reputational damage",
            "reason": "Platform requires context to assess moderate-risk personal information removal"
          },
          {
            "description": "Evidence that information was shared without consent",
            "example": "Documentation showing lack of permission to share the information",
            "reason": "To establish unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Information shared without consent",
          "Information puts someone at risk of psychological harm",
          "Content includes contact details or date of birth shared without permission",
          "Content includes medical information shared without consent",
          "Content includes image/audio likeness used without permission",
          "Content includes private communications disclosed by non-participants",
          "Information could cause emotional distress, reputational damage, or unwanted contact"
        ]
      },
      {
        "id": "tt-privacy-sec-platform-security",
        "reference": "TT-PRIVACY-SEC-3",
        "summary": "TikTok prohibits attempts to break into the platform, steal information, abuse systems, share malware, engage in phishing/hacking, or reverse-engineer platform code.",
        "quote": "We work hard to keep TikTok safe, secure, and running smoothly. That includes stopping any attempts to break into the platform, steal information, or abuse our systems. NOT ALLOWED: Giving someone else your login information or letting them break TikTok's rules on your account, Using unauthorized ways to access TikTok or creating fake versions of the platform, Sharing files or messages that carry malware or other harmful software, such as viruses or worms, Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools, Trying to reverse-engineer TikTok's code, systems, or algorithms—or create your own versions based on them",
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
            "description": "Evidence of unauthorized access attempts or security violations",
            "example": "Documentation of phishing attempts, malware distribution, or account compromise",
            "reason": "To verify platform security violations"
          }
        ],
        "removalCriteria": [
          "Sharing login information or allowing rule violations on accounts",
          "Using unauthorized methods to access TikTok",
          "Creating fake versions of the platform",
          "Sharing malware, viruses, or harmful software",
          "Attempting to steal personal information through phishing or hacking",
          "Using automated tools to access data without authorization",
          "Attempting to reverse-engineer platform code, systems, or algorithms"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "TikTok provides a privacy violation reporting system for users who believe their privacy has been violated",
      "steps": [
        "Access the privacy violation report form through the provided link",
        "Submit report with relevant details about the privacy violation",
        "Platform will review the report and take appropriate action"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540356424-4",
    "reference": "TT-MATURE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Community Guidelines section covering sexually explicit content, NCII, adult content, and age-restricted material policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-22T11:25:56.424Z",
    "policies": [
      {
        "id": "tt-mature-nudity-sexual",
        "reference": "TT-MATURE-BODY-EXPOSURE",
        "summary": "TikTok prohibits nudity, sexual activity, and sexually suggestive content, with removal for non-consensual intimate imagery and sexual content involving minors.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
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
            "description": "Report content showing prohibited nudity or sexual activity",
            "example": "Content showing nudity, sexual acts, or sexually suggestive behavior",
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
        "reference": "TT-MATURE-SEXUAL-SERVICES",
        "summary": "TikTok prohibits facilitating access to sexual services including offering or requesting sexual acts, sexual chats, imagery, or pornography.",
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
            "description": "Report content facilitating sexual services",
            "example": "Posts offering or requesting sexual acts, sexual chats, or pornographic content",
            "reason": "To identify violations of sexual services policies"
          }
        ],
        "removalCriteria": [
          "Offering or asking for sexual acts",
          "Offering or requesting sexual chats or imagery",
          "Facilitating access to pornography"
        ]
      },
      {
        "id": "tt-mature-age-restricted",
        "reference": "TT-MATURE-AGE-RESTRICTED",
        "summary": "TikTok age-restricts and removes from For You feed content with significant adult body exposure, intimate kissing, sexually suggestive acts, or sexualized framing involving adults.",
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
            "description": "Report adult content with significant body exposure or sexually suggestive behavior",
            "example": "Adults in underwear, intimate kissing, or sexually suggestive acts",
            "reason": "To apply age restrictions and FYF ineligibility"
          }
        ],
        "removalCriteria": [
          "Significant adult body exposure such as wearing only nipple covers or minimal underwear",
          "Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "Moderate adult body exposure in some regions"
        ]
      },
      {
        "id": "tt-mature-graphic-content",
        "reference": "TT-MATURE-GRAPHIC-CONTENT",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm, including graphic incidents, dead bodies, and graphic injuries.",
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
            "example": "Content showing graphic violence, dead bodies, or severe injuries",
            "reason": "To identify content that could cause psychological harm"
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
        "reference": "TT-MATURE-ANIMAL-ABUSE",
        "summary": "TikTok prohibits animal abuse, cruelty, neglect, exploitation, poaching, and bestiality in all forms.",
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
            "example": "Content showing animal mistreatment, staged fights, or bestiality",
            "reason": "To protect animals from abuse and exploitation"
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
  }
],
};
