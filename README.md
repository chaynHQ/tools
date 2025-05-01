# Welcome to Tools by Chayn

[Tools by Chayn](https://tools.chayn.co) is a free, secure platform by [Chayn](https://www.chayn.co/about) that helps survivors request the removal of non-consensual images from online platforms. Since 2013, Chayn has reached over 500,000 survivors worldwide with our trauma-informed, survivor-centred, and intersectional approaches in utilizing open-source tech for positive social impact. Our Survivor AI is our latest initiative — providing AI-assisted letter generation, platform-specific guidance, and step-by-step support for content takedown requests.

Explore Chayn's [website](https://www.chayn.co/about), [research](https://org.chayn.co/research), [resources](https://www.chayn.co/resources), [projects](https://org.chayn.co/projects), [impact](https://org.chayn.co/impact), and [support services directory](https://www.chayn.co/global-directory). 💖

## Key Features

Our Survivor AI offers several key features designed to support individuals requesting content removal:

- **Free and Private:** No data storage, completely anonymous usage
- **AI-Powered Assistance:** Intelligent letter generation tailored to specific platforms
- **Platform-Specific Guidance:** Detailed removal processes for major platforms
- **Voice Input Support:** Accessible input options for all questions
- **Multi-Language Support:** Input and responses in multiple languages
- **Step-by-Step Process:** Clear guidance through the entire takedown request process
- **Trauma-Informed Design:** Built with sensitivity to user experiences

## Technical Overview

Technologies Used:

- [Next.js 13](https://nextjs.org/) - React framework with App Router and server components
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component system
- [Anthropic Claude](https://www.anthropic.com/) - AI model for letter generation
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Rollbar](https://rollbar.com/) - Error tracking
- [Google Analytics](https://analytics.google.com/) - Usage analytics
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) - Code quality tools
- [Vitest](https://vitest.dev/) - Unit testing framework

## Local Development

### Prerequisites

- Node.js 18.17 or later
- npm 9.6.7 or later

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/chaynHQ/tools.git
cd tools
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
- `ANTHROPIC_API_KEY`: Your Anthropic API key for Claude
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)
- `NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN`: Rollbar client token (optional)
- `NEXT_PUBLIC_ENV`: Environment ('development' or 'production')

5. Start the development server:
```bash
npm run dev
```

### Development Features

#### Quick Form Fill Mode

When developing locally, you can use a keyboard shortcut to automatically fill forms with test data:

- Windows/Linux: `Alt + P`
- Mac: `Command (⌘) + P`

This feature:
- Only works in development mode
- Pre-fills all form fields with sample data
- Helps speed up testing and development
- Can be triggered at any point in the form flow

The test data includes:
- Platform selection
- Content information
- Reporting details
- Follow-up responses

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details and read our [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

If you discover any security-related issues, please email security@chayn.co instead of using the issue tracker.

# Support Our Work

Chayn is proudly open-source and built with volunteer contributions. We are grateful for the generosity of the open-source community.

**Please consider giving this repository a star ⭐ and follow our GitHub profile to help us grow our open-source community and find more contributors like you!**

Support our mission further by [sponsoring us on GitHub](https://github.com/sponsors/chaynHQ), exploring [our volunteer programs](https://www.chayn.co/volunteer), and following us on [social media](https://linktr.ee/chayn).

## License

This project uses the [MIT License](/LICENSE). While the core tech stack included here is open-source, some external integrations used in this project require subscriptions.

All of Chayn's projects are open-source.