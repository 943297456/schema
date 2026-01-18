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
        "vscode.executeDataToNotebook"(notebookType: unknown, data: unknown): unknown;
        /**
         * Invoke notebook serializer
         * @param notebookType A notebook type
         * @param NotebookData Notebook data to convert to bytes
         * @returns Bytes
         */
        "vscode.executeNotebookToData"(notebookType: unknown, NotebookData: unknown): unknown;
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
        "interactive.open"(showOptions: unknown, resource: unknown, controllerId: unknown, title: unknown): unknown;
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
        "vscode.executeDocumentHighlights"(uri: unknown, position: unknown): unknown;
        /**
         * Execute document symbol provider.
         * @param uri Uri of a text document
         * @returns A promise that resolves to an array of SymbolInformation and DocumentSymbol instances.
         */
        "vscode.executeDocumentSymbolProvider"(uri: unknown): unknown;
        /**
         * Execute document format provider.
         * @param uri Uri of a text document
         * @param options Formatting options
         * @returns A promise that resolves to an array of TextEdits.
         */
        "vscode.executeFormatDocumentProvider"(uri: unknown, options: unknown): unknown;
        /**
         * Execute range format provider.
         * @param uri Uri of a text document
         * @param range A range in a text document
         * @param options Formatting options
         * @returns A promise that resolves to an array of TextEdits.
         */
        "vscode.executeFormatRangeProvider"(uri: unknown, range: unknown, options: unknown): unknown;
        /**
         * Execute format on type provider.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @param ch Trigger character
         * @param options Formatting options
         * @returns A promise that resolves to an array of TextEdits.
         */
        "vscode.executeFormatOnTypeProvider"(uri: unknown, position: unknown, ch: unknown, options: unknown): unknown;
        /**
         * Execute all definition providers.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of Location or LocationLink instances.
         */
        "vscode.executeDefinitionProvider"(uri: unknown, position: unknown): unknown;
        /**
         * Execute all type definition providers.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of Location or LocationLink instances.
         */
        "vscode.executeTypeDefinitionProvider"(uri: unknown, position: unknown): unknown;
        /**
         * Execute all declaration providers.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of Location or LocationLink instances.
         */
        "vscode.executeDeclarationProvider"(uri: unknown, position: unknown): unknown;
        /**
         * Execute all implementation providers.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of Location or LocationLink instances.
         */
        "vscode.executeImplementationProvider"(uri: unknown, position: unknown): unknown;
        /**
         * Execute all reference providers.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of Location-instances.
         */
        "vscode.executeReferenceProvider"(uri: unknown, position: unknown): unknown;
        /**
         * Execute all hover providers.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of Hover-instances.
         */
        "vscode.executeHoverProvider"(uri: unknown, position: unknown): unknown;
        /**
         * Execute selection range provider.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of ranges.
         */
        "vscode.executeSelectionRangeProvider"(uri: unknown, position: unknown): unknown;
        /**
         * Execute all workspace symbol providers.
         * @param query Search string
         * @returns A promise that resolves to an array of SymbolInformation-instances.
         */
        "vscode.executeWorkspaceSymbolProvider"(query: unknown): unknown;
        /**
         * Prepare call hierarchy at a position inside a document
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of CallHierarchyItem-instances
         */
        "vscode.prepareCallHierarchy"(uri: unknown, position: unknown): unknown;
        /**
         * Compute incoming calls for an item
         * @param item A call hierarchy item
         * @returns A promise that resolves to an array of CallHierarchyIncomingCall-instances
         */
        "vscode.provideIncomingCalls"(item: unknown): unknown;
        /**
         * Compute outgoing calls for an item
         * @param item A call hierarchy item
         * @returns A promise that resolves to an array of CallHierarchyOutgoingCall-instances
         */
        "vscode.provideOutgoingCalls"(item: unknown): unknown;
        /**
         * Execute the prepareRename of rename provider.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to a range and placeholder text.
         */
        "vscode.prepareRename"(uri: unknown, position: unknown): unknown;
        /**
         * Execute rename provider.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @param newName The new symbol name
         * @returns A promise that resolves to a WorkspaceEdit.
         */
        "vscode.executeDocumentRenameProvider"(uri: unknown, position: unknown, newName: unknown): unknown;
        /**
         * Execute document link provider.
         * @param uri Uri of a text document
         * @param linkResolveCount Number of links that should be resolved, only when links are unresolved.
         * @returns A promise that resolves to an array of DocumentLink-instances.
         */
        "vscode.executeLinkProvider"(uri: unknown, linkResolveCount?: unknown): unknown;
        /**
         * Provide semantic tokens legend for a document
         * @param uri Uri of a text document
         * @returns A promise that resolves to SemanticTokensLegend.
         */
        "vscode.provideDocumentSemanticTokensLegend"(uri: unknown): unknown;
        /**
         * Provide semantic tokens for a document
         * @param uri Uri of a text document
         * @returns A promise that resolves to SemanticTokens.
         */
        "vscode.provideDocumentSemanticTokens"(uri: unknown): unknown;
        /**
         * Provide semantic tokens legend for a document range
         * @param uri Uri of a text document
         * @param range A range in a text document
         * @returns A promise that resolves to SemanticTokensLegend.
         */
        "vscode.provideDocumentRangeSemanticTokensLegend"(uri: unknown, range?: unknown): unknown;
        /**
         * Provide semantic tokens for a document range
         * @param uri Uri of a text document
         * @param range A range in a text document
         * @returns A promise that resolves to SemanticTokens.
         */
        "vscode.provideDocumentRangeSemanticTokens"(uri: unknown, range: unknown): unknown;
        /**
         * Execute completion item provider.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @param triggerCharacter Trigger completion when the user types the character, like , or (
         * @param itemResolveCount Number of completions to resolve (too large numbers slow down completions)
         * @returns A promise that resolves to a CompletionList-instance.
         */
        "vscode.executeCompletionItemProvider"(uri: unknown, position: unknown, triggerCharacter?: unknown, itemResolveCount?: unknown): unknown;
        /**
         * Execute signature help provider.
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @param triggerCharacter Trigger signature help when the user types the character, like , or (
         * @returns A promise that resolves to SignatureHelp.
         */
        "vscode.executeSignatureHelpProvider"(uri: unknown, position: unknown, triggerCharacter?: unknown): unknown;
        /**
         * Execute code lens provider.
         * @param uri Uri of a text document
         * @param itemResolveCount Number of lenses that should be resolved and returned. Will only return resolved lenses, will impact performance
         * @returns A promise that resolves to an array of CodeLens-instances.
         */
        "vscode.executeCodeLensProvider"(uri: unknown, itemResolveCount?: unknown): unknown;
        /**
         * Execute code action provider.
         * @param uri Uri of a text document
         * @param rangeOrSelection Range in a text document. Some refactoring provider requires Selection object.
         * @param kind Code action kind to return code actions for
         * @param itemResolveCount Number of code actions to resolve (too large numbers slow down code actions)
         * @returns A promise that resolves to an array of Command-instances.
         */
        "vscode.executeCodeActionProvider"(uri: unknown, rangeOrSelection: unknown, kind?: unknown, itemResolveCount?: unknown): unknown;
        /**
         * Execute document color provider.
         * @param uri Uri of a text document
         * @returns A promise that resolves to an array of ColorInformation objects.
         */
        "vscode.executeDocumentColorProvider"(uri: unknown): unknown;
        /**
         * Execute color presentation provider.
         * @param color The color to show and insert
         * @param context Context object with uri and range
         * @returns A promise that resolves to an array of ColorPresentation objects.
         */
        "vscode.executeColorPresentationProvider"(color: unknown, context: unknown): unknown;
        /**
         * Execute inlay hints provider
         * @param uri Uri of a text document
         * @param range A range in a text document
         * @returns A promise that resolves to an array of Inlay objects
         */
        "vscode.executeInlayHintProvider"(uri: unknown, range: unknown): unknown;
        /**
         * Execute folding range provider
         * @param uri Uri of a text document
         * @returns A promise that resolves to an array of FoldingRange objects
         */
        "vscode.executeFoldingRangeProvider"(uri: unknown): unknown;
        /**
         * Resolve Notebook Content Providers
         * @returns A promise that resolves to an array of NotebookContentProvider static info objects.
         */
        "vscode.resolveNotebookContentProviders"(): unknown;
        /**
         * Execute inline value provider
         * @param uri Uri of a text document
         * @param range A range in a text document
         * @param context An InlineValueContext
         * @returns A promise that resolves to an array of InlineValue objects
         */
        "vscode.executeInlineValueProvider"(uri: unknown, range: unknown, context: unknown): unknown;
        /**
         * Opens the provided resource in the editor. Can be a text or binary file, or an http(s) URL. If you need more control over the options for opening a text file, use vscode.window.showTextDocument instead.
         * @param uri Uri of a text or binary file, or an http(s) URL
         * @param columnOrOptions Either the column in which to open, or editor options, see vscode.TextDocumentShowOptions
         * @param label Editor label
         */
        "vscode.open"(uri: unknown, columnOrOptions?: unknown, label?: unknown): void;
        /**
         * Opens the provided resource with a specific editor.
         * @param resource Resource to open
         * @param viewId Custom editor view id or 'default' to use VS Code's default editor
         * @param columnOrOptions Either the column in which to open or editor options, see vscode.TextDocumentShowOptions
         */
        "vscode.openWith"(resource: unknown, viewId: unknown, columnOrOptions?: unknown): void;
        /**
         * Opens the provided resources in the diff editor to compare their contents.
         * @param left Left-hand side resource of the diff editor
         * @param right Right-hand side resource of the diff editor
         * @param title Human readable title for the diff editor
         * @param options Either the column in which to open, or editor options (see vscode.TextDocumentShowOptions)
         */
        "vscode.diff"(left: unknown, right: unknown, title: unknown, options?: unknown): void;
        /**
         * Opens a list of resources in the changes editor to compare their contents.
         * @param title Human readable title for the changes editor
         * @param resourceList List of resources to compare
         */
        "vscode.changes"(title: unknown, resourceList: unknown): void;
        /**
         * Prepare type hierarchy at a position inside a document
         * @param uri Uri of a text document
         * @param position A position in a text document
         * @returns A promise that resolves to an array of TypeHierarchyItem-instances
         */
        "vscode.prepareTypeHierarchy"(uri: unknown, position: unknown): unknown;
        /**
         * Compute supertypes for an item
         * @param item A type hierarchy item
         * @returns A promise that resolves to an array of TypeHierarchyItem-instances
         */
        "vscode.provideSupertypes"(item: unknown): unknown;
        /**
         * Compute subtypes for an item
         * @param item A type hierarchy item
         * @returns A promise that resolves to an array of TypeHierarchyItem-instances
         */
        "vscode.provideSubtypes"(item: unknown): unknown;
        /**
         * Reveals a test instance in the explorer
         * @param testItem A VS Code TestItem.
         */
        "vscode.revealTestInExplorer"(testItem: unknown): void;
        /**
         * Set a custom context key value that can be used in when clauses.
         * @param name The context key name
         * @param value The context key value
         */
        setContext(name: unknown, value: unknown): void;
        /**
         * Move cursor to a logical position in the view
         * @param Cursor_move_argument_object Property-value pairs that can be passed through this argument:
         * 'to': A mandatory logical position value providing where to move the cursor.Text'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',
         * 'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'
         * 'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'
         * 'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'
         * 'by': Unit to move. Default is computed based on 'to' value.Text'line', 'wrappedLine', 'character', 'halfLine'
         * 'value': Number of units to move. Default is '1'.
         * 'select': If 'true' makes the selection. Default is 'false'.
         */
        cursorMove(Cursor_move_argument_object: unknown): void;
        /**
         * Scroll editor in the given direction
         * @param Editor_scroll_argument_object Property-value pairs that can be passed through this argument:
         * 'to': A mandatory direction value.Text'up', 'down'
         * 'by': Unit to move. Default is computed based on 'to' value.Text'line', 'wrappedLine', 'page', 'halfPage', 'editor'
         * 'value': Number of units to move. Default is '1'.
         * 'revealCursor': If 'true' reveals the cursor if it is outside view port.
         */
        editorScroll(Editor_scroll_argument_object: unknown): void;
        /**
         * Reveal the given line at the given logical position
         * @param Reveal_line_argument_object Property-value pairs that can be passed through this argument:
         * 'lineNumber': A mandatory line number value.
         * 'at': Logical position at which line has to be revealed.Text'top', 'center', 'bottom'
         */
        revealLine(Reveal_line_argument_object: unknown): void;
        /**
         * Unfold the content in the editor
         * @param Unfold_editor_argument Property-value pairs that can be passed through this argument:
         * 'levels': Number of levels to unfold. If not set, defaults to 1.
         * 'direction': If 'up', unfold given number of levels up otherwise unfolds down.
         * 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not
         * set, the active selection(s) will be used.
         */
        "editor.unfold"(Unfold_editor_argument: unknown): void;
        /**
         * Fold the content in the editor
         * @param Fold_editor_argument Property-value pairs that can be passed through this argument:
         * 'levels': Number of levels to fold.
         * 'direction': If 'up', folds given number of levels up otherwise folds down.
         * 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.
         * If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.
         */
        "editor.fold"(Fold_editor_argument: unknown): void;
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
        "editor.actions.findWithArgs"(...args: unknown[]): void;
        /**
         * Go to locations from a position in a file
         * @param uri The text document in which to start
         * @param position The position at which to start
         * @param locations An array of locations.
         * @param multiple Define what to do when having multiple results, either peek, gotoAndPeek, or `goto
         * @param noResultsMessage Human readable message that shows when locations is empty.
         */
        "editor.action.goToLocations"(uri: unknown, position: unknown, locations: unknown, multiple: unknown, noResultsMessage: unknown): void;
        /**
         * Peek locations from a position in a file
         * @param uri The text document in which to start
         * @param position The position at which to start
         * @param locations An array of locations.
         * @param multiple Define what to do when having multiple results, either peek, gotoAndPeek, or `goto
         */
        "editor.action.peekLocations"(uri: unknown, position: unknown, locations: unknown, multiple: unknown): void;
        /**
         * Quick access
         * @param prefix
         */
        "workbench.action.quickOpen"(prefix: unknown): void;
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
         * @param options Options. Object with the following properties: forceNewWindow: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. forceReuseWindow: Whether to force opening the folder/workspace in the same window.  Defaults to false. noRecentEntry: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the forceNewWindow setting.
         */
        "vscode.openFolder"(uri?: unknown, options?: unknown): void;
        /**
         * Opens an new window depending on the newWindow argument.
         * @param options Options. Object with the following properties: reuseWindow: Whether to open a new window or the same. Defaults to opening in a new window.
         */
        "vscode.newWindow"(options?: unknown): void;
        /**
         * Removes an entry with the given path from the recently opened list.
         * @param path URI or URI string to remove from recently opened.
         */
        "vscode.removeFromRecentlyOpened"(path: unknown): void;
        /**
         * Move the active editor by tabs or groups
         * @param Active_editor_move_argument Argument Properties:
         * 'to': String value providing where to move.
         * 'by': String value providing the unit for move (by tab or by group).
         * 'value': Number value providing how many positions or an absolute position to move.
         */
        moveActiveEditor(Active_editor_move_argument: unknown): void;
        /**
         * Copy the active editor by groups
         * @param Active_editor_copy_argument Argument Properties:
         * 'to': String value providing where to copy.
         * 'value': Number value providing how many positions or an absolute position to copy.
         */
        copyActiveEditor(Active_editor_copy_argument: unknown): void;
        /**
         * Get Editor Layout
         * @returns An editor layout object, in the same format as vscode.setEditorLayout
         */
        "vscode.getEditorLayout"(): unknown;
        /**
         * New Untitled Text File
         * @param New_Untitled_Text_File_arguments The editor view type or language ID if known
         */
        "workbench.action.files.newUntitledFile"(New_Untitled_Text_File_arguments: unknown): void;
        /**
         * Install the given extension
         * @param extensionIdOrVSIXUri Extension id or VSIX resource uri
         * @param options Options for installing the extension. Object with the following properties: installOnlyNewlyAddedFromExtensionPackVSIX: When enabled, VS Code installs only newly added extensions from the extension pack VSIX. This option is considered only when installing VSIX.
         */
        "workbench.extensions.installExtension"(extensionIdOrVSIXUri: unknown, options?: unknown): void;
        /**
         * Uninstall the given extension
         * @param Id_of_the_extension_to_uninstall
         */
        "workbench.extensions.uninstallExtension"(Id_of_the_extension_to_uninstall: unknown): void;
        /**
         * Search for a specific extension
         * @param Query_to_use_in_search
         */
        "workbench.extensions.search"(Query_to_use_in_search: unknown): void;
        /**
         * Run Task
         * @param args Filters the tasks shown in the Quick Pick
         */
        "workbench.action.tasks.runTask"(args: unknown): void;
        /**
         * Open the issue reporter and optionally prefill part of the form.
         * @param options Data to use to prefill the issue reporter with.
         */
        "workbench.action.openIssueReporter"(options: unknown): void;
        /**
         * Open the issue reporter and optionally prefill part of the form.
         * @param options Data to use to prefill the issue reporter with.
         */
        "vscode.openIssueReporter"(options: unknown): void;
        /**
         * workbench.action.openLogFile
         * @param logFile
         */
        "workbench.action.openLogFile"(logFile: unknown): void;
        /**
         * Open the walkthrough.
         * @param walkthroughID ID of the walkthrough to open.
         * @param toSide Opens the walkthrough in a new editor group to the side.
         */
        "workbench.action.openWalkthrough"(walkthroughID: unknown, toSide: unknown): void;
    }

    export namespace commands {
        function executeCommand<T extends keyof KnownCommands>(command: T, ...rest: Parameters<KnownCommands[T]>): Thenable<Awaited<ReturnType<KnownCommands[T]>>>;
    }
}
