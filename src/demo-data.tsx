	
	export default [
            {
                styles: {
                    "backgroundColor": "blue"
                }
            },
           // Team 1
            {
                "team": {
                "@id": "A1", 
                "id": "1",
                "name": "Team 1",
                }
            },
            // Team 2
            {
                "team": {
                "@id": "A2", 
                "id": "2",
                "name": "Team 2",
                }
            },
            // Team 3
            {
                "team": {
                "@id": "A3", 
                "id": "3",
                "name": "Team 3",
                }
            },
            // Team 4
            {
                "team": {
                "@id": "A4", 
                "id": "4",
                "name": "Team 4",
                }
            },
            // Team 5
            {
                "team": {
                "@id": "A5", 
                "id": "5",
                "name": "Team 5",
                }
            },
            // Team 6
            {
                "team": {
                "@id": "A6", 
                "id": "6",
                "name": "Team 6",
                }
            },
            // Team 7
            {
                "team": {
                "@id": "A7", 
                "id": "7",
                "name": "Team 7",
                }
            },
            // Team 8
            {
                "team": {
                "@id": "A8", 
                "id": "8",
                "name": "Team 8",
                }
            },

            // Match 1
            {
            "@id": "1",
            "id": "1",
            "scheduled": null,
            "name": "Match 1",
            "bracketLabel": null,
            "sides": {
                "home": {
                    "team": {'@ref': 'A1' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                },
                "visitor": {
                    "team": {'@ref': 'A8' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                }
            }},
    
            // Match 2	
    
            {
            "@id": "2",
            "id": "2",
            "scheduled": null,
            "name": "Match 2",
            "bracketLabel": null,
            "sides": {
                "home": {
                    "team": {'@ref': 'A4' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                },
                "visitor": {
                    "team": {'@ref': 'A5' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                }
            }},	
    
            // Match 3
    
            {
            "@id": "3",
            "id": "3",
            "scheduled": null,
            "name": "Match 3",
            "bracketLabel": null,
            "sides": {
                "home": {
                    "team": {'@ref': 'A3' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                },
                "visitor": {
                    "team": {'@ref': 'A6' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                }
            }},	
    
            // Match 4
    
            {
            "@id": "4", 
            "id": "4",
            "scheduled": null,
            "name": "Match 4",
            "bracketLabel": null,
            "sides": {
                "home": {
                    "team": {'@ref': 'A2' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                },
                "visitor": {
                    "team": {'@ref': 'A7' },
                    "score": {"score": null},
                    "seed": {
                        "displayName": null,
                        "rank": 1,
                        "sourcePool": null,
                        "sourceGame": null,
                    }
                }
            }},
    
            // Match 5
            {
            "@id": "5",
            "id": "5",
            "scheduled": null,
            "name": "Match 5",
            "bracketLabel": null,
            "sides": {
                "home": {
                    "team": null,
                    "score": {"score": null},
                    "seed": {
                        "displayName": "Loser of Match 1",
                        "rank": 2,
                        "sourcePool": null,
                        "sourceGame": {'@ref': '1' },
                    }
                },
                "visitor": {
                    "team": null,
                    "score": {"score": null},
                    "seed": {
                        "displayName": "Loser of Match 2",
                        "rank": 2,
                        "sourcePool": null,
                        "sourceGame": {'@ref': '2' },
                    }
                }
            }},
    
            // Match 6
            {
                "@id": "6",
                "id": "6",
                "scheduled": null,
                "name": "Match 6",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 3",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '3' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 4",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '4' },
                        }
                    }
                }},
    
            // Match 7
            {
                "@id": "7",
                "id": "7",
                "scheduled": null,
                "name": "Match 7",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 1",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '1' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 2",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '2' },
                        }
                    }
                }},
    
            // Match 8
            {
                "@id": "8",
                "id": "8",
                "scheduled": null,
                "name": "Match 8",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 3",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '3' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 4",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '4' },
                        }
                    }
                }},
    
            // Match 9
            {
                "@id": "9",
                "id": "9",
                "scheduled": null,
                "name": "Match 9",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 5",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '5' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 8",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '8' },
                        }
                    }
                }},
    
            // Match 10
            {
                "@id": "10",
                "id": "10",
                "scheduled": null,
                "name": "Match 10",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 7",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '7' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 6",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '6' },
                        }
                    }
                }},
    
            // Match 11
            {
                "@id": "11",
                "id": "11",
                "scheduled": null,
                "name": "Match 11",
                "bracketLabel": "Loser is 8th Place",
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 5",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '5' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 6",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '6' },
                        }
                    }
                }},
    
            // Match 12
            {
                "@id": "12",
                "id": "12",
                "scheduled": null,
                "name": "Match 12",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 9",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '9' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 10",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '10' },
                        }
                    }
                }},
    
            // Match 13
            {
                "@id": "13",
                "id": "13",
                "scheduled": null,
                "name": "Match 13",
                "bracketLabel": "Loser is 7th Place",
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 12",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '12' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 11",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '11' },
                        }
                    }
                }},
    
            // Match 14
            {
                "@id": "14",
                "id": "14",
                "scheduled": null,
                "name": "Match 14",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 9",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '9' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 10",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '10' },
                        }
                    }
                }},
    
            // Match 15
            {
                "@id": "15",
                "id": "15",
                "scheduled": null,
                "name": "Match 15",
                "bracketLabel": null,
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 7",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '7' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 8",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '8' },
                        }
                    }
                }},
    
            // Match 16
            {
                "@id": "16",
                "id": "16",
                "scheduled": null,
                "name": "Match 16",
                "bracketLabel": "Loser is 6th Place",
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 13",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '13' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 12",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '12' },
                        }
                    }
                }},
    
            // Match 17
            {
                "@id": "17",
                "id": "17",
                "scheduled": null,
                "name": "Match 17",
                "bracketLabel": "For 4th/5th Place",
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 14",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '14' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 16",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '16' },
                        }
                    }
                }},
    
            // Match 18
            {
                "@id": "18",
                "id": "18",
                "scheduled": null,
                "name": "Match 18",
                "bracketLabel": "Loser is 3rd Place",
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 15",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '15' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 14",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '14' },
                        }
                    }
                }},
    
            // Match 19
            {
                "@id": "19",
                "id": "19",
                "scheduled": null,
                "name": "Match 19",
                "bracketLabel": "Possibly for 1st/2nd Place",
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 15",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '15' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winne of Match 18",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '18' },
                        }
                    }
                }},
    
            // Match 20
            {
                "@id": "20",
                "id": "20",
                "scheduled": null,
                "name": "Match 20",
                "bracketLabel": "For 1st/2nd Place",
                "sides": {
                    "home": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Loser of Match 19",
                            "rank": 2,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '19' },
                        }
                    },
                    "visitor": {
                        "team": null,
                        "score": {"score": null},
                        "seed": {
                            "displayName": "Winner of Match 19",
                            "rank": 1,
                            "sourcePool": null,
                            "sourceGame": {'@ref': '19' },
                        }
                    }
                }}
    ];