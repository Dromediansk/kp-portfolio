"use client";

import { ButtonLink, SectionTitle } from "@/components";
import { useIntersectionObserver } from "@/lib/hooks";
import { ProcessContainer } from "@/components/process";
import { getStaggeredDelay } from "@/lib/utils";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const t = useTranslations("services");

  const services = [
    {
      id: "lessons",
      title: t("items.lessons.title"),
      description: t("items.lessons.description"),
      features: [
        t("items.lessons.features.0"),
        t("items.lessons.features.1"),
        t("items.lessons.features.2"),
        t("items.lessons.features.3"),
      ],
      icon: "🧑‍🏫",
    },
    {
      id: "workbooks",
      title: t("items.workbooks.title"),
      description: t("items.workbooks.description"),
      features: [
        t("items.workbooks.features.0"),
        t("items.workbooks.features.1"),
        t("items.workbooks.features.2"),
        t("items.workbooks.features.3"),
      ],
      icon: "📒",
    },
    {
      id: "practice",
      title: t("items.practice.title"),
      description: t("items.practice.description"),
      features: [
        t("items.practice.features.0"),
        t("items.practice.features.1"),
        t("items.practice.features.2"),
      ],
      icon: "🗣️",
    },
  ];

  return (
    <section
      ref={elementRef}
      id="services"
      className="min-h-screen section-padding"
    >
      <div className="container-max sm:px-6 lg:px-8">
        {/* Header */}
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          animated={true}
          isVisible={hasIntersected}
        />

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const delayClass = getStaggeredDelay(index);
            return (
              <div
                key={service.id}
                className={`bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 ${delayClass} ${
                  hasIntersected
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 group-hover:scale-110 group-hover:rotate-24 transition-all duration-300 ease-out">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-primary-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <ProcessContainer />

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            hasIntersected ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("cta.title")}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="lg"
              className="transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {t("cta.contactUs")}
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="secondary"
              size="lg"
              className="transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {t("cta.viewOurWork")}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
