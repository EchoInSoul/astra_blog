// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	我的设备: [
		{
			name: "红米K70",
			image: "images/device/redmik70.avif", // 请根据实际路径修改图片
			specs: "12G + 256G",
			description: "性能强悍",
			link: "https://www.mi.com/redmi-k70", // 请根据实际链接修改
		},
		{
			name: "小米平板 6 Pro",
			image: "images/device/xiaomipad6pro.avif", // 请根据实际路径修改图片
			specs: "8GB + 256GB ",
			description: "看电影很爽",
			link: "https://www.mi.com/xiaomi-pad-6-pro", // 请根据实际链接修改
		},
		{
			name: "台式电脑",
			image: "images/device/pc.avif", // 请根据实际路径修改图片
			specs: "32GB + 2TB  ",
			description: "12600kf+1070ti",
			link: "https://search.jd.com/Search?keyword=12600kf", // 请根据实际链接修改
		},
	],
};

