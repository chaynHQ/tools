import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
  {
    "id": "ph-terms-of-service",
    "reference": "PH-TOS",
    "title": "Pornhub Terms of Service",
    "summary": "Legal terms governing the use of Pornhub, including content ownership, security responsibilities, and prohibited behavior.",
    "url": "https://www.pornhub.com/information/terms",
    "accessTimestamp": "2025-09-23T16:55:05.753Z",
    "policies": [
      {
        "id": "ph-prohibited-uses-privacy",
        "reference": "PH-TOS-PROHIBITED-USES",
        "summary": "Prohibits collecting or storing personal data about anyone and posting content that violates privacy or contains personally identifiable information without consent.",
        "quote": "You agree that you will not use or attempt to use any method, device, software, or routine to harm others or interfere with the functioning of this Website or use and/or monitor any information in or related to this Website for any unauthorized purpose... collect or store personal data about anyone... post any Content that contains falsehoods or misrepresentations that could damage this Website or any third party... post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report privacy violations and provide details of the violation"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific content that violates privacy policies"
          }
        ],
        "removalCriteria": [
          "Content contains personal data collected or stored without authorization",
          "Content contains falsehoods or misrepresentations that could damage third parties",
          "Content impersonates another person or misrepresents affiliation"
        ]
      },
      {
        "id": "ph-harassment-threats-policy",
        "reference": "PH-TOS-PROHIBITED-USES",
        "summary": "Prohibits acting in a manner that negatively affects other users, including harmful, threatening, abusive, harassing, stalking, or invasive conduct.",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report harassing or threatening behavior"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific harassing content"
          }
        ],
        "removalCriteria": [
          "Content involves harmful, threatening, or abusive conduct toward users",
          "Content includes harassing, stalking, or privacy-invasive behavior",
          "Content is inflammatory, intimidating, or encourages violence"
        ]
      },
      {
        "id": "ph-non-consensual-content-policy",
        "reference": "PH-TOS-PROHIBITED-USES",
        "summary": "Prohibits posting content depicting non-consensual activity, revenge content, blackmail, and intimidation.",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report non-consensual content violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific non-consensual content"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual activity",
          "Content constitutes revenge content",
          "Content involves blackmail or intimidation"
        ]
      },
      {
        "id": "ph-copyright-infringement-policy",
        "reference": "PH-TOS-COPYRIGHT",
        "summary": "Prohibits posting content containing copyrighted materials that you do not own or for which you have not obtained necessary permissions.",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
            "description": "File a formal DMCA Takedown Notice through the Copyright Policy process",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Provide evidence of original ownership of the content",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "Identify the specific infringing content with URLs",
            "reason": "To locate and remove the specific copyrighted material"
          }
        ],
        "removalCriteria": [
          "Content contains copyrighted materials owned by the complainant",
          "Content was posted without necessary written permissions from copyright owner",
          "Content infringes intellectual property rights"
        ]
      },
      {
        "id": "ph-impersonation-policy",
        "reference": "PH-TOS-PROHIBITED-USES",
        "summary": "Prohibits posting content that impersonates another person or falsely represents affiliation with someone.",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To formally report impersonation violations"
          },
          {
            "description": "Use the 'Report' button available below each piece of content",
            "reason": "To flag specific impersonating content"
          }
        ],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with someone",
          "Content misrepresents identity or relationship to another person"
        ]
      },
      {
        "id": "ph-account-security-policy",
        "reference": "PH-TOS-ACCOUNT-SECURITY",
        "summary": "Users are responsible for account security and must immediately report unauthorized access or security breaches.",
        "quote": "You are fully responsible for all activities that occur under your username or password. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of this Website using your username, password, or other security information. You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security by contacting us at support@pornhub.com.",
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
            "description": "Contact support@pornhub.com immediately upon discovering unauthorized access",
            "reason": "To report security breaches and initiate account recovery"
          },
          {
            "description": "Provide details of the unauthorized access or security breach",
            "reason": "To understand the scope of the compromise and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Security breach has been reported to the platform",
          "Account is being used without owner's permission"
        ]
      },
      {
        "id": "ph-content-consent-requirements",
        "reference": "PH-TOS-CONTENT-RULES",
        "summary": "Requires that uploaders obtain consent and release for every individual appearing in content and verify they are at least 18 years of age.",
        "quote": "you own the rights to use the Content on this Website and that the Content does not infringe on the rights (including intellectual property rights) of a third party and, that you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website",
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
            "description": "Report using the Content Removal Request Form at https://pornhub.com/content-removal",
            "reason": "To report content uploaded without proper consent"
          },
          {
            "description": "Provide evidence that consent was not obtained for your appearance in the content",
            "reason": "To demonstrate violation of consent requirements"
          }
        ],
        "removalCriteria": [
          "Content was uploaded without obtaining consent from individuals appearing in it",
          "Uploader does not have rights to use the content",
          "Content infringes on rights of individuals appearing in it"
        ]
      }
    ],
    "appealProcess": {
      "url": "dsa@pornhub.com",
      "summary": "Users may lodge complaints against content removal decisions within 6 months via email, with the platform handling complaints in a timely, non-discriminatory manner and potentially reversing decisions if justified.",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Platform will handle complaint in timely, non-discriminatory, diligent, and objective manner",
        "Platform may reverse previous decisions if complaint demonstrates content did not violate policies or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T16:55:05.753Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Prohibits sharing of personal information without consent and provides content removal mechanisms",
        "quote": "We may disclose your information to third parties for the above purposes where necessary to comply with our legal obligations, to perform a task in the public interest (where the public interest is laid down by applicable law), or under our legitimate interests and the interests of the public, including as part of investigations or regulatory enquiries to detect, investigate and prosecute illegal activity.",
        "contentTypes": [
          "private",
          "personal",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shared without legal basis",
          "Information disclosed without proper authorization"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Warns users that content posted becomes publicly available and cannot be controlled once shared",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content voluntarily posted by user becomes public"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their accounts and user contributions at any time",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests account deletion",
          "User requests content removal through account settings"
        ]
      },
      {
        "id": "ph-pp-biometric-consent",
        "reference": "Section 11 - Biometric Information",
        "summary": "Requires consent for biometric information processing and allows withdrawal of consent",
        "quote": "You will be asked to provide your consent to biometric information processing which you may withdraw at any time. Withdrawing your consent will not affect the lawfulness of any collection, use, processing, or disclosure that occurred prior to the withdrawal.",
        "contentTypes": [
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User withdraws consent for biometric processing"
        ]
      },
      {
        "id": "ph-pp-data-subject-rights",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Provides users with rights to access, rectify, delete, and object to processing of their personal data",
        "quote": "Subject to local law and applicable legal requirements and exemptions, you have certain rights regarding your personal data: Right of access: you have the right to receive information on the personal data we hold about you and how such personal data is used, as well as a copy of your personal data; Right to rectification: you have the right to rectify inaccurate personal data concerning you; Right to be forgotten: you have the right to delete/erase your personal data; Right to data portability: you have the right to receive the personal data provided by you in a structured, commonly used, and machine-readable format and to transmit this personal data to another data controller; Right to object: you have the right to object to the use of your personal data where such use is based on our legitimate interests or on public interests; Right to restriction of processing: you have the right in some cases, to restrict our use of your personal data",
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
          "response": {
            "value": 1,
            "unit": "month",
            "description": "Response time for data subject requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification information",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate information in systems"
          },
          {
            "description": "Account access verification",
            "example": "Verification of access to registered email account",
            "reason": "To confirm authorization to make the request"
          }
        ],
        "removalCriteria": [
          "User exercises right to be forgotten",
          "User requests data deletion",
          "User objects to data processing"
        ]
      },
      {
        "id": "ph-pp-legal-compliance",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Allows disclosure of personal information to comply with legal obligations and protect rights",
        "quote": "We access, preserve and share personal information with regulators, public authorities, law enforcement, government agencies, out-of-court dispute settlement bodies or others where we reasonably believe such disclosure is needed to: comply with any applicable law, regulation, court order, legal process, government or public authority requests; enforce applicable Terms & Conditions, including prevention of potential violations thereof; detect, prevent, or otherwise address illegal or suspected illegal activities, security, or technical issues; protect against harm to the rights, property or safety of our company, our users, our employees, or others; or to maintain and protect the security and integrity of Pornhub or infrastructure.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Legal obligation requires disclosure",
          "Court order mandates action",
          "Illegal activities detected",
          "Security threats identified",
          "User safety at risk"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise their data rights, request corrections, or file complaints. A Data Protection Officer is available for privacy-related concerns.",
      "steps": [
        "Contact support@pornhub.com with your request",
        "Provide identity verification information (username and email address)",
        "Verify access to your registered account/email",
        "Wait up to one month for response to data subject requests",
        "For privacy-specific issues, contact the Data Protection Officer at dpo@pornhub.com"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T16:55:05.753Z",
    "policies": [],
    "appealProcess": null
  }
],
};
