"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components";
import { useIntersectionObserver } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  lessonDuration: string;
  frequency: string;
  message: string;
}

const ContactForm = () => {
  const { hasIntersected, elementRef } = useIntersectionObserver();
  const t = useTranslations("contact.form");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    lessonDuration: "",
    frequency: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      lessonDuration: "",
      frequency: "",
      message: "",
    });
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.lessonDuration &&
    formData.frequency &&
    formData.message.trim();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        resetForm();
      } else {
        throw new Error("Failed to send message. Please try again later.");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-1000 ease-out ${
        hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <h2
        className={`text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-all duration-700 delay-200 ${
          hasIntersected
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        {t("title")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className={`space-y-6 transition-all duration-800 delay-400 ${
          hasIntersected
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("yourName")} {t("required")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("email")} {t("required")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {t("company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="lessonDuration"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("lessonDuration")} {t("required")}
            </label>
            <div className="relative">
              <select
                id="lessonDuration"
                name="lessonDuration"
                value={formData.lessonDuration}
                onChange={handleChange}
                required
                className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none"
              >
                <option value="" disabled>
                  {t("placeholders.lessonDuration")}
                </option>
                <option value="30">{t("durationOptions.30min")}</option>
                <option value="45">{t("durationOptions.45min")}</option>
                <option value="60">{t("durationOptions.60min")}</option>
                <option value="90">{t("durationOptions.90min")}</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          <div>
            <label
              htmlFor="frequency"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t("frequency")} {t("required")}
            </label>
            <div className="relative">
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                required
                className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none"
              >
                <option value="" disabled>
                  {t("placeholders.frequency")}
                </option>
                <option value="1">{t("frequencyOptions.1x")}</option>
                <option value="2">{t("frequencyOptions.2x")}</option>
                <option value="3">{t("frequencyOptions.3x")}</option>
                <option value="4">{t("frequencyOptions.4x")}</option>
                <option value="5">{t("frequencyOptions.5x")}</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {t("textMessage")} {t("required")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
            placeholder={t("placeholders.message")}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {isSubmitting ? t("sending") : t("sendMessage")}
        </Button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
            {t("success")}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
            {t("error")}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
