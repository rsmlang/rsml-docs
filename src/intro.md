# Introduction

Rsml (Roblox Styling Markup Language) is a declarative styling language for the roblox ecosystem which is designed to be transpiled to instances that inherit from [StyleBase](https://create.roblox.com/docs/reference/engine/classes/StyleBase).


## Why Use Rsml?
Unlike Roblox's Style instances, Rsml can be stored in local file systems which means it can be used in workflows involving version control. Developers who would prefer to write styles instead of relying on a visual based solution would benefit as well.


## Installation
Currently The only way to use Rsml is via a forked Rojo server and plugin found here: https://github.com/rsmlang/rojo-rsml.



## Example

::: code-group
```rsml:line-numbers [Styles.rsml]
@derive "./Globals.rsml"
@derive "./Macros.rsml"

TextButton {
	Size = udim2 (auto - 15px + 1%, auto + 2% - 20px),
	BackgroundColor3 = $ColorAccent,
	TextColor3 = $ColorTextTitle,
	!HorizontalPadding = 14px,
	!VerticalPadding = 10px,
	!CornerRadius = 100px
}
```

```rsml:line-numbers [Globals.rsml]
$ColorAccent = #005AC5,
$ColorTextTitle = tw:slate:50,
$Font = font (16658221428, semibold),
$TextSize = 14,

TextButton {
	TextSize = $TextSize,
	FontFace = $Font,
}

TextLabel {
	TextSize = $TextSize,
	FontFace = $Font,
}

TextBox {
	TextSize = $TextSize,
	FontFace = $Font,
}
```

```rsml:line-numbers [Macros.rsml]
@macro HorizontalPadding (padding: udim = 0px) {
    ::UIPadding[paddingMacro] {
        PaddingLeft = $!padding,
        PaddingRight = $!padding,
    }
}

@macro VerticalPadding (padding: udim = 0px) {
    ::UIPadding[paddingMacro] {
        PaddingTop = $!padding,
        PaddingBottom = $!padding,
    }
}

@macro CornerRadius (padding: udim = 0px) {
    ::UICorner[cornerRadiusMacro] {
        CornerRadius = $!padding,
    }
}
```

```luau:line-numbers [Main.luau]
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