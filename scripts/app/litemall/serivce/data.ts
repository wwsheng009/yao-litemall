import { ModelId } from '@yao/types';
import { Process } from '@yaoapps/client';

export function saveDataById(modelId: ModelId, id: string, payload: object) {
  return Process(`models.${modelId}.update`, id, payload);
}
