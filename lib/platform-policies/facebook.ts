import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law that criminalizes nonconsensual publication of intimate images and requires covered platforms to implement notice-and-removal processes. Signed into law May 19, 2025 as Public Law No. 119-12.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-24T13:28:20.586Z",
    "policies": [
      {
        "id": "takedown-act-ncii-authentic-adults",
        "reference": "Section 2(h)(2)(A)",
        "summary": "Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causes harm",
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
        "id": "takedown-act-ncii-authentic-minors",
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
          "Content depicts a minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "takedown-act-deepfakes-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causes harm",
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
          "Content is a digital forgery published without consent",
          "Content was not voluntarily exposed by the individual in a public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "takedown-act-deepfakes-minors",
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
          "Content is a digital forgery depicting a minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "takedown-act-threats-authentic",
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
          "Threat made for intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "takedown-act-threats-deepfakes-adults",
        "reference": "Section 2(h)(6)(B)(i)",
        "summary": "Prohibits intentionally threatening to publish digital forgeries (deepfakes) of adults for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both.",
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
          "Intentional threat to publish digital forgeries of adults",
          "Threat made for intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "takedown-act-threats-deepfakes-minors",
        "reference": "Section 2(h)(6)(B)(ii)",
        "summary": "Prohibits intentionally threatening to publish digital forgeries (deepfakes) of minors for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
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
          "Intentional threat to publish digital forgeries of minors",
          "Threat made for intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "takedown-act-platform-removal-process",
        "reference": "Section 3(a)(1)",
        "summary": "Requires covered platforms to establish a notice and removal process for nonconsensual intimate visual depictions within one year of enactment",
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
            "description": "Physical or electronic signature of the identifiable individual or authorized person",
            "example": "Digital signature or handwritten signature on document",
            "reason": "To verify identity and authorization for the removal request"
          },
          {
            "description": "Identification of and information reasonably sufficient to locate the intimate visual depiction",
            "example": "URL, screenshot, or detailed description of content location",
            "reason": "To enable the platform to locate the specific content for removal"
          },
          {
            "description": "Brief statement of good faith belief that the content is nonconsensual",
            "example": "Statement explaining why the content was published without consent",
            "reason": "To establish the basis for the removal request"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address, phone number, or mailing address",
            "reason": "To enable platform communication regarding the request"
          }
        ],
        "removalCriteria": [
          "Content includes a depiction of the identifiable individual",
          "Content was published without the consent of the identifiable individual"
        ]
      },
      {
        "id": "takedown-act-platform-removal-timeframe",
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
            "description": "Platform must remove content as soon as possible, but not later than 48 hours after receiving valid removal request"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Valid removal request has been received",
          "Request follows the established notice and removal process"
        ]
      },
      {
        "id": "takedown-act-platform-notice-requirement",
        "reference": "Section 3(a)(2)",
        "summary": "Requires covered platforms to provide clear and conspicuous notice of their removal process for nonconsensual intimate visual depictions",
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
          "Notice must be easy to read and in plain language",
          "Notice must describe how to submit removal requests"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758659204835-0",
    "reference": "META-CS-2025",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering Facebook, Instagram, Messenger and Threads, including policies on adult nudity, sexual activity, and non-consensual intimate imagery.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-24T13:28:20.586Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and sexual harassment",
        "quote": "Adult Sexual Exploitation",
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
          "Content constitutes adult sexual exploitation"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment that degrades or intimidates individuals",
        "quote": "Bullying and Harassment",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content constitutes bullying or harassment"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and image privacy rights violations including sharing personal information without consent",
        "quote": "Privacy Violations",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates privacy rights",
          "Content violates image privacy rights"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresenting identity and impersonation on the platform",
        "quote": "Authentic Identity Representation",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content misrepresents user identity",
          "Account is impersonating another person"
        ]
      },
      {
        "id": "meta-cs-child-sexual-exploitation",
        "reference": "Child Sexual Exploitation, Abuse, and Nudity",
        "summary": "Prohibits child sexual exploitation, abuse, and inappropriate imagery involving minors",
        "quote": "Child Sexual Exploitation, Abuse, and Nudity",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves child sexual exploitation",
          "Content involves child abuse",
          "Content contains inappropriate imagery of minors"
        ]
      },
      {
        "id": "meta-cs-human-exploitation",
        "reference": "Human Exploitation",
        "summary": "Prohibits human exploitation including sextortion and coercive practices",
        "quote": "Human Exploitation",
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
          "Content involves human exploitation",
          "Content involves sextortion or coercive practices"
        ]
      },
      {
        "id": "meta-cs-adult-nudity-sexual-activity",
        "reference": "Adult Nudity and Sexual Activity",
        "summary": "Prohibits non-consensual sharing of adult intimate imagery and sexual content",
        "quote": "Adult Nudity and Sexual Activity",
        "contentTypes": [
          "intimate"
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
          "Content contains non-consensual adult intimate imagery",
          "Content violates adult nudity policies"
        ]
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Prohibits cybersecurity violations including unauthorized access to accounts and systems",
        "quote": "Cybersecurity",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content results from cybersecurity violations",
          "Content obtained through unauthorized access"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property rights including unauthorized use of personal images",
        "quote": "Third-Party Intellectual Property Infringement",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content infringes third-party intellectual property rights",
          "Content uses personal images without authorization"
        ]
      },
      {
        "id": "meta-cs-additional-protection-minors",
        "reference": "Additional Protection of Minors",
        "summary": "Provides additional protections for minors against harmful content and exploitation",
        "quote": "Additional Protection of Minors",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content poses risk to minors",
          "Content violates additional minor protection policies"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758659204835-1",
    "reference": "META-TOS-2025",
    "title": "Meta Terms of Service",
    "summary": "Updated terms governing use of Facebook, Messenger and other Meta products, effective January 1, 2025.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-24T13:28:20.586Z",
    "policies": [
      {
        "id": "meta-tos-content-violations",
        "reference": "Section 3.2",
        "summary": "Prohibits sharing content that violates community standards, is unlawful, misleading, discriminatory, fraudulent, or that users do not own or have rights to share",
        "quote": "You may not use our Products to do or share anything: That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products. That is unlawful, misleading, discriminatory or fraudulent (or assists someone else in using our Products in such a way). That you do not own or have the necessary rights to share.",
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
          "Content violates Community Standards",
          "Content is unlawful, misleading, discriminatory or fraudulent",
          "User does not own or have necessary rights to share the content"
        ]
      },
      {
        "id": "meta-tos-ip-infringement",
        "reference": "Section 3.2",
        "summary": "Prohibits content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content infringes someone else's copyright",
          "Content infringes someone else's trademark",
          "Content violates other intellectual property rights"
        ]
      },
      {
        "id": "meta-tos-content-removal",
        "reference": "Section 3.2",
        "summary": "Provides authority to remove or restrict access to content that violates terms and suspend or disable accounts for violating conduct",
        "quote": "We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2.",
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
          "Content violates Terms of Service provisions",
          "User conduct violates Terms of Service provisions"
        ]
      },
      {
        "id": "meta-tos-reporting-encouragement",
        "reference": "Section 3.2",
        "summary": "Encourages users to report content or conduct that violates their rights, including intellectual property rights, or platform terms and policies",
        "quote": "To help support our community, we encourage you to report content or conduct that you believe violates your rights (including intellectual property rights) or our terms and policies, if this feature exists in your jurisdiction.",
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
          "Content violates user's rights",
          "Content violates intellectual property rights",
          "Content violates platform terms and policies"
        ]
      },
      {
        "id": "meta-tos-content-deletion-timeframe",
        "reference": "Section 3.3",
        "summary": "Establishes timeframes for content deletion, including up to 90 days for deletion process and additional 90 days for removal from backups",
        "quote": "It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
            "description": "Up to 90 days to delete content after deletion process begins, plus up to another 90 days to remove from backups"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests content deletion",
          "Account deletion process initiated"
        ]
      },
      {
        "id": "meta-tos-account-termination",
        "reference": "Section 4.2",
        "summary": "Provides authority to suspend or permanently disable accounts for clear, serious, or repeated breaches of terms or policies, including Community Standards",
        "quote": "If we determine, in our discretion, that you have clearly, seriously or repeatedly breached our Terms or Policies, including in particular the Community Standards, we may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account.",
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
          "Clear breach of Terms or Policies",
          "Serious breach of Terms or Policies",
          "Repeated breach of Terms or Policies",
          "Violation of Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review of content removal or account suspension decisions, unless doing so may expose Meta or others to legal liability, harm the community, compromise system integrity, or is prohibited for legal reasons",
      "steps": [
        "Request review of content removal decision",
        "Request review of account suspension or termination decision",
        "Meta will provide explanation and review options unless restricted by legal or safety concerns"
      ]
    }
  },
  {
    "id": "facebook-new-1758659204835-2",
    "reference": "META-NUDITY-2025",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Specific policy addressing restrictions on nudity and sexual content, with provisions for non-consensual intimate imagery.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-24T13:28:20.586Z",
    "policies": [
      {
        "id": "meta-harassment-unwanted-contact",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals without prior solicitation",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
          "Contact is repeated",
          "Contact is sexually harassing",
          "Contact is directed at a large number of individuals with no prior solicitation"
        ]
      },
      {
        "id": "meta-harassment-severe-sexualized-commentary",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits severe sexualized commentary targeting individuals",
        "quote": "Severe sexualized commentary.",
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
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "meta-harassment-derogatory-sexualized-imagery",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits derogatory sexualized photoshop or drawings targeting individuals",
        "quote": "Derogatory sexualized photoshop or drawings",
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
          "Content contains derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-harassment-sexual-activity-attacks",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
          "Content contains attacks through derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "meta-harassment-private-info-threats",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
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
          "Content contains threats to release private phone number",
          "Content contains threats to release residential address",
          "Content contains threats to release email address",
          "Content contains threats to release medical records"
        ]
      },
      {
        "id": "meta-harassment-sexual-activity-claims",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in the context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
          "Content contains claims about sexual activity targeting protected individuals",
          "Exception: criminal allegations against adults involving non-consensual sexual touching"
        ]
      },
      {
        "id": "meta-harassment-adult-sexualization",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content sexualizing adults who are minors, private adults or limited scope public figures",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
          "Content sexualizes another adult who is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-harassment-manipulated-imagery-negative",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is manipulated to negatively highlight specific physical characteristics"
        ]
      },
      {
        "id": "meta-harassment-romantic-claims",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity for private minors, private adults, and minor involuntary public figures",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains claims about romantic involvement",
          "Content contains claims about sexual orientation",
          "Content contains claims about gender identity"
        ]
      },
      {
        "id": "meta-harassment-unwanted-manipulated-imagery",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
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
            "description": "Self-report by the target or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated imagery",
            "reason": "Required to confirm the imagery is unwanted"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Content is self-reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-harassment-unwanted-pages-groups-events",
        "reference": "Bullying and harassment through pages, groups, events and messages",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
            "description": "Report by the target or authorized representative",
            "example": "Report submitted by the person being targeted or their authorized representative",
            "reason": "Required to confirm the content is unwanted targeting"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through unwanted Pages, Groups or Events",
          "Content is reported by the target or authorized representative"
        ]
      },
      {
        "id": "meta-harassment-unwanted-content-confirmation",
        "reference": "Bullying and harassment through pages, groups, events and messages",
        "summary": "Removes content that would otherwise require target reporting or indicates direct targeting when confirmed unwanted by the target",
        "quote": "Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target (for example: the target is tagged in the post or comment). We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from the target or authorized representative that content is unwanted",
            "example": "Written confirmation that the tagged content or direct targeting is unwanted",
            "reason": "Required to establish that the content constitutes unwanted targeting"
          }
        ],
        "removalCriteria": [
          "Content indicates direct targeting (e.g., target is tagged)",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "meta-harassment-public-figure-sexualization",
        "reference": "Bullying and harassment through pages, groups, events and messages",
        "summary": "Prohibits content sexualizing a public figure when confirmed unwanted by the target",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from the public figure or authorized representative that content is unwanted",
            "example": "Written confirmation from the public figure that the sexualizing content is unwanted",
            "reason": "Required to establish that the sexualizing content is unwanted by the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "meta-harassment-sexual-harassment-contact",
        "reference": "Bullying and harassment through pages, groups, events and messages",
        "summary": "Prohibits initiation of sexually harassing contact when confirmed unwanted by the recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from the recipient or authorized representative that contact is unwanted",
            "example": "Written confirmation that the sexually harassing contact is unwanted",
            "reason": "Required to establish that the contact constitutes unwanted sexual harassment"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Confirmation received from recipient or authorized representative that contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides an appeal process where users can request another review if they disagree with enforcement decisions. Appeals are submitted through the Support Inbox and users receive notifications about the outcome.",
      "steps": [
        "Submit a report through the universal reporting system",
        "Receive notification of Meta's decision via notifications and Support Inbox",
        "If disagreeing with the decision, request another review through the appeal option",
        "Provide additional information or context during the appeal process",
        "Receive final response after re-review in the Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758659204835-3",
    "reference": "META-HARASSMENT-2025",
    "title": "Bullying and Harassment Policy",
    "summary": "Policy addressing bullying, harassment, and targeted attacks, including protections for private individuals and provisions for image-based abuse.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-24T13:28:20.586Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits posting content that infringes someone else's copyright, including photos and videos posted without permission from the copyright owner",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
            "description": "Only the copyright owner or their authorized representative may file a report",
            "example": "Complete copyright claim including identification of copyrighted work and infringing content",
            "reason": "To verify ownership and establish infringement"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content posted without permission from copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-copyright-ownership",
        "reference": "Know if you own the copyright to something",
        "summary": "Establishes that creators of original photos and videos own the copyright to their content",
        "quote": "In general, the person who creates an original work owns the copyright. For example, if you create a painting, you likely own the copyright for that painting. Similarly, if you take a photo, you likely own the copyright for that photo.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User created the original photo or video",
          "Content is an original work eligible for copyright protection"
        ]
      },
      {
        "id": "meta-copyright-no-permission",
        "reference": "Copyright infringement",
        "summary": "Prohibits using someone else's copyrighted content without permission, even with credit, disclaimers, or modifications",
        "quote": "It's possible to infringe someone else's copyright when you post their content on Meta platforms, or facilitate copyright infringement, even if you: Recorded the content onto your own recording device (examples: a song playing in the background during a party, concert, sporting event, wedding, etc.) Gave credit to the copyright owner Included a disclaimer that you didn't intend to infringe copyright Didn't intend to profit from it Modified the work or added your own original material to it Found the content available on the internet Saw that others posted the same content as well Think that the use is a fair use Are using an unauthorized streaming device or service",
        "contentTypes": [
          "intimate",
          "personal",
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
          "Content posted without copyright owner's permission",
          "Use does not fall within fair use or other copyright exceptions",
          "Content recorded, modified, or found online without authorization"
        ]
      },
      {
        "id": "meta-repeat-infringer",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeatedly posting content that infringes intellectual property rights and may result in account restrictions or removal",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
        "contentTypes": [
          "intimate",
          "personal",
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
          "Repeated posting of content that infringes intellectual property rights",
          "Multiple copyright or trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removal decisions by following up with rights owners directly or submitting DMCA counter-notifications",
      "steps": [
        "Receive notification from Meta with rights owner details and report information",
        "Follow up with the rights owner directly to try to resolve the issue",
        "Submit an appeal through instructions provided in Meta's notification message",
        "For DMCA cases, file a DMCA counter-notification if eligible"
      ]
    }
  },
  {
    "id": "facebook-new-1758659204835-4",
    "reference": "META-COPYRIGHT-2025",
    "title": "Meta Copyright Policy",
    "summary": "Comprehensive copyright policy including DMCA procedures, reporting mechanisms, and intellectual property protections across Meta platforms.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-24T13:28:20.586Z",
    "policies": [
      {
        "id": "meta-privacy-safety-security",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and allows for content removal when reported",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
          "Content violates terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content threatens physical or mental health, well-being or integrity of users"
        ]
      },
      {
        "id": "meta-privacy-legal-requests",
        "reference": "Section 10 - How do we respond to legal requests",
        "summary": "Allows access, preservation and sharing of information in response to legal requests and to prevent harm",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Valid legal request received",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-privacy-information-sharing",
        "reference": "Section 19 - Sharing information with others, including law enforcement",
        "summary": "Permits sharing of user information with law enforcement and others to respond to legal requests and promote safety",
        "quote": "Sharing information with others, including law enforcement and to respond to legal requests. The categories of information we access, preserve, use and share depend on the specific circumstances. For example, responses to legal requests where not compelled by law will typically include limited information (such as contact details and login information). However, the information we process will depend on the purposes, which could include the following: In response to legal requests from third parties such as civil litigants, law enforcement and other government authorities. To comply with applicable law or legitimate legal purposes. To promote the safety, security and integrity of Meta Companies, Meta Products, users, employees, property and the public.",
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
          "Legal request from authorized third parties",
          "Required to comply with applicable law",
          "Necessary to promote safety, security and integrity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information",
      "steps": [
        "Contact Meta online through the support portal",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025"
      ]
    }
  },
  {
    "id": "facebook-new-1758720500586-0",
    "reference": "META-PRIVACY-2025",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive privacy policy covering data collection, use, and sharing across Meta platforms, effective June 16, 2025, with provisions for user rights and data protection.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-24T13:28:20.586Z",
    "policies": [
      {
        "id": "meta-sexual-exploitation-ncii",
        "reference": "Adult Sexual Exploitation Policy - NCII",
        "summary": "Prohibits sharing, threatening to share, or requesting non-consensual intimate imagery that is non-commercial, produced privately, shows nudity or sexual activity, and lacks consent as indicated by vengeful context, independent sources, or victim reports",
        "quote": "Sharing, threatening, stating an intent to share, offering or asking for non-consensual intimate imagery (NCII) that fulfills all of the three following conditions: Imagery is non-commercial and produced in a private setting. Person in the imagery is (near) nude, engaged in sexual activity or in a sexually suggestive pose. Lack of consent to share the imagery is indicated by meeting any of the signals: Vengeful context (such as, caption, comments or page title). Independent sources such as law enforcement records, media reports (such as, leak of images confirmed by media) or representatives of a survivor of NCII Report from a person depicted in the image or who shares the same name as the person depicted in the image.",
        "contentTypes": [
          "intimate"
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
            "description": "Evidence of lack of consent through vengeful context, independent sources, or victim report",
            "example": "Vengeful captions, law enforcement records, media reports, or report from person depicted",
            "reason": "Required to establish that consent was not given for sharing the intimate imagery"
          }
        ],
        "removalCriteria": [
          "Imagery is non-commercial and produced in a private setting",
          "Person in imagery is nude, near-nude, engaged in sexual activity or in sexually suggestive pose",
          "Lack of consent indicated by vengeful context, independent sources, or victim report"
        ]
      },
      {
        "id": "meta-sexual-exploitation-sextortion",
        "reference": "Adult Sexual Exploitation Policy - Sextortion",
        "summary": "Prohibits coercing money, favors or intimate imagery from people with threats to expose their intimate imagery or intimate information",
        "quote": "Coercing money, favors or intimate imagery from people with threats to expose their intimate imagery or intimate information (sextortion)",
        "contentTypes": [
          "intimate",
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
          "Coercing money, favors or intimate imagery through threats",
          "Threats to expose intimate imagery or intimate information"
        ]
      },
      {
        "id": "meta-sexual-exploitation-creepshots",
        "reference": "Adult Sexual Exploitation Policy - Creepshots",
        "summary": "Prohibits secretly taking non-commercial imagery of a person's intimate body parts or of a person engaged in sexual activity, including photos or videos that mock, sexualize or expose the person depicted",
        "quote": "Secretly taking non-commercial imagery of a person's commonly sexualized body parts (breasts, groin, buttocks, or thighs) or of a person engaged in sexual activity. This imagery is commonly known as \"creepshots\" or \"upskirts\" and includes photos or videos that mock, sexualize or expose the person depicted in the imagery.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Imagery was taken secretly without consent",
          "Shows intimate body parts or sexual activity",
          "Content mocks, sexualizes or exposes the person depicted"
        ]
      },
      {
        "id": "meta-sexual-exploitation-deepfakes",
        "reference": "Adult Sexual Exploitation Policy - Non-real NCII",
        "summary": "Prohibits promoting, threatening to share, or offering to make non-real non-consensual intimate imagery through applications, services, or instructions",
        "quote": "Promoting, threatening to share, or offering to make non-real non-consensual intimate imagery (NCII) either by applications, services, or instructions, even if there is no (near) nude commercial or non-commercial imagery shared in the content",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Promoting creation of non-real intimate imagery",
          "Threatening to share non-real intimate imagery",
          "Offering applications, services or instructions for creating non-real intimate imagery"
        ]
      },
      {
        "id": "meta-sexual-exploitation-private-conversations",
        "reference": "Adult Sexual Exploitation Policy - Private Sexual Conversations",
        "summary": "Prohibits sharing, threatening to share or stating intent to share private sexual conversations without consent, as indicated by vengeful context, independent sources, or victim reports",
        "quote": "Sharing, threatening to share or stating an intent to share private sexual conversations where a lack of consent to share is indicated by by any of the following: Vengeful context and/or threatening context, Independent sources such as media coverage or law enforcement records, or Report from a person depicted in the image or who shares the same name as the person depicted in the image",
        "contentTypes": [
          "private"
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
            "description": "Evidence of lack of consent through vengeful context, independent sources, or victim report",
            "example": "Vengeful or threatening context, media coverage, law enforcement records, or report from person involved",
            "reason": "Required to establish that consent was not given for sharing the private conversations"
          }
        ],
        "removalCriteria": [
          "Private sexual conversations shared without consent",
          "Lack of consent indicated by vengeful/threatening context",
          "Lack of consent confirmed by independent sources or victim report"
        ]
      },
      {
        "id": "meta-sexual-exploitation-non-consensual-touching",
        "reference": "Adult Sexual Exploitation Policy - Non-consensual Sexual Touching",
        "summary": "Prohibits content depicting, advocating for, or mocking non-consensual sexual touching, including imagery, statements offering or asking for such content, descriptions unless shared by survivors, and advocacy or threats",
        "quote": "Content depicting, advocating for, or mocking non-consensual sexual touching, including: Imagery depicting non-consensual sexual touching (except in real-world art depicting non-real people, with a condemning or neutral caption) Statements attempting or threatening to share, offering, or asking for imagery depicting non-consensual sexual touching Descriptions of non-consensual sexual touching, unless shared by or in support of the survivor Advocacy (including aspirational and conditional statements) for, threats to commit, or admission of participation in non-consensual sexual touching Content mocking survivors or the concept of non-consensual sexual touching",
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
          "Content depicts non-consensual sexual touching",
          "Content advocates for or threatens non-consensual sexual touching",
          "Content mocks survivors of non-consensual sexual touching",
          "Statements offering or asking for imagery of non-consensual sexual touching"
        ]
      },
      {
        "id": "meta-sexual-exploitation-survivor-identification",
        "reference": "Adult Sexual Exploitation Policy - Survivor Identification",
        "summary": "Prohibits content shared by third parties that identifies survivors of sexual assault when reported by the survivor",
        "quote": "Content shared by a third party that identifies survivors of sexual assault when reported by the survivor",
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
            "description": "Report from the survivor themselves",
            "example": "Direct report from the person identified as a survivor",
            "reason": "Required to confirm the person does not want to be identified as a survivor"
          }
        ],
        "removalCriteria": [
          "Content identifies survivors of sexual assault",
          "Content was shared by a third party",
          "Survivor has reported the content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal enforcement decisions through Facebook's Support Inbox system, with options for additional review if they disagree with the initial decision",
      "steps": [
        "If you think we got the decision wrong, you can request another review",
        "Submit appeal through the Support Inbox with additional information",
        "Receive final response after re-review of the content in Support Inbox"
      ]
    }
  }
],
};
