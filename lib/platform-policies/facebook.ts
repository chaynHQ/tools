import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act (Enacted)",
    "summary": "Federal law enacted May 19, 2025, that criminalizes nonconsensual publication of intimate images (both authentic and AI-generated) and requires covered platforms to implement notice-and-removal processes within 48 hours of verified requests.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T20:32:51.491Z",
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
        "id": "take-it-down-deepfake-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
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
        "id": "take-it-down-deepfake-minors",
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Platform must remove content within 48 hours of receiving valid removal request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Physical or electronic signature of the individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify identity and authorization for removal request"
          },
          {
            "description": "Identification and location information for the intimate visual depiction",
            "example": "URL or specific location of content on platform",
            "reason": "To enable platform to locate the specific content for removal"
          },
          {
            "description": "Good faith statement that content is nonconsensual",
            "example": "Brief explanation of why content was published without consent",
            "reason": "To establish that publication was without consent of the individual"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address or phone number",
            "reason": "To enable platform communication regarding the removal request"
          }
        ],
        "removalCriteria": [
          "Valid removal request submitted through established process",
          "Content includes depiction of identifiable individual",
          "Content was published without consent of the individual"
        ]
      },
      {
        "id": "take-it-down-platform-process",
        "reference": "Section 3(a)(1)",
        "summary": "Requires covered platforms to establish a notice and removal process for individuals to request removal of nonconsensual intimate visual depictions",
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
        "timeframes": {
          "response": {
            "value": 1,
            "unit": "years",
            "description": "Platform must establish removal process within 1 year of Act enactment"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content includes depiction of identifiable individual",
          "Content was published without consent of the individual"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758659571491-0",
    "reference": "META-CS-2025",
    "title": "Meta Community Standards",
    "summary": "Comprehensive policy document covering Facebook, Instagram, Messenger, and Threads content policies including adult nudity, sexual activity, bullying, harassment, and non-consensual intimate imagery.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T20:32:51.491Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and sexual content shared without permission",
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
          "Content involves adult sexual exploitation",
          "Sexual content shared without consent"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment content that degrades or intimidates individuals",
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
          "Content constitutes bullying behavior",
          "Content harasses or intimidates individuals"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects image privacy rights including unauthorized sharing of personal content",
        "quote": "Privacy Violations",
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
          "Content violates individual privacy",
          "Images shared without authorization",
          "Personal information disclosed without consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and impersonation to ensure authentic user representation",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
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
          "Account impersonates another person",
          "False representation of identity or activities"
        ]
      },
      {
        "id": "meta-cs-third-party-ip",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property rights including unauthorized use of personal images",
        "quote": "Third-Party Intellectual Property Infringement",
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
          "Content infringes intellectual property rights",
          "Unauthorized use of copyrighted material",
          "Images used without permission from rights holder"
        ]
      },
      {
        "id": "meta-cs-safety-commitment",
        "reference": "Safety",
        "summary": "Prohibits content that threatens people or could contribute to physical harm as part of commitment to user safety",
        "quote": "We're committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people has the potential to intimidate, exclude or silence others and isn't allowed on our services.",
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
          "Content contributes to risk of physical harm",
          "Content threatens individuals",
          "Content intimidates, excludes or silences others"
        ]
      },
      {
        "id": "meta-cs-dignity-respect",
        "reference": "Dignity",
        "summary": "Requires respect for human dignity and prohibits content that harasses or degrades others",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
          "Content fails to respect human dignity",
          "Content harasses individuals",
          "Content degrades others"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758659571491-1",
    "reference": "META-TOS-2025",
    "title": "Meta Terms of Service",
    "summary": "Updated terms governing Facebook, Messenger, and other Meta products, effective January 1, 2025, with clarified language around platform misuse and data scraping.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T20:32:51.491Z",
    "policies": [
      {
        "id": "meta-tos-content-violations",
        "reference": "Section 3.2",
        "summary": "Prohibits sharing content that violates Community Standards, is unlawful, misleading, discriminatory, fraudulent, or that users do not own or have rights to share",
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
        "summary": "Provides authority to remove or restrict access to content that violates terms and to suspend or disable accounts for violating conduct",
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
        "summary": "Provides authority to suspend or permanently disable accounts for clear, serious, or repeated breaches of Terms or Community Standards, including intellectual property infringement",
        "quote": "If we determine, in our discretion, that you have clearly, seriously or repeatedly breached our Terms or Policies, including in particular the Community Standards, we may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account. We may also disable or delete your account if you repeatedly infringe other people's intellectual property rights or where we are required to do so for legal reasons.",
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
          "Clear, serious, or repeated breach of Terms or Community Standards",
          "Repeated infringement of intellectual property rights",
          "Legal requirement for account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review when content is removed for Community Standards violations, unless violations are serious/repeated or may expose Meta to legal liability. Users can also request review if accounts are disabled, unless doing so may expose Meta to legal liability or harm the community.",
      "steps": [
        "When content is removed for Community Standards violations, Meta will notify users and explain options for requesting another review",
        "Users can request review unless they seriously or repeatedly violate Terms or if doing so may expose Meta or others to legal liability",
        "For account suspension or termination, Meta will explain options to request a review unless doing so may expose Meta to legal liability or harm the community",
        "Users can contact Meta if they believe their account was disabled by mistake"
      ]
    }
  },
  {
    "id": "facebook-new-1758659571491-2",
    "reference": "META-PP-2025",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy effective June 16, 2025, covering data collection, use, and sharing practices across Facebook, Instagram, and Messenger platforms.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T20:32:51.491Z",
    "policies": [
      {
        "id": "meta-pp-safety-integrity",
        "reference": "Section 2 - Promoting safety, integrity and security",
        "summary": "Prohibits harmful or unlawful behavior and enables content removal through review processes",
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
          "Content that violates terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - How do we respond to legal requests",
        "summary": "Provides framework for accessing, preserving and sharing information in response to legal requests and to prevent harm",
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
          "Valid legal requests from authorized parties",
          "Requirements under applicable law",
          "Threats to safety, security and integrity of users or platform"
        ]
      },
      {
        "id": "meta-pp-content-review",
        "reference": "Section 2 - Manual review processes",
        "summary": "Enables manual human review of content for policy violations and harmful behavior",
        "quote": "We also use manual review to access and review your information. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us.",
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
          "Violations of terms or policies identified through review",
          "Suspicious activity detected",
          "Harmful or unlawful behavior reported by users"
        ]
      },
      {
        "id": "meta-pp-information-preservation",
        "reference": "Section 8 - Information preservation for extended periods",
        "summary": "Allows preservation of information for extended periods for legitimate purposes including preventing harm",
        "quote": "In some instances and for specific reasons, we'll keep information for an extended period of time. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products. We may access or preserve your information for an extended amount of time.",
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
          "Information needed to prevent harm",
          "Evidence of terms or policy violations",
          "Content threatening safety, security or integrity",
          "Information needed to protect platform rights or property"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail regarding privacy policy questions, complaints or requests regarding their information",
      "steps": [
        "Contact Meta online through the help center",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some cases, decisions about violations may be reviewed by the Oversight Board",
        "Depending on jurisdiction, users may also contact their local Data Protection Authority directly"
      ]
    }
  },
  {
    "id": "facebook-new-1758659571491-3",
    "reference": "META-BH-2025",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific community standards section addressing bullying, harassment, and targeted abuse, with heightened protections for minors and private individuals.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T20:32:51.491Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
          "Contact is repeated",
          "Contact is sexually harassing",
          "Contact is directed at a large number of individuals with no prior solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-statements",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits severe sexualized commentary",
        "quote": "Severe sexualized commentary.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexualized-imagery",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits derogatory sexualized photoshop or drawings",
        "quote": "Derogatory sexualized photoshop or drawings",
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
          "Content contains derogatory sexualized photoshop",
          "Content contains derogatory sexualized drawings"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains threats to release private phone numbers",
          "Content contains threats to release residential addresses",
          "Content contains threats to release email addresses",
          "Content contains threats to release medical records"
        ]
      },
      {
        "id": "meta-bh-bullying-harassment-calls",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits calls for, or statements of intent to engage in, bullying and/or harassment",
        "quote": "Calls for, or statements of intent to engage in, bullying and/or harassment.",
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
          "Content contains calls for bullying and/or harassment",
          "Content contains statements of intent to engage in bullying and/or harassment"
        ]
      },
      {
        "id": "meta-bh-degrading-bodily-functions",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits content that degrades or expresses disgust toward individuals depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
        "quote": "Content that degrades or expresses disgust toward individuals who are depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
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
          "Content degrades individuals depicted in bodily functions",
          "Content expresses disgust toward individuals depicted in bodily functions"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits claims about sexual activity, except in the context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains claims about sexual activity",
          "Exception: criminal allegations against adults involving non-consensual sexual touching"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content sexualizing another adult",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
          "Content sexualizes another adult"
        ]
      },
      {
        "id": "meta-bh-manipulated-physical-features",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
        "contentTypes": [
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
          "Content is manipulated to negatively highlight specific physical characteristics"
        ]
      },
      {
        "id": "meta-bh-physical-appearance-ranking",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content that ranks individuals based on physical appearance or character traits",
        "quote": "Content that ranks them based on physical appearance or character traits.",
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
          "Content ranks individuals based on physical appearance",
          "Content ranks individuals based on character traits"
        ]
      },
      {
        "id": "meta-bh-romantic-involvement-claims",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
        "contentTypes": [
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
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits unwanted manipulated imagery when self-reported",
        "quote": "Unwanted manipulated imagery.",
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
            "description": "Self-report by the target or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated imagery",
            "reason": "Required for enforcement of this protection level"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Content is self-reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups-events",
        "reference": "Bullying and harassment through pages, groups, events and messages",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events",
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
            "example": "Report submitted by the targeted individual or their authorized representative",
            "reason": "Required to confirm the content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through unwanted Pages, Groups and Events",
          "Content is reported by the target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figure",
        "reference": "Bullying and harassment through pages, groups, events and messages",
        "summary": "Prohibits content sexualizing a public figure when confirmed as unwanted",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from the target or authorized representative that content is unwanted",
            "example": "Statement from the public figure or their representative confirming the content is unwanted",
            "reason": "Required to confirm the sexualizing content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received that content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexually-harassing-contact",
        "reference": "Bullying and harassment through pages, groups, events and messages",
        "summary": "Prohibits initiation of sexually harassing contact",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from the recipient or authorized representative that contact is unwanted",
            "example": "Statement from the recipient confirming the sexually harassing contact is unwanted",
            "reason": "Required to confirm the contact is unwanted"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Confirmation received that contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal content decisions through the Support Inbox and request another review if they disagree with the initial decision",
      "steps": [
        "Report content through the universal reporting option",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758659571491-4",
    "reference": "META-NCII-2021",
    "title": "Non-Consensual Intimate Images Policy and StopNCII Initiative",
    "summary": "Meta's comprehensive approach to combating non-consensual intimate imagery, including proactive detection technology and the StopNCII.org platform for hash-based prevention.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-23T20:32:51.491Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "NCII Policy Statement",
        "summary": "Prohibits the non-consensual sharing of intimate images on Meta platforms",
        "quote": "We do not allow this content on our apps",
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
          "Content consists of intimate images shared without consent"
        ]
      },
      {
        "id": "meta-ncii-removal-technology",
        "reference": "Photo and Video Matching Technology",
        "summary": "Uses photo and video matching technology to remove intimate images shared without consent",
        "quote": "For years, we've been using photo- and video-matching technology to remove intimate images shared without consent",
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
          "Images or videos match known intimate content shared without consent"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "StopNCII.org Integration",
        "summary": "Proactively detects and prevents sharing of intimate images through hash-matching technology",
        "quote": "Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms",
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
            "description": "Digital hash of the intimate image created through StopNCII.org",
            "example": "Unique numerical code generated from the original image",
            "reason": "Allows platforms to identify matching content without accessing the original image"
          }
        ],
        "removalCriteria": [
          "Content matches hash of intimate image registered through StopNCII.org",
          "Image is being shared or attempted to be shared without consent"
        ]
      },
      {
        "id": "meta-ncii-circulation-prevention",
        "reference": "Content Circulation Prevention",
        "summary": "Prevents further circulation of non-consensual intimate content once identified",
        "quote": "This feature prevents further circulation of that NCII content and keeps those images securely in the possession of the owner",
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
          "Content has been identified as non-consensual intimate imagery",
          "Content is at risk of further circulation"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758659571491-5",
    "reference": "META-COPYRIGHT-2025",
    "title": "Meta Copyright and DMCA Policy",
    "summary": "Copyright infringement reporting and DMCA takedown procedures for Facebook and Instagram, including appeals process and repeat infringer policies.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T20:32:51.491Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits posting content that infringes someone else's copyright without permission",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
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
        "summary": "Establishes that creators generally own copyright to their original works including photos and videos",
        "quote": "In general, the person who creates an original work owns the copyright. For example, if you create a painting, you likely own the copyright for that painting. Similarly, if you take a photo, you likely own the copyright for that photo.",
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
          "User created the original work",
          "Work meets originality requirements for copyright protection"
        ]
      },
      {
        "id": "meta-copyright-rights",
        "reference": "Your rights as a copyright owner",
        "summary": "Grants copyright owners the right to prevent others from copying or distributing their work without permission",
        "quote": "As a copyright owner, you have certain rights under the law. These include the right to stop others from copying or distributing your work, or from creating new works based on your work. Copyright infringement generally occurs when a person engages in one of these activities without the copyright owner's permission.",
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
          "Someone uploads your photo or video without permission",
          "Someone copies or distributes your copyrighted work",
          "Someone creates new works based on your work without authorization"
        ]
      },
      {
        "id": "meta-copyright-no-permission-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits use of copyrighted content even with credit, disclaimers, or modifications without permission",
        "quote": "Keep in mind that your use of someone else's content may infringe their copyright, even if you: Gave credit to the copyright owner, Included a disclaimer that you don't intend to infringe copyright, Think that the use is a fair use, Didn't intend to profit from it, Legally bought or downloaded the content, Modified the work or added your own original material to it, Found the content available on the internet, Recorded the content onto your own recording device, Saw that others have posted the same content as well",
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
          "Use of copyrighted content without permission regardless of credit given",
          "Use of copyrighted content without permission regardless of disclaimers",
          "Use of copyrighted content without permission regardless of modifications made",
          "Use of copyrighted content without permission regardless of how it was obtained"
        ]
      },
      {
        "id": "meta-repeat-infringer-policy",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeated posting of content that infringes intellectual property rights and may result in account restrictions or removal",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
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
          "Repeated posting of content that infringes intellectual property rights",
          "Multiple violations of copyright or trademark policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following instructions provided in removal notifications, including DMCA counter-notifications for copyright claims",
      "steps": [
        "Receive notification from Meta about content removal with details of the report",
        "Follow appeal instructions provided in the removal notification message",
        "For copyright claims, may file a DMCA counter-notification if applicable",
        "Contact rights owner directly to try to resolve the issue",
        "Group admins are notified of removals but only the original poster can submit appeals"
      ]
    }
  }
],
};
