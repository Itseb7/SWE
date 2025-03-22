//pages:welcom,payment,ticket,recipt,summary
const prices = {
    regular: 4,
    daily: 10,
    weekly: 25
  };
  
  const counts = {
    regular: 0,
    daily: 0,
    weekly: 0
  };
  
  function updateCount(type, change) {
    if (counts[type] + change >= 0) {
      counts[type] += change;
      document.getElementById(`${type}-count`).textContent = counts[type];
      updateTotal();
    }
  }
  
  function updateTotal() {
    let total = 
      (counts.regular * prices.regular) +
      (counts.daily * prices.daily) +
      (counts.weekly * prices.weekly);
  
    document.getElementById('total-amount').textContent = total;
  }
  
  function goToSummary() {
    const totalTickets = counts.regular + counts.daily + counts.weekly;
  
    if (totalTickets === 0) {
      document.getElementById("error-msg").textContent = "Please select at least one ticket.";
      return;
    }
  
    localStorage.setItem("tickets", JSON.stringify(counts));
    localStorage.setItem("total", document.getElementById('total-amount').textContent);
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = "summary.html";
    }, 300);
  }
  
    function goHome() {
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = "welcome.html";
      }, 300);
    }