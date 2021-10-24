const menu = [
	{
		id: 1,
		slug: "",
		title: "Home",
	},
	{
		id: 2,
		slug: "about",
		title: "About",
	},
	{
		id: 3,
		slug: "#",
		title: "Products",
		menu: [
			{
				id: 31,
				slug: "services/jasa-survey",
				title: "Jasa Survey",
				menu: [
					{
						id: 311,
						slug: "services/survey-topografi",
						title: "Survey Topografi",
					},
					{
						id: 312,
						slug: "services/survey-kadastral",
						title: "Survey Kadastral",
					},
					{
						id: 313,
						slug: "services/survey-bathimetri",
						title: "Survey Bathimetri",
					},
					{
						id: 314,
						slug: "services/survey-uav-drone",
						title: "Survey UAV Drone",
					},
				],
			},
			{
				id: 32,
				slug: "services/jasa-training",
				title: "Jasa Training",
			},
			{
				id: 33,
				slug: "catalogue",
				title: "Katalog Penjualan",
			},
			// {
			// 	slug: "#",
			// 	title: "More",
			// 	menu: [
			// 		{
			// 			slug: "/thirdlevel1",
			// 			title: "3rd level menu",
			// 		},
			// 		{
			// 			slug: "/thirdlevel2",
			// 			title: "3rd level two",
			// 		},
			// 	],
			// },
		],
	},
	{
		id: 4,
		slug: "contacts",
		title: "Contact",
	},
];

export default menu;
