# Introduction

Rsml (Roblox Styling Markup Language) is a declarative styling language for the roblox ecosystem which is designed to be transpiled to instances that inherit from [StyleBase](https://create.roblox.com/docs/reference/engine/classes/StyleBase).

To enable the Roblox StyleSheet's feature you will need to set the following fflags:
```json
{
	// Enables styling everywhere.
	"FFlagEnableStylingEverywhere": "true",

	// Enables the Style Editor plugin.
	"FFlagEnableStyleEditor": "true",

	// This changes how the EditTree Component works, and it’s required in order for the Style Editor plugin to work.
	"FFlagDevFrameworkEditTreeItemIdSupport": "true",
	
	// Required so you can use `:ResetPropertyToDefault()` and `:IsPropertyModified()`.
	"FFlagEnableModifiedPropertyLuaApis": "true"

}
```





## Why Use Rsml?
Unlike Roblox's Style instances, Rsml can be stored in local file systems which means it can be used in workflows involving version control. Developers who would prefer to write styles instead of relying on a visual based solution would benefit as well.





## Installation
Currently The only way to use Rsml is via a forked Rojo server and plugin found here: https://github.com/rsmlang/rojo-rsml.
Rsml also has a vs code extension which provides syntax highlighting to .rsml files: https://github.com/rsmlang/rsml-vsc-ext.





## Example

::: code-group
```rsml:line-numbers [./Styles.rsml]
@derive "./Globals.rsml";
@derive "./Macros.rsml";

TextButton {
	Size = udim2 (15px + 1%, 2% - 20px);
	AutomaticSize = :XY;
	BackgroundColor3 = $ColorAccent;
	TextColor3 = $ColorTextTitle;
	!HorizontalPadding = 14px;
	!VerticalPadding = 10px;
	!CornerRadius = 100px
}
```

```rsml:line-numbers [./Globals.rsml]
$ColorAccent = #005AC5;
$ColorTextTitle = tw:slate:50;
$Font = font (16658221428, "SemiBold");
$TextSize = 14;

TextButton {
	TextSize = $TextSize;
	FontFace = $Font
}

TextLabel {
	TextSize = $TextSize;
	FontFace = $Font
}

TextBox {
	TextSize = $TextSize;
	FontFace = $Font
}
```

```rsml:line-numbers [./Macros.rsml]
@macro HorizontalPadding (padding: udim = 0px) {
    ::UIPadding {
        PaddingLeft = $!padding;
        PaddingRight = $!padding
    }
}

@macro VerticalPadding (padding: udim = 0px) {
    ::UIPadding {
        PaddingTop = $!padding;
        PaddingBottom = $!padding
    }
}

@macro CornerRadius (padding: udim = 0px) {
    ::UICorner {
        CornerRadius = $!padding
    }
}
```

```luau:line-numbers [./Main.luau]
local Styles = require(script.Parent.Styles);

local Gui = Instance.new("ScreenGui");
Gui.Parent = game:GetService("Players").LocalPlayer.PlayerGui;

local Btn = Instance.new("TextButton");
Btn.Parent = Gui;

local Link = Instance.new("StyleLink");
Link.StyleSheet = Styles;
Link.Parent = Gui;
```
:::





## Sourcemaps

By default Rojo omits all non-scripts from sourcemaps, so you will need to use the `--include-non-scripts` argument so that StyleSheet, StyleRule and StyleDerive Instances are included:

```
rojo sourcemap --include-non-scripts
```