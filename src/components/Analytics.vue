<template>
  <div class="container mt-5 analytics">
    <h1 class="text-center mb-4">Analytics</h1>

    <!-- Date Range Filter -->
    <div class="filters mb-4 d-flex align-items-center justify-content-center gap-2">
      <label for="date-range" class="form-label mb-0">Date Range:</label>
      <input type="date" class="form-control w-auto" />
      <span>to</span>
      <input type="date" class="form-control w-auto" />
      <button class="btn btn-primary">Apply</button>
    </div>

    <!-- Charts Section -->
    <div class="charts row g-4">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title">Spending by Category</h2>
            <p class="card-text text-center">Pie Chart Placeholder</p>
            <!-- Replace this with an actual chart component -->
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title">Monthly Spending Trends</h2>
            <p class="card-text text-center">Bar Chart Placeholder</p>
            <!-- Replace this with an actual chart component -->
          </div>
        </div>
      </div>
    </div>

    <!-- Summary Section -->
    <div class="summary mt-4">
      <h2>Summary</h2>
      <ul class="list-group">
        <li class="list-group-item">Total Expenses: $1000</li>
        <li class="list-group-item">Top Category: Food ($300)</li>
        <li class="list-group-item">Average Daily Spending: $33</li>
      </ul>
    </div>
  </div>
</template>
