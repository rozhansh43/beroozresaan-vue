<template>
  <div>
    <b-container>
      <b-row>
        
      </b-row>
    </b-container>
    <carousel :perPageCustom="[[0, 1], [768, 2], [1024,4]]" :paginationEnabled="false">
      <slide>
        <b-container fluid class="bg-white">
          <b-row>
            <h5>
              کمپین کامپوره
            </h5>
            
            <b-badge pill variant="danger" class="p-2">
               تخفیف 
            </b-badge>
          </b-row>
          <b-row>
            <b-col cols="6">
              <div>
                <img src="https://img.beroozresaan.com/unsafe/190x190/filters:format(webp)/files/shop/product/326fde3bffb24c05ad32da99e4aebf92.jpg" alt="image">
                <p class="text-right">
                  jjjj
                </p>

                <div class="mb-2 text-left px-3">
                  <div class="text-muted">
                    <span class="discount-value position-relative px-2">
                      jjj
                    </span>
                    
                    <div class="font-weight-bold text-left px-3">
                      jj
                    </div>
                  </div>
                </div>
              </div>
            </b-col>

            <b-col cols="6">
              <b-card
                img-src="https://img.beroozresaan.com/unsafe/190x190/filters:format(webp)/files/shop/product/326fde3bffb24c05ad32da99e4aebf92.jpg"
                img-alt="suggestedProduct.name"
                img-top
                tag="article"
                style="max-width: 20rem;"
              >
                <b-card-text class="text-right">
                  jjj
                </b-card-text>

                <div class="mb-2 text-left px-3">
                  <div class="text-muted">
                    <span class="discount-value position-relative px-2">
                      jjj
                    </span>
                    
                    <div class="font-weight-bold text-left px-3">
                      jjjj
                    </div>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </slide>
    </carousel>
  </div>
</template>