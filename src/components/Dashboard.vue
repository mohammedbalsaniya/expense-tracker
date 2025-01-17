<template>
  <div class="container mt-5 dashboard mb-5">
    <h1 class="text-center mb-4">Dashboard</h1>

    <!-- Overview Section -->
    <div class="row text-center mb-4">
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5 class="card-title">Total Income</h5>
          <p class="card-text">$5000</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5 class="card-title">Total Expenses</h5>
          <p class="card-text">$2500</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5 class="card-title">Remaining Budget</h5>
          <p class="card-text">$2500</p>
        </div>
      </div>
    </div>

    <!-- Recent Transactions Section -->
    <div class="mb-4">
      <h2>Recent Transactions</h2>
      <ul class="list-group">
        <li class="list-group-item">Food: $20 - 12 Jan 2025</li>
        <li class="list-group-item">Rent: $500 - 10 Jan 2025</li>
        <li class="list-group-item">Transport: $30 - 8 Jan 2025</li>
      </ul>
    </div>

    <!-- Spending Chart Section -->
    <div class="mb-4">
      <h2>Spending Chart</h2>
      <div class="d-flex justify-content-center align-items-center bg-light" style="height: 200px; border: 1px dashed #ccc;">
        <p class="text-muted">Chart placeholder here</p>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="d-flex justify-content-center gap-3 ">
      <button class="btn btn-primary">          
        <RouterLink  class="nav-link" to="/addexpense">AddExpense</RouterLink >
      </button>
      <button class="btn btn-secondary">
        <RouterLink  class="nav-link" to="/analytics">View Analytics</RouterLink >
      </button>
    </div>
  </div>
</template>
