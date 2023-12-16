import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export type Props = {
  onClose: () => void;
};

const Electrs: FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <main className="page-container content-container w-full bg-gray-100 dark:bg-gray-700 dark:text-white">
      {/* Back Button */}
      <section className="w-full px-5 py-9 dark:text-gray-200">
        <button
          onClick={onClose}
          className="flex items-center text-xl font-bold outline-none"
        >
          <ChevronLeftIcon className="inline-block h-5 w-5" />
          {t("navigation.back")}
        </button>
      </section>
    </main>
  );
};

export default Electrs;
