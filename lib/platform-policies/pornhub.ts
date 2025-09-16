import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
    {
      id: 'ph-terms-of-service',
      reference: 'PH-TOS',
      title: 'Pornhub Terms of Service',
      summary: 'Legal terms governing the use of Pornhub, including content ownership, security responsibilities, and prohibited behavior.',
      url: 'https://www.pornhub.com/information/terms',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [
        {
          id: 'ph-privacy-policy',
          reference: 'PH-TOS-PRIVACY',
          summary: 'Prohibits the violation of privacy, including the unauthorized publication of personally identifiable information (doxing).',
          quote: 'We prohibit the violation of privacy, including the unauthorized publication of personally identifiable information (doxing).',
          contentTypes: ['intimate', 'personal', 'private'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'URL(s) of the content containing private information',
              reason: 'To identify the privacy-violating material'
            },
            {
              description: 'Description of the privacy violation submitted via the Content Removal Request Form',
              reason: 'To understand the nature of the privacy violation'
            }
          ],
          removalCriteria: [
            'Content (video, comments, etc.) reveals private information without consent',
            'The information poses a privacy or security risk to an individual',
            'Content consists of private media shared without consent',
            'The sharing violates a reasonable expectation of privacy'
          ]
        },
        {
          id: 'ph-harassment-policy',
          reference: 'PH-TOS-HARASSMENT',
          summary: 'Prohibits harassment, threats, and hate speech in comments and other interactions on the platform.',
          quote: 'We prohibit harassment, threats, and hate speech in comments and other interactions on the platform.',
          contentTypes: ['personal', 'private'],
          contentContexts: ['impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'URL(s) of the video where comments appear or the user profile sending messages',
              reason: 'To identify the source of the harassing content'
            },
            {
              description: 'Screenshots of the harassing comments or messages',
              reason: 'To provide evidence of the harassing behavior'
            },
            {
              description: 'Use the reporting flag available on all videos and comments',
              reason: 'To report the harassment through the proper channel'
            }
          ],
          removalCriteria: [
            'Comments or messages contain targeted harassment, abuse, or threats',
            'Content promotes hate speech against protected groups',
            'Private information is shared with the clear intent to incite harassment or cause fear'
          ]
        },
        {
          id: 'ph-copyright-policy',
          reference: 'PH-TOS-COPYRIGHT',
          summary: 'Prohibits copyright infringement. Re-uploading content from other creators is prohibited.',
          quote: 'We prohibit copyright infringement. Re-uploading content from other creators is prohibited.',
          contentTypes: ['intimate', 'personal'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'File a formal DMCA Takedown Notice through the process outlined on the site',
              reason: 'Legal requirement for copyright infringement claims'
            },
            {
              description: 'Evidence of original ownership of the content',
              reason: 'To establish copyright ownership'
            },
            {
              description: 'URL(s) of the infringing content',
              reason: 'To identify the specific content that infringes copyright'
            }
          ],
          removalCriteria: [
            "Content violates Pornhub's Terms of Service",
            "Content infringes on another person's copyright (DMCA)",
            'The impersonating account is posting content to which you own the copyright'
          ]
        },
        {
          id: 'ph-hacked-account-policy',
          reference: 'PH-TOS-SECURITY',
          summary: 'Users are responsible for their account security. If an account is compromised, the user should contact support immediately to secure the account and report unauthorized activity.',
          quote: 'Users are responsible for their account security. If an account is compromised, the user should contact support immediately to secure the account and report unauthorized activity.',
          contentTypes: ['intimate', 'personal', 'private'],
          contentContexts: ['hacked'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'Contact Pornhub support with the account username and email',
              reason: 'To report the compromise and initiate recovery'
            },
            {
              description: 'Provide a description of the unauthorized activity',
              reason: 'To understand the scope of the compromise'
            },
            {
              description: 'Evidence of account ownership may be required for recovery',
              reason: 'To verify legitimate ownership before restoring access'
            }
          ],
          removalCriteria: [
            'Evidence of unauthorized access or activity',
            'The account is being used to upload content that violates platform policies',
            'The legitimate owner is locked out of their account'
          ]
        }
      ],
      appealProcess: {
        summary: 'Users can appeal content removal or account termination decisions by contacting support.',
        steps: [
          'If content is removed or an account is terminated, a notification is typically sent via email',
          'Uploaders can appeal a decision by contacting support and providing the content URL and a reason for the appeal',
          'The appeal is reviewed by the Trust and Safety team',
          'The final decision is communicated back to the user via email'
        ]
      }
    },
    {
      id: 'ph-privacy-policy',
      reference: 'PH-PP',
      title: 'Pornhub Privacy Policy',
      summary: 'Privacy policy explaining how Pornhub collects, uses, and protects user data.',
      url: 'https://www.pornhub.com/information/privacy',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null
    },
    {
      id: 'ph-trust-and-safety',
      reference: 'PH-CONTENT-POLICY',
      title: 'Pornhub Trust and Safety Policy',
      summary: 'Comprehensive policy covering content moderation, verification requirements, and safety measures.',
      url: 'https://www.pornhub.com/information/trust-and-safety',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [
        {
          id: 'ph-ncii-policy',
          reference: 'PH-POLICY-NCSII',
          summary: 'Maintains a zero-tolerance policy for non-consensual content. Provides a dedicated Content Removal Request Form for anyone to request the removal of content depicting them for any reason.',
          quote: 'We maintain a zero-tolerance policy for non-consensual content. We provide a dedicated Content Removal Request Form for anyone to request the removal of content depicting them for any reason.',
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
          timeframes: {
            response: { value: 48, unit: 'hours', description: 'Platform aims to review reports from its dedicated removal form within 24-48 hours' },
            removal: { value: 48, unit: 'hours', description: 'Mandated removal under TAKE IT DOWN Act' }
          },
          evidenceRequirements: [
            {
              description: 'URL(s) of the infringing content',
              reason: 'To locate and identify the specific content for removal'
            },
            {
              description: "Use the dedicated 'Content Removal Request Form' available on the site",
              reason: 'To ensure the report is processed through the proper channel'
            },
            {
              description: 'Provide information to identify yourself as the person in the video or as an authorized representative',
              reason: 'To verify the legitimacy of the removal request'
            }
          ],
          removalCriteria: [
            'Content is identified as non-consensual',
            'A person depicted in the content requests its removal via the official form',
            'The uploader cannot provide proof of consent for all depicted individuals'
          ]
        },
        {
          id: 'ph-ai-policy',
          reference: 'PH-POLICY-AI',
          summary: 'Prohibits AI-generated \'deepfake\' videos that impersonate real individuals without their explicit, documented consent.',
          quote: "We prohibit AI-generated 'deepfake' videos that impersonate real individuals without their explicit, documented consent.",
          contentTypes: ['intimate'],
          contentContexts: ['impersonation', 'unknown', 'other'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'URL(s) of the content',
              reason: 'To identify the AI-generated content'
            },
            {
              description: 'Evidence that the content is a deepfake and that the person depicted did not consent',
              reason: 'To establish that the AI content impersonates someone without consent'
            },
            {
              description: 'Reporting is done through the Content Removal Request Form',
              reason: 'To ensure the report is processed through the proper channel'
            }
          ],
          removalCriteria: [
            'Content is an AI-generated deepfake of an identifiable real person',
            'The depicted person has not provided explicit consent for the creation and distribution of the content'
          ]
        },
        {
          id: 'ph-impersonation-policy',
          reference: 'PH-POLICY-IMPERSONATION',
          summary: 'Prohibits impersonation. This is primarily enforced through the mandatory Uploader Verification System, which requires all uploaders to prove their identity.',
          quote: 'We prohibit impersonation. This is primarily enforced through the mandatory Uploader Verification System, which requires all uploaders to prove their identity.',
          contentTypes: ['intimate', 'personal', 'private'],
          contentContexts: ['impersonation'],
          timeframes: null,
          evidenceRequirements: [
            {
              description: 'All uploaders must be verified with government-issued ID',
              reason: 'To prevent impersonation through mandatory identity verification'
            },
            {
              description: 'To report impersonation, use the Content Removal Request Form',
              reason: 'To report suspected impersonation through the proper channel'
            },
            {
              description: 'Provide the URL of the impersonating content/profile and evidence of your own identity',
              reason: 'To verify you are the person being impersonated and process the report'
            }
          ],
          removalCriteria: [
            'An account is found to be impersonating a real person',
            'An uploader is found to have used fraudulent documents during verification',
            'An account is proven to be operated by someone other than the verified individual'
          ]
        }
      ],
      appealProcess: null
    }
  ]
};