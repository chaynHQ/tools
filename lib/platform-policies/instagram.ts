import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "us-take-it-down-act",
    "reference": "S.146",
    "title": "TAKE IT DOWN Act",
    "summary": "US federal law that criminalizes nonconsensual publication of intimate images and requires covered platforms to implement notice-and-removal processes. Signed into law May 19, 2025, with criminal provisions effective immediately and platform compliance required by May 19, 2026.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T20:33:37.881Z",
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
        "summary": "Prohibits knowingly publishing digitally created intimate visual depictions (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause or causing harm",
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
          "Content is a digital forgery published without consent of the individual",
          "Content was not voluntarily exposed by the individual in a public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-deepfake-minors",
        "reference": "Section 2(h)(3)(B)",
        "summary": "Prohibits knowingly publishing digitally created intimate visual depictions (deepfakes) of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire",
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
          "Content is a digital forgery depicting an identifiable minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
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
          "Threat is intentional and relates to publishing authentic intimate visual depictions",
          "Threat is made for intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "take-it-down-threats-deepfake",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits intentionally threatening to publish digitally created intimate visual depictions (deepfakes) for intimidation, coercion, extortion, or to create mental distress",
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
          "Threat is intentional and relates to publishing digitally created intimate visual depictions",
          "Threat is made for intimidation, coercion, extortion, or to create mental distress"
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
            "description": "Platform must remove content as soon as possible, but not later than 48 hours after receiving valid removal request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Physical or electronic signature of the individual or authorized person",
            "example": "Digital signature or typed name",
            "reason": "To verify identity and authorization for the removal request"
          },
          {
            "description": "Identification and information reasonably sufficient to locate the intimate visual depiction",
            "example": "URL, screenshot, or detailed description of content location",
            "reason": "To enable the platform to locate the specific content for removal"
          },
          {
            "description": "Brief statement of good faith belief that the depiction is nonconsensual",
            "example": "Statement explaining why the content was published without consent",
            "reason": "To establish that the content violates the nonconsensual publication prohibition"
          },
          {
            "description": "Contact information for the individual or authorized person",
            "example": "Email address or phone number",
            "reason": "To enable platform communication regarding the removal request"
          }
        ],
        "removalCriteria": [
          "Content is an intimate visual depiction of the requesting individual",
          "Content was published without the consent of the individual",
          "Valid removal request submitted through established process"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659617880-0",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community standards that apply to Facebook, Instagram, Messenger and Threads, covering content policies including non-consensual intimate imagery, harassment, and content removal procedures.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T20:33:37.881Z",
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
        "removalCriteria": [
          "Content constitutes bullying or harassment",
          "Content degrades or targets individuals",
          "Content violates dignity of others"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits privacy violations and protects personal privacy and information including image privacy rights",
        "quote": "Privacy Violations",
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
          "Content violates personal privacy",
          "Unauthorized sharing of private information",
          "Violation of image privacy rights"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits misrepresentation of identity and requires authentic representation of who users are",
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
          "Inauthentic representation of identity",
          "Impersonation of another person"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "Inauthentic Behavior",
        "summary": "Prohibits inauthentic behavior and misrepresentation on the platform",
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
          "Misrepresentation of identity or purpose",
          "Coordinated inauthentic activity"
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
          "Violation of image rights"
        ]
      },
      {
        "id": "meta-cs-dignity-principle",
        "reference": "DIGNITY",
        "summary": "Requires respect for the dignity of others and prohibits harassment or degradation",
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
          "Content harasses or degrades individuals",
          "Content violates equal dignity and rights"
        ]
      },
      {
        "id": "meta-cs-privacy-principle",
        "reference": "PRIVACY",
        "summary": "Protects personal privacy and information, giving people freedom to choose how and when to share",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
          "Content violates personal privacy",
          "Content shared without consent",
          "Content removes freedom to choose when and how to share"
        ]
      },
      {
        "id": "meta-cs-safety-principle",
        "reference": "SAFETY",
        "summary": "Prohibits content that threatens people or could contribute to risk of physical harm",
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
    "id": "instagram-new-1758659617880-1",
    "reference": "IG-TOS",
    "title": "Instagram Terms of Use",
    "summary": "Instagram's terms of service governing user conduct, content ownership, and platform usage rules.",
    "url": "https://help.instagram.com/581066165581870/",
    "accessTimestamp": "2025-09-23T20:33:37.881Z",
    "policies": [
      {
        "id": "ig-tos-private-confidential-info",
        "reference": "Section 4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
        "contentTypes": [
          "private",
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
          "Content contains someone else's private or confidential information",
          "Information was posted without permission from the person it concerns"
        ]
      },
      {
        "id": "ig-tos-impersonation",
        "reference": "Section 4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information",
        "quote": "You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
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
          "User is impersonating someone or something they are not",
          "Account was created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-tos-intellectual-property",
        "reference": "Section 4.2",
        "summary": "Prohibits violating someone else's intellectual property rights including copyright infringement",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
          "Content violates someone else's intellectual property rights",
          "Content constitutes copyright infringement"
        ]
      },
      {
        "id": "ig-tos-content-removal",
        "reference": "Section 6",
        "summary": "Platform can remove content that violates Terms of Use or policies",
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
            "description": "Deletion process will automatically begin no more than 30 days after request"
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
        "id": "ig-tos-account-termination",
        "reference": "Section 6",
        "summary": "Platform can terminate accounts for policy violations or intellectual property infringement",
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
          "User violates Terms of Use or policies including Community Standards",
          "User repeatedly infringes other people's intellectual property rights"
        ]
      },
      {
        "id": "ig-tos-deletion-timeframe",
        "reference": "Section 6",
        "summary": "Content deletion process takes up to 90 days with additional time for backups",
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
            "description": "Up to 90 days to delete content after process begins, plus up to another 90 days for backups"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests content or account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult the Help Center if they believe their account has been terminated in error or want to disable or permanently delete their account",
      "steps": [
        "Consult Instagram Help Center if account terminated in error",
        "Follow Help Center guidance for account appeals or deletion requests"
      ]
    }
  },
  {
    "id": "instagram-new-1758659617880-2",
    "reference": "IG-IP",
    "title": "Instagram Intellectual Property Policy",
    "summary": "Instagram's policy on intellectual property rights including copyright and trademark protections, with reporting mechanisms for violations.",
    "url": "https://help.instagram.com/535503073130320",
    "accessTimestamp": "2025-09-23T20:33:37.881Z",
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
          "Content uses distinguishing words, slogans, symbols or designs without authorization",
          "Content may cause confusion about who provides or is affiliated with a product or service"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758659617880-3",
    "reference": "STOPNCII",
    "title": "StopNCII.org Initiative",
    "summary": "Global initiative supported by major platforms including Instagram to help victims of non-consensual intimate image abuse through hash-based detection and removal.",
    "url": "https://stopncii.org/",
    "accessTimestamp": "2025-09-23T20:33:37.881Z",
    "policies": [
      {
        "id": "stopncii-ncii-prevention",
        "reference": null,
        "summary": "Provides a tool to prevent non-consensual intimate image sharing by creating digital fingerprints of images to help participating companies detect and remove them from online platforms",
        "quote": "StopNCII.org is a free tool designed to support victims of Non-Consensual Intimate Image (NCII) abuse. The tool works by generating a hash from your intimate image(s)/video(s). StopNCII.org then shares the hash with participating companies so they can help detect and remove the images from being shared online.",
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
            "description": "Must be the person who appears in the image or video",
            "example": "Self-identification as the individual depicted",
            "reason": "To ensure only the affected person can submit content for protection"
          },
          {
            "description": "Must have been 18 or older when the image was taken and currently over 18",
            "example": "Age verification",
            "reason": "Service is only available for adult content and users"
          },
          {
            "description": "Must still possess the original image or video",
            "example": "Access to the actual file to create the hash",
            "reason": "Required to generate the digital fingerprint for detection"
          },
          {
            "description": "Content must show nudity, semi-nudity, or sexual activity",
            "example": "Intimate imagery as defined by the service",
            "reason": "Service specifically targets non-consensual intimate image abuse"
          }
        ],
        "removalCriteria": [
          "Image or video contains intimate content (nudity, semi-nudity, or sexual activity)",
          "Content was shared without the consent of the person depicted",
          "The person submitting the request appears in the content",
          "All age requirements are met (18+ when taken, currently 18+)"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
