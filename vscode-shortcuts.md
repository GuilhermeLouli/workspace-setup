# VSCode Custom Keybindings

This document lists useful VS Code keybindings and settings for customizing your workflow.

<br/>

## Step 0: Getting to keybindings.json

Simply press __Ctrl+Shift+P__, then type __"Open Keyboard Shortcuts (JSON)'__.  
If the file is empty, you need to add an array inside, before adding any shortcut.

<br/>

__keybinds.json__ example:
```jsonc
[
  //your shortcuts go here
]
```

<br/>

## Adding shortcuts

This is a list of useful shortcuts. If you need a list of all shortcuts, check [vs-code-default-keybindings](https://github.com/codebling/vs-code-default-keybindings).

### Collapse Explorer

Shortcut equivalent to clicking the "Collapse Folders in Explorer" button.

```jsonc
  {
    "key": "ctrl+shift+alt+q",
    "command": "workbench.files.action.collapseExplorerFolders",
    "when": "explorerViewletVisible"
  },
```

### Save Without Formatting

Lets you save a file without triggering formatting or indentation.

```jsonc
  {
    "key": "ctrl+alt+s",
    "command": "workbench.action.files.saveWithoutFormatting"
  },
```

### Tab behavior

By default, pressing __Ctrl+Shift+Tab__ cycles to the previously used tab.  
This setup changes it so __Ctrl+Tab__ and __Ctrl+Shift+Tab__ cycle through tabs in the order they appear on the tab bar.

```jsonc
   {
     "key": "ctrl+tab",
     "command": "workbench.action.nextEditor"
   },
   {
     "key": "ctrl+shift+tab",
     "command": "workbench.action.previousEditor"
   },
```
