# RemitCache Landing and Waitlist Page

This is the web application for RemitCache, a platform for tracking and managing remittances across multiple channels.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/remit-cache-web.git
   cd remit-cache-web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Set up Resend:
   - Sign up for a Resend account at https://resend.com
   - Obtain your API key from the Resend dashboard
   - Add the API key to your `.env.local` file as shown above

### Running the Development Server
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js app directory
- `components/`: React components
  - `ui/`: Reusable UI components
- `actions/`: Server actions
  - `send-email.ts`: Email sending functionality
- `email/`: Email templates
- `lib/`: Utility functions and helpers
  - `utils.ts`: General utility functions
- `public/`: Static assets (images, icons, etc.)

## Key Features

- Landing page with hero section, features, FAQ, and contact form
- Email functionality for contact form and waitlist signup
- Responsive design with dark mode support
- Privacy Policy and Terms of Service pages

## Built With

- [Next.js](https://nextjs.org/) - The React framework for production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Aceternity UI](https://ui.aceternity.com/) - Modern UI components for React
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Resend](https://resend.com/) - Email API for developers
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React

## Deployment

This project is set up for easy deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
