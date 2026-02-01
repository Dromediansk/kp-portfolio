"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  const items = (key: string): string[] => {
    const value = t.raw(key);
    return Array.isArray(value) ? (value as string[]) : [];
  };

  const email = siteConfig.social.email;
  const website = siteConfig.url;
  const websiteLabel = website.replace(/^https?:\/\//, "");

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t("title")}
          </h1>

          <div className="text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              <strong>{t("effectiveDate")}</strong> {t("date")}
              <br />
              <strong>{t("lastUpdated")}</strong> {t("date")}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. {t("sections.introduction.title")}
              </h2>
              <div className="space-y-3">
                <p>{t("sections.introduction.content.paragraph1")}</p>
                <p>{t("sections.introduction.content.paragraph2")}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. {t("sections.informationCollection.title")}
              </h2>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                2.1 {t("sections.informationCollection.directInfo.title")}
              </h3>
              <p>{t("sections.informationCollection.directInfo.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {items("sections.informationCollection.directInfo.items").map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 mt-6">
                2.2 {t("sections.informationCollection.consentInfo.title")}
              </h3>
              <p>{t("sections.informationCollection.consentInfo.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {items("sections.informationCollection.consentInfo.items").map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
              <p className="mt-3 text-sm bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <strong>
                  {t(
                    "sections.informationCollection.consentInfo.importantLabel",
                  )}
                </strong>{" "}
                {t("sections.informationCollection.consentInfo.important")}
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 mt-6">
                2.3 {t("sections.informationCollection.cookies.title")}
              </h3>
              <p>{t("sections.informationCollection.cookies.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {items("sections.informationCollection.cookies.items").map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
              <p className="mt-3 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <strong>
                  {t("sections.informationCollection.cookies.choiceLabel")}
                </strong>{" "}
                {t("sections.informationCollection.cookies.choice")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. {t("sections.howWeUse.title")}
              </h2>
              <p>{t("sections.howWeUse.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.howWeUse.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. {t("sections.googleAnalytics.title")}
              </h2>
              <p>
                <strong>{t("sections.googleAnalytics.intro")}</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {items("sections.googleAnalytics.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                <strong>{t("sections.googleAnalytics.controlLabel")}</strong>{" "}
                {t("sections.googleAnalytics.control")}
              </p>
              <p className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                <strong>{t("sections.googleAnalytics.noConsentLabel")}</strong>{" "}
                {t("sections.googleAnalytics.noConsent")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. {t("sections.informationSharing.title")}
              </h2>
              <p>{t("sections.informationSharing.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.informationSharing.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. {t("sections.dataSecurity.title")}
              </h2>
              <p>{t("sections.dataSecurity.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.dataSecurity.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                {t("sections.dataSecurity.disclaimer")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. {t("sections.yourRights.title")}
              </h2>
              <p>{t("sections.yourRights.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.yourRights.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3">{t("sections.yourRights.contact")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. {t("sections.cookieManagement.title")}
              </h2>
              <p>{t("sections.cookieManagement.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.cookieManagement.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">
                  {t("sections.cookieManagement.choices.title")}
                </p>
                <p>{t("sections.cookieManagement.choices.accept")}</p>
                <p>{t("sections.cookieManagement.choices.decline")}</p>
                <p className="text-sm">
                  <strong>{t("sections.cookieManagement.noteLabel")}</strong>{" "}
                  {t("sections.cookieManagement.note")}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. {t("sections.dataRetention.title")}
              </h2>
              <p>{t("sections.dataRetention.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.dataRetention.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3">{t("sections.dataRetention.deletion")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. {t("sections.internationalTransfers.title")}
              </h2>
              <p>{t("sections.internationalTransfers.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.internationalTransfers.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. {t("sections.childrensPrivacy.title")}
              </h2>
              <p>{t("sections.childrensPrivacy.content")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. {t("sections.changes.title")}
              </h2>
              <p>{t("sections.changes.intro")}</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {items("sections.changes.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3">{t("sections.changes.acceptance")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                13. {t("sections.contact.title")}
              </h2>
              <p>{t("sections.contact.intro")}</p>
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {t("sections.contact.details.title")}
                  </h3>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${email}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {email}
                    </a>
                  </p>
                  <p className="mt-1">
                    {t("sections.contact.details.location")}
                  </p>
                  <p className="mt-1">
                    <strong>{t("sections.contact.details.website")}:</strong>{" "}
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {websiteLabel}
                    </a>
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm">{t("sections.contact.gdprNote")}</p>
                </div>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("sections.compliance.statement")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
