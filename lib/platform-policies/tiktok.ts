import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, hate speech, and content removal policies. Updated in August 2025 with new sections on AI content, LIVE creator rules, and enhanced enforcement transparency.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T14:13:03.178Z",
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
          "Content is an intimate image or video (authentic or AI-generated) shared without the consent of the depicted individual",
          "Content threatens to share intimate imagery (sextortion)"
        ]
      },
      {
        "id": "tt-ai-policy",
        "reference": "TT-CG-AI",
        "summary": "Prohibits using AI to create non-consensual intimate imagery and requires labeling for other realistic AI content.",
        "quote": "We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
        "contentTypes": [
          "intimate"
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
          "Other realistic manipulated media is not clearly disclosed using a label like 'AI-generated'"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-CG-HARASSMENT",
        "summary": "Prohibits bullying, harassment, and abusive behavior, including posting content to mock, humiliate, or harass someone.",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse. We allow commentary about political figures which may be critical, but remove content that crosses into severe harm.",
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
          "Content targets a private individual for abuse by exposing their private information"
        ]
      },
      {
        "id": "tt-privacy-policy",
        "reference": "TT-CG-PRIVACY",
        "summary": "Prohibits sharing personally identifiable information (PII) without consent, a practice known as doxing.",
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
            "description": "Link to the content containing PII",
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
          "Content reveals private, personal, or identifying information to enable harassment"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-CG-IMPERSONATION",
        "summary": "Prohibits impersonating individuals or organizations in a deceptive manner. Parody or fan accounts must be clearly stated.",
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
            "example": "Photo of your government-issued ID",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is impersonating you or your entity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account uses another's name, bio, or profile picture to mislead others",
          "The account's intent is to deceive users about its identity",
          "The account is not clearly marked as a parody or fan page"
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
    "accessTimestamp": "2025-09-23T14:13:03.178Z",
    "policies": [
      {
        "id": "tt-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement and requires users to agree to the Copyright Policy as a condition of access.",
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
            "description": "Compliance with the Copyright Policy terms",
            "reason": "Required as a condition of platform access and use"
          },
          {
            "description": "Evidence of copyright ownership or authorization",
            "reason": "To establish legitimate copyright infringement claim"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or intellectual property rights",
          "User fails to comply with Copyright Policy terms"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits intimidation, harassment, sexually explicit material promotion, and discrimination based on protected characteristics.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age",
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
            "description": "Evidence of intimidating or harassing behavior",
            "reason": "To demonstrate violation of harassment policy"
          },
          {
            "description": "Documentation of sexually explicit material promotion or discriminatory content",
            "reason": "To establish policy violation"
          }
        ],
        "removalCriteria": [
          "Content intimidates or harasses another user",
          "Content promotes sexually explicit material",
          "Content promotes discrimination based on protected characteristics"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits uploading or sharing private information of third parties including personal contact details and identification documents.",
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
            "reason": "To locate and verify the policy violation"
          },
          {
            "description": "Evidence that the information belongs to a third party",
            "reason": "To establish unauthorized sharing of private information"
          }
        ],
        "removalCriteria": [
          "Content contains private addresses, phone numbers, or email addresses of third parties",
          "Content contains personal identity document numbers or credit card information of others"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity or misrepresenting affiliation, including creating false impressions about content origin.",
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
            "description": "Evidence of impersonation or false representation",
            "reason": "To demonstrate violation of impersonation policy"
          },
          {
            "description": "Proof of actual identity or affiliation being misrepresented",
            "reason": "To establish legitimate impersonation claim"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "User falsely represents their affiliation with a person or entity",
          "Content creates false impression about its origin or source"
        ]
      },
      {
        "id": "tt-unauthorized-account-access-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits using or attempting to use another's account or system without authorization and creating false identities.",
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
            "description": "Evidence of unauthorized account access or use",
            "reason": "To demonstrate violation of account security policy"
          },
          {
            "description": "Documentation of false identity creation",
            "reason": "To establish policy violation"
          }
        ],
        "removalCriteria": [
          "User accessed or used another's account without authorization",
          "User created a false identity on the platform"
        ]
      },
      {
        "id": "tt-harmful-content-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits content designed to provoke, harass, harm, or upset people, including trolling, bullying, and threatening material.",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people; any material that contains a threat of any kind, including threats of physical violence",
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
            "description": "Evidence of content designed to harass, harm, or upset",
            "reason": "To demonstrate violation of harmful content policy"
          },
          {
            "description": "Documentation of threats or bullying behavior",
            "reason": "To establish policy violation"
          }
        ],
        "removalCriteria": [
          "Content is deliberately designed to provoke, troll, or bully",
          "Content is intended to harass, harm, distress, or embarrass people",
          "Content contains threats of any kind including physical violence"
        ]
      },
      {
        "id": "tt-account-security-notification-policy",
        "reference": "TT-TOS-4",
        "summary": "Requires users to immediately notify TikTok if they know or suspect unauthorized access to their account.",
        "quote": "If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback",
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
            "description": "Report through the official feedback form at https://www.tiktok.com/legal/report/feedback",
            "reason": "Required reporting mechanism for account security incidents"
          },
          {
            "description": "Details of suspected unauthorized access",
            "reason": "To investigate and secure the compromised account"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised"
        ]
      },
      {
        "id": "tt-content-removal-authority-policy",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at any time without prior notice for violations or harm to services and users.",
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
            "description": "Content that violates Terms of Service or Community Guidelines",
            "reason": "To justify content removal under platform policies"
          },
          {
            "description": "Evidence that content is harmful to services or users",
            "reason": "To protect platform integrity and user safety"
          }
        ],
        "removalCriteria": [
          "Content is objectionable or violates Terms of Service",
          "Content violates Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-user-content-removal-policy",
        "reference": "TT-TOS-7",
        "summary": "Reserves the right to cut, crop, edit, refuse to publish, remove, disallow, block or delete user content that violates content standards.",
        "quote": "We, or authorised third parties, reserve the right to cut, crop, edit or refuse to publish, your content at our or their sole discretion. We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at \"Your Access to and Use of Our Services\" above. In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
            "description": "Content that violates platform content standards",
            "reason": "To justify content removal or editing"
          },
          {
            "description": "Complaints from other users or third parties",
            "reason": "To respond to reported violations"
          }
        ],
        "removalCriteria": [
          "Content does not comply with platform content standards",
          "Content violates Terms of Service",
          "Content is subject to complaints from users or third parties"
        ]
      },
      {
        "id": "tt-expeditious-removal-policy",
        "reference": "TT-TOS-7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable or terminate accounts of repeat infringers.",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal of infringing material"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of infringing material",
            "reason": "To identify content for expeditious removal"
          },
          {
            "description": "Documentation of repeat infringement for account action",
            "reason": "To justify account termination for repeat offenders"
          }
        ],
        "removalCriteria": [
          "Material infringes copyrights or intellectual property rights",
          "User repeatedly infringes intellectual property rights of others"
        ]
      },
      {
        "id": "tt-counter-notice-policy",
        "reference": "TT-TOS-11",
        "summary": "Provides a counter-notice process for content removal with potential restoration after ten business days unless legal action is filed.",
        "quote": "If a counter-notice is received by TikTok's Copyright Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed content or cease disabling it. Unless the original complaining party files an action seeking a court order against the Content Provider, member or user, the removed content may be replaced, or access to it restored, in ten business days or more after receipt of the counter-notice, at TikTok's sole discretion.",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": 10,
            "unit": "days",
            "description": "Content may be restored ten business days or more after counter-notice receipt"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid counter-notice filed with TikTok's Copyright Agent",
            "reason": "To initiate the counter-notice process"
          },
          {
            "description": "No court order filed by original complaining party",
            "reason": "Required condition for content restoration"
          }
        ],
        "removalCriteria": [
          "Counter-notice received and no legal action filed within specified timeframe",
          "TikTok exercises discretion to restore content after counter-notice process"
        ]
      },
      {
        "id": "tt-california-minor-removal-policy",
        "reference": "TT-TOS-11",
        "summary": "Provides content removal process for California residents under 18 years of age for User Content they posted.",
        "quote": "Users of the Services who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/feedback. All requests must be labeled \"California Removal Request\" on the email subject line. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
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
            "description": "Contact through https://www.tiktok.com/legal/report/feedback with subject line \"California Removal Request\"",
            "reason": "Required process for California minor content removal requests"
          },
          {
            "description": "Description of User Content to be removed",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Information sufficient to locate the User Content",
            "reason": "To enable platform to find and remove the content"
          },
          {
            "description": "Verification of California residency and age under 18",
            "reason": "To qualify for this specific removal process"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years of age",
          "Content was posted by the requesting user",
          "Proper request format and information provided"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or request removal through the feedback form, with specific processes for California minors and counter-notices for copyright claims.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "For California residents under 18: Label request as \"California Removal Request\" in subject line",
        "Provide description of content and sufficient information to locate it",
        "For copyright counter-notices: File through TikTok's Copyright Agent with proper counter-notice format",
        "Wait for TikTok's response and potential content restoration (10+ business days for counter-notices)"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024 with enhanced data protection measures and clearer user rights explanations.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T14:13:03.178Z",
    "policies": [
      {
        "id": "tt-pp-privacy-violation",
        "reference": "Privacy Policy - Information You Provide",
        "summary": "Prohibits sharing of personal information found in User Content without consent, including when users appear in content created by others.",
        "quote": "Even if you are not a user, information about you may appear in User Content created or published by users on the Platform.",
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
            "description": "Identification of the specific User Content containing your information",
            "example": "URL or description of the video/content where you appear",
            "reason": "To locate and verify the content that contains your personal information"
          }
        ],
        "removalCriteria": [
          "Content contains information about individuals who did not consent to appear in User Content"
        ]
      },
      {
        "id": "tt-pp-message-privacy",
        "reference": "Privacy Policy - Messages",
        "summary": "Acknowledges that private messages sent to other users become accessible to those users and disclaims responsibility for how recipients use or share those messages.",
        "quote": "Please be aware that messages you choose to send to other users of the Platform will be accessible by those users and that we are not responsible for the manner in which those users use or share the messages.",
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
            "description": "Evidence of unauthorized sharing of private messages",
            "example": "Screenshots or links showing your private messages shared publicly",
            "reason": "To verify that private communications were shared without authorization"
          }
        ],
        "removalCriteria": [
          "Private messages shared without sender's consent"
        ]
      },
      {
        "id": "tt-pp-public-disclosure-warning",
        "reference": "Privacy Policy - With Your Consent",
        "summary": "Warns users that information shared in public activities may be collected or used by other users and disclaims responsibility for information users choose to submit publicly.",
        "quote": "If you choose to engage in public activities on the Platform, you should be aware that any information you share may be read, collected, or used by other users. You should use caution in disclosing personal information while using the Platform. We are not responsible for the information you choose to submit.",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that personal information was misused by other users",
            "example": "Documentation showing how your publicly shared information was collected or misused",
            "reason": "To demonstrate misuse of information that was publicly disclosed"
          }
        ],
        "removalCriteria": [
          "Misuse of personal information that was publicly disclosed on the Platform"
        ]
      },
      {
        "id": "tt-pp-underage-content-removal",
        "reference": "Privacy Policy - Content Removal for Users Under 18",
        "summary": "Provides content removal rights for California residents under 18 years of age for User Content they posted, with limitations on complete removal.",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
        "contentTypes": [
          "personal",
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Description of the User Content to be removed",
            "example": "Detailed description of the video, photo, or other content you posted",
            "reason": "To locate the specific content for removal"
          },
          {
            "description": "Information sufficient to locate the content",
            "example": "URL, username, date posted, or other identifying information",
            "reason": "To verify and locate the content in TikTok's systems"
          },
          {
            "description": "Verification of California residency and age under 18",
            "example": "Confirmation of residence and age status",
            "reason": "To verify eligibility under California law"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years of age",
          "Content was posted by the requesting user themselves",
          "Adequate information provided to locate the content"
        ]
      },
      {
        "id": "tt-pp-connecticut-minor-removal",
        "reference": "Privacy Policy - Content Removal for Users Under 18",
        "summary": "Provides account deletion rights for Connecticut residents under 18 and parents/guardians of users under 16 to unpublish or delete accounts.",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16) by following the instructions here.",
        "contentTypes": [
          "personal",
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Verification of Connecticut residency and age requirements",
            "example": "Confirmation of residence and age status for user or child",
            "reason": "To verify eligibility under Connecticut law"
          },
          {
            "description": "Parental verification for users under 16",
            "example": "Proof of parental/guardian relationship",
            "reason": "To verify authority to request account deletion for minors"
          }
        ],
        "removalCriteria": [
          "User is a Connecticut resident under 18 years of age, or parent/guardian of Connecticut resident under 16",
          "Request follows proper procedures outlined in TikTok's instructions"
        ]
      },
      {
        "id": "tt-pp-child-account-termination",
        "reference": "Privacy Policy - Children and Teens",
        "summary": "Requires deletion of personal information and account termination when TikTok becomes aware that a child under 13 has created an account.",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account.",
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
            "description": "Evidence that a user is below the age of 13",
            "example": "Information demonstrating the user's actual age",
            "reason": "To verify that the user is below the minimum age requirement"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age",
          "Personal information was collected from the underage user"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "Privacy Policy - Children and Teens",
        "summary": "Provides parents and guardians with rights to request deletion of underage children's accounts or download account data.",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Verification of parental or guardian status",
            "example": "Proof of legal relationship to the underage user",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Identification of the underage child's account",
            "example": "Username, email, or other account identifying information",
            "reason": "To locate the specific account for deletion or data download"
          }
        ],
        "removalCriteria": [
          "Requester is verified parent or guardian of underage account holder",
          "Account belongs to an underage user"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about privacy requests through TikTok's privacy reporting system",
      "steps": [
        "Submit initial privacy request through the online form",
        "Receive decision notification from TikTok",
        "Follow instructions in the decision communication to submit an appeal",
        "Provide any additional information requested for the appeal review"
      ]
    }
  },
  {
    "id": "tiktok-new-1758636783178-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA takedown procedures for content removal.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T14:13:03.178Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright and requires proper authorization for use of copyrighted content",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, description of infringed work, location of infringing content",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name, email address, phone number",
            "reason": "TikTok may contact the reporter with questions about the report"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason"
        ]
      },
      {
        "id": "tt-ip-copyright-removal-policy",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes copyright and may ban accounts of repeat infringers or in cases of severe violations",
        "quote": "Any user content that infringes another person's copyright may be removed. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
            "description": "Evidence of copyright infringement through Copyright Infringement Report",
            "example": "Completed online form with all required information",
            "reason": "To establish that content infringes copyright before removal"
          }
        ],
        "removalCriteria": [
          "User content infringes another person's copyright",
          "Repeated copyright infringement by the same user",
          "Severe copyright violations warranting immediate action"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of trademarks that causes confusion about source, origin, sponsorship or affiliation of goods and services",
        "quote": "Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.",
        "contentTypes": [
          "personal",
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
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark registration details, description of infringement, location of infringing content",
            "reason": "To facilitate evaluation of the trademark infringement report"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name, email address, phone number",
            "reason": "TikTok may contact the reporter with questions about the report"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark in connection with goods or services",
          "Use likely to cause confusion, deception or mistake about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits the purchase, sale, trade, promotion, or solicitation of counterfeit goods and removes such content",
        "quote": "we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
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
            "description": "Evidence that goods are counterfeit through Trademark Infringement Report",
            "example": "Proof of trademark ownership and evidence of counterfeiting",
            "reason": "To establish that goods infringe trademark rights before removal"
          }
        ],
        "removalCriteria": [
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-trademark-removal-policy",
        "reference": "Removal of Content; Account Bans (Trademark)",
        "summary": "Removes content that violates trademark rights and may ban accounts of repeat infringers or in cases of severe violations",
        "quote": "Any content that violates another's trademark rights may be taken down. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
        "contentTypes": [
          "personal",
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
            "description": "Evidence of trademark violation through Trademark Infringement Report",
            "example": "Completed online form with all required information",
            "reason": "To establish that content violates trademark rights before removal"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Repeated trademark infringement by the same user",
          "Severe trademark violations warranting immediate action"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright and trademark removals through in-app notifications, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact information and supporting evidence",
        "Submit appeal for TikTok review",
        "TikTok may contact user with additional questions",
        "For copyright appeals outside EU: TikTok may forward entire appeal to original reporter",
        "Content may be reinstated at TikTok's sole discretion based on review"
      ]
    }
  },
  {
    "id": "tiktok-new-1758636783178-1",
    "reference": "TT-HARASSMENT",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent behavior with specific enforcement measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-23T14:13:03.178Z",
    "policies": [
      {
        "id": "tt-harassment-bullying",
        "reference": "Harassment and Bullying",
        "summary": "Prohibits harassment and bullying, including sexual harassment, doxing, coordinated abuse, and degrading behavior targeting individuals.",
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation. Content that includes lower-severity degrading behavior may be ineligible for the FYF. In some cases, we may remove this content when additional context is available—such as when it targets someone under 18 and could contribute to more serious harm.",
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
            "description": "Report harassment or bullying content through the app or website",
            "example": "Use TikTok's reporting tools to flag harassing content",
            "reason": "Platform needs to identify and review potentially harmful content"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments or engaging in unwanted sexual behavior towards someone",
          "Insulting someone's physical attributes, such as weight, facial features, or body parts",
          "Degrading or revictimizing people who have experienced a tragedy",
          "Wishing serious harm on someone, such as expressing a desire for them to die or contract a serious illness",
          "Doxing or encouraging others to do so",
          "Inciting harassment or promoting coordinated abuse"
        ]
      },
      {
        "id": "tt-sexual-harassment",
        "reference": "Harassment and Bullying - Sexual Harassment",
        "summary": "Prohibits sexual harassment including sexualization, sexual degradation, and unwanted sexual comments or behaviors.",
        "quote": "Making unwanted sexual comments or engaging in unwanted sexual behavior towards someone. This includes mimicking sexual acts using Duet or stickers, or making remarks about someone's intimate body parts or sexual performance",
        "contentTypes": [
          "intimate",
          "personal"
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
            "description": "Report sexual harassment content through the app or website",
            "example": "Flag content containing unwanted sexual comments or behaviors",
            "reason": "Platform needs to identify sexually harassing content for removal"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments or engaging in unwanted sexual behavior",
          "Mimicking sexual acts using Duet or stickers",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-doxing",
        "reference": "Harassment and Bullying - Doxing",
        "summary": "Prohibits doxing, defined as publishing or threatening to publish personal information about someone online with malicious intent.",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
        "contentTypes": [
          "private",
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
            "description": "Report doxing content through the app or website",
            "example": "Flag content that publishes or threatens to publish personal information",
            "reason": "Platform needs to identify malicious sharing of personal information"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone online with malicious intent",
          "Threatening to publish personal information about someone online with malicious intent"
        ]
      },
      {
        "id": "tt-adult-sexual-abuse",
        "reference": "Adult Sexual Abuse",
        "summary": "Prohibits content showing or promoting sexual abuse or exploitation of adults, including non-consensual sexual acts, image-based sexual abuse, and sextortion.",
        "quote": "We don't allow content that shows or promotes the sexual abuse or exploitation of adults. This includes: Non-Consensual Sexual Acts, Image-Based Sexual Abuse, Sextortion",
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
            "description": "Report intimate privacy violations through dedicated reporting form",
            "example": "Use the intimate privacy violation reporting form at https://www.tiktok.com/legal/report/privacy",
            "reason": "Platform provides specialized reporting for intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Showing, promoting, or engaging in non-consensual sexual acts or image-based sexual abuse",
          "Showing, promoting, or engaging in sextortion",
          "Explicit imagery of adult sexual abuse in fiction or art"
        ]
      },
      {
        "id": "tt-image-based-sexual-abuse",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits image-based sexual abuse, including having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes.",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
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
            "description": "Report intimate privacy violations through dedicated reporting form",
            "example": "Use the intimate privacy violation reporting form at https://www.tiktok.com/legal/report/privacy",
            "reason": "Platform provides specialized reporting for intimate image abuse"
          }
        ],
        "removalCriteria": [
          "Having intimate images of someone without their consent",
          "Sharing intimate images of someone without their consent",
          "Creating intimate images of someone without their consent",
          "Distributing intimate content that was taken with consent but shared without consent"
        ]
      },
      {
        "id": "tt-sextortion",
        "reference": "Adult Sexual Abuse - Sextortion",
        "summary": "Prohibits sextortion, defined as threatening to share nude or sexual content without permission to demand money, sex, or more explicit content.",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
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
            "description": "Report sextortion through the app or website",
            "example": "Flag content or accounts engaging in sextortion threats",
            "reason": "Platform needs to identify and remove sextortion attempts"
          }
        ],
        "removalCriteria": [
          "Threatening to share nude or sexual content without permission",
          "Demanding money, sex, or more explicit content in exchange for not sharing intimate content"
        ]
      },
      {
        "id": "tt-youth-sexual-abuse",
        "reference": "Youth Sexual and Physical Abuse",
        "summary": "Prohibits sharing, showing, promoting, or engaging in abuse or exploitation of youth, including CSAM, grooming, sextortion, and sexual solicitation.",
        "quote": "We don't allow sharing, showing, promoting, or engaging in abuse or exploitation of youth. This includes: Child Sexual Abuse Material (CSAM), Grooming, Sextortion, Sexual Solicitation, Pedophilia, Physical or Psychological Harm to young people",
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
            "description": "Report suspected CSAM immediately through the app or website",
            "example": "Use TikTok's reporting system to flag suspected youth exploitation",
            "reason": "Platform reports CSAM to NCMEC and law enforcement"
          }
        ],
        "removalCriteria": [
          "CSAM, including any screenshot or clip from the original material",
          "Grooming behavior",
          "Sextortion involving youth",
          "Sexual solicitation of youth",
          "Sexualizing or fetishizing a young person",
          "Sharing content that could identify a young person who has experienced abuse"
        ]
      },
      {
        "id": "tt-coordinated-abuse",
        "reference": "Harassment and Bullying - Coordinated Abuse",
        "summary": "Prohibits inciting harassment or promoting coordinated abuse, including encouraging others to leave abusive comments or falsely report accounts.",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
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
            "description": "Report coordinated harassment through the app or website",
            "example": "Flag content that encourages mass harassment or false reporting",
            "reason": "Platform needs to identify organized harassment campaigns"
          }
        ],
        "removalCriteria": [
          "Encouraging others to leave abusive comments",
          "Encouraging others to falsely report an account",
          "Promoting coordinated abuse campaigns"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document mentions that TikTok has notice and appeals processes but does not provide specific details about the appeal process in this section.",
      "steps": [
        "Appeals process details are referenced but not specified in this document section"
      ]
    }
  },
  {
    "id": "tiktok-new-1758636783178-2",
    "reference": "TT-IMPERSONATION",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Policies covering impersonation, fake accounts, and deceptive behavior with reporting mechanisms.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-23T14:13:03.178Z",
    "policies": [
      {
        "id": "tt-ia-impersonation",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
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
            "description": "Evidence that someone is impersonating you on TikTok",
            "example": "Screenshots of the impersonating account, comparison with your authentic account",
            "reason": "To verify that impersonation is occurring and identify the infringing account"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be someone else",
          "Account does not clearly state it is a fan or parody account in the display name"
        ]
      },
      {
        "id": "tt-ia-fake-person",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits pretending to be a fake person or organization with the goal of misleading people",
        "quote": "Pretending to be a fake person or organization with the goal of misleading people",
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
            "description": "Evidence that an account is using fake identity to mislead people",
            "example": "Screenshots showing false identity claims, misleading profile information",
            "reason": "To verify that the account is using deceptive identity practices"
          }
        ],
        "removalCriteria": [
          "Account pretends to be a fake person or organization",
          "Account has the goal of misleading people"
        ]
      },
      {
        "id": "tt-ia-aigc-private-figures",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits using the likeness of private figures without consent",
        "quote": "Using the likeness of private figures without consent",
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
            "description": "Evidence that AI-generated content uses your likeness without consent",
            "example": "Screenshots of the AI-generated content, proof of your identity as a private figure",
            "reason": "To verify unauthorized use of likeness and confirm private figure status"
          }
        ],
        "removalCriteria": [
          "Content uses the likeness of a private figure",
          "No consent was given for the use of the likeness"
        ]
      },
      {
        "id": "tt-ia-aigc-sexualized",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits sexualized, fetishized, or victimizing depictions in AI-generated content",
        "quote": "Sexualized, fetishized, or victimizing depictions",
        "contentTypes": [
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
            "description": "Evidence that AI-generated content contains sexualized, fetishized, or victimizing depictions",
            "example": "Screenshots of the violating content showing inappropriate depictions",
            "reason": "To verify the sexual or victimizing nature of the AI-generated content"
          }
        ],
        "removalCriteria": [
          "Content contains sexualized depictions",
          "Content contains fetishized depictions",
          "Content contains victimizing depictions"
        ]
      },
      {
        "id": "tt-ia-aigc-harassment",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-created likenesses made to bully or harass",
        "quote": "AI-created likenesses made to bully or harass",
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
            "description": "Evidence that AI-created likeness is being used for bullying or harassment",
            "example": "Screenshots of the harassing content, documentation of the bullying behavior",
            "reason": "To verify that the AI-generated likeness is being used for harmful purposes"
          }
        ],
        "removalCriteria": [
          "Content uses AI-created likenesses",
          "Content is made to bully or harass"
        ]
      },
      {
        "id": "tt-ia-aigc-youth-inappropriate",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
        "quote": "Accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence that account focuses on inappropriate AI images of youth",
            "example": "Screenshots showing pattern of AI-generated images of minors in adult clothing or sexualized poses",
            "reason": "To verify the account's focus on inappropriate AI-generated content involving minors"
          }
        ],
        "removalCriteria": [
          "Account is focused on AI images of youth in clothing suited for adults",
          "Account shows youth in sexualized poses or facial expressions"
        ]
      },
      {
        "id": "tt-ia-aigc-public-figure-degrading",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AIGC or significantly edited content that misleads about public figures being degraded, harassed, or linked to criminal behavior",
        "quote": "A public figure being degraded, harassed, or linked to criminal behavior",
        "contentTypes": [
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
            "description": "Evidence that AI-generated content falsely shows you being degraded, harassed, or linked to criminal behavior",
            "example": "Screenshots of the misleading AI content, proof of your public figure status",
            "reason": "To verify the misleading nature of the content and confirm public figure status"
          }
        ],
        "removalCriteria": [
          "Content is AIGC or significantly edited",
          "Content misleadingly shows a public figure being degraded, harassed, or linked to criminal behavior"
        ]
      },
      {
        "id": "tt-ia-hacked-materials",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits hacked materials distribution when this poses a significant risk of harm",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
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
            "description": "Evidence that materials were obtained through hacking and pose significant risk of harm",
            "example": "Documentation of unauthorized access, evidence of potential harm from distribution",
            "reason": "To verify that materials were obtained illegally and assess harm potential"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through hacking",
          "Distribution poses a significant risk of harm"
        ]
      },
      {
        "id": "tt-ia-ip-violation",
        "reference": "Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates someone else's intellectual property rights",
        "quote": "We don't allow content that violates someone else's intellectual property (IP) rights",
        "contentTypes": [
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
            "description": "Evidence of intellectual property ownership and unauthorized use",
            "example": "Copyright registration, original creation documentation, screenshots of infringing content",
            "reason": "To verify ownership of intellectual property and confirm unauthorized use"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights"
        ]
      },
      {
        "id": "tt-ia-aigc-labeling-requirement",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Requires creators to label AI-generated or significantly edited content that shows realistic-looking scenes or people",
        "quote": "we require creators to label AI-generated or significantly edited content that shows realistic-looking scenes or people",
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
            "description": "Evidence that AI-generated or significantly edited content lacks proper labeling",
            "example": "Screenshots showing realistic AI content without AIGC label or clear disclosure",
            "reason": "To verify that required disclosure is missing from AI-generated content"
          }
        ],
        "removalCriteria": [
          "Content is AI-generated or significantly edited",
          "Content shows realistic-looking scenes or people",
          "Content lacks required labeling or disclosure"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides copyright and trademark reporting tools for intellectual property violations, with specific in-app reporting mechanisms available",
      "steps": [
        "Submit a copyright report through TikTok's in-app tools for copyright violations",
        "Submit a trademark report through TikTok's in-app tools for trademark violations",
        "Provide required evidence of intellectual property ownership and violation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758636783178-3",
    "reference": "TT-PRIVACY-SECURITY",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific policies on personal information protection, doxxing, and platform security measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T14:13:03.178Z",
    "policies": [
      {
        "id": "tt-ps-high-risk-personal-info",
        "reference": "Personal Information - High Risk Personal Information",
        "summary": "Prohibits content containing high risk personal information that could lead to stalking, identity theft, fraud, or other harm, including home addresses, account login information, sensitive payment information, and identity numbers",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others. High Risk Personal Information: Information that is characterized by a heightened potential to cause physical, financial, or psychological harm to the individual. It includes: Home Address, Account Login Information, Sensitive Payment Information, Identity Numbers",
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
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the privacy reporting form at https://www.tiktok.com/legal/report/privacy",
            "reason": "To initiate review of potential privacy violations"
          }
        ],
        "removalCriteria": [
          "Content contains home addresses",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Content could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-ps-moderate-risk-personal-info",
        "reference": "Personal Information - Moderate Risk Personal Information",
        "summary": "Removes moderate risk personal information shared without consent when it puts someone at risk of psychological harm, including contact details, medical information, image/audio likeness, and private communications on sensitive subjects",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information. Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
            "description": "Additional context demonstrating risk of psychological harm",
            "example": "Evidence showing how the shared information puts the individual at risk",
            "reason": "Platform requires additional context to assess moderate risk personal information"
          },
          {
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the privacy reporting form at https://www.tiktok.com/legal/report/privacy",
            "reason": "To initiate review of potential privacy violations"
          }
        ],
        "removalCriteria": [
          "Moderate risk personal information shared without consent",
          "Content puts someone at risk of psychological harm",
          "Content includes contact details or date of birth shared without consent",
          "Content includes medical information shared without consent",
          "Content includes image/audio likeness shared without consent",
          "Content includes private communications on sensitive subjects disclosed by non-participants"
        ]
      },
      {
        "id": "tt-ps-unauthorized-access",
        "reference": "Platform Security - Unauthorized Access",
        "summary": "Prohibits giving login information to others, letting others break TikTok's rules on user accounts, and using unauthorized methods to access TikTok or create fake versions of the platform",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account. Using unauthorized ways to access TikTok or creating fake versions of the platform",
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
            "description": "Evidence of unauthorized account access or rule violations",
            "example": "Documentation showing someone else accessed your account without permission",
            "reason": "To verify unauthorized access or misuse of account credentials"
          }
        ],
        "removalCriteria": [
          "User gave login information to someone else",
          "Someone else broke TikTok's rules using user's account",
          "Unauthorized methods used to access TikTok",
          "Creation of fake versions of the platform"
        ]
      },
      {
        "id": "tt-ps-malware-phishing",
        "reference": "Platform Security - Malware and Phishing",
        "summary": "Prohibits sharing files or messages containing malware, attempting to steal personal information through phishing or other deceptive methods, and trying to hack accounts or access data using automated tools",
        "quote": "Sharing files or messages that carry malware or other harmful software, such as viruses or worms. Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
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
            "description": "Evidence of malicious files, phishing attempts, or hacking activities",
            "example": "Screenshots or documentation of suspicious messages or files",
            "reason": "To identify and remove security threats to users and the platform"
          }
        ],
        "removalCriteria": [
          "Content contains malware or harmful software",
          "Content includes viruses or worms",
          "Attempts to steal personal information through phishing",
          "Attempts to steal personal information through smishing",
          "Use of automated tools to hack accounts or access data"
        ]
      },
      {
        "id": "tt-ps-reverse-engineering",
        "reference": "Platform Security - Reverse Engineering",
        "summary": "Prohibits attempting to reverse-engineer TikTok's code, systems, or algorithms, or creating unauthorized versions based on them",
        "quote": "Trying to reverse-engineer TikTok's code, systems, or algorithms—or create your own versions based on them",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of reverse engineering attempts or unauthorized platform recreations",
            "example": "Documentation of attempts to analyze or recreate TikTok's systems",
            "reason": "To protect proprietary technology and platform integrity"
          }
        ],
        "removalCriteria": [
          "Attempts to reverse-engineer TikTok's code",
          "Attempts to reverse-engineer TikTok's systems",
          "Attempts to reverse-engineer TikTok's algorithms",
          "Creation of unauthorized versions based on TikTok's technology"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
