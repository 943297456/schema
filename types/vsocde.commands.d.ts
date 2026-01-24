declare module 'vscode' {
	/**
	 * @see https://code.visualstudio.com/api/references/commands#commands
	 */
	interface KnownCommands {
		/**
		 * Invoke notebook serializer
		 * @param notebookType A notebook type
		 * @param data Bytes to convert to data
		 * @returns Notebook Data
		 */
		"vscode.executeDataToNotebook"(notebookType: string, data: Uint8Array): NotebookData;
		/**
		 * Invoke notebook serializer
		 * @param notebookType A notebook type
		 * @param NotebookData Notebook data to convert to bytes
		 * @returns Bytes
		 */
		"vscode.executeNotebookToData"(notebookType: string, NotebookData: NotebookData): Uint8Array;
		/**
		 * Trigger kernel picker for specified notebook editor widget
		 * @param options Select kernel options
		 */
		"notebook.selectKernel"(options: unknown): void;
		/**
		 * Open interactive window and return notebook editor and input URI
		 * @param showOptions Show Options
		 * @param resource Interactive resource Uri
		 * @param controllerId Notebook controller Id
		 * @param title Interactive editor title
		 * @returns Notebook and input URI
		 */
		"interactive.open"(showOptions: ViewColumn | Pick<TextDocumentShowOptions, "viewColumn" | "preserveFocus">, resource: Uri, controllerId: string, title: string): { notebookUri: Uri, inputUri: Uri, notebookEditor?: NotebookEditor; };
		/**
		 * Invoke a new editor chat session
		 * @param Run_arguments
		 */
		"vscode.editorChat.start"(Run_arguments: unknown): void;
		/**
		 * Execute document highlight provider.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of DocumentHighlight-instances.
		 */
		"vscode.executeDocumentHighlights"(uri: Uri, position: Position): DocumentHighlight[];
		/**
		 * Execute document symbol provider.
		 * @param uri Uri of a text document
		 * @returns A promise that resolves to an array of SymbolInformation and DocumentSymbol instances.
		 */
		"vscode.executeDocumentSymbolProvider"(uri: Uri): DocumentSymbol[];
		/**
		 * Execute document format provider.
		 * @param uri Uri of a text document
		 * @param options Formatting options
		 * @returns A promise that resolves to an array of TextEdits.
		 */
		"vscode.executeFormatDocumentProvider"(uri: Uri, options: FormattingOptions): TextEdit[];
		/**
		 * Execute range format provider.
		 * @param uri Uri of a text document
		 * @param range A range in a text document
		 * @param options Formatting options
		 * @returns A promise that resolves to an array of TextEdits.
		 */
		"vscode.executeFormatRangeProvider"(uri: Uri, range: Range, options: FormattingOptions): TextEdit[];
		/**
		 * Execute format on type provider.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @param ch Trigger character
		 * @param options Formatting options
		 * @returns A promise that resolves to an array of TextEdits.
		 */
		"vscode.executeFormatOnTypeProvider"(uri: Uri, position: Position, ch: string, options: FormattingOptions): TextEdit[];
		/**
		 * Execute all definition providers.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of Location or LocationLink instances.
		 */
		"vscode.executeDefinitionProvider"(uri: Uri, position: Position): Array<Location | LocationLink>;
		/**
		 * Execute all type definition providers.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of Location or LocationLink instances.
		 */
		"vscode.executeTypeDefinitionProvider"(uri: Uri, position: Position): Array<Location | LocationLink>;
		/**
		 * Execute all declaration providers.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of Location or LocationLink instances.
		 */
		"vscode.executeDeclarationProvider"(uri: Uri, position: Position): Array<Location | LocationLink>;
		/**
		 * Execute all implementation providers.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of Location or LocationLink instances.
		 */
		"vscode.executeImplementationProvider"(uri: Uri, position: Position): Array<Location | LocationLink>;
		/**
		 * Execute all reference providers.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of Location-instances.
		 */
		"vscode.executeReferenceProvider"(uri: Uri, position: Position): Array<Location | LocationLink>;
		/**
		 * Execute all hover providers.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of Hover-instances.
		 */
		"vscode.executeHoverProvider"(uri: Uri, position: Position): Hover[];
		/**
		 * Execute selection range provider.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of ranges.
		 */
		"vscode.executeSelectionRangeProvider"(uri: Uri, position: readonly Position[]): SelectionRange[];
		/**
		 * Execute all workspace symbol providers.
		 * @param query Search string
		 * @returns A promise that resolves to an array of SymbolInformation-instances.
		 */
		"vscode.executeWorkspaceSymbolProvider"(query: string): SymbolInformation[];
		/**
		 * Prepare call hierarchy at a position inside a document
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of CallHierarchyItem-instances
		 */
		"vscode.prepareCallHierarchy"(uri: Uri, position: Position): CallHierarchyItem[];
		/**
		 * Compute incoming calls for an item
		 * @param item A call hierarchy item
		 * @returns A promise that resolves to an array of CallHierarchyIncomingCall-instances
		 */
		"vscode.provideIncomingCalls"(item: CallHierarchyItem): CallHierarchyIncomingCall[];
		/**
		 * Compute outgoing calls for an item
		 * @param item A call hierarchy item
		 * @returns A promise that resolves to an array of CallHierarchyOutgoingCall-instances
		 */
		"vscode.provideOutgoingCalls"(item: CallHierarchyItem): CallHierarchyOutgoingCall[];
		/**
		 * Execute the prepareRename of rename provider.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to a range and placeholder text.
		 */
		"vscode.prepareRename"(uri: Uri, position: Position): { range: Range; placeholder: string; };
		/**
		 * Execute rename provider.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @param newName The new symbol name
		 * @returns A promise that resolves to a WorkspaceEdit.
		 */
		"vscode.executeDocumentRenameProvider"(uri: Uri, position: Position, newName: string): WorkspaceEdit;
		/**
		 * Execute document link provider.
		 * @param uri Uri of a text document
		 * @param linkResolveCount Number of links that should be resolved, only when links are unresolved.
		 * @returns A promise that resolves to an array of DocumentLink-instances.
		 */
		"vscode.executeLinkProvider"(uri: Uri, linkResolveCount?: number): DocumentLink[];
		/**
		 * Provide semantic tokens legend for a document
		 * @param uri Uri of a text document
		 * @returns A promise that resolves to SemanticTokensLegend.
		 */
		"vscode.provideDocumentSemanticTokensLegend"(uri: Uri): SemanticTokensLegend;
		/**
		 * Provide semantic tokens for a document
		 * @param uri Uri of a text document
		 * @returns A promise that resolves to SemanticTokens.
		 */
		"vscode.provideDocumentSemanticTokens"(uri: Uri): SemanticTokens;
		/**
		 * Provide semantic tokens legend for a document range
		 * @param uri Uri of a text document
		 * @param range A range in a text document
		 * @returns A promise that resolves to SemanticTokensLegend.
		 */
		"vscode.provideDocumentRangeSemanticTokensLegend"(uri: Uri, range?: Range): SemanticTokensLegend;
		/**
		 * Provide semantic tokens for a document range
		 * @param uri Uri of a text document
		 * @param range A range in a text document
		 * @returns A promise that resolves to SemanticTokens.
		 */
		"vscode.provideDocumentRangeSemanticTokens"(uri: Uri, range: Range): SemanticTokens;
		/**
		 * Execute completion item provider.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @param triggerCharacter Trigger completion when the user types the character, like , or (
		 * @param itemResolveCount Number of completions to resolve (too large numbers slow down completions)
		 * @returns A promise that resolves to a CompletionList-instance.
		 */
		"vscode.executeCompletionItemProvider"(uri: Uri, position: Position, triggerCharacter?: string, itemResolveCount?: number): CompletionList;
		/**
		 * Execute signature help provider.
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @param triggerCharacter Trigger signature help when the user types the character, like , or (
		 * @returns A promise that resolves to SignatureHelp.
		 */
		"vscode.executeSignatureHelpProvider"(uri: Uri, position: Position, triggerCharacter?: string): SignatureHelp;
		/**
		 * Execute code lens provider.
		 * @param uri Uri of a text document
		 * @param itemResolveCount Number of lenses that should be resolved and returned. Will only return resolved lenses, will impact performance
		 * @returns A promise that resolves to an array of CodeLens-instances.
		 */
		"vscode.executeCodeLensProvider"(uri: Uri, itemResolveCount?: number): CodeLens[];
		/**
		 * Execute code action provider.
		 * @param uri Uri of a text document
		 * @param rangeOrSelection Range in a text document. Some refactoring provider requires Selection object.
		 * @param kind {@link CodeActionKind.value Code action kind} to return code actions for
		 * @param itemResolveCount Number of code actions to resolve (too large numbers slow down code actions)
		 * @returns A promise that resolves to an array of Command-instances.
		 */
		"vscode.executeCodeActionProvider"(uri: Uri, rangeOrSelection: Range | Selection, kind?: string, itemResolveCount?: number): Array<Command | CodeAction>;
		/**
		 * Execute document color provider.
		 * @param uri Uri of a text document
		 * @returns A promise that resolves to an array of ColorInformation objects.
		 */
		"vscode.executeDocumentColorProvider"(uri: Uri): ColorInformation[];
		/**
		 * Execute color presentation provider.
		 * @param color The color to show and insert
		 * @param context Context object with uri and range
		 * @returns A promise that resolves to an array of ColorPresentation objects.
		 */
		"vscode.executeColorPresentationProvider"(color: Color, context: { uri: Uri; range: Range; }): ColorPresentation[];
		/**
		 * Execute inlay hints provider
		 * @param uri Uri of a text document
		 * @param range A range in a text document
		 * @returns A promise that resolves to an array of Inlay objects
		 */
		"vscode.executeInlayHintProvider"(uri: Uri, range: Range): InlayHint[];
		/**
		 * Execute folding range provider
		 * @param uri Uri of a text document
		 * @returns A promise that resolves to an array of FoldingRange objects
		 */
		"vscode.executeFoldingRangeProvider"(uri: Uri): FoldingRange[];
		/**
		 * Resolve Notebook Content Providers
		 * @returns A promise that resolves to an array of NotebookContentProvider static info objects.
		 */
		"vscode.resolveNotebookContentProviders"(): Array<{
			viewType: string;
			displayName: string;
			filenamePattern: Array<GlobPattern | { include: GlobPattern; exclude: GlobPattern; }>;
			options: NotebookDocumentContentOptions;
		}>;
		/**
		 * Execute inline value provider
		 * @param uri Uri of a text document
		 * @param range A range in a text document
		 * @param context An InlineValueContext
		 * @returns A promise that resolves to an array of InlineValue objects
		 */
		"vscode.executeInlineValueProvider"(uri: Uri, range: Range, context: InlineValueContext): InlineValue[];
		/**
		 * Opens the provided resource in the editor. Can be a text or binary file, or an http(s) URL. If you need more control over the options for opening a text file, use vscode.window.showTextDocument instead.
		 * @param uriOrString Uri of a text or binary file, or an http(s) URL
		 * @param columnOrOptions Either the column in which to open, or editor options, see vscode.TextDocumentShowOptions
		 * @param label Editor label
		 */
		"vscode.open"(uriOrString: Uri | string, columnOrOptions?: ViewColumn | TextDocumentShowOptions, label?: string): void;
		/**
		 * Opens the provided resource with a specific editor.
		 * @param resource Resource to open
		 * @param viewId Custom editor view id or 'default' to use VS Code's default editor
		 * @param columnOrOptions Either the column in which to open or editor options, see vscode.TextDocumentShowOptions
		 */
		"vscode.openWith"(resource: Uri, viewId: string, columnOrOptions?: ViewColumn | TextDocumentShowOptions): void;
		/**
		 * Opens the provided resources in the diff editor to compare their contents.
		 * @param left Left-hand side resource of the diff editor
		 * @param right Right-hand side resource of the diff editor
		 * @param title Human readable title for the diff editor
		 * @param options Either the column in which to open, or editor options (see vscode.TextDocumentShowOptions)
		 */
		"vscode.diff"(left: Uri, right: Uri, title?: string, options?: TextDocumentShowOptions): void;
		/**
		 * Opens a list of resources in the changes editor to compare their contents.
		 * @param title Human readable title for the changes editor
		 * @param resourceList List of resources to compare
		 */
		"vscode.changes"(title: string, resourceList: Array<[Uri, Uri?, Uri?]>): void;
		/**
		 * Prepare type hierarchy at a position inside a document
		 * @param uri Uri of a text document
		 * @param position A position in a text document
		 * @returns A promise that resolves to an array of TypeHierarchyItem-instances
		 */
		"vscode.prepareTypeHierarchy"(uri: Uri, position: Position): TypeHierarchyItem[];
		/**
		 * Compute supertypes for an item
		 * @param item A type hierarchy item
		 * @returns A promise that resolves to an array of TypeHierarchyItem-instances
		 */
		"vscode.provideSupertypes"(item: TypeHierarchyItem): TypeHierarchyItem[];
		/**
		 * Compute subtypes for an item
		 * @param item A type hierarchy item
		 * @returns A promise that resolves to an array of TypeHierarchyItem-instances
		 */
		"vscode.provideSubtypes"(item: TypeHierarchyItem): TypeHierarchyItem[];
		/**
		 * Reveals a test instance in the explorer
		 * @param testItem A VS Code TestItem.
		 */
		"vscode.revealTestInExplorer"(testItem: TestItem): void;
		/**
		 * Starts running the given tests with continuous run mode.
		 * @param testProfile A VS Code test profile
		 */
		"vscode.startContinuousTestRun"(testProfile: TestRunProfile, testItem_array: TestItem[]): void;
		/**
		 * Stops running the given tests with continuous run mode.
		 */
		"vscode.stopContinuousTestRun"(testItem_array: TestItem[]): void;
		/**
		 * Set a custom context key value that can be used in when clauses.
		 * @param name The context key name
		 * @param value The context key value
		 */
		setContext(name: string, value: unknown): void;
		/**
		 * Move cursor to a logical position in the view
		 */
		cursorMove(options: {
			/** A mandatory logical position value providing where to move the cursor.Text'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine', */
			to: 'left' | 'right' | 'up' | 'down' | 'prevBlankLine' | 'nextBlankLine' |
			'wrappedLineStart' | 'wrappedLineEnd' | 'wrappedLineColumnCenter' |
			'wrappedLineFirstNonWhitespaceCharacter' | 'wrappedLineLastNonWhitespaceCharacter' |
			'viewPortTop' | 'viewPortCenter' | 'viewPortBottom' | 'viewPortIfOutside';
			/** Unit to move. Default is computed based on 'to' value. */
			by?: 'line' | 'wrappedLine' | 'character' | 'halfLine';
			/** Number of units to move. Default is '1'. */
			value?: number;
			/** If 'true' makes the selection. Default is 'false'. */
			select?: boolean;
			/** If 'true' does not add the movement to navigation history. Default is 'false'. */
			noHistory?: boolean;
		}): void;
		/**
		 * Scroll editor in the given direction
		 */
		editorScroll(options: {
			/** A mandatory direction value. */
			to: 'up' | 'down';
			/** Unit to move. Default is computed based on 'to' value. */
			by?: 'line' | 'wrappedLine' | 'page' | 'halfPage' | 'editor';
			/** Number of units to move. Default is '1'. */
			value?: number;
			/** If 'true' reveals the cursor if it is outside view port. */
			revealCursor?: boolean;
		}): void;
		/**
		 * Reveal the given line at the given logical position
		 */
		revealLine(options: {
			/** A mandatory line number value. */
			lineNumber: number;
			/** Logical position at which line has to be revealed. */
			at: 'top' | 'center' | 'bottom';
		}): void;
		/**
		 * Unfold the content in the editor
		 */
		"editor.unfold"(options: {
			/** Number of levels to unfold. If not set, defaults to 1. */
			levels?: number;
			/** If 'up', unfold given number of levels up otherwise unfolds down. */
			direction?: 'up' | 'down';
			/** Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not set, the active selection(s) will be used. */
			selectionLines?: number[];
		}): void;
		/**
		 * Fold the content in the editor
		 */
		"editor.fold"(options: {
			/** Number of levels to fold. */
			levels?: number;
			/** If 'up', folds given number of levels up otherwise folds down. */
			direction?: 'up' | 'down';
			/** Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used. If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead. */
			selectionLines?: number[];
		}): void;
		/**
		 * Folds or unfolds the content in the editor depending on its current state
		 */
		"editor.toggleFold"(): void;
		/**
		 * Open a new In-Editor Find Widget with specific options.
		 * @param args searchString - String to prefill the find input
		 * replaceString - String to prefill the replace input
		 * isRegex - enable regex
		 * preserveCase - try to keep the same case when replacing
		 * findInSelection - restrict the find location to the current selection
		 * matchWholeWord
		 * isCaseSensitive
		 */
		"editor.actions.findWithArgs"(args: {
			searchString: string;
			replaceString: string;
			isRegex: boolean;
			matchWholeWord: boolean;
			isCaseSensitive: boolean;
			preserveCase: boolean;
			findInSelection: boolean;
		}): void;
		/**
		 * Go to locations from a position in a file
		 * @param uri The text document in which to start
		 * @param position The position at which to start
		 * @param locations An array of locations.
		 * @param multiple Define what to do when having multiple results
		 * @param noResultsMessage Human readable message that shows when locations is empty.
		 */
		"editor.action.goToLocations"(uri: Uri, position: Position, locations: Location[], multiple?: 'peek' | 'gotoAndPeek' | 'goto', noResultsMessage?: string, openInPeek?: boolean): void;
		/**
		 * Peek locations from a position in a file
		 * @param uri The text document in which to start
		 * @param position The position at which to start
		 * @param locations An array of locations.
		 * @param multiple Define what to do when having multiple results
		 */
		"editor.action.peekLocations"(uri: Uri, position: Position, locations: Location[], multiple?: 'peek' | 'gotoAndPeek' | 'goto'): void;
		/**
		 * Quick access
		 * @param prefix
		 */
		"workbench.action.quickOpen"(prefix: string): void;
		/**
		 * Toggle Outputs
		 * @param options The cell range options
		 */
		"notebook.cell.toggleOutputs"(options: unknown): void;
		/**
		 * Fold Cell
		 * @param index The cell index
		 */
		"notebook.fold"(index: unknown): void;
		/**
		 * Unfold Cell
		 * @param index The cell index
		 */
		"notebook.unfold"(index: unknown): void;
		/**
		 * Notebook Kernel Args
		 * @param kernelInfo The kernel info
		 */
		"notebook.selectKernel"(kernelInfo: unknown): void;
		/**
		 * Change Cell Language
		 * @param range The cell range
		 * @param language The target cell language
		 */
		"notebook.cell.changeLanguage"(range: unknown, language: unknown): void;
		/**
		 * Run All
		 * @param uri The document uri
		 */
		"notebook.execute"(uri: unknown): void;
		/**
		 * Execute Cell
		 * @param options The cell range options
		 */
		"notebook.cell.execute"(options: unknown): void;
		/**
		 * Execute Cell and Focus Container
		 * @param options The cell range options
		 */
		"notebook.cell.executeAndFocusContainer"(options: unknown): void;
		/**
		 * Stop Cell Execution
		 * @param options The cell range options
		 */
		"notebook.cell.cancelExecution"(options: unknown): void;
		/**
		 * Open a workspace search
		 * @param A_set_of_options_for_the_search
		 */
		"workbench.action.findInFiles"(A_set_of_options_for_the_search: unknown): void;
		/**
		 * Open Interactive Window
		 * @param showOptions Show Options
		 * @param resource Interactive resource Uri
		 * @param controllerId Notebook controller Id
		 * @param title Notebook editor title
		 */
		"_interactive.open"(showOptions: unknown, resource: unknown, controllerId: unknown, title: unknown): void;
		/**
		 * Execute the Contents of the Input Box
		 * @param resource Interactive resource Uri
		 */
		"interactive.execute"(resource: unknown): void;
		/**
		 * Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.
		 * @param Open_new_Search_Editor_args
		 */
		"search.action.openNewEditor"(Open_new_Search_Editor_args: unknown): void;
		/**
		 * Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.
		 * @param Open_new_Search_Editor_args
		 */
		"search.action.openEditor"(Open_new_Search_Editor_args: unknown): void;
		/**
		 * Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.
		 * @param Open_new_Search_Editor_args
		 */
		"search.action.openNewEditorToSide"(Open_new_Search_Editor_args: unknown): void;
		/**
		 * Open a folder or workspace in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder/workspace unless the newWindow parameter is set to true.
		 * @param uri Uri of the folder or workspace file to open. If not provided, a native dialog will ask the user for the folder
		 * @param options Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.
		 */
		"vscode.openFolder"(uri?: Uri, options?: {
			/** Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. */
			forceNewWindow?: boolean;
			/** Whether to force opening the folder/workspace in the same window. Defaults to false. */
			forceReuseWindow?: boolean;
			/** Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. */
			noRecentEntry?: boolean;
			/** Whether to force opening the folder/workspace in a local window. Defaults to false. */
			forceLocalWindow?: boolean;
			/** The profile to use when opening the folder/workspace. Defaults to the current profile. */
			forceProfile?: string;
			/** Whether to use a temporary profile when opening the folder/workspace. Defaults to false. */
			forceTempProfile?: boolean;
			/** An array of files to open in the new window. Defaults to an empty array. */
			filesToOpen?: Uri[];
		} | boolean): void;
		/**
		 * Opens an new window depending on the newWindow argument.
		 */
		"vscode.newWindow"(options?: {
			/** Whether to open a new window or the same. Defaults to opening in a new window. */
			reuseWindow?: boolean;
		}): void;
		/**
		 * Removes an entry with the given path from the recently opened list.
		 * @param path URI or URI string to remove from recently opened.
		 */
		"vscode.removeFromRecentlyOpened"(path: Uri | string): void;
		/**
		 * Move the active editor by tabs or groups
		 */
		moveActiveEditor(options: {
			/** String value providing where to move. */
			to: 'left' | 'right';
			/** String value providing the unit for move (by tab or by group). */
			by?: 'tab' | 'group';
			/** Number value providing how many positions or an absolute position to move. */
			value?: number;
		}): void;
		/**
		 * Copy the active editor by groups
		 */
		copyActiveEditor(options: {
			/** String value providing where to copy. */
			to: 'left' | 'right';
			/** Number value providing how many positions or an absolute position to copy. */
			value?: number;
		}): void;
		/**
		 * Get Editor Layout
		 * @returns An editor layout object, in the same format as vscode.setEditorLayout
		 */
		"vscode.getEditorLayout"(): {
			/** The orientation of the root group in the layout. 0 for horizontal, 1 for vertical. */
			orientation: 0 | 1;
			groups: Array<{
				size: number;
				groups?: unknown[];
			}>;
		};
		/**
		 * New Untitled Text File
		 * @param options The editor view type or language ID if known
		 */
		"workbench.action.files.newUntitledFile"(options?: { languageId?: string; viewType?: string; }): void;
		/**
		 * Install the given extension
		 * @param extensionIdOrVSIXUri Extension id or VSIX resource uri
		 * @param options Options for installing the extension. Object with the following properties: installOnlyNewlyAddedFromExtensionPackVSIX: When enabled, VS Code installs only newly added extensions from the extension pack VSIX. This option is considered only when installing VSIX.
		 */
		"workbench.extensions.installExtension"(extensionIdOrVSIXUri: Uri | string, options?: {
			/** When enabled, VS Code installs only newly added extensions from the extension pack VSIX. This option is considered only while installing a VSIX. @default false */
			installOnlyNewlyAddedFromExtensionPackVSIX?: boolean;
			/** When enabled, VS Code installs the pre-release version of the extension if available. @default false */
			installPreReleaseVersion?: boolean;
			/** When enabled, VS Code do not sync this extension when Settings Sync is on. @default false*/
			donotSync?: boolean;
			/** Justification for installing the extension. This is a string or an object that can be used to pass any information to the installation handlers. i.e. `{reason: 'This extension wants to open a URI', action: 'Open URI'}` will show a message box with the reason and action upon install. */
			justification?: string | { reason: string; action: string; };
			/** When enabled, the extension will be enabled if it is installed but disabled. If the extension is already enabled, this has no effect. @default false */
			enable?: boolean;
			/** Context for the installation. This is a JSON object that can be used to pass any information to the installation handlers. i.e. `{skipWalkthrough: true}` will skip opening the walkthrough upon install. */
			context?: object;
		}): void;
		/**
		 * Uninstall the given extension
		 */
		"workbench.extensions.uninstallExtension"(extensionId: string): void;
		/**
		 * Search for a specific extension
		 * @param query Query to use in search
		 */
		"workbench.extensions.search"(query: string): void;
		/**
		 * Run Task
		 * @param args Filters the tasks shown in the Quick Pick
		 */
		"workbench.action.tasks.runTask"(args: string | {
			/** The contributed task type */
			type: string;
			/** The task's label or a term to filter by */
			task: string;
		}): void;
		/**
		 * Open the issue reporter and optionally prefill part of the form.
		 * @param options Data to use to prefill the issue reporter with.
		 */
		"workbench.action.openIssueReporter"(options?: string | {
			extensionId: string;
			issueTitle: string;
			issueBody: string;
		}): void;
		/**
		 * Open the issue reporter and optionally prefill part of the form.
		 * @param options Data to use to prefill the issue reporter with.
		 */
		"vscode.openIssueReporter"(options?: string | {
			extensionId: string;
			issueTitle: string;
			issueBody: string;
		}): void;
		/**
		 * workbench.action.openLogFile
		 * @param logFile The id of the log file to open, for example `"window"`. Currently the best way to get this is to get the ID by checking the `workbench.action.output.show.<id>` commands
		 */
		"workbench.action.openLogFile"(logFile?: string): void;
		/**
		 * Open the walkthrough.
		 * @param walkthroughID ID of the walkthrough to open.
		 * @param optionsOrToSide Opens the walkthrough in a new editor group to the side.
		 */
		"workbench.action.openWalkthrough"(walkthroughID?: string | { category: string; step?: string; }, optionsOrToSide?: { toSide?: boolean; inactive?: boolean; } | boolean): void;
	}

	export namespace commands {
		function executeCommand<T extends keyof KnownCommands>(command: T, ...rest: Parameters<KnownCommands[T]>): Thenable<Awaited<ReturnType<KnownCommands[T]>>>;
	}
}
