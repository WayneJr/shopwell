const Aside = {
  render: async () => {
    return `
   <div class="aside-header">
    <div>SHOP BY CATEGORY</div>
    <button class="aside-close-button" id="aside-close-button">x</button>
  </div>
  <div class="aside-body">
    <ul class="categories">
      <li>
        <a href="/#/?q=beverages"
          >Beverages
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li>
      <li>
        <a href="/#/?q=meat and poultry"
          >Meat & Poultry
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li> 
      <li>
        <a href="/#/?q=packaged"
          >Packaged Products
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li> 
      <li>
        <a href="/#/?q=snacks"
          >Meat & Poultry
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li> 
      <li>
        <a href="/#/?q=toiletries"
          >Toiletries
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li> 
    </ul>
  </div>`;
  },
  after_render: async () => {
    document.getElementById('aside_container').classList.remove('open');
    document
      .getElementById('aside-close-button')
      .addEventListener('click', async () => {
        document.getElementById('aside_container').classList.remove('open');
      });
  },
};

export default Aside;
