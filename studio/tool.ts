import { FindCachedModelById } from '@scripts/app/litemall/serivce/data';
import { FS, http, Process } from '@yaoapps/client';

/**
 * 发起YAO-AMIS-ADMIN远程调用的函数
 *
 * @param {string} remoteMethod - 要调用的远程服务的处理器
 * @param {Object} args - 要发送到远程服务的数据
 */
function remoteCall(remoteMethod, ...args) {
  const amisAdminHost = Process('yao.env.get', 'YAO_AMIS_ADMIN_HOST');
  if (!amisAdminHost) {
    throw new Error('YAO_AMIS_ADMIN_HOST Not set');
  }

  const amisAdminKey = Process('yao.env.get', 'YAO_AMIS_ADMIN_ACCESS_KEY');
  if (!amisAdminKey) {
    throw new Error('YAO_AMIS_ADMIN_ACCESS_KEY Not set');
  }
  const response = http.Post(
    `${amisAdminHost}/api/proxy/call`,
    {
      type: 'Process',
      method: remoteMethod,
      args: [...args]
    },
    null,
    null,
    { Authorization: `Bearer ${amisAdminKey}` }
  );
  console.log(response);
  if (response.status != 200 || response.data.code != 200) {
    throw new Error(response.message);
  }
  return response.data.data;
}

export function toCamelCaseNameSpace(str) {
  if (!str || str.length < 1) {
    return str;
  }
  const newStr = str.replace(/[._]([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
}
/**
 * 生成模型服务代码
 *
 * yao studio run tool.generateModelCode admin.user
 * @param modelId 模型ID
 */
export function generateModelCode(modelId) {
  const modelDsl = FindCachedModelById(modelId);

  const code = remoteCall(
    'scripts.system.tscode.getModelServiceTemplate',
    modelId,
    modelDsl
  );

  const fname = toCamelCaseNameSpace(modelId);
  const fs = new FS('script');

  fs.WriteFile(`/models/${fname}Service.ts`, code);
}

/**
 * 生成模型类型代码
 *
 * yao studio run tool.generateModelTypeCode admin.user
 * @param modelId
 */
export function generateModelTypeCode(modelId) {
  const modelDsl = FindCachedModelById(modelId);

  const code = remoteCall('scripts.system.tstype.createTSTypes', modelDsl);

  const fname = toCamelCaseNameSpace(modelId);
  const fs = new FS('script');

  fs.WriteFile(`/models/I${fname}.ts`, code);
}

// const code = generateModelCode('admin.user');
// console.log(code);
