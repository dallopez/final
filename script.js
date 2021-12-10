Vue.component('details-modal', {
  props:{
    instrument: Object
  },
  template: '#details-modal-template'
});

Vue.component('create-modal', {
  props:{
    newInstrument:{
      type: Object,
      default: function(){
        return{
          name: "",
          type: "",
          price: 0,
          brand: "",
          image: "",
          inCart: false,
          details: false
        }
      }
    }
  },
  template: '#create-modal-template'
});

new Vue({
  el: "#app",
  data:{
    showCreateModal: false,
    myCart: [],
    instruments: [{
      name: "Stratocaster",
      type: "Guitar",
      price: 4000,
      brand: "Fender",
      image: "http://images.richtonemusic.co.uk/product/YFENDER102646.jpg",
      inCart: false,
      details: false
    },
    {
      name: "YFL-222",
      type: "Flute",
      price: 600,
      brand: "Yamaha",
      image: "https://images-na.ssl-images-amazon.com/images/I/71KUdr-LtGL._AC_SL1500_.jpg",
      inCart: false,
      details: false
    },
    {
      name: "M225 Acoustic",
      type: "Guitar",
      price: 610,
      brand: "Maton",
      image: "https://cdn.shopify.com/s/files/1/0509/5037/3566/products/maton225_06_300x.jpg?v=1625228231",
      inCart: false,
      details: false
    },
    {
      name: "YAS-875EXII",
      type: "Saxophone",
      price: 5900,
      brand: "Yamaha",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJek9FbxwyyOLhOFf8AWP39-3lppnsCVVjpdZ2h4sTXiiUGfu4HA",
      inCart: false,
      details: false
    },
    
    {
      name: "Concert Ukulele",
      type: "Ukulele",
      price: 650,
      brand: "Maton",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1QeoJYK5OnGkVxdrcnvOpZdxV0WkWT-vYC1m6sldnXxlOF1M",
      inCart: false,
      details: false
    }, 
    
    {
      name: "Telecaster",
      type: "Guitar",
      price: 2250,
      brand: "Fender",
      image: "https://cdn.shopify.com/s/files/1/2319/0503/products/3-front-fender-foto-flame-09942_1024x1024.jpg?v=1598211997",
      inCart: false,
      details: false
    },
                
   ],
  },
  methods:{
    addToCart: function(instrument){
      instrument.inCart = true;
      instrument.details = false;
      this.myCart.push(instrument);
    },
    emptyCart: function(){
      this.instruments.forEach(function(instrument){
        instrument.inCart = false;
      })
      this.myCart = [];
    },
    createInstrument: function(newInstrument){
      var errors = [];
      if (newInstrument.name === ""){
        errors.push("Name must not be empty");
      }
      if (newInstrument.type === ""){
        errors.push("Type must not be empty");
      }
      if (newInstrument.price <= 0){
        errors.push("Price must be greater than 0");
      }
      if (newInstrument.brand === ""){
        errors.push("A brand must be selected");
      }
      if (errors.length > 0){
        alert(errors);
      }else{
        this.instruments.push(newInstrument);
        this.showCreateModal = false;
      }
    }
  }
});