/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import {
  LOAD_BIZLOGICS,
  LOAD_BIZLOGICS_SUCCESS,
  LOAD_BIZLOGICS_FAILURE,
  ADD_BIZLOGIC,
  ADD_BIZLOGIC_SUCCESS,
  ADD_BIZLOGIC_FAILURE,
  DELETE_BIZLOGIC,
  DELETE_BIZLOGIC_SUCCESS,
  DELETE_BIZLOGIC_FAILURE,
  EDIT_BIZLOGIC,
  EDIT_BIZLOGIC_SUCCESS,
  EDIT_BIZLOGIC_FAILURE,
  CLEAR_BIZDATAS,
  LOAD_CASCADESOURCE,
  LOAD_CASCADESOURCE_SUCCESS,
  LOAD_CASCADESOURCE_FAILURE,
  LOAD_BIZDATA_SCHEMA,
  LOAD_BIZDATA_SCHEMA_SUCCESS,
  LOAD_BIZDATA_SCHEMA_FAILURE,
  LOAD_SCHEMA,
  LOAD_SCHEMA_SUCCESS,
  LOAD_SCHEMA_FAILURE,
  EXECUTE_SQL,
  EXECUTE_SQL_SUCCESS,
  EXECUTE_SQL_FAILURE,
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  LOAD_DISTINCT_VALUE,
  LOAD_DISTINCT_VALUE_SUCCESS,
  LOAD_DISTINCT_VALUE_FAILURE,
  LOAD_DATA_FROM_ITEM,
  LOAD_DATA_FROM_ITEM_SUCCESS,
  LOAD_DATA_FROM_ITEM_FAILURE,
  LOAD_VIEW_TEAM,
  LOAD_VIEW_TEAM_SUCCESS,
  LOAD_VIEW_TEAM_FAILURE,
  LOAD_TEAM_AUTH,
  LOAD_TEAM_AUTH_SUCCESS,
  LOAD_TEAM_AUTH_FAILURE,
  LOAD_TEAM_CONFIG,
  LOAD_TEAM_CONFIG_SUCCESS,
  LOAD_TEAM_CONFIG_FAILURE,
  RESET_VIEW_STATE
  // LOAD_TREE_SELECT,
  // LOAD_TREE_SELECT_SUCCESS,
  // LOAD_TREE_SELECT_FAILURE
} from './constants'

import { IDataRequestParams } from '../Dashboard/Grid'
import { RenderType } from '../Widget/components/Widget'

export function loadBizlogics (projectId, resolve) {
  return {
    type: LOAD_BIZLOGICS,
    payload: {
      projectId,
      resolve
    }
  }
}

export function bizlogicsLoaded (bizlogics) {
  return {
    type: LOAD_BIZLOGICS_SUCCESS,
    payload: {
      bizlogics
    }
  }
}

export function loadBizlogicsFail () {
  return {
    type: LOAD_BIZLOGICS_FAILURE
  }
}

export function addBizlogic (type, bizlogic, resolve) {
  return {
    type: ADD_BIZLOGIC,
    payload: {
      type,
      bizlogic,
      resolve
    }
  }
}

export function bizlogicAdded (result) {
  return {
    type: ADD_BIZLOGIC_SUCCESS,
    payload: {
      result
    }
  }
}

export function addBizlogicFail () {
  return {
    type: ADD_BIZLOGIC_FAILURE
  }
}

export function deleteBizlogic (id) {
  return {
    type: DELETE_BIZLOGIC,
    payload: {
      id
    }
  }
}

