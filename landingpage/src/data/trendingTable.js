import btc from "../assets/Icon/Cryptocurrency_Icon/First_Page/BTC.png";
import eth from "../assets/Icon/Cryptocurrency_Icon/First_Page/ETH-bw.png";
import bnb from "../assets/Icon/Cryptocurrency_Icon/First_Page/bnb.png";
import doge from "../assets/Icon/Cryptocurrency_Icon/First_Page/DOGE_1.png";
import trx from "../assets/Icon/Cryptocurrency_Icon/First_Page/TRX_1.png";

const trendingTableData = [
  { coin: "BTC/USDT", src: btc, price: "$118,361.9789", change: "+18.37%", changeColor: "text-green-500", turnover: "376,355,319.363" },
  { coin: "ETH/USDT", src: eth, price: "$3,215.12", change: "-2.14%", changeColor: "text-red-500", turnover: "89,142,553.88" },
  { coin: "BNB/USDT", src: bnb, price: "$192.45", change: "+5.27%", changeColor: "text-green-500", turnover: "42,518,002.15" },
  { coin: "DOGE/USDT", src: doge, price: "$0.184", change: "-1.93%", changeColor: "text-red-500", turnover: "12,004,512.33" },
  { coin: "TRX/USDT", src: trx, price: "$192.45", change: "+5.27%", changeColor: "text-green-500", turnover: "42,518,002.15" },
];

export default trendingTableData