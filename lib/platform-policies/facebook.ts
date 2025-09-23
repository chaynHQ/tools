import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "facebook-new-1758649784061-0",
    "reference": "FB-CS-001",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering what is and isn't allowed on Facebook, Instagram, Messenger and Threads, including policies on safety, privacy, authenticity, and dignity",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and sextortion",
        "quote": "Adult Sexual Exploitation",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment that degrades others and violates their dignity",
        "quote": "Bullying and Harassment",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects personal privacy and information",
        "quote": "Privacy Violations",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresenting identity and impersonation to ensure authenticity",
        "quote": "Authentic Identity Representation",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits third-party intellectual property infringement including unauthorized use of personal images",
        "quote": "Third-Party Intellectual Property Infringement",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including coordinated efforts to misrepresent identity",
        "quote": "Inauthentic Behavior",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Prohibits compromising account integrity and unauthorized access to accounts",
        "quote": "Account Integrity",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Prohibits cybersecurity violations that compromise user safety and security",
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
        "removalCriteria": []
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "DIGNITY",
        "summary": "Requires respect for human dignity and prohibits harassment or degradation of others",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
          "Content that harasses others",
          "Content that degrades others"
        ]
      },
      {
        "id": "meta-cs-privacy-principle",
        "reference": "PRIVACY",
        "summary": "Protects personal privacy and information, ensuring freedom to choose how and when to share",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
          "Content that violates personal privacy",
          "Content shared without consent"
        ]
      },
      {
        "id": "meta-cs-safety-principle",
        "reference": "SAFETY",
        "summary": "Removes content that threatens people or contributes to risk of physical harm",
        "quote": "We're committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people has the potential to intimidate, exclude or silence others and isn't allowed on our services.",
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
          "Content that could contribute to risk of harm to physical security",
          "Content that threatens people",
          "Content that intimidates, excludes or silences others"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758649784061-1",
    "reference": "FB-TOS-001",
    "title": "Meta Terms of Service",
    "summary": "Legal agreement governing use of Facebook, Messenger, and other Meta products, covering user rights, responsibilities, and platform rules",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "fb-tos-content-violations",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that violates Community Standards, is unlawful, misleading, discriminatory, fraudulent, or content you do not own or have necessary rights to share",
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
          "Content shared without ownership or necessary rights"
        ]
      },
      {
        "id": "fb-tos-ip-infringement",
        "reference": "Section 3.2.1",
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
          "Content infringes someone else's intellectual property rights",
          "Content violates copyright or trademark",
          "No applicable legal exception or limitation exists"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "Section 3.2",
        "summary": "Provides authority to remove or restrict access to violating content and suspend or disable accounts for conduct violations",
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
          "User conduct violates platform policies"
        ]
      },
      {
        "id": "fb-tos-reporting-encouragement",
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
        "id": "fb-tos-content-deletion-process",
        "reference": "Section 3.3.3",
        "summary": "Establishes content deletion timeframes and process, including up to 90 days for deletion and additional 90 days for backup removal",
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
            "description": "Up to 90 days to delete content, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content deletion request received",
          "Account deletion process initiated",
          "Content sent to trash"
        ]
      },
      {
        "id": "fb-tos-account-termination",
        "reference": "Section 4.2",
        "summary": "Provides authority to suspend or permanently disable accounts for clear, serious, or repeated breaches of Terms or Community Standards, including intellectual property violations",
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
          "Clear, serious, or repeated breach of Terms or Policies",
          "Violation of Community Standards",
          "Repeated infringement of intellectual property rights",
          "Legal requirement for account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions and account actions, unless violations are serious/repeated or legal restrictions apply",
      "steps": [
        "Meta will notify users when content is removed for Community Standards violations",
        "Users can request another review of removal decisions",
        "Review options may not be available for serious or repeated violations",
        "Users can contact Meta if they believe account was disabled by mistake",
        "Appeals may be restricted due to legal liability, community harm, technical limitations, or legal prohibitions"
      ]
    }
  },
  {
    "id": "facebook-new-1758649784061-2",
    "reference": "FB-PP-001",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive privacy policy explaining how Meta collects, uses, shares, retains and transfers user information across Facebook and other Meta products",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "meta-pp-safety-integrity",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and removes content reported for violations",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Identify and combat disparities and racial bias against historically marginalized communities, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported by users",
          "Content threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - How do we respond to legal requests",
        "summary": "Responds to legal requests and preserves information to comply with applicable law and prevent harm",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. Learn more about when we respond to legal requests. In accordance with applicable law. To promote the safety, security and integrity of Meta Products, users, employees, property and the public. Learn more. We may access or preserve your information for an extended amount of time.",
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
          "Valid legal request received (search warrant, court order, production order, subpoena)",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity of Meta Products and users"
        ]
      },
      {
        "id": "meta-pp-account-deletion",
        "reference": "Section 6 - Delete your information or account",
        "summary": "Allows users to delete their information and accounts",
        "quote": "Delete your information or account",
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
          "User requests deletion of their information or account"
        ]
      },
      {
        "id": "meta-pp-data-management",
        "reference": "Section 6 - Manage your data",
        "summary": "Provides tools for users to manage their data and information",
        "quote": "Manage your data",
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
          "User requests to manage their data"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information, including privacy-related issues",
      "steps": [
        "Contact Meta online through the provided support link",
        "Alternatively, contact by mail at: Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, users may contact their local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "facebook-new-1758649784061-3",
    "reference": "FB-NCII-001",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Detailed policy on adult nudity, sexual content, and non-consensual intimate imagery, including enforcement procedures and exceptions",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "fb-ncii-001-adult-nudity",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic and digital imagery of adult nudity including visible genitalia, anuses, buttocks, and female nipples except in specific contexts",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows visible genitalia including when obscured by pubic hair or digital overlays",
          "Content shows visible anuses and/or close-ups of visible buttocks",
          "Content shows visible female nipples except in breastfeeding or protest contexts"
        ]
      },
      {
        "id": "fb-ncii-001-voyeuristic-content",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic and digital videos that focus on intimate body parts recorded without the awareness of the person depicted",
        "quote": "Photorealistic/ digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person(s) depicted in them",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Video focuses on intimate body parts",
          "Content was recorded without the awareness of the person depicted"
        ]
      },
      {
        "id": "fb-ncii-001-explicit-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery of explicit sexual activity including sexual intercourse, oral contact, and explicit stimulation",
        "quote": "Photorealistic/ digital imagery of adult sexual activity, including: Explicit sexual activity or stimulation: Explicit sexual intercourse or oral sex, as indicated by a person's mouth or genitals entering or in contact with another person's genitals or anus, or genitals placed upon or inserted into a sex toy, when at least one person's genitals or anus is visible; Explicit stimulation of a person's genitals or anus, as indicated by stimulation, or the insertion of sex toys into the person's genitals or anus, when the contact with the genitals or anus is directly visible",
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
          "Content depicts explicit sexual intercourse or oral contact with visible intimate body parts",
          "Content shows explicit stimulation of intimate body parts with direct visibility of contact"
        ]
      },
      {
        "id": "fb-ncii-001-implicit-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery of implicit sexual activity including non-visible intimate contact and impending sexual activity",
        "quote": "Implicit sexual activity or stimulation: Implicit sexual intercourse or oral sex, as indicated by a person's mouth or genitals entering or in contact with another person's genitals or anus, when the genitals or anus and/or the entry or contact is not directly visible; Implicit stimulation of a person's genitals or anus, as indicated by stimulation, or the placement of sex toys above or insertion of sex toys into the person's genitals or anus, or genitals placed upon or inserted into a sex toy, when the genitals or anus, stimulation, placement, and/or insertion is not directly visible; Impending sexual activity, as indicated by positions which suggest contact is about to be initiated between a person's hand, mouth or genitals with another person's genitals or anus",
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
          "Content shows implicit sexual contact when intimate body parts are not directly visible",
          "Content depicts positions suggesting imminent sexual contact"
        ]
      },
      {
        "id": "fb-ncii-001-other-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery of other sexual activities including intimate touching and stimulation of visible body parts",
        "quote": "Other sexual activity or stimulation: Erections, Presence of by-products of sexual activity, Sex toys placed upon or inserted into mouth, Stimulation of visible human nipples, Squeezing female breasts, defined as a grabbing motion with curved fingers that shows both marks and clear shape change of the breasts. We allow squeezing in breastfeeding contexts",
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
          "Content shows intimate touching or stimulation of visible body parts",
          "Content depicts sexual arousal or by-products of sexual activity"
        ]
      },
      {
        "id": "fb-ncii-001-ai-generated-content",
        "reference": "Policy Rationale",
        "summary": "Prohibits AI-generated and computer-generated images of nudity and sexual activity regardless of photorealistic appearance",
        "quote": "Under this policy, we remove real photographs and videos of nudity and sexual activity, AI- or computer-generated images of nudity and sexual activity, and digital imagery, regardless of whether it looks \"photorealistic\" (as in, it looks like a real person)",
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
          "Content is AI-generated or computer-generated imagery of nudity or sexual activity",
          "Content is digital imagery depicting nudity or sexual activity regardless of photorealistic appearance"
        ]
      },
      {
        "id": "fb-ncii-001-near-nudity-restriction",
        "reference": "Content restricted to adults 18+",
        "summary": "Restricts photorealistic and digital imagery depicting near nudity covered only by digital overlay or opaque objects to users 18 and older",
        "quote": "Photorealistic/digital imagery depicting near nudity such as nudity covered only by digital overlay or an opaque object and certain instances of nudity obscured by see-through clothing",
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
          "Content depicts nudity covered only by digital overlay or opaque object",
          "Content shows nudity obscured by see-through clothing"
        ]
      },
      {
        "id": "fb-ncii-001-body-focus-restriction",
        "reference": "Content restricted to adults 18+",
        "summary": "Restricts photorealistic and digital imagery where intimate body parts are the focus of the image to users 18 and older",
        "quote": "Photorealistic/digital imagery of persons where crotch, buttock or female breast(s) are the focus of the image",
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
          "Intimate body parts are the primary focus of the image"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content removal decisions through Facebook's Support Inbox system with multiple review opportunities",
      "steps": [
        "Report is submitted and reviewed by Meta's team",
        "User receives notification of review decision via notifications",
        "Detailed decision information is provided in the Support Inbox",
        "If user disagrees with decision, they can request another review and provide additional information",
        "Meta conducts final review and sends response to Support Inbox",
        "Users can also appeal to the independent Oversight Board for certain cases"
      ]
    }
  },
  {
    "id": "facebook-new-1758649784061-4",
    "reference": "FB-BH-001",
    "title": "Bullying and Harassment Policy",
    "summary": "Policy defining bullying and harassment violations, including protections for minors and different standards for public vs private individuals",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "fb-bh-unwanted-contact",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation",
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
          "Contact is directed at large numbers without prior solicitation"
        ]
      },
      {
        "id": "fb-bh-sexual-activity-statements",
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
        "id": "fb-bh-severe-sexualized-commentary",
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
        "id": "fb-bh-derogatory-sexualized-imagery",
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
        "id": "fb-bh-sexual-activity-attacks",
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
        "id": "fb-bh-private-info-threats",
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
          "Content threatens to release private phone numbers",
          "Content threatens to release residential addresses",
          "Content threatens to release email addresses",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "fb-bh-sexual-activity-claims",
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
          "Content makes claims about sexual activity",
          "Exception: criminal allegations against adults involving non-consensual sexual touching"
        ]
      },
      {
        "id": "fb-bh-adult-sexualization",
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
        "id": "fb-bh-manipulated-imagery",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits unwanted manipulated imagery when self-reported",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
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
            "description": "Self-reporting by the target or authorized representative",
            "example": "Report must be submitted by the person depicted or their authorized representative",
            "reason": "Platform requires confirmation from the target that the content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Content is self-reported by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-romantic-involvement-claims",
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
          "Content makes claims about romantic involvement",
          "Content makes claims about sexual orientation",
          "Content makes claims about gender identity"
        ]
      },
      {
        "id": "fb-bh-unwanted-pages-groups-events",
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
            "description": "Report from target or authorized representative",
            "example": "Report must be submitted by the targeted individual or their authorized representative",
            "reason": "Platform requires confirmation from the target that the content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "fb-bh-public-figure-sexualization",
        "reference": "Additional information and/or context to enforce",
        "summary": "Prohibits content sexualizing a public figure when confirmed unwanted by the target",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from public figure or their representative confirming the content is unwanted",
            "reason": "Platform requires confirmation from the target that sexualizing content is unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "fb-bh-sexually-harassing-contact",
        "reference": "Additional information and/or context to enforce",
        "summary": "Prohibits sexually harassing contact when confirmed unwanted by the recipient",
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
            "description": "Confirmation from recipient or authorized representative that contact is unwanted",
            "example": "Statement from recipient confirming the sexually harassing contact is unwanted",
            "reason": "Platform requires confirmation that the contact is unwanted by the recipient"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content decisions through Facebook's Support Inbox system with multiple review opportunities",
      "steps": [
        "Submit initial report through universal reporting system",
        "Receive notification of review decision via notifications and Support Inbox",
        "Request another review if disagreeing with initial decision",
        "Provide additional information during appeal process",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758649784061-5",
    "reference": "FB-AI-001",
    "title": "Authentic Identity Representation Policy",
    "summary": "Policy governing authentic identity requirements, impersonation prevention, and account integrity measures",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "fb-ai-001-impersonation-images",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits impersonating another person or entity by using their images, name, or likeness with the aim to deceive others",
        "quote": "Impersonate another person or entity by: Using their image(s), name, or likeness with the aim to deceive others",
        "contentTypes": [
          "personal",
          "intimate",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Using another person's images with intent to deceive",
          "Using another person's name or likeness with intent to deceive"
        ]
      },
      {
        "id": "fb-ai-001-unauthorized-representation",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits speaking in the voice of another person or entity without authorization, including by creating unauthorized Pages or Profiles",
        "quote": "Speaking in the voice of another person or entity for whom the user is not authorized to do so (e.g. by creating a Page or Profile)",
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
          "Creating profiles or pages without authorization from the represented person or entity",
          "Speaking on behalf of someone without proper authorization"
        ]
      },
      {
        "id": "fb-ai-001-identity-misrepresentation",
        "reference": "Authentic Identity Representation Policy",
        "summary": "Prohibits identity misrepresentation to mislead or deceive others, evade enforcement, or violate Community Standards",
        "quote": "Engage in identity misrepresentation to mislead or deceive others, evade enforcement, or violate our Community Standards. We consider a number of factors when assessing misleading identity misrepresentation, such as: Repeated or significant changes to identity details, such as name or age; Misleading profile information, such as bio details and profile location; Using stock imagery",
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
          "Repeated or significant changes to identity details",
          "Misleading profile information including bio details and location",
          "Using stock imagery to misrepresent identity",
          "Identity misrepresentation used to evade enforcement",
          "Identity misrepresentation used to violate Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can request another review if they disagree with enforcement decisions. Appeals are handled through the Support Inbox with notifications provided throughout the process.",
      "steps": [
        "User receives notification of enforcement action",
        "User can request review through the Support Inbox if they disagree",
        "User provides additional information to support their appeal",
        "Meta conducts re-review of the content",
        "Final decision is communicated through Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758649784061-6",
    "reference": "FB-CR-001",
    "title": "Copyright Policy and Reporting",
    "summary": "Meta's copyright policy including DMCA procedures, reporting forms, and intellectual property protection measures",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "meta-cr-001-copyright-infringement",
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Copyright ownership or authorized representative status",
            "example": "Only the copyright owner or their authorized representative may file a report",
            "reason": "To verify legitimate ownership of the copyrighted content"
          },
          {
            "description": "Complete copyright claim information",
            "example": "Must include a complete copyright claim in your report",
            "reason": "To provide sufficient information for platform review"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was posted without permission from the copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-cr-002-photo-video-copyright",
        "reference": "Know if you own the copyright to something",
        "summary": "Establishes that creators of original photos and videos own copyright in their work",
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
          "Someone else posted your original photo or video without permission"
        ]
      },
      {
        "id": "meta-cr-003-unauthorized-copying",
        "reference": "Your rights as a copyright owner",
        "summary": "Prohibits copying or distributing copyrighted works without the owner's permission",
        "quote": "As a copyright owner, you have certain rights under the law. These include the right to stop others from copying or distributing your work, or from creating new works based on your work. Copyright infringement generally occurs when a person engages in one of these activities without the copyright owner's permission. For example, when someone uploads your photo or video, they make a copy of that photo or video.",
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
          "Someone copied your copyrighted work without permission",
          "Someone distributed your copyrighted work without permission",
          "Someone uploaded your photo or video without permission"
        ]
      },
      {
        "id": "meta-cr-004-no-permission-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits using someone else's copyrighted work without permission regardless of intent or modifications",
        "quote": "It's possible to infringe someone else's copyright, even if you don't intend to do so. In most cases, you shouldn't use someone else's copyrighted work if you don't have permission. Keep in mind that your use of someone else's content may infringe their copyright, even if you: Gave credit to the copyright owner, Included a disclaimer that you don't intend to infringe copyright, Think that the use is a fair use, Didn't intend to profit from it, Legally bought or downloaded the content, Modified the work or added your own original material to it, Found the content available on the internet, Recorded the content onto your own recording device, Saw that others have posted the same content as well",
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
          "Use of copyrighted content without permission",
          "Infringement occurs regardless of giving credit",
          "Infringement occurs regardless of disclaimers",
          "Infringement occurs regardless of lack of commercial intent",
          "Infringement occurs even if content was legally purchased",
          "Infringement occurs even if content was modified"
        ]
      },
      {
        "id": "meta-cr-005-repeat-infringer-policy",
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
          "Multiple violations of copyright or trademark policies"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/contact/1758255661104383",
      "summary": "Users can appeal content removal by following instructions provided in removal notifications, including DMCA counter-notifications for copyright claims",
      "steps": [
        "Receive notification from Meta about content removal with details of the report",
        "Follow up with the rights owner directly to try to resolve the issue",
        "Submit an appeal using instructions provided in the removal message",
        "For DMCA copyright claims, file a DMCA counter-notification if applicable",
        "Group admins are notified of removals but only the original poster can submit appeals"
      ]
    }
  },
  {
    "id": "facebook-new-1758649784061-7",
    "reference": "FB-AI-002",
    "title": "Account Integrity Policy",
    "summary": "Policy on maintaining safe environment through account restrictions and removals for harmful community behavior",
    "url": "https://transparency.meta.com/policies/community-standards/account-integrity/",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "meta-ai-egregious-violations",
        "reference": "Account Integrity - Egregious Violations",
        "summary": "Restricts or disables accounts that violate Community Standards involving egregious harms, including those referred to law enforcement due to risk of imminent harm",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that: Violate our Community Standards involving egregious harms, including those we refer to law enforcement due to the risk of imminent harm to individual or public safety",
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
          "Violation of Community Standards involving egregious harms",
          "Content that poses risk of imminent harm to individual or public safety"
        ]
      },
      {
        "id": "meta-ai-persistent-violations",
        "reference": "Account Integrity - Persistent Violations",
        "summary": "Restricts or disables accounts that persistently violate Community Standards by posting violating content",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that: Persistently violate our Community Standards by posting violating content and/or managing violating entities or business assets",
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
          "Persistent violation of Community Standards",
          "Repeated posting of violating content",
          "Managing violating entities or business assets"
        ]
      },
      {
        "id": "meta-ai-evasion-prevention",
        "reference": "Account Integrity - Evasion Prevention",
        "summary": "Restricts or disables accounts created to evade previous account removal or contact blocked users",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that are: Created or repurposed to evade a previous account or entity removal, including those assessed to have common ownership and content as previously removed accounts or entities; Created to contact a user that has blocked an account",
        "contentTypes": [
          "intimate",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account created to evade previous removal",
          "Account repurposed to evade enforcement",
          "Common ownership with previously removed accounts",
          "Created to contact users who have blocked another account"
        ]
      },
      {
        "id": "meta-ai-sex-offender-restriction",
        "reference": "Account Integrity - Sex Offender Restrictions",
        "summary": "Restricts or disables accounts owned by convicted sex offenders",
        "quote": "We will work to restrict or disable accounts or other entities (Pages, groups, events), or business assets (Business Managers, ad accounts) that engage in off-platform activity that can lead to harm on our platform, including those: Owned by a convicted sex offender, convicted of offences related to the sexual abuse of children or adults",
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
          "Account owned by convicted sex offender",
          "Conviction related to sexual abuse of children or adults",
          "Off-platform activity that can lead to harm on platform"
        ]
      },
      {
        "id": "meta-ai-compromised-accounts",
        "reference": "Account Integrity - Compromised Accounts",
        "summary": "May request additional information to verify ownership of compromised accounts",
        "quote": "In the following scenarios, we may request additional information about an account to ascertain ownership and/or permissible activity: Compromised accounts",
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
        "evidenceRequirements": [
          {
            "description": "Additional information to verify account ownership",
            "example": "Identity verification documents or account recovery information",
            "reason": "To ascertain legitimate ownership of compromised accounts"
          }
        ],
        "removalCriteria": [
          "Account has been compromised",
          "Unable to verify legitimate ownership"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal enforcement decisions through the Support Inbox and request additional review if they believe the decision was incorrect",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for additional review",
        "Provide additional context or information",
        "Receive final decision notification in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758649784061-8",
    "reference": "FB-US-001",
    "title": "Meta United States Regional Privacy Notice",
    "summary": "US-specific privacy notice detailing consumer privacy rights, data handling practices, and legal compliance under US privacy laws",
    "url": "https://www.facebook.com/privacy/policies/uso/",
    "accessTimestamp": "2025-09-23T17:49:44.061Z",
    "policies": [
      {
        "id": "fb-us-001-personal-info-collection",
        "reference": "Categories of Personal Information",
        "summary": "Collects photos and videos which may include face imagery as personal information",
        "quote": "Photos and videos, which may include face imagery",
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
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-audio-visual-collection",
        "reference": "Categories of Personal Information",
        "summary": "Collects audio or visual information including photos, videos, and voice recordings",
        "quote": "Audio or visual information, including photos, videos, and voice recordings",
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
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-face-imagery-sensitive",
        "reference": "Sensitive Personal Information",
        "summary": "Treats face imagery or voice recordings which may be used to identify you as sensitive personal information",
        "quote": "Face imagery or voice recordings which may be used to identify you when you use relevant features",
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
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-message-content-sensitive",
        "reference": "Sensitive Personal Information",
        "summary": "Considers the content of messages you send and receive as sensitive personal information under CCPA",
        "quote": "The content of messages you send and receive, which are considered sensitive personal information under CCPA",
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
        "removalCriteria": []
      },
      {
        "id": "fb-us-001-deletion-right",
        "reference": "Right to Request Deletion",
        "summary": "Provides users the right to request deletion of personal information that has been collected from or about them",
        "quote": "Right to Request Deletion: The right to request that we delete your Personal Information that we have collected from or about you",
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
          "Personal Information has been collected from or about the user"
        ]
      },
      {
        "id": "fb-us-001-correction-right",
        "reference": "Right to Request Correction",
        "summary": "Provides users the right to request correction of inaccurate personal information",
        "quote": "Right to Request Correction: The right to request that we correct inaccurate Personal Information that we maintain about you",
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
          "Personal Information maintained is inaccurate"
        ]
      },
      {
        "id": "fb-us-001-targeted-advertising-opt-out",
        "reference": "Right to Opt Out of Targeted Advertising",
        "summary": "Provides users the right to opt out of processing personal information for targeted advertising purposes",
        "quote": "Right to Opt Out of Targeted Advertising: The right to opt out of the processing of your Personal Information for purposes that may be considered \"targeted advertising\" under applicable U.S. privacy laws, including information obtained from your activities on nonaffiliated websites or online applications",
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
          "Personal Information is being processed for targeted advertising purposes"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can submit requests to exercise privacy rights and appeal consumer rights actions through a webform, with identity verification required",
      "steps": [
        "Visit the webform at help.meta.com/support/privacy",
        "Submit request to exercise rights or appeal a consumer rights action",
        "Provide identity verification if required (may include government issued ID)",
        "If using an authorized agent, provide additional verification information"
      ]
    }
  }
],
};
