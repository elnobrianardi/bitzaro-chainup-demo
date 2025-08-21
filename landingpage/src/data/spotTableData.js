import btc from "../assets/Icon/Cryptocurrency_Icon/Second_Page/BTC.png";
import eth from "../assets/Icon/Cryptocurrency_Icon/Second_Page/ETH-bw.png";
import bnb from "../assets/Icon/Cryptocurrency_Icon/Second_Page/bnb.png";
import doge from "../assets/Icon/Cryptocurrency_Icon/Second_Page/DOGE_2.png";
import trx from "../assets/Icon/Cryptocurrency_Icon/Second_Page/TRX_2.png";
import xrp from "../assets/Icon/Cryptocurrency_Icon/Second_Page/xrp.png";
import ada from "../assets/Icon/Cryptocurrency_Icon/Second_Page/ADA.png";
import sol from "../assets/Icon/Cryptocurrency_Icon/Second_Page/SOL.png";
import uni from "../assets/Icon/Cryptocurrency_Icon/Second_Page/UNI.png";

const spotTableData = [
  {
    coin: "BTC/USDT",
    src: btc,
    defaultStar: true,
    price: "$118,361.97",
    high: "$120,500",
    low: "$115,800",
    change: "+18.37%",
    changeColor: "text-green-500",
    turnover: "376,355,319.36",
  },
  {
    coin: "ETH/USDT",
    src: eth,
    defaultStar: true,
    price: "$3,215.12",
    high: "$3,400",
    low: "$3,100",
    change: "-2.14%",
    changeColor: "text-red-500",
    turnover: "89,142,553.88",
  },
  {
    coin: "BNB/USDT",
    src: bnb,
    defaultStar: true,
    price: "$192.45",
    high: "$200.00",
    low: "$185.30",
    change: "+5.27%",
    changeColor: "text-green-500",
    turnover: "42,518,002.15",
  },
  {
    coin: "DOGE/USDT",
    src: doge,
    defaultStar: false,
    price: "$0.184",
    high: "$0.195",
    low: "$0.178",
    change: "-1.93%",
    changeColor: "text-red-500",
    turnover: "12,004,512.33",
  },
  {
    coin: "TRX/USDT",
    src: trx,
    defaultStar: false,
    price: "$0.088",
    high: "$0.091",
    low: "$0.086",
    change: "+5.27%",
    changeColor: "text-green-500",
    turnover: "42,518,002.15",
  },
  {
    coin: "XRP/USDT",
    src: xrp,
    defaultStar: true,
    price: "$0.654",
    high: "$0.680",
    low: "$0.640",
    change: "-1.20%",
    changeColor: "text-red-500",
    turnover: "15,234,512.33",
  },
  {
    coin: "ADA/USDT",
    src: ada,
    defaultStar: false,
    price: "$0.312",
    high: "$0.330",
    low: "$0.305",
    change: "+2.14%",
    changeColor: "text-green-500",
    turnover: "8,412,553.88",
  },
  {
    coin: "SOL/USDT",
    src: sol,
    defaultStar: true,
    price: "$32.45",
    high: "$33.80",
    low: "$31.70",
    change: "+3.12%",
    changeColor: "text-green-500",
    turnover: "25,518,002.15",
  },
  {
    coin: "UNI/USDT",
    src: uni,
    defaultStar: false,
    price: "$7.54",
    high: "$7.85",
    low: "$7.32",
    change: "-0.85%",
    changeColor: "text-red-500",
    turnover: "4,002,153.88",
  },
];

export default spotTableData;
