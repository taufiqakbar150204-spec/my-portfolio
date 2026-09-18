// FinSight Financial Analytics & Asset Portfolio Engine

document.addEventListener('DOMContentLoaded', () => {
  console.log('FinSight Portfolio Analytics Engine Active.');

  // Simulated Portfolio State
  let portfolio = [
    { id: 'AST-1', name: 'Bitcoin', symbol: 'BTC', cat: 'Crypto', qty: 1.45, price: 64250.00, change24h: 3.42, allocation: 42 },
    { id: 'AST-2', name: 'Ethereum', symbol: 'ETH', cat: 'Crypto', qty: 12.8, price: 3480.00, change24h: -1.15, allocation: 20 },
    { id: 'AST-3', name: 'NVIDIA Corp', symbol: 'NVDA', cat: 'US Stocks', qty: 45, price: 118.50, change24h: 5.80, allocation: 24 },
    { id: 'AST-4', name: 'Apple Inc', symbol: 'AAPL', cat: 'US Stocks', qty: 60, price: 224.30, change24h: 0.65, allocation: 14 }
  ];

  // DOM Elements
  const assetTableBody = document.getElementById('assetTableBody');
  const netWorthEl = document.getElementById('netWorthVal');
  const dailyProfitEl = document.getElementById('dailyProfitVal');
  const cronStatusEl = document.getElementById('cronStatus');

  calculatePortfolio();
  renderAssets();

  function calculatePortfolio() {
    let totalWorth = 0;
    portfolio.forEach(a => {
      totalWorth += a.qty * a.price;
    });

    if (netWorthEl) {
      netWorthEl.textContent = `$${totalWorth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  }

  function renderAssets() {
    if (!assetTableBody) return;

    assetTableBody.innerHTML = portfolio.map(a => {
      const holdingsVal = a.qty * a.price;
      const isUp = a.change24h >= 0;
      return `
        <tr>
          <td>
            <div style="font-weight:700; color:#fff;">${a.name}</div>
            <span class="mono" style="font-size:0.75rem; color:#94a3b8;">${a.symbol} • ${a.cat}</span>
          </td>
          <td class="mono" style="color:#e2e8f0;">$${a.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
          <td class="mono ${isUp ? 'delta-up' : 'delta-down'}">${isUp ? '+' : ''}${a.change24h}%</td>
          <td class="mono" style="color:#fff; font-weight:600;">${a.qty} ${a.symbol}</td>
          <td class="mono" style="color:#10b981; font-weight:700;">$${holdingsVal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
        </tr>
      `;
    }).join('');
  }

  // Add Asset Modal
  window.openAssetModal = function() {
    document.getElementById('assetModal').classList.add('active');
  };

  window.closeAssetModal = function() {
    document.getElementById('assetModal').classList.remove('active');
  };

  const assetForm = document.getElementById('assetForm');
  if (assetForm) {
    assetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('astName').value;
      const symbol = document.getElementById('astSymbol').value.toUpperCase();
      const cat = document.getElementById('astCat').value;
      const qty = parseFloat(document.getElementById('astQty').value);
      const price = parseFloat(document.getElementById('astPrice').value);

      const newAsset = {
        id: `AST-${Date.now()}`,
        name,
        symbol,
        cat,
        qty,
        price,
        change24h: +(Math.random() * 8 - 3).toFixed(2),
        allocation: 10
      };

      portfolio.unshift(newAsset);
      calculatePortfolio();
      renderAssets();
      closeAssetModal();
      assetForm.reset();
      alert(`🚀 Asset ${symbol} added to FinSight Engine Portfolio!`);
    });
  }

  // Trigger Nightly Cron Job Simulation
  window.triggerCronAggregator = function() {
    if (cronStatusEl) {
      cronStatusEl.textContent = '⚡ Running Nightly Aggregation...';
      cronStatusEl.style.color = '#f59e0b';
    }

    setTimeout(() => {
      portfolio.forEach(a => {
        const delta = (Math.random() * 4 - 1.8);
        a.price = +(a.price * (1 + delta / 100)).toFixed(2);
        a.change24h = +delta.toFixed(2);
      });
      calculatePortfolio();
      renderAssets();

      if (cronStatusEl) {
        cronStatusEl.textContent = '✅ Cron Job Completed & Prices Synced';
        cronStatusEl.style.color = '#10b981';
      }
    }, 1500);
  };

  // Export Tax Audit Statement
  window.exportTaxStatement = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      generatedAt: new Date().toISOString(),
      developer: "Muhamad Taufiq Akbar",
      system: "FinSight Analytics Engine",
      totalAssetsCount: portfolio.length,
      portfolio
    }, null, 2));

    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `FinSight_Tax_Audit_Statement_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };
});
