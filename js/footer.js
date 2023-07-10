const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
                <img src="img/logo-non-bg.png" class="logo" alt="">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">scarlett</li>
                        <li><div class="footer-link" id="facialwash-btn">facial wash</div></li>
                        <li><div class="footer-link" id="toner-btn">toner</div></li>
                        <li><div class="footer-link" id="serum-btn">serum</div></li>
                        <li><div class="footer-link" id="cream-btn">cream</div></li>
                        <li><div class="footer-link" id="mask-btn">mask</div></li>
                        <li><div class="footer-link" id="showerscrub-btn">shower scrub</div></li>
                        <li><div class="footer-link" id="bodylotion-btn">body lotion</div></li>
                        <li><div class="footer-link" id="bodyscrub-btn">body scrub</div></li>
                        <li><div class="footer-link" id="shampoo-btn">shampoo</div></li>
                        <li><div class="footer-link" id="conditioner-btn">conditioner</div></li>
                    </ul>
                    <ul class="category">
                        <li class="category-title">ms glow</li>
                        <li><div class="footer-link" id="acne-btn">acne</div></li>
                        <li><div class="footer-link" id="whitening-btn">whitening</div></li>
                        <li><div class="footer-link" id="ultimate-btn">ultimate</div></li>
                        <li><div class="footer-link" id="luminous-btn">luminous</div></li>
                        <li><div class="footer-link" id="men-btn">men</div></li>
                    </ul>
                    <ul class="category">
                        <li class="category-title">geamoore</li>
                        <li><div class="footer-link" id="parfume-btn">parfume</div></li>
                        <li><div class="footer-link" id="bodymist-btn">body mist</div></li>
                        <li><div class="footer-link" id="deospray-btn">deo spray</div></li>
                        <li><div class="footer-link" id="collagendrink-btn">collagen drink</div></li>
                    </ul>
                </div>
            </div>
            <p class="footer-title">About Mon's Beauty</p>
            <p class="info">Mon's beauty is an online shop that provides skincare and bodycare from brand Scarlett, MS Glow, and Geamoore at a very affordable price.</p>
            <p class="info"><a href="https://linktr.ee/Monsbeauty">Support Link</a></p>
            <p class="info">Telephone - +62 838-3490-3581</p>
            <div class="footer-social-container">
                <div>
                    <a href="https://api.whatsapp.com/send/?phone=6283834903581&text&app_absent=0" class="social-link">whatsapp</a>
                    <a href="https://instagram.com/monsbeautyy_" class="social-link">instagram</a>
                    <a href="https://shopee.co.id/monicafara28" class="social-link">shopee</a>
                </div>
            </div>
            <p class="footer-credit">Mon's Beauty</p>
    `;
}

createFooter();

const fw = document.querySelector('#facialwash-btn');
            fw.addEventListener('click', ()=>{
                var fw2 = document.querySelector('#facialwash');
                fw2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const toner = document.querySelector('#toner-btn');
            toner.addEventListener('click', ()=>{
                var toner2 = document.querySelector('#toner');
                toner2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const serum = document.querySelector('#serum-btn');
            serum.addEventListener('click', ()=>{
                var serum2 = document.querySelector('#serum');
                serum2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const cream = document.querySelector('#cream-btn');
            cream.addEventListener('click', ()=>{
                var cream2 = document.querySelector('#cream');
                cream2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const mask = document.querySelector('#mask-btn');
            mask.addEventListener('click', ()=>{
                var mask2 = document.querySelector('#mask');
                mask2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const ss = document.querySelector('#showerscrub-btn');
            ss.addEventListener('click', ()=>{
                var ss2 = document.querySelector('#showerscrub');
                ss2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const bl = document.querySelector('#bodylotion-btn');
            bl.addEventListener('click', ()=>{
                var bl2 = document.querySelector('#bodylotion');
                bl2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const bs = document.querySelector('#bodyscrub-btn');
            bs.addEventListener('click', ()=>{
                var bs2 = document.querySelector('#bodyscrub');
                bs2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const sham = document.querySelector('#shampoo-btn');
            sham.addEventListener('click', ()=>{
                var sham2 = document.querySelector('#shampoo');
                sham2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const cond = document.querySelector('#conditioner-btn');
            cond.addEventListener('click', ()=>{
                var cond2 = document.querySelector('#conditioner');
                cond2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const acne = document.querySelector('#acne-btn');
            acne.addEventListener('click', ()=>{
                var acne2 = document.querySelector('#acne');
                acne2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const wht = document.querySelector('#whitening-btn');
            wht.addEventListener('click', ()=>{
                var wht2 = document.querySelector('#whitening');
                wht2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const lumi = document.querySelector('#luminous-btn');
            lumi.addEventListener('click', ()=>{
                var lumi2 = document.querySelector('#luminous');
                lumi2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const ult = document.querySelector('#ultimate-btn');
            ult.addEventListener('click', ()=>{
                var ult2 = document.querySelector('#ultimate');
                ult2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const men = document.querySelector('#men-btn');
            men.addEventListener('click', ()=>{
                var men2 = document.querySelector('#men');
                men2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const par = document.querySelector('#parfume-btn');
            par.addEventListener('click', ()=>{
                var par2 = document.querySelector('#cparfume');
                par2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const bm = document.querySelector('#bodymist-btn');
            bm.addEventListener('click', ()=>{
                var bm2 = document.querySelector('#bodymist');
                bm2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const ds = document.querySelector('#deospray-btn');
            ds.addEventListener('click', ()=>{
                var ds2 = document.querySelector('#deospray');
                ds2.scrollIntoView({behavior:'smooth', block:'start'});
            });

const cold = document.querySelector('#collagendrink-btn');
            cold.addEventListener('click', ()=>{
                var cold2 = document.querySelector('#collagendrink');
                conl2.scrollIntoView({behavior:'smooth', block:'start'});
            });