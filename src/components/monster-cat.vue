<script>
export default {
    name: "monster-cat"
}
</script>
<template>
<div class="background-img ">
    <div class="header w-[100%] h-24 bg-neutral-800 fixed z-20 ">
        <img class=" absolute top-8 left-8" src="https://cdn.monstercat.com/monstercat-logo.webp" alt="Monstercat Logo" title="Monstercat" width="50" height="50" />

        <div class=" absolute top-8 left-28  flex flex-row text-xl text-white w-full h-12 justify-around items-center">
            <div class="flex flex-row gap-10">
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
            <div>
                <button id="menu-toggle">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>

    </div>
    <div class="w-full h-screen flex  items-center justify-center absolute right-32 top-32 z-10 gap-8 ">
        <div>
            <img class=" w-[400px] h-[400px] " src='https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCLP017%2Fcover%3F2ee434f2-4499-4c30-a937-4aec2b4ac1fc&width=1024' />
        </div>
        <div class=" text-2xl leading-3  flex flex-col gap-8">
            <div class="font-bold">LEVEL DAYS<br /></div><span class="italic">CONRO</span>
            <div class=" text-white flex gap-8">
                <button class="w-40 h-12     border-2 bg-[#50A584] border-none "><i class="fa-solid fa-play"></i> listen now</button>
                <button class="w-40 h-12 text border-white border-2"><i class="fa-solid fa-share"></i> SHARE</button>
            </div>
        </div>
    </div>

    <div>
        <img class="w-[100%] h-[60px]  absolute bottom-0" src="https://cdn.monstercat.com/background-tile.webp" alt="black-color" />
    </div>
</div>
<div>
    <div class="w-full h-screen bg-white"></div>
</div>
<div class="w-100% relative top-20 h-screen bg-opacity-85 bg-[url('https://cdn.monstercat.com/background-tile.webp')]">
    <div class="flex flex-col items-center justify-center ">
        <div class="  w-[70%] flex flex-col gap-8">
            <h1 class="w-[100%] h-8 font-extrabold text-white text-4xl font-mono tracking-widest"> <span class="">STREAM IT YOUR WAY</span></h1>

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
        <div class=" w-[100%] h-[100%] bg-[#100c0c] px-52">
            <h1 class="w-[100%] h-8 font-extrabold text-white text-4xl font-mono m-8 text-start tracking-widest">TRACK LIST</h1>
            <div>
                <table class="">
                    <tr class="text-xl text-white flex flex-row  gap-10 items-center font-mono mb-7">
                        <td>1</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>The Small Things</h3>conro
                        </td>
                        <td class="font-medium relative left-40 ">3:35</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- tr-2 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>2</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Without Your Love</h3>conro
                        </td>
                        <td class="font-medium  relative left-40 ">3:09</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-3 -->
                    <tr class="text-xl text-white flex flex-row  gap-10 items-center font-mono mb-7">
                        <td>3</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Therapy</h3>conro
                        </td>
                        <td class="font-medium relative left-40">3:06</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-4 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>4</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Fighters</h3>conro
                        </td>
                        <td class="font-medium relative left-40">3:46</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-5 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>5</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Way Up</h3>conro
                        </td>
                        <td class="font-medium relative left-40">3:32</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-6 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>6</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class="w-[400px]">
                            <h3>Waiting</h3>conro
                        </td>
                        <td class="font-medium relative left-40">3:07</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-7 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>7</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Dreaming</h3>conro
                        </td>
                        <td class="font-medium relative left-40">2:57</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-8 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>8</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Tattoo</h3>conro
                        </td>
                        <td class="font-medium relative left-40">3:29</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-9 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>9</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class="w-[400px]">
                            <h3>Out for the Night</h3>conro
                        </td>
                        <td class="font-medium relative left-40 ">3:05</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-10 -->
                    <tr class="text-xl text-white flex flex-row gap-10 items-center font-mono mb-7">
                        <td>10</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class="w-[400px]">
                            <h3>Overdue</h3>conro
                        </td>
                        <td class="font-medium  relative left-40">2:48</td>
                        <td  class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-11-->
                    <tr class="text-xl text-white flex flex-row  gap-10 items-center font-mono mb-7">
                        <td>11</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Say It</h3>conro
                        </td>
                        <td class="font-medium relative left-40">3:04</td>
                        <td  class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                    <!-- track-12-->
                    <tr class="text-xl text-white flex flex-row  gap-10 items-center font-mono mb-7">
                        <td>12</td>
                        <td><i class="fa-solid fa-play"></i></td>
                        <td class=" w-[400px]">
                            <h3>Here to Stay</h3>conro
                        </td>
                        <td class="font-medium relative left-40">2:44</td>
                        <td class=" relative left-44"><i class="fa-solid fa-share"></i></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="w-[100%] h-[100%] bg-[#100c0c] flex flex-col items-center">
            <div class=" w-[70%] h-screen">
            <h1 class="w-[100%] h-8 font-extrabold text-white text-4xl font-mono m-8 start">MUSIC VIDEO</h1>
            <iframe width="960" height="475" src="https://www.youtube.com/embed/7nObtWENgxA?si=xwV5pRL_kI2xUQxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
        
        <div class="w-[100%] h-[100%] bg-[#100c0c] font-semibold text-white flex justify-center">
           <div class=" w-[70%] h-[40vh] flex justify-between items-center border-t-2 border-b-2 border-zinc-600">
            <div class="m-24 flex flex-col gap-3">
            <h2>ABOUT MONSTERCAT</h2>
            <h2>CONTACT US</h2>
            <h2>CAREERS</h2>
            <h2>NEWS</h2>
            <h2>PRESS</h2>
            </div>
            <div class="m-24 flex flex-col gap-3">
                <h2>TERMS OF SERVICE</h2>
                <h2>PRIVACY POLICY</h2>
            </div>
            <div class="m-24 flex flex-col gap-3 font">
                <h2>MONSTERCAT NEWS</h2>
                <p>Don't miss a thing, stay up to date with the latest news from us.</p>
                <div class="border-b-2 border-zinc-600  flex items-center">
                <input class="border-o bg-[#100c0c]" placeholder="Enter Email"/>
                <i class="font-white  fa-solid fa-arrow-right"></i>
            </div>
            </div>
        </div>
       
    </div>
    <div class="bg-[#100c0c] w-full h-[40vh] flex flex-col items-center  ">
        <div class="text-white flex justify-between  w-[70%] h-[40%] mt-10">
            <h3 class="italic text-zinc-600 tracking-widest">2011 - 2024 © Monstercat, All Rights Reserved</h3>
            
            <div class="flex flex-row gap-6">
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-spotify"></i>
                <i class="fa-brands fa-apple"></i>
                <i class="fa-brands fa-bandcamp"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-discord"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-play"></i>

            </div>
        </div>
        <div class="text-sm text-[#9fc4bf] italic flex flex-col gap-5  w-[70%] text-center">
        <p >We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
            <p >We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.</p>
    </div>
</div>
    </div>
</div>
</template>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Workbench&display=swap'); */

* {
    margin: 0%;
    padding: 0%;
}

.background-img {
    height: 120vh;
    width: 100%;
    /* background-image: url('https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCLP017%2Fcover%3F2ee434f2-4499-4c30-a937-4aec2b4ac1fc&width=1024'); */
    background-image: url("../assets/monsterImg5.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* filter:blur(10px); */
    position: absolute;
    top: -20px;
    box-shadow: black;
}

.table .td {
    color: aliceblue;
    width: 80px;
    height: 70px;
    border: 2px solid white;
    border-collapse: separate;

}
</style>
