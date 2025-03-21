// let prix = document.getElementById('price')
// let tax = document.getElementById('taxes')
// let ads = document.getElementById('ads')
// let b = document.getElementById('t')
// let disc = document.getElementById('discount')
// let title = document.getElementById('title')
// let category = document.getElementById('categorie')
// let tab = document.getElementById('tab')
// let delet = document.getElementById('delall')
// let si = document.getElementById('sebytit')
// let sc = document.getElementById('sebycat')
// let sear = document.getElementById('search')
// let count = document.getElementById('count')
// let updt = document.getElementById('upd')
// let cr = document.getElementById('create')
// let y = localStorage.length;
// let x;
// let u = 1;
// let choix = '';
// delet.innerText += '(' + y + ')'

// ads.onkeyup = function () {
//     if (prix.value != "" && tax.value != "") {
//         b.innerText = Number(prix.value) + Number(tax.value) + Number(ads.value) - Number(disc.value)
//     }
// }
// function create() {
//     if (count.value == '') {
//         count.value = 1
//     }
//     for (let a = 0; a < count.value; a++) {
//         let ob = {
//             id: y + 1,
//             title: title.value,
//             price: prix.value,
//             taxes: tax.value,
//             ads: ads.value,
//             dicount: disc.value,
//             total: b.innerText,
//             categor: category.value
//         }
//         y++
//         localStorage.setItem('product' + y, JSON.stringify(ob))
//         location.reload()
//     }
// }
// function upd() {
//     for (let x = 0; x < localStorage.length; x++) {
//         let h = localStorage.key(x)
//         if (h = 'product' + u) {
//             let ob = {
//                 id: u,
//                 title: title.value,
//                 price: prix.value,
//                 taxes: tax.value,
//                 ads: ads.value,
//                 dicount: disc.value,
//                 total: b.innerText,
//                 categor: category.value
//             }
//             localStorage.removeItem('product' + u)
//             localStorage.setItem('product' + u, JSON.stringify(ob))
//             updt.classList.add('hide')
//             location.reload()
//         }
//     }
// }
// function deleteall() {
//     localStorage.clear()
//     location.reload()
// }
// for (let j = 0; j < localStorage.length; j++) {
//     let v = localStorage.key(j)
//     x = JSON.parse(localStorage.getItem(v))
//     let tr = document.createElement('tr')
//     let id = document.createElement('td')
//     id.innerText = x.id
//     let tit = document.createElement('td')
//     tit.innerText = x.title
//     let pr = document.createElement('td')
//     pr.innerText = x.price
//     let ta = document.createElement('td')
//     ta.innerText = x.taxes
//     let ad = document.createElement('td')
//     ad.innerText = x.ads
//     let di = document.createElement('td')
//     di.innerText = x.dicount
//     let tot = document.createElement('td')
//     tot.innerText = x.total
//     let cat = document.createElement('td')
//     cat.innerText = x.categor
//     let up = document.createElement('td')
//     let update = document.createElement('button')
//     update.id = 'update'
//     update.name = 'product' + id.innerText
//     update.innerText = 'update'
//     up.appendChild(update)
//     let de = document.createElement('td')
//     let delet = document.createElement('button')
//     delet.id = 'product' + id.innerText
//     delet.innerText = 'delete'
//     delet.onclick = function () {
//         localStorage.removeItem(this.id)
//         console.log(this.id)
//         location.reload()
//     }
//     update.onclick = function () {
//         title.value = x.title
//         prix.value = x.price
//         tax.value = x.taxes
//         ads.value = x.ads
//         disc.value = x.dicount
//         b.innerText = x.total
//         category.value = x.categor
//         u = x.id
//         updt.classList.remove('hide')
//         cr.classList.add('hide')
//     }
//     de.appendChild(delet)
//     tr.appendChild(id)
//     tr.appendChild(tit)
//     tr.appendChild(pr)
//     tr.appendChild(ta)
//     tr.appendChild(ad)
//     tr.appendChild(di)
//     tr.appendChild(tot)
//     tr.appendChild(cat)
//     tr.appendChild(up)
//     tr.appendChild(de)
//     tab.appendChild(tr)
// }
// si.onclick = function () {
//     si.style.cssText = 'background-color: rgb(180, 0, 235);'
//     sc.style.cssText = 'background-color: rgb(59, 1, 99)'
//     choix = "id"
// }
// sc.onclick = function () {
//     si.style.cssText = 'background-color: rgb(59, 1, 99);'
//     sc.style.cssText = 'background-color: rgb(180, 0, 235)'
//     choix = "category"
// }

