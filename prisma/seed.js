// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "English-Swahili Translator",
        company: "Centific / ISAAC",
        description:
          "Translate and review English-to-Swahili content for AI training data. Strong attention to grammar, dialect accuracy, and cultural context required.",
        category: "Translation",
        type: "Contract",
        location: "Remote - Africa",
        salaryMin: 300,
        salaryMax: 800,
        applyEmail: "jobs@example.com",
        featured: true,
      },
      {
        title: "AI Data Annotator",
        company: "Innodata",
        description:
          "Label and evaluate datasets for machine learning models. Experience with annotation platforms like Remotasks, iMerit, or similar preferred.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        salaryMin: 200,
        salaryMax: 600,
        applyUrl: "https://example.com/apply/annotator",
      },
      {
        title: "Frontend Developer (Next.js)",
        company: "Nimo Boutique",
        description:
          "Build and maintain e-commerce features for a fashion boutique site. Experience with Next.js, Prisma, and Tailwind CSS required.",
        category: "Web Dev",
        type: "Part-time",
        location: "Remote - Kenya",
        salaryMin: 500,
        salaryMax: 1200,
        applyEmail: "careers@example.com",
      },
      {
        title: "Audio Transcriptionist (Swahili)",
        company: "Perle",
        description:
          "Transcribe spoken Swahili audio recordings into accurate text. Must have native or near-native fluency and strong typing speed.",
        category: "Transcription",
        type: "Gig",
        location: "Remote - Global",
        salaryMin: 150,
        salaryMax: 400,
        applyUrl: "https://example.com/apply/transcription",
      },
      {
        title: "Graphic Designer - Social Media Assets",
        company: "HumanSignal",
        description:
          "Design social media graphics and brand assets. Portfolio review required. Canva or Adobe Suite proficiency expected.",
        category: "Design",
        type: "Contract",
        location: "Remote - Global",
        salaryMin: 250,
        salaryMax: 700,
        applyEmail: "design@example.com",
      },
      {
        title: "Chat Moderator",
        company: "Cloudworkers",
        description:
          "Review and moderate chat conversations for quality and compliance. Flexible hours, fully remote, English and Swahili a plus.",
        category: "Other",
        type: "Part-time",
        location: "Remote - Global",
        salaryMin: 180,
        salaryMax: 450,
        applyUrl: "https://example.com/apply/moderator",
      },

      // --- AI Training & Data Annotation Platforms ---
      {
        title: "Data Annotation & AI Training Tasks",
        company: "CloudFactory",
        description:
          "Ongoing data annotation and AI training work. Direct signup available from Kenya, no VPN required. Requires ID verification, English fluency, and stable internet.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Kenya-friendly",
        applyUrl: "https://cloudfactory.com",
      },
      {
        title: "AI Data Tasks & Research Studies",
        company: "Prolific",
        description:
          "Paid research studies and AI evaluation tasks. Access from Kenya can be restricted at times - a VPN may help. Requires fluent English and an active PayPal account.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://www.prolific.com",
      },
      {
        title: "Data Labeling & Microtasks",
        company: "Toloka",
        description:
          "Crowdsourced data labeling microtasks. May require a VPN to access depending on your region. Age 18+, Google or Yandex account required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://toloka.ai",
      },
      {
        title: "AI Data Annotation & Qualification Projects",
        company: "Appen",
        description:
          "One of the largest AI training data platforms, with ongoing annotation and evaluation projects. Requires ID verification, PayPal or Payoneer, and passing qualification tests.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://appen.com",
      },
      {
        title: "AI Training & Content Evaluation",
        company: "TELUS International AI",
        description:
          "AI training and content evaluation tasks with a strong English requirement and online testing.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://telusinternational.com",
      },
      {
        title: "Translation Quality & Data Annotation",
        company: "OneForma",
        description:
          "Translation quality scoring and data annotation projects, including English-to-Swahili work. Requires registration, language tests, and Payoneer or PayPal.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://oneforma.com",
      },
      {
        title: "Data Labeling Training Modules",
        company: "Remotasks",
        description:
          "Entry-level data labeling work with built-in training modules before task access. Age 18+, PayPal account required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://remotasks.com",
      },
      {
        title: "Microtasks & AI Data Work",
        company: "Clickworker",
        description:
          "General microtask platform including AI data collection and labeling work. English proficiency and PayPal account required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://clickworker.com",
      },
      {
        title: "Data Labeling Tasks",
        company: "TaskVerse",
        description: "Data labeling tasks open to new registrants. Email registration required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://taskverse.com",
      },
      {
        title: "Language & AI Training Projects",
        company: "Lionbridge",
        description:
          "Language-focused AI training projects with structured onboarding. Language proficiency tests and project-specific training required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://lionbridge.com",
      },
      {
        title: "Translation & Linguistic AI Projects",
        company: "Welocalize",
        description:
          "Localization and linguistic data projects supporting AI training pipelines. Translation or linguistic skills required.",
        category: "Translation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://welocalize.com",
      },
      {
        title: "Translation & Annotation Projects",
        company: "TransPerfect",
        description:
          "Professional translation and annotation work for a large language services firm. Language proficiency and professional background preferred.",
        category: "Translation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://transperfect.com",
      },
      {
        title: "Translation & Data Annotation",
        company: "RWS",
        description:
          "Translation and annotation work for enterprise language services. Prior translation or annotation experience required.",
        category: "Translation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://rws.com",
      },
      {
        title: "AI Data Labeling Projects",
        company: "LXT AI",
        description:
          "Data labeling projects supporting AI and speech technology training. English fluency and data labeling skills required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://lxt.ai",
      },
      {
        title: "AI Data Annotation Projects",
        company: "Innodata",
        description:
          "AI training data projects with structured onboarding for annotators. Professional background and onboarding completion required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://innodata.com",
      },
      {
        title: "Data Annotation & Labeling",
        company: "iMerit",
        description:
          "Data annotation projects across computer vision and NLP datasets. Data annotation training and English fluency required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://imerit.net",
      },
      {
        title: "Annotation & Labeling Projects",
        company: "SuperAnnotate",
        description:
          "Image and data annotation projects on an AI-focused labeling platform. Annotation experience preferred.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://superannotate.com",
      },
      {
        title: "AI/Data Labeling Opportunities",
        company: "Gloz",
        description:
          "Data labeling opportunities for candidates interested in AI work. Resume upload required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://gloz.ai",
      },
      {
        title: "Remote Data & AI Tasks",
        company: "RemoExperts (Rex.zone)",
        description:
          "Remote AI and data task platform with account-based access. Account creation and ID verification required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://rex.zone",
      },
      {
        title: "AI Training Projects",
        company: "Silencio AI",
        description:
          "AI training projects with onboarding provided per project. English fluency required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://silencio.ai",
      },
      {
        title: "Data Annotation & Model Evaluation",
        company: "HumanSignal",
        description:
          "Data annotation and model evaluation work via onboarding portal. Account registration via onboarding link required.",
        category: "Annotation",
        type: "Gig",
        location: "Remote - Global",
        applyUrl: "https://onboard.humansignal.com",
      },
    ],
  });

  console.log("Seed data inserted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });