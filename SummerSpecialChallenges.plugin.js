const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")


const summerassassinationChallenges = [
                {
					"Id": "84185e2a-d7a7-4bf5-bf33-2aa34f99119b",
		            "Name": "UI_CHALLENGES_ESPRESSO_ELEMENTARY_WATSON_NAME",
					"Description": "UI_CHALLENGES_ESPRESSO_ELEMENTARY_WATSON_DESC",
					"ImageName": "images/espresso/challenges/elementary_watson.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
					"LocationId": "LOCATION_PARENT_OPULENT",
					"ParentLocationId": "LOCATION_PARENT_OPULENT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "session",
						"States": {
							"Start": {
								"Kill": {
									"Condition": {
										"$and": [
											{ "$eq": [ "$Value.KillItemCategory","sniperrifle" ] },
											{ "$eq": [ "$Value.RepositoryId","82c5dcb8-59a9-4fb6-916b-fd1544b5bfd9" ] },
											{ "$eq": [ "$Value.Accident", true ] }
										]
									},
									"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["156b398c-826d-4862-8a74-26d569d78242"]
					},
                    "Tags": ["story", "easy", "assassination"]
                }
]

const summertargetsChallenges = [
                {
					"Id": "f32aa844-b82d-4b16-acff-6ce09a552f99",
					"Name": "UI_CHALLENGES_ESPRESSO_ASSASINATION_TARGET_NAME",
					"Description": "UI_CHALLENGES_ESPRESSO_ASSASINATION_TARGET_DESC",
					"ImageName": "images/espresso/challenges/espresso_target.jpg",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
					"Icon": "challenge_category_targets",
					"LocationId": "LOCATION_PARENT_OPULENT",
					"ParentLocationId": "LOCATION_PARENT_OPULENT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "hit",
						"States": {
							"Start": {
								"Kill": {
									"Condition": {
										"$eq": [ "$Value.RepositoryId","82c5dcb8-59a9-4fb6-916b-fd1544b5bfd9" ]
									},
									"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["156b398c-826d-4862-8a74-26d569d78242"]
					},
                    "Tags": ["story", "easy", "targets"]
                }
]

const summerfeatsChallenges = [
                {
					"Id": "feca08d5-f345-495b-85a6-30d25c32ee6c",
					"Name": "UI_CHALLENGES_ESPRESSO_WITNESS_PROTECTION_NAME",
					"Description": "UI_CHALLENGES_ESPRESSO_WITNESS_PROTECTION_DESC",
					"ImageName": "images/espresso/challenges/witness_protection.jpg",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
					"Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_OPULENT",
					"ParentLocationId": "LOCATION_PARENT_OPULENT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "session",
						"States": {
							"Start": {
								"ItemPickedUp": {
									"Condition": {
										"$eq": [ "$Value.RepositoryId","7d64d9df-5d30-4e98-9af0-7562ee145d5c" ]
									},
									"Transition": "CheckDetectiveElimination"
								}
							},
							"CheckDetectiveElimination": {
								"Kill": {
									"Condition": {
										"$and": [
											{
												"$eq": [ "$Value.RepositoryId", "8900bd03-581b-410d-8f2d-c111fd77e1fd" ]
											},
											{
												"$eq": [ "$Value.KillItemRepositoryId", "7d64d9df-5d30-4e98-9af0-7562ee145d5c"]
											}
										]
									},
									"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["156b398c-826d-4862-8a74-26d569d78242"]
					},
                    "Tags": ["story", "easy", "feats"]
                },
                {
					"Id": "8bafa206-d38d-4b7e-bb77-51863c19bf95",
					"Name": "UI_CHALLENGES_ESPRESSO_COMMERCIAL_BREAK_NAME",
					"Description": "UI_CHALLENGES_ESPRESSO_COMMERCIAL_BREAK_DESC",
					"ImageName": "images/espresso/challenges/commercial_break.jpg",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
					"Icon": "challenge_category_feats",
					"LocationId": "LOCATION_PARENT_OPULENT",
					"ParentLocationId": "LOCATION_PARENT_OPULENT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "session",
							"States": {
								"Start": {
									"MeetingHappaned": {
										"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["156b398c-826d-4862-8a74-26d569d78242"]
					},
                    "Tags": ["story", "easy", "feats"]
                }
]

const summerdiscoveryChallenges = [
                {
					"Id": "cfdaa2fc-988b-4f7a-a7c8-e5fecfda6b5e",
					"Name": "UI_CHALLENGES_ESPRESSO_NOT_FOR_BROADCAST_NAME",
					"Description": "UI_CHALLENGES_ESPRESSO_NOT_FOR_BROADCAST_DESC",
					"ImageName": "images/espresso/challenges/not_for_broadcast.jpg",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
                    "Icon": "challenge_category_discovery",
					"LocationId": "LOCATION_PARENT_OPULENT",
					"ParentLocationId": "LOCATION_PARENT_OPULENT",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "session",
							"States": {
								"Start": {
									"47IsBroadcaster": {
										"Transition": "Success"
								}
							}
						}
					},
					"InclusionData": {
						"ContractIds": ["156b398c-826d-4862-8a74-26d569d78242"]
					},
                    "Tags": ["story", "easy", "discovery"]
                }
]

module.exports = function ChallengesPlugin(controller) {
    log(LogLevel.INFO, "[Summer Special] Plugin is loaded and the ready for the launch")

		controller.challengeService.registerGroup(summerfeatsChallenges, "LOCATION_PARENT_OPULENT", "h3")
		controller.challengeService.registerGroup(summertargetsChallenges, "LOCATION_PARENT_OPULENT", "h3")
		controller.challengeService.registerGroup(summerdiscoveryChallenges, "LOCATION_PARENT_OPULENT", "h3")
		controller.challengeService.registerGroup(summerassassinationChallenges, "LOCATION_PARENT_OPULENT", "h3")

		for (const challenge of summerfeatsChallenges) {
			controller.challengeService.registerChallenge(
				challenge,
				"feats",
				challenge.ParentLocationId,
				"h3"
			)
		}
	
		for (const challenge of summertargetsChallenges) {
			controller.challengeService.registerChallenge(
				challenge,
				"targets",
				challenge.ParentLocationId,
				"h3"
			)
		}
	
		for (const challenge of summerassassinationChallenges) {
			controller.challengeService.registerChallenge(
				challenge,
				"assassination",
				challenge.ParentLocationId,
				"h3"
			)
		}
		
		for (const challenge of summerdiscoveryChallenges) {
			controller.challengeService.registerChallenge(
				challenge,
				"discovery",
				challenge.ParentLocationId,
				"h3"
			)
		}
}