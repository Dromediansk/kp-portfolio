"use client";

import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";

type AppLocale = (typeof routing.locales)[number];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;

  const switchLanguage = (newLocale: AppLocale) => {
    // Use router.replace to update URL without adding to browser history
    // The next-intl router will handle locale switching properly
    router.replace(pathname, { locale: newLocale });
  };

  const locales = routing.locales;

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLanguage(loc)}
          disabled={locale === loc}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            locale === loc
              ? "bg-primary-600 text-white shadow-sm"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          }`}
          aria-label={`Switch to ${loc.toUpperCase()}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
