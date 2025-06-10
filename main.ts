namespace SpriteKind {
    export const rock = SpriteKind.create()
}
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
let rock = sprites.create(img`
    . . c c c c . . 
    . c b d d d c . 
    c b d d d d d c 
    c b b d d d d c 
    c b d b d d b c 
    c c b d b b b c 
    c c c b d d b c 
    c c b b c c c c 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
music.play(music.stringPlayable("- - - - C5 B - - ", 120), music.PlaybackMode.UntilDone)
