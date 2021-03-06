/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as nls from 'vscode-nls';

const localize = nls.loadMessageBundle();

// Placeholder values
export const dataSourcesFileName = 'datasources.json';
export const sqlprojExtension = '.sqlproj';
export const sqlFileExtension = '.sql';
export const schemaCompareExtensionId = 'microsoft.schema-compare';
export const sqlDatabaseProjectExtensionId = 'microsoft.sql-database-projects';
export const mssqlExtensionId = 'microsoft.mssql';
export const dacpac = 'dacpac';
export const master = 'master';
export const masterDacpac = 'master.dacpac';
export const msdb = 'msdb';
export const msdbDacpac = 'msdb.dacpac';
export const MicrosoftDatatoolsSchemaSqlSql = 'Microsoft.Data.Tools.Schema.Sql.Sql';
export const databaseSchemaProvider = 'DatabaseSchemaProvider';

// Project Provider
export const projectTypeDisplayName = localize('projectTypeDisplayName', 'Database Project');

// commands
export const revealFileInOsCommand = 'revealFileInOS';
export const schemaCompareStartCommand = 'schemaCompare.start';
export const sqlDatabaseProjectsViewFocusCommand = 'sqlDatabaseProjectsView.focus';
export const vscodeOpenCommand = 'vscode.open';

// UI Strings

export const projectNodeName = localize('projectNodeName', "Database Project");
export const dataSourcesNodeName = localize('dataSourcesNodeName', "Data Sources");
export const databaseReferencesNodeName = localize('databaseReferencesNodeName', "Database References");
export const sqlConnectionStringFriendly = localize('sqlConnectionStringFriendly', "SQL connection string");
export const newDatabaseProjectName = localize('newDatabaseProjectName', "New database project name:");
export const sqlDatabaseProject = localize('sqlDatabaseProject', "SQL database project");
export const yesString = localize('yesString', "Yes");
export const noString = localize('noString', "No");
export const okString = localize('okString', "Ok");
export const extractTargetInput = localize('extractTargetInput', "Select folder structure for SQL files");
export const extractDatabaseSelection = localize('extractDatabaseSelection', "Select database to create project from");
export const selectString = localize('selectString', "Select");
export const addDatabaseReferenceInput = localize('addDatabaseReferenceInput', "Add database reference for:");
export const systemDatabaseReferenceInput = localize('systemDatabaseReferenceInput', "System Database:");
export const databaseReferenceLocation = localize('databaseReferenceLocation', "Database location");
export const databaseReferenceSameDatabase = localize('databaseReferenceSameDatabase', "Same database");
export const databaseReferenceDifferentDabaseSameServer = localize('databaseReferenceDifferentDabaseSameServer', "Different database, same server");
export const databaseReferenceDatabaseName = localize('databaseReferenceDatabaseName', "Database name");
export const dacpacFiles = localize('dacpacFiles', "dacpac Files");
export const publishSettingsFiles = localize('publishSettingsFiles', "Publish Settings File");
export const systemDatabase = localize('systemDatabase', "System Database");
export const file = localize('file', "File");
export const flat = localize('flat', "Flat");
export const objectType = localize('objectType', "Object Type");
export const schema = localize('schema', "Schema");
export const schemaObjectType = localize('schemaObjectType', "Schema/Object Type");
export const defaultProjectNameStarter = localize('defaultProjectNameStarter', "DatabaseProject");
export const newDefaultProjectSaveLocation = localize('newDefaultProjectSaveLocation', "Would you like to update the default location to save new database projects?");
export const invalidDefaultProjectSaveLocation = localize('invalidDefaultProjectSaveLocation', "Default location to save new database projects is invalid. Would you like to update it?");
export const openWorkspaceSettings = localize('openWorkspaceSettings', "Yes, open Settings");
export const doNotPromptAgain = localize('doNotPromptAgain', "Don't ask again");
export const reloadProject = localize('reloadProject', "Would you like to reload your database project?");
export function newObjectNamePrompt(objectType: string) { return localize('newObjectNamePrompt', 'New {0} name:', objectType); }
export function deleteConfirmation(toDelete: string) { return localize('deleteConfirmation', "Are you sure you want to delete {0}?", toDelete); }
export function deleteConfirmationContents(toDelete: string) { return localize('deleteConfirmationContents', "Are you sure you want to delete {0} and all of its contents?", toDelete); }
export function deleteReferenceConfirmation(toDelete: string) { return localize('deleteReferenceConfirmation', "Are you sure you want to delete the reference to {0}?", toDelete); }

