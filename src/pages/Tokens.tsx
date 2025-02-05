const Tokens = () => {
  return (
    <section className="bg-[#14161a] py-7">
      <div className="token-grid-actionbar bg-[#14161a]">
        <div className="grid-actionbar-type">
          <div className="select">
            <select id="grid_options_select">
              <option value="" selected>
                All
              </option>
              <option value="top">Top</option>
              <option value="gainers">Gainers</option>
            </select>
          </div>
          {/* <div id="top-options" className="options">
            <button
              className="button is-small is-active"
              title="Highest volume"
            >
              Volume
            </button>
            <button
              style={{ marginLeft: "5px" }}
              className="button is-small"
              title="Most transactions"
            >
              Txns
            </button>
          </div>
          <div id="gainers-options" className="options">
            <button
              className="button is-small is-active"
              title="Past 5 minutes"
            >
              5m
            </button>
            <button
              style={{ marginLeft: "5px" }}
              className="button is-small"
              title="Past hour"
            >
              1h
            </button>
            <button
              style={{ marginLeft: "5px" }}
              className="button is-small"
              title="Past 24 hours"
            >
              24h
            </button>
            <button
              style={{ marginLeft: "5px" }}
              className="button is-small"
              title="Past 7 days"
            >
              7d
            </button>
          </div> */}
        </div>
        <div id="grid_actionbar_audit" className="grid-actionbar-audit">
          <p className="text-[#abb1bf]">Features</p>
          <a
            id="audit_blackhole"
            role="button"
            title="Black-holed"
            className="is-active"
          >
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="12"
                cy="16.5"
                rx="11"
                ry="5.5"
                strokeWidth="2"
              ></ellipse>
              <path
                d="M22.0032 18.7918C20.2652 16.8984 16.44 15.5835 12.0006 15.5835C7.56123 15.5835 3.73606 16.8984 1.99805 18.7918"
                strokeWidth="2"
              ></path>
              <path
                className="icon-check"
                d="M16 4.99708L18.7714 7.5277L23.5718 1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <a
            id="audit_burned"
            role="button"
            title="Initial liquidity burned"
            className=""
          >
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon-check"
                d="M16 4.99708L18.7714 7.5277L23.5718 1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15 15.0555C15 18.8909 11.866 22 8 22C4.13401 22 1 18.8909 1 15.0555C1 13.813 1.53016 11.5589 2.10634 9.92683L3.26799 12.3963C4.48497 8.33537 5.64662 6.16768 8.74437 4C9.60178 8.66463 15 11.2202 15 15.0555Z"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.7184 19.215C10.7184 20.7532 9.46149 22 7.91107 22C6.36064 22 5.28125 20.7532 5.28125 19.215C5.28125 16.8281 6.92289 14.7813 8.16522 13.5488C8.50908 15.4195 10.7184 17.6769 10.7184 19.215Z"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <a id="audit_whale" role="button" title="Whale filter" className="">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3812 13.3455C11.2641 14.2356 10.0133 16.8691 9.27754 18.3527C9.64543 18.5382 10.7123 18.9091 12.0367 18.9091C13.3611 18.9091 14.0601 18.5382 14.2441 18.3527C13.8762 17.4255 13.1404 15.7935 13.1404 14.4582C13.1404 13.1229 14.2441 12.4182 14.7959 12.2327C16.4514 12.2327 17.831 11.6764 19.2106 10.5636C21.4179 8.78327 21.234 6.11273 20.8661 5C20.6821 5.37091 20.1471 6.35436 19.2106 6.66909C17.5551 7.22545 17.0032 6.11273 14.7959 6.66909C13.511 6.99294 11.8528 8.89455 11.4849 10.0073C10.933 9.08 10.0501 7.55927 8.7257 6.66909C7.07019 5.55636 5.41469 6.66909 3.75918 6.66909C2.87624 6.66909 1.36789 5.92727 1 5.55636C1.36789 7.04 2.76587 10.3411 5.41469 11.6764C8.7257 13.3455 9.27754 12.2327 10.3812 13.3455Z"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.5138 15.8486C7.29625 16.121 4.86328 17.3823 4.86328 18.8971C4.86328 20.6108 7.97694 22 11.8178 22C15.6587 22 18.7724 20.6108 18.7724 18.8971C18.7724 17.4204 16.4604 16.1846 13.3633 15.8711"
                strokeWidth="2"
              ></path>
              <path
                className="icon-check"
                d="M15 4.99708L17.7714 7.5277L22.5718 1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <a
            id="audit_verified"
            role="button"
            title="Verified token"
            className=""
          >
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 5.49057L9.85245 22L1 13.9211L3.98443 10.8027L9.20416 15.5663L18.4504 3L22 5.49057Z"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              ></path>
              <path
                className="icon-check"
                d="M16 4.99708L18.7714 7.5277L23.5718 1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <a role="button" className="info-button" title="More info">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.40897"
                cy="6.59103"
                r="5.40897"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M6.40897 6.36405V9.6686M6.40897 3.51347L6.40897 3.59896"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
        </div>
        <div id="grid_actionbar_launch" className="grid-actionbar-audit">
          <p className="text-[#abb1bf]">Launch style</p>
          <a
            id="launch_fl"
            role="button"
            title="First Ledger launch"
            className="is-active"
          >
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="6" width="13" height="13" strokeWidth="3"></rect>
              <path
                className="icon-check"
                d="M15 4.99708L17.7714 7.5277L22.5718 1"
                stroke="#21D084"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <line
                x1="3.06066"
                y1="6.93934"
                x2="9.06066"
                y2="12.9393"
                strokeWidth="3"
                strokeLinecap="round"
              ></line>
            </svg>
          </a>
          <a
            id="launch_bond"
            role="button"
            title="Bonding Curve launch"
            className="is-active"
          >
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 5C17 13.2843 10.2843 20 2 20"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
              <path
                className="icon-check"
                d="M15 4.99708L17.7714 7.5277L22.5718 1"
                stroke="#21D084"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <a
            id="launch_standard"
            role="button"
            title="Standard launch"
            className="is-active"
          >
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="6" width="16" height="16" strokeWidth="2"></rect>
              <path
                className="icon-check"
                d="M15 4.99708L17.7714 7.5277L22.5718 1"
                stroke="#21D084"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <a role="button" className="info-button is-active" title="More info">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.40897"
                cy="6.59103"
                r="5.40897"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M6.40897 6.36405V9.6686M6.40897 3.51347L6.40897 3.59896"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
        </div>
        <div className="control">
          <input
            className="input border p-2"
            type="text"
            id="find_token_input"
            placeholder="Find token"
            value=""
          />
          <button
            id="find_token_input_clear"
            className="delete"
            aria-label="close"
          ></button>
        </div>
        <button className="button">Reset</button>
      </div>
      <div className="token-grid-wrap">
        <div className="token-grid">
          <div className="grid sticky">
            <div className="grid-header fixed-left"></div>
            <div className="grid-header">Price </div>
            <div className="grid-header cursor-pointer">5m </div>
            <div className="grid-header cursor-pointer">1h </div>
            <div className="grid-header cursor-pointer">24h </div>
            <div className="grid-header cursor-pointer">7d </div>
            <div className="grid-header cursor-pointer">24h Vol </div>
            <div className="grid-header cursor-pointer">24h vol chg </div>
            <div className="grid-header cursor-pointer">Total vol </div>
            <div className="grid-header cursor-pointer">Created </div>
            <div className="grid-header cursor-pointer">TVL </div>
            <div className="grid-header cursor-pointer">
              Market cap <span className="chevron-down"></span>
            </div>
            <div className="grid-header cursor-pointer">Holders </div>
            <div className="grid-header">Details</div>
            <div className="grid-header">Links</div>
          </div>
          <div className="grid-links">
            <a
              className="grid"
              href="/token/rKzxgXw99kiVcT9QWN4EPPDn8QxktxBT79/4A6F656C4B61747A000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmXMcW6hdqBN9rQcgyF6whbUXrvbs5v8V1MPGCTy7wpfcn"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$JoelKatz</div>
                    <div className="issuer">
                      rKzxgXw99kiVcT9QWN4EPPDn8QxktxBT79
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>3</sub>70 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-25%</span>
              </div>
              <div className="grid-entry">4.32 XRP</div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry">56.06k XRP</div>
              <div className="grid-entry">13d 1h</div>
              <div className="grid-entry">$1.53k</div>
              <div className="grid-entry">$1.58k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry"></div>
            </a>
            <a
              className="grid"
              href="/token/rL6MUA5yvUMamiybxMSViBNfeDNh2PnNR3/4D4F4E4700000000000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmTJHfjTJC2ZztrhfshV7XJvAeyHjG9ZxXBo9xBg2aAD7k"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$MONG</div>
                    <div className="issuer">
                      rL6MUA5yvUMamiybxMSViBNfeDNh2PnNR3
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>6</sub>50 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-1%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-6%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-75%</span>
              </div>
              <div className="grid-entry">6.30 XRP</div>
              <div className="grid-entry price">
                <span className="is-up">2k%</span>
              </div>
              <div className="grid-entry">57.16k XRP</div>
              <div className="grid-entry">6d 22h</div>
              <div className="grid-entry">$1.66k</div>
              <div className="grid-entry">$1.13k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/r3grusREzjdG3yc7tWLWUidgrLtFGw2FZd/494E464C55580000000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmaSVCEc23t1vyGQkxP4RCaJMPzmEJS1v2AEdV4rKivfaA"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$INFLUX</div>
                    <div className="issuer">
                      r3grusREzjdG3yc7tWLWUidgrLtFGw2FZd
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>12</sub>61 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-25%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-up">71%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-up">71%</span>
              </div>
              <div className="grid-entry">13.85k XRP</div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry">13.85k XRP</div>
              <div className="grid-entry">17h 52m</div>
              <div className="grid-entry">$1.16k</div>
              <div className="grid-entry">$1.37k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rMiNfhnZujVw4Xbz2B4oyT6mb6sEuoBDAV/2452495057414C4B000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmQewitWQwbsjnPPXVrPJP5bp3jvyKELxExH7b2tM2MjQh"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$$RIPWALK</div>
                    <div className="issuer">
                      rMiNfhnZujVw4Xbz2B4oyT6mb6sEuoBDAV
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>4</sub>22 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-2%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-2%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-2%</span>
              </div>
              <div className="grid-entry">6.56 XRP</div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry">49.99k XRP</div>
              <div className="grid-entry">97d 4h</div>
              <div className="grid-entry">$3.07k</div>
              <div className="grid-entry">$5.03k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rKMkdotcph1rvspWKvpSjyqHFQsMBvpQuj/NUG"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmUEAnVM689E8miMxTgjibtDdwLAcW6bKu3eUTzBSZ6Ynh"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$NUG</div>
                    <div className="issuer">
                      rKMkdotcph1rvspWKvpSjyqHFQsMBvpQuj
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>5</sub>25 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-1%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-1%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-14%</span>
              </div>
              <div className="grid-entry">0.00 XRP</div>
              <div className="grid-entry price">
                <span className="is-down">-36%</span>
              </div>
              <div className="grid-entry">6.77k XRP</div>
              <div className="grid-entry">399d 14h</div>
              <div className="grid-entry">$5.17k</div>
              <div className="grid-entry">$3.98k</div>
              <div className="grid-entry">101</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="Standard launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rBpdegD7kqHdczjKzTKNEUZj1Fg1eYZRbe/4E75747300000000000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmaQLxaVQh1QJCcUDbeCSJV7ap4ikJjUtAaFStnW84kNMy"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$Nuts</div>
                    <div className="issuer">
                      rBpdegD7kqHdczjKzTKNEUZj1Fg1eYZRbe
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>2</sub>10 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-22%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-22%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-27%</span>
              </div>
              <div className="grid-entry">43.24 XRP</div>
              <div className="grid-entry price">
                <span className="is-up">521%</span>
              </div>
              <div className="grid-entry">30.53k XRP</div>
              <div className="grid-entry">100d 17h</div>
              <div className="grid-entry">$10.77k</div>
              <div className="grid-entry">$24.65k</div>
              <div className="grid-entry">103</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rEk4j4wX5UZJhqDShb21D94WorWQ3AaHAP/424954434F494E00000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmXxBHwLezhSQQ1y3U2rsiUb9VReA3cUMvoZMjxQaFPNzp"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$BITCOIN</div>
                    <div className="issuer">
                      rEk4j4wX5UZJhqDShb21D94WorWQ3AaHAP
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>6</sub>50 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-19%</span>
              </div>
              <div className="grid-entry">12.25 XRP</div>
              <div className="grid-entry price">
                <span className="is-up">23%</span>
              </div>
              <div className="grid-entry">63.35k XRP</div>
              <div className="grid-entry">19d 18h</div>
              <div className="grid-entry">$1.30k</div>
              <div className="grid-entry">$1.12k</div>
              <div className="grid-entry">108</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      />
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      />
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        />
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      />
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rKzxgXw99kiVcT9QWN4EPPDn8QxktxBT79/4A6F656C4B61747A000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmXMcW6hdqBN9rQcgyF6whbUXrvbs5v8V1MPGCTy7wpfcn"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$JoelKatz</div>
                    <div className="issuer">
                      rKzxgXw99kiVcT9QWN4EPPDn8QxktxBT79
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>3</sub>70 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-25%</span>
              </div>
              <div className="grid-entry">4.32 XRP</div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry">56.06k XRP</div>
              <div className="grid-entry">13d 1h</div>
              <div className="grid-entry">$1.53k</div>
              <div className="grid-entry">$1.58k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry"></div>
            </a>
            <a
              className="grid"
              href="/token/rL6MUA5yvUMamiybxMSViBNfeDNh2PnNR3/4D4F4E4700000000000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmTJHfjTJC2ZztrhfshV7XJvAeyHjG9ZxXBo9xBg2aAD7k"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$MONG</div>
                    <div className="issuer">
                      rL6MUA5yvUMamiybxMSViBNfeDNh2PnNR3
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>6</sub>50 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-1%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-6%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-75%</span>
              </div>
              <div className="grid-entry">6.30 XRP</div>
              <div className="grid-entry price">
                <span className="is-up">2k%</span>
              </div>
              <div className="grid-entry">57.16k XRP</div>
              <div className="grid-entry">6d 22h</div>
              <div className="grid-entry">$1.66k</div>
              <div className="grid-entry">$1.13k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/r3grusREzjdG3yc7tWLWUidgrLtFGw2FZd/494E464C55580000000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmaSVCEc23t1vyGQkxP4RCaJMPzmEJS1v2AEdV4rKivfaA"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$INFLUX</div>
                    <div className="issuer">
                      r3grusREzjdG3yc7tWLWUidgrLtFGw2FZd
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>12</sub>61 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-25%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-up">71%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-up">71%</span>
              </div>
              <div className="grid-entry">13.85k XRP</div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry">13.85k XRP</div>
              <div className="grid-entry">17h 52m</div>
              <div className="grid-entry">$1.16k</div>
              <div className="grid-entry">$1.37k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rMiNfhnZujVw4Xbz2B4oyT6mb6sEuoBDAV/2452495057414C4B000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmQewitWQwbsjnPPXVrPJP5bp3jvyKELxExH7b2tM2MjQh"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$$RIPWALK</div>
                    <div className="issuer">
                      rMiNfhnZujVw4Xbz2B4oyT6mb6sEuoBDAV
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>4</sub>22 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-2%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-2%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-2%</span>
              </div>
              <div className="grid-entry">6.56 XRP</div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry">49.99k XRP</div>
              <div className="grid-entry">97d 4h</div>
              <div className="grid-entry">$3.07k</div>
              <div className="grid-entry">$5.03k</div>
              <div className="grid-entry">100</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rKMkdotcph1rvspWKvpSjyqHFQsMBvpQuj/NUG"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmUEAnVM689E8miMxTgjibtDdwLAcW6bKu3eUTzBSZ6Ynh"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$NUG</div>
                    <div className="issuer">
                      rKMkdotcph1rvspWKvpSjyqHFQsMBvpQuj
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>5</sub>25 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-1%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-1%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-14%</span>
              </div>
              <div className="grid-entry">0.00 XRP</div>
              <div className="grid-entry price">
                <span className="is-down">-36%</span>
              </div>
              <div className="grid-entry">6.77k XRP</div>
              <div className="grid-entry">399d 14h</div>
              <div className="grid-entry">$5.17k</div>
              <div className="grid-entry">$3.98k</div>
              <div className="grid-entry">101</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="Standard launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rBpdegD7kqHdczjKzTKNEUZj1Fg1eYZRbe/4E75747300000000000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmaQLxaVQh1QJCcUDbeCSJV7ap4ikJjUtAaFStnW84kNMy"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$Nuts</div>
                    <div className="issuer">
                      rBpdegD7kqHdczjKzTKNEUZj1Fg1eYZRbe
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>2</sub>10 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-22%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-22%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-27%</span>
              </div>
              <div className="grid-entry">43.24 XRP</div>
              <div className="grid-entry price">
                <span className="is-up">521%</span>
              </div>
              <div className="grid-entry">30.53k XRP</div>
              <div className="grid-entry">100d 17h</div>
              <div className="grid-entry">$10.77k</div>
              <div className="grid-entry">$24.65k</div>
              <div className="grid-entry">103</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      ></ellipse>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></circle>
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></ellipse>
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </a>
            <a
              className="grid"
              href="/token/rEk4j4wX5UZJhqDShb21D94WorWQ3AaHAP/424954434F494E00000000000000000000000000"
            >
              <div className="grid-entry fixed-left token-info">
                <div className="is-flex">
                  <div className="image">
                    <img
                      src="https://ipfs.firstledger.net/ipfs/QmXxBHwLezhSQQ1y3U2rsiUb9VReA3cUMvoZMjxQaFPNzp"
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <div className="title">$BITCOIN</div>
                    <div className="issuer">
                      rEk4j4wX5UZJhqDShb21D94WorWQ3AaHAP
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-entry price">
                <span className="is-strong">
                  <span>
                    0.0<sub>6</sub>50 XRP
                  </span>
                </span>
              </div>
              <div className="grid-entry price">
                <span>0%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-7%</span>
              </div>
              <div className="grid-entry price">
                <span className="is-down">-19%</span>
              </div>
              <div className="grid-entry">12.25 XRP</div>
              <div className="grid-entry price">
                <span className="is-up">23%</span>
              </div>
              <div className="grid-entry">63.35k XRP</div>
              <div className="grid-entry">19d 18h</div>
              <div className="grid-entry">$1.30k</div>
              <div className="grid-entry">$1.12k</div>
              <div className="grid-entry">108</div>
              <div className="grid-entry">
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9532 2.95198L11.9305 10.4681C11.5456 10.9485 10.8223 10.9704 10.409 10.5142L8.18645 8.06055"
                        stroke="#00D079"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <ellipse
                        cx="11.5"
                        cy="20.75"
                        rx="10.5"
                        ry="5.25"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      />
                      <ellipse
                        cx="11.5"
                        cy="22.5"
                        rx="5.83333"
                        ry="2.33333"
                        fill="#00D079"
                        stroke="#00D079"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
                <div className="audit-icon">
                  <span className="icon">
                    <svg
                      width="18"
                      height="23"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8179 13.591C16.8179 17.959 13.277 21.5 8.90897 21.5C4.54097 21.5 1 17.959 1 13.591C1 12.1759 1.599 9.60873 2.25 7.75L3.5625 10.5625C4.9375 5.9375 6.25 3.46875 9.75 1C10.7188 6.3125 16.8179 9.22302 16.8179 13.591Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9805 18.3282C11.9805 20.0799 10.5605 21.5 8.80871 21.5C7.05696 21.5 5.8374 20.0799 5.8374 18.3282C5.8374 15.6097 7.69222 13.2786 9.09587 11.875C9.48437 14.0055 11.9805 16.5764 11.9805 18.3282Z"
                        stroke="#4BC68F"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="audit-icon" title="First Ledger launch">
                  <span className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.50821H17.4918V17H2V1.50821Z"
                        stroke="#4BC68F"
                        strokeWidth="3"
                      />
                      <path
                        d="M3.10655 2.61478L10.8525 9.25412"
                        stroke="#4BC68F"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid-entry">
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M8.92704 6.34822L14.5111 0H13.1879L8.33921 5.51207L4.4666 0H0L5.85615 8.33522L0 14.9923H1.32332L6.44364 9.17137L10.5334 14.9923H15L8.92671 6.34822H8.92704ZM7.11456 8.40866L6.52121 7.57866L1.80014 0.974259H3.83269L7.64265 6.30422L8.236 7.13422L13.1885 14.0623H11.156L7.11456 8.40897V8.40866Z"
                          fill="var(--neutral-darkest)"
                        />
                      </g>
                    </svg>
                  </span>
                </button>
                <button className="button social-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.15897"
                        cy="8.90897"
                        r="7.90897"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      />
                      <ellipse
                        cx="9"
                        cy="9"
                        rx="3"
                        ry="8"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="1"
                        y1="9.25"
                        x2="17"
                        y2="9.25"
                        stroke="var(--neutral-darkest)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className=" flex items-center  justify-center">
        <button className="bg-[#013cfe] text-white p-3">More Tokens</button>
      </div>
    </section>
  );
};

export default Tokens;
