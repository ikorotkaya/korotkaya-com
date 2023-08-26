const contactOptions = [
  {
    label: "Say hello! 👋",
    link: "mailto:irina@korotkaya.com",
    icon: "gmail.png",
    alt: "Gmail",
  },
  {
    label: "Let's connect 🔗",
    link: "https://www.linkedin.com/in/irinakorotkaya/",
    icon: "linkedin.png",
    alt: "LinkedIn",
  },
  {
    label: "See my works 🎨",
    link: "https://github.com/ikorotkaya",
    icon: "github.png",
    alt: "GitHub",
  },
];

export function Contact() {
  return (
    <div className="app__topic">
      <div className="topic__contact" id="contact">
        <div className="contact__headline topic-headline">Contact</div>
        <div className="contact__container">
          {contactOptions.map((option, index) => (
            <div key={index} className="contact__social-link">
              <img
                className={`social-link__logo ${option.icon.replace(
                  ".png",
                  ""
                )}`}
                src={option.icon}
                alt={option.alt}
              />
              <a
                className={`social-link__link ${option.icon.replace(
                  ".png",
                  ""
                )}`}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {option.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
