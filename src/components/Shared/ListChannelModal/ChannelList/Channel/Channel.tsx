import { FC, useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ChevronDownIcon } from "../../../../../assets/chevron-down.svg";
import { ReactComponent as ChevronUpIcon } from "../../../../../assets/chevron-up.svg";
import { LightningChannel } from "../../../../../models/lightning-channel";
import { AppContext } from "../../../../../store/app-context";
import { convertToString } from "../../../../../util/format";

type Props = {
  showDetails: boolean;
  channel: LightningChannel;
  onClick: (channelId: string) => void;
  onDelete: (channelId: string, forceClose: boolean) => void;
};

const Channel: FC<Props> = ({ showDetails, channel, onClick, onDelete }) => {
  const { unit } = useContext(AppContext);
  const { t } = useTranslation();
  const [confirm, setConfirm] = useState(false);
  const forceCloseEl = useRef<HTMLInputElement>(null);

  const convertedLocal = convertToString(unit, channel.balance_local);
  const convertedRemote = convertToString(unit, channel.balance_remote);

  const clickHandler = () => {
    setConfirm(false);
    onClick(channel.channel_id);
  };

  const closeChannelHandler = () => {
    onDelete(channel.channel_id, forceCloseEl.current?.checked || false);
  };

  return (
    <li className="bg-gray-200 p-3 shadow-inner hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
      <div
        className="flex justify-between border-b border-gray-500 pb-2"
        onClick={clickHandler}
      >
        <span>{channel.peer_alias}</span>
        {showDetails && <ChevronUpIcon className="h-6 w-6" />}
        {!showDetails && <ChevronDownIcon className="h-6 w-6" />}
      </div>
      {showDetails && (
        <section className="flex flex-col gap-4 py-4">
          <article className="flex justify-around">
            <div className="flex w-1/2 justify-around">
              <h4 className="font-bold">{t("home.channel_id")}</h4>
              <p>{channel.channel_id}</p>
            </div>
            <div className="flex w-1/2 justify-around">
              <h4 className="font-bold">{t("home.active")}</h4>
              <p>{channel.active ? t("setup.yes") : t("home.no")}</p>
            </div>
          </article>
          <article className="flex justify-around">
            <div className="flex flex-col justify-around md:w-1/2 md:flex-row">
              <h4 className="font-bold">{t("home.local_balance")}</h4>
              <p>{convertedLocal}</p>
            </div>
            <div className="flex flex-col justify-around md:w-1/2 md:flex-row">
              <h4 className="font-bold">{t("home.remote_balance")}</h4>
              <p>{convertedRemote}</p>
            </div>
          </article>
          <article>
            <button
              className="bd-button mb-3 p-2"
              disabled={confirm}
              onClick={() => setConfirm(true)}
            >
              {t("home.close_channel")}
            </button>
            {confirm && (
              <div className="flex flex-col justify-center gap-4">
                <span>Confirm closing the Channel</span>
                <div className="flex items-center justify-center gap-2">
                  <label htmlFor="forceClose">{t("home.force_close")}</label>
                  <input id="forceClose" type="checkbox" ref={forceCloseEl} />
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setConfirm(false)}
                    className="bd-button-red p-2"
                  >
                    Cancel
                  </button>
                  <button
                    className="bd-button p-2"
                    onClick={closeChannelHandler}
                  >
                    YES
                  </button>
                </div>
              </div>
            )}
          </article>
        </section>
      )}
    </li>
  );
};

export default Channel;
