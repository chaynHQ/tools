import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law that criminalizes nonconsensual publication of intimate images and requires covered platforms to implement notice-and-removal processes. Signed into law on May 19, 2025 as Public Law No. 119-12.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659236640-0",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community standards that apply to Facebook, Instagram, Messenger and Threads, covering content policies including non-consensual intimate imagery, harassment, and content removal.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659236640-1",
    "reference": "IG-TOS",
    "title": "Instagram Terms of Use",
    "summary": "Instagram's terms of service outlining user obligations, content licensing, and platform rules.",
    "url": "https://help.instagram.com/581066165581870/",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
    "policies": [
      {
        "id": "ig-tos-private-confidential-info",
        "reference": "Section 4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
          "Content contains someone else's private or confidential information",
          "Information was posted without permission from the person depicted"
        ]
      },
      {
        "id": "ig-tos-impersonation",
        "reference": "Section 4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
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
          "User is impersonating someone they are not",
          "Account was created for someone else without express permission"
        ]
      },
      {
        "id": "ig-tos-intellectual-property",
        "reference": "Section 4.2",
        "summary": "Prohibits violating intellectual property rights including copyright infringement",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods). You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent you own or have obtained all necessary rights to the content you post or share.",
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
          "Content violates intellectual property rights",
          "User does not own or have necessary rights to the posted content",
          "Content infringes copyright without applicable legal exceptions"
        ]
      },
      {
        "id": "ig-tos-content-removal-authority",
        "reference": "Section 6",
        "summary": "Allows removal of content that violates Terms of Use, policies, or Community Standards",
        "quote": "We can remove any content or information you share on the Service if we believe that it violates these Terms of Use, our policies (including our Community Standards), or we are permitted or required to do so by law.",
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
          "Content violates Terms of Use",
          "Content violates Instagram policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-tos-account-termination",
        "reference": "Section 6",
        "summary": "Allows account termination for Terms violations, policy violations, or repeated intellectual property infringement",
        "quote": "We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your access to the Meta Products and Meta Company Products) immediately to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies (including our Community Standards), if you repeatedly infringe other people's intellectual property rights, or where we are permitted or required to do so by law.",
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
          "User creates risk or legal exposure for Instagram",
          "User violates Terms of Use or policies including Community Standards",
          "User repeatedly infringes other people's intellectual property rights",
          "Action is permitted or required by law"
        ]
      },
      {
        "id": "ig-tos-deletion-timeframe",
        "reference": "Section 6",
        "summary": "Provides timeframes for content deletion process",
        "quote": "When you request to delete content or your account, the deletion process will automatically begin no more than 30 days after your request. It may take up to 90 days to delete content after the deletion process begins. While the deletion process for such content is being undertaken, the content is no longer visible to other users, but remains subject to these Terms of Use and our Privacy Policy. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request"
          },
          "removal": {
            "value": 90,
            "unit": "days",
            "description": "Up to 90 days to delete content after deletion process begins, plus up to another 90 days to remove from backups"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests content or account deletion"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659236640-2",
    "reference": "IG-COPYRIGHT",
    "title": "Instagram Copyright Policy",
    "summary": "Instagram's copyright infringement reporting and DMCA takedown procedures for protecting intellectual property rights.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "Copyright Policy",
        "summary": "Prohibits posting content that violates someone else's copyright without permission",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Copyright infringement report form must be completed",
            "example": "Use the provided reporting form to submit your claim",
            "reason": "Required for Instagram to process copyright violation claims"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid copyright infringement report has been submitted"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "Repeat Infringement Policy",
        "summary": "Takes action against accounts that repeatedly post content violating intellectual property rights",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
        "contentTypes": [
          "personal",
          "intimate",
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
          "Multiple instances of intellectual property violations on the same account",
          "Pattern of posting content that infringes others' rights"
        ]
      },
      {
        "id": "ig-copyright-counter-notification",
        "reference": "DMCA Counter-Notification Process",
        "summary": "Provides process for users to dispute copyright takedown actions through DMCA counter-notifications",
        "quote": "How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications",
        "contentTypes": [
          "personal",
          "intimate",
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
      }
    ],
    "appealProcess": {
      "url": "https://www.instagram.com/help/ipreporting/report/copyright/",
      "summary": "Users can submit DMCA counter-notifications to dispute copyright takedown actions and retract intellectual property reports they have submitted",
      "steps": [
        "Submit a DMCA counter-notification through Instagram's process",
        "Retract an intellectual property report that you've submitted to Instagram or Threads"
      ]
    }
  },
  {
    "id": "instagram-new-1758659236640-3",
    "reference": "IG-IP",
    "title": "Instagram Intellectual Property Policy",
    "summary": "Comprehensive policy on protecting intellectual property rights including copyright and trademark violations.",
    "url": "https://help.instagram.com/535503073130320/",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
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
    "summary": "Guidance for users on reporting and addressing non-consensual sharing of intimate images.",
    "url": "https://help.instagram.com/1769410010008691/",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758665752160-0",
    "reference": "META-PRIVACY",
    "title": "Meta Privacy Policy",
    "summary": "Comprehensive privacy policy covering Facebook, Instagram, Messenger and other Meta products, detailing data collection, use, and sharing practices.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
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
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information",
      "steps": [
        "Contact Meta online through the help center",
        "Alternatively, contact by mail at Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer or local Data Protection Authority"
      ]
    }
  },
  {
    "id": "instagram-new-1758665752160-1",
    "reference": "IG-HARASSMENT",
    "title": "Instagram Harassment and Bullying Reporting",
    "summary": "Dedicated reporting mechanism and policy for harassment and bullying content on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
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
    "summary": "Detailed policy on bullying and harassment across Meta platforms including specific protections for minors and private individuals.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T22:15:52.160Z",
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
    "appealProcess": {
      "url": null,
      "summary": "Meta provides an appeals process where users can request another review if they disagree with enforcement decisions. Appeals are submitted through the Support Inbox and users receive notifications about review decisions.",
      "steps": [
        "User receives notification of enforcement action",
        "User can request another review through the Support Inbox",
        "User provides additional information if desired",
        "Meta conducts re-review of the content",
        "Final decision is communicated to user through Support Inbox"
      ]
    }
  }
],
};
