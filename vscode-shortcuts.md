# VS Code Custom Keybindings & Settings

This document lists useful VS Code keybindings and settings for customizing your workflow.

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
