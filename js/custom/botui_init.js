function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "Hi, 欢迎光临Akilarの糖果屋😊"
  }).then(function() {
    botui.message.add({
      delay: 1100,
      content: "我是店长Akilar😄"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "你也可以叫我Aki~😋"
      }).then(function() {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "我想知道更多关于糖果屋的故事!😃",
            value: "sure"
          }, {
            text: "好的，就这样吧，拜拜！🙄",
            value: "skip"
          }]
        }).then(function(a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  var sure = function() {
      botui.message.add({
        delay: 600,
        content: "🎉🎉🎉🎉🎉🎉"
      }).then(function() {
        secondpart()
      })
    },
    end = function() {
      botui.message.add({
        delay: 600,
        content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
      })
    },
    secondpart = function() {
      botui.message.add({
        delay: 5000,
        content: "首先呢，很感谢您肯在这里驻足片刻❤️。Akilarの糖果屋是一个个人性质的博客，我会在这里发表各种各样的内容。"
      }).then(function() {
        botui.message.add({
          delay: 15000,
          content: "起这个名字是因为想到了安卓的命名方式，安卓历代版本都用甜品的名字命名🍰，例如9是Pineapple cake(菠萝蛋糕)🍰，8是Oreo(奥利奥)🍩，那我干脆就甜到底了。因此可以看到我的分类里面都是糖。之后就发现了一个很纠结的问题，除了巧克力，我想不到其他的不带糖字的糖果。当然了，无伤大雅。才怪咯！超难受的好么！偏偏我那么喜欢巧克力🍫，我是不会把它删掉的。"
        }).then(function() {
          botui.message.add({
            delay: 5000,
            content: "分类也有一点我的恶趣味在。👀"
          }).then(function() {
            botui.message.add({
              delay: 8000,
              content: "比如巧克力是Ubuntu的教程，棉花糖是windows的教程，糖葫芦就是各种通用教程啦！🎉"
            }).then(function() {
              botui.message.add({
                delay: 5000,
                content: "泡泡糖是个人日记哦，流水账一样的，不要看，很羞耻的。😶"
              }).then(function() {
                botui.message.add({
                  delay: 4000,
                  content: "我个人最推荐的是太妃糖版块哦，这里可都是我引以为豪的作品呢💝！马卡龙酌情观看吧，长篇连载对我来说是个挑战，很可能断更。👻"
                }).then(function() {
                  botui.action.button({
                    delay: 1100,
                    action: [{
                      text: "为什么叫Akilarの糖果屋呢？🤔",
                      value: "why-mashiro"
                    }]
                  }).then(function(a) {
                    thirdpart()
                  })
                })
              })
            })
          })
        })
      })
    },
    thirdpart = function() {
      botui.message.add({
        delay: 1e3,
        content: "诶？Akilar是我的英文名啊😏，糖果屋，emm🤔，大概是因为我在现实中也很想开一家糖果屋吧。"
      }).then(function() {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "😲，那英文名为什么叫Akilar呢？",
            value: "why-cat"
          }]
        }).then(function(a) {
          fourthpart()
        })
      })
    },
    fourthpart = function() {
      botui.message.add({
        delay: 3000,
        content: "这个是因为我的名字的释义用日文发音，其中有一节是Akira，用英文谐音拼写就是Akilar了 "
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "灵感来自于刀剑神域~"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "方便透露一下真名吗？👀",
              value: "why-domain"
            }]
          }).then(function(a) {
            fifthpart()
          })
        })
      })
    },
    fifthpart = function() {
      botui.message.add({
        delay: 5000,
        content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "只是一介无名小卒而已^_^"
        })
      })
    }
}
