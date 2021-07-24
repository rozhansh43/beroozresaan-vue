<template>
  <footer class="bg-dark text-white text-right orange-border-top pt-4">
        <b-container>
            <b-row>
                <b-col md="4" class="left-grey-border px-3">
                    <h5 class="p-3">
                        راه های ارتباطی
                    </h5>

                    <div class="d-flex align-items-center mb-3 grey-text grey-border pt-3">
                        <span>
                            <i class="fas fa-map-marker-alt bg-white rounded p-1 text-dark ml-2">
                            </i>
                              آدرس : تهران، خیابان دماوند، خیابان اتحاد، نبش بزرگراه زین
                              الدین، پلاک ۶۱
                        </span>
                    </div>

                    <div class="d-flex align-items-center mb-3 grey-text">
                        <span>
                        <i class="fas fa-phone bg-white rounded p-1 text-dark ml-2">
                        </i>
                        تلفن: ۹۶۶۴7-۰۲۱
                        </span>
                    </div>

                    <div class="d-flex align-items-center mb-3 grey-text">
                        <span>
                            <i class="fas fa-envelope bg-white rounded p-1 text-dark ml-2">
                            </i>
                        ایمیل: info@BeroozResaan.com
                        </span>
                    </div>

                    <b-container class="icons">
                        <b-row class="justify-content-center">
                            <b-col cols="auto" v-for="icon in icons" :key="icon.index" class="px-2">
                                <img :src="icon" alt="image" >
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>

                <b-col md="4" class="left-grey-border px-3">
                    <h5 class="p-3">
                        راهنمای خرید
                    </h5>

                    <b-row class="grey-border p-3">
                        <b-col class="grey-text">
                            <ul>
                                <li>
                                    <a href="#">
                                        سوالات متداول
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        روش های پرداخت
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        روش های ارسال
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                    کوپن های تخفیف
                                    </a>
                                </li>
                            </ul>
                        </b-col>

                        <b-col class="grey-text">
                            <ul>
                                <li>
                                    <a href="#">
                                    قوانین، مقررات و شرایط استفاده
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                    روش های بازگرداندن کالا
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                    حفاظت از حریم خصوصی کاربران
                                    </a>
                                </li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col md="4">
                    <h5 class="p-3">
                        دانلود اپلیکیشن
                    </h5>

                    <div class="text-center grey-border">
                        <b-img rounded class="p-3" src="https://img.beroozresaan.com/unsafe/170x220/filters:format(webp)/files/widget/text/bee8f15eac7d4817a008eaffb1301553.png" alt="image">
                        </b-img>
                    </div>
                </b-col>
            </b-row>

            <b-row class="grey-border">
                <b-col md="9" class="left-grey-border px-3">
                    <h5 class="p-3">
                        به روز رسان
                    </h5>

                    <p class="grey-text grey-border p-3">
                        به روز رسان ( بروزرسان ) شرکتی در حوزه تامین و توزیع محصولات تازه میباشد که این امکان را به مصرف کننده میدهد تا بتواند انواع محصولات تازه را با حق انتخاب و تنوع بسیار بالا، جدیدترین تاریخ تولید.و مناسب ترین قیمت، با رعایت کامل زنجیره سرد مستقیما از تولید
                        کننده خریداری نماید،حوزه فعالیت مجموعه به روز رسان شامل محصولات پروتئینی (گوشت گوسفند، گوشت گوساله، گوشت شتر، گوشت شترمرغ، کله پاچه، دل و جگر، سیرآب شیردان، گوشت مرغ، گوشت بوقلمون، گوشت بلدرچین، ماهی، میگو، شاه میگو، تخم مرغ، تخم
                        بلدرچین، سوسیس، کالباس و لبنیات شیر، شیر گوسفندی، شیر گاوی، شیر شتر، شیر کم چرب، شیر نیم چرب، شیر کامل، شیر بدون چربی، شیر طعم دار،ماست، ماست گاوی، ماست گوسفندی، ماست کم چرب، ماست پرچرب، ماست همزده، ماست پروبیوتیک، ماست طعم دار،
                        پنیر، پنیر گاوی، پنیر گوسفندی، پنیر سفید،پنیر خامه ای،پنیر پروسس، پنیر تبریزی پنیر گودا، پنیر لاکتیکی، پنیر پیتزا، پنیر چدار، پنیر لیقوان، خامه، خامه صبحانه، سر شیر، خامه قنادی، خامه طعم دار، کره، کره پاستوریزه، کره طعم دار، کره
                        مارگارین، کره بادام زمینی، کره پسته، کره فندق، دوغ،دوغ گاوی، دوغ گوسفندی، دوغ ...
                        <a href="#" class="text-info">
                        بیشتر
                        </a>
                    </p>

                    
                </b-col>

                <b-col md="3">
                    <div>
                        <h5 class="p-3">
                            نمادها
                        </h5>

                        <b-row class="grey-border namad w-100 justify-content-center">
                            <b-col cols="auto" v-for="namad in namads" :key="namad.index" class="p-0 d-flex justify-content-center">
                                <div class="bg-white rounded d-flex justify-content-center p-2 m-2">
                                    <b-img rounded :src="namad" alt="image" >
                                    </b-img>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>

            <b-row class="grey-text grey-border p-3">
                <b-col md="8" class="d-flex justify-content-center align-items-center">
                    <div>
                        ©1399- بازار آنلاین به روز رسان - کليه حقوق اين وب سايت متعلق به شرکت به روز رسان فن آور بین الملل (سهامی خاص) می‌باشد
                    </div>
                </b-col>
                
                <b-col md="2" class="text-left">
                    <a href="#">
                        درباره به روز رسان
                    </a>
                </b-col>

                <b-col md="2" class="text-right">
                    <a href="#">
                        تماس با به روز رسان
                    </a>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: 'footer',
    props: {
        icons: {
            type: Array,
            default: () => []
        },
        namads: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style>

</style>