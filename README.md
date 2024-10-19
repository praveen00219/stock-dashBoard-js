# Stock Tracker Dashboard 📈

A responsive, real-time stock tracking dashboard built with HTML, CSS, and JavaScript. Monitor stock prices, visualize trends, and compare market performance with an intuitive user interface.

## 🌟 Features

- **Real-time Stock Data**: Search and monitor live stock prices and market data
- **Trending Stocks**: Quick access to top 10 trending stocks via dropdown menu
- **Interactive Charts**: Visualize stock price history with Chart.js
- **Comparison Table**: Compare multiple stocks based on key metrics
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Live Updates**: Real-time data updates from Alpha Vantage API

## Live Demo

Project Link: [Here]()

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor (VS Code recommended)
- Alpha Vantage API key (Get one at [Alpha Vantage](https://www.alphavantage.co/support/#api-key))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/praveen00219/stock-dashBoard-js.git
cd stock-dashboard
```

2. Open `index.html` and replace the API key:

```javascript
const API_KEY = "YOUR_API_KEY";
```

3. Open `index.html` in your browser or use a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## 💻 Usage

1. **Search for Stocks**:

   - Enter a stock symbol (e.g., AAPL, MSFT) in the search bar
   - Click the search button or press Enter

2. **View Trending Stocks**:

   - Use the dropdown menu to select from top trending stocks
   - Data will update automatically upon selection

3. **Analyze Stock Data**:
   - View current price and price changes
   - Check market statistics and volume
   - Analyze price trends through the interactive chart
   - Compare multiple stocks in the comparison table

## 🛠️ Technical Stack

- **Frontend**:
  - HTML5
  - CSS3 (with Grid and Flexbox)
  - JavaScript (ES6+)
- **Libraries**:
  - Chart.js (v3.7.0) for data visualization
- **APIs**:
  - Alpha Vantage API for real-time stock data

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

### Adding More Stocks

Update the `trendingStocks` array in the JavaScript code:

```javascript
const trendingStocks = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "META",
  "TSLA",
  "NVDA",
  "JPM",
  "BAC",
  "WMT",
];
```

## 📝 API Integration

The dashboard uses the Alpha Vantage API for stock data. Key endpoints used:

- Time Series (Daily)
- Quote Endpoint
- Search Endpoint

Replace the mock data in `fetchStockData()` with actual API calls:

```javascript
async function fetchStockData(symbol) {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
  );
  const data = await response.json();
  // Process and update dashboard with real data
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) for the charting library
- [Alpha Vantage](https://www.alphavantage.co/) for the stock market API
- Icons provided by [Hero Icons](https://heroicons.com/)

## 🔮 Future Enhancements

- [ ] Multiple stock comparison
- [ ] Advanced technical indicators
- [ ] Portfolio tracking
- [ ] Price alerts
- [ ] Dark mode theme
- [ ] Export data functionality
- [ ] More chart types and timeframes
