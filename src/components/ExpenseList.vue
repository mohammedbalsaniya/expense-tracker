<template>
  <div class="container mt-5 expense-page">
    <h1 class="text-center mb-4">Expense List</h1>

    <!-- Filters Section -->
    <div class="filters mb-4">
      <div class="row g-2 align-items-center">
        <div class="col-md-4">
          <label for="category" class="form-label">Category:</label>
          <select id="category"  class="form-select">
            <option value="">All</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="date-range" class="form-label">Date Range:</label>
          <div class="d-flex gap-2">
            <input
              type="date"
              class="form-control"
            />
            <input
              type="date"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-end">
          <button class="btn btn-primary w-100 mt-4">
            Apply Filters
          </button>
        </div>
      </div>
    </div>

    <!-- Expense Table -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead class="table-light">
          <tr>
            <th class="sortable">Date</th>
            <th  class="sortable">Category</th>
            <th  class="sortable">Amount</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> expense date </td>
            <td> expense category </td>
            <td> expense amount </td>
            <td> expense description </td>
            <td>
              <button
                class="btn btn-sm btn-warning me-2" >
                Edit
              </button>
              <button
                class="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Total Expenses Summary -->
    <div class="summary mt-4">
      <h2 class="text-end">Total Expenses:  totalExpenses </h2>
    </div>
  </div>
</template>
