import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law that criminalizes the nonconsensual publication of intimate images, including AI-generated deepfakes, and requires covered platforms to implement notice-and-removal processes for such content.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T20:32:50.429Z",
    "policies": [
      {
        "id": "take-it-down-authentic-adults",
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
          "Intimate visual depiction obtained under circumstances with reasonable expectation of privacy",
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
        "summary": "Requires covered platforms to remove nonconsensual intimate visual depictions within 48 hours of receiving a valid removal request and make reasonable efforts to identify and remove identical copies",
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
            "reason": "To verify identity and authorization"
          },
          {
            "description": "Identification and information sufficient to locate the intimate visual depiction",
            "example": "URL, screenshot, or detailed description of content location",
            "reason": "To enable platform to find and remove the specific content"
          },
          {
            "description": "Brief statement of good faith belief that content is nonconsensual",
            "example": "Statement explaining why the content was published without consent",
            "reason": "To establish that the content violates the policy"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address, phone number, or mailing address",
            "reason": "To enable platform communication regarding the request"
          }
        ],
        "removalCriteria": [
          "Valid removal request received from identifiable individual or authorized person",
          "Content includes depiction of the identifiable individual",
          "Content was published without consent of the identifiable individual"
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content includes depiction of the identifiable individual",
          "Content was published without consent of the identifiable individual"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659570428-0",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community standards that apply to Facebook, Instagram, Messenger and Threads, covering content policies including non-consensual intimate imagery, harassment, impersonation, and content removal procedures.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T20:32:50.429Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and threats to share intimate content",
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
        "removalCriteria": [
          "Content involves adult sexual exploitation",
          "Non-consensual sharing of intimate imagery",
          "Threats to share intimate content"
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
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content constitutes bullying or harassment",
          "Content degrades others",
          "Content violates dignity of individuals"
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
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates personal privacy",
          "Unauthorized sharing of personal information",
          "Content shared without consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and impersonation on the platform",
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
          "Account or content involves impersonation",
          "False representation of who they are"
        ]
      },
      {
        "id": "meta-cs-account-integrity",
        "reference": "Account Integrity",
        "summary": "Prohibits compromised accounts and unauthorized access that could lead to abuse",
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
        "removalCriteria": [
          "Account has been compromised",
          "Unauthorized access to account",
          "Account integrity has been violated"
        ]
      },
      {
        "id": "meta-cs-third-party-ip",
        "reference": "Third-Party Intellectual Property Infringement",
        "summary": "Prohibits infringement of third-party intellectual property including unauthorized use of personal images",
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
        "removalCriteria": [
          "Content infringes third-party intellectual property",
          "Unauthorized use of copyrighted material",
          "Use of content without permission"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior including coordinated efforts to mislead or deceive users",
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
          "Content involves inauthentic behavior",
          "Coordinated efforts to mislead",
          "Deceptive practices"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "Community Standards - Dignity",
        "summary": "Requires respect for dignity of others and prohibits harassment or degradation",
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
          "Content fails to respect dignity of others",
          "Content harasses or degrades others",
          "Content violates equal dignity and rights"
        ]
      },
      {
        "id": "meta-cs-privacy-principle",
        "reference": "Community Standards - Privacy",
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
          "Content violates personal privacy",
          "Content shared without user's choice or consent",
          "Content compromises personal information"
        ]
      },
      {
        "id": "meta-cs-safety-principle",
        "reference": "Community Standards - Safety",
        "summary": "Prohibits content that threatens people or could intimidate, exclude or silence others",
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
          "Content threatens people",
          "Content could contribute to risk of physical harm",
          "Content intimidates, excludes or silences others"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659570428-1",
    "reference": "IG-TOU",
    "title": "Instagram Terms of Use",
    "summary": "Instagram's terms of service governing user conduct, content ownership, intellectual property rights, and platform usage rules.",
    "url": "https://help.instagram.com/581066165581870/",
    "accessTimestamp": "2025-09-23T20:32:50.429Z",
    "policies": [
      {
        "id": "ig-tou-private-confidential",
        "reference": "Section 4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission or doing anything that violates someone else's rights",
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
          "Content was posted without the person's permission",
          "Content violates someone else's rights"
        ]
      },
      {
        "id": "ig-tou-impersonation",
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
          "User is impersonating someone or something they aren't",
          "Account was created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-tou-intellectual-property",
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
          "User does not own or have necessary rights to the content",
          "Content infringes copyright"
        ]
      },
      {
        "id": "ig-tou-content-removal",
        "reference": "Section 6",
        "summary": "Platform can remove content that violates Terms of Use, policies, or Community Standards",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": 30,
            "unit": "days",
            "description": "Deletion process will automatically begin no more than 30 days after request, may take up to 90 days to complete"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Terms of Use",
          "Content violates platform policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-tou-account-termination",
        "reference": "Section 6",
        "summary": "Platform can terminate accounts for policy violations including repeated intellectual property infringement",
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
          "User creates risk or legal exposure for the platform",
          "User violates Terms of Use or policies",
          "User repeatedly infringes other people's intellectual property rights",
          "Action is permitted or required by law"
        ]
      },
      {
        "id": "ig-tou-reporting-misuse",
        "reference": "Section 4.2",
        "summary": "Prohibits interfering with service operation including misusing reporting channels",
        "quote": "You can't do anything to interfere with or impair the intended operation of the Service. This includes misusing any reporting, dispute, or appeals channel, such as by making fraudulent or groundless reports or appeals.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User interferes with or impairs service operation",
          "User misuses reporting, dispute, or appeals channels",
          "User makes fraudulent or groundless reports or appeals"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult the Help Center if they believe their account has been terminated in error, or if they want to disable or permanently delete their account",
      "steps": [
        "Consult Instagram Help Center if account terminated in error",
        "Request account deletion through Help Center if desired",
        "Deletion process begins within 30 days of request",
        "Content becomes invisible to other users during deletion process",
        "Complete deletion may take up to 90 days from start of process"
      ]
    }
  },
  {
    "id": "instagram-new-1758659570428-2",
    "reference": "IG-IP",
    "title": "Instagram Intellectual Property Policy",
    "summary": "Instagram's policy on protecting intellectual property rights, including copyright and trademark violations, with reporting and takedown procedures.",
    "url": "https://help.instagram.com/535503073130320",
    "accessTimestamp": "2025-09-23T20:32:50.429Z",
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates someone else's trademark rights",
          "Content uses trademarked words, slogans, symbols or designs without authorization",
          "Content causes confusion about who provides or is affiliated with a product or service"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659570428-3",
    "reference": "IG-DATA",
    "title": "Instagram Data Policy",
    "summary": "Instagram's privacy policy covering data collection, usage, sharing practices, and user privacy controls.",
    "url": "https://help.instagram.com/155833707900388",
    "accessTimestamp": "2025-09-23T20:32:50.429Z",
    "policies": [
      {
        "id": "ig-data-harmful-conduct",
        "reference": "Section II - Promote safety, integrity and security",
        "summary": "Prohibits harmful conduct and violations of terms or policies, with detection and prevention measures in place",
        "quote": "We use the information we have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences, maintain the integrity of our Products, and promote safety and security on and off of Meta Products. For example, we use data we have to investigate suspicious activity or violations of our terms or policies, or to detect when someone needs help.",
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
          "Harmful conduct is detected",
          "Violations of terms or policies occur",
          "Suspicious activity is identified"
        ]
      },
      {
        "id": "ig-data-content-reporting",
        "reference": "Section III - Content others share or reshare about you",
        "summary": "Provides ability to report content shared about you by others when you are uncomfortable with it",
        "quote": "People can also use our Products to create and share content about you with the audience they choose. For example, people can share a photo of you in a Story, mention or tag you at a location in a post, or share information about you in their posts or messages. If you are uncomfortable with what others have shared about you on our Products, you can learn how to report the content.",
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
          "Content shared about you by others makes you uncomfortable"
        ]
      },
      {
        "id": "ig-data-legal-response",
        "reference": "Section VI - How do we respond to legal requests or prevent harm",
        "summary": "Responds to legal requests and takes action to prevent fraud, unauthorized use, and harmful or illegal activity",
        "quote": "We access, preserve and share your information with regulators, law enforcement or others: In response to a legal request (like a search warrant, court order or subpoena) if we have a good faith belief that the law requires us to do so. When we have a good-faith belief it is necessary to: detect, prevent and address fraud, unauthorized use of the Products, violations of our terms or policies, or other harmful or illegal activity; to protect ourselves (including our rights, property or Products), you or others, including as part of investigations or regulatory inquiries; or to prevent death or imminent bodily harm.",
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
          "Legal request requires disclosure",
          "Fraud is detected or suspected",
          "Unauthorized use of products occurs",
          "Violations of terms or policies are identified",
          "Harmful or illegal activity is present",
          "Death or imminent bodily harm needs to be prevented"
        ]
      },
      {
        "id": "ig-data-account-reliability",
        "reference": "Section VI - How do we respond to legal requests or prevent harm",
        "summary": "Shares and receives information about account reliability to prevent fraud, abuse and harmful activity",
        "quote": "For example, if relevant, we provide information to and receive information from third-party partners about the reliability of your account to prevent fraud, abuse and other harmful activity on and off our Products.",
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
          "Account reliability is compromised",
          "Fraud is detected or suspected",
          "Abuse is identified",
          "Harmful activity is present"
        ]
      },
      {
        "id": "ig-data-terms-violations-retention",
        "reference": "Section VI - How do we respond to legal requests or prevent harm",
        "summary": "Retains information from accounts disabled for terms violations for at least one year to prevent repeat abuse",
        "quote": "We also retain information from accounts disabled for terms violations for at least a year to prevent repeat abuse or other term violations.",
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
            "value": 1,
            "unit": "years",
            "description": "Information retained for at least one year after account disabled for terms violations"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account disabled for terms violations",
          "Prevention of repeat abuse required",
          "Prevention of other term violations needed"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
