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
    "accessTimestamp": "2025-09-23T20:43:00.026Z",
    "policies": [
      {
        "id": "ph-tos-ncii",
        "reference": "Rules Applicable to All Content and Uploaders",
        "summary": "Prohibits non-consensual content including revenge porn, blackmail, and intimidation",
        "quote": "the Website does not permit any form of revenge porn, blackmail, or intimidation, and such violations may also be reported using the content removal link herein.",
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
          "Content constitutes revenge porn",
          "Content involves blackmail",
          "Content involves intimidation"
        ]
      },
      {
        "id": "ph-tos-prohibited-ncii",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits posting non-consensual intimate content, revenge porn, blackmail, and intimidation",
        "quote": "post any Content depicting underage sexual activity, non-consensual sexual activity, revenge porn, blackmail, intimidation, snuff, torture, death, violence, incest, racial slurs, or hate speech, (either orally or via the written word);",
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
          "Content involves blackmail",
          "Content involves intimidation"
        ]
      },
      {
        "id": "ph-tos-impersonation",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits impersonation and misrepresentation of identity or affiliation",
        "quote": "post any Content which impersonates another person or falsely states or otherwise misrepresents your affiliation with a person;",
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
          "Content falsely states or misrepresents affiliation with a person"
        ]
      },
      {
        "id": "ph-tos-harassment",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits harmful, threatening, abusive, harassing, and stalking behavior",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable;",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
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
          "Conduct is harmful, threatening, or abusive",
          "Conduct involves harassment or stalking",
          "Conduct is invasive of another's privacy"
        ]
      },
      {
        "id": "ph-tos-privacy-invasion",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits content that is invasive of another's privacy",
        "quote": "act in a manner that negatively affects other Users' ability to use this Website, including without limitation by engaging in conduct that is harmful, threatening, abusive, inflammatory, intimidating, violent or encouraging of violence to people or animals, harassing, stalking, invasive of another's privacy, or racially, ethnically, or otherwise objectionable;",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
          "Content is invasive of another's privacy"
        ]
      },
      {
        "id": "ph-tos-copyright",
        "reference": "Copyright and Other Intellectual Property",
        "summary": "Prohibits copyright infringement and provides DMCA takedown process",
        "quote": "This Website operates a clear Copyright Policy in relation to any Content alleged to infringe the copyright of a third party. If you believe that any Content violates your copyright, please see our Copyright Policy for instructions on sending us a notice of copyright infringement.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
            "description": "DMCA notice of copyright infringement",
            "example": "Formal copyright infringement notice following DMCA requirements",
            "reason": "Required to process copyright takedown requests"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright of a third party"
        ]
      },
      {
        "id": "ph-tos-consent-verification",
        "reference": "Rules Applicable to All Content and Uploaders",
        "summary": "Requires consent and release from every individual appearing in content",
        "quote": "you have obtained the consent and release for every individual appearing in your Content, including the right for you to use and upload the Content on this Website;",
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
        "evidenceRequirements": [
          {
            "description": "Consent and release documentation for every individual appearing in content",
            "example": "Written consent forms or releases from all individuals in the content",
            "reason": "Required to verify permission to upload and use content featuring individuals"
          }
        ],
        "removalCriteria": [
          "Lack of consent from individuals appearing in content",
          "Lack of release from individuals appearing in content"
        ]
      },
      {
        "id": "ph-tos-fraudulent-content",
        "reference": "Prohibited Uses and Reporting",
        "summary": "Prohibits fraudulent, misleading, and defamatory content",
        "quote": "post any Content that contains falsehoods or misrepresentations that could damage this Website or any third party; post any Content that is obscene, illegal, unlawful, fraudulent, defamatory, libelous, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law, or is otherwise inappropriate;",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains falsehoods or misrepresentations",
          "Content is fraudulent or defamatory",
          "Content could damage a third party"
        ]
      }
    ],
    "appealProcess": {
      "url": "mailto:dsa@pornhub.com",
      "summary": "Users can lodge complaints against content removal decisions within 6 months via email or webform, with review process that may reverse decisions if unjustified",
      "steps": [
        "Submit complaint within 6 months of notification of decision",
        "Email dsa@pornhub.com from the email associated with your account or use webform",
        "Include as much information as possible to allow investigation of complaint",
        "Provide explanation of reasons why complaint is justified",
        "Platform reviews complaint in timely, non-discriminatory, diligent, and objective manner",
        "Platform may reverse previous decisions if complaint demonstrates content did not violate terms or decision was unjustified"
      ]
    }
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2025-09-23T20:43:00.026Z",
    "policies": [
      {
        "id": "ph-pp-user-contributions-public",
        "reference": "Section 2",
        "summary": "Prohibits sharing of user contributions without consent as they become publicly available",
        "quote": "Please use caution in providing user contributions. By providing user contributions you are making that content and information publicly available. User contributions can be read, collected, used, and disclosed by others, and we cannot control who accesses your user contributions or what other users may do with the information you voluntarily post or submit.",
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
          "Content was posted as user contributions",
          "Content is publicly accessible to others"
        ]
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 8",
        "summary": "Allows users to delete their account and user contributions at any time",
        "quote": "You may use your account settings to delete your user contributions and audio/video information. You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order.",
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
          "User requests deletion of their contributions",
          "User requests account deactivation",
          "No legal or court order prevents deletion"
        ]
      },
      {
        "id": "ph-pp-minor-protection",
        "reference": "Section 2",
        "summary": "Prohibits content involving minors and requires immediate removal upon notification",
        "quote": "Pornhub prohibits minors from using the platform. Pornhub is forbidden for persons under the age of 18 and the applicable age of majority in the jurisdiction from which Pornhub is accessed. We do not knowingly process personal information from minors. If you are the parent or legal guardian of a minor who has provided us with personal information, then please contact us at support@pornhub.com to have that minor's personal information deleted.",
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
            "description": "Proof of guardianship or parental relationship",
            "example": "Legal documentation showing parental or guardian status",
            "reason": "To verify authority to request removal on behalf of minor"
          }
        ],
        "removalCriteria": [
          "Content involves a person under 18 years of age",
          "Content involves a person under the age of majority in their jurisdiction",
          "Request made by parent or legal guardian"
        ]
      },
      {
        "id": "ph-pp-identity-verification",
        "reference": "Section 2",
        "summary": "Requires identity and age verification including biometric processing to prevent impersonation",
        "quote": "If you choose to register to Pornhub or if this is required for age verification purposes, we process identifiers you submit to us (including government-issued photo identification as well as other documentation) for us to verify your identity, age, and record checks. Our third-party service provider will also process you face scan which is considered biometric information to verify the authenticity of the identifiers you provide to us while registering for such services",
        "contentTypes": [
          "intimate",
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
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or state ID",
            "reason": "To verify identity and prevent impersonation"
          },
          {
            "description": "Face scan for biometric verification",
            "example": "Live selfie or video verification",
            "reason": "To verify authenticity of identification documents"
          }
        ],
        "removalCriteria": [
          "Identity verification is required for account registration",
          "Biometric verification confirms authenticity of identification"
        ]
      },
      {
        "id": "ph-pp-content-reporting",
        "reference": "Section 4",
        "summary": "Processes reports for content moderation and handles complaints about violations",
        "quote": "We process Online Forms and Communication Data and other information as necessary to respond to and resolve any of your requests, including where this is required to ensure compliance with our legal obligations. This also includes our Trust and Safety initiative, in the scope of which we may disclose some information to several recipients.",
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
            "description": "Completed online reporting form",
            "example": "Trust and Safety report form with details of violation",
            "reason": "To process content moderation requests and ensure legal compliance"
          }
        ],
        "removalCriteria": [
          "Content violates platform policies",
          "Report submitted through official channels",
          "Compliance with legal obligations required"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.pornhub.com/hc/en-us/categories/4419836212499",
      "summary": "Users can contact Trust & Safety for appeals and content-related issues",
      "steps": [
        "Access the Trust & Safety help center",
        "Submit inquiry or appeal through available channels",
        "Provide necessary documentation and information",
        "Await response from Trust & Safety team"
      ]
    }
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2025-09-23T20:43:00.026Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law prohibiting nonconsensual publication of intimate visual depictions of individuals, both authentic and computer-generated, requiring covered platforms to remove such content within 48 hours.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T20:43:00.026Z",
    "policies": [
      {
        "id": "take-it-down-authentic-adults",
        "reference": "Section 2(h)(2)(A)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
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
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
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
        "id": "take-it-down-deepfake-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
          "Digital forgery published without consent of the individual",
          "Content was not voluntarily exposed in public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-deepfake-minors",
        "reference": "Section 2(h)(3)(B)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
        "id": "take-it-down-threats-deepfake",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to publish digital forgeries (deepfakes) for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both. Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
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
          "Intentional threat to publish digital forgeries",
          "Purpose of intimidation, coercion, extortion, or creating mental distress"
        ]
      },
      {
        "id": "take-it-down-platform-removal",
        "reference": "Section 3(a)(3)",
        "summary": "Requires covered platforms to remove nonconsensual intimate visual depictions within 48 hours of receiving a valid removal request and make reasonable efforts to remove identical copies",
        "quote": "Upon receiving a valid removal request from an identifiable individual (or an authorized person acting on behalf of such individual) using the process described in paragraph (1)(A)(ii), a covered platform shall, as soon as possible, but not later than 48 hours after receiving such request— (A) remove the intimate visual depiction; and (B) make reasonable efforts to identify and remove any known identical copies of such depiction.",
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
          "response": null,
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Platform must remove content as soon as possible but not later than 48 hours after receiving valid removal request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Physical or electronic signature of the individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify identity and authorization for the removal request"
          },
          {
            "description": "Identification and location information for the intimate visual depiction",
            "example": "URL or specific location of the content on the platform",
            "reason": "To enable the platform to locate and remove the specific content"
          },
          {
            "description": "Statement of good faith belief that content is nonconsensual",
            "example": "Brief explanation of why the content was published without consent",
            "reason": "To establish that the content violates the platform's policies"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address or phone number",
            "reason": "To enable platform communication regarding the removal request"
          }
        ],
        "removalCriteria": [
          "Valid removal request submitted through established process",
          "Content identified as intimate visual depiction of the individual",
          "Good faith belief that content was published without consent"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
