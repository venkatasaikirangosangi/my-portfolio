# AWS Console Portfolio

A stunning portfolio website styled like the AWS Management Console, perfect for Cloud DevOps Engineers!

## 🚀 Features

- **AWS Console UI**: Authentic AWS Management Console design
- **Smooth Animations**: Beautiful transitions and hover effects using Framer Motion
- **Responsive Design**: Works perfectly on all devices
- **Dark Theme**: Professional dark theme matching AWS Console
- **Interactive Components**: Engaging UI with real-time metrics
- **Multiple Sections**:
  - Dashboard with quick stats and recent activity
  - Projects (styled as EC2 instances)
  - Skills (styled as CloudWatch metrics)
  - Experience (styled as Cost Explorer)
  - About (styled as IAM user profile)
  - Contact (styled as SNS notification service)

## 🛠️ Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Your Information

Edit the following files to add your personal information:

- **Dashboard**: `app/page.tsx`
- **Projects**: `app/projects/page.tsx`
- **Skills**: `app/skills/page.tsx`
- **Experience**: `app/experience/page.tsx`
- **About**: `app/about/page.tsx`
- **Contact**: `app/contact/page.tsx`

### Color Scheme

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  aws: {
    dark: "#0F1B2A",      // Background
    darker: "#0A1929",    // Darker background
    sidebar: "#16202E",   // Sidebar
    orange: "#FF9900",    // AWS Orange
    blue: "#527FFF",      // AWS Blue
    border: "#2A3F54",    // Border color
    hover: "#1E3A52",     // Hover state
    card: "#1A2332",      // Card background
  },
}
```

## 📝 Structure

```
my-portfolio/
├── app/
│   ├── page.tsx              # Dashboard
│   ├── projects/page.tsx     # Projects section
│   ├── skills/page.tsx       # Skills section
│   ├── experience/page.tsx   # Experience section
│   ├── about/page.tsx        # About section
│   ├── contact/page.tsx      # Contact section
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Sidebar.tsx           # Navigation sidebar
│   ├── Header.tsx            # Top header
│   ├── ServiceCard.tsx       # Service card component
│   └── MetricCard.tsx        # Metric card component
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 💡 Tips

- Replace placeholder data with your real projects and experience
- Add your actual GitHub, LinkedIn, and other social links
- Update contact information
- Add your profile picture
- Customize the color scheme to match your brand

## 📄 License

MIT License - feel free to use this for your portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by a DevOps Engineer for DevOps Engineers
