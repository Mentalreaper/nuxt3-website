<!-- Homepage -->
<template>
    <div>
        <div class="flex">
            <div class="w-[75%] pr-20">
                <h2 class="text-colour-light">About Me - Alexander Conn</h2>
                <p>
                    Hey there, my name is Alex (as you could probably tell)! I'm never sure how to do -business speak- for these formal situations, like an English 
                    <span class="word kanji japanese_gothic p-0" title="(keigo) Honourable Speech | Business Language" data-reading="けい">敬</span>
                    <span class="word kanji japanese_gothic" title="(keigo) Honourable Speech | Business Language" data-reading="ご">語,</span>
                    so I'm usually winging it. On this "About Me" page, I'm just going to be speaking in a somewhat relaxed way.
                    <br> <br>
                    I've pretty much always loved games, even as a younger kid. I was lucky to grow up in a house that 
                    had a computer in the early 2000s. Where I grew up, our house was the first house in the village 
                    to have one (and later to get internet). And, as such I grew up playing some simple older PC games 
                    (because they were the cheapest to buy haha). Wizardry, Might and Magic (regular and "Heroes of"), 
                    Baldur's Gate, Age of Empires, and Yume Nikki were some of my early gaming memories. When I turned 5, my dad 
                    let me try his PS1, and that love of gaming was embedded into me. From old classics (such as Deus Ex 
                    and Icewind Dale), to modern pieces (Undertale, Fallout: New Vegas, and Dark Souls).
                    <br> <br>
                    I Graduated from Kingston University with a First Class Degree in 
                    Computer Science (Games Technology) BSc. As you will see in the skills section below, C++ and C# 
                    were the languages I was taught at Kingston, alongside an understanding of Unity/Unreal Engine and 
                    a general familiarity with OpenGL (via GLuT). Since I was doing the (Games Technology) course, 
                    instead of (Games Programming), I was also taught to use Adobe After Effects, Photoshop, Premiere 
                    Pro, and XD. Primarily, my education at Kingston University allowed me to improve my time
                    management skills, and project development, since my professors preferred an approach that allowed 
                    us to work on our own, but always being able to ask for help when needed.
                    <br> <br>
                    To be quite honest, I really just love games and the design that goes into them. 
                    <br> <br>
                    Feel free to play all the games under my portfolio tab, or try my university projects on the 
                    right-hand timeline. Or even, to just contact me, right now I haven't got a job, and as such have 
                    a lot of free time!
                </p>
            </div>
            <div class="w-[25%] bg-[#2C1B47] flex-col border-2 border-solid border-[#f7bec0]">
                <div class="text-center pt-5 text-xl hover:text-[white]">
                    <nuxt-link to="/about-me/timeline">Timeline of University Game Projects</nuxt-link>
                </div>
                <div class="pl-5 pt-5 hover:text-[white]">
                    2017 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128"/>
                    CharAd
                </div>
                <div class="pr-5 text-right hover:text-[white]">
                    2017 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128" class="ml-auto" />
                    Into The Abyss
                </div>
                <div class="pl-5 hover:text-[white]">
                    2018 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128"/>
                    untitled rpg
                </div>
                <div class="pr-5 text-right hover:text-[white]">
                    2018 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128" class="ml-auto" />
                    Ascension
                </div>
                <div class="pl-5 hover:text-[white]">
                    2018 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128"/>
                    Cosmonaut
                </div>
                <div class="pr-5 text-right hover:text-[white]">
                    2018 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128" class="ml-auto" />
                    MedaBot Fan Game
                </div>
                <div class="pl-5 hover:text-[white]">
                    2020 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128"/>
                    Bear Grills
                </div>
                <div class="pr-5 text-right pb-5 hover:text-[white]">
                    2020 <br>
                    <nuxt-img src="/games/game-00-placeholder.png" alt="" fit="inside" height="128" width="128" class="ml-auto" />
                    Relic
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .jp {
    font-size: 20pt;
    }
    .word {
    position: relative;
    /* top: 0.6em; */
    display: inline-block;
    white-space: nowrap;
    }
    .kanji::before {
    content: attr(data-reading);
    color: gray;
    font-size: 50%;
    line-height: 1;
    position: absolute;
    top: -0.5em;
    white-space: nowrap;
    }
    .japanese_gothic {
    font-family: "HiraKakuPro-W3", "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, "游ゴシック", YuGothic, "ＭＳ Ｐゴシック", "MS PGothic", "ＭＳ ゴシック", "MS Gothic", sans-serif;
    }
</style>