/**
 * Created by Jzy on 2019/9/3 09
 */
const arrayU = require('../../src/ArrayUtils');

test('安装字段i是否相等,合并对象数组', () => {
  expect(
    arrayU.mergeArrayValu(
      [{ i: 2, added: 'haha' }],
      [
        { i: 2, origin: 'aa' },
        { i: 1, origin: 'aa' },
      ]
    )
  ).toEqual([
    { i: 2, origin: 'aa', added: 'haha' },
    { i: 1, origin: 'aa' },
  ]);
});

test('按照字段分组数组', () => {
  expect(
    arrayU.groupByField('time', [
      {
        Id: '1',
        time: '2019-09-02',
      },
      {
        Id: '2',
        time: '2019-09-02',
      },
      {
        Id: '3',
        time: '2019-09-04',
      },
    ])
  ).toEqual([
    {
      id: '2019-09-02',
      children: [
        {
          Id: '1',
          time: '2019-09-02',
        },
        {
          Id: '2',
          time: '2019-09-02',
        },
      ],
    },
    {
      id: '2019-09-04',
      children: [
        {
          Id: '3',
          time: '2019-09-04',
        },
      ],
    },
  ]);
});