// Publish dialog strings

export const publishDialogName = localize('publishDialogName', "Publish project");
export const publishDialogOkButtonText = localize('publishDialogOkButtonText', "Publish");
export const cancelButtonText = localize('cancelButtonText', "Cancel");
export const generateScriptButtonText = localize('generateScriptButtonText', "Generate Script");
export const databaseNameLabel = localize('databaseNameLabel', "Database");
export const targetConnectionLabel = localize('targetConnectionLabel', "Connection");
export const dataSourceRadioButtonLabel = localize('dataSourceRadioButtonLabel', "Data sources");
export const connectionRadioButtonLabel = localize('connectionRadioButtonLabel', "Connections");
export const selectConnectionRadioButtonsTitle = localize('selectconnectionRadioButtonsTitle', "Specify connection from:");
export const dataSourceDropdownTitle = localize('dataSourceDropdownTitle', "Data source");
export const noDataSourcesText = localize('noDataSourcesText', "No data sources in this project");
export const loadProfilePlaceholderText = localize('loadProfilePlaceholderText', "Load profile...");
export const profileReadError = localize('profileReadError', "Could not load the profile file.");
export const sqlCmdTableLabel = localize('sqlCmdTableLabel', "SQLCMD Variables");
export const sqlCmdVariableColumn = localize('sqlCmdVariableColumn', "Name");
export const sqlCmdValueColumn = localize('sqlCmdValueColumn', "Value");
export const loadSqlCmdVarsButtonTitle = localize('reloadValuesFromProjectButtonTitle', "Reload values from project");
export const profile = localize('profile', "Profile");
export const selectConnection = localize('selectConnection', "Select connection");
export const server = localize('server', "Server");
export const defaultUser = localize('default', "default");

// Add Database Reference dialog strings

export const addDatabaseReferenceDialogName = localize('addDatabaseReferencedialogName', "Add database reference");
export const addDatabaseReferenceOkButtonText = localize('addDatabaseReferenceOkButtonText', "Add reference");
export const referenceRadioButtonsGroupTitle = localize('referenceRadioButtonsGroupTitle', "Type");
export const projectRadioButtonTitle = localize('projectRadioButtonTitle', "Database project in folder");
export const systemDatabaseRadioButtonTitle = localize('systemDatabaseRadioButtonTitle', "System database");
export const dacpacText = localize('dacpacText', "Data-tier application (.dacpac)");
export const dacpacPlaceholder = localize('dacpacPlaceholder', "Select .dacpac");
export const loadDacpacButton = localize('loadDacpacButton', "Select .dacpac");
export const locationDropdown = localize('locationDropdown', "Location");
export const sameDatabase = localize('sameDatabase', "Same database");
export const differentDbSameServer = localize('differentDbSameServer', "Different database, same server");
export const differentDbDifferentServer = localize('differentDbDifferentServer', "Different database, different server");
export const systemDbLocationDropdownValues = [differentDbSameServer];
export const locationDropdownValues = [differentDbSameServer, differentDbDifferentServer];
export const databaseName = localize('databaseName', "Database name");
export const databaseVariable = localize('databaseVariable', "Database variable");
export const serverName = localize('serverName', "Server name");
export const serverVariable = localize('serverVariable', "Server variable");
export const suppressMissingDependenciesErrors = localize('suppressMissingDependenciesErrors', "Suppress errors caused by unresolved references in the referenced project");
export const exampleUsage = localize('exampleUsage', "Example Usage");
export const enterSystemDbName = localize('enterSystemDbName', "Enter a database name for this system database");
export const databaseNameRequiredVariableOptional = localize('databaseNameRequiredVariableOptional', "A database name is required. The database variable is optional.");
export const databaseNameServerNameVariableRequired = localize('databaseNameServerNameVariableRequired', "A database name, server name, and server variable are required. The database variable is optional");
export const otherServer = 'OtherServer';
export const otherSeverVariable = 'OtherServer';
export const databaseProject = localize('databaseProject', "Database project");

