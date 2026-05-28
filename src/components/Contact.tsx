import React from "react";

const contactOptions = [
  {
    label: "Email",
    link: "mailto:irina@korotkaya.com",
    icon: "/images/gmail.webp",
    alt: "Gmail",
    iconType: "img" as const,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/irinakorotkaya/",
    icon: "/images/linkedin.webp",
    alt: "LinkedIn",
    iconType: "img" as const,
  },
  {
    label: "GitHub",
    link: "https://github.com/ikorotkaya",
    icon: "/images/github.webp",
    alt: "GitHub",
    iconType: "img" as const,
  },
  {
    label: "Writing",
    link: "https://ikorotkaya.github.io/blog/",
    icon: null,
    alt: "Blog",
    iconType: "writing" as const,
  },
];

function WritingIcon() {
  return (
    <svg
      className="social-link__logo"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

export function Contact() {
  return (
    <div className="app__topic">
      <div className="topic__contact" id="contact">
        <div className="contact__headline topic-headline">Contact</div>
        <div className="contact__container">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              className="contact__social-link"
              href={option.link}
              target={option.link.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={option.label}
            >
              {option.iconType === "img" ? (
                <img
                  className="social-link__logo"
                  src={option.icon!}
                  alt={option.alt}
                />
              ) : (
                <WritingIcon />
              )}
              <span className="social-link__link">{option.label}</span>
              <span className="social-link__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
