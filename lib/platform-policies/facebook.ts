import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T15:05:27.622Z",
    "policies": [
      {
        "id": "fb-ncii-policy",
        "reference": "CS-NCSII",
        "summary": "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content.",
        "quote": "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content.",
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
        "timeframes": {
          "response": {
            "value": 48,
            "unit": "hours",
            "description": "Priority review for severe harms like NCII"
          },
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Mandated removal under TAKE IT DOWN Act"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the infringing content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement made in good faith that the content is non-consensual",
            "reason": "To establish that consent was not given for sharing"
          },
          {
            "description": "Information to identify the victim and locate the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity",
          "Image/video shared without the consent of the depicted individual",
          "The content is an authentic or AI-generated intimate depiction",
          "Subject is identifiable"
        ]
      },
      {
        "id": "fb-sextortion-policy",
        "reference": "CS-SEXTORTION",
        "summary": "Prohibits threatening to share intimate images for purposes of extortion or coercion (sextortion).",
        "quote": "We prohibit threatening to share intimate images for purposes of extortion or coercion (sextortion).",
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
            "description": "URL(s) of threatening content or messages",
            "reason": "To identify and review the threatening behavior"
          },
          {
            "description": "Description of threats or demands made",
            "reason": "To understand the nature and severity of the extortion"
          },
          {
            "description": "Evidence of the intimate content being used for the threat",
            "reason": "To establish the connection between the threat and the intimate material"
          }
        ],
        "removalCriteria": [
          "Evidence of threats to share intimate content",
          "Content is being used for extortion or harassment",
          "Subject identifies themselves as the victim"
        ]
      },
      {
        "id": "fb-bullying-policy",
        "reference": "CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We prohibit bullying and harassment. Sharing intimate images without consent is considered a severe form of bullying.",
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
            "description": "URL(s) of the content",
            "reason": "To locate and review the harassing material"
          },
          {
            "description": "Description of how the content constitutes targeted harassment",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the victim",
            "reason": "To verify the target of harassment and process the report"
          }
        ],
        "removalCriteria": [
          "Content targets a private individual for abuse",
          "Content includes degrading or shaming material, such as non-consensual intimate imagery",
          "The behavior is unwanted and causes severe emotional distress"
        ]
      },
      {
        "id": "fb-privacy-policy",
        "reference": "CS-PRIVACY",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "We prohibit violations of privacy. Sharing intimate media of a person without their consent is a severe privacy violation.",
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
            "description": "URL(s) of the content",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of how the content violates the victim's privacy",
            "reason": "To understand the nature of the privacy violation"
          },
          {
            "description": "Evidence that the media was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains PII used maliciously or for harassment"
        ]
      },
      {
        "id": "fb-impersonation-policy",
        "reference": "CS-IMPERSONATION",
        "summary": "Prohibits impersonating others, including individuals and organizations, with an intent to deceive.",
        "quote": "We prohibit impersonating others, including individuals and organizations, with an intent to deceive.",
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
            "description": "URL of the impersonating profile or page",
            "reason": "To identify the impersonating account"
          },
          {
            "description": "Proof of identity",
            "example": "Government ID for a person, business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of the impersonation",
            "reason": "To understand how the account is misrepresenting your identity"
          }
        ],
        "removalCriteria": [
          "Account uses name, photos, or other identifying information without authorization",
          "The profile or page is intended to mislead or deceive others",
          "The account is not clearly marked as a parody or fan account"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025 with stronger language around platform misuse and AI content licensing.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-23T15:05:27.622Z",
    "policies": [
      {
        "id": "fb-tos-intellectual-property",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations.",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "description": "Evidence of intellectual property ownership",
            "example": "Copyright registration or proof of original creation",
            "reason": "To establish legal rights to the content"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "Direct links to posts containing the unauthorized content",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes someone else's intellectual property rights",
          "Content violates copyright or trademark protections",
          "No applicable legal exception or limitation exists"
        ]
      },
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share.",
        "quote": "That you do not own or have the necessary rights to share.",
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
            "description": "Proof of ownership or rights to the content",
            "example": "Evidence that you created or own the content being shared",
            "reason": "To establish that the person sharing lacks necessary rights"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "example": "Direct links to posts containing your content",
            "reason": "To identify the specific content shared without permission"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without necessary rights or permissions"
        ]
      },
      {
        "id": "fb-tos-content-deletion",
        "reference": "Section 3.3.3",
        "summary": "Provides users the right to delete individual content they share, post, and upload at any time, with deletion process taking up to 90 days.",
        "quote": "You can delete individual content you share, post, and upload at any time. In addition, all content posted to your personal account will be deleted if you delete your account. It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request.",
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
            "description": "Maximum time to complete content deletion process"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request",
            "example": "Request to delete specific content or account",
            "reason": "To initiate the deletion process"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content",
          "User deletes their account"
        ]
      },
      {
        "id": "fb-tos-account-termination",
        "reference": "Section 4.2",
        "summary": "Allows Facebook to suspend or permanently disable accounts for clear, serious, or repeated breaches of Terms or Policies, including intellectual property infringement.",
        "quote": "We may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account. We may also disable or delete your account if you repeatedly infringe other people's intellectual property rights or where we are required to do so for legal reasons.",
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
            "description": "Evidence of repeated intellectual property infringement",
            "example": "Documentation of multiple copyright or other IP violations",
            "reason": "To establish pattern of infringement warranting account termination"
          }
        ],
        "removalCriteria": [
          "Clear, serious, or repeated breaches of Terms or Policies",
          "Repeated infringement of other people's intellectual property rights",
          "Legal requirements mandate account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review of content removal and account actions, unless doing so may expose Facebook or others to legal liability, harm the community, compromise system integrity, face technical limitations, or be prohibited for legal reasons.",
      "steps": [
        "Facebook will notify users when content is removed for Community Standards violations",
        "Users can request another review of the removal decision",
        "Review options are available unless the violation is serious/repeated or other exceptions apply",
        "Users can request review of account suspension or termination decisions",
        "Contact Facebook if you believe your account was disabled by mistake"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across all Meta platforms. Effective June 16, 2025 with expanded AI data usage disclosures.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T15:05:27.622Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - How do we use your information?",
        "summary": "Prohibits harmful or unlawful behavior and removes content reported for violations",
        "quote": "To promote safety, security and integrity: We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Report the content to Meta through their reporting mechanisms",
            "example": "Use the reporting tools available on Facebook or Instagram",
            "reason": "Required for Meta to review and potentially remove harmful content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content threatens the safety, security or integrity of users"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - How do we respond to legal requests, comply with applicable law and prevent harm?",
        "summary": "Responds to legal requests and takes action to prevent harm and promote safety",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. In accordance with applicable law. To promote the safety, security and integrity of Meta Products, users, employees, property and the public.",
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
            "description": "Valid legal request such as search warrant, court order, production order or subpoena",
            "example": "Court order requesting removal of specific content",
            "reason": "Required by law for Meta to take action on legal requests"
          }
        ],
        "removalCriteria": [
          "Valid legal request from civil litigants, law enforcement or government authorities",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity of Meta Products and users"
        ]
      },
      {
        "id": "meta-pp-information-management",
        "reference": "Section 6 - How can you manage or delete your information and exercise your rights?",
        "summary": "Provides tools for users to view, manage, download and delete their information",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
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
            "description": "Access to your Meta account settings or Help Centers",
            "example": "Log into Facebook or Instagram settings to manage your information",
            "reason": "Required to access Meta's information management tools"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own information",
          "User exercises privacy rights under applicable laws"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail for questions, complaints or requests regarding their information, and may also contact local Data Protection Authorities in some jurisdictions",
      "steps": [
        "Contact Meta online through their support system",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, contact local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T15:05:27.622Z",
    "policies": [
      {
        "id": "fb-content-reporting-policy",
        "reference": "FB-HC-CONTENT-REPORTING",
        "summary": "Provides a reporting mechanism for abusive content or spam on Facebook using the Report link near the content itself.",
        "quote": "The best way to report abusive content or spam on Facebook is by using the Report link near the content itself.",
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
            "description": "Access to the content via Report link",
            "reason": "To use Facebook's primary reporting mechanism for abusive content"
          }
        ],
        "removalCriteria": [
          "Content is identified as abusive",
          "Content is identified as spam"
        ]
      },
      {
        "id": "fb-blocked-user-reporting-policy",
        "reference": "FB-HC-BLOCKED-REPORTING",
        "summary": "Provides alternative reporting options for users who don't have an account or can't see the content they want to report.",
        "quote": "If you don't have an account or can't see the content you'd like to report (example: someone blocked you), learn what you can do.",
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
            "description": "Alternative identification of the content to be reported",
            "reason": "To report content when standard reporting mechanisms are unavailable due to blocking or lack of account access"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook policies",
          "User cannot access standard reporting due to being blocked or lacking an account"
        ]
      },
      {
        "id": "fb-child-exploitation-reporting-policy",
        "reference": "FB-HC-CHILD-EXPLOITATION",
        "summary": "Provides reporting mechanism for images of children being physically abused or sexually exploited on Facebook.",
        "quote": "If you see images of a child being physically abused or sexually exploited on Facebook",
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
            "description": "Identification of content showing child abuse or exploitation",
            "reason": "To report illegal content involving minors for immediate action"
          }
        ],
        "removalCriteria": [
          "Images show a child being physically abused",
          "Images show a child being sexually exploited"
        ]
      },
      {
        "id": "fb-human-trafficking-reporting-policy",
        "reference": "FB-HC-HUMAN-TRAFFICKING",
        "summary": "Provides reporting mechanism for content related to human trafficking on Facebook.",
        "quote": "What should I do if someone posts something on Facebook related to human trafficking?",
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
            "description": "Content that appears to be related to human trafficking",
            "reason": "To report potentially illegal trafficking-related content for investigation"
          }
        ],
        "removalCriteria": [
          "Content is related to human trafficking"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758639927622-0",
    "reference": "META-NCII",
    "title": "Meta Non-Consensual Intimate Images Policy",
    "summary": "Specific policy addressing non-consensual intimate imagery (NCII) prevention and removal, including StopNCII.org integration and proactive detection tools.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T15:05:27.622Z",
    "policies": [
      {
        "id": "meta-adult-nudity-removal",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic/digital imagery of adult nudity including visible genitalia, anuses, close-ups of buttocks, and visible female nipples except in breastfeeding or protest contexts",
        "quote": "Photorealistic/digital imagery of adult nudity, if it depicts: Visible genitalia (including when obscured by pubic hair or digital overlays), Visible anuses and/or close-ups of visible buttocks, Visible female nipples, except in a breastfeeding, or act of protest context",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content depicts visible genitalia including when obscured by pubic hair or digital overlays",
          "Content shows visible anuses and/or close-ups of visible buttocks",
          "Content displays visible female nipples except in breastfeeding or act of protest context"
        ]
      },
      {
        "id": "meta-voyeuristic-content",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic/digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person depicted",
        "quote": "Photorealistic/ digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person(s) depicted in them",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Video focuses on crotch, female breasts, or buttocks",
          "Content was recorded without the awareness of the person depicted"
        ]
      },
      {
        "id": "meta-sexual-activity-explicit",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic/digital imagery of explicit sexual activity including sexual intercourse, oral sex, and explicit stimulation when genitals or contact is visible",
        "quote": "Explicit sexual activity or stimulation: Explicit sexual intercourse or oral sex, as indicated by a person's mouth or genitals entering or in contact with another person's genitals or anus, or genitals placed upon or inserted into a sex toy, when at least one person's genitals or anus is visible. Explicit stimulation of a person's genitals or anus, as indicated by stimulation, or the insertion of sex toys into the person's genitals or anus, when the contact with the genitals or anus is directly visible",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content shows explicit sexual intercourse or oral sex with visible genitals or anus",
          "Content depicts explicit stimulation of genitals or anus with direct visibility of contact",
          "Content shows genitals placed upon or inserted into sex toys with visibility"
        ]
      },
      {
        "id": "meta-sexual-activity-implicit",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic/digital imagery of implicit sexual activity including sexual contact and stimulation even when genitals or contact is not directly visible",
        "quote": "Implicit sexual activity or stimulation: Implicit sexual intercourse or oral sex, as indicated by a person's mouth or genitals entering or in contact with another person's genitals or anus, when the genitals or anus and/or the entry or contact is not directly visible. Implicit stimulation of a person's genitals or anus, as indicated by stimulation, or the placement of sex toys above or insertion of sex toys into the person's genitals or anus, or genitals placed upon or inserted into a sex toy, when the genitals or anus, stimulation, placement, and/or insertion is not directly visible",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content implies sexual intercourse or oral sex even when not directly visible",
          "Content suggests stimulation of genitals or anus without direct visibility",
          "Content shows impending sexual activity with positions suggesting imminent contact"
        ]
      },
      {
        "id": "meta-other-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits other sexual activity including erections, sexual by-products, sex toys in mouth, nipple stimulation, and breast squeezing outside breastfeeding contexts",
        "quote": "Other sexual activity or stimulation: Erections, Presence of by-products of sexual activity, Sex toys placed upon or inserted into mouth, Stimulation of visible human nipples, Squeezing female breasts, defined as a grabbing motion with curved fingers that shows both marks and clear shape change of the breasts. We allow squeezing in breastfeeding contexts.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content shows erections",
          "Content displays by-products of sexual activity",
          "Content depicts sex toys placed in mouth",
          "Content shows stimulation of visible nipples",
          "Content displays breast squeezing outside of breastfeeding contexts"
        ]
      },
      {
        "id": "meta-age-restricted-nudity-art",
        "reference": "Age-Restricted Content",
        "summary": "Restricts real world art depicting visible genitalia, anuses, buttocks or female nipples to users 18 and older with sensitive content labels when nudity is the focus",
        "quote": "Real world art of visible genitalia (including genitalia covered by digital overlay or obscurement and genitalia obscured by pubic hair only), visible anuses, close-ups of visible buttocks or visible female nipples, where the nudity is the focus of the image and not in a medical or health context",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content is real world art depicting visible genitalia, anuses, buttocks or nipples",
          "Nudity is the focus of the image",
          "Content is not in a medical or health context"
        ]
      },
      {
        "id": "meta-age-restricted-near-nudity",
        "reference": "Age-Restricted Content",
        "summary": "Restricts photorealistic/digital imagery depicting near nudity covered only by digital overlay or opaque objects to users 18 and older",
        "quote": "Photorealistic/digital imagery depicting near nudity such as nudity covered only by digital overlay or an opaque object and certain instances of nudity obscured by see-through clothing",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content depicts near nudity covered only by digital overlay or opaque object",
          "Content shows nudity obscured by see-through clothing"
        ]
      },
      {
        "id": "meta-age-restricted-body-focus",
        "reference": "Age-Restricted Content",
        "summary": "Restricts photorealistic/digital imagery where crotch, buttock or female breasts are the focus of the image to users 18 and older",
        "quote": "Photorealistic/digital imagery of persons where crotch, buttock or female breast(s) are the focus of the image",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the post, comment, story, message, or profile",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Image focuses primarily on crotch, buttock or female breasts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content decisions through Meta's Support Inbox system with multiple review opportunities",
      "steps": [
        "After content is actioned, user receives notification of the decision",
        "User can access detailed information about the decision in the Support Inbox",
        "If user disagrees with decision, they can request another review through the appeal option",
        "User can provide additional context or information during the appeal process",
        "Meta conducts a re-review of the content and decision",
        "Final response is sent to user through the Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758639927622-1",
    "reference": "META-COPYRIGHT",
    "title": "Meta Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA compliance, reporting procedures, and appeal processes for intellectual property violations.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T15:05:27.622Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits posting content that infringes someone else's copyrighted work without permission, including photos, videos, and other creative works",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Complete copyright claim including identification of copyrighted work",
            "example": "Description of the copyrighted work and location of infringing content",
            "reason": "Required to establish ownership and identify specific infringement"
          },
          {
            "description": "Proof of copyright ownership or authorization to act on behalf of owner",
            "example": "Documentation showing you created the work or are authorized representative",
            "reason": "Only copyright owner or authorized representative may file reports"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was posted without permission from copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-copyright-reporting-eligibility",
        "reference": "Reporting copyright infringement",
        "summary": "Restricts copyright infringement reporting to copyright owners or their authorized representatives only",
        "quote": "Only the copyright owner or their authorized representative may file a report of copyright infringement. If you believe something on Facebook or Instagram infringes someone else's copyright, you may want to let the rights owner know.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Authorization to act on behalf of copyright owner if not the owner",
            "example": "Legal documentation or written permission from copyright owner",
            "reason": "Platform only accepts reports from owners or authorized representatives"
          }
        ],
        "removalCriteria": [
          "Reporter must be copyright owner or authorized representative",
          "Content must infringe copyrighted work owned by reporter or their client"
        ]
      },
      {
        "id": "meta-repeat-infringer-policy",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeatedly posting content that infringes intellectual property rights and may result in account restrictions or removal",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Multiple instances of intellectual property infringement",
            "example": "Pattern of posting copyrighted content without permission",
            "reason": "Policy applies to repeat violations rather than single incidents"
          }
        ],
        "removalCriteria": [
          "User repeatedly posts content that infringes intellectual property rights",
          "Multiple copyright or trademark violations have been reported and confirmed"
        ]
      },
      {
        "id": "meta-fraudulent-reporting-consequences",
        "reference": "Reporting copyright infringement",
        "summary": "Prohibits submitting misleading or fraudulent copyright infringement reports and may result in account termination or legal liability",
        "quote": "Please note that submitting a report of intellectual property infringement is a serious matter with potential legal consequences. Intentionally submitting misleading or otherwise fraudulent reports of copyright or trademark infringement may lead to Facebook taking action, including termination of your account. For copyright, it's important to note that intentionally submitting a misleading or fraudulent report may also lead to liability for damages under section 512(f) of the United States Digital Millennium Copyright Act (DMCA) or similar laws in other countries.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Good faith belief that reported content infringes copyright",
            "example": "Genuine belief based on facts that content violates your rights",
            "reason": "False reports may result in legal liability and account termination"
          }
        ],
        "removalCriteria": [
          "Report must be submitted in good faith",
          "Report must not be intentionally misleading or fraudulent",
          "Reporter must have genuine belief that content infringes their rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following instructions provided in removal notifications, including DMCA counter-notifications for copyright claims",
      "steps": [
        "Receive notification from Meta about content removal with details of the report",
        "Follow appeal instructions provided in the removal notification message",
        "For copyright claims, submit DMCA counter-notification if applicable",
        "Contact rights owner directly to try to resolve the issue",
        "Wait for review of appeal or counter-notification"
      ]
    }
  },
  {
    "id": "facebook-new-1758639927622-2",
    "reference": "META-APPEALS",
    "title": "Meta Content Appeals Process",
    "summary": "Detailed appeals process for content removal decisions, including DMCA counter-notifications and community standards appeals.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T15:05:27.622Z",
    "policies": [],
    "appealProcess": {
      "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
      "summary": "Meta provides appeals for the vast majority of violation types on Facebook and Instagram. When content is removed for policy violations, users are notified and given the option to request another review. The content undergoes a multi-stage review process with human reviewers and technology.",
      "steps": [
        "User receives notification that their content has been removed or covered with a warning",
        "User is given the option to accept the decision or disagree and request another review",
        "If user chooses to disagree, the content is resubmitted for another review (content remains hidden during review)",
        "If the reviewer accepts the original decision, the content remains removed",
        "If the reviewer disagrees with the initial review, the content goes to another reviewer",
        "The second reviewer's decision determines whether the content should be restored or remain removed"
      ]
    }
  }
],
};
