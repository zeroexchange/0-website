import "./styles.scss";

const Footer = () => {
  return (
    <footer className="home_footer">
      <div className="container container-footer">
        <div className="container-footer-icon-wrap">
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.53618 26.5667C0.907515 24.9337 0 22.7563 0 20.449C0 18.1417 0.891313 15.9725 2.51998 14.3395L14.2934 2.5348C15.922 0.9018 18.0855 0.00811768 20.3867 0.00811768C22.6879 0.00811768 24.8513 0.9018 26.48 2.5348L22.6474 6.37762C21.4401 5.16709 19.3414 5.16709 18.1422 6.37762L6.35261 18.1823C5.753 18.7835 5.42079 19.5878 5.42079 20.4409C5.42079 21.2939 5.753 22.0983 6.35261 22.6995L2.53618 26.5667Z"
              fill="white"
            />
            <path
              d="M8.61331 29.077C6.31211 29.077 4.16486 28.1915 2.53619 26.5585L6.36073 22.6994C7.56805 23.9099 9.66668 23.9099 10.8659 22.6994L22.6474 10.8947C23.247 10.2935 23.5792 9.48919 23.5792 8.63613C23.5792 7.78307 23.247 6.97876 22.6474 6.37756L26.48 2.52661C28.1087 4.15961 29 6.32881 29 8.63613C29 10.9435 28.1087 13.1127 26.48 14.7457L14.6985 26.5503C13.078 28.1833 10.9145 29.077 8.61331 29.077Z"
              fill="white"
            />
            <path
              d="M22.655 6.38575C22.0554 5.79267 21.2613 5.46769 20.4186 5.46769H0.145386V0.0243721L20.4268 0C22.7036 0 24.8509 0.926175 26.4796 2.52667L22.655 6.38575Z"
              fill="#CFCFCF"
            />
            <path
              d="M28.8623 29.0852H8.589C6.31211 29.0852 4.15676 28.1671 2.53619 26.5666L6.36073 22.7076C6.96033 23.3007 7.75441 23.6175 8.59711 23.6175L28.8623 23.65V29.0852Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
        <ul>
          <li>
            <a href="https://www.coingecko.com/en/coins/0-exchange" target="_blank" rel="noreferrer">coingecko</a>
          </li>
          <li>
            <a href="https://coinmarketcap.com/currencies/zero-exchange/" target="_blank" rel="noreferrer">coinmarketcap</a>
          </li>
          <li>
            <a href="https://www.dextools.io/app/uniswap/pair-explorer/0x40f0e70a7d565985b967bcdb0ba5801994fc2e80" target="_blank" rel="noreferrer">dextools</a>
          </li>
          <li>
            <a href="https://github.com/zeroexchange" target="_blank" rel="noreferrer">github</a>
          </li>
          <li>
            <a href="https://www.facebook.com/ZeroExchange-105556548092263" target="_blank" rel="noreferrer">facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/officialzerodex" target="_blank" rel="noreferrer">twitter</a>
          </li>
          <li>
            <a href="https://discord.gg/XtZTNVTX5T" target="_blank" rel="noreferrer">discord</a>
          </li>
          <li>
            <a href="https://t.me/ZeroExchangeCommunity" target="_blank" rel="noreferrer">telegram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
