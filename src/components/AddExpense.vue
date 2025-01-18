<script setup>
 import { reactive , ref} from 'vue';
 const amount = ref('');
 const date = ref('');
 const selected = ref('');
 const description = ref('');



const addExp =  () =>{
  console.log(amount.value, date.value, selected.value, description.value)
}

</script>
<template>
  <div class="container mt-5 add-expense">
    <h1 class="text-center mb-4">Add New Expense</h1>

    <form @submit.prevent="addExp" class="needs-validation" novalidate>
      <!-- Amount Input -->
      <div class="mb-3">
        <label for="amount" class="form-label">Amount</label>
        <input
          type="number"
          v-model="amount"
          id="amount"
          class="form-control"
          required
          placeholder="Enter amount"
        />
        <div class="invalid-feedback">Please enter a valid amount.</div>
      </div>

      <!-- Category Dropdown -->
      <div class="mb-3">
        <label for="category" class="form-label">Category</label>
        <select id="category" class="form-select" required  v-model="selected">
          <option disabled value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <div class="invalid-feedback">Please select a category.</div>
      </div>

      <!-- Date Picker -->
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input
          type="date"
          v-model="date"
          id="date"
          class="form-control"
          required
        />
        <div class="invalid-feedback">Please select a valid date.</div>
      </div>

      <!-- Description -->
      <div class="mb-3">
        <label for="description" class="form-label">Description (Optional)</label>
        <textarea
          id="description"
          v-model="description"
          class="form-control"
          rows="3"
          placeholder="Enter description"
        ></textarea>
      </div>

      <!-- Buttons -->
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">Add Expense</button>
        <button type="reset" class="btn btn-secondary">Reset</button>
      </div>
    </form>
  </div>
</template>
