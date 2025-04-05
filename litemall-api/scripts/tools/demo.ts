import { Process, Query } from '@yaoapps/client';

//this is a script to copy the data from different database.

//yao run scripts.tools.demo.copyTableData litemall_coupon app.litemall.coupon
function copyTableData(source: string, targetModel: string) {
  const query = new Query('mysql');
  const data = query.Get({
    sql: {
      stmt: `select * from ${source}`
    }
  });

  const query2 = new Query();
  query2.Run({
    sql: {
      stmt: `truncate ${targetModel.replaceAll('.', '_')}`
    }
  });

  const rows = Process(`models.${targetModel}.eachsave`, data);

  console.log(`table ${source} copied success, total: ${rows.length}`);
}

//yao run scripts.tools.demo.copyAllTableData
export function copyAllTableData() {
  const query = new Query('mysql');

  const data = query.Get({
    sql: {
      stmt: `SHOW TABLES;`
    }
  });
  const tableList = data.reduce((prev, curr) => {
    prev.push(curr[Object.keys(curr)[0]]);
    return prev;
  }, []);
  console.log(tableList);
  tableList.forEach((tab) => {
    const modelName = 'app.' + tab.replaceAll('_', '.');
    copyTableData(tab, modelName);
  });
}
