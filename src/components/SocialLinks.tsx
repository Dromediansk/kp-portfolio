interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  layout?: "horizontal" | "vertical";
  showLabels?: boolean;
}

const SocialLinks = ({
  className = "",
  iconSize = "md",
  layout = "horizontal",
  showLabels = false,
}: SocialLinksProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const containerClasses =
    layout === "horizontal" ? "flex space-x-4" : "flex flex-col space-y-4";

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:katka.plackova3@gmail.com",
      ariaLabel: "Email",
      icon: (
        <svg
          className={`${iconSizeClasses[iconSize]} text-gray-700 dark:text-gray-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26c.3.16.67.16.97 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className={`${containerClasses} ${className}`}>
      {socialLinks.map((link) => (
        <div
          key={link.name}
          className={layout === "vertical" ? "flex items-center space-x-3" : ""}
        >
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className={`${sizeClasses[iconSize]} bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors hover:scale-110 hover:shadow-lg`}
            aria-label={link.ariaLabel}
          >
            {link.icon}
          </a>
          {showLabels && (
            <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              {link.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
