/* eslint-disable */
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";
import Image from "next/image";

const weburl = "https://complete-cs-degree.vercel.app";
export default {
  logo: (
    <>
      {/* <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg> */}
      <img
        src="/favicon.png"
        alt="CS degree"
        width="24"
        height="24"
        className=""
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        Complete CS Degree
      </span>
    </>
  ),
  project: {
    link: "https://github.com/syedfaysel/complete-cs-degree",
  },
  docsRepositoryBase:
    "https://github.com/syedfaysel/complete-cs-degree/tree/main",

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title, frontMatter } = useConfig();
    const gitTimestampString = frontMatter.gitTimestamp;

    const url =
      weburl + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const realTitle = title !== "Index" ? title : "xCall Documentation";

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: realTitle,
      image: "https://xcall.dev/images/link-preview.jpg",
      author: {
        "@type": "Organization",
        name: "CS Degree",
        url: weburl,
      },
      publisher: {
        "@type": "Organization",
        name: "ICON Foundation",
        logo: {
          "@type": "ImageObject",
          url: "https://xcall.dev/images/icon-foundation-logo.svg",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://xcall.dev/",
      },
      datePublished: "2023-07-31",
      dateModified: gitTimestampString,
      description:
        "An opensource project to complete CS degree with tutorials, articles, resources and many more",
    };

    return (
      <>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="google-site-verification"
          content="gBPl8PRPQlE7TZUTQTRJ8O1nLvNc1lso7IqyNYWzrTY"
        />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "CS Degree"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "An opensource project to complete CS degree with tutorials, articles, resources and many more"
          }
        />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="xCall" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/link-preview.jpg" />
        <meta name="twitter:site:domain" content="xcall.dev" />
        <meta name="twitter:url" content={weburl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </>
    );
  },

  primaryHue: {
    dark: 182,
    light: 192,
  },

  useNextSeoProps() {
    const { asPath } = useRouter();
    const { title, frontMatter } = useConfig();
    if (asPath !== "/") {
      return {
        titleTemplate: `%s`,
        description: frontMatter.description,
        openGraph: {
          description: frontMatter.description,
          type: "website",
          url: weburl,
          // images: [
          //   {
          //     url: "https://xcall.dev/images/link-preview.jpg",
          //     width: 1200,
          //     height: 630,
          //     alt: "xCall Documentation",
          //   },
          // ],
        },
      };
    } else {
      return {
        title: "Complete CS Degree & Rescources",
        description:
          "An opensource project to complete CS degree with tutorials, articles, resources and many more",
        openGraph: {
          title: "Complete CS Degree",
          description:
            "An opensource project to complete CS degree with tutorials, articles, resources and many more",
          type: "website",
          url: weburl,
          // images: [
          //   {
          //     url: "https://xcall.dev/images/link-preview.jpg",
          //     width: 1200,
          //     height: 630,
          //     alt: "xCall Documentation",
          //   },
          // ],
        },
      };
    }
  },

  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    autoCollapse: false,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navigation: {
    prev: true,
    next: true,
  },

  editLink: {
    text: "Contribute directly to this page →",
  },
  feedback: {
    content: "Feedback or questions about this page? Post them here →",
    labels: "feedback",
  },

  toc: {
    backToTop: true,
  },

  footer: {
    text: (
      <div className="relative z-40 flex flex-col items-center w-full sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="homepage"
            href="https://ocwx.vercel.app"
          >
            {/* <Image
              className="mx-auto"
              src="/images/icon-foundation-logo.svg"
              height="50"
              width="120"
              alt={"ICON logo"}
            /> */}
            ocwX
          </a>
        </div>
        <span className="py-2 mx-auto text-[6px]">© CS Degree 2024</span>
      </div>
    ),
  },
  // faviconGlyph: '🌐',
  // faviconGlyph: "🎓",

  // ... other theme options
};
