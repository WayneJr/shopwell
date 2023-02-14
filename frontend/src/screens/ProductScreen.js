/* eslint-disable indent */
import {
  parseRequestUrl,
  showLoading,
  showMessage,
  rerender,
  hideLoading,
} from '../utils.js';
import { getProduct } from '../api.js';
//import Rating from '../components/Rating.js';
import { getUserInfo } from '../localStorage.js';

const ProductScreen = {
  after_render: async () => {
    const request = parseRequestUrl();
    document.getElementById('add-button').addEventListener('click', () => {
      document.location.hash = `/cart/${request.id}`;
    });
    // if (document.getElementById('review-form')) {
    //   document
    //     .getElementById('review-form')
    //     .addEventListener('submit', async (e) => {
    //       e.preventDefault();
    //       showLoading();
    //       const data = await createReview(request.id, {
    //         comment: document.getElementById('comment').value,
    //         rating: document.getElementById('rating').value,
    //       });
    //       hideLoading();
    //       if (data.error) {
    //         showMessage(data.error);
    //       } else {
    //         showMessage('Review Added Successfully', () => {
    //           rerender(ProductScreen);
    //         });
    //       }
    //     });
    // }
  },
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    const userInfo = getUserInfo();

    return `
    <div>
      <div class="back-to-result">
        <a href="/#">Back to result</a>
      </div>
      <div class="details">
           <div class="details-image">
              <img src="${product.image}" alt="product" />
           </div>
           <div class="details-info">
              <ul>
                <li>
                  <h1>${product.name}</h1>
                </li>
                <li>
                  Price: <b>₦${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>
                    ${product.description}
                  </div>
                </li>
              </ul>
            </div>
            <div class="details-action">
              <ul>
                <li>
                  Price: ${product.price}
                </li>
                <li>
                  Status:  
                   ${product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>              
                <li>
                <button
                id="add-button"
                class="primary"
                >
                Add to Cart
                </button>
                </li>
              </ul>
            </div>
            
          </div>
        `;
  },
};

export default ProductScreen;
