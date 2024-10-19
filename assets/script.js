const API_KEY = "4JSEYZEMN2CREQO8";
let priceChart = null;

// Sample trending stocks data
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

// Initialize trending stocks dropdown
function initializeTrendingStocks() {
  const select = document.getElementById("trendingStocks");
  trendingStocks.forEach((stock) => {
    const option = document.createElement("option");
    option.value = stock;
    option.textContent = stock;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    if (e.target.value) {
      document.getElementById("stockSymbol").value = e.target.value;
      searchStock();
    }
  });
}

// Fetch stock data from API
async function fetchStockData(symbol) {
  try {
    // Simulated API response for demonstration
    const mockData = {
      price: Math.random() * 1000 + 100,
      change: Math.random() * 10 - 5,
      volume: Math.floor(Math.random() * 1000000),
      historical: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
        price: Math.random() * 1000 + 100,
      })),
    };

    updateDashboard(symbol, mockData);
  } catch (error) {
    console.error("Error fetching stock data:", error);
    alert("Error fetching stock data. Please try again.");
  }
}

// Update dashboard with stock data
function updateDashboard(symbol, data) {
  // Update stock info
  document.getElementById("stockInfo").innerHTML = `
                <h3>${symbol}</h3>
                <p>Current Price: $${data.price.toFixed(2)}</p>
                <p class="${data.change >= 0 ? "positive" : "negative"}">
                    Change: ${data.change >= 0 ? "+" : ""}${data.change.toFixed(
    2
  )}%
                </p>
            `;

  // Update market stats
  document.getElementById("marketStats").innerHTML = `
                <p>Volume: ${data.volume.toLocaleString()}</p>
                <p>24h High: $${(data.price + Math.random() * 10).toFixed(
                  2
                )}</p>
                <p>24h Low: $${(data.price - Math.random() * 10).toFixed(2)}</p>
            `;

  // Update comparison table
  const tableRow = `
                <tr>
                    <td>${symbol}</td>
                    <td>$${data.price.toFixed(2)}</td>
                    <td class="${data.change >= 0 ? "positive" : "negative"}">
                        ${data.change >= 0 ? "+" : ""}${data.change.toFixed(2)}%
                    </td>
                    <td>${data.volume.toLocaleString()}</td>
                </tr>
            `;
  document.getElementById("comparisonTable").innerHTML = tableRow;

  // Update chart
  updateChart(data.historical);
}

// Update price chart
function updateChart(historicalData) {
  const ctx = document.getElementById("priceChart").getContext("2d");

  if (priceChart) {
    priceChart.destroy();
  }

  priceChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: historicalData.map((d) => d.date.toLocaleDateString()),
      datasets: [
        {
          label: "Stock Price",
          data: historicalData.map((d) => d.price),
          borderColor: "gray",
          tension: 0.1,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

// Search stock function
function searchStock() {
  const symbol = document.getElementById("stockSymbol").value.toUpperCase();
  if (symbol) {
    fetchStockData(symbol);
  } else {
    alert("Please enter a stock symbol");
  }
}

// Initialize dashboard
initializeTrendingStocks();
