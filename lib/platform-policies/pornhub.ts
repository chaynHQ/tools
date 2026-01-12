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
    "accessTimestamp": "2026-01-12T09:10:19.530Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "ph-privacy-policy",
    "reference": "PH-PP",
    "title": "Pornhub Privacy Policy",
    "summary": "Privacy policy explaining how Pornhub collects, uses, and protects user data.",
    "url": "https://www.pornhub.com/information/privacy",
    "accessTimestamp": "2026-01-12T09:10:19.530Z",
    "policies": [
      {
        "id": "ph-pp-user-contributions-public",
        "reference": "Section 3 - The Data We Process About You",
        "summary": "Warns users that content they post becomes publicly available and can be accessed by others",
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
        "removalCriteria": []
      },
      {
        "id": "ph-pp-account-deletion",
        "reference": "Section 9 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their accounts and associated content at any time",
        "quote": "You may also delete and deactivate your account with us at any time unless we are not allowed to do so by law or by a court order. If you do so, your profile will no longer be accessible by you. If you later choose to have an account with us, you will have to sign up for a new account as none of the information you previously provided or saved within your account will have been saved.",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Account deletion available at any time"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests account deletion",
          "Unless prohibited by law or court order"
        ]
      },
      {
        "id": "ph-pp-user-content-deletion",
        "reference": "Section 9 - Your Choices About How We Collect, Use and Disclose Your Personal Information",
        "summary": "Allows users to delete their uploaded content and audio/video information through account settings",
        "quote": "You may use your account settings to delete your user contributions and audio/video information.",
        "contentTypes": [
          "intimate",
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
          "User requests deletion through account settings"
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
          "private",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
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
            "description": "Identity verification required for data deletion requests",
            "example": "Username and email address used to create account",
            "reason": "To verify identity and locate information in systems"
          }
        ],
        "removalCriteria": [
          "Valid data deletion request",
          "Identity verification completed"
        ]
      },
      {
        "id": "ph-pp-biometric-consent-withdrawal",
        "reference": "Section 12 - Biometric Information",
        "summary": "Allows users to withdraw consent for biometric information processing at any time",
        "quote": "You will be asked to provide your consent to biometric information processing which you may withdraw at any time. Withdrawing your consent will not affect the lawfulness of any collection, use, processing, or disclosure that occurred prior to the withdrawal.",
        "contentTypes": [
          "private",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Consent can be withdrawn at any time"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User withdraws consent for biometric processing"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "ph-trust-and-safety",
    "reference": "PH-CONTENT-POLICY",
    "title": "Pornhub Trust and Safety Policy",
    "summary": "Comprehensive policy covering content moderation, verification requirements, and safety measures.",
    "url": "https://www.pornhub.com/information/trust-and-safety",
    "accessTimestamp": "2026-01-12T09:10:19.530Z",
    "policies": [],
    "appealProcess": null
  },
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law prohibiting nonconsensual intimate visual depictions of individuals, both authentic and computer-generated, requiring platforms to implement notice-and-removal processes within 48 hours. Signed into law May 19, 2025.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2026-01-12T09:10:19.530Z",
    "policies": [
      {
        "id": "take-it-down-authentic-adults",
        "reference": "Section 2(h)(2)(A)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not matter of public concern, and intended to cause or causing harm",
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
          "Intimate visual depiction was obtained or created under circumstances with reasonable expectation of privacy",
          "Content was not voluntarily exposed by the individual in a public or commercial setting",
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
          "Content depicts an identifiable individual who is a minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-deepfake-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not matter of public concern, and intended to cause or causing harm",
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
          "Content is a digital forgery published without consent of the identifiable individual",
          "Content was not voluntarily exposed by the individual in a public or commercial setting",
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
          "Content is a digital forgery of an identifiable individual who is a minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
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
            "description": "Platform must remove content as soon as possible, but not later than 48 hours after receiving valid removal request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Physical or electronic signature of the identifiable individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify identity and authorization for removal request"
          },
          {
            "description": "Identification and information reasonably sufficient to locate the intimate visual depiction",
            "example": "URL, screenshot, or detailed description of content location",
            "reason": "To enable platform to locate and identify the specific content for removal"
          },
          {
            "description": "Brief statement of good faith belief that content is nonconsensual",
            "example": "Statement explaining why the content was published without consent",
            "reason": "To establish that the content violates platform policies regarding consent"
          },
          {
            "description": "Contact information sufficient to enable platform communication",
            "example": "Email address, phone number, or mailing address",
            "reason": "To allow platform to communicate regarding the removal request"
          }
        ],
        "removalCriteria": [
          "Content is an intimate visual depiction of the requesting individual",
          "Content was published without the consent of the identifiable individual",
          "Valid removal request submitted through established process"
        ]
      },
      {
        "id": "take-it-down-threats-authentic",
        "reference": "Section 2(h)(6)(A)",
        "summary": "Prohibits intentionally threatening to commit offenses involving authentic intimate visual depictions for purposes of intimidation, coercion, extortion, or creating mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (2) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be punished as provided in paragraph (4).",
        "contentTypes": [
          "intimate",
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
          "Content constitutes an intentional threat to publish authentic intimate visual depictions",
          "Threat is made for purposes of intimidation, coercion, extortion, or creating mental distress"
        ]
      },
      {
        "id": "take-it-down-threats-deepfake",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to commit offenses involving digital forgeries (deepfakes) for purposes of intimidation, coercion, extortion, or creating mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both. Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
        "contentTypes": [
          "intimate",
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
          "Content constitutes an intentional threat to publish digital forgeries",
          "Threat is made for purposes of intimidation, coercion, extortion, or creating mental distress"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
