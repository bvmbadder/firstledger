import { FiArrowUpRight } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tokens from "./Tokens";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
import { useState } from "react";
import { moreWallets, wallets } from "../utils";
import Modal from "../components/Modal";
import TabModal from "../components/TabModal";

const Home = () => {
  const [formTab, setFormTab] = useState(false);
  const onSetFormTabOpen = (value: string) => {
    setValue(value);
    closeFirstModal();
    setFormTab(true);
  };
  const onSetFormTabClose = () => {
    setFormTab(false);
    openFirstModal();
  };

  const onSetFormTabOpen2 = (value: string) => {
    setValue(value);
    closeSecondModal();
    setFormTab(true);
  };
  const onSetFormTabClose2 = () => {
    setFormTab(false);
    openSecondModal();
  };

  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => {
    closeFirstModal();
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);

  const backToFirstModal = () => {
    closeSecondModal();
    setFirstModalOpen(true);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWallets = moreWallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [value, setValue] = useState("");
  return (
    <div>
      {formTab && (
        <TabModal
          isOpen={formTab}
          onClose={isFirstModalOpen ? onSetFormTabClose : onSetFormTabClose2}
          value={value}
        />
      )}
      <Modal
        icon={q}
        isOpen={isFirstModalOpen}
        title="Connect Wallet"
        closeModal={closeFirstModal}
      >
        <div className="flex flex-col">
          <ul className="p-4">
            {wallets.map((wallet) => (
              <li
                className="flex items-center justify-between font-[400] text-sm text-white mb-2 cursor-pointer hover:bg-gray-600 p-2 rounded-full bg-[#252626] relative"
                key={wallet.id}
                onClick={() => {
                  wallet.id == 4
                    ? openSecondModal()
                    : onSetFormTabOpen(wallet.name);
                }}
              >
                <div className="flex items-center">
                  <img
                    className="rounded-full mr-2 w-10 h-10"
                    src={wallet.icon}
                    alt=""
                  />
                  <span className="text-md">{wallet.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 text-center p-5 bg-[#252626] rounded-b-3xl">
            By connecting your wallet, you agree to our{" "}
            <span className="text-white">Terms of Service</span>
          </div>
        </div>
      </Modal>
      <Modal
        icon={back}
        isOpen={isSecondModalOpen}
        title="All wallets"
        closeModal={closeSecondModal}
        backToFirstModal={backToFirstModal}
      >
        <div className="p-4">
          <input
            type="search"
            placeholder="Search wallet"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2  rounded-full mb-4 outline-green-400 pl-5  bg-[#252626]"
          />
          <div className="grid grid-cols-4 gap-2 overflow-auto scrollbar-none max-h-96">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.name}
                onClick={() => {
                  onSetFormTabOpen2(wallet.name);
                }}
                className="flex flex-col cursor-pointer text-xs items-center justify-between bg-[#252626] p-1 rounded-2xl"
              >
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-11 h-11 rounded-full"
                />
                <div className="text-white mt-2 w-full text-center font-Wix text-xs truncate">
                  {wallet.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <Header />
      <section className="bg-[#011d77] py-32 text-white p-4 lg:py-36 lg:pt-44 lg:px-32">
        <div className="mx-auto container flex flex-col md:flex-row gap-6 md:gap-20 items-center">
          <div className="p-3">
            <img
              src="https://firstledger.net/images/fl-reveal-2.webp"
              className="lg:w-[400px] w-[250px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-7 text-center lg:text-start">
            <h1 className="text-5xl font-bold">Welcome to First Ledger</h1>
            <h2 className="text-2xl">
              The fastest way to trade assets on the XRP Ledger. You will just
              need a Telegram account to get started. Click connect to create
              your first wallet.
            </h2>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                className="bg-[#14161a] text-white border border-[#353a46] rounded h-fit p-2 px-3"
                onClick={() => setFirstModalOpen(true)}
              >
                Connect
              </button>{" "}
              <a
                href="https://docs.firstledger.net/"
                className="bg-[#14161a] text-white border text-center border-[#353a46] rounded h-fit p-2 px-3"
              >
                Documentation
              </a>
              <button
                className="bg-[#14161a] text-white border border-[#353a46] rounded h-fit p-2 px-3"
                onClick={() => setFirstModalOpen(true)}
              >
                Create a Token
              </button>
            </div>
          </div>
        </div>
      </section>
      <Tokens />
      <section className="bg-black py-32 text-white p-4 lg:py-36 lg:pt-44 lg:px-32">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8">
          <h1 className="text-3xl font-bold">First Ledger quick start</h1>
          <div className="w-full h-full flex">
            <iframe
              width="100%"
              height="100%"
              className="aspect-[16/9]"
              src="https://www.youtube.com/embed/PNyIAbZiGqM?si=YyPFxqglGv03BLf6"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-[#14161a] py-32 text-white p-4 lg:py-36 lg:pt-44 lg:px-32">
        <div className="mx-auto container flex flex-col md:flex-row gap-6 md:gap-20 items-center">
          <div className="p-3">
            <img
              src="https://firstledger.net/images/firstledger_imposter.webp"
              className="lg:w-[400px] w-[250px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-7 text-center lg:text-start">
            <h1 className="text-4xl font-bold">Beware of imposters</h1>
            <h2 className="text-xxl">
              There is only one place for official First Ledger support, watch
              out for imposters trying to steal from you. We will never DM you
              or ask for your keys.
            </h2>
            <div className="flex flex-col md:flex-row gap-2">
              <button className="bg-[#14161a] flex gap-2 items-center text-white border text-center border-[#353a46] rounded h-fit p-2 px-3">
                Get Support Here <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="bg-[#d90000] py-32 text-white p-4 lg:py-36 lg:pt-44 lg:px-32">
        <div className="mx-auto container flex flex-col md:flex-row gap-6 md:gap-20 items-center">
          <div className="p-3">
            <img
              src="https://firstledger.net/images/firstledger_chad.svg"
              className="lg:w-[400px] w-[250px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-7 text-center lg:text-start">
            <h1 className="text-4xl font-bold">
              Meme coins are not investments
            </h1>
            <h2 className="text-xl">
              There will always be sophisticated players trying to take your
              XRP. This is why having fun with small bags is the best strategy.
            </h2>
            <h2 className="text-xl">
              Seriously, many of these tokens go to zero in an instant.
            </h2>
            <div className="flex flex-col md:flex-row gap-2">
              <button className="bg-[#14161a] flex gap-2 items-center text-white border text-center border-[#353a46] rounded h-fit p-2 px-3">
                Resources <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#601600] py-32 text-white p-4 lg:py-36 lg:pt-44 lg:px-32">
        <div className="mx-auto container flex flex-col md:flex-row gap-6 md:gap-20 items-center">
          <div className="p-3">
            <img
              src="https://firstledger.net/images/firstledger_wojak.webp"
              className="lg:w-[400px] w-[250px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-7 text-center lg:text-start">
            <h1 className="text-4xl font-bold">Hello sh*theads</h1>
            <h2 className="text-xl">
              First Ledger does not censor garbage, but that does not mean we
              will promote it. If you are creating copyrighted or excessively
              graphic meme coins, we will hide them from the token list.
            </h2>
            <h2 className="text-xl">
              Just be cool, have fun, and everyone is happy.
            </h2>
            <div className="flex flex-col md:flex-row gap-2">
              <button className="bg-[#14161a] flex gap-2 items-center text-white border text-center border-[#353a46] rounded h-fit p-2 px-3">
                Resources <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