export function bizlogicDeleted (id) {
  return {
    type: DELETE_BIZLOGIC_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteBizlogicFail () {
  return {
    type: DELETE_BIZLOGIC_FAILURE
  }
}

export function editBizlogic (type, bizlogic, resolve) {
  return {
    type: EDIT_BIZLOGIC,
    payload: {
      type,
      bizlogic,
      resolve
    }
  }
}

export function bizlogicEdited (result) {
  return {
    type: EDIT_BIZLOGIC_SUCCESS,
    payload: {
      result
    }
  }
}

export function editBizlogicFail () {
  return {
    type: EDIT_BIZLOGIC_FAILURE
  }
}

export function clearBizdatas () {
  return {
    type: CLEAR_BIZDATAS
  }
}

export function loadCascadeSource (controlId, viewId, columns, parents) {
  return {
    type: LOAD_CASCADESOURCE,
    payload: {
      controlId,
      viewId,
      columns,
      parents
    }
  }
}

export function cascadeSourceLoaded (controlId, columns, values) {
  return {
    type: LOAD_CASCADESOURCE_SUCCESS,
    payload: {
      controlId,
      columns,
      values
    }
  }
}

export function loadCascadeSourceFail (error) {
  return {
    type: LOAD_CASCADESOURCE_FAILURE,
    payload: {
      error
    }
  }
}

export function loadBizdataSchema (id, resolve) {
  return {
    type: LOAD_BIZDATA_SCHEMA,
    payload: {
      id,
      resolve
    }
  }
}

export function bizdataSchemaLoaded (scheme) {
  return {
    type: LOAD_BIZDATA_SCHEMA_SUCCESS,
    payload: {
      scheme
    }
  }
}

export function loadBizdataSchemaFail (error) {
  return {
    type: LOAD_BIZDATA_SCHEMA_FAILURE,
    payload: {
      error
    }
  }
}

export function loadSchema (sourceId, resolve) {
  return {
    type: LOAD_SCHEMA,
    payload: {
      sourceId,
      resolve
    }
  }
}

export function schemaLoaded (schema) {
  return {
    type: LOAD_SCHEMA_SUCCESS,
    payload: {
      schema
    }
  }
}

export function loadSchemaFail () {
  return {
    type: LOAD_SCHEMA_FAILURE
  }
}

export function executeSql (requestObj, resolve) {
  return {
    type: EXECUTE_SQL,
    payload: {
      requestObj,
      resolve
    }
  }
}

export function sqlExecuted (result) {
  return {
    type: EXECUTE_SQL_SUCCESS,
    payload: {
      result
    }
  }
}

export function executeSqlFail (error) {
  return {
    type: EXECUTE_SQL_FAILURE,
    payload: {
      error
    }
  }
}

export function loadData (id: number, requestParams: IDataRequestParams, resolve: () => void) {
  return {
    type: LOAD_DATA,
    payload: {
      id,
      requestParams,
      resolve
    }
  }
}

export function dataLoaded () {
  return {
    type: LOAD_DATA_SUCCESS
  }
}

export function loadDataFail (error) {
  return {
    type: LOAD_DATA_FAILURE,
    payload: {
      error
    }
  }
}

export function loadDistinctValue (viewId, fieldName, filters?, resolve?) {
  return {
    type: LOAD_DISTINCT_VALUE,
    payload: {
      viewId,
      fieldName,
      filters,
      resolve
    }
  }
}
export function distinctValueLoaded (data, fieldName) {
  return {
    type: LOAD_DISTINCT_VALUE_SUCCESS,
    payload: {
      data,
      fieldName
    }
  }
}
export function loadDistinctValueFail (error) {
  return {
    type: LOAD_DISTINCT_VALUE_FAILURE,
    payload: {
      error
    }
  }
}

export function loadDataFromItem (
  renderType: RenderType,
  itemId: number,
  viewId: number,
  requestParams: IDataRequestParams,
  vizType: 'dashboard' | 'display'
) {
  return {
    type: LOAD_DATA_FROM_ITEM,
    payload: {
      renderType,
      itemId,
      viewId,
      requestParams,
      vizType
    }
  }
}

export function dataFromItemLoaded (renderType, itemId, requestParams, result, vizType: 'dashboard' | 'display') {
  return {
    type: LOAD_DATA_FROM_ITEM_SUCCESS,
    payload: {
      renderType,
      itemId,
      requestParams,
      result,
      vizType
    }
  }
}

export function loadDataFromItemFail (itemId, vizType: 'dashboard' | 'display') {
  return {
    type: LOAD_DATA_FROM_ITEM_FAILURE,
    payload: {
      itemId,
      vizType
    }
  }
}

export function loadViewTeam (projectId, resolve) {
  return {
    type: LOAD_VIEW_TEAM,
    payload: {
      projectId,
      resolve
    }
  }
}

export function viewTeamLoaded (result) {
  return {
    type: LOAD_VIEW_TEAM_SUCCESS,
    payload: {
      result
    }
  }
}

export function loadViewTeamFail (error) {
  return {
    type: LOAD_VIEW_TEAM_FAILURE,
    payload: {
      error
    }
  }
}

export function getTeamAuth (projectId, resolve) {
  return {
    type: LOAD_TEAM_AUTH,
    payload: {
      projectId,
      resolve
    }
  }
}

export function teamAuthLoaded (result) {
  return {
    type: LOAD_TEAM_AUTH_SUCCESS,
    payload: {
      result
    }
  }
}

export function loadTeamAuthFail (error) {
  return {
    type: LOAD_TEAM_AUTH_FAILURE,
    payload: {
      error
    }
  }
}

export function loadTeamConfig (viewId, resolve) {
  return {
    type: LOAD_TEAM_CONFIG,
    payload: {
      viewId,
      resolve
    }
  }
}

export function teamConfigLoaded (result) {
  return {
    type: LOAD_TEAM_CONFIG_SUCCESS,
    payload: {
      result
    }
  }
}

export function loadTeamConfigFail (error) {
  return {
    type: LOAD_TEAM_CONFIG_FAILURE,
    payload: {
      error
    }
  }
}

export function resetViewState () {
  return {
    type: RESET_VIEW_STATE
  }
}

// export function loadTreeSelectData (projectId, sourceOrg, resolve) {
//   return {
//     type: LOAD_TREE_SELECT,
//     payload: {
//       projectId,
//       sourceOrg,
//       resolve
//     }
//   }
// }

// export function treeSelectDataLoaded (result) {
//   return {
//     type: LOAD_TREE_SELECT_SUCCESS,
//     payload: {
//       result
//     }
//   }
// }

// export function loadTreeSelectFail (error) {
//   return {
//     type: LOAD_TREE_SELECT_FAILURE,
//     payload: {
//       error
//     }
//   }
// }
