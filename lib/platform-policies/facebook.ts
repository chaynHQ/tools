import { PlatformPolicies } from '../../types/platforms';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
    {
      id: 'us-take-it-down-act',
      reference: 'S.146',
      title: 'TAKE IT DOWN Act',
      summary:
        'US federal law that criminalizes nonconsensual publication of intimate images and requires covered platforms to implement notice-and-removal processes. Signed into law May 19, 2025 as Public Law No. 119-12.',
      url: 'https://www.congress.gov/bill/119th-congress/senate-bill/146/text',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'takedown-act-ncii-authentic-adults',
          reference: 'Section 2(h)(2)(A)',
          summary:
            'Prohibits knowingly publishing authentic intimate visual depictions of adults without consent when obtained under circumstances with reasonable expectation of privacy, not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causes harm',
          quote:
            'it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is not a minor if— (i) the intimate visual depiction was obtained or created under circumstances in which the person knew or reasonably should have known the identifiable individual had a reasonable expectation of privacy; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the intimate visual depiction— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Intimate visual depiction was obtained or created under circumstances with reasonable expectation of privacy',
            'Content was not voluntarily exposed by the individual in a public or commercial setting',
            'Content is not a matter of public concern',
            'Publication is intended to cause harm or causes psychological, financial, or reputational harm',
          ],
        },
        {
          id: 'takedown-act-ncii-authentic-minors',
          reference: 'Section 2(h)(2)(B)',
          summary:
            'Prohibits knowingly publishing authentic intimate visual depictions of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire',
          quote:
            'it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content depicts a minor',
            'Publication is intended to abuse, humiliate, harass, or degrade the minor',
            'Publication is intended to arouse or gratify sexual desire',
          ],
        },
        {
          id: 'takedown-act-deepfakes-adults',
          reference: 'Section 2(h)(3)(A)',
          summary:
            'Prohibits knowingly publishing digital forgeries (deepfakes) of adults without consent when not voluntarily exposed publicly, not a matter of public concern, and intended to cause harm or causes harm',
          quote:
            'it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content is a digital forgery published without consent',
            'Content was not voluntarily exposed by the individual in a public or commercial setting',
            'Content is not a matter of public concern',
            'Publication is intended to cause harm or causes psychological, financial, or reputational harm',
          ],
        },
        {
          id: 'takedown-act-deepfakes-minors',
          reference: 'Section 2(h)(3)(B)',
          summary:
            'Prohibits knowingly publishing digital forgeries (deepfakes) of minors with intent to abuse, humiliate, harass, degrade, or arouse sexual desire',
          quote:
            'it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content is a digital forgery depicting a minor',
            'Publication is intended to abuse, humiliate, harass, or degrade the minor',
            'Publication is intended to arouse or gratify sexual desire',
          ],
        },
        {
          id: 'takedown-act-threats-authentic',
          reference: 'Section 2(h)(6)(A)',
          summary:
            'Prohibits intentionally threatening to publish authentic intimate visual depictions for intimidation, coercion, extortion, or to create mental distress',
          quote:
            'Any person who intentionally threatens to commit an offense under paragraph (2) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be punished as provided in paragraph (4).',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Intentional threat to publish authentic intimate visual depictions',
            'Threat made for intimidation, coercion, extortion, or to create mental distress',
          ],
        },
        {
          id: 'takedown-act-threats-deepfakes-adults',
          reference: 'Section 2(h)(6)(B)(i)',
          summary:
            'Prohibits intentionally threatening to publish digital forgeries (deepfakes) of adults for intimidation, coercion, extortion, or to create mental distress',
          quote:
            'Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Intentional threat to publish digital forgeries of adults',
            'Threat made for intimidation, coercion, extortion, or to create mental distress',
          ],
        },
        {
          id: 'takedown-act-threats-deepfakes-minors',
          reference: 'Section 2(h)(6)(B)(ii)',
          summary:
            'Prohibits intentionally threatening to publish digital forgeries (deepfakes) of minors for intimidation, coercion, extortion, or to create mental distress',
          quote:
            'Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Intentional threat to publish digital forgeries of minors',
            'Threat made for intimidation, coercion, extortion, or to create mental distress',
          ],
        },
        {
          id: 'takedown-act-platform-removal-process',
          reference: 'Section 3(a)(1)',
          summary:
            'Requires covered platforms to establish a notice and removal process for nonconsensual intimate visual depictions within one year of enactment',
          quote:
            'Not later than 1 year after the date of enactment of this Act, a covered platform shall establish a process whereby an identifiable individual (or an authorized person acting on behalf of such individual) may— (i) notify the covered platform of an intimate visual depiction published on the covered platform that— (I) includes a depiction of the identifiable individual; and (II) was published without the consent of the identifiable individual; and (ii) submit a request for the covered platform to remove such intimate visual depiction.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description:
                'Physical or electronic signature of the identifiable individual or authorized person',
              example: 'Digital signature or handwritten signature on document',
              reason: 'To verify identity and authorization for the removal request',
            },
            {
              description:
                'Identification of and information reasonably sufficient to locate the intimate visual depiction',
              example: 'URL, screenshot, or detailed description of content location',
              reason: 'To enable the platform to locate the specific content for removal',
            },
            {
              description: 'Brief statement of good faith belief that the content is nonconsensual',
              example: 'Statement explaining why the content was published without consent',
              reason: 'To establish the basis for the removal request',
            },
            {
              description: 'Contact information for the individual or authorized person',
              example: 'Email address, phone number, or mailing address',
              reason: 'To enable platform communication regarding the request',
            },
          ],
          removalCriteria: [
            'Content includes a depiction of the identifiable individual',
            'Content was published without the consent of the identifiable individual',
          ],
        },
        {
          id: 'takedown-act-platform-removal-timeframe',
          reference: 'Section 3(a)(3)',
          summary:
            'Requires covered platforms to remove nonconsensual intimate visual depictions and identical copies within 48 hours of receiving a valid removal request',
          quote:
            'Upon receiving a valid removal request from an identifiable individual (or an authorized person acting on behalf of such individual) using the process described in paragraph (1)(A)(ii), a covered platform shall, as soon as possible, but not later than 48 hours after receiving such request— (A) remove the intimate visual depiction; and (B) make reasonable efforts to identify and remove any known identical copies of such depiction.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: {
            response: null,
            removal: {
              value: 48,
              unit: 'hours',
              description:
                'Platform must remove content as soon as possible, but not later than 48 hours after receiving valid removal request',
            },
          },
          evidenceRequirements: [],
          removalCriteria: [
            'Valid removal request has been received',
            'Request follows the established notice and removal process',
          ],
        },
        {
          id: 'takedown-act-platform-notice-requirement',
          reference: 'Section 3(a)(2)',
          summary:
            'Requires covered platforms to provide clear and conspicuous notice of their removal process for nonconsensual intimate visual depictions',
          quote:
            'A covered platform shall provide on the platform a clear and conspicuous notice, which may be provided through a clear and conspicuous link to another web page or disclosure, of the notice and removal process established under paragraph (1)(A) that— (A) is easy to read and in plain language; and (B) provides information regarding the responsibilities of the covered platform under this section, including a description of how an individual can submit a notification and request for removal.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Notice must be clear and conspicuous on the platform',
            'Notice must be easy to read and in plain language',
            'Notice must describe how to submit removal requests',
          ],
        },
      ],
      appealProcess: null,
    },
    {
      id: 'facebook-new-1758659204835-0',
      reference: 'META-CS-2025',
      title: 'Meta Community Standards',
      summary:
        'Comprehensive community guidelines covering Facebook, Instagram, Messenger and Threads, including policies on adult nudity, sexual activity, and non-consensual intimate imagery.',
      url: 'https://transparency.meta.com/policies/community-standards/',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-cs-adult-sexual-exploitation',
          reference: 'Adult Sexual Exploitation',
          summary:
            'Prohibits adult sexual exploitation including non-consensual intimate imagery and sexual harassment',
          quote: 'Adult Sexual Exploitation',
          contentTypes: ['intimate', 'personal'],
          contentContexts: ['relationship', 'hacked', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: ['Content constitutes adult sexual exploitation'],
        },
        {
          id: 'meta-cs-bullying-harassment',
          reference: 'Bullying and Harassment',
          summary: 'Prohibits bullying and harassment that degrades or intimidates individuals',
          quote: 'Bullying and Harassment',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['relationship', 'hacked', 'impersonation', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: ['Content constitutes bullying or harassment'],
        },
        {
          id: 'meta-cs-privacy-violations',
          reference: 'Privacy Violations',
          summary:
            'Prohibits privacy violations and image privacy rights violations including sharing personal information without consent',
          quote: 'Privacy Violations',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['relationship', 'hacked', 'impersonation', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content violates privacy rights',
            'Content violates image privacy rights',
          ],
        },
        {
          id: 'meta-cs-authentic-identity',
          reference: 'Authentic Identity Representation',
          summary: 'Prohibits misrepresenting identity and impersonation on the platform',
          quote: 'Authentic Identity Representation',
          contentTypes: ['personal', 'other'],
          contentContexts: ['impersonation', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content misrepresents user identity',
            'Account is impersonating another person',
          ],
        },
        {
          id: 'meta-cs-child-sexual-exploitation',
          reference: 'Child Sexual Exploitation, Abuse, and Nudity',
          summary:
            'Prohibits child sexual exploitation, abuse, and inappropriate imagery involving minors',
          quote: 'Child Sexual Exploitation, Abuse, and Nudity',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['relationship', 'hacked', 'impersonation', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content involves child sexual exploitation',
            'Content involves child abuse',
            'Content contains inappropriate imagery of minors',
          ],
        },
        {
          id: 'meta-cs-human-exploitation',
          reference: 'Human Exploitation',
          summary: 'Prohibits human exploitation including sextortion and coercive practices',
          quote: 'Human Exploitation',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['relationship', 'hacked', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content involves human exploitation',
            'Content involves sextortion or coercive practices',
          ],
        },
        {
          id: 'meta-cs-adult-nudity-sexual-activity',
          reference: 'Adult Nudity and Sexual Activity',
          summary: 'Prohibits non-consensual sharing of adult intimate imagery and sexual content',
          quote: 'Adult Nudity and Sexual Activity',
          contentTypes: ['intimate'],
          contentContexts: ['relationship', 'hacked', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content contains non-consensual adult intimate imagery',
            'Content violates adult nudity policies',
          ],
        },
        {
          id: 'meta-cs-cybersecurity',
          reference: 'Cybersecurity',
          summary:
            'Prohibits cybersecurity violations including unauthorized access to accounts and systems',
          quote: 'Cybersecurity',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content results from cybersecurity violations',
            'Content obtained through unauthorized access',
          ],
        },
        {
          id: 'meta-cs-intellectual-property',
          reference: 'Third-Party Intellectual Property Infringement',
          summary:
            'Prohibits infringement of third-party intellectual property rights including unauthorized use of personal images',
          quote: 'Third-Party Intellectual Property Infringement',
          contentTypes: ['personal', 'other'],
          contentContexts: ['relationship', 'hacked', 'impersonation', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content infringes third-party intellectual property rights',
            'Content uses personal images without authorization',
          ],
        },
        {
          id: 'meta-cs-additional-protection-minors',
          reference: 'Additional Protection of Minors',
          summary:
            'Provides additional protections for minors against harmful content and exploitation',
          quote: 'Additional Protection of Minors',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['relationship', 'hacked', 'impersonation', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content poses risk to minors',
            'Content violates additional minor protection policies',
          ],
        },
      ],
      appealProcess: null,
    },
    {
      id: 'facebook-new-1758659204835-1',
      reference: 'META-TOS-2025',
      title: 'Meta Terms of Service',
      summary:
        'Updated terms governing use of Facebook, Messenger and other Meta products, effective January 1, 2025.',
      url: 'https://www.facebook.com/terms/',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-tos-content-violations',
          reference: 'Section 3.2',
          summary:
            'Prohibits sharing content that violates community standards, is unlawful, misleading, discriminatory, fraudulent, or that users do not own or have rights to share',
          quote:
            'You may not use our Products to do or share anything: That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products. That is unlawful, misleading, discriminatory or fraudulent (or assists someone else in using our Products in such a way). That you do not own or have the necessary rights to share.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content violates Community Standards',
            'Content is unlawful, misleading, discriminatory or fraudulent',
            'User does not own or have necessary rights to share the content',
          ],
        },
        {
          id: 'meta-tos-ip-infringement',
          reference: 'Section 3.2',
          summary:
            "Prohibits content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations",
          quote:
            "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            "Content infringes someone else's copyright",
            "Content infringes someone else's trademark",
            'Content violates other intellectual property rights',
          ],
        },
        {
          id: 'meta-tos-content-removal',
          reference: 'Section 3.2',
          summary:
            'Provides authority to remove or restrict access to content that violates terms and suspend or disable accounts for violating conduct',
          quote:
            'We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content violates Terms of Service provisions',
            'User conduct violates Terms of Service provisions',
          ],
        },
        {
          id: 'meta-tos-reporting-encouragement',
          reference: 'Section 3.2',
          summary:
            'Encourages users to report content or conduct that violates their rights, including intellectual property rights, or platform terms and policies',
          quote:
            'To help support our community, we encourage you to report content or conduct that you believe violates your rights (including intellectual property rights) or our terms and policies, if this feature exists in your jurisdiction.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            "Content violates user's rights",
            'Content violates intellectual property rights',
            'Content violates platform terms and policies',
          ],
        },
        {
          id: 'meta-tos-content-deletion-timeframe',
          reference: 'Section 3.3',
          summary:
            'Establishes timeframes for content deletion, including up to 90 days for deletion process and additional 90 days for removal from backups',
          quote:
            'It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: {
            response: null,
            removal: {
              value: 90,
              unit: 'days',
              description:
                'Up to 90 days to delete content after deletion process begins, plus up to another 90 days to remove from backups',
            },
          },
          evidenceRequirements: [],
          removalCriteria: ['User requests content deletion', 'Account deletion process initiated'],
        },
        {
          id: 'meta-tos-account-termination',
          reference: 'Section 4.2',
          summary:
            'Provides authority to suspend or permanently disable accounts for clear, serious, or repeated breaches of terms or policies, including Community Standards',
          quote:
            'If we determine, in our discretion, that you have clearly, seriously or repeatedly breached our Terms or Policies, including in particular the Community Standards, we may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Clear breach of Terms or Policies',
            'Serious breach of Terms or Policies',
            'Repeated breach of Terms or Policies',
            'Violation of Community Standards',
          ],
        },
      ],
      appealProcess: null,
    },
    {
      id: 'facebook-new-1758659204835-2',
      reference: 'META-NUDITY-2025',
      title: 'Adult Nudity and Sexual Activity Policy',
      summary:
        'Specific policy addressing restrictions on nudity and sexual content, with provisions for non-consensual intimate imagery.',
      url: 'https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-nudity-adult-nudity',
          reference: 'Adult Nudity',
          summary:
            'Prohibits photorealistic and digital imagery of adult nudity including visible genitalia, intimate body parts, and female nipples except in specific contexts',
          quote:
            'We do not allow the following content for all users: Adult Nudity - Photorealistic/digital imagery of adult nudity, if it depicts: Visible genitalia (including when obscured by pubic hair or digital overlays), Visible anuses and/or close-ups of visible buttocks, Visible female nipples, except in a breastfeeding, or act of protest context',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content depicts visible genitalia including when obscured by pubic hair or digital overlays',
            'Content shows visible intimate body parts and/or close-ups of visible intimate areas',
            'Content displays visible female nipples except in breastfeeding or protest contexts',
          ],
        },
        {
          id: 'meta-nudity-voyeuristic-content',
          reference: 'Adult Nudity',
          summary:
            'Prohibits photorealistic digital videos that focus on intimate body parts recorded without the awareness of the person depicted',
          quote:
            'Photorealistic/ digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person(s) depicted in them',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Video focuses on intimate body parts',
            'Content was recorded without the awareness of the person depicted',
          ],
        },
        {
          id: 'meta-nudity-sexual-activity',
          reference: 'Adult Sexual Activity',
          summary:
            'Prohibits photorealistic and digital imagery of adult sexual activity including explicit and implicit sexual acts',
          quote:
            'We do not allow the following content for all users: Adult Sexual Activity - Photorealistic/ digital imagery of adult sexual activity, including: Explicit sexual activity or stimulation, Implicit sexual activity or stimulation, Other sexual activity or stimulation',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content depicts explicit sexual activity or stimulation',
            'Content shows implicit sexual activity or stimulation',
            'Content displays other forms of sexual activity including erections or presence of by-products of sexual activity',
          ],
        },
        {
          id: 'meta-nudity-ai-generated',
          reference: 'Policy Rationale',
          summary:
            'Prohibits AI-generated or computer-generated images of nudity and sexual activity regardless of photorealistic appearance',
          quote:
            'Under this policy, we remove real photographs and videos of nudity and sexual activity, AI- or computer-generated images of nudity and sexual activity, and digital imagery, regardless of whether it looks "photorealistic" (as in, it looks like a real person).',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content is AI-generated or computer-generated imagery of nudity',
            'Content is AI-generated or computer-generated imagery of sexual activity',
            'Content is digital imagery of nudity or sexual activity regardless of photorealistic appearance',
          ],
        },
        {
          id: 'meta-nudity-fetish-content',
          reference: 'Adult Sexual Activity',
          summary:
            'Prohibits photorealistic digital imagery and real world art depicting certain fetish activities',
          quote:
            'Photorealistic/ digital imagery or real world art depicting fetish that involves the following: Acts that are likely to lead to the death of a person or animal, Dismemberment, Cannibalism, Feces, urine, spit, snot, menstruation or vomit, Bestiality, Incest, BDSM (bondage and discipline, domination and submission, sadism and masochism), only when sexual indicators are also present',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content depicts fetish activities involving acts likely to lead to death',
            'Content shows dismemberment, cannibalism, or bodily fluids in sexual context',
            'Content displays bestiality or incest',
            'Content shows BDSM activities when sexual indicators are present',
          ],
        },
        {
          id: 'meta-nudity-extended-audio',
          reference: 'Adult Sexual Activity',
          summary: 'Prohibits extended audio recordings of sexual activity',
          quote: 'Extended audio of sexual activity',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: ['Content contains extended audio of sexual activity'],
        },
      ],
      appealProcess: {
        url: 'https://www.facebook.com/help/263149623790594?ref=tc',
        summary:
          "Users can appeal content removal decisions through Facebook's Support Inbox and request another review if they believe the decision was incorrect",
        steps: [
          'Report content through universal entry point on posts, comments, stories, messages, or profiles',
          'Receive notification of review decision via notifications',
          'Access detailed review information in Support Inbox',
          'Submit appeal request if disagreeing with decision',
          'Receive final response after re-review in Support Inbox',
        ],
      },
    },
    {
      id: 'facebook-new-1758659204835-3',
      reference: 'META-HARASSMENT-2025',
      title: 'Bullying and Harassment Policy',
      summary:
        'Policy addressing bullying, harassment, and targeted attacks, including protections for private individuals and provisions for image-based abuse.',
      url: 'https://transparency.meta.com/policies/community-standards/bullying-harassment/',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-harassment-unwanted-contact',
          reference: 'Tier 1: Universal protections for everyone',
          summary:
            'Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals without prior solicitation',
          quote:
            'Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Contact is repeated',
            'Contact is sexually harassing',
            'Contact is directed at a large number of individuals with no prior solicitation',
          ],
        },
        {
          id: 'meta-harassment-severe-sexualized-commentary',
          reference: 'Tier 1: Universal protections for everyone',
          summary: 'Prohibits severe sexualized commentary targeting individuals',
          quote: 'Severe sexualized commentary.',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: ['Content contains severe sexualized commentary'],
        },
        {
          id: 'meta-harassment-derogatory-sexualized-imagery',
          reference: 'Tier 1: Universal protections for everyone',
          summary: 'Prohibits derogatory sexualized photoshop or drawings targeting individuals',
          quote: 'Derogatory sexualized photoshop or drawings',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: ['Content contains derogatory sexualized photoshop or drawings'],
        },
        {
          id: 'meta-harassment-sexual-activity-attacks',
          reference: 'Tier 1: Universal protections for everyone',
          summary: 'Prohibits attacks through derogatory terms related to sexual activity',
          quote:
            'Attacks through derogatory terms related to sexual activity (for example: whore, slut).',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content contains attacks through derogatory terms related to sexual activity',
          ],
        },
        {
          id: 'meta-harassment-private-info-threats',
          reference: 'Tier 1: Universal protections for everyone',
          summary:
            "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
          quote:
            "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
          contentTypes: ['private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content contains threats to release private phone number',
            'Content contains threats to release residential address',
            'Content contains threats to release email address',
            'Content contains threats to release medical records',
          ],
        },
        {
          id: 'meta-harassment-sexual-activity-claims',
          reference:
            'Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures',
          summary:
            'Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in the context of criminal allegations against adults',
          quote:
            'Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content contains claims about sexual activity targeting protected individuals',
            'Exception: criminal allegations against adults involving non-consensual sexual touching',
          ],
        },
        {
          id: 'meta-harassment-adult-sexualization',
          reference:
            'Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures',
          summary:
            'Prohibits content sexualizing adults who are minors, private adults or limited scope public figures',
          quote:
            'Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content sexualizes another adult who is a minor, private adult, or limited scope public figure',
          ],
        },
        {
          id: 'meta-harassment-manipulated-imagery-negative',
          reference:
            'Tier 2: Additional protections for all Minors, Private Adults and Limited Scope Public Figures',
          summary:
            'Prohibits content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics',
          quote:
            'Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).',
          contentTypes: ['personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content is manipulated to negatively highlight specific physical characteristics',
          ],
        },
        {
          id: 'meta-harassment-romantic-claims',
          reference:
            'Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures',
          summary:
            'Prohibits claims about romantic involvement, sexual orientation or gender identity for private minors, private adults, and minor involuntary public figures',
          quote: 'Claims about romantic involvement, sexual orientation or gender identity.',
          contentTypes: ['personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content contains claims about romantic involvement',
            'Content contains claims about sexual orientation',
            'Content contains claims about gender identity',
          ],
        },
        {
          id: 'meta-harassment-unwanted-manipulated-imagery',
          reference:
            'Tier 3: Additional protections for Private Minors, Private Adults, and Minor Involuntary Public Figures',
          summary:
            'Prohibits unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures',
          quote:
            'When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'Self-report by the target or authorized representative',
              example: 'Report submitted by the person depicted in the manipulated imagery',
              reason: 'Required to confirm the imagery is unwanted',
            },
          ],
          removalCriteria: [
            'Content contains unwanted manipulated imagery',
            'Content is self-reported by target or authorized representative',
          ],
        },
        {
          id: 'meta-harassment-unwanted-pages-groups-events',
          reference: 'Bullying and harassment through pages, groups, events and messages',
          summary:
            'Prohibits content that targets private individuals through unwanted Pages, Groups and Events when reported by the target',
          quote:
            'Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'Report by the target or authorized representative',
              example:
                'Report submitted by the person being targeted or their authorized representative',
              reason: 'Required to confirm the content is unwanted targeting',
            },
          ],
          removalCriteria: [
            'Content targets private individuals through unwanted Pages, Groups or Events',
            'Content is reported by the target or authorized representative',
          ],
        },
        {
          id: 'meta-harassment-unwanted-content-confirmation',
          reference: 'Bullying and harassment through pages, groups, events and messages',
          summary:
            'Removes content that would otherwise require target reporting or indicates direct targeting when confirmed unwanted by the target',
          quote:
            'Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target (for example: the target is tagged in the post or comment). We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description:
                'Confirmation from the target or authorized representative that content is unwanted',
              example:
                'Written confirmation that the tagged content or direct targeting is unwanted',
              reason: 'Required to establish that the content constitutes unwanted targeting',
            },
          ],
          removalCriteria: [
            'Content indicates direct targeting (e.g., target is tagged)',
            'Confirmation received from target or authorized representative that content is unwanted',
          ],
        },
        {
          id: 'meta-harassment-public-figure-sexualization',
          reference: 'Bullying and harassment through pages, groups, events and messages',
          summary:
            'Prohibits content sexualizing a public figure when confirmed unwanted by the target',
          quote:
            'Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description:
                'Confirmation from the public figure or authorized representative that content is unwanted',
              example:
                'Written confirmation from the public figure that the sexualizing content is unwanted',
              reason:
                'Required to establish that the sexualizing content is unwanted by the public figure',
            },
          ],
          removalCriteria: [
            'Content sexualizes a public figure',
            'Confirmation received from target or authorized representative that content is unwanted',
          ],
        },
        {
          id: 'meta-harassment-sexual-harassment-contact',
          reference: 'Bullying and harassment through pages, groups, events and messages',
          summary:
            'Prohibits initiation of sexually harassing contact when confirmed unwanted by the recipient',
          quote:
            'Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description:
                'Confirmation from the recipient or authorized representative that contact is unwanted',
              example: 'Written confirmation that the sexually harassing contact is unwanted',
              reason:
                'Required to establish that the contact constitutes unwanted sexual harassment',
            },
          ],
          removalCriteria: [
            'Contact is sexually harassing',
            'Confirmation received from recipient or authorized representative that contact is unwanted',
          ],
        },
      ],
      appealProcess: {
        url: null,
        summary:
          'Users can appeal content removal decisions through the Support Inbox and request another review if they disagree with the decision',
        steps: [
          'Report content through the universal reporting option',
          'Receive notification of review decision via notifications',
          'Access detailed decision information in Support Inbox',
          'Submit appeal request for another review if disagreeing with decision',
          'Receive final response after re-review in Support Inbox',
        ],
      },
    },
    {
      id: 'facebook-new-1758659204835-4',
      reference: 'META-COPYRIGHT-2025',
      title: 'Meta Copyright Policy',
      summary:
        'Comprehensive copyright policy including DMCA procedures, reporting mechanisms, and intellectual property protections across Meta platforms.',
      url: 'https://www.meta.com/help/policies/2202628709913826/',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-copyright-infringement',
          reference: 'Copyright infringement',
          summary:
            "Prohibits posting content that infringes someone else's copyright, including photos and videos posted without permission from the copyright owner",
          quote:
            "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description:
                'Only the copyright owner or their authorized representative may file a report',
              example:
                'Complete copyright claim including identification of copyrighted work and infringing content',
              reason: 'To verify ownership and establish infringement',
            },
          ],
          removalCriteria: [
            "Content violates someone else's intellectual property rights",
            'Content posted without permission from copyright owner',
            'Content facilitates copyright infringement through unauthorized devices or services',
          ],
        },
        {
          id: 'meta-copyright-ownership',
          reference: 'Know if you own the copyright to something',
          summary:
            'Establishes that creators of original photos and videos own the copyright to their content',
          quote:
            'In general, the person who creates an original work owns the copyright. For example, if you create a painting, you likely own the copyright for that painting. Similarly, if you take a photo, you likely own the copyright for that photo.',
          contentTypes: ['intimate', 'personal'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'User created the original photo or video',
            'Content is an original work eligible for copyright protection',
          ],
        },
        {
          id: 'meta-copyright-no-permission',
          reference: 'Copyright infringement',
          summary:
            "Prohibits using someone else's copyrighted content without permission, even with credit, disclaimers, or modifications",
          quote:
            "It's possible to infringe someone else's copyright when you post their content on Meta platforms, or facilitate copyright infringement, even if you: Recorded the content onto your own recording device (examples: a song playing in the background during a party, concert, sporting event, wedding, etc.) Gave credit to the copyright owner Included a disclaimer that you didn't intend to infringe copyright Didn't intend to profit from it Modified the work or added your own original material to it Found the content available on the internet Saw that others posted the same content as well Think that the use is a fair use Are using an unauthorized streaming device or service",
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            "Content posted without copyright owner's permission",
            'Use does not fall within fair use or other copyright exceptions',
            'Content recorded, modified, or found online without authorization',
          ],
        },
        {
          id: 'meta-repeat-infringer',
          reference: 'Repeat infringer policy',
          summary:
            'Prohibits repeatedly posting content that infringes intellectual property rights and may result in account restrictions or removal',
          quote:
            "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Repeated posting of content that infringes intellectual property rights',
            'Multiple copyright or trademark violations',
          ],
        },
      ],
      appealProcess: {
        url: null,
        summary:
          'Users can appeal copyright removals by following up with rights owners directly or submitting DMCA counter-notifications',
        steps: [
          'Receive notification from Meta with rights owner details',
          'Contact rights owner directly to resolve the issue',
          'Submit DMCA counter-notification if applicable',
          "Follow instructions provided in Meta's notification message",
        ],
      },
    },
    {
      id: 'facebook-new-1758731508292-0',
      reference: 'META-ADULT-SEXUAL-EXPLOITATION-2025',
      title: 'Adult Sexual Exploitation Policy',
      summary:
        'Specific policy addressing non-consensual intimate imagery, sextortion, and other forms of adult sexual exploitation including detailed provisions for NCII removal.',
      url: 'https://transparency.meta.com/policies/community-standards/adult-sexual-exploitation/',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-ase-ncii-sharing',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            'Prohibits sharing, threatening to share, or requesting non-consensual intimate imagery that is non-commercial, produced privately, shows nudity or sexual activity, and lacks consent as indicated by vengeful context, independent sources, or victim reports',
          quote:
            'Sharing, threatening, stating an intent to share, offering or asking for non-consensual intimate imagery (NCII) that fulfills all of the three following conditions: Imagery is non-commercial and produced in a private setting. Person in the imagery is (near) nude, engaged in sexual activity or in a sexually suggestive pose. Lack of consent to share the imagery is indicated by meeting any of the signals: Vengeful context (such as, caption, comments or page title). Independent sources such as law enforcement records, media reports (such as, leak of images confirmed by media) or representatives of a survivor of NCII Report from a person depicted in the image or who shares the same name as the person depicted in the image.',
          contentTypes: ['intimate'],
          contentContexts: ['relationship', 'hacked', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description:
                'Report from person depicted in the image or who shares the same name as the person depicted',
              example: 'Direct report from the victim or someone with the same name',
              reason: 'To establish lack of consent for sharing intimate imagery',
            },
            {
              description: 'Evidence of vengeful context',
              example: 'Captions, comments, or page titles showing vengeful intent',
              reason: 'To demonstrate non-consensual nature of the sharing',
            },
            {
              description: 'Independent sources confirming lack of consent',
              example: 'Law enforcement records or media reports confirming unauthorized sharing',
              reason: 'To verify the non-consensual nature through official sources',
            },
          ],
          removalCriteria: [
            'Imagery is non-commercial and produced in a private setting',
            'Person in imagery is nude, engaged in sexual activity, or in sexually suggestive pose',
            'Lack of consent indicated by vengeful context, independent sources, or victim report',
          ],
        },
        {
          id: 'meta-ase-sextortion',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            'Prohibits coercing money, favors, or intimate imagery from people with threats to expose their intimate imagery or intimate information',
          quote:
            'Coercing money, favors or intimate imagery from people with threats to expose their intimate imagery or intimate information (sextortion)',
          contentTypes: ['intimate', 'private'],
          contentContexts: ['relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Coercing money, favors, or intimate imagery through threats',
            'Threats to expose intimate imagery or intimate information',
          ],
        },
        {
          id: 'meta-ase-deepfake-ncii',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            'Prohibits promoting, threatening to share, or offering to make non-real non-consensual intimate imagery through applications, services, or instructions',
          quote:
            'Promoting, threatening to share, or offering to make non-real non-consensual intimate imagery (NCII) either by applications, services, or instructions, even if there is no (near) nude commercial or non-commercial imagery shared in the content',
          contentTypes: ['intimate', 'other'],
          contentContexts: ['unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Promoting creation of non-real non-consensual intimate imagery',
            'Threatening to share non-real non-consensual intimate imagery',
            'Offering applications, services, or instructions for creating non-real intimate imagery',
          ],
        },
        {
          id: 'meta-ase-creepshots',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            "Prohibits secretly taking non-commercial imagery of a person's intimate body parts or of sexual activity, including photos or videos that mock, sexualize or expose the person",
          quote:
            'Secretly taking non-commercial imagery of a person\'s commonly sexualized body parts (breasts, groin, buttocks, or thighs) or of a person engaged in sexual activity. This imagery is commonly known as "creepshots" or "upskirts" and includes photos or videos that mock, sexualize or expose the person depicted in the imagery.',
          contentTypes: ['intimate', 'personal'],
          contentContexts: ['unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Imagery taken secretly without consent',
            'Shows intimate body parts or sexual activity',
            'Content that mocks, sexualizes, or exposes the person depicted',
          ],
        },
        {
          id: 'meta-ase-private-conversations',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            'Prohibits sharing, threatening to share, or stating intent to share private sexual conversations without consent, as indicated by vengeful context, independent sources, or victim reports',
          quote:
            'Sharing, threatening to share or stating an intent to share private sexual conversations where a lack of consent to share is indicated by by any of the following: Vengeful context and/or threatening context, Independent sources such as media coverage or law enforcement records, or Report from a person depicted in the image or who shares the same name as the person depicted in the image',
          contentTypes: ['private', 'other'],
          contentContexts: ['relationship', 'hacked', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'Evidence of vengeful or threatening context',
              example: 'Messages or posts showing vengeful intent when sharing conversations',
              reason: 'To establish non-consensual sharing of private sexual conversations',
            },
            {
              description: 'Independent sources confirming lack of consent',
              example: 'Media coverage or law enforcement records',
              reason: 'To verify unauthorized sharing through official sources',
            },
            {
              description: 'Report from person involved in the conversation',
              example: 'Direct report from victim or someone with same name',
              reason: 'To confirm lack of consent for sharing private conversations',
            },
          ],
          removalCriteria: [
            'Private sexual conversations shared without consent',
            'Vengeful or threatening context present',
            'Independent sources confirm lack of consent',
            'Report from person involved in the conversation',
          ],
        },
        {
          id: 'meta-ase-non-consensual-touching-imagery',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            'Prohibits imagery depicting non-consensual sexual touching, except in real-world art depicting non-real people with condemning or neutral captions',
          quote:
            'Imagery depicting non-consensual sexual touching (except in real-world art depicting non-real people, with a condemning or neutral caption)',
          contentTypes: ['intimate', 'personal'],
          contentContexts: ['unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Imagery depicts non-consensual sexual touching',
            'Not real-world art depicting non-real people',
            'Does not have condemning or neutral caption if artistic content',
          ],
        },
        {
          id: 'meta-ase-survivor-identification',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            'Prohibits content shared by third parties that identifies survivors of sexual assault when reported by the survivor',
          quote:
            'Content shared by a third party that identifies survivors of sexual assault when reported by the survivor',
          contentTypes: ['personal', 'private', 'other'],
          contentContexts: ['unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'Report from the survivor',
              example: 'Direct report from the person identified as a survivor',
              reason: 'To confirm the survivor does not consent to being identified',
            },
          ],
          removalCriteria: [
            'Content identifies survivors of sexual assault',
            'Content shared by third party',
            'Reported by the survivor themselves',
          ],
        },
        {
          id: 'meta-ase-necrophilia-forced-stripping',
          reference: 'Adult Sexual Exploitation Policy',
          summary:
            'Prohibits imagery, statements, and content relating to necrophilia or forced stripping, except in real-world art depicting non-real people with condemning or neutral captions',
          quote:
            'Content relating to necrophilia or forced stripping, including: Imagery depicting necrophilia or forced stripping (except in real-world art depicting non-real people, with a condemning or neutral caption. Statements attempting to share, offer, ask, or threatening to share the imagery of necrophilia or forced stripping. Statements that contain descriptions, advocacy for, aspirational or conditional statements about, statements of intent or calls for action to commit, admission of participation in, or mocking of survivors of necrophilia or forced stripping',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Imagery depicting necrophilia or forced stripping',
            'Statements threatening to share such imagery',
            'Descriptions, advocacy, or mocking related to these acts',
            'Not real-world art depicting non-real people with appropriate captions',
          ],
        },
      ],
      appealProcess: {
        url: null,
        summary:
          'Users can request another review if they disagree with enforcement decisions through the Support Inbox system',
        steps: [
          'User receives notification of enforcement action',
          'User can access more details in Support Inbox',
          'User can request another review if they disagree with the decision',
          'Meta provides final response after re-review in Support Inbox',
        ],
      },
    },
    {
      id: 'facebook-new-1758731508292-1',
      reference: 'META-IP-INFRINGEMENT-2025',
      title: 'Third-Party Intellectual Property Infringement Policy',
      summary:
        'Policy covering copyright and trademark infringement with specific procedures for reporting and removing infringing content across Meta platforms.',
      url: 'https://transparency.meta.com/policies/community-standards/intellectual-property/',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-ip-copyright-infringement',
          reference: 'Third-Party Intellectual Property Infringement',
          summary: "Prohibits posting content that violates someone else's copyright",
          quote:
            'Upon receipt of a report from a rights holder or an authorized representative, we will remove or restrict content that engages in: Copyright infringement.',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'Report from rights holder or authorized representative',
              example:
                'Copyright ownership documentation or authorization to act on behalf of rights holder',
              reason: 'To verify legitimate ownership of copyrighted content before removal',
            },
          ],
          removalCriteria: [
            'Content engages in copyright infringement',
            'Report received from rights holder or authorized representative',
          ],
        },
        {
          id: 'meta-ip-suspected-copyright-infringement',
          reference: 'Third-Party Intellectual Property Infringement',
          summary:
            'Removes content that shares, promotes, or facilitates suspected copyright infringement',
          quote:
            'We also remove content that: Shares, promotes, or facilitates suspected copyright infringement',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content shares suspected copyright infringement',
            'Content promotes suspected copyright infringement',
            'Content facilitates suspected copyright infringement',
          ],
        },
        {
          id: 'meta-ip-account-removal',
          reference: 'Third-Party Intellectual Property Infringement',
          summary:
            'Removes accounts that engage in repeated violations of intellectual property policy',
          quote: 'We remove accounts that: Engage in repeated violations of this policy.',
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Account engages in repeated violations of intellectual property policy',
          ],
        },
      ],
      appealProcess: {
        url: 'https://www.facebook.com/help/intellectual_property',
        summary:
          "Users can report intellectual property violations through Meta's Intellectual Property Help Center or Business Protection page",
        steps: [
          'Visit the Intellectual Property Help Center',
          'Visit the Business Protection page',
          'Consider applying for access to Brand Rights Protection',
        ],
      },
    },
    {
      id: 'facebook-new-1758760075272-0',
      reference: 'META-PRIVACY-2025',
      title: 'Meta Privacy Policy',
      summary:
        'Comprehensive privacy policy covering data collection, use, sharing, and user rights across Meta platforms, effective June 16, 2025.',
      url: 'https://www.facebook.com/privacy/policy',
      accessTimestamp: '2025-09-25T00:27:55.272Z',
      policies: [
        {
          id: 'meta-privacy-safety-security',
          reference: 'Section 2 - Promoting safety, security and integrity',
          summary:
            'Prohibits harmful or unlawful behavior and removes content reported for violations',
          quote:
            'We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Content violates terms or policies',
            'Content involves harmful or unlawful behavior',
            'Content threatens user safety, security or integrity',
          ],
        },
        {
          id: 'meta-privacy-legal-requests',
          reference:
            'Section 10 - How do we respond to legal requests, comply with applicable law and prevent harm?',
          summary:
            'Responds to legal requests and preserves information to promote safety and prevent harm',
          quote:
            'We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. In accordance with applicable law. To promote the safety, security and integrity of Meta Products, users, employees, property and the public.',
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Valid legal request received',
            'Required by applicable law',
            'Necessary to promote safety, security and integrity',
          ],
        },
        {
          id: 'meta-privacy-account-verification',
          reference: 'Section 19 - Why and how we process your information',
          summary:
            'Verifies accounts and activity to prevent unauthorized access and impersonation',
          quote:
            'Promoting safety, integrity and security on and across the Meta Products: The Meta Products are designed to research and help ensure the safety, integrity and security of those services and those people who enjoy them, on and off Meta Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies.',
          contentTypes: ['personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'other'],
          timeframes: null,
          evidenceRequirements: [],
          removalCriteria: [
            'Account activity cannot be verified',
            'Account shows signs of unauthorized access',
            'Account violates verification requirements',
          ],
        },
      ],
      appealProcess: {
        url: 'https://help.meta.com/support/privacy',
        summary:
          'Users can contact Meta with questions, complaints or requests regarding their information through online forms or mail',
        steps: [
          'Contact Meta online through the support privacy portal',
          'Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025',
          'In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.',
          'Depending on jurisdiction, users may contact their local Data Protection Authority directly',
        ],
      },
    },
  ],
};
