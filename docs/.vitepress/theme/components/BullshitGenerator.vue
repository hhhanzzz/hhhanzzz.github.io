<script setup lang="ts">
import { onMounted } from 'vue'
import data from '../assets/data.json'

onMounted(async () => {
  const options = document.querySelector('.options')
  const config = { min: 2000, max: 5000 }
  options.addEventListener('change', ({ target }) => {
    const num = Number(target.value)
    config[target.id] = num
    target.parentNode.querySelector('input + span').innerHTML = num
  })

  const generateButton = document.getElementById('generate')
  const anotherTitleButton = document.getElementById('anotherTitle')
  const article = document.querySelector('article')
  const titleEl = document.getElementById('title')
  const corpus = data
  const pickTitle = createRandomPicker(corpus.title)
  titleEl.value = pickTitle()
  generateButton.addEventListener('click', () => {
    const text = generate(titleEl.value, { corpus, ...config })
    article.innerHTML = `<section>${text.join('</section><section>')}</section>`
  })
  anotherTitleButton.addEventListener('click', () => {
    titleEl.value = pickTitle()
    if (article.innerHTML) generateButton.click()
  })
})

function randomInt(min = 0, max = 100) {
  const p = Math.random()
  return Math.floor(min * (1 - p) + max * p)
}

/*
function randomPick(arrs) {
  return arr[Math.floor(arrs.length * Math.random())];
}
*/

function createRandomPicker(arr: [string]) {
  arr = [...arr] // copy 数组，以免修改原始数据
  function randomPick() {
    const len = arr.length - 1
    const index = randomInt(0, len)
    const picked = arr[index]
    ;[arr[index], arr[len]] = [arr[len], arr[index]]
    return picked
  }
  randomPick() // 抛弃第一次选择结果
  return randomPick
}

function sentence(pick, replacer) {
  let ret = pick()
  for (const key in replacer) {
    ret = ret.replace(
      new RegExp(`{{${key}}}`, 'g'),
      typeof replacer[key] === 'function' ? replacer[key]() : replacer[key]
    )
  }
  return ret
}

function generate(
  title: string,
  {
    corpus,
    min = 6000, // 文章最少字数
    max = 10000, // 文章最多字数
  } = {}
) {
  const articleLength = randomInt(min, max)
  const { famous, bosh_before, bosh, said, conclude } = corpus
  const [pickFamous, pickBoshBefore, pickBosh, pickSaid, pickConclude] = [
    famous,
    bosh_before,
    bosh,
    said,
    conclude,
  ].map(createRandomPicker)

  const article = []
  let totalLength = 0

  while (totalLength < articleLength) {
    let section = ''
    const sectionLength = randomInt(200, 500) // 每段200到500字
    while (section.length < sectionLength || !/[。？]$/.test(section)) {
      const n = randomInt(0, 100)
      if (n < 20) {
        section += sentence(pickFamous, {
          said: pickSaid,
          conclude: pickConclude,
        })
      } else if (n < 50) {
        section +=
          sentence(pickBoshBefore, { title }) + sentence(pickBosh, { title })
      } else {
        section += sentence(pickBosh, { title })
      }
    }
    totalLength += section.length
    article.push(section)
  }

  return article
}
</script>

<template>
  <div class="bullshit">
    <nav>
      <h1 class="headerTitle"><a href="">文章生成器</a></h1>
    </nav>
    <header>
      <div class="options">
        <div class="min">
          最小字数：<input
            id="min"
            type="range"
            min="500"
            max="5000"
            step="100"
            value="2000"
          /><span>2000</span>
        </div>
        <div class="max">
          最大字数：<input
            id="max"
            type="range"
            min="1000"
            max="10000"
            step="100"
            value="5000"
          /><span>5000</span>
        </div>
      </div>
      <div class="title">
        <input id="title" type="text" value="" />
        <div class="btn">
          <button id="generate">生成</button>
          <button id="anotherTitle">切换</button>
        </div>
      </div>
    </header>
    <main>
      <article>
        <section>
          本作品产生的文章由用户输入内容结合随机信息生成，版权人不保障生成文章的安全性、正确性、及时性、合法性，用户在使用过程中的风险由用户自行承担，版权人对用户使用本作品产生的内容其概不负责，亦不承担任何法律责任。
        </section>
      </article>
    </main>
    <footer></footer>
  </div>
</template>

<style lang="scss" scoped>
[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  outline: 0;
  background-color: transparent;
}
[type='range']::-webkit-slider-runnable-track {
  height: 1px;
  background: #eee;
}
[type='range' i]::-webkit-slider-container {
  height: 16px;
  overflow: hidden;
}
[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--vp-c-brand);
  border: 1px solid transparent;
  margin-top: -7px;
  border-image: linear-gradient(var(--vp-c-brand), var(--vp-c-brand)) 0 fill / 8
    20 8 0 / 0px 0px 0 2000px;
}

.bullshit {
  nav {
    .headerTitle {
      height: 40px;
      line-height: 35px;
      a {
        transition: all 0.25s;
        &:hover {
          color: var(--vp-c-brand);
          text-decoration: none;
        }
      }
    }
  }

  header {
    // border-bottom: solid 1px #ddd;
    .options {
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border: 1px solid var(--vp-c-bg-soft);
      border-radius: 8px;
      background-color: var(--vp-c-bg-soft);
      &:hover {
        box-shadow: var(--vp-shadow-2);
        border-color: var(--vp-c-brand);
        text-decoration: initial;
        background-color: var(--vp-c-bg-soft-up);
      }
      transition: all 0.25s;
      div {
        width: 300px;
        margin-top: 3px;
        padding-left: 20px;
        input {
          margin-right: 10px;
        }
      }
    }
    .title {
      clear: both;
      line-height: 60px;
      text-align: center;
      font-size: 1.5rem;
      padding-top: 12px;
      input {
        outline: none;
        border: none;
        border-bottom: solid 1px #eee;
        text-align: center;
        font-size: 1.5rem;
        // width: 50%;
        max-width: 600px;
      }
      .btn {
        display: flex;
        justify-content: center;
        button {
          height: 3rem;
          line-height: 3rem;
          // width: 5rem;
          padding: 0 15px;
          font-size: 1.2rem;
          margin: 10px;
          border: 1px solid var(--vp-c-bg-soft);
          border-radius: 8px;
          background-color: var(--vp-c-bg-soft-up);

          &:hover {
            color: #fff;
            box-shadow: var(--vp-shadow-2);
            border-color: var(--vp-c-brand);
            text-decoration: initial;
            background-color: var(--vp-c-brand);
          }
        }
      }
    }
  }

  main {
    // margin-top: 15px;
    padding: 15px 0 20px 0;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 8px;
    background-color: var(--vp-c-bg-soft);
    &:hover {
      box-shadow: var(--vp-shadow-2);
      border-color: var(--vp-c-brand);
      text-decoration: initial;
      background-color: var(--vp-c-bg-soft-up);
    }
    section {
      text-indent: 3rem;
      padding: 10px 20px;
    }
  }

  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: white;
  }

  @media screen and (max-width: 480px) {
    .title span {
      display: none;
    }
    #title {
      font-size: 1.2rem;
    }
    .title button {
      font-size: 1.2rem;
    }
    section {
      text-indent: 2.4rem;
    }
  }
}
</style>
