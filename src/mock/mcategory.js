export default {
    data: [{
        value: '1',
        label: '服装',
        children: [
            {
                value: '2',
                label: '女装',
                children:[
                    {
                        value: '11',
                        label: '上衣'
                    },
                    {
                        value: '12',
                        label: '裙子'
                    },
                ],
            },
            {
                value: '3',
                label: '男装'
            },
        ]
    }, {
        value: '30',
        label: '数码',
        children: [
            {
                value: '31',
                label: '手机',
                children: [
                    {
                        value: '311',
                        label: '苹果手机',
                    }
                ]
            },
            {
                value: '32',
                label: '游戏机',
                children: [
                    {
                        value: '34',
                        label: '掌机',
                    },
                    {
                        value: '35',
                        label: '电视游戏机',
                    }
                ]
            }
        ],
    }]
}