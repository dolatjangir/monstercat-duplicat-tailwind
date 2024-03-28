<script>
export default {
    name: "helloWorld"
}
</script>

<template>
<!-- <div class="header flex justify-around">
    <div class="header-left pt-6 pl-20">
        <a href="/">
            <img src="https://cdn.monstercat.com/monstercat-logo.webp" alt="Monstercat Logo" title="Monstercat" width="50" height="50">
        </a>
    </div>
    <div class="header-right flex flex-row justify-between">
        <div class="header-right-inLeft flex justify-around">
            <a href="www.instagram.com/monstercat">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="www.tiktok.com/monstercat">
                <i class="fa-brands fa-tiktok"></i>
            </a>
            <a href="www.twitter.com/monstercat">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="www.twitch.com/monstercat">
                <i class="fa-brands fa-twitch"></i>
            </a>
            <a href="www.facebook.com/monstercat">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="www.discord.com/monstercat">
                <i class="fab fa-fw fa-discord"></i>
            </a>
            <a href="https://player.monstercat.app/">
                <i class="fa-solid fa-circle-play"></i>
            </a>
        </div>
        <div class="header-right-inRight">
            <button id="menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </div>
</div> -->

<div class=" w-100% h-100vh
bg-[url('https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCLP017%2Fcover%3F2ee434f2-4499-4c30-a937-4aec2b4ac1fc&width=1024')]
 bg-no-repeat bg-cover bg-center py-28 absolute backdrop-blur-sm ">
    <div class=" w-[50px] flex flex-row justify-between ">
        <div class="px-10  py-10  ">
            <a href="/">
                <img src="https://cdn.monstercat.com/monstercat-logo.webp" alt="Monstercat Logo" title="Monstercat" width="50" height="50">
            </a>
        </div>

       
            <div class="flex flex-row justify-between">
                <div class=" gap-8 ">
                    <a href="www.instagram.com/monstercat">
                        <i class="  fa-brands fa-instagram"></i>
                    </a>
                    <a href="www.tiktok.com/monstercat">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="www.twitter.com/monstercat">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="www.twitch.com/monstercat">
                        <i class="fa-brands fa-twitch"></i>
                    </a>
                    <a href="www.facebook.com/monstercat">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="www.discord.com/monstercat">
                        <i class="fab fa-fw fa-discord"></i>
                    </a>
                    <a href="https://player.monstercat.app/">
                        <i class="fa-solid fa-circle-play"></i>
                    </a>
                </div>
                <div class="">
                    <button id="menu-toggle">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
           

        </div>
       

    </div>
    <div class=" w-[400px] flex flex-row justify-start items-center">
            <div>
                <img src="https://cdx.monstercat.com/resized/8a169d846576fcdad7a0a6e04d371eb05b2a9397/600.webp" alt="">
            </div>
            <div class="flex flex-row gap-1">
              <button class="border">Listen Now</button>
              <button class="border">Share</button>
            </div>

        </div>
      
</div>

</template>

<style scoped>
* {
    margin: 0%;
    padding: 0%;
}
</style>
