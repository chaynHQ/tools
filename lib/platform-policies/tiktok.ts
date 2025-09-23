import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including safety and civility, integrity and authenticity, and content moderation policies. Updated August 2025 with new policies on AI content, LIVE creator rules, and enhanced enforcement transparency.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T13:34:04.217Z",
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
    "summary": "Legal terms governing the use of TikTok, including content ownership, intellectual property rights, account management, and user obligations.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T13:34:04.217Z",
    "policies": [
      {
        "id": "tt-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement and requires users to agree to the Copyright Policy as a condition of access and use of the Services.",
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
            "reason": "Required as a condition of service access and use"
          }
        ],
        "removalCriteria": [
          "Content infringes intellectual property rights",
          "User fails to comply with Copyright Policy terms"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits intimidation, harassment, sexually explicit material promotion, violence, and discrimination based on protected characteristics.",
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
            "reason": "To demonstrate violation of prohibited conduct"
          },
          {
            "description": "Evidence of sexually explicit material promotion",
            "reason": "To show violation of content standards"
          }
        ],
        "removalCriteria": [
          "Content intimidates or harasses another user",
          "Content promotes sexually explicit material",
          "Content promotes violence or discrimination based on protected characteristics"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity, or falsely stating or misrepresenting affiliation with any person or entity.",
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
            "reason": "To demonstrate unauthorized use of identity or false affiliation claims"
          },
          {
            "description": "Proof that content falsely appears to emanate from the Services",
            "reason": "To show misrepresentation of content source"
          }
        ],
        "removalCriteria": [
          "User impersonates another person or entity",
          "User falsely states or misrepresents affiliation with person or entity",
          "Content gives false impression of emanating from the Services"
        ]
      },
      {
        "id": "tt-unauthorized-account-use",
        "reference": "TT-TOS-5",
        "summary": "Prohibits using or attempting to use another's account, service or system without authorization from TikTok, or creating false identities.",
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
            "reason": "To demonstrate violation of account security requirements"
          },
          {
            "description": "Evidence of false identity creation",
            "reason": "To show violation of authentic identity requirements"
          }
        ],
        "removalCriteria": [
          "User accesses or uses another's account without TikTok authorization",
          "User creates a false identity on the Services"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits uploading, transmitting, distributing, storing or making available any private information of third parties, including personal documents and identifying information.",
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
            "description": "Evidence that private information of third parties was shared",
            "reason": "To demonstrate violation of privacy protection requirements"
          },
          {
            "description": "Identification of specific private information disclosed",
            "reason": "To verify the nature and extent of privacy violation"
          }
        ],
        "removalCriteria": [
          "Content contains private addresses, phone numbers, or email addresses of third parties",
          "Content includes personal identity document numbers or credit card numbers of third parties"
        ]
      },
      {
        "id": "tt-ip-privacy-violation",
        "reference": "TT-TOS-5",
        "summary": "Prohibits material that infringes intellectual property or privacy rights of any other person.",
        "quote": "any material which does or may infringe any copyright, trademark or other intellectual property or privacy rights of any other person",
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
            "description": "Evidence of intellectual property or privacy rights infringement",
            "reason": "To demonstrate violation of third party rights"
          },
          {
            "description": "Proof of ownership or rights in the infringed material",
            "reason": "To establish standing to claim infringement"
          }
        ],
        "removalCriteria": [
          "Material infringes copyright, trademark or other intellectual property rights",
          "Material violates privacy rights of another person"
        ]
      },
      {
        "id": "tt-harmful-content-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits material designed to provoke, antagonize, harass, harm, hurt, scare, distress, embarrass or upset people, including trolling and bullying.",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Evidence that material is designed to provoke, antagonize or cause harm",
            "reason": "To demonstrate intent to harass or cause distress"
          },
          {
            "description": "Documentation of trolling or bullying behavior",
            "reason": "To show pattern of harmful conduct"
          }
        ],
        "removalCriteria": [
          "Material deliberately designed to provoke or antagonize people",
          "Content constitutes trolling or bullying",
          "Material intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-4",
        "summary": "Requires users to keep account passwords confidential and immediately notify TikTok if any third party knows the password or has accessed the account.",
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
            "description": "Report to TikTok via https://www.tiktok.com/legal/report/feedback",
            "reason": "Required notification process for compromised accounts"
          },
          {
            "description": "Information about suspected unauthorized access",
            "reason": "To enable TikTok to investigate and secure the account"
          }
        ],
        "removalCriteria": [
          "Third party has gained knowledge of account password",
          "Unauthorized access to user account has occurred or is suspected"
        ]
      },
      {
        "id": "tt-content-removal-authority",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at TikTok's discretion for any reason, including content found objectionable, in violation of Terms or Community Policy, or harmful to Services or users.",
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
            "description": "Content that violates Terms of Service or Community Policy",
            "reason": "To justify content removal under platform policies"
          },
          {
            "description": "Evidence that content is harmful to Services or users",
            "reason": "To demonstrate need for content removal"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Policy",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-user-content-removal-rights",
        "reference": "TT-TOS-7",
        "summary": "Reserves the right to cut, crop, edit, refuse to publish, remove, disallow, block or delete any user content that does not comply with content standards, with or without notice and without liability.",
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
            "description": "Content that violates content standards or Terms",
            "reason": "To justify content removal action"
          },
          {
            "description": "Complaints from other users or third parties",
            "reason": "To trigger content review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content does not comply with content standards",
          "User Content violates the Terms of Service",
          "Content is subject to complaints from other users or third parties"
        ]
      },
      {
        "id": "tt-identity-disclosure-policy",
        "reference": "TT-TOS-7",
        "summary": "Reserves the right to disclose user identity to any third party claiming that user content violates their intellectual property rights or right to privacy.",
        "quote": "We also have the right to disclose your identity to any third party who is claiming that any User Content posted or uploaded by you to our Services constitutes a violation of their intellectual property rights, or of their right to privacy.",
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
            "description": "Third party claim of intellectual property rights violation",
            "reason": "To justify disclosure of user identity"
          },
          {
            "description": "Third party claim of privacy rights violation",
            "reason": "To enable resolution of privacy violation claims"
          }
        ],
        "removalCriteria": [
          "User Content violates third party intellectual property rights",
          "User Content violates third party right to privacy"
        ]
      },
      {
        "id": "tt-copyright-infringement-removal",
        "reference": "TT-TOS-7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable or terminate accounts of users who repeatedly infringe copyrights or intellectual property rights.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright or intellectual property infringement",
            "reason": "To identify infringing material for removal"
          },
          {
            "description": "Pattern of repeated infringement for account action",
            "reason": "To justify account termination under repeat infringer policy"
          }
        ],
        "removalCriteria": [
          "Material infringes copyrights or intellectual property rights",
          "User repeatedly infringes copyrights or intellectual property rights of others"
        ]
      },
      {
        "id": "tt-counter-notice-process",
        "reference": "TT-TOS-11",
        "summary": "Provides a counter-notice process where removed content may be restored in ten business days unless the original complainant files legal action.",
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
            "description": "Content may be restored in ten business days or more after receipt of counter-notice"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid counter-notice to TikTok's Copyright Agent",
            "reason": "To initiate the counter-notice process for content restoration"
          }
        ],
        "removalCriteria": [
          "Original complaining party fails to file legal action seeking court order",
          "Counter-notice is received and processed by TikTok's Copyright Agent"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can contact TikTok through the feedback form to file complaints about content or report issues. California residents under 18 can request removal of their own content through this process.",
      "steps": [
        "Contact TikTok at https://www.tiktok.com/legal/report/feedback",
        "For California residents under 18: Label request as 'California Removal Request' in email subject line",
        "Provide description of the content and information sufficient to locate it",
        "For counter-notices: Submit to TikTok's Copyright Agent following counter-notice procedures"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, including information sharing practices and user rights. Last updated August 19, 2024 with enhanced data protection measures.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T13:34:04.217Z",
    "policies": [
      {
        "id": "tt-pp-privacy-violation",
        "reference": "Privacy Policy - Information You Provide",
        "summary": "Prohibits sharing of personal information without consent, including content found in messages and private communications accessible by other users.",
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
            "description": "Evidence of unauthorized sharing of private messages or communications",
            "example": "Screenshots or links to shared private messages",
            "reason": "To verify that private communications were shared without consent"
          }
        ],
        "removalCriteria": [
          "Private messages or communications shared without the sender's consent"
        ]
      },
      {
        "id": "tt-pp-user-content-privacy",
        "reference": "Privacy Policy - Information You Provide",
        "summary": "Acknowledges that user-generated content may contain information about individuals who are not users, creating potential privacy violations when such content is shared without consent.",
        "quote": "Even if you are not a user, information about you may appear in User Content created or published by users on the Platform.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Identification of content containing your information without consent",
            "example": "URL to content showing you without permission",
            "reason": "To locate and verify unauthorized use of personal information in user content"
          }
        ],
        "removalCriteria": [
          "User content containing information about individuals without their consent"
        ]
      },
      {
        "id": "tt-pp-biometric-data",
        "reference": "Privacy Policy - Image and Audio Information",
        "summary": "Collects biometric identifiers including faceprints and voiceprints from user content, requiring legal permissions where mandated by law.",
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
            "description": "Evidence that biometric data was collected or used without proper consent",
            "example": "Content containing facial or voice recognition data used without permission",
            "reason": "To verify unauthorized collection or use of biometric information"
          }
        ],
        "removalCriteria": [
          "Collection or use of biometric identifiers without required legal permissions",
          "Unauthorized use of faceprints or voiceprints from user content"
        ]
      },
      {
        "id": "tt-pp-account-security",
        "reference": "Privacy Policy - Data Security and Retention",
        "summary": "Implements security measures to protect information from unauthorized access, disclosure, and misuse, though acknowledges no system can be guaranteed completely secure.",
        "quote": "We use reasonable measures to help protect information from loss, theft, misuse, unauthorized access, disclosure, alteration, or destruction. You should understand that no data storage system or transmission of data over the Internet or any other public network can be guaranteed to be 100 percent secure.",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of security breach or unauthorized access to account",
            "example": "Documentation of compromised account or unauthorized data access",
            "reason": "To verify security incident and implement protective measures"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user information",
          "Security breach resulting in information disclosure"
        ]
      },
      {
        "id": "tt-pp-content-removal-minors",
        "reference": "Privacy Policy - Content Removal for Users Under 18",
        "summary": "Provides content removal rights for California residents under 18 years of age for user content they posted, with specific request procedures and limitations.",
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
            "description": "Description of the user content to be removed and sufficient location information",
            "example": "Detailed description of content and URL or identifying information",
            "reason": "To locate and verify the specific content for removal"
          },
          {
            "description": "Verification of California residency and age under 18",
            "example": "Proof of California residence and age verification",
            "reason": "To confirm eligibility for minor content removal rights"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years of age",
          "Content was posted by the requesting user",
          "Adequate description and location information provided"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "Privacy Policy - Children and Teens",
        "summary": "Grants parents and guardians rights to request deletion of underage children's accounts, download account data, and exercise other privacy rights on behalf of their children.",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy.",
        "contentTypes": [
          "intimate",
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
            "description": "Verification of parental or guardian relationship to the minor",
            "example": "Documentation proving parental or guardian status",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Identification of the minor's account",
            "example": "Account username or identifying information",
            "reason": "To locate the specific account for deletion or data download"
          }
        ],
        "removalCriteria": [
          "Requester is verified parent or guardian of underage user",
          "Request is made for legitimate child protection purposes"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal privacy-related decisions and exercise rights through TikTok's privacy request portal, with options for authorized agent representation.",
      "steps": [
        "Submit request through https://www.tiktok.com/legal/report/privacy",
        "Provide verification through email address associated with account or account information",
        "If decision is unfavorable, follow appeal instructions provided in the response communication",
        "For authorized agent requests, provide evidence of power of attorney or valid written authority"
      ]
    }
  },
  {
    "id": "tiktok-new-1758634444217-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and counterfeiting violations, including DMCA takedown procedures, repeat infringer policies, and appeal processes for IP-related content removal.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T13:34:04.217Z",
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
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details of the rightsholder",
            "reason": "Platform may need to contact the reporter with questions about the report"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason"
        ]
      },
      {
        "id": "tt-ip-copyright-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes copyright and may restrict access to LIVE features for copyright violations",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User content infringes another person's copyright",
          "Copyright infringement through LIVE feature usage"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User repeatedly commits copyright infringement",
          "Severe copyright violations occur"
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
            "example": "Trademark registration details, evidence of infringement",
            "reason": "To facilitate investigation of trademark infringement claims"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details of the trademark holder",
            "reason": "Platform may need to contact the reporter with additional questions"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits purchase, sale, trade, promotion, or solicitation of counterfeit goods and removes such content",
        "quote": "We do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and may restrict LIVE feature access for trademark violations",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Trademark violations occur through LIVE feature usage"
        ]
      },
      {
        "id": "tt-ip-trademark-repeat-infringer",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts for severe trademark violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User repeatedly commits trademark infringement",
          "Severe trademark violations occur"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright and trademark removals through in-app notifications, with different processes for EU and non-EU users. Appeals require contact information and supporting evidence.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal through TikTok app",
        "Platform may contact user for additional questions",
        "For copyright appeals outside EU: Platform may forward entire appeal to original reporter",
        "For copyright appeals: Content may be reinstated if no court order is received",
        "For trademark appeals: Platform forwards appeal to original reporter where appropriate"
      ]
    }
  },
  {
    "id": "tiktok-new-1758634444217-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention and Harassment Policy",
    "summary": "Dedicated policy addressing harassment, bullying, doxxing, and other harmful behaviors, including reporting mechanisms and support resources for victims.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T13:34:04.217Z",
    "policies": [
      {
        "id": "tt-bp-harassment-bullying",
        "reference": "Bullying Prevention Policy",
        "summary": "Prohibits language or behavior that harasses, humiliates, threatens, or doxxes anyone on the platform",
        "quote": "We do not tolerate language or behavior that harasses, humiliates, threatens or doxxes (publishing personal information about someone online with a malicious intent) anyone on the platform.",
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
            "description": "Report the bullying content through TikTok's reporting system",
            "example": "Use the in-app reporting feature to flag harassing content",
            "reason": "Allows moderation team to review and take appropriate action if it violates Community Guidelines"
          }
        ],
        "removalCriteria": [
          "Content that harasses other users",
          "Content that humiliates other users",
          "Content that threatens other users",
          "Content that doxxes other users by publishing personal information with malicious intent"
        ]
      },
      {
        "id": "tt-bp-no-bullying-tolerance",
        "reference": "Bullying Prevention Policy",
        "summary": "Does not tolerate bullying on the platform and removes content that violates Community Guidelines",
        "quote": "We recognize that bullying can cause severe distress to people, and we do not tolerate it on our platform.",
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
            "description": "Report bullying content for moderation team review",
            "example": "Submit report through TikTok's reporting system",
            "reason": "Enables platform to identify and remove content that causes severe distress"
          }
        ],
        "removalCriteria": [
          "Content that constitutes bullying behavior",
          "Content that causes severe distress to users",
          "Content that violates Community Guidelines related to bullying"
        ]
      },
      {
        "id": "tt-bp-public-figure-attacks",
        "reference": "Bullying Prevention Policy",
        "summary": "Prohibits severe attacks against public figures that may promote physical harm or harassment",
        "quote": "We do not allow public figures to be targeted with severe attacks that may promote physical harm or promotion of harassment against them. We consider the risk of physical or severe psychological harm resulting from these attacks to be greater than the benefit of their expression and remove such content.",
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
            "description": "Evidence of severe attacks targeting public figures",
            "example": "Content that promotes physical harm or harassment against public figures",
            "reason": "Platform considers risk of physical or severe psychological harm greater than expression benefit"
          }
        ],
        "removalCriteria": [
          "Severe attacks targeting public figures",
          "Content that may promote physical harm against public figures",
          "Content that promotes harassment against public figures",
          "Content where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      },
      {
        "id": "tt-bp-comment-filtering",
        "reference": "Bullying Prevention Policy - Comment Filters",
        "summary": "Provides automatic filtering of offensive comments and allows users to create custom keyword filters to hide harmful content",
        "quote": "With comment filters turned on, offensive comments will automatically be hidden. You can also create a custom list of keywords so that comments containing those words will be hidden automatically.",
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
            "description": "Enable comment filtering in privacy settings",
            "example": "Turn on comment filters and create custom keyword lists",
            "reason": "Automatically hides offensive comments and user-specified harmful content"
          }
        ],
        "removalCriteria": [
          "Comments identified as offensive by automatic filters",
          "Comments containing user-specified keywords in custom filter lists"
        ]
      },
      {
        "id": "tt-bp-comment-deletion",
        "reference": "Bullying Prevention Policy - Comment Management",
        "summary": "Allows users to delete inappropriate comments posted on their videos and permanently block accounts",
        "quote": "You also have the ability to delete any inappropriate comments posted on your videos. Just tap and hold the comment, then choose \"delete.\" You can delete a follower at any time or permanently block an account from viewing your content or sending you messages.",
        "contentTypes": [
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
            "description": "Identify inappropriate comments on user's own videos",
            "example": "Comments that violate platform guidelines or are unwanted by the content creator",
            "reason": "Gives users control over comments on their content and ability to block problematic accounts"
          }
        ],
        "removalCriteria": [
          "Comments deemed inappropriate by the video creator",
          "Comments from accounts that have been blocked by the user"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report bullying and harassment content through TikTok's in-app reporting system for moderation team review",
      "steps": [
        "Access the reporting feature in the TikTok app",
        "Submit report of bullying or harassment content",
        "Moderation team reviews the report",
        "Appropriate action taken if content violates Community Guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758634444217-2",
    "reference": "TT-NCII",
    "title": "Non-Consensual Intimate Imagery Partnership",
    "summary": "TikTok's partnership with StopNCII.org to prevent the sharing of non-consensual intimate images through hash-based detection and removal systems.",
    "url": "https://newsroom.tiktok.com/en-us/strengthening-enforcement-of-sexually-suggestive-content",
    "accessTimestamp": "2025-09-23T13:34:04.217Z",
    "policies": [
      {
        "id": "tt-ncii-partnership",
        "reference": "StopNCII Partnership",
        "summary": "Partners with StopNCII.org to prevent the spread of non-consensual intimate imagery and automatically blocks content identified through this partnership from being posted on the platform",
        "quote": "We recently partnered with StopNCII.org, joining forces with Meta and Bumble, to bolster efforts to stop the spread of non-consensual intimate imagery. Not only will this collaboration provide better support for victims, it will also help automatically prevent content identified through our partnership with StopNCII from being posted on our platform.",
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
            "description": "Content must be identified through StopNCII partnership system",
            "example": "Hash matching through StopNCII database",
            "reason": "To automatically detect and prevent posting of previously identified non-consensual intimate imagery"
          }
        ],
        "removalCriteria": [
          "Content has been identified as non-consensual intimate imagery through StopNCII partnership",
          "Content matches hash database of known non-consensual intimate imagery"
        ]
      },
      {
        "id": "tt-nudity-sexual-content",
        "reference": "Community Guidelines Policy",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps",
        "quote": "We've always had strict policies prohibiting nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps.",
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
            "description": "Evidence that content contains nudity, sexual activity, or sexually explicit material",
            "example": "URL to the violating content showing prohibited imagery",
            "reason": "To verify the content violates TikTok's strict policies against sexual content"
          }
        ],
        "removalCriteria": [
          "Content contains nudity",
          "Content shows sexual activity",
          "Content is sexually explicit",
          "Content directs to adult websites or apps"
        ]
      },
      {
        "id": "tt-suggestive-content-restriction",
        "reference": "For You Feed Recommendation Policy",
        "summary": "Restricts sexually suggestive content including implied nudity and sensual content from being recommended in For You feeds and makes such content ineligible for recommendation",
        "quote": "To safeguard For You feeds, TikTok has policies around content categories that are not eligible for recommendation, including implied nudity, sensual content, and other content that is not suitable for all audiences over age 13.",
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
            "description": "Evidence that content contains implied nudity or sensual content",
            "example": "URL to content showing sexually suggestive material",
            "reason": "To determine if content should be restricted from For You feed recommendations"
          }
        ],
        "removalCriteria": [
          "Content contains implied nudity",
          "Content is sensual in nature",
          "Content is not suitable for audiences over age 13"
        ]
      },
      {
        "id": "tt-teen-content-protection",
        "reference": "Content Levels System",
        "summary": "Prevents sexually suggestive content and content with adult innuendo from reaching teen accounts (ages 13-17) through the Content Levels system",
        "quote": "Earlier this year we began to introduce our Content Levels system, which is designed to prevent certain content with more mature or complex themes (such as content containing profanity, adult innuendo, or sexually suggestive content) from reaching audiences between ages 13-17 (teen accounts).",
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
            "description": "Evidence that content contains adult innuendo or sexually suggestive material",
            "example": "URL to content showing mature themes inappropriate for teen audiences",
            "reason": "To protect teen accounts from viewing inappropriate content through age-based content filtering"
          }
        ],
        "removalCriteria": [
          "Content contains adult innuendo",
          "Content is sexually suggestive",
          "Content has mature or complex themes inappropriate for ages 13-17"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758634444217-3",
    "reference": "TT-IMP",
    "title": "Impersonation and Account Authenticity Policy",
    "summary": "Policy covering impersonation violations, fake accounts, deceptive behavior, and reporting mechanisms for accounts pretending to be someone else.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-23T13:34:04.217Z",
    "policies": [
      {
        "id": "tt-imp-private-figures",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits using the likeness of private figures without consent in AI-generated or edited content",
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
            "description": "Evidence that content uses your likeness without permission",
            "example": "URL to the content showing your face, voice, or recognizable image",
            "reason": "To verify unauthorized use of private individual's likeness"
          }
        ],
        "removalCriteria": [
          "Content uses the likeness of a private figure without their consent",
          "Content shows realistic-appearing AI-generated or edited representation of a private individual"
        ]
      },
      {
        "id": "tt-imp-sexualized-depictions",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits sexualized, fetishized, or victimizing depictions in AI-generated or edited content",
        "quote": "Sexualized, fetishized, or victimizing depictions",
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
            "description": "Evidence of sexualized, fetishized, or victimizing AI-generated or edited content",
            "example": "URL to content that depicts you in a sexual or victimizing manner",
            "reason": "To identify harmful sexualized or victimizing AI-generated content"
          }
        ],
        "removalCriteria": [
          "Content contains sexualized depictions created through AI or editing",
          "Content contains fetishized representations of individuals",
          "Content contains victimizing depictions of individuals"
        ]
      },
      {
        "id": "tt-imp-harassment-ai",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-created likenesses made to bully or harass individuals",
        "quote": "AI-created likenesses made to bully or harass",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence that AI-generated content uses your likeness for bullying or harassment",
            "example": "URL to AI-generated content that depicts you in a harassing manner",
            "reason": "To identify AI-generated content created specifically for harassment purposes"
          }
        ],
        "removalCriteria": [
          "AI-generated content uses someone's likeness specifically to bully them",
          "AI-generated content uses someone's likeness specifically to harass them"
        ]
      },
      {
        "id": "tt-imp-youth-inappropriate",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits accounts focused on AI images of youth in adult clothing or sexualized poses",
        "quote": "Accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of accounts creating AI images of minors in inappropriate contexts",
            "example": "Account URL and specific content showing AI-generated images of youth in adult clothing or sexualized contexts",
            "reason": "To protect minors from inappropriate AI-generated representations"
          }
        ],
        "removalCriteria": [
          "Account focuses on creating AI images of youth in clothing suited for adults",
          "Account focuses on creating AI images of youth in sexualized poses or with sexualized facial expressions"
        ]
      },
      {
        "id": "tt-imp-impersonation",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits impersonation by pretending to be someone else without clearly stating the account is fan or parody",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
        "contentTypes": [
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
            "description": "Evidence that an account is impersonating you without proper disclosure",
            "example": "URL to the impersonating account and evidence of your real identity",
            "reason": "To verify unauthorized impersonation and establish the real identity of the person being impersonated"
          }
        ],
        "removalCriteria": [
          "Account pretends to be someone else without clearly stating it's a fan account in the display name",
          "Account pretends to be someone else without clearly stating it's a parody account in the display name"
        ]
      },
      {
        "id": "tt-imp-fake-person",
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
            "description": "Evidence that an account is using fake identity or pretending to be a non-existent person/organization",
            "example": "Account URL and evidence showing the deceptive nature of the fake identity",
            "reason": "To identify accounts created with fake identities intended to mislead users"
          }
        ],
        "removalCriteria": [
          "Account pretends to be a fake person with intent to mislead",
          "Account pretends to be a fake organization with intent to mislead"
        ]
      },
      {
        "id": "tt-imp-hacked-materials",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits distribution of hacked materials when this poses a significant risk of harm",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm. Note that we may allow limited discussion or distribution of hacked materials if there's a clear public interest and the content follows journalistic best practices",
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
            "description": "Evidence that content was obtained through hacking and poses significant harm risk",
            "example": "URL to the content and evidence showing it was obtained without authorization",
            "reason": "To verify unauthorized access and assess potential for significant harm"
          }
        ],
        "removalCriteria": [
          "Content consists of hacked materials that pose a significant risk of harm",
          "Materials were obtained through unauthorized access and distribution causes harm"
        ]
      },
      {
        "id": "tt-imp-ip-violation",
        "reference": "Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates someone else's intellectual property rights",
        "quote": "We don't allow content that violates someone else's intellectual property (IP) rights.",
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
            "description": "Evidence of intellectual property ownership and unauthorized use",
            "example": "Copyright registration, original creation evidence, and URL to infringing content",
            "reason": "To establish ownership rights and verify unauthorized use of protected content"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content violates someone else's trademark rights",
          "Content violates other intellectual property rights"
        ]
      },
      {
        "id": "tt-imp-misleading-public-figures",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-generated or edited content that misleads about public figures' actions, statements, or positions",
        "quote": "A public figure being degraded, harassed, or linked to criminal behavior; A public figure taking political stances, supporting products, or commenting on public issues they haven't actually addressed; A political endorsement or condemnation that never happened",
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
            "description": "Evidence that AI-generated or edited content falsely depicts a public figure",
            "example": "URL to the misleading content and evidence showing the public figure never made the depicted statements or actions",
            "reason": "To verify that content misrepresents what a public figure actually said or did"
          }
        ],
        "removalCriteria": [
          "Content shows a public figure being degraded through AI or editing",
          "Content shows a public figure being harassed through AI or editing",
          "Content falsely links a public figure to criminal behavior",
          "Content shows a public figure taking political stances they haven't actually taken",
          "Content shows a public figure supporting products they haven't actually endorsed",
          "Content shows a public figure commenting on issues they haven't actually addressed",
          "Content depicts political endorsements or condemnations that never happened"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides copyright and trademark reporting tools for intellectual property violations, with specific in-app reporting mechanisms available",
      "steps": [
        "Submit a copyright report through TikTok's in-app tools if copyright rights have been violated",
        "Submit a trademark report through TikTok's in-app tools if trademark rights have been violated",
        "Provide evidence of intellectual property ownership and unauthorized use"
      ]
    }
  }
],
};