// Error messages

export const multipleSqlProjFiles = localize('multipleSqlProjFilesSelected', "Multiple .sqlproj files selected; please select only one.");
export const noSqlProjFiles = localize('noSqlProjFilesSelected', "No .sqlproj file selected; please select one.");
export const noDataSourcesFile = localize('noDataSourcesFile', "No {0} found", dataSourcesFileName);
export const missingVersion = localize('missingVersion', "Missing 'version' entry in {0}", dataSourcesFileName);
export const unrecognizedDataSourcesVersion = localize('unrecognizedDataSourcesVersion', "Unrecognized version: ");
export const unknownDataSourceType = localize('unknownDataSourceType', "Unknown data source type: ");
export const invalidSqlConnectionString = localize('invalidSqlConnectionString', "Invalid SQL connection string");
export const projectNameRequired = localize('projectNameRequired', "Name is required to create a new database project.");
export const projectLocationRequired = localize('projectLocationRequired', "Location is required to create a new database project.");
export const projectLocationNotEmpty = localize('projectLocationNotEmpty', "Current project location is not empty. Select an empty folder for precise extraction.");
export const extractTargetRequired = localize('extractTargetRequired', "Target information for extract is required to create database project.");
export const schemaCompareNotInstalled = localize('schemaCompareNotInstalled', "Schema compare extension installation is required to run schema compare");
export const buildDacpacNotFound = localize('buildDacpacNotFound', "Dacpac created from build not found");
export const updateProjectForRoundTrip = localize('updateProjectForRoundTrip', "To build this project, Azure Data Studio needs to update targets, references, and system database references. If the project is created in SSDT, it will continue to work in both tools. Do you want Azure Data Studio to update the project?");
export const updateProjectDatabaseReferencesForRoundTrip = localize('updateProjectDatabaseReferencesForRoundTrip', "To build this project, Azure Data Studio needs to update system database references. If the project is created in SSDT, it will continue to work in both tools. Do you want Azure Data Studio to update the project?");
export const databaseReferenceTypeRequired = localize('databaseReferenceTypeRequired', "Database reference type is required for adding a reference to a database");
export const systemDatabaseReferenceRequired = localize('systemDatabaseReferenceRequired', "System database selection is required for adding a reference to a system database");
export const dacpacFileLocationRequired = localize('dacpacFileLocationRequired', "Dacpac file location is required for adding a reference to a database");
export const databaseLocationRequired = localize('databaseLocation', "Database location is required for adding a reference to a database");
export const databaseNameRequired = localize('databaseNameRequired', "Database name is required for adding a reference to a different database");
export const invalidDataSchemaProvider = localize('invalidDataSchemaProvider', "Invalid DSP in .sqlproj file");
export const invalidDatabaseReference = localize('invalidDatabaseReference', "Invalid database reference in .sqlproj file");
export const databaseSelectionRequired = localize('databaseSelectionRequired', "Database selection is required to create a project from a database");
export const databaseReferenceAlreadyExists = localize('databaseReferenceAlreadyExists', "A reference to this database already exists in this project");
export const ousiderFolderPath = localize('outsideFolderPath', "Items with absolute path outside project folder are not supported. Please make sure the paths in the project file are relative to project folder.");
export const parentTreeItemUnknown = localize('parentTreeItemUnknown', "Cannot access parent of provided tree item");
export const prePostDeployCount = localize('prePostDeployCount', "To successfully build, update the project to have one pre-deployment script and/or one post-deployment script");
export const invalidProjectReload = localize('invalidProjectReload', "Cannot access provided database project. Only valid, open database projects can be reloaded.");
export function projectAlreadyOpened(path: string) { return localize('projectAlreadyOpened', "Project '{0}' is already opened.", path); }
export function projectAlreadyExists(name: string, path: string) { return localize('projectAlreadyExists', "A project named {0} already exists in {1}.", name, path); }
export function noFileExist(fileName: string) { return localize('noFileExist', "File {0} doesn't exist", fileName); }
export function cannotResolvePath(path: string) { return localize('cannotResolvePath', "Cannot resolve path {0}", path); }
export function fileAlreadyExists(filename: string) { return localize('fileAlreadyExists', "A file with the name '{0}' already exists on disk at this location. Please choose another name.", filename); }
export function folderAlreadyExists(filename: string) { return localize('folderAlreadyExists', "A folder with the name '{0}' already exists on disk at this location. Please choose another name.", filename); }
export function invalidInput(input: string) { return localize('invalidInput', "Invalid input: {0}", input); }
export function unableToCreatePublishConnection(input: string) { return localize('unableToCreatePublishConnection', "Unable to construct connection: {0}", input); }
export function circularProjectReference(project1: string, project2: string) { return localize('cicularProjectReference', "Circular reference from project {0} to project {1}", project1, project2); }
export function mssqlNotFound(mssqlConfigDir: string) { return localize('mssqlNotFound', "Could not get mssql extension's install location at {0}", mssqlConfigDir); }
export function projBuildFailed(errorMessage: string) { return localize('projBuildFailed', "Build failed. Check output pane for more details. {0}", errorMessage); }
export function unexpectedProjectContext(uri: string) { return localize('unexpectedProjectContext', "Unable to establish project context.  Command invoked from unexpected location: {0}", uri); }
export function unableToPerformAction(action: string, uri: string) { return localize('unableToPerformAction', "Unable to locate '{0}' target: '{1}'", action, uri); }
export function unableToFindObject(path: string, objType: string) { return localize('unableToFindFile', "Unable to find {1} with path '{0}'", path, objType); }
export function deployScriptExists(scriptType: string) { return localize('deployScriptExists', "A {0} script already exists. The new script will not be included in build.", scriptType); }
export function notValidVariableName(name: string) { return localize('notValidVariableName', "The variable name '{0}' is not valid.", name); }
export function cantAddCircularProjectReference(project: string) { return localize('cantAddCircularProjectReference', "A reference to project '{0} cannot be added. Adding this project as a reference would cause a circular dependency", project); }
export function unableToFindSqlCmdVariable(variableName: string) { return localize('unableToFindSqlCmdVariable', "Unable to find SQLCMD variable '{0}'", variableName); }

