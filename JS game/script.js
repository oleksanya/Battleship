const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');
const enemy = document.getElementById('enemy');
const again = document.getElementById('again');


const game = {
    ships: [{
            location: ['26', '36', '46', '56'],
            hit: ['', '', '', '']

        },

        {
            location: ['11', '12', '13'],
            hit: ['', '', '']

        },

        {
            location: ['69', '79'],
            hit: []

        },

        {
            location: ['32'],
            hit: ['']

        }
    ],
    shipCount: 4, 
};


const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,
    set updateData(data) {
        this[data] += 1;
        this.render();

    },

    render() {
        record.textContent = this['record'];
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
    }
};
const show = {
    //метод
    hit(elem) {
        this.changeClass(elem, 'hit');

    },
    miss(elem) {
        this.changeClass(elem, 'miss');
    },
    dead(elem) {
        this.changeClass(elem, 'dead');

    },
    changeClass(elem, value) {
        elem.className = value;
    }
};

const fire = (event) => {
    const target = event.target
    if (target.classList.length > 0 || target.tagName !== 'TD') return;
    show.miss(target);
    play.updateData = 'shot';

    for (let i = 0; i < game.ships.length; i++) {
        const ship = game.ships[i];
        const index = ship.location.indexOf(target.id);
        if (index >= 0) {

            show.hit(target);
            play.updateData = 'hit';
            ship.hit[index] = 'x';
            const life = ship.hit.indexOf('');
            if (life < 0) {
                play.updateData = 'dead';
                for ( const cell of ship.location){
                    show.dead(document.getElementById(id));
                }



        game.shipsCount -= 1;
        if(game.shipCount < 1) {
            alert('Game over! ')
        }

            }
        }

    }

};

const init = () => {
    enemy.addEventListener('click', fire)
};

init();