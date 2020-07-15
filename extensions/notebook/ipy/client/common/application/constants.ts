/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import * as path from 'path';

// This file is also used by the debug adapter.
// When bundling, the bundle file for the debug adapter ends up elsewhere.
const folderName = path.basename(__dirname);
export const EXTENSION_ROOT_DIR =
	folderName === 'client' ? path.join(__dirname, '..', '..') : path.join(__dirname, '..', '..', '..', '..');

export const HiddenFileFormatString = '_HiddenFile_{0}.py';
export const HiddenFilePrefix = '_HiddenFile_';

export const MillisecondsInADay = 24 * 60 * 60 * 1_000;