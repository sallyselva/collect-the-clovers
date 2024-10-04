sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    info.score()
    web.open("https://115.111.238.147:889/api/ECommReflection?playername=" + info.score() + "&score=" + info.score())
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.buzzer.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(800, function () {
    clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
