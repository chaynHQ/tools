import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, impersonation, and content removal policies. Updated August 2025 with enhanced policies on AI content, NCII prevention, and clearer enforcement standards.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
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
          "AI-generated content harms individuals",
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
          "Content involves doxing or sharing personal information to harass",
          "Content constitutes sexual harassment",
          "Content involves coordinated abuse against an individual"
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
            "reason": "To identify the copyrighted material being used without permission"
          },
          {
            "description": "Proof of ownership or authorization to represent the copyright holder",
            "reason": "To verify the right to request removal"
          },
          {
            "description": "Description of the copyrighted work being infringed",
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
            "reason": "To identify security-related violations"
          },
          {
            "description": "Description of the security threat or compromise attempt",
            "reason": "To understand the nature of the platform security violation"
          }
        ],
        "removalCriteria": [
          "Content shows attempts to hack TikTok's systems",
          "Content promotes reverse-engineering of the platform",
          "Content demonstrates methods to compromise platform security"
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
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
    "policies": [
      {
        "id": "tt-tos-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement and requires users to respect intellectual property rights, with reference to a separate Copyright Policy.",
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
            "description": "Compliance with the terms of TikTok's Copyright Policy",
            "reason": "Required condition for platform access and use"
          }
        ],
        "removalCriteria": [
          "Content infringes intellectual property rights",
          "Content violates copyright ownership"
        ]
      },
      {
        "id": "tt-tos-prohibited-content",
        "reference": "TT-TOS-USE",
        "summary": "Prohibits posting private information of third parties, defamatory content, and material designed to harass, harm, or embarrass people.",
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
            "description": "Evidence that content is defamatory, harassing, or designed to embarrass",
            "reason": "To demonstrate violation of harassment and harm prevention policies"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties without authorization",
          "Content is defamatory, obscene, offensive, pornographic, hateful or inflammatory",
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-tos-impersonation-policy",
        "reference": "TT-TOS-USE",
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
            "description": "Evidence that account or content falsely represents another person or entity",
            "reason": "To establish impersonation violation"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To verify legitimate claim against impersonation"
          }
        ],
        "removalCriteria": [
          "Account impersonates another person or entity",
          "Content falsely misrepresents user's identity or affiliation",
          "Content gives false impression of emanating from TikTok Services"
        ]
      },
      {
        "id": "tt-tos-unauthorized-account-use",
        "reference": "TT-TOS-USE",
        "summary": "Prohibits using or attempting to use another person's account, service or system without authorization from TikTok.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
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
            "description": "Evidence of unauthorized access to another user's account",
            "reason": "To establish violation of account security policies"
          },
          {
            "description": "Proof of legitimate ownership of the compromised account",
            "reason": "To verify the rightful account owner"
          }
        ],
        "removalCriteria": [
          "Account is being used without authorization from the legitimate owner",
          "False identity has been created on the Services"
        ]
      },
      {
        "id": "tt-tos-content-removal-authority",
        "reference": "TT-TOS-USE",
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
            "description": "Report content that violates Terms of Service or Community Guidelines",
            "reason": "To enable TikTok's content moderation review process"
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
        "reference": "TT-TOS-CONTENT",
        "summary": "TikTok has the right to remove, disallow, block or delete any User Content that violates Terms or in response to complaints, and recommends users save copies of their content.",
        "quote": "We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at 'Your Access to and Use of Our Services' above. In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you. As a result, we recommend that you save copies of any User Content that you post to the Services on your personal device(s) in the event that you want to ensure that you have permanent access to copies of such User Content.",
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
            "description": "Complaint from affected user or third party about violating content",
            "reason": "To trigger TikTok's content review and removal process"
          }
        ],
        "removalCriteria": [
          "User Content does not comply with platform content standards",
          "User Content violates the Terms of Service",
          "Complaints received from other users or third parties about the content"
        ]
      },
      {
        "id": "tt-tos-ip-disclosure",
        "reference": "TT-TOS-CONTENT",
        "summary": "TikTok reserves the right to disclose user identity to third parties claiming intellectual property rights violations or privacy rights violations.",
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
            "description": "Claim that User Content violates intellectual property rights",
            "reason": "To enable identity disclosure for IP enforcement"
          },
          {
            "description": "Claim that User Content violates right to privacy",
            "reason": "To enable identity disclosure for privacy rights enforcement"
          }
        ],
        "removalCriteria": [
          "User Content violates third party intellectual property rights",
          "User Content violates third party privacy rights"
        ]
      },
      {
        "id": "tt-tos-account-security",
        "reference": "TT-TOS-ACCOUNT",
        "summary": "Users must keep account passwords confidential and notify TikTok immediately if account is compromised or accessed by third parties.",
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
            "description": "Knowledge or suspicion that third party knows password or accessed account",
            "reason": "To trigger immediate security response and account protection"
          }
        ],
        "removalCriteria": [
          "Account has been accessed by unauthorized third parties",
          "Account password has been compromised"
        ]
      },
      {
        "id": "tt-tos-counter-notice",
        "reference": "TT-TOS-OTHER",
        "summary": "Provides counter-notice process for content removal, with potential restoration after ten business days unless legal action is filed.",
        "quote": "If a counter-notice is received by TikTok's Copyright Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed content or cease disabling it. Unless the original complaining party files an action seeking a court order against the Content Provider, member or user, the removed content may be replaced, or access to it restored, in ten business days or more after receipt of the counter-notice, at TikTok's sole discretion.",
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
            "value": 10,
            "unit": "business days",
            "description": "Content may be restored after counter-notice unless legal action filed"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Counter-notice disputing the original removal claim",
            "reason": "To initiate content restoration process"
          }
        ],
        "removalCriteria": [
          "Original complaining party fails to file court action within specified timeframe",
          "Counter-notice demonstrates content was wrongfully removed"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can contact TikTok through feedback form for complaints about content, account issues, and various violations including privacy and intellectual property concerns.",
      "steps": [
        "Access the TikTok feedback form at https://www.tiktok.com/legal/report/feedback",
        "Submit complaint about information or materials uploaded by other users",
        "For account compromise, provide details of unauthorized access",
        "For California users under 18, label requests as 'California Removal Request' and provide description of content and location information"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
    "policies": [
      {
        "id": "tt-pp-content-removal-under-18",
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
            "example": "URL, username, timestamp, or other identifying information",
            "reason": "To locate the content within the platform"
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
        "id": "tt-pp-connecticut-account-deletion",
        "reference": "TT-PP-CONNECTICUT-DELETION",
        "summary": "Connecticut residents under 18 and parents/guardians of Connecticut residents under 16 can request account unpublishing or deletion.",
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
            "description": "Age verification or parental relationship verification",
            "example": "Birth certificate or legal guardianship documents",
            "reason": "To confirm age requirements and parental authority"
          }
        ],
        "removalCriteria": [
          "User must be a Connecticut resident under 18 years of age, OR parent/guardian of Connecticut resident under 16",
          "Request must follow provided instructions",
          "Proper verification of residency and age/relationship must be provided"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "TT-PP-PARENTAL-RIGHTS",
        "summary": "Parents and guardians can request deletion of underage child accounts, download account data, or exercise other rights depending on state of residence.",
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
            "example": "Birth certificate, legal guardianship documents, or court orders",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Proof of child's age being under 18",
            "example": "Birth certificate or other age verification documents",
            "reason": "To confirm the child qualifies as underage"
          }
        ],
        "removalCriteria": [
          "Requestor must be verified parent or legal guardian",
          "Child must be under 18 years of age",
          "Request must be made through official privacy contact form",
          "Compliance with applicable state laws"
        ]
      },
      {
        "id": "tt-pp-user-content-violations",
        "reference": "TT-PP-CONTENT-MODERATION",
        "summary": "TikTok scans, analyzes, and reviews User Content and messages for violations of Terms of Service, Community Guidelines, and other policies for safety and security.",
        "quote": "To promote the safety and security of the Platform, including by scanning, analyzing, and reviewing User Content, messages and associated metadata for violations of our Terms of Service, Community Guidelines, or other conditions and policies.",
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
            "description": "Report of policy violation",
            "example": "Specific description of how content violates Terms of Service or Community Guidelines",
            "reason": "To identify and assess potential policy violations"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content violates other platform conditions and policies",
          "Content poses safety or security risks to the platform"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests by following instructions in the communication received from TikTok.",
      "steps": [
        "Submit initial privacy request through official form",
        "Receive communication from TikTok about the decision",
        "Follow appeal instructions provided in that communication",
        "Alternatively, send appeal request to physical address provided in Contact Us section"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233549489-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies. Essential for content removal requests related to intellectual property violations.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
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
            "example": "Name and contact details of rights holder",
            "reason": "Platform may need to contact reporter with questions and will provide this to the user"
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
          "Content promotes, sells, or facilitates trade of counterfeit goods",
          "Unauthorized use of trademark likely to cause confusion about source or affiliation"
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
            "description": "Evidence of repeated intellectual property violations by the same user",
            "example": "Multiple copyright or trademark infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement for account termination"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright or trademark infringement",
          "Severe intellectual property violations warranting immediate action"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications, contact copyright/trademark owners directly, or submit appeals within the TikTok app with required information and evidence.",
      "steps": [
        "Receive in-app notification about content removal",
        "Option 1: Contact the copyright/trademark owner directly to request retraction",
        "Option 2: Submit appeal within TikTok app accessed from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Platform may contact user with additional questions about the appeal",
        "For copyright appeals outside EU: Platform forwards entire appeal to original reporter including contact information",
        "Platform may reinstate content at sole discretion or if no court action is filed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233549489-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Specific safety guidelines covering harassment, bullying, hate speech, violent organizations, and harmful behavior. Part of the broader community guidelines with detailed enforcement standards.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
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
            "example": "Use the dedicated reporting form for privacy violations",
            "reason": "Specialized handling for sensitive intimate content violations"
          }
        ],
        "removalCriteria": [
          "Content shows intimate images shared without consent",
          "Content involves creating or distributing non-consensual intimate imagery",
          "Content includes edited intimate images distributed without permission"
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
            "example": "Screenshots of threatening messages or demands",
            "reason": "To establish the coercive nature of the content"
          }
        ],
        "removalCriteria": [
          "Content involves threats to share intimate images without consent",
          "Content demands payment or sexual acts in exchange for not sharing intimate content",
          "Content shows engagement in sextortion activities"
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
            "reason": "To demonstrate the harassing nature of the content"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments towards someone",
          "Engaging in unwanted sexual behavior including mimicking sexual acts using Duet or stickers",
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
            "description": "Evidence of personal information being shared with malicious intent",
            "example": "Screenshots showing private information with threatening captions or hashtags",
            "reason": "To establish malicious intent through objective indicators"
          }
        ],
        "removalCriteria": [
          "Content publishes personal information with malicious intent",
          "Content threatens to publish personal information",
          "Content encourages others to engage in doxing behavior"
        ]
      },
      {
        "id": "tt-safety-coordinated-harassment",
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
            "description": "Evidence of content encouraging coordinated harassment",
            "example": "Posts calling for mass reporting or encouraging abusive comments",
            "reason": "To demonstrate organized harassment campaigns"
          }
        ],
        "removalCriteria": [
          "Content encourages others to leave abusive comments on someone's account",
          "Content promotes false reporting of accounts",
          "Content organizes coordinated harassment campaigns"
        ]
      },
      {
        "id": "tt-safety-csam",
        "reference": "TT-SAFETY-4",
        "summary": "TikTok strictly prohibits Child Sexual Abuse Material (CSAM), including sexual content involving young people and anything that sexualizes or fetishizes a young person's body.",
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
            "description": "Report suspected CSAM immediately without downloading or sharing",
            "example": "Use in-app reporting or website reporting feature",
            "reason": "Legal requirement to report to NCMEC and law enforcement"
          }
        ],
        "removalCriteria": [
          "Content shows or suggests sexual activity involving minors",
          "Content sexualizes or fetishizes young people",
          "Content includes AI-generated sexual imagery of minors",
          "Any screenshot or clip from CSAM material even without explicit content"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides reporting mechanisms for privacy violations and has specialized forms for intimate privacy violations, with content reviewed and potentially removed based on community guidelines.",
      "steps": [
        "Report content immediately through the app or website",
        "Use specialized intimate privacy violation form for sensitive content",
        "TikTok reviews content against community guidelines",
        "Content may be removed if it violates policies"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233549489-2",
    "reference": "TT-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific guidelines on personal information sharing, doxxing, privacy violations, and platform security. Covers policies against sharing personal information that could lead to harm.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
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
            "reason": "Required channel for privacy-related takedown requests"
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
            "reason": "Required to assess moderate-risk personal information removal requests"
          },
          {
            "description": "Evidence that content was shared without consent",
            "example": "Documentation showing lack of permission to share the information",
            "reason": "Consent is a key factor in moderate-risk personal information policies"
          }
        ],
        "removalCriteria": [
          "Content contains contact details shared without consent and likely to cause psychological harm",
          "Content contains date of birth shared without consent and likely to cause psychological harm",
          "Content contains medical information shared without consent and likely to cause psychological harm",
          "Content contains image/audio likeness shared without consent and likely to cause psychological harm",
          "Content contains private communications on sensitive subjects disclosed by non-participants and likely to cause psychological harm",
          "Sharing moderate risk personal information when it's likely to cause psychological harm or emotional distress for an individual"
        ]
      },
      {
        "id": "tt-privacy-sec-platform-security",
        "reference": "TT-PRIVACY-SEC-3",
        "summary": "TikTok prohibits attempts to break into the platform, steal information, abuse systems, or share malicious content including phishing attempts and unauthorized access.",
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
            "description": "Evidence of unauthorized access or security breach",
            "example": "Documentation showing account compromise or unauthorized login attempts",
            "reason": "Required to verify platform security violations"
          }
        ],
        "removalCriteria": [
          "Giving someone else your login information or letting them break TikTok's rules on your account",
          "Using unauthorized ways to access TikTok or creating fake versions of the platform",
          "Sharing files or messages that carry malware or other harmful software, such as viruses or worms",
          "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
          "Trying to reverse-engineer TikTok's code, systems, or algorithms—or create your own versions based on them"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758233549489-3",
    "reference": "TT-INTEGRITY",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Guidelines covering impersonation, fake accounts, deceptive behavior, misinformation, and platform manipulation. Includes specific policies on account impersonation and fraudulent activity.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity/",
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
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
            "reason": "To verify identity and establish lack of consent for likeness use"
          }
        ],
        "removalCriteria": [
          "Content uses AI or significant editing to depict a private figure's likeness without their consent",
          "Content shows realistic-appearing scenes or people created through AI or significant editing"
        ]
      },
      {
        "id": "tt-integrity-aigc-sexualized",
        "reference": "TT-INTEGRITY-AIGC-2",
        "summary": "TikTok does not allow sexualized, fetishized, or victimizing depictions in AI-generated content.",
        "quote": "Sexualized, fetishized, or victimizing depictions",
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
            "description": "Evidence that the content depicts you in a sexualized, fetishized, or victimizing manner",
            "example": "Screenshots or links to the violating content",
            "reason": "To identify and verify the harmful depiction for removal"
          }
        ],
        "removalCriteria": [
          "AI-generated content contains sexualized depictions of individuals",
          "AI-generated content contains fetishized depictions of individuals",
          "AI-generated content contains victimizing depictions of individuals"
        ]
      },
      {
        "id": "tt-integrity-aigc-harassment",
        "reference": "TT-INTEGRITY-AIGC-3",
        "summary": "TikTok prohibits AI-created likenesses made to bully or harass individuals.",
        "quote": "AI-created likenesses made to bully or harass",
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
            "description": "Evidence that AI-generated content using your likeness is being used for bullying or harassment",
            "example": "Screenshots of the content and context showing harassment",
            "reason": "To establish that the AI-generated likeness is being used maliciously"
          }
        ],
        "removalCriteria": [
          "AI-generated content uses someone's likeness specifically to bully them",
          "AI-generated content uses someone's likeness specifically to harass them"
        ]
      },
      {
        "id": "tt-integrity-impersonation",
        "reference": "TT-INTEGRITY-DECEPTIVE-1",
        "summary": "TikTok does not allow impersonation by pretending to be someone else without clearly stating the account is fan or parody.",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
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
            "description": "Proof of your identity and evidence that another account is impersonating you",
            "example": "Government-issued ID and screenshots of the impersonating account",
            "reason": "To verify your identity and confirm unauthorized impersonation"
          }
        ],
        "removalCriteria": [
          "Account pretends to be another person without clear fan or parody disclaimer in display name",
          "Account misleads others about the account holder's true identity"
        ]
      },
      {
        "id": "tt-integrity-copyright",
        "reference": "TT-INTEGRITY-IP-1",
        "summary": "TikTok does not allow content that violates someone else's intellectual property rights including copyrights.",
        "quote": "Content that violates someone else's copyrights, trademarks, or other IP rights",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of ownership of the copyrighted material",
            "example": "Copyright registration, original creation files, or other ownership documentation",
            "reason": "To establish legal right to request removal of infringing content"
          }
        ],
        "removalCriteria": [
          "Content violates copyright protections for original works like music, videos, or artwork",
          "Content violates trademark rights including words, symbols, slogans, or designs"
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
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that your private materials were obtained through hacking and are being distributed",
            "example": "Documentation of the security breach and identification of your private content",
            "reason": "To verify unauthorized access and distribution of private materials"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through unauthorized hacking or security breach",
          "Distribution of the hacked materials poses significant risk of harm to individuals"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok mentions enforcement actions and appeals in general terms but specific appeal process details are referenced in other sections not included in this document.",
      "steps": [
        "Content removal or account restrictions may be appealed",
        "Appeals process details are available in the enforcement section of community guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233549489-4",
    "reference": "TT-MATURE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Guidelines covering sexually explicit content, adult themes, nudity, and age-inappropriate material. Includes policies on non-consensual intimate imagery and sexual exploitation.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-18T22:12:29.489Z",
    "policies": [
      {
        "id": "tt-mature-nudity-sexual",
        "reference": "TT-MATURE-BODY-EXPOSURE",
        "summary": "TikTok prohibits nudity, sexual activity, and sexually suggestive content involving minors, with removal of non-consensual intimate imagery.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
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
        "reference": "TT-MATURE-SEXUAL-SERVICES",
        "summary": "TikTok prohibits content facilitating access to sexual services including offering sexual acts, sexual chats, or pornography.",
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
            "example": "Posts offering sexual acts, sexual chats, or pornographic content",
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
        "reference": "TT-MATURE-AGE-RESTRICTED",
        "summary": "TikTok age-restricts and removes from For You feed content with significant adult body exposure or sexually suggestive behavior.",
        "quote": "Some content, like significant adult body exposure or sexually suggestive behavior involving adults, is age-restricted and ineligible for the FYF.",
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
            "description": "Report content showing significant adult body exposure or sexually suggestive behavior",
            "example": "Content showing adults in underwear, intimate kissing, or sexually suggestive acts",
            "reason": "To apply age restrictions and FYF ineligibility"
          }
        ],
        "removalCriteria": [
          "Significant adult body exposure such as wearing only nipple covers or underwear that doesn't cover most of the buttocks",
          "Moderate adult body exposure in some regions",
          "Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "Adults using sexually explicit language or showing sex products in some regions"
        ]
      },
      {
        "id": "tt-mature-graphic-content",
        "reference": "TT-MATURE-GRAPHIC",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm, with age restrictions for less graphic content.",
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
            "reason": "To identify content that violates graphic content policies"
          }
        ],
        "removalCriteria": [
          "Graphic incidents and violence such as torture or the moment of someone's death",
          "Dead bodies",
          "Graphic injury such as dismembered, mutilated, charred, or burned bodies"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
