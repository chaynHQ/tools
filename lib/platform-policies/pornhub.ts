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
    "accessTimestamp": "2025-09-23T20:33:00.845Z",
    "policies": [
      {
        "id": "ph-tos-ncii-prohibition",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits posting non-consensual intimate content including revenge porn",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content depicts non-consensual sexual activity",
          "Content constitutes revenge porn",
          "Content involves blackmail or intimidation"
        ]
      },
      {
        "id": "ph-tos-blackmail-intimidation",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits blackmail and intimidation content",
        "quote": "the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves blackmail",
          "Content involves intimidation",
          "Content constitutes revenge porn"
        ]
      },
      {
        "id": "ph-tos-impersonation-prohibition",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits impersonation and false representation of identity",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with a person"
        ]
      },
      {
        "id": "ph-tos-harassment-prohibition",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits harmful, threatening, abusive, and harassing conduct",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Conduct is harmful, threatening, or abusive",
          "Conduct involves harassment or stalking",
          "Conduct is invasive of another's privacy"
        ]
      },
      {
        "id": "ph-tos-privacy-invasion",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits content that invades another person's privacy",
        "quote": "engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is invasive of another's privacy"
        ]
      },
      {
        "id": "ph-tos-copyright-infringement",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits posting copyrighted materials without permission",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains copyrighted materials without ownership",
          "Content lacks necessary written permissions and releases"
        ]
      },
      {
        "id": "ph-tos-consent-requirement",
        "reference": "Rules Applicable to All Content and Uploaders",
        "summary": "Requires consent and release for every individual appearing in content",
        "quote": "you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Lack of consent from individuals appearing in content",
          "Absence of proper release for content use"
        ]
      },
      {
        "id": "ph-tos-unauthorized-access",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits unauthorized access to accounts and personal data collection",
        "quote": "collect or store personal data about anyone; obtain or attempt to access or otherwise obtain any Content or information through any means not intentionally made available or provided for through this Website",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Unauthorized collection or storage of personal data",
          "Unauthorized access to content or information"
        ]
      },
      {
        "id": "ph-tos-content-removal-authority",
        "reference": "Monitoring and Enforcement; Termination",
        "summary": "Platform reserves right to remove content and restrict access for policy violations",
        "quote": "We have the right but not the obligation to take any of the following actions, including pursuant to when we detect, or are notified of, any activity or Content uploaded to the Website that infringes applicable laws, rights of third parties, or these Terms of Service... Restrict the visibility or other accessibility of Content... remove or refuse to post any Content you submit or contribute to this Website for any or no reason in our sole discretion",
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
          "Content infringes applicable laws",
          "Content violates rights of third parties",
          "Content violates Terms of Service"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email or webform, with review process that may reverse decisions if unjustified",
      "steps": [
        "Submit complaint within 6 months of notification of decision",
        "Email dsa@pornhub.com from account email or use webform at pornhub.com/support",
        "Include detailed information to allow investigation and explanation of reasons",
        "Platform reviews complaint in timely, non-discriminatory, diligent and objective manner",
        "Platform may reverse decision if complaint demonstrates content did not violate policies or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T20:33:00.845Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Prohibits sharing of personal information and provides mechanisms for content removal through DMCA and content removal processes",
        "quote": "We may disclose your information to third parties for the above purposes where necessary to comply with our legal obligations, to perform a task in the public interest (where the public interest is laid down by applicable law), or under our legitimate interests and the interests of the public, including as part of investigations or regulatory enquiries to detect, investigate and prosecute illegal activity.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that violates legal obligations",
          "Content that involves illegal activity",
          "Content that violates public interest"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Warns users that content they post becomes publicly available and cannot be controlled once shared",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their accounts and user contributions including audio/video content",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User request for account deletion",
          "User request for content deletion"
        ]
      },
      {
        "id": "ph-pp-biometric-consent",
        "reference": "Section 11 - Biometric Information",
        "summary": "Requires consent for biometric information processing and allows withdrawal of consent",
        "quote": "You will be asked to provide your consent to biometric information processing which you may withdraw at any time. Withdrawing your consent will not affect the lawfulness of any collection, use, processing, or disclosure that occurred prior to the withdrawal.",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Withdrawal of consent for biometric processing"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Provides users with the right to delete/erase their personal data",
        "quote": "Right to be forgotten: you have the right to delete/erase your personal data",
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
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "months",
            "description": "One month to respond to data deletion requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification to ensure right to access or delete information",
            "example": "Username and email address used to create account",
            "reason": "Security measure to ensure personal data is not disclosed to unauthorized persons"
          }
        ],
        "removalCriteria": [
          "User request for data deletion",
          "Verified identity of data subject"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support for data-related requests and appeals, with specific processes for CCPA requests and data subject rights",
      "steps": [
        "Contact support@pornhub.com with request details",
        "Provide identity verification information (username, email address)",
        "For CCPA requests, use email subject line 'CCPA Request'",
        "Verify access to account and/or email used for registration",
        "Wait up to one month for response to data subject requests"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T20:33:00.845Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law prohibiting nonconsensual intimate visual depictions of individuals, both authentic and computer-generated, with platform takedown requirements.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146",
    "accessTimestamp": "2025-09-23T20:33:00.845Z",
    "policies": [
      {
        "id": "take-it-down-act-ncii-adults",
        "reference": "S.146 - Adult Intimate Visual Depictions",
        "summary": "Prohibits the nonconsensual online publication of intimate visual depictions of adults where publication is intended to cause or does cause harm to the subject, and where the depiction was published without the subject's consent or was created or obtained under circumstances where the adult had a reasonable expectation of privacy",
        "quote": "the bill prohibits the online publication of intimate visual depictions of an adult subject where publication is intended to cause or does cause harm to the subject, and where the depiction was published without the subject's consent or, in the case of an authentic depiction, was created or obtained under circumstances where the adult had a reasonable expectation of privacy",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Publication is intended to cause or does cause harm to the subject",
          "Depiction was published without the subject's consent",
          "For authentic depictions, was created or obtained under circumstances where the adult had a reasonable expectation of privacy"
        ]
      },
      {
        "id": "take-it-down-act-ncii-minors",
        "reference": "S.146 - Minor Intimate Visual Depictions",
        "summary": "Prohibits the online publication of intimate visual depictions of minors where publication is intended to abuse or harass the minor or to arouse or gratify the sexual desire of any person",
        "quote": "a minor subject where publication is intended to abuse or harass the minor or to arouse or gratify the sexual desire of any person",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Publication is intended to abuse or harass the minor",
          "Publication is intended to arouse or gratify the sexual desire of any person"
        ]
      },
      {
        "id": "take-it-down-act-deepfakes",
        "reference": "S.146 - Computer-Generated Depictions",
        "summary": "Prohibits the nonconsensual online publication of intimate visual depictions that are computer-generated, including deepfakes and other technologically created content",
        "quote": "This bill generally prohibits the nonconsensual online publication of intimate visual depictions of individuals, both authentic and computer-generated",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Depiction is computer-generated",
          "Publication is nonconsensual"
        ]
      },
      {
        "id": "take-it-down-act-threats",
        "reference": "S.146 - Threats to Publish",
        "summary": "Prohibits threats to publish intimate visual depictions of a subject",
        "quote": "Threats to publish intimate visual depictions of a subject are similarly prohibited under the bill and subject to criminal penalties",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Communication constitutes a threat to publish intimate visual depictions"
        ]
      },
      {
        "id": "take-it-down-act-platform-removal",
        "reference": "S.146 - Platform Removal Requirements",
        "summary": "Requires covered platforms to establish a process for subjects to notify the platform of intimate visual depictions published without consent and to remove such content within 48 hours of notification",
        "quote": "covered platforms must establish a process through which subjects of intimate visual depictions may notify the platform of the existence of, and request removal of, an intimate visual depiction including the subject that was published without the subject's consent. Covered platforms must remove such depictions within 48 hours of notification",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Covered platforms must remove such depictions within 48 hours of notification"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Notification that the intimate visual depiction was published without consent",
            "example": "Report identifying the specific content and confirming lack of consent",
            "reason": "Required for platforms to identify and verify removal requests under the Act"
          }
        ],
        "removalCriteria": [
          "Content is an intimate visual depiction",
          "Depiction was published without the subject's consent",
          "Proper notification has been provided to the platform"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
