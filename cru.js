// DOM Elements
const elements = {
    price: document.getElementById('price'),
    taxes: document.getElementById('taxes'),
    ads: document.getElementById('ads'),
    total: document.getElementById('t'),
    discount: document.getElementById('discount'),
    title: document.getElementById('title'),
    category: document.getElementById('categorie'),
    table: document.getElementById('tab'),
    deleteAll: document.getElementById('delall'),
    searchByTitle: document.getElementById('sebytit'),
    searchByCategory: document.getElementById('sebycat'),
    searchInput: document.getElementById('search'),
    count: document.getElementById('count'),
    updateBtn: document.getElementById('upd'),
    createBtn: document.getElementById('create')
  };
  
  // App State
  const state = {
    productCount: localStorage.length,
    currentId: 1,
    searchMode: ''
  };
  
  // Initialize
  function init() {
    // Set delete all button text
    elements.deleteAll.innerText = `Delete All (${state.productCount})`;
    
    // Add event listeners
    elements.price.addEventListener('input', calculateTotal);
    elements.taxes.addEventListener('input', calculateTotal);
    elements.ads.addEventListener('input', calculateTotal);
    elements.discount.addEventListener('input', calculateTotal);
    
    elements.searchByTitle.addEventListener('click', () => setSearchMode('title'));
    elements.searchByCategory.addEventListener('click', () => setSearchMode('category'));
    elements.searchInput.addEventListener('input', handleSearch);
    
    // Load products
    displayProducts();
  }
  
  // Calculate total price
  function calculateTotal() {
    if (elements.price.value && elements.taxes.value) {
      const price = Number(elements.price.value) || 0;
      const taxes = Number(elements.taxes.value) || 0;
      const ads = Number(elements.ads.value) || 0;
      const discount = Number(elements.discount.value) || 0;
      
      elements.total.innerText = (price + taxes + ads - discount).toFixed(2);
    }
  }
  
  // Create new product(s)
  function create() {
    // Validate inputs
    if (!elements.title.value || !elements.price.value) {
      alert('Please enter at least a title and price');
      return;
    }
    
    const count = Number(elements.count.value) || 1;
    
    for (let i = 0; i < count; i++) {
      const product = {
        id: state.productCount + 1,
        title: elements.title.value,
        price: elements.price.value,
        taxes: elements.taxes.value,
        ads: elements.ads.value,
        discount: elements.discount.value,
        total: elements.total.innerText,
        category: elements.category.value
      };
      
      state.productCount++;
      localStorage.setItem('product' + state.productCount, JSON.stringify(product));
    }
    
    clearForm();
    displayProducts();
  }
  
  // Update existing product
  function upd() {
    const product = {
      id: state.currentId,
      title: elements.title.value,
      price: elements.price.value,
      taxes: elements.taxes.value,
      ads: elements.ads.value,
      discount: elements.discount.value,
      total: elements.total.innerText,
      category: elements.category.value
    };
    
    localStorage.setItem('product' + state.currentId, JSON.stringify(product));
    
    elements.updateBtn.classList.add('hide');
    elements.createBtn.classList.remove('hide');
    
    clearForm();
    displayProducts();
  }
  
  // Delete all products
  function deleteall() {
    if (confirm('Are you sure you want to delete all products?')) {
      localStorage.clear();
      state.productCount = 0;
      displayProducts();
    }
  }
  
  // Clear form inputs
  function clearForm() {
    elements.title.value = '';
    elements.price.value = '';
    elements.taxes.value = '';
    elements.ads.value = '';
    elements.discount.value = '';
    elements.category.value = '';
    elements.count.value = '';
    elements.total.innerText = '';
  }
  
  // Set search mode (title or category)
  function setSearchMode(mode) {
    state.searchMode = mode;
    
    if (mode === 'title') {
      elements.searchByTitle.style.backgroundColor = 'rgb(180, 0, 235)';
      elements.searchByCategory.style.backgroundColor = 'rgb(59, 1, 99)';
    } else {
      elements.searchByTitle.style.backgroundColor = 'rgb(59, 1, 99)';
      elements.searchByCategory.style.backgroundColor = 'rgb(180, 0, 235)';
    }
    
    // Trigger search if there's input
    if (elements.searchInput.value) {
      handleSearch();
    }
  }
  
  // Handle search input
  function handleSearch() {
    const searchValue = elements.searchInput.value.toLowerCase();
    
    if (!searchValue) {
      displayProducts();
      return;
    }
    
    const filteredProducts = [];
    
    // Search through all products
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('product')) {
        const product = JSON.parse(localStorage.getItem(key));
        
        if (state.searchMode === 'category' && product.category.toLowerCase().includes(searchValue)) {
          filteredProducts.push(product);
        } else if (state.searchMode === 'title' && product.title.toLowerCase().includes(searchValue)) {
          filteredProducts.push(product);
        }
      }
    }
    
    renderProducts(filteredProducts);
  }
  
  // Display all products
  function displayProducts() {
    const products = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('product')) {
        products.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    
    // Update delete all button text
    elements.deleteAll.innerText = `Delete All (${products.length})`;
    
    renderProducts(products);
  }
  
  // Render products to table
  function renderProducts(products) {
    elements.table.innerHTML = '';
    
    products.forEach(product => {
      const tr = document.createElement('tr');
      
      // Add product data
      tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.taxes}</td>
        <td>${product.ads}</td>
        <td>${product.discount}</td>
        <td>${product.total}</td>
        <td>${product.category}</td>
        <td><button id="update-${product.id}">Update</button></td>
        <td><button id="delete-${product.id}">Delete</button></td>
      `;
      
      elements.table.appendChild(tr);
      
      // Add event listeners to buttons
      document.getElementById(`update-${product.id}`).addEventListener('click', () => {
        fillFormForUpdate(product);
      });
      
      document.getElementById(`delete-${product.id}`).addEventListener('click', () => {
        deleteProduct(product.id);
      });
    });
  }
  
  // Fill form with product data for update
  function fillFormForUpdate(product) {
    elements.title.value = product.title;
    elements.price.value = product.price;
    elements.taxes.value = product.taxes;
    elements.ads.value = product.ads;
    elements.discount.value = product.discount;
    elements.category.value = product.category;
    elements.total.innerText = product.total;
    
    state.currentId = product.id;
    
    elements.updateBtn.classList.remove('hide');
    elements.createBtn.classList.add('hide');
    
    elements.title.focus();
  }
  
  // Delete a single product
  function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
      localStorage.removeItem('product' + id);
      displayProducts();
    }
  }
  
  // Initialize the app
  init();
