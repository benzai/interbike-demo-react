import * as objects from "./objects"
import * as singletons from "./singletons"
import * as documents from "./documents"

export const schemaTypes = [...Object.values(objects), ...Object.values(singletons), ...Object.values(documents)]