// sear.onkeyup = function () {
//     if (choix == "category") {
//         tab.innerHTML = ''
//         let exist = false
//         let ee = -1;
//         let dd = []
//         for (let s = 0; s < localStorage.length; s++) {
//             let x = localStorage.key(s)
//             let e = JSON.parse(localStorage.getItem(x))
//             let t = e.title
//             if (e.categor.includes(sear.value)) {
//                 exist = true
//                 ee = s
//                 dd.push(s)
//             }
//         }
//         if(ee!=-1) {
//             for (let f = 0; f < dd.length; f++) {
//                 let xx = localStorage.key(dd[f])
//                 let e = JSON.parse(localStorage.getItem(xx))
//                 let tr = document.createElement('tr')
//                 let id = document.createElement('td')
//                 id.innerText = e.id
//                 let tit = document.createElement('td')
//                 tit.innerText = e.title
//                 let pr = document.createElement('td')
//                 pr.innerText = e.price
//                 let ta = document.createElement('td')
//                 ta.innerText = e.taxes
//                 let ad = document.createElement('td')
//                 ad.innerText = e.ads
//                 let di = document.createElement('td')
//                 di.innerText = e.dicount
//                 let tot = document.createElement('td')
//                 tot.innerText = e.total
//                 let cat = document.createElement('td')
//                 cat.innerText = e.categor
//                 let up = document.createElement('td')
//                 let update = document.createElement('button')
//                 update.id = 'update'
//                 update.innerText = 'update'
//                 up.appendChild(update)
//                 let de = document.createElement('td')
//                 let deleteButton = document.createElement('button');
//                 let productId = 'product' + id.innerText;
//                 deleteButton.id = productId;
//                 deleteButton.innerText = 'delete';
//                 deleteButton.onclick = function () {
//                   localStorage.removeItem(productId);
//                   location.reload();
//                 };
//                 de.appendChild(deleteButton);
//                 tr.appendChild(id)
//                 tr.appendChild(tit)
//                 tr.appendChild(pr)
//                 tr.appendChild(ta)
//                 tr.appendChild(ad)
//                 tr.appendChild(di)
//                 tr.appendChild(tot)
//                 tr.appendChild(cat)
//                 tr.appendChild(up)
//                 tr.appendChild(de)
//                 tab.innerHTML += tr.innerHTML
//             }

//         }
//     }
    
//     if (choix == "id") {
//         tab.innerHTML = ''
//         let exist = false
//         let ee = -1;
//         let dd = []
//         console.log(choix)
//         for (let s = 0; s < localStorage.length; s++) {
//             let x = localStorage.key(s)
//             let e = JSON.parse(localStorage.getItem(x))
//             let t = e.title
//             if (e.title.includes(sear.value)) {
//                 exist = true
//                 ee = s
//                 dd.push(s)
//             }
//         }
//         if(ee!=-1) {
//             for (let f = 0; f < dd.length; f++) {
//                 let xx = localStorage.key(dd[f])
//                 let e = JSON.parse(localStorage.getItem(xx))
//                 let tr = document.createElement('tr')
//                 let id = document.createElement('td')
//                 id.innerText = e.id
//                 let tit = document.createElement('td')
//                 tit.innerText = e.title
//                 let pr = document.createElement('td')
//                 pr.innerText = e.price
//                 let ta = document.createElement('td')
//                 ta.innerText = e.taxes
//                 let ad = document.createElement('td')
//                 ad.innerText = e.ads
//                 let di = document.createElement('td')
//                 di.innerText = e.dicount
//                 let tot = document.createElement('td')
//                 tot.innerText = e.total
//                 let cat = document.createElement('td')
//                 cat.innerText = e.categor
//                 let up = document.createElement('td')
//                 let update = document.createElement('button')
//                 update.id = 'update'
//                 update.innerText = 'update'
//                 up.appendChild(update)
//                 let de = document.createElement('td')
//                 let delet = document.createElement('button')
//                 delet.id = 'product' + id.innerText
//                 delet.innerText = 'delete'
//                 delet.onclick = function () {
//                     localStorage.removeItem(delet.id)
//                     location.reload()
//                 }
//                 de.appendChild(delet)
//                 tr.appendChild(id)
//                 tr.appendChild(tit)
//                 tr.appendChild(pr)
//                 tr.appendChild(ta)
//                 tr.appendChild(ad)
//                 tr.appendChild(di)
//                 tr.appendChild(tot)
//                 tr.appendChild(cat)
//                 tr.appendChild(up)
//                 tr.appendChild(de)
//                 tab.innerHTML += tr.innerHTML
//             }

//         }
//     }


// }

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
