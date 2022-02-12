let filter_btnBrand = document.getElementsByClassName("f_by_b_nam3");
let sort_btn = document.getElementsByClassName("s_item_order");
let filter_productByName = document.querySelectorAll('.box');
let filter_productByPrice = document.querySelectorAll(".price_tag");
let filter_productByRating = document.querySelectorAll(".random_rating")
count = 0;

// Ham Menu
function pop() {
    document.getElementById("ham_nav").style.height = "200px"
}
function close_nav() {
    document.getElementById("ham_nav").style.height = "0px"
}

// For Filter
function expand_filter() {
    let filter_menu = document.getElementById('Filter').value;

    if (filter_menu == "brand") {
        document.getElementById("f_bb_name").style.display = 'flex'
    }
    else if (filter_menu == "Price") {
        document.getElementById("f_bp").style.display = 'flex'
    }
    else{
        document.getElementById("f_br").style.display = 'flex'
    }
}

function expand_sort(){
    let sort_menu = document.getElementById("sort").value;

    if((sort_menu == 'brand') || (sort_menu == 'price') || (sort_menu == 'rating')){
        document.getElementById("s_item").style.display = 'flex'
    }
}

// quantity counter for all
document.getElementById('qty').innerText = filter_productByName.length

// logic for filter by brand name
for (i=0; i<filter_btnBrand.length; i++){
    filter_btnBrand[i].addEventListener('click', (e) =>{
        e.preventDefault()
        document.getElementById("f_bb_name").style.display = 'none'

        const filter_by_brand = e.target.value;
        filter_productByName.forEach((brand_div)=>{
            if(brand_div.innerText.includes(filter_by_brand)){
                brand_div.style.display = 'flex';
                count+=1
                document.getElementById("qty").innerText = count;
            }
            else{
                brand_div.style.display = 'none';
            }
        })
    })
}

// logic for filter by price
function filter_price(a, b){
    document.getElementById("f_bp").style.display = 'none'
    filter_productByPrice.forEach((price_div) =>{
        let converted_price = parseInt(price_div.innerText)
         if((converted_price > a) && (converted_price <= b)){
            price_div.parentElement.parentElement.parentElement.style.display = 'flex'
            count+=1
            document.getElementById("qty").innerText = count;
        }
         else{
            price_div.parentElement.parentElement.parentElement.style.display = 'none'
        }
    })
}

// logic for Filter By Rating
function filter_rating(a){
    document.getElementById("f_br").style.display = 'none'
    filter_productByRating.forEach((rating_div) => {
        let converted_rating = parseInt(rating_div.innerText)
        if (a >= 3){
            if ((converted_rating == a) || (converted_rating > a)){
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'flex'
                count+=1
                document.getElementById("qty").innerText = count;
            }
            else{
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
            }
        }
        else{
            if((converted_rating < a)){
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'flex'
                count+=1
                document.getElementById("qty").innerText = count;
            }
            else{
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
            }
        }        
    })
}

// For Rating color
filter_productByRating.forEach((rating_box_color) =>{
    let x = parseFloat(rating_box_color.innerText)
    if(x > 4){
        rating_box_color.parentElement.style.backgroundColor = 'lightgreen'
    }
    else if(x < 2){
        rating_box_color.parentElement.style.backgroundColor = 'red'
        rating_box_color.parentElement.style.color = 'white'
    }
})

// Sorting function  
for(i=0; i<sort_btn.length; i++){
    sort_btn[i].addEventListener('click', (e) =>{
        let sort_menu = document.getElementById("sort").value;
        const sort_order = e.target.value
        // console.log(sort_menu)
        // console.log(sort_order)
        if (sort_menu == 'brand'){
            let sort_productByName = document.getElementsByClassName('brand');
            let a = []
            for( j=0; j< sort_productByName.length; j++){
                 a.push(sort_productByName[j].innerText)
            }
            // console.log(a);
            b=a.sort()
            // console.log(b[0].parentElement);
            // console.log(b)
            // console.log(b.reverse());
        }
        else if(sort_menu == 'price'){
            console.log('price')
        }
        else{
            console.log('rating')
        }
    })
}