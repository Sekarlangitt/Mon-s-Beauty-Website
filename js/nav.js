const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo-non-bg.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="404.html"><img src="img/user.png" alt=""></a>
                <a href="404.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="Links-container">
            <li class="Link-item"><a href="index.html" class="link">home</a></li>
            <li class="Link-item"><a href="product.html" class="link">product</a></li>
            <li class="Link-item"><a href="scarlett.html" class="link">scarlett</a></li>
            <li class="Link-item"><a href="msglow.html" class="link">ms glow</a></li>
            <li class="Link-item"><a href="geamoore.html" class="link">geamoore</a></li>
        </ul>
    `;
}

createNav();