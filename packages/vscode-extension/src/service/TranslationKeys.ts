/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.  All rights reserved.
 ** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

export const ADD_DEPENDENCIES = {
	ADDED: 'ADD_DEPENDENCIES_ADDED',
	ADDED_LOG: 'ADD_DEPENDENCIES_ADDED_LOG',
	ADDING: 'ADD_DEPENDENCIES_ADDING',
	COMMAND: 'ADD_DEPENDENCIES_COMMAND',
	EMPTY: 'ADD_DEPENDENCIES_EMPTY',
	ERROR: 'ADD_DEPENDENCIES_ERROR',
};

export const COMMAND = {
	ERROR: 'COMMAND_ERROR',
	SUCCESS: 'COMMAND_SUCCESS',
	TRIGGERED: 'COMMAND_TRIGGERED',
};

export const COMPARE_OBJECT = {
	COMPARING: 'COMPARE_OBJECT_COMPARING',
	ERROR: 'COMPARE_OBJECT_ERROR',
	SUCCESS: 'COMPARE_OBJECT_SUCCESS',
}

export const DEPLOY = {
	COMMAND: 'DEPLOY_COMMAND',
	DEPLOYING: 'DEPLOY_DEPLOYING',
};

export const ERRORS = {
	NO_ACTIVE_FILE: 'ERROR_NO_ACTIVE_FILE',
	NO_ACTIVE_FILE_OR_WORKSPACE: 'ERROR_NO_ACTIVE_FILE_OR_WORKSPACE',
	NO_ACTIVE_WORKSPACE: 'ERROR_NO_ACTIVE_WORKSPACE'
}

export const EXTENSION_INSTALLATION = {
	ERROR: {
		GENERAL_ERROR: 'EXTENSION_INSTALLATION_ERROR_GENERAL_ERROR',
		SDK_INVALID: 'EXTENSION_INSTALLATION_ERROR_SDK_INVALID',
		SDK_NOT_AVAILABLE: 'EXTENSION_INSTALLATION_ERROR_SDK_NOT_AVAILABLE',
	},
	IN_PROGRESS: 'EXTENSION_INSTALLATION_IN_PROGRESS',
	SUCCESS: {
		SDK_DOWNLOADED: 'EXTENSION_INSTALLATION_SUCCESS_SDK_DOWNLOADED',
	}
}

export const IMPORT_OBJECT = {
	ERROR: 'IMPORT_OBJECT_ERROR',
	OVERRIDE: 'IMPORT_OBJECT_OVERRIDE',
	PROCESS_CANCELED: 'IMPORT_OBJECT_PROCESS_CANCELED',
	SUCCESS: 'IMPORT_OBJECT_SUCCESS',
	UPDATING: 'IMPORT_OBJECT_UPDATING',
}

export const LIST_OBJECTS = {
	COMMAND: 'LIST_OBJECTS_COMMAND',
	LISTING: 'LIST_OBJECTS_LISTING',
};

export const MANAGE_ACCOUNTS = {
	AVAILABLE_CONNECTIONS: 'MANAGE_ACCOUNTS_AVAILABLE_CONNECTIONS',
	CANCELED: 'MANAGE_ACCOUNTS_CANCELED',
	CREATE: {
		BROWSER: 'MANAGE_ACCOUNTS_CREATE_BROWSER',
		BROWSER_CANCEL: 'MANAGE_ACCOUNTS_CREATE_BROWSER_CANCEL',
		CONTINUE_IN_BROWSER: 'MANAGE_ACCOUNTS_CREATE_CONTINUE_IN_BROWSER',
		ENTER_AUTH_ID: 'MANAGE_ACCOUNTS_ENTER_AUTH_ID',
		ENTER_URL: 'MANAGE_ACCOUNTS_ENTER_URL',
		NEW_AUTHID: 'MANAGE_ACCOUNTS_CREATE_NEW_AUTHID',
		SAVE_TOKEN: {
			ENTER_ACCOUNT_ID: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_ACCOUNT_ID',
			ENTER_TOKEN_ID: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_TOKEN_ID',
			ENTER_TOKEN_SECRET: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_TOKEN_SECRET',
			OPTION: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_OPTION',
			SAVING_TBA: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_SAVING_TBA',
			SUCCESS: {
				NEW_TBA: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_NEW_TBA'
			}
		}
	},
	CREATE_NEW: 'MANAGE_ACCOUNTS_CREATE_NEW',
	ERROR: {
		NOT_IN_PROJECT: 'MANAGE_ACCOUNTS_ERROR_NOT_IN_PROJECT'
	},
	LOADING: 'MANAGE_ACCOUNTS_LOADING',
	SELECT_AUTH_ID: {
		SUCCESS: 'MANAGE_ACCOUNTS_SELECT_AUTH_ID_SUCCESS'
	},
	SELECT_CREATE: 'MANAGE_ACCOUNTS_SELECT_CREATE',
}

export const UPLOAD_FILE = {
	COMMAND: 'UPLOAD_FILE_COMMAND',
	OVERWRITE_QUESTION: 'UPLOAD_FILE_OVERWRITE_FILE',
	PROCESS_CANCELED: 'UPLOAD_FILE_PROCESS_CANCELED',
	UPLOADING: 'UPLOAD_FILE_UPLOADING',
};

export const UPDATE_OBJECT = {
	ERROR: 'UPDATE_OBJECT_ERROR',
	OVERRIDE: 'UPDATE_OBJECT_OVERRIDE',
	PROCESS_CANCELED: 'UPDATE_OBJECT_PROCESS_CANCELED',
	SUCCESS: 'UPDATE_OBJECT_SUCCESS',
	UPDATING: 'UPDATE_OBJECT_UPDATING',
}

export const DISMISS = 'DISMISS';
export const SEE_DETAILS = 'SEE_DETAILS';
export const YES = 'YES';
export const NO = 'NO';
