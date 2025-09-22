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
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
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
          "AIGC misleads about matters of public importance",
          "AIGC harms individuals",
          "Realistic AI content is not clearly labeled"
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
            "description": "Link to the impersonating or deceptive account",
            "reason": "To identify the problematic account"
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
          "Account attempts to manipulate the platform",
          "Account engages in deceptive behaviors",
          "Account uses fake engagement services"
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
            "reason": "To verify standing to make the complaint"
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
    "summary": "Legal terms governing the use of TikTok, including content ownership, intellectual property rights, and user obligations.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
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
        "id": "tt-prohibited-content-policy",
        "reference": "TT-TOS-PROHIBITED",
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
            "description": "Report through TikTok's feedback form",
            "reason": "To notify TikTok of prohibited content"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates policy"
          },
          {
            "description": "Description of how the content violates the policy",
            "reason": "To help TikTok understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties without consent",
          "Content is defamatory, obscene, offensive, pornographic, hateful or inflammatory",
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation, including uploading content that appears to emanate from the Services.",
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
            "description": "Report through TikTok's feedback form",
            "reason": "To notify TikTok of impersonation"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific account or content engaging in impersonation"
          },
          {
            "description": "Evidence of your identity or the identity being impersonated",
            "reason": "To verify the legitimate identity being impersonated"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "Account or content falsely represents affiliation with another person or entity",
          "Content gives false impression of emanating from TikTok Services"
        ]
      },
      {
        "id": "tt-unauthorized-account-use-policy",
        "reference": "TT-TOS-UNAUTHORIZED",
        "summary": "Prohibits using or attempting to use another person's account without authorization and requires users to notify TikTok immediately if their account is compromised.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services; If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback",
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
            "description": "Report immediately through TikTok's feedback form",
            "reason": "To notify TikTok of unauthorized account access"
          },
          {
            "description": "Details of suspected unauthorized access",
            "reason": "To help TikTok investigate and secure the account"
          },
          {
            "description": "Evidence of account compromise (if available)",
            "reason": "To support the claim of unauthorized access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized use of another person's account",
          "Account has been accessed by third parties without permission",
          "Account is being used to create false identity"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-REMOVAL",
        "summary": "TikTok reserves the right to remove or disable access to content at their discretion, including content that violates Terms or Community Guidelines.",
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
            "description": "Report through TikTok's feedback form",
            "reason": "To notify TikTok of violating content"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for review"
          },
          {
            "description": "Explanation of how content violates Terms or Community Guidelines",
            "reason": "To help TikTok assess the violation"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-counter-notice-policy",
        "reference": "TT-TOS-COUNTER",
        "summary": "Provides a counter-notice process for users whose content has been removed, with potential restoration after ten business days unless legal action is filed.",
        "quote": "If a counter-notice is received by TikTok's Copyright Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed content or cease disabling it. Unless the original complaining party files an action seeking a court order against the Content Provider, member or user, the removed content may be replaced, or access to it restored, in ten business days or more after receipt of the counter-notice, at TikTok's sole discretion.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": 10,
            "unit": "business days",
            "description": "Content may be restored after this period if no legal action is filed"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Submit counter-notice to TikTok's Copyright Agent",
            "reason": "To initiate the counter-notice process"
          },
          {
            "description": "Good faith statement that content was removed by mistake or misidentification",
            "reason": "Legal requirement for counter-notices"
          }
        ],
        "removalCriteria": [
          "Original complaining party must file legal action to prevent restoration",
          "Counter-notice must be submitted in good faith"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or appeal decisions through TikTok's feedback form, with a counter-notice process available for copyright claims.",
      "steps": [
        "Submit complaint or appeal through TikTok's feedback form at https://www.tiktok.com/legal/report/feedback",
        "For copyright counter-notices, submit to TikTok's Copyright Agent",
        "TikTok may send copy of counter-notice to original complainant",
        "Content may be restored in 10+ business days unless legal action is filed"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, including personal information protection measures.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
    "policies": [
      {
        "id": "tt-pp-content-removal-under18",
        "reference": "TT-PP-CONTENT-REMOVAL",
        "summary": "California residents under 18 can request removal of User Content they posted by providing description and location information.",
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
          "User must be a California resident",
          "User must be under 18 years of age",
          "Content must have been posted by the requesting user themselves"
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
            "example": "State identification or other residency verification",
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
          "Request must follow specified instructions process"
        ]
      },
      {
        "id": "tt-pp-parent-guardian-rights",
        "reference": "TT-PP-PARENT-RIGHTS",
        "summary": "Parents and guardians can request deletion of underage child's account or download account data, with rights varying by state of residence.",
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
            "example": "Birth certificate, custody documents, or legal guardianship papers",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Proof that child is underage",
            "example": "Birth certificate or other age verification",
            "reason": "To confirm the child meets age requirements for parental control"
          }
        ],
        "removalCriteria": [
          "Requester must be parent or legal guardian",
          "Account holder must be underage",
          "Rights exercised must be in accordance with applicable state law"
        ]
      },
      {
        "id": "tt-pp-child-account-termination",
        "reference": "TT-PP-CHILD-TERMINATION",
        "summary": "TikTok will delete personal information and terminate accounts of users discovered to be under 13 years old.",
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
            "description": "Information indicating user is below age 13",
            "example": "Username, profile information, or other identifying details",
            "reason": "To identify and verify the underage account"
          }
        ],
        "removalCriteria": [
          "User must be determined to be under 13 years of age",
          "Account and personal information will be deleted upon discovery"
        ]
      },
      {
        "id": "tt-pp-privacy-rights-requests",
        "reference": "TT-PP-PRIVACY-RIGHTS",
        "summary": "Users can submit requests to know, access, correct, or delete information collected about them, with verification required.",
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
            "example": "Email sent from registered account email",
            "reason": "To verify account ownership"
          },
          {
            "description": "Information necessary to verify your account",
            "example": "Account details, username, or other identifying information",
            "reason": "To confirm identity and prevent unauthorized access"
          }
        ],
        "removalCriteria": [
          "Request must be properly verified through account email or verification information",
          "Request must be submitted through official privacy request form"
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
    "id": "tiktok-new-1758542305952-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies. Essential for automated copyright and IP-based takedown requests.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
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
            "reason": "Platform may need to contact reporter for additional information"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark causing confusion about source or affiliation",
          "Content promotes or facilitates trade of counterfeit goods",
          "Use of trademark to designate user's own goods or services without authorization"
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
            "example": "Multiple takedown notices for the same user account",
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
      "summary": "Users can appeal IP takedowns through in-app notifications, with different processes for EU and non-EU users. Appeals require complete information and may be forwarded to original reporters.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Platform may contact for additional questions about the appeal",
        "For non-EU users: Appeal may be forwarded to original reporter including contact information",
        "Content may be reinstated at TikTok's sole discretion if no infringement found"
      ]
    }
  },
  {
    "id": "tiktok-new-1758542305952-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and safety violations. Covers specific enforcement actions and reporting mechanisms.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
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
            "example": "Use the dedicated reporting form at https://www.tiktok.com/legal/report/privacy",
            "reason": "Specialized handling for intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Content shows intimate images shared without consent",
          "Content involves edited intimate images created without consent",
          "Content distributed without consent even if originally taken with consent"
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
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to share intimate content",
            "example": "Screenshots of threatening messages or posts",
            "reason": "To establish the threatening nature of the content"
          }
        ],
        "removalCriteria": [
          "Content threatens to share nude or sexual material without permission",
          "Threats made to extort money, sexual favors, or additional explicit content"
        ]
      },
      {
        "id": "tt-safety-csam",
        "reference": "TT-SAFETY-4",
        "summary": "TikTok strictly prohibits Child Sexual Abuse Material (CSAM), including any sexual content involving young people, digital or AI-generated images, and content that sexualizes youth.",
        "quote": "Child Sexual Abuse Material (CSAM): Sexual content involving a young person, including anything that shows or suggests abuse or sexual activity. This covers content created by others or the young person themselves, and includes digital or AI-generated images.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report suspected CSAM immediately through in-app reporting or website",
            "example": "Use TikTok's reporting system without downloading or sharing the content",
            "reason": "Legal requirement to report to NCMEC and law enforcement"
          }
        ],
        "removalCriteria": [
          "Any sexual content involving a person under 18",
          "AI-generated or digital sexual content depicting minors",
          "Content that sexualizes or fetishizes young people",
          "Any screenshot or clip from CSAM, even without explicit content"
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
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of personal information being shared with malicious intent",
            "example": "Screenshots showing personal details with threatening captions or hashtags",
            "reason": "To establish malicious intent through objective indicators"
          }
        ],
        "removalCriteria": [
          "Content publishes personal information with malicious intent",
          "Threats to publish personal information",
          "Objective indicators of malicious intent such as threatening captions or hashtags"
        ]
      },
      {
        "id": "tt-safety-harassment",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits harassment and bullying, including sexual harassment, coordinated abuse, and content that degrades individuals based on physical attributes.",
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation. Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
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
            "description": "Evidence of harassing or bullying behavior",
            "example": "Screenshots of sexual comments, degrading remarks, or coordinated abuse",
            "reason": "To document the pattern and nature of harassment"
          }
        ],
        "removalCriteria": [
          "Unwanted sexual comments or behavior towards someone",
          "Insulting someone's physical attributes",
          "Degrading people who have experienced tragedy",
          "Inciting harassment or promoting coordinated abuse",
          "Mimicking sexual acts using platform features to target someone"
        ]
      },
      {
        "id": "tt-safety-ai-generated",
        "reference": "TT-SAFETY-4",
        "summary": "TikTok prohibits AI-generated sexual content involving minors and includes digital manipulation in its definition of prohibited sexual abuse material.",
        "quote": "This covers content created by others or the young person themselves, and includes digital or AI-generated images. It also includes anything that sexualizes or fetishizes a young person's body.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content is AI-generated or digitally manipulated sexual material",
            "example": "Technical indicators of AI generation or digital manipulation",
            "reason": "To identify synthetic sexual abuse material"
          }
        ],
        "removalCriteria": [
          "AI-generated sexual images involving minors",
          "Digitally manipulated sexual content involving young people",
          "Any synthetic content that sexualizes minors"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok mentions appeals in their enforcement section but specific appeal process details are not provided in this document section.",
      "steps": [
        "Report content through appropriate channels",
        "Use specialized reporting form for intimate privacy violations",
        "Contact emergency services if someone is in immediate danger"
      ]
    }
  },
  {
    "id": "tiktok-new-1758542305952-2",
    "reference": "TT-INTEGRITY",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Policies covering impersonation, deceptive behavior, spam, and account authenticity requirements. Includes enforcement actions for fake accounts.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
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
          "hacked",
          "impersonation",
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
        "id": "tt-integrity-aigc-sexualized",
        "reference": "TT-INTEGRITY-AIGC-2",
        "summary": "TikTok does not allow sexualized, fetishized, or victimizing depictions in AI-generated or edited content.",
        "quote": "Sexualized, fetishized, or victimizing depictions",
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
            "description": "Evidence that the content depicts you in a sexualized, fetishized, or victimizing manner",
            "example": "Screenshots or links to the violating content",
            "reason": "To identify and verify the nature of the harmful depiction"
          }
        ],
        "removalCriteria": [
          "AI-generated or edited content contains sexualized depictions of individuals",
          "Content fetishizes or victimizes individuals through AI manipulation",
          "Content creates non-consensual intimate imagery through AI generation"
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence showing AI-generated content using your likeness for bullying or harassment",
            "example": "Screenshots of the harassing content and proof of your identity",
            "reason": "To verify the harassment and confirm identity of the targeted individual"
          }
        ],
        "removalCriteria": [
          "AI-generated content uses someone's likeness specifically to bully them",
          "Content harasses individuals through AI-created depictions",
          "AI manipulation is used as a tool for targeted harassment"
        ]
      },
      {
        "id": "tt-integrity-aigc-youth-inappropriate",
        "reference": "TT-INTEGRITY-AIGC-4",
        "summary": "TikTok prohibits accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions.",
        "quote": "Accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
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
            "description": "Evidence of AI-generated content depicting minors inappropriately",
            "example": "Screenshots of the violating content showing inappropriate depictions of youth",
            "reason": "To identify and remove content that sexualizes or inappropriately depicts minors"
          }
        ],
        "removalCriteria": [
          "Account primarily posts AI-generated images of youth in adult clothing",
          "AI content shows minors in sexualized poses or with inappropriate facial expressions",
          "Content inappropriately depicts individuals under 18 through AI generation"
        ]
      },
      {
        "id": "tt-integrity-impersonation",
        "reference": "TT-INTEGRITY-DECEPTIVE-1",
        "summary": "TikTok does not allow impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name.",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
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
            "description": "Proof that someone is impersonating you without proper disclosure",
            "example": "Screenshots of the impersonating account and evidence of your real identity",
            "reason": "To verify impersonation and confirm the identity of the person being impersonated"
          }
        ],
        "removalCriteria": [
          "Account pretends to be another person without clear fan/parody disclosure in display name",
          "Profile uses someone's identity, photos, or information to deceive others",
          "Account misleads others about the account holder's true identity"
        ]
      },
      {
        "id": "tt-integrity-fake-person",
        "reference": "TT-INTEGRITY-DECEPTIVE-2",
        "summary": "TikTok prohibits pretending to be a fake person or organization with the goal of misleading people.",
        "quote": "Pretending to be a fake person or organization with the goal of misleading people",
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
            "description": "Evidence that an account is using fake identity or your information to mislead others",
            "example": "Screenshots showing deceptive use of personal information or photos",
            "reason": "To identify accounts that use false identities to deceive the community"
          }
        ],
        "removalCriteria": [
          "Account creates false identity using someone else's information",
          "Profile misleads others about the account holder's true identity or affiliation",
          "Account uses deceptive practices to appear as a different person or organization"
        ]
      },
      {
        "id": "tt-integrity-hacked-materials",
        "reference": "TT-INTEGRITY-DECEPTIVE-3",
        "summary": "TikTok does not allow hacked materials distribution when this poses a significant risk of harm.",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
        "contentTypes": [
          "personal",
          "private",
          "intimate",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that your private materials were obtained through hacking and are being distributed",
            "example": "Proof of unauthorized access to your accounts and screenshots of the distributed content",
            "reason": "To verify that materials were obtained illegally and assess potential harm"
          }
        ],
        "removalCriteria": [
          "Content contains materials obtained through unauthorized access or hacking",
          "Distribution of hacked materials poses significant risk of harm to individuals",
          "Private information or content was illegally obtained and shared without consent"
        ]
      },
      {
        "id": "tt-integrity-copyright-violation",
        "reference": "TT-INTEGRITY-IP-1",
        "summary": "TikTok does not allow content that violates someone else's intellectual property rights including copyrights, trademarks, or other IP rights.",
        "quote": "Content that violates someone else's copyrights, trademarks, or other IP rights",
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
            "description": "Proof of ownership of the intellectual property being infringed",
            "example": "Copyright registration, trademark documentation, or other proof of IP ownership",
            "reason": "To verify legitimate ownership of the intellectual property rights claimed"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission from the rights holder",
          "Content infringes on trademark rights of another party",
          "Content violates other forms of intellectual property protection"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok mentions that users can submit copyright or trademark reports through in-app tools, but no specific appeal process is detailed in this document.",
      "steps": [
        "Submit a copyright report through TikTok's in-app tools if copyright rights have been violated",
        "Submit a trademark report through TikTok's in-app tools if trademark rights have been violated"
      ]
    }
  },
  {
    "id": "tiktok-new-1758542305952-3",
    "reference": "TT-MATURE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Policies on adult content, sexually explicit material, non-consensual intimate imagery, and age-restricted content. Covers NCII enforcement.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
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
            "description": "Evidence that content shows prohibited nudity or sexual activity",
            "example": "Screenshots or links to content showing nudity, sexual acts, or sexually suggestive behavior",
            "reason": "To verify violation of body exposure and sexualized behavior policies"
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
        "summary": "TikTok prohibits content facilitating access to sexual services including offering or requesting sexual acts, sexual chats, imagery, or pornography.",
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
            "description": "Evidence of content offering or requesting sexual services",
            "example": "Screenshots showing offers for sexual acts, sexual chats, or pornographic content",
            "reason": "To verify violation of sexual services prohibition"
          }
        ],
        "removalCriteria": [
          "Offering or asking for sexual acts",
          "Offering or requesting sexual chats or imagery",
          "Facilitating access to pornography"
        ]
      },
      {
        "id": "tt-mature-age-restricted-content",
        "reference": "TT-MATURE-AGE-RESTRICTED",
        "summary": "TikTok age-restricts and removes from For You feed content showing significant adult body exposure, intimate kissing, sexually suggestive acts, or sexualized framing involving adults.",
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
            "description": "Evidence of adult sexually suggestive content or significant body exposure",
            "example": "Screenshots showing adults in minimal clothing, intimate kissing, or sexually suggestive behavior",
            "reason": "To verify content meets age-restriction criteria"
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
        "reference": "TT-MATURE-GRAPHIC",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm, including graphic violence, dead bodies, and graphic injuries.",
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
            "description": "Evidence of graphic, gory, or extremely violent content",
            "example": "Screenshots or descriptions of content showing graphic violence, dead bodies, or severe injuries",
            "reason": "To verify content violates graphic content policies"
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
        "reference": "TT-MATURE-ANIMAL",
        "summary": "TikTok prohibits animal abuse, cruelty, neglect, exploitation, poaching, and bestiality content.",
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
            "description": "Evidence of animal abuse, cruelty, or exploitation",
            "example": "Screenshots or descriptions showing animal mistreatment, abuse, or illegal activities involving animals",
            "reason": "To verify violation of animal welfare policies"
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
    "id": "tiktok-new-1758542305952-4",
    "reference": "TT-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "Policies on personal information sharing, doxxing, privacy violations, and platform security. Covers protection of personal data.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-22T11:58:25.952Z",
    "policies": [
      {
        "id": "tt-privacy-sec-personal-info-high-risk",
        "reference": "TT-PRIVACY-SEC-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including content posted by the person themselves or with their consent.",
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
        "id": "tt-privacy-sec-personal-info-moderate-risk",
        "reference": "TT-PRIVACY-SEC-2",
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, requiring additional context for removal decisions.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information causes emotional distress or reputational damage",
            "reason": "TikTok requires context to assess moderate-risk personal information removal requests"
          },
          {
            "description": "Proof that content was shared without consent",
            "example": "Documentation showing lack of permission for sharing",
            "reason": "To establish that the information was shared without authorization"
          }
        ],
        "removalCriteria": [
          "Content contains contact details shared without consent",
          "Content contains date of birth shared without consent",
          "Content contains medical information shared without consent",
          "Content contains image/audio likeness shared without consent",
          "Content contains private communications on sensitive subjects disclosed by non-participants",
          "Information puts someone at risk of psychological harm",
          "Information is likely to cause emotional distress or reputational damage"
        ]
      },
      {
        "id": "tt-privacy-sec-account-security",
        "reference": "TT-PRIVACY-SEC-3",
        "summary": "TikTok prohibits sharing login information, unauthorized access attempts, phishing, hacking, and other activities that compromise platform or account security.",
        "quote": "We work hard to keep TikTok safe, secure, and running smoothly. That includes stopping any attempts to break into the platform, steal information, or abuse our systems.",
        "contentTypes": [
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
            "description": "Evidence of unauthorized access or security breach",
            "example": "Documentation showing account compromise or unauthorized login attempts",
            "reason": "To verify security violations and protect platform integrity"
          }
        ],
        "removalCriteria": [
          "Content involves giving login information to others",
          "Content involves unauthorized access to TikTok",
          "Content contains malware or harmful software",
          "Content involves phishing or smishing attempts",
          "Content involves attempts to steal personal information or hack accounts",
          "Content involves reverse-engineering TikTok's systems or algorithms"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "TikTok provides a privacy violation reporting system for users who believe their privacy has been violated.",
      "steps": [
        "Access the privacy violation reporting form through the provided link",
        "Submit report detailing the privacy violation",
        "Provide additional context as required for moderate-risk personal information cases"
      ]
    }
  }
],
};
