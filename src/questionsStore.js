const questions = [
    [
        {
            questionId: 'a',
            question: '(Question A) FIXED first question: Who are you?',
            choices: {
                race: {
                    goblin: `Hi I'm goblin`,
                    alien: `Hi I'm alien`,
                    human: `Hi I'm human`,
                },
                class: {
                    wizard: 'Wizards are elegant',
                    thief: 'Thief extrodinare',
                    warrior: 'Gwarh! Strong warrior I am!',
                },
                default: {
                    choice3: 'Default choice 3',
                    choice4: 'Default choice 4',
                }
            }
        }
    ],
    [
        [
            {
                questionId: 'b1',
                question: `(Question B1) There is a vent in the ship with something glowing inside. What do you do?`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            },
            {
                questionId: 'b2',
                question: `(Question B2) After gaining access to the inside of the vent. You see the item, grab it?`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            },
        ],
        [
            {
                questionId: 'c1',
                question: `(Question C1) You should get to know your ship a bit more captain, what do you want to look at?`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            },
            {
                questionId: 'c2',
                question: `(Question C2) You decided to walk to the jukebox. What next?`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            },
            {
                questionId: 'c3',
                question: `(Question C3) You decided to explore the creepy mysterious hallway on the ship`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            }
        ],
        [
            {
                questionId: 'd1',
                question: `(Question D1) Example Question Part One`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            },
            {
                questionId: 'd2',
                question: `(Question D2) Example Question Part Two`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            },
            {
                questionId: 'd3',
                question: `(Question D3) Example Question Part Three`,
                choices: {
                    race: {
                        goblin: 'Goblin Race Choice',
                        alien: 'Alien Race Choice',
                        human: 'Human Race Choice',
                    },
                    class: {
                        wizard: 'Wizard Choice',
                        thief: 'Thief Choice',
                        warrior: 'Warrior Choice',
                    },
                    default: {
                        choice3: 'Default choice 3',
                        choice4: 'Default choice 4',
                    }
                }
            }
        ]
    ],
    [
        {
            questionId: 'e5',
            question: '(Question E) FIXED Last question: How was your experience?',
            choices: {
                race: {
                    goblin: 'Goblin Race Choice',
                    alien: 'Alien Race Choice',
                    human: 'Human Race Choice',
                },
                class: {
                    wizard: 'Wizard Choice',
                    thief: 'Thief Choice',
                    warrior: 'Warrior Choice',
                },
                default: {
                    choice3: 'Default choice 3',
                    choice4: 'Default choice 4',
                }
            }
        }
    ]

];

//Old Array = [['a'], [['b1','b2', 'b3']], ['c1','c2', 'c3'], ['d1','d2', 'd3'], ['e1','e2', 'e3', 'e4'], ['f1','f2', 'f3', 'f4', 'f5'], ['g1','g2', 'g3'], ['h1','h2', 'h3'], ['i1','i2', 'i3', 'i4'], ['j1','j2', 'j3']], ['k']];
export default questions;