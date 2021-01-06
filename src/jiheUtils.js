/* eslint-disable camelcase */
/**
 * 地区的递归结构的数据 查询
 * regionData 结构类似 regionData [
 {   "value": "110000",
        "label": "北京市",
        "children": [
            {
                "value": "110100",
                "label": "市辖区",
                "children": [
                    {
                        "value": "110101",
                        "label": "东城区"
                    },
                    {
                        "value": "110102",
                        "label": "西城区"
                    },
                ]
            }
        ]
    },
 */

export function getProvinceName(regionData, code) {
  const map_provices = new Map();
  regionData.forEach((x) => map_provices.set(x.value, x.label));
  const map_city = new Map();
  const bb = regionData.reduce(
    (arr, current) => arr.concat(current.children || []),
    []
  );
  bb.map((x) => map_city.set(x?.value, x?.label));
  const map_Country = new Map();
  const cc = bb.reduce(
    (arr, current) => arr.concat(current.children || []),
    []
  );
  cc.map((x) => map_Country.set(x?.value, x?.label));

  return map_Country[code];
}
