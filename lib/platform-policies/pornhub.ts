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
    "accessTimestamp": "2025-09-23T20:31:48.955Z",
    "policies": [
      {
        "id": "ph-tos-ncii",
        "reference": "Non-Consensual Content Policy",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word)",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
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
        "id": "ph-tos-consent-verification",
        "reference": "Rules Applicable to All Content and Uploaders",
        "summary": "Requires consent and release for every individual appearing in uploaded content",
        "quote": "you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Lack of consent from individuals appearing in content",
          "Absence of proper release documentation"
        ]
      },
      {
        "id": "ph-tos-impersonation",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits content that impersonates another person or misrepresents affiliation",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content impersonates another person",
          "Content falsely represents affiliation with another person"
        ]
      },
      {
        "id": "ph-tos-privacy-violation",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits conduct that is invasive of another's privacy",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
          "Conduct is invasive of another's privacy",
          "Content involves harassment or stalking",
          "Content is harmful, threatening, or abusive"
        ]
      },
      {
        "id": "ph-tos-copyright-infringement",
        "reference": "Copyright and Other Intellectual Property",
        "summary": "Prohibits posting copyrighted materials without proper permissions",
        "quote": "post any Content containing copyrighted materials, or materials protected by other intellectual property laws, that you do not own or for which you have not obtained all necessary written permissions and releases",
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
          "Content contains copyrighted materials without ownership",
          "Lack of necessary written permissions and releases for protected materials"
        ]
      },
      {
        "id": "ph-tos-immediate-removal",
        "reference": "Monitoring and Enforcement; Termination",
        "summary": "Provides authority to remove content and take enforcement action for violations",
        "quote": "We have the right but not the obligation to take any of the following actions, including pursuant to when we detect, or are notified of, any activity or Content uploaded to the Website that infringes applicable laws, rights of third parties, or these Terms of Service",
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
      },
      {
        "id": "ph-tos-reporting-mechanism",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Provides reporting mechanism for suspected illegal content or Terms violations",
        "quote": "If you see any Content you suspect violates applicable law, third party rights, or these Terms of Service, please report such Content to us, using the electronic form available at https://pornhub.com/content-removal, or the \"Report\" button available below each piece of content",
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
            "description": "Report using electronic form or Report button",
            "example": "Use https://pornhub.com/content-removal or click Report button below content",
            "reason": "To notify platform of suspected violations for review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content suspected of violating applicable law",
          "Content suspected of violating third party rights",
          "Content suspected of violating Terms of Service"
        ]
      }
    ],
    "appealProcess": {
      "url": "dsa@pornhub.com",
      "summary": "Users may lodge complaints against content removal decisions within 6 months via email with detailed information and justification",
      "steps": [
        "Email dsa@pornhub.com from the email associated with your account within 6 months of the decision",
        "Include as much information as possible to allow investigation of your complaint",
        "Provide explanation of reasons why you believe your complaint is justified",
        "Platform will handle complaints in a timely, non-discriminatory, diligent, and objective manner",
        "Platform may reverse previous decisions if complaint demonstrates the decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T20:31:48.955Z",
    "policies": [
      {
        "id": "ph-pp-content-removal",
        "reference": "Section 6 - Disclosure of Your Personal Information",
        "summary": "Prohibits sharing of personal information without consent and provides mechanisms for content removal",
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
          "Content shared without consent",
          "Violation of privacy rights",
          "Illegal activity detected"
        ]
      },
      {
        "id": "ph-pp-user-contributions",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Warns users that content they upload becomes publicly available and advises caution in sharing personal information",
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
        "removalCriteria": [
          "User voluntarily posted content",
          "Content made publicly available through user contributions"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their accounts and associated content at any time",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you. If you later choose to have an account with us, you will have to sign up for a new account as none of the information you previously provided or saved within your account will have been saved.",
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
          "User requests account deletion",
          "Not prohibited by law or court order"
        ]
      },
      {
        "id": "ph-pp-user-content-deletion",
        "reference": "Section 8 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their uploaded content and personal information through account settings",
        "quote": "You may use your account settings to delete your user contributions and audio/video information.",
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
          "User requests content deletion through account settings"
        ]
      },
      {
        "id": "ph-pp-data-deletion-rights",
        "reference": "Section 18 - Your Rights Related to Your Personal Information",
        "summary": "Provides users with the right to request deletion of their personal data",
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
            "description": "Response time for data deletion requests"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Identity verification to confirm right to request deletion",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate information in systems"
          }
        ],
        "removalCriteria": [
          "Valid identity verification provided",
          "Request complies with applicable legal requirements"
        ]
      },
      {
        "id": "ph-pp-minor-protection",
        "reference": "Section 2 - The Data We Process About You",
        "summary": "Prohibits minors from using the platform and requires deletion of any minor's personal information",
        "quote": "Pornhub prohibits minors from using the platform. Pornhub is forbidden for persons under the age of 18 and the applicable age of majority in the jurisdiction from which Pornhub is accessed. We do not knowingly process personal information from minors. If you are the parent or legal guardian of a minor who has provided us with personal information, then please contact us at support@pornhub.com to have that minor's personal information deleted.",
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
            "description": "Proof of parental or legal guardian status",
            "example": "Documentation showing relationship to minor",
            "reason": "To verify authority to request deletion of minor's information"
          }
        ],
        "removalCriteria": [
          "Content involves a minor under 18",
          "Request made by parent or legal guardian",
          "Personal information of minor identified"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:support@pornhub.com",
      "summary": "Users can contact support to exercise their rights including rectification, objection, and restriction of processing",
      "steps": [
        "Email support@pornhub.com with your request",
        "Provide identity verification information (username and email address)",
        "Platform has one month to respond to the request",
        "Additional information may be required to verify identity or authorization"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T20:31:48.955Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law prohibiting nonconsensual intimate visual depictions of individuals, both authentic and computer-generated, requiring platforms to implement notice-and-removal processes.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T20:31:48.955Z",
    "policies": [
      {
        "id": "take-it-down-authentic-adults",
        "reference": "Section 2(h)(2)(A)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causing harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is not a minor if— (i) the intimate visual depiction was obtained or created under circumstances in which the person knew or reasonably should have known the identifiable individual had a reasonable expectation of privacy; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the intimate visual depiction— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
          "Intimate visual depiction obtained or created under circumstances with reasonable expectation of privacy",
          "Content was not voluntarily exposed in public or commercial setting",
          "Content is not a matter of public concern",
          "Publication intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-authentic-minors",
        "reference": "Section 2(h)(2)(B)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
          "Intimate visual depiction of a minor",
          "Intent to abuse, humiliate, harass, or degrade the minor",
          "Intent to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-digital-forgery-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causing harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
          "Digital forgery published without consent of the individual",
          "Content was not voluntarily exposed in public or commercial setting",
          "Content is not a matter of public concern",
          "Publication intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-digital-forgery-minors",
        "reference": "Section 2(h)(3)(B)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
          "Digital forgery of a minor",
          "Intent to abuse, humiliate, harass, or degrade the minor",
          "Intent to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-threats-authentic",
        "reference": "Section 2(h)(6)(A)",
        "summary": "Prohibits intentionally threatening to publish authentic intimate visual depictions for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (2) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be punished as provided in paragraph (4).",
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
          "Intentional threat to publish authentic intimate visual depictions",
          "Purpose of intimidation, coercion, extortion, or creating mental distress"
        ]
      },
      {
        "id": "take-it-down-threats-digital-forgery",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to publish digital forgeries (deepfakes) for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both. Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
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
          "Intentional threat to publish digital forgeries",
          "Purpose of intimidation, coercion, extortion, or creating mental distress"
        ]
      },
      {
        "id": "take-it-down-platform-removal-process",
        "reference": "Section 3(a)(1)",
        "summary": "Requires covered platforms to establish a notice and removal process for nonconsensual intimate visual depictions within one year",
        "quote": "Not later than 1 year after the date of enactment of this Act, a covered platform shall establish a process whereby an identifiable individual (or an authorized person acting on behalf of such individual) may— (i) notify the covered platform of an intimate visual depiction published on the covered platform that— (I) includes a depiction of the identifiable individual; and (II) was published without the consent of the identifiable individual; and (ii) submit a request for the covered platform to remove such intimate visual depiction.",
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
            "description": "Physical or electronic signature of the individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify identity and authorization for the removal request"
          },
          {
            "description": "Identification and location information for the intimate visual depiction",
            "example": "URL or specific location of the content on the platform",
            "reason": "To enable the platform to locate and identify the specific content"
          },
          {
            "description": "Good faith statement that the content is nonconsensual",
            "example": "Brief statement explaining why the content was published without consent",
            "reason": "To establish that the content violates the nonconsensual sharing prohibition"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address or phone number",
            "reason": "To enable platform communication regarding the removal request"
          }
        ],
        "removalCriteria": [
          "Content includes depiction of the identifiable individual",
          "Content was published without consent of the identifiable individual",
          "Valid removal request submitted through established process"
        ]
      },
      {
        "id": "take-it-down-platform-removal-timeframe",
        "reference": "Section 3(a)(3)",
        "summary": "Requires covered platforms to remove nonconsensual intimate visual depictions and identical copies within 48 hours of receiving a valid removal request",
        "quote": "Upon receiving a valid removal request from an identifiable individual (or an authorized person acting on behalf of such individual) using the process described in paragraph (1)(A)(ii), a covered platform shall, as soon as possible, but not later than 48 hours after receiving such request— (A) remove the intimate visual depiction; and (B) make reasonable efforts to identify and remove any known identical copies of such depiction.",
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
            "description": "Platform must remove content as soon as possible but not later than 48 hours after receiving valid removal request"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Valid removal request received through established process",
          "Content identified as nonconsensual intimate visual depiction",
          "Platform must also remove known identical copies"
        ]
      },
      {
        "id": "take-it-down-platform-notice-requirement",
        "reference": "Section 3(a)(2)",
        "summary": "Requires covered platforms to provide clear and conspicuous notice of their removal process in plain language",
        "quote": "A covered platform shall provide on the platform a clear and conspicuous notice, which may be provided through a clear and conspicuous link to another web page or disclosure, of the notice and removal process established under paragraph (1)(A) that— (A) is easy to read and in plain language; and (B) provides information regarding the responsibilities of the covered platform under this section, including a description of how an individual can submit a notification and request for removal.",
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
          "Notice must be clear and conspicuous on the platform",
          "Notice must be in plain language and easy to read",
          "Notice must describe platform responsibilities and removal process"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
