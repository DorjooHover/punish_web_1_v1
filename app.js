var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/", express.static("public"));
app.get("/", function (req, res) {
  res.render("index", {
    navbar_data: ["Нүүр", "Мэдээ мэдээлэл", "Бидний тухай", "Сургалтанд суух"],
    header_datas: [
      {
        image_path: "/img/header/fuzzle.svg",
        header_title: "Trade with",
        header_title_last: "Ekun",
        header_paragraph:
          "Trade forex, commodities, synthetic and stock indices from a single account",
      },
      {
        image_path: "/img/header/pc.svg",
        header_title: "Trade with",
        header_title_last: "Ekun",
        header_paragraph:
          "A trusted destination for traders worldwide, Authorised by FCA, ASIC & FSCA",
      },
    ],
    logo_datas: [
      {
        image_path: "/img/logos/Alphabet.svg",
        price: "1,740.05",
        direction: "up",
      },
      {
        image_path: "/img/logos/microsoft.svg",
        price: "217.90",
        direction: "up",
      },
      {
        image_path: "/img/logos/facebook.svg",
        price: "270.97",
        direction: "down",
      },
      {
        image_path: "/img/logos/amazon.svg",
        price: "3,218.51",
        direction: "up",
      },
      {
        image_path: "/img/logos/tesla.svg",
        price: "735.11",
        direction: "down",
      },
    ],
    second_data: [
      {
        image_path: "/img/second/trade.svg",
        title: "Үйлчилгээ",
        text: "Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        image_path: "/img/second/team.svg",
        title: "Үйлчилгээ",
        text: "Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        image_path: "/img/second/board.svg",
        title: "Үйлчилгээ",
        text: "Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    third_top_data: [
      {
        image_path: "/img/third/icon_1.svg",
        title: "Давуу тал",
        text: "Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.",
      },
      {
        image_path: "/img/third/icon_2.svg",
        title: "Давуу тал",
        text: "Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.",
      },
      {
        image_path: "/img/third/icon_3.svg",
        title: "Давуу тал",
        text: "Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.",
      },
      {
        image_path: "/img/third/icon_4.svg",
        title: "Давуу тал",
        text: "Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.",
      },
    ],
    third_bot_data: [
      { number: "1", text: "Платформийг утсандаа татах" },
      { number: "2", text: "Брокер дээр арилжааны данс үүсгэх" },
      { number: "3", text: "Дансаа зузаатган арилжаанд оролцох" },
    ],
    fourth_data: [
      { icon: "apple", text: "MacOS" },
      { icon: "windows", text: "Windows" },
      { icon: "google-play", text: "Android\
    " },
    ],
    fifth_data: [
      {
        stratch_text: "Мэдээ",
        text: "Wall Street cautious on 'frothy' stocks, warn bitcoin bubble",
        date: "oct 8, 2021",
        dev: "Эх сурвалж trade_with_ekun",
        text_bot:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit ...",
      },
      {
        stratch_text: "шинжилгээ",
        text: "Will AUD/USD Hit 0.8000 In The Foreseeable Future?",
        date: " Jan 4, 2021",
        dev: "Эх сурвалж trade_with_ekun",
        text_bot:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit ...",
      },
      {
        stratch_text: "сургалт",
        text: "How Can You Use Volatility to Your Advantage",
        date: " Dec 16, 2020",
        dev: "Эх сурвалж trade_with_ekun",
        text_bot:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit ...",
      },
    ],
    fifth_bot_data: [
      { title: "Best CFD Broker", text: "TradeON Summit 2020" },
      { title: "Best Execution Broker", text: "Forex EXPO Dubai 2020" },
      { title: "Best Trading Platform", text: "London Summit 2020" },
      { title: "Best Broker Asia", text: "iFX EXPO 2020" },
    ],
    payment_data: [
      { image_path: "/img/payment/bitcoin.svg" },
      { image_path: "/img/payment/mastercard.svg" },
      { image_path: "/img/payment/neteller.svg" },
      { image_path: "/img/payment/paypal.svg" },
      { image_path: "/img/payment/skrill.svg" },
      { image_path: "/img/payment/visa.svg" },
    ],
    footer_social: [
      { data: "facebook" },
      { data: "twitter" },
      { data: "youtube" },
      { data: "instagram" },
      { data: "telegram" },
    ],
    footer_top_data: [
      { icon: "history", text: "Жилийн туршлага" },
      { icon: "trophy", text: "R/R 15+" },
      { icon: "phone-alt", text: "24/7 үйлчилгээ" },
    ],
    footer_bot_data: [
      {
        title: "markets",
        data: ["Share CFDs", "Forex", "Indices", "Commodities"],
      },
      {
        title: "Trading Platforms",
        data: [
          "Web platform",
          "Trading apps",
          "MetaTrader 5",
          "Compare features",
        ],
      },
      {
        title: "account types",
        data: [
          "Demo account",
          "Standart account",
          "ECN account",
          "Islamic account",
        ],
      },
      {
        title: "Learn to trade",
        data: [
          "News and trade ideas",
          "Trading strategy",
          "Forex trading course",
          "",
        ],
      },
    ],
  });
});

app.listen(process.env.PORT || 3000);