// Action types
export const deleteAction = localize('deleteAction', 'Delete');
export const excludeAction = localize('excludeAction', 'Exclude');

// Project tree object types
export const fileObject = localize('fileObject', "file");
export const folderObject = localize('folderObject', "folder");

// Project script types

export const folderFriendlyName = localize('folderFriendlyName', "Folder");
export const scriptFriendlyName = localize('scriptFriendlyName', "Script");
export const tableFriendlyName = localize('tableFriendlyName', "Table");
export const viewFriendlyName = localize('viewFriendlyName', "View");
export const storedProcedureFriendlyName = localize('storedProcedureFriendlyName', "Stored Procedure");
export const preDeployScriptFriendlyName = localize('preDeployScriptFriendlyName', "Script.PreDeployment");
export const postDeployScriptFriendlyName = localize('postDeployScriptFriendlyName', "Script.PostDeployment");

// SqlProj file XML names
export const ItemGroup = 'ItemGroup';
export const Build = 'Build';
export const Folder = 'Folder';
export const Include = 'Include';
export const Import = 'Import';
export const Project = 'Project';
export const Condition = 'Condition';
export const Target = 'Target';
export const Name = 'Name';
export const AfterCleanTarget = 'AfterClean';
export const Delete = 'Delete';
export const Files = 'Files';
export const PackageReference = 'PackageReference';
export const Version = 'Version';
export const PrivateAssets = 'PrivateAssets';
export const SqlCmdVariable = 'SqlCmdVariable';
export const DefaultValue = 'DefaultValue';
export const Value = 'Value';
export const ArtifactReference = 'ArtifactReference';
export const SuppressMissingDependenciesErrors = 'SuppressMissingDependenciesErrors';
export const DatabaseVariableLiteralValue = 'DatabaseVariableLiteralValue';
export const DatabaseSqlCmdVariable = 'DatabaseSqlCmdVariable';
export const ServerSqlCmdVariable = 'ServerSqlCmdVariable';
export const DSP = 'DSP';
export const Properties = 'Properties';
export const RelativeOuterPath = '..';
export const ProjectReference = 'ProjectReference';
export const TargetConnectionString = 'TargetConnectionString';
export const PreDeploy = 'PreDeploy';
export const PostDeploy = 'PostDeploy';
export const None = 'None';
export const True = 'True';
export const False = 'False';
export const Private = 'Private';
export const ProjectGuid = 'ProjectGuid';

