const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#181b20]">
        <ul className="links">
          <li>
            <a href="/">Tokens</a>
          </li>
          <li>
            <a href="/">Leaderboards</a>
          </li>
          <li>
            <a target="_blank" href="https://docs.firstledger.net/">
              Docs
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/firstledger_bot">
              Telegram Bot
            </a>
          </li>
          <li>
            <a href="/">Fees</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
        <div className="social">
          <a target="_blank" href="https://twitter.com/first_ledger">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
            </svg>
          </a>
          <a target="_blank" href="https://t.me/FirstLedgerHub">
            <svg
              fill="currentColor"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.6104 7.48257C17.6154 7.48257 17.622 7.48257 17.6287 7.48257C17.8021 7.48257 17.9631 7.53652 18.0951 7.62948L18.0926 7.62782C18.1889 7.71165 18.2537 7.82952 18.2694 7.96232V7.96481C18.286 8.06607 18.2952 8.18227 18.2952 8.30096C18.2952 8.35491 18.2935 8.40803 18.2893 8.46116V8.45369C18.1026 10.42 17.2925 15.1884 16.8808 17.3896C16.7065 18.3217 16.3637 18.6338 16.0317 18.6637C15.3104 18.7309 14.7626 18.1873 14.0637 17.7291C12.9698 17.0111 12.3514 16.5646 11.2898 15.8649C10.0623 15.0573 10.8582 14.6116 11.5571 13.8861C11.7405 13.6952 14.9203 10.8026 14.9826 10.5403C14.9859 10.5246 14.9876 10.5071 14.9876 10.4889C14.9876 10.4241 14.9635 10.3652 14.9245 10.3204C14.8813 10.2922 14.8274 10.2764 14.7709 10.2764C14.7336 10.2764 14.6979 10.2839 14.6647 10.2963L14.6663 10.2955C14.5568 10.3204 12.8093 11.4752 9.42397 13.76C9.05462 14.0513 8.58815 14.2356 8.08018 14.2571H8.0752C7.35558 14.17 6.70236 14.0098 6.08234 13.7815L6.14376 13.8015C5.36521 13.5475 4.74685 13.4138 4.79997 12.9839C4.82819 12.7603 5.1364 12.5315 5.7246 12.2975C9.34789 10.7188 11.7641 9.67823 12.9731 9.1758C14.3069 8.4678 15.8533 7.88513 17.4793 7.50747L17.6096 7.48174L17.6104 7.48257ZM12.471 0C5.58018 0.0166003 0 5.60674 0 12.5C0 19.4032 5.59595 25 12.5 25C19.4041 25 25 19.404 25 12.5C25 5.60674 19.4198 0.0166003 12.5307 0H12.5291C12.5097 0 12.4903 0 12.471 0Z"></path>
            </svg>
          </a>
        </div>
        <p className="text-gray-200">
          The First Ledger chart interface is provided by{" "}
          <a target="_blank" href="https://www.tradingview.com/">
            TradingView
          </a>{" "}
          Keep track of the most important crypto like{" "}
          <a target="_blank" href="https://www.tradingview.com/symbols/XRPUSD/">
            XRPUSD
          </a>
          ,{" "}
          <a target="_blank" href="https://www.tradingview.com/symbols/BTCUSD/">
            BTCUSD
          </a>{" "}
          and much more.
        </p>
        <p className="text-gray-200">© First Ledger 2025</p>
      </footer>
    </div>
  );
};

export default Footer;
