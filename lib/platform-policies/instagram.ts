import { PlatformPolicies } from '../../types/platforms';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law that criminalizes nonconsensual publication of intimate images (including AI-generated deepfakes) and requires covered platforms to implement notice-and-removal processes within one year of enactment. Signed into law on May 19, 2025 as Public Law No. 119-12.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
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
          "Content depicts an identifiable minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-deepfake-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digitally forged intimate visual depictions of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
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
          "Content is a digital forgery published without consent",
          "Content was not voluntarily exposed by the individual in a public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-deepfake-minors",
        "reference": "Section 2(h)(3)(B)",
        "summary": "Prohibits knowingly publishing digitally forged intimate visual depictions of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
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
          "Content is a digital forgery depicting an identifiable minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-platform-removal",
        "reference": "Section 3(a)(3)",
        "summary": "Requires covered platforms to remove nonconsensual intimate visual depictions within 48 hours of receiving a valid removal request and make reasonable efforts to identify and remove identical copies",
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
            "reason": "To verify the identity of the person making the request"
          },
          {
            "description": "Identification of and information reasonably sufficient to locate the intimate visual depiction",
            "example": "URL or specific location of the content on the platform",
            "reason": "To enable the platform to locate the specific content for removal"
          },
          {
            "description": "Brief statement of good faith belief that the intimate visual depiction is not consensual",
            "example": "Statement explaining why the content was published without consent",
            "reason": "To establish that the content violates the platform's policies"
          },
          {
            "description": "Contact information sufficient to enable platform communication",
            "example": "Email address or phone number",
            "reason": "To allow the platform to communicate about the removal request"
          }
        ],
        "removalCriteria": [
          "Valid removal request received from identifiable individual or authorized person",
          "Request includes required signature, content identification, good faith statement, and contact information",
          "Content is an intimate visual depiction published without consent"
        ]
      },
      {
        "id": "take-it-down-threats-authentic",
        "reference": "Section 2(h)(6)(A)",
        "summary": "Prohibits intentionally threatening to publish authentic intimate visual depictions for purposes of intimidation, coercion, extortion, or to create mental distress",
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
          "Threat made for purpose of intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "take-it-down-threats-deepfake",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to publish digitally forged intimate visual depictions for purposes of intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both. Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
        "contentTypes": [
          "intimate"
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
          "Intentional threat to publish digitally forged intimate visual depictions",
          "Threat made for purpose of intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "take-it-down-notice-process-requirement",
        "reference": "Section 3(a)(1)(A)",
        "summary": "Requires covered platforms to establish a process allowing an identifiable individual or their authorized representative to notify the platform of a nonconsensual intimate visual depiction and request its removal",
        "quote": "a covered platform shall establish a process whereby an identifiable individual (or an authorized person acting on behalf of such individual) may— (i) notify the covered platform of an intimate visual depiction published on the covered platform that— (I) includes a depiction of the identifiable individual; and (II) was published without the consent of the identifiable individual; and (ii) submit a request for the covered platform to remove such intimate visual depiction.",
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
          "Content depicts the identifiable individual",
          "Content was published without the consent of the identifiable individual"
        ]
      },
      {
        "id": "take-it-down-notice-of-process",
        "reference": "Section 3(a)(2)",
        "summary": "Requires covered platforms to provide clear and conspicuous notice of the removal request process, in plain language, describing platform responsibilities and how to submit a removal request",
        "quote": "A covered platform shall provide on the platform a clear and conspicuous notice, which may be provided through a clear and conspicuous link to another web page or disclosure, of the notice and removal process established under paragraph (1)(A) that— (A) is easy to read and in plain language; and (B) provides information regarding the responsibilities of the covered platform under this section, including a description of how an individual can submit a notification and request for removal.",
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
        "removalCriteria": []
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659236640-0",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community standards that apply to Facebook, Instagram, Messenger and Threads, covering content policies including non-consensual intimate imagery, harassment, and content removal. As of November 12, 2024, this replaced separate Instagram Community Guidelines with one unified policy set. Applies to all types of content including AI-generated content.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual sharing of intimate images",
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
        "summary": "Prohibits bullying and harassment that degrades others and violates dignity",
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
          "Content constitutes bullying or harassment",
          "Content degrades others",
          "Content violates dignity"
        ]
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates personal privacy",
          "Content shares personal information without consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresenting identity and requires authentic representation",
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
          "Content misrepresents identity",
          "Account or content is inauthentic"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including impersonation and misrepresentation",
        "quote": "Inauthentic Behavior",
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
          "Behavior is inauthentic",
          "Content involves impersonation or misrepresentation"
        ]
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
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content infringes third-party intellectual property rights",
          "Content uses copyrighted material without permission"
        ]
      },
      {
        "id": "meta-cs-cybersecurity",
        "reference": "Cybersecurity",
        "summary": "Addresses cybersecurity violations including unauthorized access to accounts",
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
          "Content accessed through unauthorized means"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "DIGNITY",
        "summary": "Requires respect for dignity of others and prohibits harassment or degradation",
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
          "Content fails to respect dignity of others",
          "Content harasses or degrades others"
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates personal privacy",
          "Content shared without consent",
          "Content prevents freedom to choose when and how to share"
        ]
      },
      {
        "id": "meta-cs-safety-principle",
        "reference": "SAFETY",
        "summary": "Removes content that threatens people or could contribute to physical security risks",
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
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content could contribute to risk of harm to physical security",
          "Content threatens people",
          "Content has potential to intimidate, exclude or silence others"
        ]
      },
      {
        "id": "meta-cs-authenticity-principle",
        "reference": "AUTHENTICITY",
        "summary": "Prohibits misrepresentation of identity or activity to ensure content authenticity",
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
          "Content misrepresents who a person is",
          "Content misrepresents what a person is doing"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659236640-3",
    "reference": "IG-IP",
    "title": "Instagram Intellectual Property Policy",
    "summary": "Comprehensive policy on protecting intellectual property rights including copyright and trademark violations, and reporting procedures.",
    "url": "https://help.instagram.com/535503073130320/",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "ig-ip-copyright",
        "reference": "Copyright Section",
        "summary": "Prohibits posting content that violates someone else's copyright, including original works of authorship such as images",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. Copyright is a legal right that seeks to protect original works of authorship (example: books, music, film, art). Generally, copyright protects original expression such as words or images.",
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
          "Content violates someone else's copyright",
          "Content contains original works of authorship without permission",
          "Content includes original expression such as images without authorization"
        ]
      },
      {
        "id": "ig-ip-trademark",
        "reference": "Trademark Section",
        "summary": "Prohibits posting content that violates someone else's trademark rights, including unauthorized use of distinguishing words, symbols or designs",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. A trademark is a word, slogan, symbol or design (example: brand name, logo) that distinguishes the products or services offered by one person, group or company from another.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates someone else's trademark rights",
          "Content uses distinguishing words, slogans, symbols or designs without authorization",
          "Content causes confusion about who provides or is affiliated with a product or service"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659236640-4",
    "reference": "IG-NCII-HELP",
    "title": "Instagram Non-Consensual Intimate Images Help",
    "summary": "Guidance for users on reporting and addressing non-consensual sharing of intimate images, including how Instagram's Community Operations team reviews and removes reported images and uses photo-matching technology to prevent re-sharing.",
    "url": "https://help.instagram.com/1769410010008691/",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "ig-ncii-community-standards",
        "reference": "Community Standards",
        "summary": "Prohibits intimate photos that violate Community Standards and enables anonymous reporting for removal",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards.",
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
            "description": "Screenshot or record of the post",
            "example": "Screenshot of the intimate image post for reporting purposes",
            "reason": "Required for reporting and potential legal action"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Content is reported through built-in reporting system",
          "Content is reviewed by specially trained Community Operations team"
        ]
      },
      {
        "id": "ig-ncii-threats-sextortion",
        "reference": "Threats and Sextortion",
        "summary": "Prohibits threatening to share private content or demanding money/actions in exchange for not sharing private content",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
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
            "description": "Report the threatening profile through built-in reporting",
            "example": "Profile making threats to share private content or demanding payment",
            "reason": "Enables platform to take action against threatening behavior"
          }
        ],
        "removalCriteria": [
          "User is threatening to share private content",
          "User is demanding money to prevent sharing private content",
          "User is asking victim to perform uncomfortable actions"
        ]
      },
      {
        "id": "ig-ncii-photo-matching",
        "reference": "Photo-matching Technology",
        "summary": "Uses photo-matching technology to prevent future sharing of removed intimate images across Instagram, Facebook and Messenger",
        "quote": "We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
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
          "Image has been previously removed for violating Community Standards",
          "Photo-matching technology identifies attempts to reshare the same image"
        ]
      },
      {
        "id": "ig-ncii-non-account-holder-reporting",
        "reference": "Reporting without an Account",
        "summary": "Allows individuals without an Instagram account to report violating content with the help of a friend who has an account",
        "quote": "If you don't have an Instagram account, you can report things with the help of a friend.",
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
            "description": "Enlist a friend with an Instagram account to submit the report on your behalf",
            "example": "A friend reports the violating post using their own Instagram account",
            "reason": "Reporting tools require an active Instagram account to submit a report"
          }
        ],
        "removalCriteria": [
          "Content is reported via a friend's Instagram account on behalf of someone without an account"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758665752160-0",
    "reference": "META-PRIVACY",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive privacy policy covering Facebook, Instagram, Messenger and other Meta products, detailing data collection, use, and sharing practices. Effective December 16, 2025, this update expanded use of AI chat interactions for ad personalization while excluding sensitive topics like religion, health, and politics from targeting.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "meta-privacy-safety-integrity",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and provides for content removal when reported",
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
          "Content threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-privacy-legal-requests",
        "reference": "Section 10 - How do we respond to legal requests, comply with applicable law and prevent harm?",
        "summary": "Provides for information access and preservation in response to legal requests and to prevent harm",
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
        "id": "meta-privacy-account-deletion",
        "reference": "Section 6 - How can you manage or delete your information and exercise your rights?",
        "summary": "Allows users to delete their information or account",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. Delete your information or account.",
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
        "id": "meta-privacy-oversight-board-review",
        "reference": "Why and how we process your information - Promoting safety, integrity and security",
        "summary": "Provides for independent review of certain content violation decisions through the Oversight Board",
        "quote": "Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board",
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
          "Content found to violate terms or policies",
          "Decision subject to independent Oversight Board review in some cases"
        ]
      },
      {
        "id": "meta-privacy-law-enforcement-disclosure",
        "reference": "Why and how we process your information - Processing information when required by law",
        "summary": "Provides for disclosure of user information to regulators or law enforcement in response to valid legal requests",
        "quote": "For processing information when the law requires it: Where we are under an obligation to disclose information such as, for example, if we receive a valid legal request for certain information such as a search warrant, we will access, preserve and/or share your information with regulators, law enforcement or others.",
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
          "Valid legal request received (e.g., search warrant)",
          "Legal obligation to disclose information"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758665752160-1",
    "reference": "IG-HARASSMENT",
    "title": "Instagram Harassment and Bullying Reporting",
    "summary": "Dedicated reporting mechanism and policy for harassment and bullying content on Instagram, including guidance on reporting abusive images, comments, and accounts established to bully or harass others.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-accounts",
        "reference": null,
        "summary": "Prohibits accounts established with the intent of bullying or harassing another person",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account is established with the intent of bullying or harassing another person"
        ]
      },
      {
        "id": "ig-harassment-bullying-content",
        "reference": null,
        "summary": "Prohibits photos or comments intended to bully or harass someone",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
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
          "Photo or comment is intended to bully or harass someone"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758665752160-2",
    "reference": "META-BULLYING-POLICY",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Detailed policy on bullying and harassment across Meta platforms including specific protections for minors and private individuals, and provisions on content meant to degrade or shame including claims about sexual activity.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "meta-bullying-unwanted-contact",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation",
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
        "id": "meta-bullying-sexual-activity-statements",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity"
        ]
      },
      {
        "id": "meta-bullying-severe-sexualized-commentary",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits severe sexualized commentary",
        "quote": "Severe sexualized commentary.",
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
          "Content contains severe sexualized commentary"
        ]
      },
      {
        "id": "meta-bullying-derogatory-sexualized-imagery",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits derogatory sexualized photoshop or drawings",
        "quote": "Derogatory sexualized photoshop or drawings",
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
          "Content contains derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-bullying-sexual-activity-terms",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "meta-bullying-private-info-threats",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
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
          "Content contains threats to release private phone numbers",
          "Content contains threats to release residential addresses",
          "Content contains threats to release email addresses",
          "Content contains threats to release medical records"
        ]
      },
      {
        "id": "meta-bullying-bodily-functions-degradation",
        "reference": "Tier 1: Universal protections for everyone",
        "summary": "Prohibits content that degrades or expresses disgust toward individuals depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
        "quote": "Content that degrades or expresses disgust toward individuals who are depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
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
          "Content degrades individuals depicted during bodily functions",
          "Content expresses disgust toward individuals depicted during bodily functions"
        ]
      },
      {
        "id": "meta-bullying-sexual-activity-claims-minors-adults",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits claims about sexual activity, except in the context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
          "Content makes claims about sexual activity",
          "Exception: criminal allegations against adults involving non-consensual sexual touching"
        ]
      },
      {
        "id": "meta-bullying-adult-sexualization",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content sexualizing another adult",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
          "Content sexualizes another adult"
        ]
      },
      {
        "id": "meta-bullying-manipulated-physical-characteristics",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
        "contentTypes": [
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
          "Content is manipulated to negatively highlight specific physical characteristics"
        ]
      },
      {
        "id": "meta-bullying-physical-bullying-depiction",
        "reference": "Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures",
        "summary": "Prohibits content that degrades individuals who are depicted being physically bullied",
        "quote": "Content that degrades individuals who are depicted being physically bullied (except in fight-sport contexts).",
        "contentTypes": [
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
          "Content degrades individuals depicted being physically bullied",
          "Exception: fight-sport contexts"
        ]
      },
      {
        "id": "meta-bullying-romantic-involvement-claims",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
        "contentTypes": [
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
          "Content makes claims about romantic involvement",
          "Content makes claims about sexual orientation",
          "Content makes claims about gender identity"
        ]
      },
      {
        "id": "meta-bullying-unwanted-manipulated-imagery",
        "reference": "Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures",
        "summary": "Prohibits unwanted manipulated imagery when self-reported",
        "quote": "Unwanted manipulated imagery.",
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
            "description": "Self-reporting by the target or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated imagery",
            "reason": "Required for enforcement of this protection"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Content is self-reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bullying-unwanted-pages-groups-events",
        "reference": "Additional information and/or context to enforce",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
        "evidenceRequirements": [
          {
            "description": "Report from the target or authorized representative",
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
        "id": "meta-bullying-unwanted-content-confirmation",
        "reference": "Additional information and/or context to enforce",
        "summary": "Removes content where the target is directly targeted and confirmation is received that the content is unwanted",
        "quote": "Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target (for example: the target is tagged in the post or comment). We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from the target or authorized representative that content is unwanted",
            "example": "Written confirmation that the targeted individual does not want the content posted",
            "reason": "Required to verify the content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Target is directly targeted (e.g., tagged in post or comment)",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "meta-bullying-public-figure-sexualization",
        "reference": "Additional information and/or context to enforce",
        "summary": "Removes content sexualizing a public figure when confirmation is received that the content is unwanted",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
        "evidenceRequirements": [
          {
            "description": "Confirmation from the public figure or authorized representative that content is unwanted",
            "example": "Written confirmation from the public figure that they do not want the sexualizing content posted",
            "reason": "Required to verify the content is unwanted by the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Confirmation received from target or authorized representative that content is unwanted"
        ]
      },
      {
        "id": "meta-bullying-sexual-harassment-contact",
        "reference": "Additional information and/or context to enforce",
        "summary": "Removes sexually harassing contact when confirmation is received that the contact is unwanted",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
        "evidenceRequirements": [
          {
            "description": "Confirmation from the recipient or authorized representative that contact is unwanted",
            "example": "Written confirmation that the recipient does not want the sexually harassing contact",
            "reason": "Required to verify the contact is unwanted by the recipient"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Confirmation received from recipient or authorized representative that contact is unwanted"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1783174185618-0",
    "reference": "META-NCII-REPORT",
    "title": "Report Non-Consensual Intimate Images (NCII) on Meta Platforms",
    "summary": "Meta Help Center policy page detailing how to report Non-Consensual Intimate Images (NCII) across Meta platforms, including Instagram Direct, referencing StopNCII.org for adults and TakeItDown.NCMEC.org for minors, and specialized reporting forms for US residents.",
    "url": "https://www.meta.com/help/policies/1437976901029950/",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "What is NCII?",
        "summary": "Prohibits sharing or threatening to share intimate images, including deepfakes, without the consent of the person(s) depicted.",
        "quote": "Non-Consensual Intimate Images (NCII) are photos or videos that show intimate or sexually explicit acts and are shared without the consent of the person(s) depicted. This includes images that may have been shared privately but are now being distributed publicly without permission. Sharing or threatening to share intimate images (including deepfakes) without consent is prohibited under Meta's Community Standards.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content depicts intimate or sexually explicit acts",
          "Content was shared without the consent of the person(s) depicted",
          "Content includes deepfakes depicting intimate or sexually explicit acts without consent",
          "Content was originally shared privately but is now distributed publicly without permission"
        ]
      },
      {
        "id": "meta-ncii-reporting-form",
        "reference": "Report NCII on Facebook, Instagram, Threads and Meta AI",
        "summary": "Provides a reporting mechanism to flag content believed to be non-consensual intimate imagery directly from the content itself.",
        "quote": "You can access the reporting form directly from the content that you want to report.",
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
            "description": "Location of the specific content being reported",
            "example": "The image or post URL/location within the platform",
            "reason": "Needed to identify and review the specific content for removal"
          }
        ],
        "removalCriteria": []
      },
      {
        "id": "meta-ncii-no-account-reporting",
        "reference": "Report NCII on Facebook, Instagram, Threads and Meta AI",
        "summary": "Allows individuals without a Meta account, or their authorized representatives, to report intimate images of themselves shared without consent using a dedicated reporting form.",
        "quote": "If you don't have an account on our services, you (or your authorized representative) can still report images of yourself shared without consent through the dedicated NCII Reporting Form",
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
            "description": "Completed NCII Reporting Form",
            "example": "Form submission identifying the images and confirming lack of consent",
            "reason": "Required to process reports from individuals without Meta accounts"
          }
        ],
        "removalCriteria": [
          "Images depict the reporting individual",
          "Images were shared without the depicted person's consent"
        ]
      },
      {
        "id": "meta-ncii-review-removal",
        "reference": "What Happens After You Report",
        "summary": "Commits to reviewing NCII reports promptly and removing content confirmed to violate the NCII policy, including banking violating images to prevent re-sharing.",
        "quote": "Review: We will review your report as quickly as possible.\n- Content Removal: If the content violates our NCII policy, it will be removed. Where technically feasible, we will bank the violating image to search for and remove identical copies and help prevent re-sharing.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Reports will be reviewed as quickly as possible; no specific timeframe stated"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is found to violate Meta's NCII policy upon review"
        ]
      },
      {
        "id": "meta-ncii-support-privacy",
        "reference": "What Happens After You Report",
        "summary": "Ensures reporter confidentiality and offers support resources to individuals affected by non-consensual intimate imagery.",
        "quote": "Support Resources: You may be offered additional support, including links to organizations that help victims of NCII.\n- Privacy: Your identity will be kept confidential throughout the process.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-ncii-direct-messenger-reporting",
        "reference": "Report NCII on Instagram Direct and Messenger",
        "summary": "Allows users to report abusive photos, videos, and messages sent via Instagram Direct or Messenger that violate Community Standards, including non-consensual intimate imagery.",
        "quote": "You (or your authorized representative) can report abusive photos, videos and messages that are sent to you on Instagram Direct or Messenger if you think they go against our Community Standards.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identification of the specific message, photo, or video within the conversation",
            "example": "The message or content flagged within the chat thread",
            "reason": "Needed to locate and review the reported content"
          }
        ],
        "removalCriteria": []
      },
      {
        "id": "meta-conversation-reporting",
        "reference": "Report a conversation",
        "summary": "Allows users to report an entire one-on-one conversation, enabling review of messages, photos, videos, and the individual involved.",
        "quote": "If you have a conversation with one other person, you can report the entire chat you have with them.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identification of the conversation/chat to be reported",
            "example": "The specific one-on-one chat thread",
            "reason": "Needed to enable review of the reported conversation"
          }
        ],
        "removalCriteria": []
      },
      {
        "id": "meta-message-review-scope",
        "reference": "Keep in mind",
        "summary": "Explains that up to 30 of the most recent messages in a reported conversation may be reviewed, including deleted, unsent, or edited messages if surrounding context is reported.",
        "quote": "Instagram Direct and Messenger may review up to 30 of the most recent messages sent in reported conversations.\n2. Your report is anonymous, except if you're reporting an intellectual property infringement. The account you reported won't see who reported them.\n3. Deleted, unsent or edited messages could be included in a report if the entire chat or a surrounding message is reported.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-messenger-review-removal",
        "reference": "What Happens After You Report (Messenger/Direct)",
        "summary": "Commits to reviewing reports on Instagram Direct and Messenger promptly and removing content that violates Community Standards, including banking violating images to prevent re-sharing.",
        "quote": "Review: We will review your report as quickly as possible.\n- Content Removal: If the content violates our Community Standards, it will be removed. Where technically feasible, we will bank the violating image to search for and remove identical copies and help prevent re-sharing.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "impersonation",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Reports will be reviewed as quickly as possible; no specific timeframe stated"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is found to violate Meta's Community Standards upon review"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1783175874528-2",
    "reference": "META-NCII-SAFETY",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Safety Center resource explaining Meta's approach to non-consensual intimate images and sextortion, including StopNCII.org integration, hash-matching technology, and prevention resources across Meta platforms.",
    "url": "https://www.meta.com/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2026-07-04T14:37:54.528Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition-sharing-threatening",
        "reference": "META-NCII-SAFETY - Intro",
        "summary": "Prohibits sharing or threatening to share intimate images without the depicted person's consent.",
        "quote": "Sharing—or threatening to share—intimate images without consent is against Meta policies.",
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
          "Content shares intimate images without the depicted person's consent.",
          "Content includes a threat to share intimate images without consent."
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "META-NCII-SAFETY - Meta's work to combat sextortion",
        "summary": "Prohibits using threats to share someone's intimate images to coerce them into unwanted actions, such as sending money, additional images, or engaging in sexual contact.",
        "quote": "If someone tries to use a personal intimate image as a threat to make you do something you don't want to do—like send money, additional images or have sexual contact—that is a crime known as sextortion.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content or communication uses an intimate image as leverage to coerce the victim.",
          "Behavior involves threats to share intimate images to extract money, more images, or sexual contact."
        ]
      },
      {
        "id": "meta-exploitation-content-behavior-rules",
        "reference": "META-NCII-SAFETY - Our policies and enforcement",
        "summary": "Prohibits content or behavior that exploits people, including sharing or threatening to share someone's intimate images, and takes action upon becoming aware of violations.",
        "quote": "We have strict rules against content or behavior that exploits people, including sharing or threatening to share someone's intimate images. We encourage anyone who sees content they think breaks our rules to report it—and we have a dedicated reporting option to use if someone is sharing private images. When we become aware of this content, we work to take action.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "A report identifying the violating content.",
            "example": "Use the dedicated reporting option for shared private images.",
            "reason": "Enables Meta's teams to review and take action on the reported content."
          }
        ],
        "removalCriteria": [
          "Content or behavior exploits a person.",
          "Content shares or threatens to share someone's intimate images."
        ]
      },
      {
        "id": "meta-specialized-teams-detection-removal",
        "reference": "META-NCII-SAFETY - Our policies and enforcement",
        "summary": "Identifies and removes accounts and content associated with sextortion patterns, including through automated detection and dedicated investigative teams, and reports offenders to law enforcement where appropriate.",
        "quote": "We have specialized teams working on combating sextortion. We have identified patterns associated with this behavior, and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Accounts or content match identified sextortion behavior patterns.",
          "Automated systems detect accounts engaged in this abuse at scale."
        ]
      },
      {
        "id": "meta-message-request-restrictions",
        "reference": "META-NCII-SAFETY - How we prevent unwanted contact",
        "summary": "Restricts unconnected users from sending images, videos, or voice notes to people before a message request is accepted, limiting potential vectors for image-based abuse.",
        "quote": "We limit the message requests people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos, or voice notes in message requests until the recipient accepts the request to chat.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Message request sent from a non-connected account contains images, videos, or voice notes before acceptance."
        ]
      },
      {
        "id": "meta-report-nonconsensual-images",
        "reference": "META-NCII-SAFETY - How to report threats and intimate images shared without permission",
        "summary": "Allows reporting of nude or sexual images/videos of oneself, or threats to share such content, so that Meta can prevent them from being shared or reshared, with review conducted continuously across many languages.",
        "quote": "You can report nude or sexual photos or videos of yourself or threats to share these images or videos to our apps or technologies to prevent them from being reshared. Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behavior.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": null,
            "unit": "hours",
            "description": "Reports are reviewed 24/7, indicating continuous around-the-clock review, though no specific response time is guaranteed."
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "A report submitted via the platform-specific reporting tool identifying the intimate image or threat.",
            "example": "Reporting through Instagram, Facebook, Threads, Messenger, or WhatsApp report flows.",
            "reason": "Enables Meta's review teams to assess and act on violating content or behavior."
          }
        ],
        "removalCriteria": [
          "Content is a nude or sexual photo or video of the reporting individual shared without permission.",
          "Content or communication constitutes a threat to share such images or videos."
        ]
      },
      {
        "id": "meta-stopncii-hash-matching-adults",
        "reference": "META-NCII-SAFETY - StopNCII.org - Over 18",
        "summary": "Enables adults to proactively prevent circulation of their intimate images by creating a secure digital fingerprint (hash) that participating platforms use to detect and prevent sharing of matching images.",
        "quote": "The tool uses hash-generating technology that assigns a unique hash value (a numerical code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Submission of the intimate image to generate a hash via StopNCII.org (image itself is not shared with platforms).",
            "example": "Creating a case at StopNCII.org for an image taken when the individual was over 18.",
            "reason": "Allows participating platforms to detect and block matching non-consensual intimate images without the original image being viewed or stored by the platform."
          }
        ],
        "removalCriteria": [
          "Image hash matches a hash submitted by the individual depicted as an adult in the image."
        ]
      },
      {
        "id": "meta-cross-industry-hash-sharing",
        "reference": "META-NCII-SAFETY - Helping prevent images from spreading online",
        "summary": "Shares hashes of non-consensual intimate images removed from Meta apps with other companies through StopNCII.org to help prevent re-sharing across other platforms.",
        "quote": "soon we will begin to securely share hashes of non-consensual intimate images we've removed from Meta apps with other companies through StopNCII.org This will allow us to help prevent the re-sharing of these images across different online platforms, even if someone hasn't pre-emptively uploaded the hashed image themselves to StopNCII.org",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Non-consensual intimate image has been removed from Meta apps and hashed for cross-platform sharing."
        ]
      },
      {
        "id": "meta-takeitdown-hash-matching-minors",
        "reference": "META-NCII-SAFETY - Take It Down - Under 18",
        "summary": "Enables individuals to prevent circulation of intimate images taken when they were under 18 by submitting a private hash value that participating companies use to block the content from being posted.",
        "quote": "Similar to StopNCII.org, Take It Down assigns a unique hash value (a numerical code) to your image or video privately and without the image or video ever leaving your device or anyone viewing it. Once you submit the hash value to NCMEC, companies like ours can use those hashes to prevent the content from being posted on our apps in the future.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Submission of a hash value generated from the image or video to NCMEC via TakeItDown.NCMEC.org.",
            "example": "A teen, parent, or adult submits a hash for an image taken when the depicted person was under 18.",
            "reason": "Allows Meta and other participating companies to detect and prevent the image from being posted, without requiring the image itself to be shared or viewed."
          }
        ],
        "removalCriteria": [
          "Image or video hash matches a hash submitted by or on behalf of a person who was under 18 in the content."
        ]
      }
    ],
    "appealProcess": null
  }
],
};