// SqlProj File targets
export const NetCoreTargets = '$(NETCoreTargetsPath)\\Microsoft.Data.Tools.Schema.SqlTasks.targets';
export const SqlDbTargets = '$(SQLDBExtensionsRefPath)\\Microsoft.Data.Tools.Schema.SqlTasks.targets';
export const MsBuildtargets = '$(MSBuildExtensionsPath)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\SSDT\\Microsoft.Data.Tools.Schema.SqlTasks.targets';
export const NetCoreCondition = '\'$(NetCoreBuild)\' == \'true\'';
export const NotNetCoreCondition = '\'$(NetCoreBuild)\' != \'true\'';
export const SqlDbPresentCondition = '\'$(SQLDBExtensionsRefPath)\' != \'\'';
export const SqlDbNotPresentCondition = '\'$(SQLDBExtensionsRefPath)\' == \'\'';
export const RoundTripSqlDbPresentCondition = '\'$(NetCoreBuild)\' != \'true\' AND \'$(SQLDBExtensionsRefPath)\' != \'\'';
export const RoundTripSqlDbNotPresentCondition = '\'$(NetCoreBuild)\' != \'true\' AND \'$(SQLDBExtensionsRefPath)\' == \'\'';
export const DacpacRootPath = '$(DacPacRootPath)';
export const ProjJsonToClean = '$(BaseIntermediateOutputPath)\\project.assets.json';

// SqlProj Reference Assembly Information
export const NETFrameworkAssembly = 'Microsoft.NETFramework.ReferenceAssemblies';
export const VersionNumber = '1.0.0';
export const All = 'All';

// Profile XML names
export const targetDatabaseName = 'TargetDatabaseName';
export const targetConnectionString = 'TargetConnectionString';

// SQL connection string components
export const initialCatalogSetting = 'Initial Catalog';
export const dataSourceSetting = 'Data Source';
export const integratedSecuritySetting = 'Integrated Security';
export const authenticationSetting = 'Authentication';
export const activeDirectoryInteractive = 'active directory interactive';
export const userIdSetting = 'User ID';
export const passwordSetting = 'Password';

// Workspace settings for saving new database projects
export const dbProjectConfigurationKey = 'sqlDatabaseProjects';
export const projectSaveLocationKey = 'defaultProjectSaveLocation';
export const showUpdatePromptKey = 'showUpdateSaveLocationPrompt';

// Authentication types
export const integratedAuth = 'Integrated';
export const azureMfaAuth = 'AzureMFA';
export const sqlAuth = 'SqlAuth';

// Tree item types
export enum DatabaseProjectItemType {
	project = 'databaseProject.itemType.project',
	folder = 'databaseProject.itemType.folder',
	file = 'databaseProject.itemType.file',
	referencesRoot = 'databaseProject.itemType.referencesRoot',
	reference = 'databaseProject.itemType.reference',
	dataSourceRoot = 'databaseProject.itemType.dataSourceRoot',
	dataSource = 'databaseProject.itemType.dataSource'
}

// System dbs
export const systemDbs = ['master', 'msdb', 'tempdb', 'model'];

// SQL queries
export const sameDatabaseExampleUsage = 'SELECT * FROM [Schema1].[Table1]';
export function differentDbSameServerExampleUsage(db: string) { return `SELECT * FROM [${db}].[Schema1].[Table1]`; }
export function differentDbDifferentServerExampleUsage(server: string, db: string) { return `SELECT * FROM [${server}].[${db}].[Schema1].[Table1]`; }
