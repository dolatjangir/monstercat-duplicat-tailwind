<script>
export default {
    name: "helloWorld"
}
</script>

<template>
<div class="background-img ">
    
    <div class="header  h-24 bg-neutral-800 fixed z-20 w-[100%]">
        <img class=" absolute top-8 left-8" src="https://cdn.monstercat.com/monstercat-logo.webp" alt="Monstercat Logo" title="Monstercat" width="50" height="50" />

        <div class=" absolute top-[180px] flex flex-col-reverse  text-lg text-white w-full h-12 justify-center items-end right-20 gap-8">
            <div class="flex flex-col gap-y-3 relative top-7 invisible sm:visible">
                <a href="www.instagram.com/monstercat">
                    <i class="  fa-brands fa-instagram"></i>
                </a>
                <a href="www.tiktok.com/monstercat">
                    <i class="fa-brands fa-tiktok"></i>
                </a>
                <a href="https://www.twitter.com/monstercat">
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
            <div>
                <button class="w-8 text-xl">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>

    </div>
    <div class="flex flex-col relative top-32 items-center justify-center gap-y-14 sm:flex-row sm:gap-x-10 sm:justify-center sm:right-32">
       
            <div class="">
            <img class=" w-[450px] h-[450px]" src='https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCLP017%2Fcover%3F2ee434f2-4499-4c30-a937-4aec2b4ac1fc&width=1024' />
        </div>
        <div class=" text-2xl leading-3  flex flex-col gap-y-9 z-20">
            <div class="text-white text-lg italic sm:transform sm:rotate-90 sm:text-end sm:relative sm:top-36 sm:right-[690px] " ><span class="text-[#50A584]">instict</span>-Released May 22,2020</div>
            <div class="font-bold text-white font-rubic tracking-wider">LEVEL DAYS<br /></div><span class="italic text-white">CONRO</span>
            <div class=" text-white flex gap-8">
                <button class="w-40 h-12     border-2 bg-[#50A584] border-none hover:bg-white hover:text-black"><i class="fa-solid fa-play"></i> listen now</button>
                <button class="w-40 h-12 text border-white border-2 flex justify-center items-center gap-2 hover:bg-white hover:text-black"><i class="fa-solid fa-share-nodes"></i> SHARE</button>
            </div>
        </div>
    </div>

</div>
<div>
<div class="w-full h-screen bg-white"></div>
</div>
<div class="w-100% relative top-20 h-screen bg-opacity-85 border border-red-950 bg-[url('https://cdn.monstercat.com/background-tile.webp')]">
    <div class="flex flex-col items-center justify-center relative top-16  border border-red-950">
        <div class="  w-[70%] flex flex-col gap-8 border border-white">
            <h1 class="w-[100%] h-8 font-extrabold text-white sm:text-4xl text-xl font-mono tracking-widest"> <span class="">STREAM IT YOUR WAY</span></h1>
        
            <table class="table w-[450px]">
                <tr>
                    <td class="td text-center w-32"><i class="w-10  fa-solid fa-circle-play"></i><span>PLAYER</span></td>
                    <td class="td text-center"><i class="fa-brands fa-bandcamp"></i></td>
                    <td class="td text-center"><i class="fa-brands fa-soundcloud"></i></td>
                    <td class="td text-center"><i class="fa-brands fa-apple"></i></td>
                    <td class="td text-center"><i class="fa-brands fa-youtube"></i></td>
                    <td class="td text-center"><i class="fa-brands fa-spotify"></i></td>
                </tr>
            </table>
        </div>
    </div>
    <div class="w-[100%] h-[100%] bg-[#100c0c] flex flex-col items-center">
            <div class=" w-[70%] h-screen">
                <h1 class="w-[100%] h-8 font-extrabold text-white text-4xl font-mono m-8 start">MUSIC VIDEO</h1>
                <div class="">
                    <iframe width="960" height="475" src="https://www.youtube.com/embed/7nObtWENgxA?si=xwV5pRL_kI2xUQxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
</div>
</template>

<style scoped>
* {
    margin: 0%;
    padding: 0%;
}

.background-img {
    height: 120vh;
    width: 100%;
    background-image: url("../assets/monsterImg5.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    position: absolute;
    top: -20px;
    box-shadow: black;
}
</style>
