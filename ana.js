// 获取用户 IP 和属地的函数
function getIpAndLocation() {
  return axios.get('https://ip.useragentinfo.com/json')
 .then(response => {
      if (response.data.code === 200) {
        return {
          ip: response.data.ip,
          country: response.data.country,
          province: response.data.province,
          city: response.data.city,
          district: response.data.area,
          operator: response.data.isp,
          postalCode: null,
          areaCode: null
        };
      } else {
        throw new Error('-1');
      }
    })
 .catch(error => {
      console.error('-2：', error);
      return {
        ip: null,
        country: null,
        province: null,
        city: null,
        district: null,
        operator: null,
        postalCode: null,
        areaCode: null
      };
    });
}

// 定义一个函数用于发送埋点数据
function sendTrackingData(page, action, referrer) {
  const entry_timestamp = Math.floor(new Date().getTime() / 1000);  // 更改为 entry_timestamp

  // 获取用户 IP 和属地信息
  getIpAndLocation()
 .then(({ ip, country, province, city, district, operator, postalCode, areaCode }) => {
      axios({
        method: 'POST',
        url: `https://api.zskj.us.kg/api/t_a0wnk8ru31i:create`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoicl9yYWYzMXZha24zNSIsImlhdCI6MTcyMzA0MTE5OSwiZXhwIjozMzI4MDY0MTE5OX0.bv4uU0nys-0M2IvQHSxq6hwfgPr5nwF109Hcg_kn4Bg'
        },
        data: {
          page,
          action,
          entry_timestamp,  // 使用正确的字段名
          ip,
          country,
          province,
          city,
          district,
          operator,
          postalCode,
          areaCode,
          referrer
        }
      })
  .then(response => {
        console.log('1');
      })
  .catch(error => {
        console.error('1-：', error);
      });
    })
 .catch(error => {
      console.error('2-：', error);
    });
}
