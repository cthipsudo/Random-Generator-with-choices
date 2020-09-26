const questions = [
    [
        {
            questionId: 'a',
            question: '(Question A) FIXED first question: How is your day?',
            choices: ['Fine', 'Doing Swell', 'Terrible', '...']
        }
    ],
    [
        [
            {
                questionId: 'b1',
                question: `(Question B1) There is a vent in the ship with something glowing inside. What do you do?`,
                choices: ['Fine', 'Doing Swell', 'Terrible', '...']
            },
            {
                questionId: 'b2',
                question: `(Question B2) After gaining access to the inside of the vent. You see the item, grab it?`,
                choices: ['Fine', 'Doing Swell', 'Terrible', '...']
            },
        ],
        [
            {
                questionId: 'c1',
                question: `(Question C1) You should get to know your ship a bit more captain, what do you want to look at?`,
                choices: ['Fine', 'Doing Swell', 'Terrible', '...']
            },
            {
                questionId: 'c2',
                question: `(Question C2) You decided to walk to the jukebox. What next?`,
                choices: ['Fine', 'Doing Swell', 'Terrible', '...']
            },
            {
                questionId: 'c3',
                question: `(Question C3) You decided to explore the creepy mysterious hallway on the ship`,
                choices: ['Fine', 'Doing Swell', 'Terrible', '...']
            }
        ],
        [
            {
                questionId: 'd1',
                question: `(Question D1) Example Question Part One`
            },
            {
                questionId: 'd2',
                question: `(Question D2) Example Question Part Two`
            },
            {
                questionId: 'd3',
                question: `(Question D3) Example Question Part Three`
            }
        ]
    ],
    [
        {
            questionId: 'e5',
            question: '(Question E) FIXED Last question: How was your experience?'
        }
    ]

];

//Old Array = [['a'], [['b1','b2', 'b3']], ['c1','c2', 'c3'], ['d1','d2', 'd3'], ['e1','e2', 'e3', 'e4'], ['f1','f2', 'f3', 'f4', 'f5'], ['g1','g2', 'g3'], ['h1','h2', 'h3'], ['i1','i2', 'i3', 'i4'], ['j1','j2', 'j3']], ['k']];
export default questions;